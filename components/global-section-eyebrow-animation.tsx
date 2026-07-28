'use client'

import { useEffect } from 'react'

const TYPING_SPEED = 68

export default function GlobalSectionEyebrowAnimation() {
  useEffect(() => {
    const cleanups: Array<() => void> = []

    const decorate = () => {
      const labels = Array.from(document.querySelectorAll<HTMLElement>('main > :not(:first-child) span[class*="uppercase"][class*="tracking-widest"]'))
        .filter((label) => Array.from(label.parentElement?.children ?? []).some((child) => child.classList.contains('h-px')))
        .filter((label) => !label.dataset.sectionTypingInitialized)

      labels.forEach((label, labelIndex) => {
        const originalText = label.textContent?.trim() ?? ''
        if (!originalText) return

        label.dataset.sectionTypingInitialized = 'true'
        label.classList.add('section-typing-label')
        let index = 0
        let deleting = false
        let pause = labelIndex * 4

        const timer = window.setInterval(() => {
          if (pause > 0) {
            pause -= 1
            return
          }

          if (!deleting) {
            index += 1
            label.textContent = originalText.slice(0, index)
            if (index === originalText.length) {
              deleting = true
              pause = 20
            }
          } else {
            index -= 1
            label.textContent = originalText.slice(0, index)
            if (index === 0) {
              deleting = false
              pause = 7
            }
          }
        }, TYPING_SPEED)

        cleanups.push(() => {
          window.clearInterval(timer)
          label.textContent = originalText
          label.classList.remove('section-typing-label')
          delete label.dataset.sectionTypingInitialized
        })
      })
    }

    decorate()
    const observer = new MutationObserver(decorate)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return null
}
