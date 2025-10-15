import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Preguntas Frecuentes - SGWindows",
  description: "Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de vidrio, aluminio y acero.",
}

const faqCategories = [
  {
    category: "Servicios Generales",
    questions: [
      {
        question: "¿Qué servicios ofrece SGWindows?",
        answer:
          "Ofrecemos servicios integrales de mantenimiento, fabricación e instalación de estructuras en vidrio arquitectónico, aluminio y acero. Esto incluye fachadas, ventanas, puertas, cerramientos, divisiones, barandas y pasamanos para proyectos residenciales, comerciales e industriales.",
      },
      {
        question: "¿En qué ciudades tienen cobertura?",
        answer:
          "Tenemos cobertura nacional en toda Colombia. Nuestra sede principal está en Bogotá, pero realizamos proyectos en todas las principales ciudades del país incluyendo Medellín, Cali, Barranquilla, Cartagena, Bucaramanga y más.",
      },
      {
        question: "¿Cuánto tiempo lleva SGWindows en el mercado?",
        answer:
          "Contamos con más de 15 años de experiencia en el sector, durante los cuales hemos completado más de 500 proyectos exitosos en toda Colombia.",
      },
    ],
  },
  {
    category: "Cotizaciones y Presupuestos",
    questions: [
      {
        question: "¿Cómo puedo solicitar una cotización?",
        answer:
          "Puede solicitar una cotización a través de nuestro formulario de contacto en línea, llamando a nuestro número telefónico +57 300 123 4567, o enviando un correo a info@sgwindows.co. Nos pondremos en contacto con usted en un plazo máximo de 24 horas.",
      },
      {
        question: "¿Las cotizaciones tienen algún costo?",
        answer:
          "No, todas nuestras cotizaciones son completamente gratuitas y sin compromiso. Incluimos una visita técnica al sitio para evaluar las necesidades específicas de su proyecto.",
      },
      {
        question: "¿Cuánto tiempo tarda en estar lista una cotización?",
        answer:
          "Después de la visita técnica, entregamos la cotización detallada en un plazo de 3 a 5 días hábiles, dependiendo de la complejidad del proyecto.",
      },
    ],
  },
  {
    category: "Instalación",
    questions: [
      {
        question: "¿Cuánto tiempo toma la instalación?",
        answer:
          "El tiempo de instalación varía según el tipo y tamaño del proyecto. Proyectos residenciales pequeños pueden tomar de 1 a 3 días, mientras que proyectos comerciales más grandes pueden requerir varias semanas. Le proporcionaremos un cronograma detallado en la cotización.",
      },
      {
        question: "¿Ofrecen garantía en las instalaciones?",
        answer:
          "Sí, todas nuestras instalaciones incluyen garantía por escrito. La garantía cubre defectos de instalación y varía según el tipo de trabajo, generalmente entre 1 y 5 años.",
      },
      {
        question: "¿Necesito preparar algo antes de la instalación?",
        answer:
          "Nuestro equipo le proporcionará una lista detallada de preparativos necesarios antes de la instalación. Generalmente incluye asegurar el acceso al área de trabajo y proteger muebles o elementos cercanos.",
      },
    ],
  },
  {
    category: "Mantenimiento",
    questions: [
      {
        question: "¿Con qué frecuencia debo realizar mantenimiento?",
        answer:
          "Recomendamos mantenimiento preventivo cada 6 a 12 meses, dependiendo del tipo de instalación y las condiciones de exposición. Para edificios comerciales en zonas urbanas, sugerimos mantenimiento semestral.",
      },
      {
        question: "¿Qué incluye el servicio de mantenimiento?",
        answer:
          "Nuestro servicio de mantenimiento incluye inspección técnica, limpieza especializada, lubricación de mecanismos, ajuste de herrajes, reemplazo de sellos deteriorados y reparaciones menores necesarias.",
      },
      {
        question: "¿Atienden emergencias fuera del horario laboral?",
        answer:
          "Sí, contamos con servicio de emergencias 24/7 para situaciones urgentes como vidrios rotos, filtraciones o problemas de seguridad. Puede contactarnos al +57 300 123 4567.",
      },
    ],
  },
  {
    category: "Materiales y Calidad",
    questions: [
      {
        question: "¿Qué tipo de materiales utilizan?",
        answer:
          "Utilizamos únicamente materiales de primera calidad de proveedores certificados internacionalmente. Trabajamos con vidrio templado, laminado y de control solar, perfiles de aluminio de alta resistencia y acero inoxidable.",
      },
      {
        question: "¿Los materiales cumplen con normativas de construcción?",
        answer:
          "Sí, todos nuestros materiales y procesos cumplen con las normativas colombianas de construcción (NSR-10) y estándares internacionales de calidad y seguridad.",
      },
      {
        question: "¿Ofrecen opciones de eficiencia energética?",
        answer:
          "Sí, ofrecemos vidrios de control solar, doble acristalamiento y sistemas de alta eficiencia térmica que ayudan a reducir costos de climatización y mejorar el confort interior.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Encuentre respuestas a las preguntas más comunes sobre nuestros servicios, procesos y políticas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.category}>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={`${categoryIndex}-${index}`}
                      value={`${categoryIndex}-${index}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">¿No encontró la respuesta que buscaba?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Nuestro equipo está listo para responder todas sus preguntas y brindarle la información que necesita.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contacto">Contáctenos</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
