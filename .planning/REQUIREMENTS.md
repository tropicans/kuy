# Requirements — Milestone v1.0 (Top 3 Priority Fixes)

## Navigation Requirements

- [x] **NAV-01**: Every navigation link in desktop navbar, mobile drawer, and metric cards (`#create`, `#explore`, `#gallery`, `#styles`, `#about`) MUST correspond to a valid DOM element with matching `id`.
- [x] **NAV-02**: Clicking `#styles` scrolls directly to the style latent selector matrix card (`src/app/page.tsx`).
- [x] **NAV-03**: Clicking `#about` scrolls to the Studio Alliance section (`src/components/LogoMarquee.tsx`).
- [x] **NAV-04**: Clicking `#gallery` scrolls to the community creation bento showcase (`src/components/BentoGrid.tsx`).

## Responsive Layout Requirements

- [x] **RESP-01**: Replace hardcoded `min-h-[920px] lg:min-h-[950px]` in the hero outer container (`src/app/page.tsx`) with a responsive height constraint that dynamically adapts to viewport height (`h-[calc(100vh-1.25rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-2.5rem)] lg:h-[calc(100vh-3.5rem)] max-h-[960px] min-h-[580px]`).
- [x] **RESP-02**: Ensure the floating header, middle-right feature list, and bottom 3-card cluster are fully visible without being cropped or cut off on viewports ranging from 768px to 1200px height.
- [x] **RESP-03**: Scale internal padding, margins, and typography fluidly on smaller screens to eliminate inner container vertical overflow.

## Brand Harmonization Requirements

- [x] **BRAND-01**: Rename Card 6 in `src/components/BentoGrid.tsx` from "DreamFrame" to "LEARNWITH".
- [x] **BRAND-02**: Update Card 6 tagline to "LEARNWITH Neural Center / Studio Core".
- [x] **BRAND-03**: Update Card 1 image alt text in `src/components/BentoGrid.tsx` to reference "LEARNWITH creative directors and engineers".

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| NAV-01 | Phase 1 | Complete |
| NAV-02 | Phase 1 | Complete |
| NAV-03 | Phase 1 | Complete |
| NAV-04 | Phase 1 | Complete |
| RESP-01 | Phase 2 | Complete |
| RESP-02 | Phase 2 | Complete |
| RESP-03 | Phase 2 | Complete |
| BRAND-01 | Phase 3 | Complete |
| BRAND-02 | Phase 3 | Complete |
| BRAND-03 | Phase 3 | Complete |
