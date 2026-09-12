# Requirements: LearnWith Web (Multi-Course Technical Training Platform)

**Defined:** 2026-09-12
**Core Value:** Menghilangkan kecemasan teknis peserta pelatihan melalui panduan interaktif langkah-demi-langkah, validasi mandiri yang aman, dan pelaporan kesiapan kerja yang terstandardisasi serta mudah dibagikan.

## v1 Requirements

### 1. Multi-Course Foundation & Theme Architecture (FOUND, THEME)
- [ ] **FOUND-01**: User dapat melihat katalog multi-kursus di halaman utama dengan metadata lengkap (Pengolahan Kata Tingkat Lanjut & Hands-on Agentic AI).
- [ ] **FOUND-02**: User dapat beralih antar materi kursus dengan navigasi terstruktur dan state halaman yang terisolasi.
- [ ] **THEME-01**: User dapat memilih mode tampilan: *Dark Luxury* (estetika presentasi) atau *Clean High-Contrast Light Mode* (fokus membaca modul & cetak fisik).

### 2. Zero-Anxiety Guided Walkthrough & Interactivity (GUIDE, CHECK)
- [ ] **GUIDE-01**: User disajikan panduan langkah-demi-langkah interaktif dengan visual petunjuk yang jelas dan tanpa beban teknis membingungkan.
- [ ] **GUIDE-02**: User dapat menyalin perintah, prompt, atau teks template dengan 1-klik tombol copy yang disertai feedback visual toast/copied.
- [ ] **CHECK-01**: User dapat menandai setiap langkah pada checklist interaktif dan progres tersimpan otomatis di localStorage browser.
- [ ] **CHECK-02**: User dapat melihat indikator status kesiapan real-time (*Barometer Kesiapan*) yang menghitung persentase penyelesaian tugas.

### 3. Automated Checkpoint & Evaluation Quiz (EVAL)
- [ ] **EVAL-01**: User dapat mengikuti kuis evaluasi pemahaman di akhir modul dengan penilaian otomatis seketika (*immediate scoring*).
- [ ] **EVAL-02**: User menerima umpan balik yang konstruktif dan solutif (*zero-penalty constructive feedback*) saat menjawab keliru agar tidak cemas.

### 4. Official Readiness Reporting & Multi-Channel Export (REPORT)
- [ ] **REPORT-01**: User dapat membuat Laporan Kesiapan Resmi yang memuat nama peserta, tanggal, daftar checklist yang tervalidasi, dan skor kuis.
- [ ] **REPORT-02**: User dapat mengekspor laporan ke **WhatsApp** dengan format pesan rapi siap kirim ke widyaiswara/atasan.
- [ ] **REPORT-03**: User dapat mengekspor ringkasan laporan ke format **Telegram** Markdown.
- [ ] **REPORT-04**: User dapat mencetak dokumen fisik resmi berformat kertas A4 yang rapi via print preview browser (`@media print` clean formal layout tanpa elemen UI web yang mengganggu).

## v2 Requirements (Deferred)
- **CERT-01**: Generate sertifikat digital berbasis PDF dengan QR code verifikasi online.
- **SYNC-01**: Sinkronisasi progres belajar antar perangkat dengan autentikasi akun ASN / Single Sign-On (SSO).

## Out of Scope
| Feature | Reason |
|---|---|
| Sistem Pembayaran / Paywall | Platform didedikasikan untuk pelatihan kedinasan & pelatihan terbuka gratis. |
| Pengiriman Data ke Server Eksternal Tanpa Izin | Menjaga privasi peserta pelatihan instansi pemerintah (arsitektur zero-leakage / client-first). |
| Heavy GPU Video Rendering Animation | Menghemat daya baterai dan mempermudah akses pada laptop/PC dinas instansi yang spesifikasinya terbatas. |

## Traceability

| Requirement | Phase | Status |
|---|---|---|
| FOUND-01, FOUND-02, THEME-01 | Phase 1 | Pending |
| GUIDE-01, GUIDE-02, CHECK-01, CHECK-02 | Phase 2 | Pending |
| EVAL-01, EVAL-02 | Phase 3 | Pending |
| REPORT-01, REPORT-02, REPORT-03, REPORT-04 | Phase 4 | Pending |
