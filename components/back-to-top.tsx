'use client'

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-2 text-white/30 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors group"
      aria-label="Back to top"
    >
      Back to top
      <span className="w-5 h-5 rounded border border-white/15 group-hover:border-white/40 flex items-center justify-center transition-colors">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M5 8V2M2 5l3-3 3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  )
}
