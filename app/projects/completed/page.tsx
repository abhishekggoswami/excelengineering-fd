import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import Link from 'next/link'
import { ArrowUpRight, Building2, CheckCircle2, MapPin } from 'lucide-react'
import { additionalProjects } from '@/lib/additional-projects'
import { completedProjectMedia } from '@/lib/completed-project-media'

const stats = [
  { value: '75+', label: 'Projects Completed' },
  { value: '25+', label: 'Years of Experience' },
  { value: 'M.P.', label: 'Primary State' },
  { value: 'WRD', label: 'Govt. Authority Served' },
]

type CompletedProjectCard = {
  title: string
  location: string
  client?: string
  specification: string
  description: string
  highlights: string[]
  video: string
  videoAlt: string
  href: string
}

const completedProjects: CompletedProjectCard[] = [
  {
    title: 'Madiya Dam - Radial Gate Works',
    location: 'Rahtghar, Dist. Sagar, Madhya Pradesh',
    client: 'LCC Projects Pvt. Ltd., Ahmedabad',
    specification: 'Radial gate, stoplog gate, hoists and gantry-crane works',
    description: 'Excel Engineering completed the design, supply, fabrication, erection, testing and commissioning of the radial-gate and hydro-mechanical package for Madiya Dam.',
    highlights: [
      'Radial gate - 12.85 x 10.30 MTR dimensions',
      'Stoplog gate, dam sluice and power-channel gate works',
      'Rope drum, electrical and hydraulic hoist systems',
    ],
    video: completedProjectMedia['madiya-dam'].video,
    videoAlt: completedProjectMedia['madiya-dam'].alt,
    href: '/projects/madiya-dam',
  },
  {
    title: 'Radial Gate 12.00 × 8.30 MTR – Barkheda Medium Irrigation Project',
    location: 'WRD Manawar, Dist. Dhar, Madhya Pradesh',
    client: 'Harikrisha Infrastructure, Kutch, Gujarat',
    specification: 'Radial gates, top log gates, hoists and bridge gantry structures',
    description: 'Excel Engineering completed the design, drawing, supply, fabrication and erection of hydraulic gate systems and bridge gantry structures for the Barkheda Medium Irrigation Project.',
    highlights: [
      'Radial gate – 12.00 × 8.30 MTR dimensions',
      'Top log gate fabrication and supply',
      'Hoist systems and bridge gantry structure',
    ],
    video: completedProjectMedia.barkheda.video,
    videoAlt: completedProjectMedia.barkheda.alt,
    href: '/projects/barkheda',
  },
  {
    title: 'Vertical Spillway Gate 15.00 × 4.00 MTR – Bankpura Project',
    location: 'Bankpura Project, Dist. Rajgarh, Madhya Pradesh',
    client: 'W.R.D. C.M.U. Bhopal',
    specification: 'Vertical spillway gates and allied components',
    description: 'Excel Engineering completed the fabrication, erection, testing and commissioning of vertical spillway gates and all allied components for the Bankpura Project.',
    highlights: [
      'Vertical spillway gate – 15.00 × 4.00 MTR dimensions',
      'Full fabrication, erection, testing and commissioning',
      'Executed to Water Resources Department specifications',
    ],
    video: completedProjectMedia.bankpura.video,
    videoAlt: completedProjectMedia.bankpura.alt,
    href: '/projects/bankpura',
  },
  ...additionalProjects
    .filter((project) => project.status === 'Completed')
    .map((project): CompletedProjectCard => ({
      title: project.title,
      location: project.location,
      client: project.client,
      specification: project.specification,
      description: project.overview,
      highlights: project.scope,
      video: completedProjectMedia[project.slug].video,
      videoAlt: completedProjectMedia[project.slug].alt,
      href: `/projects/${project.slug}`,
    })),
]

const faqs = [
  {
    q: 'What was the scope at the Barkheda Medium Irrigation Project, Dist. Dhar, M.P.?',
    a: 'At Barkheda, Excel Engineering executed the design, drawing, supply, fabrication and erection of a radial gate, top log gate, sluice gate, hoist and bridge gantry crane structure for the WRD Manawar irrigation project.',
  },
  {
    q: 'What was completed at the Bankpura Project in Dist. Rajgarh, M.P.?',
    a: 'At Bankpura Project, we completed the fabrication, erection, testing and commissioning of vertical spillway gates along with all allied components.',
  },
  {
    q: 'Does Excel Engineering work on government Water Resources Department projects?',
    a: 'Yes. Excel Engineering has direct experience working under Water Resources Department divisions in Madhya Pradesh and understands the required inspection, documentation and commissioning protocols.',
  },
  {
    q: 'Can Excel Engineering provide project references or completion certificates?',
    a: 'Yes. For qualified clients, tender evaluators and project authorities, we can provide completion records, as-built drawings, commissioning reports and photographic documentation.',
  },
]

