"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollSequenceCanvas from "@/components/ScrollSequenceCanvas";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LogoMarquee from "@/components/LogoMarquee";
import BentoGrid from "@/components/BentoGrid";

export default function LearnWithHero() {
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeVariation, setActiveVariation] = useState("Monochrome Minimal");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationCount, setGenerationCount] = useState(104820);
  const [promptSeed, setPromptSeed] = useState(782104);
  const [currentFrame, setCurrentFrame] = useState<number>(1);

  const navItems = [
    { label: "Create", href: "#create" },
    { label: "Explore", href: "#explore" },
    { label: "Gallery", href: "#gallery" },
    { label: "Styles", href: "#styles" },
    { label: "About", href: "#about" },
  ];

  const features = [
    { id: "01", title: "Text to image" },
    { id: "02", title: "Creative styles" },
    { id: "03", title: "Instant variations" },
    { id: "04", title: "High-quality visuals" },
    { id: "05", title: "Explore & remix" },
  ];

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationCount((prev) => prev + 1);
      setPromptSeed(Math.floor(100000 + Math.random() * 900000));
    }, 1000);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#050e10] text-white font-sans antialiased selection:bg-zinc-800 selection:text-white overflow-x-clip">
      {/* ============================================================ */}
      {/* EXISTING DREAMFRAME HERO (100% UNTOUCHED & PRESERVED)        */}
      {/* ============================================================ */}
      <section
        ref={scrollContainerRef}
        className="relative w-full h-[450vh]"
      >
        {/* Sticky Full-Viewport Pinning Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-2.5 sm:p-4 md:p-6 lg:p-7">
        
        {/* Sticky Full-Screen HTML5 Canvas driven by scroll progress */}
        <ScrollSequenceCanvas
          containerRef={scrollContainerRef}
          frameCount={50}
          onFrameChange={(frame) => setCurrentFrame(frame)}
        />

        {/* Seamless Deep Gold / Dark Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050e10]/85 via-black/25 to-[#050e10]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e10]/60 via-transparent to-[#050e10]/60 pointer-events-none" />

        {/* Outer Editorial Shell / Framed Hero Container */}
        <div className="relative z-10 w-full max-w-[1540px] min-h-[920px] lg:min-h-[950px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-white/[0.08] bg-black/40 backdrop-blur-[1.5px] flex flex-col justify-between">
          
          {/* ============================================================ */}
          {/* HEADER & MINIMALIST FLOATING NAVIGATION */}
          {/* ============================================================ */}
          <header className="relative z-30 pt-6 px-6 sm:pt-8 sm:px-10 flex items-center justify-between w-full">
            {/* Brand Logo (Top-Left) */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-full"
              aria-label="LEARNWITH Home"
            >
              {/* Minimalist Geometric Emblem */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/[0.08]">
                <svg
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-light tracking-[0.2em] text-white/90 font-sans uppercase">
                LEARNWITH
              </span>
            </Link>

            {/* Desktop Minimalist Pill Navbar (Top-Right) */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center bg-white/[0.03] backdrop-blur-xl rounded-full p-1.5 pl-6 border border-white/[0.08] transition-all duration-200 hover:border-white/20"
            >
              <ul className="flex items-center gap-1 sm:gap-2 mr-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="px-3.5 py-1.5 text-[13px] lg:text-[14px] font-light text-zinc-400 hover:text-white rounded-full transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Minimalist Action CTA Button */}
              <a
                href="#create"
                className="group inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-4 sm:px-5 py-2 rounded-full text-[13px] font-normal transition-all duration-150 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Start Creating</span>
                <div className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg
                    className="w-3 h-3 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </a>
            </nav>

            {/* Mobile Navigation Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </header>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden relative z-40 mx-6 mt-3 bg-zinc-950/95 backdrop-blur-2xl rounded-3xl p-5 border border-white/10 animate-in fade-in slide-in-from-top-3 duration-200">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm font-light text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-white/10">
                <a
                  href="#create"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-2xl text-sm font-normal"
                >
                  <span>Start Creating</span>
                  <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* MIDDLE-RIGHT NUMBERED FEATURE LIST & SCROLL STATUS FEEDBACK */}
          {/* ============================================================ */}
          <div className="relative z-20 self-end px-6 sm:px-10 lg:px-12 my-auto pt-16 md:pt-6">
            
            {/* Real-time Scroll Sequence Status Feedback (Nielsen H1: Visibility of System Status) */}
            <div className="flex items-center gap-2 font-mono text-[11px] font-light text-zinc-400 uppercase tracking-widest mb-3 justify-end select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" aria-hidden="true" />
              <span>SEQUENCE {String(currentFrame).padStart(2, "0")} / 50</span>
            </div>

            <ul className="flex flex-col gap-2 sm:gap-2.5 text-right" aria-label="Key Capabilities">
              {features.map((feature, index) => (
                <li
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className="group cursor-pointer transition-all duration-150"
                >
                  <div
                    className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                      activeFeature === index
                        ? "bg-white/[0.06] text-white border border-white/10 translate-x-[-4px]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-mono font-light tracking-wider text-zinc-400">
                      ({feature.id})
                    </span>
                    <span className="text-xs sm:text-[13px] font-light tracking-wide">
                      {feature.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM SECTION: OVERSIZED BRAND TYPOGRAPHY & 3-CARD COMPOSITION */}
          {/* ============================================================ */}
          <div className="relative z-20 px-5 pb-5 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10 w-full mt-auto">
            
            {/* Typographic Hero Header: Minimalist Badge + Oversized LEARNWITH */}
            <div className="mb-4 sm:mb-6 select-none">
              {/* Supporting Small Badge and Headline */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <Badge variant="mono" hasPulse pulseColor="bg-white/80">
                  AI IMAGE GENERATOR
                </Badge>
                <span className="text-xs sm:text-sm font-light text-zinc-300 hidden sm:inline-block">
                  Turn ideas into images.
                </span>
                <span className="text-xs font-light text-zinc-400 hidden lg:inline-block">
                  — Create striking visuals from simple prompts with AI-powered image generation.
                </span>
              </div>

              {/* Dominant Oversized Brand Typography with Reduced Boldness */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.6rem] xl:text-[8.5rem] font-light tracking-tight text-white leading-none flex items-baseline">
                LEARNWITH
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight ml-2 -translate-y-6 sm:-translate-y-10 md:-translate-y-12 text-zinc-400 tracking-normal">
                  ™
                </span>
              </h1>
            </div>

            {/* 3-Column Minimalist Floating Cards Grid */}
            <div id="create" className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch scroll-mt-24">
              
              {/* -------------------------------------------------------- */}
              {/* CARD 01 (Left ~4 Cols): Minimalist Community Metric */}
              {/* -------------------------------------------------------- */}
              <Card className="md:col-span-12 lg:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className="text-4xl sm:text-5xl font-light tracking-tight text-white"
                        title={`${generationCount.toLocaleString()} total creations`}
                      >
                        {Math.floor(generationCount / 1000)}K+
                      </div>
                      <div className="text-xs sm:text-sm text-zinc-400 font-light leading-snug max-w-[200px] pt-1.5">
                        Images created with LEARNWITH
                      </div>
                    </div>

                    {/* Minimalist Monogram / Subtle Emblem */}
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v12" />
                        <path d="M6 12h12" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Minimalist Status & Direct Action Link */}
                <div className="mt-8 flex items-center justify-between pt-2">
                  <Badge variant="status" hasPulse pulseColor="bg-emerald-400/80">
                    Real-time creative output
                  </Badge>

                  {/* Direct Action Link Arrow */}
                  <a
                    href="#gallery"
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                    title="Explore gallery"
                    aria-label="Explore community gallery"
                  >
                    <svg
                      className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </Card>

              {/* -------------------------------------------------------- */}
              {/* CARD 02 (Center ~5 Cols): Minimalist Generation Card */}
              {/* -------------------------------------------------------- */}
              <Card className="md:col-span-12 lg:col-span-5 flex flex-col justify-between relative overflow-hidden">
                <div>
                  {/* Header Row: Title and Metric with Light Font Weights */}
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight">
                      Imagine.
                      <br />
                      Generate. Create.
                    </h2>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-light text-white tracking-tight block">
                        +48%
                      </span>
                      <span className="text-[10px] font-mono font-light text-zinc-400 uppercase tracking-wider">
                        Instant variations
                      </span>
                    </div>
                  </div>

                  {/* Body Supporting Description */}
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-[360px]">
                    Explore ideas, generate variations, and turn simple prompts into compelling visuals.
                  </p>
                </div>

                {/* Bottom Visual: Minimalist Monochromatic Stepped Pattern */}
                <div className="mt-6 flex items-end justify-between">
                  <div className="text-[11px] font-light text-zinc-400">
                    <span className="text-zinc-200 font-normal block">{activeVariation}</span>
                    <span className="text-[10px] text-zinc-400">Preset style latent selector</span>
                  </div>

                    {/* Accessible 3x3 Stepped Touch Target Matrix (WCAG 2.5.8 compliant >= 24px) */}
                    <div
                      className="grid grid-cols-3 gap-2 p-1 select-none"
                      aria-label="Style variation preview matrix"
                    >
                      {/* Row 1 */}
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-transparent" />
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-transparent" />
                      <button
                        onClick={() => setActiveVariation("Pure White")}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-zinc-200 border border-white/40 hover:scale-110 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                          activeVariation === "Pure White" ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-105" : ""
                        }`}
                        title="Pure White"
                        aria-label="Select Pure White preset"
                        aria-pressed={activeVariation === "Pure White"}
                      />

                      {/* Row 2 */}
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-transparent" />
                      <button
                        onClick={() => setActiveVariation("Mid Silver")}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-zinc-500 border border-zinc-400/40 hover:scale-110 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                          activeVariation === "Mid Silver" ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-105" : ""
                        }`}
                        title="Mid Silver"
                        aria-label="Select Mid Silver preset"
                        aria-pressed={activeVariation === "Mid Silver"}
                      />
                      <button
                        onClick={() => setActiveVariation("Cool Slate")}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-zinc-700 border border-zinc-600/50 hover:scale-110 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                          activeVariation === "Cool Slate" ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-105" : ""
                        }`}
                        title="Cool Slate"
                        aria-label="Select Cool Slate preset"
                        aria-pressed={activeVariation === "Cool Slate"}
                      />

                      {/* Row 3 */}
                      <button
                        onClick={() => setActiveVariation("Deep Charcoal")}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-zinc-900 border border-zinc-800 hover:scale-110 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                          activeVariation === "Deep Charcoal" ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-105" : ""
                        }`}
                        title="Deep Charcoal"
                        aria-label="Select Deep Charcoal preset"
                        aria-pressed={activeVariation === "Deep Charcoal"}
                      />
                      <button
                        onClick={() => setActiveVariation("Obsidian Void")}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-zinc-800 border border-zinc-700 hover:scale-110 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                          activeVariation === "Obsidian Void" ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-105" : ""
                        }`}
                        title="Obsidian Void"
                        aria-label="Select Obsidian Void preset"
                        aria-pressed={activeVariation === "Obsidian Void"}
                      />
                      <button
                        onClick={() => setActiveVariation("Electric Frost")}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-zinc-300 border border-zinc-200 hover:scale-110 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                          activeVariation === "Electric Frost" ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-105" : ""
                        }`}
                        title="Electric Frost"
                        aria-label="Select Electric Frost preset"
                        aria-pressed={activeVariation === "Electric Frost"}
                      />
                    </div>
                </div>
              </Card>

              {/* -------------------------------------------------------- */}
              {/* CARD 03 (Right ~3 Cols): Minimalist AI Creative Preview Card */}
              {/* -------------------------------------------------------- */}
              <Card variant="preview" className="md:col-span-12 lg:col-span-3 flex flex-col justify-between">
                
                {/* Polished Generated Image Preview Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-inner group border border-white/[0.05]">
                  <Image
                    src="/images/card-preview.jpg"
                    alt="AI generated crystalline celestial architectural artwork"
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      isGenerating ? "opacity-30 filter blur-[2px] scale-95" : "opacity-90"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />

                  {/* Minimalist Top Status & Indicator Badges */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                    <div className="bg-black/70 backdrop-blur-md text-white text-[10px] font-light tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isGenerating ? "bg-amber-400 animate-ping" : "bg-emerald-400"
                        }`}
                      />
                      <span>{isGenerating ? "RENDERING" : "PREVIEW"}</span>
                    </div>

                    <div className="bg-black/70 backdrop-blur-md text-zinc-300 text-[10px] font-mono font-light px-2 py-0.5 rounded-md border border-white/10">
                      4:3 • 4K
                    </div>
                  </div>

                  {/* Prompt Metadata Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md text-zinc-200 text-[11px] font-light px-2.5 py-1.5 rounded-xl border border-white/10 truncate flex items-center justify-between">
                      <span className="truncate">&ldquo;Crystalline sanctuary at twilight&rdquo;</span>
                      <span className="text-[9px] font-mono text-zinc-400 ml-1.5 shrink-0">#{promptSeed}</span>
                    </div>
                  </div>

                  {/* Centered Generating Spinner */}
                  {isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border border-white/20 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </div>

                {/* Bottom Minimalist Control Bar */}
                <div className="mt-3 bg-black/50 backdrop-blur-md rounded-2xl px-3.5 py-2 flex items-center justify-between text-white border border-white/[0.06]">
                  {/* Seed Refresh Button */}
                  <button
                    onClick={() => setPromptSeed(Math.floor(100000 + Math.random() * 900000))}
                    className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
                    title="Roll new seed"
                    aria-label="Roll new random seed"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                      <path d="M16 21h5v-5" />
                    </svg>
                  </button>

                  {/* Seed Display */}
                  <div className="flex items-center gap-1 text-[11px] font-mono font-light text-zinc-400 bg-white/[0.03] px-2 py-1 rounded-lg border border-white/[0.05]">
                    <span className="opacity-60">SEED</span>
                    <span className="text-zinc-200">{promptSeed}</span>
                  </div>

                  {/* Minimalist Remix Button using UI Button primitive */}
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    variant="primary"
                    className="!px-3 !py-1.5 !rounded-xl !text-[11px] gap-1.5"
                    title="Generate variation"
                    aria-label="Generate variation"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>{isGenerating ? "Rendering" : "Remix"}</span>
                  </Button>
                </div>

              </Card>

            </div>
          </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1: INFINITE LOGO CAROUSEL (DUAL HORIZONTAL MARQUEES) */}
      {/* ============================================================ */}
      <LogoMarquee />

      {/* ============================================================ */}
      {/* SECTION 2: BENTO GRID (MATCHING REFERENCE ASYMMETRIC LAYOUT) */}
      {/* ============================================================ */}
      <BentoGrid />
    </main>
  );
}
