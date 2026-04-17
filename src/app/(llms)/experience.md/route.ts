import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { formatPositionAsMarkdown } from "@/features/portfolio/lib/format-position-markdown"

const content = `# Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) =>
      formatPositionAsMarkdown(position, item.companyName, {
        headingPrefix: "##",
      })
    )
    .join("\n\n")
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
