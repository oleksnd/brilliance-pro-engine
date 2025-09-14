// lib/presets/pads.js

const presetsPads = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Soulful Pad Sample", pattern: "pads: 1(Dm7:1), 17(G7:1)" },
    { name: "Vinyl Crackle Pad", pattern: "pads: 1(Am:1)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Dark Evolving Pad", pattern: "pads: 1(Cm:1), 17(Gm:1)" },
    { name: "Anxious High Pad", pattern: "pads: 1(C#5:1)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Dark Phonk Atmosphere", pattern: "pads: 1(C#m:1)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Warm Lofi Pad", pattern: "pads: 1(Cmaj7:1), 17(Fmaj7:1)" },
    { name: "Jazzy Background", pattern: "pads: 1(Am9:1), 17(G13:1)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Deep Meditative Drone", pattern: "pads: 1(C2:1)" },
    { name: "Slowly Shifting Chords", pattern: "pads: 1(Am:1), 33(G:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Cinematic Tension", pattern: "pads: 1(Dm(no5):1)" },
    { name: "Melancholic Atmosphere", pattern: "pads: 1(Gm:1), 17(F:1)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Modern Pop Harmony", pattern: "pads: 1(C:2), 9(G:2), 17(Am:2), 25(F:2)" },
    { name: "Sidechained Pad", pattern: "pads: 1(F:4), 5(F:4), 9(F:4), 13(F:4)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Trance SuperSaw Chords", pattern: "pads: 1(Am:2), 9(F:2), 17(C:2), 25(G:2)" },
    { name: "Progressive House Pad", pattern: "pads: 1(Cmaj7:1), 33(G/B:1)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "Classic 80s Pad", pattern: "pads: 1(Fm7:1), 17(C#maj7:1)" },
    { name: "Nostalgic Brass Pad", pattern: "pads: 1(C:1), 17(G:1), 33(Am:1), 49(F:1)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    // Pads in rock are often used for atmospheric layers
    { name: "Indie Rock Atmosphere", pattern: "pads: 1(C:1), 17(G:1)" }
  ],
  "Metal: Aggressive Riffs": [
    // Used for intros or symphonic elements
    { name: "Symphonic Metal Choir", pattern: "pads: 1(Dm:1)" },
    { name: "Epic Intro Pad", pattern: "pads: 1(Am:1), 17(G:1), 33(F:1), 49(E:1)" }
  ]
};

export default presetsPads;
