'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import ProximityHeading from '@/components/proximity-heading'
import ScrollReveal from '@/components/scroll-reveal'

const CRANE_IMAGES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-1-iSNS1EfAlxpeZ8gA8dz4WsGbO5nrhm.png',
    alt: 'Excel Engineering ACE Indian Crane on site with engineering team',
    title: 'Site Operations',
    tag: 'Mobile Crane',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-2-4NYFNBC67jKvuI3rETO9vLEDpvjBiU.png',
    alt: 'ACE 4x4 Excel Engineering crane lifting large steel panel',
    title: 'Steel Panel Erection',
    tag: 'All Terrain',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-3-fx7Fztmu3wI57Xx2PR1NF3gY3c6ZmL.png',
    alt: 'Excel Engineering Escorts crane tilting large steel plate at dusk',
    title: 'Steel Plate Handling',
    tag: 'Hydraulic Crane',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-5-bsLb6bWyLQX6rxmYmXf8HVsL4ZYHkH.png',
    alt: 'Excel Engineering reach stacker lifting massive steel box girder at sunset',
    title: 'Bridge Girder Lift',
    tag: 'Heavy Lift',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-6-AWWblz5lHTdToFCikQTXdKelNh1Z4X.png',
    alt: 'Excel Engineering crane working inside dam intake structure',
    title: 'Dam Structure Lift',
    tag: 'Crawler Crane',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-7-i22kO5vfyTmkZPqJFlQej1WET7QRkS.png',
    alt: 'Two orange Excel Engineering reach stackers at golden hour',
    title: 'Tandem Crane Operation',
    tag: 'Tandem Lift',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-8-angWclIVOA27aEw9kSbIj3e3ZPaMUX.png',
    alt: 'Excel Engineering crane installing bridge truss girder onto concrete tower',
    title: 'Bridge Truss Installation',
    tag: 'Infrastructure',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-9-abEDCJZ1MCezSdtLVy1bLG5pxpwM7v.png',
    alt: 'Excel Engineering excavator-crane erecting steel columns on hilltop',
    title: 'Column Erection',
    tag: 'Mobile Crane',
  },
]

export default function CraneGallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + CRANE_IMAGES.length) % CRANE_IMAGES.length : null))
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % CRANE_IMAGES.length : null))

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
              <ProximityHeading>Crane Operations in Action</ProximityHeading>
            </h2>
            <ScrollReveal className="mt-3 max-w-lg">
            <p className="text-[#6b7280] text-base mt-3 max-w-lg text-pretty">
              Real project photography from Excel Engineering crane operations across infrastructure, industrial, and civil construction sites.
            </p>
            </ScrollReveal>
          </div>
          <a
            href="/gallery?category=cranes"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1a1a1a]"
          >
            View Full Gallery
          </a>
        </div>

        {/* Masonry columns — zero gaps by design */}
        <div className="-mx-6 overflow-hidden pb-3 md:-mx-12 lg:-mx-20">
          <div className="dam-gallery-marquee-track gap-4 px-6 md:px-12 lg:px-20">
          {[...CRANE_IMAGES, ...CRANE_IMAGES].map((img, i) => (
            <div
              key={`${img.title}-${i}`}
              className="relative group aspect-[4/3] w-[16rem] shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-[0_20px_35px_-24px_rgba(14,92,61,.7)] sm:w-[20rem] lg:w-[23rem]"
              onClick={() => openLightbox(i % CRANE_IMAGES.length)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 368px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Tag pill */}
              <div className="absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
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
              src={CRANE_IMAGES[lightbox].src}
              alt={CRANE_IMAGES[lightbox].alt}
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
            <span className="text-[#f5a623] font-semibold text-sm">{CRANE_IMAGES[lightbox].tag}</span>
            <span className="text-white/40">—</span>
            <span className="text-white/80 text-sm">{CRANE_IMAGES[lightbox].title}</span>
            <span className="text-white/40 text-sm ml-4">{lightbox + 1} / {CRANE_IMAGES.length}</span>
          </div>
        </div>
      )}
    </section>
  )
}
