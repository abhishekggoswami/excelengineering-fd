'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { geoMercator, geoPath } from 'd3-geo'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { X } from 'lucide-react'
import Link from 'next/link'
import ProjectMarker from './ProjectMarker'
import { STATE_BY_NAME, STATE_PROJECTS, REAL_PROJECTS, colorForState } from './data'
import type { RealProject } from './data'
import type { LatLngBounds } from './StateDetailMap'

// Leaflet touches `window`, so load the detail map on the client only.
const StateDetailMap = dynamic(() => import('./StateDetailMap'), { ssr: false })

const GEO_URL = '/india-states.topo.json'

const HOVER_FILL = '#e85d3f'
const HOVER_STROKE = '#c14a30'
/** inset (px) used both for the outline clip and the Leaflet fit, so they align */
const FIT_PAD = 26

interface IndiaMapProps {
  /** live-hovered state name (drives highlight + panel preview) */
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
  const [mounted, setMounted] = useState(false)
  const [activeProject, setActiveProject] = useState<RealProject | null>(null)
  const [pinPoint, setPinPoint] = useState<{ x: number; y: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const boundsRef = useRef<Record<string, LatLngBounds>>({})
  const featuresRef = useRef<Record<string, any>>({})
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)

  // react-simple-maps projects coordinates with sub-pixel float differences
  // between server and client, causing hydration mismatches. Render only
  // after mount so the SVG geometry is computed once, on the client.
  useEffect(() => setMounted(true), [])

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
  }, [mounted])

  // Build the exact outline path for the selected state, fitted (with the same
  // inset as the Leaflet map) into the measured box. This clips the real map
  // to the state's true shape instead of a rectangle.
  const clip = useMemo(() => {
    if (!selected || !size) return null
    const feature = featuresRef.current[selected]
    if (!feature) return null
    const projection = geoMercator().fitExtent(
      [
        [FIT_PAD, FIT_PAD],
        [size.w - FIT_PAD, size.h - FIT_PAD],
      ],
      feature,
    )
    return geoPath(projection)(feature)
  }, [selected, size])

  const selData = selected ? STATE_BY_NAME[selected] : null
  const selBounds = selected ? boundsRef.current[selected] : null
  const showOverlay = Boolean(selected && clip && selBounds)

  return (
    <div ref={containerRef} className="relative w-full">
      {!mounted ? (
        <div className="aspect-[800/860] w-full animate-pulse rounded-3xl bg-black/[0.04]" />
      ) : (
        <>
          {/* ── India base map (blurs + dims when a state is opened) ────── */}
          <div
            className={`transition-all duration-500 ${
              selected ? 'scale-[0.99] opacity-40 blur-[5px]' : 'blur-0 opacity-100'
            }`}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 1180, center: [82.5, 22.6] }}
              width={800}
              height={860}
              style={{ width: '100%', height: 'auto' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name: string = geo.properties.st_nm
                    if (!boundsRef.current[name]) {
                      boundsRef.current[name] = geometryBounds(geo.geometry)
                    }
                    featuresRef.current[name] = geo
                    const isHovered = hovered === name
                    const dimmed = hovered !== null && !isHovered
                    const base = colorForState(name)

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => onHover(name)}
                        onMouseLeave={() => onHover(null)}
                        onClick={() => onSelect(name)}
                        tabIndex={-1}
                        style={{
                          default: {
                            fill: isHovered ? HOVER_FILL : base,
                            stroke: isHovered ? HOVER_STROKE : '#fbfaf5',
                            strokeWidth: isHovered ? 1.6 : 0.75,
                            outline: 'none',
                            opacity: dimmed ? 0.45 : 1,
                            filter: isHovered
                              ? 'drop-shadow(0 6px 14px rgba(232,93,63,0.4))'
                              : 'none',
                            transition:
                              'fill 260ms ease, opacity 260ms ease, filter 260ms ease, stroke 260ms ease',
                            cursor: 'pointer',
                          },
                          hover: {
                            fill: isHovered ? HOVER_FILL : base,
                            stroke: isHovered ? HOVER_STROKE : '#fbfaf5',
                            strokeWidth: isHovered ? 1.6 : 0.75,
                            outline: 'none',
                            opacity: dimmed ? 0.45 : 1,
                            cursor: 'pointer',
                          },
                          pressed: { outline: 'none' },
                        }}
                      />
                    )
                  })
                }
              </Geographies>

              {/* Real project site pins — one teardrop per confirmed project */}
              {REAL_PROJECTS.map((p, i) => (
                <ProjectMarker
                  key={p.id}
                  coordinates={p.coordinates}
                  index={i}
                  active={hovered === p.id}
                  onEnter={() => onHover(p.id)}
                  onLeave={() => onHover(null)}
                  onClick={() => router.push(p.link)}
                />
              ))}
            </ComposableMap>
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
                      (size?.w ?? 600) - 264,
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
              <div className="pointer-events-none absolute left-4 top-4 z-[1200] flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-md backdrop-blur">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e85d3f]/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e85d3f]" />
                </span>
                <span className="text-sm font-black uppercase tracking-wide text-[#1a1a1a]">
                  {selected}
                </span>
                <span className="text-[11px] font-semibold text-[#1a1a1a]/45">
                  Road &amp; Rail Network
                </span>
              </div>

              {/* close / zoom-out button */}
              <button
                type="button"
                onClick={() => { onSelect(null); setActiveProject(null); setPinPoint(null) }}
                aria-label="Zoom back out to India"
                className="absolute right-4 top-4 z-[1200] flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3.5 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                <X className="h-3.5 w-3.5" />
                Back to India
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
