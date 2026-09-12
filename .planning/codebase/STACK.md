# Technology Stack

**Analysis Date:** 2026-09-12

## Languages

**Primary:**
- TypeScript 5.x - Core application logic, typed UI components, hooks, and configuration (`src/**/*.tsx`, `src/**/*.ts`, `next.config.ts`)

**Secondary:**
- JavaScript / MJS (ES Modules) - Modern configuration modules (`eslint.config.mjs`, `postcss.config.mjs`)
- CSS3 - Tailwind CSS v4 foundation and custom hardware-accelerated animations (`src/app/globals.css`)

## Runtime

**Environment:**
- Node.js 22.x (Docker production image `node:22-alpine` in `Dockerfile`; local development tested on Node 22/25)

**Package Manager:**
- npm (Node Package Manager)
- Lockfile: present (`package-lock.json` - version 3 lockfile format)

## Frameworks

**Core:**
- Next.js 16.3.4 - React fullstack framework with App Router architecture (`src/app/layout.tsx`, `src/app/page.tsx`) configured for standalone distribution
- React 19.2.8 - Modern component architecture, state management (`useState`), DOM/scroll refs (`useRef`), and lifecycle hooks (`useEffect`)
- React DOM 19.2.8 - Client/server React rendering engine

**Testing:**
- Not detected / None installed (no testing framework configured in `package.json`)

**Build/Dev:**
- Turbopack - Next.js 16 built-in development bundler (`npm run dev` running `next dev -p 3174`)
- PostCSS with `@tailwindcss/postcss` (^4) - CSS processing pipeline (`postcss.config.mjs`)
- Tailwind CSS v4 (`tailwindcss` ^4) - Modern CSS engine imported directly in `src/app/globals.css` via `@import "tailwindcss";`
- TypeScript 5 (`tsconfig.json`) - Strict type checking (`"strict": true`, `"moduleResolution": "bundler"`)

## Key Dependencies

**Critical:**
- `next` (`16.3.4`) - Provides routing, font optimization (`next/font/google`), image optimization (`next/image`), and standalone server bundling
- `react` (`19.2.8`) - Powers UI components and interactive client state
- `react-dom` (`19.2.8`) - Browser DOM rendering target

**Infrastructure:**
- `@tailwindcss/postcss` (`^4`) - Tailwind v4 PostCSS plugin bridging CSS imports to Next.js
- `tailwindcss` (`^4`) - Utility CSS framework powering design tokens and luxury dark layout styling
- `eslint` (`^9`) & `eslint-config-next` (`16.3.4`) - Flat-config static analysis for Next.js and TypeScript standards

## Configuration

**Environment:**
- Configured via environment variables in `Dockerfile` and `docker-compose.yml`:
  - `NODE_ENV=production`
  - `PORT=3174`
  - `HOSTNAME="0.0.0.0"`
  - `NEXT_TELEMETRY_DISABLED=1`
- No third-party API keys or `.env` files currently required for operation.

**Build:**
- `next.config.ts` - Standalone build enabled (`output: "standalone"`), custom image quality steps (`qualities: [75, 95]`)
- `tsconfig.json` - Target `ES2017`, `moduleResolution: "bundler"`, path alias `@/*` -> `./src/*`
- `eslint.config.mjs` - Flat configuration merging `core-web-vitals` and `typescript` rule sets
- `Dockerfile` - Multi-stage container build (`deps` -> `builder` -> `runner`) producing minimal production image running `node server.js`
- `docker-compose.yml` - Defines service `learnwith-web` with port forwarding `3174:3174` and healthcheck

## Platform Requirements

**Development:**
- Node.js 20+ (Node 22+ recommended)
- npm 9+
- TCP Port `3174` (default dev port set via `npm run dev`)

**Production:**
- Linux container runtime (Docker / Docker Compose)
- Alpine Linux base (`node:22-alpine`)
- TCP Port `3174` exposed
- Minimum 512MB RAM recommended for standalone Next.js runner process

---

*Stack analysis: 2026-09-12*
