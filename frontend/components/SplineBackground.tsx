"use client";

import { usePathname } from "next/navigation";

const SPLINE_SRC = "https://my.spline.design/thresholddarkambientui-VbfLWmdSZ5JzGYPuQPp8PkLD/";

/**
 * Full-viewport Spline iframe background. Renders only on home routes (/, /ru).
 * Placed in root layout so it always runs and is not inside any page-specific tree.
 */
export function SplineBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/ru" || pathname === "/en";
  if (!isHome) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <iframe
        src={SPLINE_SRC}
        frameBorder={0}
        width="100%"
        height="100%"
        loading="eager"
        allow="fullscreen"
        title="Spline background"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
