'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2, Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export type GalleryExperienceImage = {
  src: string
  alt: string
  title: string
  category: string
}

// Keep the browsing order intentional: project work first, supporting imagery next,
// and crane photography at the end of the complete collection.
const CATEGORIES = ['Dam Construction', 'Fabrication', 'Irrigation', 'Offices', 'Factory', 'Cranes']
const CATEGORY_ORDER: Record<string, number> = {
  'Dam Construction': 0,
  Fabrication: 1,
  Irrigation: 2,
  Offices: 3,
  Factory: 4,
  Cranes: 5,
}

function Photo({
  image,
  fallback,
  className,
  sizes,
}: {
  image: GalleryExperienceImage
  fallback: string
  className: string
  sizes: string
}) {
  const [src, setSrc] = useState(image.src)

  useEffect(() => setSrc(image.src), [image.src])

  return (
    <Image
      src={src}
      alt={image.alt}
      fill
      unoptimized
      sizes={sizes}
      className={className}
      onError={() => setSrc(fallback)}
    />
  )
}

export default function GalleryExperience({
  images,
  initialCategory,
  initialIndex = 0,
  searchQuery = '',
}: {
  images: GalleryExperienceImage[]
  initialCategory: string
  initialIndex?: number
  searchQuery?: string
}) {
  const active = CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  const [index, setIndex] = useState(initialIndex)
  const [selected, setSelected] = useState<number | null>(null)
  const orderedImages = useMemo(
    () => [...images].sort((a, b) => (CATEGORY_ORDER[a.category] ?? 99) - (CATEGORY_ORDER[b.category] ?? 99)),
    [images],
  )
  const normalizedSearch = searchQuery.trim().toLowerCase()
  const filtered = useMemo(
    () => (active === 'All' ? orderedImages : orderedImages.filter((image) => image.category === active)).filter((image) => {
      if (!normalizedSearch) return true
      return [image.title, image.alt, image.category].some((value) => value.toLowerCase().includes(normalizedSearch))
    }),
    [active, normalizedSearch, orderedImages],
  )
  const fallback = images[0]?.src ?? ''

  const galleryHref = (category = active, slide?: number, image?: number) => {
    const params = new URLSearchParams()
    if (category !== 'All') params.set('category', category)
    if (searchQuery.trim()) params.set('search', searchQuery.trim())
    if (slide !== undefined) params.set('slide', String(slide))
    if (image !== undefined) params.set('image', String(image))
    const query = params.toString()
    return query ? '/gallery?' + query : '/gallery'
  }

  useEffect(() => {
    if (filtered.length < 2) return
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % filtered.length), 4200)
    return () => window.clearInterval(timer)
  }, [filtered.length])

  const selectedImage = selected === null ? null : filtered[selected]

  return (
    <>
      <section className="border-b border-[#ece8df] bg-white px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 text-center font-serif text-xl font-semibold text-[#374151] sm:text-2xl">Quick Search</div>
          <form action="/gallery" method="get" className="mx-auto mb-8 flex max-w-3xl items-center overflow-hidden rounded-full border border-[#e8e3d8] bg-[#fbfaf7] px-4 shadow-sm transition-shadow focus-within:shadow-[0_0_0_4px_rgba(14,92,61,.12)]">
            <Search className="ml-1 h-4 w-4 text-[#e85d3f]" />
            {active !== 'All' && <input type="hidden" name="category" value={active} />}
            <input name="search" defaultValue={searchQuery} aria-label="Search project photography" placeholder="Search project photography" className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-[#1a1a1a] outline-none placeholder:text-[#7b8190] sm:text-base" />
            <button type="submit" className="rounded-full bg-[#0e5c3d] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#0a472f] sm:px-7">Search</button>
          </form>
          <div className="flex justify-start gap-3 overflow-x-auto pb-3 sm:justify-center">
            {CATEGORIES.map((category) => {
              const preview = images.find((image) => image.category === category) ?? images[0]
              const count = images.filter((image) => image.category === category).length
              const isActive = active === category
              return (
                <a
                  key={category}
                  href={galleryHref(category)}
                  aria-current={isActive ? 'page' : undefined}
                  className={'group relative h-[116px] w-[132px] shrink-0 overflow-hidden rounded-2xl border text-left shadow-md transition-all sm:h-[128px] sm:w-[150px] ' + (isActive ? 'border-[#0e5c3d] ring-2 ring-[#0e5c3d]/20' : 'border-transparent hover:-translate-y-1')}
                >
                  <Photo image={preview} fallback={fallback} sizes="150px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={'absolute inset-0 ' + (isActive ? 'bg-[#0e5c3d]/38' : 'bg-black/35')} />
                  <span className="absolute inset-x-2 bottom-2 rounded bg-black/40 px-2 py-1.5 text-[11px] font-bold leading-tight text-white">{category}</span>
                  <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-black text-[#0e5c3d]">{count}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fbfaf7] px-5 py-14 sm:px-6 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e85d3f]">{active} collection</p>
            <h2 className="mt-3 text-balance text-3xl font-black text-[#1a1a1a] sm:text-4xl">Stories from the field</h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-[#6b7280] sm:text-base">Each image takes centre stage, then makes way for the next moment from Excel Engineering.</p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#d7d0c1] bg-white px-6 py-20 text-center">
              <p className="text-lg font-bold text-[#374151]">Photos coming soon</p>
              <p className="mt-2 text-sm text-[#6b7280]">We are preparing this project collection.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-5 md:gap-4 lg:gap-5">
                {[-2, -1, 0, 1, 2].map((offset) => {
                  const imageIndex = (index + offset + filtered.length) % filtered.length
                  const image = filtered[imageIndex]
                  const center = offset === 0
                  return (
                    <a
                      key={offset}
                      href={center ? galleryHref(active, undefined, imageIndex) : galleryHref(active, imageIndex)}
                      className={(center ? 'relative block md:scale-110 md:z-10 ' : 'relative hidden md:block ') + 'group overflow-hidden rounded-2xl bg-[#e2e7e4] text-left shadow-[0_18px_45px_-24px_rgba(14,92,61,.7)] transition-transform duration-500'}
                    >
                      <div className={center ? 'relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[4/5]' : 'relative aspect-[4/5]'}>
                        <Photo image={image} fallback={fallback} sizes={center ? '(max-width: 768px) 92vw, 24vw' : '18vw'} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className={'absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent ' + (center ? 'opacity-100' : 'opacity-35')} />
                        {center && (
                          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                            <span className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">{image.category}</span>
                            <p className="text-balance text-lg font-black leading-tight sm:text-xl">{image.title}</p>
                          </div>
                        )}
                        {center && <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0e5c3d]"><Maximize2 className="h-4 w-4" /></span>}
                      </div>
                    </a>
                  )
                })}
              </div>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a href={galleryHref(active, (index - 1 + filtered.length) % filtered.length)} aria-label="Previous gallery image" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0e5c3d]/20 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white"><ChevronLeft className="h-5 w-5" /></a>
                <div className="flex items-center gap-1.5">{filtered.slice(0, Math.min(filtered.length, 10)).map((image, dot) => <a key={image.src} href={galleryHref(active, dot)} aria-label={'Show ' + image.title} className={'h-2 w-2 rounded-full ' + (dot === index ? 'bg-[#e85d3f]' : 'bg-[#0e5c3d]/20')} />)}</div>
                <span className="min-w-14 text-center text-xs font-bold tracking-widest text-[#6b7280]">{String(index + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}</span>
                <a href={galleryHref(active, (index + 1) % filtered.length)} aria-label="Next gallery image" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0e5c3d] text-white transition-transform hover:scale-105"><ChevronRight className="h-5 w-5" /></a>
              </div>
            </>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 p-4 sm:p-8">
          <button type="button" onClick={() => setSelected(null)} aria-label="Close image" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"><X className="h-5 w-5" /></button>
          <button type="button" onClick={() => setSelected((current) => current === null ? null : (current - 1 + filtered.length) % filtered.length)} aria-label="Previous image" className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"><ChevronLeft className="h-6 w-6" /></button>
          <div className="relative h-[min(74svh,48rem)] w-full max-w-6xl"><Photo image={selectedImage} fallback={fallback} sizes="100vw" className="object-contain" /></div>
          <button type="button" onClick={() => setSelected((current) => current === null ? null : (current + 1) % filtered.length)} aria-label="Next image" className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"><ChevronRight className="h-6 w-6" /></button>
        </div>
      )}
    </>
  )
}
