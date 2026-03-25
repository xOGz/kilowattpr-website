import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { OrganizationSchema, WebSiteSchema } from '@/components/SchemaOrg'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kilowattpr.com'),
  title: {
    default: 'Kilowatt PR — Instalación Solar Puerto Rico',
    template: '%s | Kilowatt PR — Instalación Solar Puerto Rico',
  },
  description:
    'Kilowatt PR LLC: empresa #1 en instalación de paneles solares en Puerto Rico. Técnicos certificados con más de una década de experiencia. Cotización gratis.',
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
        alt: 'Kilowatt PR — Instalación de Paneles Solares en Puerto Rico',
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
    <html lang="es-PR" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
