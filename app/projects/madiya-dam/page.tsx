import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Building2, Clock, ArrowLeft, ArrowUpRight } from 'lucide-react'

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
    alt: 'Madiya Dam, Rahtghar — aerial view showing dam piers, reservoir and construction activity',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png',
    alt: 'Dam gate piers with concrete structure and water reservoir at Madiya, Sagar district',
  },
]

const scope = [
  'Radial gate — 12.85 × 10.30 MTR gate dimensions',
  'Stoplog gate fabrication and installation',
  'Rope drum electrical hoist design and supply',
  'Gantry crane — full fabrication and erection',
  'Dam sluice gate and environment power channel gate',
  'Hydraulic cylinder hoist systems',
  'All allied components within full turnkey scope',
]

const faqs = [
  {
    q: 'What is the scope of work at Madiya Dam, Rahtghar, Dist. Sagar?',
    a: 'Excel Engineering is executing design, drawing, supply, fabrication, erection, testing and commissioning of a 12.85 × 10.30 MTR Radial Gate, stoplog gate, Rope Drum Electrical Hoist, Gantry Crane, Dam Sluice and Environment Power Channel Gate, and Hydraulic Cylinder Hoist — as Sub-Contractor to LCC Projects Pvt. Ltd., Ahmedabad.',
  },
  {
    q: 'Who is the primary contractor at Madiya Dam?',
    a: 'The primary contracted company is LCC Projects Pvt. Ltd., Ahmedabad, Gujarat, under an MOU arrangement. Excel Engineering, Bhopal, is the specialist sub-contractor responsible for the full hydraulic gate and hoist scope.',
  },
  {
    q: 'What is the current status of the Madiya Dam project?',
    a: 'The Madiya Dam project is currently ongoing and in active execution. Fabrication and erection work is underway. For a specific status update, please contact Excel Engineering directly.',
  },
  {
    q: 'What is an environment power channel gate?',
    a: 'An environment (environmental) power channel gate is a sluice or regulation gate installed to maintain minimum environmental flows downstream of a dam. It allows controlled water release for ecological and downstream usage requirements even when the main spillway gates are closed.',
  },
]

export default function MadiyaDamProjectPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f4ec]">

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
          </div>

          <Link
            href="/projects/ongoing"
            className="absolute top-28 left-6 md:left-12 lg:left-20 z-10 inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Ongoing Projects
          </Link>

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-44 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-xs uppercase tracking-widest">Ongoing Project</span>
            </div>
            <h1
              className="font-black text-white text-balance leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              Madiya Dam — Radial Gate Works
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#e85d3f]" />
                Rahtghar, Dist. Sagar, Madhya Pradesh
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <Building2 className="w-4 h-4 text-[#e85d3f]" />
                Sub-Contractor to LCC Projects Pvt. Ltd., Ahmedabad
              </span>
            </div>
          </div>
        </section>

        {/* Orange CTA strip */}
        <div className="bg-[#e85d3f] py-4 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-semibold text-sm text-center sm:text-left">
              Radial gates, gantry cranes, hydraulic hoists — we handle the full scope.
            </p>
            <Link
              href="/#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#e85d3f] font-bold text-xs uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 flex flex-col gap-10">

              <div className="inline-flex items-center gap-3 bg-white border border-[#e5d9c0] rounded-2xl px-5 py-3 self-start shadow-sm">
                <Clock className="w-5 h-5 text-[#e85d3f]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280]">Gate Specification</div>
                  <div className="text-sm font-black text-[#1a1a1a]">Radial Gate — 12.85 × 10.30 MTR</div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-4">Project Overview</h2>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty">
                  Excel Engineering is currently executing a major radial gate and hoist package at Madiya Dam, Rahtghar, Dist. Sagar, Madhya Pradesh — as specialist Sub-Contractor to LCC Projects Pvt. Ltd., Ahmedabad, under an MOU arrangement.
                </p>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty mt-4">
                  The full scope covers design, drawing, supply, fabrication, erection, testing and commissioning of a 12.85 × 10.30 MTR Radial Gate along with a stoplog gate, Rope Drum Electrical Hoist, Gantry Crane, Dam Sluice Gate, Environment Power Channel Gate, and Hydraulic Cylinder Hoist — representing one of the largest individual gate contracts in our portfolio.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-5">Scope of Work</h2>
                <div className="flex flex-col gap-3">
                  {scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white border border-[#e5d9c0] rounded-xl px-5 py-4 shadow-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e85d3f] text-white text-xs font-black flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[#374151] text-sm font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-5">Site Photography</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {images.map((img, i) => (
                    <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'sm:col-span-2 h-64' : 'h-48'}`}>
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="bg-white border border-[#e5d9c0] rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a] mb-5">Project Details</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Status</div>
                    <span className="inline-flex items-center gap-1.5 bg-[#fdf1ee] text-[#e85d3f] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      Ongoing
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Gate Type</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Radial Gate</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Dimensions</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">12.85 × 10.30 MTR</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Location</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Rahtghar, Dist. Sagar, M.P.</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Primary Contractor</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">LCC Projects Pvt. Ltd., Ahmedabad (MOU)</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Role</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Sub-Contractor — Excel Engineering, Bhopal</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#e5d9c0] rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a] mb-4">Other Projects</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Barkheda Irrigation', href: '/projects/barkheda', status: 'Completed' },
                    { label: 'Bankpura Project', href: '/projects/bankpura', status: 'Completed' },
                    { label: 'Hiran Irrigation', href: '/projects/hiran-irrigation', status: 'Ongoing' },
                  ].map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-[#e5d9c0] hover:border-[#e85d3f]/40 hover:bg-[#f7f4ec] transition-colors group"
                    >
                      <span className="text-xs font-semibold text-[#374151] group-hover:text-[#1a1a1a] transition-colors">{p.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${p.status === 'Completed' ? 'bg-[#e6f4ee] text-[#0e5c3d]' : 'bg-[#fdf1ee] text-[#e85d3f]'}`}>{p.status}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#9ca3af] group-hover:text-[#e85d3f] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <ServiceFaqSection
          faqs={faqs}
          heading="Madiya Dam — Questions"
          subheading="Technical and contractual details about Excel Engineering's ongoing radial gate works at Madiya Dam, Dist. Sagar, M.P."
        />

      </main>
    </>
  )
}
