import { SERVICES } from "@/lib/services";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = {
  title: 'All Laundry Services in Bangalore | Spinzo',
  description: 'Spinzo offers laundry, ironing, dry cleaning across South Bangalore: Wash & Fold ₹85/kg, Steam Ironing ₹18/pc. 30-min free pickup.',
  alternates: { canonical: 'https://spinzonow.com/services' },
  openGraph: {
    title: 'All Laundry Services in Bangalore | Spinzo',
    description: 'Complete laundry services with 30-minute free pickup across 20 South Bangalore neighborhoods. Full rate card, turnarounds, and coverage areas.',
    url: 'https://spinzonow.com/services',
    siteName: 'Spinzo',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ServicesHubPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' },
      { '@type': 'ListItem', position: 2, name: 'All Services', item: 'https://spinzonow.com/services' },
    ],
  };

  const areaCount = 20;

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main>
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <span className="text-sm font-bold uppercase tracking-widest text-[#994BFF] mb-3 block">
              Spinzo Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
              All Laundry Services in Bangalore
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mb-4">
              Free 30-minute doorstep pickup across <strong>{areaCount} neighborhoods</strong> in South Bangalore.
              All orders include free delivery. No minimum. No mixing.
            </p>
            <div className="flex flex-wrap gap-2">
              {SERVICES.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm bg-white px-4 py-2 rounded-full border border-purple-200 font-medium text-zinc-700 hover:text-[#994BFF] hover:border-[#994BFF] transition-colors"
                >
                  {s.name} {s.price}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-8 text-center font-display">
              Choose Your Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-purple-100/60 shadow-sm hover:shadow-lg hover:border-[#994BFF]/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#994BFF]">{s.turnaround || 'Express'}</span>
                    <span className="text-xl font-extrabold text-[#1F0B3F]">{s.price}</span>
                  </div>
                  <h2 className="font-bold text-lg text-zinc-900 group-hover:text-[#994BFF] transition-colors mb-2 font-display">
                    {s.name}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{s.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.includes.slice(0, 3).map((inc) => (
                      <span key={inc} className="text-xs bg-purple-50 text-zinc-600 px-2.5 py-1 rounded-md border border-purple-100/50">{inc}</span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-[#994BFF] group-hover:underline">
                    {s.shortName} details &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-white to-purple-50/20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-6 text-center font-display">
              Full Rate Card
            </h2>
            <p className="text-zinc-600 text-center mb-8 max-w-2xl mx-auto">
              All prices include free doorstep pickup and delivery across South Bangalore.
            </p>
            <div className="overflow-x-auto border border-purple-100/60 rounded-2xl shadow-sm">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-purple-50 border-b border-purple-200">
                    <th className="py-3.5 px-5 text-left font-bold text-zinc-700">Service</th>
                    <th className="py-3.5 px-5 text-left font-bold text-zinc-700">Price</th>
                    <th className="py-3.5 px-5 text-left font-bold text-zinc-700">Turnaround</th>
                    <th className="py-3.5 px-5 text-left font-bold text-zinc-700">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s) => (
                    <tr key={s.slug} className="border-b border-zinc-100 hover:bg-purple-50/30">
                      <td className="py-3.5 px-5 font-semibold text-zinc-900">
                        <Link href={`/services/${s.slug}`} className="hover:text-[#994BFF]">{s.name}</Link>
                      </td>
                      <td className="py-3.5 px-5 text-[#994BFF] font-bold">{s.price}</td>
                      <td className="py-3.5 px-5 text-zinc-600">{s.turnaround || 'Express'}</td>
                      <td className="py-3.5 px-5 text-zinc-500">{s.bestFor.slice(0, 3).join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#994BFF] hover:underline">
                View Detailed Rate Card &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}