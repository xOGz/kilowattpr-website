import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mensaje Enviado — Gracias',
  description: 'Tu mensaje fue enviado exitosamente. El equipo de Kilowatt PR te contactará pronto.',
  robots: { index: false, follow: false },
}

export default function GraciasPage() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: 'rgba(245, 166, 35, 0.15)' }}
        >
          <CheckCircle className="text-primary-container" size={40} />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-4">
          ¡Mensaje Recibido!
        </h1>
        <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
          Gracias por tu interés en energía solar. Nuestro equipo te contactará en menos de
          24 horas para coordinar tu consulta gratis.
        </p>

        <div className="bg-surface-container rounded-xl p-6 mb-8">
          <p className="text-on-surface font-semibold mb-3">¿Necesitas respuesta inmediata?</p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center w-full text-base py-4"
          >
            <MessageCircle size={20} />
            Escríbenos por WhatsApp
          </a>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-primary-container font-semibold hover:underline">
          Volver al inicio <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
