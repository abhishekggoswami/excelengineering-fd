import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Building2, Clock, ArrowLeft, ArrowUpRight } from 'lucide-react'

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0481-clean%202-eXJnNCS3OECYkxw9QuiHopHlg3FMJi.png',
    alt: 'Hiran Medium Irrigation Project — vertical gate and hoist construction at dam site',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-R6hNEvtRgvlhVBKmjXgxAXQkCZPe0b.png',
    alt: 'Dam reservoir and gate structure — Hiran river irrigation project, Madhya Pradesh',
  },
]

const scope = [
  'Vertical lift gate — 9.00 × 6.50 MTR gate dimensions',
  'Vertical gate hoist — design, fabrication and supply',
  'Bridge trestle assembly — full fabrication and erection',
  'Stoplog monorail and structure',
  'Service sluice gate and emergency sluice gate',
  'Platforms and trash racks',
  'Electrical hoist systems and allied components',
  'Approximately 325 MT of fabricated steel',
  'Full erection, testing and commissioning on site',
]

const faqs = [
  {
    q: 'What is the scope of work at the Hiran Medium Irrigation Project?',
    a: 'Excel Engineering is designing, supplying, fabricating, erecting, testing and commissioning a 9.00 × 6.50 MTR Vertical Lift Gate with Hoist, Bridge Trestle Assembly, Stoplog Monorail Structure, Service and Emergency Sluice Gate, and Electrical Hoist — as Sub-Contractor to SRS Infraway Pvt. Ltd., Gwalior.',
  },
  {
    q: 'Who is the primary contractor on the Hiran project?',
    a: 'The primary contractor is SRS Infraway Pvt. Ltd., Gwalior, Madhya Pradesh, under an MOU arrangement. Excel Engineering, Bhopal, is the specialist sub-contractor responsible for the complete hydraulic gate and hoist package.',
  },
  {
    q: 'What is the difference between a service sluice gate and an emergency sluice gate?',
    a: 'A service sluice gate is used for routine operational flow control — opened and closed during normal operation. An emergency sluice gate is designed for rapid closure under flow conditions, providing a safety backup in the event of structural failure or emergency shutdown requirements.',
  },
  {
    q: 'What is the current status of the Hiran Irrigation project?',
    a: 'The Hiran Medium Irrigation Project is currently in active execution. Fabrication and site mobilisation are ongoing. For the latest status, please contact Excel Engineering directly.',
  },
]

export default function HiranIrrigationProjectPage() {
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
              Hiran Medium Irrigation Project
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#e85d3f]" />
                Hiran River, Jabalpur, Madhya Pradesh
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <Building2 className="w-4 h-4 text-[#e85d3f]" />
                Sub-Contractor to SRS Infraway Pvt. Ltd., Gwalior
              </span>
            </div>
          </div>
        </section>

        {/* Orange CTA strip */}
        <div className="bg-[#e85d3f] py-4 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-semibold text-sm text-center sm:text-left">
              Vertical lift gates, stoplog structures, electrical hoists — complete scope delivery.
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
                  <div className="text-sm font-black text-[#1a1a1a]">Vertical Lift Gate — 9.00 × 6.50 MTR</div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-4">Project Overview</h2>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty">
                  Excel Engineering is currently engaged as specialist Sub-Contractor to SRS Infraway Pvt. Ltd., Gwalior, on the Hiran Medium Irrigation Project in Madhya Pradesh. The contract covers the full hydraulic gate and hoist package under an MOU arrangement.
                </p>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty mt-4">
                  The scope includes design, drawing, supply, fabrication, erection, testing and commissioning of a 9.00 × 6.50 MTR Vertical Lift Gate with integrated hoist, Bridge Trestle Assembly, Stoplog Monorail and Structure, Service and Emergency Sluice Gates, and Electrical Hoist systems — all allied components included within the turnkey scope.
                </p>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty mt-4">
                  The updated project scope also includes platforms and trash racks. The hydro-mechanical package represents approximately 325 MT of fabricated steel.
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
                    <div className="text-sm font-semibold text-[#1a1a1a]">Vertical Lift Gate</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Dimensions</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">9.00 × 6.50 MTR</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Location</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Hiran River, Jabalpur, Madhya Pradesh</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Fabricated Steel</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Approximately 325 MT</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Primary Contractor</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">SRS Infraway Pvt. Ltd., Gwalior (MOU)</div>
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
                    { label: 'Madiya Dam', href: '/projects/madiya-dam', status: 'Ongoing' },
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
          heading="Hiran Project — Questions"
          subheading="Technical and contractual details on Excel Engineering's ongoing vertical gate works at the Hiran Medium Irrigation Project, M.P."
        />

      </main>
    </>
  )
}
