import { ArrowRight } from 'lucide-react'
import ProximityHeading from '@/components/proximity-heading'
import ScrollReveal from '@/components/scroll-reveal'

type MethodologyStep = {
  step: string
  title: string
  desc: string
}

type DamMethodologyProps = {
  steps: MethodologyStep[]
  eyebrow?: string
  heading?: string
  description?: string
}

export default function DamMethodology({
  steps,
  eyebrow = 'Our Process',
  heading = 'Construction Methodology',
  description = 'Four disciplined stages, continuously sequenced from first survey through final handover.',
}: DamMethodologyProps) {
  return (
    <section className="bg-[#f5efe0] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#e85d3f]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#e85d3f]">{eyebrow}</span>
            <span className="h-px w-8 bg-[#e85d3f]" />
          </div>
          <h2 className="font-black leading-tight text-[#1a1a1a]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
            <ProximityHeading>{heading}</ProximityHeading>
          </h2>
          <ScrollReveal className="mx-auto mt-3 max-w-xl">
            <p className="text-pretty text-sm leading-relaxed text-[#6b7280]">{description}</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.step}
              className="dam-process-card relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white p-7"
              style={{ animationDelay: `${index * 3}s` }}
            >
              <div className="dam-process-glow absolute inset-0 pointer-events-none" />
              <div className="relative flex items-center justify-between gap-3">
                <div className="dam-process-number flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-sm font-black text-white">0{index + 1}</div>
                <span className="dam-process-step text-xs font-bold uppercase tracking-widest text-[#e85d3f]">{step.step}</span>
              </div>
              <h3 className="dam-process-title relative mt-7 text-lg font-extrabold leading-snug text-[#1a1a1a]">{step.title}</h3>
              <p className="dam-process-desc relative mt-3 text-sm leading-relaxed text-[#6b7280]">{step.desc}</p>
              <div className="relative mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0e5c3d]">
                <span>Stage active</span><ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
