import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Sergio Gómez",
    role: "Director General",
    image: "/professional-man-business-suit-portrait.jpg",
    description: "Ingeniero Civil con más de 20 años de experiencia en el sector de la construcción.",
  },
  {
    name: "Laura Martínez",
    role: "Directora de Operaciones",
    image: "/professional-woman-business-attire-portrait.jpg",
    description: "Arquitecta especializada en diseño de fachadas y sistemas de cerramiento.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Jefe de Producción",
    image: "/engineer-hard-hat-construction-site.jpg",
    description: "Ingeniero Mecánico con amplia experiencia en fabricación de estructuras metálicas.",
  },
  {
    name: "Ana Gutiérrez",
    role: "Gerente de Proyectos",
    image: "/female-architect-blueprints-office.jpg",
    description: "Especialista en gestión de proyectos de gran envergadura y coordinación de equipos.",
  },
]

export function Team() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Profesionales altamente capacitados comprometidos con la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
