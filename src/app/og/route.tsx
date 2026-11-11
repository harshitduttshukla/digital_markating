import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";


/** Dynamic Open Graph image: /og?title=... */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? siteConfig.tagline).slice(0, 110);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 15% 10%, #3a2d8f 0%, #10131D 55%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700, letterSpacing: 2 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "#7055F7", display: "flex" }} />
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 26, color: "#B7F36B" }}>SEO · Google Ads · Performance Marketing · CRO</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
