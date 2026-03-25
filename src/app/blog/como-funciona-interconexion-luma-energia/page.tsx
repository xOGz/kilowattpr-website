import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Cómo Funciona la Interconexión con LUMA Energy en Puerto Rico',
  description:
    'Guía completa del proceso de interconexión solar con LUMA Energy en Puerto Rico 2026. Pasos, documentos, tiempos y errores más comunes. Por Kilowatt PR.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/como-funciona-interconexion-luma-energia' },
}

const faqs = [
  {
    question: '¿Cuánto tiempo tarda la aprobación de interconexión con LUMA Energy?',
    answer: 'El proceso de interconexión con LUMA Energy en Puerto Rico puede tomar entre 3 y 8 semanas desde la presentación de la solicitud hasta la aprobación e instalación del medidor bidireccional. El tiempo varía según la demanda actual de LUMA, la complejidad del sistema y si la solicitud está completa desde el inicio. Kilowatt PR gestiona todo este proceso y hace seguimiento activo para minimizar retrasos.',
  },
  {
    question: '¿Qué es el medidor bidireccional y cómo funciona?',
    answer: 'El medidor bidireccional (o "net metering meter") mide tanto la energía que consumes de LUMA Energy como la energía que tu sistema solar exporta a la red. Cuando produces más de lo que consumes, la diferencia se "acredita" en tu cuenta con LUMA, reduciendo tu próxima factura. Cuando consumes más de lo que produces (en la noche o días nublados), LUMA Energy suple la diferencia y te cobra solo por lo que usaste de la red.',
  },
  {
    question: '¿Puedo operar mi sistema solar sin la aprobación de LUMA Energy?',
    answer: 'No es recomendable. Operar un sistema solar conectado a la red sin la aprobación de interconexión de LUMA Energy viola los términos del servicio y puede resultar en la desconexión del servicio eléctrico. Además, sin el medidor bidireccional, no recibirías crédito por la energía que exportas a la red. Kilowatt PR gestiona el proceso completo de interconexión para asegurarse de que tu sistema sea legalmente operativo desde el primer día.',
  },
  {
    question: '¿Qué pasa con el net metering en Puerto Rico?',
    answer: 'Puerto Rico tiene un programa de medición neta (net metering) que permite a los usuarios solares recibir crédito por la energía que exportan a la red de LUMA Energy. Las reglas específicas del programa han evolucionado en los últimos años con regulaciones de la PREB (Puerto Rico Energy Bureau). Durante la consulta, te explicamos exactamente cómo funciona el programa de net metering vigente y cómo afecta el retorno de tu inversión.',
  },
]

