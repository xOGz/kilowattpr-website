import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Batería Solar vs Generador de Gasolina: ¿Cuál es Mejor para Puerto Rico?',
  description:
    'Comparación detallada entre baterías solares y generadores de gasolina para Puerto Rico. Costos a 10 años, mantenimiento, seguridad, ruido y rendimiento durante huracanes.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/bateria-solar-vs-generador-gasolina' },
}

const faqs = [
  {
    question: '¿Cuánto cuesta un generador de gasolina vs una batería solar en Puerto Rico?',
    answer: 'Un generador portátil de gasolina cuesta entre $800 y $3,000 inicialmente, pero a 10 años el costo total (combustible, mantenimiento, reparaciones, reemplazo) suma entre $15,000 y $20,000. Una batería solar cuesta entre $8,000 y $15,000 instalada, pero después de eso se recarga gratis con la energía solar de tu sistema. A 10 años, la batería sale significativamente más económica y no depende de gasolina que puede escasear durante emergencias.',
  },
  {
    question: '¿Cuánto dura una batería solar durante un apagón en Puerto Rico?',
    answer: 'Una batería de 10 a 13.5 kWh puede alimentar las cargas esenciales de un hogar promedio (nevera, luces, abanicos, cargadores, internet) durante 8 a 12 horas. Con paneles solares activos durante el día, la batería se recarga diariamente, dándote energía indefinida mientras haya sol. Un sistema con 20 kWh o más puede cubrir cargas adicionales como aire acondicionado por períodos extendidos.',
  },
  {
    question: '¿Es peligroso usar un generador de gasolina durante un huracán?',
    answer: 'Sí, los generadores de gasolina presentan riesgos reales durante y después de huracanes. El monóxido de carbono es la causa principal de muertes por generadores: nunca debe usarse dentro de la casa o el garaje. Además, la gasolina almacenada es inflamable, y durante huracanes las estaciones de gasolina cierran o se quedan sin combustible. Las baterías solares operan silenciosamente, sin emisiones y sin necesidad de combustible externo.',
  },
  {
    question: '¿Puedo tener batería solar y generador como respaldo doble?',
    answer: 'Sí, algunos propietarios en Puerto Rico optan por tener ambos como respaldo redundante. La batería solar cubre el 95% de los apagones normales, y el generador queda como respaldo de último recurso para eventos extremos prolongados. Sin embargo, con un sistema de baterías bien dimensionado (20+ kWh) y paneles solares que las recargan cada día, la mayoría de los hogares no necesitan generador en absoluto.',
  },
]

