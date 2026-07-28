'use client'

import { useRef } from 'react'
import VariableProximity from '@/components/variable-proximity'

export default function ProximityHeading({ children, className = '' }: { children: string; className?: string }) {
  const containerRef = useRef<HTMLElement | null>(null)

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      <VariableProximity
        label={children}
        containerRef={containerRef}
        fromFontVariationSettings="'wght' 800, 'opsz' 14"
        toFontVariationSettings="'wght' 1000, 'opsz' 48"
        radius={140}
        falloff="gaussian"
      />
    </span>
  )
}
