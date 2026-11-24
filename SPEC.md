# SPEC — Color Shift (working title)

A prototype tool for UX designers: "upload" a photo, and get a bold, pushed
visual direction for a music app, inspired by that photo's mood.

Inspired by MDS's Color Shift (course project), but a different tool of our own.

---

## 1. The idea in one sentence

**A tool for UX designers who want to start from a mood (a photo) and get a small,
unexpected nudge in a design direction — shown as a real-looking music app screen.**

- **Inspiration:** the photo sets the mood.
- **Direction:** the tool translates that mood into a full style: color, type,
  layout, shapes, texture.
- **A nudge, not a solution.** Hands-off: no sliders, no editing. The designer takes
  the direction into Figma and keeps exploring there.

## 2. Who it's for

- UX designers looking for inspiration and some color/style guidance.
- In practice: me + 2–3 friends testing the prototype.

## 3. It's a prototype (on purpose)

Like a Figma prototype for user testing, some steps are faked to save time and money:

- **"Upload" is fake.** Clicking "Upload photo" doesn't open a file picker — the next
  of 4 pre-chosen photos appears.
- **The "AI reading" is fake.** The 4 interpretations are designed ahead of time
  (art-directed by Claude while building, fine-tuned together). A short loading moment
  makes it feel like analysis is happening.
- **No AI or API runs on the live site.** No costs, no keys, nothing to protect.
  Safe to share with anyone.

## 4. The flow

1. **Start:** the left half shows a **big, centered "Upload photo" button** in the
   middle of the frame. The right half is in its waiting state (see "Waiting state" below).
2. **Click upload:** the next photo fills the left half, with the photographer
   credit in the **upper-left corner** of the photo.
3. **Fake reading (~2 seconds):** short status lines appear one after another, e.g.
   "sampling colors…", "finding the mood…", "picking a typeface…".
4. **Result:** the pushed music app design appears in the right half.
5. **Next:** the big button disappears. A small **refresh icon** (circular arrow) sits
   in the **upper-right corner** of the photo — this is "upload again". The designer
   can copy the result to Figma (section 9) or tap the icon to get the next photo.
6. **Expand:** an **expand icon** in the upper-right corner of the design half opens
   the design **full screen**, at the largest size the window allows (the half only
   shows it at ~44%). A live design keeps playing while it grows. Back to the tool:
   the design's own **collapse** or **back** button, or **Esc**. Designs without their
   own collapse button get a small close button in the corner.
7. **After the 4th photo:** a fun end state with a "start over" button (section 10).

## 5. Layout

**Desktop (website):** two halves side by side, like MDS's Color Shift.
- **Left half:** upload area → then the photo, full-bleed, with photographer credit.
- **Right half:** the music app design, desktop size, scaled down to fit the half
  (and expandable to full screen, see section 4).
- The tool's own interface stays **quiet and neutral, following MDS's approach**:
  minimal controls, small labels, all attention on the photo and the design.

**Waiting state (right half, before the first upload):** luxurious, mysterious,
but quiet.
- Black background.
- A barely visible **silver veil** that drifts slowly up and down, very quietly.
- A short line of text: **"Nothing yet. The image decides."**

**Phone (website on mobile, and later the iOS app):** stacked.
- **Photo on top, design below.**
- The design is a **phone-sized music app screen**, not the shrunken desktop one.

## 6. The styles — the heart of the tool

**4 photos → 4 styles.** Few, so each one can be fine-tuned properly.

### Pushed, not safe
Each style should challenge the designer, not hand them the obvious answer:
- **Unexpected type:** oversized headlines, odd pairings (e.g. condensed grotesk +
  delicate serif), mono fonts used as display type.
- **Bold layouts:** asymmetric grids, overlap, extreme white space or deliberate
  density, rotated or cropped text.
- **Surprising color proportions:** e.g. the photo's *minor* color becomes dominant.
- **Texture and detail** where the mood asks for it: grain, outlines, hard shadows,
  unusual shapes.
- **Always readable.** Every text/background pair is checked for contrast
  (WCAG). Pushed, but still usable.
- **The score is visible to the designer:** a small badge (e.g. "AA ✓" plus the
  contrast ratio) shown with the design and on the style guide card.

### What the photo "tells" the style
- **Colors:** the palette, plus which colors are dominant, muted or vivid.
- **Mood:** warm/cool, bright/dark, calm/energetic.
- **Words:** the photo's description and tags as extra clues.

### The 4 photos
Chosen by Claude from Unsplash, **approved by me** before use. They should cover
very different corners of the mood map, roughly:

