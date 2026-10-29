import { notFound } from 'next/navigation';
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { COMPETITORS, getCompetitor } from "@/lib/competitors";

function TLDR({ comp }) {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-[#994BFF]/5 rounded-2xl border border-[#994BFF]/15">
      <h2 className="text-lg font-bold text-[#1F0B3F] mb-3 font-display">TL;DR — What You Need to Know</h2>
      <ul className="space-y-2 text-sm text-zinc-700">
        <li className="flex gap-2">
          <span className="text-green-600 font-bold shrink-0">✓</span>
          <span><strong>Speed:</strong> Spinzo delivers in <strong>6–12 hours</strong>. {comp.name} takes <strong>{comp.delivery}</strong>.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-green-600 font-bold shrink-0">✓</span>
          <span><strong>Price:</strong> Spinzo is <strong>₹85/kg</strong> flat. {comp.washFoldPrice ? `${comp.name} charges approx ${comp.washFoldPrice}.` : `${comp.name} charges per-piece.`}</span>
        </li>
        <li className="flex gap-2">
          <span className="text-green-600 font-bold shrink-0">✓</span>
          <span><strong>Pickup:</strong> Spinzo picks up in <strong>30 minutes</strong>. {comp.name} operates on <strong>{comp.pickup || 'scheduled pickup'}</strong>.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-green-600 font-bold shrink-0">✓</span>
          <span><strong>Local:</strong> Spinzo runs hyperlocal South Bangalore dark stores. {comp.name === 'BumbleDry' ? 'BumbleDry is also Bangalore-only but takes 2–3 days.' : comp.type === 'National chain (Noida)' ? `${comp.name} is a national franchise juggling 1,600+ stores across India.` : `${comp.name} covers pan-Bangalore, which means longer routes.`}</span>
        </li>
      </ul>
    </div>
  );
}

function ComparisonTable({ comp }) {
  const rows = comp.spinzoAdvantage || [];
  if (rows.length === 0) return null;
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden max-w-3xl mx-auto">
      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 p-4">
        <div className="font-bold text-zinc-500 text-xs uppercase tracking-wider text-left">Feature</div>
        <div className="font-bold text-[#994BFF] text-xs uppercase tracking-wider">Spinzo</div>
        <div className="font-bold text-zinc-500 text-xs uppercase tracking-wider">{comp.name}</div>
      </div>
      {rows.map((row, idx) => (
        <div key={idx} className={`grid grid-cols-3 p-4 ${idx < rows.length - 1 ? 'border-b border-gray-50' : ''}`}>
          <div className="text-left font-medium text-zinc-700 text-sm">{row.label}</div>
          <div className="text-green-600 font-bold text-sm">{row.ours}</div>
          <div className="text-zinc-500 text-sm">{row.theirs}</div>
        </div>
      ))}
    </div>
  );
}

