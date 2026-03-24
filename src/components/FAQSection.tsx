'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export default function FAQSection({ faqs, title = '¿Tienes Preguntas?' }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface-container-high rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-headline font-semibold text-on-surface hover:bg-surface-container-highest transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="text-primary-container shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-primary-container shrink-0" size={20} />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-on-surface-variant leading-relaxed pt-2 font-body">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
