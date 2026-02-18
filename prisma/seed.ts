import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
    },
  })

  // Create sample properties
  const properties = [
    {
      title: 'Beautiful Apartment in Paris',
      slug: 'beautiful-apartment-paris',
      price: 450000,
      city: 'Paris',
      address: '123 Rue de la Paix',
      type: 'apartment',
      bedrooms: 2,
      bathrooms: 1,
      area: 75,
      description: 'A charming 2-bedroom apartment in the heart of Paris.',
      featured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800' },
        { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800' },
      ],
    },
    {
      title: 'Modern House in Lyon',
      slug: 'modern-house-lyon',
      price: 650000,
      city: 'Lyon',
      address: '456 Avenue des Champs',
      type: 'house',
      bedrooms: 4,
      bathrooms: 3,
      area: 150,
      description: 'A modern 4-bedroom house with garden in Lyon.',
      featured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800' },
        { url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800' },
      ],
    },
    {
      title: 'Cozy Studio in Marseille',
      slug: 'cozy-studio-marseille',
      price: 200000,
      city: 'Marseille',
      address: '789 Boulevard Saint-Rémy',
      type: 'studio',
      bedrooms: 1,
      bathrooms: 1,
      area: 35,
      description: 'A cozy studio perfect for young professionals.',
      featured: false,
      images: [
        { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800' },
      ],
    },
    {
      title: 'Luxury Villa in Nice',
      slug: 'luxury-villa-nice',
      price: 1200000,
      city: 'Nice',
      address: '321 Promenade des Anglais',
      type: 'villa',
      bedrooms: 5,
      bathrooms: 4,
      area: 250,
      description: 'A luxurious villa with sea view in Nice.',
      featured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800' },
        { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
      ],
    },
    {
      title: 'Penthouse in Bordeaux',
      slug: 'penthouse-bordeaux',
      price: 800000,
      city: 'Bordeaux',
      address: '654 Place de la Comédie',
      type: 'penthouse',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      description: 'A stunning penthouse with city views.',
      featured: false,
      images: [
        { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800' },
      ],
    },
    {
      title: 'Family Home in Toulouse',
      slug: 'family-home-toulouse',
      price: 550000,
      city: 'Toulouse',
      address: '987 Rue de la République',
      type: 'house',
      bedrooms: 4,
      bathrooms: 2,
      area: 140,
      description: 'A spacious family home in Toulouse.',
      featured: false,
      images: [
        { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800' },
      ],
    },
    {
      title: 'Downtown Condo in Lille',
      slug: 'downtown-condo-lille',
      price: 380000,
      city: 'Lille',
      address: '147 Grand Place',
      type: 'condo',
      bedrooms: 2,
      bathrooms: 1,
      area: 65,
      description: 'A modern condo in the heart of Lille.',
      featured: false,
      images: [
        { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800' },
      ],
    },
    {
      title: 'Countryside Cottage in Provence',
      slug: 'countryside-cottage-provence',
      price: 420000,
      city: 'Provence',
      address: '258 Route de la Lavande',
      type: 'cottage',
      bedrooms: 3,
      bathrooms: 2,
      area: 100,
      description: 'A charming cottage surrounded by lavender fields.',
      featured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800' },
      ],
    },
  ]

  for (const property of properties) {
    const { images, ...propertyData } = property
    const createdProperty = await prisma.property.upsert({
      where: { slug: property.slug },
      update: {},
      create: propertyData,
    })

    for (const image of images) {
      await prisma.propertyImage.upsert({
        where: { id: `${createdProperty.id}-${image.url}` },
        update: {},
        create: {
          propertyId: createdProperty.id,
          url: image.url,
        },
      })
    }
  }

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
