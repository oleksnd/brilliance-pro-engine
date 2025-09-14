// popup.js (v4.0 - Final UX)

// --- Импорты ---
import { generateMidiFile } from './lib/midi-writer.js';
import { parsePatternText } from './lib/pattern-parser.js';
import { generateSingleIdea } from './lib/generator.js';
import { INSTRUMENT_CATEGORIES, GENRES, MOODS, SCALES_DICTIONARY, PRESET_FILES } from './lib/constants.js';

// --- Полный текст AI-промпта (для ручного режима) ---
const AI_PROMPT_TEXT = `
You are an expert music composer for a browser extension called "Brilliance Pro".
Your task is to create a rich, multi-bar musical phrase based on my request. You must strictly follow the syntax rules and musical concepts below. Your output must be ONLY the pattern text itself, with no additional explanations.

**--- SYNTAX RULES ---**

1.  **Format:** \`instrument_name: pattern_data\`.
2.  **Beat Grid:** The pattern is a grid that can be up to 4 bars long (64 beats).
    *   **Bar 1:** Beats 1-16
    *   **Bar 2:** Beats 17-32
    *   **Bar 3:** Beats 33-48
    *   **Bar 4:** Beats 49-64
3.  **Melody/Harmony:** Use note blocks \`beat(NOTES:duration)\`.
    *   Example for Bar 2: \`17(C4:4)\` is a C4 note on the first beat of the second bar.

**--- MUSICAL CONCEPTS & PHILOSOPHY ---**

Your primary goal is to create **complete, 2-bar or 4-bar musical phrases**, not short, single-bar loops. A good musical idea needs chord changes and development.

**1. CHORD PROGRESSIONS (The Key to Music):**
The most important concept. **DO NOT use the same chord for the whole pattern.** Create a progression by changing chords in each bar. A simple and effective progression is I-V-vi-IV (e.g., C - G - Am - F).

**2. ARPEGGIO & MELODY (The Key to Movement):**
Instead of playing a static chord, play its notes sequentially (arpeggiate) to create a melody. Spread the melody across multiple bars.

**3. RHYTHM & GROOVE:**
Use a variety of note durations (8th, 16th) and place notes on off-beats to create interesting, human-like rhythms.

**4. LAYERING & TEXTURE:**
Use multiple instruments (pads, keys, bass) to create a full, rich texture.

**--- ADVANCED CHORD VOCABULARY ---**
Use our rich chord library to create specific moods.
*   **Jazzy/Soulful:** \`9\`, \`13\`, \`m7b5\` (e.g., \`G13\`, \`Dm9\`, \`Bø\`)
*   **Complex Harmony:** Use slash chords for smooth basslines (\`C/G\`) and rootless voicings (\`Cmaj7(no root)\`).

**--- EXAMPLES OF EXCELLENT, MULTI-BAR RESPONSES ---**

**Request:** "A sad, 2-bar lo-fi hip hop piano loop."
**Your Response:**
# Sad 2-Bar Lo-Fi Piano
pads: 1(Am9:1), 17(G9:1)
keys: 1(A3:8), 5(C4:8), 9(E4:8), 13(G4:8), 17(G3:8), 21(B3:8), 25(D4:8), 29(F4:8)
kick: 1, 9, 17, 25
snare: 5, 13, 21, 29

**Request:** "A 4-bar cinematic string progression in C major."
**Your Response:**
# 4-Bar Cinematic Strings
strings: 1(Cmaj7:1), 17(G/B:1), 33(Am7:1), 49(Fmaj7:1)
piano: 1(C5:8), 5(E5:8), 9(G5:8), 17(G4:8), 21(B4:8), 25(D5:8), 33(A4:8), 37(C5:8), 41(E5:8), 49(F4:8), 53(A4:8), 57(C5:8)

---
Now, based on all these rules and concepts, please generate the following pattern for me:
`;

