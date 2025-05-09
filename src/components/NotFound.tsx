"use client";

import Link from "next/link";
import { Home, Frown } from "lucide-react";
import { motion } from "framer-motion";
import FloatingElements from "./FloatingElements";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden py-16 section-padding-x relative">
      <FloatingElements variant="404" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 md:p-8 relative z-10 border-2 border-purple-300 text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.3,
          }}
          className="relative mx-auto w-40 h-40"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full animate"></div>
          <motion.h1
            initial={{ y: 10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              repeatType: "reverse",
            }}
            className="relative z-10 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-600 tracking-tight flex items-center justify-center h-full"
          >
            404
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 tracking-tight gap-2 mt-4 flex justify-center items-center">
            <Frown className="text-purple-500" />
            Heumm... Halamannya Ga Ada
          </h2>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative h-1.5 max-w-md mx-auto mt-2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-sm md:text-base lg:text-lg mt-2 md:mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
          Sepertinya Gensoed yang satu ini tersesat di dunia perkuliahan. Jangan khawatir,
          kami akan membantumu kembali ke jalan yang benar! 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-4 md:mt-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white sm:w-auto shadow-lg font-medium px-4 py-2 md:px-6 md:py-3 rounded-full text-base lg:text-lg w-full transition duration-200">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home size={20} />
                <span>Balik ke Beranda</span>
              </Link>
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
      </motion.div>
    </div>
  );
}
