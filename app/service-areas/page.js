import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { SERVICE_LOCATIONS } from "@/lib/locations";

export const metadata = {
  title: 'Laundry Service Areas in South Bangalore | Spinzo',
  description: 'Spinzo serves 14 neighborhoods across South Bangalore with premium laundry pickup and delivery. Check if your area is covered — Jayanagar, Koramangala, HSR Layout, BTM Layout, JP Nagar, and more.',
  openGraph: {
    title: 'Laundry Service Areas in South Bangalore | Spinzo',
    description: 'Spinzo serves 14 neighborhoods across South Bangalore with premium laundry pickup and delivery. Check if your area is covered.',
    url: 'https://spinzonow.com/service-areas',
  },
};

export default function ServiceAreasPage() {
  const nearbyMap = SERVICE_LOCATIONS.map((loc) => ({
    ...loc,
    combinedNearby: loc.nearby.slice(0, 4).join(', '),
  }));

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://spinzonow.com/service-areas' }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            Laundry Service Areas in South Bangalore
          </h1>
          <p className="text-lg text-zinc-600 mb-8 max-w-3xl">
            Spinzo provides fast, premium laundry pickup and delivery across 14 neighborhoods in South Bangalore.
            If you live or work in any of these areas, we&apos;ll pick up your clothes within 30 minutes and deliver them fresh within hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="block p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group"
              >
                <h2 className="text-lg font-bold text-zinc-900 group-hover:text-[#8B5CF6] transition-colors font-display">
                  Laundry Service in {loc.name}
                </h2>
                <p className="text-sm text-zinc-500 mt-1">
                  Free pickup & delivery · {loc.nearby.slice(0, 3).join(', ')}
                </p>
              </Link>
            ))}
          </div>

          <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-display">Don&apos;t see your area?</h2>
            <p className="text-zinc-700 mb-6">
              We&apos;re expanding rapidly across Bangalore. If your area isn&apos;t listed,
              download the app and check — we may have just launched near you.
              You can also reach out and we&apos;ll prioritize your neighborhood.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.nischayk3.Spinit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all text-sm"
              >
                Download App
              </a>
              <a
                href="https://spinzo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold border border-zinc-200 hover:border-purple-300 transition-all text-sm"
              >
                Use Web App
              </a>
            </div>
          </div>

          {/* Pricing */}
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
