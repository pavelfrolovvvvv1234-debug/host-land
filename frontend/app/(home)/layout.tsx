/**
 * Layout only for / and /ru. Renders Spline iframe in initial HTML
 * so it starts loading immediately with the page (no wait for JS).
 */
const SPLINE_SRC = "https://my.spline.design/thresholddarkambientui-VbfLWmdSZ5JzGYPuQPp8PkLD/";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      {children}
    </>
  );
}
