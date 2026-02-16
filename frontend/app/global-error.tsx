"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="bg-[#080808] text-white min-h-screen flex flex-col items-center justify-center p-8 font-sans">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-2xl font-semibold text-white">
            Что-то пошло не так
          </h1>
          <p className="text-white/60 text-sm">{error.message}</p>
          <button
            onClick={reset}
            className="rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </body>
    </html>
  );
}
