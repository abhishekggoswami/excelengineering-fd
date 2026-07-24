'use client'

import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

type AnimatedSearchLabelProps = {
  text: string
}

export default function AnimatedSearchLabel({ text }: AnimatedSearchLabelProps) {
  const [visibleText, setVisibleText] = useState('')

  useEffect(() => {
    let index = 0
    let deleting = false
    let pause = 0

    const timer = window.setInterval(() => {
      if (pause > 0) {
        pause -= 1
        return
      }

      if (!deleting) {
        index += 1
        setVisibleText(text.slice(0, index))
        if (index === text.length) {
          deleting = true
          pause = 14
        }
      } else {
        index -= 1
        setVisibleText(text.slice(0, index))
        if (index === 0) {
          deleting = false
          pause = 5
        }
      }
    }, deleting ? 42 : 72)

    return () => window.clearInterval(timer)
  }, [text])

  return (
    <div className="inline-flex w-[15rem] items-center gap-2.5 rounded-full border border-[#e85d3f]/30 bg-white px-4 py-2 text-left shadow-[0_10px_30px_-20px_rgba(232,93,63,.6)]" role="status" aria-label={text}>
      <Search className="h-3.5 w-3.5 shrink-0 text-[#e85d3f]" />
      <span className="animated-search-placeholder-text min-h-4 min-w-0 flex-1 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.14em] text-[#e85d3f]">{visibleText}</span>
      <span aria-hidden className="h-3.5 w-px animate-pulse bg-[#e85d3f]" />
    </div>
  )
}
