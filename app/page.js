import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhySpinzo } from "@/components/WhySpinzo";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { OurProcess } from "@/components/OurProcess";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  // Re-render trigger - force recompilation for image update v2
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LaundryService'],
    name: 'Spinzo Laundry Bangalore',
    image: 'https://spinzonow.com/SpinZo.png',
    url: 'https://spinzonow.com',
    telephone: '+919876543210',
    priceRange: '₹₹',
    areaServed: {
      '@type': 'City',
      name: 'Bangalore'
    },
    description: 'Professional and premium laundry, dry cleaning, and ironing service in South Bangalore. 30 min pickup and 6 hour delivery.'
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhySpinzo />
        <Services />
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