export const metadata = {
  title: "Términos y Condiciones - SGWindows",
  description: "Términos y condiciones de uso del sitio web y servicios de SGWindows.",
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  1. Aceptación de Términos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al acceder y utilizar el sitio web de SGWindows y nuestros servicios, usted acepta estar sujeto a
                  estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe
                  utilizar nuestro sitio web ni contratar nuestros servicios.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">2. Servicios</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SGWindows ofrece servicios de mantenimiento, fabricación e instalación de estructuras en vidrio
                  arquitectónico, aluminio y acero. Los detalles específicos de cada servicio, incluyendo alcance,
                  precios y plazos, se establecerán en contratos individuales con cada cliente.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">3. Cotizaciones</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las cotizaciones proporcionadas son válidas por 30 días desde su emisión. Los precios están sujetos a
                  cambios basados en variaciones en costos de materiales, alcance del proyecto o condiciones del sitio
                  no previstas inicialmente.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">4. Garantías</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ofrecemos garantías sobre nuestros trabajos de instalación y fabricación según se especifique en cada
                  contrato. Las garantías cubren defectos de fabricación e instalación, pero no incluyen daños causados
                  por uso inadecuado, accidentes, desastres naturales o mantenimiento insuficiente.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  5. Responsabilidades del Cliente
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">El cliente se compromete a:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Proporcionar acceso adecuado al sitio de trabajo</li>
                  <li>Obtener los permisos necesarios para la ejecución del proyecto</li>
                  <li>Realizar los pagos según lo acordado en el contrato</li>
                  <li>Notificar cualquier problema o inquietud de manera oportuna</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  6. Propiedad Intelectual
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo el contenido del sitio web de SGWindows, incluyendo textos, imágenes, logotipos y diseños, está
                  protegido por derechos de autor y otras leyes de propiedad intelectual. No se permite la reproducción,
                  distribución o uso comercial sin autorización previa por escrito.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  7. Limitación de Responsabilidad
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  SGWindows no será responsable por daños indirectos, incidentales o consecuentes que surjan del uso de
                  nuestros servicios o sitio web. Nuestra responsabilidad total no excederá el monto pagado por el
                  servicio específico en cuestión.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">8. Modificaciones</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios
                  entrarán en vigor inmediatamente después de su publicación en el sitio web. Es responsabilidad del
                  usuario revisar periódicamente estos términos.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">9. Ley Aplicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier disputa
                  será resuelta en los tribunales competentes de Bogotá, Colombia.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">10. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para preguntas sobre estos Términos y Condiciones, puede contactarnos en:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong> steelglasscarloslandazabal@gmail.com
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +57 312 272 1880
                  </p>
                  <p>
                    <strong>Dirección:</strong> Calle 78 #53-3, Barranquilla, Atlántico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
