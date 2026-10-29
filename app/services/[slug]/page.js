import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SERVICE_LOCATIONS, CORE_SERVICE_AREAS, INTERSECTION_SERVICES, hasIntersectionPage } from "@/lib/locations";

// Speed benchmark table — same data as location pages, shared across all service pages.
const SPEED = [
  { rank: 1, name: 'Spinzo', pickup: '30 min', delivery: '6–12 hours', ours: true },
  { rank: 2, name: 'Fab Fresh', pickup: 'Scheduled', delivery: '4–5 hours', note: 'Silk Board only' },
  { rank: 3, name: 'Tumbledry', pickup: 'Scheduled', delivery: '24 hours' },
  { rank: 4, name: 'UClean', pickup: 'Scheduled', delivery: '24–48 hours' },
  { rank: 5, name: 'DhobiLite', pickup: 'Scheduled', delivery: '48 hours' },
  { rank: 6, name: 'BumbleDry', pickup: 'Scheduled', delivery: '2–3 days' },
  { rank: 7, name: 'LaundroKart', pickup: 'Scheduled', delivery: '4–5 days' },
  { rank: 8, name: 'Washho', pickup: 'Scheduled', delivery: '72 hours' },
];

// Per-service SEO content blocks — adds ~150 words of unique copy per page
const SERVICE_CONTENT = {
  'wash-and-fold': {
    seoParagraph: 'Wash & Fold is Spinzo\'s most popular service, and for good reason. It\'s the simplest way to handle everyday laundry — we wash your clothes in bio-degradable detergent, tumble dry them with fabric care, and return them neatly folded. No sorting, no timing, no trip to the laundromat. Just schedule a pickup and we handle the rest within 6-12 hours.',
    faq: [
      { q: 'What is wash and fold laundry service?', a: 'Wash & Fold is exactly what it sounds like: we collect your dirty laundry, wash and dry each batch separately, then fold everything and deliver it back. No ironing — just clean, neatly folded clothes ready to wear or put away. Starting at ₹85/kg with free pickup.' },
      { q: 'How much does wash and fold cost in Bangalore?', a: 'Spinzo offers Wash & Fold at ₹85/kg — one of the most competitive rates in Bangalore for professional laundry with free doorstep pickup and 6-hour delivery.' },
      { q: 'Is wash and fold cheaper than wash and iron?', a: 'Yes. Wash & Fold at ₹85/kg is significantly cheaper than Wash & Iron at ₹140/kg because there\'s no pressing involved. For t-shirts, jeans, gym wear, and towels, Wash & Fold is the right choice.' },
    ],
  },
  'wash-and-iron': {
    seoParagraph: 'Wash & Iron combines thorough machine washing with professional steam pressing — your clothes come back clean, pressed, and ready to wear. This is the service of choice for office-goers who need crisp formals, and for anyone who wants the convenience of outsourcing laundry without the compromise of handling ironing themselves.',
    faq: [
      { q: 'What is wash and iron laundry service?', a: 'Wash & Iron includes both machine washing and professional steam ironing. Your clothes are washed, dried, pressed with a steam iron, and neatly folded or hung. Ideal for office shirts, kurtas, formals, and pants.' },
      { q: 'How much does wash and iron cost in Bangalore?', a: 'Spinzo offers Wash & Iron at ₹140/kg with a minimum 5 kg load. Free 30-minute doorstep pickup included across South Bangalore.' },
    ],
  },
  'steam-ironing': {
    seoParagraph: 'Steam Ironing is the modern alternative to the local istri shop. Our commercial steam presses run at the right temperature for every fabric type — no coal iron shine, no burnt collars, no crushed buttons. We pick up your clothes from your doorstep and return them crisp within 12-24 hours. Free pickup on 20+ pieces.',
    faq: [
      { q: 'What is steam ironing vs regular ironing?', a: 'Steam ironing uses pressurised steam to remove wrinkles without direct contact between the iron plate and fabric. This means no shine marks on dark trousers, no burnt collars, and a crisper finish that lasts longer than dry ironing.' },
      { q: 'How much does steam ironing cost per piece?', a: 'Spinzo charges ₹18 per piece for shirts and trousers, ₹22 for kurtas, and ₹49 for sarees. Minimum order 5 pieces, free pickup on 20+ pieces.' },
    ],
  },
  'dry-cleaning': {
    seoParagraph: 'Dry cleaning requires specialised solvents and experienced handling — not something every laundry service does well. At Spinzo, every dry cleaning garment goes through pre-inspection, stain spotting, chemical-safe solvent cleaning, and a gentle steam press finish. We handle silk sarees, Kanjeevarams, blazers, sherwanis, and heavy lehengas with individual care.',
    faq: [
      { q: 'What is dry cleaning and how is it different from washing?', a: 'Dry cleaning uses chemical solvents instead of water to clean delicate fabrics that would shrink or get damaged in a machine wash. It\'s the recommended method for silk, wool, suits, and heavily embellished garments.' },
      { q: 'What is the price of dry cleaning in Bangalore?', a: 'Spinzo offers dry cleaning from ₹79 per piece for basic items, ₹149 for blazers, ₹199 for silk sarees and winter jackets, ₹249 for 2-piece suits, and ₹349 for heavy lehengas and sherwanis.' },
    ],
  },
  'blanket-wash': {
    seoParagraph: 'Blankets and comforters need special handling — they\'re bulky, absorb a lot of water, and can lose their shape in a standard wash cycle. Spinzo uses commercial-grade machines with gentle drum motions designed specifically for heavy bedding. Your blanket comes back clean, deodorised, and fresh without being matted or misshapen.',
    faq: [
      { q: 'How much does blanket washing cost in Bangalore?', a: 'Spinzo charges ₹299 for a single blanket/comforter, ₹399 for double/queen-size. 24-48 hour turnaround with free pickup.' },
      { q: 'Can you wash comforters and quilts?', a: 'Yes. Our commercial machines handle all bedding including comforters, quilts, duvets, and throws. We use gentle wash cycles that protect the filling and fabric.' },
    ],
  },
  'shoe-cleaning': {
    seoParagraph: 'Shoe cleaning is one of those tasks that\'s easy to put off but makes a huge difference to how your footwear looks and lasts. Spinzo cleans sneakers, leather shoes, canvas, suede, and boots — each pair gets cleaned by material type, deodorised, and hand-finished. Free pickup and delivery included.',
    faq: [
      { q: 'How much does shoe cleaning cost in Bangalore?', a: 'Spinzo offers shoe cleaning from ₹199 per pair for sneakers and canvas, ₹249 for leather and suede. 24-48 hour turnaround with free doorstep pickup.' },
      { q: 'Do you clean all types of shoes?', a: 'Yes — sneakers, canvas shoes, leather shoes, suede boots, sandals, and sports shoes. Each pair is treated based on the material type for optimal results.' },
    ],
  },
  'premium-laundry': {
    seoParagraph: 'Premium Laundry is our hand-finished service for the clothes you care about most — formal suits, silk blouses, linen shirts, and delicate fabrics that need individual attention. Every garment is processed separately with specialised products and finished by hand. If it\'s too nice for a standard wash, this is the service you need.',
    faq: [
      { q: 'What is premium laundry service?', a: 'Premium Laundry is a hand-finished garment care service that treats each item individually. Unlike standard Wash & Fold where we batch similar items, premium laundry uses separate processing, specialised products, and hand finishing for delicates and formalwear.' },
      { q: 'How is premium laundry different from regular washing?', a: 'Premium laundry costs ₹119/kg (vs ₹85/kg for Wash & Fold) because garments are processed individually, not batched. Each piece gets specialised product treatment and a hotel-grade hand finish.' },
    ],
  },
  'express-laundry': {
    seoParagraph: 'Express Same-Day Laundry is our emergency service — when you forgot about the trip tomorrow, or you need that specific shirt for tonight. We guarantee 30-minute pickup and delivery back within 6-8 hours. Priority processing means your order goes to the front of the queue, washed, dried, and delivered the same day.',
    faq: [
      { q: 'What is express laundry service?', a: 'Express same-day laundry is an emergency service with guaranteed 30-minute pickup and 6-hour delivery. Ideal for last-minute trips, unexpected events, or when you simply forgot to do laundry.' },
      { q: 'How much does express laundry cost?', a: 'Express Same-Day Laundry is ₹149/kg. This includes priority 30-minute pickup, express wash cycle, and priority delivery within 6-8 hours.' },
    ],
  },
};

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
  const description = service.description.length > 155
    ? service.description.substring(0, 152) + '...'
    : service.description;

  return {
    title,
    description,
    alternates: { canonical: `${BASE}/services/${slug}` },
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} Bangalore | Spinzo`,
      description,
      url: `${BASE}/services/${slug}`,
      siteName: 'Spinzo',
      locale: 'en_IN',
      type: 'website',
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

  const seoContent = SERVICE_CONTENT[slug];
  const faqLd = seoContent ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoContent.faq.map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    })),
  } : null;

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
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

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

              <div className="mt-8 flex flex-col items-start gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#994BFF] bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
                  🎉 ₹300 off your first order — code <strong className="text-[#1F0B3F]">SPINZO300</strong>
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://spinzonow.onelink.me/SVxb/89uz4xf3"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-appsflyer-link="true"
                    className="store-download-btn inline-flex items-center gap-2 bg-[#994BFF] hover:bg-[#8828FF] text-white rounded-xl px-6 py-3 text-sm font-bold shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    📱 Download Spinzo App
                  </a>
                  <a
                    href="https://spinzo.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-zinc-900 border border-purple-200 hover:bg-purple-50 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-all"
                  >
                    🌐 Book on Web (No App) &rarr;
                  </a>
                </div>
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

        {/* SEO Content Block */}
        {seoContent && (
          <section className="py-14 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-4 text-center font-display">
                Why Choose Spinzo for {service.name} in Bangalore
              </h2>
              <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                {seoContent.seoParagraph}
              </p>
            </div>
          </section>
        )}

        {/* Speed Comparison Table — shared across all pages */}
        <section className="py-14 bg-gradient-to-b from-purple-50/30 to-white border-y border-purple-100">
          <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#994BFF] mb-3">
              Speed Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-2 font-display">
              How Bangalore Laundry Services Compare
            </h2>
            <p className="text-zinc-500 text-sm mb-8 max-w-xl mx-auto">
              Pickup-to-delivery turnaround for standard {service.shortName.toLowerCase()}. Verified against public listings (Oct 2026).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full max-w-2xl mx-auto text-sm">
                <thead>
                  <tr className="border-b-2 border-purple-200">
                    <th className="py-3 px-4 text-left font-bold text-zinc-500 text-xs uppercase tracking-wider">Rank</th>
                    <th className="py-3 px-4 text-left font-bold text-zinc-500 text-xs uppercase tracking-wider">Service</th>
                    <th className="py-3 px-4 text-left font-bold text-zinc-500 text-xs uppercase tracking-wider">Pickup</th>
                    <th className="py-3 px-4 text-left font-bold text-zinc-500 text-xs uppercase tracking-wider">Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  {SPEED.map((s) => (
                    <tr
                      key={s.name}
                      className={`border-b border-gray-100 ${s.ours ? 'bg-purple-50 font-semibold' : ''}`}
                    >
                      <td className="py-3 px-4 text-zinc-400 text-xs">
                        {s.ours ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#994BFF] text-white text-xs font-bold">{s.rank}</span>
                        ) : (s.rank)}
                      </td>
                      <td className="py-3 px-4 text-left">
                        <span className={s.ours ? 'text-[#994BFF] font-bold' : 'text-zinc-700'}>{s.name}</span>
                        {s.note && <span className="text-xs text-zinc-400 ml-1">({s.note})</span>}
                      </td>
                      <td className="py-3 px-4 text-zinc-600">{s.pickup}</td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${s.ours ? 'text-green-600' : 'text-zinc-600'}`}>{s.delivery}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-400 mt-6 max-w-lg mx-auto">
              Spinzo is 4–20× faster than every on-demand laundry service in Bangalore.
            </p>
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
                  {SERVICE_LOCATIONS.filter(l => CORE_SERVICE_AREAS.includes(l.slug) && hasIntersectionPage(l.slug, service.slug)).map((l) => (
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
