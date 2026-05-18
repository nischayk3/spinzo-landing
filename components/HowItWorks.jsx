"use client";
import { motion } from "framer-motion";
import step1 from "../assets/Step 1.png";
import step2 from "../assets/Step 2.png";
import step3 from "../assets/Step 3.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const steps = [
  {
    step: "01",
    title: "Choose Your Service",
    description:
      "Browse services like Wash & Fold, Wash & Iron, Steam Ironing or Blanket Wash directly from the Spinzo home screen.",
    image: step1,
    objectPosition: "center 38%",
  },
  {
    step: "02",
    title: "Book Pickup Instantly",
    description:
      "Choose instant pickup or schedule it for later at your convenience directly from the app.",
    image: step2,
    objectPosition: "center 35%",
  },
  {
    step: "03",
    title: "Schedule Delivery When Ready",
    description:
      "Once your laundry is processed, you can schedule the delivery time directly from the app whenever it is convenient for you.",
    image: step3,
    objectPosition: "center 32%",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="py-12 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-medium uppercase tracking-widest text-[#994bff] mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Book your laundry in 3 simple steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-testid={`step-card-${i}`}
              className="group rounded-3xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image with overlaid step number */}
              <div className="px-4 pt-4 relative">
                {/* Step number badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#994bff] text-white text-sm font-bold shadow-sm">
                    {item.step}
                  </span>
                </div>
                
                <div className="relative w-full flex justify-center h-[280px]">
                  <img
                    src={typeof item.image === 'string' ? item.image : item.image.src}
                    alt={item.title}
                    className="max-h-full w-auto object-contain drop-shadow-md group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="px-6 pt-6 pb-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
