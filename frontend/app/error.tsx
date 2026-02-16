"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-black/40 p-8">
      <h2 className="text-xl font-semibold text-white">Что-то пошло не так</h2>
      <p className="text-sm text-white/60 text-center max-w-md">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
      >
        Попробовать снова
      </button>
    </div>
  );
}
