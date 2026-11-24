/**
 * Pre-launch gate: `npm run check:launch`.
 * Fails while anything the site promises or requires legally is unsettled.
 * Run it with the production environment variables set.
 */
import { claims, site } from "../src/config/site.ts";

const problems: string[] = [];

for (const [key, status] of Object.entries(claims)) {
  if (status === "unconfirmed") {
    problems.push(`Claim "${key}" is unconfirmed: the founder must confirm or drop it (positioning §10).`);
  }
}
if (!site.url.startsWith("https://")) problems.push("NEXT_PUBLIC_SITE_URL must be the public https URL.");
if (!site.live) problems.push("NEXT_PUBLIC_SITE_LIVE is not true: search engines are blocked.");
if (!site.contactEmail) problems.push("NEXT_PUBLIC_CONTACT_EMAIL is missing (brief Q4).");
if (!site.publisher.name || !site.publisher.address || !site.publisher.director) {
  problems.push("Mentions légales: publisher details are missing (src/config/site.ts).");
}
if (!site.host.name || !site.host.address) problems.push("Mentions légales: host details are missing (D-004).");
if (site.waitlistMode === "live" && !site.privacyApproved) {
  problems.push("Waitlist is live but the privacy notice is not lawyer-approved (D-010).");
}

if (problems.length) {
  console.error(`Launch check failed (${problems.length}):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Launch check passed.");
