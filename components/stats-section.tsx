'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  {
    label: 'Completed Projects',
    description:
      'Successfully delivering diverse construction projects on time, exceeding expectations.',
    end: 24,
    suffix: '+',
    duration: 1600,
  },
  {
    label: 'Happy Clients',
    description:
      'Committed to ensuring client satisfaction through exceptional building services.',
    end: 17,
    suffix: '+',
    duration: 1400,
  },
  {
    label: 'Project Value',
    description:
      'Building trust, integrity, and excellence as our core principles.',
    end: 5,
    suffix: 'Cr+',
    duration: 1500,
  },
  {
    label: 'Awards Won',
    description:
      'Recognized nationally and internationally for outstanding construction achievements.',
    end: 4,
    suffix: '+',
    duration: 1200,
  },
]

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, end, duration])
  return count
}

function StatCard({
  stat,
  index,
  sectionVisible,
}: {
  stat: (typeof STATS)[0]
  index: number
  sectionVisible: boolean
}) {
  const [dropped, setDropped] = useState(false)
  const [counting, setCounting] = useState(false)
  const count = useCountUp(stat.end, stat.duration, counting)

  // Stagger: each card drops in 220ms after the previous one lands
  // Drop animation takes ~500ms, so counting starts after drop + small buffer
  useEffect(() => {
    if (!sectionVisible) return
    const dropDelay = index * 220
    const countDelay = dropDelay + 520

    const t1 = setTimeout(() => setDropped(true), dropDelay)
    const t2 = setTimeout(() => setCounting(true), countDelay)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [sectionVisible, index])

  const isLast = index === STATS.length - 1

  return (
    <div
      className={`flex flex-col px-6 transition-all duration-500 ease-out ${
        !isLast ? 'lg:border-r border-[#e5e7eb]' : ''
      } ${index === 0 ? 'pl-0' : ''} ${isLast ? 'lg:pr-0' : ''}`}
      style={{
        opacity: dropped ? 1 : 0,
        transform: dropped ? 'translateY(0)' : 'translateY(-40px)',
        transitionDuration: '500ms',
      }}
    >
      {/* Label + description */}
      <div className="pb-6">
        <h3 className="text-[#1a1a1a] font-extrabold uppercase tracking-wide text-sm mb-3">
          {stat.label}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed">
          {stat.description}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e5e7eb] mb-6" />

      {/* Animated number */}
      <div>
        <span
          className="font-extrabold leading-none tabular-nums"
          style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: '#f5a623' }}
        >
          {count}
          {stat.suffix}
        </span>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-0">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} sectionVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
