'use client'

import Image from 'next/image'

const PARTNERS = [
  {
    name: 'Nuclear Power Corporation of India Limited',
    shortName: 'NPCIL',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NPCIL-logo-4n59j4rqY7Tiv0gFU9ZO8CQU46H4h3.png',
  },
  {
    name: 'Madhya Pradesh Shasan',
    shortName: 'MP Shasan',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MADHYAPRADESH-SHASHAN%20LOGO-wduWvMqIed2VsnxcExqb3Xn2nLYc9p.png',
  },
  {
    name: 'Narmada Hydroelectric Development Corporation Limited',
    shortName: 'NHDC',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nhdc-logo-cZ6YbK8GtD6kTZXX3kY4v5rdtNg7Dv.png',
  },
  {
    name: 'LCC — Many Hands One Vision',
    shortName: 'LCC',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LCC%20logo-vvDjjRw70zLcgErYQL3jwWQ8bQ0yuF.png',
  },
  {
    name: 'Water Resources Department',
    shortName: 'WRD',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wrd-ZijIjnt3rp87nJNPZPX7uJ1pqhOt7T.png',
  },
  {
    name: 'Ministry of MSME, Govt. of India',
    shortName: 'MSME',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/msme-gy2XCHyQvvc42Bff9GmimsWKRHLD6W.png',
  },
  {
    name: 'Make in India',
    shortName: 'Make in India',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make_in_india-hJ8oOQXdW47LXC70qvRa0PSdu77KOw.png',
  },
  {
    name: 'Swachh Bharat Mission',
    shortName: 'Swachh Bharat',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swachh_bharat-peAzdki0Ju4Zn8ZrEoMxS7Q1LCvalW.png',
  },
  {
    name: 'Adroit',
    shortName: 'Adroit',
    src: '/images/adroit-logo.png',
  },
  {
    name: 'Bhugan Infracon',
    shortName: 'Bhugan',
    src: '/images/bhugan-logo.png',
  },
  {
    name: 'TATA',
    shortName: 'TATA',
    src: '/images/tata-logo.png',
  },
]

// Duplicate for seamless infinite scroll
const TRACK = [...PARTNERS, ...PARTNERS]

export default function PartnersSection() {
  return (
    <section className="bg-[#f5efe0] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#e85d3f]" />
              <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                Trusted Partners
              </span>
              <div className="w-8 h-px bg-[#e85d3f]" />
            </div>
            <h2
              className="font-black text-[#1a1a1a] text-balance leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              Organisations We&apos;ve
              <br />
              Worked With
            </h2>
          </div>
          <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs md:text-right">
            Proud to have delivered engineering excellence for India&apos;s leading public sector and government organisations.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-[#1a1a1a]/10" />
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#f5efe0] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#f5efe0] to-transparent" />

        <div className="flex gap-12 partners-track">
          {TRACK.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-4 w-52"
            >
              {/* Logo card */}
              <div className="w-full bg-white rounded-2xl shadow-sm border border-[#e5e7eb] flex items-center justify-center px-6 py-8 hover:shadow-md transition-shadow duration-300 group">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={140}
                  height={100}
                  className="object-contain max-h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Name below card */}
              <p className="text-[#1a1a1a] font-semibold text-xs text-center leading-snug px-1">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
