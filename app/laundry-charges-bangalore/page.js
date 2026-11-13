import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = {
  title: 'Laundry Charges Bangalore: Complete 2026 Price Comparison',
  description: 'Compare laundry charges across Bangalore: Spinzo ₹85/kg vs Tumbledry ₹25-40/pc vs LaundroKart ₹23/pc vs Washho ₹89/kg vs LaundryMate ₹140/kg. Transparent rate card.',
  alternates: { canonical: 'https://spinzonow.com/laundry-charges-bangalore' },
  openGraph: {
    title: 'Laundry Charges Bangalore: Price Comparison Guide 2026',
    description: 'Compare Spinzo, Tumbledry, LaundroKart, Washho & LaundryMate pricing side by side. Transparent per-kg and per-piece rates for Bangalore.',
    url: 'https://spinzonow.com/laundry-charges-bangalore',
    siteName: 'Spinzo',
    locale: 'en_IN',
    type: 'website',
  },
};

const competitors = [
  { name: 'Spinzo', tag: 'Fastest & Cheapest', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', ours: true,
    washFold: '₹85/kg', washIron: '₹140/kg', steamIron: '₹18/pc', dryClean: '₹79+', blanket: '₹299+',
    pickup: '30 min', delivery: '6–12 hrs', minOrder: 'None', pickupCharge: 'Free' },
  { name: 'Tumbledry', tag: 'National Chain', color: 'bg-zinc-50 text-zinc-600 border-zinc-200',
    washFold: '₹25–40/pc (~₹160/kg)', washIron: '₹30–50/pc', steamIron: '₹15–25/pc', dryClean: '₹150+', blanket: '₹500+',
    pickup: 'Scheduled (next-day)', delivery: '24–48 hrs', minOrder: 'Per-piece', pickupCharge: 'Free' },
  { name: 'LaundroKart', tag: 'Since 2016', color: 'bg-zinc-50 text-zinc-600 border-zinc-200',
    washFold: '₹23/pc (~₹115/kg)', washIron: '₹28/pc', steamIron: '₹18/pc', dryClean: '₹99+', blanket: '₹350+',
    pickup: 'Scheduled', delivery: '4–5 days', minOrder: 'Per-piece', pickupCharge: '₹50' },
  { name: 'Washho', tag: 'Multi-City', color: 'bg-zinc-50 text-zinc-600 border-zinc-200',
    washFold: '₹89/kg', washIron: 'N/A', steamIron: '₹22/pc', dryClean: '₹99+', blanket: 'N/A',
    pickup: 'Scheduled', delivery: '72 hrs', minOrder: 'None', pickupCharge: 'Free' },
  { name: 'LaundryMate', tag: 'Best Funded', color: 'bg-zinc-50 text-zinc-600 border-zinc-200',
    washFold: '₹140/kg', washIron: '₹180/kg', steamIron: '₹25/pc', dryClean: '₹129+', blanket: '₹450+',
    pickup: 'Scheduled', delivery: '24–48 hrs', minOrder: '5kg', pickupCharge: 'Free' },
];

