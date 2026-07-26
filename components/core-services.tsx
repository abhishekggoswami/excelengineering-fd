import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Truck, Waves, Wrench } from 'lucide-react'

const services = [
  {
    id: 'dam-construction',
    title: 'Dam Construction Works',
    eyebrow: 'Water infrastructure',
    description: 'Complete dam, barrage and reservoir construction engineered for reliability, safety and generations of service.',
    href: '/services/dam-construction',
    video: '/videos/core-services-dam.mp4',
    icon: Waves,
    stat: '120+',
    statLabel: 'Dam projects',
    tags: ['Gravity dams', 'Barrage works', 'Reservoirs'],
  },
  {
    id: 'fabrication',
    title: 'Fabrication Works',
    eyebrow: 'Industrial engineering',
    description: 'Precision steel fabrication for industrial structures, bridges, piping, tanks and hydraulic systems.',
    href: '/services/fabrication',
    video: '/videos/core-services-fabrication.mp4',
    icon: Wrench,
    stat: '200+',
    statLabel: 'Fabrication projects',
    tags: ['Structural steel', 'Pipe fabrication', 'Welding'],
  },
  {
    id: 'crane-services',
    title: 'Crane Services',
    eyebrow: 'Heavy lifting solutions',
    description: 'Safe, precise lifting support from a capable fleet for infrastructure, industrial and installation projects.',
    href: '/services/crane-services',
    video: '/videos/core-services-crane.mp4',
    icon: Truck,
    stat: '50+',
    statLabel: 'Crane fleet',
    tags: ['Mobile cranes', 'Heavy lift', 'Site support'],
  },
]

const serviceCarouselScript = [
  '(() => {',
  "  const root = document.getElementById('home-service-carousel')",
  "  if (!root || root.dataset.initialized === 'true') return",
  "  root.dataset.initialized = 'true'",
  "  const track = root.querySelector('[data-service-track]')",
  "  const count = Number(root.dataset.count || '1')",
  "  const dots = Array.from(root.querySelectorAll('[data-service-index]'))",
  "  const counter = root.querySelector('[data-service-counter]')",
  '  let index = 0; let playing = true; let timer',
  '  const render = (nextIndex) => {',
  '    index = ((nextIndex % count) + count) % count',
  "    track.style.transform = 'translate3d(-' + (index * 100) + '%, 0, 0)'",
  '    dots.forEach((dot, dotIndex) => {',
  '      const active = dotIndex === index',
  "      dot.setAttribute('aria-current', active ? 'true' : 'false')",
  "      dot.classList.toggle('w-10', active); dot.classList.toggle('bg-[#e85d3f]', active)",
  "      dot.classList.toggle('w-2.5', !active); dot.classList.toggle('bg-[#0e5c3d]/25', !active)",
  '    })',
  "    if (counter) counter.textContent = '0' + (index + 1) + ' / 0' + count",
  '  }',
  '  const start = () => { window.clearInterval(timer); if (playing) timer = window.setInterval(() => render(index + 1), 6500) }',
  "  root.addEventListener('click', (event) => {",
  "    const control = event.target.closest('[data-service-action]')",
  '    if (!control) return',
  '    const action = control.dataset.serviceAction',
  "    if (action === 'next') render(index + 1)",
  "    if (action === 'previous') render(index - 1)",
  "    if (action === 'index') render(Number(control.dataset.serviceIndex))",
  "    if (action === 'toggle') { playing = !playing; control.setAttribute('aria-pressed', String(!playing)); control.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow') }",
  '    start()',
  '  })',
  "  root.addEventListener('pointerdown', () => window.clearInterval(timer), { passive: true })",
  "  root.addEventListener('pointerup', start, { passive: true })",
  '  render(0); start()',
  '})()',
].join('\n')

