"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MessageSquare } from 'lucide-react'

interface PropertyContactProps {
  property: any
}

export function PropertyContact({ property }: PropertyContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
          kind: 'property_inquiry',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Demande d'information pour la propriété "${property.title}" (${property.city}):\n\n${formData.message}`
        }),
      })

      if (response.ok) {
        alert('Votre demande a été envoyée avec succès !')
        setFormData({
          name: '',
          email: '',
          phone: '',
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Demander plus d'informations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet *</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Téléphone</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={`Bonjour, je suis intéressé par cette propriété "${property.title}". Pouvez-vous me donner plus d'informations ?`}
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">
              Envoyer la demande
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact direct</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-blue-600" />
            <div>
              <p className="font-medium">Téléphone</p>
              <p className="text-gray-600">01 23 45 67 89</p>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-blue-600" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">contact@agence-immobilier.fr</p>
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-4">
            <p>Notre équipe vous répondra dans les plus brefs délais pour vous accompagner dans votre projet immobilier.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
