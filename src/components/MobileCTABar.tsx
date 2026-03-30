'use client'

import { MessageCircle, Phone } from 'lucide-react'

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ background: 'rgba(18, 18, 64, 0.95)', backdropFilter: 'blur(16px)' }}
    >
      <div className="flex gap-2 p-3">
        <a
          href="https://wa.me/17874312275"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-whatsapp text-sm py-3 justify-center"
        >
          <MessageCircle size={18} />
          Cotización Gratis
        </a>
        <a
          href="tel:+17874312275"
          className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-sm font-label font-semibold text-on-surface border border-outline-variant/30"
        >
          <Phone size={16} />
          Llamar
        </a>
      </div>
    </div>
  )
}
