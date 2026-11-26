export const brandMarkSvg = `
<svg class="brand-mark" viewBox="0 0 60 60" fill="none" aria-hidden="true">
  <path d="M32 30c-2-8-12-7-13 1-2 12 16 17 24 6C56 18 28 2 13 17-9 40 26 67 47 46" stroke="currentColor" stroke-width="2.3"></path>
  <path d="m31 22 1-8m-9 10-4-8m-2 14-9-2m10 10-8 4m16 4-3 9m13-10 4 9m5-17 9 3m-7-15 9-3m-15-9 5-7" stroke="currentColor" stroke-width="1.6"></path>
</svg>
`;

const svgWrap = (inner, className = '') =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const icons = {
  arrowUpRight: (cls = '') =>
    svgWrap('<path d="M7 7h10v10"/><path d="M7 17 17 7"/>', cls),
  arrowDown: (cls = '') =>
    svgWrap('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>', cls),
  mapPin: (cls = '') =>
    svgWrap('<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>', cls),
  layers: (cls = '') =>
    svgWrap('<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>', cls),
  fingerprint: (cls = '') =>
    svgWrap('<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>', cls),
  mountain: (cls = '') =>
    svgWrap('<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>', cls),
  leaf: (cls = '') =>
    svgWrap('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>', cls),
  orbit: (cls = '') =>
    svgWrap('<circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.4 21.9a10 10 0 0 0 9.941-15.416"/><path d="M13.5 2.1a10 10 0 0 0-9.841 15.416"/>', cls),
  compass: (cls = '') =>
    svgWrap('<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>', cls),
  bookOpen: (cls = '') =>
    svgWrap('<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>', cls),
  graduationCap: (cls = '') =>
    svgWrap('<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>', cls),
  menu: (cls = '') =>
    svgWrap('<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>', cls),
  x: (cls = '') =>
    svgWrap('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>', cls),
  rotateCcw: (cls = '') =>
    svgWrap('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>', cls),
  circleCheck: (cls = '') =>
    svgWrap('<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>', cls),
  loaderCircle: (cls = '') =>
    svgWrap('<path d="M21 12a9 9 0 1 1-6.219-8.56"/>', cls),
  whatsapp: (cls = '') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.52 14.98L2 22l5.18-1.48A9.92 9.92 0 1 0 12.04 2Zm5.78 14.07c-.24.68-1.42 1.31-1.97 1.39-.51.07-1.15.1-1.86-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.91-4.29-5.06-4.49-.15-.2-1.21-1.61-1.21-3.08 0-1.46.76-2.18 1.03-2.48.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.24.59.83 2.04.9 2.19.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.61.18.3.78 1.29 1.67 2.09 1.15 1.02 2.11 1.34 2.41 1.49.3.15.48.13.66-.07.18-.2.76-.89.97-1.19.2-.3.41-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.08.13.08.74-.16 1.42Z"/></svg>`,
  shieldCheck: (cls = '') =>
    svgWrap('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>', cls),
  users: (cls = '') =>
    svgWrap('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', cls),
  check: (cls = '') =>
    svgWrap('<path d="M20 6 9 17l-5-5"/>', cls),
  alertTriangle: (cls = '') =>
    svgWrap('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>', cls),
  star: (cls = '') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.93 5.94 6.56.95-4.74 4.62 1.12 6.53L12 17.46l-5.87 3.08 1.12-6.53L2.51 9.39l6.56-.95L12 2.5z"/></svg>`,
};

export const topoArtwork = {
  vaupes: `
    <svg class="topo-art" viewBox="0 0 360 220" fill="none" aria-hidden="true">
      <path d="M20 175 C85 150, 120 195, 190 160 C250 130, 290 165, 345 140" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
      <path d="M15 190 C90 168, 130 205, 200 176 C265 148, 300 178, 350 158" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <path d="M60 118 L92 64 L196 60 L238 112" stroke="currentColor" stroke-width="1.4" opacity="0.75"/>
      <path d="M98 64 L106 112 M188 61 L180 112" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3" opacity="0.45"/>
      <path d="M120 84 C140 76, 162 84, 174 78" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <circle cx="282" cy="68" r="22" stroke="currentColor" stroke-width="1" opacity="0.35"/>
      <circle cx="282" cy="68" r="11" stroke="currentColor" stroke-width="0.9" opacity="0.55"/>
    </svg>
  `,
  guaviare: `
    <svg class="topo-art" viewBox="0 0 360 220" fill="none" aria-hidden="true">
      <path d="M30 164 L90 76 L156 68 L224 78 L280 164" stroke="currentColor" stroke-width="1.4" opacity="0.75"/>
      <path d="M122 164 C124 122, 140 102, 160 102 C180 102, 196 122, 198 164" stroke="currentColor" stroke-width="1.4" opacity="0.85"/>
      <path d="M22 182 C110 164, 240 164, 340 182" stroke="currentColor" stroke-width="1" opacity="0.4"/>
      <path d="M268 72 C292 62, 316 74, 336 66" stroke="currentColor" stroke-width="1" opacity="0.35"/>
      <path d="M52 104 L68 104 M60 96 L60 112 M296 114 L312 114 M304 106 L304 122" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    </svg>
  `,
  desierto: `
    <svg class="topo-art" viewBox="0 0 360 120" fill="none" aria-hidden="true">
      <path d="M10 92 L78 44 L134 72 L198 34 L268 78 L350 56" stroke="currentColor" stroke-width="1.4" opacity="0.7"/>
      <path d="M10 104 C95 88, 175 112, 260 94 C300 86, 330 94, 350 90" stroke="currentColor" stroke-width="1" opacity="0.4"/>
      <circle cx="298" cy="30" r="10" stroke="currentColor" stroke-width="1.1" opacity="0.6"/>
    </svg>
  `,
};
