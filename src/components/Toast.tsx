"use client";

import React from "react";

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-950/90 text-emerald-200 border border-emerald-500/40 px-4 py-2.5 rounded-2xl shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200 font-mono text-xs">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span>{message}</span>
    </div>
  );
}
