"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { MOODS } from "@/lib/studio-data"
import { useTheme } from "@/components/theme-engine"
import { Reveal } from "@/components/reveal"

export function MoodEngine() {
  const { moodId, mood, setMoodId } = useTheme()

  return (
    <section id="atmosphere" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p
          className="font-mono text-[11px] tracking-[0.3em]"
          style={{ color: "var(--mood)" }}
        >
          TOTAL CONTROL — THEME ENGINE
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-heading mt-6 max-w-2xl text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Tune the Atmosphere of the Entire Studio
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Choose a register and the whole site responds — light, palette, and
          the reel all shift to match the emotional energy you select.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-zinc-800/60 bg-zinc-800/60 sm:grid-cols-2 lg:grid-cols-4">
        {MOODS.map((m, i) => {
          const selected = m.id === moodId
          return (
            <Reveal key={m.id} delay={i * 0.06} className="h-full">
              <button
                type="button"
                onClick={() => setMoodId(m.id)}
                className="group relative flex h-full min-h-[15rem] w-full flex-col justify-between bg-background p-7 text-left transition-colors duration-700"
                aria-pressed={selected}
              >
                {/* active cell slowly fills with an ultra-soft premium gradient */}
                <span
                  aria-hidden
                  className="mood-aura pointer-events-none absolute inset-0"
                  style={{
                    background: m.cellFill,
                    opacity: selected ? 1 : 0,
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground">
                    {m.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full transition-all duration-700"
                    style={{
                      backgroundColor: m.color,
                      opacity: selected ? 1 : 0.25,
                      boxShadow: selected ? `0 0 12px 1px ${m.color}` : "none",
                    }}
                  />
                </div>
                <div className="relative">
                  <span
                    className="font-heading block text-2xl font-medium tracking-tight transition-colors duration-700 ease-in-out"
                    style={{
                      color: selected ? m.color : "var(--foreground)",
                    }}
                  >
                    {m.title}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                    {m.subtitle}
                  </span>
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.2}>
        <Link
          href="/showreel"
          className="group mt-12 inline-flex items-center gap-4 rounded-sm border px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] transition-colors duration-700"
          style={{
            borderColor: mood.color,
            color: mood.color,
            backgroundColor: "color-mix(in oklab, var(--mood) 8%, transparent)",
          }}
        >
          HEAR THE {mood.title} REEL
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  )
}
