"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { MOODS, type MoodId } from "@/lib/studio-data"

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <input
        {...props}
        className="mt-3 w-full border-b border-border/40 bg-transparent py-3 text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/40 focus:border-foreground"
      />
    </label>
  )
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground">
        {index}
      </span>
      <span className="font-heading text-lg font-medium text-foreground">
        {title}
      </span>
    </div>
  )
}

export function IntakeForm() {
  const [selectedMoods, setSelectedMoods] = useState<MoodId[]>([])
  const [submitted, setSubmitted] = useState(false)

  function toggleMood(id: MoodId) {
    setSelectedMoods((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    )
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <div className="flex flex-col items-center py-10 text-center">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full text-background"
            style={{ backgroundColor: "var(--mood)" }}
          >
            <Check className="h-5 w-5" />
          </span>
          <p className="font-heading mt-6 text-2xl font-medium text-foreground">
            Briefing received.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Our studio will review your sonic architecture and respond within
            two working days.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
        className="space-y-16"
      >
        {/* identity */}
        <div className="space-y-8">
          <SectionLabel index="01" title="Who you are" />
          <Field label="FULL NAME" placeholder="Your name" />
          <Field label="ROLE / TITLE" placeholder="Artist, Director, Producer…" />
          <Field label="EMAIL" type="email" placeholder="you@studio.com" />
        </div>

        {/* moods */}
        <div className="space-y-8">
          <SectionLabel index="02" title="The energy you want" />
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {MOODS.map((m) => {
              const selected = selectedMoods.includes(m.id)
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => toggleMood(m.id)}
                  className="group relative p-1 text-left"
                  aria-pressed={selected}
                >
                  <span
                    aria-hidden
                    className="mood-aura pointer-events-none absolute -inset-4 -z-10 rounded-full blur-2xl"
                    style={{
                      background: `radial-gradient(60% 60% at 30% 25%, ${m.glow}, transparent 70%)`,
                      opacity: selected ? 1 : 0,
                    }}
                  />
                  <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                    {m.index}
                  </span>
                  <span
                    className="mt-2 block font-heading text-sm font-medium transition-colors duration-1000 ease-in-out"
                    style={{ color: selected ? m.color : "var(--foreground)" }}
                  >
                    {m.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* reference */}
        <div className="space-y-8">
          <SectionLabel index="03" title="Reference material" />
          <Field
            label="ASSET / DEMO LINK"
            type="url"
            placeholder="Share a cloud link to references, demos, or project briefs"
          />
        </div>

        <button
          type="submit"
          className="group inline-flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-foreground"
        >
          <span className="nav-underline" data-active="true">
            PROCEED TO BRIEFING
          </span>
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
        </button>
      </form>
    </section>
  )
}
