export type CompletedProjectMedia = {
  video: string
  alt: string
}

/** Shared by completed-project cards and their individual project pages. */
export const completedProjectMedia: Record<string, CompletedProjectMedia> = {
  barkheda: {
    video: '/videos/completed/barkheda.mp4',
    alt: 'Barkheda Medium Irrigation Project completed gate works',
  },
  bankpura: {
    video: '/videos/completed/bankpura.mp4',
    alt: 'Bankpura completed spillway gate works',
  },
  'nagod-satna-branch-canal': {
    video: '/videos/completed/nagod-satna.mov',
    alt: 'Nagod-Satna Branch Canal completed gate works',
  },
  'kondhala-minor-project': {
    video: '/videos/completed/kondhala.mp4',
    alt: 'Kondhala Minor Project completed gate and trash-rack works',
  },
}
