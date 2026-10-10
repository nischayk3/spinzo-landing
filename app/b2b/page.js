import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: 'B2B & Bulk Laundry Services in Bangalore | Spinzo',
  description: 'Commercial laundry services for PGs, Co-living, Airbnbs, and Salons in South Bangalore. Reliable weekly linen wash and bulk laundry plans with free pickup.',
  alternates: {
    canonical: 'https://spinzonow.com/b2b'
  }
};

export default function B2BPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-[#994BFF] bg-[#994BFF]/5 px-3 py-1 rounded-full mb-4 inline-block">
                For Businesses & Properties
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
                Bulk Laundry Services for South Bangalore
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                Reliable, high-quality linen and bulk laundry care for PGs, Co-living spaces, Airbnbs, Gyms, and Salons. We handle the laundry so you can focus on your guests.
              </p>
              <a href="https://wa.me/917676878832?text=Hi,%20I%20am%20looking%20for%20B2B%20laundry%20services%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-semibold text-white bg-[#1F0B3F] hover:bg-[#2d125c] rounded-full shadow-lg transition-all inline-block">
                Contact Sales via WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-[#1F0B3F] mb-10 text-center font-display">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Hostels & PGs</h3>
                <p className="text-zinc-600">Weekly bulk plans for bedsheets, pillow covers, and student laundry. Ensure hygiene and attract better tenants.</p>
              </div>
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Airbnbs & Serviced Apartments</h3>
                <p className="text-zinc-600">Premium wash and press for white linens, towels, and duvets to give your guests a 5-star hotel experience.</p>
              </div>
              <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Gyms & Salons</h3>
                <p className="text-zinc-600">Fast turnaround for towels and robes. Crisp, fresh, and perfectly folded deliveries every time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
             <h2 className="text-3xl font-bold text-[#1F0B3F] mb-6 text-center font-display">
              Why Partner With Spinzo?
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Dedicated Account Manager</h4>
                  <p className="text-sm text-zinc-600">Single point of contact for priority support and scheduling.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Volume Discounts</h4>
                  <p className="text-sm text-zinc-600">Custom pricing tailored to your weekly volume.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Free Scheduled Pickups</h4>
                  <p className="text-sm text-zinc-600">We align our logistics with your operations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Commercial Grade Cleaning</h4>
                  <p className="text-sm text-zinc-600">Industrial stain removal that preserves fabric life.</p>
                </div>
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
