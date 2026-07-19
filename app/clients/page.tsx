import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ServiceFaqSection from '@/components/service-faq-section'
import CtaBannerSection from '@/components/cta-banner-section'

const clients = [
  {
    name: 'Nuclear Power Corporation of India Limited',
    shortName: 'NPCIL',
    category: 'Central PSU',
    desc: 'Structural and gate works executed for India\'s premier nuclear power generation authority.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NPCIL-logo-4n59j4rqY7Tiv0gFU9ZO8CQU46H4h3.png',
  },
  {
    name: 'Madhya Pradesh Shasan',
    shortName: 'MP Govt.',
    category: 'State Government',
    desc: 'Multiple irrigation and water resources projects under direct state government contracts.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MADHYAPRADESH-SHASHAN%20LOGO-wduWvMqIed2VsnxcExqb3Xn2nLYc9p.png',
  },
  {
    name: 'Narmada Hydroelectric Development Corporation Limited',
    shortName: 'NHDC',
    category: 'Central PSU',
    desc: 'Hoist systems and gate works for Narmada basin hydroelectric infrastructure.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nhdc-logo-cZ6YbK8GtD6kTZXX3kY4v5rdtNg7Dv.png',
  },
  {
    name: 'LCC Projects Pvt. Ltd.',
    shortName: 'LCC',
    category: 'Prime Contractor',
    desc: 'Ongoing sub-contractor on the Madiya Dam Radial Gate project, Sagar M.P.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LCC%20logo-vvDjjRw70zLcgErYQL3jwWQ8bQ0yuF.png',
  },
  {
    name: 'Water Resources Department, M.P.',
    shortName: 'WRD',
    category: 'State Authority',
    desc: 'Primary executing authority for multiple dam gate and irrigation projects in Madhya Pradesh.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wrd-ZijIjnt3rp87nJNPZPX7uJ1pqhOt7T.png',
  },
  {
    name: 'Ministry of MSME, Govt. of India',
    shortName: 'MSME',
    category: 'Central Government',
    desc: 'Registered MSME enterprise operating under the Ministry of Micro, Small & Medium Enterprises.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/msme-gy2XCHyQvvc42Bff9GmimsWKRHLD6W.png',
  },
  {
    name: 'Make in India',
    shortName: 'Make in India',
    category: 'National Initiative',
    desc: 'Proud participant in the Make in India initiative — designing and fabricating hydraulic gates domestically.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make_in_india-hJ8oOQXdW47LXC70qvRa0PSdu77KOw.png',
  },
  {
    name: 'Swachh Bharat Mission',
    shortName: 'Swachh Bharat',
    category: 'National Initiative',
    desc: 'Contributing to clean water infrastructure through our irrigation and dam gate engineering works.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swachh_bharat-peAzdki0Ju4Zn8ZrEoMxS7Q1LCvalW.png',
  },
  {
    name: 'Adroit',
    shortName: 'Adroit',
    category: 'Engineering Partner',
    desc: 'Strategic partnership for advanced engineering and infrastructure project execution.',
    src: '/images/adroit-logo.png',
  },
  {
    name: 'Bhugan Infracon Private Limited',
    shortName: 'Bhugan',
    category: 'Infrastructure Partner',
    desc: 'Collaborative efforts on major infrastructure and development projects across India.',
    src: '/images/bhugan-logo.png',
  },
  {
    name: 'TATA',
    shortName: 'TATA',
    category: 'Corporate Partner',
    desc: 'Partnership with India\'s leading multinational conglomerate on critical infrastructure initiatives.',
    src: '/images/tata-logo.png',
  },
]

const categories = ['All', 'Central PSU', 'State Government', 'State Authority', 'Prime Contractor', 'Central Government', 'National Initiative']

