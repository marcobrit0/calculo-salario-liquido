import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#fafafa",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 132,
            height: 132,
            borderRadius: "50%",
            background: "#f5f5f5",
            border: "8px solid #171717",
            color: "#171717",
            fontSize: 78,
            fontWeight: 600,
            fontFamily: "serif",
            paddingBottom: 6,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size },
  );
}
