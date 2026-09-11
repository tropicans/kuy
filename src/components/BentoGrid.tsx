"use client";

import React from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";

export default function BentoGrid() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#050e10] overflow-hidden text-white">
      {/* Cosmic Nebula Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-fuchsia-900/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Starfield Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 80px 140px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 150px 80px, #c084fc, rgba(0,0,0,0)), radial-gradient(1px 1px at 220px 260px, #f472b6, rgba(0,0,0,0))",
          backgroundSize: "300px 300px",
        }}
      />

      <div className="relative z-10 max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Badge variant="mono" hasPulse pulseColor="bg-purple-400">
              FRAMEWORK & ECOSYSTEM
            </Badge>
            <span className="text-xs sm:text-sm font-light text-zinc-400">
              Asymmetric Neural Architecture
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Designed for High-Fidelity Creation.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 font-normal">
                Structured for Pure Performance.
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-light text-zinc-400 max-w-md">
              Every card mirrors our modular neural pipeline—from real-time stage synthesis to certified production delivery.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BENTO GRID: RECREATING THE EXACT ASYMMETRIC REFERENCE LAYOUT */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          
          {/* ------------------------------------------------------------ */}
          {/* CARD 1 (Top Left, ~66% / 8 Cols): Large Hero Bento Card       */}
          {/* Reference: High-impact card with bold text & seated trio     */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-8 lg:row-start-1 group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 bg-gradient-to-br from-purple-950/35 via-zinc-950/85 to-black/90 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            
            {/* Subtle Gradient Backlight */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none group-hover:bg-purple-600/25 transition-all duration-500" />
            
            {/* Upper Content Bar */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-widest text-purple-200 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                NEURAL STUDIO CORE
              </div>
              <span className="text-xs font-mono text-zinc-400">01 // PLATFORM</span>
            </div>

            {/* Split Content: Bold Typography (Left) + Integrated Team Visual (Right) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-6">
              
              {/* Left Column: Bold Typography & Specs */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-white leading-none">
                  TOP SKILLS
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-white">
                    PRO SUITE
                  </span>
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-sm">
                  Empowering digital creators with direct latent space manipulation, real-time lighting synthesis, and photorealistic asset generation.
                </p>

                {/* Feature Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Latent Rigging", "4K Neural Upscale", "Sub-15ms Latency"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-light text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual of Team in Studio (Reference match) */}
              <div className="md:col-span-5 relative w-full h-[200px] sm:h-[240px] md:h-[260px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-inner bg-black/40 group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/bento-team.jpg"
                  alt="DreamFrame creative directors and engineers collaborating in studio"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-300 pointer-events-none bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <span>COLLABORATION LAB</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
              </div>

            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 2 (Top Right, ~33% / 4 Cols): Stage / Audio-Visual Card */}
          {/* Reference: Concert stage with lights & mixing desk + (20)(24)*/}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-4 lg:row-start-1 group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] bg-zinc-950 flex flex-col justify-between p-6 sm:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            
            {/* Background Stage Image */}
            <Image
              src="/images/bento-stage.jpg"
              alt="Live concert arena stage with volumetric purple beam spotlights and sound console"
              fill
              className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 460px"
            />
            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

            {/* Top Bar with Reference's (20)(26) Circular Badge */}
            <div className="relative z-10 flex items-start justify-between">
              <span className="text-xs font-mono text-zinc-400">02 // STAGE</span>

              {/* Exact Circular Badge Echoing Reference Image */}
              <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center text-purple-300 shadow-lg group-hover:border-purple-400 transition-colors">
                <div className="grid grid-cols-2 gap-0.5 text-center font-mono font-bold text-[11px] leading-tight">
                  <span className="px-0.5">2</span>
                  <span className="px-0.5">0</span>
                  <span className="px-0.5">2</span>
                  <span className="px-0.5">6</span>
                </div>
              </div>
            </div>

            {/* Bottom Content Bar */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-purple-200 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE VOLUMETRIC SYNTHESIS
              </div>
              <h4 className="text-xl sm:text-2xl font-light text-white leading-snug">
                Audiovisual Latency
                <br />
                <span className="font-semibold text-zinc-200">Below 12 Milliseconds</span>
              </h4>
              <p className="mt-1 text-xs text-zinc-400 font-light">
                Synchronized DMX spatial lasers and generative real-time stage projection.
              </p>
            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 3 (Bottom Left, ~33% / 4 Cols, TALL): Spans Rows 2 & 3 */}
          {/* Reference: Tall vertical dancers photo with circular dot badge */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-4 lg:row-start-2 lg:row-span-2 group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] bg-zinc-950 flex flex-col justify-between p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            
            {/* Background Dancer Image */}
            <Image
              src="/images/bento-dancer.jpg"
              alt="Ethereal contemporary dancers suspended in cosmic starry space with violet nebula"
              fill
              className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 460px"
            />
            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none" />

            {/* Top Bar with Reference's Prominent Glowing Accent Dot Badge */}
            <div className="relative z-10 flex items-start justify-between">
              {/* Exact Circular Accent Dot from Reference Image */}
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-400 flex items-center justify-center shadow-[0_0_24px_rgba(192,132,252,0.9)] cursor-pointer group/dot"
                title="Active Neural Node"
                aria-label="Active Neural Node"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-white group-hover/dot:scale-125 transition-transform" />
              </div>

              <span className="text-xs font-mono text-zinc-400">03 // CHOREOGRAPHY</span>
            </div>

            {/* Bottom Content Bar */}
            <div className="relative z-10 bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <span className="text-[10px] font-mono tracking-widest text-purple-300 uppercase block mb-1">
                KINETIC LATENT RIGGING
              </span>
              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-tight">
                FLUID HUMAN MOTION
              </h4>
              <p className="mt-1.5 text-xs text-zinc-300 font-light leading-relaxed">
                Biomechanical motion capture synthesized into pure latent particle fields without physics simulation jitter.
              </p>
            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 4 (Bottom Right Upper, ~66% / 8 Cols): Masterclass Card */}
          {/* Reference: Lime card with bold headline, date & round button */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-8 lg:row-start-2 group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 bg-gradient-to-r from-purple-900/50 via-indigo-950/70 to-purple-950/60 p-6 sm:p-8 lg:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] min-h-[220px] sm:min-h-[240px]">
            
            {/* Ambient Radial Highlights */}
            <div className="absolute top-0 right-1/3 w-72 h-72 bg-fuchsia-500/15 rounded-full blur-[80px] pointer-events-none" />

            {/* Left/Center Text Hierarchy */}
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-mono tracking-widest text-purple-200 uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                EXECUTIVE MASTERCLASS
              </div>

              {/* Bold Uppercase Headline Matching Reference */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                ADVANCED GENERATIVE PIPELINE
                <br className="hidden sm:inline" /> FOR VISUAL DIRECTORS
              </h3>

              {/* Date / Cohort Line Matching Reference */}
              <p className="mt-3 text-sm sm:text-base font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-white font-mono">
                29 JULY — 6 AUGUST • 2026 INTAKE
              </p>
            </div>

            {/* Prominent Circular Action Button (Matching Reference's Big Round Arrow Button) */}
            <div className="relative z-10 self-end sm:self-center shrink-0">
              <a
                href="#create"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black hover:bg-purple-200 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_8px_30px_rgba(255,255,255,0.25)] flex items-center justify-center cursor-pointer group/btn"
                aria-label="Join Masterclass Cohort"
              >
                {/* Arrow Icon angled bottom-left / left mirroring reference */}
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-black transform transition-transform duration-200 group-hover/btn:-translate-x-1 group-hover/btn:translate-y-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="5" x2="5" y2="19" />
                  <polyline points="15 19 5 19 5 9" />
                </svg>
              </a>
            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 5 (Bottom Right Lower-Left, ~33% / 4 Cols): Cert Card   */}
          {/* Reference: Hands holding diploma + top left bold text overlay*/}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-4 lg:row-start-3 group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 min-h-[280px] sm:min-h-[300px] bg-zinc-950 flex flex-col justify-between p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            
            {/* Background Certificate Image */}
            <Image
              src="/images/bento-cert.jpg"
              alt="Hands holding official studio honors certificate with lavender holographic crest"
              fill
              className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

            {/* Top-Left Text Overlay (Direct structural reference to image) */}
            <div className="relative z-10 max-w-[240px]">
              <span className="text-[10px] font-mono text-purple-300 tracking-wider uppercase block mb-1">
                ACCREDITATION
              </span>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white leading-snug">
                OFFICIAL STUDIO-GRADE MODEL CERTIFICATION
              </h4>
            </div>

            {/* Bottom Status Tag */}
            <div className="relative z-10 self-start">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>COMMERCIAL ASSET LICENSE</span>
              </span>
            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARDS 6 & 7 (Bottom Right Lower-Right, ~33% / 4 Cols Stacked) */}
          {/* Reference: IDC logo card on top, Saint Petersburg card below */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-4 lg:row-start-3 flex flex-col gap-4 sm:gap-5">
            
            {/* CARD 6: Upper Mini Card (Reference: IDC Logo Card) */}
            <div className="flex-1 group relative rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border border-purple-400/25 hover:border-purple-400/50 transition-all duration-300 bg-gradient-to-br from-purple-800/35 via-fuchsia-900/25 to-black/70 p-5 sm:p-6 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <div className="relative z-10 flex items-center gap-4">
                {/* Stylized Interlocking Brand Monogram */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/20 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:text-white transition-all shadow-inner">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <circle cx="9" cy="9" r="6" />
                    <circle cx="15" cy="15" r="6" strokeDasharray="2 2" />
                    <path d="M9 15l6-6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wider uppercase text-white font-sans">
                    DreamFrame
                  </div>
                  <div className="text-[11px] font-mono text-purple-200/80">
                    International Neural Center
                  </div>
                </div>
              </div>

              <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,1)]" />
            </div>

            {/* CARD 7: Lower Mini Card (Reference: Saint Petersburg Location Card) */}
            <div className="group relative rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 bg-zinc-950/90 backdrop-blur-xl p-5 sm:p-6 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  GLOBAL INFERENCE NODES
                </span>
                <h5 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-white">
                  SAN FRANCISCO • TOKYO • BERLIN
                </h5>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>99.99% UP</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
