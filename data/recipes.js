// STYLE RECIPES
// One recipe per photo. The website reads this file, and the future iOS app
// will read the same data, so everything we fine-tune here carries over.
// Order = the order photos appear when you press "Upload photo".
// style.layout picks the screen template in designs.js.

window.RECIPES = [
  {
    "id": "warm-calm",
    "name": "Dunes",
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
      "colors": {
        "bg": "#efe6da",
        "surface": "#e6d6c3",
        "text": "#3b2a1e",
        "muted": "#7a6352",
        "accent": "#c08a5a",
        "glow": "#ecc79c"
      },
      "fonts": {
        "display": "Cormorant Garamond",
        "displayStyle": "300 italic",
        "body": "DM Mono",
        "bodyStyle": "300, uppercase, wide tracking"
      },
      "radius": "arches: full round on top, square at the bottom",
      "texture": "fine sun grain",
      "imagery": "none: sun discs, arches and soft gradients",
      "idea": "No sidebar, no boxes. One sun, one horizon line (the progress bar), and a lot of nothing. Covers are arches, the track list reads like a single slow sentence."
    }
  },
  {
    "id": "cool-calm",
    "name": "Fog",
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
      "colors": {
        "bg": "#0c181a",
        "surface": "#16272a",
        "text": "#d3e0de",
        "muted": "#8aa3a0",
        "accent": "#9fc9c3",
        "glow": "#efd9a6"
      },
      "fonts": {
        "display": "IM Fell English",
        "displayStyle": "400 italic",
        "body": "IBM Plex Mono",
        "bodyStyle": "300"
      },
      "radius": "28px soft glass",
      "texture": "frosted glass",
      "imagery": "related photos, desaturated and dissolving into the background",
      "idea": "Everything is half-hidden. Covers dissolve into the dark, the player sits on frosted glass, navigation whispers along the edge. One warm window-light dot is the only color. (Background direction still open.)"
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
