'use client'

import { useEffect, useRef, useState } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import { X } from 'lucide-react'
import Link from 'next/link'
import { STATE_BY_NAME, REAL_PROJECTS, colorForState } from './data'
import type { RealProject } from './data'
import indiaTopology from '@/public/india-states.topo.json'

type MapFeature = {
  geometry: any
  properties: { st_nm?: string }
}

type LatLngBounds = [[number, number], [number, number]]

const FIT_PAD = 26

type MapCity = {
  name: string
  coordinates: [number, number]
  labelOffset?: [number, number]
  priority?: 'primary' | 'secondary'
}

type RoadLink = {
  from: string
  to: string
  hierarchy: 'primary' | 'secondary'
  bend?: number
}

const STATE_CITY_LABELS: Record<string, MapCity[]> = {
  'Madhya Pradesh': [
    { name: 'Bhopal', coordinates: [77.41, 23.26], labelOffset: [7, -7] },
    { name: 'Indore', coordinates: [75.86, 22.72], labelOffset: [7, -6] },
    { name: 'Gwalior', coordinates: [78.18, 26.22], labelOffset: [7, -7] },
    { name: 'Jabalpur', coordinates: [79.95, 23.18], labelOffset: [8, 14] },
    { name: 'Sagar', coordinates: [78.74, 23.84], labelOffset: [7, 15], priority: 'secondary' },
    { name: 'Satna', coordinates: [80.83, 24.58], labelOffset: [7, -7] },
    { name: 'Dhar', coordinates: [75.30, 22.60], labelOffset: [7, -7], priority: 'secondary' },
    { name: 'Datia', coordinates: [78.46, 25.67], labelOffset: [7, -6], priority: 'secondary' },
  ],
  Rajasthan: [
    { name: 'Jaipur', coordinates: [75.79, 26.91] },
    { name: 'Jaisalmer', coordinates: [70.92, 26.92] },
    { name: 'Jodhpur', coordinates: [73.02, 26.24] },
    { name: 'Udaipur', coordinates: [73.68, 24.59] },
    { name: 'Kota', coordinates: [75.86, 25.18] },
  ],
  Odisha: [
    { name: 'Bhubaneswar', coordinates: [85.82, 20.30] },
    { name: 'Khordha', coordinates: [85.62, 20.18] },
    { name: 'Cuttack', coordinates: [85.88, 20.46] },
    { name: 'Sambalpur', coordinates: [83.97, 21.47] },
  ],
  Gujarat: [
    { name: 'Ahmedabad', coordinates: [72.57, 23.02] },
    { name: 'Gandhinagar', coordinates: [72.64, 23.22] },
    { name: 'Vadodara', coordinates: [73.18, 22.31] },
    { name: 'Rajkot', coordinates: [70.80, 22.30] },
    { name: 'Surat', coordinates: [72.83, 21.17] },
  ],
  Maharashtra: [
    { name: 'Mumbai', coordinates: [72.88, 19.08] },
    { name: 'Pune', coordinates: [73.86, 18.52] },
    { name: 'Nagpur', coordinates: [79.09, 21.15] },
    { name: 'Bhandara', coordinates: [79.65, 21.17] },
    { name: 'Nashik', coordinates: [73.79, 19.99] },
  ],
}

