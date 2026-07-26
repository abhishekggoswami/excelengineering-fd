import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type CompanyPageHeroProps = {
  eyebrow: string
  title: string
  accent: string
  description: string
  actionLabel?: string
  actionHref?: string
}

export default function CompanyPageHero({
  eyebrow,
  title,
  accent,
  description,
  actionLabel,
  actionHref = '/contact',
}: CompanyPageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[52svh] items-end overflow-hidden bg-[#111111]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/company-pages-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#071d18]/90 via-[#0b3328]/68 to-[#071d18]/38" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:px-10 sm:pb-16 md:px-12 lg:px-20 lg:pb-20">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#e85d3f]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f5a623] sm:text-sm">{eyebrow}</span>
        </div>
        <h1 className="max-w-3xl text-balance text-[clamp(2.35rem,5vw,4.25rem)] font-black leading-[0.98] text-white">
          {title}<br />
          <span className="text-[#f5a623]">{accent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">{description}</p>
        {actionLabel && (
          <Link href={actionHref} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e85d3f] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-[#d14f33]">
            {actionLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  )
}
