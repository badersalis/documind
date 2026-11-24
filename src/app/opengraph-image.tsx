import { ImageResponse } from "next/og";
import { getDictionary } from "@/content";

const t = getDictionary("fr");

export const alt = t.home.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share card for WhatsApp, LinkedIn and Facebook previews. Must read well small. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1f3fd1",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em" }}>Tikéo</div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              border: "2px solid #ffffff",
              borderRadius: 999,
              padding: "6px 18px",
            }}
          >
            {t.badge}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.08, maxWidth: 980 }}>
          {t.home.hero.h1}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#dfe5ff" }}>
          <div style={{ width: 48, height: 14, background: "#ffe14d", borderRadius: 4 }} />
          {t.descriptor}
        </div>
      </div>
    ),
    size,
  );
}
