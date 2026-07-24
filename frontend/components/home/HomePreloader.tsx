"use client";

import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

const PRELOADER_VISIBLE_MS = 1800;
const PRELOADER_FADE_MS = 500;
const PRELOADER_MAX_MS = 4000;
const SESSION_DONE_KEY = "dior_home_preloader_done";

type RunState = {
  started: boolean;
  completed: boolean;
};

/** Per-path run state — survives React Strict Mode remounts on the same URL. */
const runs = new Map<string, RunState>();

/** Last visited pathname — module-level so locale remounts still detect language switches. */
let trackedPathname: string | null = null;

function isHomePath(pathname: string | null): pathname is string {
  return pathname === "/" || pathname === "/ru" || pathname === "/en";
}

function getRun(pathname: string): RunState {
  let run = runs.get(pathname);
  if (!run) {
    run = { started: false, completed: false };
    runs.set(pathname, run);
  }
  return run;
}

function hasCompletedHomePreloaderThisSession(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    return sessionStorage.getItem(SESSION_DONE_KEY) === "1";
  } catch {
    return false;
  }
}

function markHomePreloaderDoneThisSession() {
  try {
    sessionStorage.setItem(SESSION_DONE_KEY, "1");
  } catch {
    /* ignore */
  }
}

function setPreloaderActive(active: boolean) {
  document.documentElement.classList.toggle("preloader-active", active);
  document.body.classList.toggle("preloader-active", active);
}

function hidePreloaderElement(element: HTMLElement | null) {
  if (!element) return;
  element.classList.remove("preloader-visible", "preloader-fadeout");
  element.classList.add("preloader-removed");
  element.removeAttribute("style");
}

function preparePreloaderElement(element: HTMLElement | null) {
  if (!element) return;
  element.classList.remove("preloader-removed", "preloader-fadeout");
  element.classList.add("preloader-visible");
  element.removeAttribute("style");
}

function isHomeLanguageSwitch(previousPath: string | null, nextPath: string): boolean {
  return (
    previousPath !== null &&
    isHomePath(previousPath) &&
    isHomePath(nextPath) &&
    previousPath !== nextPath
  );
}

interface HomePreloaderProps {
  onDone: () => void;
}

