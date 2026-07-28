'use client'

import { motion } from 'motion/react'
import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type MutableRefObject,
} from 'react'

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
  fromFontVariationSettings: string
  toFontVariationSettings: string
  containerRef: MutableRefObject<HTMLElement | null>
  radius?: number
  falloff?: 'linear' | 'exponential' | 'gaussian'
  style?: CSSProperties
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>(
  (
    {
      label,
      fromFontVariationSettings,
      toFontVariationSettings,
      containerRef,
      radius = 120,
      falloff = 'gaussian',
      className = '',
      style,
      ...restProps
    },
    ref,
  ) => {
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

    const parsedSettings = useMemo(() => {
      const parseSettings = (settings: string) =>
        new Map(
          settings.split(',').map((setting) => {
            const [name, value] = setting.trim().split(/\s+/)
            return [name.replace(/['"]/g, ''), Number.parseFloat(value)]
          }),
        )
      const fromSettings = parseSettings(fromFontVariationSettings)
      const toSettings = parseSettings(toFontVariationSettings)

      return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
        axis,
        fromValue,
        toValue: toSettings.get(axis) ?? fromValue,
      }))
    }, [fromFontVariationSettings, toFontVariationSettings])

    useEffect(() => {
      const updateLetters = (clientX: number, clientY: number) => {
        const container = containerRef.current
        if (!container) return
        const containerRect = container.getBoundingClientRect()
        const x = clientX - containerRect.left
        const y = clientY - containerRect.top

        letterRefs.current.forEach((letter) => {
          if (!letter) return
          const rect = letter.getBoundingClientRect()
          const letterX = rect.left + rect.width / 2 - containerRect.left
          const letterY = rect.top + rect.height / 2 - containerRect.top
          const distance = Math.hypot(x - letterX, y - letterY)
          const normalized = Math.min(Math.max(1 - distance / radius, 0), 1)
          const strength =
            falloff === 'exponential'
              ? normalized ** 2
              : falloff === 'gaussian'
                ? Math.exp(-((distance / (radius / 2)) ** 2) / 2)
                : normalized

          letter.style.fontVariationSettings = parsedSettings
            .map(({ axis, fromValue, toValue }) => {
              const value = fromValue + (toValue - fromValue) * strength
              return `'${axis}' ${value}`
            })
            .join(', ')
          letter.style.transform = `translateY(${-2 * strength}px) scale(${1 + 0.1 * strength})`
        })
      }

      const handleMouseMove = (event: MouseEvent) => updateLetters(event.clientX, event.clientY)
      const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0]
        if (touch) updateLetters(touch.clientX, touch.clientY)
      }

      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      window.addEventListener('touchmove', handleTouchMove, { passive: true })
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('touchmove', handleTouchMove)
      }
    }, [containerRef, falloff, fromFontVariationSettings, parsedSettings, radius])

    const words = label.split(' ')
    let letterIndex = 0

    return (
      <span ref={ref} className={className} style={{ display: 'inline', fontFamily: 'inherit', ...style }} {...restProps}>
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.split('').map((letter) => {
              const currentLetterIndex = letterIndex++
              return (
                <motion.span
                  key={`${letter}-${currentLetterIndex}`}
                  ref={(element) => {
                    letterRefs.current[currentLetterIndex] = element
                  }}
                  aria-hidden="true"
                  className="inline-block transition-transform duration-100"
                >
                  {letter}
                </motion.span>
              )
            })}
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    )
  },
)

VariableProximity.displayName = 'VariableProximity'

export default VariableProximity
