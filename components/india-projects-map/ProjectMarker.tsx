'use client'

import { Marker } from 'react-simple-maps'
import { motion } from 'framer-motion'

interface ProjectMarkerProps {
  coordinates: [number, number]
  /** stagger index so markers appear one-by-one */
  index: number
  active?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onClick?: () => void
}

const CORAL = '#e85d3f'
const GOLD = '#f5a623'

export default function ProjectMarker({
  coordinates,
  index,
  active = false,
  onEnter,
  onLeave,
  onClick,
}: ProjectMarkerProps) {
  const fill = active ? GOLD : CORAL

  return (
    <Marker
      coordinates={coordinates}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
    >
      {/* ground pulse at the pin tip */}
      <motion.circle
        cx={0}
        cy={0}
        r={3}
        fill="none"
        stroke={fill}
        strokeWidth={1.2}
        initial={{ scale: 0.5, opacity: 0.7 }}
        animate={{ scale: [0.5, 2.6], opacity: [0.6, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'easeOut',
          delay: index * 0.25,
        }}
        style={{ transformOrigin: 'center' }}
      />

      {/* teardrop pin — tip anchored at the coordinate (0,0) */}
      <motion.g
        initial={{ scale: 0, opacity: 0, y: -6 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 260, damping: 17 }}
        animate={{ scale: active ? 1.28 : 1 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <g transform="translate(-6,-17)">
          <path
            d="M6 17C6 17 12 9.2 12 5.4C12 2.4 9.3 0 6 0C2.7 0 0 2.4 0 5.4C0 9.2 6 17 6 17Z"
            fill={fill}
            stroke="#ffffff"
            strokeWidth={1.4}
            style={{
              transition: 'fill 220ms ease',
              filter: active ? 'drop-shadow(0 3px 5px rgba(0,0,0,0.35))' : 'none',
            }}
          />
          <circle cx={6} cy={5.4} r={2.2} fill="#ffffff" />
        </g>
      </motion.g>
    </Marker>
  )
}
