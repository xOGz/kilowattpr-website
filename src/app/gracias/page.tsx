import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, MessageCircle, ArrowRight, Star, Gift } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mensaje Enviado — Gracias',
  description: 'Tu mensaje fue enviado exitosamente. El equipo de Kilowatt PR te contactará pronto.',
  robots: { index: false, follow: false },
}

export default function GraciasPage() {
  return (
    <section className="py-24 bg-surface">
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
          2 horas para coordinar tu consulta gratis.
        </p>

        <div className="bg-surface-container rounded-xl p-6 mb-6">
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

        {/* Referral program */}
        <div className="bg-surface-container rounded-xl p-6 mb-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(245, 166, 35, 0.15)' }}
            >
              <Gift className="text-primary-container" size={20} />
            </div>
            <div>
              <p className="text-on-surface font-semibold mb-1">¿Conoces a alguien que necesite solar?</p>
              <p className="text-on-surface-variant text-sm mb-3">
                Gana $500 por cada persona que refieras y complete su instalación.
              </p>
              <Link
                href="/programa-de-referidos"
                className="text-primary-container font-label text-label-lg hover:underline inline-flex items-center gap-1"
              >
                Ver programa de referidos <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Google review request */}
        <div className="bg-surface-container rounded-xl p-6 mb-8 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(245, 166, 35, 0.15)' }}
            >
              <Star className="text-primary-container" size={20} />
            </div>
            <div>
              <p className="text-on-surface font-semibold mb-1">¿Ya eres cliente? Déjanos tu reseña</p>
              <p className="text-on-surface-variant text-sm mb-3">
                Tu opinión ayuda a otras familias a tomar la decisión de protegerse con energía solar.
              </p>
              <a
                href="https://www.google.com/maps/place/Kilowatt+PR+LLC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-container font-label text-label-lg hover:underline inline-flex items-center gap-1"
              >
                Dejar reseña en Google <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-primary-container font-semibold hover:underline">
          Volver al inicio <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
