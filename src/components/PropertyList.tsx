"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'

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
  createdAt: string
  updatedAt: string
  images: PropertyImage[]
}

interface PropertiesResponse {
  properties: Property[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([])
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProperties()
  }, [pagination.page])

  const fetchProperties = async () => {
    try {
      const response = await fetch(`/api/properties?page=${pagination.page}&limit=${pagination.limit}`)
      const data: PropertiesResponse = await response.json()
      setProperties(data.properties)
      setPagination(data.pagination)
    } catch (error) {
      console.error('Error fetching properties:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
        ))}
      </div>

      {pagination.pages > 1 && (
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.pages}
          onPageChange={(page) => setPagination(prev => ({ ...prev, page }))}
        />
      )}
    </div>
  )
}
