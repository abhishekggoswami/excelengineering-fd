import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Waves, Wrench, Droplets, Truck } from 'lucide-react'

const services = [
  {
    id: 'dam-construction',
    title: 'Dam Construction Works',
    description:
      'Large-scale water infrastructure including gravity dams, earthfill, rockfill, arch, and embankment dams. Complete barrage and reservoir development.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-vDk0SgEU8sG0csGgfMHAASh7q40PYt.png',
    href: '/services/dam-construction',
    icon: Waves,
    stat: '120+',
    statLabel: 'Dam Projects',
    tags: ['Gravity Dams', 'Earthfill', 'Hydroelectric', 'Barrages'],
    color: '#0e5c3d',
  },
  {
    id: 'fabrication',
    title: 'Fabrication Works',
    description:
      'Structural steel fabrication, heavy industrial structures, pipe and tank fabrication, bridge components, and precision welding & assembly services.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-12-rrOAforN7b9pXIVoDeQmbJ9sPy4azf.png',
    href: '/services/fabrication',
    icon: Wrench,
    stat: '200+',
    statLabel: 'Fabrication Projects',
    tags: ['Structural Steel', 'Pipe Fabrication', 'Tank Fabrication', 'Welding'],
    color: '#1a1a1a',
  },
  {
    id: 'irrigation',
    title: 'Irrigation Projects',
    description:
      'Canal construction, canal lining, lift irrigation, pump house construction, drainage systems, and complete agricultural water infrastructure development.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lumin-osity-6DMht7wYt6g-unsplash%20%281%29-88Dhn9SVxXzZ7pXzjeXMlHfEXKTw8U.jpg',
    href: '/services/irrigation',
    icon: Droplets,
    stat: '850+',
    statLabel: 'km Canal Built',
    tags: ['Canal Construction', 'Lift Irrigation', 'Drainage Systems', 'Reservoirs'],
    color: '#0e5c3d',
  },
  {
    id: 'crane-services',
    title: 'Crane Services',
    description:
      'Fleet of mobile, hydraulic, crawler, and all-terrain cranes for heavy lifting, infrastructure projects, and industrial equipment solutions.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-2-TSBXOdBe9IDnCBqgSTeNBucgSBq9JW.png',
    href: '/services/crane-services',
    icon: Truck,
    stat: '50+',
    statLabel: 'Crane Fleet',
    tags: ['Mobile Cranes', 'Crawler Cranes', 'All Terrain', 'Heavy Lift'],
    color: '#1a1a1a',
  },
]

export default function CoreServices() {
  return (
    <section id="services" className="bg-[#f5efe0] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                Core Service Divisions
              </span>
            </div>
            <h2
              className="font-black text-[#1a1a1a] text-balance leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              What We Build &amp;<br />
              <span className="text-[#0e5c3d]">How We Deliver</span>
            </h2>
          </div>
          <p className="text-[#6b7280] text-base leading-relaxed max-w-sm text-pretty">
            Four major engineering divisions powering large-scale infrastructure
            across India for over 25 years.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative rounded-3xl overflow-hidden min-h-[480px] flex flex-col justify-end cursor-pointer"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                  {/* Green tint overlay on hover */}
                  <div className="absolute inset-0 bg-[#0e5c3d]/0 group-hover:bg-[#0e5c3d]/20 transition-colors duration-500" />
                </div>

                {/* Top: icon + stat */}
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div
                      className="font-black text-[#f5a623] leading-none"
                      style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
                    >
                      {service.stat}
                    </div>
                    <div className="text-white/60 text-xs uppercase tracking-wide mt-0.5">
                      {service.statLabel}
                    </div>
                  </div>
                </div>

                {/* Bottom: content */}
                <div className="relative z-10 p-7">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/70 border border-white/25 rounded-full px-3 py-1 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-white font-extrabold text-2xl leading-snug text-balance mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/65 text-sm leading-relaxed max-w-xs text-pretty">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow button */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e85d3f] group-hover:bg-[#f5a623] transition-colors duration-300 flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0e5c3d] rounded-3xl px-8 py-7">
          <div>
            <p className="text-white font-extrabold text-xl">
              Let&apos;s make something great work together.
            </p>
            <p className="text-white/60 text-sm mt-1">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-bold uppercase tracking-wide text-sm px-6 py-3.5 rounded-full"
          >
            <ArrowUpRight className="w-4 h-4" />
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
