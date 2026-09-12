# Codebase Concerns

**Analysis Date:** 2026-09-12

## Tech Debt

**Monolithic Client Page Component:**
- Issue: `src/app/page.tsx` is a 544-line monolithic file marked `"use client"`. It mixes floating navigation, mobile drawer state, interactive generation mock state, canvas callback handlers, and section rendering.
- Files: `src/app/page.tsx`
- Impact: High cognitive overhead, poor maintainability, and inability to utilize React Server Components (RSC) for static portions of the page.
- Fix approach: Refactor into modular feature directories (`src/components/hero/`, `src/components/nav/`) and keep `src/app/page.tsx` as a clean RSC composition root with client-only interactive leaves.

**Simulated Client-Side Image Generation:**
- Issue: "Remix" and generation features are simulated via `setTimeout` and local random seeds without backend route handlers.
- Files: `src/app/page.tsx:39-47`
- Impact: Cannot generate real visuals or save creations beyond in-memory state.
- Fix approach: Implement Next.js App Router Route Handler (`src/app/api/generate/route.ts`) connected to a neural inference engine (e.g., Stable Diffusion, Flux, or external API).

**Orphaned Public Assets:**
- Issue: Several unreferenced image files exist in `public/` with irregular filenames containing spaces (e.g., `INDONESIAN FAMELE TEACHER.jpg`, `first image.jpeg`, `second image.jpeg`, `download.jpg`).
- Files: `public/INDONESIAN FAMELE TEACHER.jpg`, `public/first image.jpeg`, `public/second image.jpeg`, `public/download.jpg`
- Impact: Bloats repository size and Docker build context without contributing to the application.
- Fix approach: Audit and remove unused static assets from `public/`.

## Known Bugs

**Dangling Navigation Anchor Targets:**
- Symptoms: Clicking "Styles" or "About" in desktop navbar or mobile drawer does not navigate anywhere or change scroll position.
- Files: `src/app/page.tsx:27-28`
- Trigger: User clicks navigation items linked to `#styles` or `#about`.
- Workaround: None currently. Missing target elements with matching `id` attributes on the page.
- Fix approach: Add corresponding sections with matching IDs (e.g., `<section id="styles">` and `<section id="about">`) or update navbar items to link to actual content.

## Security Considerations

**Missing Security Headers & Content-Security-Policy (CSP):**
- Risk: Potential exposure to cross-site scripting (XSS) or unauthorized resource injection once user input is accepted.
- Files: `next.config.ts`
- Current mitigation: Basic Next.js default headers.
- Recommendations: Add security headers in `next.config.ts` (e.g., `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, and a strict Content Security Policy).

**Public Asset Access:**
- Risk: All images in `public/frames/` and `public/images/` are publicly readable without access controls.
- Files: `public/`
- Current mitigation: None required for public marketing assets, but user-generated outputs should be stored in private storage (e.g., S3/R2 with signed URLs) rather than `public/`.

## Performance Bottlenecks

**Simultaneous Preloading of 50 Canvas Frames:**
- Problem: `ScrollSequenceCanvas.tsx` dispatches 50 simultaneous image requests on component mount (`src/components/ScrollSequenceCanvas.tsx:45-56`).
- Files: `src/components/ScrollSequenceCanvas.tsx`, `public/frames/*.png`
- Cause: Unthrottled loop requesting all frames sequentially without request pooling or chunking.
- Improvement path: Implement chunked lazy-preloading (e.g., preload frames 1–10 first, then fetch remaining frames during idle periods using `requestIdleCallback` or as scroll position advances).

**Client Image Memory Pressure on Mobile:**
- Problem: Holding 50 full-resolution HTMLImageElement instances in `imagesRef.current` can exceed RAM budgets on low-end mobile devices (triggering tab crashes or reloads in iOS Safari).
- Files: `src/components/ScrollSequenceCanvas.tsx:21`
- Cause: Array of decoded image elements kept permanently in memory.
- Improvement path: Cap frame resolution on mobile viewports via responsive image sets, or implement an LRU cache retaining only frames within a delta window of the current frame.

## Fragile Areas

**Canvas Aspect Ratio Fallback:**
- Files: `src/components/ScrollSequenceCanvas.tsx:110-132`
- Why fragile: If frame 1 fails to load and neighboring frames are delayed, the canvas renders blank with no visual fallback or placeholder.
- Safe modification: Add an explicit fallback background color or static poster image behind the canvas.

**Hardcoded 450vh Scroll Container:**
- Files: `src/app/page.tsx:56`
- Why fragile: A fixed `h-[450vh]` container requires a significant amount of scrolling on mobile screens with tall aspect ratios, but may scrub too fast on short screens.
- Safe modification: Make scroll container height responsive (e.g., `h-[300vh] sm:h-[400vh] lg:h-[450vh]`).

## Scaling Limits

**Local Container Deployment:**
- Current capacity: Single-instance container serving on port 3174.
- Limit: Memory bound if concurrent users request large image assets simultaneously.
- Scaling path: Configure a reverse proxy (e.g., Nginx or Caddy) with caching headers, or deploy to distributed container infrastructure (Kubernetes / Cloud Run) with a CDN for static assets.

## Dependencies at Risk

**Next.js 16 & Breaking App Router Changes:**
- Risk: Version 16.3.4 contains breaking changes from earlier Next.js versions (referenced in `AGENTS.md`).
- Impact: Code using deprecated APIs or incorrect server/client component boundaries will fail during build.
- Migration plan: Strictly adhere to Next.js 16 documentation in `node_modules/next/dist/docs/`.

**Tailwind CSS v4 Transition:**
- Risk: Tailwind v4 deprecates `tailwind.config.js` in favor of CSS-first `@import "tailwindcss";` and `@theme` directives.
- Impact: Third-party Tailwind plugins or legacy configurations may not work as expected.
- Migration plan: Keep styles centralized in `src/app/globals.css` using modern v4 directives.

## Missing Critical Features

**Backend Generation Engine:**
- Problem: Platform has no actual neural generation pipeline or external API integrations.
- Blocks: Core product promise ("Turn Ideas into Striking Images with AI").
- Priority: High

**Error Boundaries and Fallback Pages:**
- Problem: No `error.tsx`, `not-found.tsx`, or `loading.tsx` in `src/app/`.
- Blocks: Graceful error recovery during runtime failures.
- Priority: Medium

## Test Coverage Gaps

**Automated Test Suite:**
- What's not tested: Zero unit, component, integration, or E2E tests exist across the repository.
- Files: `src/**/*.tsx`, `src/**/*.ts`
- Risk: Regressions in scroll canvas mathematics, marquee keyframes, or UI primitives cannot be caught automatically prior to build.
- Priority: High

---

*Concerns audit: 2026-09-12*
