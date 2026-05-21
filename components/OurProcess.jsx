"use client";
import { motion } from "framer-motion";
import { Calendar, Truck, Sparkles, PackageCheck } from "lucide-react";

const processSteps = [
  { icon: Calendar, title: "Schedule", description: "Book a pickup time that works for you, right from the app." },
  { icon: Truck, title: "Pickup", description: "Our Spinzo pilot arrives at your doorstep, right on time." },
  { icon: Sparkles, title: "Clean & Care", description: "We use premium products and expert techniques to give your clothes a new life." },
  { icon: PackageCheck, title: "Delivery", description: "Fresh, clean clothes delivered back to you, ready to wear." },
];

const cardVariants = {
  offscreen: {
    y: 60,
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

export const OurProcess = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            Handled with Care, Delivered with Pride
          </h2>
          <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed">
            We've perfected the laundry process to ensure your clothes receive the best care at every step. Here's how we do it.
          </p>
        </motion.div>

        <div className="relative">
          {/* The connecting line */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-purple-100/70"></div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 relative">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                variants={cardVariants}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-2 border-purple-200 shadow-md shadow-purple-500/5 z-10 relative">
                    <step.icon className="w-9 h-9 text-[#8B5CF6]" strokeWidth={1.5} />
                  </div>
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-200 z-0" />
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-700 max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};