type Fbq = (...args: unknown[]) => void;

/**
 * Fires the Meta Pixel "Lead" event. Safe to call from any client component -
 * no-ops if fbq hasn't loaded yet (base pixel is installed in the root layout).
 * Call this exactly once per confirmed-successful inquiry submission, not on
 * page view/mount, so refresh/back-nav/direct-URL access never re-fires it.
 */
export function trackLead() {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq === "function") {
    fbq("track", "Lead");
  }
}
