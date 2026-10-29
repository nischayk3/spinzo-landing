import { notFound } from 'next/navigation';
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { COMPETITORS, getCompetitor } from "@/lib/competitors";

// Only these competitors get alternative pages — the ones with the most
// review complaints and switch-intent search volume.
const ALTERNATIVE_SLUGS = ['bumbledry', 'tumbledry', 'laundrokart'];

export async function generateStaticParams() {
  return ALTERNATIVE_SLUGS.map((competitor) => ({ competitor }));
}

export async function generateMetadata({ params }) {
  const { competitor } = await params;
  const comp = getCompetitor(competitor);
  if (!comp) return { title: 'Not Found' };

  const rawTitle = `Best ${comp.name} Alternative in Bangalore | Spinzo`;
  const title = rawTitle.length > 58 ? rawTitle.substring(0, 58) : rawTitle;

  const rawDesc = `Looking for a ${comp.name} alternative in Bangalore? Spinzo offers 30-min pickup, 6-hr delivery & ₹85/kg pricing across South Bangalore. No minimums.`;
  const description = rawDesc.length > 155 ? rawDesc.substring(0, 152) + '...' : rawDesc;

  return {
    title,
    description,
    alternates: {
      canonical: `https://spinzonow.com/alternatives/${competitor}`
    },
    openGraph: {
      title: `Why South Bangalore is Switching from ${comp.name} to Spinzo`,
      description: `${comp.name} delay? Spinzo picks up in 30 mins and delivers in 6 hours — ₹85/kg, no minimum, free doorstep service.`,
      url: `https://spinzonow.com/alternatives/${competitor}`,
      siteName: 'Spinzo',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://spinzonow.com/SpinZo.png',
          width: 512,
          height: 512,
          alt: `Best ${comp.name} Alternative - Spinzo Laundry`,
        },
      ],
    },
  };
}

function renderAlternativeContent(comp, slug) {
  const content = {};
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };

  if (slug === 'bumbledry') {
    content.header = 'Is BumbleDry Not Working Out?';
    content.intro = `BumbleDry launched in 2024 and has grown fast — 10k+ customers, good Instagram presence, strong local SEO. But a 2–3 day turnaround and ₹95–99/kg pricing means you're waiting days for what could be delivered the same day.`;
    content.commonComplaints = [
      { text: '3+ days and laundry still not delivered', source: 'Instagram Oct 2026', detail: '"They haven\'t delivered my clothes it\'s 3 days now" — @shiva_g_1209 on an official BumbleDry reel' },
      { text: 'Customer service doesn\'t respond', source: 'Instagram Oct 2026', detail: '"Very bad service. Not responding for calls and messages. Waste of your time." — @plr2946' },
      { text: 'Clothes not returned at all', source: 'Instagram Oct 2026', detail: '"Very bad experience. They have not yet returned my clothes. Their customer support is worst." — @mana.nkathuria' },
      { text: '₹299 minimum order', source: 'BumbleDry website', detail: 'Minimum order of ₹299 locks you in even if you only need a few items washed' },
    ];
    faqLd.mainEntity.push(
      { '@type': 'Question', name: 'Is BumbleDry available in Koramangala?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, BumbleDry covers Koramangala blocks 1–8. But their standard turnaround is 2–3 days. Spinzo delivers the same Koramangala area in 6–12 hours.' } },
      { '@type': 'Question', name: 'Is BumbleDry cheaper than Spinzo?', acceptedAnswer: { '@type': 'Answer', text: 'No. BumbleDry charges ₹95/kg for Wash & Fold (₹99 on web). Spinzo charges ₹85/kg with no minimum order. BumbleDry also has a ₹299 minimum, which Spinzo does not.' } },
    );
    content.whySpinzoBetter = 'Spinzo is 4–8× faster than BumbleDry (6–12 hours vs 2–3 days), ₹10/kg cheaper, and has no minimum order. We also have an express same-day option for ₹149/kg that BumbleDry doesn\'t offer at all.';
  } else if (slug === 'tumbledry') {
    content.header = 'Tired of Tumbledry\'s Delays & Per-Piece Pricing?';
    content.intro = `Tumbledry is India's largest laundry chain with 1,600+ stores and 40L+ customers. But their franchise model means quality varies by location, their per-piece pricing is expensive for bulk laundry, and scheduled pickup means you wait 24+ hours just for collection.`;
    content.commonComplaints = [
      { text: 'Expensive for bulk laundry', source: 'Justdial reviews', detail: '"Per-piece pricing costs 60%+ more for bulk laundry compared to per-kg services." Tumbledry charges ₹25–40/piece, vs Spinzo\'s ₹85/kg flat.' },
      { text: 'Clothes missing or delayed', source: 'Reddit r/hyderabad', detail: '"Tumbledry lost my clothes worth ₹25-30k. What recourse do I have?" — multiple Reddit threads about lost garments.' },
      { text: 'Rude behaviour from staff', source: 'Justdial / Reddit', detail: 'Multiple complaints about rude staff, poor communication, and "wrong information provided by customer care agents."' },
      { text: 'Clothes returned stained', source: 'Justdial reviews', detail: '"Some customers complained about clothes being mishandled or stained" and "returned in worse condition than before."' },
    ];
    faqLd.mainEntity.push(
      { '@type': 'Question', name: 'Is Tumbledry or Spinzo cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Spinzo is significantly cheaper for bulk laundry. Tumbledry charges ₹25–40 per piece (≈₹160–280/kg). Spinzo charges ₹85/kg flat. For a typical 5kg weekly load, Spinzo is ₹425 vs Tumbledry\'s ₹800–1400.' } },
      { '@type': 'Question', name: 'Is Tumbledry faster than Spinzo?', acceptedAnswer: { '@type': 'Answer', text: 'No. Spinzo picks up in 30 minutes and delivers in 6–12 hours. Tumbledry operates on scheduled pickup (next-day) and 24-hour delivery.' } },
    );
    content.whySpinzoBetter = 'Spinzo is 4× faster (6-12h vs 24h+), 60% cheaper for bulk laundry (₹85/kg vs ₹25–40/piece), and operates as in-house dark stores rather than franchise-dependent outlets. Quality is consistent because we run our own operations.';
  } else if (slug === 'laundrokart') {
    content.header = 'Waiting 4–5 Days for Your Laundry?';
    content.intro = `LaundroKart has been in Bangalore since 2016 — they're the most experienced operator in the city. But their 4–5 day turnaround is the slowest of any on-demand laundry service, and per-piece pricing (₹23/piece ≈ ₹115–150/kg) adds up fast for anyone washing more than a few items.`;
    content.commonComplaints = [
      { text: 'Very slow delivery — 4–5 days', source: 'Reddit r/bangalore', detail: '"Beware of LaundroKart. After 3 days when I checked the clothes I was disappointed." — u/anon, Reddit.' },
      { text: 'Unprofessional communication', source: 'Trustpilot', detail: '"Extremely unprofessional. They have a scheduling assistant but neither is the pickup done on time nor is the delivery." — Trustpilot review.' },
      { text: 'Expensive for bulk loads', source: 'User reports', detail: '₹23/piece (≈₹115–150/kg) means a 5kg load costs ₹575–750 vs ₹425 at Spinzo.' },
      { text: 'No express or urgent option', source: 'LaundroKart website', detail: 'All orders follow the same 4–5 day queue regardless of urgency.' },
    ];
    faqLd.mainEntity.push(
      { '@type': 'Question', name: 'How fast is LaundroKart delivery?', acceptedAnswer: { '@type': 'Answer', text: 'LaundroKart standard delivery is 4–5 days. Spinzo delivers in 6–12 hours — 8–16× faster.' } },
      { '@type': 'Question', name: 'Does Spinzo serve Silk Board?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Spinzo has a dark store at Silk Board serving Central Silk Board Colony, BTM 2nd Stage, Madiwala, and the entire junction area. Pickup time is 18 minutes.' } },
    );
    content.whySpinzoBetter = 'Spinzo is 8–16× faster than LaundroKart (6–12h vs 4–5 days), cheaper at ₹85/kg vs their ₹23/piece, and has no minimum order. We also offer same-day express at ₹149/kg — something LaundroKart doesn\'t have at all.';
  }

  return { content, faqLd };
}

