'use client'

import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Building2 } from 'lucide-react'
import { additionalProjects } from '@/lib/additional-projects'

const stats = [
  { value: '10',   label: 'Active Projects' },
  { value: '4',    label: 'States Covered' },
  { value: '25+',  label: 'Years of Experience' },
  { value: '100%', label: 'On-Time Delivery Target' },
]

type Category = 'All' | 'Dam Construction' | 'Fabrication' | 'Irrigation' | 'Infrastructure'

const additionalOngoingProjects = additionalProjects.filter((project) => project.status === 'Ongoing')

const projects: {
  title: string
  location: string
  client: string
  contractedBy: string
  startDate: string
  expectedCompletion: string
  category: Category
  status: 'In Progress' | 'Tendering' | 'Mobilisation'
  progress: number
  description: string
  highlights: string[]
  image: string
}[] = [
  {
    title: 'Radial Gate 12.85 × 10.30 MTR — Madiya Dam',
    location: 'Rahtghar, Dist. Sagar, Madhya Pradesh',
    client: 'LCC Projects Pvt. Ltd., Ahmedabad (MOU)',
    contractedBy: 'Sub Contractor — Excel Engineering, Bhopal',
    startDate: 'Active',
    expectedCompletion: 'TBD',
    category: 'Dam Construction',
    status: 'In Progress',
    progress: 45,
    description:
      'Design, drawing supply, fabrication and erection testing and commissioning of Radial gate, stoplog gate, and Rope Drum Electrical Hoist, Gantry crane, Dam sluice and environment power channel Gate, Rope Drum Hoist & Hydraulic Cylinder Hoist — along with all allied components at Madiya Dam, Rahtghar Dist. Sagar, M.P.',
    highlights: [
      'Radial gate — 12.85 × 10.30 MTR gate dimensions',
      'Stoplog gate fabrication and installation',
      'Rope drum electrical hoist and gantry crane',
      'Dam sluice and environment power channel gate',
      'Rope drum hoist & hydraulic cylinder hoist systems',
      'All allied components included in scope',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
  },
  {
    title: 'Spillway Vertical Lift Gate 9.00 × 6.50 MTR — Hiran Irrigation',
    location: 'Hiran Medium Irrigation Project, Madhya Pradesh',
    client: 'SRS Infraway Pvt. Ltd., Gwalior (MOU)',
    contractedBy: 'Sub Contractor — Excel Engineering, Bhopal',
    startDate: 'Active',
    expectedCompletion: 'TBD',
    category: 'Irrigation',
    status: 'In Progress',
    progress: 30,
    description:
      'Design drawing supply, fabrication, erection testing and commissioning of vertical Gate, vertical Gates Hoist and Bridge Trestle Assembly, Stoplog Monorail and Structure, Service and Emergency sluice Gate, Electrical Hoist — along with all allied components at Hiran Medium Irrigation project.',
    highlights: [
      'Vertical lift gate — 9.00 × 6.50 MTR dimensions',
      'Vertical gates hoist and bridge trestle assembly',
      'Stoplog monorail structure fabrication',
      'Service and emergency sluice gate',
      'Electrical hoist and all allied components',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0481-clean%202-eXJnNCS3OECYkxw9QuiHopHlg3FMJi.png',
  },
]

type OngoingProjectCard = {
  title: string
  location: string
  client?: string
  category: string
  status: string
  progress?: number
  description: string
  highlights: string[]
  image: string
  video?: string
  href?: string
}

const projectMedia = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0481-clean%202-eXJnNCS3OECYkxw9QuiHopHlg3FMJi.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png',
]

const projectVideos = Array.from(
  { length: 9 },
  (_, index) => `/videos/ongoing/project-${String(index + 1).padStart(2, '0')}.mp4`,
)

const allOngoingProjects: OngoingProjectCard[] = [
  ...projects.map((project, index) => ({ ...project, video: projectVideos[index] })),
  ...additionalOngoingProjects.map((project, index) => ({
    title: project.title,
    location: project.location,
    client: project.client,
    category: 'Hydro-Mechanical Works',
    status: 'In Progress',
    description: project.overview,
    highlights: project.scope,
    image: projectMedia[index % projectMedia.length],
    video: projectVideos[projects.length + index],
    href: `/projects/${project.slug}`,
  })),
]

const faqs = [
  {
    q: 'What is the scope of work at the Madiya Dam project in Sagar, M.P.?',
    a: 'At Madiya Dam (Rahtghar, Dist. Sagar), Excel Engineering is executing design, fabrication, erection, testing and commissioning of a 12.85 × 10.30 MTR Radial Gate, stoplog gate, Rope Drum Electrical Hoist, Gantry Crane, Dam Sluice and Environment Power Channel Gate, along with Rope Drum Hoist & Hydraulic Cylinder Hoist — all as Sub Contractor to LCC Projects Pvt. Ltd., Ahmedabad.',
  },
  {
    q: 'What work is Excel Engineering carrying out at the Hiran Medium Irrigation Project?',
    a: 'At Hiran Medium Irrigation Project (M.P.), we are designing, supplying, fabricating, erecting, testing and commissioning a 9.00 × 6.50 MTR Vertical Lift Gate with Hoist, Bridge Trestle Assembly, Stoplog Monorail Structure, Service and Emergency Sluice Gate, and Electrical Hoist — as Sub Contractor to SRS Infraway Pvt. Ltd., Gwalior.',
  },
  {
    q: 'Does Excel Engineering operate as a sub-contractor on government projects?',
    a: 'Yes. Excel Engineering regularly works as a specialist sub-contractor to primary contractors on State Water Resources Department and irrigation projects. We handle the full hydraulic gate and hoist scope including design, fabrication, erection, and commissioning under MOU arrangements.',
  },
  {
    q: 'What quality standards does Excel Engineering follow on active projects?',
    a: 'All ongoing fabrication conforms to Bureau of Indian Standards specifications. Welding procedures are qualified and welders are certified. We carry out dimensional checks, NDT inspections, and hydraulic testing at each stage, with documentation shared with the client and awarding authority.',
  },
]

const statusColor: Record<string, string> = {
  'In Progress':   'bg-[#e85d3f]/10 text-[#e85d3f] border-[#e85d3f]/25',
  'Mobilisation':  'bg-[#f5a623]/10 text-[#c27f00] border-[#f5a623]/30',
  'Tendering':     'bg-[#1a1a1a]/8 text-[#374151] border-[#374151]/20',
}

export default function OngoingProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero */}
        <section className="relative min-h-[52vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png"
              alt="Excel Engineering active construction site — dam gates and hoists"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-36">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-xs uppercase tracking-widest">
                Excel Engineering
              </span>
            </div>
            <h1
              className="font-black text-white text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Ongoing Projects
            </h1>
            <p className="text-white/65 text-base max-w-xl text-pretty leading-relaxed">
              A live overview of Excel Engineering&apos;s active construction and fabrication projects — dam gates, irrigation structures, and heavy steel works across India.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-[#111111] py-10 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <span
                    className="font-black text-[#f5a623] leading-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-white/65 text-xs uppercase tracking-wide mt-2 font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project quote */}
        <section className="border-b border-[#e5e7eb] bg-[#f7f4ec] px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[auto_1fr] md:items-center md:gap-8">
            <span className="w-fit rounded-full bg-[#e85d3f] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              {allOngoingProjects.length} active sites
            </span>
            <blockquote className="max-w-4xl text-lg font-semibold leading-relaxed text-[#1a1a1a] sm:text-xl">
              “Built with precision at every stage — from design coordination and fabrication to safe, reliable commissioning.”
            </blockquote>
          </div>
        </section>

        {/* Project cards */}
        <section className="bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#e85d3f]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#e85d3f]">Live delivery</span>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-[#1a1a1a] sm:text-4xl">Projects in Progress</h2>
              </div>
              <p className="text-sm font-medium text-[#6b7280]">Each project receives the same engineering focus.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {allOngoingProjects.map((project, i) => (
              <article
                key={`${project.title}-${i}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#e85d3f]/45 hover:shadow-xl"
              >
                  {/* Media: kept as a fixed 16:9 slot so supplied project videos can replace the covers without changing card layout. */}
                  <div className="relative aspect-video overflow-hidden bg-[#102b25]">
                    {project.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={project.image}
                        aria-label={`${project.title} project video`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-black/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm ${statusColor[project.status] ?? statusColor['In Progress']}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="min-h-[3.5rem] text-xl font-black leading-snug text-[#1a1a1a]">
                      {project.title}
                    </h2>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-1.5 text-xs font-medium leading-snug text-[#6b7280]">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        {project.location}
                      </div>
                      {project.client && <div className="flex items-start gap-1.5 text-xs font-medium leading-snug text-[#6b7280]">
                        <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                        {project.client}
                      </div>}
                    </div>

                    {typeof project.progress === 'number' && <div className="mt-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#374151] text-xs font-semibold uppercase tracking-wide">
                          Progress
                        </span>
                        <span className="text-[#e85d3f] text-xs font-black">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#f5efe0] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#e85d3f] rounded-full transition-all duration-700"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>}

                    <p className="mt-5 min-h-[5rem] text-sm leading-relaxed text-[#6b7280]">
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-[#edf0ef] pt-5">
                      {project.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#e85d3f] flex-shrink-0 mt-1.5" />
                          <span className="text-[#374151] text-xs font-medium leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>

                    {project.href && <Link href={project.href} className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#e85d3f] transition-colors hover:text-[#bf422b]">
                      View project <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>}
                  </div>
              </article>
            ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFaqSection
          faqs={faqs}
          heading="Ongoing Projects — Common Questions"
          subheading="Answers about how Excel Engineering manages active project delivery, timelines, and coordination."
        />

        {/* CTA */}
        <section className="bg-[#111111] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-white font-black text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Interested in Working With Us?
            </h2>
            <p className="text-white/65 text-base mb-8 text-pretty">
              We take on new dam gate, fabrication, and irrigation projects throughout the year. Get in touch for a consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-full shadow-sm"
            >
              <ArrowUpRight className="w-4 h-4" />
              Get Free Quote
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
