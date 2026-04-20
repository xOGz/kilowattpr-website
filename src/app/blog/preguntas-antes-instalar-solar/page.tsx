import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '10 Preguntas que Debes Hacer Antes de Instalar Paneles Solares en Puerto Rico',
  description:
    'Las 10 preguntas críticas que todo consumidor debe hacer antes de contratar un instalador solar en Puerto Rico. Licencias, garantías, baterías, permisos OGPE y más.',
  alternates: { canonical: 'https://www.kilowattpr.com/blog/preguntas-antes-instalar-solar' },
}

const faqs = [
  {
    question: '¿Qué licencias debe tener un instalador solar en Puerto Rico?',
    answer: 'Un instalador solar legítimo en Puerto Rico debe tener licencia de perito electricista vigente emitida por la Junta Examinadora de Peritos Electricistas. Además, debe estar registrado como contratista y tener seguro de responsabilidad. Pide el número de licencia y verifícalo antes de firmar cualquier contrato. En Kilowatt PR, nuestro perito electricista es Xavier Acevedo Santiago (Licencia #21309) y nuestro ingeniero asesor es el Ing. Julio A. Santiago Pérez, PE (#6083).',
  },
  {
    question: '¿Quién maneja los permisos de OGPE y la interconexión con LUMA?',
    answer: 'Una empresa solar profesional debe manejar todos los trámites por ti: permisos de OGPE (Oficina de Gerencia de Permisos), solicitud de interconexión con LUMA, inspecciones requeridas y el permiso de operación final (PTO). Si un instalador te dice que los permisos son "tu responsabilidad", es una señal de alerta. En Kilowatt PR gestionamos todo el proceso completo hasta que tu sistema está produciendo y exportando energía a la red.',
  },
  {
    question: '¿Qué garantías debo exigir para un sistema solar en Puerto Rico?',
    answer: 'Un sistema solar completo debe incluir garantía del fabricante de paneles (25 años de producción), garantía del inversor (10–25 años según marca), garantía de la batería si aplica (10 años), y garantía de mano de obra del instalador (mínimo 5 años, idealmente 10). Pide todo por escrito y verifica que el instalador tenga la estabilidad para respaldar esas garantías. Desconfía de garantías verbales o de empresas sin historial comprobable.',
  },
  {
    question: '¿Los paneles solares en Puerto Rico están certificados para huracanes?',
    answer: 'Los paneles y la estructura de montaje deben estar certificados para resistir vientos de huracán según los códigos de construcción aplicables en Puerto Rico. Pregunta específicamente por la certificación de viento de los paneles (mínimo 150 mph) y de la estructura de montaje. El diseño debe incluir cálculos de carga de viento firmados por un ingeniero profesional. En Kilowatt PR, todos nuestros diseños son revisados por el Ing. Julio A. Santiago Pérez, PE, quien certifica la resistencia a huracanes.',
  },
]

