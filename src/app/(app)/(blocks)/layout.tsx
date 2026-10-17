export const metadata = { robots: { index: false, follow: false } }

export default function AppLayoutWide({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-slot="layout-wide"
      className="container mx-auto border-x border-line"
    >
      {children}
    </div>
  )
}
