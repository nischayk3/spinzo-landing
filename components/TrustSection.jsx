"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Package, Users, Star } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const stats = [
  {
    icon: Package,
    value: 1000,
    suffix: "+",
    label: "Orders Completed",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "",
    label: "Customer Rating",
    isDecimal: true,
    displaySuffix: "\u2605",
  },
];

const Counter = ({ target, isDecimal, suffix, displaySuffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, isDecimal]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-slate-900 tabular-nums">
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
      {displaySuffix && (
        <span className="text-[#994bff] ml-1">{displaySuffix}</span>
      )}
    </span>
  );
};

export const TrustSection = () => {
  return (
    <section data-testid="trust-section" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-medium uppercase tracking-widest text-[#994bff] mb-3 block">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Trusted by customers across Bangalore
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`stat-card-${i}`}
              className="text-center rounded-3xl bg-white p-10 border border-slate-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-subtle flex items-center justify-center mx-auto mb-6">
                <stat.icon
                  size={28}
                  className="text-[#994bff]"
                  strokeWidth={1.5}
                />
              </div>
              <Counter
                target={stat.value}
                isDecimal={stat.isDecimal}
                suffix={stat.suffix}
                displaySuffix={stat.displaySuffix}
              />
              <p className="text-slate-500 mt-3 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
