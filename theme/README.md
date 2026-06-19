# Design tokens

This folder contains design tokens exported from DESIGN.md used by Tailwind and global styles.

- `tokens.json` — canonical source for colors, spacing, radii and typography used in `tailwind.config.cjs`.

Usage:

- Tailwind reads tokens in `tailwind.config.cjs` and maps them to `theme.extend`.
- Web uses `global.css` which also exports a set of CSS custom properties mirroring the tokens.

Fonts:

- Web fonts are imported in `global.css` via Google Fonts.
- For native apps, bundle Inter font files into `assets/fonts/` and update `src/theme/fonts.ts` load mapping. Then call `loadFonts()` before rendering your app.
