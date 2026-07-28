import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight, ArrowLeft, Maximize2, Search, ZoomIn } from 'lucide-react'
import Navbar from '@/components/navbar'
import GalleryExperience from '@/components/gallery-experience'

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES = ['Dam Construction', 'Fabrication', 'Office & Factory', 'Cranes'] as const
type Category = (typeof CATEGORIES)[number]

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: Category
  wide?: boolean
}

const GALLERY_IMAGES: GalleryImage[] = [
  // ── Cranes ──────────────────────────────────────────────────────────────
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-1-iSNS1EfAlxpeZ8gA8dz4WsGbO5nrhm.png',
    alt: 'Excel Engineering ACE Indian Crane on red soil site with engineering team',
    title: 'Site Operations — ACE Indian Crane',
    category: 'Cranes',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-2-4NYFNBC67jKvuI3rETO9vLEDpvjBiU.png',
    alt: 'ACE 4x4 Excel Engineering crane lifting large red steel panel between concrete pillars',
    title: 'Steel Panel Erection — ACE 4x4',
    category: 'Cranes',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-3-fx7Fztmu3wI57Xx2PR1NF3gY3c6ZmL.png',
    alt: 'Excel Engineering Escorts crane tilting large steel plate at dusk',
    title: 'Steel Plate Handling — Escorts Crane',
    category: 'Cranes',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-5-bsLb6bWyLQX6rxmYmXf8HVsL4ZYHkH.png',
    alt: 'Excel Engineering reach stacker lifting massive steel box girder at sunset',
    title: 'Bridge Girder Lift — Reach Stacker',
    category: 'Cranes',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-6-AWWblz5lHTdToFCikQTXdKelNh1Z4X.png',
    alt: 'Excel Engineering crane working inside dam intake structure',
    title: 'Dam Structure Lift — Crawler Crane',
    category: 'Cranes',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-7-i22kO5vfyTmkZPqJFlQej1WET7QRkS.png',
    alt: 'Two orange Excel Engineering reach stackers framing red steel roof at golden hour',
    title: 'Tandem Crane Operation — Golden Hour',
    category: 'Cranes',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-8-angWclIVOA27aEw9kSbIj3e3ZPaMUX.png',
    alt: 'Excel Engineering crane installing bridge truss girder onto concrete tower',
    title: 'Bridge Truss Installation',
    category: 'Cranes',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-9-abEDCJZ1MCezSdtLVy1bLG5pxpwM7v.png',
    alt: 'Excel Engineering excavator-crane erecting steel columns on hilltop construction site',
    title: 'Column Erection — Hilltop Site',
    category: 'Cranes',
  },

  // ── Dam Construction ─────────────────────────────────────────────────────
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png',
    alt: 'Completed barrage with blue steel gates and yellow gantry crane, green reservoir',
    title: 'Completed Barrage — Blue Gates',
    category: 'Dam Construction',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0474-clean-kBioVeCMv3LE44PW0xXN429b4PbzW1.png',
    alt: 'Aerial side view of dam under construction with concrete piers and red stop-log frames, river on right',
    title: 'Stop-Log Gate Installation',
    category: 'Dam Construction',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
    alt: 'Aerial drone view of dam under construction with red radial gates between concrete piers and yellow crane',
    title: 'Aerial — Radial Gates Under Construction',
    category: 'Dam Construction',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-R6hNEvtRgvlhVBKmjXgxAXQkCZPe0b.png',
    alt: 'Wide aerial showing full reservoir behind completed dam with blue gate frames, yellow gantry, submerged trees',
    title: 'Full Reservoir Impoundment',
    category: 'Dam Construction',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0478-clean%20%281%29-g4mS1XgRKpfks3GH0ud6c3RX3JrHGn.png',
    alt: 'Ground-level view along dam face with large red radial gates between white concrete piers and turquoise water',
    title: 'Radial Gate Dam Face — Ground Level',
    category: 'Dam Construction',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0479-clean-Bf6zZ0GGD3FL3uy0urqoL0lTWF2IS3.png',
    alt: 'Top-down aerial of completed barrage with yellow hoists on blue steel frames, water cascading all bays',
    title: 'Spillway in Operation — All Bays Open',
    category: 'Dam Construction',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0481-clean%202-eXJnNCS3OECYkxw9QuiHopHlg3FMJi.png',
    alt: 'Golden-hour wide shot of dam under construction with cranes on top deck and teal water reflection',
    title: 'Golden Hour — Construction Phase',
    category: 'Dam Construction',
  },

  // ── Fabrication ──────────────────────────────────────────────────────────
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-1-x1oRQc8uzr8CQDeP0szPSUIsR5qp0O.png',
    alt: '4 engineers in white helmets inspecting large grey steel penstock pipe inside Excel Engineering factory',
    title: 'Penstock Assembly — Quality Inspection',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-2-OqEsbXQaWqM3sN1rqPki8bRSzLJFc6.png',
    alt: '2 engineers with CMM arm measuring large brass roller drums in precision measurement lab',
    title: 'CMM Precision Measurement — Roller Drums',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-3-6pVGq67LRHTUGquLRRGArTzIeTFGf3.png',
    alt: '3 engineers at green CNC lathe machining a spiral rope drum with yellow overhead crane',
    title: 'CNC Lathe Machining — Rope Drum',
    category: 'Fabrication',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-4-OGDkQ7IiqlHecWBrn1Z9Q3gYM2jUF0.png',
    alt: 'Wide outdoor yard — steel gate panels laid flat, 2 engineers inspecting beside blue factory shed',
    title: 'Steel Gate Panels — Yard Inspection',
    category: 'Fabrication',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-5-nuIatlCzx9sE8NXG9B27Lf5MnXnklb.png',
    alt: 'Welder and engineer inspecting large modular steel shuttering formwork structure inside workshop',
    title: 'Modular Steel Shuttering — Assembly',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-6-9A2vhp0UgXdhIvM6pGJU10QtrudnG3.png',
    alt: '2 engineers at green lathe turning rope drum, clean workshop with tool boards',
    title: 'Precision Turning — Workshop',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-8-HZnf03ub8SFJ2WjT3Ush4870G2Y3N7.png',
    alt: 'Engineer with clipboard inspecting rows of large brass rope drum spools inside factory hall',
    title: 'Rope Drum Spools — Batch Inspection',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-9-9BQbiDlz5j1OnkLmvTqc7D53tKBeo5.png',
    alt: '3 engineers welding large modular steel frame panel under yellow overhead crane with hi-vis vests',
    title: 'Structural Frame Welding',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-13-qZGe1DmzGL0IU6zWLOAu7YMJGADDXa.png',
    alt: '2 engineers guiding a large black steel gate panel suspended from overhead crane hook in clean yard',
    title: 'Gate Panel — Load Test',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-14-8op6oiWsIzGS51gwyJoncte99de0Bj.png',
    alt: 'Wide factory floor — 4 hi-vis workers measuring and welding long steel channel frames, Excel logo on wall',
    title: 'Steel Channel Frames — Floor Operations',
    category: 'Fabrication',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-15-pwRXLiYfiAEQhzT7a2BBoMLrNONgzO.png',
    alt: '2 engineers loading large red oxide steel hopper structures onto truck under yellow overhead crane',
    title: 'Finished Fabrications — Truck Loading',
    category: 'Fabrication',
  },

  // ── Factory ──────────────────────────────────────────────────────────────
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-2-i1rKhoVsmbdni9Uf0gK0zyiWK4OgAp.png',
    alt: 'Excel Engineering blue corrugated steel factory building exterior with large company signage and entrance',
    title: 'Factory Building — Main Entrance',
    category: 'Office & Factory',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-3-i2lbNNDwouDlnv8157stL3w8xw187r.png',
    alt: 'Aerial view of Excel Engineering stone-clad office annex alongside blue factory shed and landscaped grounds',
    title: 'Office Annex & Factory Shed — Aerial',
    category: 'Office & Factory',
  },

  // ── Offices ──────────────────────────────────────────────────────────────
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-2-w6VCXy7qHOKXrQUmJ3DauF88gyjlmF.png',
    alt: 'Open cubicle office floor with dual-monitor setups and Gantt charts on whiteboard, October 2024 calendar',
    title: 'Project Planning Office',
    category: 'Office & Factory',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-1-LwjeJCzJJDM6tEquprCcIaBP3mAybA.png',
    alt: 'Engineer smiling at CAD workstation with dual monitors showing engineering drawings and dashboards',
    title: 'CAD & Design Workstation',
    category: 'Office & Factory',
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CATEGORY_COUNTS = CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
  acc[cat] = GALLERY_IMAGES.filter((img) => img.category === cat).length
  return acc
}, {})

