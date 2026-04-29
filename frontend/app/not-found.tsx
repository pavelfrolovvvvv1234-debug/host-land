import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-6xl sm:text-8xl font-bold text-white/90 tabular-nums">404</p>
      <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
        This page could not be found.
      </h1>
      <p className="mt-2 max-w-md text-sm text-white/60">
        The link may be broken or the page has been removed.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
        >
          Back to home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30"
        >
          Services
        </Link>
      </div>
    </div>
  );
}
