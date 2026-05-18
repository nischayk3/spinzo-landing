import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhySpinzo } from "@/components/WhySpinzo";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { QuickCommerce } from "@/components/QuickCommerce";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  // Top-level LocalBusiness JSON-LD schema
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
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <WhySpinzo />
      <Services />
      <HowItWorks />
      <QuickCommerce />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
