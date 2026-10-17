import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { HAS_PUBLIC_SITE_URL } from "@/lib/site-url"
export default function robots(): MetadataRoute.Robots {
  return HAS_PUBLIC_SITE_URL
    ? {
        rules: {
          userAgent: "*",
          allow: "/",
          disallow: [
            "/components",
            "/blocks",
            "/preview",
            "/sponsors",
            "/wall-of-love",
          ],
        },
        sitemap: `${SITE_INFO.url}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } }
}
