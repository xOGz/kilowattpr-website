import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { ArticleSchema, FAQSchema } from '@/components/SchemaOrg'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'What to Do After a LUMA Outage: A Practical Guide for Your Solar System',
  description:
    'Post-outage checklist for solar system owners in Puerto Rico. Check your inverter, battery, production, and reconnection to the LUMA grid. When to call technical support.',
  alternates: {
    canonical: 'https://www.kilowattpr.com/en/blog/what-to-do-after-luma-outage/',
    languages: {
      'es': 'https://www.kilowattpr.com/blog/que-hacer-despues-apagon-luma/',
      'en': 'https://www.kilowattpr.com/en/blog/what-to-do-after-luma-outage/',
    },
  },
  openGraph: {
    title: 'What to Do After a LUMA Outage: A Practical Guide for Your Solar System',
    description: 'Post-outage checklist for solar system owners in Puerto Rico. Check your inverter, battery, production, and reconnection to the LUMA grid.',
    url: 'https://www.kilowattpr.com/en/blog/what-to-do-after-luma-outage/',
    locale: 'en_US',
    type: 'article',
    images: ['https://www.kilowattpr.com/gallery/tecnico-trabajando.webp'],
  },
}

const faqs = [
  {
    question: 'Does my solar system reconnect automatically after a LUMA outage?',
    answer: 'Yes, most modern inverters reconnect to the grid automatically when LUMA restores service. This process can take between 30 seconds and 5 minutes after the grid stabilizes. The inverter waits to verify that the grid voltage and frequency are stable before reconnecting, as a safety measure. If after 10 minutes your system has not reconnected, check the inverter’s indicator lights or consult the monitoring app.',
  },
  {
    question: 'Can a LUMA outage damage my solar system?',
    answer: 'Under normal conditions, an outage does not damage your solar system. Modern inverters have built-in protections that disconnect the system from the grid automatically when they detect an interruption (anti-islanding). However, the voltage fluctuations that sometimes occur when LUMA restores service can, in rare cases, affect sensitive electronics. A surge protector in your main electrical panel protects against this.',
  },
  {
    question: 'Why don’t my panels produce during an outage if I don’t have a battery?',
    answer: 'For safety. Inverters without a battery (grid-tied) shut down automatically when the LUMA grid goes down. This is called anti-islanding protection and exists to protect LUMA technicians who might be repairing the lines. If your system sent energy to the grid during an outage, it could electrocute a worker. With a battery system and a hybrid inverter, your panels can keep producing and power your home isolated from the grid.',
  },
  {
    question: 'When should I call Kilowatt PR after an outage?',
    answer: 'Call Kilowatt PR if after an outage you notice any of these situations: the inverter shows a red light or a persistent error code, the system does not reconnect to the grid after 30 minutes of service being restored, daily production is significantly lower than normal with no obvious cause (clouds, dirt), the battery does not charge or does not hold a charge, or you hear unusual noises from any component. Our support team is available at 787-431-2275.',
  },
]

