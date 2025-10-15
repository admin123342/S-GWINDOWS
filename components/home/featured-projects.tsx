import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Torre Empresarial Centro",
    category: "Fachadas",
    location: "Bogotá",
    image: "/modern-office-glass.png",
    description: "Instalación de fachada completa en vidrio templado de alta eficiencia energética.",
  },
  {
    title: "Residencial Vista Hermosa",
    category: "Ventanas y Puertas",
    location: "Medellín",
    image: "/luxury-residential-building-aluminum-windows.jpg",
    description: "Ventanas y puertas en aluminio de alta gama para complejo residencial de lujo.",
  },
  {
    title: "Centro Comercial Plaza Mayor",
    category: "Cerramientos",
    location: "Cali",
    image: "/shopping-mall-glass-enclosure-modern.jpg",
    description: "Cerramientos en vidrio y acero para áreas comunes y locales comerciales.",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 font-sans">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Algunos de nuestros trabajos más recientes</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
