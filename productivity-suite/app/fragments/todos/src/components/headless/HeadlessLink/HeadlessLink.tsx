import type { DOMAttributes } from 'react'
import { getBus } from "piercing-library";

import type { HeadlessLinkProps } from './type'

export const HeadlessLink = ({
  children,
  href,
  isExternal = false,
  className
}: HeadlessLinkProps) => {
  const onClick: DOMAttributes<HTMLAnchorElement>['onClick'] = (e) => {
    if (!isExternal && !e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      e.preventDefault()
      getBus().dispatch("href", href);
    }
  }

  return (
    <a
      href={href}
      onClick={onClick}
      {...(isExternal ? {
        target: '_blank',
        rel: 'noopener',
      } : {})}
      className={className}
    >
      {children}
    </a>
  )
}