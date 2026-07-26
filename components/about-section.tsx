'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// Project imagery arranged as a three-panel collage inside the "25" letterforms.
const CLIP_IMAGES = [
  '/images/dam-hero-1.png',
  '/images/dam-hero-2.png',
  '/images/dam-hero-3.png',
]

const PILLS = [
  '#DamConstruction',
  '#HydraulicEngineering',
  '#IrrigationInfrastructure',
  '#BarrageWorks',
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  // Render content immediately so it is reliable in previews, print captures and
  // browsers that defer IntersectionObserver callbacks. The section remains fully
  // animated where the observer is available, but it can never stay invisible.
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const fade = (delay: number, extra?: string) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    ...(extra ? {} : {}),
  })

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#f7f4ec]"
      style={{ paddingTop: '3.5rem', paddingBottom: 0 }}
    >
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(14,92,61,0.09) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">

        {/* Eyebrow */}
        <div
          className="mb-3 flex items-center justify-center gap-3"
          style={fade(0)}
        >
          <div className="h-px w-8 bg-[#e85d3f]" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e85d3f]">
            About Us
          </span>
          <div className="h-px w-8 bg-[#e85d3f]" />
        </div>

        {/* Company name */}
        <h2
          className="text-balance font-black uppercase leading-[1.02] text-[#1a1a1a]"
          style={{
            fontSize: 'clamp(1.8rem, 4.2vw, 3.2rem)',
            letterSpacing: '-0.02em',
            ...fade(0.08),
          }}
        >
          Excel Engineering{' '}
          <span className="text-[#0e5c3d]">Private Limited</span>
        </h2>

        {/* Hashtag pills */}
        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
          style={fade(0.16)}
        >
          {PILLS.map((p) => (
            <span
              key={p}
              className="rounded-full border border-[#e85d3f]/30 px-3 py-0.5 text-[0.7rem] font-semibold text-[#e85d3f]"
              style={{ background: 'rgba(232,93,63,0.07)' }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* ── Giant "25" with image clip-mask ──────────────────────── */}
        <div
          className="mx-auto mt-6 select-none"
          style={{
            lineHeight: 1,
            ...fade(0.26),
            transition: `opacity 0.8s ease 0.26s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.26s`,
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(7.25rem, 20vw, 15rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              backgroundImage: `url(${CLIP_IMAGES[0]}), url(${CLIP_IMAGES[1]}), url(${CLIP_IMAGES[2]})`,
              backgroundSize: '34% 100%, 33% 100%, 33% 100%',
              backgroundPosition: 'left center, center center, right center',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            25
          </span>
        </div>

        {/* Years of Experience */}
        <p
          className="mt-1 text-base font-black uppercase tracking-[0.18em] text-[#1a1a1a]"
          style={fade(0.36)}
        >
          Years of Experience
        </p>

        {/* Description */}
        <p
          className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-[#1a1a1a]/65 md:text-[0.97rem]"
          style={fade(0.44)}
        >
          Excel Engineering Private Limited is a specialist hydraulic and dam gate
          engineering company. We design, fabricate and install radial gates, vertical
          lift gates, flap gates and hoist systems for irrigation authorities, water
          resource departments and government dam projects across India — delivering
          precision hydraulic infrastructure that endures for generations.
        </p>

        {/* CTA arrow */}
        <div
          className="mt-7 flex justify-center"
          style={fade(0.52)}
        >
          <Link
            href="/about"
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#e85d3f] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#0e5c3d] hover:shadow-lg"
            aria-label="Learn more about Excel Engineering"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Static line art — bottom strip, no animation ─────────── */}
    </section>
  )
}
