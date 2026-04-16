import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    const baseUrl = process.env.GITHUB_CONTRIBUTIONS_API_URL
    if (!baseUrl) {
      return []
    }

    try {
      const res = await fetch(`${baseUrl}/v4/${GITHUB_USERNAME}?y=last`)
      if (!res.ok) {
        return []
      }

      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions ?? []
    } catch {
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
