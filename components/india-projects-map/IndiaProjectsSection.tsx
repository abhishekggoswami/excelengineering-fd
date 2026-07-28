'use client'

import { useEffect, useState } from 'react'
import IndiaMap from './IndiaMap'
import StateDetailPanel from './StateDetailPanel'
import { MAP_STATS, STATE_BY_NAME } from './data'

export default function IndiaProjectsSection({
  initialState = null,
  initialProjectId = null,
}: {
  initialState?: string | null
  initialProjectId?: string | null
}) {
  // `hovered` tracks which real project pin is currently under the cursor.
  // Navigation on click is handled inside IndiaMap via router.push — panel
  // just shows a preview of the hovered project.
  const [hovered, setHovered] = useState<string | null>(initialProjectId)
  const [selected, setSelected] = useState<string | null>(initialState)

  useEffect(() => setSelected(initialState), [initialState])
  useEffect(() => setHovered(initialProjectId), [initialProjectId])

  function handleSelect(name: string | null) {
    setSelected((cur) => (cur === name ? null : name))
  }

  const selectedData = selected ? STATE_BY_NAME[selected] ?? null : null

  return (
    <section id="map" className="relative scroll-mt-20 overflow-hidden bg-white py-16 [overflow-anchor:none] sm:py-20 md:py-24">
      <video
        aria-hidden="true"
        autoPlay
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/map-section-background.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-[#062f3a]/20" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,18,23,0.56)_0%,rgba(3,18,23,0.56)_20%,rgba(3,18,23,0)_35%,rgba(3,18,23,0)_100%)]" />

      {/* subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14,92,61,0.06) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 md:px-10 lg:px-12">
        {/* Heading — secondary, blurs on zoom */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#ff6b45]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#ff6b45] [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
              Our Presence Across India
            </span>
            <div className="h-px w-10 bg-[#ff6b45]" />
          </div>
          <h2 className="text-balance text-4xl font-black leading-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            Building India, One Project at a Time
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base font-semibold leading-relaxed text-white/95 [text-shadow:0_1px_5px_rgba(0,0,0,0.65)] sm:text-lg">
            Click any state to open its live road &amp; rail network — shaped to the state
            itself — and see the work Excel Engineering has delivered there.
          </p>
        </div>

        {/* Body: BIG map (main) + compact detail panel (active block, stays sharp) */}
        <div className="mt-10 grid items-start gap-7 xl:mt-12 xl:grid-cols-[220px_minmax(0,1fr)_310px] xl:gap-7">
          {/* Map — main, large */}
          {selected ? (
            <aside className="order-1 px-1 py-4 sm:px-2 xl:self-end xl:pb-20">
              <div className="h-px w-10 bg-[#ff6b45]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#ff6b45] [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">State project network</p>
              <h3 className="mt-3 break-words text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white [text-shadow:0_2px_7px_rgba(0,0,0,0.55)]">
                {selected}
              </h3>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                {selectedData?.description ?? 'Explore the state outline, key cities and Excel Engineering project locations.'}
              </p>
              {selectedData && (
                <div className="mt-6 text-[10px] font-black uppercase tracking-[0.16em] text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]">
                  <p>
                    <span className="text-xl text-white">{selectedData.projects}</span>
                    <span className="ml-2">Recorded project {selectedData.projects === 1 ? 'site' : 'sites'}</span>
                  </p>
                  <p className="mt-2 leading-relaxed">{selectedData.types.join(' · ')}</p>
                </div>
              )}
              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff6b45] [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">Explore details ↗</p>
            </aside>
          ) : (
            <aside className="order-1 px-1 py-4 sm:px-2 xl:self-end xl:pb-20">
              <div className="h-px w-10 bg-[#ff6b45]" />
              <div className="mt-5 flex items-center gap-2">
                <span
                  aria-label="Flag of India"
                  className="relative inline-flex h-4 w-6 shrink-0 overflow-hidden rounded-[2px] border border-black/10 shadow-sm"
                  role="img"
                >
                  <span className="absolute inset-x-0 top-0 h-1/3 bg-[#ff9933]" />
                  <span className="absolute inset-x-0 top-1/3 h-1/3 bg-white" />
                  <span className="absolute inset-x-0 bottom-0 h-1/3 bg-[#138808]" />
                  <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1a4c9a]" />
                </span>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff6b45] [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
                  National project network
                </p>
              </div>
              <h3 className="mt-3 text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white [text-shadow:0_2px_7px_rgba(0,0,0,0.55)]">
                India
              </h3>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                Excel Engineering delivers dam, fabrication, crane and hydro-mechanical
                infrastructure across India.
              </p>
              <div className="mt-6 text-[10px] font-black uppercase tracking-[0.16em] text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]">
                <p>
                  <span className="text-xl text-white">{MAP_STATS[0].value}</span>
                  <span className="ml-2">Recorded project sites</span>
                </p>
                <p className="mt-2 leading-relaxed">
                  Dam construction · fabrication · crane services
                </p>
              </div>
              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff6b45] [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
                Select a state ↗
              </p>
            </aside>
          )}

          <div className="order-2 mx-auto w-full max-w-[820px] xl:max-w-none">
            <IndiaMap
              hovered={hovered}
              selected={selected}
              initialProjectId={initialProjectId}
              onHover={setHovered}
              onSelect={handleSelect}
            />
          </div>

          {/* Dynamic detail panel — the active region block, always sharp */}
          <div className="order-3 z-30 w-full xl:sticky xl:top-24">
            <StateDetailPanel
              activeName={hovered}
              selectedState={selected}
              onStateSelect={handleSelect}
            />
          </div>
        </div>

        {/* Secondary strip: stats + legend — blurs on zoom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/35 pt-7 sm:mt-12 sm:pt-8 md:flex-row">
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-4 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-x-8">
            {MAP_STATS.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white [text-shadow:0_1px_5px_rgba(0,0,0,0.6)]">{s.value}</span>
                <span className="text-sm font-semibold leading-tight text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b45]/60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ff6b45]" />
              </span>
              <span className="text-sm font-semibold text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]">Active project</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border border-white bg-[#4E9E82]" />
              <span className="text-sm font-semibold text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]">Region we serve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
