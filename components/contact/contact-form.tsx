"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto con usted pronto.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Card>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo *</Label>
              <Input id="name" name="name" placeholder="Juan Pérez" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico *</Label>
              <Input id="email" name="email" type="email" placeholder="juan@ejemplo.com" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono *</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+57 300 123 4567" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" name="company" placeholder="Nombre de la empresa" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Servicio de interés *</Label>
            <select
              id="service"
              name="service"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Seleccione un servicio</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="fabricacion">Fabricación</option>
              <option value="instalacion">Instalación</option>
              <option value="cotizacion">Cotización de proyecto</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Cuéntenos sobre su proyecto o consulta..."
              rows={6}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Al enviar este formulario, acepta nuestra{" "}
            <a href="/politica-privacidad" className="text-primary hover:underline">
              Política de Privacidad
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
