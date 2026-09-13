# SAIT — Department Journal

A complete multi-page Next.js App Router + Tailwind CSS website concept for the Students’ Association of Information Technology, School of Engineering, CUSAT.

## Run

```bash
npm install
npm run dev
```

Build for Vercel:

```bash
npm run build
npm start
```

## Structure

- `app/` — App Router pages
- `components/` — shared UI and client-side interactive components
- `data/site.ts` — typed-ish central mock content objects; edit this file to update people, events, alumni, achievements, etc.
- `app/globals.css` — editorial design system

## Notes

- Activity Logger uses `localStorage` for browser-local submission persistence.
- Map is an OpenStreetMap embed; no image assets are required.
- Face/profile imagery is intentionally CSS-based so the site has no external image dependency.
- All statistics and institutional people data are mock/demo content and should be replaced with verified SAIT/CUSAT information before production use.
