"use client";

import React, { useState } from "react";
import { CourseData } from "@/data/courses";
import { useTheme } from "@/context/ThemeContext";

interface ReadinessReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseData;
  checkpoints: Record<string, boolean>;
  readinessPercent: number;
}

export default function ReadinessReportModal({
  isOpen,
  onClose,
  course,
  checkpoints,
  readinessPercent,
}: ReadinessReportModalProps) {
  const { theme } = useTheme();
  const [traineeName, setTraineeName] = useState("");
  const [traineeNIP, setTraineeNIP] = useState("");
  const [traineeAgency, setTraineeAgency] = useState("");
  const [copiedMsg, setCopiedMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Calculate verified items
  const allStepsWithKeys = course.modules.flatMap((m) =>
    m.steps.filter((s) => s.checkpointKey).map((s) => ({
      moduleTitle: m.title,
      stepTitle: s.title,
      key: s.checkpointKey!,
      isPassed: !!checkpoints[s.checkpointKey!],
    }))
  );

  const passedCount = allStepsWithKeys.filter((s) => s.isPassed).length;
  const isEligible = readinessPercent >= 80;

  // WhatsApp Message Generator
  const handleExportWhatsApp = () => {
    const text = `*LAPORAN KESIAPAN PRAKTIK PELATIHAN MANDIRI*
Platform: LEARNWITH Web Training
Tanggal: ${currentDate}

*Identitas Peserta:*
- Nama: ${traineeName || "(Belum Diisi)"}
- NIP / ID: ${traineeNIP || "-"}
- Unit / Instansi: ${traineeAgency || "-"}

*Materi Pelatihan:*
- Kursus: ${course.title}
- Tingkat Kesiapan: ${readinessPercent}% (${passedCount}/${allStepsWithKeys.length} Checkpoint Lulus)
- Status Rekomendasi: ${isEligible ? "SIAP TUGAS & MANDIRI ✓" : "PERLU PENDAMPINGAN TAMBAHAN"}

*Ringkasan Checkpoint:*
${allStepsWithKeys
  .map((s) => `${s.isPassed ? "✅" : "⏳"} ${s.stepTitle}`)
  .join("\n")}

_Laporan ini dibuat otomatis secara mandiri melalui platform LEARNWITH._`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  };

  // Telegram Copy Generator
  const handleExportTelegram = () => {
    const text = `📋 **LAPORAN KESIAPAN MANDIRI — LEARNWITH**
Tanggal: ${currentDate}

👤 **Peserta:** ${traineeName || "(Nama Belum Diisi)"}
🏛️ **Instansi:** ${traineeAgency || "-"}
📚 **Kursus:** ${course.title}
📊 **Kesiapan:** ${readinessPercent}% (${passedCount}/${allStepsWithKeys.length} Terverifikasi)
🎯 **Status:** ${isEligible ? "SIAP WORKSHOP / TUGAS" : "PROGRESS"}

${allStepsWithKeys
  .map((s) => `• [${s.isPassed ? "x" : " "}] ${s.stepTitle}`)
  .join("\n")}`;

    navigator.clipboard.writeText(text);
    setCopiedMsg("Teks Telegram Berhasil Disalin!");
    setTimeout(() => setCopiedMsg(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-4xl rounded-3xl p-6 sm:p-10 border shadow-2xl my-auto transition-all ${
        theme === "dark" ? "bg-zinc-950 border-white/20 text-white" : "bg-white border-slate-300 text-slate-900"
      }`}>
        
        {/* Header Action Toolbar (Hidden during physical print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 no-print">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 block mb-1">
              Dokumen Resmi Kesiapan Kerja
            </span>
            <h2 className="text-xl sm:text-2xl font-light">Pratinjau Laporan Kesiapan Pelatihan</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Participant Identity Inputs (Hidden during physical print) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 no-print">
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Nama Lengkap Peserta</label>
            <input
              type="text"
              value={traineeName}
              onChange={(e) => setTraineeName(e.target.value)}
              placeholder="Contoh: Budi Santoso, S.Kom."
              className="w-full px-3.5 py-2 rounded-xl text-xs border border-white/10 bg-white/[0.04] text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">NIP / Nomor Identitas</label>
            <input
              type="text"
              value={traineeNIP}
              onChange={(e) => setTraineeNIP(e.target.value)}
              placeholder="19850110 201001 1 002"
              className="w-full px-3.5 py-2 rounded-xl text-xs border border-white/10 bg-white/[0.04] text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Unit Kerja / Instansi</label>
            <input
              type="text"
              value={traineeAgency}
              onChange={(e) => setTraineeAgency(e.target.value)}
              placeholder="Dinas Komunikasi & Informatika"
              className="w-full px-3.5 py-2 rounded-xl text-xs border border-white/10 bg-white/[0.04] text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Printable Formal Document Paper Sheet */}
        <div className="p-6 sm:p-8 rounded-2xl border bg-white text-black shadow-inner font-sans border-slate-300">
          
          {/* Formal Letterhead Header */}
          <div className="text-center pb-4 mb-6 border-b-2 border-black">
            <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase">
              SURAT LAPORAN KESIAPAN PRAKTIK MANDIRI
            </h3>
            <p className="text-xs text-slate-600 font-serif">
              Platform Pelatihan Teknis Terarah (LEARNWITH Interactive Training Platform)
            </p>
          </div>

          {/* Identity Grid */}
          <div className="grid grid-cols-2 gap-y-2 text-xs mb-6 pb-4 border-b border-slate-200">
            <div><span className="font-semibold text-slate-600">Nama Peserta:</span> {traineeName || "_______________________"}</div>
            <div><span className="font-semibold text-slate-600">Tanggal Pelaporan:</span> {currentDate}</div>
            <div><span className="font-semibold text-slate-600">NIP / Identitas:</span> {traineeNIP || "_______________________"}</div>
            <div><span className="font-semibold text-slate-600">Materi Kursus:</span> {course.title}</div>
            <div className="col-span-2"><span className="font-semibold text-slate-600">Instansi:</span> {traineeAgency || "_______________________"}</div>
          </div>

          {/* Assessment Summary Box */}
          <div className="p-4 rounded-xl mb-6 bg-slate-100 border border-slate-200 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-800">STATUS REKOMENDASI KESIAPAN:</div>
              <div className="text-sm font-semibold text-slate-900 mt-0.5">
                {isEligible ? "LULUS UJI & SIAP TUGAS MANDIRI ✓" : "PROGRESS BELUM MEMENUHI AMBANG BATAS (MIN. 80%)"}
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 font-mono block">SKOR KESIAPAN</span>
              <span className="text-xl font-black text-indigo-700 font-mono">{readinessPercent}%</span>
            </div>
          </div>

          {/* Checklist Verification Table */}
          <div className="mb-6">
            <div className="text-xs font-bold uppercase mb-2 text-slate-700">Daftar Checkpoint Praktikum Terverifikasi:</div>
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-200">
                  <th className="border border-slate-300 p-2 w-12 text-center">No</th>
                  <th className="border border-slate-300 p-2">Nama Tugas / Checkpoint Praktik</th>
                  <th className="border border-slate-300 p-2 w-32 text-center">Status Verifikasi</th>
                </tr>
              </thead>
              <tbody>
                {allStepsWithKeys.map((step, idx) => (
                  <tr key={step.key} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-300 p-2 text-center font-mono">{idx + 1}</td>
                    <td className="border border-slate-300 p-2 font-medium">{step.stepTitle}</td>
                    <td className="border border-slate-300 p-2 text-center font-bold">
                      {step.isPassed ? (
                        <span className="text-emerald-700">✓ TERVERIFIKASI</span>
                      ) : (
                        <span className="text-slate-400">BELUM SELESAI</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Formal Signatures Footer */}
          <div className="grid grid-cols-2 pt-8 text-center text-xs">
            <div>
              <p className="text-slate-500 mb-12">Mengetahui, Instruktur / Widyaiswara</p>
              <p className="font-bold underline">___________________________</p>
            </div>
            <div>
              <p className="text-slate-500 mb-12">Peserta Pelatihan,</p>
              <p className="font-bold underline">{traineeName || "___________________________"}</p>
              <p className="text-slate-500 font-mono text-[10px]">NIP. {traineeNIP || ".............................."}</p>
            </div>
          </div>

        </div>

        {/* Action Buttons Toolbar (Hidden during print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10 no-print">
          {copiedMsg && (
            <span className="text-xs font-mono text-emerald-400 animate-pulse">{copiedMsg}</span>
          )}
          <div className="flex flex-wrap items-center gap-3 ml-auto">
            <button
              onClick={handleExportWhatsApp}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-2 cursor-pointer shadow-sm transition-all"
            >
              <span>📲 Kirim ke WhatsApp</span>
            </button>
            <button
              onClick={handleExportTelegram}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium flex items-center gap-2 cursor-pointer shadow-sm transition-all"
            >
              <span>📋 Salin Format Telegram</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-2 cursor-pointer shadow-sm transition-all"
            >
              <span>🖨️ Cetak Dokumen Resmi (A4)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
