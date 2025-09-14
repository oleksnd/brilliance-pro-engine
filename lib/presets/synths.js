// lib/presets/synths.js

const presetsSynths = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Funky Synth Stab", pattern: "synth: 1(Fm7:8)" },
    { name: "Wobbly Arpeggio", pattern: "synth: 1(C4:16), 3(Eb4:16), 5(G4:16), 7(Bb4:16)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Bell Melody", pattern: "synth: 1(C5:8), 5(G5:8), 9(F5:4)" },
    { name: "Dark Pluck Pattern", pattern: "synth: 1(C#4:8), 5(G#4:8), 9(E4:8)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Detuned Saw Chord", pattern: "synth: 1(C#m:4), 5(C#m:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Washed Out Arp", pattern: "synth: 1(C4:8), 5(E4:8), 9(G4:8), 13(B4:8)" },
    { name: "Gentle Pluck", pattern: "synth: 1(C5:4), 9(G5:4)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Generative Sequence", pattern: "synth: 1(C4:8), 7(G4:8), 11(D5:8), 15(A4:8)" },
    { name: "Sparkle FX", pattern: "synth: 1(C6:16), 5(G6:16), 9(E7:16)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Haunting Synth Bell", pattern: "synth: 1(A4:2), 17(E5:2)" },
    { name: "Analog Drone", pattern: "synth: 1(G3:1)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Catchy Pluck Chords", pattern: "synth: 1(C:8), 3(C:8), 5(G:8), 7(G:8)" },
    { name: "Marimba-like Pattern", pattern: "synth: 1(C5:16), 3(E5:16), 5(G5:16), 7(B5:16)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Classic Trance Arp", pattern: "synth: 1(A4:16), 3(E5:16), 5(A5:16), 7(C6:16)" },
    { name: "Progressive Pluck", pattern: "synth: 1(E5:8), 9(D5:8), 17(C5:8)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "Jupiter-8 Arpeggio", pattern: "synth: 1(C3:8), 5(G3:8), 9(C4:8), 13(E4:8)" },
    { name: "Chime Melody", pattern: "synth: 1(C5:4), 5(G5:4), 9(E5:4)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Indie Pop Arp", pattern: "synth: 1(C4:8), 3(E4:8), 5(G4:8), 7(B4:8)" }
  ],
  "Metal: Aggressive Riffs": [
    // Used for intros, interludes, or industrial elements
    { name: "Industrial Noise FX", pattern: "synth: 1(C#3:1)" },
    { name: "Synth-Orchestral Hit", pattern: "synth: 1(Dm:4)" }
  ]
};

export default presetsSynths;
