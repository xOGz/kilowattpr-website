import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, MessageCircle, ArrowRight, Star, Gift } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Message Sent — Thank You',
  description: 'Your message was sent successfully. The Kilowatt PR team will contact you soon.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: 'rgba(245, 166, 35, 0.15)' }}
        >
          <CheckCircle className="text-primary-container" size={40} />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-4">
          Message Received!
        </h1>
        <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
          Thank you for your interest in solar energy. Our team will contact you within
          2 hours to schedule your free consultation.
        </p>

        <div className="bg-surface-container rounded-xl p-6 mb-6">
          <p className="text-on-surface font-semibold mb-3">Need an immediate response?</p>
          <a
            href="https://wa.me/17874312275"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center w-full text-base py-4"
          >
            <MessageCircle size={20} />
            Message Us on WhatsApp
          </a>
        </div>

        {/* Referral program */}
        <div className="bg-surface-container rounded-xl p-6 mb-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(245, 166, 35, 0.15)' }}
            >
              <Gift className="text-primary-container" size={20} />
            </div>
            <div>
              <p className="text-on-surface font-semibold mb-1">Know someone who needs solar?</p>
              <p className="text-on-surface-variant text-sm mb-3">
                Earn $500 for every person you refer who completes their installation.
              </p>
              <Link
                href="/en/referral-program"
                className="text-primary-container font-label text-label-lg hover:underline inline-flex items-center gap-1"
              >
                View referral program <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Google review request */}
        <div className="bg-surface-container rounded-xl p-6 mb-8 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(245, 166, 35, 0.15)' }}
            >
              <Star className="text-primary-container" size={20} />
            </div>
            <div>
              <p className="text-on-surface font-semibold mb-1">Already a customer? Leave us a review</p>
              <p className="text-on-surface-variant text-sm mb-3">
                Your feedback helps other families make the decision to protect themselves with solar energy.
              </p>
              <a
                href="https://www.google.com/maps/place/Kilowatt+PR+LLC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-container font-label text-label-lg hover:underline inline-flex items-center gap-1"
              >
                Leave a review on Google <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <Link href="/en" className="inline-flex items-center gap-2 text-primary-container font-semibold hover:underline">
          Back to home <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
