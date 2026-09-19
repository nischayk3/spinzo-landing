"use client";
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'spinzo_attribution_data';
const STORAGE_EXPIRY_DAYS = 30;

const TRACKED_PARAM_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'ttclid',
  'msclkid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'ref',
];

/**
 * Retrieve saved marketing attribution parameters from sessionStorage or localStorage.
 */
export function getStoredAttribution() {
  if (typeof window === 'undefined') return {};

  let stored = {};

  // 1. Try sessionStorage first (current session)
  try {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) {
      stored = JSON.parse(sessionData);
    }
  } catch (e) {
    // Ignore storage errors
  }

  // 2. If empty, try localStorage (prior visit within expiry)
  if (Object.keys(stored).length === 0) {
    try {
      const localData = localStorage.getItem(STORAGE_KEY);
      if (localData) {
        const parsed = JSON.parse(localData);
        if (parsed.timestamp && Date.now() - parsed.timestamp < STORAGE_EXPIRY_DAYS * 86400000) {
          stored = parsed.params || {};
        }
      }
    } catch (e) {
      // Ignore storage errors
    }
  }

  // 3. Inspect active window.location.search for new incoming parameters
  const currentParams = {};
  if (window.location.search) {
    try {
      const sp = new URLSearchParams(window.location.search);
      sp.forEach((val, key) => {
        if (val) {
          currentParams[key] = val;
        }
      });
    } catch (e) {
      // Ignore URLSearchParams error
    }
  }

  // Merge: current URL parameters override stored parameters
  const merged = { ...stored, ...currentParams };

  // Save back to storage if any tracked parameters are present
  const hasTrackedParams = Object.keys(merged).some((k) =>
    TRACKED_PARAM_KEYS.includes(k.toLowerCase())
  );

  if (hasTrackedParams) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ params: merged, timestamp: Date.now() })
      );
    } catch (e) {
      // Ignore quota/security errors
    }
  }

  return merged;
}

/**
 * Build a tracked destination URL with attribution and AppsFlyer OneLink mapping.
 *
 * @param {string} baseUrl - Target destination URL (e.g., https://spinzonow.onelink.me/SVxb/89uz4xf3 or https://spinzo.in/)
 * @param {Object} [overrideParams] - Optional additional parameters to append/override
 * @returns {string} Fully attributed URL
 */
export function buildTrackedUrl(baseUrl, overrideParams = {}) {
  if (typeof window === 'undefined') return baseUrl;

  try {
    const urlObj = new URL(baseUrl);
    const attribution = { ...getStoredAttribution(), ...overrideParams };

    const isOneLink = urlObj.hostname.includes('onelink.me');

    if (isOneLink) {
      // --- AppsFlyer OneLink Smart Script / Parameter Mapping ---
      // pid (Media Source): required by AppsFlyer for attribution
      const mediaSource = attribution.utm_source || attribution.pid || 'website';
      urlObj.searchParams.set('pid', mediaSource);

      // c (Campaign): required by AppsFlyer
      const campaign = attribution.utm_campaign || attribution.c || 'spinzonow_landing';
      urlObj.searchParams.set('c', campaign);

      // af_channel (Channel/Medium)
      if (attribution.utm_medium) {
        urlObj.searchParams.set('af_channel', attribution.utm_medium);
      }

      // af_keywords (Search keywords)
      if (attribution.utm_term) {
        urlObj.searchParams.set('af_keywords', attribution.utm_term);
      }

      // af_ad (Ad / Creative content)
      if (attribution.utm_content) {
        urlObj.searchParams.set('af_ad', attribution.utm_content);
      }

      // af_sub1: Click ID forwarding for raw attribution data
      const clickId =
        attribution.gclid ||
        attribution.fbclid ||
        attribution.wbraid ||
        attribution.gbraid ||
        attribution.ttclid ||
        attribution.msclkid;

      if (clickId) {
        urlObj.searchParams.set('af_sub1', clickId);
      }

      // Also forward all raw parameters for maximum ad network and downstream visibility
      Object.entries(attribution).forEach(([key, val]) => {
        if (val && !urlObj.searchParams.has(key)) {
          urlObj.searchParams.set(key, val);
        }
      });
    } else {
      // --- Web App (spinzo.in) or other external links ---
      Object.entries(attribution).forEach(([key, val]) => {
        if (val && !urlObj.searchParams.has(key)) {
          urlObj.searchParams.set(key, val);
        }
      });
    }

    return urlObj.toString();
  } catch (e) {
    return baseUrl;
  }
}

/**
 * React hook to dynamically attribute links to OneLink or Web App.
 *
 * @param {string} baseUrl - Base URL to append tracking parameters to
 * @param {Object} [overrideParams] - Optional additional parameters
 * @returns {string} Dynamic URL with attribution
 */
export const useTrackedUrl = (baseUrl, overrideParams = {}) => {
  const [url, setUrl] = useState(baseUrl);

  useEffect(() => {
    setUrl(buildTrackedUrl(baseUrl, overrideParams));
  }, [baseUrl, JSON.stringify(overrideParams)]);

  return url;
};
