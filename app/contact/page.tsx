'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2, Send } from 'lucide-react'
import ServiceFaqSection from '@/components/service-faq-section'
import Navbar from '@/components/navbar'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    lines: ['Excel Engineering', 'Plot No. 30/5, Sector H', 'Govindpura Industrial Area, Bhopal', 'Madhya Pradesh 462023'],
    href: 'https://www.google.com/maps/search/?api=1&query=23.2675686,77.4407158',
    cta: 'View on Map',
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 91796 62443'],
    href: 'tel:+919179662443',
    cta: 'Call Now',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['excalengg@gmail.com'],
    href: 'mailto:excalengg@gmail.com',
    cta: 'Send Email',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Emergency: 24 × 7'],
    href: null,
    cta: null,
  },
]

const faqs = [
  {
    q: 'What is the best way to reach Excel Engineering for a project inquiry?',
    a: 'For project inquiries, you can call us directly at +91-9425300449 or email excalengg@gmail.com. Our director M. Farook Khan personally oversees all new project discussions to ensure the right technical expertise is engaged from the start.',
  },
  {
    q: 'Where is Excel Engineering\'s fabrication facility located?',
    a: 'Our workshop is located at 30/5 Sector-H, Industries Area, Govindpura, Bhopal – 23, Madhya Pradesh. Site visits can be arranged by appointment for clients who wish to inspect our fabrication capabilities and active works.',
  },
  {
    q: 'How quickly can Excel Engineering respond to a project requirement?',
    a: 'We aim to respond to all project inquiries within 24–48 hours. For urgent requirements, calling directly is the fastest route. Our technical team can provide a preliminary scope and feasibility assessment within a few working days.',
  },
  {
    q: 'Can Excel Engineering provide a quotation for sub-contracting scope?',
    a: 'Yes. We regularly work as specialist sub-contractors for primary contractors on WRD and irrigation projects. Please provide the full scope document or BOQ and we will prepare a detailed quotation.',
  },
]

type FormState = 'idle' | 'draftOpened'

