import { Button } from "@/components/ui/button"
import { Wrench, Factory, HardHat, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Servicios - SGWindows",
  description:
    "Ofrecemos servicios integrales de mantenimiento, fabricación e instalación de vidrio arquitectónico, aluminio y acero.",
}

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Servicios especializados de mantenimiento preventivo y correctivo para garantizar la durabilidad y funcionalidad de sus instalaciones.",
    href: "/servicios/mantenimiento",
    image: "/maintenance-worker-cleaning-glass-facade.jpg",
  },
  {
    icon: Factory,
    title: "Fabricación",
    description:
      "Diseño y fabricación a medida de estructuras en vidrio, aluminio y acero con los más altos estándares de calidad.",
    href: "/servicios/fabricacion",
    image: "/factory-aluminum-manufacturing-process.jpg",
  },
  {
    icon: HardHat,
    title: "Instalación",
    description:
      "Instalación profesional con personal certificado y equipos especializados para garantizar resultados óptimos.",
    href: "/servicios/instalacion",
    image: "/workers-installing-glass-facade-building.jpg",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/construction-workers-modern-building-site.jpg"
            alt="Servicios SGWindows"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-sans">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Soluciones integrales en vidrio arquitectónico, aluminio y acero para proyectos residenciales, comerciales
              e industriales en toda Colombia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Button asChild size="lg">
                      <Link href={service.href}>
                        Ver más detalles
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
                  >
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-sans">
            ¿Necesita más información sobre nuestros servicios?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Nuestro equipo de expertos está listo para asesorarlo y ofrecerle la mejor solución para su proyecto.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">
              Contactar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
