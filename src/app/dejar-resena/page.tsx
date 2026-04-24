import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, CheckCircle, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Deja tu Reseña — Kilowatt PR',
  description:
    'Comparte tu experiencia con Kilowatt PR en Google. Tu reseña honesta ayuda a otras familias puertorriqueñas a tomar una decisión informada sobre energía solar.',
  alternates: { canonical: 'https://www.kilowattpr.com/dejar-resena' },
  // noindex so Google doesn't rank this review-request page over the actual reviews page
  robots: { index: false, follow: true },
}

// Direct deep-link to Google Business Profile write-review form.
// Tapping this opens the 5-star review form for Kilowatt PR LLC immediately,
// no extra clicks. Source: GBP → "Solicitar más reseñas" → "Copiar enlace".
const GOOGLE_REVIEW_URL = 'https://g.page/r/CTlRehNeXdFFEBM/review'

export default function DejarResenaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Deja tu Reseña', path: '/dejar-resena' }]} />

      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary-container fill-primary-container" size={28} />
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Gracias por ser parte de Kilowatt PR
            </h1>
            <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-2xl mx-auto">
              Tu experiencia honesta ayuda a otras familias puertorriqueñas a tomar una decisión
              informada sobre energía solar. Toma 1 minuto dejar tu reseña en Google.
            </p>
          </div>

          {/* CTA card */}
          <div className="bg-white border border-primary-container/30 rounded-2xl p-8 shadow-lg text-center mb-10">
            <h2 className="font-headline font-bold text-on-surface text-xl mb-3">
              Deja tu reseña en Google
            </h2>
            <p className="text-on-surface-variant mb-6">
              Al dar clic se abre directamente el formulario de reseña de Google. Selecciona
              las estrellas, escribe tu experiencia y listo — toma menos de 1 minuto.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex"
            >
              <Star size={18} />
              Dejar mi Reseña Ahora
              <ArrowRight size={16} />
            </a>
          </div>

          {/* What to cover */}
          <div className="mb-12">
            <h2 className="section-title mb-6">¿Qué puedes mencionar en tu reseña?</h2>
            <ul className="space-y-3">
              {[
                'Tiempo de respuesta del equipo — ¿qué tan rápido te contestamos?',
                'Proceso de instalación — ¿cómo fue la experiencia con los técnicos?',
                'Calidad del trabajo terminado — paneles, cableado, acabados',
                'Seguimiento post-instalación — ¿respondimos después de energizar tu sistema?',
                'Cualquier detalle específico que haga tu experiencia única',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface-variant">
                  <CheckCircle className="text-primary-container shrink-0 mt-0.5" size={18} />
                  <span className="text-body-md leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honest reviews note */}
          <div className="bg-primary-container/10 border border-primary-container/30 rounded-xl p-6 mb-10">
            <h3 className="font-headline font-bold text-on-surface mb-2">
              Pedimos reseñas honestas — buenas o malas
            </h3>
            <p className="text-on-surface-variant text-body-md leading-relaxed">
              Si algo no salió como esperabas, preferimos saberlo por una reseña que poder responder
              y arreglar antes que perder tu confianza. Kilowatt PR responde a toda reseña en Google
              dentro de 48 horas.
            </p>
          </div>

          {/* Alternative contact */}
          <div className="text-center">
            <h3 className="font-headline font-semibold text-on-surface mb-4">
              ¿Prefieres darnos feedback directo sin dejarlo público?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/17874312275"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 px-5 py-3"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href="tel:+17874312275" className="btn-secondary inline-flex items-center gap-2 px-5 py-3">
                <Phone size={18} />
                787-431-2275
              </a>
            </div>
            <p className="text-on-surface-variant text-sm mt-6">
              <Link href="/resenas" className="text-primary-container hover:underline">
                Ver las reseñas que otros clientes han dejado →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
