'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function CraneHeroSlideshow() {
  return (
    <section className="relative flex min-h-[52svh] items-center overflow-hidden bg-[#111111]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Excel Engineering crane operations in progress"
      >
        <source src="/videos/crane-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,11,.86)_0%,rgba(5,12,11,.6)_45%,rgba(5,12,11,.22)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07100e]/90 via-transparent to-black/20" />
      <div aria-hidden className="dam-hero-orb absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#f5a623]/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 md:px-12 lg:px-20 lg:py-32">
        <Link
          href="/#services"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#e85d3f]" />
          <span className="text-sm font-semibold uppercase tracking-widest text-[#f5a623]">Excel Engineering</span>
        </div>

        <h1 className="max-w-4xl text-balance font-black leading-none text-white" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)' }}>
          Crane <span className="text-[#f5a623]">Services</span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          Heavy-lift crane solutions for infrastructure, industrial, and construction projects — a large, certified fleet operated by experienced professionals.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#e85d3f] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#d14f33] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 z-10 hidden items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/70 backdrop-blur-md sm:flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#f5a623]" />
        Live crane footage
      </div>
    </section>
  )
}
