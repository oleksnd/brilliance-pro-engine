// lib/presets/electric-basses.js

const presetsElectricBasses = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Classic Funk Bassline", pattern: "bass: 1(C2:8), 5(G2:8), 9(F2:4), 13(G2:4)" },
    { name: "Jazzy Walking Bass", pattern: "bass: 1(C2:8), 3(D2:8), 5(E2:8), 7(F2:8)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    // Electric bass is less common in Trap, but can be used for a more organic feel
    { name: "Live Trap Bass", pattern: "bass: 1(C2:4), 7(C2:8), 11(G1:8), 13(C2:4)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Distorted Phonk Bass", pattern: "bass: 1(C2:8), 5(C2:8), 9(C2:8), 13(C2:8)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Mellow Bass Groove", pattern: "bass: 1(C2:2), 9(F1:2)" },
    { name: "Jaco Pastorius Lick", pattern: "bass: 1(C3:8), 4(G3:16), 5(A3:4)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Simple Root Notes", pattern: "bass: 1(C1:1), 17(F1:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Dub Bassline", pattern: "bass: 1(G1:4), 9(G1:4)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Disco Octave Bass", pattern: "bass: 1(C2:8), 3(C3:8), 5(C2:8), 7(C3:8)" },
    { name: "Modern Pop Groove", pattern: "bass: 1(C2:8), 5(G1:8), 9(A1:8), 13(F1:8)" }
  ],
  "EDM: Euphoric Festival": [
    // Often replaced by synth bass, but can be used in genres like French House
    { name: "French House Filter Bass", pattern: "bass: 1(Am:4), 5(C:4), 9(G:4), 13(Dm:4)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "80s Slap Bass", pattern: "bass: 1(E2:16), 1.5(E3:16), 3(E2:8), 5(G2:4)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Classic Rock Riff", pattern: "bass: 1(A1:8), 5(E1:8), 9(D1:4)" },
    { name: "Punk Rock Eighths", pattern: "bass: 1(C2:8), 3(C2:8), 5(C2:8), 7(C2:8)" }
  ],
  "Metal: Aggressive Riffs": [
    { name: "Galloping Riff", pattern: "bass: 1(E1:16), 1.75(E1:16), 2.5(E1:8), 3(E1:8)" },
    { name: "Following the Guitars", pattern: "bass: 1(E1:8), 3(E1:16), 4(E1:16), 5(F1:4)" }
  ]
};

export default presetsElectricBasses;
