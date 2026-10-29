"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, Globe } from "lucide-react";
import logo from "../assets/SpinZo.png";
import { useTrackedUrl } from "../lib/useTrackedUrl";
import { trackBookingConversion } from "../lib/deviceRouting";

export const MobileAppBanner = () => {
  const [visible, setVisible] = useState(false);
  const appDownloadUrl = useTrackedUrl("https://spinzonow.onelink.me/SVxb/89uz4xf3");
  const webAppUrl = useTrackedUrl("https://spinzo.in/");

  useEffect(() => {
    // Only show on client after mount and check if user previously dismissed in this session
    try {
      const isDismissed = sessionStorage.getItem("spinzo_banner_dismissed");
      if (!isDismissed) {
        setVisible(true);
      }
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem("spinzo_banner_dismissed", "true");
    } catch (e) {
      // Ignore storage errors
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-zinc-950/95 backdrop-blur-lg border-t border-purple-500/30 px-3.5 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
      role="banner"
      aria-label="Download Spinzo App"
    >
      <div className="flex items-center justify-between gap-2.5 max-w-lg mx-auto relative">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-1.5 -right-1 text-zinc-400 hover:text-white p-1"
          aria-label="Dismiss banner"
        >
          <X size={14} />
        </button>

        {/* Left: App Icon & Details */}
        <div className="flex items-center gap-2.5 min-w-0 pr-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 p-0.5 flex-shrink-0 overflow-hidden shadow-sm">
            <Image
              src={logo}
              alt="Spinzo Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-tight truncate">
                Spinzo Laundry
              </span>
              <span className="text-[10px] font-semibold text-[#994BFF] bg-purple-950 px-1.5 py-0.2 rounded border border-purple-500/30">
                14h Delivery
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 truncate flex items-center gap-1 mt-0.5">
              <Sparkles size={11} className="text-yellow-400 flex-shrink-0" />
              <span>₹300 off · Code <strong className="text-white">SPINZO300</strong></span>
            </p>
          </div>
        </div>

        {/* Right: Dual CTAs (Install + Web App) */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <a
            href={appDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-appsflyer-link="true"
            onClick={() => trackBookingConversion("Mobile Sticky Banner Install")}
            className="store-download-btn px-3 py-1.5 bg-[#994BFF] hover:bg-[#8828FF] active:scale-95 text-white font-bold text-xs rounded-lg shadow-sm shadow-purple-500/30 transition-all flex items-center justify-center whitespace-nowrap"
          >
            Get App
          </a>
          <a
            href={webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingConversion("Mobile Sticky Banner Web")}
            className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-zinc-200 hover:text-white font-medium text-xs rounded-lg border border-zinc-700 transition-all flex items-center justify-center whitespace-nowrap"
          >
            <Globe size={11} className="mr-1 text-purple-400" />
            Web
          </a>
        </div>
      </div>
    </div>
  );
};
