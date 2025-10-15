"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "573001234567" // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios.")

  return (
    <a
      href={`https://wa.link/lsy2xh`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
