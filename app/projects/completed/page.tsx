'use client'

import Navbar from '@/components/navbar'
import ServiceFaqSection from '@/components/service-faq-section'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, MapPin, Calendar, Building2, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react'

const stats = [
  { value: '2+',   label: 'Projects Completed' },
  { value: '25+',  label: 'Years of Experience' },
  { value: 'M.P.', label: 'Primary State' },
  { value: 'WRD',  label: 'Govt. Authority Served' },
]

type Category = 'All' | 'Dam Construction' | 'Fabrication' | 'Irrigation' | 'Infrastructure'

const projects: {
  title: string
  location: string
  client: string
  authority: string
  completedDate: string
  category: Category
  description: string
  highlights: string[]
  outcome: string
  images: { src: string; alt: string }[]
}[] = [
  {
    title: 'Radial Gate 12.00 × 8.30 MTR — Barkheda Medium Irrigation Project',
    location: 'WRD Manawar, Dist. Dhar, Madhya Pradesh',
    client: 'Harikrisha Infrastructure, Kutch, Gujarat (Sub Contractor Means)',
    authority: 'Water Resources Department, M.P.',
    completedDate: 'Completed',
    category: 'Dam Construction',
    description:
      'Design, Drawing, Supply, Fabrication and Erection of Radial Gate, Top Log Gate, Pluice Gate, Hoist, Bridge Gentry Crane Structure for Barkheda Medium Irrigation Project, WRD Manawar Dist. Dhar M.P. Executed as Sub Contractor to Harikrisha Infrastructure, Kutch, Gujarat — Excel Engineering, Bhopal.',
    highlights: [
      'Radial gate — 12.00 × 8.30 MTR dimensions',
      'Top log gate fabrication and supply',
      'Pluice gate design, supply and installation',
      'Bridge gentry crane structure',
      'Hoist systems — complete mechanical and electrical',
      'Full erection at WRD Manawar project site',
    ],
    outcome: 'The completed gate structures at Barkheda Medium Irrigation Project enable controlled water release and storage for irrigation across the WRD Manawar command area in Dist. Dhar, M.P., serving the local agricultural community.',
    images: [
      {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-R6hNEvtRgvlhVBKmjXgxAXQkCZPe0b.png',
        alt: 'Completed dam project — aerial reservoir view with radial gates',
      },
      {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png',
        alt: 'Dam gate structures with concrete piers and reservoir',
      },
      {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0478-clean%20%281%29-g4mS1XgRKpfks3GH0ud6c3RX3JrHGn.png',
        alt: 'Radial gate close-up showing gate face and downstream channel',
      },
    ],
  },
  {
    title: 'Vertical Spillway Gate 15.00 × 4.00 MTR — Bankpura Project',
    location: 'Bankpura Project, Dist. Rajgarh, Madhya Pradesh',
    client: 'W.R.D. C.M.U. Bhopal',
    authority: 'Under Division Dy. Director & Ex. Engineer S.S Division, C.M.U. Bhopal, W.R.D.',
    completedDate: 'Completed',
    category: 'Irrigation',
    description:
      'Fabrication and erection testing and commissioning of Vertical Spillway Gates, along with all the allied components at Bankpura Project, Dist. Rajgarh, M.P. Work executed under the direct supervision of the Division Dy. Director & Ex. Engineer, S.S Division C.M.U. Bhopal Water Resources Department.',
    highlights: [
      'Vertical spillway gate — 15.00 × 4.00 MTR dimensions',
      'Full fabrication, erection, testing and commissioning',
      'All allied components within scope',
      'Executed under W.R.D. C.M.U. Bhopal division oversight',
      'Compliance with Water Resources Department specifications',
    ],
    outcome: 'The Vertical Spillway Gates at Bankpura Project are fully operational, providing reliable water level control and flood discharge management for the irrigation command area in Dist. Rajgarh, M.P.',
    images: [
      {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png',
        alt: 'Completed spillway project — top-down aerial with yellow hoists',
      },
      {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
        alt: 'Dam structure aerial with gate structures and reservoir',
      },
    ],
  },
]

const faqs = [
  {
    q: 'What was the scope at the Barkheda Medium Irrigation Project, Dist. Dhar, M.P.?',
    a: 'At Barkheda, Excel Engineering executed the Design, Drawing, Supply, Fabrication and Erection of a Radial Gate (12.00 × 8.30 MTR), Top Log Gate, Pluice Gate, Hoist, and Bridge Gentry Crane Structure for the WRD Manawar irrigation project. We served as Sub Contractor to Harikrisha Infrastructure, Kutch, Gujarat.',
  },
  {
    q: 'What was completed at the Bankpura Project in Dist. Rajgarh, M.P.?',
    a: 'At Bankpura Project, we completed the Fabrication, Erection, Testing and Commissioning of Vertical Spillway Gates (15.00 × 4.00 MTR) along with all allied components. The project was carried out under the supervision of the Dy. Director & Ex. Engineer, S.S Division C.M.U. Bhopal, Water Resources Department.',
  },
  {
    q: 'Does Excel Engineering work on government Water Resources Department (WRD) projects?',
    a: 'Yes. Excel Engineering has direct experience working under Water Resources Department (WRD) divisions in Madhya Pradesh. We understand the documentation, inspection, and commissioning protocols required by government irrigation authorities.',
  },
  {
    q: 'Can Excel Engineering provide project references or completion certificates?',
    a: 'Yes. For qualified clients, tender evaluators, and project authorities, we can provide project completion records, as-built drawings, commissioning reports, and photographic documentation. Contact us with your specific requirements.',
  },
]

