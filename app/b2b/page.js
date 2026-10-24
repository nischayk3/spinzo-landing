import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SERVICE_LOCATIONS } from "@/lib/locations";

export const metadata = {
  title: 'B2B & Bulk Laundry Services in South Bangalore | Hotels, PGs, Gyms, Salons',
  description: 'Commercial laundry for PGs, co-living spaces, Airbnbs, hotels, gyms, and salons in Koramangala, HSR, BTM, Jayanagar & JP Nagar. Volume discounts, scheduled pickups, dedicated account manager.',
  keywords: ['hotel laundry services near me', 'commercial laundry service bangalore', 'bulk laundry service', 'b2b laundry bangalore', 'pg laundry service bangalore', 'linen service bangalore'],
  alternates: {
    canonical: 'https://spinzonow.com/b2b'
  },
  openGraph: {
    title: 'Bulk & Commercial Laundry — South Bangalore | Spinzo',
    description: 'Reliable bulk laundry for PGs, Airbnbs, gyms, and salons across BTM, HSR, Koramangala, and 16 more locations. Free scheduled pickups.',
    url: 'https://spinzonow.com/b2b',
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer bulk laundry services for PGs in Bangalore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Spinzo provides weekly bulk laundry plans for hostels and PGs across South Bangalore. We handle bedsheets, pillow covers, and student laundry with scheduled pickups and volume-based pricing.' }
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve for B2B laundry in Bangalore?',
      acceptedAnswer: { '@type': 'Answer', text: `We serve all 19 South Bangalore neighborhoods including Koramangala, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Silk Board, Bellandur, Electronic City, Sarjapur Road, and 11 more areas.` }
    },
    {
      '@type': 'Question',
      name: 'Do you offer commercial laundry for Airbnbs and hotels?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Premium wash and press for white linens, towels, and duvets. We help Airbnbs and serviced apartments maintain 5-star hygiene standards with scheduled linen exchange.' }
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for B2B laundry?',
      acceptedAnswer: { '@type': 'Answer', text: 'B2B plans start at 50 kg/week for regular bulk accounts. We offer custom pricing based on volume, frequency, and service type. Contact us via WhatsApp for a quote.' }
    },
  ]
};

const areaList = SERVICE_LOCATIONS.map(l => l.name).join(', ');

