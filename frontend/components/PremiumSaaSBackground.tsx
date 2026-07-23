/**
 * Static premium background for homepage — Cereller-inspired quiet dark canvas.
 * No WebGL, no side glow orbs, no heavy mesh gradients.
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
      <div className="premium-saas-bg__accent-line" />
    </div>
  );
}
