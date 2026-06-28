"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { MOODS, type Mood, type MoodId } from "@/lib/studio-data"

type ThemeContextValue = {
  moodId: MoodId
  mood: Mood
  setMoodId: (id: MoodId) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeEngineProvider({ children }: { children: ReactNode }) {
  const [moodId, setMoodId] = useState<MoodId>("void")
  const mood = MOODS.find((m) => m.id === moodId) ?? MOODS[0]

  // apply the active mood to the document root so the whole site reacts
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--mood", mood.color)
    root.style.setProperty("--mood-soft", mood.glow)
    root.style.setProperty("--mood-bg", mood.background)
  }, [mood])

  return (
    <ThemeContext.Provider value={{ moodId, mood, setMoodId }}>
      {/* full-viewport ambient canvas that cross-fades between moods */}
      <div
        aria-hidden
        className="ambient-canvas pointer-events-none fixed inset-0 -z-10"
        style={{ background: mood.background }}
      />
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeEngineProvider")
  return ctx
}
