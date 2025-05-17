"use client";

import { motion } from "framer-motion";
import { Parisienne } from "next/font/google";
import Link from "next/link";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
});

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 section-padding-x relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/img/backgrounds/patung-kuda.png')" }}
    >
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4"
          >
            <div className="absolute inset-0 bg-[#F5B3BF]/30 rounded-full animate-pulse"></div>
            <motion.h1
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative z-10 text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#F36089] tracking-tight flex items-center justify-center h-full"
            >
              404
            </motion.h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold pb-2 text-[#F36089] tracking-tight h-auto ${parisienne.className}`}
          >
            ~ Halaman Tidak Ditemukan ~
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-2xl mx-auto leading-relaxed font-medium text-sm md:text-base lg:text-lg mt-2 md:mt-4"
          >
            Oops! Sepertinya kamu tersesat di dunia perkuliahan. Jangan
            khawatir, kami akan membantumu kembali ke jalan yang benar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-4 md:mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-gradient-to-r from-[#F36089] to-[#F36089]/80 text-light-base font-medium px-4 py-2 md:px-6 md:py-3 rounded-full text-base lg:text-lg w-full transition duration-200 sm:w-auto shadow-lg border-2 border-[#F36089]">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className="w-5"
                  >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                  <span>Kembali ke Beranda</span>
                </Link>
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="border-2 border-[#F36089] text-[#F36089] font-medium px-4 py-2 md:px-6 md:py-3 rounded-full text-base lg:text-lg w-full transition duration-200 sm:w-auto shadow-md">
                <a
                  href="https://www.instagram.com/soedirmanstudentsummit/"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noreferrer"
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
            transition={{ delay: 1.3, duration: 0.8 }}
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
