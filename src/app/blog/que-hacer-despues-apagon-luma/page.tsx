import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Qué Hacer Después de un Apagón de LUMA: Guía Práctica para tu Sistema Solar',
  description:
    'Checklist post-apagón para dueños de sistemas solares en Puerto Rico. Verifica inversor, batería, producción y reconexión a la red de LUMA. Cuándo llamar a soporte técnico.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/que-hacer-despues-apagon-luma' },
}

const faqs = [
  {
    question: '¿Mi sistema solar se reconecta automáticamente después de un apagón de LUMA?',
    answer: 'Sí, la mayoría de los inversores modernos se reconectan automáticamente a la red cuando LUMA restaura el servicio. Este proceso puede tomar entre 30 segundos y 5 minutos después de que la red se estabilice. El inversor espera a verificar que el voltaje y la frecuencia de la red sean estables antes de reconectarse, como medida de seguridad. Si después de 10 minutos tu sistema no se ha reconectado, verifica las luces indicadoras del inversor o consulta la app de monitoreo.',
  },
  {
    question: '¿Puede un apagón de LUMA dañar mi sistema solar?',
    answer: 'En condiciones normales, un apagón no daña tu sistema solar. Los inversores modernos tienen protecciones integradas que desconectan el sistema de la red automáticamente cuando detectan una interrupción (anti-islanding). Sin embargo, las fluctuaciones de voltaje que a veces ocurren cuando LUMA restaura el servicio pueden, en casos raros, afectar equipos electrónicos sensibles. Un supresor de picos en tu panel eléctrico principal protege contra esto.',
  },
  {
    question: '¿Por qué mis paneles no producen durante un apagón si no tengo batería?',
    answer: 'Por seguridad. Los inversores sin batería (grid-tied) se apagan automáticamente cuando la red de LUMA se cae. Esto se llama protección anti-islanding y existe para proteger a los técnicos de LUMA que podrían estar reparando las líneas. Si tu sistema enviara energía a la red durante un apagón, podría electrocutar a un trabajador. Con un sistema de batería e inversor híbrido, tus paneles pueden seguir produciendo y alimentar tu hogar de forma aislada de la red.',
  },
  {
    question: '¿Cuándo debo llamar a Kilowatt PR después de un apagón?',
    answer: 'Llama a Kilowatt PR si después de un apagón notas cualquiera de estas situaciones: el inversor muestra una luz roja o un código de error persistente, el sistema no se reconecta a la red después de 30 minutos de haberse restaurado el servicio, la producción diaria es significativamente menor a lo normal sin causa obvia (nubosidad, suciedad), la batería no se carga o no retiene carga, o escuchas ruidos inusuales de algún componente. Nuestro equipo de soporte está disponible al 787-431-2275.',
  },
]

