"use client";

import { Instagram, Mail, Sparkles, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import FloatingElements from "./FloatingElements";

export default function ComingSoon() {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 overflow-hidden py-24 section-padding-x relative">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      <FloatingElements />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg w-full bg-light-base backdrop-blur-md rounded-3xl shadow-lg p-4 md:p-8 relative z-10 border-2 border-yellow-300"
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
          className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white font-bold py-1 px-4 md:py-3 md:px-8 rounded-full shadow-lg w-full max-w-[196px] md:max-w-fit text-center"
        >
          <span className="flex items-center justify-between gap-2 normal-font-size">
            Coming Soon! <Sparkles className="animate-pulse" size={20} />
          </span>
        </motion.div>

        <div className="text-center mt-4 md:mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 tracking-tight mb-2"
          >
            Soedirman Student Summit 2025
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative h-1.5 max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-2xl mx-auto leading-relaxed font-medium text-sm md:text-base lg:text-lg mt-2 md:mt-4"
          >
            Selamat datang calon mahasiswa baru Universitas Jenderal Soedirman!
            ✨ Bersiaplah untuk pengalaman orientasi yang seru, informatif, dan
            penuh kegembiraan! ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-2 md:gap-4 justify-center items-center mt-2 lg:mt-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 md:px-4 md:py-2 rounded-full">
              <Calendar className="text-blue-500" size={18} />
              <span className="text-blue-700 font-medium text-xs md:text-sm lg:text-base">
                To Be Announced
              </span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-3 py-1 md:px-4 md:py-2 rounded-full">
              <MapPin className="text-green-500" size={18} />
              <span className="text-green-700 font-medium text-xs md:text-sm lg:text-base">
                Universitas Jenderal Soedirman
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-4 md:mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-gradient-to-r from-green-secondary to-green-secondary/80 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-full text-base lg:text-lg w-full transition duration-200 sm:w-auto shadow-lg border-2 border-green-400">
                <a
                  href="https://wa.me/6281391815863"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                  >
                  <Mail size={20} />
                  <span>Hubungi Minsoed</span>
                </a>
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="border-2 border-pink-400 text-pink-600 hover:bg-pink-50 font-medium px-4 py-2 md:px-6 md:py-3 rounded-full text-base lg:text-lg w-full transition duration-200 sm:w-auto shadow-md">
                <a
                  href="https://www.instagram.com/soedirmanstudentsummit/"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <Instagram size={20} />
                  <span>Tetap Up To Date</span>
                </a>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
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
