import { SERVICES } from "@/lib/services";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = {
  title: 'Ironing Prices Bangalore: ₹18/Shirt, ₹49/Saree — Free Pickup',
  description: 'Steam ironing charges in Bangalore: ₹18 per shirt/trouser, ₹22 kurta, ₹49 saree. Free 30-min doorstep pickup. No minimum on 20+ pieces. Professional steam press.',
  alternates: { canonical: 'https://spinzonow.com/services/ironing-prices' },
  openGraph: {
    title: 'Ironing Prices in Bangalore — ₹18/shirt, Free Pickup | Spinzo',
    description: 'Complete ironing price list for Bangalore: per-piece steam ironing rates, istri charges comparison vs local dhobi shops, and doorstep service.',
    url: 'https://spinzonow.com/services/ironing-prices',
    siteName: 'Spinzo',
    locale: 'en_IN',
    type: 'website',
  },
};

const IRONING_RATES = [
  { garment: 'Shirts & T-Shirts', ourRate: '₹18/piece', localRate: '₹10–15/piece', turnaround: '12–24 hrs' },
  { garment: 'Trousers, Jeans & Chinos', ourRate: '₹18/piece', localRate: '₹12–15/piece', turnaround: '12–24 hrs' },
  { garment: 'Kurtas & Kurtis', ourRate: '₹22/piece', localRate: '₹15–20/piece', turnaround: '12–24 hrs' },
  { garment: 'Sarees (Steam Press)', ourRate: '₹49/piece', localRate: '₹30–50/piece', turnaround: '24 hrs' },
  { garment: 'Blazers (Steam Press)', ourRate: '₹99/piece', localRate: '₹50–80/piece', turnaround: '24–48 hrs' },
  { garment: 'Dress / Gown', ourRate: '₹69/piece', localRate: '₹40–60/piece', turnaround: '24–48 hrs' },
];

const PRICING_FAQS = [
  { q: 'How much does ironing a shirt cost in Bangalore?', a: 'Spinzo charges ₹18 per shirt for professional steam ironing with free doorstep pickup across South Bangalore. Local iron shops typically charge ₹10–15 but require drop-off and carry risk of fabric damage from coal irons.' },
  { q: 'Is ₹18 per piece expensive for ironing?', a: 'No. ₹18 per piece includes free pickup and delivery from your doorstep. Local dhobis charge ₹10–15 but you must carry your clothes to the shop and back. When you factor in the time and transport, Spinzo is actually cheaper and more convenient.' },
  { q: 'Do you iron sarees? How much?', a: 'Yes. We professionally steam press sarees — including silk, Kanjeevaram, and cotton sarees — for ₹49 per piece. Our steam press eliminates creases without crushing the fabric unlike traditional charcoal irons.' },
  { q: 'What is steam ironing vs dry ironing?', a: 'Steam ironing uses pressurised steam to relax fabric fibres and remove creases without direct plate contact. This prevents "iron shine" — the glossy burn mark that coal and dry irons leave on dark clothes. Steam ironing also lasts longer because the steam sets the fabric.' },
  { q: 'Do you offer ironing-only service (no wash)?', a: 'Yes. Our Steam Ironing service is for clothes that are already clean but need pressing. ₹18 per piece with free pickup on 20+ pieces. Minimum order: 5 pieces.' },
  { q: 'What areas do you cover for ironing pickup?', a: 'We cover 19 South Bangalore neighborhoods including BTM Layout, Koramangala, HSR Layout, Jayanagar, JP Nagar, Bellandur, Sarjapur Road, Electronic City, and more. Check our service areas page for the full list.' },
];

