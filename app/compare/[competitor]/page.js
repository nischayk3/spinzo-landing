import { notFound } from 'next/navigation';
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const competitors = {
  'tumbledry': {
    name: 'Tumbledry',
    spinzoWins: [
      'Per-kg pricing saves you up to 60% compared to their per-piece rates.',
      '30-minute pickup vs 24-48 hours.',
      'Delivery in 6 hours vs 24-48 hours.',
      '100% focused on South Bangalore for better reliability.'
    ]
  },
  'uclean': {
    name: 'UClean',
    spinzoWins: [
      'More affordable per-kg rates for daily wear.',
      'Faster 30-minute pickup directly from your doorstep.',
      'Specialized care for ethnic wear and silk sarees.',
      'Track your rider in real-time through the app.'
    ]
  },
  'washho': {
    name: 'Washho',
    spinzoWins: [
      'At ₹85/kg, Spinzo is vastly cheaper than ₹249/kg.',
      'No hidden pickup charges or minimum order surcharges.',
      '6 hour express delivery available vs standard 48 hours.',
      'Better rated on Play Store for customer service.'
    ]
  },
  'laundrymate': {
    name: 'Laundrymate',
    spinzoWins: [
      'Fast 6-hour delivery option vs rigid standard 24–48 hour turnaround.',
      'Hyper-local South Bangalore dark stores guarantee 30-min pickup response.',
      'Strict 100% individual wash cycles per customer with zero missing clothes.',
      'Doorstep digital weighing scale so you verify exact weight before paying.'
    ]
  },
  'local-dhobi': {
    name: 'Local Dhobi / Iron Shop',
    spinzoWins: [
      'Commercial-grade steam pressing prevents fabric shine and burns from coal irons.',
      'Doorstep 30-min pickup & scheduled return — never haul heavy laundry bags down the street.',
      'Zero monsoon delays with indoor industrial climate-controlled washers and tumblers.',
      'Transparent flat pricing from ₹18/piece with digital billing and UPI/card payments.'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(competitors).map((competitor) => ({
    competitor: `spinzo-vs-${competitor}`
  }));
}

export async function generateMetadata({ params }) {
  const { competitor } = await params;
  const compKey = competitor.replace('spinzo-vs-', '');
  const compData = competitors[compKey];
  
  if (!compData) return { title: 'Not Found' };

  return {
    title: `Spinzo vs ${compData.name} | Best Laundry in Bangalore`,
    description: `Comparing Spinzo and ${compData.name} in Bangalore. See why South Bangalore prefers Spinzo for faster pickup, cheaper per-kg pricing, and better quality.`,
    alternates: {
      canonical: `https://spinzonow.com/compare/${competitor}`
    }
  };
}

export default async function ComparePage({ params }) {
  const { competitor } = await params;
  const compKey = competitor.replace('spinzo-vs-', '');
  const compData = competitors[compKey];

  if (!compData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <span className="text-sm font-medium text-[#994BFF] bg-[#994BFF]/5 px-3 py-1 rounded-full mb-6 inline-block">
              Laundry App Comparison
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-6 font-display">
              Spinzo vs {compData.name}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Looking for a better alternative to {compData.name}? Discover why thousands of South Bangalore residents have switched to Spinzo for their daily laundry needs.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden max-w-3xl mx-auto">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 p-4">
                <div className="font-semibold text-zinc-500 text-left">Feature</div>
                <div className="font-bold text-[#994BFF]">Spinzo</div>
                <div className="font-semibold text-zinc-500">{compData.name}</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-gray-50">
                <div className="text-left font-medium text-zinc-700">Pickup Time</div>
                <div className="text-green-600 font-bold">30 Minutes</div>
                <div className="text-zinc-500">24-48 Hours</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-gray-50">
                <div className="text-left font-medium text-zinc-700">Delivery Speed</div>
                <div className="text-green-600 font-bold">6-12 Hours</div>
                <div className="text-zinc-500">24-72 Hours</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-gray-50">
                <div className="text-left font-medium text-zinc-700">Pricing Model</div>
                <div className="text-green-600 font-bold">₹85/kg (Affordable)</div>
                <div className="text-zinc-500">Per Piece / Expensive</div>
              </div>
              <div className="grid grid-cols-3 p-4">
                <div className="text-left font-medium text-zinc-700">Local Focus</div>
                <div className="text-green-600 font-bold">South Bangalore Specialists</div>
                <div className="text-zinc-500">National Franchise</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-8 text-center font-display">
              Why Switch from {compData.name}?
            </h2>
            <div className="grid gap-4">
              {compData.spinzoWins.map((win, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-purple-50/30 rounded-xl border border-purple-100/50">
                  <div className="text-[#994BFF] font-bold text-xl">✓</div>
                  <p className="text-zinc-700 font-medium text-lg leading-relaxed">{win}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
