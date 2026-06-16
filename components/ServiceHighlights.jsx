"use client";
import { motion } from "framer-motion";
import { Clock, Truck, Shield, IndianRupee, Star, Zap } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "30-Minute Pickup",
    description: "We arrive at your doorstep in 30 minutes. Schedule on the app and we handle the rest.",
    keyword: "laundry pickup near me",
  },
  {
    icon: Truck,
    title: "Delivery in Hours",
    description: "Not days. Hours. Fresh, clean clothes delivered back to your door within 6 hours.",
    keyword: "laundry delivery service",
  },
  {
    icon: IndianRupee,
    title: "From ₹85/kg",
    description: "Transparent, weight-based pricing. No hidden fees. No surprise charges. Ever.",
    keyword: "cheap laundry service near me",
  },
  {
    icon: Shield,
    title: "100% Safety",
    description: "Every garment is tagged, washed separately, and quality-checked. 2x compensation on damage.",
    keyword: "safe laundry service",
  },
  {
    icon: Star,
    title: "4.8★ Rated",
    description: "Trusted by thousands of customers across South Bangalore for premium garment care.",
    keyword: "best laundry service Bangalore",
  },
  {
    icon: Clock,
    title: "9AM - 10PM",
    description: "Flexible scheduling every day of the week, including weekends. Your time, your choice.",
    keyword: "laundry service open near me",
  },
];

export const ServiceHighlights = () => {
  return (
    <section className="py-20 lg:py-28 bg-zinc-50/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
            Why Spinzo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            South Bangalore&apos;s Most Trusted Laundry Service
          </h2>
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
            The fastest laundry pickup and delivery service near you.
            Professional cleaning, transparent pricing, and doorstep convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm hover:shadow-lg hover:border-purple-100 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 border border-purple-100/50 group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] transition-all duration-300">
                <item.icon size={22} className="text-[#8B5CF6] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2 font-display">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
