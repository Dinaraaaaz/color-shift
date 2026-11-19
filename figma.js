// COPY TO FIGMA
// Both buttons put SVG code on the clipboard. Figma turns pasted SVG code
// into editable layers. If copying fails, the SVG file is downloaded instead
// (drag it into Figma).

(() => {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // ── Style guide card (hand-built SVG, so it's clean and predictable) ──
  function styleGuideSVG(r, score) {
    const c = r.style.colors;
    const f = r.style.fonts;
    const W = 1200, H = 780;
    const swatches = Object.entries(c);
    const sw = 150, gap = 22, sx = 60, sy = 300;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${c.bg}"/>
  <text x="60" y="130" fill="${c.text}" font-family="${esc(f.display)}" font-size="96" font-style="italic">${esc(r.name)}</text>
  <text x="62" y="180" fill="${c.muted}" font-family="${esc(f.body)}" font-size="20" letter-spacing="2">${esc(r.moodWords.join('  ·  '))}</text>
  <text x="62" y="230" fill="${c.text}" font-family="${esc(f.body)}" font-size="15">${esc(r.style.idea)}</text>
${swatches.map(([role, hex], i) => {
    const x = sx + i * (sw + gap);
    return `  <rect x="${x}" y="${sy}" width="${sw}" height="${sw}" rx="10" fill="${hex}" stroke="${c.text}" stroke-opacity="0.2"/>
  <text x="${x}" y="${sy + sw + 30}" fill="${c.text}" font-family="${esc(f.body)}" font-size="15">${esc(role)}</text>
  <text x="${x}" y="${sy + sw + 52}" fill="${c.muted}" font-family="${esc(f.body)}" font-size="15">${hex.toUpperCase()}</text>`;
  }).join('\n')}
  <text x="60" y="660" fill="${c.text}" font-family="${esc(f.display)}" font-size="88" font-style="italic">Aa</text>
  <text x="200" y="622" fill="${c.text}" font-family="${esc(f.body)}" font-size="16">Display: ${esc(f.display)} (${esc(f.displayStyle)})</text>
  <text x="200" y="650" fill="${c.text}" font-family="${esc(f.body)}" font-size="16">Body: ${esc(f.body)} (${esc(f.bodyStyle)})</text>
  <text x="200" y="678" fill="${c.muted}" font-family="${esc(f.body)}" font-size="16">Shape: ${esc(r.style.radius)} · Texture: ${esc(r.style.texture)}</text>
  <text x="60" y="740" fill="${c.text}" font-family="${esc(f.body)}" font-size="15">Contrast, text on background: ${score.ratio}:1 · ${score.grade}</text>
  <text x="${W - 60}" y="740" text-anchor="end" fill="${c.muted}" font-family="${esc(f.body)}" font-size="13">Inspired by a photo by ${esc(r.photo.photographer)} on Unsplash</text>
</svg>`;
  }

  // ── The screen: convert the live design into real SVG layers ──────────
  async function screenSVG(screenEl) {
    const { elementToSVG, inlineResources } =
      await import('https://cdn.jsdelivr.net/npm/dom-to-svg@0.12.2/+esm');

    // Render an unscaled copy off to the side, so the SVG is full size.
    const holder = document.createElement('div');
    holder.style.cssText = 'position:fixed;left:0;top:0;z-index:-1;opacity:0;pointer-events:none;';
    const clone = screenEl.cloneNode(true);
    clone.removeAttribute("id");
    clone.style.transform = 'none';
    clone.style.translate = 'none';
    clone.style.left = '0';
    clone.style.top = '0';
    clone.style.transition = 'none';
    holder.appendChild(clone);
    document.body.appendChild(holder);
    try {
      await document.fonts.ready;
      const svgDoc = elementToSVG(clone);
      try { await inlineResources(svgDoc.documentElement); } catch (e) { /* images stay as links */ }
      return new XMLSerializer().serializeToString(svgDoc);
    } finally {
      holder.remove();
    }
  }

  // ── Clipboard (with a download fallback) ───────────────────────────────
  async function copyOrDownload(svg, filename) {
    try {
      await navigator.clipboard.writeText(svg);
      return 'copied';
    } catch (e) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      return 'downloaded';
    }
  }

  window.FIGMA = { styleGuideSVG, screenSVG, copyOrDownload };
})();
