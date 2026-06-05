'use client'

import { useState } from 'react'

const CRM_INTAKE_ENDPOINT = 'https://kilowatt-crm.vercel.app/api/leads/intake'

interface LeadCaptureFormProps {
  source: string
  buttonText?: string
  /** What the lead is actually requesting, sent to the CRM so the right guide
      is delivered and tracked (e.g. 'Guía Solar Puerto Rico 2026'). */
  serviceInterest?: string
  /** Language of the page so the CRM follows up in the right language. */
  locale?: 'es' | 'en'
}

export default function LeadCaptureForm({
  source,
  buttonText = 'Descargar Gratis',
  serviceInterest = 'Consulta general',
  locale = 'es',
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get('nombre') ?? ''),
      phone: String(formData.get('telefono') ?? '') || null,
      email: String(formData.get('email') ?? ''),
      municipio: 'No especificado',
      service_interest: serviceInterest,
      message: `Lead magnet download — source: ${source}`,
      website: String(formData.get('website') ?? ''),
      source_url: typeof window !== 'undefined' ? window.location.href : null,
      locale,
    }

    try {
      const res = await fetch(CRM_INTAKE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = (await res.json().catch(() => null)) as
        | { success: boolean; error?: string }
        | null

      if (!res.ok || !json?.success) {
        console.error('Lead intake error:', json?.error)
        setStatus('error')
        return
      }

      // GA4 conversion event for lead magnet downloads
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'lead_magnet_download', {
          event_category: 'lead',
          event_label: source,
        })
      }

      setStatus('success')
    } catch (err) {
      console.error('Network error:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✓</div>
        <p className="font-headline font-semibold text-lg text-on-surface">¡Listo!</p>
        <p className="text-on-surface-variant mt-2 text-sm">
          Te enviamos la guía a tu email. Revisa tu bandeja de entrada.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div>
        <input
          type="text"
          name="nombre"
          required
          placeholder="Tu nombre"
          className="w-full input-field text-sm"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Tu email"
          className="w-full input-field text-sm"
        />
      </div>
      <div>
        <input
          type="tel"
          name="telefono"
          placeholder="WhatsApp (opcional)"
          className="w-full input-field text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Enviando...' : buttonText}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-400 text-center">
          Error al enviar. Intenta de nuevo.
        </p>
      )}
      <p className="text-xs text-on-surface-variant/60 text-center">
        Sin spam. Solo información útil sobre energía solar.
      </p>
    </form>
  )
}
