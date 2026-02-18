import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, phone, email, message, consent } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlBody = `
      <h2>Nouveau message depuis le formulaire de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
      <p><strong>Courriel :</strong> ${email}</p>
      <p><strong>Consentement :</strong> ${consent ? "Oui" : "Non"}</p>
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `

    await transporter.sendMail({
      from: `"Site Immobilier" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "fatiz.btg.immo@gmail.com",
      subject: "Nouveau message de contact",
      text: `Nom: ${name}
Téléphone: ${phone || "Non renseigné"}
Courriel: ${email}
Consentement: ${consent ? "Oui" : "Non"}

Message:
${message}`,
      html: htmlBody,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Erreur d'envoi du mail de contact:", error)
    return NextResponse.json(
      { error: "Erreur interne lors de l'envoi du message." },
      { status: 500 }
    )
  }
}
