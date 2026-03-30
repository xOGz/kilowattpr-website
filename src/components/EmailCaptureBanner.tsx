'use client'

import { useState, useEffect } from 'react'
import { X, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function EmailCaptureBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const alreadyDismissed = sessionStorage.getItem('email-banner-dismissed')
    if (alreadyDismissed) {
      setDismissed(true)
      return
    }

    function handleScroll() {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 40) {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleDismiss() {
    setDismissed(true)
    sessionStorage.setItem('email-banner-dismissed', 'true')
  }

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-16 md:bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-30 animate-fade-in-up">
      <div className="bg-surface-container-high rounded-xl p-5 shadow-2xl border border-outline-variant/20">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-on-surface-variant/60 hover:text-on-surface transition-colors"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(245, 166, 35, 0.15)' }}
          >
            <BookOpen className="text-primary-container" size={20} />
          </div>
          <div>
            <p className="font-headline font-semibold text-on-surface text-sm mb-1">
              Guía Solar Puerto Rico 2026
            </p>
            <p className="text-on-surface-variant text-xs leading-relaxed mb-3">
              Todo lo que necesitas saber antes de instalar — costos, baterías, LUMA, huracanes. Gratis.
            </p>
            <Link
              href="/guia-solar"
              onClick={handleDismiss}
              className="inline-flex items-center gap-1.5 text-primary-container font-label text-label-lg hover:underline"
            >
              Descargar Gratis →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