export default function PriceComparisonPage() {
  const rows = [
    { label: 'Wash & Fold', key: 'washFold' },
    { label: 'Wash & Iron', key: 'washIron' },
    { label: 'Steam Ironing', key: 'steamIron' },
    { label: 'Dry Cleaning', key: 'dryClean' },
    { label: 'Blanket Wash', key: 'blanket' },
    { label: 'Pickup Time', key: 'pickup' },
    { label: 'Delivery Time', key: 'delivery' },
    { label: 'Min Order', key: 'minOrder' },
    { label: 'Pickup Charge', key: 'pickupCharge' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Laundry Charges Bangalore: Complete Price Comparison",
          description: "Compare Bangalore laundry service prices across providers",
          breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spinzonow.com" },
            { "@type": "ListItem", position: 2, name: "Laundry Charges Bangalore", item: "https://spinzonow.com/laundry-charges-bangalore" }
          ]}
        })
      }} />
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-12 bg-gradient-to-b from-emerald-50/50 via-white to-white border-b border-zinc-100">
          <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">Price Comparison</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
              Laundry Charges in Bangalore: Who&apos;s Cheapest?
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              We compared Spinzo against every major laundry service in Bangalore — Tumbledry, LaundroKart, Washho, and LaundryMate.
              Same city, very different prices. Here&apos;s the truth.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="text-left py-4 px-5 font-bold text-zinc-700">Service</th>
                    {competitors.map(c => (
                      <th key={c.name} className={`text-center py-4 px-4 font-bold ${c.ours ? 'text-emerald-700' : 'text-zinc-600'}`}>
                        <div className="text-sm">{c.name}</div>
                        <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1 ${c.color}`}>{c.tag}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.key} className={`border-b border-zinc-100 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'}`}>
                      <td className="py-3.5 px-5 font-semibold text-zinc-800">{row.label}</td>
                      {competitors.map(c => (
                        <td key={c.name} className={`text-center py-3.5 px-4 ${c.ours ? 'bg-emerald-50/50 font-semibold text-emerald-800' : 'text-zinc-600'}`}>
                          {c[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 bg-emerald-50 rounded-xl border border-emerald-200 p-6 md:p-8">
              <h2 className="text-xl font-bold text-zinc-900 mb-3 font-display">The Bottom Line</h2>
              <p className="text-zinc-700 leading-relaxed">
                For Wash & Fold, <strong>Spinzo at ₹85/kg is the cheapest option in Bangalore</strong> — 40-50% cheaper than Tumbledry&apos;s per-piece pricing,
                faster than LaundroKart (6 hours vs 4-5 days), and more transparent than Washho (₹89/kg with 72-hour delivery).
                Plus, Spinzo has <strong>no minimum order, no pickup charge, and same-day delivery</strong>.
              </p>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 font-display">How Spinzo Beats Every Competitor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'vs Tumbledry', advantage: '₹85/kg vs ₹25-40/piece', detail: 'Per-kg pricing saves 60% on bulk laundry. Per-piece billing adds up fast when you wash a full load.', link: '/compare/spinzo-vs-tumbledry' },
                  { name: 'vs LaundroKart', advantage: '₹85/kg vs ₹23/piece', detail: 'Per-kg pricing is cheaper for bulk. And we deliver in 6 hours vs their 4-5 days.', link: '/compare/spinzo-vs-laundrokart' },
                  { name: 'vs Washho', advantage: '₹85/kg vs ₹89/kg', detail: '₹4/kg cheaper AND 12x faster (6 hrs vs 72 hrs). Washho has no same-day option.', link: '/alternatives/washho' },
                  { name: 'vs LaundryMate', advantage: '₹85/kg vs ₹140/kg', detail: '39% cheaper for the same Wash & Fold service. Both offer free pickup.', link: '/alternatives/laundrymate' },
                  { name: 'vs BumbleDry', advantage: '₹85/kg vs ₹95/kg', detail: '₹10/kg cheaper with no ₹299 minimum order. And our delivery is same-day vs 2-3 days.', link: '/alternatives/bumbledry' },
                  { name: 'vs UClean', advantage: '₹85/kg transparent', detail: 'UClean is franchise-based with varying prices. Spinzo has one consistent price across 20 areas.', link: '/alternatives/uclean' },
                ].map((item, i) => (
                  <a key={i} href={item.link} className="block bg-white rounded-xl border border-zinc-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                    <h3 className="font-bold text-zinc-900 mb-1 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
                    <p className="text-emerald-700 font-semibold text-sm mb-2">{item.advantage}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.detail}</p>
                    <span className="inline-block mt-3 text-xs font-semibold text-emerald-600 group-hover:gap-1 transition-all">Compare →</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 font-display">Spinzo Full Rate Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Wash & Fold', price: '₹85/kg', time: '6-12 hrs', desc: 'Everyday laundry: t-shirts, jeans, towels' },
                  { name: 'Wash & Iron', price: '₹140/kg', time: '24-48 hrs', desc: 'Washed + steam pressed: formals, shirts' },
                  { name: 'Steam Ironing', price: '₹18/pc', time: '24-48 hrs', desc: 'Already washed? Just pressing needed' },
                  { name: 'Dry Cleaning', price: '₹79+', time: '24-48 hrs', desc: 'Suits, silk sarees, blazers, woolens' },
                  { name: 'Saree Dry Cleaning', price: '₹149+', time: '24-48 hrs', desc: 'Kanjeevaram, Banarasi, Lehengas' },
                  { name: 'Blanket Wash', price: '₹299+', time: '6-12 hrs', desc: 'Comforters, quilts, rajais' },
                  { name: 'Shoe Cleaning', price: '₹199/pair', time: '24-48 hrs', desc: 'Sneakers, leather, canvas, suede' },
                  { name: 'Curtain Cleaning', price: '₹299/set', time: '48-72 hrs', desc: 'Sheer, blackout, velvet drapes' },
                  { name: 'Sofa Cleaning', price: '₹499/seat', time: '48-72 hrs', desc: 'Fabric & leather upholstery' },
                  { name: 'Express Laundry', price: '₹149/kg', time: '6-8 hrs', desc: 'Emergency same-day service' },
                  { name: 'Premium Laundry', price: '₹119/kg', time: '24-48 hrs', desc: 'Hand-finished for delicates' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-lg border border-zinc-100 p-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-semibold text-zinc-900 text-sm">{s.name}</h3>
                      <span className="font-bold text-emerald-700">{s.price}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-1">{s.time}</p>
                    <p className="text-xs text-zinc-400">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
}