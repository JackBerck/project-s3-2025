export interface Assignment {
    name: string;
    description: string;
    longDescription: string;
    image: string;
    link: string;
    openedAt?: Date;
}

export const assignments: Assignment[] = [
    {
        name: "Sistem Informasi Akademik",
        description: "Membuat sistem informasi untuk mengelola data mahasiswa dan mata kuliah",
        longDescription: "Kembangkan sistem informasi akademik yang dapat mengelola data mahasiswa, mata kuliah, jadwal, dan nilai. Sistem harus memiliki fitur login, dashboard, CRUD operations, dan laporan. Gunakan TypeScript, React, dan database untuk menyimpan data.",
        image: "/img/placeholder.png",
        link: "/assignments/sistem-akademik",
        openedAt: new Date("2025-07-01")
    },
    {
        name: "Website Profil Universitas",
        description: "Membuat website resmi untuk profil universitas dengan desain responsif",
        longDescription: "Buat website profil universitas yang informatif dan menarik. Sertakan halaman beranda, tentang universitas, program studi, fasilitas, berita, dan kontak. Website harus responsif, SEO-friendly, dan memiliki desain modern.",
        image: "/img/placeholder.png",
        link: "/assignments/website-universitas",
        openedAt: new Date("2025-07-06")
    },
    {
        name: "Aplikasi Presensi Digital",
        description: "Mengembangkan sistem presensi berbasis web untuk mahasiswa",
        longDescription: "Kembangkan aplikasi presensi digital yang memungkinkan mahasiswa melakukan check-in/check-out dengan QR code atau geolocation. Sistem harus mencatat waktu kehadiran, generate laporan, dan memiliki dashboard untuk dosen.",
        image: "/img/placeholder.png",
        link: "/assignments/presensi-digital",
        openedAt: new Date("2025-07-06")
    },
    {
        name: "Portal E-Learning",
        description: "Membangun platform pembelajaran online untuk mahasiswa",
        longDescription: "Buat platform e-learning yang mendukung upload materi, quiz online, forum diskusi, dan video conference. Implementasikan sistem role-based access, progress tracking, dan notifikasi untuk meningkatkan engagement mahasiswa.",
        image: "/img/placeholder.png",
        link: "/assignments/elearning-portal",
        openedAt: new Date("2025-07-05")
    },
    {
        name: "Sistem Perpustakaan Digital",
        description: "Mengembangkan sistem manajemen perpustakaan berbasis web",
        longDescription: "Kembangkan sistem perpustakaan digital dengan fitur pencarian buku, peminjaman online, reservasi, dan katalog digital. Sertakan sistem reminder untuk pengembalian buku dan laporan statistik penggunaan perpustakaan.",
        image: "/img/placeholder.png",
        link: "/assignments/perpustakaan-digital",
        openedAt: new Date("2025-07-12")
    },
    {
        name: "Aplikasi Penjadwalan Ruang Kelas",
        description: "Membuat sistem penjadwalan dan booking ruang kelas otomatis",
        longDescription: "Buat aplikasi yang dapat mengatur jadwal penggunaan ruang kelas secara otomatis, menghindari konflik waktu, dan memungkinkan booking ruang untuk kegiatan khusus. Sertakan visualisasi jadwal dan notifikasi perubahan.",
        image: "/img/placeholder.png",
        link: "/assignments/penjadwalan-ruang",
        openedAt: new Date("2025-07-19")
    },
    {
        name: "Platform Tugas Akhir Online",
        description: "Mengembangkan sistem pengelolaan tugas akhir dan skripsi",
        longDescription: "Kembangkan platform untuk mengelola proses tugas akhir mulai dari pengajuan judul, bimbingan online, upload dokumen, hingga jadwal sidang. Sistem harus mendukung komunikasi antara mahasiswa dan dosen pembimbing.",
        image: "/img/placeholder.png",
        link: "/assignments/tugas-akhir",
        openedAt: new Date("2025-07-26")
    },
    {
        name: "Sistem Evaluasi Dosen",
        description: "Membuat aplikasi untuk evaluasi kinerja dosen oleh mahasiswa",
        longDescription: "Buat sistem evaluasi dosen yang memungkinkan mahasiswa memberikan feedback secara anonim. Implementasikan berbagai jenis pertanyaan, analisis hasil evaluasi, dan dashboard untuk melihat tren penilaian dari waktu ke waktu.",
        image: "/img/placeholder.png",
        link: "/assignments/evaluasi-dosen",
        openedAt: new Date("2025-07-29")
    },
    {
        name: "Portal Beasiswa dan Bantuan",
        description: "Mengembangkan sistem informasi beasiswa dan bantuan keuangan",
        longDescription: "Kembangkan portal yang menampilkan informasi beasiswa, proses pendaftaran online, tracking status aplikasi, dan sistem scoring otomatis. Sertakan fitur upload dokumen, notifikasi deadline, dan laporan penerima beasiswa.",
        image: "/img/placeholder.png",
        link: "/assignments/portal-beasiswa",
        openedAt: new Date("2025-07-30")
    },
    {
        name: "Aplikasi Event Kampus",
        description: "Membuat platform untuk mengelola acara dan kegiatan kampus",
        longDescription: "Buat aplikasi untuk mengelola berbagai event kampus seperti seminar, workshop, dan kegiatan mahasiswa. Fitur meliputi pendaftaran event, manajemen peserta, check-in digital, dan feedback post-event.",
        image: "/img/placeholder.png",
        link: "/assignments/event-kampus",
        openedAt: new Date("2025-07-30")
    },
    // {
    //     name: "Sistem Keuangan Mahasiswa",
    //     description: "Mengembangkan aplikasi untuk mengelola pembayaran SPP dan biaya kuliah",
    //     longDescription: "Kembangkan sistem keuangan yang memungkinkan mahasiswa melihat tagihan, melakukan pembayaran online, download bukti pembayaran, dan tracking riwayat transaksi. Integrasikan dengan payment gateway dan sistem notifikasi.",
    //     image: "/img/placeholder.png",
    //     link: "/assignments/keuangan-mahasiswa",
    //     openedAt: new Date("2025-07-26")
    // },
    // {
    //     name: "Dashboard Analytics Kampus",
    //     description: "Membuat dashboard visualisasi data untuk manajemen kampus",
    //     longDescription: "Buat dashboard komprehensif yang menampilkan berbagai metrik kampus seperti jumlah mahasiswa, tingkat kelulusan, penggunaan fasilitas, dan tren akademik. Implementasikan chart interaktif, filter data, dan export laporan.",
    //     image: "/img/placeholder.png",
    //     link: "/assignments/dashboard-analytics",
    //     openedAt: new Date("2025-07-02")
    // }
];