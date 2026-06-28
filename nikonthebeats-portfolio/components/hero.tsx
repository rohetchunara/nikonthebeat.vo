"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const STATS = [
  { value: "140+", label: "Tracks Produced" },
  { value: "8+", label: "Years Active" },
  { value: "Remote", label: "Global Delivery" },
]

const TITLE_LINES = [
  "Crafting the Soundtrack",
  "of Modern Cinema",
  "& Indie Artists",
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  // subtle parallax on the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  let letterIndex = 0

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* parallax background */}
      <motion.div
        aria-hidden
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="/hero-studio.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* vignette + mood wash for legibility */}
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, transparent 30%, var(--background) 100%)",
          }}
        />
        <div
          className="aura-transition absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 40% at 70% 30%, var(--mood-soft), transparent 70%)",
          }}
        />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[11px] tracking-[0.32em] text-muted-foreground"
        >
          • SONIC ARCHITECTURE — NEPAL &amp; WORLDWIDE
        </motion.p>

        <h1 className="font-heading mt-8 max-w-4xl text-balance text-5xl font-medium leading-[1.04] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          {TITLE_LINES.map((line, li) => (
            <span key={li} className="block">
              {line.split("").map((char) => {
                const i = letterIndex++
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: "0.4em" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.022,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`inline-block whitespace-pre${
                      char === "&" ? " amp" : ""
                    }`}
                  >
                    {char}
                  </motion.span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A precision-tuned studio engineering broadcast-ready records for
          artists, filmmakers, and agencies — delivered with the care of a
          couture atelier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/showreel"
            className="group inline-flex items-center gap-3 rounded-sm px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-background transition-colors duration-700"
            style={{ backgroundColor: "var(--mood)" }}
          >
            LISTEN TO THE REEL
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/briefing"
            className="inline-flex items-center gap-3 rounded-sm border px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors duration-700"
            style={{
              borderColor: "color-mix(in oklab, var(--mood) 45%, var(--border))",
            }}
          >
            START A PROJECT
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export function StatsBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <p className="font-heading text-7xl font-light leading-none tracking-tight text-foreground sm:text-8xl">
              {stat.value}
            </p>
            <p className="font-mono mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
