export interface PracticalStep {
  id: string;
  stepNumber: number;
  title: string;
  instruction: string;
  codeSnippet?: string;
  copyableText?: string;
  tip?: string;
  checkpointKey?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CourseModule {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  badge: string;
  overview: string;
  steps: PracticalStep[];
  quiz?: QuizQuestion[];
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  badge: string;
  category: "word" | "ai";
  targetAudience: string;
  description: string;
  estimatedHours: number;
  modulesCount: number;
  modules: CourseModule[];
}

export const COURSES: CourseData[] = [
  {
    id: "word-asn",
    slug: "word",
    title: "Pengolahan Kata Tingkat Lanjut",
    shortTitle: "Word ASN & Tata Naskah",
    subtitle: "Standarisasi Format Dokumen Kedinasan & Otomasi Dokumen Panjang",
    badge: "BPSDM & PERGUB DKI NO. 14/2020",
    category: "word",
    targetAudience: "Aparatur Sipil Negara (ASN), Analis Kebijakan, Pengadministrasi Perkantoran",
    description: "Pelatihan praktis penyusunan tata naskah dinas resmi, otomatisasi Daftar Isi bertingkat, penomoran halaman ganjil-genap romawi, serta Mail Merge dokumen massal tanpa error.",
    estimatedHours: 4,
    modulesCount: 4,
    modules: [
      {
        id: "word-m1",
        num: 1,
        title: "Standardisasi Format Tata Naskah Dinas",
        subtitle: "Setup margin resmi, jenis huruf dinas, dan anatomi kop surat dinas",
        estimatedMinutes: 30,
        badge: "Modul 01",
        overview: "Mempelajari aturan baku margin (Atas 3cm, Kiri 4cm, Bawah 3cm, Kanan 3cm) dan tipografi standar naskah dinas sesuai tata persuratan resmi instansi.",
        steps: [
          {
            id: "w1-s1",
            stepNumber: 1,
            title: "Pengaturan Margin Halaman Baku",
            instruction: "Buka Microsoft Word > Tab Layout > Margins > Custom Margins. Terapkan konfigurasi ukuran baku kedinasan.",
            copyableText: "Top: 3 cm | Bottom: 3 cm | Left: 4 cm | Right: 3 cm | Paper: A4",
            tip: "Margin kiri 4 cm disediakan untuk penjilidan berkas fisik naskah dinas agar teks tidak terpotong.",
            checkpointKey: "word_m1_margin",
          },
          {
            id: "w1-s2",
            stepNumber: 2,
            title: "Standarisasi Font & Spasi Paragraf",
            instruction: "Atur font utama dokumen menggunakan Bookman Old Style atau Arial ukuran 12pt dengan spasi 1.15 hingga 1.5.",
            copyableText: "Font: Bookman Old Style 12pt / Arial 11-12pt, Line Spacing: 1.5 lines, Before/After: 0 pt",
            checkpointKey: "word_m1_font",
          },
        ],
        quiz: [
          {
            id: "w1-q1",
            question: "Berapakah ukuran margin kiri standar untuk dokumen dinas resmi agar aman dijilid?",
            options: ["2.5 cm", "3.0 cm", "4.0 cm", "5.0 cm"],
            correctIndex: 2,
            explanation: "Margin kiri 4 cm adalah standar dokumen perkantoran dan penjilidan resmi agar teks tidak tertutup spiral atau jahitan dokumen.",
          },
        ],
      },
      {
        id: "word-m2",
        num: 2,
        title: "Sistem Heading Styles & Daftar Isi Otomatis",
        subtitle: "Multilevel list Bab/Sub-bab dan regenerasi TOC dalam 1-klik",
        estimatedMinutes: 45,
        badge: "Modul 02",
        overview: "Menggunakan Heading 1, 2, dan 3 untuk struktur navigasi laporan tebal, serta membuat Table of Contents otomatis yang sinkron dengan halaman.",
        steps: [
          {
            id: "w2-s1",
            stepNumber: 1,
            title: "Penerapan Heading 1 untuk Judul Bab",
            instruction: "Pilih teks BAB I PENDAHULUAN, klik kanan style 'Heading 1' > Update Heading 1 to Match Selection.",
            copyableText: "Heading 1: Bold, Center/Left, Keep with next: ON, Font 14pt",
            checkpointKey: "word_m2_heading",
          },
          {
            id: "w2-s2",
            stepNumber: 2,
            title: "Insert Table of Contents Otomatis",
            instruction: "Masuk ke tab References > Table of Contents > Automatic Table 1.",
            copyableText: "References > Table of Contents > Automatic Table 1",
            checkpointKey: "word_m2_toc",
          },
        ],
        quiz: [
          {
            id: "w2-q1",
            question: "Bagaimana cara memperbarui halaman pada Daftar Isi otomatis jika ada teks bab yang bertambah panjang?",
            options: [
              "Mengetik ulang nomor halamannya satu persatu",
              "Klik kanan Daftar Isi > Update Field > Update entire table",
              "Menghapus dokumen dan membuat dari awal",
              "Menekan tombol backspace pada bab terkait",
            ],
            correctIndex: 1,
            explanation: "Cukup klik Update Field > Update entire table untuk memperbarui seluruh judul bab dan nomor halaman secara otomatis.",
          },
        ],
      },
      {
        id: "word-m3",
        num: 3,
        title: "Penomoran Halaman Campuran (Romawi & Angka)",
        subtitle: "Section break continuous & unlinking Header/Footer",
        estimatedMinutes: 40,
        badge: "Modul 03",
        overview: "Memisahkan penomoran halaman Romawi kecil (i, ii, iii) pada halaman pengantar dengan angka biasa (1, 2, 3) pada batang tubuh dokumen.",
        steps: [
          {
            id: "w3-s1",
            stepNumber: 1,
            title: "Menyisipkan Section Break (Next Page)",
            instruction: "Di akhir lembar pengantar, klik Layout > Breaks > Next Page untuk memisahkan section dokumen.",
            copyableText: "Layout > Breaks > Section Breaks (Next Page)",
            checkpointKey: "word_m3_break",
          },
          {
            id: "w3-s2",
            stepNumber: 2,
            title: "Nonaktifkan 'Link to Previous'",
            instruction: "Buka Footer Section 2, klik tombol 'Link to Previous' pada Ribbon Header & Footer untuk memutus hubungan penomoran.",
            copyableText: "Header & Footer Tools > Navigation > Matikan [Link to Previous]",
            checkpointKey: "word_m3_unlink",
          },
        ],
      },
      {
        id: "word-m4",
        num: 4,
        title: "Mail Merge Surat Undangan & Sertifikat Massal",
        subtitle: "Integrasi data penerima Excel ke format dokumen Word",
        estimatedMinutes: 35,
        badge: "Modul 04",
        overview: "Membuat template surat resmi sekali dan mencetak ratusan surat personal otomatis berbasis database peserta Excel.",
        steps: [
          {
            id: "w4-s1",
            stepNumber: 1,
            title: "Hubungkan Recipient List dari File Excel",
            instruction: "Buka Mailings > Select Recipients > Use an Existing List > Pilih file data_peserta.xlsx.",
            copyableText: "Mailings > Select Recipients > Use an Existing List",
            checkpointKey: "word_m4_connect",
          },
          {
            id: "w4-s2",
            stepNumber: 2,
            title: "Sisipkan Merge Field & Selesaikan",
            instruction: "Klik 'Insert Merge Field' > pilih <<Nama>>, <<Instansi>>, lalu klik 'Finish & Merge'.",
            copyableText: "Insert Merge Field: <<Nama_Lengkap>> - <<NIP>>",
            checkpointKey: "word_m4_merge",
          },
        ],
      },
    ],
  },
  {
    id: "agentic-ai",
    slug: "ai",
    title: "Hands-on Agentic AI",
    shortTitle: "Agentic AI & Otomasi",
    subtitle: "Praktik Deploy Hermes Agent, 9Router, dan Kalender Bot",
    badge: "WORKSHOP TEKNIS & OTOMASI",
    category: "ai",
    targetAudience: "ASN Inovator, Tenaga Teknis TI, Staf Administrasi Modern",
    description: "Membangun asisten AI mandiri lokal yang terhubung ke Telegram dan kalender kerja untuk otomasi penjadwalan serta koordinasi tugas harian.",
    estimatedHours: 5,
    modulesCount: 3,
    modules: [
      {
        id: "ai-m1",
        num: 1,
        title: "Fondasi Lingkungan Windows & Node.js LTS",
        subtitle: "Verifikasi PATH sistem, CLI PowerShell, dan execution policy",
        estimatedMinutes: 25,
        badge: "Modul 01",
        overview: "Menyiapkan fondasi runtime sistem operasi agar script otomasi dan proxy dapat berjalan tanpa error izin administrator.",
        steps: [
          {
            id: "ai1-s1",
            stepNumber: 1,
            title: "Verifikasi Versi Node.js & NPM",
            instruction: "Buka PowerShell dan jalankan perintah pengecekan versi minimum Node.js (v20+ disarankan).",
            copyableText: "node -v; npm -v",
            tip: "Pastikan Node.js terdaftar di PATH lingkungan sistem Windows.",
            checkpointKey: "ai_m1_node",
          },
          {
            id: "ai1-s2",
            stepNumber: 2,
            title: "Buka Izin Eksekusi Script PowerShell",
            instruction: "Jalankan perintah ini di PowerShell Administrator agar modul otomasi dapat di-load.",
            copyableText: "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser",
            checkpointKey: "ai_m1_policy",
          },
        ],
      },
      {
        id: "ai-m2",
        num: 2,
        title: "Instalasi & Aktivasi 9Router Gateway",
        subtitle: "Deploy local proxy server port 20128 untuk routing model AI",
        estimatedMinutes: 35,
        badge: "Modul 02",
        overview: "Menjalankan 9Router sebagai gateway model lokal yang menghubungkan berbagai endpoint AI secara stabil.",
        steps: [
          {
            id: "ai2-s1",
            stepNumber: 1,
            title: "Jalankan Service 9Router",
            instruction: "Eksekusi perintah runner 9Router di terminal kerja Anda.",
            copyableText: "npx 9router start --port 20128",
            tip: "Buka browser ke http://localhost:20128 untuk memastikan dashboard gateway berstatus ONLINE.",
            checkpointKey: "ai_m2_gateway",
          },
        ],
      },
      {
        id: "ai-m3",
        num: 3,
        title: "Integrasi Bot Telegram & Google Calendar",
        subtitle: "Konfigurasi token BotFather dan otentikasi OAuth 2.0",
        estimatedMinutes: 45,
        badge: "Modul 03",
        overview: "Menghubungkan asisten agentic AI ke pesan langsung Telegram dan sinkronisasi kalender kerja instansi.",
        steps: [
          {
            id: "ai3-s1",
            stepNumber: 1,
            title: "Inisialisasi Token Bot Telegram",
            instruction: "Simpan token yang diperoleh dari @BotFather ke konfigurasi lingkungan lokal.",
            copyableText: "$env:TELEGRAM_BOT_TOKEN=\"ISI_TOKEN_DARI_BOTFATHER_DISINI\"",
            checkpointKey: "ai_m3_telegram",
          },
        ],
      },
    ],
  },
];
