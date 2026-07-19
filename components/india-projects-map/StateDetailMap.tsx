'use client'

import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker as LeafletMarker, useMap } from 'react-leaflet'
import L from 'leaflet'
import type { RealProject } from './data'

export type LatLngBounds = [[number, number], [number, number]] // [[south, west], [north, east]]

interface StateDetailMapProps {
  bounds: LatLngBounds
  projects?: RealProject[]
  padding?: number
  /** Called when a pin is clicked — receives the project and its pixel position in the container */
  onProjectClick?: (project: RealProject, containerPoint: { x: number; y: number }) => void
}

/** Build a colour-coded teardrop divIcon. Coral = ongoing, green = completed. */
function makeProjectIcon(status: 'Completed' | 'Ongoing', active: boolean) {
  const fill = status === 'Completed' ? '#0e5c3d' : '#e85d3f'
  const scale = active ? 1.25 : 1
  return L.divIcon({
    className: '',
    iconSize: [34 * scale, 46 * scale],
    iconAnchor: [17 * scale, 44 * scale],
    html: `
      <div style="width:${34 * scale}px;height:${46 * scale}px;position:relative;">
        <span style="position:absolute;left:50%;top:${42 * scale}px;transform:translateX(-50%);width:${16 * scale}px;height:${6 * scale}px;background:rgba(0,0,0,0.25);border-radius:50%;filter:blur(2px);"></span>
        <svg width="${34 * scale}" height="${46 * scale}" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 44C17 44 31 28 31 16.5C31 8.5 24.7 2 17 2C9.3 2 3 8.5 3 16.5C3 28 17 44 17 44Z"
            fill="${fill}" stroke="#ffffff" stroke-width="2.5"/>
          <circle cx="17" cy="16.5" r="5.5" fill="#ffffff"/>
        </svg>
      </div>`,
  })
}

function BoundsController({ bounds, padding }: { bounds: LatLngBounds; padding: number }) {
  const map = useMap()
  useEffect(() => {
    map.fitBounds(bounds, { padding: [padding, padding], animate: true, duration: 0.6 })
  }, [map, bounds, padding])
  return null
}

/** Inner component that has access to the Leaflet map instance for coordinate conversion. */
function Pins({
  projects,
  onProjectClick,
}: {
  projects: RealProject[]
  onProjectClick?: StateDetailMapProps['onProjectClick']
}) {
  const map = useMap()
  return (
    <>
      {projects.map((p) => {
        const pos: [number, number] = [p.coordinates[1], p.coordinates[0]]
        return (
          <LeafletMarker
            key={p.id}
            position={pos}
            icon={makeProjectIcon(p.status, false)}
            eventHandlers={{
              click: () => {
                const pt = map.latLngToContainerPoint(pos)
                onProjectClick?.(p, { x: pt.x, y: pt.y })
              },
            }}
          />
        )
      })}
    </>
  )
}

export default function StateDetailMap({
  bounds,
  projects = [],
  padding = 0,
  onProjectClick,
}: StateDetailMapProps) {
  const center: [number, number] = [
    (bounds[0][0] + bounds[1][0]) / 2,
    (bounds[0][1] + bounds[1][1]) / 2,
  ]

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [padding, padding] }}
      center={center}
      zoom={7}
      zoomSnap={0}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
      style={{ width: '100%', height: '100%', background: '#f7f4ec' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        subdomains={['a', 'b', 'c', 'd']}
        maxZoom={19}
      />
      <TileLayer
        url="https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
        subdomains={['a', 'b', 'c']}
        maxZoom={19}
        opacity={0.85}
      />

      {/* Pins rendered inside a child with map access so we can call latLngToContainerPoint */}
      <Pins projects={projects} onProjectClick={onProjectClick} />

      <BoundsController bounds={bounds} padding={padding} />
    </MapContainer>
  )
}
