'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png',
    alt: 'Completed concrete barrage with blue steel gates and yellow gantry crane, green reservoir',
    caption: 'Completed Barrage Structure',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0474-clean-kBioVeCMv3LE44PW0xXN429b4PbzW1.png',
    alt: 'Aerial side view of dam under construction showing concrete piers and red stop-log frames',
    caption: 'Radial Gate Installation',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
    alt: 'Aerial drone view of dam under construction with red radial gates, yellow crane, green forest',
    caption: 'Aerial Construction Progress',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-R6hNEvtRgvlhVBKmjXgxAXQkCZPe0b.png',
    alt: 'Wide aerial of full reservoir behind completed dam with blue gates and yellow gantry',
    caption: 'Full Reservoir Impoundment',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0478-clean%20%281%29-g4mS1XgRKpfks3GH0ud6c3RX3JrHGn.png',
    alt: 'Ground-level shot along dam face with large red radial gates between white concrete piers',
    caption: 'Radial Gate Dam Face',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png',
    alt: 'Top-down aerial of completed barrage with yellow hoists on blue frames, water cascading all bays',
    caption: 'Operational Spillway — All Bays Open',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0481-clean%202-eXJnNCS3OECYkxw9QuiHopHlg3FMJi.png',
    alt: 'Golden-hour wide shot of dam under construction, cranes on deck, teal water reflection',
    caption: 'Golden Hour — Construction Phase',
  },
]

const INTERVAL = 5000
const TRANSITION_DURATION = 900

type Dir = 'next' | 'prev'

export default function DamHeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const [dir, setDir] = useState<Dir>('next')
  const [zooming, setZooming] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (next: number, direction: Dir = 'next') => {
    if (transitioning) return
    setDir(direction)
    setPrev(current)
    setTransitioning(true)
    setCurrent(next)
    setZooming(false)
    setTimeout(() => {
      setPrev(null)
      setTransitioning(false)
      setZooming(true)
    }, TRANSITION_DURATION)
  }

  const advance = (direction: Dir = 'next') => {
    const next =
      direction === 'next'
        ? (current + 1) % SLIDES.length
        : (current - 1 + SLIDES.length) % SLIDES.length
    goTo(next, direction)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => advance('next'), INTERVAL)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, transitioning])

  const enterX = dir === 'next' ? '8%' : '-8%'
  const exitX  = dir === 'next' ? '-8%' : '8%'

  return (
    <section className="relative min-h-[82vh] flex items-end overflow-hidden bg-[#111111]">

      {/* Outgoing slide */}
      {prev !== null && (
        <div
          className="absolute inset-0"
          style={{
            animation: `damSlideExit ${TRANSITION_DURATION}ms cubic-bezier(0.76,0,0.24,1) forwards`,
            '--exit-x': exitX,
          } as React.CSSProperties}
        >
          <Image
            src={SLIDES[prev].src}
            alt={SLIDES[prev].alt}
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
        </div>
      )}

      {/* Active slide */}
      <div
        className="absolute inset-0"
        style={
          transitioning
            ? {
                animation: `damSlideEnter ${TRANSITION_DURATION}ms cubic-bezier(0.76,0,0.24,1) forwards`,
                '--enter-x': enterX,
              } as React.CSSProperties
            : {}
        }
      >
        <Image
          src={SLIDES[current].src}
          alt={SLIDES[current].alt}
          fill
          priority={current === 0}
          sizes="100vw"
          loading={current === 0 ? 'eager' : 'lazy'}
          className="object-cover object-center"
          style={{
            transformOrigin: 'center center',
            animation:
              zooming && !transitioning
                ? `damKenBurns ${INTERVAL}ms ease-out forwards`
                : 'none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/25" />
      </div>

      {/* Content overlay */}
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
          Dam Construction Works
        </h1>
        <p className="text-white/70 text-lg max-w-xl text-pretty mb-10">
          Large-scale water infrastructure built to last generations — from gravity
          and earthfill dams to hydroelectric structures and barrage systems.
        </p>

        {/* Caption + controls */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#f5a623]" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              {SLIDES[current].caption}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => advance('prev')}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#f5a623' : 'rgba(255,255,255,0.35)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => advance('next')}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide counter badge */}
      <div className="absolute top-8 right-8 z-10 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2">
        <span className="text-[#f5a623] font-black text-sm">{String(current + 1).padStart(2, '0')}</span>
        <span className="text-white/40 text-sm">/</span>
        <span className="text-white/60 text-sm">{String(SLIDES.length).padStart(2, '0')}</span>
      </div>

    </section>
  )
}
