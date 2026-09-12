"use client";

import React from "react";
import { COURSES, CourseData } from "@/data/courses";
import { useTheme } from "@/context/ThemeContext";
import Badge from "@/components/ui/Badge";

interface CourseCatalogProps {
  onSelectCourse: (course: CourseData) => void;
  activeCourseId: string;
}

export default function CourseCatalog({
  onSelectCourse,
  activeCourseId,
}: CourseCatalogProps) {
  const { theme } = useTheme();

  return (
    <section id="courses" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="mono" hasPulse pulseColor="bg-emerald-400">
              PROGRAM RESMI PELATIHAN TEKNIS
            </Badge>
            <span className={`text-xs font-mono uppercase ${theme === "dark" ? "text-zinc-400" : "text-slate-500"}`}>
              Multi-Course Catalog
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
            Pilih Jalur Praktik Terarah Anda
          </h2>
        </div>
        <p className={`text-xs sm:text-sm max-w-md ${theme === "dark" ? "text-zinc-400" : "text-slate-600"}`}>
          Setiap modul dilengkapi panduan langkah mandiri (*zero-anxiety*), verifikasi checkpoint, dan ekspor laporan kesiapan dinas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COURSES.map((course) => {
          const isSelected = course.id === activeCourseId;
          return (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className={`group relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                theme === "dark"
                  ? isSelected
                    ? "bg-gradient-to-br from-indigo-950/40 via-zinc-950/90 to-black border-indigo-500/60 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                    : "bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-950/90"
                  : isSelected
                  ? "bg-white border-indigo-600 shadow-lg ring-2 ring-indigo-500/20"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full border ${
                    theme === "dark"
                      ? "bg-white/[0.05] border-white/10 text-zinc-300"
                      : "bg-slate-100 border-slate-200 text-slate-700"
                  }`}>
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SIAP PRAKTIK</span>
                  </div>
                </div>

                <h3 className={`text-xl sm:text-2xl font-normal mb-2 tracking-tight ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  {course.title}
                </h3>
                
                <p className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${
                  theme === "dark" ? "text-zinc-400" : "text-slate-600"
                }`}>
                  {course.description}
                </p>

                <div className={`p-3.5 rounded-2xl mb-6 border ${
                  theme === "dark"
                    ? "bg-black/40 border-white/[0.06] text-zinc-300"
                    : "bg-slate-50 border-slate-200 text-slate-700"
                }`}>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Struktur Modul Pelatihan ({course.modulesCount} Modul • ±{course.estimatedHours} Jam):
                  </div>
                  <ul className="space-y-1.5">
                    {course.modules.map((m) => (
                      <li key={m.id} className="text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span className="truncate">{m.title}</span>
                        <span className="text-[10px] font-mono text-zinc-400 ml-auto shrink-0">{m.estimatedMinutes}m</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-light text-zinc-400">
                  Target: <span className={theme === "dark" ? "text-zinc-200" : "text-slate-800"}>{course.targetAudience}</span>
                </div>
                <button
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-indigo-600 text-white"
                      : theme === "dark"
                      ? "bg-white/10 text-white group-hover:bg-white group-hover:text-black"
                      : "bg-slate-200 text-slate-800 group-hover:bg-slate-900 group-hover:text-white"
                  }`}
                >
                  {isSelected ? "Sedang Dibuka ✓" : "Buka Modul Kursus →"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
