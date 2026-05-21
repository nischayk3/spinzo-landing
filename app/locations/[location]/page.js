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

// Provide explicit static routes for SSG at build time
export async function generateStaticParams() {
  return [
    { location: 'btm-layout' },
    { location: 'hsr-layout' },
    { location: 'koramangala' },
    { location: 'jp-nagar' },
    { location: 'jayanagar' },
    { location: 'indiranagar' },
    { location: 'whitefield' },
    { location: 'marathahalli' },
    { location: 'electronic-city' },
    { location: 'bellandur' },
  ];
}

const formatLocationName = (slug) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export async function generateMetadata({ params }) {
  const { location } = await params;
  const locationName = formatLocationName(location);

  return {
    title: `Premium Laundry & Dry Cleaning Service in ${locationName}`,
    description: `Spinzo offers Bangalore's fastest premium laundry service in ${locationName}. Doorstep pickup in 30 minutes, delivery within hours. Guaranteeed top quality Wash & Fold, Steam Ironing.`,
    alternates: {
      canonical: `https://spinzonow.com/locations/${location}`
    },
    openGraph: {
      title: `Premium Laundry Service in ${locationName} | Spinzo`,
      description: `Get your laundry picked up in 30 minutes in ${locationName}. Wash & Fold, Steam Ironing, and Dry Cleaning delivered fresh.`,
      url: `https://spinzonow.com/locations/${location}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { location } = await params;
  const locationName = formatLocationName(location);

  const dynamicHeadline = (
    <>
      Premium Laundry in{" "}
      <span className="text-[#994bff]">{locationName}.</span>
      <br />
      Delivered fresh in{" "}
      <span className="text-[#994bff]">6 hours.</span>
    </>
  );

  const dynamicSubtitle = `Spinzo is ${locationName}'s fastest premium laundry service. Schedule pickup instantly and get clean, fresh clothes delivered to your door.`;
  const dynamicLocationTag = `Now serving ${locationName}`;

  // Blend local FAQs with standard FAQs
  const localFaqs = [
    {
      question: `Do you provide laundry pickup in ${locationName}?`,
      answer: `Yes! Spinzo provides blazing fast 30-minute laundry pickup directly from your doorstep anywhere in ${locationName}, Bangalore.`,
    },
    {
      question: `How fast is delivery to ${locationName}?`,
      answer: `We guarantee delivery within 6 hours for most services in ${locationName}. You can also schedule the exact delivery slot that works best for you right from the app.`,
    },
    {
      question: `What laundry services do you offer in ${locationName}?`,
      answer: `We offer a full range of premium services including Wash & Fold, Wash & Iron, Steam Ironing, Dry Cleaning, and Blanket Washing for all residents of ${locationName}.`,
    },
    {
      question: "How are my clothes washed and handled?",
      answer: "Your clothes go through a careful multi-step process including tagging, stain treatment, professional washing, drying, ironing, packaging, and quality checks. Every garment is handled with care so it returns clean, fresh, and neatly packed.",
    },
    {
      question: "Which areas does Spinzo currently serve outside of this area?",
      answer: "Spinzo currently operates across major South Bangalore locations including HSR Layout, BTM Layout, Koramangala, SG Palya, Wilson Garden, Bomanhalli, JP Nagar, and Jayanagar.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, cards, and cash on delivery depending on the order type. Payments can also be completed directly through the app or web platform.",
    }
  ];

  // LocalBusiness JSON-LD schema injected dynamically
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LaundryService'],
    name: `Spinzo Laundry ${locationName}`,
    image: 'https://spinzonow.com/SpinZo.png', 
    url: `https://spinzonow.com/locations/${location}`,
    telephone: '+919876543210', 
    priceRange: '₹₹',
    areaServed: {
      '@type': 'City',
      name: locationName,
      containedInPlace: {
        '@type': 'City',
        name: 'Bangalore'
      }
    },
    serviceArea: {
      '@type': 'Place',
      name: locationName
    },
    description: `Professional and premium laundry, dry cleaning, and ironing service in ${locationName}, Bangalore. 30 min pickup and 6 hour delivery.`
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <HeroSection 
        headline={dynamicHeadline} 
        subtitle={dynamicSubtitle} 
        locationTag={dynamicLocationTag} 
      />
      <WhySpinzo />
      <Services />
      <HowItWorks />
      <OurProcess />
      <Testimonials />
      <FAQ customFaqs={localFaqs} />
      <FinalCTA />
      <Footer />
    </div>
  );
}
