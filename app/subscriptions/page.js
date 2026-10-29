import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Check, TrendingDown, Zap } from "lucide-react";
import { SERVICE_LOCATIONS } from "@/lib/locations";

export const metadata = {
  title: 'Monthly Laundry Subscription in Bangalore | Spinzo Pass',
  description: 'Save up to 25% with Spinzo Pass monthly laundry plans from ₹1,499/mo. Free weekly pickups & priority delivery across South Bangalore. No minimums.',
  alternates: {
    canonical: 'https://spinzonow.com/subscriptions'
  },
  openGraph: {
    title: 'Spinzo Pass — Save 25% on Laundry Every Month',
    description: 'Fixed monthly laundry plans starting ₹1,499/mo. Free weekly pickups, no minimums, priority processing across South Bangalore.',
    url: 'https://spinzonow.com/subscriptions',
    siteName: 'Spinzo',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://spinzonow.com/SpinZo.png',
        width: 512,
        height: 512,
        alt: 'Spinzo Pass Monthly Laundry Subscription Bangalore',
      },
    ],
  },
};

const locations = SERVICE_LOCATIONS.map(l => l.name);
const locationSentence = locations.slice(0, 6).join(', ') + ' and ' + (locations.length - 6) + ' more neighborhoods';

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Spinzo Pass work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Choose a plan (Bachelor, Couples, or Family). You get a fixed number of garments per month with scheduled weekly pickups. Your clothes are washed, ironed, and delivered back. No manual booking, no minimum orders.' }
    },
    {
      '@type': 'Question',
      name: 'How much does the Bachelor laundry plan cost in Bangalore?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Spinzo Pass Bachelor Plan costs ₹1,499 per month and covers up to 30 garments with 4 free doorstep pickups. Wash & Iron included.' }
    },
    {
      '@type': 'Question',
      name: 'Does Spinzo offer laundry subscriptions in Koramangala and HSR Layout?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Spinzo Pass is available across all 19 South Bangalore neighborhoods including Koramangala, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Silk Board, Bellandur, Electronic City, and more.' }
    },
    {
      '@type': 'Question',
      name: 'Can I cancel my Spinzo Pass subscription?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — you can pause or cancel anytime. No lock-in contracts. If you cancel mid-month, unused pickups roll over as Spinzo credit.' }
    },
  ]
};

