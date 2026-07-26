'use client'

import Image from 'next/image'

export default function FounderSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section badge */}
        <div className="flex items-center gap-3 mb-16">
          <span className="block w-10 h-px bg-[#e85d3f]" />
          <span className="text-[#e85d3f] text-xs font-bold tracking-[0.2em] uppercase">
            Leadership
          </span>
          <span className="block w-10 h-px bg-[#e85d3f]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Photo ── */}
          <div className="relative">
            {/* Offset decorative frame */}
            <div
              className="absolute -top-5 -left-5 w-full h-full rounded-3xl border-2 border-[#0e5c3d]/20"
              aria-hidden="true"
            />
            {/* Green corner accent */}
            <div
              className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-[#0e5c3d]"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/farook-khan.jpg"
                alt="Mr. Farook Khan, Founder and Managing Director of Excel Engineering"
                width={720}
                height={540}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle bottom gradient for the name tag area */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0e5c3d]/70 to-transparent" />
              {/* Role pill */}
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-0.5">
                    Founder &amp; Managing Director
                  </p>
                  <p className="text-white font-bold text-lg leading-tight">
                    Mr. Farook Khan
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#e85d3f] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  >
                    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight text-balance mb-4">
                The Man Behind{' '}
                <span className="text-[#0e5c3d]">Excel Engineering</span>
              </h2>
              <p className="text-[#6b7280] text-lg leading-relaxed">
                A visionary engineer and entrepreneur who transformed a passion
                for precision into one of Central India&apos;s most trusted
                names in heavy engineering, dam construction, crane services,
                and industrial fabrication.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="relative pl-6 border-l-4 border-[#e85d3f]">
              <p className="text-[#1a1a1a] text-xl font-semibold leading-relaxed italic text-pretty">
                &ldquo;We do not just build structures — we build trust,
                integrity, and the infrastructure that powers India&apos;s
                growth.&rdquo;
              </p>
            </blockquote>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years of Experience', value: '25+' },
                { label: 'Major Projects Led', value: '24+' },
                { label: 'States Operated In', value: '2+' },
                { label: 'Govt. Organisations Served', value: '2+' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#e5e7eb]"
                >
                  <p className="text-[#0e5c3d] text-2xl font-black leading-none mb-1">
                    {item.value}
                  </p>
                  <p className="text-[#6b7280] text-sm leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bio paragraph */}
            <p className="text-[#6b7280] leading-relaxed">
              With deep expertise spanning dam hydro-mechanical works, EOT crane
              fabrication and erection, irrigation systems, and complex steel
              fabrication, the founder built Excel Engineering from the ground
              up — earning the trust of marquee clients including NHDC, NPCIL,
              MP Shasan, and LCC across high-value infrastructure projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
