# Testing Patterns

**Analysis Date:** 2026-09-12

## Test Framework

**Current State:**
- **No automated test runner is currently installed** in `package.json`.
- Static quality verification is performed via ESLint and TypeScript compilation.

**Lint & Build Validation Commands:**
```bash
npm run lint          # Run ESLint across codebase
npm run build         # Verify TypeScript types and generate Next.js standalone build
```

**Recommended Framework Adoption:**
- **Unit / Component Testing:** Vitest + React Testing Library (`@testing-library/react`, `@testing-library/dom`)
- **End-to-End (E2E) Testing:** Playwright (`@playwright/test`)
- **Visual Regression:** Playwright snapshot testing (crucial for Canvas 50-frame sequence and bento layout fidelity)

## Test File Organization

**Location Convention:**
- When tests are added, use co-located test files next to source files or an isolated `__tests__/` directory:
  - Unit tests: `src/components/__tests__/Button.test.tsx`
  - Integration tests: `src/components/__tests__/ScrollSequenceCanvas.test.tsx`
  - E2E tests: `e2e/landing-page.spec.ts`

**Naming Convention:**
- `*.test.ts` / `*.test.tsx` for unit and component tests
- `*.spec.ts` for end-to-end user journey tests

## Test Structure

**Component Test Pattern (Standard Proposal for UI Primitives):**
```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/ui/Button";

describe("Button component", () => {
  it("renders with primary variant styling by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("bg-white text-black");
  });

  it("handles disabled state and prevents click execution", () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
});
```

## Mocking

**Canvas & Animation Mocking Guidelines:**
- `HTMLCanvasElement.prototype.getContext`: Must be mocked in JSDOM environments since Node.js lacks native canvas context support.
- `requestAnimationFrame` & `cancelAnimationFrame`: Mock with timer intervals (`vi.useFakeTimers()`).
- `window.matchMedia`: Mock `prefers-reduced-motion` queries for accessibility test cases.

**Example Canvas Context Mock Pattern:**
```typescript
beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
    save: vi.fn(),
    restore: vi.fn(),
    scale: vi.fn(),
    drawImage: vi.fn(),
  });
});
```

## Fixtures and Factories

**Test Data:**
- Brand items fixture for marquee verification:
  ```typescript
  export const mockBrands = [
    { id: "brand-1", name: "TEST BRAND", tagline: "Tagline", icon: null }
  ];
  ```

**Static Asset Mocking:**
- Next.js `<Image>` component: Mock to standard `<img>` tag or configure `@testing-library/react` mock.

## Coverage

**Requirements:**
- Current: No coverage enforcement.
- Recommended Target: 80% coverage on `src/components/ui/` primitives and core state handlers.

**Commands (Proposed):**
```bash
npm run test:coverage # Generate lcov / v8 test coverage report
```

## Test Types

**Static Analysis (Active):**
- ESLint (`npm run lint`): Catches undefined variables, unescaped entities, and React hook dependencies.
- TypeScript (`npm run build`): Validates strict types across all components and props.

**Component Unit Testing (Pending Setup):**
- Verify rendering variants for `Button`, `Badge`, and `Card`.
- Verify accessibility attributes (`aria-label`, `aria-expanded`, `aria-hidden`).

**E2E Integration Testing (Pending Setup):**
- Verify landing page loads and displays hero headline "LEARNWITH".
- Verify scroll sequence canvas animates frames on scroll without crashing.
- Verify mobile menu toggles open and closed.

---

*Testing analysis: 2026-09-12*
