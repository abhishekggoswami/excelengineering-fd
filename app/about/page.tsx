'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Award,
  Users,
  Wrench,
  ShieldCheck,
  TrendingUp,
  MapPin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import ServiceFaqSection from '@/components/service-faq-section'
import CtaBannerSection from '@/components/cta-banner-section'
import Navbar from '@/components/navbar'
import FounderSection from '@/components/founder-section'

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'States Covered' },
  { value: '200+', label: 'Skilled Personnel' },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    desc: 'Every weld, every structural member, every component is fabricated and installed to the highest standards — verified by certified inspection procedures and third-party NDT.',
  },
  {
    icon: TrendingUp,
    title: 'Precision Engineering',
    desc: 'Our CNC-controlled fabrication facility and experienced engineering team ensure dimensional accuracy and structural integrity on every project, regardless of complexity.',
  },
  {
    icon: Users,
    title: 'People-Centred',
    desc: 'We invest in our people — skilled engineers, qualified welders, and site supervisors who carry the technical knowledge that makes every project a success.',
  },
  {
    icon: Wrench,
    title: 'Full Turnkey Capability',
    desc: 'From initial design and drawing to fabrication, erection, testing, and commissioning — we own the entire project scope, removing coordination risk for our clients.',
  },
  {
    icon: Award,
    title: 'Government Compliant',
    desc: 'We operate within Water Resources Department and Bureau of Indian Standards specifications, with documentation and quality records that meet government project requirements.',
  },
  {
    icon: MapPin,
    title: 'Pan-India Reach',
    desc: 'With active projects across Madhya Pradesh, Gujarat, Maharashtra, and beyond, we deploy dedicated site teams to any location in India.',
  },
]

const milestones = [
  { year: '1999', title: 'Founded', desc: 'Excel Engineering established in Bhopal, M.P. as a specialist fabrication and erection contractor.' },
  { year: '2003', title: 'First Dam Gate Project', desc: 'Awarded first major radial gate fabrication contract under the Water Resources Department, M.P.' },
  { year: '2008', title: 'Facility Expansion', desc: 'Expanded fabrication workshop with CNC cutting, heavy lathe, and advanced welding infrastructure.' },
  { year: '2012', title: 'NPCIL Project', desc: 'Executed structural steel and gate works for Nuclear Power Corporation of India Limited.' },
  { year: '2016', title: 'Multi-State Presence', desc: 'Concurrent projects active across Gujarat, Maharashtra, and Madhya Pradesh simultaneously.' },
  { year: '2020', title: 'NHDC Partnership', desc: 'Completed major hoist and gate works for Narmada Hydroelectric Development Corporation Limited.' },
  { year: '2024', title: 'Ongoing Expansion', desc: 'Two major WRD projects active — Madiya Dam (Sagar) and Hiran Medium Irrigation Project (M.P.).' },
]

const leadership = [
  {
    name: 'M. Farook Khan',
    role: 'Director',
    desc: 'Founder and Director of Excel Engineering. With over 25 years of hands-on experience in hydraulic gate engineering, structural fabrication, and government project execution, M. Farook Khan leads every major contract personally — from design coordination to site commissioning.',
    contact: '+91-9425300449 / +91-8817867664',
  },
]

const faqs = [
  {
    q: 'What is Excel Engineering\'s core area of specialisation?',
    a: 'Excel Engineering specialises in the design, fabrication, supply, erection, testing and commissioning of hydraulic water control structures — including radial gates, vertical lift gates, stoplog gates, hoists, gantry cranes, and all allied structural and mechanical components for dam and irrigation projects.',
  },
  {
    q: 'Where is Excel Engineering based and where does it operate?',
    a: 'We are headquartered at 30/5 Sector-H, Industries Area, Govindpura, Bhopal – 23, Madhya Pradesh. We operate project sites across India, with a strong presence in M.P., Gujarat, and Maharashtra.',
  },
  {
    q: 'How many years of experience does Excel Engineering have?',
    a: 'Excel Engineering has been in operation for over 25 years, executing dam gate and fabrication projects since 1999 under the leadership of Director M. Farook Khan.',
  },
  {
    q: 'Does Excel Engineering work as a sub-contractor or prime contractor?',
    a: 'We operate in both roles. On many government WRD and irrigation projects we work as a specialist sub-contractor to primary contractors (such as LCC Projects or SRS Infraway), handling the full hydraulic gate and hoist scope. On smaller projects we may act as prime contractor.',
  },
]

