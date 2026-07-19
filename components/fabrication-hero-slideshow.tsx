'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-1-x1oRQc8uzr8CQDeP0szPSUIsR5qp0O.png',
    alt: '4 engineers inspecting a large grey steel pipe and penstock assembly inside Excel Engineering factory',
    caption: 'Penstock & Pipe Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-3-6pVGq67LRHTUGquLRRGArTzIeTFGf3.png',
    alt: '3 engineers at green CNC lathe machining a spiral drum under yellow overhead crane',
    caption: 'CNC Machining — Rope Drums',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-5-nuIatlCzx9sE8NXG9B27Lf5MnXnklb.png',
    alt: 'Welder and engineer inspecting large modular steel shuttering/formwork structure inside workshop',
    caption: 'Modular Steel Shuttering',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-7-b123yvfDnboxVIcR7KsC5LRxv57t3W.png',
    alt: '6 workers outdoors fabricating steel gate panels on red earth ground, Excel compound wall',
    caption: 'Gate Panel Fabrication — Outdoor Yard',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-9-9BQbiDlz5j1OnkLmvTqc7D53tKBeo5.png',
    alt: '3 engineers welding large modular steel frame panel under yellow overhead crane with hi-vis vests',
    caption: 'Structural Frame Welding',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-8-HZnf03ub8SFJ2WjT3Ush4870G2Y3N7.png',
    alt: 'Engineer with clipboard inspecting rows of large brass rope drum spools inside factory, Excel logo',
    caption: 'Quality Inspection — Rope Drums',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-10-rf8fqEqtCn2xtpRrudcDLhSddPZ39W.png',
    alt: 'Factory floor showing large steel spur gears, I-beam frames, air compressor, yellow hydraulic press',
    caption: 'Gear & Component Manufacturing',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-4-OGDkQ7IiqlHecWBrn1Z9Q3gYM2jUF0.png',
    alt: 'Wide outdoor yard shot — steel gate panels laid flat, 2 engineers inspecting beside blue factory shed',
    caption: 'Gate Assembly & Yard Inspection',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-6-9A2vhp0UgXdhIvM6pGJU10QtrudnG3.png',
    alt: '2 engineers at green lathe working on a rope drum, clean workshop with tool boards',
    caption: 'Precision Turning — Workshop',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-2-OqEsbXQaWqM3sN1rqPki8bRSzLJFc6.png',
    alt: '2 engineers with CMM arm measuring large brass/bronze roller drums in precision measurement lab',
    caption: 'CMM Precision Measurement',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-11-oDznUfspb3zcb9DT15xUc8BBPOvHWN.png',
    alt: 'Steel truss painted red oxide being spray-coated, engineer reviewing blueprints, yellow overhead crane',
    caption: 'Steel Truss Fabrication & Painting',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-12-Cqmy1QX7s0pNqhzQvS17iQcw23xQWn.png',
    alt: '3 workers in blue overalls guiding a massive black steel gate panel being lifted by yellow mobile crane',
    caption: 'Heavy Gate Lifting — Dispatch',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-13-qZGe1DmzGL0IU6zWLOAu7YMJGADDXa.png',
    alt: '2 engineers guiding a large black steel gate panel suspended from overhead crane hook in clean yard',
    caption: 'Gate Panel — Load Test & Dispatch',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-14-8op6oiWsIzGS51gwyJoncte99de0Bj.png',
    alt: 'Wide factory floor — 4 hi-vis workers measuring and welding long steel channel frames, Excel logo on wall',
    caption: 'Steel Channel Fabrication — Floor Operations',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-15-pwRXLiYfiAEQhzT7a2BBoMLrNONgzO.png',
    alt: '2 engineers loading large red oxide steel hopper structures onto truck under yellow overhead crane',
    caption: 'Finished Fabrications — Truck Loading',
  },
]

const INTERVAL = 5000
const TRANSITION_DURATION = 900

type Dir = 'next' | 'prev'

export default function FabricationHeroSlideshow() {
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
    <section className="relative min-h-[82vh] flex items-end overflow-hidden bg-[#0e5c3d]">

      {/* Outgoing slide */}
      {prev !== null && (
        <div
          className="absolute inset-0"
          style={{
            animation: `fabSlideExit ${TRANSITION_DURATION}ms cubic-bezier(0.76,0,0.24,1) forwards`,
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
                animation: `fabSlideEnter ${TRANSITION_DURATION}ms cubic-bezier(0.76,0,0.24,1) forwards`,
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
              ? `fabKenBurns ${INTERVAL}ms ease-out forwards`
              : 'none',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e5c3d]/90 via-[#0e5c3d]/40 to-[#0e5c3d]/20" />
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
          Fabrication Works
        </h1>
        <p className="text-white/70 text-lg max-w-xl text-pretty mb-10">
          Precision structural and industrial fabrication — from heavy steel structures and pipe
          systems to bridge components, rope drums, and custom assemblies.
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
