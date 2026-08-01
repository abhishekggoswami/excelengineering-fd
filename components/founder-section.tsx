'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Building2 } from 'lucide-react'

const leaders = [
  {
    name: 'Mr. Farook Khan',
    role: 'Founder & Managing Director',
    eyebrow: 'Director',
    description:
      'Founder and Director of Excel Engineering. With over 25 years of hands-on experience in hydraulic gate engineering, structural fabrication, and government project execution, Mr. Farook Khan leads every major contract personally — from design coordination to site commissioning.',
    quote:
      'We do not just build structures — we build trust, integrity, and the infrastructure that powers India’s growth.',
    contact: '+91 94253 00449',
    href: 'tel:+919425300449',
    image: '/images/farook-khan.png',
    imageAlt: 'Mr. Farook Khan, Founder and Managing Director of Excel Engineering',
    highlights: ['25+ years of experience', '24+ major projects led'],
  },
  {
    name: 'Mr. Farhan Khan',
    role: 'Assistant Director',
    eyebrow: 'Assistant Director',
    description:
      'Supporting Excel Engineering’s project leadership, coordination, and client communication, Mr. Farhan Khan helps translate engineering priorities into disciplined execution across active sites and fabrication operations.',
    quote:
      'Strong project delivery begins with clear coordination, accountable teams, and attention to every technical detail.',
    contact: 'Discuss a project',
    href: '/contact',
    image: null,
    imageAlt: '',
    highlights: ['Project coordination', 'Client & site support'],
  },
] as const

export default function FounderSection() {
  return (
    <section className="overflow-hidden bg-[#f5efe0] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#e85d3f]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e85d3f]">
              Leadership
            </span>
            <span className="h-px w-10 bg-[#e85d3f]" />
          </div>
          <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#1a1a1a] sm:text-5xl lg:text-6xl">
            Engineering vision.
            <span className="block text-[#0e5c3d]">Leadership in action.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[#6b7280] sm:text-lg">
            The people guiding Excel Engineering’s technical standards, project discipline, and long-term client relationships.
          </p>
        </div>

        <div className="space-y-6">
          {leaders.map((leader, index) => index === 1 ? (
            <article
              key={leader.name}
              className="group relative overflow-hidden rounded-[24px] border border-[#e85d3f]/25 bg-white px-6 py-6 shadow-[0_18px_45px_-34px_rgba(232,93,63,0.65)] transition-all duration-500 hover:-translate-y-1 hover:border-[#e85d3f]/55 hover:shadow-[0_24px_55px_-32px_rgba(232,93,63,0.55)] sm:px-8 md:flex md:items-center md:gap-8 lg:px-10"
            >
              <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#f5a623] via-[#e85d3f] to-[#c54b32]" />
              <div className="flex shrink-0 items-center gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e85d3f]">Assistant Director</p>
                  <h3 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[#1a1a1a] sm:text-3xl">{leader.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#f08a24]">{leader.role}</p>
                </div>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-[#6b7280] md:mt-0 md:border-l md:border-[#e85d3f]/15 md:pl-8">
                {leader.description}
              </p>
              <Link
                href={leader.href}
                className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e85d3f] px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-[#e85d3f] transition-all hover:bg-[#e85d3f] hover:text-white md:mt-0"
              >
                {leader.contact}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ) : (
            <article
              key={leader.name}
              className="group grid min-h-[390px] overflow-hidden rounded-[28px] border border-[#dfd3bc] bg-white shadow-[0_20px_55px_-38px_rgba(15,65,47,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-[#e85d3f]/45 hover:shadow-[0_28px_70px_-38px_rgba(15,65,47,0.55)] md:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.88fr)]"
            >
              <div
                className={`relative flex flex-col justify-between overflow-hidden p-7 sm:p-9 lg:p-11 ${
                  index === 0 ? 'bg-[linear-gradient(145deg,#080c0b_0%,#17211d_48%,#09120f_100%)] text-white' : 'bg-[#0e5c3d] text-white'
                }`}
              >
                <div className="leadership-ring leadership-ring-one pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
                <div className="leadership-ring leadership-ring-two pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full border border-white/[0.06]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(232,93,63,0.10),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(245,166,35,0.06),transparent_28%)]" />

                <div className="relative">
                  <div className="mb-7 flex items-center gap-2 text-[#f5a623]">
                    <Building2 className="h-4 w-4" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                      {leader.eyebrow}
                    </span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/55">
                    Excel Engineering
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-[#f5a623]">
                    {leader.role}
                  </p>
                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                    {leader.description}
                  </p>
                </div>

                <div className="relative mt-8">
                  <blockquote className="border-l-2 border-[#e85d3f] pl-4 text-base font-semibold italic leading-relaxed text-white/90">
                    “{leader.quote}”
                  </blockquote>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {leader.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold text-white/75"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden bg-[#dce7df] md:min-h-full">
                {leader.image ? (
                  <>
                    <Image
                      src={leader.image}
                      alt={leader.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e3023]/55 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_70%_25%,rgba(245,166,35,0.32),transparent_30%),linear-gradient(135deg,#e9efe9_0%,#bfd3c5_48%,#0e5c3d_130%)]">
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/60 bg-white/30 shadow-[0_25px_70px_rgba(14,92,61,0.18)] backdrop-blur-xl sm:h-52 sm:w-52">
                      <span className="text-6xl font-black tracking-[-0.08em] text-[#0e5c3d] sm:text-7xl">FK</span>
                      <span className="absolute -bottom-5 rounded-full bg-[#1a1a1a] px-5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                        Assistant Director
                      </span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/30 bg-white/75 px-5 py-4 shadow-lg backdrop-blur-xl">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#e85d3f]">Leadership profile</p>
                    <p className="mt-1 text-sm font-black text-[#1a1a1a]">{leader.role}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e5c3d] text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
