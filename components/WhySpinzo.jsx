"use client";
import { motion } from "framer-motion";
import { Package, Shirt, Star } from "lucide-react";
import { CountUp } from "./CountUp";

const stats = [
  { icon: Package, value: 2000, suffix: "+", label: "Orders Completed" },
  { icon: Shirt, value: 10000, suffix: "+", label: "Clothes Freshly Cleaned", formatted: "10,000" },
  { icon: Star, value: 4.8, suffix: "★", label: "Average Customer Rating", isDecimal: true },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export const WhySpinzo = () => {
  return (
    <section id="why-spinzo" className="py-20 lg:py-28 bg-[#8B5CF6]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
            Pure Trust, Pure Clean
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            Why Bangalore Trusts Spinzo
          </h2>
          <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed">
            Our commitment to speed, quality, and customer satisfaction speaks for itself. Here are the numbers that make us proud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.6 }}
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
              className="text-center rounded-3xl bg-white/60 backdrop-blur-sm p-8 lg:p-10 border border-purple-100/50 shadow-lg shadow-purple-500/5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-white hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center mx-auto mb-6 border border-white/50 shadow-inner-soft">
                <stat.icon size={32} className="text-[#8B5CF6]" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-700 mt-3 font-medium text-base mb-2">{stat.label}</p>
              <div className="text-5xl md:text-6xl font-bold text-zinc-900 tabular-nums">
                <CountUp
                  target={stat.value}
                  isDecimal={stat.isDecimal}
                />
                <span className="text-[#8B5CF6] ml-1">{stat.suffix}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};