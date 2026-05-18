"use client";
import { Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="border-t border-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#"
              data-testid="footer-logo"
              className="text-2xl font-extrabold tracking-tight text-slate-900 inline-block mb-4"
            >
              spinzo<span className="text-[#994bff]">.</span>
            </a>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              Bangalore's fastest premium laundry service. Pickup in 30 minutes,
              delivery within hours.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://spinzo.in/privacy"
                  data-testid="footer-privacy-link"
                  className="text-sm text-slate-500 hover:text-[#994bff] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://spinzo.in/privacy"
                  data-testid="footer-terms-link"
                  className="text-sm text-slate-500 hover:text-[#994bff] transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@spinzo.in"
                  data-testid="footer-email-link"
                  className="text-sm text-slate-500 hover:text-[#994bff] transition-colors duration-200"
                >
                  support@spinzo.in
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                data-testid="footer-instagram"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-subtle hover:text-[#994bff] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                data-testid="footer-twitter"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-subtle hover:text-[#994bff] transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                data-testid="footer-linkedin"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-subtle hover:text-[#994bff] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-400 text-center">
            &copy; {new Date().getFullYear()} Spinzo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
