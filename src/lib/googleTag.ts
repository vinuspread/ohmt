type Gtag = (...args: unknown[]) => void;

/**
 * Fires the GA4/Google Ads "generate_lead" event via the gtag already
 * initialized in the root layout (G-TN2XSY9H59) - no-ops if gtag hasn't
 * loaded yet. Call this exactly once per confirmed-successful inquiry
 * submission, not on page view/mount, mirroring trackLead() in metaPixel.ts.
 */
export function trackGenerateLead() {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "generate_lead");
  }
}
