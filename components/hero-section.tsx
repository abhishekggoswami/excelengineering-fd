'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HERO_HEADING = 'Specialists in Dam Construction & Hydraulic Works'
const SLIDES = [
  {
    src: '/videos/home-hero-1.mp4',
    label: 'Water Infrastructure in Motion',
    sublabel: 'Excel Engineering Since 1999',
  },
  {
    src: '/videos/home-hero-2.mp4',
    label: 'Precision at Every Stage',
    sublabel: 'Engineering Built to Last',
  },
]

export default function HeroSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const layerRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    let activeIndex = 0
    let transitioning = false
    let transitionTimer = 0
    let disposed = false

    const safelyPlay = (video: HTMLVideoElement) => {
      if (disposed) return
      void video.play().catch(() => undefined)
    }

    const showNextVideo = () => {
      if (transitioning || disposed) return

      const outgoingIndex = activeIndex
      const incomingIndex = (activeIndex + 1) % SLIDES.length
      const outgoingVideo = videoRefs.current[outgoingIndex]
      const incomingVideo = videoRefs.current[incomingIndex]
      const outgoingLayer = layerRefs.current[outgoingIndex]
      const incomingLayer = layerRefs.current[incomingIndex]
      if (!outgoingVideo || !incomingVideo || !outgoingLayer || !incomingLayer) return

      transitioning = true
      activeIndex = incomingIndex
      incomingVideo.currentTime = 0
      incomingLayer.style.zIndex = '2'
      outgoingLayer.style.zIndex = '1'
      incomingLayer.style.opacity = '1'
      safelyPlay(incomingVideo)

      transitionTimer = window.setTimeout(() => {
        outgoingLayer.style.opacity = '0'
        outgoingVideo.pause()
        outgoingVideo.currentTime = 0
        transitioning = false
      }, 900)
    }

    const endedHandlers = videoRefs.current.map((video, index) => {
      const handler = () => {
        if (index === activeIndex) showNextVideo()
      }
      video?.addEventListener('ended', handler)
      return handler
    })

    const firstVideo = videoRefs.current[0]
    if (firstVideo) {
      firstVideo.currentTime = 0
      safelyPlay(firstVideo)
    }

    const playbackGuard = window.setInterval(() => {
      const activeVideo = videoRefs.current[activeIndex]
      if (!activeVideo || transitioning) return
      if (activeVideo.ended) {
        showNextVideo()
      } else if (activeVideo.paused && document.visibilityState === 'visible') {
        safelyPlay(activeVideo)
      }
    }, 500)

    const resumeVisibleVideo = () => {
      if (document.visibilityState === 'visible') {
        const activeVideo = videoRefs.current[activeIndex]
        if (activeVideo && !activeVideo.ended) safelyPlay(activeVideo)
      }
    }
    document.addEventListener('visibilitychange', resumeVisibleVideo)

    return () => {
      disposed = true
      window.clearInterval(playbackGuard)
      window.clearTimeout(transitionTimer)
      document.removeEventListener('visibilitychange', resumeVisibleVideo)
      videoRefs.current.forEach((video, index) => {
        video?.removeEventListener('ended', endedHandlers[index])
      })
    }
  }, [])

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ borderRadius: '24px 24px 0 0' }}
    >
      {/* Both videos stay mounted to prevent empty frames during transitions. */}
      {SLIDES.map((item, index) => (
        <div
          key={item.src}
          ref={(layer) => {
            layerRefs.current[index] = layer
          }}
          aria-hidden={index !== 0}
          className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === 0 ? 2 : 1 }}
        >
          <video
            ref={(video) => {
              videoRefs.current[index] = video
            }}
            autoPlay={index === 0}
            muted
            playsInline
            preload="auto"
            onCanPlay={(event) => {
              if (index === 0 && event.currentTarget.paused) {
                void event.currentTarget.play().catch(() => undefined)
              }
            }}
            className="h-full w-full scale-[1.015] object-cover"
            aria-label={`${item.label} project video`}
          >
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#111111] to-transparent"
        style={{ zIndex: 3 }}
      />

      <div
        className="slide-caption-enter absolute bottom-24 left-8 z-20 flex items-center gap-3 md:left-20"
      >
        <div className="h-px w-8 bg-[#e85d3f]" />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623]">
            {SLIDES[0].sublabel}
          </p>
          <p className="text-sm font-semibold text-white/80">{SLIDES[0].label}</p>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-40 pt-20 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[#e85d3f]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f5a623]">
              Infrastructure &amp; Engineering Contractor
            </span>
          </div>

          <h1
            aria-label={HERO_HEADING}
            className="relative mb-6 text-balance font-black leading-none text-white"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            <span aria-hidden="true" className="invisible">
              Specialists in <span>Dam Construction</span> &amp; Hydraulic Works
            </span>
            <span
              aria-hidden="true"
              className="hero-heading-typewriter absolute inset-x-0 top-0"
            >
              Specialists in <span className="text-[#f5a623]">Dam Construction</span>{' '}
              &amp; Hydraulic Works
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            From gravity dams and spillways to radial gate installations and
            barrage structures — Excel Engineering delivers precision hydraulic
            infrastructure for government and irrigation authorities across India.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#services"
              className="flex items-center gap-2 rounded-full bg-[#e85d3f] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d14f33]"
            >
              <ArrowRight className="h-4 w-4" />
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white/80"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-10">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '259+', label: 'Projects Completed' },
            { value: '15+', label: 'States Operating' },
            { value: '21K+', label: 'Happy Clients' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="font-black leading-none text-[#f5a623]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-medium uppercase tracking-wide text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
