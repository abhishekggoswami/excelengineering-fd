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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const closeDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(null)
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
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    aria-controls={`nav-dropdown-${link.label.toLowerCase()}`}
                    onClick={() => handleMouseEnter(link.label)}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowDown') {
                        event.preventDefault()
                        handleMouseEnter(link.label)
                      }

                      if (event.key === 'Escape') {
                        event.preventDefault()
                        closeDropdown()
                      }
                    }}
                    className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#e85d3f] font-semibold text-sm uppercase tracking-wide transition-colors"
                  >
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
                    id={`nav-dropdown-${link.label.toLowerCase()}`}
                    aria-label={`${link.label} navigation`}
                    onFocus={() => handleMouseEnter(link.label)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                        closeDropdown()
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') {
                        event.preventDefault()
                        closeDropdown()
                      }
                    }}
                    className={`absolute top-full left-0 z-[60] mt-3 min-w-[200px] bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                      openDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={closeDropdown}
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
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
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

          {/* Native disclosure keeps the mobile/tablet menu usable before and after hydration. */}
          <details className="group relative lg:hidden">
            <summary aria-label="Toggle menu" className="flex list-none cursor-pointer rounded-xl border border-[#e5ded1] bg-white p-2 text-[#1a1a1a] shadow-sm transition-all hover:border-[#e85d3f] hover:text-[#e85d3f] [&::-webkit-details-marker]:hidden">
              <Menu className="h-6 w-6 group-open:hidden" />
              <X className="hidden h-6 w-6 group-open:block" />
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.75rem)] z-[70] w-[min(24rem,calc(100vw-1.5rem))] max-h-[calc(100svh-5.5rem)] overflow-y-auto rounded-2xl border border-[#e5ded1] bg-white/98 px-5 py-5 shadow-2xl backdrop-blur-xl sm:px-6">
              <div className="mb-4 border-b border-[#eee8df] pb-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#e85d3f]">Explore Excel Engineering</span>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="rounded-xl bg-[#f7f4ec] p-3">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/50">{link.label}</span>
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block border-l-2 border-[#e85d3f] py-2 pl-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:text-[#e85d3f]">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link key={link.label} href={link.href} className="rounded-xl border border-[#eee8df] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-colors hover:border-[#e85d3f] hover:text-[#e85d3f]">
                      {link.label}
                    </Link>
                  )
                )}
                <Link href="/contact" className="mt-2 rounded-full bg-[#e85d3f] px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">Get Free Quote</Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
