export function ContactMap() {
  return (
    <section className="h-[500px] bg-muted">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.797731287708!2d-74.81514863602595!3d11.00486738579263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42da1a7143771%3A0x3cda3f00a852fab6!2sCl.%2078%20%2353-3%2C%20Nte.%20Centro%20Historico%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1760382900431!5m2!1ses-419!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación SGWindows"
      />
    </section>
  )
}
