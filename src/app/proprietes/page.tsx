import { Suspense } from 'react'
import { PropertyList } from '@/components/PropertyList'
import { PropertyFilters } from '@/components/PropertyFilters'
import { Skeleton } from '@/components/ui/skeleton'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Toutes nos propriétés
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez notre sélection de propriétés disponibles à la vente.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <PropertyFilters />
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<PropertyListSkeleton />}>
              <PropertyList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

function PropertyListSkeleton() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
          <Skeleton className="h-48 w-full" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}
