'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const municipiosList = [
  'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito',
  'Añasco', 'Arecibo', 'Arroyo', 'Barceloneta', 'Barranquitas',
  'Bayamón', 'Cabo Rojo', 'Caguas', 'Camuy', 'Canóvanas',
  'Carolina', 'Cataño', 'Cayey', 'Ceiba', 'Ciales',
  'Cidra', 'Coamo', 'Comerío', 'Corozal', 'Culebra',
  'Dorado', 'Fajardo', 'Florida', 'Guánica', 'Guayama',
  'Guayanilla', 'Guaynabo', 'Gurabo', 'Hatillo', 'Hormigueros',
  'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz', 'Juncos',
  'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Loíza',
  'Luquillo', 'Manatí', 'Maricao', 'Maunabo', 'Mayagüez',
  'Moca', 'Morovis', 'Naguabo', 'Naranjito', 'Orocovis',
  'Patillas', 'Peñuelas', 'Ponce', 'Quebradillas', 'Rincón',
  'Río Grande', 'Sabana Grande', 'Salinas', 'San Germán', 'San Juan',
  'San Lorenzo', 'San Sebastián', 'Santa Isabel', 'Toa Alta', 'Toa Baja',
  'Trujillo Alto', 'Utuado', 'Vega Alta', 'Vega Baja', 'Vieques',
  'Villalba', 'Yabucoa', 'Yauco',
]

const serviciosList = [
  'Instalación de paneles solares',
  'Sistema solar con batería',
  'Contratista eléctrico',
  'Reparación de base de medidor',
  'Mantenimiento y lavado',
  'Consulta general',
]

export default function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    const lead = {
      name: formData.get('nombre') as string,
      phone: formData.get('telefono') as string,
      municipio: formData.get('municipio') as string,
      service_interest: formData.get('servicio') as string || null,
      source: 'website' as const,
    }

    const { error } = await supabase.from('leads').insert(lead)

    if (error) {
      console.error('Supabase error:', error)
      setStatus('error')
      return
    }

    setStatus('success')

    // Redirect to gracias page after short delay
    setTimeout(() => {
      window.location.href = '/gracias'
    }, 1000)
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">✓</div>
        <p className="font-headline font-semibold text-lg text-[#121240]">¡Solicitud Recibida!</p>
        <p className="text-[#4A4A6A] mt-2">Te contactamos en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-nombre" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            type="text"
            id="qf-nombre"
            name="nombre"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="qf-telefono" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <input
            type="tel"
            id="qf-telefono"
            name="telefono"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
            placeholder="787-000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-municipio" className="block text-sm font-medium text-gray-700 mb-1">
            Municipio *
          </label>
          <select
            id="qf-municipio"
            name="municipio"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
          >
            <option value="">Selecciona tu municipio</option>
            {municipiosList.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-servicio" className="block text-sm font-medium text-gray-700 mb-1">
            Servicio de Interés
          </label>
          <select
            id="qf-servicio"
            name="servicio"
            defaultValue={defaultService || ''}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
          >
            <option value="">Selecciona un servicio</option>
            {serviciosList.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Enviando...' : 'Solicitar Cotización Gratis'}
      </button>

      {status === 'error' && (
        <p className="text-xs text-red-500 text-center">
          Error al enviar. Intenta de nuevo o llámanos al 787-431-2275.
        </p>
      )}

      <p className="text-xs text-gray-400 text-center">
        Sin compromiso. Te contactamos en menos de 24 horas.
      </p>
    </form>
  )
}
