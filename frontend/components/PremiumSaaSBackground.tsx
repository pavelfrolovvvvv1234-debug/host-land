/**
 * Static premium SaaS background for homepage — no WebGL, no iframe, no animation.
 * GPU-friendly gradients + subtle grid and noise only.
 */
export function PremiumSaaSBackground() {
  return (
    <div className="premium-saas-bg" aria-hidden>
      <div className="premium-saas-bg__base" />
      <div className="premium-saas-bg__mesh" />
      <div className="premium-saas-bg__glow premium-saas-bg__glow--top" />
      <div className="premium-saas-bg__glow premium-saas-bg__glow--right" />
      <div className="premium-saas-bg__glow premium-saas-bg__glow--left" />
      <div className="premium-saas-bg__grid" />
      <div className="premium-saas-bg__noise" />
      <div className="premium-saas-bg__vignette" />
    </div>
  );
}
