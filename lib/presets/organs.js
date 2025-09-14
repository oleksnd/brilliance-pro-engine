// lib/presets/organs.js

const presetsOrgans = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Jazzy Hammond Chords", pattern: "organs: 1(Am7:2), 9(D7:2)" },
    { name: "Soul Sample Lick", pattern: "organs: 1(C4:8), 5(E4:8), 9(G4:4)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    // Organs can create a dark, gothic vibe in Trap
    { name: "Gothic Trap Chords", pattern: "organs: 1(Dm:2), 9(Am:2)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Dirty Phonk Organ", pattern: "organs: 1(C#3:8), 5(C#3:8), 9(E3:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Mellow Organ Pad", pattern: "organs: 1(Cmaj7:1), 17(Fmaj7:1)" },
    { name: "Vibey Chord Stabs", pattern: "organs: 1(Gm9:4), 9(C9:4)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Church Organ Drone", pattern: "organs: 1(C3 G3 C4:1)" },
    { name: "Ambient Swell", pattern: "organs: 1(Am:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Smoky Bar Organ", pattern: "organs: 1(Dm:1), 17(G:1)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "House Organ Bassline", pattern: "organs: 1(C2:8), 5(C2:8), 9(G2:8), 13(G2:8)" },
    { name: "Gospel Pop Chords", pattern: "organs: 1(C:4), 5(G:4), 9(Am:4), 13(F:4)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Classic House Organ", pattern: "organs: 1(C4:8), 3(E4:8), 5(G4:8), 7(C4:8)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "80s Rock Ballad Organ", pattern: "organs: 1(C3:1), 17(G3:1)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Classic Rock Organ", pattern: "organs: 1(Am:4), 5(G:4), 9(C:4)" },
    { name: "Reggae Skank", pattern: "organs: 3(C4:8), 7(C4:8), 11(G4:8), 15(G4:8)" }
  ],
  "Metal: Aggressive Riffs": [
    // Often used in Symphonic or Gothic Metal
    { name: "Symphonic Metal Pad", pattern: "organs: 1(Dm:1)" },
    { name: "Gothic Cathedral", pattern: "organs: 1(Am:1), 17(E:1)" }
  ]
};

export default presetsOrgans;
