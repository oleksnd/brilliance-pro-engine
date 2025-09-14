// lib/generator.js (v2.1 - Stricter & Smarter)

import { SCALES_DICTIONARY } from './constants.js';

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const PLACEHOLDER_MAP = {
    'ROOT': 1, 'FLAT_II': 1.5, 'SECOND': 2, 'THIRD': 3, 'FOURTH': 4, 
    'FLAT_V': 4.5, 'FIFTH': 5, 'FLAT_VI': 5.5, 'SIXTH': 6, 'SEVENTH': 7
};

function getNoteFromScale(degree, rootNote, scaleIntervals, octave) {
    const rootNoteIndex = NOTES.indexOf(rootNote);
    if (rootNoteIndex === -1) return 'C4';

    let interval;
    if (degree === 1.5) { interval = scaleIntervals[1] - 1; }
    else if (degree === 4.5) { interval = scaleIntervals[4] - 1; }
    else if (degree === 5.5) { interval = scaleIntervals[5] - 1; }
    else { interval = scaleIntervals[degree - 1]; }
    
    if (interval === undefined) return `${rootNote}${octave}`;

    const finalNoteIndex = (rootNoteIndex + interval) % 12;
    const finalNoteName = NOTES[finalNoteIndex];
    
    return `${finalNoteName}${octave}`;
}

/**
 * Генерирует ОДНУ случайную музыкальную идею.
 * @param {Array<object>} formulasForStyle - Массив формул ТОЛЬКО для выбранного стиля.
 * @param {string} scaleId - ID выбранной гаммы.
 * @param {string} complexity - 'simple' или 'complex'.
 * @returns {string|null} Готовый паттерн или null.
 */
export function generateSingleIdea(formulasForStyle, scaleId, complexity) {
    if (!formulasForStyle || formulasForStyle.length === 0) return null;

    const scaleInfo = SCALES_DICTIONARY[scaleId];
    if (!scaleInfo) return null;

    // 1. Фильтруем формулы по выбранной сложности
    const suitableFormulas = formulasForStyle.filter(f => f.complexity === complexity);
    
    // *** ГЛАВНОЕ ИСПРАВЛЕНИЕ: Если нет подходящих, возвращаем null, а не берем любую ***
    if (suitableFormulas.length === 0) {
        return null; 
    }

    // 2. Выбираем случайную формулу, тональность и октаву
    const formula = suitableFormulas[Math.floor(Math.random() * suitableFormulas.length)];
    const rootNote = NOTES[Math.floor(Math.random() * NOTES.length)];
    const octave = 2 + Math.floor(Math.random() * 2);

    // 3. Заменяем плейсхолдеры
    let finalPattern = formula.pattern;
    const placeholdersInPattern = finalPattern.match(/[A-Z_]+/g) || [];
    
    for (const placeholder of placeholdersInPattern) {
        let currentOctave = octave;
        let basePlaceholder = placeholder;

        if (placeholder.endsWith('_HI')) {
            currentOctave++;
            basePlaceholder = placeholder.replace('_HI', '');
        } else if (placeholder.endsWith('_LO')) {
            currentOctave--;
            basePlaceholder = placeholder.replace('_LO', '');
        }

        const degree = PLACEHOLDER_MAP[basePlaceholder];
        if (degree) {
            const note = getNoteFromScale(degree, rootNote, scaleInfo.intervals, currentOctave);
            finalPattern = finalPattern.replace(new RegExp(placeholder, 'g'), note);
        }
    }
    
    return finalPattern;
}
