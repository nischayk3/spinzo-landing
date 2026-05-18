import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
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
    template: '%s | Spinzo',
    default: 'Spinzo - Premium Laundry & Dry Cleaning Service in Bangalore',
  },
  description: 'Bangalore\'s fastest premium laundry service. Doorstep pickup in 30 minutes, delivery within hours. Guaranteed top quality Wash & Fold, Steam Ironing, and Dry Cleaning.',
  openGraph: {
    title: 'Spinzo - Premium Laundry & Dry Cleaning Service in Bangalore',
    description: 'Bangalore\'s fastest premium laundry service. Doorstep pickup in 30 minutes, delivery within hours.',
    url: 'https://spinzonow.com',
    siteName: 'Spinzo',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spinzo - Premium Laundry & Dry Cleaning Service in Bangalore',
    description: 'Bangalore\'s fastest premium laundry service. Doorstep pickup in 30 minutes.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
