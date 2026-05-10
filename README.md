# Shailender Singh Portfolio

A personal portfolio built with Next.js 16 and React 19 that showcases professional experience, technical skills, certification credentials, and technical writing.

## Overview

This portfolio is a custom Next.js app rendered from `index.jsx` and organized into reusable React components under `components/`.

Key sections:
- Hero introduction with contact links and career headline
- Skills & expertise cards
- Experience timeline with detail panels
- Achievements summary
- Certifications and course certificate gallery
- Education, interests, and professional highlights
- Blog page with external links to Medium publications

Static certificate images are stored in `public/certificates/` and displayed in the certifications section.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4 (configured but mostly inline component styling is currently used)
- TypeScript support via `tsconfig.json`

## Run Locally

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

## Project Structure

- `index.jsx` — root client component that renders the portfolio sections
- `app/page.tsx` — Next.js page that imports and renders `App`
- `components/` — reusable UI components for each page section
- `components/data.js` — portfolio data and certificate metadata
- `components/utils.js` — shared helpers like scroll and viewport tracking
- `public/certificates/` — certificate image assets
- `app/globals.css` — global base styles

## Customization

To update profile text or certifications, edit the data in `components/data.js`.

To add or remove certification images, place the image files in `public/certificates/` and update `COURSE_CERTS` in `components/data.js`.

## Notes

- The app uses a client-side React root component in `index.jsx` with the Next.js `app/page.tsx` wrapper.
- Components are intentionally kept reusable and self-contained with inline styling for fast layout updates.
- Certificate thumbnails are clickable and link to the full image in the `public/certificates/` folder.

## License

This portfolio project is available under the MIT License.