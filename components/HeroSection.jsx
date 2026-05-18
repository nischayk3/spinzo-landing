"use client";
import { motion } from "framer-motion";
import { Clock, Truck, Sparkles, Globe } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import step1 from "../assets/Step 1.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const trustItems = [
  { icon: Clock, label: "Pickup in 30 minutes" },
  { icon: Truck, label: "Delivery within hours" },
  { icon: Sparkles, label: "Premium fabric care" },
];

export const HeroSection = ({ headline, subtitle, locationTag }) => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background glows */}
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="pt-8 md:pt-0">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-1.5 text-sm font-medium text-[#994bff] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#994bff] animate-pulse" />
                {locationTag || "Now in Bangalore"}
              </span>
            </motion.div>

            {headline ? (
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-6"
              >
                {headline}
              </motion.h1>
            ) : (
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-6"
              >
                Laundry picked up in{" "}
                <span className="text-[#994bff]">30 minutes.</span>
                <br />
                Delivered fresh in{" "}
                <span className="text-[#994bff]">6 hours.</span>
              </motion.h1>
            )}

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-slate-500 leading-relaxed max-w-lg mb-8"
            >
              {subtitle || "Spinzo is Bangalore's fastest premium laundry service. Schedule pickup instantly and get clean, fresh clothes delivered to your door."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nischayk3.Spinit&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-google-play-btn"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#994bff] to-[#8b31ff] shadow-lg shadow-purple-500/30 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z" />
                </svg>
                Download on Google Play
              </a>
              <a
                href="https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-app-store-btn"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#994bff] to-[#8b31ff] shadow-lg shadow-purple-500/30 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
              <a
                href="https://spinzo.in/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-web-app-btn"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#994bff] to-[#8b31ff] shadow-lg shadow-purple-500/30 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <Globe size={18} />
                Use Web App
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 mb-12 lg:mb-0"
            >
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  data-testid={`trust-indicator-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-2 text-sm text-slate-500"
                >
                  <item.icon size={16} className="text-[#994bff]" />
                  {item.label}
                </div>
              ))}
            </motion.div>

            {/* Mobile Phone Mockup (Visible only on mobile/tablet) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:hidden flex justify-center w-full mt-4"
            >
              <div className="w-[280px]">
                <img 
                  src={step1.src} 
                  alt="Spinzo App" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
