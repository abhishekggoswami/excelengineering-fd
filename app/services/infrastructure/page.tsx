'use client'

import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import { ArrowUpRight, Wrench, Users, Building2, Cpu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

// ── Hero slideshow images ────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-unoYci1Mw6ClGmuhdBSvjlieqrfwjT.png',
    alt: 'Aerial view of completed dam with blue radial gates and teal reservoir',
  },
  {
    src: '/images/infra-hero-2.png',
    alt: 'Dramatic sunset view of large dam under construction with cranes on deck',
  },
  {
    src: '/images/infra-hero-3.png',
    alt: 'Aerial view of completed barrage with red gantry beam and vivid green reservoir',
  },
]

function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setSliding(true)
      setPrev(current)
      setCurrent((c) => (c + 1) % HERO_SLIDES.length)
      setTimeout(() => { setPrev(null); setSliding(false) }, 700)
    }, 4500)
    return () => clearInterval(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* outgoing slide — slides left out */}
      {prev !== null && (
        <Image
          key={`prev-${prev}`}
          src={HERO_SLIDES[prev].src}
          alt={HERO_SLIDES[prev].alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{
            transform: sliding ? 'translateX(-100%)' : 'translateX(0)',
            transition: 'transform 700ms cubic-bezier(0.77,0,0.18,1)',
          }}
        />
      )}
      {/* incoming slide — slides in from right */}
      <Image
        key={`cur-${current}`}
        src={HERO_SLIDES[current].src}
        alt={HERO_SLIDES[current].alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        style={{
          transform: sliding ? 'translateX(0)' : prev !== null ? 'translateX(0)' : 'translateX(0)',
          transition: 'transform 700ms cubic-bezier(0.77,0,0.18,1)',
        }}
      />
      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); setSliding(true); setTimeout(() => { setPrev(null); setSliding(false) }, 700) }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: current === i ? '28px' : '8px',
              height: '8px',
              background: current === i ? '#f5a623' : 'rgba(255,255,255,0.5)',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Sticky Scroll Reveal ────────────────────────────────────────────────────

const scrollContent = [
  {
    title: 'Advanced Fabrication Machinery',
    description:
      'Our fabrication facility is equipped with heavy-duty lathes, CNC machines, plasma cutters, and precision welding systems. Trained engineers operate every piece of equipment to deliver components built to exact specifications for dam gates, hoists, and structural steelwork.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-3-ztM8hMNpcEVXCWS303oIdjNlUviCcT.png',
    imageAlt: 'Excel Engineering workers operating green CNC lathe machines in the fabrication facility',
  },
  {
    title: 'Structural Steel & Assembly',
    description:
      'From cutting and bending to full structural assembly, our production team handles large-scale steel fabrication under one roof. Each assembly is inspected, aligned, and quality-checked against engineering drawings before dispatch to project sites.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-11-HyrHssE9NCCF9IN1YYgvl4foNDPApO.png',
    imageAlt: 'Workers fabricating and spray-painting a large red steel truss structure inside the Excel Engineering workshop',
  },
  {
    title: 'Site-Ready Delivery & Commissioning',
    description:
      'Completed fabricated units are rigorously load-tested, surface-treated, and dispatched to site on our own heavy haulage fleet. Our crews handle unloading, installation, and full commissioning — ensuring every structure performs to specification from day one.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-15-ebRMq3uWJf5eWMm6WWGJBGU2cVWJw6.png',
    imageAlt: 'Workers loading large fabricated red steel structures onto a flatbed truck inside the Excel Engineering factory at night',
  },
]

function StickyScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      // Reveal once in view
      if (containerTop < viewportHeight * 0.85) setVisible(true)

      const scrolled = -containerTop
      const totalScrollable = containerHeight - viewportHeight
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable))
      const index = Math.min(scrollContent.length - 1, Math.floor(progress * scrollContent.length))
      setActiveIndex(index)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const totalHeight = `${scrollContent.length * 100}vh`

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f5efe0]"
      style={{ height: totalHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT — image (was right) */}
        <div className="hidden lg:flex w-1/2 items-center justify-center px-10 py-12 flex-shrink-0">
          <div
            className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-48px)' }}
          >
            {scrollContent.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 1280px) 50vw, 520px"
                loading={i === 0 ? undefined : 'lazy'}
                priority={i === 0}
                className="object-cover transition-all duration-700"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i ? 'scale(1)' : 'scale(1.04)',
                }}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
              <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#e85d3f] flex-shrink-0" />
                {scrollContent[activeIndex].title}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — text content (was left) */}
        <div
          className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-14 lg:px-16 py-16 gap-10 flex-shrink-0 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(48px)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-xs uppercase tracking-widest">
              Our Capabilities
            </span>
          </div>

          <div className="relative" style={{ minHeight: '220px' }}>
            {scrollContent.map((item, i) => (
              <div
                key={i}
                className="absolute inset-0 flex flex-col justify-start gap-5 transition-all duration-500"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i
                    ? 'translateY(0)'
                    : activeIndex > i
                    ? 'translateY(-24px)'
                    : 'translateY(24px)',
                  pointerEvents: activeIndex === i ? 'auto' : 'none',
                }}
              >
                <h2
                  className="font-black text-[#1a1a1a] text-balance leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)' }}
                >
                  {item.title}
                </h2>
                <p className="text-[#6b7280] text-base leading-relaxed text-pretty max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4">
            {scrollContent.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeIndex === i ? '32px' : '8px',
                  height: '8px',
                  background: activeIndex === i ? '#e85d3f' : 'rgba(26,26,26,0.18)',
                }}
              />
            ))}
            <span className="text-[#9ca3af] text-xs ml-2 font-medium">
              {activeIndex + 1} / {scrollContent.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

// ── Intersection-observer animation hook ─────────────────────────────────────

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ── Page data ────────────────────────────────────────────────────────────────

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '6+',  label: 'Operational Departments' },
  { value: '20+', label: 'Equipment Categories' },
  { value: '2+',  label: 'States Active' },
]

const departments = [
  {
    icon: Users,
    title: 'Administration & Management',
    desc: 'A dedicated admin team coordinates project logistics, procurement, compliance, and documentation — ensuring every project runs on time and within scope.',
  },
  {
    icon: Cpu,
    title: 'Technical & Engineering',
    desc: 'Qualified engineers and site supervisors manage design coordination, structural analysis, and on-ground execution to the highest quality standards.',
  },
  {
    icon: Wrench,
    title: 'Production & Fabrication',
    desc: 'Our production division operates advanced fabrication machinery with certified welders and operators handling steel structures, gates, and industrial components.',
  },
  {
    icon: Building2,
    title: 'Finance & Customer Support',
    desc: 'A transparent finance team manages billing and contracts, while customer support ensures clear communication and prompt resolution at every project stage.',
  },
]

const equipmentCategories = [
  {
    category: 'Heavy Lifting & Earthwork',
    items: ['Cranes (Hydra & EOT)', 'JCB / Excavator Loaders', 'Heavy Duty Winch', 'Chain Pulley Blocks'],
  },
  {
    category: 'Transport & Power',
    items: ['Trucks & Tractors', 'Diesel Generating Sets', 'Air Compressors', 'Elevators'],
  },
  {
    category: 'Fabrication & Cutting',
    items: ['Plasma Cutting Machines', 'Gas Cutting Sets', 'Plate & T-Bending Sets', 'Heavy Jigs & Fixtures'],
  },
  {
    category: 'Welding Equipment',
    items: ['Welding Machines', 'Rotary Welding Generators', 'Welding Rectifiers', 'Riveting M/c with Dolly'],
  },
  {
    category: 'Machining',
    items: ['Heavy Duty Lathes', 'Drilling Machines', 'Gear Hobbing Machines', 'Miller & Planning Machines'],
  },
  {
    category: 'Site Works',
    items: ['Concrete Mixer Millers', 'Vibrators', 'Watering Equipment & Tankers', 'Pipeline Equipment'],
  },
]

