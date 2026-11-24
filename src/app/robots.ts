import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/** Blocks all crawling until launch (NEXT_PUBLIC_SITE_LIVE=true). */
export default function robots(): MetadataRoute.Robots {
  if (!site.live) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