function WhySpinzoWins({ comp }) {
  const items = comp.spinzoAdvantage || [];
  return (
    <div className="grid gap-4 mt-8">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-4 p-5 bg-purple-50/30 rounded-xl border border-purple-100/50">
          <div className="text-[#994BFF] font-bold text-xl shrink-0">✓</div>
          <div>
            <p className="font-bold text-zinc-900">{item.label}: {item.win}</p>
            <p className="text-zinc-600 text-sm mt-1">
              <strong>Spinzo:</strong> {item.ours} · <strong>{comp.name}:</strong> {item.theirs}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function HonestAssessment({ comp }) {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-[#1F0B3F] mb-6 text-center font-display">
        {comp.name} vs Spinzo — Honest Take
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
          <h3 className="font-bold text-green-700 mb-3">Why Choose {comp.name}</h3>
          <p className="text-sm text-zinc-600 leading-relaxed mb-3">{comp.strength}</p>
          <p className="text-xs text-zinc-400 italic">We respect {comp.name}&apos;s strengths — they aren&apos;t right for everyone, and neither are we.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-amber-100 shadow-sm">
          <h3 className="font-bold text-amber-700 mb-3">Where {comp.name} Falls Short</h3>
          <p className="text-sm text-zinc-600 leading-relaxed mb-3">{comp.weakness}</p>
          <p className="text-xs text-zinc-400 italic">Common complaints from {comp.name} users: {comp.complaints?.join(', ') || 'varied by area'}.</p>
        </div>
      </div>
    </div>
  );
}

function WhosItFor({ comp }) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl font-bold text-[#1F0B3F] mb-6 text-center font-display">
          Who Should Use Which Service?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
            <div className="text-2xl font-bold text-[#994BFF] mb-2">Spinzo is best for</div>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex gap-2"><span className="text-green-500">→</span>You need laundry <strong>same day</strong>, not tomorrow</li>
              <li className="flex gap-2"><span className="text-green-500">→</span>You have <strong>bulk laundry</strong> (per-kg saves big)</li>
              <li className="flex gap-2"><span className="text-green-500">→</span>You live in <strong>South Bangalore</strong> (BTM, HSR, Koramangala, JP Nagar, etc.)</li>
              <li className="flex gap-2"><span className="text-green-500">→</span>You want <strong>30-min pickup</strong> without planning ahead</li>
              <li className="flex gap-2"><span className="text-green-500">→</span>You value <strong>app tracking</strong> and digital billing</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-50 to-white border border-zinc-200">
            <div className="text-2xl font-bold text-zinc-500 mb-2">{comp.name} is best for</div>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex gap-2"><span className="text-zinc-400">→</span>You don&apos;t mind <strong>1–{comp.delivery}</strong> wait</li>
              {comp.washFoldPrice && <li className="flex gap-2"><span className="text-zinc-400">→</span>You&apos;re okay paying <strong>{comp.washFoldPrice}</strong></li>}
              {comp.pickup && <li className="flex gap-2"><span className="text-zinc-400">→</span>You&apos;re fine with <strong>{comp.pickup}</strong> pickup windows</li>}
              <li className="flex gap-2"><span className="text-zinc-400">→</span>You need <strong>pan-Bangalore</strong> coverage (not just South)</li>
              <li className="flex gap-2"><span className="text-zinc-400">→</span>You want a service with <strong>more storefronts</strong> nearby</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSchema({ comp }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Which is better — Spinzo or ${comp.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Spinzo is the faster, cheaper option for South Bangalore residents. Spinzo delivers in 6-12 hours at ₹85/kg with 30-minute pickup, while ${comp.name} takes ${comp.delivery} at higher per-piece pricing with ${comp.pickup || 'scheduled'} pickup.` }
      },
      {
        '@type': 'Question',
        name: `How fast is Spinzo vs ${comp.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Spinzo delivers in 6-12 hours with 30-minute pickup. ${comp.name} delivers in ${comp.delivery} with scheduled pickup.` }
      },
      {
        '@type': 'Question',
        name: `Does Spinzo serve the same areas as ${comp.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Spinzo covers 19 South Bangalore neighborhoods: ${['Koramangala', 'HSR Layout', 'BTM Layout', 'Jayanagar', 'JP Nagar', 'Bellandur', 'Silk Board', 'Electronic City', 'Sarjapur Road', 'and more'].join(', ')}.` }
      },
    ]
  };
}

export async function generateStaticParams() {
  return ['spinzo-vs-tumbledry', 'spinzo-vs-uclean', 'spinzo-vs-washho', 'spinzo-vs-laundrymate', 'spinzo-vs-bumbledry', 'spinzo-vs-laundrokart', 'spinzo-vs-local-dhobi'].map((competitor) => ({
    competitor
  }));
}

export async function generateMetadata({ params }) {
  const { competitor } = await params;
  const compKey = competitor.replace('spinzo-vs-', '');
  const compData = getCompetitor(compKey);

  if (!compData) return { title: 'Not Found' };

  const shortName = compData.name.split('/')[0].trim();
  const rawTitle = `Spinzo vs ${shortName} | Bangalore Laundry`;
  const title = rawTitle.length > 58 ? rawTitle.substring(0, 58) : rawTitle;

  const rawDesc = `Spinzo vs ${shortName}: 30-min pickup, 6-hr delivery, ₹85/kg flat vs ${compData.name}'s ${compData.delivery} delivery. Bangalore laundry comparison.`;
  const description = rawDesc.length > 155 ? rawDesc.substring(0, 152) + '...' : rawDesc;

  return {
    title,
    description,
    alternates: {
      canonical: `https://spinzonow.com/compare/${competitor}`
    },
    openGraph: {
      title: `Spinzo vs ${shortName} | Bangalore Laundry Comparison`,
      description: `See how Spinzo stacks up against ${shortName}. Faster pickup, cheaper per-kg pricing, same-day delivery.`,
      url: `https://spinzonow.com/compare/${competitor}`,
      siteName: 'Spinzo',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://spinzonow.com/SpinZo.png',
          width: 512,
          height: 512,
          alt: `Spinzo vs ${shortName} Comparison`,
        },
      ],
    },
  };
}

export default async function ComparePage({ params }) {
  const { competitor } = await params;
  const compKey = competitor.replace('spinzo-vs-', '');
  const comp = getCompetitor(compKey);

  if (!comp) {
    notFound();
  }

  const faqSchema = FAQSchema({ comp });

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <span className="text-sm font-medium text-[#994BFF] bg-[#994BFF]/5 px-3 py-1 rounded-full mb-6 inline-block">
              Laundry App Comparison
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
              Spinzo vs {comp.name}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-4 max-w-2xl mx-auto">
              {comp.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-zinc-500">
              <span className="bg-white px-3 py-1 rounded-full border border-zinc-200">{comp.type}</span>
              <span className="bg-white px-3 py-1 rounded-full border border-zinc-200">{comp.position}</span>
              {comp.founded && <span className="bg-white px-3 py-1 rounded-full border border-zinc-200">Since {comp.founded}</span>}
            </div>
          </div>

          <TLDR comp={comp} />
        </section>

        {/* Comparison Table */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-3 font-display">
              Side-by-Side Comparison
            </h2>
            <p className="text-zinc-500 text-sm mb-8">Features, pricing, and speed — fact-checked Oct 2026.</p>
            <ComparisonTable comp={comp} />
          </div>
        </section>

        {/* Why Switch */}
        <section className="py-14 bg-gradient-to-b from-purple-50/20 to-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-3 font-display">
              Why Switch from {comp.name}?
            </h2>
            <p className="text-zinc-500 text-sm mb-8 max-w-xl mx-auto">
              South Bangalore residents are switching to Spinzo for these reasons.
            </p>
            <WhySpinzoWins comp={comp} />
          </div>
        </section>

        {/* Honest assessment */}
        <HonestAssessment comp={comp} />
        <WhosItFor comp={comp} />

        <Services />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}