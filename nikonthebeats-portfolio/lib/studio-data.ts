export type MoodId = "void" | "trust" | "form" | "resonance"

export type Mood = {
  id: MoodId
  index: string
  title: string
  subtitle: string
  /** accent color used for the dynamic aura + highlights */
  color: string
  /** soft translucent version of the accent for glows */
  glow: string
  /** base canvas tint applied to the whole site background */
  base: string
  /** the full-page ambient background gradient stack */
  background: string
  /** ultra-soft low-opacity gradient that fills the active matrix cell */
  cellFill: string
}

export const MOODS: Mood[] = [
  {
    id: "void",
    index: "01",
    title: "DARK & VOID",
    subtitle: "Velvet aged burgundy over obsidian",
    color: "#8c5a52",
    glow: "oklch(0.42 0.09 24 / 16%)",
    base: "#120606",
    background:
      "radial-gradient(70% 60% at 50% 0%, oklch(0.24 0.07 22 / 26%), transparent 74%), radial-gradient(45% 45% at 85% 95%, oklch(0.18 0.05 16 / 14%), transparent 72%), #0c0404",
    cellFill:
      "linear-gradient(160deg, rgba(120,42,42,0.30) 0%, rgba(45,12,12,0.55) 55%, rgba(28,10,10,0.85) 100%)",
  },
  {
    id: "trust",
    index: "02",
    title: "PEACEFUL & TRUST",
    subtitle: "Muted royal sage over deep onyx emerald",
    color: "#5f8a72",
    glow: "oklch(0.45 0.07 152 / 14%)",
    base: "#08110d",
    background:
      "radial-gradient(70% 60% at 50% 0%, oklch(0.26 0.05 152 / 22%), transparent 74%), radial-gradient(45% 45% at 88% 92%, oklch(0.3 0.04 120 / 10%), transparent 70%), #060d0a",
    cellFill:
      "linear-gradient(160deg, rgba(40,92,68,0.28) 0%, rgba(16,40,30,0.55) 55%, rgba(10,20,15,0.85) 100%)",
  },
  {
    id: "form",
    index: "03",
    title: "FORM",
    subtitle: "Sophisticated amethyst graphite architecture",
    color: "#7a6a93",
    glow: "oklch(0.45 0.08 300 / 14%)",
    base: "#0d0813",
    background:
      "radial-gradient(70% 60% at 50% 0%, oklch(0.26 0.06 300 / 22%), transparent 74%), radial-gradient(45% 45% at 12% 90%, oklch(0.3 0.03 300 / 9%), transparent 68%), #0a0610",
    cellFill:
      "linear-gradient(160deg, rgba(72,52,104,0.28) 0%, rgba(34,22,52,0.55) 55%, rgba(18,11,26,0.85) 100%)",
  },
  {
    id: "resonance",
    index: "04",
    title: "RESONANCE",
    subtitle: "Burnt antique amber & brushed sepia copper",
    color: "#9c7a4d",
    glow: "oklch(0.5 0.07 64 / 14%)",
    base: "#120c06",
    background:
      "radial-gradient(70% 60% at 50% 0%, oklch(0.3 0.06 64 / 24%), transparent 74%), radial-gradient(45% 45% at 85% 92%, oklch(0.3 0.05 46 / 13%), transparent 72%), #0c0804",
    cellFill:
      "linear-gradient(160deg, rgba(120,86,42,0.28) 0%, rgba(48,33,14,0.55) 55%, rgba(26,17,7,0.85) 100%)",
  },
]

export type Category = "Commercial & Film" | "Hip-Hop & Beats" | "Pop & Indie"

export type Track = {
  id: string
  title: string
  category: Category
  subcategory: string
  duration: string
  moods: MoodId[]
  /** seed for the generated waveform */
  seed: number
}

export const TRACKS: Track[] = [
  {
    id: "t1",
    title: "Brand Anthem",
    category: "Commercial & Film",
    subcategory: "Ad Campaign",
    duration: "2:48",
    moods: ["form", "resonance"],
    seed: 7,
  },
  {
    id: "t2",
    title: "Kathmandu Dawn",
    category: "Pop & Indie",
    subcategory: "Indie Film Score",
    duration: "3:21",
    moods: ["trust", "form"],
    seed: 13,
  },
  {
    id: "t3",
    title: "Obsidian Pulse",
    category: "Hip-Hop & Beats",
    subcategory: "Trap Instrumental",
    duration: "2:12",
    moods: ["void"],
    seed: 21,
  },
  {
    id: "t4",
    title: "Crimson Reel",
    category: "Commercial & Film",
    subcategory: "Cinematic Trailer",
    duration: "1:54",
    moods: ["void", "resonance"],
    seed: 4,
  },
  {
    id: "t5",
    title: "Emerald Drift",
    category: "Pop & Indie",
    subcategory: "Ambient Single",
    duration: "4:06",
    moods: ["trust"],
    seed: 31,
  },
  {
    id: "t6",
    title: "Valley Sessions",
    category: "Hip-Hop & Beats",
    subcategory: "Lo-Fi Beat Tape",
    duration: "2:37",
    moods: ["trust", "resonance"],
    seed: 17,
  },
  {
    id: "t7",
    title: "Spatial Atlas",
    category: "Commercial & Film",
    subcategory: "Spatial Mix",
    duration: "3:48",
    moods: ["form"],
    seed: 9,
  },
  {
    id: "t8",
    title: "Bronze Horizon",
    category: "Pop & Indie",
    subcategory: "Folk Master",
    duration: "3:02",
    moods: ["resonance"],
    seed: 26,
  },
]

export const FILTERS = [
  "All",
  "Commercial & Film",
  "Hip-Hop & Beats",
  "Pop & Indie",
] as const

export type Service = {
  index: string
  title: string
  price: string
  description: string
  specs: string[]
  equipment: string[]
  deliverables: string[]
}

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Custom Scoring & Sound Design",
    price: "FROM $1,200",
    description:
      "Bespoke composition and sound design engineered around your narrative — from a single cue to a full feature score.",
    specs: ["24-bit / 96kHz sessions", "Tempo-mapped to picture", "Up to 40 stems", "2 revision rounds"],
    equipment: ["Hybrid orchestral library", "Analog modular synthesis", "Foley & field recordings", "Neumann U87 chain"],
    deliverables: ["Final stereo master", "Stem package (WAV)", "Cue sheet & metadata", "Sync-ready alternates"],
  },
  {
    index: "02",
    title: "Full Stem Mixing & Mastering",
    price: "FROM $650",
    description:
      "Broadcast-ready mixes balanced for streaming, theatrical, and vinyl — finished with transparent mastering.",
    specs: ["Up to 64 input stems", "Loudness-matched (-14 LUFS)", "Analog summing pass", "Reference recall"],
    equipment: ["SSL bus compression", "Pultec EQ chain", "Lavry conversion", "Dolby-calibrated room"],
    deliverables: ["Streaming master", "Theatrical print master", "Instrumental & clean edits", "ISRC tagging"],
  },
  {
    index: "03",
    title: "Spatial Audio Production",
    price: "FROM $800",
    description:
      "Immersive Dolby Atmos and binaural mixes designed for headphones, cinema, and next-generation playback.",
    specs: ["7.1.4 bed configuration", "Object-based panning", "Binaural fold-down", "ADM BWF export"],
    equipment: ["Atmos renderer suite", "Calibrated 12-speaker array", "Binaural monitoring", "Head-tracked QC"],
    deliverables: ["Dolby Atmos master", "Binaural stereo", "5.1 / 7.1 downmix", "Platform-ready packages"],
  },
]
