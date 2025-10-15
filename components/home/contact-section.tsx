import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctenos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarle con su proyecto. Envíenos un mensaje o contáctenos directamente por WhatsApp.
          </p>
        </div>

        {/* Contact Form and WhatsApp Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* WhatsApp Contact Card - Takes 1 column */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-[#25D366]/10 to-[#20BA5A]/5 border-[#25D366]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  Contacto Directo
                </CardTitle>
                <CardDescription>¿Necesita una respuesta rápida? Escríbanos por WhatsApp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <a href="https://wa.link/lsy2xh" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Abrir WhatsApp
                  </a>
                </Button>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-muted-foreground">+57 312 272 1880</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contactosteelglasscarloslandazabal@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-muted-foreground">Barranquilla, Colombia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Horario de Atención</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <ContactMap />
      </div>
    </section>
  )
}
