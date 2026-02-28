import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fatima Zahra Boutaggount</h3>
            <p className="text-gray-300 mb-4">
Votre partenaire de confiance pour concrétiser tous vos projets immobiliers.
Explorez nos offres et contactez-nous pour donner vie à vos ambitions.            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/acheter" className="hover:text-white">Achat immobilier</a></li>
              <li><a href="vendre" className="hover:text-white">Vente immobilière</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">À propos</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>438 345-9156</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>fatiz.btg.immo@gmail.com</span>
              </div> 
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
