// lib/presets/brass.js

const presetsBrass = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Triumphant Horn Stabs", pattern: "brass: 1(C4:8), 1.5(E4:16), 2(G4:16), 5(F4:4)" },
    { name: "Soulful Brass Lick", pattern: "brass: 1(G4:8), 4(A4:16), 5(C5:4), 8(A4:8)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Epic Trap Horns", pattern: "brass: 1(C4:8), 4(C4:8), 5(D#4:4), 9(G4:4)" },
    { name: "Dark Orchestra Hit", pattern: "brass: 1(Dm:4)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Menacing Phonk Stabs", pattern: "brass: 1(C#3:8), 5(C#3:8), 9(C#3:8), 13(E3:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Mellow Flugelhorn Line", pattern: "brass: 1(F4:2), 9(A4:4), 13(G4:4)" },
    { name: "Jazzy Brass Swell", pattern: "brass: 1(Dm9:2)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Long Evolving Pad", pattern: "brass: 1(C4 G4:1), 17(F3 C4:1)" },
    { name: "Distant Tundra Horns", pattern: "brass: 1(Am:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Film Noir Trumpet", pattern: "brass: 1(A3:2), 9(C4:4), 13(G3:2)" },
    { name: "Massive Horn Section", pattern: "brass: 1(Gm:1), 17(F:1)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Catchy Pop Riff", pattern: "brass: 1(C5:8), 3(G4:8), 5(A4:4), 9(F4:4)" },
    { name: "Reggaeton Stabs", pattern: "brass: 1(Am:16), 5(G:16), 9(C:16), 13(F:16)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Big Room Festival Lead", pattern: "brass: 1(C4:8), 3(C4:8), 5(F4:4), 7(G4:4)" },
    { name: "Trance Gate Pad", pattern: "brass: 1(Am:8), 5(Am:8), 9(G:8), 13(G:8)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "80s Power Brass", pattern: "brass: 1(C4:8), 5(E4:8), 9(G4:4)" },
    { name: "Retro Movie Theme", pattern: "brass: 1(C3:4), 5(G3:4), 9(F3:4), 13(C3:4)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Ska-Punk Upbeats", pattern: "brass: 3(C4:8), 7(C4:8), 11(G4:8), 15(G4:8)" },
    { name: "Indie Pop Horns", pattern: "brass: 1(Cmaj7:2), 9(Fmaj7:2)" }
  ],
  "Metal: Aggressive Riffs": [
    // Brass isn't common in Metal, so we can add something more orchestral or experimental
    { name: "Symphonic Metal Hit", pattern: "brass: 1(Dm:4)" },
    { name: "War Horn", pattern: "brass: 1(D3:1)" }
  ]
};

export default presetsBrass;
