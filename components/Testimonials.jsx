"use client";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
    {
      name: "Priya Sharma",
      location: "BTM Layout, Bangalore",
      service: "Wash & Fold",
      initial: "P",
      text: "Spinzo saved me so much time. The clothes came back neatly folded and smelling fresh!",
    },
    {
      name: "Arjun Mehta",
      location: "Koramangala, Bangalore",
      service: "Blanket Wash",
      initial: "A",
      text: "I was skeptical about sending my heavy blankets, but they came back feeling brand new. Highly recommend.",
    },
    {
      name: "Sneha Patel",
      location: "HSR Layout, Bangalore",
      service: "Wash & Iron",
      initial: "S",
      text: "Super convenient and professional. The app is easy to use and pickup is always on time.",
    },
    {
      name: "Rahul Verma",
      location: "Bommanahalli, Bangalore",
      service: "Wash & Iron",
      initial: "R",
      text: "The ironing quality is top-notch. Much better than my local dhobi and cheaper too.",
    },
    {
      name: "Anjali Gupta",
      location: "JP Nagar, Bangalore",
      service: "Premium Laundry",
      initial: "A",
      text: "Best laundry app I've used. The transparency in pricing and weight calculation builds a lot of trust.",
    },
    {
      name: "Vikram Singh",
      location: "Tavarekere, Bangalore",
      service: "Wash & Fold",
      initial: "V",
      text: "Quick pickup and delivery. Essential service for bachelors!",
    },
  ];

  const TestimonialCard = ({ testimonial, colorClass }) => (
    <div className="flex-shrink-0 w-[310px] sm:w-[340px] md:w-[400px] bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-soft-lg-cyan border border-white/80 select-none">
      <div className="flex items-center gap-4 mb-5">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg md:text-xl text-white ${colorClass}`}>
          {testimonial.initial}
        </div>
        <div>
          <h4 className="font-bold text-cyan-950 text-base md:text-lg">{testimonial.name}</h4>
          <p className="text-xs md:text-sm text-cyan-800/70">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-sm md:text-base text-cyan-800/90 leading-relaxed mb-6">"{testimonial.text}"</p>
      <div className="flex justify-between items-center border-t border-cyan-100/80 pt-4">
        <span className="text-xs font-semibold text-green-600 bg-green-100/70 px-3 py-1 rounded-full">
          {testimonial.service}
        </span>
        <div className="flex gap-0.5 text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="md:w-4 md:h-4" />)}
        </div>
      </div>
    </div>
  );

export const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: "start",
      slidesToScroll: 1,
    });

    const bgColors = ["bg-cyan-500", "bg-green-500", "bg-cyan-400", "bg-green-400", "bg-cyan-600", "bg-green-600"];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cyan-50/30 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
            >
                <span className="text-sm font-bold uppercase tracking-widest text-cyan-600 mb-3 block font-sans">
                    Testimonials
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-cyan-950 mb-4 font-display">
                    What Our Customers Are Saying
                </h2>
                <p className="text-base md:text-lg text-cyan-800/80 leading-relaxed">
                    Real stories from real customers. Discover why Bangalore trusts Spinzo for premium laundry care.
                </p>
            </motion.div>
        </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="overflow-hidden py-4 cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-6">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} colorClass={bgColors[i % bgColors.length]} />
                ))}
            </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cyan-50/30 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cyan-50/30 to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="w-12 h-12 rounded-full border border-cyan-100 flex items-center justify-center text-cyan-800 bg-white hover:bg-cyan-50 hover:text-cyan-950 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="w-12 h-12 rounded-full border border-cyan-100 flex items-center justify-center text-cyan-800 bg-white hover:bg-cyan-50 hover:text-cyan-950 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};