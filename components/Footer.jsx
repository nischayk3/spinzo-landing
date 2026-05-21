"use client";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const footerNav = [
  { title: "Services", links: ["Wash & Fold", "Wash & Iron", "Steam Ironing"] },
  { title: "Company", links: ["About Us", "Our Process", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export const Footer = () => {
  return (
    <footer className="bg-zinc-50/80 border-t border-zinc-200/60 pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="md:col-span-4 lg:col-span-5">
            <a href="#" className="text-2xl font-bold tracking-tight text-zinc-900 inline-block mb-4 font-display">
              Spinzo<span className="text-[#8B5CF6]">.</span>
            </a>
            <p className="text-zinc-600 max-w-sm leading-relaxed text-sm">
              Bangalore's fastest premium laundry service, designed for your modern lifestyle. Pickup in minutes, delivery in hours.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerNav.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                   {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500 text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Spinzo Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] shadow-sm transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] shadow-sm transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] shadow-sm transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};