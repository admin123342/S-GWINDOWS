"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    {
      name: "Servicios",
      href: "/servicios",
      submenu: [
        { name: "Mantenimiento", href: "/servicios/mantenimiento" },
        { name: "Fabricación", href: "/servicios/fabricacion" },
        { name: "Instalación", href: "/servicios/instalacion" },
      ],
    },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">SGWindows</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild>
              <Link href="/contacto">Cotizar Proyecto</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                Cotizar Proyecto
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
