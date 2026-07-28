import CountUp from '@/components/count-up'

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

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const isLast = index === STATS.length - 1

  return (
    <div
      className={`flex flex-col px-6 transition-all duration-500 ease-out ${
        !isLast ? 'lg:border-r border-[#e5e7eb]' : ''
      } ${index === 0 ? 'pl-0' : ''} ${isLast ? 'lg:pr-0' : ''}`}
    >
      {/* Label + description */}
      <div className="flex-1 pb-6">
        <h3 className="text-[#1a1a1a] font-extrabold uppercase tracking-wide text-sm mb-3">
          {stat.label}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed">
          {stat.description}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e5e7eb] mb-6" />

      {/* Real business figure: visible before any client scripts load. */}
      <div>
        <CountUp
          value={`${stat.end}${stat.suffix}`}
          className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-extrabold leading-none tabular-nums text-[#f5a623]"
        />
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-0">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
