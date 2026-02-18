"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface PropertyImage {
  id: string
  url: string
}

interface Property {
  id: string
  title: string
  slug: string
  price: number
  city: string
  address: string
  type: string
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  status: string
  featured: boolean
  createdAt: Date
  updatedAt: Date
  images: PropertyImage[]
}



export function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('/api/featured-properties')
        if (response.ok) {
          const data = await response.json()
          setProperties(data)
        }
      } catch (error) {
        console.error('Error fetching featured properties:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Propriétés Vedettes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chargement...
            </p>
          </div>
        </div>
      </section>
    )
  }

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
            Propriétés Vedettes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos propriétés les plus exceptionnelles sélectionnées pour vous.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  {property.images[0] && (
                    <img
                      src={property.images[0].url}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {property.price.toLocaleString()} €
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.city}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{property.bedrooms} ch.</span>
                    <span>{property.bathrooms} sdb</span>
                    <span>{property.area} m²</span>
                  </div>
                  <Button className="w-full">
                    Voir les détails
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" variant="outline">
            Voir toutes les propriétés
          </Button>
        </div>
      </div>
    </section>
  )
}
