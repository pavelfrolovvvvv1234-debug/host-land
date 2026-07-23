const PRELOADER_VISIBLE_MS = 1800;
const PRELOADER_FADE_MS = 500;

let visibleTimer: ReturnType<typeof setTimeout> | null = null;
let fadeTimer: ReturnType<typeof setTimeout> | null = null;
let running = false;
let pendingDone: (() => void) | null = null;

function setPreloaderActive(active: boolean) {
  document.documentElement.classList.toggle("preloader-active", active);
  document.body.classList.toggle("preloader-active", active);
}

function clearTimers() {
  if (visibleTimer) {
    clearTimeout(visibleTimer);
    visibleTimer = null;
  }
  if (fadeTimer) {
    clearTimeout(fadeTimer);
    fadeTimer = null;
  }
}

function finishPreloader(preloaderElement: HTMLElement) {
  preloaderElement.classList.remove("preloader-visible", "preloader-fadeout");
  preloaderElement.classList.add("preloader-removed");
  preloaderElement.removeAttribute("style");
  setPreloaderActive(false);
  running = false;
  const done = pendingDone;
  pendingDone = null;
  done?.();
}

/**
 * Runs the homepage preloader once. Uses module-level timers so React Strict Mode
 * remounts do not cancel the animation mid-flight.
 */
export function runHomePreloader(onDone: () => void) {
  if (typeof window === "undefined") {
    onDone();
    return () => {};
  }

  const path = window.location.pathname;
  const isHomePage = path === "/" || path === "/ru" || path === "/en";
  if (!isHomePage) {
    setPreloaderActive(false);
    onDone();
    return () => {};
  }

  const preloaderElement = document.getElementById("preloader");
  if (!preloaderElement) {
    requestAnimationFrame(() => runHomePreloader(onDone));
    return () => {};
  }

  clearTimers();
  running = true;
  pendingDone = onDone;

  preloaderElement.classList.remove("preloader-removed", "preloader-fadeout");
  preloaderElement.classList.add("preloader-visible");
  preloaderElement.style.display = "flex";
  preloaderElement.style.visibility = "visible";
  preloaderElement.style.pointerEvents = "auto";
  preloaderElement.style.zIndex = "99999";
  setPreloaderActive(true);

  visibleTimer = window.setTimeout(() => {
    preloaderElement.classList.add("preloader-fadeout");
    fadeTimer = window.setTimeout(() => {
      finishPreloader(preloaderElement);
    }, PRELOADER_FADE_MS);
  }, PRELOADER_VISIBLE_MS);

  return () => {
    /* Intentionally no-op: Strict Mode cleanup must not cancel the shared timer. */
  };
}

export function cancelHomePreloader() {
  clearTimers();
  running = false;
  setPreloaderActive(false);
}

export function isHomePreloaderRunning() {
  return running;
}
