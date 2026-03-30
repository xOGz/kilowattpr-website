import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileCTABar from '@/components/MobileCTABar'
import EmailCaptureBanner from '@/components/EmailCaptureBanner'
import { OrganizationSchema, WebSiteSchema } from '@/components/SchemaOrg'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kilowattpr.com'),
  title: {
    default: 'Kilowatt PR | Instalación Solar y Contratista Eléctrico en Puerto Rico',
    template: '%s | Kilowatt PR',
  },
  description:
    'Instalación de paneles solares desde $13,000 en Puerto Rico. Contratista eléctrico con 30+ años. 4.9★ / 147 reseñas. Cotización gratis.',
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
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap"
          as="style"
        />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased">
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTABar />
        <EmailCaptureBanner />
      </body>
    </html>
  )
}
