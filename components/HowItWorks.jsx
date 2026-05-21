"use client";
import { motion } from "framer-motion";
import { Smartphone, Calendar, PackageCheck } from "lucide-react";
import Image from 'next/image';
import step1 from "../assets/Step 1.webp";
import step2 from "../assets/Step 2.webp";
import step3 from "../assets/Step 3.webp";

const steps = [
  {
    icon: Smartphone,
    title: "1. Choose Your Service",
    description: "Tap into the app and select from Wash & Fold, Wash & Iron, or Steam Ironing.",
    image: step1,
  },
  {
    icon: Calendar,
    title: "2. Schedule Pickup",
    description: "Pin your location, and a Spinzo pilot will be there in as little as 30 minutes.",
    image: step2,
  },
  {
    icon: PackageCheck,
    title: "3. Fresh Clothes Delivered",
    description: "Track your order in real-time and get your fresh, clean clothes back in hours.",
    image: step3,
  },
];

const lineVariants = {
  offscreen: {
    height: 0
  },
  onscreen: {
    height: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

const cardVariants = {
  offscreen: {
    x: (i) => i % 2 === 0 ? -50 : 50,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            Laundry Day, Reimagined
          </h2>
          <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed">
            Experience a seamless laundry service from start to finish. In just three simple steps, your clothes are expertly cared for.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-purple-100 rounded-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={lineVariants}
          />

          {steps.map((step, i) => (
            <div key={i} className="flex justify-center mb-12 last-of-type:mb-0">
              <motion.div
                className="w-full max-w-2xl"
                custom={i}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <div
                  className={`flex items-center gap-8 flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="w-full md:w-1/2 p-6 bg-white/70 backdrop-blur-sm border border-purple-100/60 rounded-3xl shadow-lg shadow-purple-500/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center border border-white/50 shadow-inner-soft">
                        <step.icon className="w-6 h-6 text-[#8B5CF6]" />
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-zinc-700 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 relative h-64 md:h-auto md:aspect-square flex items-center justify-center">
                     <div className="absolute z-0 inset-0 bg-purple-50/50 rounded-3xl transform-gpu rotate-6 scale-105" />
                     <div className="w-48 md:w-56 h-auto relative z-10">
                        <Image
                            src={step.image}
                            alt={step.title}
                            width={220}
                            height={440}
                            className="object-contain drop-shadow-2xl"
                        />
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
