# Copilot Instructions for SOX-Frond-End

## Project Overview
- This is a React single-page application (SPA) using Vite for fast development and HMR.
- The main source code is in `client/src/`, organized by components, pages, context, and assets.
- No backend code is present in this repo; focus is on frontend UI/UX.

## Key Architecture & Patterns
- **Component Structure:**
  - Reusable UI components are in `client/src/components/` (e.g., `Hero.jsx`, `Navbar.jsx`).
  - Page-level views are in `client/src/pages/` (e.g., `Home.jsx`, `Events.jsx`).
  - Shared context/state is managed in `client/src/context/AppContext.jsx`.
- **Styling:**
  - CSS modules per component/page (e.g., `Hero.css`, `Home.css`).
  - Use class-based selectors; avoid inline styles.
- **Assets:**
  - Images and SVGs are in `client/src/assets/` and subfolders.

## Developer Workflows
- **Start Dev Server:**
  - Run `npm install` then `npm run dev` in the `client/` directory.
- **Build for Production:**
  - Run `npm run build` in `client/`.
- **Linting:**
  - ESLint is configured via `client/eslint.config.js`.
  - Run `npm run lint` in `client/`.
- **No test suite is present** (as of current structure).

## Conventions & Practices
- **File Naming:**
  - Use PascalCase for React components and CSS files.
  - Use lowercase for assets and folders.
- **Component Props:**
  - Pass props explicitly; avoid using context for simple data.
- **Navigation:**
  - No router detected; navigation is likely manual or single-page.
- **External Dependencies:**
  - Vite, React, ESLint (see `client/package.json`).

## Examples
- To add a new page, create `PageName.jsx` and `PageName.css` in `client/src/pages/`.
- To add a new component, create `ComponentName.jsx` and `ComponentName.css` in `client/src/components/`.

## References
- See `client/README.md` for Vite/React setup details.
- See `client/package.json` for scripts and dependencies.

---

**If any section is unclear or missing, please provide feedback to improve these instructions.**
