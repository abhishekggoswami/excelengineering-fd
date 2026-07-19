import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import StatsSection from '@/components/stats-section'
import ServicesBento from '@/components/services-bento'
import CoreServices from '@/components/core-services'
import FounderSection from '@/components/founder-section'
import FaqSection from '@/components/faq-section'
import CtaBannerSection from '@/components/cta-banner-section'
import IndiaProjectsSection from '@/components/india-projects-map/IndiaProjectsSection'
import PartnersSection from '@/components/partners-section'

export default function Page() {
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
        <FaqSection />
        <CtaBannerSection />
        <IndiaProjectsSection />
        <PartnersSection />
      </main>
    </>
  )
}