export default function QueHacerDespuesApagonPage() {
  const publishDate = '2026-03-19'
  const modifyDate = '2026-03-19'
  const url = 'https://www.kilowattpr.com/blog/que-hacer-despues-apagon-luma'

  return (
    <>
      <ArticleSchema
        title="Qué Hacer Después de un Apagón de LUMA: Guía Práctica para tu Sistema Solar"
        description="Checklist post-apagón para dueños de sistemas solares en Puerto Rico. Verifica inversor, batería, producción y reconexión a la red de LUMA."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Mantenimiento
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>19 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Qué Hacer Después de un Apagón de LUMA: Guía Práctica para tu Sistema Solar
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Se fue la luz. Otra vez. En Puerto Rico, los apagones de LUMA son una
            realidad frecuente. Si tienes un sistema solar, hay pasos específicos que
            debes seguir cuando regresa la electricidad para asegurar que todo esté
            funcionando correctamente. Y si aún no tienes solar, este artículo te
            muestra exactamente cómo cambiaría tu experiencia.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Para Dueños de Sistemas Solares: Checklist Post-Apagón</h2>

          <p>
            Cuando LUMA restaura el servicio después de un apagón, tu sistema solar
            necesita reconectarse a la red. En la mayoría de los casos esto sucede
            automáticamente, pero es buena práctica verificar que todo esté operando
            correctamente. Sigue este checklist:
          </p>

          <h3>Paso 1: Verifica que la Red de LUMA Está Estable</h3>
          <p>
            Antes de revisar tu sistema solar, confirma que la electricidad de LUMA
            realmente se restauró de manera estable. A veces la luz regresa
            intermitentemente antes de estabilizarse. Verifica que las luces y
            equipos en tu casa funcionen con normalidad durante al menos 5 minutos
            antes de proceder.
          </p>

          <h3>Paso 2: Revisa el Inversor</h3>
          <p>
            El inversor es el cerebro de tu sistema solar. Después de un apagón,
            verifica lo siguiente:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Estado del Inversor: Qué Buscar</h3>
            <div className="space-y-3">
              {[
                {
                  indicador: 'Luz verde sólida o parpadeante',
                  significado: 'Normal — el sistema está produciendo y/o conectado a la red',
                  accion: 'No se requiere acción',
                },
                {
                  indicador: 'Luz amarilla/naranja',
                  significado: 'Advertencia — el inversor detectó algo inusual',
                  accion: 'Revisa la app de monitoreo para más detalles. Puede resolverse solo.',
                },
                {
                  indicador: 'Luz roja',
                  significado: 'Error — el inversor detectó un fallo que requiere atención',
                  accion: 'Anota el código de error y contacta a Kilowatt PR',
                },
                {
                  indicador: 'Sin luces (apagado)',
                  significado: 'El inversor no está encendido',
                  accion: 'Verifica el breaker del inversor en tu panel eléctrico. Si está en ON y el inversor no enciende, contacta soporte.',
                },
              ].map((row) => (
                <div key={row.indicador} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                  <p className="font-bold text-navy-dark">{row.indicador}</p>
                  <p className="text-sm text-gray-700">{row.significado}</p>
                  <p className="text-sm text-green-700">Acción: {row.accion}</p>
                </div>
              ))}
            </div>
          </div>

          <h3>Paso 3: Verifica el Estado de la Batería (Si Tienes)</h3>
          <p>
            Si tu sistema incluye batería de respaldo, revisa:
          </p>
          <ul>
            <li><strong>Nivel de carga:</strong> Después de un apagón prolongado, la batería puede estar en un nivel bajo. Debería comenzar a recargarse con los paneles solares durante las horas de sol.</li>
            <li><strong>Modo de operación:</strong> Verifica que la batería haya regresado al modo normal (grid-tied) y no se haya quedado en modo de respaldo (backup).</li>
            <li><strong>Temperatura:</strong> Si la batería se siente caliente al tacto o muestra advertencia de temperatura en la app, asegura buena ventilación y monitorea.</li>
          </ul>

          <h3>Paso 4: Revisa la Producción en tu App de Monitoreo</h3>
          <p>
            La mayoría de los sistemas solares modernos incluyen una aplicación de
            monitoreo en tu teléfono. Después de que el sistema se reconecte:
          </p>
          <ul>
            <li>Verifica que la producción en tiempo real muestre valores normales para la hora del día</li>
            <li>Compara con días anteriores similares (mismo nivel de sol)</li>
            <li>Si la producción es significativamente menor (más del 20% por debajo de lo normal), puede indicar un problema</li>
          </ul>

          <h3>Paso 5: Verifica los Breakers</h3>
          <p>
            Las fluctuaciones de voltaje que a veces acompañan los apagones pueden
            disparar los breakers de protección. Revisa:
          </p>
          <ul>
            <li>El breaker dedicado del inversor en tu panel eléctrico principal</li>
            <li>El breaker de la batería (si aplica)</li>
            <li>El breaker del circuito de producción solar</li>
            <li>Si alguno se disparó, espera 5 minutos y vuelve a activarlo. Si se dispara de nuevo, no insistas: contacta a Kilowatt PR.</li>
          </ul>

          <h3>Paso 6: Inspección Visual (Después de Tormentas)</h3>
          <p>
            Si el apagón fue causado por una tormenta severa, huracán o evento
            climático fuerte, haz una inspección visual desde el suelo:
          </p>
          <ul>
            <li>Verifica que los paneles estén en su posición normal (sin desplazamiento)</li>
            <li>Busca escombros o ramas sobre los paneles</li>
            <li>Revisa que los cables visibles no estén sueltos o dañados</li>
            <li>Si notas algo fuera de lugar, toma fotos y contacta a Kilowatt PR antes de intentar cualquier reparación</li>
          </ul>

          <h2>Cuándo Llamar a Kilowatt PR para Soporte</h2>

          <p>
            La mayoría de las veces, tu sistema se reconectará sin problemas. Pero
            hay situaciones que requieren atención profesional. Contacta a nuestro
            equipo de soporte al <strong>787-431-2275</strong> si:
          </p>

          <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <h3 className="font-bold text-red-800 mb-3">Señales de que Necesitas Soporte Técnico</h3>
            <ul className="space-y-2 text-sm text-red-900">
              <li>El inversor muestra luz roja o código de error persistente por más de 30 minutos</li>
              <li>El sistema no se reconecta a la red después de 30 minutos de restaurado el servicio</li>
              <li>La producción diaria es 30% o más baja de lo normal sin razón aparente</li>
              <li>La batería no retiene carga o no se recarga con los paneles</li>
              <li>Escuchas zumbidos, chasquidos o ruidos inusuales del inversor o la batería</li>
              <li>Ves daño visible en paneles, cables o estructura de montaje</li>
              <li>Detectas olor a quemado cerca de cualquier componente del sistema</li>
              <li>Los breakers del sistema se disparan repetidamente</li>
            </ul>
          </div>

          <h2>Protege tu Sistema: Recomendaciones Preventivas</h2>

          <p>
            Hay medidas que puedes tomar antes del próximo apagón para proteger tu
            sistema y facilitar la recuperación:
          </p>

          <ul>
            <li><strong>Instala un supresor de picos:</strong> Protege tu inversor y equipos electrónicos contra las fluctuaciones de voltaje cuando LUMA restaura el servicio.</li>
            <li><strong>Mantén la app de monitoreo actualizada:</strong> Las notificaciones te alertan de problemas antes de que se agraven.</li>
            <li><strong>Conoce tu sistema:</strong> Sabe dónde está el inversor, dónde están los breakers dedicados, y cómo leer las luces indicadoras básicas.</li>
            <li><strong>Mantén el área del inversor despejada:</strong> Buena ventilación es clave para el rendimiento, especialmente en el calor de Puerto Rico.</li>
            <li><strong>Programa mantenimiento preventivo:</strong> Un sistema bien mantenido se recupera mejor después de eventos inesperados.</li>
          </ul>

          <h2>Para los que NO Tienen Solar: Cómo Cambiaría tu Experiencia</h2>

          <p>
            Si estás leyendo esto mientras esperas que LUMA restaure la luz, imagina
            cómo sería tu vida con un sistema solar con batería:
          </p>

          <ul>
            <li><strong>La luz se va y no lo notas:</strong> La batería se activa en milisegundos. La nevera sigue funcionando, las luces siguen encendidas, el internet sigue conectado.</li>
            <li><strong>No hay prisa por combustible:</strong> No necesitas salir corriendo a buscar gasolina para un generador. Tu batería se recarga sola con el sol.</li>
            <li><strong>Silencio total:</strong> Sin el ruido ensordecedor de un generador. Tu casa está en paz mientras los vecinos luchan con sus plantas eléctricas.</li>
            <li><strong>Sin riesgos de salud:</strong> Cero monóxido de carbono, cero humo, cero gasolina almacenada.</li>
            <li><strong>Independencia real:</strong> Si LUMA tarda días en restaurar, tu sistema sigue produciendo y almacenando energía mientras haya sol.</li>
          </ul>

          <p>
            Los clientes de Kilowatt PR con batería reportan que durante el último
            apagón prolongado, sus hogares funcionaron con normalidad mientras los
            vecinos llevaban días sin electricidad. Esa tranquilidad no tiene precio,
            especialmente cuando tienes personas mayores, niños o equipos médicos en
            el hogar.
          </p>

          <h2>Conclusión: Preparado para el Próximo Apagón</h2>

          <p>
            Los apagones de LUMA no van a desaparecer pronto. Lo que sí puedes
            controlar es cómo te afectan. Si ya tienes solar, sigue el checklist
            post-apagón para asegurar que tu sistema opera al máximo. Si aún no
            tienes solar, cada apagón es un recordatorio de lo que podrías evitar.
          </p>

          <p>
            En Kilowatt PR, con técnicos y jornaleros con más de una década de
            experiencia en Puerto Rico, diseñamos sistemas que no solo te ahorran
            dinero: te dan independencia energética real. Y cuando LUMA falla, esa
            independencia es lo que marca la diferencia.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Cansado de depender de LUMA? Cotiza tu sistema solar con batería hoy.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20un%20sistema%20solar%20con%20bater%C3%ADa%20para%20no%20depender%20de%20LUMA."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Cotizar Sistema Solar por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Apagones y tu Sistema Solar" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/guia-bateria-respaldo-hogar-puerto-rico', label: 'Guía de Baterías de Respaldo' },
              { href: '/blog/energia-solar-bateria-esencial-puerto-rico', label: 'Solar y Huracanes' },
              { href: '/blog/mantenimiento-paneles-solares-clima-tropical', label: 'Mantenimiento de Paneles' },
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
