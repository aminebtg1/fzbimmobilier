import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { FeaturedProperties } from "@/components/sections/FeaturedProperties"
import { Testimonials } from "@/components/sections/Testimonials"
import { Areas } from "@/components/sections/Areas"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
