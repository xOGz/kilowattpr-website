'use client'

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
  return (
    <form
      action="https://formsubmit.co/kilowattpr@gmail.com"
      method="POST"
      className="space-y-4"
    >
      <input type="hidden" name="_subject" value="Nueva cotización desde kilowattpr.com" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.kilowattpr.com/gracias" />

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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow bg-white"
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
        className="btn-primary w-full justify-center text-base py-4"
      >
        Solicitar Cotización Gratis
      </button>

      <p className="text-xs text-gray-400 text-center">
        Sin compromiso. Te contactamos en menos de 24 horas.
      </p>
    </form>
  )
}
