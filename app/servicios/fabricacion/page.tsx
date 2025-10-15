import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Ruler, Cog, Award, Sparkles, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ProductCarousel } from "@/components/product-carousel"

export const metadata = {
  title: "Fabricación - SGWindows",
  description:
    "Diseño y fabricación a medida de estructuras en vidrio, aluminio y acero con los más altos estándares de calidad.",
}

const products = [
  {
    title: "Ventanas",
    description: "Ventanas en aluminio y PVC con excelente aislamiento térmico y acústico.",
    images: [
      "/aluminum-windows-residential-building.jpg",
      "/ventanas-de-aluminio-mantenimiento.jpg",
      "/ventanas-de-pvc-limpieza.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20ventanas.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "Puertas",
    description: "Puertas de entrada, interiores y corredizas en diversos materiales y acabados.",
    images: [
      "/modern-glass-door-aluminum-frame.jpg",
      "/puerta-de-vidrio-mantenimiento.jpg",
      "/puerta-corredera-vidrio-templado.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20puertas.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "Fachadas",
    description: "Sistemas de fachadas en vidrio y aluminio con diseños modernos y eficiencia energética.",
    images: [
      "/modern-glass-facade-architectural-design.jpg",
      "/fachada-de-vidrio-limpieza.jpg",
      "/fachada-de-aluminio-mantenimiento.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20fachadas.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "Cerramientos",
    description: "Soluciones de cerramiento para balcones, terrazas y espacios comerciales.",
    images: [
      "/glass-enclosure-balcony-modern.jpg",
      "/cerramiento-de-balc-n-mantenimiento.jpg",
      "/cerramiento-terraza-vidrio.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20cerramientos.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "División de Baño",
    description: "Divisiones de baño en vidrio templado con herrajes de alta calidad.",
    images: [
      "/bathroom-glass-partition-modern.jpg",
      "/divisi-n-de-ba-o-vidrio-templado.jpg",
      "/mampara-ba-o-vidrio-esmerilado.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20una%20división%20de%20baño.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "Divisiones de Oficina",
    description: "Divisiones de oficina y espacios interiores con sistemas modulares.",
    images: [
      "/office-glass-partition-modern-workspace.jpg",
      "/divisi-n-de-oficina-vidrio.jpg",
      "/mampara-oficina-aluminio-vidrio.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20divisiones%20de%20oficina.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "Rejas",
    description: "Fabricación de rejas de seguridad en diversos diseños y materiales.",
    images: ["/metal-security-grill-modern.jpg", "/reja-seguridad-acero.jpg", "/reja-ventana-hierro-forjado.jpg"],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20rejas.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "Espejos",
    description: "Espejos decorativos y funcionales con diseños personalizados.",
    images: [
      "/decorative-mirror-modern-interior.jpg",
      "/espejo-decorativo-marco-aluminio.jpg",
      "/espejo-ba-o-iluminado.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20espejos.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
  {
    title: "Barandas y Pasamanos",
    description: "Sistemas de protección en vidrio templado, acero inoxidable y aluminio.",
    images: [
      "/glass-railing-stainless-steel-modern.jpg",
      "/baranda-vidrio-templado-escalera.jpg",
      "/pasamanos-acero-inoxidable.jpg",
    ],
    whatsappLink:
      "https://wa.me/573122721880?text=👋%20Hola%20SGWindows,%20estoy%20interesado/a%20en%20cotizar%20la%20Fabricación%20📏%20de%20barandas%20y%20pasamanos.%20¿Podrían%20brindarme%20más%20información?%20Mi%20nombre%20es:",
  },
]

const features = [
  {
    icon: Ruler,
    title: "Diseño Personalizado",
    description: "Adaptamos cada proyecto a sus necesidades específicas y preferencias estéticas.",
  },
  {
    icon: Award,
    title: "Materiales Premium",
    description: "Utilizamos materiales de primera calidad de proveedores certificados internacionalmente.",
  },
  {
    icon: Cog,
    title: "Tecnología Avanzada",
    description: "Equipos de última generación para precisión y acabados perfectos.",
  },
  {
    icon: Sparkles,
    title: "Control de Calidad",
    description: "Rigurosos procesos de inspección en cada etapa de fabricación.",
  },
]

export default function FabricationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/factory-aluminum-manufacturing-process.jpg"
            alt="Fabricación de estructuras"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-sans">
              Fabricación a Medida
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Diseñamos y fabricamos estructuras en vidrio, aluminio y acero con precisión y calidad excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">
              ¿Por qué elegir nuestra fabricación?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Combinamos experiencia, tecnología y materiales de primera para resultados excepcionales
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Productos que Fabricamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Soluciones completas para proyectos residenciales, comerciales e industriales
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
                      Cotizar Fabricación
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Proceso de Fabricación</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desde el diseño hasta la entrega, cada paso está cuidadosamente planificado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consulta", description: "Entendemos sus necesidades y visión del proyecto" },
              { step: "02", title: "Diseño", description: "Creamos planos detallados y renders 3D" },
              { step: "03", title: "Fabricación", description: "Producimos con precisión y control de calidad" },
              { step: "04", title: "Inspección", description: "Verificamos cada detalle antes de la entrega" },
              { step: "05", title: "Entrega", description: "Transportamos y preparamos para instalación" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-sans">¿Tiene un proyecto en mente?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contáctenos para discutir sus necesidades y recibir una cotización personalizada.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contacto">
              Iniciar proyecto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
