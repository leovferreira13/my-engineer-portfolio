import { EDUCATION_ENTRIES } from "@/features/portfolio/data/education"
import { formatPositionAsMarkdown } from "@/features/portfolio/lib/format-position-markdown"

const content = `# Education

${EDUCATION_ENTRIES.map((position) =>
  formatPositionAsMarkdown(position, "Education", { headingPrefix: "##" })
).join("\n\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
