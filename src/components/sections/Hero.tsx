"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Phone } from "lucide-react"

const BACKGROUNDS = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"]

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUNDS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Backgrounds rotatifs */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BACKGROUNDS[currentBg]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu centré */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white tracking-wide mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            FATIMA ZAHRA BOUTAGGOUNT
          </h1>
          <p
            className="text-xl md:text-2xl lg:text-3xl text-white/95"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Courtier Immobilier
          </p>
        </motion.div>
      </div>

      {/* Icônes sociales à droite */}
      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-4">
        <a
          href="#"
          className="h-10 w-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="h-10 w-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="#contact"
          className="h-10 w-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
