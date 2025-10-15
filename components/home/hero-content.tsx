import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroContent() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance font-sans md:text-5xl">
            Soluciones Profesionales en Vidrio, Aluminio y Acero
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-pretty">
            Somos expertos en el diseño, fabricación e instalación de fachadas, ventanas, puertas y estructuras que definen la vanguardia en todo el país. Con cobertura nacional, llevamos precisión, calidad y estética a cada rincón de Colombia. Transformamos tu visión y hacemod realidad tus sueños.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contacto">
                Cotizar Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Link href="/proyectos">Ver Proyectos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
