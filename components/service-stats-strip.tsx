type ServiceStat = {
  value: string
  label: string
}

export default function ServiceStatsStrip({ stats }: { stats: ServiceStat[] }) {
  return (
    <section className="relative overflow-hidden border-y border-white/15 bg-[linear-gradient(115deg,rgba(7,86,56,.96),rgba(14,92,61,.88),rgba(5,68,45,.96))] px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,.16)] backdrop-blur-xl md:px-12 md:py-9 lg:px-20">
      <div aria-hidden className="absolute -left-24 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#f5a623]/15 blur-3xl" />
      <div aria-hidden className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.1)] backdrop-blur-md">
              <span className="font-black leading-none text-[#f5a623]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{stat.value}</span>
              <span className="mt-2 text-xs font-medium uppercase tracking-wide text-white/65">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
