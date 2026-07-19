'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2, Send } from 'lucide-react'
import ServiceFaqSection from '@/components/service-faq-section'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    lines: ['Excel Engineering', '30/5 Sector-H, Industries Area', 'Govindpura, Bhopal – 23', 'Madhya Pradesh, India'],
    href: 'https://maps.google.com',
    cta: 'View on Map',
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91-0755-4939449', '+91-9425300449', '+91-8817867664'],
    href: 'tel:+917554939449',
    cta: 'Call Now',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['excalengt@gmail.com'],
    href: 'mailto:excalengt@gmail.com',
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
    a: 'For project inquiries, you can call us directly at +91-9425300449 or email excalengt@gmail.com. Our director M. Farook Khan personally oversees all new project discussions to ensure the right technical expertise is engaged from the start.',
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

type FormState = 'idle' | 'sending' | 'sent'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '', service: '' })
  const [formState, setFormState] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => setFormState('sent'), 1400)
  }

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
      <section className="bg-[#f5efe0] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">

          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactDetails.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.label}
                  className="group bg-white rounded-2xl p-6 border border-[#e5d9c0] hover:border-[#e85d3f]/40 hover:shadow-md transition-all duration-200"
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
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-[#e5d9c0] shadow-sm p-8 md:p-10">
              {formState === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e85d3f]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#e85d3f]" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-2xl">Message Received</h3>
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
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="bg-[#f5efe0] border border-[#e5d9c0] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#e85d3f] transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option>Dam Gate Fabrication & Installation</option>
                        <option>Radial / Vertical Gate Engineering</option>
                        <option>Hoist & Gantry Crane Systems</option>
                        <option>Irrigation Project Gates</option>
                        <option>Structural Steel Fabrication</option>
                        <option>Other / General Inquiry</option>
                      </select>
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
                      disabled={formState === 'sending'}
                      className="flex items-center justify-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] disabled:opacity-60 text-white font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full transition-colors duration-200 mt-2"
                    >
                      {formState === 'sending' ? 'Sending...' : (
                        <>Send Message <Send className="w-4 h-4" /></>
                      )}
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
    </>
  )
}
