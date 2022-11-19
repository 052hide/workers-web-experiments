import type { ReactNode } from "react"

export type HeadlessLinkProps = {
  children: ReactNode
  href: string
  isExternal?: boolean
  className?: string
}