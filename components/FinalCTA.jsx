"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const FinalCTA = () => {
  return (
    <section data-testid="final-cta-section" className="py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#994bff] to-[#7c3aed] p-10 md:p-16 text-center"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Experience faster laundry today
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-lg mx-auto">
              Download the Spinzo app or start using the web app.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.nischayk3.Spinit&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-google-play-btn"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[#994bff] bg-white hover:bg-slate-50 shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
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
                data-testid="cta-app-store-btn"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[#994bff] bg-white hover:bg-slate-50 shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
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
                data-testid="cta-web-app-btn"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors duration-200 hover:scale-105 active:scale-95"
              >
                Use Web App
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
