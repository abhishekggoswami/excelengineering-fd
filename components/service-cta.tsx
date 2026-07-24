import { ArrowUpRight } from 'lucide-react'
import LoopingLetterHeading from '@/components/looping-letter-heading'

type ServiceCtaProps = {
  heading: string
  description: string
}

export default function ServiceCta({ heading, description }: ServiceCtaProps) {
  return (
    <section id="contact" className="bg-[#111111] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <LoopingLetterHeading text={heading} className="mb-4 text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl" />
        <p className="mb-10 text-base text-pretty text-white/65">{description}</p>
        <form className="flex flex-col justify-center gap-4 sm:flex-row">
          <input type="text" placeholder="Your Name" className="max-w-xs flex-1 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white placeholder-white/40 transition-colors focus:border-[#f5a623] focus:outline-none" />
          <input type="email" placeholder="Email Address" className="max-w-xs flex-1 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white placeholder-white/40 transition-colors focus:border-[#f5a623] focus:outline-none" />
          <button type="submit" className="flex shrink-0 items-center gap-2 rounded-full bg-[#e85d3f] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d14f33]">
            <ArrowUpRight className="h-4 w-4" /> Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
