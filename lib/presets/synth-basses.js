// lib/presets/synth-basses.js

const presetsSynthBasses = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Moog Bassline", pattern: "bass: 1(C2:8), 5(G2:8), 9(F2:4)" },
    { name: "Sub Bass Support", pattern: "bass: 1(C1:2), 9(G1:2)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Classic Reese Bass", pattern: "bass: 1(C2:1)" },
    { name: "Growl Bass", pattern: "bass: 1(F1:8), 1.5(F#1:8), 2(G1:4)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Distorted Saw Bass", pattern: "bass: 1(C#2:8), 5(C#2:8), 9(C#2:8), 13(E2:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Mellow Sine Sub", pattern: "bass: 1(C1:2), 9(F1:2)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Deep Sub Drone", pattern: "bass: 1(C1:1)" },
    { name: "Minimal Sequence", pattern: "bass: 1(C2:8), 9(G2:8), 17(F2:8), 25(C2:8)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Heavy Moog Bass", pattern: "bass: 1(Dm:1)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Modern Pop Bass", pattern: "bass: 1(C1:8), 5(G0:8), 9(A0:8), 13(F0:8)" },
    { name: "Plucky Bassline", pattern: "bass: 1(C2:16), 3(C2:16), 5(C2:16), 7(C2:16)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Trance Sub Bass", pattern: "bass: 1(A1:8), 5(A1:8), 9(F1:8), 13(F1:8)" },
    { name: "Progressive Offbeat Bass", pattern: "bass: 3(C1:8), 7(G0:8), 11(A0:8), 15(F0:8)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "Classic 80s Sequence", pattern: "bass: 1(C2:8), 3(C2:8), 5(C2:8), 7(C2:8)" },
    { name: "Outrun Driving Bass", pattern: "bass: 1(C1:8), 5(G1:8), 9(Am:8), 13(F1:8)" }
  ],

  // --- Rock & Metal ---
  // Synth bass is common in Industrial and some modern subgenres
  "Rock: Alternative Groove": [
    { name: "Indie Dance Bass", pattern: "bass: 1(A1:8), 5(A1:8), 9(D1:8), 13(D1:8)" }
  ],
  "Metal: Aggressive Riffs": [
    { name: "Industrial Metal Bass", pattern: "bass: 1(E1:16), 1.5(E1:16), 2(E1:16), 2.5(E1:16)" }
  ]
};

export default presetsSynthBasses;
