import { AboutHero } from "@/components/about/about-hero"
import { CompanyHistory } from "@/components/about/company-history"
import { MissionVision } from "@/components/about/mission-vision"
import { Values } from "@/components/about/values"
import { Team } from "@/components/about/team"
import { Certifications } from "@/components/about/certifications"

export const metadata = {
  title: "Nosotros - SGWindows",
  description:
    "Conoce más sobre SGWindows, nuestra historia, misión, visión y el equipo de profesionales que hace posible cada proyecto.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyHistory />
      <MissionVision />
      <Values />
      <Team />
      <Certifications />
    </>
  )
}
