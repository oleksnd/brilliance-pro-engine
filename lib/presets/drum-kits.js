// lib/presets/drum-kits.js

const presetsDrumKits = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { 
      name: "Classic Boom Bap", 
      pattern: `kick: 1, 9, 17, 25
snare: 5, 13, 21, 29
hat: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31`
    },
    { 
      name: "J Dilla Swing", 
      pattern: `kick: 1, 8, 17, 23
snare: 5, 13, 21, 29
hat: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31`
    }
  ],
  "Trap: Modern & Hard-Hitting": [
    { 
      name: "Basic Trap Beat", 
      pattern: `kick: 1, 11, 17, 27
snare: 5, 13, 21, 29
hat: 1, 2, 3, 4, 5, 6, 7, 8
openhat: 15` 
    },
    { 
      name: "Drill Bounce", 
      pattern: `kick: 1, 8, 11, 17, 24, 27
snare: 5, 13, 21, 29
hat: 1, 4, 5, 8, 9, 12, 13, 16`
    }
  ],
  "Phonk: Aggressive Drift": [
    { 
      name: "Memphis Cowbell Groove", 
      pattern: `kick: 1, 5, 9, 13
snare: 5, 13, 21, 29
hat: 1, 3, 5, 7, 9, 11, 13, 15`
      // Note: Cowbell sound is usually a separate sample, but we use 'hat' for rhythm
    }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { 
      name: "Sleepy Lofi Beat", 
      pattern: `kick: 1, 9.5, 17
snare: 5, 13, 21, 29
hat: 1, 5, 9, 13, 17, 21, 25, 29`
    }
  ],
  "Ambient: Dreamy Soundscape": [
    { 
      name: "Minimalist Pulse", 
      pattern: `kick: 1, 17
hat: 9, 25`
    }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { 
      name: "Slow Heavy Groove", 
      pattern: `kick: 1, 11, 17, 27
snare: 5, 21`
    }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { 
      name: "Four On The Floor", 
      pattern: `kick: 1, 5, 9, 13, 17, 21, 25, 29
snare: 5, 13, 21, 29
hat: 3, 7, 11, 15, 19, 23, 27, 31`
    }
  ],
  "EDM: Euphoric Festival": [
    { 
      name: "House Beat", 
      pattern: `kick: 1, 5, 9, 13, 17, 21, 25, 29
snare: 5, 13, 21, 29
openhat: 3, 7, 11, 15, 19, 23, 27, 31`
    },
    { 
      name: "Drum & Bass", 
      pattern: `kick: 1, 11
snare: 5, 13`
    }
  ],
  "Synthwave: 80s Retro Vibe": [
    { 
      name: "Classic 80s Beat", 
      pattern: `kick: 1, 5, 9, 13
snare: 5, 13
hat: 1, 2, 3, 4, 5, 6, 7, 8`
    }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { 
      name: "Basic Rock Beat", 
      pattern: `kick: 1, 9, 17, 25
snare: 5, 13, 21, 29
hat: 1, 3, 5, 7, 9, 11, 13, 15`
    }
  ],
  "Metal: Aggressive Riffs": [
    { 
      name: "Blast Beat", 
      pattern: `kick: 1, 2, 3, 4, 5, 6, 7, 8
snare: 1, 2, 3, 4, 5, 6, 7, 8`
    },
    {
      name: "Double Kick",
      pattern: `kick: 1, 2, 3, 4, 9, 10, 11, 12
snare: 5, 13`
    }
  ]
};

export default presetsDrumKits;