export default function PreguntasAntesInstalarPage() {
  const publishDate = '2026-03-24'
  const modifyDate = '2026-03-24'
  const url = 'https://www.kilowattpr.com/blog/preguntas-antes-instalar-solar'

  return (
    <>
      <ArticleSchema
        title="10 Preguntas que Debes Hacer Antes de Instalar Paneles Solares en Puerto Rico"
        description="Las 10 preguntas críticas antes de contratar un instalador solar en Puerto Rico. Licencias, garantías, baterías, permisos OGPE y señales de alerta."
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
              <time dateTime={publishDate}>24 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Ing. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            10 Preguntas que Debes Hacer Antes de Instalar Paneles Solares en Puerto Rico
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            Instalar paneles solares es una inversión de $15,000 a $35,000. No es una
            decisión que debas tomar a la ligera ni basándote únicamente en el precio
            más bajo. Antes de firmar con cualquier empresa solar en Puerto Rico, haz
            estas 10 preguntas. Las respuestas te dirán si estás frente a un
            profesional serio o si debes seguir buscando.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>1. ¿Cuál es su número de licencia de perito electricista?</h2>

          <p>
            Esta es la primera pregunta y la más importante. En Puerto Rico, toda
            instalación eléctrica debe ser supervisada por un perito electricista con
            licencia vigente emitida por la Junta Examinadora de Peritos Electricistas.
            Un instalador solar que no puede darte un número de licencia verificable
            es una señal de alerta inmediata.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Nuestro perito electricista es [nombre], licencia #[número]. Puede verificarlo en la página de la Junta Examinadora."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"Estamos en proceso de licencia" / "Subcontratamos esa parte" / Evitan la pregunta o dan respuestas vagas.</p>
              </div>
            </div>
          </div>

          <h2>2. ¿El sistema incluye batería de respaldo?</h2>

          <p>
            En Puerto Rico, un sistema solar sin batería te deja sin electricidad
            durante los apagones de LUMA. Esto sorprende a muchos compradores que
            asumen que tener paneles significa tener energía siempre. No es así: sin
            batería, cuando LUMA se va, tu sistema se apaga automáticamente por
            seguridad.
          </p>

          <p>
            Pregunta específicamente: ¿Viene con batería? ¿De qué capacidad? ¿Qué
            cubre durante un apagón? ¿Cuántas horas de respaldo ofrece? Un instalador
            serio te presentará opciones con y sin batería, explicando claramente las
            implicaciones de cada opción.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Te presentamos opciones con y sin batería. Con batería de 10 kWh cubres nevera, luces, abanicos e internet por 8–12 horas. El costo adicional es de $X."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"No necesitas batería, con los paneles tienes energía siempre" / No mencionan batería hasta que preguntas.</p>
              </div>
            </div>
          </div>

          <h2>3. ¿Quién maneja los permisos de OGPE y la interconexión con LUMA?</h2>

          <p>
            La instalación solar en Puerto Rico requiere permisos de la Oficina de
            Gerencia de Permisos (OGPE) y un proceso de interconexión con LUMA que
            puede tomar semanas o meses. Una empresa profesional gestiona todo este
            proceso por ti, desde la solicitud inicial hasta que tu sistema está
            conectado y produciendo.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Nosotros manejamos todo: permisos de OGPE, solicitud de interconexión a LUMA, inspecciones y el PTO. Tú no tienes que hacer trámites."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"Los permisos son responsabilidad del cliente" / "OGPE no es nuestra área" / Cobran extra por los trámites que deberían estar incluidos.</p>
              </div>
            </div>
          </div>

          <h2>4. ¿Los paneles y la estructura están certificados para huracanes?</h2>

          <p>
            Vivimos en Puerto Rico. Los huracanes son una realidad, no una
            posibilidad remota. Todo sistema solar instalado aquí debe estar diseñado
            para resistir vientos de huracán. Esto incluye paneles con certificación
            de resistencia al viento, estructura de montaje con cálculos de carga de
            viento y anclaje apropiado para el tipo de techo.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Nuestros paneles están certificados para vientos de 150+ mph. El diseño de montaje incluye cálculos de carga de viento firmados por un ingeniero profesional."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"Los paneles aguantan cualquier cosa" / No pueden mostrarte certificaciones / No tienen ingeniero que firme los planos.</p>
              </div>
            </div>
          </div>

          <h2>5. ¿Qué garantías ofrecen por escrito?</h2>

          <p>
            Un sistema solar es una inversión a 25+ años. Las garantías deben reflejar
            eso. Pregunta por cada componente por separado:
          </p>

          <ul>
            <li><strong>Paneles:</strong> Garantía de producción de 25 años (deben producir al menos 80% de su capacidad nominal a los 25 años)</li>
            <li><strong>Inversor:</strong> Garantía de 10 a 25 años dependiendo de la marca</li>
            <li><strong>Batería:</strong> Garantía de 10 años (típicamente 70% de capacidad retenida)</li>
            <li><strong>Mano de obra:</strong> Mínimo 5 años, idealmente 10 años</li>
            <li><strong>Estructura de montaje:</strong> Garantía contra corrosión y defectos de fabricación</li>
          </ul>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Aquí tienes el desglose de garantías por escrito: paneles 25 años, inversor 12 años, batería 10 años, mano de obra 10 años. Todo está en el contrato."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"Te damos garantía de por vida" (demasiado bueno para ser cierto) / Solo garantías verbales / No especifican por componente.</p>
              </div>
            </div>
          </div>

          <h2>6. ¿Qué opciones de financiamiento tienen?</h2>

          <p>
            No todos pueden pagar $15,000–$35,000 de contado, y no deberían tener
            que hacerlo. Un instalador serio ofrece opciones de financiamiento claras
            y transparentes. Pregunta por las tasas de interés, los plazos disponibles,
            si hay penalidad por pago adelantado y cuál es el pago mensual estimado.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Ofrecemos financiamiento con pagos mensuales de $X a $Y dependiendo del sistema. La tasa es X% a Y años. Sin penalidad por pago adelantado. Tu pago mensual es menor que tu factura actual de LUMA."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"Solo aceptamos pago completo" / Tasas excesivamente altas / No transparentan los términos hasta firmar / Presionan para que firmes hoy.</p>
              </div>
            </div>
          </div>

          <h2>7. ¿Cuál es el tiempo estimado de instalación e interconexión?</h2>

          <p>
            La instalación física de los paneles toma típicamente de 1 a 3 días. Pero
            el proceso completo desde que firmas el contrato hasta que tu sistema está
            produciendo y conectado a la red de LUMA puede tomar de 6 a 16 semanas,
            dependiendo de los trámites de permisos y la carga de trabajo de LUMA.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"La instalación toma 1–3 días. El proceso total con permisos e interconexión LUMA es de 8–12 semanas. Te mantenemos informado en cada paso."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"En una semana lo tienes listo" (imposible con permisos) / No dan estimado claro / No mencionan el proceso de interconexión.</p>
              </div>
            </div>
          </div>

          <h2>8. ¿Incluyen sistema de monitoreo?</h2>

          <p>
            El monitoreo te permite verificar en tiempo real cuánta energía produce tu
            sistema, detectar problemas temprano y confirmar que estás obteniendo el
            ahorro prometido. Todo sistema moderno debe incluir monitoreo accesible
            desde tu teléfono.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"El sistema incluye monitoreo por app donde ves producción en tiempo real, historial diario/mensual, y recibes alertas si hay algún problema."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"El monitoreo es un extra" / "No es necesario" / No mencionan monitoreo en la propuesta.</p>
              </div>
            </div>
          </div>

          <h2>9. ¿Ofrecen plan de mantenimiento?</h2>

          <p>
            Los paneles solares son de bajo mantenimiento, pero no de cero
            mantenimiento, especialmente en el clima tropical de Puerto Rico. El
            salitre costero, el polvo del Sahara y la humedad afectan la producción
            si no se limpian periódicamente. Pregunta si ofrecen servicio de
            mantenimiento y a qué costo.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Ofrecemos planes de mantenimiento preventivo que incluyen limpieza, inspección eléctrica, revisión de estructura e informe de rendimiento."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"Los paneles no necesitan mantenimiento" (falso en PR) / "Eso es tu responsabilidad" / No ofrecen servicio post-instalación.</p>
              </div>
            </div>
          </div>

          <h2>10. ¿Pueden mostrar referencias o reseñas verificables?</h2>

          <p>
            La prueba social es invaluable en una inversión de este tamaño. Un
            instalador con historial debe poder mostrarte reseñas reales de clientes
            en Google, Facebook o plataformas verificables. Desconfía de testimonios
            que solo aparecen en su propia página web sin forma de verificarlos.
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-700 mb-2">Buena Respuesta</h4>
                <p className="text-sm text-gray-700">"Tenemos X reseñas verificadas en Google con un promedio de X estrellas. Puedes verlas aquí. También podemos conectarte con clientes actuales en tu área."</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">Señal de Alerta</h4>
                <p className="text-sm text-gray-700">"Somos nuevos pero buenos" / Pocas o ninguna reseña en Google / Solo testimonios en su propia página sin verificación.</p>
              </div>
            </div>
          </div>

          <h2>Bonus: La Pregunta que Nunca Debes Olvidar</h2>

          <p>
            Hay una pregunta más que muchos consumidores olvidan hacer:
            <strong> "¿Qué pasa si su empresa cierra?"</strong> La industria solar ha
            visto empresas grandes cerrar operaciones, dejando a miles de clientes sin
            soporte ni garantías. Pregunta cómo se manejarían las garantías en ese
            escenario y si las garantías del fabricante son independientes del
            instalador.
          </p>

          <h2>Cómo Kilowatt PR Responde Estas 10 Preguntas</h2>

          <p>
            En Kilowatt PR respondemos cada una de estas preguntas con transparencia
            total:
          </p>

          <ul>
            <li><strong>Licencia:</strong> Perito electricista Xavier Acevedo Santiago, Lic. #21309. Ingeniero asesor Julio A. Santiago Pérez, PE #6083.</li>
            <li><strong>Batería:</strong> Presentamos opciones con y sin batería, explicando claramente las implicaciones de cada una.</li>
            <li><strong>Permisos:</strong> Gestionamos todo: OGPE, interconexión LUMA, inspecciones, PTO.</li>
            <li><strong>Huracanes:</strong> Todos nuestros diseños incluyen cálculos de carga de viento certificados por ingeniero PE.</li>
            <li><strong>Garantías:</strong> Todo por escrito en el contrato, desglosado por componente.</li>
            <li><strong>Financiamiento:</strong> Opciones claras con pagos mensuales menores a tu factura actual de LUMA.</li>
            <li><strong>Timeline:</strong> Comunicación constante en cada etapa del proceso.</li>
            <li><strong>Monitoreo:</strong> Incluido en todos nuestros sistemas.</li>
            <li><strong>Mantenimiento:</strong> Planes preventivos diseñados para el clima de Puerto Rico.</li>
            <li><strong>Reseñas:</strong> 4.9 estrellas en Google con reseñas verificadas de clientes reales.</li>
          </ul>

          <p>
            Con técnicos y jornaleros con más de una década de experiencia en Puerto
            Rico, hemos pasado por huracanes, apagones prolongados y todo lo que esta
            isla nos ha presentado. Esa experiencia es nuestra garantía más valiosa.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            ¿Listo para hacer las preguntas correctas? Consulta gratuita sin compromiso.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hola%2C%20me%20interesa%20una%20consulta%20sobre%20paneles%20solares."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Preguntas sobre Elegir un Instalador Solar" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Artículos Relacionados</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/errores-comunes-contratar-instalador-solar', label: 'Errores Comunes al Contratar Solar' },
              { href: '/blog/cuanto-cuesta-energia-solar-puerto-rico-2026', label: 'Costos de Energía Solar 2026' },
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
