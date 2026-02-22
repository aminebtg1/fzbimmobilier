import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import nodemailer from 'nodemailer'

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

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const kindLabel = body.kind === 'buy' ? 'Achat' : body.kind === 'sell' ? 'Vente' : body.kind

    // Build dynamic fields based on lead type
    let additionalFields = '';
    let textAdditionalFields = '';

    if (body.kind === 'sell') {
      // For sell leads, show address instead of budget
      additionalFields = `
        <p><strong>Adresse :</strong> ${body.address || 'Non renseignée'}</p>
        <p><strong>Ville :</strong> ${body.city || 'Non renseignée'}</p>
      `;
      textAdditionalFields = `
Adresse: ${body.address || 'Non renseignée'}
Ville: ${body.city || 'Non renseignée'}
`;
    } else {
      // For buy leads, show budget
      additionalFields = `
        <p><strong>Budget :</strong> ${body.budgetMin ? body.budgetMin + '€' : 'Non défini'} - ${body.budgetMax ? body.budgetMax + '€' : 'Non défini'}</p>
        <p><strong>Ville souhaitée :</strong> ${body.city || 'Non renseignée'}</p>
      `;
      textAdditionalFields = `
Budget: ${body.budgetMin ? body.budgetMin + '€' : 'Non défini'} - ${body.budgetMax ? body.budgetMax + '€' : 'Non défini'}
Ville: ${body.city || 'Non renseignée'}
`;
    }

    const htmlBody = `
      <h2>Nouveau lead - ${kindLabel}</h2>
      <p><strong>Nom :</strong> ${body.name}</p>
      <p><strong>Email :</strong> ${body.email}</p>
      <p><strong>Téléphone :</strong> ${body.phone || 'Non renseigné'}</p>
      ${additionalFields}
      <p><strong>Message :</strong></p>
      <p>${body.message ? body.message.replace(/\n/g, "<br />") : 'Aucun message'}</p>
    `

    await transporter.sendMail({
      from: `"Site Immobilier" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "fatiz.btg.immo@gmail.com",
      subject: `Nouveau lead - ${kindLabel} de ${body.name}`,
      text: `Nouveau lead - ${kindLabel}

Nom: ${body.name}
Email: ${body.email}
Téléphone: ${body.phone || 'Non renseigné'}
${textAdditionalFields}
Message:
${body.message || 'Aucun message'}`,
      html: htmlBody,
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
