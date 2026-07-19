import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const tags = [
  { label: '+ Production' },
  { label: '+ Technology' },
]

function TagPills() {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag.label}
          className="border border-[#d1d5db] rounded-full px-3 py-1 text-xs text-[#4b5563] font-medium"
        >
          {tag.label}
        </span>
      ))}
    </div>
  )
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      <div className="w-9 h-9 rounded-full bg-[#0e5c3d] border-2 border-white overflow-hidden flex items-center justify-center">
        <span className="text-white text-xs font-bold">EE</span>
      </div>
      <div className="w-9 h-9 rounded-full bg-[#e85d3f] border-2 border-white overflow-hidden flex items-center justify-center">
        <span className="text-white text-xs font-bold">XL</span>
      </div>
      <div className="w-9 h-9 rounded-full bg-[#f5a623] border-2 border-white overflow-hidden flex items-center justify-center">
        <span className="text-[#1a1a1a] text-xs font-bold">CE</span>
      </div>
    </div>
  )
}

export default function ServicesBento() {
  return (
    <section className="bg-[#f5efe0] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* CTA button top center */}
        <div className="flex justify-center mb-10">
          <button className="flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-semibold uppercase tracking-wide text-sm px-6 py-3 rounded-full">
            <ArrowRight className="w-4 h-4" />
            Our Services Offer
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Row 1 */}

          {/* Card 1: Dark hero card with pipelines image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-between bg-[#111111] md:row-span-1">
            <div className="relative z-10 p-7 flex flex-col justify-between h-full">
              <h2 className="text-white font-extrabold text-2xl leading-snug max-w-[260px] text-balance">
                Delivering Precision Engineering Solutions for Modern Industry
              </h2>
              <button className="mt-6 self-start flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-semibold text-sm px-5 py-2.5 rounded-full">
                <ArrowRight className="w-4 h-4" />
                Start A Project
              </button>
            </div>
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-UUGSIDnptjL7bSXLHSXrZJHeMEKo2J.png"
                alt="Aerial view of completed dam with blue radial steel gates and teal reservoir"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="object-cover object-center opacity-40"
              />
            </div>
          </div>

          {/* Card 2: Strict Quality Standards */}
          <div className="bg-white rounded-2xl p-7 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-extrabold text-[#1a1a1a] text-xl leading-snug">
                  Strict Quality<br />Standards
                </h3>
                <AvatarStack />
              </div>
              <div className="w-full h-px bg-[#e5e7eb] mb-4" />
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Comprehensive inspection procedures at every production stage to
                maintain reliability and performance
              </p>
            </div>
            <div className="mt-6">
              <div className="w-full h-px bg-[#e5e7eb] mb-4" />
              <TagPills />
            </div>
          </div>

          {/* Card 3: Infrastructure image with stat overlay */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-10-gCbnR5Q8obkePwbzj4L199YEbmL3IW.png"
              alt="Excel Engineering crane equipment being loaded on flatbed truck at night"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              className="object-cover object-center"
            />
            {/* Stat overlay badge */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/85 backdrop-blur-sm p-5 rounded-b-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="font-extrabold leading-none"
                  style={{ fontSize: '2.5rem', color: '#e85d3f' }}
                >
                  25+
                </span>
                <span className="text-white font-semibold text-sm leading-snug">
                  Years of Engineering<br />Experience
                </span>
              </div>
              <p className="text-[#d1d5db] text-xs leading-relaxed mt-2">
                Our team has successfully handled complex manufacturing
                challenges across multiple disciplines
              </p>
            </div>
          </div>

          {/* Row 2 */}

          {/* Card 4: High Production Capacity */}
          <div className="bg-white rounded-2xl p-7 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-extrabold text-[#1a1a1a] text-xl leading-snug">
                  High Production<br />Capacity
                </h3>
                <AvatarStack />
              </div>
              <div className="w-full h-px bg-[#e5e7eb] mb-4" />
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Efficient manufacturing processes capable of handling both
                small-scale orders plus large industrial projects.
              </p>
            </div>
            <div className="mt-6">
              <div className="w-full h-px bg-[#e5e7eb] mb-4" />
              <TagPills />
            </div>
          </div>

          {/* Card 5: Large welding image (tall, spans 1 col but 2 rows visually via min-h) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[300px] md:row-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-2-6GokCc6454jlcjchkl9858C1Dxvp0J.png"
              alt="Excel Engineering factory building exterior with blue corrugated steel facade"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              className="object-cover object-center"
            />
          </div>

          {/* Card 6: Top Production Technology */}
          <div className="bg-white rounded-2xl p-7 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-extrabold text-[#1a1a1a] text-xl leading-snug">
                  Top Production<br />Technology
                </h3>
                <AvatarStack />
              </div>
              <div className="w-full h-px bg-[#e5e7eb] mb-4" />
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Equipped with modern machinery and automated systems to ensure
                high precision and consistent output
              </p>
            </div>
            <div className="mt-6">
              <div className="w-full h-px bg-[#e5e7eb] mb-4" />
              <TagPills />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
