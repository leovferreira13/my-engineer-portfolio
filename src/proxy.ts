import { type NextRequest, NextResponse } from "next/server"

import { isLocale, localizePath } from "./i18n/config"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const segments = pathname.split("/").filter(Boolean)
  const locale = isLocale(segments[0] || "") ? segments[0] : "en"
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-portfolio-locale", locale)

  if (isLocale(segments[0] || "")) {
    if (segments[1] === "decisions") {
      const url = request.nextUrl.clone()
      segments[1] = "journal"
      url.pathname = `/${segments.join("/")}`
      return NextResponse.redirect(url, 308)
    }
    if (
      segments[1] === "journal" &&
      segments.length > 2 &&
      (pathname.endsWith(".mdx") ||
        request.headers.get("accept")?.includes("text/markdown"))
    ) {
      const url = request.nextUrl.clone()
      url.pathname = `/journal-text/${segments
        .slice(2)
        .join("/")
        .replace(/\.mdx$/, "")}`
      return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
    }
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  if (
    pathname === "/" ||
    pathname === "/projects" ||
    /^\/(journal|decisions|blog)(\/|$)/.test(pathname)
  ) {
    if (pathname === "/journal/rss" || pathname === "/blog/rss") {
      return NextResponse.next({ request: { headers: requestHeaders } })
    }
    const url = request.nextUrl.clone()
    url.pathname = localizePath(
      pathname.replace(/^\/blog(?=\/|$)/, "/journal"),
      "en"
    )
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = { matcher: ["/((?!_next/|favicon.ico).*)"] }
