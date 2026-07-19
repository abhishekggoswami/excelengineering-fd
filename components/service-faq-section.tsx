'use client'

import { useState } from 'react'
import { ArrowRight, ArrowDown, Settings } from 'lucide-react'

interface Faq {
  q: string
  a: string
}

interface ServiceFaqSectionProps {
  faqs: Faq[]
  heading?: string
  subheading?: string
}

export default function ServiceFaqSection({
  faqs,
  heading = 'Frequently Asked Questions',
  subheading,
}: ServiceFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5efe0] py-24 md:py-32"
    >
      {/* Industrial line art background — pinned to bottom, full width */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[340px] bg-repeat-x bg-bottom"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_3uj7mz3uj7mz3uj7-removebg-preview-rbtCbMUPUYemRQIOBL5JX8Hkbt2lMS.png')",
          backgroundSize: 'auto 340px',
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
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
            {heading}
          </h2>
        </div>

        {/* Optional subtitle */}
        {subheading && (
          <p className="text-center text-[#6b7280] text-base leading-relaxed max-w-2xl mx-auto mb-14 text-pretty">
            {subheading}
          </p>
        )}
        {!subheading && <div className="mb-14" />}

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm">
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
                    {faq.q}
                  </span>
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
                    <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
