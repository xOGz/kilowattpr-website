import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Guía de Evaluación de Techo para Energía Solar en Puerto Rico',
  description:
    'Aprende qué hace un techo apto para paneles solares en Puerto Rico. Orientación, inclinación, material, edad, capacidad estructural y requisitos de anclaje para huracanes.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/guia-evaluacion-techo-solar' },
}

const faqs = [
  {
    question: '¿Qué tipo de techo es mejor para paneles solares en Puerto Rico?',
    answer: 'Los techos de concreto son los más comunes en Puerto Rico y excelentes para energía solar porque ofrecen gran capacidad de carga y resistencia a huracanes. Los techos de metal (zinc o standing seam) también son aptos, pero requieren un sistema de anclaje diferente. Los techos de tejas o shingles necesitan evaluación adicional del estado de las tejas antes de la instalación. En Kilowatt PR evaluamos cualquier tipo de techo sin costo.',
  },
  {
    question: '¿Necesito reparar mi techo antes de instalar paneles solares?',
    answer: 'Depende del estado actual de tu techo. Si tiene filtraciones activas, grietas significativas en el concreto, oxidación severa en metal, o tiene más de 20 años sin mantenimiento, recomendamos hacer las reparaciones necesarias antes de la instalación. Instalar paneles sobre un techo en mal estado puede complicar futuras reparaciones y comprometer la integridad del sistema. Durante nuestra evaluación gratuita, te indicamos si tu techo necesita algún trabajo previo.',
  },
  {
    question: '¿Cuánto peso soporta un techo de concreto en Puerto Rico para paneles solares?',
    answer: 'Un techo de concreto residencial típico en Puerto Rico puede soportar entre 40 y 60 libras por pie cuadrado de carga adicional. Un sistema de paneles solares con su estructura de montaje pesa aproximadamente 3 a 5 libras por pie cuadrado, muy dentro del margen seguro. Sin embargo, techos más antiguos o con deterioro estructural deben ser evaluados por un ingeniero antes de la instalación. Nuestro equipo incluye esta evaluación en la consulta.',
  },
  {
    question: '¿Importa la orientación de mi techo para paneles solares?',
    answer: 'Sí, la orientación es uno de los factores más importantes. En Puerto Rico, por nuestra ubicación tropical (latitud 18°N), los techos orientados al sur reciben la máxima radiación solar. Sin embargo, orientaciones al este u oeste también son viables con una reducción de producción de solo un 10% a 15%. Los techos planos de concreto, muy comunes en Puerto Rico, permiten instalar los paneles con la inclinación y orientación óptima usando estructura de montaje ajustable.',
  },
]

