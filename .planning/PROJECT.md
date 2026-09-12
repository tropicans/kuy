# LearnWith Web — Multi-Course Interactive Technical Training Platform

## What This Is
Platform web pelatihan interaktif (*multi-course interactive training platform*) yang dirancang untuk mendampingi peserta pelatihan teknis (mulai dari pemula hingga profesional/ASN) agar dapat mempraktikkan alur kerja teknis secara mandiri, aman, dan terarah tanpa rasa cemas (*zero-anxiety learning*).

Aplikasi ini menggabungkan panduan visual, checklist interaktif, evaluasi kuis otomatis, hingga pelaporan kesiapan resmi yang dapat diekspor langsung ke WhatsApp, Telegram, maupun cetak dokumen fisik A4.

## Core Value
Menghilangkan kecemasan teknis peserta pelatihan melalui panduan interaktif langkah-demi-langkah, validasi mandiri yang aman, dan pelaporan kesiapan kerja yang terstandardisasi serta mudah dibagikan.

## Current Milestone: v1.0 Zero-Anxiety Multi-Course Technical Training Platform

**Goal:** Transformasi arsitektur dan UI dari generator gambar AI menjadi platform pembelajaran teknis interaktif dengan modul kursus mandiri, verifikasi praktikum, dan ekspor laporan resmi.

**Target features:**
- Multi-Course Catalog & Curriculum Navigation (Pengolahan Kata Tingkat Lanjut & Hands-on Agentic AI).
- Zero-Anxiety Guided Interactive Walkthrough (Visual step-by-step, 1-click copy, real-time checklist).
- Checkpoints & Self-Verification Engine (Auto-quiz, status kelulusan modul, zero penalty).
- Multi-Channel Official Readiness Reporting (1-click WhatsApp text generator, Telegram Markdown share, dan CSS `@media print` A4 resmi).
- Hybrid Presentation & Clean Reading Mode (Dark Luxury UI + Clean High-Contrast Light Mode).

## Requirements

### Validated
(None yet — milestone v1.0 under development)

### Active
- [ ] **FOUND-01**: Multi-Course catalog data model and curriculum switcher
- [ ] **GUIDE-01**: Step-by-step interactive workflow viewer with 1-click copy
- [ ] **CHECK-01**: Interactive checklist with persistent localStorage state
- [ ] **EVAL-01**: Automated quiz engine with immediate constructive feedback
- [ ] **REPORT-01**: Formal readiness report generator with WhatsApp, Telegram, and Print styling
- [ ] **THEME-01**: Dual-mode theme system (Dark Luxury landing & Clean High-Contrast study mode)

### Out of Scope
- Direct LMS SCORM server backend integration (v1.0 uses client-side localStorage and client-side export).
- Payment gateway / paid subscription (v1.0 dedicated to free/open training & ASN workshop readiness).
- Heavy GPU canvas scroll sequence (replaced with interactive guided stepper to ensure low-spec government PC compatibility).

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state
