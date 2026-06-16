"use client";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "918197895860";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=Hi%20Spinzo!%20I%27d%20like%20to%20know%20more%20about%20your%20laundry%20service.`;

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-105 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white fill-white" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
        Chat with us
      </span>
    </a>
  );
};
