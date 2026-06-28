"use client"

import { Reveal } from "@/components/reveal"

export function ProducerIntro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* portrait */}
        <Reveal y={36}>
          <div className="group relative overflow-hidden rounded-3xl border border-border">
            <img
              src="/producer-portrait.png"
              alt="Portrait of NIKON, lead producer at NIKONTHEBEATS"
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
            <div
              aria-hidden
              className="aura-transition pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--mood-soft), transparent 55%)",
              }}
            />
            <span className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.24em] text-foreground/80">
              LEAD PRODUCER / FOUNDER
            </span>
          </div>
        </Reveal>

        {/* copy */}
        <div>
          <Reveal>
            <p
              className="font-mono text-[11px] tracking-[0.3em]"
              style={{ color: "var(--mood)" }}
            >
              THE MAN BEHIND THE SOUND
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading mt-6 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Meet Nikon
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              An architectural approach to sound design. Crafting immersive
              sonic landscapes that bridge the gap between high-end commercial
              cinema and raw underground sonic identity.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Every record leaves the studio mastered, intentional, and built to
              move people — whether it scores a feature film, anchors a brand
              campaign, or defines an artist&apos;s debut.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="font-heading mt-10 text-3xl italic text-foreground/90">
              Nikon
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.24em] text-muted-foreground">
              SIGNED — KATHMANDU VALLEY
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