export function HomePreloader({ onDone }: HomePreloaderProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const onDoneRef = useRef(onDone);
  const runTokenRef = useRef(0);

  onDoneRef.current = onDone;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const runToken = ++runTokenRef.current;
    const previousPath = trackedPathname;
    trackedPathname = pathname;

    const finish = (options?: { markSessionDone?: boolean }) => {
      if (runTokenRef.current !== runToken) {
        return;
      }
      if (options?.markSessionDone) {
        markHomePreloaderDoneThisSession();
      }
      setPreloaderActive(false);
      hidePreloaderElement(document.getElementById("preloader"));
      setShowOverlay(false);
      onDoneRef.current();
    };

    if (!isHomePath(pathname)) {
      finish();
      return;
    }

    const run = getRun(pathname);
    const skipForLanguageSwitch =
      isHomeLanguageSwitch(previousPath, pathname) && hasCompletedHomePreloaderThisSession();

    if (skipForLanguageSwitch || run.completed) {
      finish();
      return;
    }

    const complete = () => {
      if (runTokenRef.current !== runToken || run.completed) {
        return;
      }
      run.completed = true;
      finish({ markSessionDone: true });
    };

    if (run.started) {
      window.setTimeout(complete, PRELOADER_MAX_MS);
      setShowOverlay(true);
      return;
    }

    run.started = true;
    setShowOverlay(true);
    setPreloaderActive(true);
    preparePreloaderElement(document.getElementById("preloader"));

    window.setTimeout(complete, PRELOADER_MAX_MS);
    window.setTimeout(() => {
      if (runTokenRef.current !== runToken) {
        return;
      }
      document.getElementById("preloader")?.classList.add("preloader-fadeout");
      window.setTimeout(complete, PRELOADER_FADE_MS);
    }, PRELOADER_VISIBLE_MS);
  }, [mounted, pathname]);

  if (!mounted || !showOverlay) {
    return null;
  }

  return createPortal(
    <div id="preloader" className="preloader preloader-visible" aria-busy="true" aria-live="polite">
      <div className="preloader-content">
        <div className="logo-animation-group">
          <div className="preloader-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="109" height="21" viewBox="0 0 106 21" aria-hidden>
              <g>
                <path
                  className="logo-path"
                  style={{ fillRule: "evenodd", fill: "rgb(66,104,255)" }}
                  d="M 10.992188 20.992188 L 19.496094 20.992188 L 13.476562 13.105469 L 22.140625 13.105469 L 28.050781 5.585938 L 23.59375 0 L 3.472656 0 L 8.65625 6.789062 L 0 6.789062 Z M 18.523438 6.773438 L 13.480469 13.105469 L 8.644531 6.773438 Z"
                />
                <path
                  className="logo-path"
                  style={{ fillRule: "nonzero", fill: "#ffffff" }}
                  d="M 57.769531 10.472656 C 57.769531 12.03125 57.386719 13.429688 56.621094 14.675781 C 55.871094 15.917969 54.789062 16.898438 53.378906 17.609375 C 51.980469 18.320312 50.355469 18.675781 48.5 18.675781 L 40.382812 18.675781 L 40.382812 2.226562 L 48.480469 2.226562 C 50.347656 2.226562 51.980469 2.582031 53.378906 3.292969 C 54.789062 3.988281 55.871094 4.96875 56.621094 6.226562 C 57.386719 7.472656 57.769531 8.886719 57.769531 10.472656 Z M 48.789062 15.410156 C 50.347656 15.410156 51.621094 14.984375 52.605469 14.140625 C 53.589844 13.28125 54.082031 12.058594 54.082031 10.472656 C 54.082031 9.585938 53.847656 8.761719 53.378906 8.007812 C 52.921875 7.234375 52.289062 6.628906 51.480469 6.183594 C 50.671875 5.738281 49.773438 5.515625 48.789062 5.515625 L 44.109375 5.515625 L 44.109375 15.410156 Z"
                />
                <path
                  className="logo-path"
                  style={{ fillRule: "nonzero", fill: "#ffffff" }}
                  d="M 63.4375 18.675781 L 59.710938 18.675781 L 59.710938 2.226562 L 63.4375 2.226562 Z"
                />
                <path
                  className="logo-path"
                  style={{ fillRule: "nonzero", fill: "#ffffff" }}
                  d="M 75.449219 1.871094 C 77.363281 1.871094 79.082031 2.242188 80.613281 2.980469 C 82.15625 3.722656 83.363281 4.753906 84.230469 6.070312 C 85.097656 7.390625 85.535156 8.875 85.535156 10.519531 C 85.535156 12.148438 85.097656 13.617188 84.230469 14.917969 C 83.363281 16.222656 82.164062 17.253906 80.636719 18.007812 C 79.105469 18.75 77.382812 19.121094 75.472656 19.121094 C 73.617188 19.121094 71.914062 18.75 70.351562 18.007812 C 68.792969 17.253906 67.558594 16.222656 66.644531 14.917969 C 65.734375 13.601562 65.277344 12.132812 65.277344 10.519531 C 65.277344 8.886719 65.734375 7.414062 66.644531 6.09375 C 67.558594 4.777344 68.785156 3.746094 70.332031 3.003906 C 71.890625 2.25 73.597656 1.871094 75.449219 1.871094 Z M 75.449219 16.054688 C 76.523438 16.054688 77.539062 15.839844 78.496094 15.410156 C 79.449219 14.980469 80.222656 14.347656 80.8125 13.519531 C 81.398438 12.675781 81.695312 11.675781 81.695312 10.519531 C 81.695312 9.378906 81.394531 8.382812 80.789062 7.539062 C 80.203125 6.695312 79.421875 6.050781 78.449219 5.605469 C 77.496094 5.160156 76.480469 4.9375 75.40625 4.9375 C 74.257812 4.9375 73.207031 5.160156 72.25 5.605469 C 71.308594 6.050781 70.558594 6.6875 70 7.515625 C 69.441406 8.347656 69.160156 9.332031 69.160156 10.472656 C 69.160156 11.644531 69.449219 12.652344 70.023438 13.496094 C 70.609375 14.328125 71.382812 14.964844 72.339844 15.410156 C 73.296875 15.839844 74.332031 16.054688 75.449219 16.054688 Z"
                />
                <path
                  className="logo-path"
                  style={{ fillRule: "nonzero", fill: "#ffffff" }}
                  d="M 101.410156 18.632812 L 96.886719 13.320312 L 91.039062 13.320312 L 91.039062 18.632812 L 87.375 18.632812 L 87.375 2.183594 L 98.917969 2.183594 C 100.285156 2.183594 101.492188 2.410156 102.535156 2.871094 C 103.59375 3.332031 104.410156 3.976562 104.984375 4.804688 C 105.574219 5.621094 105.867188 6.570312 105.867188 7.652344 L 105.867188 7.738281 C 105.867188 9.148438 105.457031 10.3125 104.632812 11.230469 C 103.824219 12.148438 102.699219 12.761719 101.257812 13.074219 L 106 18.632812 Z M 102.117188 7.828125 C 102.117188 6.984375 101.953125 6.367188 101.632812 5.984375 C 101.320312 5.597656 100.925781 5.359375 100.4375 5.273438 C 99.953125 5.183594 99.269531 5.136719 98.386719 5.136719 C 97.988281 5.136719 97.652344 5.144531 97.371094 5.160156 C 95.386719 5.207031 93.277344 5.226562 91.039062 5.226562 L 91.039062 10.363281 L 98.386719 10.363281 C 99.269531 10.363281 99.953125 10.324219 100.4375 10.25 C 100.925781 10.164062 101.320312 9.941406 101.632812 9.585938 C 101.953125 9.214844 102.117188 8.628906 102.117188 7.828125 Z"
                />
              </g>
            </svg>
            <div className="logo-glow" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
