import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-sans">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluciones integrales de alta calidad en vidrio arquitectónico, aluminio y acero, superando
                las expectativas de nuestros clientes mediante la innovación constante, el compromiso con la excelencia
                y un servicio personalizado que garantice la durabilidad, funcionalidad y estética de cada proyecto.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-sans">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como la empresa líder en Colombia en soluciones arquitectónicas de vidrio, aluminio y
                acero, destacándonos por nuestra capacidad de innovación, calidad excepcional y compromiso con la
                sostenibilidad, expandiendo nuestra presencia a nivel internacional y contribuyendo al desarrollo de
                proyectos que transformen el paisaje urbano.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