const faqs = [
  {
    q: 'Which government bodies has Excel Engineering worked with?',
    a: 'We have delivered projects for the Water Resources Department (WRD) M.P., Nuclear Power Corporation of India Limited (NPCIL), Narmada Hydroelectric Development Corporation (NHDC), and Madhya Pradesh Shasan. Our work spans central PSUs, state governments, and national infrastructure initiatives.',
  },
  {
    q: 'Is Excel Engineering empanelled with any government authorities?',
    a: 'We are a registered MSME enterprise and have executed contracts under multiple WRD divisions in Madhya Pradesh. Our track record with government clients, ISO certifications, and 25+ years of project history make us a qualified partner for government infrastructure tenders.',
  },
  {
    q: 'Can Excel Engineering provide client references for new tender purposes?',
    a: 'Yes. We can provide project completion certificates and client references for qualified tender evaluators. Please contact us directly with your requirement and we will share the relevant documentation.',
  },
  {
    q: 'Does Excel Engineering work with private contractors as a sub-contractor?',
    a: 'Yes. We have active sub-contractor relationships with primary contractors such as LCC Projects Pvt. Ltd. (Ahmedabad) and SRS Infraway Pvt. Ltd. (Gwalior) for ongoing WRD projects. We handle the complete hydraulic gate and hoist scope under MOU arrangements.',
  },
]

export default function ClientsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] pt-36 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 40px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Trusted Partners
            </span>
          </div>
          <h1
            className="font-black text-white text-balance leading-tight mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Organisations We&apos;ve
            <br />
            <span className="text-[#f5a623]">Worked With</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl text-pretty">
            Over 25 years, Excel Engineering has delivered engineering excellence for India&apos;s
            leading public sector undertakings, state governments, and infrastructure prime contractors.
          </p>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────── */}
      <section className="bg-[#e85d3f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { value: '8+', label: 'Organisations' },
              { value: '25+', label: 'Years of Delivery' },
              { value: '2',  label: 'Central PSUs Served' },
              { value: '3+', label: 'States Covered' },
            ].map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <p className="font-black text-white text-3xl leading-none mb-1">{s.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Grid ───────────────────────────────────────────────── */}
      <section className="bg-[#f5efe0] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-[#e85d3f]" />
                <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
                  Our Esteemed Clients
                </span>
              </div>
              <h2
                className="font-black text-[#1a1a1a] text-balance leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
              >
                A Legacy Built on Trust
              </h2>
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs md:text-right text-pretty">
              Every organisation on this list represents a project delivered with precision, accountability, and engineering excellence.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#1a1a1a]/10 mb-12" />

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group bg-white rounded-2xl border border-[#e5d9c0] hover:border-[#e85d3f]/50 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Logo area */}
                <div className="flex items-center justify-center p-8 bg-white border-b border-[#e5d9c0] group-hover:border-[#e85d3f]/20 transition-colors min-h-[140px]">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={160}
                    height={100}
                    className="object-contain max-h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5 gap-2">
                  <span className="inline-flex w-fit items-center bg-[#f5efe0] group-hover:bg-[#e85d3f]/10 text-[#e85d3f] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-colors duration-200">
                    {client.category}
                  </span>
                  <h3 className="font-extrabold text-[#1a1a1a] text-sm leading-snug mt-1">
                    {client.name}
                  </h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed text-pretty flex-1">
                    {client.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust statement ───────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Why They Trust Us
            </span>
            <div className="w-8 h-px bg-[#e85d3f]" />
          </div>
          <h2
            className="font-black text-[#1a1a1a] text-balance leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          >
            Engineering Credibility, Earned Over 25 Years
          </h2>
          <p className="text-[#6b7280] text-base leading-relaxed max-w-3xl mx-auto text-pretty mb-10">
            From nuclear power plants to state irrigation projects, our clients trust Excel Engineering
            because we deliver on technical promises. Every project is backed by certified quality
            procedures, documented inspection records, and a team with the experience to navigate
            complex government project requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['ISO 9001 Compliant', 'WRD Approved', 'MSME Registered', 'NDT Certified Welding', '100% Quality Inspection'].map((badge) => (
              <span
                key={badge}
                className="border border-[#1a1a1a]/20 text-[#1a1a1a]/70 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#f5efe0] hover:border-[#e85d3f]/40 transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <ServiceFaqSection
        faqs={faqs}
        heading="Working With Excel Engineering"
        subheading="Common questions from clients, contractors, and government authorities."
      />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CtaBannerSection />
    </>
  )
}
