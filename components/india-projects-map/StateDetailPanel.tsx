'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, ArrowUpRight, MousePointerClick, CheckCircle2, Construction } from 'lucide-react'
import Link from 'next/link'
import { REAL_PROJECTS, MAP_STATS, type RealProject } from './data'

interface StateDetailPanelProps {
  /** Currently hovered/selected project ID, or null */
  activeName: string | null
}

const STATUS_STYLES: Record<string, string> = {
  Completed: 'bg-[#0e5c3d]/10 text-[#0e5c3d]',
  Ongoing:   'bg-[#e85d3f]/12 text-[#c14a30]',
}

function ProjectView({ data }: { data: RealProject }) {
  return (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4"
    >
      {/* Status + active label */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#e85d3f]">
          <MapPin className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-widest">Project Site</span>
        </div>
        <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${STATUS_STYLES[data.status]}`}>
          {data.status}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-xl font-black leading-tight text-[#1a1a1a] text-balance">
          {data.title}
        </h3>
        <p className="mt-1 text-sm font-bold text-[#e85d3f]">{data.spec}</p>
      </div>

      {/* Location */}
      <div className="flex items-start gap-2 rounded-xl bg-[#f7f4ec] px-4 py-3 border border-black/5">
        <MapPin className="h-3.5 w-3.5 text-[#1a1a1a]/40 flex-shrink-0 mt-0.5" />
        <span className="text-xs font-medium leading-snug text-[#1a1a1a]/70">{data.location}</span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[#1a1a1a]/65">{data.description}</p>

      {/* CTA */}
      <Link
        href={data.link}
        className="group mt-2 inline-flex items-center gap-2 rounded-full bg-[#e85d3f] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#c14a30]"
      >
        {data.status === 'Completed' ? 'View Completed Project' : 'View Ongoing Project'}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  )
}

function DefaultView() {
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-2 text-[#e85d3f]">
        <MousePointerClick className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-widest">Interactive Map</span>
      </div>
      <h3 className="mt-2 text-2xl font-black leading-tight text-[#1a1a1a]">
        Hover a pin to see project details
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]/60">
        Each pin marks a real Excel Engineering project site in Madhya Pradesh.
        Hover to preview — click to open the full project page.
      </p>

      {/* Quick project list */}
      <div className="mt-5 flex flex-col gap-2">
        {REAL_PROJECTS.map((p) => (
          <Link
            key={p.id}
            href={p.link}
            className="group flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-[#f7f4ec] px-4 py-3 hover:border-[#e85d3f]/30 hover:bg-[#e85d3f]/5 transition-all duration-200"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className={`flex-shrink-0 w-2 h-2 rounded-full ${p.status === 'Ongoing' ? 'bg-[#e85d3f]' : 'bg-[#0e5c3d]'}`} />
              <span className="text-xs font-semibold text-[#1a1a1a] truncate leading-snug">{p.title}</span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#1a1a1a]/30 flex-shrink-0 group-hover:text-[#e85d3f] transition-colors" />
          </Link>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {MAP_STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-black/5 bg-[#f7f4ec] p-3.5">
            <p className="text-2xl font-black text-[#e85d3f]">{s.value}</p>
            <p className="mt-0.5 text-[11px] font-medium leading-tight text-[#1a1a1a]/55">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function StateDetailPanel({ activeName }: StateDetailPanelProps) {
  const project = activeName ? REAL_PROJECTS.find((p) => p.id === activeName) ?? null : null

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] sm:p-7">
      {/* coral accent corner */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#e85d3f]/10 blur-2xl" />
      <AnimatePresence mode="wait">
        {project ? (
          <ProjectView data={project} />
        ) : (
          <DefaultView />
        )}
      </AnimatePresence>
    </div>
  )
}
