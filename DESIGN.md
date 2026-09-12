# LearnWith Web Design System & Technical Specification

A formal design manual and architectural specification for **LearnWith Web** (`kuy`).
Anchor Direction: **Dark Luxury, Neural Glassmorphism & Asymmetric Editorial Bento Grid**  
Core Purpose: **"Interactive High-Fidelity Creation and Learning Platform"**  
Implementation Target: Next.js 16 (App Router + Turbopack) + React 19 + Tailwind CSS v4.

---

## 1. Brand Essence & Architectural Identity

LearnWith Web fuses luxury editorial typography with high-performance computational aesthetics. It is designed to host immersive interactive experiences—from 50-frame scroll sequence canvas rendering to high-density asymmetric bento grids.

* **Personality:** Sophisticated, technically authoritative, cinematic, modern, and disciplined.
* **Tone:** High-fidelity luxury with deep space resonance; precision instrumentation without cluttered gimmicks.
* **Canvas Philosophy:** Deep dark canvas (`#050e10`) serving as an endless cosmic backdrop, elevated with ambient radial glows (purple, indigo, fuchsia) and hairline glassmorphism.

---

## 2. Core Color Palette & Distribution Tokens

The design system adheres to an exact **60 / 30 / 10** visual distribution:

### 60% — Dominant Canvas & Foundation
* **Primary Deep Background:** `#050e10` (Dark Void Obsidian)
* **Base Black:** `#000000`
* **Vignette Overlays:** `from-[#050e10]/85 via-black/25 to-[#050e10]/75`

### 30% — Elevated Surfaces & Structural Containers
* **Glassmorphism Panels:** `bg-zinc-950/80 backdrop-blur-xl` or `bg-black/40 backdrop-blur-[1.5px]`
* **Bento Card Foundation:** `bg-gradient-to-br from-purple-950/35 via-zinc-950/85 to-black/90`
* **Hairline Borders:** `border border-white/[0.08]` (Hover: `border-purple-500/40` or `border-white/20`)
* **Divider Accents:** `border-white/10` and `border-white/[0.06]`

### 10% — Vibrant Neon Accents & Interactive Pulses
* **Neon Violet / Purple Accent:** `#c084fc` / `#a855f7` (`bg-purple-400`, `text-purple-300`)
* **Neon Pink / Fuchsia Glow:** `#f472b6` / `#ec4899` (`from-purple-300 via-pink-300 to-indigo-300`)
* **Cosmic Backlights:** `bg-purple-900/10 blur-[160px]`, `bg-indigo-900/15 blur-[140px]`, `bg-fuchsia-900/10 blur-[130px]`
* **Status Indicators (Pulse):** Emerald `#34d399` (success), Amber `#fbbf24` (warning), Pure White `#ffffff` (active focus)

---

## 3. Typographic Hierarchy & Scale

The typographic stack pairs **Geist Sans** (high-clarity neo-grotesque) with **Geist Mono** (tabular precision monospace).

| Role / Scale | CSS / Tailwind Classes | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `text-4xl sm:text-6xl lg:text-7xl` | 200 / 300 (Light) | `tracking-tight` | Landing hero statement |
| **Section Title (H2)** | `text-3xl sm:text-4xl lg:text-5xl` | 300 / 400 (Light/Normal) | `tracking-tight` | Bento grid & marquee headers |
| **Bento Headline (H3)** | `text-3xl sm:text-4xl lg:text-5xl` | 800 (Extrabold) | `tracking-tight` | Primary bento card hero title |
| **Card Subtitle (H4)** | `text-base sm:text-lg` | 500 / 600 (Medium/Semibold)| `tracking-normal` | Feature headers & preview tiles |
| **Body Text** | `text-xs sm:text-sm` | 300 / 400 (Light/Regular) | `leading-relaxed` | Descriptions, explanatory paragraphs |
| **Monospace / Pill** | `text-[10px] sm:text-[11px] font-mono` | 400 (Regular) | `tracking-[0.2em]` | Metadata tags, badges, telemetry stats |

---

## 4. Spacing Scale & Corner Geometry

* **Corner Radii Progression:**
  * **Pill Badges & Buttons:** `rounded-full` (`9999px`)
  * **Inputs & Form Controls:** `rounded-xl` (`12px` to `14px`)
  * **Standard UI Cards:** `rounded-3xl` (`24px`)
  * **Large Bento Containers & Outer Shell:** `rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]` (`32px` to `48px`)
* **Padding & Rhythm:**
  * **Section Vertical Rhythm:** `py-16 sm:py-24 lg:py-32`
  * **Bento Grid Gutters:** `gap-4 sm:gap-5 lg:gap-6`
  * **Inner Card Padding:** `p-6 sm:p-8 lg:p-10`

---

## 5. Key Layout Components & Patterns

### A. DreamFrame Sticky Hero (`ScrollSequenceCanvas`)
* Full-viewport pinned canvas driven by scroll progress (`h-[450vh]` outer scroll container).
* Renders 50 frames of cinematic visual sequence with progressive preloading.
* Seamless vignette gradients and glass-morphic floating navigation header.

### B. Logo Marquee (`LogoMarquee`)
* Dual-row counter-scrolling infinite marquees (`animate-marquee-left` and `animate-marquee-right`).
* Hardware-accelerated CSS animations (`translate3d(-50%, 0, 0)`).
* Automatic pause on hover (`.marquee-container:hover`).

### C. Asymmetric Bento Grid (`BentoGrid`)
* 12-column responsive layout:
  * **Card 1 (Top Left, 8 Columns):** High-impact hero feature card with split typography and seated trio visuals.
  * **Card 2 (Top Right, 4 Columns):** Monochromatic feature badge with real-time audio/visual waveform canvas.
  * **Card 3 (Bottom Left, 4 Columns):** Circular stage rendering chamber with multi-layer depth rings.
  * **Card 4 (Bottom Right, 8 Columns):** Community ecosystem gallery showcasing certified neural workflows.
* Micro-glow backlights positioned dynamically beneath grid items.

### D. Reusable Atomic UI (`src/components/ui`)
* **Button:** `primary` (solid white on black), `secondary` (glass border), `icon` (circular minimalist).
* **Card:** Default glassmorphic container with backdrop-blur and hairline border.
* **Badge:** Monospace uppercase pill with animated neon pulse dot.

---

## 6. Accessibility & Performance Standards

* **Color Contrast:** All body text (`#f3f4f8` / `text-zinc-300`) against `#050e10` meets WCAG 2.1 AAA (contrast ratio > 12:1).
* **Motion Accessibility:** Hover pauses on marquee; smooth canvas frame rendering driven by passive scroll listeners.
* **Container Health & Zero Layout Shift:** All canvas and image containers utilize fixed aspect ratios and static dimensional constraints.
