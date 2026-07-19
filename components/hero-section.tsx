'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    src: '/images/dam-hero-1.png',
    alt: 'Aerial view of a completed dam with blue radial gates and full green reservoir',
    label: 'Reservoir & Spillway Works',
    sublabel: 'Dam Construction Since 1999',
  },
  {
    src: '/images/dam-hero-2.png',
    alt: 'Eye-level view of dam face with yellow gantry crane, blue steel gates and concrete piers',
    label: 'Radial Gate Installations',
    sublabel: 'Precision Gate Engineering',
  },
  {
    src: '/images/dam-hero-3.png',
    alt: 'Ground-level view of dam under construction with large red flap gates and turquoise water',
    label: 'Flap Gate & Barrage Structures',
    sublabel: '25+ Years of Engineering Excellence',
  },
]

const INTERVAL = 5500

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number) => {
    if (isAnimating || index === current) return
    setIsAnimating(true)
    setPrev(current)
    setCurrent(index)
    setTimeout(() => {
      setPrev(null)
      setIsAnimating(false)
    }, 1100)
  }

  const next = () => goTo((current + 1) % SLIDES.length)
  const goBack = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    if (isPaused) return
    timerRef.current = setTimeout(next, INTERVAL)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, isPaused])

  const slide = SLIDES[current]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ borderRadius: '24px 24px 0 0' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background slide layers ─────────────────────────────────────── */}
      {/* Outgoing slide — fades out (no Ken Burns, already fading so animation won't be visible) */}
      {prev !== null && (
        <div className="absolute inset-0 slide-fade-out" style={{ zIndex: 1 }}>
          <Image src={SLIDES[prev].src} alt="" fill sizes="100vw" className="object-cover object-center" loading="lazy" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      )}

      {/* Incoming / active slide — fades in with Ken Burns zoom */}
      <div key={current} className="absolute inset-0 slide-fade-in" style={{ zIndex: 2 }}>
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          priority={current === 0}
          sizes="100vw"
          className="object-cover object-center slide-kenburns"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#111111] to-transparent" style={{ zIndex: 3 }} />

      {/* Slide label badge — bottom-left corner */}
      <div
        key={current}
        className="absolute bottom-24 left-8 md:left-20 z-20 slide-caption-enter flex items-center gap-3"
      >
        <div className="h-px w-8 bg-[#e85d3f]" />
        <div>
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-widest">{slide.sublabel}</p>
          <p className="text-white/80 text-sm font-semibold">{slide.label}</p>
        </div>
      </div>

      {/* Slide counter — bottom-right */}
      <div className="absolute bottom-24 right-8 md:right-20 z-20 flex items-center gap-4">
        <button
          onClick={goBack}
          aria-label="Previous slide"
          className="w-9 h-9 rounded-full border border-white/30 hover:border-white/70 flex items-center justify-center transition-colors text-white/70 hover:text-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-white/50 text-sm font-mono tabular-nums">
          <span className="text-white font-bold">{String(current + 1).padStart(2, '0')}</span>
          {' / '}
          {String(SLIDES.length).padStart(2, '0')}
        </span>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-9 h-9 rounded-full border border-white/30 hover:border-white/70 flex items-center justify-center transition-colors text-white/70 hover:text-white"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-500 rounded-full"
            style={{
              width:           i === current ? '28px' : '8px',
              height:          '8px',
              backgroundColor: i === current ? '#f5a623' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-40 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">
              Infrastructure &amp; Engineering Contractor
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-black text-balance leading-none mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            Specialists in{' '}
            <span className="text-[#f5a623]">Dam Construction</span>{' '}
            &amp; Hydraulic Works
          </h1>

          {/* Sub-headline */}
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl text-pretty">
            From gravity dams and spillways to radial gate installations and
            barrage structures — Excel Engineering delivers precision hydraulic
            infrastructure for government and irrigation authorities across India.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#services"
              className="flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-bold uppercase tracking-wide text-sm px-7 py-4 rounded-full"
            >
              <ArrowRight className="w-4 h-4" />
              Explore Our Services
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 border-2 border-white/40 hover:border-white/80 transition-colors text-white font-bold uppercase tracking-wide text-sm px-7 py-4 rounded-full"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Play reel */}
          <button className="flex items-center gap-3 mt-10 group">
            <div className="w-12 h-12 rounded-full border-2 border-white/50 group-hover:border-[#f5a623] transition-colors flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </div>
            <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
              Watch Project Reel
            </span>
          </button>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-16 flex flex-wrap gap-10">
          {[
            { value: '25+',  label: 'Years Experience' },
            { value: '259+', label: 'Projects Completed' },
            { value: '15+',  label: 'States Operating' },
            { value: '21K+', label: 'Happy Clients' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="font-black text-[#f5a623] leading-none"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {stat.value}
              </span>
              <span className="text-white/60 text-sm font-medium mt-1 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
