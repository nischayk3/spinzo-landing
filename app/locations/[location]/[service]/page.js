import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LocationHeroCTA } from "@/components/LocationHeroCTA";
import { SERVICE_LOCATIONS, CORE_SERVICE_AREAS, INTERSECTION_SERVICES, getLocationBySlug, hasIntersectionPage } from "@/lib/locations";
import { SERVICES, getServiceBySlug } from "@/lib/services";

export async function generateStaticParams() {
  const params = [];
  for (const location of CORE_SERVICE_AREAS) {
    for (const service of INTERSECTION_SERVICES) {
      params.push({ location, service });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { location, service } = await params;
  const loc = getLocationBySlug(location);
  const srv = getServiceBySlug(service);
  
  if (!loc || !srv) return { title: 'Not Found' };

  const rawDesc = `${srv.name} in ${loc.name}: ${loc.pickupTime || '30-min'} pickup, 6-hr delivery. ${srv.price}, no minimum. Serving ${loc.nearby.slice(0, 2).join(', ')}. Book Spinzo.`;
  const description = rawDesc.length > 155 ? rawDesc.substring(0, 152) + '...' : rawDesc;

  return {
    title: `${srv.name} Near Me in ${loc.name} | Spinzo`,
    description,
    alternates: {
      canonical: `https://spinzonow.com/locations/${location}/${service}`
    },
    openGraph: {
      title: `${srv.name} Service in ${loc.name} | Spinzo`,
      description: `Get ${srv.name.toLowerCase()} picked up in ${loc.pickupTime || '30 minutes'} in ${loc.name}. Fast delivery to your doorstep.`,
      url: `https://spinzonow.com/locations/${location}/${service}`,
      siteName: 'Spinzo',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://spinzonow.com/SpinZo.png',
          width: 512,
          height: 512,
          alt: `${srv.name} in ${loc.name} - Spinzo Laundry`,
        },
      ],
    },
  };
}

