"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const LINKS = [
  { label: "HOME", href: "/" },
  { label: "SHOWREEL", href: "/showreel" },
  { label: "SERVICES", href: "/services" },
  { label: "BRIEFING ROOM", href: "/briefing" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-[0.22em] text-foreground sm:text-base"
        >
          NIKONTHEBEATS
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                data-active={active}
                className="nav-underline text-xs font-medium tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="https://wa.me/9779868573730"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-underline text-xs font-medium tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            WHATSAPP
          </a>
          <Link
            href="/briefing"
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            INITIATE PROJECT
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/90 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/9779868573730"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] text-muted-foreground"
            >
              WHATSAPP
            </a>
            <Link
              href="/briefing"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-3 text-center text-xs font-semibold tracking-[0.16em] text-primary-foreground"
            >
              INITIATE PROJECT
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