export default function BateriaSolarVsGeneradorPage() {
  const publishDate = '2026-03-14'
  const url = 'https://www.kilowattpr.com/blog/bateria-solar-vs-generador-gasolina'

  return (
    <>
      <ArticleSchema
        title="Batería Solar vs Generador de Gasolina: ¿Cuál es Mejor para Puerto Rico?"
        description="Comparación detallada entre baterías solares y generadores de gasolina para Puerto Rico. Costos a 10 años, seguridad, ruido y rendimiento durante huracanes."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Comparación
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>14 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Batería Solar vs Generador de Gasolina: ¿Cuál es Mejor para Puerto Rico?
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Después de cada apagón de LUMA, la misma pregunta resurge en miles de
            hogares puertorriqueños: ¿compro un generador o me paso a batería solar?
            Ambas opciones te dan energía cuando la red falla, pero las diferencias
            en costo, seguridad, mantenimiento y confiabilidad son enormes. Aquí las
            comparamos frente a frente con datos reales para Puerto Rico.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>La Realidad Energética de Puerto Rico</h2>

          <p>
            Puerto Rico experimenta más apagones que cualquier estado o territorio de
            Estados Unidos. Desde el huracán María en 2017, la red eléctrica ha sido
            frágil, y la transición a LUMA Energy no ha resuelto los problemas
            estructurales. Los apagones pueden durar horas, días o semanas dependiendo
            de la severidad del evento.
          </p>

          <p>
            En este contexto, tener una fuente de energía de respaldo no es un lujo:
            es una necesidad. La pregunta no es si necesitas respaldo, sino cuál
            opción te conviene más a largo plazo.
          </p>

          <h2>Comparación Frente a Frente</h2>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6 overflow-x-auto">
            <h3 className="font-bold text-navy-dark mb-4">Batería Solar vs Generador de Gasolina</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4 text-navy-dark">Factor</th>
                  <th className="text-left py-2 pr-4 text-green-700">Batería Solar</th>
                  <th className="text-left py-2 text-red-700">Generador Gasolina</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { factor: 'Costo inicial', bateria: '$8,000–$15,000', generador: '$800–$3,000' },
                  { factor: 'Costo a 10 años', bateria: '$8,000–$15,000 total', generador: '$15,000–$20,000 total' },
                  { factor: 'Combustible', bateria: 'Gratis (sol)', generador: '$150–$300/mes en uso' },
                  { factor: 'Mantenimiento', bateria: 'Mínimo', generador: 'Aceite, filtros, bujías cada 100–200 hrs' },
                  { factor: 'Ruido', bateria: 'Silencioso', generador: '65–80 dB (como aspiradora)' },
                  { factor: 'Emisiones', bateria: 'Cero', generador: 'CO, CO₂ (peligro en espacios cerrados)' },
                  { factor: 'Activación', bateria: 'Automática (milisegundos)', generador: 'Manual (minutos)' },
                  { factor: 'Duración sin sol', bateria: '8–12 hrs (cargas esenciales)', generador: 'Mientras tenga gasolina' },
                  { factor: 'Duración con sol', bateria: 'Indefinida', generador: 'N/A' },
                  { factor: 'Vida útil', bateria: '10–15 años', generador: '5–8 años' },
                  { factor: 'Riesgo de robo', bateria: 'Bajo (instalada en pared)', generador: 'Alto (portátil, visible)' },
                  { factor: 'Valor de reventa', bateria: 'Aumenta valor de la propiedad', generador: 'No afecta valor' },
                ].map((row) => (
                  <tr key={row.factor}>
                    <td className="py-2 pr-4 font-medium text-navy-dark">{row.factor}</td>
                    <td className="py-2 pr-4 text-green-700">{row.bateria}</td>
                    <td className="py-2 text-red-700">{row.generador}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Análisis de Costo a 10 Años</h2>

          <p>
            El costo inicial del generador es atractivo, pero es engañoso. A largo
            plazo, el generador sale significativamente más caro. Veamos los números:
          </p>

          <h3>Generador de Gasolina: $15,000–$20,000 en 10 Años</h3>
          <ul>
            <li><strong>Compra inicial:</strong> $1,500 (generador de 7,500W promedio)</li>
            <li><strong>Gasolina:</strong> $150–$300/mes durante apagones (promedio $2,400/año en PR)</li>
            <li><strong>Mantenimiento anual:</strong> $200–$400 (aceite, filtros, bujías, servicio)</li>
            <li><strong>Reemplazo:</strong> Necesitarás reemplazarlo al menos una vez en 10 años ($1,500+)</li>
            <li><strong>Reparaciones imprevistas:</strong> $500–$1,000 total estimado</li>
          </ul>

          <h3>Batería Solar: $8,000–$15,000 en 10 Años</h3>
          <ul>
            <li><strong>Compra e instalación:</strong> $8,000–$15,000 (incluye todo)</li>
            <li><strong>Combustible:</strong> $0 (se recarga con tus paneles solares)</li>
            <li><strong>Mantenimiento:</strong> $0–$100 total (inspección incluida en mantenimiento del sistema)</li>
            <li><strong>Reemplazo:</strong> No necesario en 10 años (vida útil de 10–15 años)</li>
          </ul>

          <p>
            La diferencia es clara: aunque el generador parece más barato al principio,
            a 10 años la batería solar ahorra entre <strong>$5,000 y $10,000</strong>,
            además de recargarse gratis con el sol cada día.
          </p>

          <h2>Seguridad: El Factor que Muchos Ignoran</h2>

          <h3>Los Peligros Reales del Generador de Gasolina</h3>

          <p>
            Después de cada huracán en Puerto Rico, los hospitales atienden casos de
            intoxicación por monóxido de carbono causados por generadores mal ubicados.
            El monóxido de carbono (CO) es un gas inodoro e incoloro que puede ser
            mortal en minutos. Las reglas son claras pero frecuentemente ignoradas:
          </p>

          <ul>
            <li><strong>Nunca uses un generador dentro de la casa, garaje o marquesina</strong></li>
            <li>Debe estar al menos a 20 pies de ventanas y puertas</li>
            <li>El escape debe apuntar lejos de la casa</li>
            <li>La gasolina almacenada es un riesgo de incendio</li>
          </ul>

          <p>
            Además, el ruido constante de un generador (65–80 decibeles) afecta el
            sueño y la convivencia, especialmente durante apagones prolongados cuando
            todo el vecindario está en silencio.
          </p>

          <h3>La Seguridad de la Batería Solar</h3>

          <p>
            Las baterías solares de litio modernas están diseñadas con múltiples capas
            de seguridad: manejo térmico integrado, protección contra sobrecarga y
            descarga profunda, y carcasa sellada resistente a la humedad. Se instalan
            en la pared de tu casa o en un espacio protegido, operan en silencio
            absoluto y no producen emisiones de ningún tipo.
          </p>

          <h2>El Factor Huracán: Cuando la Gasolina No Existe</h2>

          <p>
            Aquí es donde la batería solar demuestra su verdadero valor en Puerto Rico.
            Después de un huracán categoría 3 o superior:
          </p>

          <ul>
            <li><strong>Las estaciones de gasolina cierran</strong> por falta de electricidad para sus bombas</li>
            <li><strong>Las que abren forman filas de horas</strong> con límites de compra por persona</li>
            <li><strong>Los camiones cisterna no pueden llegar</strong> si las carreteras están bloqueadas</li>
            <li><strong>Los precios se disparan</strong> en el mercado informal</li>
            <li><strong>Los generadores se roban</strong> — es uno de los robos más comunes post-huracán</li>
          </ul>

          <p>
            Con una batería solar, nada de esto te afecta. Mientras salga el sol (y en
            Puerto Rico sale incluso entre bandas de lluvia), tu batería se recarga
            automáticamente. No hay filas, no hay dependencia, no hay riesgo de robo
            porque está montada en tu pared.
          </p>

          <h2>¿Cuándo Tiene Sentido un Generador?</h2>

          <p>
            Siendo justos, hay escenarios donde un generador puede tener sentido:
          </p>

          <ul>
            <li><strong>Presupuesto muy limitado:</strong> Si solo puedes gastar $1,000–$2,000 ahora y necesitas respaldo inmediato</li>
            <li><strong>Respaldo redundante:</strong> Como segundo respaldo detrás de la batería solar para eventos extremos y prolongados</li>
            <li><strong>Uso comercial o industrial:</strong> Para cargas que requieren potencia continua de alta capacidad por períodos extendidos</li>
          </ul>

          <p>
            Sin embargo, para la gran mayoría de los hogares en Puerto Rico, la batería
            solar es la inversión más inteligente a mediano y largo plazo.
          </p>

          <h2>La Activación Automática: Paz Mental Instantánea</h2>

          <p>
            Uno de los beneficios más subestimados de la batería solar es la transición
            automática. Cuando LUMA se va, la batería detecta la pérdida de energía y
            activa el respaldo en milisegundos. No tienes que salir al patio en la
            oscuridad, encender un motor, conectar cables ni esperar a que el generador
            estabilice su voltaje.
          </p>

          <p>
            Si estás durmiendo cuando se va la luz, probablemente ni lo notes. La
            nevera sigue funcionando, el abanico sigue girando y el internet sigue
            conectado. Esa paz mental no tiene precio, especialmente cuando tienes
            personas mayores, niños o equipos médicos en el hogar.
          </p>

          <h2>Conclusión: La Inversión Inteligente para Puerto Rico</h2>

          <p>
            Para un hogar promedio en Puerto Rico, la batería solar es claramente la
            mejor opción. Cuesta menos a largo plazo, es más segura, más silenciosa,
            no depende de gasolina, aumenta el valor de tu propiedad y se recarga
            gratis con el sol. El generador de gasolina tiene su lugar como respaldo
            de emergencia de bajo costo, pero no compite con la batería solar como
            solución permanente.
          </p>

          <p>
            En Kilowatt PR, con técnicos y jornaleros con más de una década de
            experiencia en Puerto Rico, diseñamos sistemas con batería dimensionados
            específicamente para tu consumo y tus necesidades de respaldo. Cada
            sistema incluye monitoreo remoto para que siempre sepas el estado de tu
            batería.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Listo para dejar el generador atrás? Cotización gratuita de batería solar.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20cotizar%20un%20sistema%20solar%20con%20bater%C3%ADa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Cotizar Batería Solar por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Batería Solar vs Generador" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías de Respaldo' },
              { href: '/blog/energia-solar-bateria-esencial-puerto-rico', label: 'Solar y Huracanes' },
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-solar-yellow font-medium hover:underline text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
