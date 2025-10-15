"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar } from "lucide-react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filters = ["Todos", "Fachadas", "Ventanas y Puertas", "Cerramientos", "Divisiones", "Barandas"]

  const projects = [
    {
      title: "Torre Empresarial Centro",
      category: "Fachadas",
      location: "Bogotá",
      year: "2024",
      image: "/project-office-tower-glass-facade.jpg",
      description:
        "Instalación completa de fachada en vidrio templado de alta eficiencia energética para edificio corporativo de 20 pisos.",
    },
    {
      title: "Residencial Vista Hermosa",
      category: "Ventanas y Puertas",
      location: "Medellín",
      year: "2024",
      image: "/project-residential-luxury-windows.jpg",
      description:
        "Suministro e instalación de ventanas y puertas en aluminio de alta gama para complejo residencial de 150 apartamentos.",
    },
    {
      title: "Centro Comercial Plaza Mayor",
      category: "Cerramientos",
      location: "Cali",
      year: "2023",
      image: "/project-shopping-mall-glass-enclosure.jpg",
      description:
        "Cerramientos en vidrio y acero para áreas comunes, locales comerciales y food court de centro comercial.",
    },
    {
      title: "Edificio Corporativo Andino",
      category: "Fachadas",
      location: "Bogotá",
      year: "2023",
      image: "/project-corporate-building-modern-facade.jpg",
      description:
        "Fachada ventilada en aluminio y vidrio con sistema de control solar para edificio de oficinas de 15 pisos.",
    },
    {
      title: "Hotel Boutique del Parque",
      category: "Ventanas y Puertas",
      location: "Cartagena",
      year: "2023",
      image: "/project-boutique-hotel-entrance.jpg",
      description:
        "Puertas de entrada, ventanas y divisiones en vidrio templado para hotel boutique de 50 habitaciones.",
    },
    {
      title: "Oficinas Tech Hub",
      category: "Divisiones",
      location: "Medellín",
      year: "2024",
      image: "/project-tech-office-glass-partitions.jpg",
      description:
        "Sistema de divisiones modulares en vidrio para espacios de trabajo colaborativo en edificio de tecnología.",
    },
    {
      title: "Condominio Terrazas del Norte",
      category: "Barandas",
      location: "Barranquilla",
      year: "2023",
      image: "/project-residential-glass-railings.jpg",
      description: "Barandas en vidrio templado y acero inoxidable para balcones y terrazas de complejo residencial.",
    },
    {
      title: "Centro Médico Salud Total",
      category: "Cerramientos",
      location: "Bucaramanga",
      year: "2024",
      image: "/project-medical-center-glass-walls.jpg",
      description: "Cerramientos y divisiones en vidrio para consultorios, salas de espera y áreas administrativas.",
    },
    {
      title: "Universidad Campus Norte",
      category: "Fachadas",
      location: "Bogotá",
      year: "2023",
      image: "/project-university-building-facade.jpg",
      description: "Fachada en vidrio y aluminio para edificio de aulas y laboratorios de campus universitario.",
    },
  ]

  const filteredProjects = activeFilter === "Todos" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/portfolio-projects-showcase-banner.jpg"
            alt="Proyectos SGWindows"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-sans">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Descubra algunos de los proyectos más destacados que hemos realizado en toda Colombia, demostrando nuestra
              experiencia y compromiso con la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
                  <h3 className="text-xl font-bold text-foreground mb-3 font-sans">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No se encontraron proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">20+</div>
              <div className="text-primary-foreground/80">Profesionales</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center font-sans">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-sans">
            ¿Quiere que su proyecto sea el próximo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contáctenos hoy mismo para discutir cómo podemos hacer realidad su visión con la misma calidad y dedicación
            que caracteriza todos nuestros proyectos.
          </p>
          <Button asChild size="lg">
            <a href="/contacto">Iniciar mi proyecto</a>
          </Button>
        </div>
      </section>
    </>
  )
}
