import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ProductCarousel } from "@/components/product-carousel"

export const metadata = {
  title: "Mantenimiento - SGWindows",
  description:
    "Servicios especializados de mantenimiento preventivo y correctivo para vidrio, aluminio y acero. Garantizamos la durabilidad de sus instalaciones.",
}

const products = [
  {
    title: "Ventanas",
    description: "Mantenimiento preventivo y correctivo de ventanas en aluminio, PVC y vidrio.",
    images: ["/aluminum-windows-residential-building.jpg", "/ventanas-de-aluminio-mantenimiento.jpg", "/ventanas-de-pvc-limpieza.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20ventanas.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Puertas",
    description: "Reparación y mantenimiento de puertas de entrada, interiores y corredizas.",
    images: ["/modern-glass-door-aluminum-frame.jpg", "/puerta-de-vidrio-mantenimiento.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20puertas.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Fachadas",
    description: "Mantenimiento especializado de fachadas en vidrio y aluminio.",
    images: [
      "/modern-glass-facade-architectural-design.jpg",
      "/fachada-de-vidrio-limpieza.jpg",
      "/fachada-de-aluminio-mantenimiento.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20fachadas.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Cerramientos",
    description: "Servicio de mantenimiento para cerramientos de balcones y terrazas.",
    images: ["/glass-enclosure-balcony-modern.jpg", "/cerramiento-de-balc-n-mantenimiento.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20cerramientos.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Divisiones de Baño",
    description: "Mantenimiento y reparación de divisiones de baño en vidrio templado.",
    images: ["/bathroom-glass-partition-modern.jpg", "/divisi-n-de-ba-o-vidrio-templado.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20mi%20división%20de%20baño.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Divisiones de Oficina",
    description: "Mantenimiento de sistemas de división para espacios corporativos.",
    images: ["/office-glass-partition-modern-workspace.jpg", "/divisi-n-de-oficina-vidrio.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20divisiones%20de%20oficina.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Barandas y Pasamanos",
    description: "Mantenimiento de sistemas de protección en vidrio y acero inoxidable.",
    images: ["/glass-railing-stainless-steel-modern.jpg", "/baranda-de-vidrio-mantenimiento.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20barandas%20y%20pasamanos.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Mamparas",
    description: "Servicio de mantenimiento para mamparas de baño y ducha.",
    images: ["/shower-enclosure-glass-modern.jpg", "/mampara-de-ducha-vidrio.jpg"],
    whatsappLink:
      "https://wa.me/573XXXXXXXXX?text=Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20para%20mamparas.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Estructuras Metálicas",
    description: "Mantenimiento preventivo y correctivo de estructuras en acero y aluminio.",
    images: ["/metal-structure-building-modern.jpg", "/estructura-met-lica-mantenimiento.jpg"],
    whatsappLink:
      "https://wa.me/573XXXXXXXXX?text=Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20para%20estructuras%20metálicas.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Rejas",
    description: "Mantenimiento y reparación de rejas de seguridad en diversos materiales.",
    images: ["/metal-security-grill-modern.jpg", "/reja-de-seguridad-mantenimiento.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20rejas.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
  {
    title: "Espejos",
    description: "Servicio de mantenimiento y restauración de espejos decorativos y funcionales.",
    images: ["/decorative-mirror-modern-interior.jpg", "/espejo-decorativo-limpieza.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20me%20gustaría%20solicitar%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20🔧%20para%20espejos.%20Quedo%20atento/a.%20Mi%20nombre%20es:",
  },
]

const benefits = [
  "Prolongación de la vida útil de sus instalaciones",
  "Prevención de daños mayores y costosos",
  "Mantenimiento de la estética y funcionalidad",
  "Cumplimiento de normativas de seguridad",
  "Planes de mantenimiento personalizados",
  "Respuesta rápida ante emergencias",
]

export default function MaintenancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/maintenance-worker-cleaning-glass-facade.jpg"
            alt="Mantenimiento de fachadas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-sans">
              Servicios de Mantenimiento
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Mantenemos sus instalaciones en óptimas condiciones con servicios preventivos y correctivos
              especializados.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">
              Servicios de Mantenimiento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Mantenimiento especializado para todos sus productos en vidrio, aluminio y acero
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
                      Solicitar Mantenimiento
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-sans">
                Beneficios del Mantenimiento Regular
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Un programa de mantenimiento adecuado no solo protege su inversión, sino que también garantiza la
                seguridad y funcionalidad de sus instalaciones a largo plazo.
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

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/technician-inspecting-window-installation.jpg"
                alt="Inspección técnica"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Nuestro Proceso</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Un enfoque sistemático para garantizar el mejor servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inspección Inicial",
                description: "Evaluamos el estado actual de sus instalaciones",
              },
              {
                step: "02",
                title: "Plan de Mantenimiento",
                description: "Diseñamos un programa personalizado según sus necesidades",
              },
              {
                step: "03",
                title: "Ejecución",
                description: "Realizamos el mantenimiento con personal especializado",
              },
              {
                step: "04",
                title: "Seguimiento",
                description: "Monitoreamos y documentamos todos los trabajos realizados",
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-sans">
            ¿Necesita un plan de mantenimiento para sus instalaciones?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contáctenos para una evaluación gratuita y cotización personalizada.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contacto">
              Solicitar cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
