import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import BackToTop from '@/components/back-to-top'

// Inline SVG social icons (lucide-react 1.17 does not include brand icons)
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
)

const services = [
  { label: 'Dam Construction', href: '/services/dam-construction' },
  { label: 'Fabrication Works', href: '/services/fabrication' },
  { label: 'Irrigation Projects', href: '/services/irrigation' },
  { label: 'Crane Services', href: '/services/crane-services' },
]

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Project Gallery', href: '/gallery' },
  { label: 'Project Statistics', href: '#statistics' },
  { label: 'Equipment Fleet', href: '#equipment' },
  { label: 'Company Timeline', href: '#timeline' },
  { label: 'Safety Record', href: '#safety' },
  { label: 'CSR & Community', href: '#csr' },
  { label: 'Documents', href: '#documents' },
]

const socials = [
  { label: 'Facebook',  href: '#', Icon: IconFacebook  },
  { label: 'Instagram', href: '#', Icon: IconInstagram },
  { label: 'LinkedIn',  href: '#', Icon: IconLinkedin  },
  { label: 'YouTube',   href: '#', Icon: IconYoutube   },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">

      {/* ── Angled "ribbon" CTA strip ─────────────────────────────────── */}
      <div className="relative bg-white overflow-hidden">
        {/* Charcoal angled parallelogram rising from the footer body on the left */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden md:block w-[38%] lg:w-[34%] bg-[#1a1a1a]"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 64px) 100%, 0 100%)' }}
        />
        {/* Thin coral accent edge tracing the diagonal */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden md:block w-[38%] lg:w-[34%] bg-[#e85d3f]"
          style={{ clipPath: 'polygon(calc(100% - 64px) 100%, calc(100% - 60px) 100%, 100% 0, 100% 0)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 md:pl-[34%] lg:pl-[32%]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2 gap-y-1 text-center">
            <span className="text-[#1a1a1a]/70 font-semibold text-base md:text-lg">
              Have a tender and want to discuss?
            </span>
            <a
              href="tel:+919876543210"
              className="group flex items-center gap-2 font-black text-base md:text-lg text-[#1a1a1a] hover:text-[#e85d3f] transition-colors"
            >
              Call Us on
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#e85d3f] text-white group-hover:scale-110 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="text-[#e85d3f]">+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer body ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Logo mark */}
            <Link href="/" className="flex items-center mb-6 w-fit group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removed-bg-hV46daKY7PAwLB5y0ip6oioQ9M408R.png"
                alt="Excel Engineering"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-white/55 text-sm leading-relaxed text-pretty mb-8">
              Premier infrastructure contractor specialising in dam construction, heavy fabrication,
              irrigation works, and crane services across India since 1999.
            </p>

            {/* Certifications strip */}
            <div className="flex flex-wrap gap-2">
              {['ISO 9001', 'ISO 14001', 'OHSAS 18001'].map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] font-bold uppercase tracking-widest border border-white/15 text-white/50 px-3 py-1.5 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#e85d3f]" />
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#f5a623] transition-all duration-300 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#e85d3f]" />
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#f5a623] transition-all duration-300 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#e85d3f]" />
              Contact Us
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#f5a623]" />
                </div>
                <span className="text-white/55 text-sm leading-relaxed">
                  Excel Engineering, Industrial Area,<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#f5a623]" />
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-white/55 hover:text-white text-sm font-medium transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#f5a623]" />
                </div>
                <a
                  href="mailto:info@excelengineering.in"
                  className="text-white/55 hover:text-white text-sm font-medium transition-colors"
                >
                  info@excelengineering.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#f5a623]" />
                </div>
                <span className="text-white/55 text-sm leading-relaxed">
                  Mon – Sat: 9:00 AM – 6:00 PM<br />
                  <span className="text-white/30">Emergency: 24 × 7</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-white/8" />
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-white/30 text-xs font-medium text-center sm:text-left">
            &copy; {new Date().getFullYear()} Excel Engineering. All rights reserved. Designed with precision.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <BackToTop />
        </div>
      </div>

    </footer>
  )
}
