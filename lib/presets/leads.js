// lib/presets/leads.js

const presetsLeads = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "G-Funk Whistle", pattern: "leads: 1(G5:2), 5(D5:4), 7(E5:4), 9(G5:2)" },
    { name: "Classic Synth Lead", pattern: "leads: 1(C5:8), 5(D5:8), 9(E5:4)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Catchy Trap Melody", pattern: "leads: 1(C5:8), 3(D5:8), 5(C5:8), 7(A4:8), 9(G4:4)" },
    { name: "Pluck Lead Pattern", pattern: "leads: 1(E5:16), 3(G5:16), 5(E5:16), 7(B5:8)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Aggressive Phonk Lead", pattern: "leads: 1(C#5:8), 1.5(C#5:16), 5(D#5:8), 9(C#5:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    // Leads are less common in Lofi, usually softer
    { name: "Soft Sine Wave Lead", pattern: "leads: 1(C5:2), 9(E5:2), 17(G5:2)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Floating Melody", pattern: "leads: 1(C5:1), 17(G5:1), 33(F5:1)" },
    { name: "Echoing Lead", pattern: "leads: 1(A4:4)" } // Imagine with heavy delay
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Portamento Synth", pattern: "leads: 1(A4:2), 9(D5:2)" } // Imagine glide between notes
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Modern Pop Hook", pattern: "leads: 1(C5:8), 3(D5:8), 5(E5:4), 9(C5:4)" },
    { name: "Catchy Topline", pattern: "leads: 1(G4:8), 2(A4:8), 3(G4:8), 5(C5:4)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Big Room House Lead", pattern: "leads: 1(G4:8), 3(A4:8), 5(G4:8), 7(B4:8), 9(C5:4)" },
    { name: "Trance SuperSaw", pattern: "leads: 1(A4:8), 5(C5:8), 9(E5:8), 13(G5:8)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "Classic 80s Solo", pattern: "leads: 1(C5:8), 3(D5:8), 5(E5:8), 7(G5:8), 9(C5:4)" },
    { name: "Analog Brass Lead", pattern: "leads: 1(C4:4), 5(F4:4), 9(G4:4)" }
  ],

  // --- Rock & Metal ---
  // Synth leads are less common, but used in some subgenres
  "Rock: Alternative Groove": [
    { name: "Indie Pop Synth Hook", pattern: "leads: 1(C5:8), 5(E5:8), 9(G5:8), 13(C5:8)" }
  ],
  "Metal: Aggressive Riffs": [
    { name: "Symphonic Metal Lead", pattern: "leads: 1(D5:8), 3(E5:8), 5(F5:8), 7(G5:8), 9(A5:4)" }
  ]
};

export default presetsLeads;
