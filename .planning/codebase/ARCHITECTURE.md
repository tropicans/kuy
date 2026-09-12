<!-- refreshed: 2026-09-12 -->
# Architecture

**Analysis Date:** 2026-09-12

## System Overview

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Next.js 16 App Router                               │
│                         `src/app/layout.tsx`                                │
│        (Geist Sans/Mono fonts, Metadata, Dark Luxury Root Shell #050e10)     │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        Landing Page Client Container                        │
│                           `src/app/page.tsx`                                │
│       (Interactive state: currentFrame, promptSeed, isGenerating, menu)     │
├──────────────────────┬───────────────────────┬──────────────────────────────┤
│  DreamFrame Hero     │   Logo Marquee Row    │     Asymmetric Bento Grid    │
│  `src/app/page.tsx`  │ `src/components/`     │   `src/components/`          │
│                      │ `LogoMarquee.tsx`     │   `BentoGrid.tsx`            │
└──────────┬───────────┴───────────┬───────────┴──────────────┬───────────────┘
           │                       │                          │
           ▼                       ▼                          ▼
┌──────────────────────┬───────────────────────┬──────────────────────────────┐
│ Scroll Sequence      │ Infinite CSS Keyframe │ Reusable UI Primitives       │
│ Canvas Engine        │ Hardware Acceleration │ `src/components/ui/`         │
│ `src/components/`    │ `src/app/globals.css` │ - `Button.tsx`               │
│ `ScrollSequence-`    │ (Dual counter-scroll) │ - `Badge.tsx`                │
│ `Canvas.tsx`         │                       │ - `Card.tsx`                 │
└──────────┬───────────┴───────────────────────┴──────────────┬───────────────┘
           │                                                  │
           ▼                                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        Static Assets & Frames Storage                       │
│  - 50 Preloaded Frames: `public/frames/ezgif-frame-001.png` to `050.png`    │
│  - Studio & Bento Images: `public/images/*.jpg`                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| `RootLayout` | HTML document shell, Geist typography variables, SEO metadata, global base styling | `src/app/layout.tsx` |
| `LearnWithHero` | Main interactive page orchestrator, scroll progress coordinator, generation state machine | `src/app/page.tsx` |
| `ScrollSequenceCanvas` | Hardware-accelerated 2D canvas, scroll-to-frame interpolation (lerp), progressive image preloading | `src/components/ScrollSequenceCanvas.tsx` |
| `LogoMarquee` | Dual-row infinite horizontal scrolling studio alliance carousel with hover pause and edge gradient masking | `src/components/LogoMarquee.tsx` |
| `BentoGrid` | Asymmetric 12-column responsive bento grid showcasing platform capabilities, metrics, and accreditation | `src/components/BentoGrid.tsx` |
| `Button` | Reusable button primitive with `primary`, `secondary`, and `icon` variants and focus ring states | `src/components/ui/Button.tsx` |
| `Badge` | Monospace metadata pill and status indicator with animated pulsing status dot | `src/components/ui/Badge.tsx` |
| `Card` | Glassmorphic container with backdrop blur, hairline borders, and responsive padding | `src/components/ui/Card.tsx` |

## Pattern Overview

**Overall:** Client-Centric Cinematic Presentation with Component-Driven Design

**Key Characteristics:**
- **Scroll-Driven Canvas Rendering:** Scroll position within a 450vh parent container drives frame index calculation (1–50) with smooth linear interpolation (lerp factor 0.14).
- **Dark Luxury Visual Language:** Strict color hierarchy (#050e10 canvas, zinc elevated surfaces, neon purple/fuchsia interactive accents) defined in `DESIGN.md`.
- **Atomic UI Decomposition:** Core visual elements (badges, buttons, cards) isolated into `src/components/ui/` for consistency.

## Layers

**Application Shell & Routing Layer:**
- Purpose: Provides HTML structure, global CSS injection, font optimization, and SEO metadata
- Location: `src/app/layout.tsx`, `src/app/globals.css`
- Contains: Root layout component, font variable setup, global `@keyframes`
- Depends on: `next/font/google`, `tailwindcss`
- Used by: Next.js routing engine

**Page Orchestration Layer:**
- Purpose: Holds interactive state, event handlers, and section assembly
- Location: `src/app/page.tsx`
- Contains: Client component (`"use client"`), navigation handlers, seed randomization
- Depends on: Feature components, UI primitives
- Used by: Next.js App Router for route `/`

**Feature Components Layer:**
- Purpose: Implements distinct visual experiences (canvas sequence, marquees, bento showcase)
- Location: `src/components/`
- Contains: `ScrollSequenceCanvas.tsx`, `LogoMarquee.tsx`, `BentoGrid.tsx`
- Depends on: UI primitives (`src/components/ui/`), Next.js `<Image>`, HTML5 Canvas API
- Used by: `src/app/page.tsx`

**UI Primitives Layer:**
- Purpose: Atomic presentational components with standardized variants
- Location: `src/components/ui/`
- Contains: `Button.tsx`, `Badge.tsx`, `Card.tsx`
- Depends on: React, standard HTML element props
- Used by: Feature components and pages

## Data Flow

### Primary Request Path (Landing Page Load & Scroll Sequence)

1. **Initial Load:** Browser requests `/` → Server serves standalone HTML shell from `src/app/layout.tsx` and bundled client code `src/app/page.tsx`.
2. **Asset Preload:** `ScrollSequenceCanvas.tsx` mounts; immediately loads frame 1 (`/frames/ezgif-frame-001.png`), then loops `2..50` to progressively warm browser image cache.
3. **Scroll Event:** User scrolls viewport through `h-[450vh]` outer container (`src/app/page.tsx:56`).
4. **Progress Calculation:** `updateScrollProgress` computes `scrolled / totalScrollable` normalized to `[0..1]` (`src/components/ScrollSequenceCanvas.tsx:69`).
5. **Lerp & Animation Frame:** `requestAnimationFrame` lerps `currentFrame` toward `targetFrame` and invokes `drawFrame()` on `<canvas>`.
6. **State Callback:** `onFrameChange` reports active frame to parent `src/app/page.tsx:65` to update header indicator `SEQUENCE XX / 50`.

### Secondary Flow: Interactive Preset Variation & Remix

1. **Preset Selection:** User clicks swatch button in generation card (`src/app/page.tsx:372-430`).
2. **State Transition:** `setActiveVariation()` updates the latent selector label and active ring indicator.
3. **Remix Trigger:** User clicks "Remix" button (`src/app/page.tsx:509`).
4. **Simulated Generation:** `handleGenerate()` sets `isGenerating = true`, showing blur and spinner on preview card (`src/app/page.tsx:441-482`).
5. **Completion:** 1000ms timeout completes, increments `generationCount`, and rolls new random `promptSeed`.

**State Management:**
- Pure local React state (`useState`, `useRef`) concentrated in `src/app/page.tsx` and `src/components/ScrollSequenceCanvas.tsx`.
- No global store (Redux, Zustand, React Context) is currently introduced.

## Key Abstractions

**ScrollSequenceCanvas (`src/components/ScrollSequenceCanvas.tsx`):**
- Purpose: Decouples high-frequency scroll and resize events from DOM thrashing by managing an independent Canvas 2D render loop.
- Pattern: Canvas render loop with linear interpolation (`lerpFactor = 0.14`) and devicePixelRatio compensation.

**UI Primitives (`src/components/ui/`):**
- Purpose: Encapsulates glassmorphism styles, border colors, and hover transitions across buttons, cards, and status tags.
- Pattern: Compound props pattern (`variant="primary" | "secondary" | "icon"`, `hasPulse`, etc.).

## Entry Points

**Web HTTP Entry:**
- Location: `src/app/layout.tsx` & `src/app/page.tsx`
- Triggers: HTTP GET `/` request
- Responsibilities: Renders landing page and initializes client-side canvas and marquee loops

**Docker Container Entry:**
- Location: `Dockerfile:48` (`CMD ["node", "server.js"]`)
- Triggers: Container startup via `docker-compose up` or `docker run`
- Responsibilities: Starts Next.js standalone Node.js HTTP server on port 3174

## Architectural Constraints

- **Single-Page Application Scope:** Currently only a single landing page exists (`/`). Sub-routes (`#create`, `#explore`, `#gallery`) are handled as in-page anchor navigation.
- **Client Rendering Overhead:** `src/app/page.tsx` is marked with `"use client"`, meaning the top-level tree is hydrated on the client.
- **Memory & Bandwidth Footprint:** Preloading 50 sequential PNG images requires ~15–25MB of static image transfers during initial hero engagement.
- **Canvas Viewport Aspect Ratio:** `ScrollSequenceCanvas` dynamically scales frames using a cover algorithm to prevent letterboxing on wide or mobile screens.

## Anti-Patterns

### Monolithic Client Page Component
**What happens:** `src/app/page.tsx` currently combines hero navigation, floating cards, preview controls, state management, and section orchestration in a single 544-line file.
**Why it's wrong:** High cognitive complexity and prevents taking advantage of React Server Components (RSC) for static content.
**Do this instead:** Extract the hero card cluster and floating navigation into dedicated feature components in `src/components/hero/` and let `page.tsx` remain an RSC composition root.

### Simulated Backend Logic Inside Event Timers
**What happens:** Image generation is simulated via `setTimeout` directly inside `page.tsx` (`src/app/page.tsx:39-47`).
**Why it's wrong:** No separation between UI presentation and async data fetching or real AI model APIs.
**Do this instead:** Introduce a Next.js App Router Route Handler (`src/app/api/generate/route.ts`) or server actions to interface with generation pipelines.

## Error Handling

**Strategy:** Defensive fallback rendering and passive error boundaries.
**Patterns:**
- Frame Fallback: If target image frame is not yet loaded, `ScrollSequenceCanvas.tsx:110-128` searches nearest loaded neighbor frames (offsets 1 to 50) to avoid blank canvas flashing.
- Image Natural Dimensions Guard: Canvas verifies `bestImg.naturalWidth > 0` before calling `ctx.drawImage`.

## Cross-Cutting Concerns

**Logging:** Default console logging; no centralized telemetry client.
**Validation:** Static TypeScript checks (`tsconfig.json`) and Next.js compiler validation.
**Accessibility:** Contrast compliant with WCAG AAA, `prefers-reduced-motion` detection in canvas animation loop, aria attributes on interactive controls.

---

*Architecture analysis: 2026-09-12*
