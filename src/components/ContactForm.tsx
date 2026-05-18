'use client'

import { useState, type FormEvent } from 'react'
import { MessageCircle } from 'lucide-react'

export interface ContactFormLabels {
  name: string
  namePlaceholder: string
  phone: string
  phonePlaceholder: string
  email: string
  emailPlaceholder: string
  municipio: string
  municipioPlaceholder: string
  service: string
  servicePlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  submitting: string
  successTitle: string
  successBody: string
  errorTitle: string
  errorBody: string
  whatsappFallback: string
  whatsappCta: string
  fasterResponse: string
  fasterResponseSuffix: string
  validationGeneric: string
}

export interface SelectOption {
  value: string
  label: string
}

interface ContactFormProps {
  locale: 'es' | 'en'
  labels: ContactFormLabels
  municipios: readonly SelectOption[]
  services: readonly SelectOption[]
  endpoint?: string
}

const DEFAULT_ENDPOINT = 'https://kilowatt-crm.vercel.app/api/leads/intake'
const WHATSAPP_URL = 'https://wa.me/17874312275'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm({
  locale,
  labels,
  municipios,
  services,
  endpoint = DEFAULT_ENDPOINT,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage(null)
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('nombre') ?? ''),
      phone: String(data.get('telefono') ?? ''),
      email: String(data.get('email') ?? '') || null,
      municipio: String(data.get('municipio') ?? ''),
      service_interest: String(data.get('servicio') ?? '') || null,
      message: String(data.get('mensaje') ?? '') || null,
      website: String(data.get('website') ?? ''),
      source_url: typeof window !== 'undefined' ? window.location.href : null,
      locale,
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = (await res.json().catch(() => null)) as
        | { success: boolean; error?: string }
        | null

      if (!res.ok || !json?.success) {
        setErrorMessage(json?.error ?? labels.validationGeneric)
        setStatus('error')
        return
      }

      form.reset()
      setStatus('success')

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'lead_submit', {
          event_category: 'contact_form',
          event_label: locale,
        })
      }
    } catch {
      setErrorMessage(labels.validationGeneric)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <div className="text-4xl mb-3">✓</div>
        <p className="font-semibold text-lg text-navy-dark">{labels.successTitle}</p>
        <p className="text-gray-700 mt-2">{labels.successBody}</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp justify-center text-base py-3 mt-5 inline-flex"
        >
          <MessageCircle size={20} />
          {labels.whatsappCta}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
            {labels.name} *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
            placeholder={labels.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
            {labels.phone} *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
            placeholder={labels.phonePlaceholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
          placeholder={labels.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.municipio} *
        </label>
        <select
          id="municipio"
          name="municipio"
          required
          defaultValue=""
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
        >
          <option value="" disabled>{labels.municipioPlaceholder}</option>
          {municipios.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.service}
        </label>
        <select
          id="servicio"
          name="servicio"
          defaultValue=""
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
        >
          <option value="">{labels.servicePlaceholder}</option>
          {services.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.message}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow resize-none"
          placeholder={labels.messagePlaceholder}
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <p className="font-semibold mb-1">{labels.errorTitle}</p>
          <p>{errorMessage ?? labels.errorBody}</p>
          <p className="mt-2">
            {labels.whatsappFallback}{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              787-431-2275
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? labels.submitting : labels.submit}
      </button>

      <p className="text-xs text-gray-400 text-center">
        {labels.fasterResponse}{' '}
        <a href={WHATSAPP_URL} className="text-solar-yellow font-medium">
          787-431-2275
        </a>
        {labels.fasterResponseSuffix}
      </p>
    </form>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