const STATE_ROAD_LINKS: Record<string, RoadLink[]> = {
  'Madhya Pradesh': [
    { from: 'Dhar', to: 'Indore', hierarchy: 'secondary', bend: -0.03 },
    { from: 'Indore', to: 'Bhopal', hierarchy: 'primary', bend: 0.06 },
    { from: 'Bhopal', to: 'Sagar', hierarchy: 'primary', bend: -0.05 },
    { from: 'Sagar', to: 'Jabalpur', hierarchy: 'primary', bend: 0.04 },
    { from: 'Jabalpur', to: 'Satna', hierarchy: 'primary', bend: -0.04 },
    { from: 'Gwalior', to: 'Datia', hierarchy: 'secondary', bend: 0.03 },
    { from: 'Datia', to: 'Sagar', hierarchy: 'secondary', bend: -0.07 },
    { from: 'Bhopal', to: 'Gwalior', hierarchy: 'primary', bend: 0.1 },
    { from: 'Sagar', to: 'Satna', hierarchy: 'secondary', bend: 0.05 },
  ],
  Rajasthan: [
    { from: 'Jaisalmer', to: 'Jodhpur', hierarchy: 'primary', bend: 0.05 },
    { from: 'Jodhpur', to: 'Jaipur', hierarchy: 'primary', bend: -0.06 },
    { from: 'Jaipur', to: 'Kota', hierarchy: 'primary', bend: 0.04 },
    { from: 'Jodhpur', to: 'Udaipur', hierarchy: 'secondary', bend: 0.05 },
    { from: 'Udaipur', to: 'Kota', hierarchy: 'secondary', bend: -0.04 },
  ],
  Odisha: [
    { from: 'Sambalpur', to: 'Cuttack', hierarchy: 'primary', bend: -0.06 },
    { from: 'Cuttack', to: 'Bhubaneswar', hierarchy: 'primary', bend: 0.02 },
    { from: 'Bhubaneswar', to: 'Khordha', hierarchy: 'secondary', bend: -0.02 },
  ],
  Gujarat: [
    { from: 'Rajkot', to: 'Ahmedabad', hierarchy: 'primary', bend: 0.06 },
    { from: 'Ahmedabad', to: 'Gandhinagar', hierarchy: 'secondary', bend: -0.02 },
    { from: 'Ahmedabad', to: 'Vadodara', hierarchy: 'primary', bend: -0.04 },
    { from: 'Vadodara', to: 'Surat', hierarchy: 'primary', bend: 0.03 },
  ],
  Maharashtra: [
    { from: 'Mumbai', to: 'Pune', hierarchy: 'primary', bend: -0.04 },
    { from: 'Mumbai', to: 'Nashik', hierarchy: 'primary', bend: 0.05 },
    { from: 'Nashik', to: 'Nagpur', hierarchy: 'primary', bend: -0.08 },
    { from: 'Pune', to: 'Nagpur', hierarchy: 'secondary', bend: 0.09 },
    { from: 'Nagpur', to: 'Bhandara', hierarchy: 'secondary', bend: -0.02 },
  ],
}

