'use client'

import { useEffect } from 'react'

/**
 * Attaches click listeners to fire GA4 conversion events for the three highest-value
 * outbound actions on kilowattpr.com:
 *   - WhatsApp link clicks (wa.me / api.whatsapp.com)
 *   - Phone (tel:) clicks
 *   - Email (mailto:) clicks
 *
 * Form submission events live in their respective form components
 * (ContactForm.tsx already fires `lead_submit`).
 *
 * The listener is delegated on document so it survives navigation between routes.
 * Each fired event also pushes to dataLayer in case Google Tag Manager is later added.
 */
export default function ClientTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    function fireEvent(eventName: string, label: string, href: string): void {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, {
          event_category: 'engagement',
          event_label: label,
          link_url: href,
          page_location: window.location.href,
        })
      }
      // Also push to dataLayer for future GTM use
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: eventName,
        event_label: label,
        link_url: href,
      })
    }

    function classifyLink(href: string): { event: string; label: string } | null {
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        return { event: 'whatsapp_click', label: 'whatsapp' }
      }
      if (href.startsWith('tel:')) {
        return { event: 'phone_click', label: href.replace(/^tel:/, '') }
      }
      if (href.startsWith('mailto:')) {
        return { event: 'email_click', label: href.replace(/^mailto:/, '') }
      }
      return null
    }

    function onClick(event: MouseEvent): void {
      const target = event.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      const classification = classifyLink(href)
      if (!classification) return

      fireEvent(classification.event, classification.label, href)
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => {
      document.removeEventListener('click', onClick, { capture: true })
    }
  }, [])

  return null
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: Array<Record<string, unknown>>
  }
}
