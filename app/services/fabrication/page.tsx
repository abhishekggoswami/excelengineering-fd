import FabricationHeroSlideshow from '@/components/fabrication-hero-slideshow'
import FabricationGallerySection from '@/components/fabrication-gallery-section'
import ServiceFaqSection from '@/components/service-faq-section'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabrication Works | Excel Engineering',
  description:
    'Excel Engineering delivers structural steel fabrication, heavy industrial structures, pipe and tank fabrication, bridge components, and precision welding services.',
}

const stats = [
  { value: '40+',   label: 'Fabrication Projects' },
  { value: '1000+', label: 'MT Steel Fabricated/Year' },
  { value: '20+',   label: 'Certified Welders' },
  { value: '3',     label: 'Fabrication Facilities' },
]

const capabilities = [
  'Structural Steel Fabrication',
  'Industrial Fabrication',
  'Heavy Steel Structures',
  'Plant Fabrication',
  'Pipe Fabrication',
  'Bridge Components Fabrication',
  'Tank Fabrication',
  'Equipment Support Structures',
  'Custom Fabrication',
  'Welding & Assembly',
  'Industrial Maintenance Fabrication',
  'Site Installation Services',
]

const methodology = [
  {
    step: 'Phase 01',
    title: 'Design & Material Procurement',
    desc: 'Detailed fabrication drawings, Bill of Materials preparation, and procurement of certified steel and materials from approved suppliers.',
  },
  {
    step: 'Phase 02',
    title: 'Cutting & Forming',
    desc: 'CNC plasma and oxy-fuel cutting, press braking, rolling, and forming operations to prepare all structural components to precise tolerances.',
  },
  {
    step: 'Phase 03',
    title: 'Welding & Assembly',
    desc: 'Certified welders using MIG, TIG, SAW, and SMAW processes complete all joints to AWS and IS code standards with 100% weld inspection.',
  },
  {
    step: 'Phase 04',
    title: 'Surface Treatment & Dispatch',
    desc: 'Shot blasting, primer coating, and finish painting per specification, followed by dimensional inspection, load testing, and documented dispatch.',
  },
]

const faqs = [
  {
    q: 'What materials does Excel Engineering work with for fabrication?',
    a: 'We primarily work with structural carbon steel (IS 2062), stainless steel, alloy steel, and pressure vessel quality plates. Material certificates are maintained for every project.',
  },
  {
    q: 'Can Excel Engineering handle both small and large fabrication orders?',
    a: 'Yes. Our facilities are designed to handle everything from custom single-piece fabrications to large repeat-order industrial structures running into thousands of metric tons annually.',
  },
  {
    q: 'Do you offer site installation services for fabricated structures?',
    a: 'Absolutely. We provide turnkey fabrication and site installation services including erection, alignment, grouting, and final inspection at the project site.',
  },
  {
    q: 'What quality certifications does the fabrication division hold?',
    a: 'Our fabrication operations comply with IS, AWS, and ASME standards. Welders hold valid certifications and all fabricated structures undergo third-party non-destructive testing (NDT) as required.',
  },
]

export default function FabricationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero — Ken Burns zoom + cinematic slide transitions */}
        <FabricationHeroSlideshow />

        {/* Stats strip */}
        <section className="bg-[#0e5c3d] py-10 px-6 md:px-12 lg:px-20">
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
                  Our fabrication division operates a fully equipped manufacturing facility capable
                  of handling large-scale structural steel, industrial, and plant fabrication
                  projects. With advanced welding technology, CNC cutting equipment, and rigorous
                  quality control, we deliver fabricated structures and components that meet the
                  most demanding engineering specifications. From initial design to site
                  installation, Excel Engineering manages the entire fabrication lifecycle.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0e5c3d] flex-shrink-0 mt-0.5" />
                      <span className="text-[#374151] text-sm font-medium leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[480px] rounded-3xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-1-x1oRQc8uzr8CQDeP0szPSUIsR5qp0O.png"
                  alt="Excel Engineering engineers inspecting large penstock pipe fabrication inside factory"
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
                Fabrication Methodology
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

        {/* Fabrication-specific gallery */}
        <FabricationGallerySection />

        {/* FAQs */}
        <ServiceFaqSection
          faqs={faqs}
          heading="Fabrication Works — Common Questions"
          subheading="Answers to the most common questions about Excel Engineering's fabrication capabilities, materials, certifications, and project scope."
        />

        {/* Inquiry CTA */}
        <section id="contact" className="bg-[#0e5c3d] py-20 px-6 md:px-12 lg:px-20">
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
