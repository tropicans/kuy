# Coding Conventions

**Analysis Date:** 2026-09-12

## Naming Patterns

**Files:**
- React components: PascalCase matching the exported component name (`ScrollSequenceCanvas.tsx`, `LogoMarquee.tsx`, `BentoGrid.tsx`, `Button.tsx`)
- Standard App Router files: Lowercase kebab/standard conventions (`layout.tsx`, `page.tsx`, `globals.css`)
- Configuration files: Tool name with appropriate extension (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`)

**Functions:**
- Event handlers: Prefixed with `handle` (e.g., `handleGenerate` in `src/app/page.tsx:39`)
- Callback props: Prefixed with `on` (e.g., `onFrameChange` in `src/components/ScrollSequenceCanvas.tsx:10`)
- Sub-renderers / helpers: camelCase descriptive verbs (e.g., `drawFrame`, `updateScrollProgress`, `animate`)
- React Component functions: PascalCase (e.g., `LearnWithHero`, `BrandCard`, `Button`)

**Variables & State:**
- camelCase for local state and variables (`generationCount`, `promptSeed`, `currentFrame`, `isGenerating`, `mobileMenuOpen`)
- Boolean state: Prefixed with `is` or suffixed with `Open` (e.g., `isGenerating`, `mobileMenuOpen`, `hasPulse`)
- DOM & animation refs: Suffixed with `Ref` (`canvasRef`, `imagesRef`, `scrollContainerRef`, `targetFrameRef`, `currentFrameRef`)

**Types & Interfaces:**
- PascalCase for TypeScript interfaces and type aliases
- Component props: Named `${ComponentName}Props` (e.g., `interface ButtonProps`, `interface BadgeProps`, `interface ScrollSequenceCanvasProps`)
- Data transfer / model objects: PascalCase descriptive noun (e.g., `interface BrandItem`)

## Code Style

**Formatting:**
- Indentation: 2 spaces
- Semicolons: Always used
- Quotes: Double quotes for JSX and imports (`"use client"`, `"next/image"`, `"@/components/ui/Card"`)
- Trailing commas: Multiline trailing commas enabled in TypeScript and JSON

**Linting:**
- Tool: ESLint 9 using flat config in `eslint.config.mjs`
- Preset rules:
  - `eslint-config-next/core-web-vitals` (React Hooks rules, image rules, Next.js script optimizations)
  - `eslint-config-next/typescript` (Strict TypeScript typing rules)
- Run command: `npm run lint`

**Styling & Design System (Tailwind CSS v4):**
- Utility class ordering follows semantic groups: Layout (`relative`, `flex`, `grid`) → Sizing (`w-full`, `max-w-xl`) → Spacing (`p-6`, `gap-4`) → Visuals (`bg-[#050e10]`, `rounded-3xl`, `border border-white/[0.08]`) → Interactivity (`hover:border-purple-400`, `transition-all duration-300`)
- Palette adherence (`DESIGN.md`):
  - Canvas background: `#050e10`
  - Elevated glassmorphic surfaces: `bg-zinc-950/80 backdrop-blur-xl`, `bg-black/40 backdrop-blur-[1.5px]`
  - Hairline borders: `border border-white/[0.08]`, `border-white/10`
  - Pulsing status dots: `bg-emerald-400`, `bg-purple-400`, `bg-white/80` with `animate-pulse`

## Import Organization

**Order:**
1. React and React hooks (`import React, { useState, useRef, useEffect } from "react";`)
2. Next.js built-in modules (`import Image from "next/image";`, `import Link from "next/link";`)
3. Project components via path alias (`import ScrollSequenceCanvas from "@/components/ScrollSequenceCanvas";`)
4. UI primitives (`import Card from "@/components/ui/Card";`, `import Button from "@/components/ui/Button";`)
5. Stylesheets (`import "./globals.css";`)

**Path Aliases:**
- Configured in `tsconfig.json`:
  ```json
  "paths": {
    "@/*": ["./src/*"]
  }
  ```
- Always prefer `@/components/...` over relative traversal `../../components/...`.

## Error Handling

**Patterns:**
- Canvas resource fallback: Check natural dimensions (`bestImg.naturalWidth > 0`) before drawing to 2D context to avoid runtime errors on broken/unloaded images.
- Passive boundary defaults: Components return default empty states or fallback UI gracefully if props or images are pending.
- Form / Button disabled state: Explicitly disable buttons while pending (`disabled={isGenerating}`) to prevent duplicate asynchronous actions.

## Logging

**Framework:**
- Standard browser `console.log` / `console.error` during development.
- No third-party logger is currently installed.

**Patterns:**
- Console errors avoided in production; silent fallback during canvas image preloading errors.

## Comments

**When to Comment:**
- Major layout sections are delineated with banner divider comments:
  ```typescript
  {/* ============================================================ */}
  {/* SECTION 1: INFINITE LOGO CAROUSEL (DUAL HORIZONTAL MARQUEES) */}
  {/* ============================================================ */}
  ```
- Architectural decisions, animation timings, and UX references (e.g., WCAG compliance annotations) are noted inline with `//` comments.

**JSDoc / TSDoc:**
- Props interfaces document parameter types and optional properties directly via TypeScript typing.

## Function Design

**Size:**
- Single responsibility; extract reusable UI cards or sub-renderers into standalone components (e.g., `BrandCard` inside `LogoMarquee.tsx`).

**Parameters:**
- Destructured props with sensible default fallbacks:
  ```typescript
  export default function Button({
    variant = "primary",
    children,
    className = "",
    disabled,
    ...props
  }: ButtonProps)
  ```

**Return Values:**
- Functional components consistently return single JSX root elements or fragments.

## Module Design

**Exports:**
- Default exports for React components (`export default function Button(...)`).
- Named exports for interfaces, types, or configuration data when consumed externally (`export interface ButtonProps`).

**Barrel Files:**
- Not currently used in `src/components/` or `src/components/ui/`; components are imported directly from their source files (`@/components/ui/Card`).

---

*Convention analysis: 2026-09-12*
