import { Montserrat } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} text-dark-base`}
      >
        {children}
        <div className="fixed bottom-5 right-5 z-50">
          <AudioPlayer audioPath="/sounds/gensoed.mp3" />
        </div>
      </body>
    </html>
  );
}
