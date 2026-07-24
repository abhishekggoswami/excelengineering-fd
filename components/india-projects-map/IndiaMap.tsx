'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import { X } from 'lucide-react'
import Link from 'next/link'
import { STATE_BY_NAME, REAL_PROJECTS, colorForState } from './data'
import type { RealProject } from './data'
import type { LatLngBounds } from './StateDetailMap'
import indiaTopology from '@/public/india-states.topo.json'

// Leaflet touches `window`, so load the detail map on the client only.
const StateDetailMap = dynamic(() => import('./StateDetailMap'), { ssr: false })

/** inset (px) used both for the outline clip and the Leaflet fit, so they align */
const FIT_PAD = 26

type MapFeature = {
  geometry: any
  properties: { st_nm?: string }
}

const mapProjection = geoMercator()
  .scale(1180)
  .center([82.5, 22.6])
  .translate([400, 430])

const topology = indiaTopology as unknown as { objects: { states: any } }
const baseStates = ((feature(topology as any, topology.objects.states) as any).features as MapFeature[]).map((state) => ({
  ...state,
  name: state.properties.st_nm ?? '',
  path: geoPath(mapProjection)(state as any) ?? '',
  bounds: geometryBounds(state.geometry),
}))

interface IndiaMapProps {
  /** live-hovered project pin ID (drives the panel preview) */
  hovered: string | null
  /** clicked state name (drives the zoom-into-outline detail map) */
  selected: string | null
  onHover: (name: string | null) => void
  onSelect: (name: string | null) => void
}

/** Compute [[south,west],[north,east]] from a GeoJSON Polygon/MultiPolygon. */
function geometryBounds(geometry: any): LatLngBounds {
  let minLat = Infinity
  let minLng = Infinity
  let maxLat = -Infinity
  let maxLng = -Infinity

  const scan = (coords: any) => {
    if (typeof coords[0] === 'number') {
      const [lng, lat] = coords
      if (lat < minLat) minLat = lat
      if (lat > maxLat) maxLat = lat
      if (lng < minLng) minLng = lng
      if (lng > maxLng) maxLng = lng
    } else {
      for (const c of coords) scan(c)
    }
  }
  scan(geometry.coordinates)
  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ]
}

