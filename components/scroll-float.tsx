'use client'

import { gsap } from 'gsap'
import { useLayoutEffect, useMemo, useRef, type ReactNode } from 'react'

type ScrollFloatProps = {
  children: ReactNode
  className?: string
  duration?: number
  stagger?: number
}

export default function ScrollFloat({ children, className = '', duration = 0.8, stagger = 0.025 }: ScrollFloatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const characters = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split('').map((character, index) => (
      <span key={`${character}-${index}`} className="scroll-float-character inline-block">
        {character === ' ' ? '\u00a0' : character}
      </span>
    ))
  }, [children])

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const context = gsap.context(() => {
      const letters = element.querySelectorAll<HTMLElement>('.scroll-float-character')
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.set(letters, {
        opacity: 0,
        yPercent: 115,
        scaleY: 1.65,
        scaleX: 0.82,
        transformOrigin: '50% 100%',
      })

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          observer.disconnect()
          gsap.to(letters, {
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            duration,
            ease: 'back.out(1.7)',
            stagger,
            overwrite: 'auto',
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
      )

      observer.observe(element)
      return () => observer.disconnect()
    }, element)

    return () => context.revert()
  }, [duration, stagger])

  return <span ref={ref} className={`scroll-float-root inline-block overflow-hidden ${className}`}>{characters}</span>
}
