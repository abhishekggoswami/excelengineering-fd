'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

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
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Project Photography
            </span>
            <div className="w-8 h-px bg-[#e85d3f]" />
          </div>
          <h2
            className="font-black text-white text-balance leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            Fabrication Works Gallery
          </h2>
          <p className="text-white/50 text-base mt-3 max-w-xl mx-auto text-pretty">
            Real photography from our fabrication facility — machining, welding, assembly, and quality inspection.
          </p>
        </div>

        {/* 3-column masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {FABRICATION_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-[#111] mb-4 break-inside-avoid"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 left-3 bg-[#0e5c3d]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
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
