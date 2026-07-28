'use client'

import { useInView } from 'motion/react'
import { useEffect, useMemo, useRef } from 'react'

export default function CountUp({ value, className = '' }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const match = useMemo(() => value.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/), [value])
  const total = Number(match?.[1] ?? 0)
  const suffix = match?.[2] ?? value

  useEffect(() => {
    let frame = 0
    let startedAt = 0
    const duration = 1100

    const animate = (now: number) => {
      if (!startedAt) startedAt = now
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      if (ref.current) ref.current.textContent = `${Math.round(total * eased)}${suffix}`
      if (progress < 1) frame = window.requestAnimationFrame(animate)
    }
    if (inView) {
      if (ref.current) ref.current.textContent = `0${suffix}`
      frame = window.requestAnimationFrame(animate)
    }

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [inView, suffix, total])

  return <span ref={ref} className={className}>{`0${suffix}`}</span>
}
