import { claims, type ClaimKey } from "@/config/site";

/**
 * Picks the full copy for a product promise, or its fallback when the founder
 * has dropped that promise. "unconfirmed" still shows the full copy so the
 * preview reads as intended; `npm run check:launch` blocks launch until every
 * claim is confirmed or dropped.
 */
export function claim(key: ClaimKey, full: string, fallback: string): string {
  return claims[key] === "dropped" ? fallback : full;
}

export function hasClaim(key: ClaimKey): boolean {
  return claims[key] !== "dropped";
}
