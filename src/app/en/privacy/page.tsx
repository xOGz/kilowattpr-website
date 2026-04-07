import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy of Kilowatt PR LLC.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/privacy',
    languages: {
      es: 'https://www.kilowattpr.com/privacidad',
      en: 'https://www.kilowattpr.com/en/privacy',
    },
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy-dark mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none text-gray-600">
        <p className="text-sm text-gray-400 mb-6">Last updated: January 1, 2026</p>

        <p>
          Kilowatt PR LLC (&quot;we,&quot; &quot;our,&quot; or &quot;the company&quot;) operates the website
          www.kilowattpr.com. This page informs you of our policies regarding the
          collection, use, and disclosure of personal data when you use our service.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect various types of information in order to provide and improve our
          service, including:
        </p>
        <ul>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Municipality of residence</li>
          <li>Information submitted through our contact form</li>
        </ul>

        <h2>Use of Information</h2>
        <p>Kilowatt PR LLC uses the collected information for the following purposes:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To contact you in response to your inquiry or quote request</li>
          <li>To notify you about changes to our services</li>
          <li>To provide customer support</li>
          <li>To analyze website usage in order to improve it</li>
        </ul>

        <h2>Data Disclosure</h2>
        <p>
          Kilowatt PR LLC does not sell, trade, or transfer your personally identifiable
          information to third parties. This does not include trusted third parties who
          assist us in operating our website, conducting our business, or servicing you,
          so long as those parties agree to keep this information confidential.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website may use &quot;cookies&quot; to enhance the user experience. Your web browser
          may place cookies on your hard drive for record-keeping purposes and sometimes
          to track information about them.
        </p>

        <h2>Data Security</h2>
        <p>
          The security of your data is important to us. We use commercially acceptable
          security measures to protect your personal information. However, no method of
          transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any
          changes by posting the new Privacy Policy on this page.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, contact us:
        </p>
        <ul>
          <li>Email: info@kilowattpr.com</li>
          <li>Phone: +1-787-431-2275</li>
          <li>Address: HC 3 Box 31767, Aguada, PR 00602</li>
        </ul>
      </div>
    </div>
  )
}
