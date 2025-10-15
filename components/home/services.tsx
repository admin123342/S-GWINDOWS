import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Factory, HardHat, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Servicios especializados de mantenimiento preventivo y correctivo para garantizar la durabilidad y funcionalidad de sus instalaciones.",
    href: "/servicios/mantenimiento",
    features: ["Inspección técnica", "Limpieza especializada", "Reparaciones", "Mantenimiento preventivo"],
  },
  {
    icon: Factory,
    title: "Fabricación",
    description:
      "Diseño y fabricación a medida de estructuras en vidrio, aluminio y acero con los más altos estándares de calidad.",
    href: "/servicios/fabricacion",
    features: ["Diseño personalizado", "Materiales premium", "Control de calidad", "Fabricación a medida"],
  },
  {
    icon: HardHat,
    title: "Instalación",
    description:
      "Instalación profesional con personal certificado y equipos especializados para garantizar resultados óptimos.",
    href: "/servicios/instalacion",
    features: ["Personal certificado", "Equipos especializados", "Cumplimiento normativo", "Garantía de instalación"],
  },
]

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales para todas sus necesidades en vidrio arquitectónico, aluminio y acero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-sans">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="ghost" className="group-hover:gap-3 transition-all">
                    <Link href={service.href}>
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
