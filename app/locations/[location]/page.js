import { notFound } from 'next/navigation';
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { OurProcess } from "@/components/OurProcess";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import {
  SERVICE_LOCATIONS,
  getLocationBySlug,
} from "@/lib/locations";

const locationSpecificContent = {
  'jayanagar': {
    subtitle: 'Jayanagar is one of Bangalore\'s oldest and most well-planned neighborhoods. Spinzo brings premium laundry pickup and delivery right to your doorstep — whether you\'re in 3rd Block, 4th Block, or the quieter streets of Dollars Colony.',
    highlights: ['Family-friendly residential area with multi-generational households', 'Home to Jayanagar 4th Block shopping complex and commercial hubs', 'Close to BTM Layout, JP Nagar, and Wilson Garden'],
    nearbyDesc: 'serving Jayanagar 3rd & 4th Block, KR Garden, Dollars Colony, and surrounding areas',
  },
  'jp-nagar': {
    subtitle: 'JP Nagar is a sprawling residential locality popular with working professionals and families. Spinzo covers all phases of JP Nagar with 30-minute pickup and delivery within hours.',
    highlights: ['Large residential area with multiple phases (1st to 5th)', 'High concentration of working professionals and dual-income families', 'Adjacent to Jayanagar and close to BTM Layout'],
    nearbyDesc: 'serving all phases of JP Nagar including 1st through 5th Phase',
  },
  'btm-layout': {
    subtitle: 'BTM Layout is a bustling hub for tech professionals and students. Our 30-minute pickup guarantee is perfect for busy schedules — we pick up your laundry while you work.',
    highlights: ['Popular residential area near tech parks and offices', 'High density of working professionals and students', 'Excellent connectivity to Koramangala, JP Nagar, and HSR Layout'],
    nearbyDesc: 'serving BTM 1st & 2nd Stage, Kasuvenahalli, Srirampura, and nearby areas',
  },
  'koramangala': {
    subtitle: 'Koramangala is the heart of Bangalore\'s startup and tech scene. Spinzo is the perfect laundry partner for professionals who value their time.',
    highlights: ['Bangalore\'s most vibrant startup and restaurant hub', 'High density of young professionals and working couples', '80 Ft Road, Sony World Junction, and multiple commercial centres'],
    nearbyDesc: 'serving all 8 blocks of Koramangala, Jakkasandra, KHB Colony, and 80 Ft Road area',
  },
  'hsr-layout': {
    subtitle: 'HSR Layout is one of South Bangalore\'s most sought-after residential areas. Spinzo covers every sector with our fast 30-minute pickup service.',
    highlights: ['Well-planned layout with Sectors 1-7', 'Popular among tech professionals and families', 'Excellent social and dining scene makes residents busy and time-pressed'],
    nearbyDesc: 'serving all sectors of HSR Layout from Sector 1 to 7, plus SS Colony and Hosapalya',
  },
  'kudlu': {
    subtitle: 'Kudlu and HSR Extension are rapidly growing residential areas. Spinzo brings professional laundry care to this developing neighborhood with the same speed and quality.',
    highlights: ['Fast-growing residential extension off HSR Layout', 'Conveniently located near Hosur Main Road and Wipro Junction', 'Popular with families moving to South Bangalore'],
    nearbyDesc: 'serving Kudlu Main Road, Kudlu Gate, HSR Extension, Gottigere, and surrounding areas',
  },
  'bommanahalli': {
    subtitle: 'Bommanahalli is a key Southern suburb connecting Bangalore to Electronic City. Spinzo covers Bommanahalli and nearby Begur with our 30-minute pickup.',
    highlights: ['Strategic location on the Hosur Road corridor to Electronic City', 'Growing residential community with many new apartments', 'Close to industrial and IT zones'],
    nearbyDesc: 'serving Bommanahalli Main Road, Begur, Chowdeshwari Layout, and Devarachikkanna Layout',
  },
  'wilson-garden': {
    subtitle: 'Wilson Garden is a well-established neighborhood in South Bangalore known for its leafy streets and tight-knit community. Spinzo provides reliable laundry service to every home here.',
    highlights: ['Mature residential area with long-standing communities', 'Close to Lakkasandra, Shanti Nagar, and Jayanagar', 'Convenient central South Bangalore location'],
    nearbyDesc: 'serving Wilson Garden 1st & 2nd Stage, Lakkasandra, Saidulu Layout, and surroundings',
  },
  'shanti-nagar': {
    subtitle: 'Shanti Nagar is centrally located in South Bangalore, making it a prime spot for our rapid laundry pickup and delivery service.',
    highlights: ['Central South Bangalore location near major bus routes', 'Mix of residential and commercial establishments', 'Easy access to surrounding neighborhoods like Wilson Garden and Ashok Nagar'],
    nearbyDesc: 'serving Shanti Nagar Main Road, Lakshmi Road, and the area around Shanti Nagar Bus Stand',
  },
  'adugodi': {
    subtitle: 'Adugodi is a strategically located neighborhood in Central East Bangalore. Spinzo brings its premium laundry service to this bustling area.',
    highlights: ['Central location with proximity to major offices and commercial areas', 'Well-connected by main roads and public transport', 'Close to Kodihalli, C V Raman Nagar, and HAL area'],
    nearbyDesc: 'serving Adugodi Main Road, Kodihalli, and the broader Central East Bangalore area',
  },
  'sg-palya': {
    subtitle: 'SG Palya is a residential area in South Bangalore that we are proud to serve. Whether you need regular wash & fold or deep blanket cleaning, we handle it all.',
    highlights: ['Quiet residential area with family-centric community', 'Close to Madiwala, Tavarekere, and BTM Layout', 'Growing demand for professional laundry services'],
    nearbyDesc: 'serving SG Palya Main Road, Vishnu Garden, Muneshwara Layout, and Devarachikkanna Layout',
  },
  'tavarekere': {
    subtitle: 'Tavarekere is a well-connected locality in South Bangalore, conveniently situated between Madiwala and BTM Layout. Spinzo makes laundry effortless here.',
    highlights: ['Strategic location between Madiwala and BTM Layout', 'Residential area with good road connectivity', 'Close to major tech parks and offices'],
    nearbyDesc: 'serving Tavarekere Main Road, Devaiahnapalya, and surrounding areas near Madiwala',
  },
  'madiwala': {
    subtitle: 'Madiwala is one of South Bangalore\'s most well-known localities, famous for the Madiwala Lake and its bustling bus stand. Spinzo provides fast laundry service to this busy neighborhood.',
    highlights: ['One of the most recognized localities in South Bangalore', 'Major transport hub with Madiwala Bus Stand', 'Mix of residential homes, apartments, and commercial areas'],
    nearbyDesc: 'serving Madiwala Main Road, Bishop Cotton School Road, and the area around Madiwala Bus Stand',
  },
  's-r-layout': {
    subtitle: 'S R Layout is a peaceful residential locality in South Bangalore near Puttanna Garden. Spinzo brings its laundry service to this growing neighborhood.',
    highlights: ['Calm residential layout near Puttanna Garden', 'Close to Gurappanapalya and Roopena Agrahara', 'Growing area with increasing demand for doorstep services'],
    nearbyDesc: 'serving S R Layout, Puttanna Garden, Gurappanapalya, and Roopena Agrahara',
  },
  'harlur': {
    subtitle: 'Harlur is a rapidly growing residential belt off Sarjapur Road and HSR Layout. Busy professionals and families here count on Spinzo for 30-minute laundry pickup and delivery within hours.',
    highlights: ['Fast-growing residential area near HSR and Sarjapur Road', 'Popular with working professionals and young families', 'Close to Harlur Lake, Junnasandra, and Kudlu Gate'],
    nearbyDesc: 'serving Harlur Main Road, Harlur Lake Area, Junnasandra, and Kudlu Gate',
  },
  'begur': {
    subtitle: 'Begur is a key Southern suburb on the Hosur Road corridor linking Bangalore to Electronic City. Spinzo covers Begur and its surroundings with premium pickup and delivery.',
    highlights: ['Strategic location on the Sarjapur–Electronic City corridor', 'Growing residential community with many new apartments', 'Close to Gottigere, Nyanappanahalli, and Chikkanahalli'],
    nearbyDesc: 'serving Begur Main Road, Begur Hobli, Gottigere, and surrounding areas',
  },
  'sarjapur-road': {
    subtitle: 'Sarjapur Road is one of Bangalore\'s fastest-growing tech and residential corridors. From Sarjapur Junction to Devarabisanahalli, Spinzo brings same-day laundry pickup and delivery to this booming belt.',
    highlights: ['One of Bangalore\'s fastest-growing residential and IT corridors', 'High density of tech parks, apartments, and young professionals', 'Covers Carmelaram, Devarabisanahalli, Kodathi, and nearby areas'],
    nearbyDesc: 'serving Sarjapur Junction, Carmelaram, Devarabisanahalli, and Kodathi',
  },
  'electronic-city': {
    subtitle: 'Electronic City is home to some of India\'s largest IT campuses and tens of thousands of busy professionals. Spinzo delivers fast, premium laundry service right to your doorstep here.',
    highlights: ['One of India\'s largest IT employment hubs', 'Huge concentration of working professionals and hostels/PGs', 'Covers Phase 1 & 2, Neeladri Road, Konappana Agrahara'],
    nearbyDesc: 'serving Electronic City Phase 1 & 2, Neeladri Road, and Konappana Agrahara',
  },
  'bellandur': {
    subtitle: 'Bellandur is a thriving tech neighborhood along the Outer Ring Road, packed with working professionals and modern apartments. Spinzo provides 30-minute pickup and rapid delivery across Bellandur.',
    highlights: ['Major Outer Ring Road tech hub near Marathahalli and HSR', 'High density of working professionals and gated communities', 'Covers Bellandur Lake Area, Iblur Village, and HSR-adjacent zones'],
    nearbyDesc: 'serving Bellandur Outer Ring Road, Iblur Village, and the Bellandur Lake area',
  },
};

