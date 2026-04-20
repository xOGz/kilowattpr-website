import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Cómo Preparar Tu Hogar para Huracanes con Energía Solar en Puerto Rico',
  description:
    'Guía completa para proteger tu hogar de los apagones durante la temporada de huracanes en Puerto Rico con energía solar y batería de respaldo.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/incentivos-solares-puerto-rico-2026' },
}

const faqs = [
  {
    question: '¿Los paneles solares resisten un huracán categoría 5?',
    answer: 'Los paneles solares que instalamos están certificados para resistir vientos de hasta 160 mph, lo que equivale a un huracán categoría 5. Además, nuestros sistemas de montaje están diseñados específicamente para las condiciones de Puerto Rico, con anclajes reforzados y perfiles de bajo arrastre aerodinámico que reducen la carga de viento sobre los paneles.',
  },
  {
    question: '¿Cuánto dura la batería durante un apagón prolongado?',
    answer: 'Un sistema de batería estándar puede proporcionar entre 12 y 24 horas de electricidad para los electrodomésticos esenciales del hogar (nevera, luces, abanicos, cargadores). Durante el día, los paneles solares recargan la batería, lo que significa que con un sistema bien dimensionado puedes mantener electricidad indefinidamente mientras haya sol — incluso semanas o meses sin LUMA.',
  },
  {
    question: '¿Qué electrodomésticos puedo mantener encendidos durante un apagón?',
    answer: 'Con un sistema solar con batería típico (10 kWh), puedes mantener encendidos: la nevera, luces principales, abanicos de techo, cargadores de celulares, router de internet, y un televisor. Sistemas más grandes (20+ kWh) pueden mantener aires acondicionados de ventana y más electrodomésticos. Durante la consulta gratis evaluamos tu consumo para dimensionar el sistema correcto.',
  },
  {
    question: '¿Cuándo es el mejor momento para instalar solar antes de la temporada de huracanes?',
    answer: 'La temporada de huracanes en Puerto Rico comienza el 1 de junio. Considerando que el proceso de instalación toma entre 1 y 3 semanas (incluyendo permisos de OGPE e interconexión con LUMA), lo ideal es comenzar el proceso en marzo o abril. La demanda aumenta significativamente en mayo y junio, lo que puede extender los tiempos de espera.',
  },
]

