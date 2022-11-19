import { getBus } from "piercing-library";
import { component$, Slot } from '@builder.io/qwik';

import type { HeadlessLinkProps } from './type'

export default component$(({
  href,
  isExternal = false,
  className
}: HeadlessLinkProps) => {
  return (
    <a
      href={href}
      preventdefault:click={!isExternal}
      onClick$={() => {
        getBus().dispatch("href", href);
      }}
      {...(isExternal ? {
        target: '_blank',
        rel: 'noopener',
      } : {})}
      className={className}
    >
      <Slot />
    </a>
  )
})