import CraneHeroSlideshow from '@/components/crane-hero-slideshow'
import CraneGallerySection from '@/components/crane-gallery-section'
import ServiceFaqSection from '@/components/service-faq-section'
import DamMethodology from '@/components/dam-methodology'
import ServiceStatsStrip from '@/components/service-stats-strip'
import ProximityHeading from '@/components/proximity-heading'
import ScrollReveal from '@/components/scroll-reveal'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crane Services | Excel Engineering',
  description:
    'Excel Engineering operates a large fleet of mobile, hydraulic, crawler, and all-terrain cranes for heavy lifting, industrial projects, and infrastructure operations across India.',
}

const stats = [
  { value: '50+',  label: 'Cranes in Fleet' },
  { value: '500T', label: 'Maximum Lift Capacity' },
  { value: '300+', label: 'Projects Supported' },
  { value: '8+',   label: 'Operating Locations' },
]

const capabilities = [
  'Mobile Cranes',
  'Hydraulic Cranes',
  'Crawler Cranes',
  'All Terrain Cranes',
  'Truck Mounted Cranes',
  'Heavy Lift Cranes',
  'Construction Equipment Rental',
  'Project-Based Crane Solutions',
  'Industrial Lifting Services',
  'Infrastructure Lifting Operations',
  'Tandem & Multi-Crane Lifts',
  'Rigging & Lift Planning',
]

const methodology = [
  {
    step: 'Phase 01',
    title: 'Lift Engineering & Planning',
    desc: 'Detailed lift plan preparation, load calculations, ground bearing pressure checks, crane positioning, and risk assessment for every significant lift.',
  },
  {
    step: 'Phase 02',
    title: 'Site Mobilisation',
    desc: 'Crane transportation, assembly at site, outrigger pad preparation, and pre-lift safety inspections by certified riggers and crane supervisors.',
  },
  {
    step: 'Phase 03',
    title: 'Lift Execution',
    desc: 'Controlled lifting operations by certified operators under continuous supervision, with communication protocols and exclusion zones strictly maintained.',
  },
  {
    step: 'Phase 04',
    title: 'Demobilisation & Reporting',
    desc: 'Safe crane de-rigging, site restoration, post-lift documentation, load record submission, and equipment inspection before departure.',
  },
]

const faqs = [
  {
    q: "What is the maximum lifting capacity available in Excel Engineering's crane fleet?",
    a: 'Our fleet includes cranes with lifting capacities ranging from 30 tonnes up to 500 tonnes, covering a wide range of industrial, infrastructure, and construction lifting requirements.',
  },
  {
    q: 'Do you provide cranes on a rental or project basis?',
    a: 'We offer both — bare crane hire with operator, and full project-based crane solutions where our team handles all planning, mobilisation, execution, and demobilisation.',
  },
  {
    q: 'Are your crane operators certified?',
    a: 'Yes. All our crane operators hold valid operator certifications as required under the Factories Act and relevant IS standards. Riggers and lift supervisors are also trained and certified.',
  },
  {
    q: 'Can you handle tandem lifts requiring multiple cranes working together?',
    a: 'Yes. Our lift engineering team has extensive experience planning and executing tandem and multi-crane lifts for heavy or oversized loads. Detailed engineering calculations are prepared for every such operation.',
  },
]

export default function CraneServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero — Ken Burns zoom + cinematic slide transitions */}
        <CraneHeroSlideshow />

        {/* Stats strip */}
        <ServiceStatsStrip stats={stats} />
        <section className="hidden bg-[#0e5c3d] py-10 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <span
                    className="font-black text-[#f5a623] leading-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-white/65 text-xs uppercase tracking-wide mt-2 font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview + capabilities */}
        <section className="py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-[#e85d3f]" />
                  <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                    Service Overview
                  </span>
                </div>
                <h2
                  className="font-black text-[#1a1a1a] text-balance leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
                >
                  <ProximityHeading>Key Capabilities &amp; Expertise</ProximityHeading>
                </h2>
                <ScrollReveal>
                <p className="text-[#6b7280] text-base leading-relaxed mb-10 text-pretty">
                  Excel Engineering operates one of the region&apos;s most capable crane fleets,
                  providing mobile, hydraulic, crawler, and all-terrain cranes for projects
                  requiring precise, high-capacity lifting operations. Our crane division supports
                  infrastructure construction, industrial plant erection, bridge girder placement,
                  equipment installation, and emergency lifting operations. All crane operators hold
                  valid certifications and every lift is planned by our dedicated rigging and lift
                  engineering team.
                </p>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0e5c3d] flex-shrink-0 mt-0.5" />
                      <span className="text-[#374151] text-sm font-medium leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[320px] overflow-hidden rounded-3xl sm:h-[420px] lg:h-[480px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-6-AWWblz5lHTdToFCikQTXdKelNh1Z4X.png"
                  alt="Excel Engineering crane working inside dam intake structure"
                  fill
                  className="object-cover object-center"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <DamMethodology
          steps={methodology}
          heading="Crane Operation Methodology"
          description="Four coordinated stages keep every lift engineered, controlled, documented, and safe."
        />
        <section className="hidden bg-[#f5efe0] py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#e85d3f]" />
                <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                  Our Process
                </span>
                <div className="w-8 h-px bg-[#e85d3f]" />
              </div>
              <h2
                className="font-black text-[#1a1a1a] text-balance leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                Construction Methodology
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((m, i) => (
                <div
                  key={m.step}
                  className="bg-white rounded-2xl p-7 flex flex-col gap-4 border border-[#e5e7eb]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0e5c3d] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">0{i + 1}</span>
                    </div>
                    <span className="text-[#e85d3f] text-xs font-bold uppercase tracking-widest">
                      {m.step}
                    </span>
                  </div>
                  <h3 className="text-[#1a1a1a] font-extrabold text-base leading-snug">{m.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed text-pretty">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crane-specific gallery */}
        <CraneGallerySection />

        {/* FAQs */}
        <ServiceFaqSection
          faqs={faqs}
          heading="Crane Services — Common Questions"
          subheading="Everything you need to know about Excel Engineering's crane hire, lift planning, and project support services."
        />

        {/* Inquiry CTA */}
        <section id="contact-legacy" className="hidden bg-[#0e5c3d] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-white font-black text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-white/65 text-base mb-10 text-pretty">
              Contact our team for a detailed consultation and free project quote. We respond within 24 hours.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border border-white/25 text-white placeholder-white/40 rounded-full px-6 py-3.5 text-sm font-medium focus:outline-none focus:border-[#f5a623] transition-colors flex-1 max-w-xs"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border border-white/25 text-white placeholder-white/40 rounded-full px-6 py-3.5 text-sm font-medium focus:outline-none focus:border-[#f5a623] transition-colors flex-1 max-w-xs"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full flex-shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </div>
        </section>

      </main>
    </>
  )
}
