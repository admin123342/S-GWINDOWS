export function CompanyHistory() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SGWindows nació hace más de 15 años con la visión de transformar el sector de la construcción en
                Colombia mediante soluciones innovadoras en vidrio arquitectónico, aluminio y acero.
              </p>
              <p>
                Desde nuestros inicios, nos hemos caracterizado por un compromiso inquebrantable con la calidad, la innovación y la satisfacción del cliente. 
              </p>
              <p>
                Hoy en día, contamos con un equipo de más de 20 profesionales altamente capacitados, instalaciones de última generación y una cartera de clientes que incluye los proyectos más emblemáticos de nosotros.
              </p>
              <p>
                Nuestra trayectoria está marcada por la constante búsqueda de la excelencia, la adopción de nuevas
                tecnologías y el desarrollo de soluciones personalizadas que superan las expectativas de nuestros
                clientes.
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/company-workshop-manufacturing-facility.jpg"
              alt="Instalaciones SGWindows"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
