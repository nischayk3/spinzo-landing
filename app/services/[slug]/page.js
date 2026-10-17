import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SERVICE_LOCATIONS, CORE_SERVICE_AREAS } from "@/lib/locations";

const BASE = 'https://spinzonow.com';
const SAME_AS = [
  'https://www.wikidata.org/wiki/Q141685782',
  'https://spinzo.in',
  'https://play.google.com/store/apps/details?id=com.nischayk3.Spinit',
  'https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814'
];

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };

  const title = `${service.name} Bangalore | Spinzo`;
  return {
    title,
    description: service.description,
    alternates: { canonical: `${BASE}/services/${slug}` },
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} Bangalore | Spinzo`,
      description: service.description,
      url: `${BASE}/services/${slug}`,
      images: [{ url: service.image, width: 800, height: 600, alt: `${service.name} service Bangalore` }],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} Service`,
    serviceType: service.name,
    description: service.description,
    url: `${BASE}/services/${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Spinzo Laundry',
      alternateName: ['Spinzo', 'SpinZo', 'Spinzone Laundry'],
      url: BASE,
      telephone: '+917676878832',
      sameAs: SAME_AS,
    },
    areaServed: SERVICE_LOCATIONS.map((l) => ({ '@type': 'City', name: l.name, containedInPlace: { '@type': 'City', name: 'Bangalore' } })),
    offers: {
      '@type': 'Offer',
      price: service.priceValue,
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        unitText: service.priceUnit,
      },
    },
    hoursAvailable: 'Mo-Su 09:00-22:00',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: service.name, item: `${BASE}/services/${slug}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-b from-purple-50/60 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#994BFF] mb-3">
                Spinzo Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
                {service.h1 || `${service.name} in Bangalore`}
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed mb-4">{service.tagline}</p>
              <p className="text-zinc-600 leading-relaxed mb-6 max-w-2xl">{service.description}</p>

              <div className="flex flex-wrap gap-3">
                <span className="text-lg font-extrabold text-[#994BFF] bg-purple-50 border border-purple-100 px-4 py-2 rounded-xl">{service.price}</span>
                <span className="inline-flex items-center text-sm font-semibold text-zinc-600 bg-white px-4 py-2 rounded-xl border border-zinc-100">⏱ Turnaround: {service.turnaround}</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://spinzo.in/"
                  className="inline-flex items-center gap-2 bg-[#994BFF] hover:bg-[#8828FF] text-white rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
                >
                  Book a Pickup
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-14 md:py-18 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-8 font-display">What&apos;s included</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {service.includes.map((inc) => (
                <div key={inc} className="flex items-center gap-2 bg-purple-50/40 rounded-xl px-4 py-3 border border-purple-100/50 text-sm text-zinc-700">
                  <span className="w-2 h-2 rounded-full bg-[#994BFF] shrink-0" /> {inc}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1F0B3F] mt-14 mb-6 font-display">Best for</h2>
            <div className="flex flex-wrap gap-2">
              {service.bestFor.map((b) => (
                <span key={b} className="text-sm bg-white px-4 py-2 rounded-full border border-zinc-200 text-zinc-700">{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="py-14 bg-purple-50/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-2 text-center font-display">
              {service.name} Near You
            </h2>
            <p className="text-zinc-600 text-center mb-10 max-w-2xl mx-auto">
              We provide express {service.shortName.toLowerCase()} across South Bangalore. Select your neighborhood for local pricing, pickup times, and doorstep delivery.
            </p>

            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#994BFF] text-center mb-3">
                  Dedicated {service.shortName} Express Hubs (30-min pickup)
                </p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {SERVICE_LOCATIONS.filter(l => CORE_SERVICE_AREAS.includes(l.slug)).map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}/${service.slug}`}
                      className="px-4 py-2 rounded-full bg-white border border-purple-200 text-sm font-semibold text-zinc-800 hover:text-[#994BFF] hover:border-[#994BFF] hover:shadow-sm transition-all"
                    >
                      {service.shortName} in {l.name} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 text-center mb-3">
                  Also Serving These South Bangalore Neighborhoods
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SERVICE_LOCATIONS.filter(l => !CORE_SERVICE_AREAS.includes(l.slug)).map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="px-3.5 py-1.5 rounded-full bg-white/80 border border-zinc-200 text-xs font-medium text-zinc-600 hover:text-[#994BFF] hover:border-[#994BFF]/40 transition-all"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl font-bold text-[#1F0B3F] mb-8 font-display">Explore our other services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="px-5 py-2.5 bg-white rounded-full border border-zinc-200 text-zinc-700 hover:text-[#994BFF] hover:border-[#994BFF]/30 transition-all text-sm font-medium"
                >
                  {s.name} ({s.price})
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
