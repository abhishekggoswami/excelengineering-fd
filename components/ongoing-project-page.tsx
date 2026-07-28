import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Building2, CheckCircle2, Clock, MapPin } from 'lucide-react'
import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import type { OngoingProjectDetail } from '@/lib/ongoing-projects'

function DetailsRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">{label}</div>
      <div className="text-sm font-semibold leading-snug text-[#1a1a1a]">{value}</div>
    </div>
  )
}

export default function OngoingProjectPage({ project }: { project: OngoingProjectDetail }) {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* The landing area intentionally contains only the project's video. */}
        <section className="relative hidden min-h-[48svh] overflow-hidden bg-[#111111] sm:block sm:min-h-[52svh]">
          <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" aria-label={`${project.title} project video`}>
            <source src={project.video} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
        </section>

        {/* All project information begins after the video landing section. */}
        <section className="rounded-t-2xl bg-[#e85d3f] px-6 py-7 text-white sm:rounded-none md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Link href="/projects/ongoing" className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-white">
                <ArrowLeft className="h-3.5 w-3.5" /> Ongoing Projects
              </Link>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-white/70" />
                <span className="text-xs font-bold uppercase tracking-widest">Ongoing Project</span>
              </div>
              <h1 className="max-w-4xl text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{project.title}</h1>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/90">
                <span className="inline-flex items-start gap-1.5"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />{project.location}</span>
                {project.client && <span className="inline-flex items-start gap-1.5"><Building2 className="mt-0.5 h-4 w-4 flex-shrink-0" />{project.client}</span>}
              </div>
            </div>
            <Link href="/contact" className="inline-flex w-fit flex-shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#e85d3f] transition-transform hover:-translate-y-0.5">
              <ArrowUpRight className="h-3.5 w-3.5" /> Get a Quote
            </Link>
          </div>
        </section>

        <section className="bg-white px-6 py-14 md:px-12 md:py-16 lg:px-20 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col gap-10 lg:col-span-2">
              <div className="inline-flex self-start items-center gap-3 rounded-2xl border border-[#e5d9c0] bg-white px-5 py-3 shadow-sm">
                <Clock className="h-5 w-5 text-[#e85d3f]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280]">Project Specification</div>
                  <div className="text-sm font-black text-[#1a1a1a]">{project.specification}</div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-black text-[#1a1a1a]">Project Overview</h2>
                <p className="text-pretty text-base leading-relaxed text-[#4b5563]">{project.overview}</p>
              </div>

              <div>
                <h2 className="mb-5 text-2xl font-black text-[#1a1a1a]">Scope of Work</h2>
                <div className="flex flex-col gap-3">
                  {project.scope.map((item, index) => (
                    <div key={item} className="group flex items-start gap-3 rounded-xl border border-[#e5d9c0] bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e85d3f]/65 hover:shadow-lg sm:px-5">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#e85d3f] text-xs font-black text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-sm font-medium leading-snug text-[#374151]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="rounded-2xl border border-[#e5d9c0] bg-white p-5 shadow-sm sm:p-6">
                <h3 className="mb-5 text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Project Details</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">Status</div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fdf1ee] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#e85d3f]"><Clock className="h-3 w-3" />Ongoing</span>
                  </div>
                  <DetailsRow label="Work Type" value={project.specification} />
                  <DetailsRow label="Location" value={project.location} />
                  {project.client && <DetailsRow label="Client" value={project.client} />}
                  {project.quantity && <DetailsRow label="Quantity" value={project.quantity} />}
                  {project.value && <DetailsRow label="Contract Value" value={project.value} />}
                </div>
              </div>
              <div className="rounded-2xl border border-[#e5d9c0] bg-white p-5 shadow-sm sm:p-6">
                <CheckCircle2 className="mb-3 h-6 w-6 text-[#0e5c3d]" />
                <h3 className="mb-2 text-base font-black text-[#1a1a1a]">Need a Similar Solution?</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">Talk to Excel Engineering about hydro-mechanical, irrigation, bridge and structural-steel works.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#e85d3f]">Contact Us <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </aside>
          </div>
        </section>

        <ServiceFaqSection
          faqs={[
            { q: `What is the scope of work for the ${project.title}?`, a: project.overview },
            { q: 'Where is this project located?', a: `The project is located at ${project.location}.` },
            ...(project.client ? [{ q: 'Who is the project client?', a: `${project.client} is listed as the client for this project.` }] : []),
          ]}
          heading={`${project.title} – Questions`}
          subheading={`Project details for Excel Engineering's ongoing work.`}
        />
      </main>
    </>
  )
}
