"use client"

import { motion } from "framer-motion"
import { Home, Gavel, Eye, Sun, MapPlus, Scale } from "lucide-react"

const SERVICES = [
  {
    icon: Home,
    title: "BONNE PLANIFICATION",
    description:
      "S'impliquer dans l'immobilier est une grande décision de vie qui peut impliquer beaucoup de paperasserie. C'est pourquoi il est crucial de prendre une approche éclairée et bien planifiée. Nous sommes là pour vous guider tout au long du processus.",
  },
  {
    icon: Gavel,
    title: "NÉGOCIATION",
    description:
      "Nous accordons la priorité à la satisfaction du client et un client satisfait est toujours bien informé et bien représenté. Nous vous aiderons à prendre la meilleure décision en ce qui concerne vos besoins immobiliers.",
  },
  {
    icon: Eye,
    title: "VISIBILITÉ",
    description:
      "Une page sur mon site Web sera créée pour promouvoir votre propriété avec une description détaillée de la propriété avec des photographies en couleur de haute qualité.",
  },
  {
    icon: Sun,
    title: "Services 7 Jours Sur 7",
    description:
      "Vous avez des questions et des préoccupations en matière immobilière? Nous fournirons les services immobiliers professionnels dont vous avez besoin et ceci 7 jours sur 7.",
  },
  {
    icon: MapPlus,
    title: "Système De Marketing Actif",
    description:
      "Nous utilisons un système de marketing actif pour promouvoir votre propriété auprès de la plus grande audience possible.",
  },
  {
    icon: Scale,
    title: "Commission Flexible",
    description:
      "Nous offrons une commission flexible pour répondre à vos besoins spécifiques et à votre budget.",
  },
]

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-8 relative"
            >
              <div className="flex justify-end mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center text-white">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <h3
                className="text-xl md:text-2xl font-semibold text-gray-900 uppercase leading-tight mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