const CONTACT_EMAIL = 'excalengg@gmail.com'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '', service: '' })
  const [formState, setFormState] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New website enquiry from ${form.name}`
    const body = [
      'New enquiry received through the Excel Engineering website',
      '',
      `Name: ${form.name}`,
      `Company: ${form.company || 'Not provided'}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `Service required: ${form.service || 'Not provided'}`,
      '',
      'Message:',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormState('draftOpened')
  }

  return (
    <>
      <Navbar />
      <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="company-video-hero relative flex min-h-[52svh] items-end overflow-hidden bg-[#111111] px-6 pb-20 pt-32 md:px-12 lg:px-20">
        <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/company-pages-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06251c]/52 via-[#0b3328]/32 to-[#071d18]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-transparent" />
          <div className="company-hero-content relative z-10 mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#e85d3f]" />
            <span className="text-[#e85d3f] font-semibold text-sm uppercase tracking-widest">
              Get in Touch
            </span>
          </div>
          <h1
            className="font-black text-white text-balance leading-tight mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Let&apos;s Talk About
            <br />
            <span className="text-[#f5a623]">Your Next Project</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl text-pretty">
            Whether you need a quote, a technical consultation, or want to discuss a
            subcontracting arrangement — our team is ready to help.
          </p>
        </div>
      </section>

      {/* ── Contact Cards + Form ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#e8eee9] px-6 py-20 md:px-12 lg:px-20">
        <div aria-hidden className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#0e5c3d]/15 blur-3xl" />
        <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f5a623]/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-3xl justify-center">

          {/* Left — contact info */}
          <div className="hidden">
            {contactDetails.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.label}
                  className="company-card-lift group rounded-2xl border border-[#e5d9c0] bg-white p-6 transition-all duration-300 hover:border-[#e85d3f]/40 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] group-hover:bg-[#e85d3f] transition-colors duration-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#f5a623] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#e85d3f] font-semibold text-xs uppercase tracking-widest mb-2">
                        {c.label}
                      </p>
                      {c.lines.map((line, i) => (
                        <p key={i} className="text-[#1a1a1a] text-sm font-medium leading-relaxed">
                          {line}
                        </p>
                      ))}
                      {c.href && c.cta && (
                        <a
                          href={c.href}
                          target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1 mt-3 text-[#e85d3f] font-semibold text-xs hover:underline"
                        >
                          {c.cta}
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right — Form */}
          <div className="w-full">
            <div className="rounded-[2rem] border border-white/70 bg-white/55 p-8 shadow-[0_24px_70px_-40px_rgba(7,43,31,.55)] backdrop-blur-xl md:p-10">
              {formState === 'draftOpened' ? (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e85d3f]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#e85d3f]" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-2xl">Email Draft Opened</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. We&apos;ll review your inquiry and get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ name: '', company: '', phone: '', email: '', message: '', service: '' }) }}
                    className="mt-2 border border-[#1a1a1a]/20 text-[#1a1a1a] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#f5efe0] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-black text-[#1a1a1a] text-2xl mb-2">Send Us a Message</h2>
                  <p className="text-[#6b7280] text-sm mb-8">
                    Fill in your details and we&apos;ll come back to you promptly.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#1a1a1a] text-xs font-bold uppercase tracking-wide">
                          Name <span className="text-[#e85d3f]">*</span>
                        </label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="bg-[#f5efe0] border border-[#e5d9c0] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#e85d3f] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#1a1a1a] text-xs font-bold uppercase tracking-wide">
                          Company
                        </label>
                        <input
                          type="text" name="company" value={form.company} onChange={handleChange}
                          placeholder="Your company name"
                          className="bg-[#f5efe0] border border-[#e5d9c0] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#e85d3f] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#1a1a1a] text-xs font-bold uppercase tracking-wide">
                          Phone <span className="text-[#e85d3f]">*</span>
                        </label>
                        <input
                          type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="bg-[#f5efe0] border border-[#e5d9c0] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#e85d3f] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#1a1a1a] text-xs font-bold uppercase tracking-wide">
                          Email
                        </label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="email@example.com"
                          className="bg-[#f5efe0] border border-[#e5d9c0] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#e85d3f] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1a1a1a] text-xs font-bold uppercase tracking-wide">
                        Service Required
                      </label>
                      <input
                        type="text" name="service" value={form.service} onChange={handleChange}
                        placeholder="Describe the service you need"
                        className="bg-[#f5efe0] border border-[#e5d9c0] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#e85d3f] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1a1a1a] text-xs font-bold uppercase tracking-wide">
                        Message <span className="text-[#e85d3f]">*</span>
                      </label>
                      <textarea
                        name="message" required value={form.message} onChange={handleChange}
                        rows={4}
                        placeholder="Briefly describe your project or requirement..."
                        className="bg-[#f5efe0] border border-[#e5d9c0] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#e85d3f] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] text-white font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200 mt-2"
                    >
                      <>Send Message <Send className="w-4 h-4" /></>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <ServiceFaqSection
        faqs={faqs}
        heading="Contact & Inquiries"
        subheading="Everything you need to know about reaching us and how we handle new project discussions."
      />

      <section className="bg-white px-6 pb-10 pt-16 md:px-12 md:pb-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3"><div className="h-px w-8 bg-[#e85d3f]" /><span className="text-xs font-bold uppercase tracking-widest text-[#e85d3f]">Our location</span></div>
            <h2 className="text-balance text-4xl font-black leading-none text-[#1a1a1a] sm:text-5xl">Visit Our Bhopal Office</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#667085]">Meet our engineering team at the Excel Engineering office in Govindpura Industrial Area. Call ahead to arrange a project discussion or a facility visit.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#e5e7eb] bg-[#fbfcfb] p-4 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-widest text-[#e85d3f]">Office address</p><p className="mt-2 text-sm font-semibold leading-relaxed text-[#1a1a1a]">Plot No. 30/5, Sector H<br />Govindpura Industrial Area, Bhopal</p></div>
            <div className="rounded-2xl border border-[#e5e7eb] bg-[#fbfcfb] p-4 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-widest text-[#e85d3f]">Call our office</p><a href="tel:+919179662443" className="mt-2 inline-flex items-center gap-2 text-sm font-extrabold text-[#0e5c3d] hover:text-[#e85d3f]"><Phone className="h-4 w-4" />+91 91796 62443</a><a href="tel:07554939449" className="mt-1 block text-sm font-bold text-[#0e5c3d] hover:text-[#e85d3f]">Office: 0755-4939449</a></div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden bg-[#111111] sm:min-h-[620px]" aria-labelledby="office-location-heading">
        <iframe title="Excel Engineering office location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3665.326902367105!2d77.4407157753212!3d23.26756857900277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE2JzAzLjMiTiA3N8KwMjYnMzUuOSJF!5e0!3m2!1sen!2sin!4v1784955610748!5m2!1sen!2sin" className="absolute inset-0 h-full w-full border-0 grayscale-[0.12]" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07100e]/55 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-end px-6 py-8 md:min-h-[620px] md:px-12 md:py-12 lg:px-20">
          <div className="pointer-events-auto w-full max-w-md rounded-[1.8rem] border border-white/30 bg-white/95 p-6 shadow-[0_22px_54px_-24px_rgba(0,0,0,.42)] backdrop-blur-md sm:p-8">
            <div className="mb-4 flex items-center gap-3"><div className="h-px w-8 bg-[#e85d3f]" /><span className="text-xs font-bold uppercase tracking-widest text-[#e85d3f]">Our location</span></div>
            <h2 id="office-location-heading" className="text-balance text-3xl font-black leading-tight text-[#1a1a1a]">Excel Engineering, Bhopal</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5d6774]">Plot No. 30/5, Sector H, Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href="tel:+919179662443" className="inline-flex items-center gap-2 rounded-full bg-[#0e5c3d] px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"><Phone className="h-4 w-4" />+91 91796 62443</a><a href="https://www.google.com/maps/search/?api=1&query=23.2675686,77.4407158" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#0e5c3d]/15 bg-white px-4 py-3 text-sm font-bold text-[#0e5c3d] transition-colors hover:border-[#e85d3f] hover:text-[#e85d3f]"><MapPin className="h-4 w-4" />Directions <ArrowUpRight className="h-4 w-4" /></a></div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
