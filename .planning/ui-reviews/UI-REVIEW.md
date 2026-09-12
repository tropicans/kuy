# UI Review — LearnWith Web

**Audited:** 2026-09-12
**Baseline:** `DESIGN.md` Design System & Architectural Specification
**Screenshots:** Not captured (headless browser binaries not pre-installed; code-level audit executed)

---

## Pillar Scores

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 3/4 | Cinematic luxury tone; brand naming leakage ("DreamFrame" in Card 6) and no error copy |
| 2. Visuals | 3/4 | High-fidelity glassmorphism and focal hierarchy; hero `min-h-[920px]` clips on viewports < 950px |
| 3. Color | 4/4 | Flawless 60/30/10 palette distribution adhering to `#050e10` Dark Void Obsidian & WCAG AAA contrast |
| 4. Typography | 4/4 | Exemplary Geist Sans/Mono hierarchy matching typographic scale in `DESIGN.md` |
| 5. Spacing | 3/4 | Consistent corner radii and bento gutters, but inflexible vertical min-height constraint in hero shell |
| 6. Experience Design | 2/4 | Smooth canvas lerp & motion accessibility, but dangling anchors (`#gallery`, `#styles`, `#about`) and lack of error fallbacks |

**Overall: 19/24**

---

## Top 3 Priority Fixes

1. **Fix dangling navigation anchors (`#gallery`, `#styles`, `#about`)** — User impact: Clicking "Gallery", "Styles", or "About" in the floating pill nav, mobile drawer, or Card 01 arrow results in dead clicks with no feedback — Concrete fix: Add matching section IDs to page landmarks or remap nav items to active sections (`#create`, `#explore`).
2. **Make hero container height responsive instead of hardcoded `min-h-[920px]`** — User impact: On 768p and 900p displays, `min-h-[920px]` inside `h-screen overflow-hidden` (`src/app/page.tsx:59, 73`) causes the top navigation bar or bottom 3-card cluster to be cropped — Concrete fix: Replace `min-h-[920px] lg:min-h-[950px]` with `h-full max-h-[920px]` and adapt inner gap spacing.
3. **Harmonize brand naming in Bento Grid Card 6** — User impact: Card 6 (`src/components/BentoGrid.tsx:330`) displays "DreamFrame International Neural Center" while the product is "LEARNWITH", degrading brand consistency — Concrete fix: Update title in Card 6 to "LEARNWITH Neural Center".

---

## Detailed Findings

### Pillar 1: Copywriting (3/4)
- **Strengths:**
  - Avoids generic labels completely (no "Submit", "Click Here", or "OK"). Uses authoritative domain-specific microcopy: "Start Creating", "Instant variations", "Latent Rigging", "Sub-15ms Latency".
  - Sequence status feedback in header (`SEQUENCE XX / 50`) provides clear real-time system visibility (`src/app/page.tsx:209`).
  - Style variations use descriptive latent names: "Pure White", "Mid Silver", "Cool Slate", "Deep Charcoal", "Obsidian Void", "Electric Frost" (`src/app/page.tsx:373-430`).
- **Findings:**
  - **WARNING** (`src/components/BentoGrid.tsx:330`): Brand name leakage in Card 6 shows "DreamFrame" instead of "LEARNWITH". Also `alt` text in Card 1 references "DreamFrame creative directors" (`src/components/BentoGrid.tsx:107`).
  - **WARNING** (`src/app/page.tsx:39-47`): Lack of empty or failure state copy if rendering or asset loading fails.

### Pillar 2: Visuals (3/4)
- **Strengths:**
  - Implements the luxury neural glassmorphism aesthetic specified in `DESIGN.md` (`backdrop-blur-xl`, `border border-white/[0.08]`, `bg-black/40`).
  - Clear visual focal point in hero landing section anchored by the oversized brand typography `LEARNWITH™` (`src/app/page.tsx:260`).
  - Accessible touch targets: preset style selector matrix features buttons with `focus-visible:ring-2 focus-visible:ring-white` and active outline states (`src/app/page.tsx:374-430`).
  - High-resolution visual assets with Next.js image optimization qualities `[75, 95]` and explicit aspect ratios.
- **Findings:**
  - **BLOCKER / WARNING** (`src/app/page.tsx:73`): `min-h-[920px] lg:min-h-[950px]` placed inside `h-screen overflow-hidden` (`src/app/page.tsx:59`). On any laptop or monitor with screen height below 950px, vertical overflow is clipped, hiding the floating header or the generation cards.