const HERO_COLLAGE = Array.from({ length: 108 }, (_, index) => GALLERY_IMAGES[index % GALLERY_IMAGES.length])

const categoryPreview = (category: Category) =>
  GALLERY_IMAGES.find((image) => image.category === category) ?? GALLERY_IMAGES[0]

const galleryCarouselScript = [
  '(() => {',
  "  const root = document.getElementById('gallery-photo-carousel')",
  "  if (!root || root.dataset.initialized === 'true') return",
  "  root.dataset.initialized = 'true'",
  "  const track = root.querySelector('[data-gallery-track]')",
  "  const count = Number(root.dataset.count || '1')",
  "  const counter = root.querySelector('[data-gallery-counter]')",
  "  const dots = Array.from(root.querySelectorAll('[data-gallery-index]'))",
  '  let index = 0; let timer',
  '  const render = (nextIndex) => {',
  '    index = ((nextIndex % count) + count) % count',
  "    track.style.transform = 'translate3d(-' + (index * 100) + '%, 0, 0)'",
  "    if (counter) counter.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(count).padStart(2, '0')",
  "    dots.forEach((dot, dotIndex) => dot.classList.toggle('bg-[#e85d3f]', dotIndex === index))",
  "    dots.forEach((dot, dotIndex) => dot.classList.toggle('bg-[#0e5c3d]/20', dotIndex !== index))",
  '  }',
  '  const start = () => { window.clearInterval(timer); timer = window.setInterval(() => render(index + 1), 4200) }',
  "  root.addEventListener('click', (event) => {",
  "    const control = event.target.closest('[data-gallery-action]')",
  '    if (!control) return',
  '    const action = control.dataset.galleryAction',
  "    if (action === 'next') render(index + 1)",
  "    if (action === 'previous') render(index - 1)",
  "    if (action === 'index') render(Number(control.dataset.galleryIndex))",
  '    start()',
  '  })',
  "  root.addEventListener('pointerenter', () => window.clearInterval(timer))",
  "  root.addEventListener('pointerleave', start)",
  '  render(0); start()',
  '})()',
].join('\n')

