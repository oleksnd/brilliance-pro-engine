// lib/presets/808s.js (v4.1 - Full & Complex)
// Содержит ПОЛНЫЙ набор формул для 808-х с параметром 'complexity'.

const formulas808s = {
  // ======================================================
  // === ЖАНРЫ (GENRES) ===
  // ======================================================

  "genre_hiphop": [
    { name: "Deep Groove", pattern: "1(ROOT:2), 17(FIFTH:2)", complexity: "simple" },
    { name: "Head Nod", pattern: "1(ROOT:4), 9(ROOT:8), 13(FOURTH:4)", complexity: "simple" },
    { name: "Syncopated Push", pattern: "1(ROOT:8), 6(ROOT:16), 9(FOURTH:4), 15(FOURTH:16)", complexity: "complex" },
    { name: "Laid Back", pattern: "1(ROOT:8), 7(ROOT:16), 11(FIFTH:4)", complexity: "complex" }
  ],

  "genre_trap": [
    { name: "Hard Hit", pattern: "1(ROOT:8), 9(ROOT:8), 17(FIFTH:8), 25(FIFTH:8)", complexity: "simple" },
    { name: "Dark Progression", pattern: "1(ROOT:2), 17(SIXTH:2), 33(FOURTH:2), 49(FIFTH:2)", complexity: "simple" },
    { name: "Classic Glide", pattern: "1(ROOT:4), 7(ROOT:8), 11(FIFTH:8), 13(ROOT_HI:4)", complexity: "complex" },
    { name: "Triplet Roll", pattern: "1(ROOT:4), 7(ROOT:16), 7.66(FIFTH:16), 8.33(ROOT:16), 13(ROOT:4)", complexity: "complex" }
  ],

  "genre_pop": [
    { name: "Four On The Floor", pattern: "1(ROOT:4), 5(ROOT:4), 9(ROOT:4), 13(ROOT:4)", complexity: "simple" },
    { name: "Heartbeat", pattern: "1(ROOT:4), 9(FIFTH:4), 17(SIXTH:4), 25(FOURTH:4)", complexity: "simple" },
    { name: "Driving 8ths", pattern: "1(ROOT:8), 3(ROOT:8), 5(ROOT:8), 7(ROOT:8)", complexity: "complex" }
  ],

  "genre_rock": [
    { name: "Indie Drive", pattern: "1(ROOT:8), 5(ROOT:8), 9(FOURTH:8), 13(FOURTH:8)", complexity: "simple" },
    { name: "Heavy Stomp", pattern: "1(ROOT:8), 3(ROOT:16), 4(ROOT:16), 9(FIFTH:4)", complexity: "complex" },
    { name: "Post-Punk Pulse", pattern: "1(ROOT:8), 3(ROOT:8), 5(ROOT:8), 7(ROOT:8), 9(ROOT:8), 11(ROOT:8), 13(ROOT:8), 15(ROOT:8)", complexity: "complex" }
  ],

  "genre_edm": [
    { name: "Progressive Root", pattern: "1(ROOT:4), 17(FIFTH:4), 33(SIXTH:4), 49(FOURTH:4)", complexity: "simple" },
    { name: "Future Bass Pulse", pattern: "1(ROOT:4), 5(ROOT:4), 9(FIFTH:4), 13(FIFTH:4)", complexity: "simple" },
    { name: "Trance Sub", pattern: "1(ROOT:8), 5(ROOT:8), 9(SIXTH:8), 13(SIXTH:8), 17(FOURTH:8), 21(FOURTH:8), 25(FIFTH:8), 29(FIFTH:8)", complexity: "complex" }
  ],

  "genre_lofi": [
    { name: "Warm Sub", pattern: "1(ROOT:2), 9(FIFTH:2)", complexity: "simple" },
    { name: "Side-chained Pulse", pattern: "1(ROOT:4), 5(ROOT:4), 9(FIFTH:4), 13(FIFTH:4)", complexity: "simple" },
    { name: "Walking Bass", pattern: "1(ROOT:8), 5(THIRD:8), 9(FIFTH:8), 13(SIXTH:8)", complexity: "complex" },
    { name: "Jazzy Turnaround", pattern: "1(ROOT:4), 5(FOURTH:4), 9(SEVENTH:4), 13(THIRD:4)", complexity: "complex" }
  ],

  "genre_funk": [
    { name: "One Chord Jam", pattern: "1(ROOT:8), 5(ROOT:8), 9(ROOT:8), 11(FLAT_V:8), 13(ROOT:8)", complexity: "simple" },
    { name: "Syncopated Slap", pattern: "1(ROOT:8), 7(ROOT:8), 9(FIFTH:4), 15(SEVENTH:8)", complexity: "complex" },
    { name: "Off-Beat Groove", pattern: "3(ROOT:8), 7(FIFTH:8), 11(ROOT:8), 15(SEVENTH:8)", complexity: "complex" }
  ],

  "genre_jazz": [
    { name: "2-5-1 Foundation", pattern: "1(SECOND:2), 17(FIFTH:2), 33(ROOT:1)", complexity: "simple" },
    { name: "Walking Foundation", pattern: "1(ROOT:8), 5(THIRD:8), 9(FIFTH:8), 13(SIXTH:8)", complexity: "complex" },
    { name: "Cool Bop", pattern: "1(ROOT:8), 7(FLAT_V:8), 9(FOURTH:4), 15(ROOT:16)", complexity: "complex" }
  ],

  "genre_cinematic": [
    { name: "The Arrival", pattern: "1(ROOT:1), 33(FIFTH:1)", complexity: "simple" },
    { name: "Grand Score", pattern: "1(ROOT:4), 9(FIFTH:4), 17(SIXTH:4), 25(FOURTH:4)", complexity: "simple" },
    { name: "Tension Builder", pattern: "1(ROOT:2), 17(ROOT:2), 33(ROOT:2), 49(FLAT_VI:2)", complexity: "complex" }
  ],

  "genre_synthwave": [
    { name: "Arcade Dream", pattern: "1(ROOT:8), 3(FIFTH:8), 5(ROOT:8), 7(FIFTH:8)", complexity: "simple" },
    { name: "Night Drive", pattern: "1(ROOT:2), 17(SIXTH:2), 33(FOURTH:2), 49(FIFTH:2)", complexity: "complex" },
    { name: "Gated Bass", pattern: "1(ROOT:8), 3(ROOT:8), 5(ROOT:8), 7(ROOT:8), 9(FIFTH:8), 11(FIFTH:8), 13(FIFTH:8), 15(FIFTH:8)", complexity: "complex" }
  ],

  "genre_phonk": [
    { name: "Memphis Rumble", pattern: "1(ROOT:4), 7(ROOT:8), 10(THIRD:4), 15(ROOT:8)", complexity: "simple" },
    { name: "Heavy Drift", pattern: "1(ROOT:8), 4(ROOT:16), 5(ROOT:16), 9(FOURTH:4), 13(ROOT:4)", complexity: "complex" },
    { name: "Relentless Drive", pattern: "1(ROOT:8), 3(ROOT:8), 5(ROOT:8), 7(ROOT:8), 9(FIFTH:8), 11(FIFTH:8), 13(FIFTH:8), 15(FIFTH:8)", complexity: "complex" }
  ],

  // ======================================================
  // === НАСТРОЕНИЯ (MOODS) ===
  // ======================================================

  "mood_happy": [
    { name: "Joyful Skip", pattern: "1(ROOT:8), 5(FIFTH:8), 9(ROOT_HI:4)", complexity: "simple" },
    { name: "Uplifting Rise", pattern: "1(ROOT:4), 5(SECOND:4), 9(THIRD:4), 13(FOURTH:4)", complexity: "complex" }
  ],

  "mood_sad": [
    { name: "Empty Room", pattern: "1(ROOT:1)", complexity: "simple" },
    { name: "Tear Drop", pattern: "1(ROOT:1), 17(FIFTH:1)", complexity: "simple" },
    { name: "Longing", pattern: "1(ROOT:2), 9(ROOT:8), 17(FOURTH:2), 25(FOURTH:8)", complexity: "complex" }
  ],

  "mood_epic": [
    { name: "The Summoning", pattern: "1(ROOT:4), 5(ROOT:4), 9(ROOT:4), 13(FLAT_VI:4)", complexity: "simple" },
    { name: "Grand Finale", pattern: "1(ROOT:1), 5(FIFTH:1), 9(ROOT_HI:1)", complexity: "complex" },
    { name: "Hero's Journey", pattern: "1(ROOT:2), 17(SEVENTH:2), 33(SIXTH:2), 49(FIFTH:2)", complexity: "complex" }
  ],

  "mood_dark": [
    { name: "The Depths", pattern: "1(ROOT:1), 33(FLAT_II:1)", complexity: "simple" },
    { name: "Ominous Pulse", pattern: "1(ROOT:8), 5(ROOT:8), 9(FLAT_V:8), 13(FLAT_V:8)", complexity: "complex" },
    { name: "Stalker", pattern: "1(ROOT:8), 7(ROOT:16), 13(FLAT_II:4)", complexity: "complex" }
  ],

  "mood_dreamy": [
    { name: "Peaceful Slumber", pattern: "1(ROOT:1)", complexity: "simple" },
    { name: "Celestial Drone", pattern: "1(ROOT:1), 9(FIFTH:1)", complexity: "simple" },
    { name: "Floating", pattern: "1(ROOT:1), 17(FIFTH:1), 33(ROOT_HI:1), 49(SEVENTH:1)", complexity: "complex" }
  ],

  "mood_groovy": [
    { name: "Deep Pocket", pattern: "1(ROOT:4), 7.5(FIFTH:8), 9(ROOT:4)", complexity: "simple" },
    { name: "Funky Syncopation", pattern: "1(ROOT:8), 7(ROOT:8), 9(FIFTH:4), 15(SEVENTH:8)", complexity: "complex" },
    { name: "Off-Beat Slap", pattern: "3(ROOT:8), 7(FIFTH:8), 11(ROOT:8), 15(SEVENTH:8)", complexity: "complex" }
  ],

  "mood_tense": [
    { name: "Anxiety", pattern: "1(ROOT:16), 2(ROOT:16), 3(ROOT:16), 4(ROOT:16), 5(FLAT_II:8)", complexity: "simple" },
    { name: "Impending Doom", pattern: "1(ROOT:2), 15(FLAT_II:8), 16(ROOT:8)", complexity: "complex" },
    { name: "Unstable Ground", pattern: "1(ROOT:4), 5(FLAT_V:4), 9(ROOT:4), 13(FLAT_V:4)", complexity: "complex" }
  ],

  "mood_mystic": [
    { name: "Enigmatic Pulse", pattern: "1(ROOT:4), 9(FIFTH:4)", complexity: "simple" },
    { name: "Ancient Chant", pattern: "1(ROOT:2), 17(FLAT_II:2)", complexity: "complex" },
    { name: "Suspense", pattern: "1(ROOT:1), 33(SEVENTH:1)", complexity: "complex" }
  ]
};

export default formulas808s;
