import { ImageResponse } from "next/og"

import { USER } from "@/features/portfolio/data/user"
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = (searchParams.get("title") || USER.displayName).slice(0, 120)
  const description = (
    searchParams.get("description") ||
    "Product Engineer | Backend, data & applied AI"
  ).slice(0, 240)
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#18181b",
          color: "#fafafa",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 30 }}>
          LF / {USER.displayName}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>{description}</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa" }}>
          Product engineering · Projects · Journal
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
