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

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {MOODS.map((m, i) => {
          const selected = m.id === moodId
          return (
            <Reveal key={m.id} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setMoodId(m.id)}
                className="group relative h-full w-full p-2 text-left"
                aria-pressed={selected}
              >
                {/* soft ambient radial glow behind the active card */}
                <span
                  aria-hidden
                  className="mood-aura pointer-events-none absolute -inset-6 -z-10 rounded-full blur-2xl"
                  style={{
                    background: `radial-gradient(60% 60% at 30% 25%, ${m.glow}, transparent 70%)`,
                    opacity: selected ? 1 : 0,
                  }}
                />
                <span className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground">
                  {m.index}
                </span>
                <span
                  className="font-heading mt-5 block text-xl font-medium tracking-tight transition-colors duration-1000 ease-in-out"
                  style={{ color: selected ? m.color : "var(--foreground)" }}
                >
                  {m.title}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                  {m.subtitle}
                </span>
                <span
                  className="mt-6 block h-px w-full origin-left transition-all duration-1000 ease-in-out"
                  style={{
                    backgroundColor: m.color,
                    transform: selected ? "scaleX(1)" : "scaleX(0.1)",
                    opacity: selected ? 0.9 : 0.25,
                  }}
                />
              </button>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.2}>
        <Link
          href="/showreel"
          className="group mt-12 inline-flex items-center gap-3 text-sm tracking-[0.16em] text-foreground"
        >
          <span className="nav-underline" data-active="true">
            HEAR THE {mood.title} REEL
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  )
}
