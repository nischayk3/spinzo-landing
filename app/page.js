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
  const areaNames = SERVICE_LOCATIONS.slice(0, 6).map(l => l.name).join(', ') + ' and more';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    name: 'Spinzo Laundry',
    image: 'https://spinzonow.com/SpinZo.png',
    url: 'https://spinzonow.com',
    telephone: '+917676878832',
    priceRange: '₹₹',
    areaServed: SERVICE_LOCATIONS.map(l => ({
      '@type': 'City',
      name: l.name,
      containedInPlace: { '@type': 'City', name: 'Bangalore' }
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9187,
      longitude: 77.6101
    },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      ratingCount: '250'
    },
    sameAs: [
      'https://spinzo.in',
      'https://play.google.com/store/apps/details?id=com.nischayk3.Spinit',
      'https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814'
    ]
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spinzonow.com' }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "How does Spinzo's laundry service work?",
        acceptedAnswer: { '@type': 'Answer', text: 'Schedule a pickup via the app. We collect your clothes in as little as 30 minutes, professionally clean them, and deliver them back fresh within hours.' }
      },
      {
        '@type': 'Question',
        name: 'Which areas does Spinzo serve?',
        acceptedAnswer: { '@type': 'Answer', text: 'We serve 14 neighborhoods across South Bangalore including Jayanagar, JP Nagar, BTM Layout, Koramangala, HSR Layout, Kudlu, Bommanahalli, Wilson Garden, Shanti Nagar, Adugodi, SG Palya, Tavarekere, Madiwala, and S R Layout.' }
      },
      {
        '@type': 'Question',
        name: 'What laundry services do you offer?',
        acceptedAnswer: { '@type': 'Answer', text: 'We offer Wash & Fold at ₹85/kg, Wash & Iron at ₹140/kg, Steam Ironing at ₹18/piece, Blanket Wash from ₹299, and Dry Cleaning. All services include free doorstep pickup and delivery.' }
      },
      {
        '@type': 'Question',
        name: 'How fast is laundry pickup and delivery?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pickup is within 30 minutes. Delivery is within 6 hours for Wash & Fold and within 24-48 hours for Wash & Iron.' }
      },
      {
        '@type': 'Question',
        name: 'What if my clothes get damaged?',
        acceptedAnswer: { '@type': 'Answer', text: 'We have a 100% safety guarantee. In the rare event of any damage, we provide compensation up to 2x the service value.' }
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: { '@type': 'Answer', text: 'We accept UPI, GPay, Paytm, cards, and cash on delivery.' }
      }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhySpinzo />
        <ServiceHighlights />
        <Services />
        <PricingSection />
        <AreasWeServe />
        <HowItWorks />
        <OurProcess />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
