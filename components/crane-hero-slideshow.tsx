'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CraneHeroSlideshow() {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-[#111111] md:min-h-[68svh]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/crane-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-[#111111]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12 lg:px-20">
        <Link
          href="/#services"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#e85d3f]" />
          <span className="text-sm font-semibold uppercase tracking-widest text-[#f5a623]">
            Excel Engineering
          </span>
        </div>

        <h1
          className="mb-4 text-balance font-black leading-none text-white"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
        >
          Crane Services
        </h1>
        <p className="mb-8 max-w-xl text-pretty text-lg text-white/80">
          Heavy-lift crane solutions for infrastructure, industrial, and construction projects — a
          large, certified fleet operated by experienced professionals.
        </p>

        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#f5a623]" />
          <span className="text-sm font-medium tracking-wide text-white/85">
            Live crane operations footage
          </span>
        </div>
      </div>
    </section>
  )
}
