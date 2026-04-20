import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Errores Comunes al Contratar un Instalador Solar en Puerto Rico (y Cómo Evitarlos)',
  description:
    'Evita los 6 errores más costosos al contratar un instalador de paneles solares en Puerto Rico. Guía del consumidor con consejos prácticos para proteger tu inversión.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/blog/errores-comunes-contratar-instalador-solar',
    languages: {
      'es': 'https://www.kilowattpr.com/blog/errores-comunes-contratar-instalador-solar',
    },
  },
}

const faqs = [
  {
    question: '¿Cómo verifico si un instalador solar tiene licencia en Puerto Rico?',
    answer: 'Puedes verificar las licencias de peritos electricistas a través del Departamento de Asuntos del Consumidor (DACO) y el Colegio de Ingenieros y Agrimensores de Puerto Rico. Todo instalador solar debe contar con un perito electricista licenciado que firme los planos y supervise la instalación. En Kilowatt PR, nuestro fundador Xavier Acevedo Santiago es perito electricista licenciado (#21309) y nuestro asesor de ingeniería, Ing. Julio A. Santiago Pérez, es ingeniero profesional (PE #6083).',
  },
  {
    question: '¿Es necesario incluir batería en un sistema solar en Puerto Rico?',
    answer: 'Aunque técnicamente puedes instalar un sistema solar sin batería, en Puerto Rico es altamente recomendable incluirla. Sin batería, tu sistema se apaga durante los apagones de LUMA Energy — precisamente cuando más necesitas electricidad. Un sistema sin batería en Puerto Rico es como un generador sin gasolina: existe pero no te ayuda cuando lo necesitas.',
  },
  {
    question: '¿Qué preguntas debo hacerle a un instalador solar antes de contratarlo?',
    answer: 'Las preguntas esenciales son: (1) ¿Quién es el perito electricista licenciado que firma los planos? (2) ¿Tienen experiencia con permisos de OGPE y la interconexión de LUMA Energy? (3) ¿Qué marcas de paneles, inversores y baterías instalan? (4) ¿Ofrecen garantía de mano de obra además de la garantía del fabricante? (5) ¿Cuántas instalaciones han completado en Puerto Rico? (6) ¿Pueden mostrar referencias o reseñas verificadas?',
  },
  {
    question: '¿Por qué no debo elegir siempre la cotización más barata?',
    answer: 'La cotización más barata frecuentemente esconde costos ocultos: equipos de menor calidad con garantías cortas, instalación que no cumple con el código eléctrico de Puerto Rico, ausencia de batería de respaldo, o montaje no diseñado para vientos huracanados. Una instalación deficiente puede resultar en daños al techo, incendios eléctricos, o un sistema que LUMA Energy rechaza interconectar. La diferencia de precio entre un instalador barato y uno profesional es mínima comparada con el costo de reparar una instalación mal hecha.',
  },
]

