export type CompletedProjectMedia = {
  video: string
  alt: string
}

/** Shared by completed-project cards and their individual project pages. */
export const completedProjectMedia: Record<string, CompletedProjectMedia> = {
  'madiya-dam': {
    video: '/videos/ongoing/project-01.mp4',
    alt: 'Madiya Dam completed radial gate works',
  },
  barkheda: {
    video: '/videos/completed/barkheda.mp4',
    alt: 'Barkheda Medium Irrigation Project completed gate works',
  },
  bankpura: {
    video: '/videos/completed/bankpura.mp4',
    alt: 'Bankpura completed spillway gate works',
  },
  'escape-reservoir-approach-bridge': {
    video: '/videos/completed/escape-reservoir-approach-bridge.mp4',
    alt: 'Escape Reservoir Intake Well Approach Bridge completed structural-steel works',
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
