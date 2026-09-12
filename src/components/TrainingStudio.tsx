"use client";

import React, { useState, useEffect } from "react";
import { CourseData, CourseModule } from "@/data/courses";
import { useTheme } from "@/context/ThemeContext";
import Badge from "@/components/ui/Badge";
import Toast from "@/components/Toast";
import ModuleQuiz from "@/components/ModuleQuiz";
import ReadinessReportModal from "@/components/ReadinessReportModal";

interface TrainingStudioProps {
  course: CourseData;
}

export default function TrainingStudio({ course }: TrainingStudioProps) {
  const { theme } = useTheme();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [checkpoints, setCheckpoints] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const currentModule: CourseModule = course.modules[activeModuleIndex] || course.modules[0];
  const currentStep = currentModule?.steps[activeStepIndex] || currentModule?.steps[0];

  // Load persistent checkpoints from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`learnwith_checkpoints_${course.id}`);
      if (saved) {
        setCheckpoints(JSON.parse(saved));
      } else {
        setCheckpoints({});
      }
    } catch {
      setCheckpoints({});
    }
  }, [course.id]);

  // Reset indices if module changes
  useEffect(() => {
    setActiveStepIndex(0);
  }, [activeModuleIndex]);

  const toggleCheckpoint = (key: string) => {
    const updated = { ...checkpoints, [key]: !checkpoints[key] };
    setCheckpoints(updated);
    try {
      localStorage.setItem(`learnwith_checkpoints_${course.id}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage("Tersalin ke Clipboard!");
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Calculate total course checkpoints
  const allStepKeys: string[] = [];
  course.modules.forEach((m) => {
    m.steps.forEach((s) => {
      if (s.checkpointKey) allStepKeys.push(s.checkpointKey);
    });
  });

  const completedCount = allStepKeys.filter((k) => checkpoints[k]).length;
  const totalCount = allStepKeys.length || 1;
  const readinessPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div id="studio" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
      <Toast message={toastMessage} />
      
      {/* Official Readiness Report Modal */}
      <ReadinessReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        course={course}
        checkpoints={checkpoints}
        readinessPercent={readinessPercent}
      />

      {/* Course Header Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl mb-8 border transition-all ${
        theme === "dark"
          ? "bg-zinc-950/80 border-white/10"
          : "bg-white border-slate-200 shadow-sm"
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <Badge variant="mono" hasPulse pulseColor="bg-indigo-400">
                {course.badge}
              </Badge>
              <span className={`text-xs font-mono uppercase ${theme === "dark" ? "text-zinc-400" : "text-slate-500"}`}>
                Zero-Anxiety Practical Track
              </span>
            </div>
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-2 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              {course.title}
            </h1>
            <p className={`text-xs sm:text-sm font-light max-w-2xl ${
              theme === "dark" ? "text-zinc-400" : "text-slate-600"
            }`}>
              {course.subtitle}
            </p>
          </div>

          {/* Barometer Kesiapan Peserta & Report Trigger Button */}
          <div className={`p-4 sm:p-5 rounded-2xl border min-w-[280px] flex flex-col justify-between ${
            theme === "dark"
              ? "bg-black/40 border-white/10"
              : "bg-slate-50 border-slate-200"
          }`}>
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-zinc-400">BAROMETER KESIAPAN</span>
                <span className={`font-semibold ${readinessPercent === 100 ? "text-emerald-400" : "text-indigo-400"}`}>
                  {readinessPercent}% SIAP
                </span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden mb-2">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    readinessPercent === 100 ? "bg-emerald-500" : "bg-gradient-to-r from-indigo-500 to-emerald-400"
                  }`}
                  style={{ width: `${readinessPercent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-3">
                <span>{completedCount} dari {totalCount} checkpoint</span>
                <span className={readinessPercent === 100 ? "text-emerald-400" : ""}>
                  {readinessPercent === 100 ? "LULUS UJI ✓" : "PROGRESS"}
                </span>
              </div>
            </div>

            {/* Official Report Button */}
            <button
              onClick={() => setReportModalOpen(true)}
              className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all duration-150 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>📄 Laporan Kesiapan Resmi</span>
              <span className="text-[10px] font-mono opacity-80">(WA/TG/Cetak)</span>
            </button>
          </div>
        </div>

        {/* Module Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 mt-6 border-t border-white/[0.08] no-scrollbar">
          {course.modules.map((m, idx) => {
            const isCurrent = idx === activeModuleIndex;
            const modKeys = m.steps.map((s) => s.checkpointKey).filter(Boolean) as string[];
            const modDone = modKeys.length > 0 && modKeys.every((k) => checkpoints[k]);

            return (
              <button
                key={m.id}
                onClick={() => setActiveModuleIndex(idx)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono transition-all cursor-pointer shrink-0 flex items-center gap-2 border ${
                  isCurrent
                    ? theme === "dark"
                      ? "bg-white text-black border-white font-semibold"
                      : "bg-indigo-600 text-white border-indigo-600 font-semibold"
                    : theme === "dark"
                    ? "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{m.badge}</span>
                <span className="truncate max-w-[140px] sm:max-w-[200px]">{m.title}</span>
                {modDone && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Modul Selesai" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio Grid: Step Walkthrough (Left 8 Cols) + Checklist & Resources (Right 4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Step Walkthrough Panel */}
        <div className={`lg:col-span-8 p-6 sm:p-8 rounded-3xl border ${
          theme === "dark" ? "bg-zinc-950/70 border-white/10" : "bg-white border-slate-200 shadow-sm"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Langkah {currentStep?.stepNumber} dari {currentModule.steps.length}
            </div>
            <span className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
              theme === "dark" ? "bg-white/[0.04] border-white/10 text-zinc-400" : "bg-slate-100 border-slate-200 text-slate-600"
            }`}>
              Durasi: ±{currentModule.estimatedMinutes} menit
            </span>
          </div>

          <h2 className={`text-xl sm:text-2xl font-normal mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
            {currentStep?.title}
          </h2>

          <p className={`text-sm sm:text-base font-light leading-relaxed mb-6 ${
            theme === "dark" ? "text-zinc-300" : "text-slate-700"
          }`}>
            {currentStep?.instruction}
          </p>

          {/* Copyable Box Engine (Zero-Anxiety) */}
          {currentStep?.copyableText && (
            <div className={`p-4 rounded-2xl mb-6 border ${
              theme === "dark" ? "bg-black/60 border-white/10" : "bg-slate-900 text-white border-slate-800"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Template / Perintah Siap Salin (Anti Salah Ketik):
                </span>
                <button
                  onClick={() => handleCopy(currentStep.copyableText!)}
                  className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono transition-all duration-150 flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>Salin Perintah</span>
                </button>
              </div>
              <pre className="font-mono text-xs sm:text-sm text-indigo-200 overflow-x-auto py-2 whitespace-pre-wrap select-all">
                {currentStep.copyableText}
              </pre>
            </div>
          )}

          {/* Reassurance Tip */}
          {currentStep?.tip && (
            <div className={`p-4 rounded-2xl mb-6 border flex items-start gap-3 ${
              theme === "dark" ? "bg-indigo-950/20 border-indigo-500/20 text-indigo-200" : "bg-indigo-50 border-indigo-200 text-indigo-900"
            }`}>
              <span className="text-lg">💡</span>
              <div className="text-xs sm:text-sm font-light leading-relaxed">
                <span className="font-semibold block mb-0.5">Catatan Praktik Mandiri:</span>
                {currentStep.tip}
              </div>
            </div>
          )}

          {/* Step Stepper Navigation Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeStepIndex === 0
                  ? "opacity-30 cursor-not-allowed text-zinc-500"
                  : theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20 cursor-pointer"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200 cursor-pointer"
              }`}
            >
              ← Langkah Sebelumnya
            </button>

            {/* Checkpoint Toggle Button */}
            {currentStep?.checkpointKey && (
              <button
                onClick={() => toggleCheckpoint(currentStep.checkpointKey!)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  checkpoints[currentStep.checkpointKey]
                    ? "bg-emerald-500 text-black font-semibold"
                    : "bg-white text-black hover:bg-zinc-200 font-normal"
                }`}
              >
                <span>{checkpoints[currentStep.checkpointKey] ? "✓ Tervalidasi Mandiri" : "Tandai Selesai Praktik"}</span>
              </button>
            )}

            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(currentModule.steps.length - 1, prev + 1))}
              disabled={activeStepIndex === currentModule.steps.length - 1}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeStepIndex === currentModule.steps.length - 1
                  ? "opacity-30 cursor-not-allowed text-zinc-500"
                  : "bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer shadow-xs"
              }`}
            >
              Langkah Berikutnya →
            </button>
          </div>

          {/* Evaluation Quiz Section for Current Module */}
          {currentModule.quiz && (
            <ModuleQuiz questions={currentModule.quiz} moduleTitle={currentModule.title} />
          )}
        </div>

        {/* Right Panel: Interactive Checklist & Module Overview */}
        <div className={`lg:col-span-4 p-6 sm:p-8 rounded-3xl border ${
          theme === "dark" ? "bg-zinc-950/70 border-white/10" : "bg-white border-slate-200 shadow-sm"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-base font-normal ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Checklist Praktik Mandiri
            </h3>
            <span className="text-[11px] font-mono text-zinc-400">
              {currentModule.steps.filter((s) => s.checkpointKey && checkpoints[s.checkpointKey]).length} / {currentModule.steps.length}
            </span>
          </div>

          <p className={`text-xs font-light mb-5 ${theme === "dark" ? "text-zinc-400" : "text-slate-600"}`}>
            Centang setiap tugas setelah berhasil dipraktikkan di komputer Anda. Data tersimpan otomatis.
          </p>

          <div className="space-y-3">
            {currentModule.steps.map((step, idx) => {
              const isChecked = step.checkpointKey ? !!checkpoints[step.checkpointKey] : false;
              const isCurrent = idx === activeStepIndex;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isCurrent
                      ? theme === "dark"
                        ? "bg-indigo-950/30 border-indigo-500/50"
                        : "bg-indigo-50/70 border-indigo-300"
                      : theme === "dark"
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05]"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (step.checkpointKey) toggleCheckpoint(step.checkpointKey);
                      }}
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-emerald-500 border-emerald-500 text-black text-xs font-bold"
                          : "border-zinc-500 bg-transparent hover:border-zinc-300"
                      }`}
                    >
                      {isChecked ? "✓" : ""}
                    </button>
                    <span className={`text-xs truncate ${isChecked ? "line-through text-zinc-500" : theme === "dark" ? "text-zinc-200" : "text-slate-800"}`}>
                      {step.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 shrink-0">Step {step.stepNumber}</span>
                </div>
              );
            })}
          </div>

          {/* Module Navigation Jump */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Informasi Kurikulum:
            </div>
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${
              theme === "dark" ? "bg-black/40 border-white/[0.06] text-zinc-400" : "bg-slate-50 border-slate-200 text-slate-600"
            }`}>
              {currentModule.overview}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
