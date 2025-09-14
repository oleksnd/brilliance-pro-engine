// lib/presets/drum-pads.js

const presetsDrumPads = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { 
      name: "Vinyl Chop Loop", 
      pattern: `kick: 1, 9.5
snare: 5, 13` 
    },
    { 
      name: "MPC Finger Drumming", 
      pattern: `kick: 1, 3, 7, 9, 12
snare: 5, 13`
    }
  ],
  "Trap: Modern & Hard-Hitting": [
    { 
      name: "Trap Perc Loop", 
      pattern: `hat: 1, 2, 5, 6, 9, 10, 13, 14
clap: 5, 13` 
    },
    { 
      name: "Simple Banger", 
      pattern: `kick: 1, 7, 11
snare: 5, 13`
    }
  ],
  "Phonk: Aggressive Drift": [
    { 
      name: "Phonk Ride Pattern", 
      pattern: `ride: 1, 5, 9, 11, 13`
    }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { 
      name: "Dusty Vinyl Groove", 
      pattern: `kick: 1, 9
snare: 5, 13
hat: 1, 3, 5, 7, 9, 11, 13, 15`
    },
    { 
      name: "Tape Hiss Loop", 
      pattern: `hat: 1, 5, 9, 13`
    }
  ],
  "Ambient: Dreamy Soundscape": [
    { 
      name: "Heartbeat Kick", 
      pattern: `kick: 1, 9` 
    }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { 
      name: "Gritty Breakbeat Loop", 
      pattern: `kick: 1, 7, 11
snare: 5, 13`
    }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { 
      name: "Top Loop Percussion", 
      pattern: `hat: 1, 3, 5, 7, 9, 11, 13, 15
clap: 5, 13`
    }
  ],
  "EDM: Euphoric Festival": [
    { 
      name: "Buildup Snare Roll", 
      pattern: `snare: 1, 2, 3, 4, 5, 5.5, 6, 6.5, 7, 7.25, 7.5, 7.75`
    },
    { 
      name: "Offbeat Hat Loop", 
      pattern: `hat: 3, 7, 11, 15`
    }
  ],
  "Synthwave: 80s Retro Vibe": [
    { 
      name: "LinnDrum Pattern", 
      pattern: `kick: 1, 9
snare: 5, 13
clap: 5, 13`
    }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { 
      name: "Tambourine Loop", 
      pattern: `hat: 1, 3, 5, 7, 9, 11, 13, 15` // Using 'hat' to represent a tambourine sound
    }
  ],
  "Metal: Aggressive Riffs": [
    { 
      name: "China Cymbal Accents", 
      pattern: `crash: 1, 9` // Using 'crash' for a china sound
    }
  ]
};

export default presetsDrumPads;
