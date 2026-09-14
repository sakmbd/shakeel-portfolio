// Self-hosted webfonts, latin subset only, static weight files (no variable-font
// overhead), font-display: swap by default. Total payload ≈104KB:
//  - Fraunces (display serif, identity/headings): 500 + 700, ~20KB WOFF2 each
//  - Manrope (UI/body sans): 400/500/600/700, ~16KB WOFF2 each
import '@fontsource/fraunces/latin-500.css';
import '@fontsource/fraunces/latin-700.css';
import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-500.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
