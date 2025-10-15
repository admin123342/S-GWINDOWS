import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SGWindows</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Soluciones profesionales en vidrio arquitectónico, aluminio y acero con cobertura nacional en Colombia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/nosotros"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/servicios/mantenimiento"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/fabricacion"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Fabricación
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/instalacion"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Instalación
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Barranquilla Atlántico, Colombia
                  <br />
                  Cobertura Nacional
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+573001234567"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +57 312 272 1880
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@sgwindows.co"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  steelglasscarloslandazabal@gmail.co
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} SGWindows. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-privacidad" className="hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-primary-foreground transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
