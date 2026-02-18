"use client"

import { motion } from "framer-motion"

export function Areas() {
  const areas = [
    { name: "Paris", count: 245 },
    { name: "Lyon", count: 89 },
    { name: "Marseille", count: 67 },
    { name: "Toulouse", count: 45 },
    { name: "Nice", count: 38 },
    { name: "Nantes", count: 29 }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Régions d'Intervention
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Présents dans les plus belles régions de France pour vous accompagner.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
              <p className="text-blue-600 font-medium">{area.count} propriétés</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
