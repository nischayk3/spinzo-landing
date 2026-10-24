import { SERVICES } from "@/lib/services";
import { SERVICE_LOCATIONS } from "@/lib/locations";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhySpinzo } from "@/components/WhySpinzo";
import { Services } from "@/components/Services";
import { PricingSection } from "@/components/PricingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

// Auto-generate ItemList schema from service catalogue — stays in sync as services evolve.
const SERVICE_LIST_ITEMS = SERVICES.map((s, i) => ({
  '@type': 'Service',
  position: i + 1,
  name: `${s.name} Service`,
  description: s.description,
  provider: { '@type': 'LocalBusiness', name: 'Spinzo' },
  areaServed: SERVICE_LOCATIONS.map(l => l.name),
  offers: {
    '@type': 'Offer',
    price: String(s.priceValue),
    priceCurrency: 'INR',
    ...(s.priceUnit ? { priceSpecification: { '@type': 'UnitPriceSpecification', unitText: s.priceUnit } } : {}),
  },
}));

export default function Home() {
  const areaNames = SERVICE_LOCATIONS.slice(0, 6).map(l => l.name).join(', ') + ' and more';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    name: 'Spinzo Laundry',
    alternateName: ['Spinzo', 'SpinZo', 'Spinzone Laundry', 'Spinzo Laundry Bangalore'],
    image: 'https://spinzonow.com/SpinZo.png',
    url: 'https://spinzonow.com',
    telephone: '+917676878832',
    priceRange: '₹₹',
    areaServed: SERVICE_LOCATIONS.map(l => ({
      '@type': 'City',
      name: l.name,
      containedInPlace: { '@type': 'City', name: 'Bangalore' }
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9187,
      longitude: 77.6101
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    description: `Premium laundry, dry cleaning, and ironing service in Bangalore. 30-min pickup and 6-hour delivery across ${SERVICE_LOCATIONS.length} South Bangalore neighborhoods including ${areaNames}.`,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '22:00' },
    ],
    sameAs: [
      'https://www.wikidata.org/wiki/Q141685782',
      'https://spinzo.in',
      'https://play.google.com/store/apps/details?id=com.nischayk3.Spinit',
      'https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814'
    ]
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "How does Spinzo's laundry service work?",
        acceptedAnswer: { '@type': 'Answer', text: 'Schedule a pickup via the app. We collect your clothes in as little as 30 minutes, professionally clean them, and deliver them back fresh within hours.' }
      },
      {
        '@type': 'Question',
        name: 'Which areas does Spinzo serve?',
        acceptedAnswer: { '@type': 'Answer', text: `We serve ${SERVICE_LOCATIONS.length} neighborhoods across South Bangalore including ${SERVICE_LOCATIONS.map(l => l.name).join(', ')}.` }
      },
      {
        '@type': 'Question',
        name: 'What laundry services do you offer?',
        acceptedAnswer: { '@type': 'Answer', text: 'We offer Wash & Fold, Wash & Iron, Steam Ironing, Dry Cleaning, Blanket Wash, and Shoe Cleaning. All services include free doorstep pickup and delivery across South Bangalore.' }
      },
      {
        '@type': 'Question',
        name: 'How fast is laundry pickup and delivery?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pickup is within 30 minutes. Delivery is within 6 hours for Wash & Fold and within 24-48 hours for Wash & Iron.' }
      },
      {
        '@type': 'Question',
        name: 'What if my clothes get damaged?',
        acceptedAnswer: { '@type': 'Answer', text: 'We have a 100% safety guarantee. In the rare event of any damage, we provide compensation up to 2x the service value.' }
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: { '@type': 'Answer', text: 'We accept UPI, GPay, Paytm, cards, and cash on delivery.' }
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICE_LIST_ITEMS
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhySpinzo />
        <Services />
        <PricingSection />
        <HowItWorks />
        <Testimonials />
        <FAQ />

        {/* Service Areas — SEO geo-signal */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[#994BFF] font-bold uppercase tracking-widest text-sm mb-3">
              Serving Across South Bangalore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F0B3F] mb-6 font-display">
              Laundry Pickup &amp; Delivery Near You
            </h2>

            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {SERVICES.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-sm font-semibold text-[#994BFF] hover:bg-[#994BFF] hover:text-white transition-all duration-200"
                >
                  {s.name}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 my-2">
              {SERVICE_LOCATIONS.map((l) => (
                <a
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-purple-100 text-sm font-medium text-zinc-600 hover:text-[#994BFF] hover:border-[#994BFF]/40 hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  {l.name}
                  <svg className="w-3 h-3 text-zinc-300 group-hover:text-[#994BFF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#994BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                30-minute pickup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#994BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m1-1a1 1 0 011-1m3 1a1 1 0 013 0v2h2a1 1 0 011 1v1M9 20a2 2 0 100-4 2 2 0 000 4zm9 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
                6-hour delivery
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#994BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.6a1 1 0 00.9 1.4H19M9 17a1 1 0 110 2 1 1 0 010-2zm9 0a1 1 0 110 2 1 1 0 010-2z" /></svg>
                Free doorstep service
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#994BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Live order tracking
              </span>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
