"use client";
// Optimized with next/image to fix hydration and LCP performance v2
import Image from "next/image";
import step1 from "../assets/Step 1.webp";
import step2 from "../assets/Step 2.webp";
import step3 from "../assets/Step 3.webp";

export const PhoneMockup = () => {
  return (
    <div className="relative w-[480px] h-[520px]" data-testid="phone-mockup">
      {/* Left phone - rotated, behind */}
      <div
        className="absolute left-[-20px] top-12 z-10"
        style={{ transform: "rotate(-10deg) scale(0.95)" }}
        data-testid="phone-left"
      >
        <div className="w-[180px]">
          <Image
            src={step2}
            alt="Schedule Pickup"
            placeholder="blur"
            loading="lazy"
            width={1024}
            height={1536}
            decoding="async"
            data-nimg="1"
            className="w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>

      {/* Center phone - straight, front */}
      <div className="absolute left-1/2 top-0 z-30" data-testid="phone-center" style={{ transform: "translateX(-50%) scale(1.1)" }}>
        <div className="w-[210px]">
          <Image
            src={step1}
            alt="Spinzo Home"
            priority
            placeholder="blur"
            loading="eager"
            width={1024}
            height={1536}
            decoding="async"
            data-nimg="1"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Right phone - rotated, behind */}
      <div
        className="absolute right-[-20px] top-12 z-10"
        style={{ transform: "rotate(10deg) scale(0.95)" }}
        data-testid="phone-right"
      >
        <div className="w-[180px]">
          <Image
            src={step3}
            alt="Order Tracking"
            placeholder="blur"
            loading="lazy"
            width={1024}
            height={1536}
            decoding="async"
            data-nimg="1"
            className="w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};