export default function HurricanePreparationPage() {
  const publishDate = '2026-02-28'
  const modifyDate = '2026-02-28'
  const url = 'https://www.kilowattpr.com/blog/incentivos-solares-puerto-rico-2026'

  return (
    <>
      <ArticleSchema
        title="Cómo Preparar Tu Hogar para Huracanes con Energía Solar en Puerto Rico"
        description="Guía completa para proteger tu hogar de los apagones durante la temporada de huracanes con energía solar y batería de respaldo."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Huracanes y Resiliencia
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>28 de febrero de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Cómo Preparar Tu Hogar para la Temporada de Huracanes con Energía Solar
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            El huracán María dejó a Puerto Rico sin electricidad por meses. Fiona, cinco años
            después, demostró que la red eléctrica sigue siendo vulnerable. La pregunta no es
            si habrá otro huracán — es si tu familia estará protegida cuando llegue.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>La Realidad: Puerto Rico y los Apagones</h2>
          <p>
            Después del huracán María en septiembre de 2017, más de 3 millones de puertorriqueños
            quedaron sin electricidad. Algunos hogares no recuperaron el servicio hasta 11 meses
            después. El huracán Fiona en 2022 volvió a dejar a toda la isla sin luz, y los
            apagones regulares de LUMA Energy ya son parte de la vida cotidiana.
          </p>
          <p>
            Un sistema solar con batería de respaldo no solo reduce tu factura de LUMA — te
            da la capacidad de mantener tu hogar funcionando cuando la red falla, ya sea por
            un huracán, una tormenta tropical, o simplemente otro apagón de LUMA.
          </p>

          <h2>¿Cómo Funciona la Energía Solar Durante un Huracán?</h2>
          <p>
            Un sistema solar con batería opera de forma inteligente. Cuando LUMA está funcionando,
            tus paneles generan electricidad, la batería se carga, y el exceso se exporta a la
            red (net metering). Pero cuando detecta un apagón, el sistema se desconecta
            automáticamente de la red y entra en modo isla: tus paneles alimentan tu hogar y
            cargan la batería directamente.
          </p>
          <p>
            Esto significa que mientras haya sol — incluso parcial entre nubes — tu sistema
            seguirá generando electricidad y recargando la batería. En condiciones normales
            post-huracán (cielos parcialmente nublados), un sistema bien dimensionado puede
            mantener los equipos esenciales de tu hogar indefinidamente.
          </p>

          <div className="not-prose bg-solar-yellow/5 border border-solar-yellow/30 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-3">Lo Que Un Sistema Solar con Batería Puede Mantener Encendido</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { equipo: 'Nevera / Freezer', consumo: '150-400W' },
                { equipo: 'Luces LED (5-10 bombillas)', consumo: '50-100W' },
                { equipo: 'Abanicos de techo (2-3)', consumo: '150-225W' },
                { equipo: 'Router de internet', consumo: '10-20W' },
                { equipo: 'Cargadores de celular (3-4)', consumo: '20-40W' },
                { equipo: 'Televisor', consumo: '60-150W' },
                { equipo: 'Máquina CPAP (uso médico)', consumo: '30-60W' },
                { equipo: 'Bomba de agua (cisterna)', consumo: '500-1000W' },
              ].map((item) => (
                <div key={item.equipo} className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">{item.equipo}</span>
                  <span className="font-semibold text-gray-600">{item.consumo}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Consumo aproximado. El dimensionamiento final depende de tus equipos específicos.
            </p>
          </div>

          <h2>¿Resisten los Paneles Solares un Huracán?</h2>
          <p>
            Sí. Los paneles solares modernos están certificados para resistir vientos de hasta
            160 mph según las normas IEC 61215 y UL 1703 — suficiente para soportar un huracán
            categoría 5. Pero el panel es solo una parte del sistema. Lo que realmente importa
            es cómo se instala:
          </p>
          <ul>
            <li><strong>Montaje reforzado:</strong> Utilizamos rieles y anclajes de aluminio anodizado con tornillería de acero inoxidable, diseñados para las cargas de viento específicas de Puerto Rico.</li>
            <li><strong>Perfil aerodinámico:</strong> Los paneles se instalan con ángulo bajo y mínima separación del techo, reduciendo la superficie de arrastre del viento.</li>
            <li><strong>Sellado del punto de penetración:</strong> Cada anclaje se sella con masilla elastomérica para prevenir filtraciones, incluso bajo lluvia horizontal de huracán.</li>
            <li><strong>Microinversores o rapid shutdown:</strong> En caso de daño parcial, el sistema aísla los paneles afectados sin apagar el sistema completo.</li>
          </ul>

          <h2>Paso a Paso: Preparación Solar Antes de la Temporada de Huracanes</h2>

          <h3>1. Evalúa Tu Consumo Esencial (Marzo)</h3>
          <p>
            Identifica qué equipos necesitas mantener encendidos durante un apagón prolongado.
            La nevera, luces, abanicos y cargadores son lo mínimo. Si tienes equipos médicos
            (CPAP, concentrador de oxígeno) o una bomba de agua para cisterna, estos son
            prioritarios.
          </p>

          <h3>2. Dimensiona Tu Sistema (Marzo-Abril)</h3>
          <p>
            Basado en tu consumo esencial, un ingeniero eléctrico dimensiona el tamaño de la
            batería y los paneles necesarios. Un sistema típico para resiliencia ante huracanes
            incluye 8-12 kW de paneles y 10-20 kWh de batería. En Kilowatt PR, el Ing. Julio
            Santiago (PE #6083) supervisa personalmente cada diseño.
          </p>

          <h3>3. Instala Antes de Mayo (Abril-Mayo)</h3>
          <p>
            El proceso de instalación toma entre 1 y 3 semanas, incluyendo permisos de OGPE e
            interconexión con LUMA Energy. La demanda de sistemas solares aumenta dramáticamente
            en mayo y junio cuando la gente recuerda que viene la temporada de huracanes. Instalar
            en marzo o abril te asegura los mejores tiempos de respuesta y disponibilidad de equipos.
          </p>

          <h3>4. Mantenimiento Pre-Temporada (Mayo)</h3>
          <p>
            Antes de que comience la temporada el 1 de junio, verifica que tu sistema esté
            funcionando correctamente: limpia los paneles, verifica que la batería está cargando
            al 100%, y confirma que el sistema de transferencia automática funciona. En Kilowatt PR
            ofrecemos inspecciones de calidad para clientes existentes.
          </p>

          <h2>El Costo de NO Tener Solar Cuando Llega un Huracán</h2>
          <p>
            Después de María, las familias sin electricidad gastaron miles de dólares en:
          </p>
          <ul>
            <li><strong>Generadores de gasolina:</strong> $500-$2,000 de compra + $20-$50 diarios en gasolina (cuando había disponible)</li>
            <li><strong>Alimentos perdidos:</strong> $200-$500 en comida echada a perder sin refrigeración</li>
            <li><strong>Hoteles/hospedaje:</strong> Familias que se mudaron temporalmente por semanas o meses</li>
            <li><strong>Equipos médicos:</strong> Pacientes que dependían de electricidad para CPAP, oxígeno o insulina refrigerada enfrentaron emergencias de salud</li>
          </ul>
          <p>
            Un sistema solar con batería que cuesta $15,000-$25,000 se paga solo durante el
            primer huracán en tranquilidad, seguridad y alimentos que no se pierden — además
            de reducir tu factura de LUMA hasta un 95% cada mes del año.
          </p>

          <h2>¿Cuándo es el Mejor Momento para Instalar?</h2>
          <p>
            Ahora. La temporada de huracanes en Puerto Rico es del 1 de junio al 30 de noviembre.
            El proceso completo (consulta, diseño, permisos, instalación, interconexión) toma
            entre 1 y 3 semanas. Si comienzas en marzo o abril, tu sistema estará listo y
            produciendo antes de que llegue el primer sistema tropical. Si esperas hasta mayo
            o junio, te arriesgas a que la alta demanda extienda los tiempos de espera.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            Protege a tu familia antes de la temporada de huracanes. Consulta gratis hoy.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Cotización Gratis por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Energía Solar y Huracanes en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías' },
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
