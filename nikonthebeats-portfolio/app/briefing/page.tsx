import { PageHeader } from "@/components/page-header"
import { IntakeForm } from "@/components/intake-form"

export default function BriefingPage() {
  return (
    <>
      <PageHeader
        eyebrow="• PROJECT INTAKE — THE BRIEFING ROOM"
        title="Initiate Your Sonic Architecture"
        description="Three movements to brief the studio — your details, the moods that resonate, and your reference material."
      />
      <IntakeForm />
    </>
  )
}
