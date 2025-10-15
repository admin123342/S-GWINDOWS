import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Shield, Clock, CheckSquare, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ProductCarousel } from "@/components/product-carousel"

export const metadata = {
  title: "Instalación - SGWindows",
  description: "Instalación profesional de vidrio, aluminio y acero con personal certificado y equipos especializados.",
}

const products = [
  {
    title: "Ventanas",
    description: "Instalación profesional de ventanas en aluminio, PVC y vidrio con garantía.",
    images: [
      "/aluminum-windows-residential-building.jpg",
      "/ventanas-de-aluminio-mantenimiento.jpg",
      "/ventanas-de-pvc-limpieza.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20ventanas.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Puertas",
    description: "Instalación experta de puertas de entrada, interiores y corredizas.",
    images: [
      "/modern-glass-door-aluminum-frame.jpg",
      "/puerta-de-vidrio-mantenimiento.jpg",
      "/puerta-corredera-vidrio-templado.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20puertas.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Fachadas",
    description: "Instalación de sistemas de fachadas con personal certificado en altura.",
    images: [
      "/modern-glass-facade-architectural-design.jpg",
      "/fachada-de-vidrio-limpieza.jpg",
      "/fachada-de-aluminio-mantenimiento.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20fachadas.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Cerramientos",
    description: "Instalación de cerramientos para balcones, terrazas y espacios comerciales.",
    images: [
      "/glass-enclosure-balcony-modern.jpg",
      "/cerramiento-de-balc-n-mantenimiento.jpg",
      "/cerramiento-terraza-vidrio.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20cerramientos.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Divisiones de Baño",
    description: "Instalación precisa de divisiones de baño en vidrio templado.",
    images: [
      "/bathroom-glass-partition-modern.jpg",
      "/divisi-n-de-ba-o-vidrio-templado.jpg",
      "/mampara-ba-o-vidrio-esmerilado.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20una%20división%20de%20baño.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Divisiones de Oficina",
    description: "Instalación de sistemas de división para espacios corporativos.",
    images: [
      "/office-glass-partition-modern-workspace.jpg",
      "/divisi-n-de-oficina-vidrio.jpg",
      "/mampara-oficina-aluminio-vidrio.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20divisiones%20de%20oficina.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Rejas",
    description: "Instalación segura de rejas de seguridad en diversos materiales.",
    images: ["/metal-security-grill-modern.jpg", "/reja-seguridad-acero.jpg", "/reja-ventana-hierro-forjado.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20rejas.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Espejos",
    description: "Instalación profesional de espejos decorativos y funcionales.",
    images: [
      "/decorative-mirror-modern-interior.jpg",
      "/espejo-decorativo-marco-aluminio.jpg",
      "/espejo-ba-o-iluminado.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20espejos.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
  {
    title: "Barandas y Pasamanos",
    description: "Instalación segura de sistemas de protección en vidrio y acero.",
    images: [
      "/glass-railing-stainless-steel-modern.jpg",
      "/baranda-vidrio-templado-escalera.jpg",
      "/pasamanos-acero-inoxidable.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20quisiera%20cotizar%20el%20servicio%20de%20Instalación%20👷‍♂️%20para%20barandas%20y%20pasamanos.%20Agradezco%20su%20pronta%20respuesta.%20Mi%20nombre%20es:",
  },
]

const features = [
  {
    icon: Users,
    title: "Personal Certificado",
    description: "Técnicos altamente capacitados con certificaciones en instalación de sistemas arquitectónicos.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Cumplimiento estricto de normas de seguridad y protocolos de trabajo en altura.",
  },
  {
    icon: Clock,
    title: "Tiempos Optimizados",
    description: "Planificación eficiente para minimizar interrupciones y cumplir con cronogramas.",
  },
  {
    icon: CheckSquare,
    title: "Control de Calidad",
    description: "Inspección rigurosa en cada etapa para garantizar instalaciones perfectas.",
  },
]

const benefits = [
  "Instalación precisa según especificaciones técnicas",
  "Uso de equipos especializados y herramientas profesionales",
  "Cumplimiento de normativas de construcción vigentes",
  "Garantía de instalación por escrito",
  "Limpieza completa del área de trabajo",
  "Soporte post-instalación y mantenimiento",
]

export default function InstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/workers-installing-glass-facade-building.jpg"
            alt="Instalación profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-sans">
              Instalación Profesional
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Instalamos sus estructuras con precisión, seguridad y los más altos estándares de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">
              ¿Por qué confiar en nosotros?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experiencia, profesionalismo y compromiso con la excelencia en cada instalación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Servicios de Instalación</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Instalación profesional para todos sus productos en vidrio, aluminio y acero
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ProductCarousel images={product.images} alt={product.title} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-sans">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <Button asChild className="w-full">
                    <a href={product.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Cotizar Instalación
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/installation-team-working-building-facade.jpg"
                alt="Equipo de instalación"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-sans">
                Beneficios de Nuestra Instalación
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Una instalación profesional es clave para garantizar la durabilidad, funcionalidad y estética de sus
                estructuras.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Proceso de Instalación</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Un enfoque sistemático para garantizar resultados perfectos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inspección del Sitio",
                description: "Evaluamos las condiciones y preparamos el plan de instalación",
              },
              {
                step: "02",
                title: "Preparación",
                description: "Organizamos materiales, equipos y medidas de seguridad",
              },
              {
                step: "03",
                title: "Instalación",
                description: "Ejecutamos el trabajo con precisión y atención al detalle",
              },
              {
                step: "04",
                title: "Verificación Final",
                description: "Inspeccionamos y probamos la instalación antes de entregar",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-sans">Seguridad Primero</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La seguridad de nuestro equipo y de su propiedad es nuestra máxima prioridad. Cumplimos con todas las
              normativas de seguridad industrial y trabajo en altura, utilizamos equipos de protección certificados para
              cada proyecto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Cumplimiento Normativo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Accidentes Graves</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">¿Listo para instalar su proyecto?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contáctenos para programar una visita técnica y recibir una cotización detallada.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contacto">
              Solicitar visita técnica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
