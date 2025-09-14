// lib/presets/percussion.js

const presetsPercussion = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Shaker Loop", pattern: "hat: 1, 2, 3, 4, 5, 6, 7, 8" },
    { name: "Bongo Pattern", pattern: "tom1: 1, 4, 7, 10, 13, 16" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Complex Hi-Hat Rolls", pattern: "hat: 1, 1.5, 2, 5, 5.5, 6, 6.5" },
    { name: "Triangle Ping", pattern: "ride: 1, 9, 17, 25" } // Using 'ride' for a high-pitched sound
  ],
  "Phonk: Aggressive Drift": [
    { name: "Classic Cowbell Pattern", pattern: "tom1: 1, 5, 9, 13" } // Using 'tom1' for a cowbell sound
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Vinyl Noise/Crackle", pattern: "hat: 1, 2, 3, 4, 5, 6, 7, 8" }, // Simulating constant noise
    { name: "Foley Percussion", pattern: "snare: 3, 7, 12, 15" } // Random-sounding foley
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Wind Chimes", pattern: "hat: 1, 3.5, 5, 8, 10.5" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Deep Bongo Groove", pattern: "tom1: 1, 7, 11, 15" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Tambourine on 8ths", pattern: "hat: 1, 3, 5, 7, 9, 11, 13, 15" },
    { name: "Clave Pattern", pattern: "clap: 1, 4, 7, 10, 13" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Offbeat Shaker", pattern: "hat: 3, 7, 11, 15, 19, 23, 27, 31" },
    { name: "Rave Hoover Stab", pattern: "tom1: 1, 5, 9, 13" }
  ],
  "Synthwave: 80s Retro Vibe": [
    { name: "Electronic Toms Fill", pattern: "tom1: 13, 14, 15, 16" },
    { name: "Cowbell Groove", pattern: "tom2: 1, 5, 9, 13" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Tambourine on Snare", pattern: "hat: 5, 13, 21, 29" }
  ],
  "Metal: Aggressive Riffs": [
    // Percussion is less common, but can be used for effect
    { name: "Timpani Hit", pattern: "kick: 1" } // Using 'kick' for a deep, resonant hit
  ]
};

export default presetsPercussion;
