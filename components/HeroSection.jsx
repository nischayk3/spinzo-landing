"use client";
import { motion } from "framer-motion";
import { Clock, Truck, Sparkles, Globe } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";


const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
};

const trustItems = [
  { icon: Clock, label: "Pickup in 30 mins" },
  { icon: Truck, label: "Delivery within hours" },
  { icon: Sparkles, label: "Premium fabric care" },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-fit md:min-h-screen flex items-start md:items-center overflow-hidden bg-cyan-50/50 pt-8 pb-16 md:pt-0 md:pb-0"
    >
      {/* Soft background glows from the design system */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-100/50 rounded-full filter blur-3xl opacity-50 animate-blob pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-green-100/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 shadow-md shadow-purple-500/20 px-4 py-1.5 text-sm font-semibold text-zinc-900 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                now serving in Bangalore
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-cyan-950 mb-6 font-display"
            >
              Laundry Pickup in <span className="text-[#8B5CF6]">30 Mins.</span>
              <br />
              Fresh Clothes in <span className="text-[#8B5CF6]">6 Hours.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-base md:text-lg text-zinc-800/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Spinzo is Bangalore&apos;s fastest premium laundry service. Schedule your pickup instantly and get clean, fresh clothes delivered right back to your door.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-10"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nischayk3.Spinit&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white rounded-xl px-4 py-2 border border-zinc-800 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/10"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.25 1.585a1.5 1.5 0 0 0-.25 1v18.83a1.5 1.5 0 0 0 .25 1l10.42-10.42z" fill="#EA4335" />
                  <path d="M17.15 12.443L13.67 8.96 3.25 19.38a1.5 1.5 0 0 0 .97.35 1.5 1.5 0 0 0 1-.38l11.93-6.91" fill="#FBBC05" />
                  <path d="M17.15 11.557L5.22 4.65a1.5 1.5 0 0 0-1-.38 1.5 1.5 0 0 0-.97.35l10.42 10.42z" fill="#4285F4" />
                  <path d="M17.15 12L13.67 8.52l-3.25 3.25L13.67 15.48z" fill="#34A853" />
                  <path d="M17.15 11.557a1 1 0 0 1 0 1.772l-3.48-2.022 3.48-1.75z" fill="#34A853" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] font-medium tracking-wider text-zinc-400 uppercase text-left">Get it on</span>
                  <span className="text-sm font-semibold tracking-tight text-white mt-1">Google Play</span>
                </div>
              </a>
              <a
                href="https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white rounded-xl px-4 py-2 border border-zinc-800 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/10"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] font-medium tracking-wider text-zinc-400 uppercase text-left">Download on the</span>
                  <span className="text-sm font-semibold tracking-tight text-white mt-1">App Store</span>
                </div>
              </a>
              <a
                href="https://spinzo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-[11px] text-sm font-semibold text-zinc-900 bg-white hover:bg-purple-50/50 border border-purple-200 shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Globe size={16} className="text-[#8B5CF6]" />
                Use Web App
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 text-sm font-medium text-black">
                  <item.icon size={18} className="text-[#8B5CF6]" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hidden lg:flex justify-center items-center overflow-visible"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};