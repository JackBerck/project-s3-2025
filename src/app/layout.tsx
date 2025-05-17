import { Poppins } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-dark-base`}>
        {children}
        <div className="fixed bottom-5 right-5 z-50">
          <AudioPlayer audioPath="/sounds/gensoed.mp3" />
        </div>
      </body>
    </html>
  );
}
