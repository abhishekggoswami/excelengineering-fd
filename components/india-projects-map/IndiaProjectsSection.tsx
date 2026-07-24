'use client'

import { useState } from 'react'
import IndiaMap from './IndiaMap'
import StateDetailPanel from './StateDetailPanel'
import { MAP_STATS } from './data'

export default function IndiaProjectsSection() {
  // `hovered` tracks which real project pin is currently under the cursor.
  // Navigation on click is handled inside IndiaMap via router.push — panel
  // just shows a preview of the hovered project.
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  function handleSelect(name: string | null) {
    setSelected((cur) => (cur === name ? null : name))
  }

  return (
    <section id="map" className="relative scroll-mt-20 overflow-hidden bg-[#f7f4ec] py-16 sm:py-20 md:py-24">
      {/* subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14,92,61,0.06) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Heading — secondary, blurs on zoom */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#e85d3f]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e85d3f]">
              Our Presence Across India
            </span>
            <div className="h-px w-8 bg-[#e85d3f]" />
          </div>
          <h2 className="text-balance text-3xl font-black leading-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
            Building India, One Project at a Time
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-[#1a1a1a]/60">
            Click any state to open its live road &amp; rail network — shaped to the state
            itself — and see the work Excel Engineering has delivered there.
          </p>
        </div>

        {/* Body: BIG map (main) + compact detail panel (active block, stays sharp) */}
        <div className="mt-10 grid items-start gap-7 xl:mt-12 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-10">
          {/* Map — main, large */}
          <div className="order-1 mx-auto w-full max-w-[820px] xl:max-w-none">
            <IndiaMap
              hovered={hovered}
              selected={selected}
              onHover={setHovered}
              onSelect={handleSelect}
            />
          </div>

          {/* Dynamic detail panel — the active region block, always sharp */}
          <div className="order-2 z-30 w-full xl:sticky xl:top-24">
            <StateDetailPanel
              activeName={hovered}
              selectedState={selected}
              onStateSelect={handleSelect}
            />
          </div>
        </div>

        {/* Secondary strip: stats + legend — blurs on zoom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-black/10 pt-7 sm:mt-12 sm:pt-8 md:flex-row">
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-4 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-x-8">
            {MAP_STATS.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#0e5c3d]">{s.value}</span>
                <span className="text-xs font-medium leading-tight text-[#1a1a1a]/55">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e85d3f]/60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#e85d3f]" />
              </span>
              <span className="text-xs font-medium text-[#1a1a1a]/60">Active project</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border border-white bg-[#4E9E82]" />
              <span className="text-xs font-medium text-[#1a1a1a]/60">Region we serve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
