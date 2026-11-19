// Color Shift — prototype logic.
// "Upload" is fake: it just shows the next photo from data/recipes.js.

const recipes = window.RECIPES;
const app = document.querySelector('.app');
const $ = (id) => document.getElementById(id);

const photo = $('photo');
const credit = $('credit');
const reading = $('reading');
const screen = $('screen');
const stage = $('stage');
const end = $('end');

const READING_LINES = ['sampling colors…', 'finding the mood…', 'picking a typeface…', 'composing the screen…'];
const LINE_DELAY = 480;   // ms between status lines (~2 s total)

let current = -1;         // -1 = nothing uploaded yet
let busy = false;
let timers = [];

// Preload photos so "uploading" feels instant
recipes.forEach((r) => { new Image().src = r.photo.file; });

// ── The flow ────────────────────────────────────────────────────────────

function upload() {
  if (busy) return;
  if (current === recipes.length - 1) return showEnd();
  show(current + 1, { animate: true });
}

function show(index, { animate }) {
  clearTimers();
  end.hidden = true;
  current = index;
  const r = recipes[index];

  // Left: the photo + credit
  app.classList.remove('has-design');
  app.classList.add('has-photo');
  photo.style.opacity = 0;
  photo.onload = () => { photo.style.opacity = ''; };
  photo.src = r.photo.file;
  photo.alt = r.photo.alt || '';
  credit.href = r.photo.photographerUrl;
  credit.textContent = `Photo by ${r.photo.photographer} · Unsplash`;

  // Right: build the design (hidden until reading is done)
  renderDesign(r);

  if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealDesign();
    return;
  }

  // Fake reading moment
  busy = true;
  app.classList.add('is-reading');
  reading.innerHTML = '';
  READING_LINES.forEach((text, i) => {
    later(() => {
      reading.lastElementChild?.classList.add('is-done');
      reading.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
    }, 350 + i * LINE_DELAY);
  });
  later(() => {
    reading.lastElementChild?.classList.add('is-done');
    reading.insertAdjacentHTML('beforeend', `<li class="is-words">${r.moodWords.join(', ')}</li>`);
  }, 350 + READING_LINES.length * LINE_DELAY);
  later(revealDesign, 350 + READING_LINES.length * LINE_DELAY + 1100);
}

function revealDesign() {
  busy = false;
  reading.innerHTML = '';
  app.classList.remove('is-reading');
  app.classList.add('has-design');
  fitScreen();
}

function showEnd() {
  clearTimers();
  end.hidden = false;
}

function reset() {
  clearTimers();
  busy = false;
  current = -1;
  end.hidden = true;
  reading.innerHTML = '';
  app.classList.remove('has-photo', 'has-design', 'is-reading');
  photo.removeAttribute('src');
}

// ── The design (placeholder until step 3) ──────────────────────────────

function renderDesign(r) {
  screen.style.background = r.style.background;
  screen.innerHTML = `
    <div class="placeholder">
      <strong>${r.name}</strong>
      <span>${r.moodWords.join(' · ')}</span>
      <span>music screen — build step 3</span>
    </div>`;
  $('styleName').textContent = r.name;
  $('styleWords').textContent = r.moodWords.join(' / ');
}

// Scale the 1440×900 screen so it fits its half with some breathing room
function fitScreen() {
  const box = stage.getBoundingClientRect();
  const pad = Math.min(56, box.width * 0.06);
  const fit = Math.min((box.width - pad * 2) / 1440, (box.height - pad * 2) / 900);
  screen.style.setProperty('--fit', Math.max(fit, 0.05).toFixed(4));
}
addEventListener('resize', fitScreen);

// ── Helpers ─────────────────────────────────────────────────────────────

function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
function clearTimers() { timers.forEach(clearTimeout); timers = []; }

// ── Buttons ─────────────────────────────────────────────────────────────

$('upload').addEventListener('click', upload);
$('refresh').addEventListener('click', upload);
$('restart').addEventListener('click', reset);

// ── Hidden tuning shortcuts (for us, not testers) ───────────────────────
// Keys 1–4: jump straight to a style · 0: back to empty · E: end screen
// Or open index.html?style=2 to start on a style.

addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const n = Number(e.key);
  if (n >= 1 && n <= recipes.length) show(n - 1, { animate: false });
  else if (e.key === '0') reset();
  else if (e.key.toLowerCase() === 'e') showEnd();
});

const startStyle = Number(new URLSearchParams(location.search).get('style'));
if (startStyle >= 1 && startStyle <= recipes.length) show(startStyle - 1, { animate: false });
fitScreen();
