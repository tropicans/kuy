# LEARNWITH Web

## What This Is

LEARNWITH Web is a high-performance, dark-luxury AI creative platform and interactive web application. It combines an immersive 50-frame scroll sequence canvas with real-time style exploration, brand showcase marquees, and an asymmetric bento grid.

## Core Value

Provide a seamless, cinematic, and responsive creative experience with zero layout clipping, accessible interaction states, and consistent brand hierarchy.

## Current Milestone: v1.0 — Top 3 Priority Fixes

Addressing the critical findings identified in the UI Audit (`.planning/ui-reviews/UI-REVIEW.md`):
1. Resolve dangling navigation anchors (`#gallery`, `#styles`, `#about`).
2. Make hero framed container height responsive (eliminate hardcoded `min-h-[920px]` clipping on viewports < 950px).
3. Harmonize brand naming in Bento Grid Card 6 and asset metadata (eliminate "DreamFrame" leakage).

## Requirements

### Validated

- ✓ 50-frame scroll-driven canvas rendering with lerp interpolation (`src/components/ScrollSequenceCanvas.tsx`)
- ✓ Dual-row infinite logo marquee with hover pause and edge masks (`src/components/LogoMarquee.tsx`)
- ✓ 12-column asymmetric bento grid layout with luxury dark palette tokens (`src/components/BentoGrid.tsx`)
- ✓ Atomic UI primitives with accessible focus rings and pulse indicators (`src/components/ui/`)

### Active

- [ ] **NAV-01**: Add valid anchor IDs for all navigation links (`#styles`, `#about`, `#gallery`) to ensure smooth scrolling without dead clicks
- [ ] **RESP-01**: Replace hardcoded `min-h-[920px]` in hero container with responsive viewport height (`max-h-[960px]` with fluid vertical spacing) to prevent content cutoff on 768p–900p screens
- [ ] **BRAND-01**: Harmonize brand naming in Bento Grid Card 6 and component image alts from "DreamFrame" to "LEARNWITH"

### Out of Scope

- Real diffusion model backend API integration (remains client simulated in v1.0)
- User authentication and persistent database storage
- Automated E2E Playwright test suite setup (deferred to testing milestone)

## Context

- Codebase mapped in `.planning/codebase/` (Next.js 16.3.4, React 19.2.8, Tailwind CSS v4)
- Audited in `.planning/ui-reviews/UI-REVIEW.md` with baseline score 19/24
- Docker containerization defined via `Dockerfile` and `docker-compose.yml` on port 3174

## Constraints

- **Design Tokens**: Adhere strictly to `DESIGN.md` (60/30/10 color rule, `#050e10` canvas, Geist fonts)
- **Runtime**: Next.js 16 standalone build in Docker Alpine
- **Deployment**: Local Docker service must pass healthcheck on port 3174

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Map `#about` to LogoMarquee and `#styles` to Variation Card | Preserves existing navbar structure while ensuring every link has a meaningful target | ✓ Good |
| Responsive hero shell using `h-[calc(100vh-...)]` | Eliminates clipping on compact laptops without losing framing aesthetic | ✓ Good |
| Unified brand name LEARNWITH across all bento cards | Brand consistency and elimination of legacy design mock text | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-09-12 after milestone v1.0 start*
