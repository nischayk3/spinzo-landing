import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata = {
  title: 'About Spinzo — Bangalore\'s Fastest Laundry Service',
  description: 'Founded in 2024 by Nischay Kumar, Spinzo is a Bangalore-based premium laundry and dry cleaning service with 30-minute pickup and 6-hour delivery.',
  alternates: {
    canonical: 'https://spinzonow.com/about',
  },
  openGraph: {
    title: 'About Spinzo — Bangalore\'s Fastest Laundry Service',
    description: 'Spinzo brings premium laundry care to South Bangalore with a hyper-local dark store model. Not related to Spinzone franchise laundries.',
    url: 'https://spinzonow.com/about',
    siteName: 'Spinzo',
    locale: 'en_IN',
    type: 'website',
  },
};

const founderJd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://spinzonow.com/#organization',
      name: 'Spinzo',
      url: 'https://spinzonow.com',
      alternateName: 'Spinzo Laundry & Dry Cleaning',
      description: 'Bangalore\'s fastest premium laundry and dry cleaning service with 30-minute doorstep pickup and delivery within hours.',
      foundingDate: '2024',
      founders: [{ '@type': 'Person', name: 'Nischay Kumar', url: 'https://spinzonow.com/about' }],
      sameAs: [
        'https://spinzo.in',
        'https://play.google.com/store/apps/details?id=com.nischayk3.Spinit',
        'https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814'
      ]
    },
    {
      '@type': 'Person',
      '@id': 'https://spinzonow.com/about/#founder',
      name: 'Nischay Kumar',
      affiliation: { '@type': 'Organization', name: 'Spinzo' },
      description: 'Founder of Spinzo, a Bangalore-based on-demand laundry and dry cleaning platform.'
    }
  ]
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJd) }} />
      <Navbar />
      <main>
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#994BFF]/5 to-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <span className="text-sm font-bold uppercase tracking-widest text-[#994BFF] mb-3 block">
              About Spinzo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F0B3F] mb-6 font-display">
              Laundry, Reimagined for Bangalore
            </h1>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-6 font-display">Who We Are</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Spinzo was founded in 2024 by Nischay Kumar with a simple thesis: Bangalore professionals should not have to spend their weekends doing laundry. What started as a hyper-local pickup service in BTM Layout has grown into a premium laundry and dry cleaning network spanning 19 neighborhoods across South Bangalore.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              We operate a central dark store facility at Garuda Bhive Workspace, Old Madiwala &mdash; the geographical epicentre of South Bangalore. This location is why we can reach most addresses in under 30 minutes and return fresh clothes within hours.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Every order is washed individually in dedicated commercial machines. Zero mixing. Zero outsourcing. Every garment is tagged, tracked, and quality-checked before it comes back to you.
            </p>

            <div className="border-t border-zinc-200 my-10 pt-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-6 font-display">Important: We Are Not Spinzone</h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-6">
                <p className="text-zinc-700 leading-relaxed text-sm">
                  <strong>Spinzo is not affiliated with Spinzone Laundry and Dry Cleaning</strong> (a separate franchise chain operating in the US and Australia),
                  nor with "SpinZone" branded laundromats. We are a Bangalore-based independent startup founded in 2024. If you searched for "Spinzone"
                  and landed here, you&rsquo;ve found a different, faster service &mdash; and we&rsquo;d be happy to help with your laundry anyway.
                </p>
              </div>
              <p className="text-zinc-500 text-sm">
                Our app: <strong>Spinzo &mdash; Get Laundry in Hours</strong> on the App Store and Google Play.
                Our web app: <a href="https://spinzo.in" className="text-[#994BFF] hover:underline">spinzo.in</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-purple-50/30 border-y border-purple-100">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-6 font-display">Why "Spinzo"?</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              The name comes from combining "spin" (the cycle at the heart of any wash) with "zo" &mdash; fast, forward, move. Quick, clean, and no-nonsense. The way laundry should be.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              We picked the name before we realised how many other businesses use similar-sounding names. But we have the fastest pickup in South Bangalore, and we&rsquo;d rather prove that than change something people already recognise.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}