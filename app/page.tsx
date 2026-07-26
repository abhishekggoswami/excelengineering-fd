import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import StatsSection from '@/components/stats-section'
import ServicesBento from '@/components/services-bento'
import CoreServices from '@/components/core-services'
import FounderSection from '@/components/founder-section'
import FaqSection from '@/components/faq-section'
import IndiaProjectsSection from '@/components/india-projects-map/IndiaProjectsSection'
import PartnersSection from '@/components/partners-section'
import { REAL_PROJECTS } from '@/components/india-projects-map/data'
import indiaTopology from '@/public/india-states.topo.json'

const INDIA_STATE_NAMES = new Set(
  (indiaTopology as unknown as { objects: { states: { geometries: Array<{ properties: { st_nm?: string } }> } } })
    .objects.states.geometries
    .map((state) => state.properties.st_nm)
    .filter((name): name is string => Boolean(name)),
)

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ state?: string | string[]; project?: string | string[] }>
}) {
  const params = await searchParams
  const requestedState = Array.isArray(params.state) ? params.state[0] : params.state
  const requestedProject = Array.isArray(params.project) ? params.project[0] : params.project
  const initialState = requestedState && INDIA_STATE_NAMES.has(requestedState) ? requestedState : null
  const initialProjectId = requestedProject && REAL_PROJECTS.some((project) => project.id === requestedProject)
    ? requestedProject
    : null

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesBento />
        <CoreServices />
        <FounderSection />
        <IndiaProjectsSection initialState={initialState} initialProjectId={initialProjectId} />
        <FaqSection />
        <PartnersSection />
      </main>
    </>
  )
}
