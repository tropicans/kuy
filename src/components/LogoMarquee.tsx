"use client";

import React from "react";
import Badge from "@/components/ui/Badge";

interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
}

const row1Brands: BrandItem[] = [
  {
    id: "aether",
    name: "AETHER AI",
    tagline: "Neural Rendering",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "kinesis",
    name: "KINESIS LAB",
    tagline: "Motion Dynamics",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 9 9" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: "hyperframe",
    name: "HYPERFRAME",
    tagline: "Virtual Production",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    id: "synapse",
    name: "SYNAPSE CORE",
    tagline: "Latent Diffusion",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
        <circle cx="12" cy="3" r="1.5" />
        <circle cx="12" cy="21" r="1.5" />
        <circle cx="3" cy="12" r="1.5" />
        <circle cx="21" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    id: "lumina",
    name: "LUMINA LABS",
    tagline: "Volumetric Lights",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "obsidian",
    name: "OBSIDIAN VFX",
    tagline: "Cinematic Shaders",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 9l9 13 9-13-9-7z" />
        <path d="M3 9h18M12 2v20" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    id: "vertex",
    name: "VERTEX SPATIAL",
    tagline: "Spatial Computing",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "chronos",
    name: "CHRONOS FX",
    tagline: "Frame Synthesis",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const row2Brands: BrandItem[] = [
  {
    id: "prism",
    name: "PRISM LABS",
    tagline: "Optical Ray-Tracing",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L2 21h20L12 3z" />
        <path d="M12 9v8M9 17h6" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "quantum",
    name: "QUANTUM FORM",
    tagline: "Neural Geometry",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "aura",
    name: "AURA VISION",
    tagline: "Multimodal AI",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: "nexus",
    name: "NEXUS CIPHER",
    tagline: "Model Provenance",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
        <path d="M12 7l4 2.5v5L12 17l-4-2.5v-5L12 7z" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "spectra",
    name: "SPECTRA COLOR",
    tagline: "HDR Color Grading",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18v-9h9a9 9 0 0 0-9-9z" />
      </svg>
    ),
  },
  {
    id: "cosmos",
    name: "COSMOS AUDIO",
    tagline: "Spatial Soundscapes",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 10v4M6 6v12M10 3v18M14 7v10M18 5v14M22 10v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "echo",
    name: "ECHO MATRIX",
    tagline: "Reactive Synthesis",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    id: "velocity",
    name: "VELOCITY CORE",
    tagline: "Ultra-Low Latency",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

function BrandCard({ brand }: { brand: BrandItem }) {
  return (
    <div className="group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-400/40 hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-md shadow-sm select-none cursor-default">
      <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-purple-300 group-hover:border-purple-400/30 group-hover:bg-purple-500/[0.08] transition-all duration-300">
        {brand.icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[13px] font-medium tracking-[0.15em] text-zinc-200 group-hover:text-white transition-colors duration-200 uppercase font-sans">
          {brand.name}
        </span>
        <span className="text-[10px] font-mono text-zinc-500 group-hover:text-purple-300/80 transition-colors duration-200 tracking-wider">
          {brand.tagline}
        </span>
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  const maskStyle = {
    maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#050e10] overflow-hidden">
      {/* Cosmic Nebula Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <Badge variant="mono" hasPulse pulseColor="bg-purple-400" className="mb-3">
            STUDIO ALLIANCE
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white mt-1">
            Engineered for High-End Production Studios
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm font-light text-zinc-400">
            Trusted by pioneering visual creators, virtual production pipelines, and generative art directors worldwide.
          </p>
        </div>

        {/* Marquee Wrapper with Edge Masking */}
        <div className="relative w-full space-y-4 sm:space-y-6 marquee-container" style={maskStyle}>
          
          {/* Row 1: Right → Left */}
          <div className="relative w-full overflow-hidden flex items-center">
            <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 shrink-0">
              {row1Brands.map((brand) => (
                <BrandCard key={`r1-a-${brand.id}`} brand={brand} />
              ))}
              {row1Brands.map((brand) => (
                <BrandCard key={`r1-b-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>

          {/* Row 2: Left → Right */}
          <div className="relative w-full overflow-hidden flex items-center">
            <div className="animate-marquee-right flex items-center gap-5 sm:gap-7 shrink-0">
              {row2Brands.map((brand) => (
                <BrandCard key={`r2-a-${brand.id}`} brand={brand} />
              ))}
              {row2Brands.map((brand) => (
                <BrandCard key={`r2-b-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
