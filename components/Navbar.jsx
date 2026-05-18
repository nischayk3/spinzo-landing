"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { label: "Why Us", href: "#why-spinzo" },
  { label: "Services", href: "#services" },
];

const rightLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const allLinks = [...leftLinks, { label: "Spinzo", href: "#hero" }, ...rightLinks];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBrandClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-center h-16 md:h-20">
        {/* Mobile toggle - left side */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden absolute left-6 p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop centered nav */}
        <div className="hidden md:flex items-center gap-2">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative px-4 py-2 text-sm font-medium text-slate-500 rounded-full transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}

          {/* Center brand */}
          <a
            href="#hero"
            onClick={handleBrandClick}
            data-testid="navbar-brand"
            className="mx-4 text-base font-bold tracking-tight text-white px-5 py-2 rounded-full bg-[#994bff] shadow-lg shadow-purple-500/25 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Spinzo
          </a>

          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative px-4 py-2 text-sm font-medium text-slate-500 rounded-full transition-all duration-200 hover:text-slate-900 hover:bg-white hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile brand center */}
        <a
          href="#hero"
          onClick={handleBrandClick}
          className="md:hidden text-base font-bold tracking-tight text-white px-5 py-2 rounded-full bg-[#994bff]"
        >
          Spinzo
        </a>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {allLinks.filter(l => l.label !== "Spinzo").map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-700 py-2.5 px-3 rounded-xl transition-colors duration-200 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
