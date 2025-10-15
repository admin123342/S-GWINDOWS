export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/team-construction-workers-architects-site.jpg"
          alt="Equipo SGWindows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-sans">Sobre Nosotros</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Somos una empresa colombiana especializada en soluciones arquitectónicas de vidrio, aluminio y acero,
            comprometida con la excelencia y la innovación en cada proyecto.
          </p>
        </div>
      </div>
    </section>
  )
}
