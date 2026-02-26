"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function SellPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          kind: 'sell',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          message: formData.message
        }),
      })

      if (response.ok) {
        alert('Votre demande a été envoyée avec succès !')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          message: ''
        })
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Introduction Section */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 p-8 md:p-12 mb-10 text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
  {/* Subtle grid + glow */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:48px_48px]" />
  <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-4xl">

    <h1 className="text-center text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
      Vendez avec confiance
    </h1>

    <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg leading-relaxed text-white/75" style={{ fontFamily: "var(--font-playfair)" }}>
      Une stratégie de mise en marché qui optimise la valeur de votre propriété
    </p>

    {/* Content */}
    <div className="mt-10 space-y-5 text-white/80 leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
      <p>
        Vendre une propriété est une décision importante. Pour obtenir le meilleur prix, au meilleur moment, vous méritez un accompagnement professionnel, stratégique et entièrement dédié à vos intérêts.
      </p>

      <p>
        En tant que courtière immobilière résidentielle, je combine une approche humaine avec une expertise pointue. J’analyse votre propriété sous tous ses angles : valeur réelle, positionnement sur le marché, tendances actuelles, comportements des acheteurs et potentiel d’appréciation. Chaque décision est guidée par des données, des stratégies éprouvées et une compréhension fine du marché.
      </p>

      {/* Value section */}
      <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
        <p className="text-sm font-medium uppercase tracking-wider text-white/60">
          Ce que je vous offre
        </p>

        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "Une évaluation précise et réaliste de votre propriété",
            "Une stratégie de mise en marché personnalisée et performante",
            "Une visibilité maximale grâce à des outils marketing modernes",
            "Une gestion complète des visites, des suivis et des négociations",
            "Une approche transparente, proactive et orientée résultats",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                ✓
              </span>
              <span className="text-white/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="pt-2 text-white/85 font-medium">
        Mon objectif est simple : 
vous aider à vendre rapidement, au meilleur prix, tout en vous offrant une expérience fluide et sans stress.
      </p>

      {/* CTA line */}
      <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
        <p className="text-lg md:text-xl font-semibold text-white">
          Votre propriété mérite une stratégie à la hauteur de sa valeur
        </p>
        <p className="text-sm text-white/60">
          Ensemble, faisons de votre vente un succès.
        </p>
      </div>
    </div>
  </div>
</div>

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Parlons de votre projet
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: "var(--font-playfair)" }}>
              Remplissez ce formulaire et je vous contacterai rapidement pour vous accompagner dans votre projet d'achat.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vos informations</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1"style={{ fontFamily: "var(--font-playfair)" }}>Prénom *</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className='bg-white'
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1"style={{ fontFamily: "var(--font-playfair)" }}>Nom *</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className='bg-white'
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1"style={{ fontFamily: "var(--font-playfair)" }}>Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='bg-white'
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1"style={{ fontFamily: "var(--font-playfair)" }}>Téléphone *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='bg-white'
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1"style={{ fontFamily: "var(--font-playfair)" }}>Adresse *</label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className='bg-white'
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1"style={{ fontFamily: "var(--font-playfair)" }}>Ville souhaitée</label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Ex: Laval, Gatineau, Sherbrooke..."
                    className='bg-white'
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1"style={{ fontFamily: "var(--font-playfair)" }}>Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins spécifiques..."
                    rows={4}
                    className='bg-white'
                  />
                </div>

                <Button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-6 text-lg"style={{ fontFamily: "var(--font-playfair)" }}>
                  Envoyer le formulaire
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
