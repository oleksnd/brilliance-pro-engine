// lib/constants.js (v4.1 - Corrected Architecture)

// --- MIDI-константы ---
export const PPQN = 480;

export const NOTE_MAP = {
    'C0': 12, 'C#0': 13, 'D0': 14, 'D#0': 15, 'E0': 16, 'F0': 17, 'F#0': 18, 'G0': 19, 'G#0': 20, 'A0': 21, 'A#0': 22, 'B0': 23,
    'C1': 24, 'C#1': 25, 'D1': 26, 'D#1': 27, 'E1': 28, 'F1': 29, 'F#1': 30, 'G1': 31, 'G#1': 32, 'A1': 33, 'A#1': 34, 'B1': 35,
    'C2': 36, 'C#2': 37, 'D2': 38, 'D#2': 39, 'E2': 40, 'F2': 41, 'F#2': 42, 'G2': 43, 'G#2': 44, 'A2': 45, 'A#2': 46, 'B2': 47,
    'C3': 48, 'C#3': 49, 'D3': 50, 'D#3': 51, 'E3': 52, 'F3': 53, 'F#3': 54, 'G3': 55, 'G#3': 56, 'A3': 57, 'A#3': 58, 'B3': 59,
    'C4': 60, 'C#4': 61, 'D4': 62, 'D#4': 63, 'E4': 64, 'F4': 65, 'F#4': 66, 'G4': 67, 'G#4': 68, 'A4': 69, 'A#4': 70, 'B4': 71,
    'C5': 72, 'C#5': 73, 'D5': 74, 'D#5': 75, 'E5': 76, 'F5': 77, 'F#5': 78, 'G5': 79, 'G#5': 80, 'A5': 81, 'A#5': 82, 'B5': 83,
    'C6': 84, 'C#6': 85, 'D6': 86, 'D#6': 87, 'E6': 88, 'F6': 89, 'F#6': 90, 'G6': 91, 'G#6': 92, 'A6': 93, 'A#6': 94, 'B6': 95,
    'C7': 96, 'C#7': 97, 'D7': 98, 'D#7': 99, 'E7': 100, 'F7': 101, 'F#7': 102, 'G7': 103, 'G#7': 104, 'A7': 105, 'A#7': 106, 'B7': 107,
    'C8': 108, 'C#8': 109, 'D8': 110, 'D#8': 111, 'E8': 112, 'F8': 113, 'F#8': 114, 'G8': 115, 'G#8': 116, 'A8': 117, 'A#8': 118, 'B8': 119
};

export const DRUM_MAP = {
    'kick': 36, 'snare': 38, 'hat': 42, 'openhat': 46, 'clap': 39,
    'tom1': 48, 'tom2': 45, 'ride': 51, 'crash': 49
};

// ======================================================
// === НОВАЯ СТРУКТУРА ДЛЯ UI И ГЕНЕРАТОРА ===
// ======================================================

// 1. Категории инструментов для <select>
export const INSTRUMENT_CATEGORIES = [
    "808s", "Brass", "Drum Kits", "Drum Pads", "Electric Basses", "Guitars",
    "Keyboards", "Leads", "Organs", "Pads", "Percussion", "Strings",
    "Synth Basses", "Synths", "Voices", "Winds"
];

// 2. Жанры
export const GENRES = {
    "genre_hiphop": "Hip-Hop",
    "genre_trap": "Trap",
    "genre_pop": "Pop",
    "genre_rock": "Rock",
    "genre_edm": "EDM",
    "genre_lofi": "Lo-Fi",
    "genre_funk": "Funk",
    "genre_jazz": "Jazz",
    "genre_cinematic": "Cinematic",
    "genre_synthwave": "Synthwave",
    "genre_phonk": "Phonk"
};

// 3. Настроения
export const MOODS = {
    "mood_happy": "Happy",
    "mood_sad": "Sad",
    "mood_epic": "Epic",
    "mood_dark": "Dark",
    "mood_dreamy": "Dreamy",
    "mood_groovy": "Groovy",
    "mood_tense": "Tense",
    "mood_mystic": "Mystic"
};

// 4. Словарь гамм
export const SCALES_DICTIONARY = {
    'major_happy':      { name: "Major (Happy, Bright)",      intervals: [0, 2, 4, 5, 7, 9, 11] },
    'minor_sad':        { name: "Minor (Sad, Emotional)",     intervals: [0, 2, 3, 5, 7, 8, 10] },
    'dorian_mystic':    { name: "Dorian (Mystic, Jazzy)",     intervals: [0, 2, 3, 5, 7, 9, 10] },
    'phrygian_dark':    { name: "Phrygian (Dark, Spanish)",   intervals: [0, 1, 3, 5, 7, 8, 10] },
    'lydian_bright':    { name: "Lydian (Bright, Dreamy)",    intervals: [0, 2, 4, 6, 7, 9, 11] },
    'mixolydian_soul':  { name: "Mixolydian (Soul, Bluesy)",  intervals: [0, 2, 4, 5, 7, 9, 10] },
    'aeolian_epic':     { name: "Aeolian (Epic, Natural Minor)", intervals: [0, 2, 3, 5, 7, 8, 10] },
    'locrian_unstable': { name: "Locrian (Unstable, Tense)",  intervals: [0, 1, 3, 5, 6, 8, 10] },
    'harmonic_tense':   { name: "Harmonic Minor (Tense, Dramatic)", intervals: [0, 2, 3, 5, 7, 8, 11] },
    'jazz_dreamy':      { name: "Melodic Minor (Jazz, Dreamy)",   intervals: [0, 2, 3, 5, 7, 9, 11] },
    'blues_groovy':     { name: "Blues (Groovy, Raw)",            intervals: [0, 3, 5, 6, 7, 10] },
    'bebop_complex':    { name: "Bebop Dominant (Complex, Jazzy)", intervals: [0, 2, 4, 5, 7, 9, 10, 11] },
    'pentatonic_open':  { name: "Pentatonic Major (Open, Simple)", intervals: [0, 2, 4, 7, 9] },
    'penta_minor_moody':{ name: "Pentatonic Minor (Moody, Rock)", intervals: [0, 3, 5, 7, 10] }
};

// 5. Пути к файлам формул
export const PRESET_FILES = {
    "808s": "./lib/presets/808s.js",
    "Brass": "./lib/presets/brass.js",
    "Drum Kits": "./lib/presets/drum-kits.js",
    "Drum Pads": "./lib/presets/drum-pads.js",
    "Electric Basses": "./lib/presets/electric-basses.js",
    "Guitars": "./lib/presets/guitars.js",
    "Keyboards": "./lib/presets/keyboards.js",
    "Leads": "./lib/presets/leads.js",
    "Organs": "./lib/presets/organs.js",
    "Pads": "./lib/presets/pads.js",
    "Percussion": "./lib/presets/percussion.js",
    "Strings": "./lib/presets/strings.js",
    "Synth Basses": "./lib/presets/synth-basses.js",
    "Synths": "./lib/presets/synths.js",
    "Voices": "./lib/presets/voices.js",
    "Winds": "./lib/presets/winds.js"
};
