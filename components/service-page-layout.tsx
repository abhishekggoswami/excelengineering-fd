import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'

export interface ServicePageData {
  title: string
  tagline: string
  description: string
  heroImage: string
  detailImage: string
  capabilities: string[]
  stats: { value: string; label: string }[]
  methodology: { step: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero Banner */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0e5c3d]/75" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-40 w-full">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">
                Excel Engineering
              </span>
            </div>
            <h1
              className="text-white font-black text-balance leading-none mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
            >
              {data.title}
            </h1>
            <p className="text-white/70 text-lg max-w-xl text-pretty">{data.tagline}</p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-[#0e5c3d] py-10 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((s) => (
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
              {/* Text side */}
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
                  {data.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0e5c3d] flex-shrink-0 mt-0.5" />
                      <span className="text-[#374151] text-sm font-medium leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="relative h-[480px] rounded-3xl overflow-hidden">
                <Image
                  src={data.detailImage}
                  alt={`${data.title} detail`}
                  fill
                  className="object-cover object-center"
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
              {data.methodology.map((m, i) => (
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

        {/* FAQs */}
        <ServiceFaqSection
          faqs={data.faqs}
          heading={`${data.title} — Common Questions`}
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
