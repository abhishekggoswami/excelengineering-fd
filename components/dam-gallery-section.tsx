'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import ProximityHeading from '@/components/proximity-heading'
import ScrollReveal from '@/components/scroll-reveal'

const DAM_IMAGES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png',
    alt: 'Completed barrage with blue gates and yellow gantry crane, green reservoir',
    title: 'Completed Barrage — Blue Gates',
    tag: 'Barrage',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0474-clean-kBioVeCMv3LE44PW0xXN429b4PbzW1.png',
    alt: 'Aerial side view under construction, concrete piers, red stop-log frames, river on right',
    title: 'Stop-Log Gate Installation',
    tag: 'Under Construction',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
    alt: 'Aerial of dam with red radial gates between concrete piers and yellow crane on site',
    title: 'Aerial — Radial Gates',
    tag: 'Aerial View',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-R6hNEvtRgvlhVBKmjXgxAXQkCZPe0b.png',
    alt: 'Wide aerial showing full reservoir, blue gate frames, yellow gantry, submerged trees',
    title: 'Full Reservoir Impoundment',
    tag: 'Completed',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0478-clean%20%281%29-g4mS1XgRKpfks3GH0ud6c3RX3JrHGn.png',
    alt: 'Ground-level view along dam face with red radial gates between white piers, turquoise water',
    title: 'Radial Gate Face — Ground Level',
    tag: 'Barrage',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png',
    alt: 'Top-down aerial of completed barrage, yellow hoists on blue frames, water cascading',
    title: 'Spillway in Operation',
    tag: 'Operational',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0481-clean%202-eXJnNCS3OECYkxw9QuiHopHlg3FMJi.png',
    alt: 'Golden-hour wide shot of dam under construction, cranes on top deck, teal water reflection',
    title: 'Golden Hour — Construction',
    tag: 'Under Construction',
    wide: false,
  },
]

export default function DamGallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + DAM_IMAGES.length) % DAM_IMAGES.length : null))
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % DAM_IMAGES.length : null))

  return (
    <section className="bg-[#f5efe0] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                Project Gallery
              </span>
            </div>
            <h2
              className="font-black text-[#1a1a1a] text-balance leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              <ProximityHeading>Dam Construction in Action</ProximityHeading>
            </h2>
            <ScrollReveal className="mt-3 max-w-lg">
            <p className="text-[#6b7280] text-base text-pretty">
              Real project photography from Excel Engineering dam construction sites — barrages, gravity dams, radial gates, and reservoir structures across India.
            </p>
            </ScrollReveal>
          </div>
          <a
            href="/gallery?category=Dam+Construction"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-full transition-colors flex-shrink-0"
          >
            View Full Gallery
          </a>
        </div>

        {/* Masonry columns — zero gaps by design */}
        <div className="-mx-6 overflow-hidden pb-3 md:-mx-12 lg:-mx-20">
          <div className="dam-gallery-marquee-track gap-4 px-6 md:px-12 lg:px-20">
          {[...DAM_IMAGES, ...DAM_IMAGES].map((img, i) => (
            <div
              key={`${img.title}-${i}`}
              className="group relative aspect-[4/3] w-[16rem] shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-[0_20px_35px_-24px_rgba(14,92,61,.7)] sm:w-[20rem] lg:w-[23rem]"
              onClick={() => openLightbox(i % DAM_IMAGES.length)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 368px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Tag pill */}
              <div className="absolute top-3 left-3 bg-black/45 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                {img.tag}
              </div>
              {/* Hover title */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-sm leading-tight">{img.title}</p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-5xl mx-8"
            style={{ aspectRatio: '16/10' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={DAM_IMAGES[lightbox].src}
              alt={DAM_IMAGES[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span className="text-[#f5a623] font-semibold text-sm">{DAM_IMAGES[lightbox].tag}</span>
            <span className="text-white/40">—</span>
            <span className="text-white/80 text-sm">{DAM_IMAGES[lightbox].title}</span>
            <span className="text-white/40 text-sm ml-4">{lightbox + 1} / {DAM_IMAGES.length}</span>
          </div>
        </div>
      )}
    </section>
  )
}
