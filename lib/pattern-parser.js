// lib/pattern-parser.js (v3.1 - Refactored & Expanded)

// --- Импорты констант ---
import { NOTE_MAP, DRUM_MAP, PPQN } from './constants.js';

// --- Ядро Музыкальной Теории ---

// Базовые ноты и их MIDI-индексы
const NOTES = {
    'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5,
    'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11
};

// Обратный словарь для построения названий нот
const INDEX_TO_NOTE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// "Рецепты" базовых аккордов (трезвучия и основы)
const BASE_RECIPES = {
    '': [0, 4, 7], 'maj': [0, 4, 7], 'M': [0, 4, 7],
    'm': [0, 3, 7], 'min': [0, 3, 7],
    'aug': [0, 4, 8],
    'dim': [0, 3, 6],
    'sus2': [0, 2, 7],
    'sus4': [0, 5, 7],
    '5': [0, 7]
};

// Модификаторы, которые добавляют или изменяют интервалы в базовых рецептах
const INTERVAL_MODIFIERS = {
    // --- СЕПТАККОРДЫ ---
    '7': [10], 'maj7': [11], 'M7': [11], 'm7': [10], 'dim7': [9],
    // --- РАСШИРЕННЫЕ АККОРДЫ (Нонаккорды, Ундецимаккорды и т.д.) ---
    '9': [14], 'maj9': [14], 'm9': [14], 'b9': [13], '#9': [15],
    '11': [17], 'm11': [17], '#11': [18],
    '13': [21], 'b13': [20],
    // --- ДОБАВОЧНЫЕ НОТЫ ---
    '6': [9],
    'add2': [2], 'add4': [5], 'add9': [14],
    '6/9': [9, 14],
    // --- ЗАДЕРЖАННЫЕ АККОРДЫ ---
    '7sus4': [5, 10],
    // --- ИЗМЕНЕННЫЕ НОТЫ (Альтерации) ---
    'b5': [-1, 6],  // -1 - специальный флаг для удаления квинты
    '#5': [-1, 8],  // -1 - специальный флаг для удаления квинты
    // --- ПОЛУУМЕНЬШЕННЫЕ ---
    'm7b5': [3, 6, 10], // Задаем явно, чтобы избежать конфликтов с 'm' и 'b5'
    'ø': [3, 6, 10]     // Альтернативное имя
};

/**
 * Преобразует название аккорда в массив MIDI-нот.
 * @param {string} chordName - Название аккорда (например, "Cmaj7(no root)", "G#m9b5", "Am7/G").
 * @param {number} octave - Базовая октава.
 * @returns {string[]} Массив названий нот (например, ["C4", "E4", "G4"]).
 */
function getChordNotes(chordName, octave = 4) {
    // 1. Подготовка: убираем скобки и ищем специальные модификаторы
    let noRoot = false, no5 = false;
    let cleanChordName = chordName.replace(/[()]/g, '');

    if (cleanChordName.includes('no root')) {
        noRoot = true;
        cleanChordName = cleanChordName.replace('no root', '').trim();
    }
    if (cleanChordName.includes('no 5')) {
        no5 = true;
        cleanChordName = cleanChordName.replace('no 5', '').trim();
    }

    // 2. Обработка слэш-аккордов (бас отдельно)
    const slashParts = cleanChordName.split('/');
    const mainChordName = slashParts[0];
    const bassNoteName = slashParts.length > 1 ? slashParts[1] : null;

    // 3. Определяем тонику (основную ноту) аккорда
    let rootNoteName;
    if (mainChordName.length > 1 && (mainChordName[1] === '#' || mainChordName[1] === 'b')) {
        rootNoteName = mainChordName.substring(0, 2);
    } else {
        rootNoteName = mainChordName.substring(0, 1);
    }
    const rootMidiIndex = NOTES[rootNoteName];
    if (rootMidiIndex === undefined) {
        console.warn(`Неизвестная основная нота: ${rootNoteName} в аккорде "${chordName}". Возвращаем как есть.`);
        return [chordName]; // Возвращаем исходное название, чтобы не ломать все
    }

    // 4. "Умный" парсер суффиксов
    let suffix = mainChordName.substring(rootNoteName.length);
    let intervals = [];

    // Сначала ищем базовый рецепт (трезвучие)
    const baseNamesInOrder = Object.keys(BASE_RECIPES).sort((a, b) => b.length - a.length);
    let baseFound = false;
    for (const base of baseNamesInOrder) {
        if (base === '') continue; // Пустую строку обработаем в конце
        if (suffix.startsWith(base)) {
            intervals.push(...BASE_RECIPES[base]);
            suffix = suffix.substring(base.length);
            baseFound = true;
            break;
        }
    }
    if (!baseFound) {
        intervals.push(...BASE_RECIPES['']); // Если ничего не найдено, считаем аккорд мажорным
    }

    // Затем ищем модификаторы в оставшейся части суффикса
    const modifierNamesInOrder = Object.keys(INTERVAL_MODIFIERS).sort((a, b) => b.length - a.length);
    while (suffix.length > 0) {
        let modFound = false;
        for (const mod of modifierNamesInOrder) {
            if (suffix.startsWith(mod)) {
                const modIntervals = INTERVAL_MODIFIERS[mod];
                if (modIntervals[0] === -1) { // Специальный флаг для альтерации квинты
                    intervals = intervals.filter(i => i !== 7); // Удаляем чистую квинту
                    intervals.push(modIntervals[1]); // Добавляем измененную
                } else {
                    intervals.push(...modIntervals);
                }
                suffix = suffix.substring(mod.length);
                modFound = true;
                break;
            }
        }
        if (!modFound) {
            console.warn(`Неизвестный модификатор аккорда: "${suffix}" в "${chordName}".`);
            break;
        }
    }

    // 5. Применяем модификаторы (no root, no 5)
    if (no5) intervals = intervals.filter(i => i !== 7);
    if (noRoot) intervals = intervals.filter(i => i !== 0);

    // 6. Строим ноты из интервалов и обрабатываем слэш-бас
    const uniqueIntervals = [...new Set(intervals)].sort((a, b) => a - b);
    let finalNotes = uniqueIntervals.map(interval => {
        const noteIndex = rootMidiIndex + interval;
        const finalOctave = octave + Math.floor(noteIndex / 12);
        const noteInOctave = noteIndex % 12;
        return INDEX_TO_NOTE[noteInOctave] + finalOctave;
    });

    if (bassNoteName) {
        const bassNoteIndex = NOTES[bassNoteName];
        if (bassNoteIndex !== undefined) {
            const lowestNoteInChord = finalNotes.length > 0 ? NOTE_MAP[finalNotes[0]] : rootMidiIndex + (12 * octave);
            const bassOctave = bassNoteIndex > lowestNoteInChord % 12 ? Math.floor(lowestNoteInChord / 12) - 1 : Math.floor(lowestNoteInChord / 12);
            const finalBassNote = bassNoteName + bassOctave;
            
            // Заменяем самую нижнюю ноту аккорда на указанный бас
            if (finalNotes.length > 0) {
                finalNotes[0] = finalBassNote;
            } else {
                finalNotes.push(finalBassNote);
            }
        }
    }

    return finalNotes;
}


