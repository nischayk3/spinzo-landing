"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Shirt, Wind } from "lucide-react";
import Image from 'next/image';

// Re-using images from the previous implementation, assuming they are in public folder
const serviceData = {
  "wash-fold": {
    icon: Droplet,
    title: "Wash & Fold",
    displayTitle: ["Wash &", "Fold"],
    description: "Perfect for your everyday laundry needs. We wash, dry, and fold with care.",
    price: "₹85 / kg",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800",
  },
  "wash-iron": {
    icon: Shirt,
    title: "Wash & Iron",
    displayTitle: ["Wash &", "Iron"],
    description: "Get your clothes washed, ironed, and returned to you crisp and ready to wear.",
    price: "₹120 / kg",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800",
  },
  "steam-iron": {
    icon: Wind,
    title: "Steam Ironing",
    displayTitle: ["Steam", "Ironing"],
    description: "Professional steam ironing to remove creases from your garments, keeping them crisp, fresh, and ready to wear.",
    price: "₹15 / kg",
    image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80&w=800",
  },
};

export const Services = () => {
  const [activeTab, setActiveTab] = useState("wash-fold");

  const activeService = serviceData[activeTab];

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 to-white"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            Tailored to Your Needs
          </h2>
          <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed">
            Choose the perfect service for your clothes. We handle everything with the utmost care, from everyday wear to delicate fabrics.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-inner-soft-md border border-white/50">
              {Object.keys(serviceData).map((key) => {
                const IconComponent = serviceData[key].icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative px-4 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${activeTab === key ? "text-white" : "text-zinc-700 hover:bg-white/50"}`}
                  >
                    {activeTab === key && (
                      <motion.div
                        layoutId="active-service-pill"
                        className="absolute inset-0 bg-[#8B5CF6] rounded-full shadow-md shadow-purple-500/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2 text-left">
                      <IconComponent size={16} className="shrink-0" />
                      <span className="flex flex-col text-left leading-tight">
                        <span>{serviceData[key].displayTitle[0]}</span>
                        <span>{serviceData[key].displayTitle[1]}</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[460px] md:min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl shadow-purple-500/5 border border-white/80"
              >
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-zinc-900 mb-3 font-display">
                    {activeService.title}
                  </h3>
                  <p className="text-zinc-700 mb-6 leading-relaxed">
                    {activeService.description}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-[#8B5CF6]">{activeService.price.split(' ')[0]}</span>
                    <span className="text-lg text-zinc-700/70">{activeService.price.substring(activeService.price.indexOf(' '))}</span>
                  </div>
                </div>
                <div className="order-1 md:order-2 h-56 md:h-[280px] w-full relative rounded-2xl overflow-hidden shadow-lg shadow-purple-500/10">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};