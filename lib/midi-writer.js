// lib/midi-writer.js (v2.0 - Dynamic Channel Assignment by Manus)

// Импортируем PPQN (Pulses Per Quarter Note) из констант
import { PPQN } from './constants.js';

// Карта "заводских" инструментов с их предпочтительными программами и каналами
const INSTRUMENT_MAP = {
    'drums': { program: 0, channel: 9 },
    'percussion': { program: 0, channel: 9 }, // Ударные всегда на канале 9
    'pads': { program: 88, channel: 0 },
    'keys': { program: 0, channel: 1 },
    'keyboards': { program: 0, channel: 1 },
    'synth': { program: 80, channel: 3 },
    'leads': { program: 80, channel: 3 },
    'bass': { program: 32, channel: 4 },
    'piano': { program: 0, channel: 5 },
    'guitar': { program: 24, channel: 6 },
    'strings': { program: 48, channel: 7 },
    '808s': { program: 33, channel: 8 },
    'brass': { program: 61, channel: 10 },
    'organs': { program: 16, channel: 11 },
    'synths': { program: 81, channel: 12 },
    'voices': { program: 52, channel: 13 },
    'winds': { program: 73, channel: 14 }
};

const DEFAULT_TEMPO = 120; // BPM

// --- Вспомогательные функции для работы с бинарными данными (без изменений) ---
function writeUint32BE(num) {
    return [(num >> 24) & 0xFF, (num >> 16) & 0xFF, (num >> 8) & 0xFF, num & 0xFF];
}

function writeUint16BE(num) {
    return [(num >> 8) & 0xFF, num & 0xFF];
}

function encodeVLQ(value) {
    if (value === 0) return [0];
    let buffer = [];
    let temp = value;
    while (true) {
        buffer.unshift(temp & 0x7F);
        temp >>= 7;
        if (temp === 0) break;
    }
    for (let i = 0; i < buffer.length - 1; i++) {
        buffer[i] |= 0x80;
    }
    return buffer;
}

function base64ArrayBuffer(arrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(arrayBuffer);
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

// --- Основная функция генерации MIDI ---
export async function generateMidiFile(noteEvents) {
    const allMidiEvents = [];

    // 1. Мета-событие: Установка темпа
    const microsecondsPerBeat = Math.floor(60000000 / DEFAULT_TEMPO);
    allMidiEvents.push({
        tick: 0, type: 'meta', subtype: 0x51,
        data: [(microsecondsPerBeat >> 16) & 0xFF, (microsecondsPerBeat >> 8) & 0xFF, microsecondsPerBeat & 0xFF]
    });

    // --- НОВЫЙ БЛОК: Умное назначение каналов ---
    const instrumentChannelMap = new Map(); // Хранит финальное назначение: 'instrumentName' -> channel
    const assignedChannels = new Set();     // Хранит уже занятые каналы

    // Сначала "резервируем" все каналы из нашей заводской карты
    for (const instrName in INSTRUMENT_MAP) {
        assignedChannels.add(INSTRUMENT_MAP[instrName].channel);
    }

    let nextAvailableChannel = 0;
    const getChannelForInstrument = (instrumentName) => {
        // Если канал уже был назначен, просто возвращаем его
        if (instrumentChannelMap.has(instrumentName)) {
            return instrumentChannelMap.get(instrumentName);
        }

        // Если инструмент есть в "заводской" карте, используем его канал
        if (INSTRUMENT_MAP[instrumentName]) {
            const channel = INSTRUMENT_MAP[instrumentName].channel;
            instrumentChannelMap.set(instrumentName, channel);
            return channel;
        }

        // Если инструмент НЕИЗВЕСТНЫЙ, ищем для него ПЕРВЫЙ СВОБОДНЫЙ канал
        while (assignedChannels.has(nextAvailableChannel)) {
            nextAvailableChannel++;
            if (nextAvailableChannel > 15) {
                console.warn("All MIDI channels are in use. Re-using channel 0 for " + instrumentName);
                instrumentChannelMap.set(instrumentName, 0);
                return 0; // Возвращаем канал 0 как запасной вариант
            }
        }
        
        const newChannel = nextAvailableChannel;
        instrumentChannelMap.set(instrumentName, newChannel); // Запоминаем назначение
        assignedChannels.add(newChannel); // "Резервируем" новый канал
        return newChannel;
    };

    // 2. Создаем события смены программы (Program Change)
    const channelsWithProgramSet = new Set();
    for (const ev of noteEvents) {
        const channel = getChannelForInstrument(ev.instrument);
        if (!channelsWithProgramSet.has(channel)) {
            // Программа по умолчанию - 0 (пианино), если инструмент неизвестный
            const program = (INSTRUMENT_MAP[ev.instrument] || { program: 0 }).program;
            
            // Для канала ударных (9) смена программы не нужна
            if (channel !== 9) {
                allMidiEvents.push({
                    tick: 0, type: 'channel', subtype: 0xC0,
                    channel: channel, program: program
                });
            }
            channelsWithProgramSet.add(channel);
        }
    }

    // 3. Добавляем все события Note On и Note Off
    for (const ev of noteEvents) {
        const channel = instrumentChannelMap.get(ev.instrument); // Получаем уже назначенный канал
        const velocity = Math.min(127, Math.max(0, ev.velocity || 100));
        
        // Note On
        allMidiEvents.push({
            tick: ev.tick, type: 'channel', subtype: 0x90,
            channel: channel, note: ev.note, velocity: velocity
        });
        // Note Off
        allMidiEvents.push({
            tick: ev.tick + ev.duration, type: 'channel', subtype: 0x80,
            channel: channel, note: ev.note, velocity: 0 // velocity 0 для Note Off
        });
    }

    // 4. Сортируем ВСЕ события по времени (критически важно)
    allMidiEvents.sort((a, b) => a.tick - b.tick);

    // 5. Собираем трековый чанк из байтов
    const trackBytes = [];
    let lastTick = 0;
    for (const event of allMidiEvents) {
        const deltaTick = event.tick - lastTick;
        trackBytes.push(...encodeVLQ(deltaTick));

        if (event.type === 'meta') {
            trackBytes.push(0xFF, event.subtype, event.data.length, ...event.data);
        } else if (event.type === 'channel') {
            const statusByte = event.subtype | event.channel;
            trackBytes.push(statusByte);
            if (event.subtype === 0x90 || event.subtype === 0x80) {
                trackBytes.push(event.note, event.velocity);
            } else if (event.subtype === 0xC0) {
                trackBytes.push(event.program);
            }
        }
        lastTick = event.tick;
    }
    // Добавляем мета-событие "Конец трека"
    trackBytes.push(...encodeVLQ(0), 0xFF, 0x2F, 0x00);

    // 6. Собираем финальный MIDI-файл (заголовок + трек)
    const headerBytes = [
        ...[0x4D, 0x54, 0x68, 0x64], ...writeUint32BE(6),       // 'MThd' + длина заголовка
        ...writeUint16BE(0), ...writeUint16BE(1), ...writeUint16BE(PPQN) // Формат 0, 1 трек, разрешение
    ];
    const trackHeaderBytes = [
        ...[0x4D, 0x54, 0x72, 0x6B], ...writeUint32BE(trackBytes.length) // 'MTrk' + длина трека
    ];
    const midiBytes = [...headerBytes, ...trackHeaderBytes, ...trackBytes];

    // 7. Кодируем в Base64 Data URI для скачивания
    const midiArray = new Uint8Array(midiBytes);
    const base64 = base64ArrayBuffer(midiArray.buffer);
    return `data:audio/midi;base64,${base64}`;
}
