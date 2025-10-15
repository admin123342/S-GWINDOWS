import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    company: "Constructora Andina S.A.",
    role: "Director de Proyectos",
    content:
      "SGWindows superó nuestras expectativas en el proyecto de la Torre Empresarial. Su profesionalismo y atención al detalle son excepcionales.",
    rating: 5,
  },
  {
    name: "María González",
    company: "Inmobiliaria del Valle",
    role: "Gerente General",
    content:
      "Trabajar con SGWindows fue una experiencia excelente. Cumplieron con los tiempos establecidos y la calidad del trabajo es impecable.",
    rating: 5,
  },
  {
    name: "Jorge Martínez",
    company: "Arquitectos Asociados",
    role: "Arquitecto Principal",
    content:
      "La capacidad técnica y el compromiso de SGWindows con la excelencia los convierte en nuestro proveedor preferido para proyectos de gran envergadura.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
