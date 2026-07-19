import DamHeroSlideshow from '@/components/dam-hero-slideshow'
import DamGallerySection from '@/components/dam-gallery-section'
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
    desc: 'Curved steel gates that rotate about a horizontal axis — ideal for large spillways requiring precise and reliable flow control.',
  },
  {
    name: 'Vertical Lift Gates',
    desc: 'Heavy rectangular gates that slide vertically — widely used in irrigation canals, sluices, and power intake structures.',
  },
  {
    name: 'Flap Gates',
    desc: 'Hinged gates that tilt open under water pressure, used for automatic flood relief on weirs and rivers without external power.',
  },
  {
    name: 'Fixed Wheel Gates',
    desc: 'Large sliding gates mounted on wheels for reduced friction — suited to deep-seated, high-pressure sluice openings.',
  },
  {
    name: 'Slide Gates',
    desc: 'Simple plate gates sliding in guides — cost-effective and reliable for low-pressure irrigation and drainage control.',
  },
  {
    name: 'Canal Gates',
    desc: 'Purpose-built gates for irrigation canal networks to control and distribute water flows across multiple channels.',
  },
  {
    name: 'Stop Log Gates',
    desc: 'Stacked removable beams forming temporary water barriers used for inspection and maintenance of sluice structures.',
  },
  {
    name: 'Sluices & Spillways',
    desc: 'Engineered outlets to safely discharge excess water and regulate reservoir levels during high-inflow events.',
  },
  {
    name: 'Draft Tube Gates',
    desc: 'Isolation gates installed at draft tube entries of hydroelectric turbines to enable safe maintenance shutoff.',
  },
  {
    name: 'Automatic Tilting Gates',
    desc: 'Self-actuating gates that tilt open when upstream water exceeds a preset level — no external power or actuation required.',
  },
  {
    name: 'Rope Drum Hoist',
    desc: 'Motorised drum hoist systems for operating vertical lift and radial gates with upstream and downstream suspension.',
  },
  {
    name: 'Hydraulic Hoist',
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
        <section className="bg-[#111111] py-10 px-6 md:px-12 lg:px-20">
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

        {/* Methodology */}
        <section className="bg-[#f5efe0] py-24 px-6 md:px-12 lg:px-20">
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
                    <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center flex-shrink-0">
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

        {/* Types of Gates & Water Control Structures */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#e85d3f]" />
                <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                  Our Expertise
                </span>
                <div className="w-8 h-px bg-[#e85d3f]" />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {damTypes.map((type) => (
                <div
                  key={type.name}
                  className="group relative bg-white border border-[#e5e7eb] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#e85d3f]/50 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  {/* Top accent bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e85d3f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-[#f5a623]" />
                    </div>
                    <h3 className="text-[#1a1a1a] font-extrabold text-sm leading-snug">
                      {type.name}
                    </h3>
                  </div>

                  <p className="text-[#6b7280] text-sm leading-relaxed text-pretty flex-1">
                    {type.desc}
                  </p>

                  {/* Image placeholder — ready for photos */}
                  <div className="w-full h-36 rounded-xl bg-[#f5efe0] border border-dashed border-[#d1c5a8] flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#e85d3f]/15 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-[#e85d3f]" />
                    </div>
                    <span className="text-[#9ca3af] text-xs font-medium">Image coming soon</span>
                  </div>
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
        <section id="contact" className="bg-[#111111] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-white font-black text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Ready to Start Your Dam Project?
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