function CompletedProjectCard({ project }: { project: CompletedProjectCard }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5d9c0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f5a623]/70 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden bg-[#102b25]">
        <video autoPlay muted loop playsInline preload="metadata" aria-label={project.videoAlt} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105">
          <source src={project.video} />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0e5c3d]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
          <CheckCircle2 className="h-3.5 w-3.5" /> Completed Work
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#b87800]">{project.specification}</p>
        <h2 className="min-h-[3.5rem] text-xl font-black leading-snug text-[#1a1a1a]">{project.title}</h2>
        <div className="mt-4 space-y-2">
          <div className="flex items-start gap-1.5 text-xs font-medium leading-snug text-[#6b7280]"><MapPin className="h-3.5 w-3.5 flex-shrink-0" />{project.location}</div>
          {project.client && <div className="flex items-start gap-1.5 text-xs font-medium leading-snug text-[#6b7280]"><Building2 className="h-3.5 w-3.5 flex-shrink-0" />{project.client}</div>}
        </div>
        <p className="mt-5 min-h-[5rem] text-sm leading-relaxed text-[#6b7280]">{project.description}</p>
        <div className="mt-5 space-y-2 border-t border-[#edf0ef] pt-5">
          {project.highlights.slice(0, 3).map((highlight) => (
            <div key={highlight} className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f5a623]" /><span className="text-xs font-medium leading-snug text-[#374151]">{highlight}</span></div>
          ))}
        </div>
        <Link href={project.href} className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#b87800] transition-colors hover:text-[#8f5e00]">View project <ArrowUpRight className="h-3.5 w-3.5" /></Link>
      </div>
    </article>
  )
}

export default function CompletedProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="relative flex min-h-[52svh] items-end overflow-hidden bg-[#111111]">
          <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover" aria-label="Completed project construction video">
            <source src="/videos/completed-projects-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-12 lg:px-20">
            <div className="mb-4 flex items-center gap-3"><div className="h-px w-8 bg-[#f5a623]" /><span className="text-xs font-semibold uppercase tracking-widest text-[#f5a623]">Excel Engineering</span></div>
            <h1 className="mb-4 text-balance font-black leading-tight text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>Completed Projects</h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/70">A portfolio of successfully delivered dam gate, fabrication and irrigation projects – built to last and commissioned to perform.</p>
          </div>
        </section>

        <section className="bg-[#111111] px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => <div key={stat.label} className="flex flex-col items-center text-center"><span className="font-black leading-none text-[#f5a623]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{stat.value}</span><span className="mt-2 text-xs font-medium uppercase tracking-wide text-white/65">{stat.label}</span></div>)}
          </div>
        </section>

        <section className="border-b border-[#e5e7eb] bg-[#f7f4ec] px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[auto_1fr] md:items-center md:gap-8">
            <span className="w-fit rounded-full bg-[#f5a623] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">{completedProjects.length} delivered sites</span>
            <blockquote className="max-w-4xl text-center text-lg font-semibold leading-relaxed text-[#1a1a1a] sm:text-xl">“Every completed project is a record of quality, safety and engineering built for the long term.”</blockquote>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div><div className="mb-3 flex items-center gap-3"><div className="h-px w-8 bg-[#f5a623]" /><span className="text-xs font-semibold uppercase tracking-widest text-[#b87800]">Proven delivery</span></div><h2 className="text-3xl font-black tracking-tight text-[#1a1a1a] sm:text-4xl">Completed with Precision</h2></div>
              <p className="text-sm font-medium text-[#6b7280]">A consistent standard across every site.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {completedProjects.map((project) => <CompletedProjectCard key={project.title} project={project} />)}
            </div>
          </div>
        </section>

        <ServiceFaqSection faqs={faqs} heading="Completed Projects – Common Questions" subheading="Information on documentation, maintenance support and quality standards for Excel Engineering delivered projects." />

        <section className="hidden">
          <div className="mx-auto max-w-3xl text-center"><h2 className="mb-4 text-balance font-black leading-tight text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>Ready to Start Your Project?</h2><p className="mb-8 text-base text-white/65">Let our proven delivery record speak for itself. Contact us for a consultation and project quote.</p><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#e85d3f] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d14f33]"><ArrowUpRight className="h-4 w-4" />Get Free Quote</Link></div>
        </section>
      </main>
    </>
  )
}
