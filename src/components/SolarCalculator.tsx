'use client'

import { useState } from 'react'
import { Sun, Battery, DollarSign, Clock, MessageCircle } from 'lucide-react'

const LUMA_RATE_PER_KWH = 0.27
const SOLAR_PRODUCTION_KWH_PER_KW_YEAR = 1600
const PANEL_COST_PER_KW = 1625
const BASE_SYSTEM_COST = 13000
const ANNUAL_LUMA_INCREASE = 0.03

interface CalculatorResult {
  monthlyBill: number
  annualConsumptionKwh: number
  recommendedKw: number
  estimatedSystemCost: number
  monthlySavings: number
  annualSavings: number
  paybackYears: number
  savings25Years: number
}

function calculateSolar(monthlyBill: number): CalculatorResult {
  const annualConsumptionKwh = (monthlyBill * 12) / LUMA_RATE_PER_KWH
  const recommendedKw = Math.ceil(annualConsumptionKwh / SOLAR_PRODUCTION_KWH_PER_KW_YEAR)
  const estimatedSystemCost = Math.max(BASE_SYSTEM_COST, recommendedKw * PANEL_COST_PER_KW)
  const annualProduction = recommendedKw * SOLAR_PRODUCTION_KWH_PER_KW_YEAR
  const coverageRatio = Math.min(annualProduction / annualConsumptionKwh, 0.95)
  const annualSavings = monthlyBill * 12 * coverageRatio
  const monthlySavings = annualSavings / 12
  const paybackYears = estimatedSystemCost / annualSavings

  let savings25Years = 0
  for (let year = 1; year <= 25; year++) {
    const yearRate = Math.pow(1 + ANNUAL_LUMA_INCREASE, year - 1)
    savings25Years += annualSavings * yearRate
  }

  return {
    monthlyBill,
    annualConsumptionKwh: Math.round(annualConsumptionKwh),
    recommendedKw,
    estimatedSystemCost,
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    paybackYears: Math.round(paybackYears * 10) / 10,
    savings25Years: Math.round(savings25Years),
  }
}

function formatCurrency(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function SolarCalculator() {
  const [bill, setBill] = useState(250)
  const [result, setResult] = useState<CalculatorResult | null>(null)

  function handleCalculate() {
    if (bill >= 50) {
      setResult(calculateSolar(bill))
    }
  }

  return (
    <div className="w-full">
      {/* Input */}
      <div className="mb-8">
        <label htmlFor="monthly-bill" className="block font-headline font-semibold text-[#121240] text-lg mb-3">
          ¿Cuánto pagas de luz al mes?
        </label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A4A6A] font-semibold">$</span>
            <input
              type="number"
              id="monthly-bill"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
              min={50}
              max={5000}
              className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-4 text-lg font-semibold text-[#121240] focus:outline-none focus:border-[#E09500] focus:ring-1 focus:ring-[#E09500]"
              placeholder="250"
            />
          </div>
          <button
            onClick={handleCalculate}
            className="btn-primary px-8 py-4 text-base shrink-0"
          >
            Calcular
          </button>
        </div>
        <input
          type="range"
          min={50}
          max={1500}
          step={25}
          value={bill}
          onChange={(e) => {
            setBill(Number(e.target.value))
            setResult(calculateSolar(Number(e.target.value)))
          }}
          className="w-full mt-4 accent-[#E09500] h-2 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-xs text-[#4A4A6A] mt-1">
          <span>$50</span>
          <span>$750</span>
          <span>$1,500</span>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Main stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F8F7F4] rounded-xl p-5 text-center">
              <Sun className="text-[#E09500] mx-auto mb-2" size={24} />
              <p className="font-display text-2xl font-bold text-[#121240]">{result.recommendedKw} kW</p>
              <p className="text-sm text-[#4A4A6A]">Sistema Recomendado</p>
            </div>
            <div className="bg-[#F8F7F4] rounded-xl p-5 text-center">
              <DollarSign className="text-[#E09500] mx-auto mb-2" size={24} />
              <p className="font-display text-2xl font-bold text-[#121240]">{formatCurrency(result.estimatedSystemCost)}</p>
              <p className="text-sm text-[#4A4A6A]">Costo Estimado</p>
            </div>
            <div className="bg-[#F8F7F4] rounded-xl p-5 text-center">
              <Battery className="text-[#E09500] mx-auto mb-2" size={24} />
              <p className="font-display text-2xl font-bold text-green-600">{formatCurrency(result.monthlySavings)}/mes</p>
              <p className="text-sm text-[#4A4A6A]">Ahorro Mensual</p>
            </div>
            <div className="bg-[#F8F7F4] rounded-xl p-5 text-center">
              <Clock className="text-[#E09500] mx-auto mb-2" size={24} />
              <p className="font-display text-2xl font-bold text-[#121240]">{result.paybackYears} años</p>
              <p className="text-sm text-[#4A4A6A]">Retorno de Inversión</p>
            </div>
          </div>

          {/* 25-year savings highlight */}
          <div className="bg-gradient-to-r from-[#E09500] to-[#F5A623] rounded-xl p-6 text-center">
            <p className="text-[#3A2400] font-label text-sm uppercase tracking-wider mb-1">
              Ahorro Proyectado a 25 Años
            </p>
            <p className="font-display text-4xl font-bold text-[#3A2400]">
              {formatCurrency(result.savings25Years)}
            </p>
            <p className="text-[#6B4400] text-sm mt-1">
              Incluyendo aumento anual de 3% en tarifa de LUMA
            </p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-3">
            <a
              href={`https://wa.me/17874312275?text=${encodeURIComponent(
                `Hola, me interesa un sistema solar. Mi factura mensual de LUMA es de $${result.monthlyBill}. La calculadora me recomienda un sistema de ${result.recommendedKw}kW.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-base py-4"
            >
              <MessageCircle size={20} />
              Obtener Cotización Personalizada
            </a>
            <p className="text-xs text-[#4A4A6A]">
              Estos son estimados. Tu cotización final incluye diseño 3D de tu techo específico y análisis detallado de ahorro.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
