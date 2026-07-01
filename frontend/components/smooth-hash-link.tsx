"use client"

import { type ComponentProps, type MouseEvent } from "react"
import Link from "next/link"

type SmoothHashLinkProps = ComponentProps<typeof Link> & {
  href: `/#${string}`
}

export function SmoothHashLink({
  href,
  onClick,
  scroll = false,
  ...props
}: SmoothHashLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      window.location.pathname !== "/"
    ) {
      return
    }

    const targetId = decodeURIComponent(href.slice(2))
    const target = document.getElementById(targetId)

    if (!target) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    })
  }

  return <Link href={href} onClick={handleClick} scroll={scroll} {...props} />
}
