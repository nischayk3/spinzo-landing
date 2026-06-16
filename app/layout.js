import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
    template: '%s | Spinzo - Premium Laundry Bangalore',
    default: 'Spinzo - Premium Laundry & Dry Cleaning Service in Bangalore | 30-Min Pickup',
  },
  description: "Bangalore's fastest premium laundry service — doorstep pickup in 30 minutes, delivery within hours. Wash & Fold at ₹85/kg, Steam Ironing, Dry Cleaning & more. Serving Jayanagar, Koramangala, HSR Layout, BTM Layout, JP Nagar & across South Bangalore.",
  keywords: ['laundry service Bangalore', 'laundry near me', 'wash and fold Bangalore', 'dry cleaning Bangalore', 'laundry pickup', 'premium laundry Bangalore', '30 minute laundry pickup'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Spinzo - Premium Laundry & Dry Cleaning Service in Bangalore',
    description: 'Get laundry picked up in 30 minutes and delivered fresh within hours. Serving all of South Bangalore.',
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
  other: {
    'google-site-verification': 'google1d9afabe7853ce9f',
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-background)] text-[var(--color-text)]">
        <LenisProvider>{children}</LenisProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
