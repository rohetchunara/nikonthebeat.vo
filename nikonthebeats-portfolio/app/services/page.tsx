import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="• SERVICES & RATES"
        title="Three Disciplines, Engineered to Order"
        description="Every engagement is built with studio-grade precision and premium deliverables. Expand each discipline for full specifications."
      />
      <ServicesSection />
    </>
  )
}