function curvedRoadPath(a: [number, number], b: [number, number], bend = 0.05) {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const distance = Math.hypot(dx, dy) || 1
  const offsetX = (-dy / distance) * distance * bend
  const offsetY = (dx / distance) * distance * bend
  const controlX = (a[0] + b[0]) / 2 + offsetX
  const controlY = (a[1] + b[1]) / 2 + offsetY
  return `M ${a[0]} ${a[1]} Q ${controlX} ${controlY} ${b[0]} ${b[1]}`
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
  /** Project selected through the no-script pin popup fallback. */
  initialProjectId?: string | null
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

export default function IndiaMap({ hovered, selected, initialProjectId = null, onHover, onSelect }: IndiaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 800, h: 860 })
  const [activeProjectId, setActiveProjectId] = useState<string | null>(initialProjectId)

  useEffect(() => setActiveProjectId(initialProjectId), [initialProjectId])
  useEffect(() => setActiveProjectId(null), [selected])

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

  const selectedState = selected ? baseStates.find((item) => item.name === selected) : null
  const selData = selected ? STATE_BY_NAME[selected] : null
  const selBounds = selectedState?.bounds ?? null
  const fallbackProject = activeProjectId
    ? REAL_PROJECTS.find((project) => project.id === activeProjectId) ?? null
    : null

  // The state geometry produces the exact outline and keeps each project pin
  // in its known site position, independently of road-tile loading timing.
  const detailProjection = selectedState
    ? geoMercator().fitExtent(
        [[FIT_PAD, FIT_PAD], [size.w - FIT_PAD, size.h - FIT_PAD]],
        selectedState as any,
      )
    : null

  const clip = detailProjection && selectedState ? geoPath(detailProjection)(selectedState as any) : null
  const showOverlay = Boolean(selected && clip && selBounds)
  const popupPoint = fallbackProject && detailProjection
    ? detailProjection(fallbackProject.coordinates)
    : null
  const popupWidth = Math.min(320, Math.max(size.w - 32, 240))
  const popupHeight = 184
  const popupLeft = popupPoint
    ? Math.min(Math.max(popupPoint[0], popupWidth / 2 + 16), size.w - popupWidth / 2 - 16)
    : size.w / 2
  const popupAbove = popupPoint ? popupPoint[1] > size.h - popupHeight - 46 : false
  const popupTop = popupPoint
    ? (popupAbove
        ? Math.max(16, popupPoint[1] - popupHeight - 27)
        : Math.min(size.h - popupHeight - 16, popupPoint[1] + 27))
    : 16
  // Legacy popup markup below is intentionally disabled; these aliases keep
  // the old block type-safe until it is removed during the next map cleanup.
  const activeProject = fallbackProject
  const pinPoint = popupPoint ? { x: popupPoint[0], y: popupPoint[1] } : null
  const selectedCities = selected ? STATE_CITY_LABELS[selected] ?? [] : []
  const selectedRoads = selected ? STATE_ROAD_LINKS[selected] ?? [] : []
  const cityByName = new Map(selectedCities.map((city) => [city.name, city]))
  const stateClipId = `state-map-clip-${selected?.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`
  const terrainPatternId = `state-terrain-${selected?.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`

  return (
    <div ref={containerRef} className="relative w-full">
      <>
          {/* ── India base map (blurs + dims when a state is opened) ────── */}
          <div
            className={`transition-all duration-500 ${
              selected ? 'pointer-events-none scale-[0.99] opacity-0 blur-0' : 'blur-0 opacity-100'
            }`}
          >
            <svg viewBox="0 0 800 860" className="block h-auto w-full" role="img" aria-label="India project map">
              {baseStates.map((state) => {
                const isHovered = hovered === state.name
                const dimmed = hovered !== null && !isHovered
                return (
                  <a
                    key={state.name}
                    href={`/?state=${encodeURIComponent(state.name)}#map`}
                    aria-label={`View projects in ${state.name}`}
                    onMouseEnter={() => onHover(state.name)}
                    onMouseLeave={() => onHover(null)}
                    onClick={(event) => {
                      event.preventDefault()
                      onSelect(state.name)
                    }}
                  >
                    <path
                      d={state.path}
                      fill={isHovered ? '#e85d3f' : colorForState(state.name)}
                      stroke={isHovered ? '#c14a30' : '#fbfaf5'}
                      strokeWidth={isHovered ? 1.6 : 0.75}
                      opacity={dimmed ? 0.45 : 1}
                      filter={isHovered ? 'drop-shadow(0 6px 14px rgba(232,93,63,0.4))' : undefined}
                      className="cursor-pointer transition-[fill,stroke,opacity,filter] duration-200"
                    />
                  </a>
                )
              })}

              {/* Real project site pins — one teardrop per confirmed project */}
              {REAL_PROJECTS.map((project) => {
                const [x, y] = mapProjection(project.coordinates) ?? [0, 0]
                const active = hovered === project.id
                const fill = active ? '#f5a623' : '#e85d3f'
                return (
                  <a
                    key={project.id}
                    href={project.link}
                    aria-label={`View ${project.title}`}
                    onPointerEnter={() => onHover(project.id)}
                    onPointerLeave={() => onHover(null)}
                  >
                    <g transform={`translate(${x}, ${y})`} className="cursor-pointer [pointer-events:all]">
                      <circle r="6" fill="none" stroke={fill} strokeWidth={1.4} opacity={0.58}>
                        <animate attributeName="r" values="5;13;5" dur="2.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.7;0.05;0.7" dur="2.2s" repeatCount="indefinite" />
                      </circle>
                      <g transform="translate(-6,-17)">
                        <path d="M6 17C6 17 12 9.2 12 5.4C12 2.4 9.3 0 6 0C2.7 0 0 2.4 0 5.4C0 9.2 6 17 6 17Z" fill={fill} stroke="#ffffff" strokeWidth={1.4} />
                        <circle cx={6} cy={5.4} r={2.2} fill="#ffffff" />
                      </g>
                    </g>
                  </a>
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
              {clip && (
                <svg
                  aria-label={`${selected} project network map`}
                  className="absolute inset-0 z-10 h-full w-full"
                  viewBox={`0 0 ${size.w} ${size.h}`}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <clipPath id={stateClipId}>
                      <path d={clip} />
                    </clipPath>
                    <pattern id={terrainPatternId} width="54" height="42" patternUnits="userSpaceOnUse">
                      <path
                        d="M-10 30 C 1 20, 13 36, 27 26 S 48 23, 64 32"
                        fill="none"
                        stroke="#b8cec0"
                        strokeWidth="0.7"
                        opacity="0.2"
                      />
                    </pattern>
                  </defs>
                  <g clipPath={`url(#${stateClipId})`}>
                    <rect width={size.w} height={size.h} fill="#edf5ef" />
                    <rect width={size.w} height={size.h} fill={`url(#${terrainPatternId})`} />
                    {selectedRoads.map((road) => {
                      const fromCity = cityByName.get(road.from)
                      const toCity = cityByName.get(road.to)
                      const from = fromCity ? detailProjection?.(fromCity.coordinates) : null
                      const to = toCity ? detailProjection?.(toCity.coordinates) : null
                      if (!from || !to) return null
                      const path = curvedRoadPath(from, to, road.bend)
                      const primary = road.hierarchy === 'primary'
                      return (
                        <g key={`${road.from}-${road.to}`} fill="none" strokeLinecap="round">
                          <path
                            d={path}
                            stroke={primary ? '#bdcdc2' : '#cad8cf'}
                            strokeWidth={primary ? 5 : 2.7}
                            opacity={primary ? 0.68 : 0.62}
                          />
                          <path
                            d={path}
                            stroke={primary ? '#fffdf7' : '#f9f7f0'}
                            strokeWidth={primary ? 2.1 : 1}
                            opacity={primary ? 0.94 : 0.86}
                          />
                        </g>
                      )
                    })}
                    {selectedCities.map((city) => {
                      const point = detailProjection?.(city.coordinates)
                      if (!point) return null
                      const [labelX, labelY] = city.labelOffset ?? [7, -6]
                      return (
                        <g
                          key={city.name}
                          transform={`translate(${point[0]}, ${point[1]})`}
                          className={city.priority === 'secondary' ? 'hidden sm:block' : undefined}
                        >
                          <circle r="3" fill="#174f3b" stroke="#fffdf7" strokeWidth="1.5" />
                          <text
                            x={labelX}
                            y={labelY}
                            fill="#284c3f"
                            fontSize={Math.max(9, Math.min(11.5, size.w / 66))}
                            fontWeight="650"
                            paintOrder="stroke"
                            stroke="#edf5ef"
                            strokeWidth="3.5"
                            strokeLinejoin="round"
                          >
                            {city.name}
                          </text>
                        </g>
                      )
                    })}
                  </g>
                </svg>
              )}

              {clip && detailProjection && (
                <svg
                  aria-label={`${selected} project pins`}
                  className="absolute inset-0 z-20 h-full w-full"
                  viewBox={`0 0 ${size.w} ${size.h}`}
                  preserveAspectRatio="none"
                >
                  <path d={clip} fill="none" stroke="#e85d3f" strokeWidth={2.5} pointerEvents="none" />
                  {selData?.realProjects.map((project) => {
                    const point = detailProjection(project.coordinates)
                    if (!point) return null
                    const [x, y] = point
                    const fill = project.status === 'Completed' ? '#0e5c3d' : '#e85d3f'
                    return (
                      <g
                        key={project.id}
                        transform={`translate(${x}, ${y})`}
                        aria-label={`Open details for ${project.title}`}
                        className="group pointer-events-auto cursor-pointer outline-none"
                        role="button"
                        tabIndex={0}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          setActiveProjectId(project.id)
                          onHover(project.id)
                        }}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            setActiveProjectId(project.id)
                            onHover(project.id)
                          }
                        }}
                      >
                        <circle r="8" fill="none" stroke={fill} strokeWidth="2" opacity="0.65">
                          <animate attributeName="r" values="8;19;8" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.7;0.04;0.7" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <g>
                          <circle
                            r="16"
                            fill="none"
                            stroke={fill}
                            strokeWidth="2"
                            opacity="0"
                            className="transition-opacity duration-200 group-hover:opacity-30 group-focus-visible:opacity-70"
                          />
                          <circle r="11" fill={fill} opacity="0.14" />
                          <path d="M0 10C0 10 7 -0.2 7 -4.5C7 -8.1 3.9 -11 0 -11C-3.9 -11 -7 -8.1 -7 -4.5C-7 -0.2 0 10 0 10Z" fill={fill} stroke="#ffffff" strokeWidth="1.6" />
                          <circle cy="-4.5" r="2.4" fill="#ffffff" />
                          <title>{`${project.title} — ${project.location}`}</title>
                        </g>
                      </g>
                    )
                  })}
                </svg>
              )}

              {/* Project info card — rendered OUTSIDE the clip-path div so it is never cropped.
                  Positioned above the clicked pin using Leaflet container coords, clamped to container. */}
              {fallbackProject && popupPoint && (
                <div
                  className="absolute z-[1300] -translate-x-1/2 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_18px_45px_rgba(18,45,31,0.20)] backdrop-blur-md"
                  style={{ left: popupLeft, top: popupTop, width: popupWidth }}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-white/80 bg-white/95 ${popupAbove ? '-bottom-2 border-b border-r' : '-top-2 border-l border-t'}`}
                  />
                  <div
                    className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl"
                    style={{ background: fallbackProject.status === 'Completed' ? '#0e5c3d' : '#e85d3f' }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProjectId(null)
                      onHover(null)
                    }}
                    aria-label="Close project preview"
                    className="absolute right-3 top-3 rounded-full bg-black/[0.05] px-2 py-1 text-[10px] font-bold text-[#555] transition-colors hover:bg-black/10"
                  >
                    Close
                  </button>
                  <span
                    className="mt-1 inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      color: fallbackProject.status === 'Completed' ? '#0e5c3d' : '#e85d3f',
                      background: fallbackProject.status === 'Completed' ? '#e6f4ee' : '#fdf1ee',
                    }}
                  >
                    {fallbackProject.status}
                  </span>
                  <h3 className="mt-2 text-sm font-black text-[#1a1a1a]">{fallbackProject.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-[#555]">{fallbackProject.spec}</p>
                  <p className="mt-1 text-xs text-[#777]">{fallbackProject.location}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Link href={fallbackProject.link} className="rounded-lg bg-[#e85d3f] px-3 py-1.5 text-xs font-bold text-white">
                      View Project →
                    </Link>
                  </div>
                </div>
              )}

              {false && (
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
                        onClick={() => undefined}
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
              <div className="pointer-events-none absolute left-3 top-3 z-[1200] flex max-w-[calc(100%-6rem)] items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-md backdrop-blur sm:left-4 sm:top-4 sm:px-4 xl:hidden">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e85d3f]/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e85d3f]" />
                </span>
                <span className="text-sm font-black uppercase tracking-wide text-[#1a1a1a]">
                  {selected}
                </span>
                <span className="hidden text-[11px] font-semibold text-[#1a1a1a]/45 sm:inline">
                  State Project Network
                </span>
              </div>

              {/* close / zoom-out button */}
              <Link
                href="/#map"
                onClick={(event) => {
                  event.preventDefault()
                  onSelect(null)
                }}
                aria-label="Zoom back out to India"
                className="absolute right-3 top-3 z-[1200] flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 sm:right-4 sm:top-4 sm:px-3.5"
              >
                <X className="h-3.5 w-3.5" />
                Back to India
              </Link>
            </div>
          )}
      </>
    </div>
  )
}