### Pillar 3: Color (4/4)
- **Strengths:**
  - **60% Foundation:** Strictly enforces `#050e10` Dark Void Obsidian across layout and sections (`src/app/layout.tsx:31`, `src/app/page.tsx:50`, `src/components/BentoGrid.tsx:9`, `src/components/LogoMarquee.tsx:224`).
  - **30% Structure:** Subtle hairline borders (`border-white/[0.08]`) and elevated zinc panels (`bg-zinc-950/80`, `bg-zinc-950/85`).
  - **10% Accents:** Strategic neon pulse indicators: `bg-emerald-400` (live status), `bg-purple-400` (platform nodes), `bg-pink-400` (masterclass).
  - Contrast between background `#050e10` and text `#f3f4f8` / `zinc-300` exceeds 12:1, meeting WCAG 2.1 AAA requirements.

### Pillar 4: Typography (4/4)
- **Strengths:**
  - Pairs `Geist Sans` with `Geist Mono` cleanly via `next/font/google` CSS variables (`src/app/layout.tsx:5-13`).
  - Strictly follows `DESIGN.md` Section 3 Typographic Scale:
    - Display Hero: `text-6xl sm:text-7xl md:text-8xl lg:text-[7.6rem] font-light tracking-tight` (`src/app/page.tsx:260`)
    - Section Titles: `text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight` (`src/components/BentoGrid.tsx:38`)
    - Bento Hero Headlines: `text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase` (`src/components/BentoGrid.tsx:79`)
    - Monospace Telemetry: `text-[10px] sm:text-[11px] font-mono tracking-widest` (`src/components/ui/Badge.tsx:35`)

### Pillar 5: Spacing (3/4)
- **Strengths:**
  - Consistent corner geometry progression: `rounded-full` for badges/buttons, `rounded-2xl`/`rounded-3xl` for cards, and `rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]` for outer shells.
  - Generous section padding rhythm: `py-16 sm:py-24 lg:py-32` (`src/components/BentoGrid.tsx:9`).
  - Responsive bento gutters: `gap-4 sm:gap-5 lg:gap-6` (`src/components/BentoGrid.tsx:54`).
- **Findings:**
  - **WARNING** (`src/app/page.tsx:73`): Hardcoded `min-h-[920px]` causes vertical layout distortion on compact screens.

### Pillar 6: Experience Design (2/4)
- **Strengths:**
  - `ScrollSequenceCanvas.tsx` features an animation loop with smooth lerp (`lerpFactor = 0.14`) and fallback search for neighboring loaded frames to eliminate blank canvas flashes.
  - Motion accessibility: respects `prefers-reduced-motion: reduce` by snapping frame updates directly without delay (`src/components/ScrollSequenceCanvas.tsx:171`).
  - Infinite marquees automatically pause on hover (`src/app/globals.css:55-58`).
  - Remix button state machine disables button and renders spinning indicator during the 1000ms render window (`src/app/page.tsx:447, 510`).
- **Findings:**
  - **BLOCKER** (`src/app/page.tsx:27-28, 308`): Dead links to non-existent IDs:
    - `href="#styles"` in navbar has no `<section id="styles">` or element with `id="styles"`.
    - `href="#about"` in navbar has no element with `id="about"`.
    - `href="#gallery"` in Card 01 arrow link has no element with `id="gallery"`.
  - **WARNING** (`src/app/page.tsx:152-199`): Mobile drawer menu does not close when clicking outside or pressing `Escape`.
  - **WARNING** (`src/components/ScrollSequenceCanvas.tsx:45-56`): 50 frames are preloaded concurrently on mount without request chunking or `requestIdleCallback`, risking bandwidth contention on slower connections.

---

## Files Audited

- `DESIGN.md` (Design contract baseline)
- `src/app/layout.tsx` (Root layout, fonts, and meta)
- `src/app/page.tsx` (Hero landing, navigation, floating cards, generation controls)
- `src/app/globals.css` (Tailwind v4 tokens and marquee keyframes)
- `src/components/ScrollSequenceCanvas.tsx` (2D Canvas scroll sequence renderer)
- `src/components/LogoMarquee.tsx` (Dual-row infinite brand marquee)
- `src/components/BentoGrid.tsx` (12-column asymmetric bento showcase)
- `src/components/ui/Button.tsx` (Atomic button primitive)
- `src/components/ui/Badge.tsx` (Atomic badge and status pill primitive)
- `src/components/ui/Card.tsx` (Atomic glassmorphic card primitive)
