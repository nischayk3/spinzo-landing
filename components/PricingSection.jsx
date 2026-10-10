"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Wash & Fold",
    turnaround: "⚡ 6–12 Hours",
    subtitle: "Everyday wear & casuals",
    features: [
      "Separately washed (zero mixing)",
      "Free 30-min doorstep pickup",
      "Digital weighing at doorstep",
      "Neatly folded & ready to store",
    ],
    popular: false,
  },
  {
    name: "Wash & Iron",
    turnaround: "👔 24–48 Hours",
    subtitle: "Office wear & formals",
    features: [
      "Individual wash + steam press",
      "Crisp, ready-to-wear finish",
      "Hanger or folded packing",
      "Free doorstep pickup & drop",
    ],
    popular: true,
  },
  {
    name: "Steam Ironing",
    turnaround: "💨 12–24 Hours",
    subtitle: "Crease-free pressing",
    features: [
      "High-pressure steam press",
      "Eliminates stubborn wrinkles",
      "Safe on silks & delicates",
      "Free pickup on 20+ pieces",
    ],
    popular: false,
  },
  {
    name: "Dry Cleaning",
    turnaround: "✨ 24–48 Hours",
    subtitle: "Suits, sarees & delicates",
    features: [
      "Chemical-free solvent care",
      "Specialized stain spotting",
      "Hand-finished pressing",
      "Protective garment covers",
    ],
    popular: false,
  },
  {
    name: "Blanket Wash",
    turnaround: "🛏️ 24–48 Hours",
    subtitle: "Comforters, quilts & heavy linens",
    features: [
      "Deep allergen & dust sanitization",
      "Gentle high-capacity cycle",
      "Ultra-soft fluff drying",
      "Free doorstep pickup & delivery",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
            Transparent Care
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            No Hidden Charges. Just Fresh Clothes.
          </h2>
          <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed">
            Honest doorstep weighing, individual wash cycles, and zero surprise fees. Every order includes free doorstep pickup and return delivery across South Bangalore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                plan.popular
                  ? "border-[#8B5CF6] shadow-lg shadow-purple-500/10 ring-1 ring-[#8B5CF6]/20"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-zinc-900 mb-1 font-display">{plan.name}</h3>
                
                <div className="mb-5 pb-4 border-b border-purple-50">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] bg-purple-50 px-2.5 py-1 rounded-full">
                    {plan.turnaround}
                  </span>
                  <p className="text-xs text-zinc-500 mt-2 font-medium">{plan.subtitle}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                      <CheckCircle size={15} className="text-green-500 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/917676878832?text=Hi%20Spinzo!%20I%20want%20to%20book%20a%20${encodeURIComponent(plan.name)}%20pickup`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-xl transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#8B5CF6] text-white hover:bg-[#7A28E0] shadow-md shadow-purple-500/20"
                    : "bg-purple-50 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
                }`}
              >
                Book {plan.name} →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-purple-100/60 max-w-2xl mx-auto"
        >
          <p className="text-sm text-zinc-500 mb-3">
            All orders include free doorstep pickup &amp; delivery · 100% garment protection guarantee
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#8B5CF6] hover:text-[#7A28E0] transition-colors group"
          >
            Looking for our itemized per-kg &amp; per-piece rates?
            <span className="underline group-hover:no-underline">View Complete Rate Card</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
