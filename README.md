# Rakhy Rakhym — Portfolio

Single-viewport portfolio landing page. Vue 3 + TypeScript + Tailwind CSS v4 + Vite.

## Scripts

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173
npm run build      # type-check + production build to ./dist
npm run preview    # serve ./dist locally
```

## Deploy

The project is static. `vercel.json` is included — push to a Git repo and import it in Vercel,
or run `npx vercel` from this folder. Any static host (Netlify, GitHub Pages, Cloudflare Pages)
works with `npm run build` and `dist` as the output directory.

## Structure

```
index.html                     entry HTML, fonts, meta tags
public/favicon.svg             star-motif favicon
src/main.ts                    app bootstrap
src/style.css                  Tailwind v4 entry + theme tokens + global reset
src/App.vue                    root component
src/components/RakhyPortfolio.vue   the landing page (scale system in <style>)
```

## Editing content

All text, links and projects live in `src/components/RakhyPortfolio.vue`.
Projects are defined in the `projects` array inside `<script setup>`.