export default function InterconexionLumaPage() {
  const publishDate = '2026-02-01'
  const url = 'https://www.kilowattpr.com/blog/como-funciona-interconexion-luma-energia'

  return (
    <>
      <ArticleSchema
        title="Cómo Funciona la Interconexión con LUMA Energy en Puerto Rico"
        description="Guía completa del proceso de interconexión solar con LUMA Energy en Puerto Rico."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Proceso y Permisos
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>1 de febrero de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Cómo Funciona la Interconexión con LUMA Energy en Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Uno de los pasos más importantes y menos comprendidos en la instalación de paneles
            solares en Puerto Rico es el proceso de interconexión con LUMA Energy. Esta guía
            explica cada etapa del proceso, los documentos necesarios, los tiempos esperados y
            los errores más comunes que pueden retrasar tu instalación.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>¿Qué es la Interconexión con LUMA Energy?</h2>
          <p>
            La interconexión solar es el proceso oficial mediante el cual{' '}
            <a href="https://lumaenergy.com" target="_blank" rel="noopener noreferrer">
              LUMA Energy
            </a>{' '}
            autoriza la conexión de tu sistema solar fotovoltaico a la red eléctrica de Puerto Rico.
            Sin esta aprobación, tu sistema no puede funcionar conectado a la red de forma legal.
            El proceso, regulado por la{' '}
            <a href="https://energia.pr.gov" target="_blank" rel="noopener noreferrer">
              Oficina Independiente de Protección al Consumidor de Energía (PREB)
            </a>, incluye la revisión técnica del diseño del sistema, la inspección de la
            instalación y la instalación del medidor bidireccional que mide tanto el consumo
            como la exportación de energía.
          </p>

          <h2>El Proceso Paso a Paso</h2>

          <h3>Paso 1: Diseño del Sistema y Documentación</h3>
          <p>
            Antes de someter la solicitud de interconexión, el instalador debe preparar la
            documentación técnica requerida: planos eléctricos del sistema, especificaciones
            del inversor y los paneles, diagrama unifiliar, y la descripción del sistema de
            protecciones. Kilowatt PR prepara toda esta documentación como parte del servicio
            de instalación.
          </p>

          <h3>Paso 2: Permiso de ARPE</h3>
          <p>
            Paralelamente a la solicitud de interconexión, se debe obtener el permiso de
            instalación de{' '}
            <a href="https://ogpe.pr.gov" target="_blank" rel="noopener noreferrer">
              OGPE (Oficina de Gerencia de Permisos)
            </a>, anteriormente conocida como ARPE. Aunque son procesos separados, ocurren
            en paralelo. Kilowatt PR gestiona ambos procesos simultáneamente para minimizar
            el tiempo total.
          </p>

          <h3>Paso 3: Sometimiento de la Solicitud a LUMA</h3>
          <p>
            Con la documentación técnica lista, se somete la solicitud de interconexión al{' '}
            <a href="https://lumaenergy.com/generacion-distribuida/" target="_blank" rel="noopener noreferrer">
              portal de generación distribuida de LUMA Energy
            </a>. La solicitud incluye el formulario oficial, los planos técnicos, la documentación
            del equipo y la información del cliente. LUMA tiene un período de revisión inicial
            de 5 a 10 días hábiles para confirmar que la solicitud está completa.
          </p>

          <h3>Paso 4: Revisión Técnica de LUMA</h3>
          <p>
            Una vez aceptada la solicitud, LUMA Energy realiza una revisión técnica del diseño
            del sistema para asegurarse de que es compatible con la red eléctrica local. Esta
            revisión puede identificar requisitos adicionales según la capacidad de la red en
            tu área, especialmente en zonas con alta concentración de sistemas solares.
          </p>

          <h3>Paso 5: Aprobación del Diseño</h3>
          <p>
            Cuando LUMA aprueba el diseño, emite una carta de aprobación que autoriza al
            instalador a proceder con la instalación. Este es el momento en que Kilowatt PR
            puede programar la instalación física de los paneles, inversores y equipos.
          </p>

          <h3>Paso 6: Instalación y Inspección</h3>
          <p>
            Kilowatt PR instala el sistema según el diseño aprobado. Tras la instalación,
            se solicita la inspección de LUMA Energy y las inspecciones requeridas por ARPE.
            Los inspectores verifican que la instalación cumple con los planos aprobados y
            los códigos eléctricos aplicables.
          </p>

          <h3>Paso 7: Instalación del Medidor Bidireccional y Activación</h3>
          <p>
            Tras las inspecciones aprobadas, LUMA Energy programa el cambio del medidor
            convencional por el medidor bidireccional (net metering). El programa de medición
            neta está regulado por la{' '}
            <a href="https://energia.pr.gov" target="_blank" rel="noopener noreferrer">
              PREB (Puerto Rico Energy Bureau)
            </a>{' '}
            bajo las disposiciones del{' '}
            <a href="https://www.energy.gov/eere/solar/net-metering" target="_blank" rel="noopener noreferrer">
              net metering federal
            </a>. Una vez instalado el nuevo medidor, el sistema puede conectarse a la red
            y activarse. ¡Tu sistema solar comienza a producir energía y a reducir tu factura
            desde este momento!
          </p>

          <h2>Tiempos Típicos del Proceso</h2>
          <p>
            El tiempo total desde la firma del contrato hasta la activación del sistema
            es de 6 a 10 semanas. La mayor parte de ese tiempo es el proceso de LUMA y ARPE,
            no la instalación física. Aquí un desglose típico:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="space-y-3">
              {[
                { etapa: 'Diseño y documentación', tiempo: '1 semana' },
                { etapa: 'Sometimiento y revisión inicial de LUMA', tiempo: '1–2 semanas' },
                { etapa: 'Revisión técnica de LUMA', tiempo: '2–4 semanas' },
                { etapa: 'Permisos de ARPE (en paralelo)', tiempo: '2–3 semanas' },
                { etapa: 'Instalación física', tiempo: '1–2 días' },
                { etapa: 'Inspecciones y medidor', tiempo: '1–2 semanas' },
              ].map((row) => (
                <div key={row.etapa} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-sm text-gray-700">{row.etapa}</span>
                  <span className="font-bold text-solar-yellow">{row.tiempo}</span>
                </div>
              ))}
            </div>
          </div>

          <h2>¿Por Qué Contratar Kilowatt PR para Manejar la Interconexión?</h2>
          <p>
            El proceso de interconexión con LUMA Energy es burocrático y puede complicarse
            con errores en la documentación, falta de seguimiento o desconocimiento de los
            requisitos técnicos específicos. Kilowatt PR gestiona este proceso completamente:
            preparamos toda la documentación, sometemos la solicitud, hacemos seguimiento
            activo y coordinamos las inspecciones. Nuestros técnicos y jornaleros con más
            de una década de experiencia en Puerto Rico conocen el proceso y los requisitos
            de LUMA Energy en detalle.
          </p>
          <p>
            Muchos propietarios que intentan manejar el proceso por su cuenta enfrentan
            retrasos significativos por documentación incompleta o incorrecta. Al contratar
            Kilowatt PR, tienes la tranquilidad de que el proceso avanza correctamente y
            que cualquier obstáculo se atiende inmediatamente.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Listo para comenzar el proceso? Nosotros manejamos todo.
          </p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consulta Gratis por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Interconexión con LUMA Energy" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/incentivos-solares-puerto-rico-2026', label: 'Incentivos Solares 2026' },
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
