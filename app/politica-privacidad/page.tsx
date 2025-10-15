export const metadata = {
  title: "Política de Privacidad - SGWindows",
  description: "Política de privacidad y protección de datos personales de SGWindows.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Política de Privacidad
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
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">1. Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  En SGWindows, nos comprometemos a proteger la privacidad y seguridad de la información personal de
                  nuestros clientes, proveedores y visitantes de nuestro sitio web. Esta Política de Privacidad describe
                  cómo recopilamos, usamos, almacenamos y protegemos su información personal de acuerdo con la Ley 1581
                  de 2012 de Colombia y demás normativas aplicables.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  2. Información que Recopilamos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Recopilamos la siguiente información personal cuando usted:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Solicita una cotización o información sobre nuestros servicios</li>
                  <li>Se comunica con nosotros a través de formularios de contacto</li>
                  <li>Contrata nuestros servicios</li>
                  <li>Visita nuestro sitio web</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  La información puede incluir: nombre completo, dirección de correo electrónico, número de teléfono,
                  dirección física, nombre de empresa, información del proyecto, y cualquier otra información que usted
                  decida proporcionarnos voluntariamente.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  3. Uso de la Información
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos su información personal para los siguientes propósitos:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Responder a sus consultas y solicitudes de información</li>
                  <li>Proporcionar cotizaciones y presupuestos personalizados</li>
                  <li>Ejecutar y gestionar contratos de servicios</li>
                  <li>Comunicarnos con usted sobre proyectos en curso</li>
                  <li>Enviar información sobre nuestros servicios (con su consentimiento previo)</li>
                  <li>Mejorar nuestros servicios y experiencia del cliente</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  4. Protección de Datos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger su
                  información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye
                  el uso de encriptación, controles de acceso, y capacitación regular de nuestro personal en prácticas
                  de protección de datos.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  5. Compartir Información
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  No vendemos, alquilamos ni compartimos su información personal con terceros para fines de marketing.
                  Podemos compartir su información únicamente con:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>Autoridades gubernamentales cuando sea requerido por ley</li>
                  <li>Socios comerciales necesarios para la ejecución de su proyecto (con su consentimiento)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">6. Sus Derechos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De acuerdo con la legislación colombiana, usted tiene los siguientes derechos sobre sus datos
                  personales:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Conocer, actualizar y rectificar sus datos personales</li>
                  <li>Solicitar prueba de la autorización otorgada</li>
                  <li>Ser informado sobre el uso que se ha dado a sus datos</li>
                  <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
                  <li>Revocar la autorización y/o solicitar la supresión de datos</li>
                  <li>Acceder de forma gratuita a sus datos personales</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  7. Retención de Datos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos
                  descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
                  Una vez que su información ya no sea necesaria, la eliminaremos o anonimizaremos de manera segura.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">8. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies son pequeños
                  archivos de texto que se almacenan en su dispositivo. Puede configurar su navegador para rechazar
                  cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  9. Cambios a esta Política
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de actualizar esta Política de Privacidad periódicamente. Cualquier cambio
                  será publicado en esta página con la fecha de actualización correspondiente. Le recomendamos revisar
                  esta política regularmente para mantenerse informado sobre cómo protegemos su información.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">10. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos sobre sus datos
                  personales, puede contactarnos a través de:
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
