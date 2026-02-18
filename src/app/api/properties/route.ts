import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const city = searchParams.get('city')
    const type = searchParams.get('type')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const sortBy = searchParams.get('sortBy') || 'createdAt'
    const sortOrder = searchParams.get('sortOrder') || 'desc'

    const skip = (page - 1) * limit

    const where: any = {
      status: 'available'
    }

    if (city) where.city = { contains: city, mode: 'insensitive' }
    if (type) where.type = type
    if (minPrice) where.price = { ...where.price, gte: parseFloat(minPrice) }
    if (maxPrice) where.price = { ...where.price, lte: parseFloat(maxPrice) }

    const orderBy: any = {}
    orderBy[sortBy] = sortOrder

    const [properties, total] = await Promise.all([
      prisma.property.findMany({
        where,
        include: { images: true },
        skip,
        take: limit,
        orderBy
      }),
      prisma.property.count({ where })
    ])

    return NextResponse.json({
      properties,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const property = await prisma.property.create({
      data: {
        title: body.title,
        slug: body.slug,
        price: body.price,
        city: body.city,
        address: body.address,
        type: body.type,
        bedrooms: body.bedrooms,
        bathrooms: body.bathrooms,
        area: body.area,
        description: body.description,
        featured: body.featured || false,
        images: {
          create: body.images || []
        }
      },
      include: { images: true }
    })
    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    console.error('Error creating property:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
