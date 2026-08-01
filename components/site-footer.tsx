import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import BackToTop from '@/components/back-to-top'

const services = [
  { label: 'Dam Construction', href: '/services/dam-construction' },
  { label: 'Fabrication Works', href: '/services/fabrication' },
  { label: 'Crane Services', href: '/services/crane-services' },
  { label: 'Infrastructure', href: '/services/infrastructure' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
  { label: 'Project Gallery', href: '/gallery' },
  { label: 'Ongoing Projects', href: '/projects/ongoing' },
  { label: 'Completed Projects', href: '/projects/completed' },
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
          <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4">
            <span className="whitespace-nowrap text-sm font-semibold text-[#1a1a1a]/70 md:text-base">
              Have a tender and want to discuss?
            </span>
            <a
              href="tel:+919179662443"
              className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-black text-[#1a1a1a] transition-colors hover:text-[#e85d3f] md:text-base"
            >
              <span>Call Us on</span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#e85d3f] text-white group-hover:scale-110 transition-transform">
                <Phone className="animate-phone-ring w-3.5 h-3.5" />
              </span>
              <span className="whitespace-nowrap text-[#e85d3f]">+91 91796 62443</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer body ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 md:px-12 md:pb-12 md:pt-16 lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Logo mark */}
            <Link href="/" className="group mb-3 flex w-fit items-center md:mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removed-bg-hV46daKY7PAwLB5y0ip6oioQ9M408R.png"
                alt="Excel Engineering"
                className="h-12 w-auto object-contain md:h-16"
              />
            </Link>

            <p className="mb-4 text-sm leading-relaxed text-pretty text-white/55 md:mb-8">
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
            <h4 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white md:mb-6">
              <span className="w-4 h-px bg-[#e85d3f]" />
              Services
            </h4>
            <ul className="flex flex-col gap-2 md:gap-3">
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
            <h4 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white md:mb-6">
              <span className="w-4 h-px bg-[#e85d3f]" />
              Company
            </h4>
            <ul className="flex flex-col gap-2 md:gap-3">
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
            <h4 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white md:mb-6">
              <span className="w-4 h-px bg-[#e85d3f]" />
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3 md:gap-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#f5a623]" />
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=23.2675686,77.4407158" target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-white/55 transition-colors hover:text-white">
                  Plot No. 30/5, Sector H,<br />
                  Govindpura Industrial Area, Bhopal,<br />
                  Madhya Pradesh 462023
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#f5a623]" />
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919179662443"
                    className="text-white/55 hover:text-white text-sm font-medium transition-colors"
                  >
                    +91 91796 62443
                  </a>
                  <a
                    href="tel:07554939449"
                    className="text-white/55 hover:text-white text-sm font-medium transition-colors"
                  >
                    Office: 0755-4939449
                  </a>
                </div>
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
      <div className="mx-auto max-w-7xl px-6 py-5 md:px-12 md:py-6 lg:px-20">
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr]">

          {/* Copyright */}
          <p className="text-white/30 text-xs font-medium text-center sm:text-left">
            &copy; {new Date().getFullYear()} Excel Engineering. All rights reserved. Designed with precision.
          </p>

          <p className="text-center text-xs font-medium text-white/45">
            Website Developed By Abhishek Goswami -{' '}
            <a
              href="https://wa.link/d5gsre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5a623] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5a623]"
            >
              Contact
            </a>
          </p>

          {/* Back to top */}
          <div className="sm:justify-self-end">
            <BackToTop />
          </div>
        </div>
      </div>

    </footer>
  )
}
