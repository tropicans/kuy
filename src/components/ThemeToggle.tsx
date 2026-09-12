"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border cursor-pointer ${
        theme === "dark"
          ? "bg-white/[0.05] border-white/10 text-zinc-300 hover:text-white hover:border-white/30"
          : "bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 shadow-xs"
      }`}
      title={theme === "dark" ? "Ganti ke Clean Light Mode (Cocok membaca & cetak)" : "Ganti ke Dark Luxury Mode"}
      aria-label="Toggle Theme Mode"
    >
      {theme === "dark" ? (
        <>
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>LIGHT MODE</span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>DARK LUXURY</span>
        </>
      )}
    </button>
  );
}
