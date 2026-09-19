"use client";
import { Phone } from "lucide-react";
import { useTrackedUrl } from "../lib/useTrackedUrl";

const CONTACT_PHONE = "+91 76768 78832";
const CONTACT_PHONE_TEL = "+917676878832";

export const Footer = () => {
  const webAppUrl = useTrackedUrl("https://spinzo.in/");
  const appDownloadUrl = useTrackedUrl("https://spinzonow.onelink.me/SVxb/89uz4xf3");

  return (
    <footer className="bg-zinc-50/80 border-t border-zinc-200/60 pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="md:col-span-4 lg:col-span-5">
            <a href="/" className="text-2xl font-bold tracking-tight text-zinc-900 inline-block mb-4 font-display">
              Spinzo<span className="text-[#994BFF]">.</span>
            </a>
            <p className="text-zinc-600 max-w-sm leading-relaxed text-sm">
              Bangalore&apos;s fastest premium laundry service, designed for your modern lifestyle. Pickup in minutes, delivery in hours.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="inline-flex items-center gap-3 text-sm text-zinc-700 hover:text-[#994BFF] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
                  <Phone size={15} className="text-[#994BFF]" />
                </span>
                Help & Support: {CONTACT_PHONE}
              </a>
              <p className="inline-flex items-center gap-3 text-sm text-zinc-600 pl-11">
                <span className="text-zinc-400">9 AM – 10 PM, 7 days</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li><a href="/#services" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Wash & Fold</a></li>
                <li><a href="/#services" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Wash & Iron</a></li>
                <li><a href="/#services" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Steam Ironing</a></li>
                <li><a href="/#services" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Blanket Wash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">Service Areas</h4>
              <ul className="space-y-3">
                <li><a href="/locations/koramangala" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Koramangala</a></li>
                <li><a href="/locations/hsr-layout" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">HSR Layout</a></li>
                <li><a href="/locations/btm-layout" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">BTM Layout</a></li>
                <li><a href="/locations/jayanagar" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Jayanagar</a></li>
                <li><a href="/locations/jp-nagar" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">JP Nagar</a></li>
                <li><a href="/service-areas" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors font-semibold">View All Areas →</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><a href={webAppUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Web App</a></li>
                <li><a href={appDownloadUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Android App</a></li>
                <li><a href={appDownloadUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">iOS App</a></li>
                <li><a href={`tel:${CONTACT_PHONE_TEL}`} className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Contact / Help: {CONTACT_PHONE}</a></li>
                <li><a href={webAppUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-[#994BFF] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500 text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Spinzo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={webAppUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#994BFF]/10 hover:text-[#994BFF] shadow-sm transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </a>
            <a href={webAppUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#994BFF]/10 hover:text-[#994BFF] shadow-sm transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={webAppUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-600 hover:bg-[#994BFF]/10 hover:text-[#994BFF] shadow-sm transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h-3.4v11.45H9.34v.01H3.6V3.34h1.92L19.45 3.5v.01h2.23v16.94zM5.17 3.34h13.67v17H5.17V3.34zM6.15 4.32v15.03h12.46V4.32H6.15z"/><path d="M4.7 0A2.4 2.4 0 112.29 2.4 2.4 2.4 0 014.7 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