export default async function LocationServicePage({ params }) {
  const { location, service } = await params;
  const loc = getLocationBySlug(location);
  const srv = getServiceBySlug(service);

  if (!loc || !srv) {
    notFound();
  }

  const { name, nearby, landmarks, pickupTime, localReview } = loc;
  
  const customFaqs = [
    {
      question: `Do you provide ${srv.name} in ${name}?`,
      answer: `Yes! Spinzo provides specialized ${srv.name.toLowerCase()} across ${name}. Our pilots pick up your laundry directly from your doorstep within ${pickupTime || '30 minutes'} anywhere in ${name}.`
    },
    {
      question: `What is the price of ${srv.name} in ${name}?`,
      answer: `Our transparent price for ${srv.name} is ${srv.price}. Digital weighing is performed at your doorstep in ${name} with zero hidden pickup or surge charges.`
    },
    {
      question: `How fast is the turnaround for ${srv.name} in ${name}?`,
      answer: `The turnaround time for ${srv.name} is ${srv.turnaround}. We ensure professional cleaning and high-grade quality inspection before returning your items neatly packed to your home.`
    },
    {
      question: `Do you pick up from gated societies and apartments in ${name}?`,
      answer: `Yes, we regularly serve major apartments and gated communities in ${name}. Simply approve our pilot entry via MyGate, NoBrokerHood, or your society intercom when they arrive.`
    },
    {
      question: `Are my clothes washed separately?`,
      answer: `Absolutely. Spinzo has a strict zero-mixing policy. Your clothes are washed individually in dedicated commercial machines with hypoallergenic bio-detergents.`
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://spinzonow.com/locations/${location}/${service}#service`,
    name: `${srv.name} in ${name}, Bangalore`,
    description: `Professional ${srv.name.toLowerCase()} service in ${name}, Bangalore with ${pickupTime || '30-minute'} doorstep pickup.`,
    provider: {
      '@type': 'DryCleaningOrLaundry',
      '@id': 'https://spinzonow.com/#org',
      name: 'Spinzo',
      url: 'https://spinzonow.com',
      telephone: '+917676878832'
    },
    areaServed: {
      '@type': 'Place',
      name: `${name}, Bangalore`
    },
    offers: {
      '@type': 'Offer',
      price: srv.priceValue,
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        unitText: srv.priceUnit || 'item'
      }
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://spinzonow.com/service-areas' },
      { '@type': 'ListItem', position: 3, name: name, item: `https://spinzonow.com/locations/${location}` },
      { '@type': 'ListItem', position: 4, name: `${srv.name} in ${name}`, item: `https://spinzonow.com/locations/${location}/${service}` }
    ]
  };

  const otherServices = SERVICES.filter(s => s.slug !== service);

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main>
        {/* Breadcrumb Navigation */}
        <div className="pt-24 pb-2 bg-gradient-to-b from-[#994BFF]/5 to-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <nav className="flex items-center text-xs text-zinc-500 gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-[#994BFF] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/service-areas" className="hover:text-[#994BFF] transition-colors">Service Areas</Link>
              <span>/</span>
              <Link href={`/locations/${location}`} className="hover:text-[#994BFF] transition-colors">{name}</Link>
              <span>/</span>
              <span className="text-zinc-900 font-medium">{srv.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 bg-gradient-to-b from-transparent to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-[#994BFF] bg-purple-50 px-3.5 py-1.5 rounded-full mb-4 inline-block border border-purple-100">
                ⚡ {name} Hub • {pickupTime || '30-min'} Pickup Guarantee
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
                {srv.name} in {name}
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                Bangalore&apos;s fastest {srv.name.toLowerCase()} service right to your door. {srv.tagline}
              </p>
              
              {landmarks && (
                <p className="text-sm text-zinc-500 mb-6 bg-purple-50/50 p-3 rounded-xl border border-purple-100/60">
                  📍 <strong>Local coverage:</strong> Serving near {landmarks.join(', ')} and surrounding {name} streets with doorstep collection.
                </p>
              )}

              <LocationHeroCTA slug={location} name={name} />
              
              <div className="mt-8 flex flex-wrap gap-2">
                {srv.keywords.slice(0, 4).map((kw) => (
                  <span key={kw} className="text-xs text-zinc-500 bg-white px-2.5 py-1 rounded-md border border-zinc-200">
                    {kw} {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Specifications & Local Price Card */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-gradient-to-br from-purple-50/70 to-white rounded-3xl p-8 md:p-12 border border-purple-100 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#994BFF] mb-2 block">
                    Transparent Rate Card • {name}
                  </span>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4 font-display">
                    {srv.name} Pricing &amp; Service Standards
                  </h2>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    {srv.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-700">What&apos;s Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.includes.map((inc) => (
                        <div key={inc} className="flex items-center gap-2 text-sm text-zinc-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#994BFF] shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {srv.bestFor && (
                    <div className="pt-4 border-t border-purple-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">Ideal Garments:</span>
                      <div className="flex flex-wrap gap-2">
                        {srv.bestFor.map((item) => (
                          <span key={item} className="text-xs bg-white px-3 py-1 rounded-full border border-purple-100 text-zinc-700 font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-purple-100/80 shadow-md">
                  <div className="text-center pb-6 border-b border-zinc-100">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Starting Rate</span>
                    <div className="text-4xl font-extrabold text-[#1F0B3F] mt-1">{srv.price}</div>
                    <span className="text-xs text-zinc-500 mt-1 block">Free pickup &amp; delivery in {name}</span>
                  </div>
                  
                  <div className="py-6 space-y-3 text-sm">
                    <div className="flex justify-between items-center text-zinc-600">
                      <span>Pickup ETA:</span>
                      <strong className="text-zinc-900">{pickupTime || '30 mins'}</strong>
                    </div>
                    <div className="flex justify-between items-center text-zinc-600">
                      <span>Delivery Speed:</span>
                      <strong className="text-zinc-900">{srv.turnaround}</strong>
                    </div>
                    <div className="flex justify-between items-center text-zinc-600">
                      <span>Weighing / Tagging:</span>
                      <strong className="text-zinc-900">Digital at Doorstep</strong>
                    </div>
                    <div className="flex justify-between items-center text-zinc-600">
                      <span>Hygiene Standard:</span>
                      <strong className="text-[#994BFF]">100% Zero-Mixing</strong>
                    </div>
                  </div>

                  <a
                    href={`https://spinzo.in/?ref=${location}&service=${service}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-3 px-4 bg-[#994BFF] hover:bg-[#8828FF] text-white font-semibold rounded-xl transition-all shadow-md text-sm text-center"
                  >
                    Schedule {srv.shortName} in {name} &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Resident Testimonial */}
        {localReview && (
          <section className="py-8 bg-purple-50/30 border-y border-purple-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-purple-100 max-w-3xl mx-auto">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-700 rounded-full font-bold text-xl">
                  {localReview.name.charAt(0)}
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm mb-1">
                    ★★★★★
                  </div>
                  <p className="text-zinc-700 italic">&ldquo;{localReview.text}&rdquo;</p>
                  <p className="text-xs text-zinc-500 mt-1">— {localReview.name}, Verified {name} Customer</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How Spinzo Works */}
        <HowItWorks />

        {/* Tailored Neighborhood FAQ */}
        <FAQ customFaqs={customFaqs} />
        
        {/* Related Services in this Locality */}
        <section className="py-16 bg-gray-50 border-t border-zinc-200/60">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#994BFF] mb-2 block">
              Complete Ward Coverage
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 font-display">
              More Laundry &amp; Fabric Care Services in {name}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto mb-10 text-sm">
              All services include doorstep pickup in 30 minutes across {name}. Choose a service below to view local pricing.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
              {otherServices.map((s) => {
                const targetUrl = hasIntersectionPage(location, s.slug)
                  ? `/locations/${location}/${s.slug}`
                  : `/services/${s.slug}`;
                return (
                  <Link
                    key={s.slug}
                    href={targetUrl}
                    className="p-4 bg-white rounded-2xl border border-zinc-200 text-left hover:border-[#994BFF] hover:shadow-md transition-all group"
                  >
                    <span className="text-[11px] font-bold text-[#994BFF] block mb-1">{s.price}</span>
                    <h3 className="font-bold text-zinc-900 group-hover:text-[#994BFF] text-sm transition-colors">
                      {s.name} in {name}
                    </h3>
                    <span className="text-xs text-zinc-400 mt-2 inline-flex items-center gap-1 group-hover:text-[#994BFF]">
                      {hasIntersectionPage(location, s.slug) ? `View ${s.shortName} in ${name} →` : `View details →`}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Back to Location & Service Parents */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href={`/locations/${location}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-zinc-300 text-zinc-700 hover:text-[#994BFF] hover:border-[#994BFF] transition-all font-medium"
              >
                &larr; View all {name} Laundry Info
              </Link>
              <Link
                href={`/services/${service}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-zinc-300 text-zinc-700 hover:text-[#994BFF] hover:border-[#994BFF] transition-all font-medium"
              >
                Learn more about {srv.name} across Bangalore &rarr;
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
