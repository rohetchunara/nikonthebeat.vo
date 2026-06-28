"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { SERVICES } from "@/lib/studio-data"

function SpecColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ServicesSection() {
  const [open, setOpen] = useState<string | null>(SERVICES[0].title)

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="overflow-hidden rounded-2xl border border-border">
        {SERVICES.map((service) => {
          const isOpen = open === service.title
          return (
            <div key={service.title} className="border-b border-border last:border-b-0">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : service.title)}
                className="flex w-full items-center gap-4 bg-card px-5 py-6 text-left transition-colors hover:bg-secondary sm:px-8"
                aria-expanded={isOpen}
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {service.index}
                </span>
                <span className="flex-1 font-heading text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {service.title}
                </span>
                <span
                  className="hidden font-mono text-xs tracking-[0.12em] sm:block"
                  style={{
                    color: isOpen ? "var(--mood)" : "var(--muted-foreground)",
                  }}
                >
                  {service.price}
                </span>
                <Plus
                  className="h-5 w-5 shrink-0 transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "none",
                    color: isOpen ? "var(--mood)" : "var(--muted-foreground)",
                  }}
                />
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="bg-card px-5 pb-8 sm:px-8">
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:hidden">
                      {service.price}
                    </p>
                    <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3">
                      <SpecColumn title="TECHNICAL SPECS" items={service.specs} />
                      <SpecColumn title="EQUIPMENT" items={service.equipment} />
                      <SpecColumn title="DELIVERABLES" items={service.deliverables} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
