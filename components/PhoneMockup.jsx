"use client";
import step1 from "../assets/Step 1.png";
import step2 from "../assets/Step 2.png";
import step3 from "../assets/Step 3.png";

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
          <img
            src={step2.src}
            alt="Schedule Pickup"
            className="w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>

      {/* Center phone - straight, front */}
      <div className="absolute left-1/2 top-0 z-30" data-testid="phone-center" style={{ transform: "translateX(-50%) scale(1.1)" }}>
        <div className="w-[210px]">
          <img
            src={step1.src}
            alt="Spinzo Home"
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
          <img
            src={step3.src}
            alt="Order Tracking"
            className="w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};
