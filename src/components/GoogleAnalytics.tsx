'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

const GA_TAG_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_TAG_ID) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', GA_TAG_ID)
    }
  }, [])

  return null
}