export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <span className="text-sm font-bold uppercase tracking-widest text-[#994BFF] mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200">
              <Zap size={14} /> Spinzo Pass
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
              Never Worry About Laundry Again
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-4 max-w-2xl mx-auto">
              Fixed monthly laundry subscriptions designed for busy bachelors, working professionals, and families across South Bangalore. Free weekly pickups, priority processing, and <strong className="text-[#994BFF]">savings of up to 25%</strong> compared to pay-per-order.
            </p>
            <p className="text-sm text-zinc-500 mb-2">
              📍 Available in {locationSentence}
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-zinc-500">
              <span className="bg-white px-3 py-1 rounded-full border border-zinc-200">✓ No minimum orders</span>
              <span className="bg-white px-3 py-1 rounded-full border border-zinc-200">✓ Pause anytime</span>
              <span className="bg-white px-3 py-1 rounded-full border border-zinc-200">✓ Free weekly pickup</span>
              <span className="bg-white px-3 py-1 rounded-full border border-zinc-200">✓ Priority processing</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1F0B3F] font-display mb-2">Choose Your Plan</h2>
              <p className="text-zinc-500 text-sm">All plans include Wash & Iron, free doorstep pickup, and priority processing.</p>
            </div>
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
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Saves ~₹500/mo vs pay-per-order
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
                  <li className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className="w-5 h-5 text-[#994BFF] shrink-0" /> Saves ~₹900/mo vs pay-per-order
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
                  <li className="flex items-start gap-3 text-zinc-700 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Saves ~₹1,500/mo vs pay-per-order
                  </li>
                </ul>
                <a href="https://spinzo.in/" className="w-full block text-center py-3 px-4 bg-purple-50 text-[#994BFF] font-semibold rounded-xl hover:bg-purple-100 transition-colors">
                  Subscribe Now
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Savings Calculator */}
        <section className="py-14 bg-purple-50/30 border-y border-purple-100">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] font-display mb-2">
                <TrendingDown className="w-6 h-6 inline-block text-green-500 mr-2" />
                The Math: Subscription Saves You Money
              </h2>
              <p className="text-zinc-500 text-sm max-w-xl mx-auto">
                Here&apos;s what a typical Bangalore working professional spends on laundry per month with and without Spinzo Pass.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm">
                <h4 className="font-bold text-zinc-900 mb-3 text-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" /> Without Subscription
                </h4>
                <ul className="space-y-3 text-zinc-600 text-sm">
                  <li className="flex justify-between"><span>Pay-per-order wash & fold (2×/week)</span> <span className="font-bold">₹1,020</span></li>
                  <li className="flex justify-between"><span>Ironing (10 shirts × ₹18)</span> <span className="font-bold">₹180</span></li>
                  <li className="flex justify-between"><span>Pickup coordination time</span> <span className="text-green-600 font-medium">Free</span></li>
                  <li className="flex justify-between border-t border-zinc-200 pt-2"><span className="font-bold">Total per month</span> <span className="font-bold text-red-500">₹1,200+</span></li>
                </ul>
              </div>
              <div className="bg-[#1F0B3F] p-6 rounded-2xl border border-[#994BFF] shadow-lg">
                <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" /> With Spinzo Pass Bachelor Plan
                </h4>
                <ul className="space-y-3 text-zinc-300 text-sm">
                  <li className="flex justify-between"><span>Unlimited wash & fold</span> <span className="font-bold text-white">Included</span></li>
                  <li className="flex justify-between"><span>Ironing (30 garments)</span> <span className="font-bold text-white">Included</span></li>
                  <li className="flex justify-between"><span>4 scheduled weekly pickups</span> <span className="text-green-400 font-medium">Auto</span></li>
                  <li className="flex justify-between border-t border-zinc-600 pt-2"><span className="font-bold text-white">Total per month</span> <span className="font-bold text-green-400 text-xl">₹1,499</span></li>
                </ul>
                <p className="text-green-400 text-xs mt-3 font-semibold">₹12.50/garment when you use all 30 slots (vs ₹18+ pay-per-order)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison vs Daily Model */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-8 text-center font-display">
              Why Subscribe?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                <h4 className="font-bold text-zinc-900 mb-3 text-lg">Without Subscription</h4>
                <ul className="space-y-3 text-zinc-600 text-sm">
                  <li>❌ Variable, unpredictable costs each month</li>
                  <li>❌ Manual booking every single time</li>
                  <li>❌ Paying minimum order fees for small loads</li>
                  <li>❌ Wasting time coordinating pickups</li>
                  <li>❌ No priority — queue with all ad-hoc orders</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-sm">
                <h4 className="font-bold text-[#994BFF] mb-3 text-lg">With Spinzo Pass</h4>
                <ul className="space-y-3 text-zinc-800 text-sm">
                  <li>✅ Save up to 25% on standard rates</li>
                  <li>✅ Fixed weekly pickup schedule — no booking needed</li>
                  <li>✅ Zero minimum order constraints</li>
                  <li>✅ Premium priority processing & faster returns</li>
                  <li>✅ Add-on services at member-only discounts</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-[#1F0B3F] mb-4 text-center font-display">Who is each plan for?</h3>
              <div className="space-y-3 text-sm text-zinc-600">
                <div className="p-4 bg-gray-50 rounded-xl border border-zinc-100">
                  <strong className="text-zinc-900">Bachelor Plan (₹1,499/mo):</strong> Single working professionals, students in PGs, or anyone living alone. If you do 2-3 loads of laundry per week with 8-10 pieces each, this plan covers you and saves ₹500/mo compared to paying per order.
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-zinc-100">
                  <strong className="text-zinc-900">Couples Plan (₹2,499/mo):</strong> Two working professionals sharing an apartment. 60 garments covers both people&apos;s office shirts, casuals, and gym wear. Includes a free blanket wash every month. Saves ~₹900/mo.
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-zinc-100">
                  <strong className="text-zinc-900">Family Plan (₹3,999/mo):</strong> Families of 3-4 with heavy laundry needs. 100+ garments, 2 free blanket washes, and 8 pickups per month (bi-weekly). Saves ₹1,500+/mo.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 bg-gradient-to-b from-purple-50/20 to-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-8 font-display">
              How Spinzo Pass Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
                <h4 className="font-bold text-zinc-900 mb-1">Pick a Plan</h4>
                <p className="text-xs text-zinc-500">Bachelor, Couples, or Family</p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
                <h4 className="font-bold text-zinc-900 mb-1">Set Your Schedule</h4>
                <p className="text-xs text-zinc-500">Weekly pickup day &amp; time</p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
                <h4 className="font-bold text-zinc-900 mb-1">We Handle It</h4>
                <p className="text-xs text-zinc-500">Wash, dry, iron, fold, deliver</p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mx-auto mb-3">4</div>
                <h4 className="font-bold text-zinc-900 mb-1">No Bookings Needed</h4>
                <p className="text-xs text-zinc-500">Auto-pickup, auto-delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription FAQ */}
        <section className="py-14 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl font-bold text-[#1F0B3F] mb-6 text-center font-display">
              Subscription Questions, Answered
            </h2>
            <div className="space-y-4">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-zinc-900 mb-1 text-sm">Can I skip a week if I travel?</h3>
                <p className="text-sm text-zinc-600">Yes. Unused pickups roll over as Spinzo credit. Pause anytime with one tap.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-zinc-900 mb-1 text-sm">What if I exceed my garment limit?</h3>
                <p className="text-sm text-zinc-600">Extra garments are charged at 20% off the standard rate. Most subscribers don&apos;t exceed their plan.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-zinc-900 mb-1 text-sm">Can I change plans mid-month?</h3>
                <p className="text-sm text-zinc-600">Upgrade anytime — we prorate the difference. Downgrades take effect next cycle.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-zinc-900 mb-1 text-sm">Is Spinzo Pass available in my area?</h3>
                <p className="text-sm text-zinc-600">We cover {locationSentence}. Enter your address in the app to confirm same-day service.</p>
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