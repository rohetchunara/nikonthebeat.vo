const ITEMS = [
  "NEPALESE CINEMA OST",
  "CROSS-BORDER AUDIO LAB",
  "HIT FACTORY NEPAL",
  "SPATIAL MIX ARCHIVE",
  "CINEMATIC STEM VAULT",
  "KATHMANDU INDIE SESSIONS",
]

export function MarqueeBand() {
  const sequence = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y border-border py-4">
      <div className="flex w-max marquee-track">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
            {sequence.map((item, i) => (
              <span
                key={`${group}-${i}`}
                className="flex items-center whitespace-nowrap font-mono text-xs tracking-[0.2em] text-muted-foreground"
              >
                {item}
                <span className="mx-6" style={{ color: "var(--mood)" }}>
                  {"//"}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
