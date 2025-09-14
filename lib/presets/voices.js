// lib/presets/voices.js

const presetsVoices = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Soulful 'Ooh' Sample", pattern: "voices: 1(Am7:2)" },
    { name: "Vocal Chop Lick", pattern: "voices: 1(C5:16), 3(D5:16), 5(E5:8)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Ad-lib Vocal FX", pattern: "voices: 7(C5:16), 15(G4:16)" },
    { name: "Haunting Choir", pattern: "voices: 1(Cm:1)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Distorted Vocal Sample", pattern: "voices: 1(C#4:8), 5(C#4:8), 9(E4:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Breathy 'Aah' Pad", pattern: "voices: 1(Cmaj7:1)" },
    { name: "Muffled Vocal Texture", pattern: "voices: 1(C4:8), 9(G4:8)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Ethereal Choir", pattern: "voices: 1(C4 G4 C5:1)" },
    { name: "Gregorian Chant Drone", pattern: "voices: 1(Am:1), 33(G:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Female Vocal Pad", pattern: "voices: 1(Gm:1), 17(Dm:1)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Vocal Chop Hook", pattern: "voices: 1(C5:16), 2(D5:16), 3(E5:8), 5(C5:8)" },
    { name: "Background 'Oohs' & 'Aahs'", pattern: "voices: 1(C:2), 9(G:2), 17(Am:2)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Gated Vocal Pad", pattern: "voices: 1(Am:8), 5(Am:8), 9(G:8), 13(G:8)" },
    { name: "Vocal Lead", pattern: "voices: 1(C5:8), 5(G5:8), 9(E5:4)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "80s Choir Pad (Emulator II)", pattern: "voices: 1(Fm:1), 17(C#:1)" }
  ],

  // --- Rock & Metal ---
  // Voices/choirs are common in symphonic and gothic subgenres
  "Rock: Alternative Groove": [
    { name: "Indie Choir Pad", pattern: "voices: 1(C:1), 17(G:1)" }
  ],
  "Metal: Aggressive Riffs": [
    { name: "Epic Viking Choir", pattern: "voices: 1(Dm:2), 9(C:2)" },
    { name: "Operatic Soprano", pattern: "voices: 1(A5:1)" }
  ]
};

export default presetsVoices;
