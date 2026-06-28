"use client"

import { useMemo, useState } from "react"
import { Pause, Play } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { FILTERS, TRACKS } from "@/lib/studio-data"
import { useTheme } from "@/components/theme-engine"
import { MOODS, type MoodId } from "@/lib/studio-data"

function Waveform({
  seed,
  active,
  color,
}: {
  seed: number
  active: boolean
  color: string
}) {
  const bars = useMemo(() => {
    const out: number[] = []
    let s = seed * 9301 + 49297
    for (let i = 0; i < 64; i++) {
      s = (s * 9301 + 49297) % 233280
      out.push(0.2 + (s / 233280) * 0.8)
    }
    return out
  }, [seed])

  return (
    <div className="flex h-9 items-center gap-[2px]" aria-hidden>
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[2px] rounded-full"
          style={{
            backgroundColor: active ? color : "oklch(0.5 0 0)",
            opacity: active ? 0.5 + h * 0.5 : 0.4,
          }}
          animate={
            active
              ? { height: [`${h * 60}%`, `${h * 100}%`, `${h * 70}%`] }
              : { height: `${h * 70}%` }
          }
          transition={
            active
              ? {
                  duration: 0.8 + (i % 5) * 0.12,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  )
}

export function AudioShowcase() {
  const { moodId, setMoodId } = useTheme()
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All")
  const [playing, setPlaying] = useState<string | null>(null)

  const activeMood = MOODS.find((m) => m.id === moodId)!

  const moodTracks = TRACKS.filter((t) => t.moods.includes(moodId))
  const visibleTracks = moodTracks.filter(
    (t) => filter === "All" || t.category === filter,
  )

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      {/* mood quick-switch (mirrors the global engine) */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 font-mono text-[11px] tracking-[0.24em] text-muted-foreground">
          ENERGY
        </span>
        {MOODS.map((m) => {
          const selected = m.id === moodId
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMoodId(m.id as MoodId)}
              className="rounded-full border px-4 py-2 text-[11px] tracking-[0.14em] transition-all"
              style={{
                borderColor: selected ? m.color : "var(--border)",
                color: selected ? m.color : "var(--muted-foreground)",
                backgroundColor: selected ? m.glow : "transparent",
              }}
              aria-pressed={selected}
            >
              {m.title}
            </button>
          )
        })}
      </div>

      <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Selected Sonic Works
        </h2>
        <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
          <span style={{ color: activeMood.color }}>{activeMood.title}</span>
          {" — "}
          {moodTracks.length} COMPOSITION{moodTracks.length === 1 ? "" : "S"}
        </p>
      </div>

      {/* category filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const selected = f === filter
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="rounded-full border px-4 py-2 text-xs tracking-[0.1em] transition-colors"
              style={{
                borderColor: selected ? "transparent" : "var(--border)",
                backgroundColor: selected ? "var(--primary)" : "transparent",
                color: selected
                  ? "var(--primary-foreground)"
                  : "var(--muted-foreground)",
              }}
            >
              {f}
            </button>
          )
        })}
      </div>

      {/* track list */}
      <ul className="mt-8 overflow-hidden rounded-2xl border border-border">
        <AnimatePresence mode="popLayout">
          {visibleTracks.map((track, i) => {
            const isPlaying = playing === track.id
            return (
              <motion.li
                layout
                key={track.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex items-center gap-4 border-b border-border bg-card px-4 py-4 transition-all duration-300 last:border-0 hover:bg-secondary sm:gap-6 sm:px-6 sm:py-5"
              >
                <button
                  type="button"
                  onClick={() => setPlaying(isPlaying ? null : track.id)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: isPlaying ? activeMood.color : "var(--border)",
                    color: isPlaying ? activeMood.color : "var(--foreground)",
                    backgroundColor: isPlaying ? activeMood.glow : "transparent",
                  }}
                  aria-label={
                    isPlaying ? `Pause ${track.title}` : `Play ${track.title}`
                  }
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="ml-0.5 h-4 w-4" />
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <p className="font-heading truncate text-lg font-medium text-foreground">
                    {track.title}
                  </p>
                  <p className="truncate text-xs tracking-[0.04em] text-muted-foreground">
                    {track.subcategory} — {track.category}
                  </p>
                </div>

                <div className="hidden flex-1 sm:block">
                  <Waveform
                    seed={track.seed}
                    active={isPlaying}
                    color={activeMood.color}
                  />
                </div>

                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {track.duration}
                </span>
              </motion.li>
            )
          })}
        </AnimatePresence>

        {visibleTracks.length === 0 && (
          <li className="bg-card px-6 py-12 text-center text-sm text-muted-foreground">
            No compositions match this energy and filter. Try another register.
          </li>
        )}
      </ul>
    </section>
  )
}
