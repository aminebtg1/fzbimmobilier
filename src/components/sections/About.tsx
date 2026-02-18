"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const PARAGRAPH_1 =
  "Choisir de travailler avec un courtier immobilier présente de nombreux avantages. Tout d'abord, un courtier immobilier professionnel possède une connaissance approfondie du marché immobilier local. Grâce à leur expertise, ils peuvent vous guider efficacement tout au long du processus d'achat ou de vente d'une propriété. Le courtier est capable d'évaluer correctement la valeur d'un bien, en tenant compte des tendances du marché et des comparables récents, assurant ainsi que vous obtenez le meilleur prix, que vous soyez acheteur ou vendeur."

const PARAGRAPH_2 =
  "En plus de leur expertise en évaluation, les courtiers ont accès à un vaste réseau de professionnels de l'immobilier, des avocats et des inspecteurs. Cela leur permet de faciliter toutes les étapes de la transaction immobilière, de la négociation initiale jusqu'à la clôture finale. Leur capacité à gérer les aspects juridiques et administratifs complexes de l'achat ou de la vente d'une propriété offre une tranquillité d'esprit précieuse aux clients."

const PARAGRAPH_3 =
  "Travailler avec un courtier immobilier signifie également bénéficier d'un accompagnement personnalisé et attentif. Le courtier s'engage à comprendre vos besoins spécifiques et à vous proposer des options qui correspondent à vos critères et à votre budget. Leur objectif est de rendre le processus aussi fluide et efficace que possible, en vous offrant des conseils honnêtes et des recommandations basées sur leur expérience et leur expertise."

const PARAGRAPH_4 =
  "En résumé, choisir de faire appel à un courtier immobilier professionnel est une décision judicieuse pour toute personne impliquée dans une transaction immobilière. Leur connaissance approfondie du marché, leur réseau étendu de professionnels et leur engagement envers le service client font d'eux des partenaires inestimables pour atteindre vos objectifs immobiliers avec succès."

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
