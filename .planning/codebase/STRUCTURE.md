# Codebase Structure

**Analysis Date:** 2026-09-12

## Directory Layout

```
kuy/
├── .agents/                    # GSD orchestrator configuration, agent workflows, and core tooling
│   ├── gsd-core/              # Core GSD framework runtime and workflow files
│   └── skills/                # Domain-specific GSD automation skills
├── .planning/                  # Project planning artifacts, specs, and architectural maps
│   ├── codebase/              # Codebase knowledge maps (STACK, ARCHITECTURE, etc.)
│   └── ui-reviews/            # Visual audit reports and design feedback
├── public/                     # Public static web assets served directly by Next.js
│   ├── frames/                # 50 sequentially rendered frames for scroll canvas sequence
│   ├── images/                # Studio, bento grid, and card imagery
│   └── *.svg                  # Standard icons and brand logos
├── src/                        # Main application source code
│   ├── app/                   # Next.js 16 App Router hierarchy
│   │   ├── favicon.ico        # Browser favicon
│   │   ├── globals.css        # Tailwind CSS v4 root stylesheet and keyframe animations
│   │   ├── layout.tsx         # Root document shell with Geist fonts & metadata
│   │   └── page.tsx           # Home landing page with sticky canvas, marquee & bento
│   └── components/            # React UI components
│       ├── BentoGrid.tsx      # 12-column asymmetric bento grid section
│       ├── LogoMarquee.tsx    # Dual-row infinite scrolling studio alliance marquees
│       ├── ScrollSequenceCanvas.tsx # Scroll-driven 2D HTML5 Canvas animation
│       └── ui/                # Reusable atomic UI primitives
│           ├── Badge.tsx      # Monospace and status pills with pulse indicator
│           ├── Button.tsx     # Standard buttons (primary, secondary, icon)
│           └── Card.tsx       # Glassmorphism container with backdrop blur
├── Dockerfile                  # Multi-stage production container build (Node 22 Alpine)
├── docker-compose.yml          # Container deployment specification with healthcheck
├── eslint.config.mjs           # ESLint 9 flat configuration
├── next.config.ts              # Next.js standalone and image quality configuration
├── package.json                # Project dependencies, metadata, and scripts
├── postcss.config.mjs          # PostCSS plugin pipeline for Tailwind CSS v4
└── tsconfig.json               # TypeScript compiler options and path mappings
```

## Directory Purposes

**`src/app/`:**
- Purpose: Application routing, document shells, and global stylesheets for Next.js App Router
- Contains: Layouts, pages, route handlers, and global CSS
- Key files: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**`src/components/`:**
- Purpose: Feature-level React components implementing specific UX sections
- Contains: Complex visual sections and interactive canvas animations
- Key files: `src/components/ScrollSequenceCanvas.tsx`, `src/components/BentoGrid.tsx`, `src/components/LogoMarquee.tsx`

**`src/components/ui/`:**
- Purpose: Atomic presentational components shared across features
- Contains: Generic buttons, cards, tags, and inputs
- Key files: `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`, `src/components/ui/Badge.tsx`

**`public/frames/`:**
- Purpose: Stores sequentially numbered PNG frames (`ezgif-frame-001.png` to `050.png`) for cinematic scroll playback
- Contains: 50 optimized PNG images
- Key files: `public/frames/ezgif-frame-001.png`

**`public/images/`:**
- Purpose: Curated photographic and visual assets for bento cards and previews
- Contains: High-resolution JPEG images
- Key files: `public/images/bento-stage.jpg`, `public/images/bento-team.jpg`, `public/images/bento-dancer.jpg`, `public/images/card-preview.jpg`

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx`: Root HTML layout wrapping all pages
- `src/app/page.tsx`: Main user-facing landing page for route `/`
- `Dockerfile`: Production runtime container entry point (`node server.js`)

**Configuration:**
- `next.config.ts`: Next.js build and image optimization settings
- `tsconfig.json`: TypeScript configuration and path aliases (`@/*`)
- `eslint.config.mjs`: Linter rules and global file ignores
- `postcss.config.mjs`: CSS transformation pipeline
- `docker-compose.yml`: Container orchestration and healthcheck definitions

**Core Logic:**
- `src/components/ScrollSequenceCanvas.tsx`: Frame interpolation, canvas rendering, and progressive preloader
- `src/components/LogoMarquee.tsx`: Infinite brand ticker definition and data structures
- `src/components/BentoGrid.tsx`: Asymmetric grid layout and card composition

**Styles:**
- `src/app/globals.css`: Tailwind v4 import, root theme variables, and marquee `@keyframes`
- `DESIGN.md`: Formal design specification, color distribution, and typography scale

## Naming Conventions

**Files:**
- React components: PascalCase matching the default export (e.g., `ScrollSequenceCanvas.tsx`, `BentoGrid.tsx`, `Button.tsx`)
- App router files: Next.js standard lowercase (e.g., `layout.tsx`, `page.tsx`, `globals.css`)
- Configuration files: Standard tool naming with `.ts` or `.mjs` (e.g., `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`)
- Static frames: Kebab-case with 3-digit zero-padded index (`ezgif-frame-001.png` ... `050.png`)
- Static photos: Kebab-case descriptive nouns (`bento-stage.jpg`, `card-preview.jpg`)

**Directories:**
- Feature directories: Lowercase / kebab-case (e.g., `ui/`, `frames/`, `images/`)
- Component imports: Aliased with `@/` matching `src/` (e.g., `@/components/ui/Button`)

## Where to Add New Code

**New Section / Landing Feature:**
- Implementation: Create component in `src/components/` (e.g., `src/components/GallerySection.tsx`)
- Integration: Import and mount inside `src/app/page.tsx`
- Media: Place imagery in `public/images/`

**New UI Primitive:**
- Implementation: Add atomic component in `src/components/ui/` (e.g., `src/components/ui/Modal.tsx`, `src/components/ui/Input.tsx`)
- Conventions: Support standard HTML attributes, export clean TypeScript props interface, utilize Tailwind classes

**New API Endpoint / Backend Action:**
- Implementation: Create Route Handler under `src/app/api/[feature]/route.ts` (e.g., `src/app/api/generate/route.ts`)
- Client calling: Fetch via async handlers or server actions

**Utilities and Helpers:**
- Shared helpers: Create `src/lib/` or `src/utils/` (e.g., `src/lib/canvas-utils.ts`, `src/lib/formatters.ts`)

## Special Directories

**`.next/`:**
- Purpose: Build output, Turbopack cache, and standalone server artifacts
- Generated: Yes
- Committed: No (in `.gitignore`)

**`.planning/`:**
- Purpose: Project roadmap, architectural knowledge maps, and design review records
- Generated: Maintained by GSD workflows and developer
- Committed: Yes

**`node_modules/`:**
- Purpose: External npm dependencies
- Generated: Yes
- Committed: No (in `.gitignore`)

---

*Structure analysis: 2026-09-12*
