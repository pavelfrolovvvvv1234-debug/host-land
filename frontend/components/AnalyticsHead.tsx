/**
 * Analytics Head Component
 * Adds meta tags for verification in <head>
 * Use this for Bing verification and other meta tag verifications
 */
export function AnalyticsHead() {
  const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION;
  const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return (
    <>
      {/* Bing Webmaster Tools Verification */}
      {bingVerification && (
        <meta name="msvalidate.01" content={bingVerification} />
      )}

      {/* Google Search Console Verification (optional) */}
      {googleSiteVerification && (
        <meta name="google-site-verification" content={googleSiteVerification} />
      )}
    </>
  );
}


