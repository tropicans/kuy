# Roadmap: LearnWith Web (Multi-Course Technical Training Platform)

## Overview
Transformasi codebase `learnwith-web` secara terstruktur melalui 4 fase eksekusi: mulai dari pembentukan schema multi-kursus & sistem tema ganda (*Dark/Light*), perombakan landing & stepper praktikum interaktif tanpa cemas, implementasi modul kuis evaluasi otomatis, hingga generator pelaporan kesiapan multi-channel (WhatsApp, Telegram, dan Print A4).

## Phases

- [ ] **Phase 1: Multi-Course Foundation, Schema & Dual-Theme Architecture** - Fondasi data multi-kursus, router navigasi kursus, dan toggle tema (Dark Luxury & Clean Light Mode).
- [ ] **Phase 2: Zero-Anxiety Guided Walkthrough & Interactive Checklist** - Antarmuka langkah modul terpandu, 1-click copy engine, persistent checklist di localStorage, dan barometer kesiapan.
- [ ] **Phase 3: Checkpoints & Automated Evaluation Quiz** - Sistem evaluasi pemahaman otomatis dengan umpan balik konstruktif dan status kelulusan modul tanpa beban cemas.
- [ ] **Phase 4: Official Readiness Reporting & Multi-Channel Export** - Form pengisian data peserta, generator laporan kesiapan resmi, 1-klik ekspor WhatsApp & Telegram, serta print styling A4 resmi.

---

## Phase Details

### Phase 1: Multi-Course Foundation, Schema & Dual-Theme Architecture
**Goal**: Menghadirkan katalog kursus modular (Word Lanjutan & Agentic AI) dan sistem tema ganda yang ramah presentasi maupun cetak.
**Depends on**: Nothing (Fase Pertama)
**Requirements**: FOUND-01, FOUND-02, THEME-01
**Success Criteria**:
1. Halaman landing menampilkan daftar kursus dengan deskripsi tujuan dan durasi pelatihan.
2. Pengguna dapat berganti kursus dan melihat struktur kurikulum yang rapi.
3. Pengguna dapat menekan toggle tema untuk berpindah antara Dark Luxury dan Clean High-Contrast Light Mode dengan instan.

### Phase 2: Zero-Anxiety Guided Walkthrough & Interactive Checklist
**Goal**: Memberikan panduan praktikum langkah-demi-langkah yang menghilangkan rasa takut salah bagi peserta pemula dan ASN.
**Depends on**: Phase 1
**Requirements**: GUIDE-01, GUIDE-02, CHECK-01, CHECK-02
**Success Criteria**:
1. Setiap modul menampilkan instruksi visual langkah-demi-langkah yang jelas.
2. Tombol "Salin" 1-klik berfungsi mulus menyalin template/perintah dengan notifikasi toast.
3. Checklist interaktif menyimpan progres otomatis di browser (data tidak hilang saat refresh).
4. Barometer kesiapan menampilkan persentase progres praktikum secara real-time.

### Phase 3: Checkpoints & Automated Evaluation Quiz
**Goal**: Memfasilitasi evaluasi pemahaman praktikum mandiri tanpa tekanan psikologis bagi peserta.
**Depends on**: Phase 2
**Requirements**: EVAL-01, EVAL-02
**Success Criteria**:
1. Kuis interaktif dapat dikerjakan di akhir modul dengan penilaian instan.
2. Jawaban salah disertai penjelasan pembetulan yang mendidik dan solutif.
3. Modul otomatis menampilkan lencana "TERVERIFIKASI" setelah evaluasi selesai.

### Phase 4: Official Readiness Reporting & Multi-Channel Export
**Goal**: Memungkinkan peserta mengomunikasikan hasil pelatihan dan kesiapan kerja secara resmi ke berbagai kanal.
**Depends on**: Phase 3
**Requirements**: REPORT-01, REPORT-02, REPORT-03, REPORT-04
**Success Criteria**:
1. Pengguna dapat melihat pratinjau dokumen Laporan Kesiapan Resmi yang terisi otomatis.
2. Tombol "Kirim ke WhatsApp" membuka teks terformat rapi untuk widyaiswara/atasan.
3. Tombol "Kirim ke Telegram" menghasilkan teks siap kirim ke grup/bot.
4. Perintah Cetak browser (`Ctrl+P` / tombol print) merender dokumen A4 yang bersih, rapi, formal, dan siap tanda tangan.
