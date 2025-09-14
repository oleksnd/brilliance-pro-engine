// lib/presets/winds.js

const presetsWinds = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Jazzy Saxophone Lick", pattern: "winds: 1(C5:8), 3(D5:8), 5(E5:4), 8(D5:8)" },
    { name: "Flute Melody Sample", pattern: "winds: 1(A4:8), 5(C5:8), 9(E5:4)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Haunting Flute Melody", pattern: "winds: 1(C#5:8), 5(E5:8), 9(G#5:4)" },
    { name: "Oboe Counter-Melody", pattern: "winds: 1(G4:2), 9(A#4:2)" }
  ],
  "Phonk: Aggressive Drift": [
    // Less common, but can be used for texture
    { name: "Distorted Flute Sample", pattern: "winds: 1(C#5:8), 5(C#5:8), 9(E5:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Mellow Flute Lead", pattern: "winds: 1(C5:2), 9(G5:2)" },
    { name: "Soft Clarinet Texture", pattern: "winds: 1(Am7:1)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Pan Flute Echos", pattern: "winds: 1(C5:4), 9(G5:4)" }, // Imagine with delay
    { name: "Breath FX", pattern: "winds: 1(C4:1)" } // Simulating a breathy sound
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Smoky Saxophone Solo", pattern: "winds: 1(D4:2), 9(F4:4), 13(A3:2)" },
    { name: "Film Noir Clarinet", pattern: "winds: 1(Gm:1)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Catchy Flute Hook", pattern: "winds: 1(C5:8), 3(D5:8), 5(C5:8), 7(A4:8)" },
    { name: "Saxophone Pop Solo", pattern: "winds: 1(G4:8), 3(A4:8), 5(C5:4)" }
  ],
  "EDM: Euphoric Festival": [
    // Often synthetic, but can be used for organic texture
    { name: "Shakuhachi Flute Lead", pattern: "winds: 1(Am:4), 5(G:4)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "80s Saxophone Riff", pattern: "winds: 1(C5:8), 1.5(D5:8), 2.5(E5:4)" },
    { name: "Kenny G-style Soprano Sax", pattern: "winds: 1(G5:2), 5(F#5:2), 9(E5:2)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Indie Rock Flute", pattern: "winds: 1(C5:4), 5(E5:4), 9(G5:4)" },
    { name: "Jethro Tull-style Flute Solo", pattern: "winds: 1(A4:8), 3(C5:8), 5(D5:8), 7(E5:8)" }
  ],
  "Metal: Aggressive Riffs": [
    // Common in Folk Metal
    { name: "Folk Metal Flute Melody", pattern: "winds: 1(Am:8), 3(G:8), 5(Am:8), 7(E:8)" }
  ]
};

export default presetsWinds;
