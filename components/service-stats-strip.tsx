type ServiceStat = {
  value: string
  label: string
}

export default function ServiceStatsStrip({ stats }: { stats: ServiceStat[] }) {
  return (
    <section className="relative overflow-hidden bg-[#111111] px-6 py-10 md:px-12 lg:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-3 text-center">
              <span className="font-black leading-none text-[#f5a623]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{stat.value}</span>
              <span className="mt-2 text-xs font-medium uppercase tracking-wide text-white/65">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
