import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-sans">¿Listo para Iniciar su Proyecto?</h2>
        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Contáctenos hoy mismo y reciba una cotización personalizada sin compromiso. Nuestro equipo de expertos está
          listo para hacer realidad su proyecto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link href="/contacto">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
          >
            <a href="tel:+573001234567">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
