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
  collapse();
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

  // Right: the design is only drawn once the reading moment is over,
  // so nothing peeks through while the previous design fades out.
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
  renderDesign(recipes[current]);
  app.classList.remove('is-reading');
  app.classList.add('has-design');
}

function showEnd() {
  clearTimers();
  end.hidden = false;
}

function reset() {
  clearTimers();
  collapse();
  busy = false;
  current = -1;
  end.hidden = true;
  reading.innerHTML = '';
  app.classList.remove('has-photo', 'has-design', 'is-reading');
  photo.removeAttribute('src');
}

// ── The design ──────────────────────────────────────────────────────────

const phone = matchMedia('(max-width: 760px)');
const SIZES = { desktop: [1440, 900], mobile: [390, 844] };
const device = () => (phone.matches ? 'mobile' : 'desktop');

function renderDesign(r) {
  const s = r.style;
  const c = s.colors;
  const d = device();
  screen.classList.toggle('screen--m', d === 'mobile');
  screen.innerHTML = `
    <div class="ms ms--${s.layout}" style="
      --bg:${c.bg}; --surface:${c.surface}; --text:${c.text}; --muted:${c.muted};
      --accent:${c.accent}; --glow:${c.glow};
      --display:'${s.fonts.display}', serif; --body:'${s.fonts.body}', sans-serif;">
      ${window.DESIGNS[s.layout][d]()}
    </div>`;

  // A "live" design is its own interactive page (e.g. the Warm and Calm prototype)
  const live = s.live && d === 'desktop';
  app.classList.toggle('is-live', !!live);
  if (live) screen.innerHTML = `<iframe class="live" src="${s.live}" title="${r.name}, live design"></iframe>`;
  // Copying a live design to Figma isn't supported yet (its background is animated code)
  $('copyScreen').hidden = !!live;

  const score = contrast(c.text, c.bg);
  $('styleName').textContent = r.name;
  $('styleWords').textContent = r.moodWords.join(' / ');
  $('score').innerHTML = `<b>${score.grade} ✓</b>${score.ratio}:1`;
  fitScreen();
}

// Scale the screen so it fits its half with some breathing room
function fitScreen() {
  const [w, h] = SIZES[device()];
  const box = stage.getBoundingClientRect();
  const pad = Math.min(56, box.width * 0.06);
  const fit = Math.min((box.width - pad * 2) / w, (box.height - pad * 2) / h);
  screen.style.setProperty('--fit', Math.max(fit, 0.05).toFixed(4));
  // full-screen size: as big as the window allows
  screen.style.setProperty('--fit-full', Math.min(innerWidth / w, innerHeight / h).toFixed(4));
}

// ── Expand: show the design full screen ─────────────────────────────────
// The same screen element grows, so a live design keeps playing without restarting.

function expand() {
  if (!app.classList.contains('has-design')) return;
  fitScreen();
  app.classList.add('is-expanded');
}
function collapse() { app.classList.remove('is-expanded'); }

$('expand').addEventListener('click', expand);
$('expandClose').addEventListener('click', collapse);
addEventListener('keydown', (e) => { if (e.key === 'Escape') collapse(); });
// The live design's own collapse/back buttons (and Esc inside it) send a message
addEventListener('message', (e) => { if (e.data && e.data.colorShift === 'collapse') collapse(); });
addEventListener('resize', fitScreen);
phone.addEventListener('change', () => { if (current >= 0) renderDesign(recipes[current]); });

// ── Readability score (WCAG 2 contrast) ─────────────────────────────────

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  const ratio = (hi + 0.05) / (lo + 0.05);
  const grade = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3 ? 'AA Large' : 'Fail';
  return { ratio: ratio.toFixed(1), grade };
}

// ── Copy to Figma ───────────────────────────────────────────────────────

async function copyTo(button, makeSVG, filename) {
  const label = button.textContent;
  button.textContent = 'Copying…';
  try {
    const result = await window.FIGMA.copyOrDownload(await makeSVG(), filename);
    button.textContent = result === 'copied' ? 'Copied, paste in Figma' : 'Downloaded .svg';
    button.classList.add('is-done');
  } catch (e) {
    console.error(e);
    button.textContent = 'Couldn’t copy';
  }
  setTimeout(() => { button.textContent = label; button.classList.remove('is-done'); }, 2200);
}

$('copyGuide').addEventListener('click', (e) => {
  const r = recipes[current];
  const c = r.style.colors;
  copyTo(e.currentTarget, () => window.FIGMA.styleGuideSVG(r, contrast(c.text, c.bg)), `${r.id}-style-guide.svg`);
});
$('copyScreen').addEventListener('click', (e) => {
  const r = recipes[current];
  copyTo(e.currentTarget, () => window.FIGMA.screenSVG(screen), `${r.id}-${device()}-screen.svg`);
});

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