export default function GuiaEvaluacionTechoPage() {
  const publishDate = '2026-03-12'
  const url = 'https://www.kilowattpr.com/blog/guia-evaluacion-techo-solar'

  return (
    <>
      <ArticleSchema
        title="Guía de Evaluación de Techo para Energía Solar en Puerto Rico"
        description="Aprende qué hace un techo apto para paneles solares en Puerto Rico. Orientación, inclinación, material, edad, capacidad estructural y anclaje para huracanes."
        datePublished={publishDate}
        url={url}
      />
      <FAQSchema faqs={faqs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Instalación
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>12 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Guía de Evaluación de Techo para Energía Solar en Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Antes de instalar un solo panel solar, hay una pregunta fundamental que
            resolver: ¿tu techo está listo? En Puerto Rico, donde enfrentamos huracanes,
            calor extremo y salitre costero, la evaluación del techo es el primer paso
            crítico de toda instalación solar. Esta guía te explica exactamente qué
            evaluamos, por qué importa y cómo prepararte.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>Por Qué la Evaluación del Techo Es el Primer Paso</h2>

          <p>
            Un sistema solar residencial típico en Puerto Rico tiene una vida útil de 25 a
            30 años. Eso significa que tu techo necesita estar en condiciones de soportar
            los paneles durante todo ese período sin problemas. Instalar sobre un techo
            deteriorado es como construir una casa sobre cimientos débiles: puede funcionar
            al principio, pero eventualmente tendrás problemas costosos.
          </p>

          <p>
            En Kilowatt PR, la evaluación del techo es parte integral de nuestra consulta
            gratuita. No vendemos un sistema hasta confirmar que tu techo está preparado
            para recibirlo. Si encontramos que necesita reparaciones, te lo decimos con
            transparencia antes de firmar cualquier contrato.
          </p>

          <h2>Los 6 Factores que Evaluamos en Tu Techo</h2>

          <h3>1. Orientación del Techo</h3>
          <p>
            Puerto Rico está ubicado a una latitud de aproximadamente 18° Norte, lo que
            significa que los techos orientados al sur reciben la mayor cantidad de
            radiación solar durante todo el año. Esta orientación es la ideal para
            maximizar la producción de energía.
          </p>
          <p>
            Sin embargo, no todos los techos miran al sur. Las orientaciones al este y
            al oeste también son perfectamente viables: producen entre un{' '}
            <strong>85% y 90%</strong> de la energía de un techo orientado al sur.
            Incluso techos con orientación norte pueden funcionar en Puerto Rico gracias
            a nuestra posición tropical cercana al ecuador, aunque con una reducción
            mayor. Los techos planos, muy comunes en la isla, ofrecen la ventaja de
            poder instalar los paneles con la inclinación y orientación óptima.
          </p>

          <h3>2. Inclinación (Ángulo del Techo)</h3>
          <p>
            El ángulo ideal para paneles solares en Puerto Rico es entre{' '}
            <strong>15° y 20°</strong>, que coincide aproximadamente con nuestra latitud.
            Los techos a dos aguas típicos tienen entre 15° y 25° de inclinación, que es
            un rango excelente. Los techos planos de concreto (0°) requieren estructura
            de montaje inclinada para alcanzar el ángulo óptimo y permitir que el agua de
            lluvia escurra sin acumularse bajo los paneles.
          </p>

          <h3>3. Sombra y Obstrucciones</h3>
          <p>
            La sombra es el enemigo silencioso de la producción solar. Un solo panel
            parcialmente sombreado puede reducir la producción de toda una cadena
            (string) de paneles conectados en serie. Durante la evaluación, analizamos
            las fuentes de sombra durante todas las horas del día:
          </p>
          <ul>
            <li>Árboles cercanos (especialmente palmas y flamboyanes que crecen rápido)</li>
            <li>Edificios vecinos o estructuras altas</li>
            <li>Tanques de agua en el techo</li>
            <li>Antenas, parabólicas y otros objetos</li>
            <li>Paredes elevadas o pretiles altos</li>
          </ul>
          <p>
            En algunos casos, podar un árbol o reubicar un tanque de agua puede abrir
            suficiente espacio solar para hacer viable la instalación.
          </p>

          <h3>4. Material del Techo</h3>
          <p>
            En Puerto Rico encontramos principalmente tres tipos de techo, cada uno con
            consideraciones diferentes para la instalación solar:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Tipos de Techo en Puerto Rico</h3>
            <div className="space-y-4">
              {[
                {
                  tipo: 'Concreto (plano)',
                  ventaja: 'Excelente capacidad de carga, flexibilidad de orientación, resistencia a huracanes',
                  consideracion: 'Requiere anclaje con pernos expansivos y sellado de penetraciones',
                },
                {
                  tipo: 'Metal (zinc / standing seam)',
                  ventaja: 'Instalación más rápida con clamps, sin penetraciones al techo',
                  consideracion: 'Debe verificarse grosor del metal y estado de oxidación',
                },
                {
                  tipo: 'Tejas / Shingles',
                  ventaja: 'Estéticamente se integran bien con los paneles',
                  consideracion: 'Las tejas deben estar en buen estado; requiere penetraciones selladas',
                },
              ].map((row) => (
                <div key={row.tipo} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                  <p className="font-bold text-navy-dark">{row.tipo}</p>
                  <p className="text-sm text-green-700">Ventaja: {row.ventaja}</p>
                  <p className="text-sm text-amber-700">Consideración: {row.consideracion}</p>
                </div>
              ))}
            </div>
          </div>

          <h3>5. Edad y Condición del Techo</h3>
          <p>
            La edad del techo es un factor determinante. Si tu techo de concreto tiene
            más de 20 años sin impermeabilización, o tu techo de metal muestra
            oxidación significativa, recomendamos hacer las reparaciones pertinentes
            antes de instalar los paneles. La razón es práctica: retirar paneles para
            reparar el techo después cuesta tiempo y dinero adicional.
          </p>
          <p>
            Durante la evaluación verificamos:
          </p>
          <ul>
            <li>Filtraciones activas o manchas de humedad en el interior</li>
            <li>Grietas visibles en la superficie del concreto</li>
            <li>Estado del impermeabilizante existente</li>
            <li>Oxidación en techos de metal</li>
            <li>Integridad de los bordes y pretiles</li>
            <li>Drenaje y acumulación de agua estancada</li>
          </ul>

          <h3>6. Capacidad Estructural y Anclaje para Huracanes</h3>
          <p>
            Este es quizás el factor más crítico en Puerto Rico. Después del huracán
            María, las regulaciones de construcción y los estándares de instalación solar
            se fortalecieron significativamente. Todo sistema solar instalado en Puerto
            Rico debe cumplir con los requisitos de resistencia a vientos de huracán.
          </p>
          <p>
            En Kilowatt PR, todos nuestros diseños son revisados por el Ing. Julio A.
            Santiago Pérez, PE (Licencia #6083), quien verifica que el sistema de anclaje
            cumpla con los códigos de construcción aplicables. Esto incluye:
          </p>
          <ul>
            <li>Cálculo de carga de viento según la zona de exposición</li>
            <li>Selección del anclaje apropiado para el tipo de techo</li>
            <li>Verificación de la capacidad de carga de la estructura existente</li>
            <li>Diseño de la estructura de montaje para resistir vientos sostenidos de categoría 4+</li>
          </ul>

          <h2>Techos Planos de Concreto: La Ventaja Puertorriqueña</h2>

          <p>
            Puerto Rico tiene una ventaja que muchos estados del continente no tienen:
            la mayoría de nuestras casas tienen techos planos de concreto. Esto es una
            ventaja enorme para la energía solar porque:
          </p>

          <ul>
            <li><strong>Flexibilidad de orientación:</strong> Los paneles se montan sobre estructura inclinada, permitiendo apuntar al ángulo y dirección óptimos sin importar la orientación de la casa</li>
            <li><strong>Capacidad de carga superior:</strong> El concreto soporta significativamente más peso que madera o metal</li>
            <li><strong>Resistencia a huracanes:</strong> Con el anclaje correcto, los paneles sobre concreto tienen la mejor resistencia al viento</li>
            <li><strong>Acceso para mantenimiento:</strong> Los techos planos facilitan la limpieza y servicio de los paneles</li>
          </ul>

          <h2>Techos de Metal: Consideraciones Especiales</h2>

          <p>
            Los techos de metal son la segunda opción más común en Puerto Rico,
            especialmente en casas más antiguas y en zonas rurales. Para instalaciones
            solares en metal, evaluamos:
          </p>

          <ul>
            <li><strong>Grosor del metal:</strong> Debe ser suficiente para soportar los clamps de sujeción sin deformarse</li>
            <li><strong>Tipo de perfil:</strong> Standing seam permite clamps sin penetración; zinc corrugado requiere penetraciones selladas</li>
            <li><strong>Estado de oxidación:</strong> Oxidación avanzada debilita la capacidad de sujeción</li>
            <li><strong>Estructura subyacente:</strong> Las correas y vigas de soporte deben estar en buen estado</li>
          </ul>

          <h2>Cuándo Se Necesita Reparación Antes de la Instalación</h2>

          <p>
            No siempre es necesario reparar el techo antes de instalar paneles. Aquí te
            explicamos cuándo sí y cuándo no:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-red-600 mb-3">Se Necesita Reparación Primero</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Filtraciones activas o recurrentes</li>
                  <li>Grietas estructurales en el concreto</li>
                  <li>Impermeabilizante con más de 10 años</li>
                  <li>Oxidación severa en metal</li>
                  <li>Drenaje obstruido o agua estancada</li>
                  <li>Daño visible por huracán no reparado</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-600 mb-3">Listo para Instalar</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Sin filtraciones activas</li>
                  <li>Impermeabilizante en buen estado</li>
                  <li>Estructura sólida sin grietas</li>
                  <li>Metal sin oxidación significativa</li>
                  <li>Drenaje funcionando correctamente</li>
                  <li>Capacidad de carga adecuada</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Qué Incluye la Evaluación Gratuita de Kilowatt PR</h2>

          <p>
            Nuestra evaluación de techo es completamente gratuita y sin compromiso.
            Uno de nuestros técnicos con más de una década de experiencia visita tu
            propiedad y evalúa:
          </p>

          <ol>
            <li><strong>Inspección visual completa</strong> del techo: material, edad, condición, drenaje</li>
            <li><strong>Análisis de orientación y sombra</strong> con herramientas de medición solar</li>
            <li><strong>Medición del área disponible</strong> para determinar la capacidad máxima de paneles</li>
            <li><strong>Evaluación estructural preliminar</strong> de la capacidad de carga</li>
            <li><strong>Identificación de obstrucciones</strong> y posibles soluciones</li>
            <li><strong>Diseño preliminar</strong> del layout de paneles y estimado de producción</li>
            <li><strong>Estimado de costos</strong> personalizado según tus necesidades</li>
          </ol>

          <p>
            Todo el proceso toma entre 45 minutos y una hora. Al finalizar, tendrás
            una imagen clara de si tu techo está listo, qué se necesita para prepararlo,
            cuántos paneles caben, cuánta energía producirán y cuánto costará.
          </p>

          <h2>Conclusión: Tu Techo Es la Base de Todo</h2>

          <p>
            La evaluación del techo no es un trámite: es la base sobre la cual se
            construye un sistema solar que funcionará por décadas. En Puerto Rico,
            donde los huracanes son una realidad y las condiciones climáticas son
            exigentes, hacer esta evaluación correctamente es la diferencia entre un
            sistema que aguanta y uno que da problemas.
          </p>

          <p>
            En Kilowatt PR, con técnicos y jornaleros con más de una década de
            experiencia en Puerto Rico, hemos evaluado cientos de techos en toda la
            isla. Conocemos las particularidades de cada tipo de construcción y cada
            zona climática. Si estás considerando energía solar, el primer paso es
            sencillo: agenda tu evaluación gratuita.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Quieres saber si tu techo está listo para paneles solares? Evaluación gratuita.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20una%20evaluaci%C3%B3n%20de%20techo%20para%20paneles%20solares."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Evaluación por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Evaluación de Techo para Solar" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
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
