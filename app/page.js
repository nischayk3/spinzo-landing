import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhySpinzo } from "@/components/WhySpinzo";
import { Services } from "@/components/Services";
import { PricingSection } from "@/components/PricingSection";
import { AreasWeServe } from "@/components/AreasWeServe";
import { ServiceHighlights } from "@/components/ServiceHighlights";
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

        <ServiceHighlights />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
