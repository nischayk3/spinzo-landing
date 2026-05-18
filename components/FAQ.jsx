"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const faqs = [
  {
    question: "How does Spinzo's laundry service work?",
    answer: "Spinzo makes laundry simple. Schedule a pickup through the app or web in seconds. Our partner will collect your clothes within 30 minutes, professionally wash and process them, and deliver them back fresh within a few hours. You can also schedule the delivery time directly from the app once your laundry is ready.",
  },
  {
    question: "How fast is pickup?",
    answer: "We typically pick up your laundry within 30 minutes after you place an order. You can also schedule pickup for a later time that suits your schedule.",
  },
  {
    question: "How long does delivery take?",
    answer: "Most orders are processed and delivered within 6 hours depending on the service selected and laundry volume. Once your clothes are ready, you can schedule the delivery slot directly from the app.",
  },
  {
    question: "How are my clothes washed and handled?",
    answer: "Your clothes go through a careful multi-step process including tagging, stain treatment, professional washing, drying, ironing, packaging, and quality checks. Every garment is handled with care so it returns clean, fresh, and neatly packed.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: "Yes. Pickup and delivery are included with every order. Our team collects your clothes from your doorstep and delivers them back once they are processed.",
  },
  {
    question: "What happens if my clothes get damaged?",
    answer: "While we handle garments with great care, in rare cases of damage we review the issue and provide appropriate resolution or compensation as per our policy. Customer satisfaction is our priority.",
  },
  {
    question: "How are clothes weighed for Wash & Fold?",
    answer: "Your laundry is weighed at the time of pickup using a digital scale. The final price is calculated based on the total weight of clothes collected.",
  },
  {
    question: "Which areas does Spinzo currently serve?",
    answer: "Spinzo currently operates in HSR Layout, BTM Layout, Koramangala, SG Palya, Wilson Garden, Bomanhalli, JP Nagar, and Jayanagar. We are expanding to more areas in Bangalore soon.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, cards, and cash on delivery depending on the order type. Payments can also be completed directly through the app or web platform.",
  },
  {
    question: "Do I need to install the app to use Spinzo?",
    answer: "No. You can use Spinzo through our web app or mobile app. Simply schedule a pickup online and we will handle the rest.",
  },
  {
    question: "Can I schedule delivery later?",
    answer: "Yes. Once your laundry is ready, Spinzo allows you to schedule the delivery slot directly from the app, so you receive your clothes at a time convenient for you.",
  },
];

export const FAQ = ({ customFaqs }) => {
  const displayFaqs = customFaqs && customFaqs.length > 0 ? customFaqs : faqs;
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-12 lg:py-24 bg-slate-50/50"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-10 md:mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-[#994bff] mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
          <Accordion type="single" collapsible className="w-full">
            {displayFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-slate-100"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-900 hover:text-[#994bff] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed text-base pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
