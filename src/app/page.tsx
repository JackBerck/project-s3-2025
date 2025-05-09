import ComingSoon from "@/components/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Soedirman Student Summit 2025",
  icons: {
    icon: "/unsoed-logo.png",
    shortcut: "/unsoed-logo.png",
  },
  keywords: [
    "Coming Soon",
    "Soedirman Student Summit",
    "2025",
    "Event",
    "Conference",
    "S3",
    "Soedirman",
    "Universitas Jenderal Soedirman",
    "Jenderal Soedirman",
    "Unsoed",
  ],
  authors: [{ name: "Soedirman Student Summit" }],
  description:
    "Soedirman Student Summit (S3) merupakan kegiatan tahunan yang diselenggarakan sebagai wadah untuk pengenalan kehidupan perkuliahan dan untuk menyambut mahasiswa baru Universitas Jenderal Soedirman. Rangkaian kegiatan S3 bertujuan sebagai gerbang awal mahasiswa baru untuk mengenal dirinya sendiri dengan mengimplementasikan nilai-nilai yang akan dibawakan, serta mengenal lebih jauh tentang Universitas Jenderal Soedirman",
  openGraph: {
    title: "Coming Soon | Soedirman Student Summit 2025",
    description:
      "Soedirman Student Summit (S3) merupakan kegiatan tahunan yang diselenggarakan sebagai wadah untuk pengenalan kehidupan perkuliahan dan untuk menyambut mahasiswa baru Universitas Jenderal Soedirman. Rangkaian kegiatan S3 bertujuan sebagai gerbang awal mahasiswa baru untuk mengenal dirinya sendiri dengan mengimplementasikan nilai-nilai yang akan dibawakan, serta mengenal lebih jauh tentang Universitas Jenderal Soedirman",
    url: "https://soedirmanstudentsummit.unsoed.ac.id/",
    siteName: "Soedirman Student Summit 2025",
    images: [
      {
        url: "/unsoed-logo.png",
      },
    ],
  },
};

export default function Page() {
  return <ComingSoon />;
}
