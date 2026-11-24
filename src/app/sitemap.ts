import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = [
  "",
  "/comment-ca-marche",
  "/fonctionnalites",
  "/cas-d-usage",
  "/faq",
  "/liste-d-attente",
  "/confidentialite",
  "/mentions-legales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
