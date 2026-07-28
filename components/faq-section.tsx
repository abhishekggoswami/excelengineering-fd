'use client'

import { useState } from 'react'
import { ArrowRight, ArrowDown, Settings } from 'lucide-react'
import CtaBannerSection from '@/components/cta-banner-section'

const faqs = [
  {
    question: 'What types of dam and water infrastructure projects do you undertake?',
    answer:
      'Excel Engineering executes the full spectrum of dam and water infrastructure projects — gravity dams, earthfill embankments, diversion barrages, and canal head works. We self-perform all civil works including excavation, concrete placement, grouting, and instrumentation, and we carry an in-house fleet of heavy equipment that removes subcontractor dependency on critical-path activities. Our teams have delivered projects ranging from small check dams to major storage reservoirs exceeding 500 MCM capacity for state and central government clients across India.',
  },
  {
    question: 'Do you offer custom steel fabrication services for industrial clients?',
    answer:
      'Yes. Our fabrication division manufactures structural steel components, pressure vessels, pipe spools, penstock sections, and mechanical gates to client-supplied drawings or our in-house design. We hold ISO 9001 certification and our welders are qualified to AWS D1.1 and ASME Section IX. Fabrication capacity exceeds 2,000 MT per month at our workshop, with full NDT, hydrotest, and painting facilities on-site.',
  },
  {
    question: 'What quality standards and certifications does Excel Engineering hold?',
    answer:
      'Excel Engineering is certified to ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety). All concrete production is governed by an in-house Quality Control Plan aligned to IS:456 and relevant BIS codes. Third-party inspection and material traceability records are maintained from procurement through commissioning for every project.',
  },
  {
    question: 'Can you handle both government tenders and private sector contracts?',
    answer:
      'Absolutely. Excel Engineering is empanelled with major state irrigation departments, the Central Water Commission, NHPC, and several PSU clients, and we maintain all mandatory registrations for Class-I contractor status. We equally serve private industrialists, mining companies, and EPC primes as a specialist subcontractor or joint-venture partner. Our tendering team can assist with DPR review, rate analysis, and bid preparation on request.',
  },
  {
    question: 'Do you provide crane hire and heavy-lift services on a standalone basis?',
    answer:
      'Yes. Our crane division operates a fleet of mobile hydraulic cranes ranging from 25-tonne picks up to 500-tonne tandem lifts, available for dry hire with operator or as fully managed lift campaigns. We carry valid third-party load test certificates, SWL markings, and DGFASLI compliance for all machines. Rigging engineering, lift studies, and on-site supervision are included in our turnkey lift packages.',
  },
  {
    question: 'How do I request a quotation or technical proposal?',
    answer:
      'You can submit an enquiry through the Get Free Quote button on this site, email our projects team directly, or call our head office. Please share drawings, scope descriptions, site location, and target completion dates where available. For government-tendered work we can provide bid-bond and performance-bond support from the outset. A designated project manager will acknowledge your enquiry within 24 hours on working days.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5efe0]"
    >
      {/* Industrial line art background — pinned to bottom, full width */}
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:px-12 md:py-32">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
            <Settings className="w-3.5 h-3.5 text-[#e85d3f]" />
            Frequently Asked Questions
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight text-balance">
            Common Questions About Excel Engineering
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-center text-[#6b7280] text-base leading-relaxed max-w-2xl mx-auto mb-14 text-pretty">
          Explore how Excel Engineering delivers high-performance civil infrastructure, precision steel fabrication, and heavy-lift solutions through decades of proven site expertise.
        </p>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm"
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(index)}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                    isOpen
                      ? 'bg-[#e85d3f] text-white'
                      : 'bg-white text-[#1a1a1a] hover:bg-white/80'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base leading-snug ${isOpen ? 'text-white' : 'text-[#1a1a1a]'}`}>
                    {faq.question}
                  </span>

                  {/* Icon button */}
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-[#1a1a1a] text-white'
                    }`}
                  >
                    {isOpen ? (
                      <ArrowDown className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Answer panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="bg-white px-6 py-6 border-t border-[#e5e7eb]">
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        className="pointer-events-none relative z-0 -mt-20 h-[340px] bg-repeat-x bg-bottom opacity-45"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_3uj7mz3uj7mz3uj7-removebg-preview-rbtCbMUPUYemRQIOBL5JX8Hkbt2lMS.png')",
          backgroundSize: 'auto 340px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <CtaBannerSection />
      </div>
    </section>
  )
}
