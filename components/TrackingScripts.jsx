"use client";

import Script from 'next/script';

export const TrackingScripts = () => {
  const initAppsFlyer = () => {
    if (typeof window === 'undefined' || !window.AF_SMART_SCRIPT) return;

    try {
      const result = window.AF_SMART_SCRIPT.generateOneLinkURL({
        oneLinkURL: 'https://spinzonow.onelink.me/SVxb',
        afParameters: {
          mediaSource: { keys: ['utm_source', 'pid'], defaultValue: 'spinzonow_landing' },
          campaign: { keys: ['utm_campaign', 'c'], defaultValue: 'spinzo_growth' },
          channel: { keys: ['utm_medium', 'af_channel'] },
          afKeywords: { keys: ['utm_term', 'af_keywords'] },
          afCustom: [
            { paramKey: 'af_sub1', keys: ['gclid'] },
            { paramKey: 'af_sub2', keys: ['fbclid'] },
            { paramKey: 'af_sub3', keys: ['gbraid'] },
            { paramKey: 'af_sub4', keys: ['wbraid'] },
            { paramKey: 'af_sub5', keys: ['ttclid', 'msclkid'] },
            { paramKey: 'af_ad', keys: ['utm_content', 'af_ad'] },
          ],
        },
      });

      if (result && result.clickURL) {
        // 1. Update all store download buttons directly in the DOM
        document.querySelectorAll('.store-download-btn, [data-appsflyer-link="true"]').forEach((el) => {
          el.setAttribute('href', result.clickURL);
        });

        // 2. Dispatch custom event for React state synchronization
        window.dispatchEvent(
          new CustomEvent('spinzo:onelink_updated', {
            detail: { url: result.clickURL },
          })
        );

        // 3. Cache generated OneLink in sessionStorage
        try {
          sessionStorage.setItem('spinzo_tracked_onelink', result.clickURL);
        } catch (e) {}
      }
    } catch (err) {
      console.warn('AppsFlyer Smart Script execution warning:', err);
    }
  };

  return (
    <>
      {/* --- Google Analytics (GA4: G-YXS771G4ZJ) --- */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-YXS771G4ZJ"
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YXS771G4ZJ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* --- Meta Pixel (888781886883366) --- */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '888781886883366');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=888781886883366&ev=PageView&noscript=1"
          alt="Facebook Pixel Tracking"
        />
      </noscript>

      {/* --- AppsFlyer OneLink Smart Script v2 --- */}
      <Script
        id="appsflyer-smart-script"
        src="https://onelinksmartscript.appsflyer.com/onelink-smart-script-latest.js"
        strategy="afterInteractive"
        onLoad={initAppsFlyer}
      />
    </>
  );
};