export default function AboutPage() {
  const [openMilestone, setOpenMilestone] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="company-video-hero relative flex min-h-[58svh] items-end overflow-hidden bg-[#102b25] sm:min-h-[62svh]">
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-bg.png" className="absolute inset-0 h-full w-full object-cover opacity-90">
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06251c]/52 via-[#0b3328]/32 to-[#071d18]/18" />
        <div className="company-hero-content relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-20 pt-36 w-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Excel Engineering
            </span>
          </div>
          <h1
            className="font-black text-white text-balance leading-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Built on Strength.
            <br />
            <span className="text-[#f5a623]">25 Years of Precision.</span>
          </h1>
          <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl text-pretty mb-8">
            From Bhopal to Gujarat, from irrigation canals to dam spillways — Excel Engineering
            has been delivering world-class hydraulic gate engineering and structural fabrication
            since 1999.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] text-white font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded-full transition-colors"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-6 text-center">
                <p
                  className="font-black text-[#f5a623] leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
                >
                  {s.value}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                Who We Are
              </span>
            </div>
            <h2
              className="font-black text-[#1a1a1a] text-balance leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              India&apos;s Specialist in Hydraulic Gate Engineering
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed mb-5 text-pretty">
              Excel Engineering is a design, manufacturing, and project execution company with a strong
              management focus on turnkey delivery. Based in Bhopal, M.P., we have been at the forefront
              of hydraulic water control engineering for over 25 years — supplying, fabricating, and
              commissioning radial gates, vertical spillway gates, stoplog systems, hoists, and allied
              infrastructure for dam and irrigation projects across India.
            </p>
            <p className="text-[#6b7280] text-base leading-relaxed mb-8 text-pretty">
              Our production team carries out 100% quality checks including radiography and standard
              inspection. We operate EOT cranes of capacity up to 20 tonnes and 5 tonnes for heavy jobs,
              hydraulic mobile cranes of 60 tonne and 16 tonne capacity, and have 5–6 active site teams
              deployed across India at any given time.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'MSME Registered'].map((c) => (
                <span
                  key={c}
                  className="border border-[#1a1a1a]/20 text-[#1a1a1a]/70 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-11-HyrHssE9NCCF9IN1YYgvl4foNDPApO.png"
              alt="Excel Engineering fabrication workshop — workers with steel truss"
              fill
              className="object-cover"
            />
            {/* Corner badge */}
            <div className="absolute bottom-5 left-5 bg-[#e85d3f] text-white px-5 py-2.5 rounded-full font-black text-sm uppercase tracking-wide shadow-lg">
              Since 1999
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-[#f5efe0] py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                Our Values
              </span>
              <div className="w-8 h-px bg-[#e85d3f]" />
            </div>
            <h2
              className="font-black text-[#1a1a1a] text-balance leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              What Drives Every Project
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={i}
                  className="company-card-lift group cursor-default rounded-2xl border border-[#e5d9c0] bg-white p-7 transition-all duration-300 hover:border-[#e85d3f]/40 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] group-hover:bg-[#e85d3f] transition-colors duration-300 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#f5a623] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-extrabold text-[#1a1a1a] text-base mb-3">{v.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed text-pretty">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────────────── */}
      <FounderSection />

      <section className="hidden bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Leadership
            </span>
          </div>
          {leadership.map((l) => (
            <div
              key={l.name}
              className="bg-[#f5efe0] rounded-3xl p-8 md:p-12 border border-[#e5d9c0] flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-2xl bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                <span className="text-[#f5a623] font-black text-2xl">
                  {l.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-black text-[#1a1a1a] text-2xl mb-1">{l.name}</h3>
                <p className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest mb-4">
                  {l.role}
                </p>
                <p className="text-[#6b7280] text-base leading-relaxed mb-5 text-pretty max-w-2xl">
                  {l.desc}
                </p>
                <a
                  href={`tel:+919425300449`}
                  className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold text-sm hover:text-[#e85d3f] transition-colors"
                >
                  {l.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="hidden bg-[#1a1a1a] py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Our Journey
            </span>
          </div>
          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />
            {milestones.map((m, i) => {
              const isOpen = openMilestone === i
              return (
                <button
                  key={i}
                  className="relative flex items-start gap-6 py-5 text-left group w-full"
                  onClick={() => setOpenMilestone(isOpen ? null : i)}
                >
                  {/* Dot */}
                  <div className="w-11 h-11 rounded-full bg-[#1a1a1a] border-2 border-white/15 group-hover:border-[#e85d3f] flex items-center justify-center flex-shrink-0 transition-colors duration-200 z-10">
                    <span className="text-white/60 group-hover:text-[#f5a623] text-[10px] font-black transition-colors duration-200">
                      {m.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-extrabold text-white group-hover:text-[#f5a623] transition-colors duration-200 text-base">
                        {m.title}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#e85d3f] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/30 group-hover:text-[#e85d3f] flex-shrink-0 transition-colors" />
                      )}
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-24 mt-2' : 'max-h-0'}`}
                    >
                      <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <ServiceFaqSection
        faqs={faqs}
        heading="About Excel Engineering"
        subheading="Common questions about our history, capabilities, and how we work."
      />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CtaBannerSection />
      </main>
    </>
  )
}
