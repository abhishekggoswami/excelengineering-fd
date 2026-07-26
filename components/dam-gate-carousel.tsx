import { ArrowLeft, ArrowRight, ArrowUpRight, Layers } from 'lucide-react'

type GateType = {
  name: string
  desc: string
  video?: string
  videoLabel?: string
}

function GateCard({ type, index, mobile = false }: { type: GateType; index: number; mobile?: boolean }) {
  return (
    <article data-gate-mobile-card={mobile ? index : undefined} className="group overflow-hidden rounded-[1.8rem] border border-[#e2e5e2] bg-white p-3 shadow-[0_18px_45px_-36px_rgba(14,92,61,.8)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#e85d3f]/45 hover:shadow-[0_24px_48px_-28px_rgba(232,93,63,.28)]">
      <div className="relative aspect-video overflow-hidden rounded-[1.35rem] bg-[#111111]">
        {type.video ? (
          <video autoPlay muted loop playsInline preload={mobile ? 'metadata' : 'auto'} aria-label={`Video of ${type.name.toLowerCase()} works`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">
            <source src={type.video} type="video/mp4" />
          </video>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_65%_25%,rgba(245,166,35,.18),transparent_35%),linear-gradient(135deg,#173b31,#111111)]"><Layers className="h-10 w-10 text-[#f5a623]" /></div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">{type.videoLabel ?? 'Hydraulic works'}</span>
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[10px] font-black tracking-wider text-[#0e5c3d] shadow-sm">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="px-2 pb-2 pt-4">
        <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#111111] shadow-md"><Layers className="h-4 w-4 text-[#f5a623]" /></div><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e85d3f]">Gate engineering</p><h3 className="mt-1 text-base font-extrabold leading-snug text-[#1a1a1a]">{type.name}</h3></div></div>
        <p className="mt-4 min-h-[3.75rem] text-sm leading-relaxed text-[#6b7280]">{type.desc}</p>
        <div className="mt-4 flex items-center justify-between border-t border-[#e9ece9] pt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0e5c3d]"><span>Excel Engineering</span><ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
      </div>
    </article>
  )
}

const gateCarouselScript = `
  (() => {
    const root = document.getElementById('dam-gate-mobile-carousel')
    if (!root || root.dataset.initialized === 'true') return
    root.dataset.initialized = 'true'
    const cards = Array.from(root.querySelectorAll('[data-gate-mobile-card]'))
    const dots = Array.from(root.querySelectorAll('[data-gate-dot]'))
    const counter = root.querySelector('[data-gate-counter]')
    const grid = root.querySelector('[data-gate-mobile-grid]')
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
    let page = 0
    let timer
    let size = 1
    let pageCount = cards.length
    const playVisibleVideos = () => {
      cards.forEach((card) => {
        const video = card.querySelector('video')
        if (!video) return
        if (card.style.display === 'none') video.pause()
        else video.play().catch(() => {})
      })
    }
    const render = () => {
      size = tabletQuery.matches ? 4 : 1
      pageCount = Math.ceil(cards.length / size)
      page = ((page % pageCount) + pageCount) % pageCount
      const start = page * size
      cards.forEach((card, index) => { card.style.display = index >= start && index < start + size ? '' : 'none' })
      if (grid) grid.classList.toggle('md:grid-cols-2', tabletQuery.matches)
      dots.forEach((dot, index) => {
        const active = index === page
        dot.style.display = index < pageCount ? '' : 'none'
        dot.setAttribute('aria-current', active ? 'page' : 'false')
        dot.classList.toggle('w-8', active)
        dot.classList.toggle('bg-[#e85d3f]', active)
        dot.classList.toggle('w-2.5', !active)
        dot.classList.toggle('bg-[#0e5c3d]/25', !active)
      })
      if (counter) counter.textContent = size === 4 ? 'Cards ' + (start + 1) + '–' + Math.min(start + size, cards.length) + ' of ' + cards.length : 'Gate ' + (page + 1) + ' of ' + cards.length
      playVisibleVideos()
    }
    const startTimer = () => { window.clearInterval(timer); timer = window.setInterval(() => { page += 1; render() }, 7000) }
    root.addEventListener('click', (event) => {
      const control = event.target.closest('[data-gate-action], [data-gate-dot]')
      if (!control) return
      if (control.dataset.gateAction === 'next') page += 1
      if (control.dataset.gateAction === 'previous') page -= 1
      if (control.dataset.gateDot !== undefined) page = Number(control.dataset.gateDot)
      render()
      startTimer()
    })
    const resize = () => { page = 0; render(); startTimer() }
    tabletQuery.addEventListener('change', resize)
    root.addEventListener('pointerdown', () => window.clearInterval(timer), { passive: true })
    root.addEventListener('pointerup', startTimer, { passive: true })
    render()
    startTimer()
  })()
`

export default function DamGateCarousel({ types }: { types: GateType[] }) {
  return (
    <>
      <div className="hidden grid-cols-3 gap-6 lg:grid">{types.map((type, index) => <GateCard key={type.name} type={type} index={index} />)}</div>
      <div id="dam-gate-mobile-carousel" className="lg:hidden">
        <div data-gate-mobile-grid className="grid grid-cols-1 gap-5">{types.map((type, index) => <GateCard key={type.name} type={type} index={index} mobile />)}</div>
        <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#e5e7eb] pt-5">
          <button type="button" data-gate-action="previous" aria-label="Previous gate type page" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0e5c3d]/15 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white"><ArrowLeft className="h-4 w-4" /></button>
          <div className="flex min-w-0 flex-1 flex-col items-center gap-2"><div className="flex flex-wrap justify-center gap-1.5" aria-label="Gate type pages">{types.map((type, index) => <button key={type.name} type="button" data-gate-dot={index} aria-label={`Show gate type page ${index + 1}`} className={`h-2.5 rounded-full transition-all duration-300 ${index === 0 ? 'w-8 bg-[#e85d3f]' : 'w-2.5 bg-[#0e5c3d]/25 hover:bg-[#0e5c3d]/50'}`} />)}</div><span data-gate-counter className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b7280]">Gate 1 of {types.length}</span></div>
          <button type="button" data-gate-action="next" aria-label="Next gate type page" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0e5c3d] text-white transition-transform hover:scale-105"><ArrowRight className="h-4 w-4" /></button>
        </div>
        <script dangerouslySetInnerHTML={{ __html: gateCarouselScript }} />
      </div>
    </>
  )
}
