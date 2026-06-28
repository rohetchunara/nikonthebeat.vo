import { Hero, StatsBand } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { MoodEngine } from "@/components/mood-engine"
import { ProducerIntro } from "@/components/producer-intro"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <div className="py-16">
        <MarqueeBand />
      </div>
      <MoodEngine />
      <ProducerIntro />
    </>
  )
}
