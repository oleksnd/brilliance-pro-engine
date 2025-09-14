// lib/presets/guitars.js

const presetsGuitars = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Jazzy Chord Sample", pattern: "guitar: 1(Am7:4), 5(D7:4), 9(Gmaj7:4)" },
    { name: "Muted Funk Lick", pattern: "guitar: 1(E4:16), 3(E4:16), 5(E4:16), 7(B4:8)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Sad Guitar Loop", pattern: "guitar: 1(Am:4), 5(G:4), 9(C:4), 13(F:4)" },
    { name: "Reversed Melody FX", pattern: "guitar: 1(C5:1)" }
  ],
  "Phonk: Aggressive Drift": [
    // Guitar is less common, often sampled and distorted
    { name: "Distorted Sample Chop", pattern: "guitar: 1(E3:8), 5(E3:8), 9(G3:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Chill Lofi Chords", pattern: "guitar: 1(Cmaj7:2), 9(Fmaj7:2)" },
    { name: "Clean Melody Line", pattern: "guitar: 1(C5:8), 5(E5:8), 9(G5:4)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Ebow Swell", pattern: "guitar: 1(C4:1)" },
    { name: "Volume Swell Chords", pattern: "guitar: 1(Am:1), 17(G:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Western Tremolo", pattern: "guitar: 1(Am:1)" }, // Imagine a tremolo effect applied in the DAW
    { name: "Clean Delay Lick", pattern: "guitar: 1(E4:4), 9(G4:4)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Funky Pop Strumming", pattern: "guitar: 1(Am:8), 3(Am:8), 5(G:8), 7(G:8)" },
    { name: "Acoustic Ballad Chords", pattern: "guitar: 1(C:2), 5(G:2), 9(Am:2), 13(F:2)" }
  ],
  "EDM: Euphoric Festival": [
    // Often used as a background element or a sampled pluck
    { name: "Plucky House Melody", pattern: "guitar: 1(C5:16), 3(E5:16), 5(G5:8)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "80s Power Chords", pattern: "guitar: 1(C5:4), 5(G5:4), 9(F5:4)" },
    { name: "Chorus Clean Riff", pattern: "guitar: 1(C4:8), 5(E4:8), 9(G4:8), 13(B4:8)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Classic Rock Power Chords", pattern: "guitar: 1(A5:4), 5(D5:4), 9(E5:4)" },
    { name: "Indie Rock Arpeggio", pattern: "guitar: 1(C4:8), 3(G4:8), 5(C5:8), 7(E5:8)" }
  ],
  "Metal: Aggressive Riffs": [
    { name: "Heavy Metal Riff", pattern: "guitar: 1(E2:8), 3(E2:8), 4(F2:8), 5(F#2:4)" },
    { name: "Palm Muted Chugs", pattern: "guitar: 1(E2:16), 1.5(E2:16), 2(E2:16), 2.5(E2:16)" }
  ]
};

export default presetsGuitars;
