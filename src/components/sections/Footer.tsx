import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Agence Immobilière</h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour tous vos projets immobiliers depuis plus de 10 ans.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Achat immobilier</a></li>
              <li><a href="#" className="hover:text-white">Vente immobilière</a></li>
              <li><a href="#" className="hover:text-white">Estimation gratuite</a></li>
              <li><a href="#" className="hover:text-white">Conseil juridique</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Propriétés</a></li>
              <li><a href="#" className="hover:text-white">À propos</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@agence-immobilier.fr</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>123 Avenue des Propriétés<br />75001 Paris</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
