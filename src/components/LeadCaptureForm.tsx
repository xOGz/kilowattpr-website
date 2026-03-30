'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface LeadCaptureFormProps {
  source: string
  buttonText?: string
}

export default function LeadCaptureForm({ source, buttonText = 'Descargar Gratis' }: LeadCaptureFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    const lead = {
      name: formData.get('nombre') as string,
      phone: (formData.get('telefono') as string) || null,
      email: formData.get('email') as string,
      source: source,
      service_interest: 'lead-magnet',
    }

    const { error } = await supabase.from('leads').insert(lead)

    if (error) {
      console.error('Supabase error:', error)
      setStatus('error')
      return
    }

    setStatus('success')
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
    <form onSubmit={handleSubmit} className="space-y-4">
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