export default function CoreServices() {
  return (
    <section id="services" className="overflow-hidden bg-[#f5efe0] px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3"><div className="h-px w-8 bg-[#e85d3f]" /><span className="text-sm font-semibold uppercase tracking-widest text-[#e85d3f]">Core Service Divisions</span></div>
            <h2 className="text-balance font-black leading-none text-[#1a1a1a]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>What We Build &amp;<br /><span className="text-[#0e5c3d]">How We Deliver</span></h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-relaxed text-[#6b7280]">Three major engineering divisions powering large-scale infrastructure across India for over 25 years.</p>
        </div>

        <div id="home-service-carousel" data-count={services.length}>
          <div className="overflow-hidden rounded-[2rem]">
            <div data-service-track className="flex will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article key={service.id} className="relative min-h-[560px] w-full min-w-full overflow-hidden bg-[#102019] shadow-[0_30px_80px_-35px_rgba(14,92,61,0.6)] sm:min-h-[600px] lg:min-h-[620px]">
                    <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover">
                      <source src={service.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-4 rounded-[1.5rem] border border-white/30 sm:inset-6 sm:rounded-[1.75rem]">
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 rounded-t-[1.5rem] border-b border-white/15 bg-white/[0.14] px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
                        <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-white" /><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 sm:text-xs">{service.eyebrow}</span></div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/65">Excel Engineering</span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 top-[200px] flex min-w-0 flex-col justify-between rounded-b-[1.5rem] border-t border-white/15 bg-white/[0.14] p-5 backdrop-blur-xl sm:inset-x-auto sm:right-0 sm:top-[70px] sm:w-[52%] sm:min-w-[270px] sm:rounded-br-[1.5rem] sm:rounded-tl-none sm:border-l sm:border-t-0 sm:p-7 lg:w-[48%] lg:p-9">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">Engineering division</p>
                          <h3 className="mt-3 text-balance text-3xl font-black leading-[.98] text-white sm:text-4xl lg:text-5xl">{service.title}</h3>
                          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-white/80 sm:text-base">{service.description}</p>
                        </div>
                        <div>
                          <div className="mb-4 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full border border-white/25 bg-black/10 px-2.5 py-1 text-[10px] font-medium text-white/90 sm:text-xs">{tag}</span>)}</div>
                          <Link href={service.href} className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-black uppercase tracking-wide text-[#0e5c3d] shadow-lg transition-all hover:bg-[#f5a623] hover:text-[#1a1a1a] sm:px-5 sm:py-3">Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
                        </div>
                      </div>

                      <div className="absolute left-5 top-[80px] z-10 flex min-h-24 w-[45%] min-w-28 flex-col justify-between rounded-2xl border border-white/35 bg-transparent p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,.08)] sm:bottom-7 sm:left-7 sm:top-auto sm:min-h-40 sm:w-[38%] sm:p-4 lg:w-[36%]">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/85">Site window</span>
                        <div><strong className="block font-black leading-none text-[#f5a623]" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}>{service.stat}</strong><span className="mt-1 block text-[9px] font-bold uppercase tracking-widest text-white/80 sm:text-[10px]">{service.statLabel}</span></div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2" aria-label="Service carousel pagination">
              {services.map((service, index) => <button key={service.id} type="button" data-service-action="index" data-service-index={index} aria-current={index === 0 ? 'true' : 'false'} aria-label={'Show ' + service.title} className={'h-2.5 rounded-full transition-all duration-500 ' + (index === 0 ? 'w-10 bg-[#e85d3f]' : 'w-2.5 bg-[#0e5c3d]/25 hover:bg-[#0e5c3d]/50')} />)}
              <span data-service-counter className="ml-2 text-xs font-semibold text-[#1a1a1a]/45">01 / 03</span>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button type="button" data-service-action="toggle" data-service-toggle aria-label="Pause slideshow" aria-pressed="false" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0e5c3d]/15 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white"><Pause className="h-4 w-4" /><span className="sr-only"><Play className="h-4 w-4" /></span></button>
              <button type="button" data-service-action="previous" aria-label="Previous service" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0e5c3d]/15 bg-white text-[#0e5c3d] transition-colors hover:bg-[#0e5c3d] hover:text-white"><ArrowLeft className="h-4 w-4" /></button>
              <button type="button" data-service-action="next" aria-label="Next service" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e5c3d] text-white transition-transform hover:scale-105"><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
          <script dangerouslySetInnerHTML={{ __html: serviceCarouselScript }} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#0e5c3d] px-6 py-7 sm:px-8 sm:py-8 md:flex-row">
          <div><p className="text-xl font-extrabold text-white">Let&apos;s make something great work together.</p><p className="mt-1 text-sm text-white/60">Tell us about your project and we&apos;ll get back to you within 24 hours.</p></div>
          <Link href="/contact" className="flex flex-shrink-0 items-center gap-2 rounded-full bg-[#e85d3f] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d14f33]"><ArrowUpRight className="h-4 w-4" />Get Free Quote</Link>
        </div>
      </div>
    </section>
  )
}