function getUniqueFAQs(slug, name) {
  return [
    {
      question: `Does Spinzo offer laundry pickup and delivery in ${name}?`,
      answer: `Absolutely! Spinzo provides free doorstep pickup and delivery across ${name}. Simply book through the app and our delivery partner will be at your location within 30 minutes. We collect your clothes, professionally clean them, and deliver them back fresh within hours.`
    },
    {
      question: `What laundry services are available in ${name}?`,
      answer: `Residents of ${name} can access our full range of services: Wash & Fold at ₹85/kg, Wash & Iron at ₹140/kg, Steam Ironing at ₹18/piece, and Blanket Wash starting at ₹299. All services include free pickup and delivery.`
    },
    {
      question: `How fast is the laundry delivery in ${name}?`,
      answer: `We deliver within 6-12 hours for Wash & Fold and Blanket Wash in ${name}. Wash & Iron and Steam Ironing are typically delivered within 24-48 hours. The entire process is trackable from our app.`
    },
    {
      question: `Which parts of ${name} does Spinzo cover?`,
      answer: `We cover ${name} comprehensively. Our service area includes all major blocks and roads. If you're unsure whether your specific location is covered, you can check instantly on our app by entering your address.`
    },
    {
      question: `How do I schedule a laundry pickup in ${name}?`,
      answer: `Scheduling is simple: download the Spinzo app from Google Play or the App Store, choose your service (Wash & Fold, Wash & Iron, Steam Ironing, or Blanket Wash), select your address in ${name}, and confirm your pickup. Our team arrives within 30 minutes.`
    },
  ];
}

