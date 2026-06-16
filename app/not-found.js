import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICE_LOCATIONS, REMOVED_LOCATIONS } from "@/lib/locations";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-zinc-900 mb-4 font-display">404</h1>
          <p className="text-xl text-zinc-600 mb-8">
            We couldn&apos;t find the page you&apos;re looking for.
          </p>
          <p className="text-zinc-500 mb-8">
            If you were looking for laundry service in a specific area, check one of our service locations below:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full border border-purple-100 hover:bg-purple-100 transition-colors text-sm font-medium"
              >
                {loc.name}
              </Link>
            ))}
          </div>
          <Link
            href="/"
            className="inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
