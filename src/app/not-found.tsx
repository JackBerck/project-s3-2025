import { Metadata } from "next";
import NotFound from "@/components/NotFound";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan | Soedirman Student Summit 2025",
  icons: {
    icon: "/unsoed-logo.png",
    shortcut: "/unsoed-logo.png",
  },
  description:
    "Halaman yang kamu cari tidak ditemukan. Silakan kembali ke beranda atau cari halaman lain.",
  keywords: [
    "404",
    "Not Found",
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
  openGraph: {
    title: "Halaman Tidak Ditemukan | Soedirman Student Summit 2025",
    description:
      "Halaman yang kamu cari tidak ditemukan. Silakan kembali ke beranda atau cari halaman lain.",
    url: "https://soedirmanstudentsummit.unsoed.ac.id/",
    siteName: "Soedirman Student Summit 2025",
    images: [
      {
        url: "/unsoed-logo.png",
      },
    ],
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
