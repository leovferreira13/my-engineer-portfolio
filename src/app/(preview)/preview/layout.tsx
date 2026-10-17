export const metadata = { robots: { index: false, follow: false } }

import "dialkit/styles.css"

import { DialRoot } from "dialkit"

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <DialRoot position="top-right" />
    </>
  )
}
