"use client";

import Script from "next/script";

/**
 * Analytics component for Google Analytics, Yandex Metrika, and Bing Webmaster Tools
 * 
 * Environment variables required:
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID: Google Analytics Measurement ID (e.g., G-XXXXXXXXXX)
 * - NEXT_PUBLIC_YANDEX_METRIKA_ID: Yandex Metrika counter ID
 * - NEXT_PUBLIC_BING_VERIFICATION: Bing verification meta tag content
 * 
 * @example
 * // Add to .env.local:
 * NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
 * NEXT_PUBLIC_BING_VERIFICATION=your-bing-verification-code
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
  const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION;

  return (
    <>
      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Yandex Metrika */}
      {yandexId && (
        <>
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
              ym(${yandexId}, "init", {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                accurateTrackBounce:true,
                trackLinks:true
              });
            `}
          </Script>
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${yandexId}`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </>
      )}

      {/* Bing Webmaster Tools - Meta tag will be added via metadata in layout */}
      {/* Script verification is handled via meta tag */}
    </>
  );
}

