'use client'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef, type ReactNode } from 'react'

export default function ScrollReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.set(element, { opacity: 0, y: 22 })
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          observer.disconnect()
          gsap.to(element, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', overwrite: 'auto' })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )

      observer.observe(element)
      return () => observer.disconnect()
    }, element)
    return () => context.revert()
  }, [])

  return <div ref={ref} className={`scroll-reveal-native ${className}`}>{children}</div>
}
