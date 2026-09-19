"use client";
import { useTrackedUrl } from "@/lib/useTrackedUrl";

export function BlogCtaButton({ url, external, children }) {
  const trackedUrl = useTrackedUrl(url);

  return (
    <a
      href={trackedUrl}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex px-6 py-3 bg-[#8B5CF6] text-white rounded-full font-semibold text-sm hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/20"
    >
      {children}
    </a>
  );
}
