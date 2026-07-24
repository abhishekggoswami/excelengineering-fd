'use client'

import { MapPin, ArrowUpRight, MousePointerClick } from 'lucide-react'
import Link from 'next/link'
import { REAL_PROJECTS, MAP_STATS, STATE_BY_NAME, STATE_PROJECTS, type RealProject, type StateProjectData } from './data'

interface StateDetailPanelProps {
  /** Currently hovered/selected project ID, or null */
  activeName: string | null
  /** State opened from the India map, or null */
  selectedState: string | null
  onStateSelect: (name: string) => void
}

const STATUS_STYLES: Record<string, string> = {
  Completed: 'bg-[#0e5c3d]/10 text-[#0e5c3d]',
  Ongoing:   'bg-[#e85d3f]/12 text-[#c14a30]',
}

function ProjectView({ data }: { data: RealProject }) {
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  )
}

function StateView({ data }: { data: StateProjectData }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[#e85d3f]">
          <MapPin className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-widest">State projects</span>
        </div>
        <span className="rounded-full bg-[#fdf1ee] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#c14a30]">
          {data.projects} project{data.projects === 1 ? '' : 's'}
        </span>
      </div>
      <div>
        <h3 className="text-2xl font-black leading-tight text-[#1a1a1a]">{data.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/60">{data.description}</p>
      </div>
      <div className="flex flex-col gap-2">
        {data.realProjects.map((project) => (
          <Link key={project.id} href={project.link} className="group flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-[#f7f4ec] px-3.5 py-3 transition-colors hover:border-[#e85d3f]/30 hover:bg-[#fdf1ee]">
            <span className="min-w-0 truncate text-xs font-bold text-[#1a1a1a]">{project.title}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#e85d3f] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ))}
      </div>
    </div>
  )
}

function EmptyStateView({ stateName }: { stateName: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-[#e85d3f]">
        <MapPin className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-widest">State map</span>
      </div>
      <div>
        <h3 className="text-2xl font-black leading-tight text-[#1a1a1a]">{stateName}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/60">
          Road, city, and rail context is available for this state. No Excel Engineering project pin has been recorded here yet.
        </p>
      </div>
      <div className="rounded-xl border border-dashed border-black/10 bg-[#f7f4ec] px-4 py-3 text-xs font-semibold text-[#1a1a1a]/55">
        Select another state or return to India to explore project locations.
      </div>
    </div>
  )
}

function DefaultView({ onStateSelect }: Pick<StateDetailPanelProps, 'onStateSelect'>) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[#e85d3f]">
        <MousePointerClick className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-widest">Interactive Map</span>
      </div>
      <h3 className="mt-2 text-2xl font-black leading-tight text-[#1a1a1a]">
        Hover a pin to see project details
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]/60">
        Each pin marks a real Excel Engineering project site across India.
        Hover to preview — click to open the full project page.
      </p>

      <div className="mt-5">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/45">Projects by state</p>
        <div className="grid grid-cols-2 gap-2">
          {STATE_PROJECTS.map((state) => (
            <Link
              key={state.id}
              href={`/?state=${encodeURIComponent(state.name)}#map`}
              onClick={(event) => {
                event.preventDefault()
                onStateSelect(state.name)
              }}
              className="flex items-center justify-between gap-2 rounded-xl border border-black/5 bg-[#f7f4ec] px-3 py-2.5 text-left transition-colors hover:border-[#e85d3f]/35 hover:bg-[#fdf1ee]"
            >
              <span className="truncate text-xs font-semibold text-[#1a1a1a]">{state.name}</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[10px] font-black text-[#e85d3f]">{state.projects}</span>
            </Link>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link href="/projects/ongoing" className="rounded-xl border border-[#e85d3f]/20 bg-[#fdf1ee] px-3 py-2 text-center text-[11px] font-bold text-[#c14a30] transition-colors hover:bg-[#e85d3f]/10">Ongoing work</Link>
          <Link href="/projects/completed" className="rounded-xl border border-[#0e5c3d]/20 bg-[#e6f4ee] px-3 py-2 text-center text-[11px] font-bold text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d]/10">Completed work</Link>
        </div>
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
    </div>
  )
}

export default function StateDetailPanel({ activeName, selectedState, onStateSelect }: StateDetailPanelProps) {
  const project = activeName ? REAL_PROJECTS.find((p) => p.id === activeName) ?? null : null
  const state = selectedState ? STATE_BY_NAME[selectedState] ?? null : null

  return (
    <div data-map-panel aria-live="polite" className="relative min-h-0 overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] sm:p-6 xl:min-h-[420px] xl:p-7">
      {/* coral accent corner */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#e85d3f]/10 blur-2xl" />
      {project ? <ProjectView data={project} /> : state ? <StateView data={state} /> : selectedState ? <EmptyStateView stateName={selectedState} /> : <DefaultView onStateSelect={onStateSelect} />}
    </div>
  )
}