/**
 * Главная экспортируемая функция. Парсит весь текст паттерна.
 */
export function parsePatternText(text) {
    const noteEvents = [];
    const lines = text.split('\n').filter(line => line.trim() && !line.trim().startsWith('#'));

    for (const line of lines) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) {
            console.warn(`Invalid line (missing colon): "${line}". Skipping.`);
            continue;
        }

        const instrName = line.slice(0, colonIdx).trim().toLowerCase();
        const patternStr = line.slice(colonIdx + 1).trim();

        if (DRUM_MAP[instrName]) {
            parseDrumPattern(instrName, patternStr, noteEvents);
        } else {
            parseMelodicPattern(instrName, patternStr, noteEvents);
        }
    }

    if (noteEvents.length === 0) {
        // Не бросаем ошибку, а возвращаем пустой массив, чтобы не ломать приложение при пустом вводе
        console.warn('No events could be parsed. Check your input format.');
        return [];
    }
    
    noteEvents.sort((a, b) => a.tick - b.tick);
    return noteEvents;
}

function parseDrumPattern(instrName, patternStr, noteEvents) {
    const beats = patternStr.split(',').map(s => parseFloat(s.trim())).filter(t => !isNaN(t));
    const midiNote = DRUM_MAP[instrName];
    for (const beat of beats) {
        noteEvents.push({
            tick: (beat - 1) * (PPQN / 4),
            note: midiNote,
            velocity: 100,
            duration: PPQN / 8,
            instrument: 'drums'
        });
    }
}

function parseMelodicPattern(instrName, patternStr, noteEvents) {
    // Улучшенное регулярное выражение для поиска блоков
    const blocks = patternStr.match(/[\d.]+\([^)]+\)/g) || [];
    for (const block of blocks) {
        const match = block.match(/([\d.]+)\(([^:]+):?([^)]*)\)/);
        if (!match) continue;

        const beat = parseFloat(match[1]);
        const notesStr = match[2].trim();
        const durationAndVelocity = match[3] || '4'; // Может содержать и длительность, и громкость

        // --- Парсинг длительности и громкости ---
        const durationMap = { '1': PPQN * 4, '2': PPQN * 2, '4': PPQN, '8': PPQN / 2, '16': PPQN / 4, '32': PPQN / 8 };
        let duration = PPQN; // Длительность по умолчанию
        let velocity = 100; // Громкость по умолчанию

        durationAndVelocity.split(',').forEach(part => {
            const p = part.trim();
            if (p.startsWith('v')) {
                velocity = parseInt(p.substring(1), 10) || 100;
            } else if (durationMap[p]) {
                duration = durationMap[p];
            }
        });
        
        const tokens = notesStr.split(' ').map(s => s.trim()).filter(Boolean);
        let finalNotes = [];

        for (const token of tokens) {
            // *** КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ ***
            // Это регулярное выражение теперь ищет ТОЛЬКО одиночные ноты с октавой (C4, F#5)
            // и не будет ошибочно срабатывать на аккорды типа G13.
            if (/^[A-G][#b]?\d$/.test(token)) {
                finalNotes.push(token);
            } else {
                // Все остальное (Cmaj7, G13, Am) отправляется в мощный парсер аккордов
                finalNotes.push(...getChordNotes(token, 4));
            }
        }

        for (const noteName of finalNotes) {
            const midiNote = NOTE_MAP[noteName];
            if (midiNote === undefined) {
                console.warn(`Unknown note: "${noteName}" in instrument "${instrName}". Skipping.`);
                continue;
            }
            if (midiNote < 0 || midiNote > 127) {
                console.error(`Note ${noteName} (MIDI: ${midiNote}) is out of range. Skipping.`);
                continue;
            }

            noteEvents.push({
                tick: (beat - 1) * (PPQN / 4),
                note: midiNote,
                velocity: velocity,
                duration,
                instrument: instrName
            });
        }
    }
}
