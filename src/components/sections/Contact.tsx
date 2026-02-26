"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setForm((prev) => ({
      ...prev,
      consent: checked,
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Veuillez remplir au minimum votre nom, votre courriel et votre message.")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire.")
      }

      setStatus("success")
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        consent: false,
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer plus tard.")
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-600 text-white">
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex flex-row gap-16 md:gap-24 lg:gap-32 items-start">
          {/* Colonne gauche - Titre */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1] font-serif font-normal tracking-tight">
              CONTACTEZ
              <br />
              NOUS
            </h2>
          </motion.div>

          {/* Colonne droite - Formulaire avec marges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative md:pl-4 lg:pl-8 md:pr-16"
          >
            <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-0.5">
                  <label htmlFor="name" className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/90 font-sans block">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/50 py-1.5 text-[11px] md:text-xs placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                    placeholder=""
                  />
                </div>

                <div className="space-y-0.5">
                  <label htmlFor="phone" className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/90 font-sans block">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/50 py-1.5 text-[11px] md:text-xs placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="space-y-0.5">
                <label htmlFor="email" className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/90 font-sans block">
                  Courriel
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/50 py-1.5 text-[11px] md:text-xs placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                  placeholder=""
                  required
                />
              </div>

              <div className="space-y-0.5">
                <label htmlFor="message" className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/90 font-sans block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/50 py-1.5 text-[11px] md:text-xs placeholder:text-white/40 focus:outline-none focus:border-white resize-none transition-colors"
                  placeholder=""
                  required
                />
              </div>

              <div className="space-y-2 pt-3">
                <Button
                  type="submit"
                  className="px-8 py-1.5 border border-white/80 rounded-none bg-transparent text-[10px] tracking-[0.25em] uppercase hover:bg-white hover:text-[#696969] transition-colors"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "ENVOI..." : "ENVOYER"}
                </Button>

                {status === "success" && (
                  <p className="text-[10px] text-green-300">
                    Merci, votre message a bien été envoyé.
                  </p>
                )}
                {status === "error" && errorMessage && (
                  <p className="text-[10px] text-red-200">{errorMessage}</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
