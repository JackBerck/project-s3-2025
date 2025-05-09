"use client"

import { motion } from "framer-motion"
import {
  Book,
  GraduationCap,
  Lightbulb,
  Pencil,
  Rocket,
  Star,
  Zap,
  HelpCircle,
  FileQuestion,
  MapPin,
} from "lucide-react"
import type { ReactNode } from "react"

interface FloatingElementsProps {
  variant?: "default" | "404"
}

interface FloatingItemProps {
  icon: ReactNode
  x: string
  y: string
  size: number
  delay: number
  duration: number
}

const FloatingItem = ({ icon, x, y, delay, duration }: FloatingItemProps) => (
  <motion.div
    className="absolute text-white/80 drop-shadow-md"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8 }}
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {icon}
    </motion.div>
  </motion.div>
)

export default function FloatingElements({ variant = "default" }: FloatingElementsProps) {
  const elements =
    variant === "default"
      ? [
          {
            icon: <GraduationCap size={40} className="text-green-500" />,
            x: "10%",
            y: "15%",
            size: 40,
            delay: 0.5,
            duration: 4,
          },
          { icon: <Book size={30} className="text-blue-500" />, x: "85%", y: "20%", size: 30, delay: 0.7, duration: 5 },
          {
            icon: <Lightbulb size={35} className="text-yellow-500" />,
            x: "75%",
            y: "75%",
            size: 35,
            delay: 0.9,
            duration: 4.5,
          },
          {
            icon: <Rocket size={38} className="text-purple-500" />,
            x: "15%",
            y: "80%",
            size: 38,
            delay: 1.1,
            duration: 3.5,
          },
          { icon: <Star size={25} className="text-pink-500" />, x: "50%", y: "10%", size: 25, delay: 1.3, duration: 3 },
          {
            icon: <Pencil size={28} className="text-orange-500" />,
            x: "20%",
            y: "40%",
            size: 28,
            delay: 1.5,
            duration: 5.5,
          },
          { icon: <Zap size={32} className="text-red-500" />, x: "80%", y: "50%", size: 32, delay: 1.7, duration: 4.2 },
        ]
      : [
          {
            icon: <HelpCircle size={40} className="text-purple-500" />,
            x: "10%",
            y: "15%",
            size: 40,
            delay: 0.5,
            duration: 4,
          },
          {
            icon: <FileQuestion size={30} className="text-blue-500" />,
            x: "85%",
            y: "20%",
            size: 30,
            delay: 0.7,
            duration: 5,
          },
          {
            icon: <MapPin size={35} className="text-red-500" />,
            x: "75%",
            y: "75%",
            size: 35,
            delay: 0.9,
            duration: 4.5,
          },
          {
            icon: <HelpCircle size={25} className="text-pink-500" />,
            x: "15%",
            y: "80%",
            size: 25,
            delay: 1.1,
            duration: 3.5,
          },
          {
            icon: <FileQuestion size={38} className="text-purple-500" />,
            x: "50%",
            y: "10%",
            size: 38,
            delay: 1.3,
            duration: 3,
          },
          {
            icon: <MapPin size={28} className="text-orange-500" />,
            x: "20%",
            y: "40%",
            size: 28,
            delay: 1.5,
            duration: 5.5,
          },
          {
            icon: <HelpCircle size={32} className="text-blue-500" />,
            x: "80%",
            y: "50%",
            size: 32,
            delay: 1.7,
            duration: 4.2,
          },
        ]

  return (
    <>
      {elements.map((item, index) => (
        <FloatingItem key={index} {...item} />
      ))}
    </>
  )
}