export default function CompletedProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [lightboxProject, setLightboxProject] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<number>(0)
  const categories: Category[] = ['All', 'Dam Construction', 'Fabrication', 'Irrigation', 'Infrastructure']

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const openLightbox = (projectIdx: number, imgIdx: number) => {
    setLightboxProject(projectIdx)
    setLightboxImage(imgIdx)
  }
  const closeLightbox = () => setLightboxProject(null)
  const prevImage = () => {
    if (lightboxProject === null) return
    const imgs = filtered[lightboxProject].images
    setLightboxImage((i) => (i - 1 + imgs.length) % imgs.length)
  }
  const nextImage = () => {
    if (lightboxProject === null) return
    const imgs = filtered[lightboxProject].images
    setLightboxImage((i) => (i + 1) % imgs.length)
  }

  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero */}
        <section className="relative min-h-[52vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-R6hNEvtRgvlhVBKmjXgxAXQkCZPe0b.png"
              alt="Completed Excel Engineering dam project — full reservoir impoundment"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-36">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f5a623]" />
              <span className="text-[#f5a623] font-semibold text-xs uppercase tracking-widest">
                Excel Engineering
              </span>
            </div>
            <h1
              className="font-black text-white text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Completed Projects
            </h1>
            <p className="text-white/65 text-base max-w-xl text-pretty leading-relaxed">
              A portfolio of successfully delivered dam gate, fabrication, and irrigation projects by Excel Engineering — built to last, commissioned to perform.
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

        {/* Filter bar */}
        <section className="py-10 px-6 md:px-12 lg:px-20 bg-white border-b border-[#e5e7eb]">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
            <span className="text-[#6b7280] text-xs font-semibold uppercase tracking-widest mr-2">
              Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-[#f5a623] text-white border-[#f5a623] shadow-sm'
                    : 'bg-white text-[#374151] border-[#e5e7eb] hover:border-[#f5a623]/50 hover:text-[#c27f00]'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-[#9ca3af] text-xs font-medium">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </section>

        {/* Project cards */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#f5efe0]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            {filtered.map((project, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-[#e5d9c0] hover:shadow-lg hover:border-[#f5a623]/40 transition-all duration-300"
              >
                {/* Image strip */}
                <div className="flex gap-2 p-4 bg-[#f5efe0]">
                  {project.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={() => openLightbox(i, imgIdx)}
                      className={`relative flex-1 h-40 rounded-xl overflow-hidden cursor-zoom-in group ${
                        imgIdx === 0 ? 'flex-[2]' : 'flex-1'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 px-3 py-1.5 rounded-full">
                          View
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col gap-5">

                  {/* Title + category */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block bg-[#111111] text-[#f5a623] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                        {project.category}
                      </span>
                      <h2 className="font-black text-[#1a1a1a] text-xl leading-snug text-balance">
                        {project.title}
                      </h2>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2 bg-[#e85d3f]/10 text-[#e85d3f] border border-[#e85d3f]/25 px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold uppercase tracking-wide">Completed</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <div className="flex items-center gap-1.5 text-[#6b7280] text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#6b7280] text-xs font-medium">
                      <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#6b7280] text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      {project.authority}
                    </div>
                  </div>

                  <p className="text-[#6b7280] text-sm leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  {/* Two-col: highlights + outcome */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-[#1a1a1a] font-extrabold text-xs uppercase tracking-widest mb-3">
                        Scope Highlights
                      </h3>
                      <div className="flex flex-col gap-2">
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623] flex-shrink-0 mt-1.5" />
                            <span className="text-[#374151] text-xs font-medium leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#f5efe0] rounded-2xl p-5 border border-[#e5d9c0]">
                      <h3 className="text-[#1a1a1a] font-extrabold text-xs uppercase tracking-widest mb-2">
                        Project Outcome
                      </h3>
                      <p className="text-[#374151] text-sm leading-relaxed text-pretty">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <ServiceFaqSection
          faqs={faqs}
          heading="Completed Projects — Common Questions"
          subheading="Information on documentation, maintenance support, and quality standards for Excel Engineering delivered projects."
        />

        {/* CTA */}
        <section className="bg-[#111111] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-white font-black text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-white/65 text-base mb-8 text-pretty">
              Let our proven delivery record speak for itself. Contact us for a consultation and project quote.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-full shadow-sm"
            >
              <ArrowUpRight className="w-4 h-4" />
              Get Free Quote
            </Link>
          </div>
        </section>

      </main>

      {/* Lightbox */}
      {lightboxProject !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-5xl mx-14"
            style={{ aspectRatio: '16/10' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxProject].images[lightboxImage].src}
              alt={filtered[lightboxProject].images[lightboxImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxImage + 1} / {filtered[lightboxProject].images.length}
          </div>
        </div>
      )}
    </>
  )
}
