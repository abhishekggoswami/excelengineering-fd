import Link from 'next/link'
import { ArrowUpRight, PhoneCall } from 'lucide-react'

export default function CtaBannerSection() {
  return (
    <section className="cta-orange-flow overflow-hidden relative">
      {/* Subtle diagonal texture lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 28px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Left — copy */}
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
            <PhoneCall className="animate-phone-ring w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
              25+ Years of Engineering Excellence
            </p>
            <h3 className="text-white font-black text-2xl md:text-3xl text-balance leading-tight">
              Have a project in mind?{' '}
              <span className="text-[#f5efe0]">Let&apos;s talk.</span>
            </h3>
          </div>
        </div>

        {/* Right — CTAs */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#e85d3f] font-black text-sm uppercase tracking-wide px-7 py-3.5 rounded-full hover:bg-[#f5efe0] transition-colors duration-200 shadow-sm"
          >
            Get Free Quote
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-transparent border-2 border-white/40 text-white font-bold text-sm uppercase tracking-wide px-7 py-3 rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
