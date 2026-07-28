'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const tags = [
  { label: '+ Production' },
  { label: '+ Technology' },
]

function TagPills() {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag.label}
          className="border border-[#d1d5db] rounded-full px-3 py-1 text-xs text-[#4b5563] font-medium"
        >
          {tag.label}
        </span>
      ))}
    </div>
  )
}

const FEATURE_LOGOS = {
  msme: {
    name: 'Ministry of MSME, Government of India',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/msme-gy2XCHyQvvc42Bff9GmimsWKRHLD6W.png',
  },
  makeInIndia: {
    name: 'Make in India',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make_in_india-hJ8oOQXdW47LXC70qvRa0PSdu77KOw.png',
  },
  swachhBharat: {
    name: 'Swachh Bharat Mission',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swachh_bharat-peAzdki0Ju4Zn8ZrEoMxS7Q1LCvalW.png',
  },
}

function RevealText({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function FeatureLogo({ logo }: { logo: { name: string; src: string } }) {
  return (
    <motion.div
      className="relative flex h-14 w-24 shrink-0 items-center justify-center rounded-xl border border-[#e8e2d7] bg-white px-2 shadow-[0_6px_18px_rgba(14,92,61,0.08)]"
      whileHover={{ y: -3, rotate: -1.5, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={88}
        height={46}
        sizes="88px"
        className="h-10 w-full object-contain"
      />
    </motion.div>
  )
}

function FeatureCard({
  title,
  description,
  logo,
  revealDelay,
}: {
  title: ReactNode
  description: ReactNode
  logo: { name: string; src: string }
  revealDelay: number
}) {
  return (
    <motion.article
      className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-transparent bg-white p-7"
      initial={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -9,
        scale: 1.012,
        borderColor: 'rgba(232, 93, 63, 0.42)',
        boxShadow: '0 24px 50px rgba(38, 67, 52, 0.16)',
      }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-7 top-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-[#e85d3f] via-[#f5a623] to-[#0e5c3d]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: revealDelay + 0.18 }}
      />
      <div>
        <div className="mb-4 flex items-start justify-between gap-4">
          <RevealText delay={revealDelay + 0.08}>
            <h3 className="bento-text-sheen text-xl font-extrabold leading-snug transition-colors duration-300 group-hover:text-[#0e5c3d]">
              {title}
            </h3>
          </RevealText>
          <FeatureLogo logo={logo} />
        </div>
        <div className="mb-4 h-px w-full origin-left bg-[#e5e7eb] transition-colors duration-300 group-hover:bg-[#e85d3f]/35" />
        <RevealText delay={revealDelay + 0.16}>
          <p className="text-sm leading-relaxed text-[#6b7280]">{description}</p>
        </RevealText>
      </div>
      <RevealText className="mt-6" delay={revealDelay + 0.24}>
        <div className="mb-4 h-px w-full bg-[#e5e7eb] transition-colors duration-300 group-hover:bg-[#0e5c3d]/25" />
        <TagPills />
      </RevealText>
    </motion.article>
  )
}

export default function ServicesBento() {
  return (
    <section className="bg-[#f5efe0] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#e85d3f]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#e85d3f]">Engineering Excellence</span>
            <span className="h-px w-9 bg-[#e85d3f]" />
          </div>
          <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#1a1a1a] sm:text-5xl">
            Capability built for
            <span className="block text-[#0e5c3d]">complex infrastructure.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[#6b7280]">
            Disciplined production, proven quality systems and modern engineering capacity working together at every stage.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Row 1 */}

          {/* Card 1: Dark hero card with pipelines image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-between bg-[#111111] md:row-span-1">
            <div className="relative z-10 p-7 flex flex-col justify-between h-full">
              <RevealText>
                <h2 className="bento-text-sheen-light text-balance max-w-[260px] text-2xl font-extrabold leading-snug">
                  Delivering Precision Engineering Solutions for Modern Industry
                </h2>
              </RevealText>
              <Link href="/contact" className="mt-6 self-start flex items-center gap-2 bg-[#e85d3f] hover:bg-[#d14f33] transition-colors text-white font-semibold text-sm px-5 py-2.5 rounded-full">
                <ArrowRight className="w-4 h-4" />
                Start A Project
              </Link>
            </div>
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477-clean%20%281%29-UUGSIDnptjL7bSXLHSXrZJHeMEKo2J.png"
                alt="Aerial view of completed dam with blue radial steel gates and teal reservoir"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="object-cover object-center opacity-40"
              />
            </div>
          </div>

          {/* Card 2: Strict Quality Standards */}
          <FeatureCard
            title={<>Strict Quality<br />Standards</>}
            description={<>Comprehensive inspection procedures at every production stage to maintain reliability and performance</>}
            logo={FEATURE_LOGOS.msme}
            revealDelay={0.05}
          />

          {/* Card 3: Infrastructure image with stat overlay */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vehicle-10-gCbnR5Q8obkePwbzj4L199YEbmL3IW.png"
              alt="Excel Engineering crane equipment being loaded on flatbed truck at night"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              className="object-cover object-center"
            />
            {/* Stat overlay badge */}
            <RevealText className="absolute inset-x-0 bottom-0">
              <div className="rounded-b-2xl bg-[#1a1a1a]/85 p-5 backdrop-blur-sm">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-[2.5rem] font-extrabold leading-none text-[#e85d3f]">25+</span>
                  <span className="bento-text-sheen-light text-sm font-semibold leading-snug">
                    Years of Engineering<br />Experience
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#d1d5db]">
                  Our team has successfully handled complex manufacturing challenges across multiple disciplines
                </p>
              </div>
            </RevealText>
          </div>

          {/* Row 2 */}

          {/* Card 4: High Production Capacity */}
          <FeatureCard
            title={<>High Production<br />Capacity</>}
            description={<>Efficient manufacturing processes capable of handling both small-scale orders plus large industrial projects.</>}
            logo={FEATURE_LOGOS.makeInIndia}
            revealDelay={0.1}
          />

          {/* Card 5: Large welding image (tall, spans 1 col but 2 rows visually via min-h) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[300px] md:row-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-2-6GokCc6454jlcjchkl9858C1Dxvp0J.png"
              alt="Excel Engineering factory building exterior with blue corrugated steel facade"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              className="object-cover object-center"
            />
          </div>

          {/* Card 6: Top Production Technology */}
          <FeatureCard
            title={<>Top Production<br />Technology</>}
            description={<>Equipped with modern machinery and automated systems to ensure high precision and consistent output</>}
            logo={FEATURE_LOGOS.swachhBharat}
            revealDelay={0.15}
          />

        </div>
      </div>
    </section>
  )
}