export default function IndiaMap({ hovered, selected, onHover, onSelect }: IndiaMapProps) {
  const router = useRouter()
  const [activeProject, setActiveProject] = useState<RealProject | null>(null)
  const [pinPoint, setPinPoint] = useState<{ x: number; y: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 800, h: 860 })

  // Track the pixel size of the map box so the outline clip-path (generated in
  // CSS px) matches the container exactly.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => setSize({ w: el.offsetWidth, h: el.offsetHeight })
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Build the exact outline path for the selected state, fitted (with the same
  // inset as the Leaflet map) into the measured box. This clips the real map
  // to the state's true shape instead of a rectangle.
  const clip = useMemo(() => {
    if (!selected || !size) return null
    const state = baseStates.find((item) => item.name === selected)
    if (!state) return null
    const projection = geoMercator().fitExtent(
      [
        [FIT_PAD, FIT_PAD],
        [size.w - FIT_PAD, size.h - FIT_PAD],
      ],
      state as any,
    )
    return geoPath(projection)(state as any)
  }, [selected, size])

  const selectedState = selected ? baseStates.find((item) => item.name === selected) : null
  const selData = selected ? STATE_BY_NAME[selected] : null
  const selBounds = selectedState?.bounds ?? null
  const showOverlay = Boolean(selected && clip && selBounds)

  return (
    <div ref={containerRef} className="relative w-full">
      <>
          {/* ── India base map (blurs + dims when a state is opened) ────── */}
          <div
            className={`transition-all duration-500 ${
              selected ? 'scale-[0.99] opacity-40 blur-[5px]' : 'blur-0 opacity-100'
            }`}
          >
            <svg viewBox="0 0 800 860" className="block h-auto w-full" role="img" aria-label="India project map">
              {baseStates.map((state) => {
                const isHovered = hovered === state.name
                const dimmed = hovered !== null && !isHovered
                return (
                  <path
                    key={state.name}
                    d={state.path}
                    fill={isHovered ? '#e85d3f' : colorForState(state.name)}
                    stroke={isHovered ? '#c14a30' : '#fbfaf5'}
                    strokeWidth={isHovered ? 1.6 : 0.75}
                    opacity={dimmed ? 0.45 : 1}
                    filter={isHovered ? 'drop-shadow(0 6px 14px rgba(232,93,63,0.4))' : undefined}
                    role="button"
                    aria-label={`View projects in ${state.name}`}
                    tabIndex={0}
                    onMouseEnter={() => onHover(state.name)}
                    onMouseLeave={() => onHover(null)}
                    onClick={() => onSelect(state.name)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') onSelect(state.name)
                    }}
                    className="cursor-pointer transition-[fill,stroke,opacity,filter] duration-200"
                  />
                )
              })}

              {/* Real project site pins — one teardrop per confirmed project */}
              {REAL_PROJECTS.map((project) => {
                const [x, y] = mapProjection(project.coordinates) ?? [0, 0]
                const active = hovered === project.id
                const fill = active ? '#f5a623' : '#e85d3f'
                return (
                  <g
                    key={project.id}
                    transform={`translate(${x}, ${y})`}
                    className="cursor-pointer [pointer-events:all]"
                    onPointerEnter={() => onHover(project.id)}
                    onPointerLeave={() => onHover(null)}
                    onClick={() => router.push(project.link)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        router.push(project.link)
                      }
                    }}
                    role="link"
                    aria-label={`View ${project.title}`}
                    tabIndex={0}
                  >
                    <circle r={active ? 8 : 6} fill="none" stroke={fill} strokeWidth={1.2} opacity={0.5} />
                    <g transform="translate(-6,-17)">
                      <path d="M6 17C6 17 12 9.2 12 5.4C12 2.4 9.3 0 6 0C2.7 0 0 2.4 0 5.4C0 9.2 6 17 6 17Z" fill={fill} stroke="#ffffff" strokeWidth={1.4} />
                      <circle cx={6} cy={5.4} r={2.2} fill="#ffffff" />
                    </g>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* ── Zoomed detail map, clipped to the true state outline ────── */}
          {selBounds && (
            <div
              className={`absolute inset-0 z-20 transition-all duration-500 ${
                showOverlay
                  ? 'scale-100 opacity-100'
                  : 'pointer-events-none scale-95 opacity-0'
              }`}
            >
              {/* real map (roads · rail · cities) clipped to the outline shape */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: clip ? `path('${clip}')` : undefined,
                  WebkitClipPath: clip ? `path('${clip}')` : undefined,
                  filter: 'drop-shadow(0 24px 44px rgba(0,0,0,0.35))',
                }}
              >
                <StateDetailMap
                  bounds={selBounds}
                  projects={selData?.realProjects ?? REAL_PROJECTS}
                  padding={FIT_PAD}
                  onProjectClick={(p, pt) => {
                    if (activeProject?.id === p.id) {
                      setActiveProject(null)
                      setPinPoint(null)
                    } else {
                      setActiveProject(p)
                      setPinPoint(pt)
                    }
                  }}
                />
              </div>

              {/* Project info card — rendered OUTSIDE the clip-path div so it is never cropped.
                  Positioned above the clicked pin using Leaflet container coords, clamped to container. */}
              {activeProject && pinPoint && (
                <div
                  className="pointer-events-auto absolute z-[1400] w-64 rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
                  style={{
                    backdropFilter: 'blur(8px)',
                    // Anchor the bottom-center of the card 12px above the pin tip
                    left: Math.min(
                      Math.max(pinPoint.x - 128, 8),
                      Math.max((size?.w ?? 600) - 264, 8),
                    ),
                    top: Math.max(pinPoint.y - 210, 8),
                  }}
                >
                  {/* colour bar */}
                  <div
                    className="h-1.5 w-full rounded-t-2xl"
                    style={{ background: activeProject.status === 'Completed' ? '#0e5c3d' : '#e85d3f' }}
                  />
                  <div className="p-4">
                    {/* status badge */}
                    <span
                      className="mb-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        color: activeProject.status === 'Completed' ? '#0e5c3d' : '#e85d3f',
                        background: activeProject.status === 'Completed' ? '#e6f4ee' : '#fdf1ee',
                      }}
                    >
                      {activeProject.status}
                    </span>
                    <div className="mb-0.5 text-sm font-black text-[#1a1a1a]">{activeProject.title}</div>
                    <div className="mb-1 text-xs font-semibold text-[#555]">{activeProject.spec}</div>
                    <div className="mb-3 text-xs text-[#777]">{activeProject.location}</div>
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={activeProject.link}
                        className="rounded-lg px-3 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
                        style={{ background: activeProject.status === 'Completed' ? '#0e5c3d' : '#e85d3f' }}
                      >
                        View Project →
                      </Link>
                      <button
                        type="button"
                        onClick={() => setActiveProject(null)}
                        className="rounded-lg border border-black/10 px-3 py-1.5 text-xs font-semibold text-[#555] transition-colors hover:bg-black/5"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* crisp coral outline tracing the same shape — kept below popup pane */}
              {clip && size && (
                <svg
                  className="pointer-events-none absolute inset-0"
                  style={{ zIndex: 10 }}
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${size.w} ${size.h}`}
                  preserveAspectRatio="none"
                >
                  <path d={clip} fill="none" stroke="#e85d3f" strokeWidth={2.5} strokeLinejoin="round" />
                </svg>
              )}

              {/* header chip */}
              <div className="pointer-events-none absolute left-3 top-3 z-[1200] flex max-w-[calc(100%-6rem)] items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-md backdrop-blur sm:left-4 sm:top-4 sm:px-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e85d3f]/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e85d3f]" />
                </span>
                <span className="text-sm font-black uppercase tracking-wide text-[#1a1a1a]">
                  {selected}
                </span>
                <span className="hidden text-[11px] font-semibold text-[#1a1a1a]/45 sm:inline">
                  Road &amp; Rail Network
                </span>
              </div>

              {/* close / zoom-out button */}
              <button
                type="button"
                onClick={() => { onSelect(null); setActiveProject(null); setPinPoint(null) }}
                aria-label="Zoom back out to India"
                className="absolute right-3 top-3 z-[1200] flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 sm:right-4 sm:top-4 sm:px-3.5"
              >
                <X className="h-3.5 w-3.5" />
                Back to India
              </button>
            </div>
          )}
      </>
    </div>
  )
}
