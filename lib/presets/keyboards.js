// lib/presets/keyboards.js

const presetsKeyboards = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Rhodes Chord Progression", pattern: "keyboards: 1(Dm9:2), 9(G13:2)" },
    { name: "Wurli Melody", pattern: "keyboards: 1(C4:8), 5(E4:8), 9(G4:4), 13(A4:4)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Dark Piano Melody", pattern: "keyboards: 1(C#4:8), 3(E4:8), 5(G#4:4)" },
    { name: "Simple Trap Chords", pattern: "keyboards: 1(Am:2), 9(G:2), 17(C:2), 25(F:2)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Haunting Piano Loop", pattern: "keyboards: 1(C#3:8), 5(E3:8), 9(G#3:8), 13(C#3:8)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Classic Lofi Piano", pattern: "keyboards: 1(Cmaj9:2), 9(Fmaj7:2)" },
    { name: "Jazzy Electric Piano", pattern: "keyboards: 1(A#maj7:2), 9(D#maj7:2)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Felt Piano Arpeggio", pattern: "keyboards: 1(C4:8), 5(G4:8), 9(C5:8), 13(E5:8)" },
    { name: "Sparse Piano Notes", pattern: "keyboards: 1(C4:1), 17(F4:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Moody Piano Chords", pattern: "keyboards: 1(Gm:1), 17(Dm:1)" },
    { name: "Melancholic Melody", pattern: "keyboards: 1(D4:4), 9(F4:4), 17(A4:4), 25(C5:4)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Grand Piano Ballad", pattern: "keyboards: 1(C:4), 5(G/B:4), 9(Am:4), 13(F:4)" },
    { name: "Bright Pop Chords", pattern: "keyboards: 1(F:4), 5(C:4), 9(G:4), 13(Am:4)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Progressive House Piano", pattern: "keyboards: 1(Am:8), 5(F:8), 9(C:8), 13(G:8)" },
    { name: "Trance Arp Base", pattern: "keyboards: 1(D5:16), 3(F5:16), 5(A5:16), 7(C6:16)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "DX7 Electric Piano", pattern: "keyboards: 1(Fm7:2), 9(C#maj7:2)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Indie Rock Piano", pattern: "keyboards: 1(C:4), 5(G:4), 9(Am:4), 13(F:4)" },
    { name: "Ballad Accompaniment", pattern: "keyboards: 1(C G C:2), 9(F C F:2)" }
  ],
  "Metal: Aggressive Riffs": [
    // Piano in metal is often for intros or breakdowns
    { name: "Symphonic Metal Intro", pattern: "keyboards: 1(Dm:4), 5(Bb:4), 9(F:4), 13(C:4)" },
    { name: "Gothic Piano", pattern: "keyboards: 1(A2:8), 5(E3:8), 9(A3:4)" }
  ]
};

export default presetsKeyboards;