export default function ErroresComunesPage() {
  const publishDate = '2026-03-22'
  const modifyDate = '2026-03-22'
  const url = 'https://www.kilowattpr.com/blog/errores-comunes-contratar-instalador-solar'

  return (
    <>
      <ArticleSchema
        title="Errores Comunes al Contratar un Instalador Solar en Puerto Rico (y Cómo Evitarlos)"
        description="Evita los 6 errores más costosos al contratar un instalador de paneles solares en Puerto Rico. Guía del consumidor con consejos prácticos."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Guía del Consumidor
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>22 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Errores Comunes al Contratar un Instalador Solar en Puerto Rico (y Cómo Evitarlos)
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Instalar paneles solares es una de las mejores inversiones que puedes hacer en
            Puerto Rico. Pero elegir al instalador equivocado puede convertir esa inversión
            en una pesadilla. Después de más de tres décadas en el sector eléctrico y solar
            de la isla, hemos visto los mismos errores repetirse una y otra vez. Aquí te
            explicamos los 6 errores más comunes — y cómo evitarlos.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Error #1: Elegir al Instalador Más Barato</h2>

          <p>
            Es comprensible querer ahorrar dinero, especialmente en una inversión de $15,000
            a $35,000. Pero en la industria solar de Puerto Rico, la cotización más barata
            casi siempre es la más cara a largo plazo.
          </p>
          <p>
            Algunas compañías ofrecen precios irresistiblemente bajos usando paneles de
            marcas desconocidas con garantías limitadas, inversores de menor eficiencia,
            o estructuras de montaje que no están diseñadas para resistir los vientos
            huracanados que enfrentamos en la isla. Otras reducen costos eliminando
            componentes esenciales como la batería de respaldo — algo que en Puerto Rico,
            con los apagones frecuentes de LUMA Energy, es casi indispensable.
          </p>
          <p>
            <strong>Cómo evitarlo:</strong> Solicita al menos tres cotizaciones y compáralas
            detalladamente. No mires solo el precio total — revisa las marcas de paneles,
            inversores y baterías, las garantías de cada componente, y si incluyen todos los
            permisos y la interconexión con LUMA Energy. Un precio sospechosamente bajo
            debería generar más preguntas, no menos.
          </p>

          <h2>Error #2: No Verificar Licencias y Certificaciones</h2>

          <p>
            En Puerto Rico, toda instalación eléctrica — incluyendo paneles solares — debe
            ser supervisada por un perito electricista licenciado. Sin embargo, algunas
            compañías operan sin las licencias apropiadas, o utilizan un perito
            &quot;prestado&quot; que nunca visita el proyecto.
          </p>
          <p>
            Una instalación sin la supervisión adecuada no solo viola la ley, sino que
            puede resultar en problemas serios: LUMA Energy puede rechazar la interconexión,
            tu seguro de hogar puede no cubrir daños relacionados, y en el peor caso, una
            instalación deficiente puede causar incendios eléctricos.
          </p>
          <p>
            <strong>Cómo evitarlo:</strong> Pregunta directamente quién es el perito
            electricista licenciado de la compañía. Verifica su licencia. Asegúrate de que
            sea un empleado o socio permanente de la empresa, no alguien contratado
            temporalmente para firmar los documentos. En Kilowatt PR, nuestro fundador
            Xavier Acevedo Santiago es perito electricista licenciado (#21309) y participa
            directamente en cada proyecto.
          </p>

          <h2>Error #3: Instalar un Sistema Sin Batería de Respaldo</h2>

          <p>
            Este es quizás el error más frustrante. Algunos propietarios instalan un sistema
            solar hermoso de 10 kW en su techo y luego descubren que cuando LUMA se va —
            que en Puerto Rico es frecuente — su sistema también se apaga. Sin batería, un
            sistema solar conectado a la red se desactiva automáticamente durante los
            apagones por razones de seguridad.
          </p>
          <p>
            Algunas compañías ofrecen sistemas sin batería como opción &quot;económica&quot;
            sin explicar claramente esta limitación. El cliente se queda con paneles en el
            techo que no funcionan precisamente cuando más los necesita.
          </p>
          <p>
            <strong>Cómo evitarlo:</strong> En Puerto Rico, un sistema solar sin batería es
            una solución incompleta. Aunque el costo adicional de la batería es significativo,
            la independencia energética durante los apagones es uno de los beneficios
            principales de la energía solar en la isla. Asegúrate de que tu cotización
            incluya almacenamiento de batería con capacidad suficiente para cubrir tus
            necesidades esenciales durante un apagón.
          </p>

          <h2>Error #4: Aceptar un Diseño Genérico No Optimizado para Puerto Rico</h2>

          <p>
            Puerto Rico tiene condiciones climáticas únicas que requieren un diseño solar
            específico. Algunas compañías utilizan diseños genéricos que no consideran
            factores críticos como la exposición a vientos huracanados, la humedad tropical,
            la alta salinidad costera, o los patrones específicos de irradiación solar
            de la isla.
          </p>
          <p>
            Un diseño no optimizado para Puerto Rico puede resultar en paneles que se
            desprenden durante huracanes, inversores que fallan prematuramente por la
            humedad, o un sistema que produce significativamente menos energía de la
            prometida.
          </p>
          <p>
            <strong>Cómo evitarlo:</strong> Pregunta cómo se diseñó tu sistema
            específicamente para las condiciones de Puerto Rico. ¿Qué clasificación de
            viento tienen las estructuras de montaje? ¿Son los equipos resistentes a la
            corrosión marina? ¿Se utilizó software de diseño con datos solares específicos
            de tu municipio? En Kilowatt PR, cada sistema es diseñado por nuestro asesor
            de ingeniería, Ing. Julio A. Santiago Pérez (PE #6083), con más de 50 años de
            experiencia en ingeniería eléctrica en Puerto Rico.
          </p>

          <h2>Error #5: Ignorar la Experiencia con OGPE y LUMA Energy</h2>

          <p>
            El proceso de permisos e interconexión en Puerto Rico es complejo. Necesitas
            permisos de la Oficina de Gerencia de Permisos (OGPE), la interconexión con
            LUMA Energy para la medición neta, y en algunos casos permisos adicionales
            dependiendo del municipio y el tipo de propiedad.
          </p>
          <p>
            Algunas compañías — especialmente las que vienen de fuera de Puerto Rico o son
            relativamente nuevas — no conocen bien este proceso. El resultado: meses de
            retrasos, documentos rechazados, y un sistema instalado en tu techo que no
            puedes usar legalmente porque no tiene la interconexión aprobada.
          </p>
          <p>
            <strong>Cómo evitarlo:</strong> Pregunta cuántas interconexiones con LUMA
            Energy ha completado la compañía. ¿Conocen el proceso de OGPE? ¿Cuánto tiempo
            típicamente toma desde la firma del contrato hasta tener el sistema produciendo
            energía? Una compañía con experiencia real en Puerto Rico puede darte un
            cronograma realista — generalmente de 8 a 12 semanas para un sistema residencial.
          </p>

          <h2>Error #6: Creer Promesas de Ahorro Irrealistas</h2>

          <p>
            &quot;Elimina tu factura de LUMA al 100%.&quot; &quot;Tu sistema se paga en 2
            años.&quot; &quot;Ahorra $500 al mes desde el primer día.&quot; Si algo suena
            demasiado bueno para ser verdad, probablemente lo es.
          </p>
          <p>
            Algunas compañías exageran los ahorros proyectados para cerrar la venta. Usan
            estimaciones de producción infladas, ignoran el cargo fijo de LUMA Energy que
            siempre pagarás, o no consideran la degradación natural de los paneles con el
            tiempo.
          </p>
          <p>
            <strong>Cómo evitarlo:</strong> Un instalador honesto te mostrará proyecciones
            de ahorro basadas en tu consumo real (tus últimas 12 facturas de LUMA), con
            estimaciones conservadoras de producción solar. En la mayoría de los casos
            residenciales en Puerto Rico, un sistema bien diseñado puede reducir tu factura
            entre un 70% y 90%, y se paga en 5 a 8 años a través del ahorro mensual
            acumulado. Desconfía de quien prometa mucho más que eso.
          </p>

          <h2>Cómo Kilowatt PR Aborda Cada Uno de Estos Problemas</h2>

          <p>
            Fundada por Xavier Acevedo Santiago, perito electricista licenciado (#21309),
            Kilowatt PR fue creada precisamente para ofrecer una alternativa confiable en
            el mercado solar de Puerto Rico. Nuestro enfoque es diferente:
          </p>

          <ul>
            <li>
              <strong>Licencias verificables:</strong> Nuestro fundador es perito electricista
              licenciado y participa directamente en cada proyecto. Nuestro asesor de
              ingeniería, Ing. Julio A. Santiago Pérez (PE #6083), tiene más de 50 años
              de experiencia, incluyendo trabajo con NASA y como profesor de la Universidad
              de Puerto Rico en Mayagüez.
            </li>
            <li>
              <strong>Baterías incluidas:</strong> Recomendamos batería de respaldo en cada
              instalación residencial porque conocemos la realidad de la red eléctrica en
              Puerto Rico.
            </li>
            <li>
              <strong>Diseño para huracanes:</strong> Cada sistema se diseña con estructuras
              de montaje clasificadas para vientos huracanados y equipos resistentes al
              clima tropical de la isla.
            </li>
            <li>
              <strong>Experiencia con LUMA y OGPE:</strong> Manejamos todo el proceso de
              permisos e interconexión. Conocemos el sistema porque llevamos años
              navegándolo.
            </li>
            <li>
              <strong>Transparencia en precios y ahorros:</strong> Proyecciones basadas
              en tu consumo real, sin promesas exageradas. Consulta gratis con análisis
              de tus facturas y proyección de ahorros a 7 años.
            </li>
          </ul>

          <h2>Conclusión</h2>

          <p>
            Instalar paneles solares en Puerto Rico es una decisión inteligente — pero solo
            si eliges al instalador correcto. Tomarte el tiempo de verificar licencias,
            comparar cotizaciones en detalle, exigir batería de respaldo, y buscar un
            instalador con experiencia real en el mercado puertorriqueño puede ahorrarte
            miles de dólares y años de frustración.
          </p>
          <p>
            Tu hogar merece un sistema solar diseñado, instalado y respaldado por
            profesionales licenciados que conocen Puerto Rico. No te conformes con menos.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Quieres una opinión profesional sobre tu proyecto solar?
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

      <FAQSection faqs={faqs} title="Preguntas sobre Contratar un Instalador Solar en Puerto Rico" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
              { href: '/blog/incentivos-solares-puerto-rico-2026', label: 'Preparación para Huracanes' },
              { href: '/blog/como-funciona-interconexion-luma-energia', label: 'Interconexión con LUMA' },
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
