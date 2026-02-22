"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const PARAGRAPH_1 =
  "Votre alliée stratégique pour réussir votre projet immobilier. Je suis ravie de vous accueillir. En tant que courtière immobilière résidentielle, je mets à votre service une combinaison unique dpertise."

const PARAGRAPH_2 =
  "Titulaire d'une maîtrise en finance, j'apporte une compréhension approfondie des marchés, de l'analyse financière et de la valeur réelle des propriétés. Formée en intelligence d'affaires et analytique, j'utilise les données, les tendances et les outils analytiques pour offrir à mes clients une vision stratégique et éclairée du marché immobilier."

const PARAGRAPH_3 =
  "Cette double compétence me permet d'analyser chaque transaction avec précision, d'évaluer la valeur réelle d'un bien, d'anticiper les tendances du marché et de vous accompagner avec une vision stratégique, que vous souhaitiez acheter, vendre ou investir."

const PARAGRAPH_4 =
  "Mon objectif est simple, vous offrir une expérience immobilière transparente, efficace et adaptée à vos besoins, tout en maximisant votre tranquillité d'esprit et votre retour sur investissement. Explorez, découvez, et n'hésitez pas à me contacter pour discuter de votre projet. Ensemble, nous transformerons vos ambitions immobilières en réussite concrète."

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Texte - à gauche */}
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              FATIMA ZAHRA
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">BOUTAGGOUNT</span>
            </h2>
            <div className="w-24 h-px bg-gray-300 my-4" />
            <p className="text-sm md:text-base text-gray-500 font-sans ml-4 mb-6">
              ICI POUR VOUS SERVIR
            </p>
            <div className="text-gray-600 leading-relaxed space-y-4 text-[15px] md:text-base">
              <p>{PARAGRAPH_1}</p>
              <p>{PARAGRAPH_2}</p>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <p>{PARAGRAPH_3}</p>
                  <p>{PARAGRAPH_4}</p>
                </motion.div>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 text-sm font-medium text-gray-700 border-b border-gray-700 pb-0.5 hover:border-gray-900 hover:text-gray-900 transition-colors uppercase tracking-wide"
            >
              {isExpanded ? "Lire moins" : "Lire plus"}
            </button>
          </motion.div>

          {/* Portrait - à droite du paragraphe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] min-h-[400px] md:min-h-0 w-full md:w-[38%] md:shrink-0"
          >
            <Image
              src="/fatimazahra.png"
              alt="Fatima Zahra Boutaggount"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
