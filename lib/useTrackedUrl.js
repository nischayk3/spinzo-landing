"use client";
import { useState, useEffect } from 'react';

export const useTrackedUrl = (baseUrl) => {
  const [url, setUrl] = useState(baseUrl);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      try {
        const urlObj = new URL(baseUrl);
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.forEach((val, key) => {
          urlObj.searchParams.set(key, val);
        });
        setUrl(urlObj.toString());
      } catch (e) {
        // Fallback for relative paths or invalid URLs
        setUrl(`${baseUrl}${window.location.search}`);
      }
    }
  }, [baseUrl]);

  return url;
};
