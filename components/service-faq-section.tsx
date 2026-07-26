import { ArrowRight, ArrowDown, Settings } from 'lucide-react'
import CtaBannerSection from '@/components/cta-banner-section'

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
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5efe0]"
    >
      {/* Industrial line art background — pinned to bottom, full width */}
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-32">
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
            return (
              <details key={index} className="group overflow-hidden rounded-xl shadow-sm" open={index === 0}>
                <summary className="flex cursor-pointer touch-manipulation list-none items-center justify-between gap-4 bg-white px-6 py-5 text-left transition-colors duration-200 hover:bg-white/80 group-open:bg-[#e85d3f] group-open:hover:bg-[#e85d3f]">
                  <span className="text-base font-semibold leading-snug text-[#1a1a1a] group-open:text-white">
                    {faq.q}
                  </span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a] text-white transition-all duration-200 group-open:border group-open:border-white/30 group-open:bg-white/20 group-open:rotate-90"
                  >
                    <ArrowRight className="h-4 w-4 group-open:hidden" />
                    <ArrowDown className="hidden h-4 w-4 group-open:block" />
                  </span>
                </summary>

                <div className="border-t border-[#e5e7eb] bg-white px-6 py-6">
                  <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            )
          })}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mt-20 h-[340px] bg-repeat-x bg-bottom opacity-45"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_3uj7mz3uj7mz3uj7-removebg-preview-rbtCbMUPUYemRQIOBL5JX8Hkbt2lMS.png')",
          backgroundSize: 'auto 340px',
        }}
      />
      <div className="relative z-10">
        <CtaBannerSection />
      </div>
    </section>
  )
}
