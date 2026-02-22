"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Building, Phone, User, Mail } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
   // { href: "/proprietes", label: "Propriétés", icon: Building },
    { href: "/acheter", label: "Acheter" },
    { href: "/vendre", label: "Vendre" },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <nav className="bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full py-1">
            <Image
              src="/logo.png"
              alt="FZB Immobilier"
              width={280}
              height={72}
              className="h-[calc(5rem-8px)] w-auto object-contain"
              priority
            />
            <span className="text-sm md:text-base font-semibold tracking-wide text-white-800"
            style={{ fontFamily: "var(--font-playfair)" }}>
              FZB Immobilier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

          {/* Desktop CTA - Phone & Email */}
          <div className="hidden md:flex items-center space-x-4" style={{ fontFamily: "var(--font-playfair)" }}>
            <a href="tel:4383459156" className="flex items-center text-white hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>438 345-9156</span>
            </a>
            <a href="mailto:fatiz.btg.immo@gmail.com" className="flex items-center text-white hover:text-white/80 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              <span>fatiz.btg.immo@gmail.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:text-white/80 hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors duration-200 font-medium px-2 py-1 uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20 space-y-3">
                <a href="tel:4383459156" className="flex items-center text-white hover:text-white/80 transition-colors px-2 py-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  <Phone className="w-4 h-4 mr-2" />
                  <span>438 345-9156</span>
                </a>
                <a href="mailto:fatiz.btg.immo@gmail.com" className="flex items-center text-white hover:text-white/80 transition-colors px-2 py-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  <Mail className="w-4 h-4 mr-2" />
                  <span>fatiz.btg.immo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
