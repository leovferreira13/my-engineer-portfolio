import { cn } from "@/lib/utils"

export function JournalTags({
  tags,
  className,
}: {
  tags: readonly string[]
  className?: string
}) {
  if (tags.length === 0) return null

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-line bg-muted px-2 py-1 text-xs text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
