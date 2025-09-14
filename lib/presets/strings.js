// lib/presets/strings.js

const presetsStrings = {
  // --- Hip-Hop & Urban ---
  "Hip-Hop: Old School Boom Bap": [
    { name: "Soulful String Section", pattern: "strings: 1(Am7:1), 17(D7:1)" },
    { name: "Dramatic Movie Sample", pattern: "strings: 1(Cm:2), 9(G:2)" }
  ],
  "Trap: Modern & Hard-Hitting": [
    { name: "Sad Violin Melody", pattern: "strings: 1(C5:8), 3(D5:8), 5(Eb5:4)" },
    { name: "Tense String Stabs", pattern: "strings: 1(Cm:16), 5(Cm:16), 9(Cm:16)" }
  ],
  "Phonk: Aggressive Drift": [
    { name: "Horror Movie Strings", pattern: "strings: 1(C#3:8), 1.5(D3:8), 5(C#3:4)" }
  ],

  // --- Lofi & Ambient ---
  "Lofi: Chillhop & Study": [
    { name: "Warm String Pad", pattern: "strings: 1(Cmaj7:1), 17(Fmaj7:1)" },
    { name: "Pizzicato Plucks", pattern: "strings: 1(C4:16), 5(G4:16), 9(E5:8)" }
  ],
  "Ambient: Dreamy Soundscape": [
    { name: "Deep Cello Drone", pattern: "strings: 1(C2:1)" },
    { name: "Evolving String Texture", pattern: "strings: 1(Am:1), 33(G:1)" }
  ],
  "Trip-Hop: Cinematic & Slow": [
    { name: "Melancholic Orchestra", pattern: "strings: 1(Gm:1), 17(Dm:1)" },
    { name: "Film Noir Atmosphere", pattern: "strings: 1(A3:2), 9(C4:2), 17(E4:2)" }
  ],

  // --- Pop & Electronic ---
  "Pop: Mainstream Hit": [
    { name: "Ballad String Section", pattern: "strings: 1(C:2), 9(G:2), 17(Am:2), 25(F:2)" },
    { name: "Staccato Pop Riff", pattern: "strings: 1(C5:16), 3(G4:16), 5(A4:16), 7(F4:16)" }
  ],
  "EDM: Euphoric Festival": [
    { name: "Trance Gate Strings", pattern: "strings: 1(Am:8), 5(Am:8), 9(G:8), 13(G:8)" },
    { name: "Progressive House Swell", pattern: "strings: 1(Cmaj7:1)" }
  ],
  "Synthwave: 80s Retro Vibe": [
    // Often uses synth strings, but orchestral can work too
    { name: "80s Movie Soundtrack", pattern: "strings: 1(Cm:1), 17(G:1), 33(Fm:1)" }
  ],

  // --- Rock & Metal ---
  "Rock: Alternative Groove": [
    { name: "Indie Rock String Pad", pattern: "strings: 1(C:1), 17(G:1)" }
  ],
  "Metal: Aggressive Riffs": [
    { name: "Symphonic Metal Staccato", pattern: "strings: 1(D3:16), 1.5(D3:16), 2(D3:16), 3(A3:8)" },
    { name: "Epic Battle Strings", pattern: "strings: 1(Dm:2), 9(Bb:2)" }
  ]
};

export default presetsStrings;
