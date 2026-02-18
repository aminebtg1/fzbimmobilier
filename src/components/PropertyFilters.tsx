"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PropertyFilters() {
  const [filters, setFilters] = useState({
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement filter logic
    console.log('Filters:', filters)
  }

  const clearFilters = () => {
    setFilters({
      city: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      sortBy: 'createdAt',
      sortOrder: 'desc'
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtres</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ville</label>
            <Input
              type="text"
              name="city"
              value={filters.city}
              onChange={handleChange}
              placeholder="Ex: Paris"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Type de bien</label>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Tous les types</option>
              <option value="apartment">Appartement</option>
              <option value="house">Maison</option>
              <option value="studio">Studio</option>
              <option value="duplex">Duplex</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Prix minimum (€)</label>
            <Input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Prix maximum (€)</label>
            <Input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nombre de chambres</label>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Toutes</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Trier par</label>
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="createdAt">Date d'ajout</option>
              <option value="price">Prix</option>
              <option value="area">Surface</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ordre</label>
            <select
              name="sortOrder"
              value={filters.sortOrder}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="desc">Décroissant</option>
              <option value="asc">Croissant</option>
            </select>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Appliquer
            </Button>
            <Button type="button" variant="outline" onClick={clearFilters}>
              Effacer
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
