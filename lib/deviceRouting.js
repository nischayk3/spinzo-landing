/**
 * Device-aware routing and ad conversion tracking utilities for Spinzo.
 */

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.nischayk3.Spinit';
export const APP_STORE_URL =
  'https://apps.apple.com/in/app/spinzo-get-laundry-in-hours/id6758751814';
export const ONELINK_BASE_URL =
  'https://spinzonow.onelink.me/SVxb/89uz4xf3';
export const WEB_APP_BASE_URL = 'https://spinzo.in/';

/**
 * Detect client device platform.
 * Returns 'android' | 'ios' | 'desktop' | 'unknown'
 */
export function getDeviceType() {
  if (typeof window === 'undefined') return 'unknown';

  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  if (/android/i.test(ua)) {
    return 'android';
  }
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    return 'ios';
  }
  return 'desktop';
}

/**
 * Fire micro-conversion events to GA4 and Meta Pixel immediately upon clicking a booking CTA.
 * This guarantees ad platforms (Google Ads Smart Bidding & Meta Ads) receive conversion signals
 * even before the store page loads or app install occurs.
 */
export function trackBookingConversion(planName, extra = {}) {
  if (typeof window === 'undefined') return;

  const device = getDeviceType();

  // 1. Google Analytics (GA4)
  try {
    if (typeof window.gtag === 'function') {
      // Custom qualified intent event
      window.gtag('event', 'click_book_plan', {
        plan_name: planName,
        device_type: device,
        ...extra,
      });

      // Standard checkout intent
      window.gtag('event', 'begin_checkout', {
        items: [{ item_name: planName, item_category: 'Laundry Plan' }],
        device_type: device,
      });

      // Google Ads conversion trigger
      window.gtag('event', 'conversion', {
        send_to: 'G-YXS771G4ZJ',
        plan_name: planName,
        device_type: device,
      });
    }
  } catch (err) {
    console.debug('GA4 conversion tracking error:', err);
  }

  // 2. Meta Pixel (fbq)
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: planName,
        content_category: 'Laundry Service',
        device: device,
      });

      window.fbq('trackCustom', 'ClickBookPlan', {
        plan_name: planName,
        device_type: device,
        ...extra,
      });
    }
  } catch (err) {
    console.debug('Meta Pixel tracking error:', err);
  }
}
