import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const lead = await prisma.lead.create({
      data: {
        kind: body.kind,
        name: body.name,
        email: body.email,
        phone: body.phone,
        budgetMin: body.budgetMin,
        budgetMax: body.budgetMax,
        city: body.city,
        address: body.address,
        message: body.message
      }
    })
    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(leads)
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
