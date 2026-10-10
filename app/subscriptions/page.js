import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export const metadata = {
  title: 'Monthly Laundry Subscription Plans in Bangalore | Spinzo Pass',
  description: 'Get rid of laundry day forever with Spinzo Monthly Subscriptions. Affordable, fixed-price laundry plans for bachelors and families in South Bangalore.',
  alternates: {
    canonical: 'https://spinzonow.com/subscriptions'
  }
};

export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <span className="text-sm font-bold uppercase tracking-widest text-[#994BFF] mb-4 inline-block">
              Spinzo Pass
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-6 font-display">
              Never Worry About Laundry Again
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Fixed monthly laundry subscriptions designed for busy bachelors, working professionals, and families in South Bangalore. Free weekly pickups included.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              {/* Plan 1 */}
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Bachelor Plan</h3>
                <p className="text-zinc-500 text-sm mb-6">Perfect for individuals</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#1F0B3F]">₹1,499</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Up to 30 garments per month
                  </li>
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Wash & Iron included
                  </li>
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> 4 Free doorstep pickups
                  </li>
                </ul>
                <a href="https://spinzo.in/" className="w-full block text-center py-3 px-4 bg-purple-50 text-[#994BFF] font-semibold rounded-xl hover:bg-purple-100 transition-colors">
                  Subscribe Now
                </a>
              </div>

              {/* Plan 2 - Highlighted */}
              <div className="bg-[#1F0B3F] rounded-3xl p-8 border border-[#994BFF] shadow-xl relative transform md:-translate-y-4 flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#994BFF] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Couples Plan</h3>
                <p className="text-zinc-400 text-sm mb-6">Ideal for two working professionals</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">₹2,499</span>
                  <span className="text-zinc-400">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className="w-5 h-5 text-[#994BFF] shrink-0" /> Up to 60 garments per month
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className="w-5 h-5 text-[#994BFF] shrink-0" /> Wash & Iron included
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className="w-5 h-5 text-[#994BFF] shrink-0" /> 1 Free Blanket Wash
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className="w-5 h-5 text-[#994BFF] shrink-0" /> 4 Free doorstep pickups
                  </li>
                </ul>
                <a href="https://spinzo.in/" className="w-full block text-center py-3 px-4 bg-[#994BFF] text-white font-semibold rounded-xl hover:bg-[#8828FF] transition-colors shadow-lg shadow-purple-500/25">
                  Subscribe Now
                </a>
              </div>

              {/* Plan 3 */}
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Family Plan</h3>
                <p className="text-zinc-500 text-sm mb-6">Heavy laundry, zero hassle</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#1F0B3F]">₹3,999</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Up to 100 garments per month
                  </li>
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Wash & Iron included
                  </li>
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> 2 Free Blanket Washes
                  </li>
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> 8 Free doorstep pickups (Bi-weekly)
                  </li>
                </ul>
                <a href="https://spinzo.in/" className="w-full block text-center py-3 px-4 bg-purple-50 text-[#994BFF] font-semibold rounded-xl hover:bg-purple-100 transition-colors">
                  Subscribe Now
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Comparison vs Daily Model */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-10 text-center font-display">
              Why Subscribe?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200">
                <h4 className="font-bold text-zinc-900 mb-3 text-lg">Without Subscription</h4>
                <ul className="space-y-3 text-zinc-600">
                  <li>❌ Variable, unpredictable costs</li>
                  <li>❌ Manual booking every single time</li>
                  <li>❌ Paying minimum order fees</li>
                  <li>❌ Wasting time coordinating pickups</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                <h4 className="font-bold text-[#994BFF] mb-3 text-lg">With Spinzo Pass</h4>
                <ul className="space-y-3 text-zinc-800">
                  <li>✅ Save up to 25% on standard rates</li>
                  <li>✅ Fixed weekly pickup schedules</li>
                  <li>✅ Zero minimum order constraints</li>
                  <li>✅ Premium priority processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
