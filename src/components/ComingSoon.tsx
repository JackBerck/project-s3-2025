"use client";

import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
});

export default function ComingSoon() {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 section-padding-x relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/img/backgrounds/patung-kuda.png')" }}
    >
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg w-full bg-light-base backdrop-blur-md rounded-3xl shadow-lg p-4 md:p-8 relative z-10 border-2 border-[#7D055A]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F35E88] via-[#F5B3BF] to-[#F35E88] text-white font-bold py-1 px-4 md:py-3 md:px-8 rounded-full shadow-lg w-full max-w-lg lg:max-w-2xl xl:max-w-3xl text-center"
        >
          <p className="text-base md:text-xl lg:text-3xl xl:text-4xl">
            Soedirman Student Summit 2025
          </p>
        </motion.div>

        <div className="text-center mt-4 md:mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold pb-2 text-[#F36089] tracking-tight h-auto ${parisienne.className}`}
          >
            ~ Coming Soon ~
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl mx-auto leading-relaxed font-medium text-sm md:text-base lg:text-lg mt-2 md:mt-4"
          >
            Selamat Datang Generasi Soedirman! Langkah Awal Menuju Perjalanan
            Baru yang Penuh Makna. Jadilah Insan Cendekia yang Kritis,
            Berintegritas, dan Peduli. Bersama Unsoed, Kembangkan Ilmu dan
            Wujudkan Perubahan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-4 md:mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-gradient-to-r from-[#F36089] to-[#F36089]/80 text-light-base font-medium px-4 py-2 md:px-6 md:py-3 rounded-full text-base lg:text-lg w-full transition duration-200 sm:w-auto shadow-lg border-2 border-[#F36089]">
                <a
                  href="https://wa.me/6281391815863"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-5"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <span>Chat in WhatsApp</span>
                </a>
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="border-2 border-[#F36089] text-[#F36089] font-medium px-4 py-2 md:px-6 md:py-3 rounded-full text-base lg:text-lg w-full transition duration-200 sm:w-auto shadow-md">
                <a
                  href="https://www.instagram.com/soedirmanstudentsummit/"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-5"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <span>We&apos;re on Instagram</span>
                </a>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-8 md:mt-12 lg:mt-16 pt-4 md:pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500">
              © 2025 Soedirman Student Summit - Universitas Jenderal Soedirman
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
