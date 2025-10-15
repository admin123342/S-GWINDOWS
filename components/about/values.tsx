import { Heart, Award, Users, Lightbulb, Shield, Leaf } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos la perfección en cada detalle, desde el diseño hasta la instalación final.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos dedicamos completamente a cada proyecto, garantizando resultados excepcionales.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Fomentamos la colaboración y el respeto mutuo para alcanzar objetivos comunes.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Adoptamos nuevas tecnologías y métodos para ofrecer soluciones vanguardistas.",
  },
  {
    icon: Shield,
    title: "Integridad",
    description: "Actuamos con honestidad y transparencia en todas nuestras relaciones comerciales.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Promovemos prácticas responsables con el medio ambiente en todos nuestros procesos.",
  },
]

export function Values() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
            Nuestros Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Los principios que guían nuestro trabajo y definen nuestra cultura empresarial
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
