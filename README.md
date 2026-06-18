# Shailender Singh Portfolio

A personal portfolio built with Next.js 16 and React 19 that showcases professional experience, technical skills, certification credentials, technical writing, and SEO optimization.

## Overview

This portfolio is a custom Next.js application rendered from `index.jsx` and structured with reusable React components located under the `components/` directory. The visual theme uses premium glassmorphism patterns, custom typography, and accent gradients.

Key sections:
- **Hero**: Introduction with typing roles animation, availability tag, custom coding terminal card, and quick social links.
- **Navbar**: Responsive sticky bar featuring a client-side theme switcher dropdown (System, Light, Dark) and mobile drawer toggle.
- **Skills**: Glassmorphic columns with color-accent indicators.
- **Experience**: Responsive tabbed layout that highlights career roles, Citibank lead details, and solves contrast readability issues.
- **Achievements**: Grid showcasing metrics in gradient typography with hover scaling.
- **Certifications**: Gallery highlighting AWS/MongoDB vendor credentials and course certificates in clickable overlays.
- **Background**: Integrated three-column dashboard displaying education, interest tags, and high-level statistics.
- **Blog Page**: Detailed layout showing technical insights with direct Medium publication links and readability contrast configurations.

---

## Tech Stack & Features

- **Next.js 16 & React 19**
- **Tailwind CSS v4**: Built with full utilities and theme variables configured in [globals.css](app/globals.css) for Light and Dark modes.
- **Dynamic SEO Utilities**: Custom [sitemap.ts](app/sitemap.ts) and [robots.ts](app/robots.ts) dynamically generating crawler directories on build.
- **JSON-LD Structured Data**: Injected Person schemas inside root metadata layouts to optimize rich search snippet rankings.
- **Modern Typography**: Integrated **Outfit** (headings/display) and **Plus Jakarta Sans** (body text) fonts.

---

## Running Locally

Install dependencies first:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the site in your browser at:
```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production server after building:

```bash
npm start
```

---

## Project Structure

- `index.jsx` — root client component managing page layout, global fonts, and theme loaders
- `app/page.tsx` — Next.js index entry rendering `App`
- `app/layout.tsx` — Next.js layout setting up SEO metadata, JSON-LD schemas, and scripts
- `app/sitemap.ts` — dynamic XML sitemap generation rules
- `app/robots.ts` — search engine indexing rules and crawler policies
- `app/globals.css` — global design variables, glassmorphic panels, and hover animations
- `components/` — reusable styling structures for sections
- `components/data.js` — central registry for skills, timeline, achievements, and certificate paths
- `components/utils.js` — shared viewport hooks and scroll animators
- `public/certificates/` — local images displaying credentials

---

## Customization

To update profile details or achievements, edit the data structure inside `components/data.js`.

To append credentials, upload certificate files to `public/certificates/` and register them inside `COURSE_CERTS` in `components/data.js`.

---

## License

This portfolio project is licensed under the MIT License.