| | Calm | Loud |
|---|---|---|
| **Warm** | e.g. sunlit desert, sand tones | e.g. flowers, vivid market |
| **Cool** | e.g. fog, misty water | e.g. neon city at night |

### How we design each style
**One screen at a time**: sketch in Figma ("Art Director" page), try it in code as
a separate prototype page, tweak in Figma, bring the tweaks back to code. Once it
feels right, it becomes that photo's design in the main flow.
Every milestone gets a **version tag** in git (e.g. `warm-calm-proto-v3`), so the
design's progress can be traced and any version reopened on GitHub (Tags).

### Design 1 · Warm and Calm (formerly "Dunes") — ✅ in the flow

Live as the first photo's design: `warm-calm-prototype.html`, shown inside the tool
(version `warm-calm-proto-v4`). Figma: "Warm and Calm · Prototype_iteration 1".

- **Layout 2.1:** controls sit at the bottom, the illustration takes most of the
  screen — that's what reads as calm. Artist block bottom left; controls, lyric and
  progress centered over the rest of the bottom band.
- **Type:** artist name in Cormorant Garamond **Regular, upright**, 64px (the hero);
  lyrics in Cormorant Garamond Light Italic, 24px; song title and times in DM Mono
  Light, 16px (song title uppercase, wide tracking).
