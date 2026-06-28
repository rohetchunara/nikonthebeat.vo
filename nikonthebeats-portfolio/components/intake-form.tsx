"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { MOODS, type MoodId } from "@/lib/studio-data"

const STEPS = ["01", "02", "03"]

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
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
      />
    </label>
  )
}

export function IntakeForm() {
  const [step, setStep] = useState(0)
  const [selectedMoods, setSelectedMoods] = useState<MoodId[]>([])
  const [submitted, setSubmitted] = useState(false)

  function toggleMood(id: MoodId) {
    setSelectedMoods((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        {/* step indicator */}
        <div className="mt-8 flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-2">
              <span
                className="font-mono text-xs"
                style={{
                  color: i <= step ? "var(--foreground)" : "var(--muted-foreground)",
                }}
              >
                {s}
              </span>
              <span
                className="h-px flex-1 transition-colors"
                style={{
                  backgroundColor: i <= step ? "var(--foreground)" : "var(--border)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground">
                <Check className="h-5 w-5" />
              </span>
              <p className="font-heading mt-6 text-xl font-medium text-foreground">
                Briefing received.
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Our studio will review your sonic architecture and respond within
                two working days.
              </p>
            </div>
          ) : step === 0 ? (
            <div className="space-y-7">
              <Field label="FULL NAME" placeholder="Your name" />
              <Field label="ROLE / TITLE" placeholder="Artist, Director, Producer…" />
              <Field label="EMAIL" type="email" placeholder="you@studio.com" />
              <button
                type="button"
                onClick={() => setStep(1)}
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground"
              >
                CONTINUE
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Select the sonic moods that resonate with your project. Choose as
                many as apply.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {MOODS.map((m) => {
                  const selected = selectedMoods.includes(m.id)
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => toggleMood(m.id)}
                      className="rounded-xl border p-4 text-left transition-colors"
                      style={{
                        borderColor: selected ? m.color : "var(--border)",
                        backgroundColor: selected ? m.glow : "transparent",
                      }}
                      aria-pressed={selected}
                    >
                      <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                        {m.index}
                      </span>
                      <span
                        className="mt-2 block font-heading font-medium"
                        style={{ color: selected ? m.color : "var(--foreground)" }}
                      >
                        {m.title}
                      </span>
                    </button>
                  )
                })}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="rounded-full border border-border px-6 py-3 text-xs font-medium tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  BACK
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground"
                >
                  CONTINUE
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-7">
              <Field
                label="ASSET / DEMO LINK"
                type="url"
                placeholder="Share a cloud link to reference material, demos, or project briefs"
              />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-full border border-border px-6 py-3 text-xs font-medium tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  BACK
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground"
                >
                  SUBMIT REQUEST
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