export default function IroningPricesPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://spinzonow.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Ironing Prices Bangalore', item: 'https://spinzonow.com/services/ironing-prices' }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PRICING_FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Navbar />
      <main>
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#994BFF] mb-3 block">
              Ironing Prices Bangalore
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
              Ironing Prices in Bangalore: <span className="text-[#994BFF]">₹18/Shirt</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Professional steam ironing delivered to your doorstep. Free pickup in 30 minutes.
              No coal irons. No burnt collars. No carrying clothes to the shop.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm bg-white px-4 py-2 rounded-full border border-purple-200 font-medium text-zinc-700">Shirts: ₹18</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full border border-purple-200 font-medium text-zinc-700">Trousers: ₹18</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full border border-purple-200 font-medium text-zinc-700">Kurtas: ₹22</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full border border-purple-200 font-medium text-zinc-700">Sarees: ₹49</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-4 text-center font-display">
              Ironing Charges — Complete Price List
            </h2>
            <p className="text-zinc-600 text-center mb-8 max-w-2xl mx-auto">
              All prices include free doorstep pickup and delivery across South Bangalore. Professional steam press, not coal iron.
            </p>
            <div className="overflow-x-auto border border-purple-100/60 rounded-2xl shadow-sm">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-purple-50 border-b border-purple-200">
                    <th className="py-3.5 px-5 text-left font-bold text-zinc-700">Garment Type</th>
                    <th className="py-3.5 px-5 text-left font-bold text-[#994BFF]">Spinzo Steam Iron</th>
                    <th className="py-3.5 px-5 text-left font-bold text-zinc-500">Local Istri Shop</th>
                    <th className="py-3.5 px-5 text-left font-bold text-zinc-700">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {IRONING_RATES.map((r) => (
                    <tr key={r.garment} className="border-b border-zinc-100 hover:bg-purple-50/30">
                      <td className="py-3.5 px-5 font-semibold text-zinc-900">{r.garment}</td>
                      <td className="py-3.5 px-5 font-bold text-[#994BFF]">{r.ourRate}</td>
                      <td className="py-3.5 px-5 text-zinc-500">{r.localRate}</td>
                      <td className="py-3.5 px-5 text-zinc-600">{r.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-400 text-center mt-4">Local istri shop prices are estimates — actual rates vary by area and shop. They do not include pickup or delivery.</p>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-purple-50/30 to-white border-y border-purple-100">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-4 text-center font-display">
              Steam Iron vs Local Iron Shop
            </h2>
            <p className="text-zinc-600 text-center mb-8 max-w-2xl mx-auto">
              Not all ironing is equal. Here&apos;s what you&apos;re actually paying for.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm">
                <h3 className="font-bold text-green-700 text-base mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</span>
                  Steam Iron (Spinzo)
                </h3>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">→</span>Pressurised steam relaxes fibres — no direct plate contact</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">→</span>No &quot;iron shine&quot; on dark trousers or shirts</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">→</span>Free doorstep pickup + delivery — zero travel time</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">→</span>Crisp finish lasts 2–3× longer than dry iron</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">→</span>Safe on all fabrics — silk, cotton, linen, synthetics</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
                <h3 className="font-bold text-amber-700 text-base mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">✗</span>
                  Local Iron Shop (Istri Wala)
                </h3>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span>Coal iron or dry iron — direct heat crushes fabric fibres</li>
                  <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span>Permanent &quot;iron shine&quot; on dark colours from overheated plates</li>
                  <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span>Must carry clothes to shop and back — no pickup</li>
                  <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span>Delayed during monsoon — coal irons don&apos;t heat in damp weather</li>
                  <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span>Risk of burns, soot stains, and crushed buttons</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="bg-purple-50/50 rounded-3xl p-8 md:p-10 border border-purple-100">
              <h2 className="text-2xl font-bold text-[#1F0B3F] mb-4 font-display text-center">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#994BFF] text-white text-lg font-bold flex items-center justify-center mx-auto mb-3">1</div>
                  <h3 className="font-bold text-zinc-900 text-sm mb-1">Book Online</h3>
                  <p className="text-xs text-zinc-500">Schedule ironing pickup through the app or web. 30-min average arrival.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#994BFF] text-white text-lg font-bold flex items-center justify-center mx-auto mb-3">2</div>
                  <h3 className="font-bold text-zinc-900 text-sm mb-1">We Pickup</h3>
                  <p className="text-xs text-zinc-500">Rider collects from your doorstep. Clothes steam pressed at our facility.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#994BFF] text-white text-lg font-bold flex items-center justify-center mx-auto mb-3">3</div>
                  <h3 className="font-bold text-zinc-900 text-sm mb-1">Delivered Fresh</h3>
                  <p className="text-xs text-zinc-500">Back within 12-24 hours. Crisp, crease-free, and ready to wear.</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#994BFF] hover:underline">
                  View Complete Rate Card &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-zinc-100">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-6 text-center font-display">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {PRICING_FAQS.map((faq) => (
                <div key={faq.q} className="bg-purple-50/30 rounded-2xl p-5 border border-purple-100/60">
                  <h3 className="font-bold text-zinc-900 text-sm mb-2">{faq.q}</h3>
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