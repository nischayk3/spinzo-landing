import { notFound } from 'next/navigation';
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { OurProcess } from "@/components/OurProcess";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LocationHeroCTA } from "@/components/LocationHeroCTA";
import { SERVICE_LOCATIONS, getLocationBySlug } from "@/lib/locations";
import { SERVICES, getServiceBySlug } from "@/lib/services";

export async function generateStaticParams() {
  const params = [];
  // For the top 6 core areas, we generate the service pages for ALL services
  const coreAreas = ['koramangala', 'hsr-layout', 'btm-layout', 'jayanagar', 'jp-nagar', 'bellandur'];
  const allServices = SERVICES.map(s => s.slug);
  
  for (const location of coreAreas) {
    for (const service of allServices) {
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

  return {
    title: `${srv.name} Near Me in ${loc.name} | Spinzo`,
    description: `Looking for ${srv.name.toLowerCase()} in ${loc.name}? Spinzo offers 30-min pickup and rapid delivery. ${srv.tagline} Serving ${loc.nearby.slice(0, 2).join(' and ')}.`,
    alternates: {
      canonical: `https://spinzonow.com/locations/${location}/${service}`
    },
    openGraph: {
      title: `${srv.name} Service in ${loc.name} | Spinzo`,
      description: `Get your ${srv.name.toLowerCase()} picked up in 30 minutes in ${loc.name}. Fresh clothes delivered to your door.`,
      url: `https://spinzonow.com/locations/${location}/${service}`,
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
      answer: `Yes, we offer premium ${srv.name.toLowerCase()} across ${name}. Our riders can pick up from your doorstep within 30 minutes.`
    },
    {
      question: `How much does ${srv.name} cost in ${name}?`,
      answer: `Our transparent pricing for ${srv.name} is ${srv.price}. There are no hidden pickup or delivery charges for ${name} residents.`
    },
    {
      question: `How long does ${srv.name} take?`,
      answer: `Our standard turnaround time for ${srv.name} is ${srv.turnaround}. We ensure high-quality processing before returning your items to ${name}.`
    },
    {
      question: `Do you pick up from gated societies in ${name}?`,
      answer: `Yes, we regularly serve major societies and apartments in ${name}. Just approve our rider entry via your society app (like MyGate or NoBrokerHood) when they arrive.`
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${srv.name} in ${name}`,
    description: `Professional ${srv.name.toLowerCase()} in ${name}, Bangalore.`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Spinzo'
    },
    areaServed: {
      '@type': 'Place',
      name: name
    },
    offers: {
      '@type': 'Offer',
      price: srv.priceValue,
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        unitText: srv.priceUnit
      }
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' },
      { '@type': 'ListItem', position: 2, name: name, item: `https://spinzonow.com/locations/${location}` },
      { '@type': 'ListItem', position: 3, name: srv.name, item: `https://spinzonow.com/locations/${location}/${service}` }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-[#994BFF] bg-[#994BFF]/5 px-3 py-1 rounded-full mb-4 inline-block">
                {name} • {pickupTime || '30-min'} Pickup
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
                {srv.name} in {name}
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                Fast, professional {srv.name.toLowerCase()} right to your doorstep. {srv.tagline}
              </p>
              
              {landmarks && (
                <p className="text-sm text-zinc-500 mb-6">
                  📍 Serving near {landmarks.join(', ')} and surrounding {name} areas.
                </p>
              )}

              <LocationHeroCTA slug={location} name={name} />
              
              <div className="mt-8 flex flex-wrap gap-2">
                {srv.keywords.slice(0, 4).map((kw) => (
                  <span key={kw} className="text-xs text-zinc-400 bg-white px-2.5 py-1 rounded-md border border-zinc-100">
                    {kw} {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Proof Section */}
        {localReview && (
          <section className="py-8 bg-purple-50/30 border-y border-purple-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-700 rounded-full font-bold text-xl">
                  {localReview.name.charAt(0)}
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm mb-1">
                    ★★★★★
                  </div>
                  <p className="text-zinc-700 italic">"{localReview.text}"</p>
                  <p className="text-xs text-zinc-500 mt-1">— {localReview.name}, {name} Resident</p>
                </div>
              </div>
            </div>
          </section>
        )}

        <HowItWorks />
        <Services />
        <FAQ customFaqs={customFaqs} />
        
        {/* Breadcrumb / Cross-linking */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
             <h2 className="text-xl font-bold text-zinc-900 mb-6 font-display">
                More Services in {name}
             </h2>
             <div className="flex flex-wrap justify-center gap-3">
               {SERVICES.filter(s => s.slug !== service).slice(0, 4).map((s) => (
                 <a
                   key={s.slug}
                   href={`/locations/${location}/${s.slug}`}
                   className="px-5 py-2.5 bg-white rounded-full border border-zinc-200 text-zinc-700 hover:text-[#994BFF] transition-all text-sm font-medium"
                 >
                   {s.name} in {name} &rarr;
                 </a>
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
