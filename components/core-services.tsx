'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Truck, Waves, Wrench } from 'lucide-react'

const services = [
  {
    id: 'dam-construction',
    title: 'Dam Construction Works',
    eyebrow: 'Water infrastructure',
    description: 'Large-scale water infrastructure including gravity dams, earthfill, rockfill, arch, and embankment dams. Complete barrage and reservoir development.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-vDk0SgEU8sG0csGgfMHAASh7q40PYt.png',
    href: '/services/dam-construction',
    icon: Waves,
    stat: '120+',
    statLabel: 'Dam Projects',
    tags: ['Gravity Dams', 'Earthfill', 'Hydroelectric', 'Barrages'],
  },
  {
    id: 'fabrication',
    title: 'Fabrication Works',
    eyebrow: 'Industrial engineering',
    description: 'Structural steel fabrication, heavy industrial structures, pipe and tank fabrication, bridge components, and precision welding & assembly services.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-12-rrOAforN7b9pXIVoDeQmbJ9sPy4azf.png',
    href: '/services/fabrication',
    icon: Wrench,
    stat: '200+',
    statLabel: 'Fabrication Projects',
    tags: ['Structural Steel', 'Pipe Fabrication', 'Tank Fabrication', 'Welding'],
  },
  {
    id: 'crane-services',
    title: 'Crane Services',
    eyebrow: 'Heavy lifting solutions',
    description: 'Fleet of mobile, hydraulic, crawler, and all-terrain cranes for heavy lifting, infrastructure projects, and industrial equipment solutions.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-2-TSBXOdBe9IDnCBqgSTeNBucgSBq9JW.png',
    href: '/services/crane-services',
    icon: Truck,
    stat: '50+',
    statLabel: 'Crane Fleet',
    tags: ['Mobile Cranes', 'Crawler Cranes', 'All Terrain', 'Heavy Lift'],
  },
]

const AUTO_ADVANCE_MS = 6500

export default function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const reduceMotion = useReducedMotion()
  const activeService = services[activeIndex]
  const Icon = activeService.icon

  const goTo = (index: number) => setActiveIndex((index + services.length) % services.length)
  const goNext = () => goTo(activeIndex + 1)

  useEffect(() => {
    if (!isPlaying || reduceMotion) return
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % services.length)
    }, AUTO_ADVANCE_MS)
    return () => window.clearInterval(interval)
  }, [isPlaying, reduceMotion])

  return (
    <section id="services" className="overflow-hidden bg-[#f5efe0] px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#e85d3f]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#e85d3f]">Core Service Divisions</span>
            </div>
            <h2 className="text-balance font-black leading-none text-[#1a1a1a]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              What We Build &amp;<br />
              <span className="text-[#0e5c3d]">How We Deliver</span>
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-relaxed text-[#6b7280]">Three major engineering divisions powering large-scale infrastructure across India for over 25 years.</p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={activeService.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 70, scale: 0.985, rotate: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -70, scale: 0.985, rotate: -0.5 }}
              transition={{ duration: reduceMotion ? 0.18 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative isolate min-h-[560px] overflow-hidden rounded-[2rem] bg-[#111111] shadow-[0_30px_80px_-35px_rgba(14,92,61,0.6)] sm:min-h-[580px] lg:min-h-[600px]"
            >
              <motion.div
                key={`${activeService.id}-image`}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.14 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0.2 : 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={activeService.image} alt={activeService.title} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-center" />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,18,16,.93)_0%,rgba(11,18,16,.57)_48%,rgba(11,18,16,.12)_100%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-[#111111]/15" />
              <motion.div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f5a623]/20 blur-3xl" animate={reduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.28, 0.55, 0.28] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />

              <div className="absolute left-5 right-5 top-5 z-10 flex items-start justify-between gap-4 sm:left-8 sm:right-8 sm:top-8">
                <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3 py-2.5 backdrop-blur-md sm:px-4">
                  <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  <span className="hidden text-xs font-bold uppercase tracking-widest text-white/80 sm:inline">{activeService.eyebrow}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="text-right">
                  <div className="font-black leading-none text-[#f5a623]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>{activeService.stat}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">{activeService.statLabel}</div>
                </motion.div>
              </div>

              <div className="relative z-10 flex min-h-[560px] flex-col justify-end p-5 sm:min-h-[580px] sm:p-8 lg:min-h-[600px] lg:p-12">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.55 }} className="max-w-2xl">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {activeService.tags.map((tag, index) => (
                      <motion.span key={tag} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 + index * 0.06 }} className="rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm sm:text-xs">{tag}</motion.span>
                    ))}
                  </div>
                  <h3 className="max-w-xl text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{activeService.title}</h3>
                  <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">{activeService.description}</p>
                  <Link href={activeService.href} className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#e85d3f] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#f5a623] hover:pr-6 sm:mt-7 sm:px-6 sm:py-3.5">
                    Explore this service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2" aria-label="Service carousel navigation">
              {services.map((service, index) => (
                <button key={service.id} type="button" onClick={() => goTo(index)} aria-label={`Show ${service.title}`} aria-current={index === activeIndex ? 'true' : undefined} className={`h-2.5 rounded-full transition-all duration-500 ${index === activeIndex ? 'w-10 bg-[#e85d3f]' : 'w-2.5 bg-[#0e5c3d]/25 hover:bg-[#0e5c3d]/50'}`} />
              ))}
              <span className="ml-2 text-xs font-semibold text-[#1a1a1a]/45">0{activeIndex + 1} / 0{services.length}</span>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0e5c3d]/15 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white">{isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button>
              <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous service" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0e5c3d]/15 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white"><ArrowLeft className="h-4 w-4" /></button>
              <button type="button" onClick={goNext} aria-label="Next service" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e5c3d] text-white transition-transform hover:scale-105"><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#0e5c3d] px-6 py-7 sm:px-8 sm:py-8 md:flex-row">
          <div>
            <p className="text-xl font-extrabold text-white">Let&apos;s make something great work together.</p>
            <p className="mt-1 text-sm text-white/60">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
          </div>
          <Link href="#contact" className="flex flex-shrink-0 items-center gap-2 rounded-full bg-[#e85d3f] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d14f33]">
            <ArrowUpRight className="h-4 w-4" />Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
