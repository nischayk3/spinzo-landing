import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhySpinzo } from "@/components/WhySpinzo";
import { Services } from "@/components/Services";
import { PricingSection } from "@/components/PricingSection";
import { AreasWeServe } from "@/components/AreasWeServe";
import { HowItWorks } from "@/components/HowItWorks";
import { OurProcess } from "@/components/OurProcess";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SERVICE_LOCATIONS } from "@/lib/locations";

export default function Home() {
  const serviceLocationNames = SERVICE_LOCATIONS.map(l => l.name);
  const areaNames = SERVICE_LOCATIONS.slice(0, 6).map(l => l.name).join(', ') + ' and more';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LaundryService'],
    name: 'Spinzo Laundry',
    image: 'https://spinzonow.com/SpinZo.png',
    url: 'https://spinzonow.com',
    telephone: '+919876543210',
    priceRange: '₹₹',
    areaServed: SERVICE_LOCATIONS.map(l => ({
      '@type': 'City',
      name: l.name,
      containedInPlace: {
        '@type': 'City',
        name: 'Bangalore'
      }
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    description: `Premium laundry, dry cleaning, and ironing service in Bangalore. 30-min pickup and 6-hour delivery across ${areaNames}.`,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '22:00' },
    ],
    sameAs: [
      'https://spinzo.in',
    ]
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhySpinzo />
        <Services />
        <PricingSection />
        <AreasWeServe />
        <HowItWorks />
        <OurProcess />
        <Testimonials />

        {/* Near Me SEO Block */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-display">
              Looking for Laundry Service Near Me in Bangalore?
            </h2>
            <div className="text-zinc-600 text-sm leading-relaxed space-y-3 max-w-3xl mx-auto">
              <p>
                If you&apos;re searching for <strong>&ldquo;laundry service near me&rdquo;</strong> or{" "}
                <strong>&ldquo;laundry pickup and delivery near me&rdquo;</strong> in South Bangalore, Spinzo is the answer.
                We provide the fastest laundry service across 14 neighborhoods including{" "}
                <strong>Koramangala, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Wilson Garden, Shanti Nagar, Adugodi, Kudlu, Bommanahalli, SG Palya, Tavarekere, Madiwala, and S R Layout</strong>.
              </p>
              <p>
                Our <strong>Wash & Fold service at ₹85/kg</strong> covers everyday laundry needs, while{" "}
                <strong>Wash & Iron at ₹140/kg</strong> delivers crisp, ready-to-wear clothes.
                Need <strong>Steam Ironing near you?</strong> At just ₹18 per piece. For bulky items,{" "}
                <strong>Blanket Wash starts at ₹299</strong>. All services include free doorstep pickup and delivery.
              </p>
              <p>
                Unlike local dhobis or traditional laundromats, Spinzo picks up your clothes within{" "}
                <strong>30 minutes</strong> and delivers them back <strong>within 6 hours</strong>.
                Every garment is washed separately, professionally cleaned, and quality-checked before return.
                Download the Spinzo app or use our web app to schedule your first pickup today.
              </p>
            </div>
          </div>
        </section>
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
