"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShoppingCart,
  Truck,
  Tag,
  Droplets,
  WashingMachine,
  Wind,
  Shirt,
  Package,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const processSteps = [
  { icon: ShoppingCart, label: "Order" },
  { icon: Truck, label: "Pickup" },
  { icon: Tag, label: "Tagging" },
  { icon: Droplets, label: "Pre-Stain\nTreatment" },
  { icon: WashingMachine, label: "Washing" },
  { icon: Wind, label: "Drying" },
  { icon: Shirt, label: "Ironing" },
  { icon: Package, label: "Packaging" },
  { icon: ShieldCheck, label: "Quality\nCheck" },
  { icon: PackageCheck, label: "Delivery" },
];

const TOTAL = processSteps.length;

const DesktopStep = ({ step, index, progress }) => {
  const isTop = index % 2 === 0;
  const activate = (index + 0.3) / TOTAL;
  const deactivate = (index + 1.3) / TOTAL;

  const glow = useTransform(progress, [activate, activate + 0.02], [0, 1]);
  const fade = useTransform(progress, [deactivate, deactivate + 0.02], [0, 1]);
  const isActive = useTransform([glow, fade], ([g, f]) => (g > 0.5 && f < 0.5 ? 1 : 0));
  const bgColor = useTransform(glow, (v) => (v > 0.5 ? "#994bff" : "#f1f5f9"));
  const iconColor = useTransform(glow, (v) => (v > 0.5 ? "#ffffff" : "#94a3b8"));
  const textColor = useTransform(glow, (v) => (v > 0.5 ? "#0f172a" : "#94a3b8"));
  const shadow = useTransform(isActive, (v) =>
    v > 0.5
      ? "0 0 28px 6px rgba(153,75,255,0.4)"
      : "0 0 0 0 rgba(153,75,255,0)"
  );
  const nodeOpacity = useTransform(glow, [0, 0.5], [0.4, 1]);

  const yPos = isTop ? 0 : 70;

  return (
    <motion.div
      className="flex flex-col items-center absolute"
      style={{
        left: `${(index / (TOTAL - 1)) * 100}%`,
        top: `${yPos}px`,
        transform: "translateX(-50%)",
        opacity: nodeOpacity,
      }}
      data-testid={`process-step-${index}`}
    >
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
        style={{ backgroundColor: bgColor, boxShadow: shadow }}
      >
        <motion.div style={{ color: iconColor }}>
          <step.icon size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
      <motion.span
        className="mt-4 text-xs font-semibold text-center whitespace-pre-line leading-tight"
        style={{ color: textColor }}
      >
        {step.label}
      </motion.span>
    </motion.div>
  );
};

const MobileStep = ({ step, index, progress }) => {
  const activate = (index + 0.3) / TOTAL;
  const glow = useTransform(progress, [activate, activate + 0.02], [0, 1]);
  const bgColor = useTransform(glow, (v) => (v > 0.5 ? "#994bff" : "#f1f5f9"));
  const iconColor = useTransform(glow, (v) => (v > 0.5 ? "#ffffff" : "#94a3b8"));
  const textColor = useTransform(glow, (v) => (v > 0.5 ? "#0f172a" : "#94a3b8"));
  const shadow = useTransform(glow, (v) =>
    v > 0.5
      ? "0 0 20px 4px rgba(153,75,255,0.3)"
      : "0 0 0 0 rgba(153,75,255,0)"
  );
  const nodeOpacity = useTransform(glow, [0, 0.5], [0.4, 1]);

  return (
    <motion.div
      className="flex items-center gap-4"
      style={{ opacity: nodeOpacity }}
      data-testid={`process-step-mobile-${index}`}
    >
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative z-10"
        style={{ backgroundColor: bgColor, boxShadow: shadow }}
      >
        <motion.div style={{ color: iconColor }}>
          <step.icon size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
      <motion.span
        className="text-sm font-semibold"
        style={{ color: textColor }}
      >
        {step.label.replace("\n", " ")}
      </motion.span>
    </motion.div>
  );
};

const buildWavePath = () => {
  const points = [];
  for (let i = 0; i < TOTAL; i++) {
    const x = (i / (TOTAL - 1)) * 900 + 50;
    const y = i % 2 === 0 ? 30 : 100;
    points.push({ x, y });
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const midX = (curr.x + next.x) / 2;
    d += ` C ${midX} ${curr.y}, ${midX} ${next.y}, ${next.x} ${next.y}`;
  }
  return d;
};

const wavePath = buildWavePath();

export const QuickCommerce = () => {
  const outerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);
  const taglineOpacity = useTransform(progress, [0.85, 1], [0, 1]);

  return (
    <div ref={outerRef} className="relative" style={{ height: "300vh" }}>
      <section
        data-testid="quick-commerce-section"
        className="sticky top-0 min-h-screen flex items-center bg-slate-50/50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            <span className="text-sm font-medium uppercase tracking-widest text-[#994bff] mb-3 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
              Laundry care, just like home
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed">
              Every garment is handled carefully by trained professionals — from
              stain treatment to final packaging — so your clothes return fresh,
              clean and well cared for.
            </p>
          </div>

          {/* Desktop wave path */}
          <div className="hidden md:block">
            <div className="relative max-w-5xl mx-auto" style={{ height: "200px" }}>
              {/* SVG wave connector */}
              <svg
                className="absolute inset-0 w-full pointer-events-none"
                viewBox="0 0 1000 130"
                preserveAspectRatio="none"
                fill="none"
                style={{ top: "27px", height: "130px" }}
              >
                <path d={wavePath} stroke="#e2e8f0" strokeWidth="2" fill="none" />
                <motion.path
                  d={wavePath}
                  stroke="#994bff"
                  strokeWidth="2.5"
                  fill="none"
                  style={{ pathLength: progress }}
                />
              </svg>

              {/* Step nodes */}
              {processSteps.map((step, i) => (
                <DesktopStep key={step.label} step={step} index={i} progress={progress} />
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden">
            <div className="relative pl-2">
              <div className="absolute left-[25px] top-0 bottom-0 w-[2px] bg-slate-200" />
              <motion.div
                className="absolute left-[25px] top-0 w-[2px] bg-[#994bff] origin-top"
                style={{ height: "100%", scaleY: progress }}
              />
              <div className="flex flex-col gap-6">
                {processSteps.map((step, i) => (
                  <MobileStep key={step.label} step={step} index={i} progress={progress} />
                ))}
              </div>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-center mt-14 text-lg font-semibold text-slate-700 italic"
            style={{ opacity: taglineOpacity }}
          >
            Handled with care. Delivered with pride.
          </motion.p>
        </div>
      </section>
    </div>
  );
};
