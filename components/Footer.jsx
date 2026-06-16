"use client";
import { Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-50/80 border-t border-zinc-200/60 pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="md:col-span-4 lg:col-span-5">
            <a href="/" className="text-2xl font-bold tracking-tight text-zinc-900 inline-block mb-4 font-display">
              Spinzo<span className="text-[#8B5CF6]">.</span>
            </a>
            <p className="text-zinc-600 max-w-sm leading-relaxed text-sm">
              Bangalore&apos;s fastest premium laundry service, designed for your modern lifestyle. Pickup in minutes, delivery in hours.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Wash & Fold</a></li>
                <li><a href="/" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Wash & Iron</a></li>
                <li><a href="/" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Steam Ironing</a></li>
                <li><a href="/" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Blanket Wash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">Service Areas</h4>
              <ul className="space-y-3">
                <li><a href="/locations/koramangala" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Koramangala</a></li>
                <li><a href="/locations/hsr-layout" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">HSR Layout</a></li>
                <li><a href="/locations/btm-layout" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">BTM Layout</a></li>
                <li><a href="/locations/jayanagar" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Jayanagar</a></li>
                <li><a href="/locations/jp-nagar" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">JP Nagar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><a href="https://spinzo.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Web App</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.nischayk3.Spinit" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Android App</a></li>
                <li><a href="https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">iOS App</a></li>
                <li><a href="/" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Privacy Policy</a></li>
                <li><a href="/" className="text-sm text-zinc-600 hover:text-[#8B5CF6] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500 text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Spinzo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://spinzo.in/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] shadow-sm transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </a>
            <a href="https://spinzo.in/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] shadow-sm transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="https://spinzo.in/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] shadow-sm transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
