# Roadmap — Milestone v1.0: Top 3 Priority Fixes

## Overview

Addressing the top 3 UI/UX defects surfaced in `.planning/ui-reviews/UI-REVIEW.md`:
1. Phase 1: Navigation Anchor Mapping & Interactive Routing
2. Phase 2: Responsive Hero Viewport Shell & Vertical Rhythm
3. Phase 3: Brand Naming Harmonization & Copy Alignment

---

## Phase Details

### Phase 1: Navigation Anchor Mapping & Interactive Routing
- **Goal:** Eliminate all dead links across the floating navbar, mobile menu, and metric cards by providing explicit semantic anchor IDs with smooth scroll behavior.
- **Requirements:** NAV-01, NAV-02, NAV-03, NAV-04
- **Success Criteria:**
  1. Clicking `#styles` scrolls directly to the preset style selector card.
  2. Clicking `#about` scrolls smoothly to the Studio Alliance section.
  3. Clicking `#gallery` scrolls to the Bento Grid ecosystem section.
  4. Mobile menu and desktop navbar links operate without browser console warnings or dead clicks.

### Phase 2: Responsive Hero Viewport Shell & Vertical Rhythm
- **Goal:** Eliminate layout cropping on viewports with height < 950px by transitioning from rigid `min-h-[920px]` to responsive container constraints.
- **Requirements:** RESP-01, RESP-02, RESP-03
- **Success Criteria:**
  1. Outer hero framed container uses fluid viewport height (`h-[calc(100vh-1.5rem)]` up to `max-h-[960px]`).
  2. Floating navbar, middle feature list, and bottom 3-card cluster are fully visible simultaneously on standard 768p and 900p displays.
  3. No vertical clipping or squished overflow inside `h-screen overflow-hidden` wrapper.

### Phase 3: Brand Naming Harmonization & Copy Alignment
- **Goal:** Eliminate legacy placeholder brand naming ("DreamFrame") across BentoGrid cards and accessibility tags, standardizing on the unified brand "LEARNWITH".
- **Requirements:** BRAND-01, BRAND-02, BRAND-03
- **Success Criteria:**
  1. Card 6 displays "LEARNWITH" brand title and "Studio Core & Inference Engine".
  2. Card 1 team studio photo `alt` text reflects "LEARNWITH creative directors".
  3. Consistent brand identity across all visual touchpoints.