// === ОСНОВНОЙ КОД ===
document.addEventListener('DOMContentLoaded', () => {
    // --- Получение элементов UI ---
    const modeManualBtn = document.getElementById('mode-manual-btn');
    const modeGeneratorBtn = document.getElementById('mode-presets-btn');
    const generatorContainer = document.getElementById('presets-mode-container');
    const commandInput = document.getElementById('command-input');
    const generateMidiBtn = document.getElementById('generate-btn');
    const newIdeaBtn = document.getElementById('new-idea-btn');
    const newIdeaContainer = document.getElementById('new-idea-container');
    const clearBtn = document.getElementById('clear-btn');

    // Селекты и переключатели
    const instrumentSelect = document.getElementById('instrument-select');
    const styleTypeToggle = document.getElementById('style-type-toggle');
    const genreGroup = document.getElementById('genre-group');
    const moodGroup = document.getElementById('mood-group');
    const genreSelect = document.getElementById('genre-select');
    const moodSelect = document.getElementById('mood-select');
    const scaleSelect = document.getElementById('scale-select');
    const complexityToggle = document.getElementById('complexity-toggle');

    // --- Глобальное состояние ---
    let state = {};
    let currentFormulas = {};

    // --- Переключение режимов ---
    modeManualBtn.addEventListener('click', () => switchMode('manual'));
    modeGeneratorBtn.addEventListener('click', () => switchMode('generator'));

    function switchMode(mode) {
        if (mode === 'manual') {
            modeManualBtn.classList.add('active');
            modeGeneratorBtn.classList.remove('active');
            generatorContainer.style.display = 'none';
            newIdeaContainer.style.display = 'none';
            commandInput.readOnly = false;
            clearBtn.style.display = 'block';
        } else {
            modeGeneratorBtn.classList.add('active');
            modeManualBtn.classList.remove('active');
            generatorContainer.style.display = 'block';
            newIdeaContainer.style.display = 'block';
            commandInput.readOnly = true;
            clearBtn.style.display = 'none';
        }
        state.mode = mode;
        saveState();
    }

    // --- Инициализация UI ---
    function initialize() {
        // 1. Инструменты
        populateSelect(instrumentSelect, INSTRUMENT_CATEGORIES.reduce((acc, i) => ({...acc, [i]: i}), {}));
        
        // 2. Жанры и Настроения
        populateSelect(genreSelect, GENRES);
        populateSelect(moodSelect, MOODS);

        // 3. Гаммы
        populateSelect(scaleSelect, Object.keys(SCALES_DICTIONARY).reduce((acc, key) => ({...acc, [key]: SCALES_DICTIONARY[key].name}), {}));

        // 4. Восстановление состояния
        restoreState().then(() => {
            // 5. Привязка обработчиков
            instrumentSelect.addEventListener('change', handleSelectionChange);
            styleTypeToggle.addEventListener('click', handleToggle);
            genreSelect.addEventListener('change', handleSelectionChange);
            moodSelect.addEventListener('change', handleSelectionChange);
            scaleSelect.addEventListener('change', handleSelectionChange);
            complexityToggle.addEventListener('click', handleToggle);
            newIdeaBtn.addEventListener('click', generateNewIdea);
            generateMidiBtn.addEventListener('click', handleGenerateMidi);
            clearBtn.addEventListener('click', () => { commandInput.value = ''; });
            commandInput.addEventListener('input', () => { if(state.mode === 'manual') saveState(); });
        });
    }

    // --- Логика генерации ---
    async function handleSelectionChange() {
        updateStateFromUI();
        await loadFormulasIfNeeded();
        updateUIVisibility();
        saveState();
    }

  async function generateNewIdea() {
    updateStateFromUI(); // Убедимся, что состояние актуально
    if (!state.instrument || !state.scale || (!state.genre && !state.mood)) {
        alert("Please select an instrument, style (Genre/Mood), and scale first.");
        return;
    }
    
    // *** КЛЮЧЕВОЕ ИСПРАВЛЕНИЕ ЗДЕСЬ ***
    // Определяем ID стиля и берем из `currentFormulas` ТОЛЬКО нужный массив.
    const styleId = state.styleType === 'genre' ? state.genre : state.mood;
    const formulasForStyle = currentFormulas[styleId] || [];
    
    // Передаем в генератор отфильтрованный массив `formulasForStyle`.
    const pattern = generateSingleIdea(formulasForStyle, state.scale, state.complexity);
    
    if (pattern) {
        commandInput.value = `${state.instrument}: ${pattern}`;
    } else {
        // Теперь это сообщение будет появляться только если формул ДЕЙСТВИТЕЛЬНО нет.
        commandInput.value = `// No '${state.complexity}' formulas found for this combination. Try another style or complexity.`;
    }
    // Сохраняем результат в состояние.
    state.pattern = commandInput.value;
    saveState();
}


    // --- Вспомогательные функции ---
    function populateSelect(select, options, firstItemText = "-- Choose --") {
        select.innerHTML = `<option value="">${firstItemText}</option>`;
        Object.entries(options).forEach(([value, name]) => {
            const opt = document.createElement('option');
            opt.value = value;
            opt.textContent = name;
            select.appendChild(opt);
        });
    }

    function handleToggle(e) {
        if (e.target.tagName !== 'BUTTON') return;
        const parent = e.target.parentElement;
        parent.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        handleSelectionChange();
    }

  async function loadFormulasIfNeeded() {
    if (!state.instrument) {
        currentFormulas = {};
        return;
    };
    // Проверяем, нужно ли перезагружать (если инструмент изменился).
    if (state.instrument === state.loadedFormulasFor) return;

    const filePath = PRESET_FILES[state.instrument];
    if (filePath) {
        try {
            const module = await import(filePath);
            currentFormulas = module.default;
            state.loadedFormulasFor = state.instrument; // Запоминаем, для чего загрузили.
        } catch (e) {
            console.error(`Could not load formula file: ${filePath}`, e);
            currentFormulas = {};
        }
    } else {
        currentFormulas = {};
    }
}


    function updateUIVisibility() {
        const instrumentSelected = !!state.instrument;
        document.getElementById('style-type-group').style.display = instrumentSelected ? 'block' : 'none';
        
        if (instrumentSelected) {
            const isGenre = state.styleType === 'genre';
            genreGroup.style.display = isGenre ? 'block' : 'none';
            moodGroup.style.display = !isGenre ? 'block' : 'none';
        } else {
            genreGroup.style.display = 'none';
            moodGroup.style.display = 'none';
        }

        const styleSelected = instrumentSelected && (state.styleType === 'genre' ? !!state.genre : !!state.mood);
        document.getElementById('scale-group').style.display = styleSelected ? 'block' : 'none';
        document.getElementById('complexity-group').style.display = styleSelected ? 'block' : 'none';
    }

    // --- Состояние и хранилище ---
    function updateStateFromUI() {
        state.instrument = instrumentSelect.value;
        state.styleType = styleTypeToggle.querySelector('.active')?.dataset.type;
        state.genre = genreSelect.value;
        state.mood = moodSelect.value;
        state.scale = scaleSelect.value;
        state.complexity = complexityToggle.querySelector('.active')?.dataset.complexity;
        if (state.mode === 'manual') {
            state.pattern = commandInput.value;
        }
    }

    function updateUIFromState() {
        if (state.mode) switchMode(state.mode);
        if (state.instrument) instrumentSelect.value = state.instrument;
        if (state.styleType) styleTypeToggle.querySelector(`[data-type=${state.styleType}]`)?.click();
        if (state.genre) genreSelect.value = state.genre;
        if (state.mood) moodSelect.value = state.mood;
        if (state.scale) scaleSelect.value = state.scale;
        if (state.complexity) complexityToggle.querySelector(`[data-complexity=${state.complexity}]`)?.click();
        if (state.pattern) commandInput.value = state.pattern;
        updateUIVisibility();
    }

    function saveState() {
        updateStateFromUI(); // Всегда сохраняем актуальное состояние UI
        chrome.storage.local.set({ brillianceProState: state });
    }

    async function restoreState() {
        const result = await chrome.storage.local.get('brillianceProState');
        state = result.brillianceProState || { mode: 'manual', styleType: 'genre', complexity: 'simple' };
        await loadFormulasIfNeeded();
        updateUIFromState();
    }
    
    async function handleGenerateMidi() {
        const text = commandInput.value;
        if (!text.trim()) {
            alert('Pattern field is empty. Generate an idea or enter a pattern manually.');
            return;
        }
        try {
            const noteEvents = parsePatternText(text);
            if (noteEvents.length === 0) {
                alert("Could not parse the pattern. Please check the syntax.");
                return;
            }
            const midiDataUri = await generateMidiFile(noteEvents);
            const link = document.createElement('a');
            link.href = midiDataUri;
            link.download = 'brilliance-pro-pattern.mid';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('!!! MIDI Generation Error:', error);
            alert(`Error: ${error.message}\n\n(See developer console for details)`);
        }
    }

    initialize();
});