export default function QueHacerDespuesApagonPage() {
  const publishDate = '2026-03-19'
  const modifyDate = '2026-03-19'
  const url = 'https://www.kilowattpr.com/en/blog/what-to-do-after-luma-outage/'

  return (
    <>
      <ArticleSchema
        title="What to Do After a LUMA Outage: A Practical Guide for Your Solar System"
        description="Post-outage checklist for solar system owners in Puerto Rico. Check your inverter, battery, production, and reconnection to the LUMA grid."
        datePublished={publishDate}
        dateModified={modifyDate}
        url={url}
        image="https://www.kilowattpr.com/gallery/tecnico-trabajando.webp"
      />
      <FAQSchema faqs={faqs} inLanguage="en" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-solar-yellow/10 text-solar-yellow font-medium px-3 py-1 rounded-full">
              Maintenance
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time dateTime={publishDate}>March 19, 2026</time>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <Link href="/equipo/julio-santiago-perez" className="hover:text-solar-yellow transition-colors">Eng. Julio A. Santiago Pérez, PE</Link>
            </div>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
            <Link href="/blog/que-hacer-despues-apagon-luma" className="hover:text-primary-container transition-colors">
              Leer en Español
            </Link>
            <span className="text-outline">|</span>
            <span className="text-primary-container font-semibold">English</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            What to Do After a LUMA Outage: A Practical Guide for Your Solar System
          </h1>

          <p className="article-intro text-xl text-gray-600 leading-relaxed">
            The power went out. Again. In Puerto Rico, LUMA outages are a frequent reality. If
            you have a solar system, there are specific steps you should follow when the
            electricity comes back to make sure everything is working correctly. And if you do
            not have solar yet, this article shows you exactly how your experience would change.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2>For Solar System Owners: Post-Outage Checklist</h2>

          <p>
            When LUMA restores service after an outage, your solar system needs to reconnect to
            the grid. In most cases this happens automatically, but it is good practice to verify
            that everything is operating correctly. Follow this checklist:
          </p>

          <h3>Step 1: Verify That the LUMA Grid Is Stable</h3>
          <p>
            Before checking your solar system, confirm that LUMA&apos;s electricity actually came
            back in a stable way. Sometimes the power returns intermittently before stabilizing.
            Verify that the lights and equipment in your house work normally for at least 5
            minutes before proceeding.
          </p>

          <h3>Step 2: Check the Inverter</h3>
          <p>
            The inverter is the brain of your solar system. After an outage, check the following:
          </p>

          <div className="not-prose bg-gray-50 rounded-xl p-6 my-6">
            <h3 className="font-bold text-navy-dark mb-4">Inverter Status: What to Look For</h3>
            <div className="space-y-3">
              {[
                {
                  indicator: 'Solid or blinking green light',
                  meaning: 'Normal: the system is producing and/or connected to the grid',
                  action: 'No action required',
                },
                {
                  indicator: 'Yellow/orange light',
                  meaning: 'Warning: the inverter detected something unusual',
                  action: 'Check the monitoring app for more details. It may resolve on its own.',
                },
                {
                  indicator: 'Red light',
                  meaning: 'Error: the inverter detected a fault that requires attention',
                  action: 'Note the error code and contact Kilowatt PR',
                },
                {
                  indicator: 'No lights (off)',
                  meaning: 'The inverter is not powered on',
                  action: 'Check the inverter breaker in your electrical panel. If it is ON and the inverter does not turn on, contact support.',
                },
              ].map((row) => (
                <div key={row.indicator} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                  <p className="font-bold text-navy-dark">{row.indicator}</p>
                  <p className="text-sm text-gray-700">{row.meaning}</p>
                  <p className="text-sm text-green-700">Action: {row.action}</p>
                </div>
              ))}
            </div>
          </div>

          <h3>Step 3: Check the Battery Status (If You Have One)</h3>
          <p>
            If your system includes a backup battery, check:
          </p>
          <ul>
            <li><strong>Charge level:</strong> After a prolonged outage, the battery may be at a low level. It should start recharging with the solar panels during sunlight hours.</li>
            <li><strong>Operating mode:</strong> Verify that the battery has returned to normal mode (grid-tied) and has not stayed in backup mode.</li>
            <li><strong>Temperature:</strong> If the battery feels hot to the touch or shows a temperature warning in the app, ensure good ventilation and monitor it.</li>
          </ul>

          <h3>Step 4: Check Production in Your Monitoring App</h3>
          <p>
            Most modern solar systems include a monitoring app on your phone. After the system
            reconnects:
          </p>
          <ul>
            <li>Verify that real-time production shows normal values for the time of day</li>
            <li>Compare with similar previous days (same level of sun)</li>
            <li>If production is significantly lower (more than 20% below normal), it may indicate a problem</li>
          </ul>

          <h3>Step 5: Check the Breakers</h3>
          <p>
            The voltage fluctuations that sometimes accompany outages can trip the protection
            breakers. Check:
          </p>
          <ul>
            <li>The inverter&apos;s dedicated breaker in your main electrical panel</li>
            <li>The battery breaker (if applicable)</li>
            <li>The solar production circuit breaker</li>
            <li>If any tripped, wait 5 minutes and turn it back on. If it trips again, do not insist: contact Kilowatt PR.</li>
          </ul>

          <h3>Step 6: Visual Inspection (After Storms)</h3>
          <p>
            If the outage was caused by a severe storm, hurricane, or strong weather event, do a
            visual inspection from the ground:
          </p>
          <ul>
            <li>Verify that the panels are in their normal position (no displacement)</li>
            <li>Look for debris or branches on the panels</li>
            <li>Check that the visible cables are not loose or damaged</li>
            <li>If you notice anything out of place, take photos and contact Kilowatt PR before attempting any repair</li>
          </ul>

          <h2>When to Call Kilowatt PR for Support</h2>

          <p>
            Most of the time, your system will reconnect without problems. But there are
            situations that require professional attention. Contact our support team at{' '}
            <strong>787-431-2275</strong> if:
          </p>

          <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <h3 className="font-bold text-red-800 mb-3">Signs That You Need Technical Support</h3>
            <ul className="space-y-2 text-sm text-red-900">
              <li>The inverter shows a red light or a persistent error code for more than 30 minutes</li>
              <li>The system does not reconnect to the grid after 30 minutes of restored service</li>
              <li>Daily production is 30% or more below normal with no apparent reason</li>
              <li>The battery does not hold a charge or does not recharge with the panels</li>
              <li>You hear buzzing, clicking, or unusual noises from the inverter or battery</li>
              <li>You see visible damage to panels, cables, or mounting structure</li>
              <li>You detect a burning smell near any system component</li>
              <li>The system breakers trip repeatedly</li>
            </ul>
          </div>

          <h2>Protect Your System: Preventive Recommendations</h2>

          <p>
            There are measures you can take before the next outage to protect your system and
            ease recovery:
          </p>

          <ul>
            <li><strong>Install a surge protector:</strong> Protects your inverter and electronics against voltage fluctuations when LUMA restores service.</li>
            <li><strong>Keep the monitoring app updated:</strong> Notifications alert you to problems before they get worse.</li>
            <li><strong>Know your system:</strong> Know where the inverter is, where the dedicated breakers are, and how to read the basic indicator lights.</li>
            <li><strong>Keep the inverter area clear:</strong> Good ventilation is key to performance, especially in the heat of Puerto Rico.</li>
            <li><strong>Schedule preventive maintenance:</strong> A well-maintained system recovers better after unexpected events.</li>
          </ul>

          <h2>For Those Who Do NOT Have Solar: How Your Experience Would Change</h2>

          <p>
            If you are reading this while waiting for LUMA to restore power, imagine what your
            life would be like with a solar system with a battery:
          </p>

          <ul>
            <li><strong>The power goes out and you do not notice:</strong> The battery activates in milliseconds. The refrigerator keeps running, the lights stay on, the internet stays connected.</li>
            <li><strong>No rush for fuel:</strong> You do not need to run out looking for gasoline for a generator. Your battery recharges on its own with the sun.</li>
            <li><strong>Total silence:</strong> No deafening generator noise. Your house is at peace while the neighbors struggle with their generators.</li>
            <li><strong>No health risks:</strong> Zero carbon monoxide, zero smoke, zero stored gasoline.</li>
            <li><strong>Real independence:</strong> If LUMA takes days to restore power, your system keeps producing and storing energy as long as there is sun.</li>
          </ul>

          <p>
            Kilowatt PR customers with a battery report that during the last prolonged outage,
            their homes operated normally while neighbors went days without electricity. That
            peace of mind is priceless, especially when you have elderly people, children, or
            medical equipment in the home.
          </p>

          <h2>Conclusion: Prepared for the Next Outage</h2>

          <p>
            LUMA outages are not going away anytime soon. What you can control is how they affect
            you. If you already have solar, follow the post-outage checklist to make sure your
            system operates at its best. If you do not have solar yet, every outage is a reminder
            of what you could avoid.
          </p>

          <p>
            At Kilowatt PR, with technicians and crews with over a decade of experience in Puerto
            Rico, we design systems that not only save you money: they give you real energy
            independence. And when LUMA fails, that independence is what makes the difference.
          </p>
        </div>

        <div className="mt-12 bg-solar-yellow/10 border border-solar-yellow/30 rounded-xl p-6 text-center">
          <p className="text-navy-dark font-bold text-lg mb-4">
            Tired of depending on LUMA? Quote your solar system with a battery today.
          </p>
          <a
            href="https://wa.me/17874312275?text=Hi%2C%20I%27m%20interested%20in%20a%20solar%20system%20with%20a%20battery%20so%20I%20don%27t%20depend%20on%20LUMA."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quote a Solar System on WhatsApp
          </a>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Questions About Outages and Your Solar System" />

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-navy-dark mb-4">Related Articles</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/en/blog/home-battery-backup-guide-puerto-rico', label: 'Battery Backup Guide' },
              { href: '/en/blog/solar-battery-vs-gas-generator', label: 'Battery vs Generator' },
              { href: '/en/blog/how-net-metering-works-puerto-rico', label: 'How Net Metering Works' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-solar-yellow font-medium hover:underline text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
