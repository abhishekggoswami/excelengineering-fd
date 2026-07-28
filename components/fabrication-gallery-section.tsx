'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import ProximityHeading from '@/components/proximity-heading'
import ScrollReveal from '@/components/scroll-reveal'

const FABRICATION_IMAGES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-1-x1oRQc8uzr8CQDeP0szPSUIsR5qp0O.png',
    alt: '4 engineers in white helmets inspecting large grey steel pipe and penstock assembly inside factory',
    title: 'Penstock Assembly — Quality Inspection',
    tag: 'Steel Pipes',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-2-OqEsbXQaWqM3sN1rqPki8bRSzLJFc6.png',
    alt: '2 engineers with CMM arm measuring large brass and bronze roller drums in precision measurement lab',
    title: 'CMM Precision Measurement — Roller Drums',
    tag: 'Precision',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-3-6pVGq67LRHTUGquLRRGArTzIeTFGf3.png',
    alt: '3 engineers at green CNC lathe machining a spiral rope drum with yellow overhead crane, Excel signage',
    title: 'CNC Lathe Machining — Rope Drum',
    tag: 'Machining',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-4-OGDkQ7IiqlHecWBrn1Z9Q3gYM2jUF0.png',
    alt: 'Wide outdoor yard with steel gate panels laid flat, 2 engineers inspecting beside blue factory shed',
    title: 'Steel Gate Panels — Yard Inspection',
    tag: 'Gates',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-5-nuIatlCzx9sE8NXG9B27Lf5MnXnklb.png',
    alt: 'Welder and engineer inspecting large modular steel shuttering formwork structure inside workshop',
    title: 'Modular Steel Shuttering — Assembly',
    tag: 'Shuttering',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-6-9A2vhp0UgXdhIvM6pGJU10QtrudnG3.png',
    alt: '2 engineers at green lathe turning rope drum with tool board and clean workshop in background',
    title: 'Precision Turning — Rope Drum',
    tag: 'Machining',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-7-b123yvfDnboxVIcR7KsC5LRxv57t3W.png',
    alt: '6 workers outdoors fabricating and assembling steel gate panels on red earth ground, Excel compound wall',
    title: 'Gate Fabrication — Outdoor Workshop',
    tag: 'Gates',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-8-HZnf03ub8SFJ2WjT3Ush4870G2Y3N7.png',
    alt: 'Engineer with clipboard inspecting rows of large brass rope drum spools inside factory hall, Excel logo',
    title: 'Rope Drum Spools — Batch Inspection',
    tag: 'Rope Drums',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-9-9BQbiDlz5j1OnkLmvTqc7D53tKBeo5.png',
    alt: '3 engineers welding large modular steel frame panel under yellow overhead crane with hi-vis vests',
    title: 'Structural Frame Welding — Overhead Crane',
    tag: 'Welding',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-10-rf8fqEqtCn2xtpRrudcDLhSddPZ39W.png',
    alt: 'Factory floor showing large steel spur gears, I-beam frames, air compressor, yellow hydraulic press',
    title: 'Spur Gears & Steel Frames — Factory Floor',
    tag: 'Gears',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-11-oDznUfspb3zcb9DT15xUc8BBPOvHWN.png',
    alt: 'Steel truss painted red oxide, engineer spray-coating, supervisor reviewing blueprints under yellow crane',
    title: 'Steel Truss — Surface Coating',
    tag: 'Trusses',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-12-Cqmy1QX7s0pNqhzQvS17iQcw23xQWn.png',
    alt: '3 workers guiding a massive black steel gate panel being lifted by yellow mobile crane outside factory',
    title: 'Heavy Gate Panel — Crane Dispatch',
    tag: 'Gates',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-13-qZGe1DmzGL0IU6zWLOAu7YMJGADDXa.png',
    alt: '2 engineers guiding a large black steel gate panel suspended from overhead crane hook in clean yard',
    title: 'Gate Panel — Load Test',
    tag: 'Gates',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-14-8op6oiWsIzGS51gwyJoncte99de0Bj.png',
    alt: 'Wide factory floor — 4 hi-vis workers measuring and welding long steel channel frames, Excel logo on wall',
    title: 'Steel Channel Frames — Floor Operations',
    tag: 'Welding',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-15-pwRXLiYfiAEQhzT7a2BBoMLrNONgzO.png',
    alt: '2 engineers loading large red oxide steel hopper structures onto truck under yellow overhead crane',
    title: 'Finished Fabrications — Truck Loading',
    tag: 'Dispatch',
  },
]

export default function FabricationGallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prevImg = () => setLightbox((l) => (l !== null ? (l - 1 + FABRICATION_IMAGES.length) % FABRICATION_IMAGES.length : null))
  const nextImg = () => setLightbox((l) => (l !== null ? (l + 1) % FABRICATION_IMAGES.length : null))

  return (
    <section className="bg-[#f5efe0] px-6 py-24 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Project Gallery
            </span>
          </div>
          <h2
            className="text-balance font-black leading-tight text-[#1a1a1a]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            <ProximityHeading>Fabrication Works in Action</ProximityHeading>
          </h2>
          <ScrollReveal className="mt-3 max-w-lg">
          <p className="text-pretty text-base text-[#6b7280]">
            Real photography from our fabrication facility — machining, welding, assembly, and quality inspection.
          </p>
          </ScrollReveal>
          </div>
          <a
            href="/gallery?category=Fabrication"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1a1a1a]"
          >
            View Full Gallery
          </a>
        </div>

        {/* 3-column masonry */}
        <div className="-mx-6 overflow-hidden pb-3 md:-mx-12 lg:-mx-20">
          <div className="dam-gallery-marquee-track gap-4 px-6 md:px-12 lg:px-20">
          {[...FABRICATION_IMAGES, ...FABRICATION_IMAGES].map((img, i) => (
            <div
              key={`${img.title}-${i}`}
              className="relative group aspect-[4/3] w-[16rem] shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-[#111] shadow-[0_20px_35px_-24px_rgba(14,92,61,.7)] sm:w-[20rem] lg:w-[23rem]"
              onClick={() => openLightbox(i % FABRICATION_IMAGES.length)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 368px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {img.tag}
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-sm leading-tight">{img.title}</p>
              </div>
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
          className="fixed inset-0 z-[300] bg-black/96 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImg() }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-6xl mx-20"
            style={{ aspectRatio: '16/10' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={FABRICATION_IMAGES[lightbox].src}
              alt={FABRICATION_IMAGES[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImg() }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-8 pb-6 pt-10">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#0e5c3d] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {FABRICATION_IMAGES[lightbox].tag}
                </span>
                <span className="text-white font-semibold text-sm">
                  {FABRICATION_IMAGES[lightbox].title}
                </span>
              </div>
              <span className="text-white/50 text-sm font-mono flex-shrink-0">
                {String(lightbox + 1).padStart(2, '0')} / {String(FABRICATION_IMAGES.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
