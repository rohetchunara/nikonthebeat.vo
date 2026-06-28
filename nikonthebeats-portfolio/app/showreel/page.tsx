import { PageHeader } from "@/components/page-header"
import { AudioShowcase } from "@/components/studio-experience"
import { MarqueeBand } from "@/components/marquee-band"

export default function ShowreelPage() {
  return (
    <>
      <PageHeader
        eyebrow="• SELECTED WORKS — THE SHOWREEL"
        title="A Catalogue Tuned to Your Energy"
        description="Switch the studio's energy and the reel re-sorts to match — cinematic scores, beats, and indie records, all mastered in-house."
      />
      <AudioShowcase />
      <div className="py-8">
        <MarqueeBand />
      </div>
    </>
  )
}