// ─── Inner component (reads searchParams) ────────────────────────────────────

function GalleryContent({ params }: { params: { category?: string; image?: string; slide?: string; search?: string } }) {
  const requestedCategory =
    params.category === 'Factory' || params.category === 'Offices'
      ? 'Office & Factory'
      : params.category
  const initialCat = (requestedCategory ?? 'Dam Construction') as Category
  const validInitial = CATEGORIES.includes(initialCat) ? initialCat : 'Dam Construction'

  const active = validInitial
  const searchQuery = params.search?.trim() ?? ''
  const normalizedSearch = searchQuery.toLowerCase()
  const filtered = GALLERY_IMAGES.filter((img) => img.category === active).filter((image) => {
    if (!normalizedSearch) return true
    return [image.title, image.alt, image.category].some((value) => value.toLowerCase().includes(normalizedSearch))
  })
  const requestedImage = Number.parseInt(params.image ?? '', 10)
  const requestedSlide = Number.parseInt(params.slide ?? '', 10)
  const initialSlide = filtered.length > 0 && Number.isInteger(requestedSlide)
    ? ((requestedSlide % filtered.length) + filtered.length) % filtered.length
    : 0
  const lightbox = Number.isInteger(requestedImage) && requestedImage >= 0 && requestedImage < filtered.length
    ? requestedImage
    : null
  const galleryHref = (imageIndex?: number) => {
    const params = new URLSearchParams()
    params.set('category', active)
    if (imageIndex !== undefined) params.set('image', String(imageIndex))
    const query = params.toString()
    return query ? `/gallery?${query}` : '/gallery'
  }

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">

        {/* Page header */}
        <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-[#111111] px-6 pb-12 pt-28 md:min-h-[64svh] md:px-12 lg:px-20">
          <div aria-hidden="true" className="absolute inset-0 grid grid-cols-12 grid-rows-[repeat(9,minmax(0,1fr))] gap-px opacity-95">
            {HERO_COLLAGE.map((image, index) => (
              <div
                key={image.src + index}
                className="relative min-h-0 overflow-hidden bg-[#1a1a1a]"
                style={{
                  backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png')",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <Image src={image.src} alt="" fill unoptimized sizes="12vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.16)_0%,rgba(0,0,0,.68)_100%)]" />
          <div className="mx-auto max-w-7xl relative z-10">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">
                Excel Engineering
              </span>
            </div>
            <h1
              className="text-white font-black text-balance leading-tight mb-3"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
            >
              Project Gallery
            </h1>
            <p className="text-white/65 text-base max-w-xl text-pretty">
              Real photography from Excel Engineering project sites across India — cranes, dam
              construction, fabrication works, and irrigation infrastructure.
            </p>
          </div>
        </section>

        <GalleryExperience images={GALLERY_IMAGES} initialCategory={active} initialIndex={initialSlide} searchQuery={searchQuery} />

        <section className="hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 md:px-12 lg:px-20">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#374151]">
              <Search className="h-4 w-4 text-[#e85d3f]" />
              <span>Browse project photography</span>
            </div>
            <div className="flex items-stretch gap-3 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const count = CATEGORY_COUNTS[cat]
                const isActive = active === cat
                const preview = categoryPreview(cat)
                return (
                  <a
                    key={cat}
                    href={'/gallery?category=' + encodeURIComponent(cat)}
                    className={'group relative flex w-28 shrink-0 items-end overflow-hidden rounded-xl border p-3 text-left shadow-sm transition-all duration-300 sm:w-32 ' + (isActive ? 'border-[#0e5c3d] ring-2 ring-[#0e5c3d]/15' : 'border-[#e5e7eb] hover:-translate-y-1 hover:border-[#e85d3f]/60')}
                  >
                    <Image src={preview.src} alt="" fill sizes="128px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className={'absolute inset-0 ' + (isActive ? 'bg-[#0e5c3d]/50' : 'bg-black/45 group-hover:bg-black/30')} />
                    <span className="relative z-10 text-xs font-bold leading-tight text-white">{cat}</span>
                    <span className="relative z-10 ml-auto rounded-full bg-white/90 px-1.5 py-0.5 text-[10px] font-black text-[#0e5c3d]">{count}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const count = CATEGORY_COUNTS[cat]
                const isActive = active === cat
                return (
                  <a
                    key={cat}
                    href={`/gallery?category=${encodeURIComponent(cat)}`}
                    target="_self"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                      isActive
                        ? 'bg-[#0e5c3d] text-white shadow-md'
                        : 'bg-[#f5efe0] text-[#374151] hover:bg-[#eae4d5]'
                    }`}
                  >
                    {cat}
                    <span
                      className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#0e5c3d]/10 text-[#0e5c3d]'
                      }`}
                    >
                      {count}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="hidden">

          {/* Category label + count */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                {active}
              </span>
            </div>
            <span className="text-[#6b7280] text-sm">
              {filtered.length} {filtered.length === 1 ? 'photo' : 'photos'}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <p className="text-[#6b7280] text-lg font-medium">No images in this category yet.</p>
              <p className="text-[#9ca3af] text-sm">Check back soon — more photos are being added.</p>
            </div>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filtered.map((img, i) => (
                <a
                  key={img.src}
                  href={galleryHref(i)}
                  target="_self"
                  aria-label={`Magnify ${img.title}`}
                  className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-2xl bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e85d3f]"
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
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e5c3d]/85 via-[#0e5c3d]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {img.category}
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute right-3 top-3 flex h-9 w-9 scale-75 items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  {/* Title on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <p className="text-white font-bold text-sm leading-snug text-pretty">
                      {img.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}

        </section>

        <section className="hidden">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 text-center sm:mb-14">
              <div className="mx-auto flex items-center gap-3"><div className="h-px w-8 bg-[#e85d3f]" /><span className="text-sm font-semibold uppercase tracking-widest text-[#e85d3f]">{active} collection</span><div className="h-px w-8 bg-[#e85d3f]" /></div>
              <h2 className="text-balance text-3xl font-black text-[#1a1a1a] sm:text-4xl">Stories from the field</h2>
              <p className="mx-auto max-w-xl text-pretty text-[#6b7280]">Each photograph takes centre stage, then makes way for the next moment from Excel Engineering.</p>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#d7d0c1] bg-white px-6 py-20 text-center">
                <p className="text-lg font-bold text-[#374151]">Photos coming soon</p>
                <p className="mt-2 text-sm text-[#6b7280]">We are preparing this project collection.</p>
              </div>
            ) : (
              <div id="gallery-photo-carousel" data-count={filtered.length}>
                <div className="overflow-visible">
                  <div data-gallery-track className="flex will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none">
                    {filtered.map((_, index) => (
                      <article key={index} className="grid min-w-full grid-cols-1 items-center gap-3 px-0 md:grid-cols-5 md:gap-4 lg:gap-5">
                        {[-2, -1, 0, 1, 2].map((offset) => {
                          const imageIndex = (index + offset + filtered.length) % filtered.length
                          const image = filtered[imageIndex]
                          const center = offset === 0
                          return (
                            <a
                              key={offset}
                              href={galleryHref(imageIndex)}
                              aria-label={'Magnify ' + image.title}
                              className={(center ? 'relative order-1 block md:order-none md:col-span-1 md:scale-110 md:z-10 ' : 'relative hidden md:block ') + 'group overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-[0_18px_45px_-24px_rgba(14,92,61,.7)] transition-transform duration-500'}
                            >
                              <div className={center ? 'relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[4/5]' : 'relative aspect-[4/5]'}>
                                <Image src={image.src} alt={image.alt} fill sizes={center ? '(max-width: 768px) 92vw, 24vw' : '18vw'} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className={'absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent ' + (center ? 'opacity-100' : 'opacity-35')} />
                                {center && (
                                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                                    <span className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">{image.category}</span>
                                    <p className="text-balance text-lg font-black leading-tight sm:text-xl">{image.title}</p>
                                  </div>
                                )}
                                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0e5c3d] opacity-0 transition-opacity duration-300 group-hover:opacity-100"><Maximize2 className="h-4 w-4" /></span>
                              </div>
                            </a>
                          )
                        })}
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-center gap-4">
                  <button type="button" data-gallery-action="previous" aria-label="Previous gallery image" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0e5c3d]/20 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
                  <div className="flex items-center gap-1.5">
                    {filtered.slice(0, Math.min(filtered.length, 10)).map((image, index) => <button key={image.src} type="button" data-gallery-action="index" data-gallery-index={index} aria-label={'Show ' + image.title} className={'h-2 w-2 rounded-full ' + (index === 0 ? 'bg-[#e85d3f]' : 'bg-[#0e5c3d]/20')} />)}
                  </div>
                  <span data-gallery-counter className="min-w-14 text-center text-xs font-bold tracking-widest text-[#6b7280]">01 / {String(filtered.length).padStart(2, '0')}</span>
                  <button type="button" data-gallery-action="next" aria-label="Next gallery image" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0e5c3d] text-white transition-transform hover:scale-105"><ChevronRight className="h-5 w-5" /></button>
                </div>
                <script dangerouslySetInnerHTML={{ __html: galleryCarouselScript }} />
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/96 p-3 sm:p-6">
          {/* Close */}
          <a
            href={galleryHref()}
            target="_self"
            aria-label="Close"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-5 sm:top-5"
          >
            <X className="w-5 h-5" />
          </a>

          {/* Prev */}
          <a
            href={galleryHref((lightbox - 1 + filtered.length) % filtered.length)}
            target="_self"
            aria-label="Previous"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </a>

          {/* Image */}
          <div className="relative mx-10 h-[min(72svh,44rem)] w-full max-w-6xl sm:mx-16">
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Next */}
          <a
            href={galleryHref((lightbox + 1) % filtered.length)}
            target="_self"
            aria-label="Next"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4 sm:h-12 sm:w-12"
          >
            <ChevronRight className="w-6 h-6" />
          </a>

          {/* Caption bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-4 pt-12 sm:px-8 sm:pb-6">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <span className="bg-[#0e5c3d] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {filtered[lightbox].category}
                </span>
                <span className="truncate text-sm font-semibold text-white">
                  {filtered[lightbox].title}
                </span>
              </div>
              <span className="shrink-0 font-mono text-sm text-white/50">
                {String(lightbox + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// ─── Page wrapper with Suspense for useSearchParams ──────────────────────────

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; image?: string; slide?: string; search?: string }>
}) {
  return <GalleryContent params={await searchParams} />
}
