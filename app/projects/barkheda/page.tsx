import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Building2, CheckCircle2, ArrowLeft, ArrowUpRight } from 'lucide-react'

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-R6hNEvtRgvlhVBKmjXgxAXQkCZPe0b.png',
    alt: 'Barkheda irrigation project — aerial reservoir view with completed radial gates',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png',
    alt: 'Concrete dam piers and gate structures at Barkheda, Dist. Dhar, M.P.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0478-clean%20%281%29-g4mS1XgRKpfks3GH0ud6c3RX3JrHGn.png',
    alt: 'Radial gate face and downstream spillway channel — Barkheda project',
  },
]

const scope = [
  'Radial gate — 12.00 × 8.30 MTR gate dimensions',
  'Top log gate design, fabrication and supply',
  'Pluice (sluice) gate design, fabrication and installation',
  'Bridge gantry crane structure — full fabrication and erection',
  'Hoist systems — complete mechanical and electrical',
  'Full erection and commissioning at WRD Manawar project site',
]

const faqs = [
  {
    q: 'What was Excel Engineering\'s exact scope at Barkheda Medium Irrigation Project?',
    a: 'Excel Engineering executed the Design, Drawing, Supply, Fabrication and Erection of a Radial Gate (12.00 × 8.30 MTR), Top Log Gate, Pluice Gate, Hoist, and Bridge Gentry Crane Structure for the WRD Manawar irrigation project in Dist. Dhar, M.P.',
  },
  {
    q: 'Who was the primary contractor on the Barkheda project?',
    a: 'Excel Engineering served as a specialist sub-contractor to Harikrisha Infrastructure, Kutch, Gujarat on this project. The work was carried out under the Water Resources Department (WRD), Manawar, Dist. Dhar, Madhya Pradesh.',
  },
  {
    q: 'Has the Barkheda project been tested and commissioned?',
    a: 'Yes. The project is fully completed. All gate structures, hoists, and crane components were erected, tested and commissioned to the satisfaction of the WRD authority before handover.',
  },
  {
    q: 'Can Excel Engineering replicate this scope for other irrigation projects?',
    a: 'Yes. Excel Engineering\'s in-house design, fabrication and erection capability covers radial gates, stop log gates, sluice gates, bridge gantry cranes and hoist systems of similar or larger dimensions. Contact us with your project specifications.',
  },
]

export default function BarkhedaProjectPage() {
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

          {/* Back link */}
          <Link
            href="/projects/completed"
            className="absolute top-28 left-6 md:left-12 lg:left-20 z-10 inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Completed Projects
          </Link>

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-44 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#0e5c3d]" />
              <span className="text-[#4E9E82] font-semibold text-xs uppercase tracking-widest">Completed Project</span>
            </div>
            <h1
              className="font-black text-white text-balance leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              Barkheda Medium Irrigation Project
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#4E9E82]" />
                WRD Manawar, Dist. Dhar, Madhya Pradesh
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <Building2 className="w-4 h-4 text-[#4E9E82]" />
                Sub-Contractor: Harikrisha Infrastructure, Gujarat
              </span>
            </div>
          </div>
        </section>

        {/* Orange CTA strip */}
        <div className="bg-[#e85d3f] py-4 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-semibold text-sm text-center sm:text-left">
              Looking for similar hydraulic gate and hoist works? We deliver complete turnkey solutions.
            </p>
            <Link
              href="/#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#e85d3f] font-bold text-xs uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left — main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Spec badge */}
              <div className="inline-flex items-center gap-3 bg-white border border-[#e5d9c0] rounded-2xl px-5 py-3 self-start shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0e5c3d]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280]">Gate Specification</div>
                  <div className="text-sm font-black text-[#1a1a1a]">Radial Gate — 12.00 × 8.30 MTR</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-4">Project Overview</h2>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty">
                  Excel Engineering was engaged as a specialist sub-contractor to Harikrisha Infrastructure, Kutch, Gujarat, for the full scope of hydraulic gate engineering at the Barkheda Medium Irrigation Project, WRD Manawar, Dist. Dhar, Madhya Pradesh.
                </p>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty mt-4">
                  The scope covered the complete lifecycle from design and drawing through to fabrication, supply, erection and commissioning — including the Radial Gate (12.00 × 8.30 MTR), Top Log Gate, Pluice Gate, Bridge Gentry Crane Structure, and all associated Hoist systems. The work was completed to Water Resources Department specifications and handed over following successful commissioning.
                </p>
              </div>

              {/* Scope of Work */}
              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-5">Scope of Work</h2>
                <div className="flex flex-col gap-3">
                  {scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white border border-[#e5d9c0] rounded-xl px-5 py-4 shadow-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0e5c3d] text-white text-xs font-black flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[#374151] text-sm font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo grid */}
              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-5">Project Photography</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'sm:col-span-2 h-64' : 'h-48'}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — sidebar */}
            <aside className="flex flex-col gap-6">

              {/* Project details card */}
              <div className="bg-white border border-[#e5d9c0] rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a] mb-5">Project Details</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Status</div>
                    <span className="inline-flex items-center gap-1.5 bg-[#e6f4ee] text-[#0e5c3d] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Gate Type</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Radial Gate</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Dimensions</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">12.00 × 8.30 MTR</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Location</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">WRD Manawar, Dist. Dhar, M.P.</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Authority</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Water Resources Department, M.P.</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Primary Contractor</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Harikrisha Infrastructure, Kutch, Gujarat</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Role</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Sub-Contractor — Excel Engineering, Bhopal</div>
                  </div>
                </div>
              </div>

              {/* Other projects */}
              <div className="bg-white border border-[#e5d9c0] rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a] mb-4">Other Projects</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Bankpura Project', href: '/projects/bankpura', status: 'Completed' },
                    { label: 'Madiya Dam', href: '/projects/madiya-dam', status: 'Ongoing' },
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

        {/* FAQ */}
        <ServiceFaqSection
          faqs={faqs}
          heading="Barkheda Project — Questions"
          subheading="Technical and contractual details about the Barkheda Medium Irrigation Project executed by Excel Engineering."
        />

      </main>
    </>
  )
}
