// DESIGNS — the music app screen, one template per style.
// Each recipe's style.layout picks a template here; its colors and fonts
// come in as CSS variables (see designs.css).
// Text is deliberately placeholder: made-up names, no real artists.

(() => {
  const T = {
    album: 'Lune',
    artist: 'Ameno Sol',
    tracks: [
      ['Velar', '3:12'], ['Oro', '4:05'], ['Hush', '4:30'],
      ['Tidal', '2:58'], ['Nove', '3:41'], ['Sole', '5:02'],
    ],
    nav: ['Listen', 'Library', 'Search'],
    progress: 0.38,
  };

  const icon = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 6v12L8.5 12zM7 6v12" fill="currentColor" stroke="currentColor" stroke-width="1.6"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 6v12l8.5-6zM17 6v12" fill="currentColor" stroke="currentColor" stroke-width="1.6"/></svg>',
  };

  const pct = `${Math.round(T.progress * 100)}%`;
  const rows = (fn) => T.tracks.map((t, i) => fn(t[0], t[1], i)).join('');
  const pad = (n) => String(n + 1).padStart(2, '0');

  // Deterministic "waveform" heights
  const wave = (n) => Array.from({ length: n }, (_, i) =>
    Math.round(18 + 70 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37))));

  // ── DUNES · meditative, warm, sun-bleached, slow ─────────────────────
  const dunes = {
    desktop: () => `
      <div class="du-sun"></div>
      <nav class="du-nav">${T.nav.map((n, i) => `<span class="${i === 0 ? 'is-on' : ''}">${n}</span>`).join('')}</nav>
      <div class="du-hero">
        <p class="du-kicker">now · side a</p>
        <h1 class="du-title">${T.album}</h1>
        <p class="du-artist">${T.artist}</p>
      </div>
      <div class="du-arches">
        <figure class="du-arch du-arch--1"><span></span><figcaption>Velar</figcaption></figure>
        <figure class="du-arch du-arch--2"><span></span><figcaption>Oro</figcaption></figure>
        <figure class="du-arch du-arch--3"><span></span><figcaption>Sole</figcaption></figure>
      </div>
      <div class="du-horizon">
        <div class="du-line"><i style="width:${pct}"></i></div>
        <button class="du-play" style="left:${pct}">play</button>
        <span class="du-time du-time--a">1:42</span><span class="du-time du-time--b">4:30</span>
      </div>
      <p class="du-tracks">${rows((n, d, i) => `<span class="${i === 2 ? 'is-on' : ''}">${pad(i)} ${n}</span>`)}</p>
      <div class="grain"></div>`,

    mobile: () => `
      <nav class="du-nav du-nav--m"><span class="is-on">Listen</span><span>Library</span></nav>
      <div class="du-sun du-sun--m"></div>
      <div class="du-hero du-hero--m">
        <p class="du-kicker">now · side a</p>
        <h1 class="du-title">${T.album}</h1>
        <p class="du-artist">${T.artist}</p>
      </div>
      <div class="du-horizon du-horizon--m">
        <div class="du-line"><i style="width:${pct}"></i></div>
        <button class="du-play" style="left:${pct}">play</button>
        <span class="du-time du-time--a">1:42</span><span class="du-time du-time--b">4:30</span>
      </div>
      <p class="du-tracks du-tracks--m">${rows((n, d, i) => `<span class="${i === 2 ? 'is-on' : ''}">${pad(i)} ${n}</span>`)}</p>
      <div class="grain"></div>`,
  };

  // ── FOG · mystical, cold, hushed, veiled ─────────────────────────────
  const fog = {
    desktop: () => `
      <nav class="fo-nav">${T.nav.map((n, i) => `<span class="${i === 0 ? 'is-on' : ''}">${n}</span>`).join('')}</nav>
      <img class="fo-cover fo-cover--1" src="images/covers/fog-1.jpg" alt="">
      <img class="fo-cover fo-cover--2" src="images/covers/fog-3.jpg" alt="">
      <img class="fo-cover fo-cover--3" src="images/covers/fog-4.jpg" alt="">
      <section class="fo-glass">
        <p class="fo-kicker">now playing</p>
        <h2 class="fo-album">${T.album}</h2>
        <p class="fo-artist">${T.artist}</p>
        <ol class="fo-list">${rows((n, d, i) => `<li class="${i === 2 ? 'is-on' : ''}"><span>${pad(i)}</span>${n}<em>${d}</em></li>`)}</ol>
      </section>
      <div class="fo-player">
        <button class="fo-btn">${icon.prev}</button>
        <button class="fo-btn fo-btn--play">${icon.play}<i></i></button>
        <button class="fo-btn">${icon.next}</button>
        <div class="fo-progress"><i style="width:${pct}"></i></div>
      </div>
`,

    mobile: () => `
      <img class="fo-cover fo-cover--m" src="images/covers/fog-1.jpg" alt="">
      <section class="fo-glass fo-glass--m">
        <p class="fo-kicker">now playing</p>
        <h2 class="fo-album">${T.album}</h2>
        <p class="fo-artist">${T.artist}</p>
        <div class="fo-progress"><i style="width:${pct}"></i></div>
        <div class="fo-player fo-player--m">
          <button class="fo-btn">${icon.prev}</button>
          <button class="fo-btn fo-btn--play">${icon.play}<i></i></button>
          <button class="fo-btn">${icon.next}</button>
        </div>
      </section>
`,
  };

  // ── PETAL · loud, popping, bold, unapologetic ────────────────────────
  const petal = {
    desktop: () => `
      <h1 class="pe-title">Lune Lune</h1>
      <nav class="pe-nav">${T.nav.map((n, i) => `<span class="${i === 0 ? 'is-on' : ''}">${n}</span>`).join('')}</nav>
      <div class="pe-blob pe-blob--1"><b>01</b></div>
      <div class="pe-blob pe-blob--2"><b>02</b></div>
      <div class="pe-blob pe-blob--3"><i></i><b>03</b></div>
      <ol class="pe-list">${rows((n, d, i) => i < 5 ? `<li class="${i === 2 ? 'is-on' : ''}"><span>${pad(i)}</span>${n}<em>${d}</em></li>` : '')}</ol>
      <button class="pe-play">${icon.play}<span>play!</span></button>
      <div class="pe-bar"><div class="pe-track"><i style="width:${pct}"></i></div><span>1:42</span><span>4:30</span></div>`,

    mobile: () => `
      <h1 class="pe-title pe-title--m">Lu<br>ne</h1>
      <div class="pe-blob pe-blob--1 pe-blob--m"><b>01</b></div>
      <button class="pe-play pe-play--m">${icon.play}<span>play!</span></button>
      <p class="pe-artist">${T.artist}</p>
      <div class="pe-bar pe-bar--m"><div class="pe-track"><i style="width:${pct}"></i></div><span>1:42</span><span>4:30</span></div>
      <nav class="pe-nav pe-nav--m">${T.nav.map((n, i) => `<span class="${i === 0 ? 'is-on' : ''}">${n}</span>`).join('')}</nav>`,
  };

  // ── NEON · cold, futuristic, electric, restless ──────────────────────
  const tickerText = `now playing ▸ ${T.album} — ${T.artist} ▸ ${T.tracks.map((t) => t[0]).join(' ▸ ')} ▸ `;
  const ticker = `<div class="ne-ticker"><div class="ne-ticker__track"><span>${tickerText.repeat(3)}</span><span>${tickerText.repeat(3)}</span></div></div>`;
  const waveBars = (n) => `<div class="ne-wave">${wave(n).map((h, i) =>
    `<i style="height:${h}%" class="${i / n < T.progress ? 'is-on' : ''}"></i>`).join('')}</div>`;

  const neon = {
    desktop: () => `
      ${ticker}
      <nav class="ne-signs">${T.nav.map((n, i) => `<span class="${i === 0 ? 'is-on' : ''}">${n}</span>`).join('')}</nav>
      <h1 class="ne-title" data-text="${T.album}">${T.album}</h1>
      <div class="ne-grid">${[1, 2, 3, 4, 5, 6].map((n, i) => `
        <figure class="ne-tile ne-tile--${n}">
          <img src="images/covers/neon-${n}.jpg" alt="">
          <figcaption>${T.tracks[i][0]} <em>${T.tracks[i][1]}</em></figcaption>
        </figure>`).join('')}
      </div>
      <aside class="ne-queue">
        <p class="ne-label">queue //</p>
        <ol>${rows((n, d, i) => `<li class="${i === 2 ? 'is-on' : ''}"><span>${pad(i)}</span>${n}<em>${d}</em></li>`)}</ol>
      </aside>
      <div class="ne-player">
        <button class="ne-play">${icon.play}</button>
        ${waveBars(90)}
        <span class="ne-time">01:42 / 04:30</span>
      </div>
      <div class="scanlines"></div>`,

    mobile: () => `
      ${ticker}
      <h1 class="ne-title ne-title--m" data-text="${T.album}">${T.album}</h1>
      <figure class="ne-tile ne-tile--m"><img src="images/covers/neon-1.jpg" alt=""><figcaption>${T.artist}</figcaption></figure>
      <div class="ne-player ne-player--m">
        ${waveBars(36)}
        <span class="ne-time">01:42 / 04:30</span>
        <button class="ne-play">${icon.play}</button>
      </div>
      <nav class="ne-signs ne-signs--m">${T.nav.map((n, i) => `<span class="${i === 0 ? 'is-on' : ''}">${n}</span>`).join('')}</nav>
      <div class="scanlines"></div>`,
  };

  window.DESIGNS = { dunes, fog, petal, neon };
})();
