import { Award, Shield, Users, Zap } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 15 años de experiencia en el sector con cientos de proyectos exitosos en toda Colombia.",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "Utilizamos materiales de primera calidad y ofrecemos garantía en todos nuestros trabajos.",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description: "Personal altamente capacitado y certificado en las últimas técnicas y normativas del sector.",
  },
  {
    icon: Zap,
    title: "Soluciones Eficientes",
    description: "Optimizamos tiempos y recursos sin comprometer la calidad del resultado final.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nos distinguimos por nuestro compromiso con la excelencia y la satisfacción del cliente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
