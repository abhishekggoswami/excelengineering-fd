import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Building2, CheckCircle2, ArrowLeft, ArrowUpRight } from 'lucide-react'

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png',
    alt: 'Bankpura spillway project — top-down aerial view showing completed vertical gates',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
    alt: 'Bankpura dam structure aerial with gate piers and reservoir, Dist. Rajgarh, M.P.',
  },
]

const scope = [
  'Vertical spillway gate — 15.00 × 4.00 MTR dimensions',
  'Full fabrication of gate structure and allied components',
  'Erection at Bankpura project site, Dist. Rajgarh',
  'Testing and commissioning of all gate systems',
  'Work executed under WRD C.M.U. Bhopal division oversight',
  'Compliance with Water Resources Department M.P. specifications',
]

const faqs = [
  {
    q: 'What was completed at the Bankpura Project in Dist. Rajgarh, M.P.?',
    a: 'At Bankpura Project, Excel Engineering completed the fabrication, erection, testing and commissioning of Vertical Spillway Gates (15.00 × 4.00 MTR) along with all allied components, under the supervision of the Dy. Director & Ex. Engineer, S.S Division C.M.U. Bhopal, Water Resources Department.',
  },
  {
    q: 'Who supervised the Bankpura project on behalf of the government?',
    a: 'The project was executed under the direct supervision of the Division Dy. Director & Ex. Engineer, S.S Division, C.M.U. Bhopal, Water Resources Department, Madhya Pradesh.',
  },
  {
    q: 'What does "allied components" include in the Bankpura scope?',
    a: 'Allied components typically include hoist frames, guide channels, seal arrangements, anchorage embedments, operating platforms, stop logs, and all associated mechanical and structural elements necessary for a fully functional spillway gate system.',
  },
  {
    q: 'Is Bankpura a reference project Excel Engineering can share with clients?',
    a: 'Yes. Bankpura is a completed, government-supervised project with full commissioning records. For qualified tender submissions or client references, we can provide project documentation on request.',
  },
]

export default function BankpuraProjectPage() {
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
              Bankpura Spillway Project
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#4E9E82]" />
                Dist. Rajgarh, Madhya Pradesh
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
                <Building2 className="w-4 h-4 text-[#4E9E82]" />
                Authority: W.R.D. C.M.U. Bhopal
              </span>
            </div>
          </div>
        </section>

        {/* Orange CTA strip */}
        <div className="bg-[#e85d3f] py-4 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-semibold text-sm text-center sm:text-left">
              Need vertical spillway gates or allied components for your irrigation project?
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

            <div className="lg:col-span-2 flex flex-col gap-10">

              <div className="inline-flex items-center gap-3 bg-white border border-[#e5d9c0] rounded-2xl px-5 py-3 self-start shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0e5c3d]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280]">Gate Specification</div>
                  <div className="text-sm font-black text-[#1a1a1a]">Vertical Spillway Gate — 15.00 × 4.00 MTR</div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-4">Project Overview</h2>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty">
                  Excel Engineering was contracted for the complete fabrication, erection, testing and commissioning of Vertical Spillway Gates at the Bankpura Project, Dist. Rajgarh, Madhya Pradesh. The project was executed under direct government supervision by the Division Dy. Director & Ex. Engineer, S.S Division, C.M.U. Bhopal, Water Resources Department.
                </p>
                <p className="text-[#4b5563] text-base leading-relaxed text-pretty mt-4">
                  The 15.00 × 4.00 MTR vertical spillway gate installation included all allied components and was carried out in full compliance with WRD specifications. The structure provides controlled flood discharge and water level management for the irrigation command area in Rajgarh district.
                </p>
              </div>

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

              <div>
                <h2 className="text-xl font-black text-[#1a1a1a] mb-5">Project Photography</h2>
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
                    <span className="inline-flex items-center gap-1.5 bg-[#e6f4ee] text-[#0e5c3d] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Gate Type</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Vertical Spillway Gate</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Dimensions</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">15.00 × 4.00 MTR</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Location</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Bankpura, Dist. Rajgarh, M.P.</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Supervising Authority</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Dy. Director & Ex. Engineer, S.S Division, C.M.U. Bhopal, W.R.D.</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Role</div>
                    <div className="text-sm font-semibold text-[#1a1a1a]">Direct Contractor — Excel Engineering, Bhopal</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#e5d9c0] rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a] mb-4">Other Projects</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Barkheda Irrigation', href: '/projects/barkheda', status: 'Completed' },
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

        <ServiceFaqSection
          faqs={faqs}
          heading="Bankpura Project — Questions"
          subheading="Details on the Vertical Spillway Gate works carried out by Excel Engineering at Bankpura, Dist. Rajgarh, M.P."
        />

      </main>
    </>
  )
}
