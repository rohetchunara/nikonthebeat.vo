const SOCIALS = ["INSTAGRAM", "SPOTIFY", "SOUNDCLOUD", "CONTACT"]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-16 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
            27.7172° N, 85.3240° E • Studio Coordinates — Kathmandu Valley
          </p>
          <p className="font-heading mt-8 text-2xl font-semibold tracking-[0.18em] text-foreground">
            NIKONTHEBEATS
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            © 2026 NIKONTHEBEATS. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-col gap-3 md:items-end">
          {SOCIALS.map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {social}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
