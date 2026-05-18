"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const bgColors = [
  "bg-blue-100 text-blue-600",
  "bg-purple-100 text-purple-600",
  "bg-emerald-100 text-emerald-600",
  "bg-rose-100 text-rose-600",
  "bg-amber-100 text-amber-600",
  "bg-teal-100 text-teal-600"
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "BTM Layout, Bangalore",
    service: "Wash & Fold",
    initial: "P",
    text: "SpinZo saved me so much time with their wash & fold service. The clothes came back neatly folded and smelling fresh!",
  },
  {
    name: "Arjun Mehta",
    location: "Koramangala, Bangalore",
    service: "Blanket Wash",
    initial: "A",
    text: "I was skeptical about sending my heavy blankets, but they came back feeling brand new. Highly recommend for winter cleaning.",
  },
  {
    name: "Sneha Patel",
    location: "HSR Layout, Bangalore",
    service: "Wash & Iron",
    initial: "S",
    text: "Super convenient and professional delivery executives. The app is easy to use and pickup is always on time.",
  },
  {
    name: "Rahul Verma",
    location: "Bommanahalli, Bangalore",
    service: "Wash & Iron",
    initial: "R",
    text: "The ironing quality is top-notch. Much better than my local dhobi and cheaper too with the offers.",
  },
  {
    name: "Anjali Gupta",
    location: "JP Nagar, Bangalore",
    service: "Premium Laundry",
    initial: "A",
    text: "Best laundry app I've used so far. The transparency in pricing and weight calculation builds a lot of trust.",
  },
  {
    name: "Vikram Singh",
    location: "Tavarekere, Bangalore",
    service: "Wash & Fold",
    initial: "V",
    text: "Quick pickup and delivery. Essential service for bachelors!",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-white overflow-hidden" id="testimonials">
      {/* Background glow for branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 text-slate-600 text-sm font-medium mb-6">
            <span className="flex text-yellow-500">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </span>
            Our Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            User reviews and feedback
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            See how Spinzo has transformed our customers' experiences through their own words. Trust the fastest premium laundry in South Bangalore.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="relative">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 break-inside-avoid relative group"
              >
                {/* Quote Icon Background Indicator */}
                <Quote className="absolute top-6 right-6 text-slate-100 w-10 h-10 rotate-180 -z-0 group-hover:text-purple-50 transition-colors duration-300" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${bgColors[i % bgColors.length]}`}>
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight block">{t.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{t.location}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed relative z-10 mb-5">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">
                        {t.service}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Verified
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Fade Gradient just like Pronto */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
