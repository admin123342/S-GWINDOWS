import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Calle 78 #53-3", "Barranquilla, Atlántico", "Cobertura Nacional"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+57 3122721880", "WhatsApp disponible"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["steelglasscarloslandazabal@gmail.com"],
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Vie: 8:00 AM - 6:00 PM", "Sábados: 9:00 AM - 1:00 PM", "Emergencias 24/7"],
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-4 font-sans">Información de Contacto</h3>
        <p className="text-muted-foreground leading-relaxed">
          Estamos disponibles para atender sus consultas y brindarle la mejor asesoría para su proyecto.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <div className="space-y-1">
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
