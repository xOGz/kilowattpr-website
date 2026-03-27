import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { OrganizationSchema, WebSiteSchema } from '@/components/SchemaOrg'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kilowattpr.com'),
  title: {
    default: 'Kilowatt PR | Instalación Solar y Contratista Eléctrico en Puerto Rico',
    template: '%s | Kilowatt PR',
  },
  description:
    'Instalación de paneles solares desde $13,000. Peritos electricistas con 30+ años de experiencia en Puerto Rico. Cotización gratis hoy. ☎ 787-431-2275',
  openGraph: {
    type: 'website',
    locale: 'es_PR',
    url: 'https://www.kilowattpr.com',
    siteName: 'Kilowatt PR',
    images: [
      {
        url: 'https://www.kilowattpr.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kilowatt PR — Paneles Solares y Contratista Eléctrico Puerto Rico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.kilowattpr.com',
    languages: {
      'es': 'https://www.kilowattpr.com',
      'en': 'https://www.kilowattpr.com/en',
      'x-default': 'https://www.kilowattpr.com',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased">
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
