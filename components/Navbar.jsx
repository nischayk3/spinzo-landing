"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../assets/SpinZo.png";

const navLinks = [
  { label: "Why Us", href: "#why-spinzo" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const borderOpacity = useTransform(scrollY, [0, 70], [0, 1]);

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.lenisInstance) {
      window.lenisInstance.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.scrollTo(target, { offset: -80 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: useTransform(scrollY, [0, 70], ["rgba(236, 254, 255, 0)", "rgba(236, 254, 255, 0.85)"]),
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-shadow duration-300"
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-cyan-900/10"
          style={{ opacity: borderOpacity }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20 relative">
          
          {/* Left side: Logo & Navigation Links */}
          <div className="flex items-center gap-6 z-10">
            <motion.a
              href="#hero"
              onClick={handleBrandClick}
              className="flex items-center cursor-pointer select-none"
              whileHover="hover"
            >
              <motion.div
                variants={{
                  hover: { rotate: 360, scale: 1.15 }
                }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="flex items-center justify-center p-1 bg-white border border-[#8B5CF6]/30 rounded-full shadow-sm shadow-[#8B5CF6]/20 overflow-hidden"
              >
                <Image src={logo} alt="SpinZo Logo" width={34} height={34} priority className="object-cover scale-110 rounded-full" />
              </motion.div>
            </motion.a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-700 rounded-full transition-colors duration-200 hover:text-zinc-950 hover:bg-[#8B5CF6]/10 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Center: Brand Name (Centered absolutely) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 select-none pointer-events-none">
            <motion.a
              href="#hero"
              onClick={handleBrandClick}
              className="relative group flex items-center justify-center px-4 py-1 pointer-events-auto"
              whileHover="hover"
            >
              {/* Background Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-md rounded-full scale-90 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              
              <motion.span
                className="bg-gradient-to-r from-[#2563EB] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent font-extrabold text-2xl tracking-wide relative z-10"
                variants={{
                  hover: { scale: 1.08, letterSpacing: "0.05em" }
                }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
              >
                SpinZo
              </motion.span>
            </motion.a>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center z-10">
            <motion.a
              href="https://spinzo.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold text-white bg-green-500 rounded-full shadow-[0_4px_14px_0_rgb(34,197,94,0.4)] hover:shadow-[0_6px_20px_0_rgb(34,197,94,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Pickup
            </motion.a>
          </div>

          {/* Mobile: Hamburger Button */}
          <div className="md:hidden flex items-center z-10">
            <button
              className="p-2 text-cyan-900 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-cyan-900/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base font-medium text-zinc-900 py-3 px-3 rounded-xl transition-colors duration-200 hover:bg-[#8B5CF6]/10 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <motion.a
                  href="https://spinzo.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 px-5 py-3 text-base font-semibold text-white bg-green-500 rounded-xl shadow-[0_4px_14px_0_rgb(34,197,94,0.4)] transition-all duration-300 cursor-pointer text-center block"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileOpen(false)}
                >
                  Schedule Pickup
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Spacer to prevent content from hiding behind the fixed navbar */}
      <div className="h-20" />
    </>
  );
};