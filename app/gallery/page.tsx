import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/navbar'

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES = ['All', 'Cranes', 'Dam Construction', 'Fabrication', 'Irrigation', 'Offices', 'Factory'] as const
type Category = (typeof CATEGORIES)[number]

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: Exclude<Category, 'All'>
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
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-7-b123yvfDnboxVIcR7KsC5LRxv57t3W.png',
    alt: '6 workers outdoors fabricating steel gate panels on red earth ground, Excel compound wall',
    title: 'Gate Fabrication — Outdoor Yard',
    category: 'Fabrication',
    wide: true,
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
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-10-rf8fqEqtCn2xtpRrudcDLhSddPZ39W.png',
    alt: 'Factory floor showing large steel spur gears, I-beam frames, air compressor, yellow hydraulic press',
    title: 'Spur Gears & Steel Frames — Factory Floor',
    category: 'Fabrication',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-11-oDznUfspb3zcb9DT15xUc8BBPOvHWN.png',
    alt: 'Steel truss painted red oxide, engineer spray-coating, supervisor reviewing blueprints under yellow crane',
    title: 'Steel Truss — Surface Coating',
    category: 'Fabrication',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabrication-12-Cqmy1QX7s0pNqhzQvS17iQcw23xQWn.png',
    alt: '3 workers guiding a massive black steel gate panel being lifted by yellow mobile crane outside factory',
    title: 'Heavy Gate Panel — Crane Dispatch',
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
    category: 'Factory',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-1-D9Oei4dRPFLxPOf6Cf9BcfyI9Lhi22.png',
    alt: 'Landscaped garden path with flowers and trees beside factory compound wall bearing Excel Engineering logo',
    title: 'Factory Compound — Garden',
    category: 'Factory',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-4-YgWJEe5GHdro9e3JS1ptaZE6RS82LU.png',
    alt: 'Aerial view of Excel Engineering compound showing blue factory shed, entrance gate, and Mercedes parked',
    title: 'Factory Compound — Aerial View',
    category: 'Factory',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-3-i2lbNNDwouDlnv8157stL3w8xw187r.png',
    alt: 'Aerial view of Excel Engineering stone-clad office annex alongside blue factory shed and landscaped grounds',
    title: 'Office Annex & Factory Shed — Aerial',
    category: 'Factory',
  },

  // ── Offices ──────────────────────────────────────────────────────────────
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-5-wYdguOqM3VmsjZlA7Wt7OivysuWJO4.png',
    alt: 'Excel Engineering glass-partitioned corridor office with engineers at desks and company wall signage',
    title: 'Head Office — Engineering Corridor',
    category: 'Offices',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-4-NC5zWcQ3qFNmrfGdN9aJxeLBW2zj5c.png',
    alt: 'Open-plan cubicle office with multiple engineers in formal attire working at iMac workstations',
    title: 'Engineering Operations Floor',
    category: 'Offices',
    wide: true,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-2-w6VCXy7qHOKXrQUmJ3DauF88gyjlmF.png',
    alt: 'Open cubicle office floor with dual-monitor setups and Gantt charts on whiteboard, October 2024 calendar',
    title: 'Project Planning Office',
    category: 'Offices',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-1-LwjeJCzJJDM6tEquprCcIaBP3mAybA.png',
    alt: 'Engineer smiling at CAD workstation with dual monitors showing engineering drawings and dashboards',
    title: 'CAD & Design Workstation',
    category: 'Offices',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-3-BRQUvpET50e8beccAJf9Lxl1p09qiP.png',
    alt: 'Reception and waiting area with two professionals in discussion on sofa, glass meeting room in background',
    title: 'Reception & Client Lounge',
    category: 'Offices',
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CATEGORY_COUNTS = CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
  acc[cat] =
    cat === 'All'
      ? GALLERY_IMAGES.length
      : GALLERY_IMAGES.filter((img) => img.category === cat).length
  return acc
}, {})

// ─── Inner component (reads searchParams) ────────────────────────────────────

function GalleryContent({ params }: { params: { category?: string; image?: string } }) {
  const initialCat = (params.category ?? 'All') as Category
  const validInitial = CATEGORIES.includes(initialCat) ? initialCat : 'All'

  const active = validInitial
  const filtered = active === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === active)
  const requestedImage = Number.parseInt(params.image ?? '', 10)
  const lightbox = Number.isInteger(requestedImage) && requestedImage >= 0 && requestedImage < filtered.length
    ? requestedImage
    : null
  const galleryHref = (imageIndex?: number) => {
    const params = new URLSearchParams()
    if (active !== 'All') params.set('category', active)
    if (imageIndex !== undefined) params.set('image', String(imageIndex))
    const query = params.toString()
    return query ? `/gallery?${query}` : '/gallery'
  }

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">

        {/* Page header */}
        <section className="bg-[#0e5c3d] pt-32 pb-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Subtle industrial line-art tint */}
          <div
            className="absolute inset-0 opacity-5 bg-repeat-x bg-bottom pointer-events-none"
            style={{
              backgroundImage:
                'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_3uj7mz3uj7mz3uj7-removebg-preview-rbtCbMUPUYemRQIOBL5JX8Hkbt2lMS.png)',
              backgroundSize: 'auto 220px',
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
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

        {/* Filter bar */}
        <section className="sticky top-[64px] z-30 bg-white border-b border-[#e5e7eb] shadow-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const count = CATEGORY_COUNTS[cat]
                const isActive = active === cat
                return (
                  <a
                    key={cat}
                    href={cat === 'All' ? '/gallery' : `/gallery?category=${encodeURIComponent(cat)}`}
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
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">

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

          {/* Coming soon notice for empty categories */}
          {(['Irrigation'] as Category[]).includes(active) && filtered.length === 0 && (
            <div className="mt-12 border border-dashed border-[#e5e7eb] rounded-2xl p-12 text-center">
              <div className="w-12 h-12 rounded-full bg-[#f5efe0] flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-px bg-[#e85d3f]" />
              </div>
              <p className="text-[#374151] font-semibold mb-2">Photos coming soon</p>
              <p className="text-[#9ca3af] text-sm">
                We are currently adding project photography for this category.
              </p>
            </div>
          )}
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
  searchParams: Promise<{ category?: string; image?: string }>
}) {
  return <GalleryContent params={await searchParams} />
}
