export type CompletedProjectMedia = {
  src: string
  alt: string
}

/** Shared by the completed-project cards and their individual project pages. */
export const completedProjectMedia: Record<string, CompletedProjectMedia> = {
  'nagod-satna-branch-canal': {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0478-clean%20%281%29-g4mS1XgRKpfks3GH0ud6c3RX3JrHGn.png',
    alt: 'Nagod–Satna Branch Canal completed gate works',
  },
  'sewda-water-supply-bridge': {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0475-clean-yvyIC0wscjKJZ5V3S18D8NvGTHfGRN.png',
    alt: 'Sewda Water Supply Project completed structural bridge works',
  },
  'kondhala-minor-project': {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0473-clean-4fJFBB6zfOeQq5j0rugkbqkL4Xl5EJ.png',
    alt: 'Kondhala Minor Project completed gate and trash-rack works',
  },
}
