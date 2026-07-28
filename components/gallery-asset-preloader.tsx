'use client'

import { useEffect, useRef } from 'react'

/**
 * Warms the gallery collage cache while the visitor is still on the homepage.
 * Starts immediately so the collage is already decoded when Gallery is opened.
 */
export default function GalleryAssetPreloader() {
  const imagesRef = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    const controller = new AbortController()

    const preloadGallery = async () => {
      try {
        const response = await fetch('/gallery', { signal: controller.signal })
        if (!response.ok) return

        const html = await response.text()
        const parsed = new DOMParser().parseFromString(html, 'text/html')
        const sources = Array.from(parsed.querySelectorAll<HTMLImageElement>('img[src]'))
          .map((image) => image.currentSrc || image.src)
          .filter(Boolean)

        imagesRef.current = Array.from(new Set(sources)).map((source) => {
          const image = new window.Image()
          image.decoding = 'async'
          image.fetchPriority = 'auto'
          image.src = source
          void image.decode().catch(() => undefined)
          return image
        })
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.warn('Gallery collage preload was skipped.', error)
        }
      }
    }

    void preloadGallery()

    return () => {
      controller.abort()
      imagesRef.current = []
    }
  }, [])

  return null
}
