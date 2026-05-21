"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-green-400 p-10 md:p-16 text-center shadow-2xl shadow-cyan-500/30"
        >
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/10 rounded-full filter blur-2xl opacity-50 pointer-events-none" />
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/10 rounded-full filter blur-2xl opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-display">
              Experience Laundry, Reimagined.
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Ready for a laundry service that's as premium and fast as you are? Download the Spinzo app or launch our web platform.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.nischayk3.Spinit&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white rounded-xl px-4 py-2 border border-zinc-800 transition-all duration-300 shadow-lg shadow-black/10 w-[185px] h-[52px] justify-start"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.25 1.585a1.5 1.5 0 0 0-.25 1v18.83a1.5 1.5 0 0 0 .25 1l10.42-10.42z" fill="#EA4335" />
                  <path d="M17.15 12.443L13.67 8.96 3.25 19.38a1.5 1.5 0 0 0 .97.35 1.5 1.5 0 0 0 1-.38l11.93-6.91" fill="#FBBC05" />
                  <path d="M17.15 11.557L5.22 4.65a1.5 1.5 0 0 0-1-.38 1.5 1.5 0 0 0-.97.35l10.42 10.42z" fill="#4285F4" />
                  <path d="M17.15 12L13.67 8.52l-3.25 3.25L13.67 15.48z" fill="#34A853" />
                  <path d="M17.15 11.557a1 1 0 0 1 0 1.772l-3.48-2.022 3.48-1.75z" fill="#34A853" />
                </svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[9px] font-medium tracking-wider text-zinc-400 uppercase">Get it on</span>
                  <span className="text-sm font-semibold tracking-tight text-white mt-1">Google Play</span>
                </div>
              </motion.a>

              <motion.a
                href="https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white rounded-xl px-4 py-2 border border-zinc-800 transition-all duration-300 shadow-lg shadow-black/10 w-[185px] h-[52px] justify-start"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[9px] font-medium tracking-wider text-zinc-400 uppercase">Download on the</span>
                  <span className="text-sm font-semibold tracking-tight text-white mt-1">App Store</span>
                </div>
              </motion.a>

              <motion.a
                href="https://spinzo.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white rounded-xl px-4 py-2 border border-zinc-800 transition-all duration-300 shadow-lg shadow-black/10 w-[185px] h-[52px] justify-start"
              >
                <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-[9px] font-medium tracking-wider text-zinc-400 uppercase">Use online</span>
                  <span className="text-sm font-semibold tracking-tight text-white mt-1">Web App</span>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};