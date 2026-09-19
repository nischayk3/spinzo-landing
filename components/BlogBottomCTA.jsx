"use client";
import Link from "next/link";
import { useTrackedUrl } from "@/lib/useTrackedUrl";

export function BlogBottomCTA() {
  const appDownloadUrl = useTrackedUrl("https://spinzonow.onelink.me/SVxb/89uz4xf3");
  const webAppUrl = useTrackedUrl("https://spinzo.in/");

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href={appDownloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all text-sm shadow-md hover:scale-105 active:scale-95 duration-200"
      >
        📱 Download App
      </a>
      <a
        href={webAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#994BFF] text-white rounded-full font-semibold hover:bg-[#8828FF] transition-all text-sm shadow-md hover:scale-105 active:scale-95 duration-200"
      >
        Book on Web
      </a>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold border border-zinc-200 hover:border-purple-300 transition-all text-sm"
      >
        Learn More
      </Link>
    </div>
  );
}