export default function B2BPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-[#994BFF] bg-[#994BFF]/5 px-3 py-1 rounded-full mb-4 inline-block">
                For Businesses & Properties
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
                Bulk & Commercial Laundry for South Bangalore Businesses
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                Reliable, high-quality linen and bulk laundry for PGs, co-living spaces, Airbnbs, hotels, gyms, and salons. We handle the laundry so your business stays guest-ready — with scheduled pickups, commercial-grade cleaning, and volume discounts.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917676878832?text=Hi,%20I%20am%20looking%20for%20B2B%20laundry%20services%20for%20my%20business." target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 text-sm font-semibold text-white bg-[#1F0B3F] hover:bg-[#2d125c] rounded-full shadow-lg transition-all inline-flex items-center gap-2">
                  Get a Quote on WhatsApp →
                </a>
                <a href="tel:+917676878832"
                   className="px-6 py-3 text-sm font-semibold text-zinc-700 bg-white border border-zinc-200 hover:border-[#994BFF]/30 rounded-full transition-all">
                  Call +91 76768 78832
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-10 text-center font-display">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Hostels & PGs</h3>
                <p className="text-zinc-600 text-sm">Weekly bulk plans for bedsheets, pillow covers, and student laundry. Ensure hygiene compliance and attract better tenants with professional linen management.</p>
                <p className="text-xs text-[#994BFF] font-semibold mt-3">✓ Scheduled weekly pickups · Bulk rates from 50+ kg/week</p>
              </div>
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Airbnbs & Serviced Apartments</h3>
                <p className="text-zinc-600 text-sm">Premium wash and press for white linens, towels, and duvets. Linen exchange program available — we deliver fresh while collecting used.</p>
                <p className="text-xs text-[#994BFF] font-semibold mt-3">✓ Linen exchange · Hotel-grade pressing · 24-hr turn</p>
              </div>
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Gyms & Fitness Studios</h3>
                <p className="text-zinc-600 text-sm">Daily or alternate-day towel service. Commercial-grade cleaning removes sweat, bacteria, and odor. Towels returned fresh and folded.</p>
                <p className="text-xs text-[#994BFF] font-semibold mt-3">✓ Daily pickup option · Anti-bacterial wash · Bulk towel rates</p>
              </div>
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Salons & Spas</h3>
                <p className="text-zinc-600 text-sm">Fresh towels, robes, and linen on a recurring schedule. Stain-specific treatment for salon chemicals and dyes. Hygienically sealed packaging per use.</p>
                <p className="text-xs text-[#994BFF] font-semibold mt-3">✓ Chemical-safe wash · Separate cycles · Sealed delivery</p>
              </div>
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Corporate Cafeterias</h3>
                <p className="text-zinc-600 text-sm">Aprons, table linens, and kitchen towels. Scheduled twice-weekly pickup and delivery with dedicated account management.</p>
                <p className="text-xs text-[#994BFF] font-semibold mt-3">✓ Commercial-grade detergents · Scheduled exchange</p>
              </div>
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Small Hotels & Boutique Stays</h3>
                <p className="text-zinc-600 text-sm">Full linen management — bed sheets, pillow covers, towels, bath mats. 24-hour turnaround with hotel-grade pressing and folding.</p>
                <p className="text-xs text-[#994BFF] font-semibold mt-3">✓ 24-hr TAT · Hotel-grade finish · Linen inventory mgmt</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
             <h2 className="text-3xl font-bold text-[#1F0B3F] mb-8 text-center font-display">
              Why Partner With Spinzo?
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Dedicated Account Manager</h4>
                  <p className="text-sm text-zinc-600">Single point of contact for priority scheduling, escalations, and custom requirements.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Volume Discounts</h4>
                  <p className="text-sm text-zinc-600">Custom pricing from ₹65/kg for bulk (50+ kg/week) vs our standard ₹85/kg. Savings of 25%.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Free Scheduled Pickups</h4>
                  <p className="text-sm text-zinc-600">We align our logistics with your operations — daily, alternate-day, or weekly as per your volume.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Commercial-Grade Cleaning</h4>
                  <p className="text-sm text-zinc-600">Industrial stain removal with fabric-safe detergents. Anti-bacterial treatment available for gyms and salons.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-zinc-900">6-Hour Express Available</h4>
                  <p className="text-sm text-zinc-600">Need linen turned around same-day? Our express bulk service delivers back in 6 hours for urgent needs.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">6</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Covering 19 South Bangalore Locations</h4>
                  <p className="text-sm text-zinc-600">From Koramangala to Electronic City, BTM to Bellandur — if it&apos;s South Bangalore, we service it.</p>
                </div>
              </div>
            </div>

            {/* Coverage List */}
            <div className="mt-10 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-[#1F0B3F] mb-4 text-center font-display">Service Coverage</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {SERVICE_LOCATIONS.map(l => (
                  <Link key={l.slug} href={`/locations/${l.slug}`}
                        className="text-xs px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-zinc-600 hover:text-[#994BFF] hover:border-[#994BFF]/40 transition-colors">
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50/30 text-center">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-4 font-display">
              Ready to Simplify Your Laundry Operations?
            </h2>
            <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
              Get a custom quote for your business in under 5 minutes. We&apos;ll tailor a plan to your volume, frequency, and service needs.
            </p>
            <a href="https://wa.me/917676878832?text=Hi,%20I%20am%20looking%20for%20B2B%20laundry%20services%20for%20my%20business." target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F0B3F] text-white font-semibold rounded-full hover:bg-[#2d125c] shadow-lg transition-all">
              Get a Quote on WhatsApp →
            </a>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}