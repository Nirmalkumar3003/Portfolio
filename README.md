# Nirmalkumar M — Portfolio (React + Vite + TypeScript)

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview
```

## Structure
```
src/
  App.tsx              page composition
  main.tsx             entry
  data/content.ts      ALL editable content: links, skills, projects, timeline
  components/          Loader, ParticleField, Cursor, Header, Hero, About,
                       Skills, Projects, Journey, Contact
  hooks/               useReveal, useMagnetic, useScrollState
  styles/global.css    design tokens + styles
```
Edit `src/data/content.ts` to update projects, skills, links and timeline.

## Deploy
Push to GitHub and import into Vercel/Netlify (build `npm run build`, output `dist`).
