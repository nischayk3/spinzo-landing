import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TrackingScripts } from "@/components/TrackingScripts";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://spinzonow.com'),
  title: {
    template: '%s',
    default: "Spinzo - Premium Laundry & Dry Cleaning in Bangalore",
  },
  description: "Bangalore's fastest premium laundry service — doorstep pickup in 30 minutes, delivery within hours. Wash & Fold at ₹85/kg, Steam Ironing, Dry Cleaning & more. Serving Jayanagar, Koramangala, HSR Layout, BTM Layout, JP Nagar, Sarjapur Road, Electronic City & across South Bangalore. Help & support: +91 76768 78832.",
  keywords: ['laundry service Bangalore', 'laundry near me', 'cleaners for clothes near me', 'laundry shops near me', 'find laundry service near me', 'wash and fold Bangalore', 'dry cleaning Bangalore', 'laundry pickup', 'premium laundry Bangalore', '30 minute laundry pickup', 'laundry service BTM Layout', 'laundry service HSR Layout', 'laundry service Koramangala', 'laundry service Sarjapur Road', 'shoe cleaning Bangalore', 'steam ironing Bangalore', 'blanket wash Bangalore', 'ironing service near me'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Spinzo - Premium Laundry & Dry Cleaning Service in Bangalore',
    description: 'Get laundry picked up in 30 minutes and delivered fresh within hours. Serving Jayanagar, Koramangala, HSR Layout, BTM Layout, JP Nagar, Sarjapur Road, Electronic City & all South Bangalore. Contact +91 76768 78832.',
    url: 'https://spinzonow.com',
    siteName: 'Spinzo',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/SpinZo.png',
        width: 512,
        height: 512,
        alt: 'Spinzo - Premium Laundry Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spinzo - Premium Laundry & Dry Cleaning Service in Bangalore',
    description: 'Bangalore\'s fastest premium laundry. 30-min pickup, delivery in hours.',
    images: ['/SpinZo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  itunes: {
    appId: '6758751814',
  },
  other: {
    'google-site-verification': 'google1d9afabe7853ce9f',
    'facebook-domain-verification': 'e4jol4zdwbrpnjlq7i0xzw7ump6oao',
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* WeBotApp Signal Privacy-First Analytics Tag */}
        <script
          defer
          src="https://signal.webotapp.com/tracker.js"
          data-site-id="spinzonow.com"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DryCleaningOrLaundry",
              "name": "Spinzo",
              "url": "https://spinzonow.com",
              "logo": "https://spinzonow.com/SpinZo.png",
              "image": "https://spinzonow.com/SpinZo.png",
              "description": "Bangalore's fastest premium laundry service — doorstep pickup in 30 minutes, delivery within hours. Wash & Fold at ₹85/kg.",
              "telephone": "+917676878832",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Koramangala", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar", "Bellandur", "South Bangalore"
              ],
              "sameAs": [
                "https://spinzo.in",
                "https://play.google.com/store/apps/details?id=com.nischayk3.Spinit",
                "https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-background)] text-[var(--color-text)]">
        <TrackingScripts />
        <LenisProvider>{children}</LenisProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
