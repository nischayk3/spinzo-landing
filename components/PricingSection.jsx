"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Wash & Fold",
    price: "₹85",
    unit: "/kg",
    minOrder: "Min 5 kg",
    features: [
      "Wash, dry & fold",
      "Free pickup & delivery",
      "Delivery in 6-12 hours",
      "UPI / Cash on delivery",
    ],
    popular: false,
  },
  {
    name: "Wash & Iron",
    price: "₹140",
    unit: "/kg",
    minOrder: "Min 5 kg",
    features: [
      "Wash, iron & fold",
      "Free pickup & delivery",
      "Crisp, ready-to-wear",
      "Delivery in 24-48 hours",
    ],
    popular: true,
  },
  {
    name: "Steam Ironing",
    price: "₹18",
    unit: "/piece",
    minOrder: "Min 5 pieces",
    features: [
      "Professional steam iron",
      "Free pickup on 20+ pcs",
      "Perfect for formals",
      "Delivery in 24-48 hours",
    ],
    popular: false,
  },
  {
    name: "Blanket Wash",
    price: "₹299",
    unit: "/single",
    minOrder: "Starting from",
    features: [
      "Deep clean for blankets",
      "Double blanket ₹399",
      "Specialized washing",
      "Free pickup & delivery",
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
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            No Hidden Charges. Just Fresh Clothes.
          </h2>
          <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed">
            Weight-based pricing that&apos;s fair and transparent. What you see is what you pay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? "border-[#8B5CF6] shadow-lg shadow-purple-500/10 ring-1 ring-[#8B5CF6]/20"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-zinc-900 mb-1 font-display">{plan.name}</h3>
              <p className="text-xs text-zinc-500 mb-4">{plan.minOrder}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-zinc-900">{plan.price}</span>
                <span className="text-zinc-500 text-lg ml-1">{plan.unit}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-zinc-500 mt-8"
        >
          All prices inclusive of GST. Free pickup and delivery in all service areas.
        </motion.p>
      </div>
    </section>
  );
};
