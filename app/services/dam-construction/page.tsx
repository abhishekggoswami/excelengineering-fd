import DamHeroSlideshow from '@/components/dam-hero-slideshow'
import DamGallerySection from '@/components/dam-gallery-section'
import DamMethodology from '@/components/dam-methodology'
import AnimatedSearchLabel from '@/components/animated-search-label'
import DamGateCarousel from '@/components/dam-gate-carousel'
import LoopingLetterHeading from '@/components/looping-letter-heading'
import ServiceFaqSection from '@/components/service-faq-section'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { CheckCircle2, ArrowUpRight, Layers } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dam Construction Works | Excel Engineering',
  description:
    'Excel Engineering specializes in large-scale dam construction including gravity dams, earthfill, rockfill, arch, hydroelectric, and barrage structures across India.',
}

const stats = [
  { value: '24+',  label: 'Dam Projects Completed' },
  { value: '25+',  label: 'Years of Experience' },
  { value: '10B+', label: 'Litres Water Capacity Created' },
  { value: '2+',   label: 'States Covered' },
]

const capabilities = [
  'Gravity Dams',
  'Earthfill & Rockfill Dams',
  'Concrete & Arch Dams',
  'Buttress & Masonry Dams',
  'Embankment Dams',
  'Composite Dams',
  'Barrage Structures',
  'Check Dams',
  'Diversion Dams',
  'Storage Reservoir Dams',
  'Irrigation Dams',
  'Hydroelectric Dam Structures',
]

const methodology = [
  {
    step: 'Phase 01',
    title: 'Site Investigation & Survey',
    desc: 'Comprehensive geological surveys, hydrology studies, and topographic analysis to determine the optimal dam type and location.',
  },
  {
    step: 'Phase 02',
    title: 'Design & Engineering',
    desc: 'Structural design coordination with certified engineers, safety calculations, seismic analysis, and regulatory approvals.',
  },
  {
    step: 'Phase 03',
    title: 'Foundation & Construction',
    desc: 'Precision excavation, foundation treatment, coffer dam installation, and phased structural construction using proven methods.',
  },
  {
    step: 'Phase 04',
    title: 'Quality Assurance & Handover',
    desc: 'Rigorous testing, instrumentation installation, regulatory inspections, and complete project documentation before handover.',
  },
]

const damTypes = [
  {
    name: 'Radial Gates',
    video: '/videos/radial-gates-drone.mp4',
    videoLabel: 'Radial gate works',
    desc: 'Curved steel gates that rotate about a horizontal axis — ideal for large spillways requiring precise and reliable flow control.',
  },
  {
    name: 'Vertical Lift Gates',
    video: '/videos/vertical-lift-gates.mp4',
    videoLabel: 'Vertical lift gate works',
    desc: 'Heavy rectangular gates that slide vertically — widely used in irrigation canals, sluices, and power intake structures.',
  },
  {
    name: 'Flap Gates',
    video: '/videos/flap-gates.mp4',
    videoLabel: 'Flap gate spillway works',
    desc: 'Hinged gates that tilt open under water pressure, used for automatic flood relief on weirs and rivers without external power.',
  },
  {
    name: 'Fixed Wheel Gates',
    video: '/videos/fixed-wheel-gates.mp4',
    videoLabel: 'Fixed wheel gate works',
    desc: 'Large sliding gates mounted on wheels for reduced friction — suited to deep-seated, high-pressure sluice openings.',
  },
  {
    name: 'Slide Gates',
    video: '/videos/slide-gates.mp4',
    videoLabel: 'Slide gate works',
    desc: 'Simple plate gates sliding in guides — cost-effective and reliable for low-pressure irrigation and drainage control.',
  },
  {
    name: 'Canal Gates',
    video: '/videos/canal-gates.mp4',
    videoLabel: 'Canal gate works',
    desc: 'Purpose-built gates for irrigation canal networks to control and distribute water flows across multiple channels.',
  },
  {
    name: 'Stop Log Gates',
    video: '/videos/stop-log-gates.mp4',
    videoLabel: 'Stop log gate works',
    desc: 'Stacked removable beams forming temporary water barriers used for inspection and maintenance of sluice structures.',
  },
  {
    name: 'Sluices & Spillways',
    video: '/videos/sluices-spillways.mp4',
    videoLabel: 'Sluice and spillway works',
    desc: 'Engineered outlets to safely discharge excess water and regulate reservoir levels during high-inflow events.',
  },
  {
    name: 'Draft Tube Gates',
    video: '/videos/draft-tube-gates.mp4',
    videoLabel: 'Draft tube gate works',
    desc: 'Isolation gates installed at draft tube entries of hydroelectric turbines to enable safe maintenance shutoff.',
  },
  {
    name: 'Automatic Tilting Gates',
    video: '/videos/automatic-tilting-gates.mp4',
    videoLabel: 'Automatic tilting gate works',
    desc: 'Self-actuating gates that tilt open when upstream water exceeds a preset level — no external power or actuation required.',
  },
  {
    name: 'Rope Drum Hoist',
    video: '/videos/rope-drum-hoist.mp4',
    videoLabel: 'Rope drum hoist works',
    desc: 'Motorised drum hoist systems for operating vertical lift and radial gates with upstream and downstream suspension.',
  },
  {
    name: 'Hydraulic Hoist',
    video: '/videos/hydraulic-hoist.mp4',
    videoLabel: 'Hydraulic hoist works',
    desc: 'Hydraulic cylinder-driven hoist systems providing precise and powerful operation of sluice gates and radial gates.',
  },
]

