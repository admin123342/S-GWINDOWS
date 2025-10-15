import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata = {
  title: "Contacto - SGWindows",
  description:
    "Contáctenos para cotizaciones, consultas o más información sobre nuestros servicios. Estamos listos para atender su proyecto.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-customer-service-professional.jpg"
            alt="Contacto SGWindows"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-sans">Contáctenos</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Estamos listos para atender sus consultas y hacer realidad su proyecto. Contáctenos hoy mismo para recibir
              asesoría personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Envíenos un Mensaje</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complete el formulario y nos pondremos en contacto con usted lo antes posible.
                </p>
              </div>
              <ContactForm />
            </div>

            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />

      {/* Additional Info Section */}
      <section className="py-20 bg-muted/30">
        
      </section>
    </>
  )
}
