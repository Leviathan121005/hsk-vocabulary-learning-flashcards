import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim();

let analyticsInitialized = false;

function canTrackAnalytics() {
  return typeof window !== "undefined" && Boolean(GA_MEASUREMENT_ID);
}

export function initAnalytics() {
  if (analyticsInitialized || !canTrackAnalytics()) return false;

  ReactGA.initialize(GA_MEASUREMENT_ID);
  analyticsInitialized = true;
  return true;
}

export function trackPageView(pagePath) {
  if (!analyticsInitialized) return;

  ReactGA.send({
    hitType: "pageview",
    page: pagePath,
    title: typeof document !== "undefined" ? document.title : undefined,
  });
}

export function trackEvent(eventName, params = {}) {
  if (!analyticsInitialized) return;
  ReactGA.event(eventName, params);
}
