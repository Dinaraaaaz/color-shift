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
6. **After the 4th photo:** a fun end state with a "start over" button (section 10).

## 5. Layout

**Desktop (website):** two halves side by side, like MDS's Color Shift.
- **Left half:** upload area → then the photo, full-bleed, with photographer credit.
- **Right half:** the music app design, desktop size, scaled down to fit the half.
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

### Style "recipes" (important for the iOS app later)
Each style is written down as its own **recipe in a separate data file**: colors,
fonts, sizes, corner roundness, spacing, texture, layout choices, imagery.
The website reads these recipes; the iOS app will later read the **same** ones.
That way, everything we fine-tune now carries over.

## 7. The music app screen

A **placeholder** music app. It should feel like a music app without saying so.

- **Minimal / placeholder text** — short made-up words, lorem, or text shown as lines
  and blocks. Don't give away too much what it is.
- **Music is suggested by shapes:** cover tiles, play button, progress bar,
  track-list rows, a now-playing bar.

**Desktop version** (first round) — e.g. sidebar navigation, a big header area,
a grid of cover tiles, a track list, a now-playing bar at the bottom.

**Mobile version** (second round) — e.g. a now-playing screen or home feed sized
for a phone, built from the same recipe.

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

## 9. Copy to Figma

Two buttons, both a single paste into Figma:

- **Copy style guide** — a tidy card: color swatches with hex codes, font pairing,
  corner roundness, mood words.
- **Copy screen** — the whole music app screen, pasting as editable layers
  (text, shapes, colors) so the designer can take it apart and sketch further.

Both are copied as vector graphics (SVG), which Figma turns into layers on paste.
Fonts may need re-selecting in Figma if not installed.
⚠️ Riskiest technical part — test early.

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
- **Fonts:** Google Fonts (free), deliberately unusual picks per style.
- **Unsplash API key:** only used *while building*, to search and download the photos.
  Kept in a local `.env` file, never committed.
- **Hosting:** public GitHub repo → Vercel, as usual.

## 13. Build order

1. **Pick photos** — Claude proposes 4 (+ related cover photos), I approve.
2. **Skeleton** — two halves, fake upload, loading moment, end state.
3. **Desktop music screen** — one neutral version to get the structure right.
4. **Style recipes** — first pass at all 4 styles.
5. **Font testing** — font playground, decide together.
6. **Fine-tuning** — iterate on each style until it feels pushed and right.
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
