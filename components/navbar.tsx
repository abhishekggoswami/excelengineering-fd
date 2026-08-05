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
      { label: 'Fabrication Works', href: '/services/fabrication' },
      { label: 'Dam Construction', href: '/services/dam-construction' },
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
  { label: 'Showcase', href: '/gallery' },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenMobileSection(null)
  }

  return (
    /* Navbar is in normal document flow — NOT fixed — so the hero card sits below it */
    <header className="relative z-50 bg-[#faf9f6] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between py-2.5 md:py-3">

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

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(true)}
            className="flex rounded-xl border border-[#e5ded1] bg-white p-2.5 text-[#1a1a1a] shadow-sm transition-all hover:border-[#e85d3f] hover:text-[#e85d3f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d3f] lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-[100] overflow-y-auto bg-[#fffdf9] transition-[clip-path,opacity] duration-500 lg:hidden ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100 [clip-path:circle(150%_at_100%_0)]' : 'pointer-events-none opacity-0 [clip-path:circle(0%_at_100%_0)]'
        }`}
      >
        <div className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col px-6 py-5 sm:px-10 sm:py-7">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="group flex h-11 w-11 items-center justify-center rounded-full text-[#e85d3f] transition-colors hover:bg-[#fff0eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d3f]"
            >
              <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
            </button>
            <Link href="/" onClick={closeMobileMenu} className="justify-self-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removed-bg-hV46daKY7PAwLB5y0ip6oioQ9M408R.png"
                alt="Excel Engineering"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="justify-self-end rounded-full border border-[#0d6948]/25 px-3 py-2 text-[10px] font-black uppercase tracking-[0.13em] text-[#0d6948] transition-all hover:bg-[#0d6948] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d6948] sm:px-4 sm:text-[11px]"
            >
              Quote
            </Link>
          </div>

          <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10 sm:py-12">
            <div className="border-y border-[#e9e1d4] py-5 sm:py-6">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="border-b border-[#eee8df] last:border-b-0">
                    <button
                      type="button"
                      aria-expanded={openMobileSection === link.label}
                      aria-controls={`mobile-section-${link.label.toLowerCase()}`}
                      onClick={() => setOpenMobileSection(openMobileSection === link.label ? null : link.label)}
                      className="group flex w-full items-center justify-center gap-2 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#1a1a1a] transition-colors hover:text-[#e85d3f] sm:py-5 sm:text-base"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 text-[#0d6948] transition-transform duration-300 ${openMobileSection === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      id={`mobile-section-${link.label.toLowerCase()}`}
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${openMobileSection === link.label ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="min-h-0 space-y-1 text-center">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="group/link mx-auto flex w-fit items-center gap-2 px-4 py-2 text-sm font-semibold text-[#596475] transition-colors hover:text-[#e85d3f]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#e85d3f] transition-transform duration-300 group-hover/link:scale-150" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="group flex items-center justify-center gap-2 border-b border-[#eee8df] py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#1a1a1a] transition-colors hover:text-[#e85d3f] sm:py-5 sm:text-base"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-transparent transition-colors group-hover:bg-[#0d6948]" />
                    {link.label}
                    <span className="h-1.5 w-1.5 rounded-full bg-transparent transition-colors group-hover:bg-[#e85d3f]" />
                  </Link>
                )
              )}
            </div>
          </nav>

          <div className="mx-auto flex w-full max-w-md items-center justify-between border-t border-[#e9e1d4] pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7b8491] sm:pt-6 sm:text-xs">
            <span>Excel Engineering</span>
            <Link href="/contact" onClick={closeMobileMenu} className="text-[#e85d3f] transition-colors hover:text-[#0d6948]">
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
