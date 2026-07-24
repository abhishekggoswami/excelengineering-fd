'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Dam Construction', href: '/services/dam-construction' },
      { label: 'Fabrication Works', href: '/services/fabrication' },
      { label: 'Crane Services', href: '/services/crane-services' },
      { label: 'Infrastructure', href: '/services/infrastructure' },
    ],
  },
  {
    label: 'Projects',
    href: '#projects',
    children: [
      { label: 'Ongoing Projects', href: '/projects/ongoing' },
      { label: 'Completed Projects', href: '/projects/completed' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Company',
    href: '#company',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Clients', href: '/clients' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    /* Navbar is in normal document flow — NOT fixed — so the hero card sits below it */
    <header className="relative z-50 bg-[#faf9f6] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removed-bg-hV46daKY7PAwLB5y0ip6oioQ9M408R.png"
              alt="Excel Engineering"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#e85d3f] font-semibold text-sm uppercase tracking-wide transition-colors">
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Transparent hover bridge — fills gap so mouse stays in zone */}
                  <div className="absolute top-full left-0 w-full h-3" />

                  <div
                    className={`absolute top-full left-0 mt-3 min-w-[200px] bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden transition-all duration-200 ${
                      openDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-[#1a1a1a]/75 hover:text-[#1a1a1a] hover:bg-[#f5efe0] transition-colors font-medium border-b border-gray-50 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#1a1a1a] hover:text-[#e85d3f] font-semibold text-sm uppercase tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="group flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-bold text-sm uppercase tracking-wide pl-5 pr-2 py-2 rounded-full shadow-sm"
            >
              Get Free Quote
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#1a1a1a] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <span className="text-[#1a1a1a]/50 text-xs uppercase tracking-widest font-bold mb-2 block">
                  {link.label}
                </span>
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[#1a1a1a] font-semibold text-sm py-2 pl-3 border-l-2 border-[#e85d3f] hover:text-[#e85d3f] transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#1a1a1a] hover:text-[#e85d3f] font-semibold text-sm uppercase tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-[#e85d3f] text-white font-bold text-sm uppercase tracking-wide px-5 py-3 rounded-full text-center"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </header>
  )
}
