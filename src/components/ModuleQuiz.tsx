"use client";

import React, { useState } from "react";
import { QuizQuestion } from "@/data/courses";
import { useTheme } from "@/context/ThemeContext";

interface ModuleQuizProps {
  questions: QuizQuestion[];
  moduleTitle: string;
}

export default function ModuleQuiz({ questions, moduleTitle }: ModuleQuizProps) {
  const { theme } = useTheme();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) return null;

  const handleSelect = (qId: string, optIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const correctCount = questions.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className={`mt-8 p-6 sm:p-8 rounded-3xl border transition-all ${
      theme === "dark" ? "bg-zinc-950/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 mb-1">
            Uji Pemahaman Praktis (Zero-Penalty)
          </div>
          <h3 className={`text-lg sm:text-xl font-normal ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
            Kuis Mandiri: {moduleTitle}
          </h3>
        </div>

        {submitted && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Skor: {correctCount} / {questions.length} Benar</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const selected = selectedAnswers[q.id];
          const isAnswered = selected !== undefined;
          const isCorrect = isAnswered && selected === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-2xl border ${
                theme === "dark" ? "bg-black/40 border-white/[0.06]" : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="text-xs sm:text-sm font-medium mb-3 flex items-start gap-2">
                <span className="font-mono text-indigo-400">Q{qIdx + 1}.</span>
                <span className={theme === "dark" ? "text-zinc-200" : "text-slate-800"}>{q.question}</span>
              </div>

              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  let optStyle = "";

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      optStyle = "bg-emerald-950/40 border-emerald-500/80 text-emerald-200 font-semibold";
                    } else if (isThisSelected && !isCorrect) {
                      optStyle = "bg-rose-950/40 border-rose-500/60 text-rose-300";
                    } else {
                      optStyle = "opacity-50 border-transparent";
                    }
                  } else {
                    optStyle = isThisSelected
                      ? "bg-indigo-600/30 border-indigo-500 text-white font-medium"
                      : theme === "dark"
                      ? "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.06] text-zinc-300"
                      : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700";
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => !submitted && handleSelect(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correctIndex && (
                        <span className="text-emerald-400 font-bold ml-2">✓ Benar</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Constructive Educational Feedback Box */}
              {submitted && (
                <div className={`mt-3.5 p-3 rounded-xl border text-xs leading-relaxed ${
                  isCorrect
                    ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
                    : "bg-indigo-950/30 border-indigo-500/30 text-indigo-200"
                }`}>
                  <span className="font-semibold block mb-0.5">Penjelasan Konstruktif:</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Action Buttons */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.08]">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium cursor-pointer shadow-xs transition-all disabled:opacity-40 disabled:cursor-not-allowed ml-auto"
          >
            Periksa Jawaban Saya →
          </button>
        ) : (
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedAnswers({});
            }}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono cursor-pointer transition-all ml-auto"
          >
            Ulangi Kuis ↺
          </button>
        )}
      </div>
    </div>
  );
}
