import type { Metadata } from 'next'
import { FAQSchema } from '@/components/SchemaOrg'
import SolarCalculator from '@/components/SolarCalculator'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Calculadora Solar — ¿Cuánto Puedes Ahorrar con Energía Solar?',
  description:
    'Calcula tu ahorro solar en Puerto Rico. Ingresa tu factura de LUMA y descubre el tamaño de sistema recomendado, costo estimado y retorno de inversión.',
  alternates: { canonical: 'https://www.kilowattpr.com/calculadora-solar' },
  openGraph: {
    title: 'Calculadora Solar | Kilowatt PR',
    description:
      '¿Cuánto puedes ahorrar con energía solar en Puerto Rico? Calcula tu ahorro basado en tu factura de LUMA.',
    url: 'https://www.kilowattpr.com/calculadora-solar',
  },
}

const faqs = [
  {
    question: '¿Qué tan precisa es esta calculadora?',
    answer:
      'Esta calculadora ofrece un estimado basado en tarifas promedio de LUMA Energy y producción solar típica en Puerto Rico (1,600 kWh/kW/año). Tu cotización final será más precisa porque incluye un diseño 3D de tu techo específico, análisis de sombras y tu consumo real de los últimos 12 meses.',
  },
  {
    question: '¿El costo estimado incluye batería?',
    answer:
      'Los sistemas desde $13,000 incluyen batería de respaldo básica. Sistemas más grandes pueden requerir baterías adicionales. Durante la consulta gratis te presentamos opciones con diferentes capacidades de respaldo (12, 24, o 48 horas).',
  },
  {
    question: '¿Cómo se calcula el retorno de inversión?',
    answer:
      'El retorno de inversión divide el costo del sistema entre tu ahorro anual estimado. También consideramos un aumento anual del 3% en la tarifa de LUMA, lo cual hace que tu ahorro a 25 años sea significativamente mayor que el cálculo simple. Históricamente, LUMA ha aumentado las tarifas más del 3% anual.',
  },
  {
    question: '¿Puedo reducir mi factura de LUMA un 95%?',
    answer:
      'Sí. Con un sistema solar dimensionado correctamente para tu consumo, puedes reducir tu factura de LUMA hasta un 95%. El 5% restante corresponde a cargos fijos de la red que LUMA cobra independientemente de tu consumo. Algunos clientes nuestros reportan facturas de LUMA de menos de $15 al mes.',
  },
]

export default function CalculadoraSolarPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-surface text-on-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">
              ¿Cuánto Puedes <span className="text-primary-container">Ahorrar</span> con Energía Solar?
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Ingresa tu factura mensual de LUMA Energy y descubre el tamaño de sistema
              recomendado, cuánto ahorrarías al mes y en cuántos años recuperas tu inversión.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 section-light-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolarCalculator />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#121240] text-center mb-10">
            ¿Cómo Funciona el Cálculo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-display font-black mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #E09500, #F5A623)', color: '#3A2400' }}
              >
                1
              </div>
              <h3 className="font-headline font-semibold text-[#121240] mb-2">Tu Factura de LUMA</h3>
              <p className="text-[#4A4A6A] text-sm leading-relaxed">
                Usamos tu factura mensual para estimar tu consumo anual de electricidad en kWh.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-display font-black mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #E09500, #F5A623)', color: '#3A2400' }}
              >
                2
              </div>
              <h3 className="font-headline font-semibold text-[#121240] mb-2">Tamaño del Sistema</h3>
              <p className="text-[#4A4A6A] text-sm leading-relaxed">
                Calculamos los kW necesarios basándonos en la producción solar típica de Puerto Rico
                (1,600 kWh por kW al año).
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-display font-black mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #E09500, #F5A623)', color: '#3A2400' }}
              >
                3
              </div>
              <h3 className="font-headline font-semibold text-[#121240] mb-2">Tu Ahorro</h3>
              <p className="text-[#4A4A6A] text-sm leading-relaxed">
                Proyectamos tu ahorro mensual, retorno de inversión y ahorro total a 25 años
                incluyendo aumentos de tarifa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre la Calculadora Solar" />
    </>
  )
}
