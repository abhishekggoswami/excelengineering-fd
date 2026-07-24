import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Building2, CheckCircle2, Clock, MapPin } from 'lucide-react'
import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import type { AdditionalProject } from '@/lib/additional-projects'

function DetailsRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">{label}</div>
      <div className="text-sm font-semibold text-[#1a1a1a]">{value}</div>
    </div>
  )
}

export default function AdditionalProjectPage({ project }: { project: AdditionalProject }) {
  const completed = project.status === 'Completed'
  const accent = completed ? '#0e5c3d' : '#e85d3f'
  const statusLabel = completed ? 'Completed Project' : 'Ongoing Project'

  return (
    <>
      <Navbar />
      <main className="bg-[#f7f4ec]">
        <section className="relative overflow-hidden bg-[#111111]">
          <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.22) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e5c3d]/70 via-[#111111] to-[#e85d3f]/35" />
          <Link
            href={completed ? '/projects/completed' : '/projects/ongoing'}
            className="absolute left-6 top-28 z-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white md:left-12 lg:left-20"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {completed ? 'Completed Projects' : 'Ongoing Projects'}
          </Link>
          <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-44 md:px-12 lg:px-20">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8" style={{ background: accent }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>{statusLabel}</span>
            </div>
            <h1 className="mb-5 max-w-4xl text-balance font-black leading-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70"><MapPin className="h-4 w-4" style={{ color: accent }} />{project.location}</span>
              {project.client && <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70"><Building2 className="h-4 w-4" style={{ color: accent }} />{project.client}</span>}
            </div>
          </div>
        </section>

        <div className="px-6 py-4 md:px-12 lg:px-20" style={{ background: accent }}>
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-center text-sm font-semibold text-white sm:text-left">Hydro-mechanical, structural-steel and water-infrastructure execution.</p>
            <Link href="/#contact" className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-opacity hover:opacity-90" style={{ color: accent }}>
              <ArrowUpRight className="h-3.5 w-3.5" />Get a Quote
            </Link>
          </div>
        </div>

        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-10 lg:col-span-2">
              <div className="inline-flex self-start items-center gap-3 rounded-2xl border border-[#e5d9c0] bg-white px-5 py-3 shadow-sm">
                <Clock className="h-5 w-5" style={{ color: accent }} />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280]">Project Specification</div>
                  <div className="text-sm font-black text-[#1a1a1a]">{project.specification}</div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-black text-[#1a1a1a]">Project Overview</h2>
                <p className="text-pretty text-base leading-relaxed text-[#4b5563]">{project.overview}</p>
              </div>

              <div>
                <h2 className="mb-5 text-xl font-black text-[#1a1a1a]">Scope of Work</h2>
                <div className="flex flex-col gap-3">
                  {project.scope.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-[#e5d9c0] bg-white px-5 py-4 shadow-sm">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-black text-white" style={{ background: accent }}>{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-sm font-medium leading-snug text-[#374151]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[#e5d9c0] bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Project Details</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">Status</div>
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide" style={{ background: `${accent}18`, color: accent }}>
                      {completed ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}{project.status}
                    </span>
                  </div>
                  <DetailsRow label="Work Type" value={project.specification} />
                  <DetailsRow label="Location" value={project.location} />
                  {project.client && <DetailsRow label="Client" value={project.client} />}
                  {project.quantity && <DetailsRow label="Quantity" value={project.quantity} />}
                  {project.value && <DetailsRow label="Contract Value" value={project.value} />}
                </div>
              </div>
              <div className="rounded-2xl border border-[#e5d9c0] bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Need a Similar Solution?</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">Talk to Excel Engineering about hydro-mechanical, irrigation, bridge and structural-steel works.</p>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: accent }}>Contact Us <ArrowUpRight className="h-4 w-4" /></Link>
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
          subheading={`Project details for Excel Engineering's ${project.status.toLowerCase()} work.`}
        />
      </main>
    </>
  )
}
