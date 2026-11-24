// STYLE RECIPES
// One recipe per photo. The website reads this file, and the future iOS app
// will read the same data, so everything we fine-tune here carries over.
// Order = the order photos appear when you press "Upload photo".
// style.layout picks the screen template in designs.js.

window.RECIPES = [
  {
    "id": "warm-calm",
    "name": "Warm and Calm",
    "moodWords": [
      "meditative",
      "warm",
      "sun-bleached",
      "slow"
    ],
    "photo": {
      "file": "images/inspiration/warm-calm.jpg",
      "alt": "brown sand dunes under white sky",
      "photographer": "Ze Paulo",
      "photographerUrl": "https://unsplash.com/@zepaulotravel?utm_source=color_shift_prototype&utm_medium=referral",
      "photoUrl": "https://unsplash.com/photos/brown-sand-dunes-under-white-sky-vd3IHPSiPc8?utm_source=color_shift_prototype&utm_medium=referral",
      "unsplashId": "vd3IHPSiPc8"
    },
    "style": {
      "layout": "dunes",
      "live": "warm-calm-prototype.html",
      "colors": {
        "bg": "#6b4a31",
        "surface": "#c6bba6",
        "text": "#f6ead6",
        "muted": "#d8c8b0",
        "accent": "#b87427",
        "glow": "#e8c79b",
        "hover": "#b27733"
      },
      "fonts": {
        "display": "Cormorant Garamond",
        "displayStyle": "400 upright (artist), 300 italic (lyrics)",
        "body": "DM Mono",
        "bodyStyle": "300, uppercase, wide tracking"
      },
      "radius": "circles only: the sun, the pause ring",
      "texture": "still film grain over slowly billowing sand",
      "imagery": "animated sandstorm: an ochre sun veiled by drifting sand",
      "idea": "An immersive now-playing view. The sandstorm is the stage; thin cream lines and type whisper on top. Lyrics drift up line by line, and the wind calms when you pause."
    }
  },
  {
    "id": "cool-calm",
    "name": "Cool and Calm",
    "moodWords": [
      "mystical",
      "cold",
      "hushed",
      "veiled"
    ],
    "photo": {
      "file": "images/inspiration/cool-calm.jpg",
      "alt": "a foggy forest with trees",
      "photographer": "Toms Brencis",
      "photographerUrl": "https://unsplash.com/@tomstomass?utm_source=color_shift_prototype&utm_medium=referral",
      "photoUrl": "https://unsplash.com/photos/a-foggy-forest-with-trees-ISGwnzriJHc?utm_source=color_shift_prototype&utm_medium=referral",
      "unsplashId": "ISGwnzriJHc"
    },
    "style": {
      "layout": "fog",
      "live": "cool-calm-prototype.html",
      "colors": {
        "bg": "#183740",
        "surface": "#317082",
        "text": "#ffffff",
        "muted": "#95b6bf",
        "accent": "#95b6bf",
        "glow": "#95b6bf"
      },
      "fonts": {
        "display": "Helvetica Neue",
        "displayStyle": "500 uppercase (artist), 600 (sung lyric line)",
        "body": "Helvetica Neue",
        "bodyStyle": "300 (lyrics), 400 (song title, times)"
      },
      "radius": "none: square tiles, sharp thin line icons",
      "texture": "frosted glass tiles with fog settling inside, over a grainy photo",
      "imagery": "the artist portrait as the full background, tinted with the three colors (tritone)",
      "idea": "The artist's face is the fog. Frosted glass tiles hold the controls, a sound line pulses with the music and slowly turns deep blue-teal as the song plays, and four lines of lyrics drift up with the sung line in bold."
    }
  },
  {
    "id": "warm-loud",
    "name": "Petal",
    "moodWords": [
      "loud",
      "popping",
      "bold",
      "unapologetic"
    ],
    "photo": {
      "file": "images/inspiration/warm-loud.jpg",
      "alt": "Macro view of a vibrant pink flower petal with visible delicate veins",
      "photographer": "DL314 Lin",
      "photographerUrl": "https://unsplash.com/@dickenslin76?utm_source=color_shift_prototype&utm_medium=referral",
      "photoUrl": "https://unsplash.com/photos/pink-flower-petal-macro-zBPxIr1Xlwk?utm_source=color_shift_prototype&utm_medium=referral",
      "unsplashId": "zBPxIr1Xlwk"
    },
    "style": {
      "layout": "petal",
      "colors": {
        "bg": "#ff2a8f",
        "surface": "#ffb8d9",
        "text": "#26000f",
        "muted": "#45001c",
        "accent": "#d6ff2e",
        "glow": "#ffffff"
      },
      "fonts": {
        "display": "Anton",
        "displayStyle": "400, uppercase",
        "body": "Bricolage Grotesque",
        "bodyStyle": "700"
      },
      "radius": "999px pills and organic blobs",
      "texture": "hard offset shadows, thick ink outlines",
      "imagery": "none: blobs, stickers, flat color",
      "idea": "A poster, not an app. The title is too big to fit, covers are blobs, buttons have hard shadows. The tiny green from the photo becomes an acid accent."
    }
  },
  {
    "id": "cool-loud",
    "name": "Neon",
    "moodWords": [
      "cold",
      "futuristic",
      "electric",
      "restless"
    ],
    "photo": {
      "file": "images/inspiration/cool-loud.jpg",
      "alt": "A city street at night with neon lights",
      "photographer": "Valentin BEAUVAIS",
      "photographerUrl": "https://unsplash.com/@valentinbvs?utm_source=color_shift_prototype&utm_medium=referral",
      "photoUrl": "https://unsplash.com/photos/a-city-street-at-night-with-neon-lights-vKCQQNX8qs0?utm_source=color_shift_prototype&utm_medium=referral",
      "unsplashId": "vKCQQNX8qs0"
    },
    "style": {
      "layout": "neon",
      "colors": {
        "bg": "#05060d",
        "surface": "#0d1122",
        "text": "#e8f8ff",
        "muted": "#8d9bbd",
        "accent": "#2ef2ff",
        "glow": "#ff2ebd"
      },
      "fonts": {
        "display": "Big Shoulders Display",
        "displayStyle": "900, uppercase",
        "body": "JetBrains Mono",
        "bodyStyle": "400"
      },
      "radius": "0, everything sharp",
      "texture": "scanlines, glow, chromatic offset",
      "imagery": "related night photos as glowing tiles",
      "idea": "Signs, not sections. Vertical labels like Tokyo signage, a ticker that never stops, tiles slightly off-grid as if the screen is buzzing."
    }
  }
];
