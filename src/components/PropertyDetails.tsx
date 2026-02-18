import { MapPin, Bed, Bath, Square, Calendar } from 'lucide-react'

interface PropertyDetailsProps {
  property: any
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{property.address}, {property.city}</span>
        </div>
        <div className="text-3xl font-bold text-blue-600 mb-4">
          {property.price.toLocaleString('fr-FR')} €
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <Bed className="w-5 h-5 mr-2 text-gray-600" />
          <span>{property.bedrooms} ch.</span>
        </div>
        <div className="flex items-center">
          <Bath className="w-5 h-5 mr-2 text-gray-600" />
          <span>{property.bathrooms} sdb</span>
        </div>
        <div className="flex items-center">
          <Square className="w-5 h-5 mr-2 text-gray-600" />
          <span>{property.area} m²</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-gray-600" />
          <span>{property.type}</span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Informations générales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Type de bien:</span> {property.type}
          </div>
          <div>
            <span className="font-medium">Statut:</span> {property.status === 'available' ? 'Disponible' : 'Vendu'}
          </div>
          <div>
            <span className="font-medium">Mis en ligne:</span> {new Date(property.createdAt).toLocaleDateString('fr-FR')}
          </div>
          <div>
            <span className="font-medium">Dernière mise à jour:</span> {new Date(property.updatedAt).toLocaleDateString('fr-FR')}
          </div>
        </div>
      </div>
    </div>
  )
}
