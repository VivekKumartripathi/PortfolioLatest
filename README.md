# Vivek Kumar — Portfolio (Next.js + TypeScript)

One-page developer portfolio built with **Next.js 15 (App Router) and TypeScript**, plus a printable resume at `/resume.html`.

## Run it

```bash
npm install
npm run dev      # development server → http://localhost:3000 (hot reload)
npm run build    # production build → static site in /out
npm run preview  # serve /out at http://localhost:4000 (resume opens as /resume.html)
npm start        # build + preview in one step
```

Stop `npm run dev` before building — both use the `.next` folder.
The contact form sends through Web3Forms, so it works on any host and on localhost. Set your free access key in `contactForm.accessKey` in `data/portfolio.ts` (get one at https://web3forms.com).

## Project structure

```
app/
  layout.tsx       Root layout: <html>, fonts (next/font), page <title> and description
  page.tsx         The "/" route — stacks all section components in order
  globals.css      All styling; theme colours are CSS variables in :root
components/
  Nav.tsx          "use client" — mobile menu state + solid header on scroll
  RevealObserver   "use client" — fades sections in as they scroll into view
  RotatingWord     "use client" — typewriter word in the hero
  CountUp          "use client" — stats count up when scrolled into view
  ScrollProgress   "use client" — accent progress bar at the top
  Spotlight        "use client" — mouse-follow glow on `.spot` cards
  Hero, Marquee, Impact, Architecture, CaseStudies, Work, Capabilities, Journey, About, Contact, Footer
                   Server components — read data and render static HTML
data/
  portfolio.ts     ALL text content + the interfaces (Project, Job, CaseStudy …) that type it
public/
  resume.html      Printable A4 resume (served as-is at /resume.html)
  favicon.svg
next.config.ts     output: "export" → static HTML for Netlify
netlify.toml       Netlify build settings (publish the /out folder)
```

## How it was built — step by step

1. **Scaffold the app**
   ```bash
   npx create-next-app@15 portfolio --js --app --no-tailwind --no-eslint --no-src-dir --import-alias "@/*" --use-npm
   ```
   `--app` selects the App Router: folders inside `app/` are URLs and `page.tsx` is the page.
   `--import-alias "@/*"` allows `import Nav from "@/components/Nav"` from anywhere.

2. **Remove the template** — delete the demo SVGs, `page.module.css` and `favicon.ico`; create `components/` and `data/`.

3. **Static export** — in `next.config.ts` set `output: "export"`. `npm run build` then writes plain
   HTML/CSS/JS to `out/`, which any static host can serve with no Node server.

4. **Fonts and metadata** — in `app/layout.tsx`, load Manrope and JetBrains Mono with `next/font/google`.
   Fonts are downloaded at build time and self-hosted. Each exposes a CSS variable (`--font-manrope`),
   put on `<html>` so `:root` in `globals.css` can use it. `export const metadata` sets the title.

5. **Content as data** — every piece of text lives in `data/portfolio.ts` as typed arrays/objects.
   Components only map over it, so updating the site never means touching JSX.

6. **Components — Server vs Client**
   - Default in the App Router = **Server Component**: rendered to HTML at build time, no JS shipped.
   - Add `"use client"` at the top only when you need browser features (`useState`, `useEffect`, `window`).
   - Here only the interactive pieces are client components: `Nav`, `ContactForm`, `WorkGrid`, the
     animation helpers (`RevealObserver`, `CountUp`, `RotatingWord`, `NetworkCanvas`, …) and `CurrentYear`.

7. **Compose the page** — `app/page.tsx` imports and stacks the sections. Section `id`s
   (`#work`, `#contact` …) make the nav links scroll to them.

8. **Progressive enhancement** — `.reveal` elements are hidden only after JS adds a `js` class to
   `<html>`, so the content is still visible if JavaScript is slow or disabled.

9. **Resume** — `public/resume.html` is a standalone A4 page with print CSS; the "Download PDF"
   button calls `window.print()` → *Save as PDF*.

10. **Build and deploy** — `npm run build`, then on Netlify: *Add new site → Import from GitHub*.
    `netlify.toml` already tells it to run `npm run build` and publish `out/`.

11. **Convert to TypeScript** — TypeScript is compiled to the same JavaScript, so it adds safety, not speed.
    ```bash
    npm install --save-dev typescript @types/react @types/react-dom @types/node
    git mv components/Nav.jsx components/Nav.tsx     # repeat: .jsx → .tsx, .js → .ts
    ```
    - Replace `jsconfig.json` with a `tsconfig.json` (`"strict": true`, same `@/*` path alias).
    - Run `npx tsc --noEmit` and fix what it reports. Typical fixes:
      - props: `function RotatingWord({ words }: { words: string[] })`
      - refs: `useRef<HTMLCanvasElement>(null)`, then check `if (!canvas) return;`
      - events: `(e: FormEvent<HTMLFormElement>)`, `(e: PointerEvent)`
      - data: interfaces (`Project`, `Job`, `CaseStudy` …) in `data/portfolio.ts`, e.g. `export const projects: Project[]`
      - CSS variables in `style`: `{ "--i": i } as CSSProperties`
    - `next build` also type-checks, so a type error stops a broken deploy.

## Editing

| Want to change… | Edit |
|---|---|
| Any text, project, skill or job | `data/portfolio.ts` |
| Colours / theme | `:root` variables at the top of `app/globals.css` |
| Page title | `metadata` in `app/layout.tsx` |
| Resume (visual, with diagram) | `public/resume.html` |
| Resume (ATS, for job portals) | `public/resume-ats.html` — plain text version; keep its content in sync with `resume.html` |
