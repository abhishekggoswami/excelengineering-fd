'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-1-iSNS1EfAlxpeZ8gA8dz4WsGbO5nrhm.png',
    alt: 'Excel Engineering ACE Indian Crane on site with engineering team',
    caption: 'Precision Lift Operations',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-2-4NYFNBC67jKvuI3rETO9vLEDpvjBiU.png',
    alt: 'ACE 4x4 Excel Engineering crane lifting large steel panel between concrete pillars',
    caption: 'Heavy Structural Erection',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-3-fx7Fztmu3wI57Xx2PR1NF3gY3c6ZmL.png',
    alt: 'Excel Engineering Escorts crane tilting large steel plate at dusk',
    caption: 'Steel Plate Handling',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-5-bsLb6bWyLQX6rxmYmXf8HVsL4ZYHkH.png',
    alt: 'Excel Engineering reach stacker lifting massive steel box girder at sunset',
    caption: 'Bridge Girder Placement',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-6-AWWblz5lHTdToFCikQTXdKelNh1Z4X.png',
    alt: 'Excel Engineering crane working inside dam intake structure',
    caption: 'Dam Infrastructure Lifting',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-7-i22kO5vfyTmkZPqJFlQej1WET7QRkS.png',
    alt: 'Two orange Excel Engineering reach stackers framing red steel roof structure at golden hour',
    caption: 'Dual Crane Operations',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-8-angWclIVOA27aEw9kSbIj3e3ZPaMUX.png',
    alt: 'Excel Engineering crane installing bridge truss girder onto concrete tower',
    caption: 'Bridge Truss Installation',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-9-abEDCJZ1MCezSdtLVy1bLG5pxpwM7v.png',
    alt: 'Excel Engineering excavator-crane erecting steel columns on hilltop site',
    caption: 'Column Erection Works',
  },
]

const INTERVAL = 5000
const TRANSITION_DURATION = 900

type Dir = 'next' | 'prev'

export default function CraneHeroSlideshow() {
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

  // Slide transition offsets
  const enterX = dir === 'next' ? '8%' : '-8%'
  const exitX  = dir === 'next' ? '-8%' : '8%'

  return (
    <section className="relative min-h-[82vh] flex items-end overflow-hidden bg-[#0e5c3d]">

      {/* Outgoing slide */}
      {prev !== null && (
        <div
          className="absolute inset-0"
          style={{
            animation: `slideExit ${TRANSITION_DURATION}ms cubic-bezier(0.76,0,0.24,1) forwards`,
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e5c3d]/90 via-[#0e5c3d]/40 to-[#0e5c3d]/20" />
        </div>
      )}

      {/* Active slide */}
      <div
        className="absolute inset-0"
        style={
          transitioning
            ? {
                animation: `slideEnter ${TRANSITION_DURATION}ms cubic-bezier(0.76,0,0.24,1) forwards`,
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
            animation: zooming && !transitioning
              ? `kenBurns ${INTERVAL}ms ease-out forwards`
              : 'none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e5c3d]/90 via-[#0e5c3d]/40 to-[#0e5c3d]/20" />
        {/* Right-side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0e5c3d]/30" />
      </div>

      {/* Content */}
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
          Crane Services
        </h1>
        <p className="text-white/70 text-lg max-w-xl text-pretty mb-10">
          Heavy-lift crane solutions for infrastructure, industrial, and construction
          projects — a large, certified fleet operated by experienced professionals.
        </p>

        {/* Caption + controls */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Caption */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#f5a623]" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              {SLIDES[current].caption}
            </span>
          </div>

          {/* Prev / dots / next */}
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
