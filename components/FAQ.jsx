"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "How does Spinzo's laundry service work?", answer: "Schedule a pickup via the app. We collect your clothes in as little as 30 minutes, professionally clean them, and deliver them back fresh within hours. You control the delivery time from the app." },
  { question: "How fast is pickup and delivery?", answer: "Pickup is within 30 minutes of your order. Delivery is within 6 hours for most services. You can schedule both at your convenience." },
  { question: "How are my clothes handled?", answer: "Each garment goes through a meticulous process of tagging, stain treatment, professional washing, drying, ironing, and quality checks, ensuring premium care." },
  { question: "Which areas does Spinzo serve?", answer: "We currently serve HSR Layout, BTM Layout, Koramangala, and surrounding areas. We are rapidly expanding across Bangalore." },
  { question: "What if my clothes get damaged?", answer: "While extremely rare, we have a comprehensive policy for handling any issues. Your satisfaction is our absolute priority." },
  { question: "How is pricing determined for Wash & Fold?", answer: "Your laundry is weighed using a digital scale at pickup. The final price is transparently calculated based on the total weight." },
  { question: "What is the weekend turnaround time for steam ironing?", answer: "For orders placed on Saturday and Sunday, steam ironing and processing may take up to 48 hours due to higher demand. We ensure every garment receives premium care." },
  { question: "Do you deliver on Saturdays and Sundays?", answer: "Yes, we collect and deliver on weekends! However, please note that steam ironing services booked on Saturday or Sunday may require up to 48 hours for processing and delivery." },
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div
      className="border-b border-purple-100/60 last-of-type:border-b-0"
    >
      <button
        className="w-full flex justify-between items-center text-left py-5 px-1 font-semibold text-zinc-900 transition-colors duration-300 hover:text-[#8B5CF6]"
        onClick={onClick}
      >
        <span className="text-base md:text-lg">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'text-[#8B5CF6]' : 'text-zinc-400'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-zinc-700/80 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#8B5CF6] mb-3 block font-sans">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 font-display">
            Your Questions, Answered
          </h2>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-3xl shadow-xl shadow-purple-500/5 border border-white/80"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};