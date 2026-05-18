"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const services = [
  {
    title: "Wash & Fold",
    description: "Perfect for everyday laundry.",
    image:
      "https://customer-assets.emergentagent.com/job_fresh-delivery-70/artifacts/6vhmxws1_Wash%20%26%20Fold%20Image.png",
  },
  {
    title: "Wash & Iron",
    description: "Cleaned, pressed and neatly packed.",
    image:
      "https://customer-assets.emergentagent.com/job_fresh-delivery-70/artifacts/rexty0hf_Wash%20%26%20Iron%20Image.png",
  },
  {
    title: "Steam Ironing",
    description: "Wrinkle-free clothes with premium steam pressing.",
    image:
      "https://customer-assets.emergentagent.com/job_fresh-delivery-70/artifacts/vduncqu9_Steam%20Ironing%20Image.png",
  },
  {
    title: "Blanket Wash",
    description: "Professional care for heavy items.",
    image:
      "https://customer-assets.emergentagent.com/job_fresh-delivery-70/artifacts/79s4am9n_Blanket%20Wash%20Image.png",
  },
];

const ServiceCard = ({ service, index, testIdPrefix }) => (
  <div
    data-testid={`${testIdPrefix}-service-card-${index}`}
    className="group flex-shrink-0 w-[300px] md:w-[340px] rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 cursor-default"
  >
    <div className="h-[220px] md:h-[260px] overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover object-[center_75%] group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">
        {service.description}
      </p>
    </div>
  </div>
);

export const Services = () => {
  const doubled = [...services, ...services];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-12 lg:py-24 bg-slate-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <span className="text-sm font-medium uppercase tracking-widest text-[#994bff] mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Laundry services made simple
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            Everything your clothes need in one place.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="relative">
          <div className="flex gap-6 animate-carousel">
            {doubled.map((service, i) => (
              <ServiceCard
                key={`${service.title}-${i}`}
                service={service}
                index={i % services.length}
                testIdPrefix={i < services.length ? "original" : "dup"}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