export default async function AlternativePage({ params }) {
  const { competitor } = await params;
  const comp = getCompetitor(competitor);
  if (!comp || !ALTERNATIVE_SLUGS.includes(competitor)) {
    notFound();
  }

  const { content, faqLd } = renderAlternativeContent(comp, competitor);

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#994BFF]/5 to-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-[#994BFF] bg-[#994BFF]/5 px-3 py-1 rounded-full mb-4 inline-block">
                {comp.name} Alternative
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F0B3F] mb-4 font-display">
                {content.header}
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-6">
                {content.intro}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://spinzo.in/"
                   className="inline-flex items-center gap-2 bg-[#994BFF] hover:bg-[#8828FF] text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-500/20">
                  Try Spinzo — ₹85/kg, 30-min pickup →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Speed advantage banner */}
        <section className="py-6 bg-[#1F0B3F] text-center">
          <p className="text-white text-sm md:text-base font-semibold">
            ⚡ Spinzo delivers in <span className="text-green-400">6–12 hours</span>. {comp.name} takes <span className="text-amber-400">{comp.delivery}</span>. Why wait?
          </p>
        </section>

        {/* Common Complaints */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-2 text-center font-display">
              Common {comp.name} Complaints
            </h2>
            <p className="text-zinc-500 text-sm text-center mb-8 max-w-xl mx-auto">
              The most frequent issues reported by {comp.name} users — sourced from Justdial, Reddit, Instagram, and Trustpilot reviews.
            </p>
            <div className="space-y-6 max-w-3xl mx-auto">
              {content.commonComplaints.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 mb-1">{c.text}</h3>
                      <p className="text-sm text-zinc-600 mb-1">&ldquo;{c.detail}&rdquo;</p>
                      <span className="text-xs text-red-400 font-medium">Source: {c.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Spinzo */}
        <section className="py-14 bg-purple-50/30 border-y border-purple-100">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F0B3F] mb-4 font-display">
              How Spinzo Fixes These Problems
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm mb-6">
                <p className="text-zinc-700 leading-relaxed">{content.whySpinzoBetter}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-5 bg-white rounded-xl border border-green-100 shadow-sm">
                  <div className="text-2xl font-extrabold text-green-600">30 min</div>
                  <div className="text-xs text-zinc-500 font-semibold uppercase mt-1">Pickup</div>
                  <p className="text-xs text-zinc-600 mt-2">vs {comp.pickup || 'scheduled pickup'} for {comp.name}</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-green-100 shadow-sm">
                  <div className="text-2xl font-extrabold text-green-600">6–12 hrs</div>
                  <div className="text-xs text-zinc-500 font-semibold uppercase mt-1">Delivery</div>
                  <p className="text-xs text-zinc-600 mt-2">vs {comp.delivery} for {comp.name}</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-green-100 shadow-sm">
                  <div className="text-2xl font-extrabold text-green-600">₹85/kg</div>
                  <div className="text-xs text-zinc-500 font-semibold uppercase mt-1">Wash & Fold</div>
                  <p className="text-xs text-zinc-600 mt-2">{comp.washFoldPrice || 'Per-piece pricing'}</p>
                </div>
              </div>
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