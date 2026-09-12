"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSES, CourseData } from "@/data/courses";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import CourseSwitcher from "@/components/CourseSwitcher";
import CourseCatalog from "@/components/CourseCatalog";
import TrainingStudio from "@/components/TrainingStudio";
import Badge from "@/components/ui/Badge";

export default function LearnWithPlatform() {
  const { theme } = useTheme();
  const [activeCourse, setActiveCourse] = useState<CourseData>(COURSES[0]);

  return (
    <main className="relative w-full min-h-screen font-sans antialiased overflow-x-clip transition-colors duration-200">
      
      {/* ============================================================ */}
      {/* TOP NAVIGATION BAR & BRAND HEADER                           */}
      {/* ============================================================ */}
      <header className={`sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 border-b backdrop-blur-xl transition-all ${
        theme === "dark"
          ? "bg-[#050e10]/80 border-white/10 text-white"
          : "bg-white/85 border-slate-200 text-slate-900 shadow-xs"
      }`}>
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">
              LW
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight flex items-center gap-1.5">
                <span>LEARNWITH</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-indigo-500/10 text-indigo-400 font-normal">
                  ACADEMY
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 hidden sm:block">Zero-Anxiety Technical Training</p>
            </div>
          </Link>

          {/* Center: Course Switcher */}
          <div className="hidden md:block">
            <CourseSwitcher
              activeCourseId={activeCourse.id}
              onSelectCourse={(course) => setActiveCourse(course)}
            />
          </div>

          {/* Right: Theme Toggle & Jump Links */}
          <div className="flex items-center gap-3">
            <a
              href="#courses"
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors hidden sm:inline-block ${
                theme === "dark" ? "text-zinc-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Katalog Kursus
            </a>
            <a
              href="#studio"
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors hidden sm:inline-block ${
                theme === "dark" ? "text-zinc-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Studio Praktikum
            </a>
            <ThemeToggle />
          </div>

        </div>

        {/* Mobile Switcher Row */}
        <div className="md:hidden pt-2.5 flex justify-center">
          <CourseSwitcher
            activeCourseId={activeCourse.id}
            onSelectCourse={(course) => setActiveCourse(course)}
          />
        </div>
      </header>

      {/* ============================================================ */}
      {/* HERO HEROIC BANNER SECTION                                   */}
      {/* ============================================================ */}
      <section className="relative w-full pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-4">
          <Badge variant="mono" hasPulse pulseColor="bg-emerald-400">
            PELATIHAN MANDIRI & PEMERINTAHAN (ASN)
          </Badge>
          
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-4 mb-4 ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Kuasai Keterampilan Teknis Nyata.
            <br />
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
              Tanpa Cemas, Terarah, dan Teruji.
            </span>
          </h1>

          <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-2xl ${
            theme === "dark" ? "text-zinc-400" : "text-slate-600"
          }`}>
            Platform pendamping praktikum teknis mandiri (*zero-anxiety learning*). Dilengkapi panduan visual langkah-demi-langkah, 1-klik copy template, checklist otomatis, kuis mandiri, dan ekspor surat kesiapan resmi ke WhatsApp, Telegram, serta cetak fisik A4.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1: INTERACTIVE TRAINING STUDIO (HERO WORKBENCH)      */}
      {/* ============================================================ */}
      <TrainingStudio course={activeCourse} />

      {/* ============================================================ */}
      {/* SECTION 2: MULTI-COURSE CATALOG OVERVIEW                     */}
      {/* ============================================================ */}
      <CourseCatalog
        activeCourseId={activeCourse.id}
        onSelectCourse={(course) => {
          setActiveCourse(course);
          const el = document.getElementById("studio");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* ============================================================ */}
      {/* FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className={`w-full py-8 border-t text-center text-xs font-light transition-colors ${
        theme === "dark" ? "bg-black/60 border-white/10 text-zinc-500" : "bg-white border-slate-200 text-slate-500"
      }`}>
        <p>© 2026 LEARNWITH Web — Zero-Anxiety Interactive Training Platform.</p>
        <p className="mt-1 text-[11px] font-mono text-zinc-400">Built for ASN, Technical Leads, and Self-Service Learners.</p>
      </footer>
    </main>
  );
}
