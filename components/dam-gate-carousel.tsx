'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type GateType = {
  name: string
  desc: string
  video?: string
  videoLabel?: string
}

const AUTO_ADVANCE_MS = 6200

const CARDS_PER_PAGE = 3

export default function DamGateCarousel({ types, initialPage = 0 }: { types: GateType[]; initialPage?: number }) {
  const reduceMotion = useReducedMotion()

  const pages = useMemo(() => {
    const result: GateType[][] = []
    for (let index = 0; index < types.length; index += CARDS_PER_PAGE) result.push(types.slice(index, index + CARDS_PER_PAGE))
    return result
  }, [types])

  const safeInitialPage = Math.min(Math.max(initialPage, 0), Math.max(0, pages.length - 1))
  const [page, setPage] = useState(safeInitialPage)

  useEffect(() => setPage(safeInitialPage), [safeInitialPage])

  useEffect(() => {
    if (reduceMotion || pages.length < 2) return
    const timer = window.setInterval(() => setPage((current) => (current + 1) % pages.length), AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [pages.length, reduceMotion])

  const pageItems = pages[page] ?? []
  const pageHref = (target: number) => `/services/dam-construction?gatePage=${target + 1}#gate-types`

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`gates-${page}`}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -36 }}
          transition={{ duration: reduceMotion ? 0.18 : 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pageItems.map((type, index) => {
            const itemNumber = page * CARDS_PER_PAGE + index + 1
            return (
              <article
                key={type.name}
                className="group relative flex min-h-full flex-col gap-5 overflow-hidden rounded-3xl border border-[#dfe4e2] bg-[#fbfcfb] p-4 shadow-[0_20px_42px_-38px_rgba(14,92,61,.8)] transition-all duration-500 hover:-translate-y-1 hover:border-[#e85d3f]/50 hover:shadow-[0_26px_48px_-32px_rgba(232,93,63,.45)]"
              >
                <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-[#e85d3f] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between gap-3 px-2 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#111111] shadow-lg"><Layers className="h-5 w-5 text-[#f5a623]" /></div>
                    <h3 className="text-sm font-extrabold leading-snug text-[#1a1a1a]">{type.name}</h3>
                  </div>
                  <span className="rounded-full border border-[#0e5c3d]/10 bg-white px-2.5 py-1 text-[10px] font-bold tracking-widest text-[#0e5c3d]">{String(itemNumber).padStart(2, '0')}</span>
                </div>
                <p className="min-h-[4.5rem] px-2 text-sm leading-relaxed text-[#6b7280]">{type.desc}</p>
                {type.video ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#111111]">
                    <video autoPlay muted loop playsInline preload="metadata" aria-label={`Video of ${type.name.toLowerCase()} works`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105">
                      <source src={type.video} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100e]/70 via-transparent to-transparent" />
                    <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">{type.videoLabel ?? 'Site footage'}</span>
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#d1c5a8] bg-[radial-gradient(circle_at_center,rgba(245,166,35,.15),transparent_60%),#f5efe0]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e85d3f]/15"><Layers className="h-5 w-5 text-[#e85d3f]" /></div>
                    <span className="text-xs font-semibold text-[#9ca3af]">Project imagery in progress</span>
                  </div>
                )}
              </article>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {pages.length > 1 && <div className="mt-7 flex flex-col gap-4 border-t border-[#e5e7eb] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2" aria-label="Gate type pagination">
          {pages.map((_, index) => (
            <Link key={index} href={pageHref(index)} aria-label={`Show gate type page ${index + 1}`} aria-current={page === index ? 'page' : undefined} className={`h-2.5 rounded-full transition-all duration-500 ${page === index ? 'w-9 bg-[#e85d3f]' : 'w-2.5 bg-[#0e5c3d]/25 hover:bg-[#0e5c3d]/50'}`} />
          ))}
          <span className="ml-2 text-xs font-bold uppercase tracking-widest text-[#6b7280]">Page {page + 1} of {pages.length}</span>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Link href={pageHref((page - 1 + pages.length) % pages.length)} aria-label="Previous gate types" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0e5c3d]/15 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white"><ArrowLeft className="h-4 w-4" /></Link>
          <Link href={pageHref((page + 1) % pages.length)} aria-label="Next gate types" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e5c3d] text-white transition-transform hover:scale-105"><ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>}
    </div>
  )
}
