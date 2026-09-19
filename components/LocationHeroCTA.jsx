"use client";
import { useTrackedUrl } from "@/lib/useTrackedUrl";

export function LocationHeroCTA({ slug, name }) {
  const webAppUrl = useTrackedUrl(`https://spinzo.in/?ref=${slug}`);
  const appDownloadUrl = useTrackedUrl("https://spinzonow.onelink.me/SVxb/89uz4xf3", {
    af_sub2: slug,
  });

  return (
    <div className="flex flex-wrap items-center gap-3 mt-8">
      <a
        href={webAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#994BFF] text-white rounded-full font-semibold text-sm hover:bg-[#8828FF] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#994BFF]/20"
      >
        Book Pickup in {name}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <a
        href={appDownloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 bg-white text-zinc-900 rounded-full font-semibold text-sm border border-purple-200 hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
      >
        📱 Get App
      </a>
    </div>
  );
}
