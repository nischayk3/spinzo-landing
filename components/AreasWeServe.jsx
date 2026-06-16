"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICE_LOCATIONS } from "@/lib/locations";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export const AreasWeServe = () => {
  return (
    <section id="areas-we-serve" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          {...fadeUp}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">
            Service Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4 font-display">
            Laundry Service Near You in South Bangalore
          </h2>
          <p className="text-base md:text-lg text-zinc-700/80 leading-relaxed">
            Spinzo provides fast, premium laundry pickup and delivery across 14 neighborhoods in South Bangalore.
            Find your area below and start fresh.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {SERVICE_LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/locations/${loc.slug}`}
                className="block p-4 md:p-5 bg-purple-50/50 hover:bg-purple-100 rounded-2xl border border-purple-100/50 hover:border-purple-300 transition-all duration-300 group cursor-pointer"
              >
                <h3 className="font-bold text-zinc-900 group-hover:text-[#8B5CF6] transition-colors text-sm md:text-base">
                  {loc.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                  {loc.nearby.slice(0, 2).join(' · ')}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-10 text-center"
        >
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all text-sm"
          >
            View All Service Areas →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