function getNearbyLinks(slug) {
  const currentIndex = SERVICE_LOCATIONS.findIndex(l => l.slug === slug);
  const nearby = [];
  if (currentIndex > 0) nearby.push(SERVICE_LOCATIONS[currentIndex - 1]);
  if (currentIndex < SERVICE_LOCATIONS.length - 1) nearby.push(SERVICE_LOCATIONS[currentIndex + 1]);
  return nearby;
}

export async function generateStaticParams() {
  return SERVICE_LOCATIONS.map(l => ({ location: l.slug }));
}

export async function generateMetadata({ params }) {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) return { title: 'Location Not Found' };

  const locationName = loc.name;

  return {
    title: `${locationName} Laundry Service Near Me | Wash & Fold ₹85/kg | Spinzo`,
    description: `Looking for laundry service near ${locationName}, Bangalore? Spinzo offers 30-min pickup and delivery in hours. Wash & Fold ₹85/kg, Wash & Iron, Steam Ironing. Serving ${loc.nearby.slice(0, 3).join(', ')}. Free pickup.`,
    alternates: {
      canonical: `https://spinzonow.com/locations/${location}`
    },
    openGraph: {
      title: `Laundry Service in ${locationName} | Spinzo`,
      description: `Get your laundry picked up in 30 minutes in ${locationName}. Wash & Fold, Wash & Iron, Steam Ironing — fresh clothes delivered to your door.`,
      url: `https://spinzonow.com/locations/${location}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { location } = await params;
  const loc = getLocationBySlug(location);

  if (!loc) {
    notFound();
  }

  const { name, nearby, keywords } = loc;
  const content = locationSpecificContent[loc.slug] || {
    subtitle: `${name} is a vibrant neighborhood in South Bangalore that Spinzo proudly serves with premium laundry pickup and delivery.`,
    highlights: ['Residential area with busy professionals', 'Growing demand for convenient doorstep services', 'Part of Spinzo\'s expanding South Bangalore coverage'],
    nearbyDesc: `serving ${name} and its surrounding areas`,
  };
  const uniqueFAQs = getUniqueFAQs(loc.slug, name);
  const nearbyLocations = getNearbyLinks(loc.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['DryCleaningOrLaundry', 'LocalBusiness'],
    name: `Spinzo Laundry ${name}`,
    image: 'https://spinzonow.com/SpinZo.png',
    url: `https://spinzonow.com/locations/${loc.slug}`,
    telephone: '+917676878832',
    priceRange: '₹₹',
    areaServed: {
      '@type': 'City',
      name: name,
      containedInPlace: {
        '@type': 'City',
        name: 'Bangalore'
      }
    },
    serviceArea: {
      '@type': 'Place',
      name: nearby.slice(0, 5).join(', ')
    },
    description: `Professional laundry, dry cleaning, and ironing service in ${name}, Bangalore. 30 min pickup and 6 hour delivery.`
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: uniqueFAQs.slice(0, 4).map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' },
      { '@type': 'ListItem', position: 2, name: `Laundry Service in ${name}`, item: `https://spinzonow.com/locations/${loc.slug}` }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Navbar />
      <main>
        {/* Hero Section with location name */}
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#994BFF]/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#994BFF]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#994BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#994BFF] bg-[#994BFF]/5 px-3 py-1 rounded-full">Premium Laundry Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
                Laundry Service in {name}
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-4">
                {content.subtitle}
              </p>
              <p className="text-zinc-500">
                <span className="font-medium">📍 Serving {content.nearbyDesc}.</span>
              </p>

              {/* Key USPs strip */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="text-xs font-semibold text-zinc-600 bg-white px-3 py-1.5 rounded-full border border-purple-200 shadow-sm">⏱ 30-min pickup</span>
                <span className="text-xs font-semibold text-zinc-600 bg-white px-3 py-1.5 rounded-full border border-purple-200 shadow-sm">🚚 Free doorstep delivery</span>
                <span className="text-xs font-semibold text-zinc-600 bg-white px-3 py-1.5 rounded-full border border-purple-200 shadow-sm">📱 Track in app</span>
              </div>

              {/* Keywords + CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a
                  href={`https://spinzo.in/?ref=${loc.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#994BFF] text-white rounded-full font-semibold text-sm hover:bg-[#8828FF] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#994BFF]/20"
                >
                  Book Pickup in {name}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <div className="flex flex-wrap gap-2">
                  {keywords.slice(0, 3).map((kw) => (
                    <span key={kw} className="text-xs text-zinc-400 bg-white px-2.5 py-1 rounded-md border border-zinc-100">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Nearby areas card */}
            <div className="mt-10 p-5 bg-white rounded-2xl border border-purple-100/60 shadow-sm max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#994BFF] mb-3">
                Areas We Serve in {name}
              </p>
              <div className="flex flex-wrap gap-2">
                {nearby.slice(0, 6).map((area) => (
                  <span key={area} className="text-sm bg-purple-50 text-zinc-700 px-3 py-1.5 rounded-md border border-purple-100/50">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why This Area Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-6 font-display">
                Why {name} Residents Choose Spinzo
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.highlights.map((h, i) => (
                <div key={i} className="p-5 bg-purple-50/40 rounded-xl border border-purple-100/50 hover:border-[#994BFF]/20 transition-colors">
                  <p className="text-zinc-700 leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Location-specific pricing */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50/20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-2 text-center font-display">
              Laundry Service Prices in {name}
            </h2>
            <p className="text-zinc-500 text-center mb-10 max-w-2xl mx-auto">
              Transparent weight-based pricing. No hidden charges. Free pickup and delivery in {name}.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { service: 'Wash & Fold', price: '₹85/kg', badge: 'Most Popular' },
                { service: 'Wash & Iron', price: '₹140/kg', badge: null },
                { service: 'Steam Ironing', price: '₹18/pc', badge: 'Min 5 pcs' },
                { service: 'Blanket Wash', price: '₹299+', badge: 'Single/Double' },
              ].map((item) => (
                <div key={item.service} className="bg-white rounded-2xl p-5 border border-purple-100/40 shadow-sm text-center hover:shadow-md hover:border-[#994BFF]/20 transition-all duration-300">
                  <div className="text-xs font-bold text-[#994BFF] uppercase tracking-wider mb-1">{item.badge || ' '}</div>
                  <h3 className="font-bold text-zinc-900">{item.service}</h3>
                  <p className="text-2xl font-extrabold text-[#1F0B3F] mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Near Me SEO Block */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
            <p className="text-zinc-600 text-sm leading-relaxed">
              <strong>Looking for &ldquo;laundry service near me&rdquo; in {name}?</strong> You&apos;ve found it.
              Spinzo is the fastest laundry pickup and delivery service in {name}, Bangalore.
              We pick up your clothes within 30 minutes and deliver them fresh within hours.
              Whether you need Wash & Fold, Wash & Iron, Steam Ironing, or Blanket Wash —
              we handle everything with premium care. <strong>Free doorstep pickup and delivery</strong> across {name}.
            </p>
          </div>
        </section>

        <HowItWorks />
        <OurProcess />
        <Testimonials />

        {/* Location-specific FAQ */}
        <FAQ customFaqs={uniqueFAQs} />

        {/* Nearby Locations Internal Links */}
        {nearbyLocations.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 font-display text-center">
                Also Serving Nearby Areas
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyLocations.map((n) => (
                  <a
                    key={n.slug}
                    href={`/locations/${n.slug}`}
                    className="px-5 py-2.5 bg-white rounded-full border border-zinc-200 text-zinc-700 hover:text-[#994BFF] hover:border-[#994BFF]/30 transition-all text-sm font-medium"
                  >
                    Laundry Service in {n.name} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}