- **Colors:** cream text and icons (#F6EAD6) on a soft dusk shadow rising from the
  bottom (keeps text readable over the sand, contrast AA 6.7:1). Hover: #B27733.
- **Lines:** 2.5px everywhere — icons, pause ring (with a faint white fill), progress
  line and playhead.
- **Artist picture:** a tiny version of the sun (ochre center, sand edge, soft glow).
- **Hover states:** icons turn #B27733, opacity unchanged. Control buttons change
  instantly. Back and collapse get a **directional nudge** (0.25s ease-out): back
  slides 4px left, collapse pinches to 88%.
- **Moving song** (see section 7): pause calms the wind in the background.
- **References** (folder `References_warm and calm`): grainy, blurry backgrounds,
  strong abstraction from reality, yellow/orange/ochre tones; plus the end of a
  Sahara sandstorm clip, where sand fills the whole frame.
- **Background (from `bg-warm-calm-v2.html`):** an ochre sun
  (#B87427 center, fading gently to #E8C79B) inside a **slow, calm, billowing
  sandstorm**. In the prototype the sun sits higher (608px wide) so it stays clear
  of the controls.
  - Sand **churns in place** like smoke, with only a slow drift to the left — the
    frame itself never feels like it's moving (no dizziness).
  - Sand stays **calm**: the sun is veiled but always there.
  - **Grain is fixed to the screen** like paper texture (no flicker, no sliding).
  - Over the pale top-left sky, the sand is tinted a little warmer so it stays visible.
  - Built as a shader (graphics-card code); tuning knobs at the top of the file:
    sand density, wind speed, grain amount.
  - Earlier version kept for comparison: `bg-warm-calm-v1.html` (dust blobs +
    straight sideways sand streaks).
- **Open:** a Figma-copyable version of the screen (Copy screen is hidden for live
  designs, see section 9); removing the old unused Dunes screen code.

### Design 2 · Cool and Calm (formerly "Fog") — ✅ in the flow

Live as the second photo's design: `cool-calm-prototype.html`, shown inside the tool
(version `cool-calm-proto-v3`), built from Figma "Layout_fog_iterated_2".

- **v2 → v3 tweaks:** tiles are frosted glass with a light Color 1 fog gradient (thicker
  at the bottom), no edge line; no collapse button (back only); shuffle/repeat look the
  same as the other icons, with a short line under them when on; the pause icon is 2×
  (400px, 8px lines).
- **Progress by color only:** no moving line. Each bar of the sound line slowly turns
  from soft white to Color 2 as the song passes it.

- **Colors (my own, Figma Color 1–3):** #95B6BF (mist), #317082 (deep blue-teal),
  #183740 (night). Monochrome.
- **Background:** a real photo, full screen, tinted live with the three colors (tritone:
  black → Color 3, greys → Color 2, white → Color 1). The artist portrait *is* the
  background (Mason C on Unsplash), so there's no second image to clash with.
- **Layout:** artist and song as small see-through "tags" top left; a grid of square
  tiles on the right (previous/next, a big pause tile, shuffle/repeat); lyrics bottom left.
- **Lyrics:** 4 lines visible, the sung line is always the 2nd one, in bold; the block
  moves up one line at a time.
- **Sound line:** thin bars that pulse with the music and show progress by color (see
  v3 tweaks above). Click or drag to jump. Pause makes the line go quiet.
- **Type:** Helvetica Neue (Arial on Windows). Icons: thin, sharp lines.
- Made-up song: "Where the Fog Keeps You" by Ilse Varden.

### Design 3 · Warm and Loud (formerly "Petal") — ✅ in the flow

Live as the third photo's design: `warm-loud-prototype.html`, shown inside the tool
(version `warm-loud-proto-v5`), built from Figma "Layout 16". Figma copy of v3:
section "Warm and Loud prototype v3" on the Art Director page.

- **Idea:** we're playing a **whole album**. Album cover top right, album name and
  artist next to it; the 5 songs in a zig-zag column, the playing one sticks out to the
  left in lime. Click a song (or previous/next) to play it.
- **Colors (from the first version):** #FF2A8F hot pink background, #FFB8D9 light pink
  cards and blobs, #26000F near-black ink, #D6FF2E acid lime for the playing song, the
  play button and "on" states.
- **Type:** Anton (album name, numbers, times, lyrics) + Bricolage Grotesque (song
  titles, artist).
- **Shapes:** lumpy, skewed hand-made blobs (drawn in code, they wobble gently). Every
  blob, card and button has a **3px dark edge and a hard offset shadow**, whatever its color.
- **The beat:** one clock for everything, **90 BPM**. On each beat the play blob
  **squashes like a speaker cone** and springs back (every 4th beat hits harder).
  Pause stops the beat and calms everything.
- **Bubbles:** one bubble per beat shoots out of the play button on a curved path, floats
  up (a little push on every beat, small ones rise faster, gentle sway), and **pops when
  it touches the top of the frame** (a ring + flying drops). Reference: the video in
  `References_playful`, used as inspiration only.
- **Lyrics:** two lines under the playing song (36px apart: a deliberate 4px half step);
  words light up as they're sung, the next line waits faded below.
- **Shuffle and repeat:** same rounded icons as previous/next; when on, a small lime blob
  pops in behind the icon.
- **Album cover:** "3d render" by Getty Images on Unsplash, cropped as in Figma and
  **tinted into the three pinks** (dark → ink, mid → hot pink, light → light pink), cut to
  the blob shape. Saved as `images/covers/warm-loud-album.jpg`.
- **Icons:** previous/next/shuffle/repeat/back redrawn with round line ends (first step
  toward the rounded icon set).
- Made-up album: **"Bubble Riot" by Kiki Volta**. Songs: Pink Alarm, Gum on My Shoe,
  **Gold to Dust** (playing, 1:49 of 5:00), Fizz, Loud Little Heart.
- **Tried and kept in git (`warm-loud-proto-v1`–`v4`):** Layout 15, one huge lyric word at
  a time above the controls (Anton 176px, "slot machine" change: old word out, then new
  word in). We chose Layout 16.
- **Open:** a proper rounded icon set; Figma copy of the final screen.

### Style "recipes" (important for the iOS app later)
Each style is written down as its own **recipe in a separate data file**: colors,
fonts, sizes, corner roundness, spacing, texture, layout choices, imagery.
The website reads these recipes; the iOS app will later read the **same** ones.
That way, everything we fine-tune now carries over.

## 7. The music app screen

An **immersive "now playing" view**: a full screen you actively choose to open
while a song plays, and can collapse again. Every style shows the **same moment**:
one made-up song, opened in the middle of listening (at 1:49).

**Every style has these elements (and nothing else):**
1. **Artist picture** — what it looks like may vary per style (decided later).
2. **Artist name — the hero.** Made-up artist: **Ameno Sol**.
3. **Song title.** Made-up song: **Slow Horizon**. There is **no album name**.
4. **Control buttons** — shuffle, previous, pause, next, repeat, from our own
   thin-line icon set (24×24 grid, flat line ends, open arrowheads; drawn at 1.25px,
   line weight can change per style — Warm and Calm uses 2.5px).
5. **Progress line** — starts at **1:49 of 5:00** and **plays in real time**: bar,
   playhead and time move. Pause stops it. At **5:00** the song stops and the button
   shows play; pressing play then starts over from 0:00.
6. **Illustration / background** — different per style, may be animated.
7. **Back button** (upper-left corner) and **collapse button** (upper-right corner,
   two arrows pointing inward) — same thin-line style.

**Lyrics** appear in Warm and Calm, Cool and Calm and Warm and Loud, each in its own way (see each design). The rules below are Warm and Calm's.
- One line at a time in a one-line window with softly faded edges.
- A new line every **2 seconds**. The old line rises and fades out at the top while
  the next one rises in from below (0.54s).
- "Slow Horizon" has made-up lyrics (verse, pre-chorus, chorus, verse, bridge,
  outro — 60 lines). Line 22, *"and the wind keeps the shape of where we stood"*,
  starts exactly at 1:49. The lyrics loop when they run out.
- When paused, the lyric dims.

**Desktop first** (1440×900). **Mobile** comes later, as a phone-sized version of
the same view built from the same recipe.

The *layout* of these parts can change per style (that's part of "pushed") — the
list above is what's there, not exactly where.

## 8. Imagery

- **The original photo is never used inside the design.** It's the inspiration,
  not the content — the designer sees it in the left half.
- **Related Unsplash photos** (similar mood/tags) may be used, e.g. as cover tiles —
  **only where they actually help** deliver the direction.
- Otherwise: **palette-tinted graphics** — shapes, blobs, patterns, line icons drawn
  in the style's colors.
- All photos used are saved in the project (Unsplash license allows this).
- **Credits:** only the main inspiration photo is credited (upper-left corner of the
  left half). Cover photos inside the design have **no credits** — the design is a
  vision, not a detailed mockup. (Unsplash's license doesn't require credit.)
- No AI-generated illustrations.
- **Backgrounds can be animated graphics made in code** (e.g. noise, grain,
  gradients). Motion should match the style's mood — and never make the whole
  frame feel like it's moving.

## 9. Copy to Figma

Two buttons, both a single paste into Figma:

- **Copy style guide** — a tidy card: color swatches with hex codes, font pairing,
  corner roundness, mood words.
- **Copy screen** — the whole music app screen, pasting as editable layers
  (text, shapes, colors) so the designer can take it apart and sketch further.

Both are copied as vector graphics (SVG), which Figma turns into layers on paste.
Fonts may need re-selecting in Figma if not installed.
⚠️ Riskiest technical part — test early.

**Live designs** (interactive prototype pages, like Warm and Calm): Copy style guide
works; **Copy screen is hidden for now** because the animated background is code,
not layers. The editable version lives in the Figma file instead.

On iOS later, these become a **share / save image** button.

## 10. End state

After the 4th photo: a fun message (shared with friends, so it can be playful)
and a **"start over"** button. Draft options to pick from or rewrite:

- "That's the whole playlist. Hit replay?"
- "You've drained the moodboard. Four photos, four vibes, zero left."
- "Plot twist: there were only four. Want to go again?"

## 11. Tuning tools (for us, not testers)

- **Style jump:** a hidden shortcut to jump straight to any of the 4 styles,
  so we don't have to click "upload" over and over while fine-tuning.
- **Font playground:** a separate test page to compare font options side by side
  per style, before we commit.

## 12. Tech

- **Plain website:** `index.html`, the style recipe file, and an images folder.
  No build step — preview by double-clicking `index.html`.
- **Live designs:** a recipe can point to its own prototype page (`"live"` in the
  recipe, e.g. `warm-calm-prototype.html`). The tool shows that page inside the
  design frame; the page tells the tool when its collapse button is pressed.
- **Animated backgrounds** run as shaders (small graphics-card programs, WebGL),
  with tuning knobs at the top of the file.
- **Grid:** 8px (saved in the project's `CLAUDE.md`).
- **Fonts:** Google Fonts (free), deliberately unusual picks per style.
- **Unsplash API key:** only used *while building*, to search and download the photos.
  Kept in a local `.env` file, never committed.
- **Hosting:** public GitHub repo → Vercel, as usual. Live at
  https://art-director.vercel.app (the Vercel project is still named "art-director").

## 13. Build order

1. **Pick photos** — Claude proposes 4 (+ related cover photos), I approve.
2. **Skeleton** — two halves, fake upload, loading moment, end state.
3. **Desktop music screen** — one neutral version to get the structure right.
4. **Style recipes** — first pass at all 4 styles.
5. **Font testing** — font playground, decide together.
6. **Fine-tuning** — one screen at a time (see "How we design each style"):
   ✅ Warm and Calm · ✅ Cool and Calm · ✅ Warm and Loud · Cool and Loud.
7. **Figma copy** — test early (can be pulled forward), then polish.
8. **Mobile** — stacked layout + phone music screen for each style.
9. **Ship** — commit, push, deploy.
10. **Later in the course:** native iOS app reading the same recipes.

## 14. Not doing (for now)

- Real photo upload or live Unsplash photos
- Live AI interpretation (Claude API)
- AI-generated illustrations
- Editing controls (sliders, swapping colors, locking)
- Figma variables export
- More than 4 photos
