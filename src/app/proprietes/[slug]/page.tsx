import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { PropertyGallery } from '@/components/PropertyGallery'
import { PropertyDetails } from '@/components/PropertyDetails'
import { PropertyContact } from '@/components/PropertyContact'

interface PropertyPageProps {
  params: {
    slug: string
  }
}

async function getProperty(slug: string) {
  try {
    const property = await prisma.property.findUnique({
      where: { slug },
      include: { images: true }
    })
    return property
  } catch (error) {
    console.error('Error fetching property:', error)
    return null
  }
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const property = await getProperty(params.slug)

  if (!property) {
    return {
      title: 'Propriété non trouvée'
    }
  }

  return {
    title: `${property.title} - ${property.city}`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images.length > 0 ? [property.images[0].url] : []
    }
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getProperty(params.slug)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PropertyGallery images={property.images} title={property.title} />
            <PropertyDetails property={property} />
          </div>
          <div className="lg:col-span-1">
            <PropertyContact property={property} />
          </div>
        </div>
      </div>
    </div>
  )
}