const strengths = [
  'Skilled engineers, administrators, and technocrats working as a cohesive unit',
  'Work is divided according to individual skills, minimising conflicts and delays',
  'Each department led by an experienced senior with a dedicated team',
  'All personnel trained to make independent decisions for project continuity',
  'Latest technological machinery operated by well-qualified, trained engineers',
  'Full turnkey capability from design and fabrication through to site commissioning',
]

const faqs = [
  {
    q: 'How is Excel Engineering organised internally?',
    a: 'We operate through clearly defined departments — Admin, Technical, Production, Marketing, Customer Support, and Finance — each with skilled personnel and a designated team leader to ensure smooth coordination.',
  },
  {
    q: 'What heavy machinery does Excel Engineering own and operate?',
    a: 'Our equipment fleet includes cranes, JCB excavators, trucks, diesel generators, plasma cutters, welding machines, heavy lathes, concrete mixers, air compressors, and more — all operated by trained, certified professionals.',
  },
  {
    q: 'Does Excel Engineering handle large multi-discipline projects?',
    a: 'Yes. Our infrastructure — spanning manpower, machinery, and organisational systems — is designed to handle complex, multi-discipline projects simultaneously across civil, structural, and hydro-mechanical domains.',
  },
  {
    q: 'Where does Excel Engineering operate?',
    a: 'Our operations are headquartered in Madhya Pradesh and extend across multiple states, with active project sites covering dam works, fabrication, irrigation infrastructure, and crane operations.',
  },
]

// ── Animated sections ────────────────────────────────────────────────────────

function StatsStrip() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      className="bg-[#7c3a1e] border-t border-white/10 py-10 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
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
  )
}

function DepartmentsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Organisational Structure
            </span>
            <div className="w-8 h-px bg-[#e85d3f]" />
          </div>
          <h2
            className="font-black text-[#1a1a1a] text-balance leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            Departments &amp; Divisions
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((d, i) => {
            const Icon = d.icon
            return (
              <div
                key={d.title}
                className="group bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#e85d3f]/40 hover:shadow-lg transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 700ms ${i * 120}ms, transform 700ms ${i * 120}ms, box-shadow 300ms, border-color 300ms`,
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#f5efe0] group-hover:bg-[#e85d3f] transition-colors duration-300 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#e85d3f] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-black text-[#1a1a1a] text-base mb-3 leading-tight">{d.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{d.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StrengthsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="bg-[#f5efe0] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* RIGHT side text moved to LEFT */}
          <div className="flex flex-col gap-3">
            {strengths.map((s, i) => (
              <div
                key={s}
                className="group relative flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-[#e5d9c0] overflow-hidden cursor-default
                  hover:border-[#e85d3f]/50 hover:shadow-md transition-all duration-200"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-40px)',
                  transition: `opacity 600ms ${i * 80}ms, transform 600ms ${i * 80}ms, box-shadow 200ms, border-color 200ms`,
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e85d3f] rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-250 origin-center" />
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f5efe0] group-hover:bg-[#e85d3f] transition-colors duration-200 flex items-center justify-center">
                  <span className="text-[#e85d3f] group-hover:text-white text-xs font-black transition-colors duration-200">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[#374151] group-hover:text-[#1a1a1a] text-sm font-medium leading-snug text-pretty flex-1 transition-colors duration-200">
                  {s}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e85d3f] flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
              </div>
            ))}
          </div>

          {/* LEFT side heading moved to RIGHT */}
          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(48px)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                Why It Works
              </span>
            </div>
            <h2
              className="font-black text-[#1a1a1a] text-balance leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Organisational Strengths
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed text-pretty">
              Our structure is designed to ensure no work is ever disrupted. Departments run
              in full coordination with one another — from admin and finance to production and
              site execution — creating a unified organisation capable of handling the most
              demanding infrastructure projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function EquipmentSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Machinery &amp; Equipment
            </span>
            <div className="w-8 h-px bg-[#e85d3f]" />
          </div>
          <h2
            className="font-black text-[#1a1a1a] text-balance leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            Infrastructure &amp; Equipment Fleet
          </h2>
          <p className="text-[#6b7280] text-base max-w-2xl mx-auto text-pretty">
            Technology plays a vital role in the growth of any engineering company. Excel Engineering
            owns and operates all the latest machinery and equipment necessary to deliver the best
            quality output — operated by well-qualified, trained engineers and technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentCategories.map((cat, i) => (
            <div
              key={cat.category}
              className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#e85d3f]/40 hover:shadow-md transition-all duration-200"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 600ms ${i * 80}ms, transform 600ms ${i * 80}ms, box-shadow 200ms, border-color 200ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-8 rounded-full bg-[#e85d3f]" />
                <h3 className="text-[#1a1a1a] font-extrabold text-sm uppercase tracking-wide">
                  {cat.category}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623] flex-shrink-0 mt-1.5" />
                    <span className="text-[#6b7280] text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function InfrastructurePage() {
  const { ref: heroRef, visible: heroVisible } = useReveal(0.01)

  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero — sliding image background */}
        <section className="relative min-h-[62vh] flex items-end pb-16 pt-40 px-6 md:px-12 lg:px-20 overflow-hidden">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />

          <div
            ref={heroRef}
            className="relative z-20 max-w-7xl mx-auto w-full transition-all duration-800"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(32px)' }}
          >
            <div
              className="flex items-center gap-3 mb-5 transition-all duration-700"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateX(0)' : 'translateX(-24px)', transitionDelay: '100ms' }}
            >
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                Excel Engineering
              </span>
            </div>
            <h1
              className="text-white font-black text-balance leading-tight mb-5 transition-all duration-700"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '200ms',
              }}
            >
              Built on Strength.<br />
              <span className="text-[#f5a623]">Infrastructure &amp; Manpower</span>
            </h1>
            <p
              className="text-white/75 text-base max-w-2xl text-pretty leading-relaxed mb-8 transition-all duration-700"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '320ms' }}
            >
              The operational backbone of Excel Engineering — a disciplined organisation of skilled
              engineers, administrators, and technicians, supported by a comprehensive fleet of
              heavy machinery and advanced fabrication equipment.
            </p>
            <div
              className="transition-all duration-700"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(16px)', transitionDelay: '440ms' }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full"
              >
                <ArrowUpRight className="w-4 h-4" />
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Stats strip — warm brown instead of black */}
        <StatsStrip />

        {/* Sticky Scroll — Capabilities showcase */}
        <StickyScrollSection />

        {/* Departments */}
        <DepartmentsSection />

        {/* Organisational Strengths — columns swapped */}
        <StrengthsSection />

        {/* Equipment Inventory */}
        <EquipmentSection />

        {/* FAQs */}
        <ServiceFaqSection
          faqs={faqs}
          heading="Infrastructure — Common Questions"
          subheading="Answers to the most common questions about Excel Engineering's internal organisation, machinery fleet, and project capabilities."
        />

        {/* CTA — orange background */}
        <section id="contact" className="bg-[#e85d3f] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-white font-black text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Partner with a Well-Equipped Team
            </h2>
            <p className="text-white/80 text-base mb-10 text-pretty">
              Reach out to discuss your project requirements. Our team responds within 24 hours.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/20 border border-white/40 text-white placeholder-white/60 rounded-full px-6 py-3.5 text-sm font-medium focus:outline-none focus:border-white transition-colors flex-1 max-w-xs"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/20 border border-white/40 text-white placeholder-white/60 rounded-full px-6 py-3.5 text-sm font-medium focus:outline-none focus:border-white transition-colors flex-1 max-w-xs"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-white hover:bg-[#f5efe0] transition-colors text-[#e85d3f] font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full flex-shrink-0"
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
