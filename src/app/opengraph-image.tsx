import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Salário Líquido";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #161616 55%, #fafafa 55%, #fafafa 100%)",
          color: "#ffffff",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "44px",
          }}
        >
          <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.32em", textTransform: "uppercase" }}>
            Salário Líquido
          </div>
          <div style={{ display: "flex", maxWidth: "720px", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                fontSize: 84,
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
                fontWeight: 700,
              }}
            >
              Calculadora CLT 2026
            </div>
            <div style={{ display: "flex", maxWidth: "560px", fontSize: 28, lineHeight: 1.4, color: "#d4d4d4" }}>
              INSS 2026, IRRF 2026 e redução da Lei 15.270/2025 em uma conta clara.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
