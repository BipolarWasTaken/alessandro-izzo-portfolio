import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#fafaf8",
          padding: "76px 88px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#1f4e5f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fafaf8",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            AI
          </div>
          <div style={{ fontSize: 24, color: "#55565b", fontFamily: "sans-serif" }}>Alessandro Izzo</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 500,
              color: "#17191a",
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            <span>Costruisco community.</span>
            <span>Lancio prodotti con l&apos;AI.</span>
          </div>
          <div style={{ fontSize: 26, color: "#1f4e5f", fontFamily: "sans-serif", fontWeight: 600 }}>
            Community & Digital Growth Specialist
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontFamily: "sans-serif" }}>
          {[
            ["$58K+", "revenue generato"],
            ["~4.000", "membri community"],
            ["118 / 105", "lead individuati / contattati"],
          ].map(([value, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 30, fontWeight: 700, color: "#1f4e5f" }}>{value}</div>
              <div style={{ fontSize: 16, color: "#8a8b8f" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
