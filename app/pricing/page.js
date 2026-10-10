import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { PricingSection } from "@/components/PricingSection";
import { Check, Clock, ShieldCheck, Sparkles, Truck } from "lucide-react";

export const metadata = {
  title: 'Laundry & Dry Cleaning Prices in Bangalore (2026) | Spinzo — From ₹85/kg',
  description: 'Transparent laundry, dry cleaning, and ironing prices in Bangalore. Wash & Fold at ₹85/kg, Wash & Iron ₹140/kg, Steam Ironing ₹18/pc, Dry Cleaning from ₹79/pc. Free doorstep pickup across South Bangalore.',
  keywords: [
    'laundry cost Bangalore',
    'laundry charges per kg Bangalore',
    'wash and fold price per kg',
    'iron charges Bangalore',
    'how much does ironing cost',
    'ironing cost per shirt',
    'dry cleaning price list Bangalore',
    'blanket wash cost Bangalore'
  ],
  alternates: {
    canonical: 'https://spinzonow.com/pricing',
  },
  openGraph: {
    title: 'Spinzo Laundry Pricing Bangalore — Wash & Fold ₹85/kg, Iron ₹18/pc',
    description: '100% transparent weight-based laundry and dry cleaning pricing with free 30-minute pickup.',
    url: 'https://spinzonow.com/pricing',
  },
};

const detailedItemRates = [
  { category: 'Daily Laundry (Per Kg)', items: [
    { name: 'Wash & Fold (Daily Casuals, Gym Wear, Towels)', rate: '₹85 / kg', turnaround: '6–12 Hours' },
    { name: 'Wash & Iron (Formals, Office Shirts, Kurtas)', rate: '₹140 / kg', turnaround: '24–48 Hours' },
    { name: 'Premium Fabric Laundry (Silks, Linens, Delicates)', rate: '₹119 / kg', turnaround: '24–48 Hours' },
  ]},
  { category: 'Steam Ironing / Pressing (Per Piece)', items: [
    { name: 'Shirts & T-Shirts', rate: '₹18 / piece', turnaround: '12–24 Hours' },
    { name: 'Trousers, Jeans & Chinos', rate: '₹18 / piece', turnaround: '12–24 Hours' },
    { name: 'Kurtas & Kurtis', rate: '₹22 / piece', turnaround: '12–24 Hours' },
    { name: 'Sarees (Steam Press)', rate: '₹49 / piece', turnaround: '24 Hours' },
  ]},
  { category: 'Eco Dry Cleaning (Per Piece)', items: [
    { name: 'Men’s / Women’s Blazer', rate: '₹149 / piece', turnaround: '24–48 Hours' },
    { name: '2-Piece Suit (Coat + Trouser)', rate: '₹249 / set', turnaround: '48 Hours' },
    { name: 'Silk / Designer Saree', rate: '₹199 / piece', turnaround: '48 Hours' },
    { name: 'Winter Jacket / Overcoat', rate: '₹199 / piece', turnaround: '48 Hours' },
    { name: 'Sherwani / Heavy Lehenga', rate: '₹349 / set', turnaround: '48 Hours' },
  ]},
  { category: 'Home Linens & Footwear', items: [
    { name: 'Single Blanket / Comforter Deep Clean', rate: '₹299 / piece', turnaround: '24–48 Hours' },
    { name: 'Double Quilt / Comforter Deep Clean', rate: '₹399 / piece', turnaround: '24–48 Hours' },
    { name: 'Sneakers / Canvas Shoe Revival', rate: '₹199 / pair', turnaround: '24–48 Hours' },
    { name: 'Leather & Suede Shoe Restoration', rate: '₹249 / pair', turnaround: '48 Hours' },
  ]},
];

const pricingFaqs = [
  {
    q: 'How does per-kg laundry pricing work?',
    a: 'When our delivery partner arrives at your doorstep, your clothes are weighed directly in front of you using a certified digital scale. You only pay for the exact weight. No hidden weighing adjustments.'
  },
  {
    q: 'Are there any pickup or delivery charges?',
    a: 'No! Doorstep pickup and delivery are 100% free across all our South Bangalore service areas (Koramangala, HSR Layout, BTM Layout, Jayanagar, JP Nagar, and surroundings).'
  },
  {
    q: 'What is the minimum order value?',
    a: 'For Wash & Fold and Wash & Iron, the minimum load is 5 kg. For Steam Ironing, the minimum order is 5 pieces (with free pickup on 20+ pieces). For Dry Cleaning and Blanket Wash, there is no minimum quantity requirement.'
  },
  {
    q: 'How fast can I get my clothes back?',
    a: 'Wash & Fold has our fastest turnaround: delivered back in as little as 6 hours. Wash & Iron and Dry Cleaning take 24–48 hours to ensure meticulous pressing and inspection.'
  },
  {
    q: 'What happens if a garment is lost or damaged?',
    a: 'Spinzo provides a 100% safety guarantee. In the extremely rare event of any fabric damage, we offer compensation up to 2x the service value.'
  }
];

export default function PricingPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://spinzonow.com/pricing' }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-purple-50/60 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 shadow-sm border border-purple-200/60 px-4 py-1.5 text-xs font-semibold text-[#994BFF] mb-4">
              <Sparkles size={14} />
              100% Transparent Rates · No Hidden Costs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
              Simple, Honest Laundry &amp; Dry Cleaning Pricing
            </h1>
            <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Pay by the kilo or by the piece. Digital scale weighing at your doorstep, free pickup in 30 minutes, and delivery back in hours across South Bangalore.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-zinc-700">
              <div className="flex items-center gap-2">
                <Truck className="text-[#994BFF]" size={18} />
                <span>Free Doorstep Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-[#994BFF]" size={18} />
                <span>Pickup in 30 Mins</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#994BFF]" size={18} />
                <span>2x Damage Protection Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingSection />

        {/* Detailed Price Rate Card */}
        <section className="py-16 md:py-24 bg-white border-t border-purple-100/40">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#994BFF] mb-2 block font-sans">
                Full Rate Card
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900 font-display">
                Itemized Service Rates
              </h2>
              <p className="text-zinc-600 text-sm md:text-base mt-2">
                Clear prices for all garments, household woolens, and premium footwear.
              </p>
            </div>

            <div className="space-y-8">
              {detailedItemRates.map((cat) => (
                <div key={cat.category} className="bg-zinc-50/70 rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
                  <h3 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-200/80 flex items-center justify-between">
                    <span>{cat.category}</span>
                  </h3>
                  <div className="divide-y divide-zinc-200/60">
                    {cat.items.map((item) => (
                      <div key={item.name} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                        <div>
                          <p className="text-sm font-medium text-zinc-800">{item.name}</p>
                          <p className="text-xs text-zinc-500">Typical turnaround: {item.turnaround}</p>
                        </div>
                        <span className="text-sm font-bold text-[#994BFF] bg-purple-50 px-3 py-1 rounded-lg border border-purple-100/80 self-start sm:self-center">
                          {item.rate}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-16 md:py-20 bg-purple-50/30 border-t border-purple-100/50">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 font-display">
                Pricing Frequently Asked Questions
              </h2>
              <p className="text-sm md:text-base text-zinc-600 mt-2">
                Everything you need to know about billings, weights, and payments.
              </p>
            </div>

            <div className="space-y-4">
              {pricingFaqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-6 border border-purple-100/70 shadow-sm">
                  <h3 className="text-base font-bold text-zinc-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
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
