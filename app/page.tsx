import { Hero } from "@/components/home/hero"
import { HeroContent } from "@/components/home/hero-content"
import { Services } from "@/components/home/services"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { CallToAction } from "@/components/home/call-to-action"
import { ContactSection } from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroContent />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
      <ContactSection />
    </>
  )
}