const faqs = [
  {
    q: 'What types of dams does Excel Engineering construct?',
    a: 'We construct all major dam types including gravity, earthfill, rockfill, concrete, arch, buttress, embankment, masonry, and composite dams, as well as barrages and check dams.',
  },
  {
    q: 'How long does a typical dam construction project take?',
    a: 'Timeline depends on dam size and type. Small check dams may take 6–12 months, while large storage reservoir dams or hydroelectric structures can take 3–7 years. We provide detailed project schedules at the planning stage.',
  },
  {
    q: 'Does Excel Engineering handle government irrigation and dam contracts?',
    a: 'Yes. A significant portion of our dam and water infrastructure portfolio consists of state and central government irrigation and hydroelectric contracts. We are registered with major procurement bodies across India.',
  },
  {
    q: 'What safety standards are followed during dam construction?',
    a: 'We follow Bureau of Indian Standards (BIS) codes, Central Water Commission guidelines, and international dam safety protocols. All projects include independent safety reviews and instrumentation for long-term monitoring.',
  },
]

export default function DamConstructionPage() {

  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero — Ken Burns zoom + cinematic slide transitions */}
        <DamHeroSlideshow />

        {/* Stats strip */}
        <section className="relative overflow-hidden bg-[#111111] px-6 py-10 md:px-12 lg:px-20">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center px-3 text-center">
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
                  Key Capabilities &amp; Expertise
                </h2>
                <p className="text-[#6b7280] text-base leading-relaxed mb-10 text-pretty">
                  Excel Engineering is a premier dam construction contractor with decades of experience
                  delivering critical water infrastructure across India. Our teams handle every stage —
                  from site investigation and design coordination through to full structural completion
                  and commissioning. We specialise in all major dam types and water control structures,
                  ensuring each project meets the highest safety, quality, and environmental standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#111111] flex-shrink-0 mt-0.5" />
                      <span className="text-[#374151] text-sm font-medium leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[480px] rounded-3xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png"
                  alt="Aerial top-down view of completed barrage with yellow hoists and water cascading"
                  fill
                  className="object-cover object-center"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <DamMethodology steps={methodology} />

        {/* Types of Gates & Water Control Structures */}
        <section id="gate-types" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-5 flex justify-center">
                <AnimatedSearchLabel text="Search dam gate expertise" />
              </div>
              <h2
                className="font-black text-[#1a1a1a] text-balance leading-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                Types of Gates &amp; Water Control Structures
              </h2>
              <p className="text-[#6b7280] text-base max-w-2xl mx-auto text-pretty">
                Excel Engineering has rich experience in manufacturing, supplying, erecting, testing,
                and commissioning a comprehensive range of hydraulic gates, hoists, and water control
                structures for hydroelectric and irrigation projects across India.
              </p>
            </div>

            <DamGateCarousel types={damTypes} />

            <div className="hidden grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {damTypes.slice(0, 0).map((type, index) => (
                <div
                  key={type.name}
                  className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[#dfe4e2] bg-[#fbfcfb] p-4 shadow-[0_20px_42px_-38px_rgba(14,92,61,.8)] transition-all duration-500 hover:-translate-y-1 hover:border-[#e85d3f]/50 hover:shadow-[0_26px_48px_-32px_rgba(232,93,63,.45)]"
                >
                  {/* Top accent bar on hover */}
                  <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-[#e85d3f] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-center justify-between gap-3 px-2 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#111111] shadow-lg">
                        <Layers className="h-5 w-5 text-[#f5a623]" />
                      </div>
                      <h3 className="text-sm font-extrabold leading-snug text-[#1a1a1a]">{type.name}</h3>
                    </div>
                    <span className="rounded-full border border-[#0e5c3d]/10 bg-white px-2.5 py-1 text-[10px] font-bold tracking-widest text-[#0e5c3d]">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <p className="min-h-[4.5rem] px-2 text-sm leading-relaxed text-pretty text-[#6b7280]">
                    {type.desc}
                  </p>

                  {/* Image placeholder — ready for photos */}
                  {type.video ? (
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#111111]">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`Video of ${type.name.toLowerCase()} works`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      >
                        <source src={type.video} type="video/mp4" />
                      </video>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100e]/70 via-transparent to-transparent" />
                      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                        {type.videoLabel ?? 'Site footage'}
                      </span>
                    </div>
                  ) : (
                    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#d1c5a8] bg-[radial-gradient(circle_at_center,rgba(245,166,35,.15),transparent_60%),#f5efe0]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e85d3f]/15">
                        <Layers className="h-5 w-5 text-[#e85d3f]" />
                      </div>
                      <span className="text-xs font-semibold text-[#9ca3af]">Project imagery in progress</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dam-specific gallery */}
        <DamGallerySection />

        {/* FAQs */}
        <ServiceFaqSection
          faqs={faqs}
          heading="Dam Construction — Common Questions"
          subheading="Answers to the most common questions about Excel Engineering's dam construction capabilities, timelines, and certifications."
        />

        {/* Inquiry CTA */}
        <section id="contact" className="hidden">
          <div className="max-w-3xl mx-auto text-center">
            <LoopingLetterHeading
              text="Ready to Start Your Dam Project?"
              className="mb-4 text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
            />
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
