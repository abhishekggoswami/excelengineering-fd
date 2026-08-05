import { additionalProjects } from '@/lib/additional-projects'

export type OngoingProjectDetail = {
  slug: string
  title: string
  location: string
  client?: string
  specification: string
  overview: string
  scope: string[]
  video: string
  quantity?: string
  value?: string
}

const primaryOngoingProjects: OngoingProjectDetail[] = [
  {
    slug: 'madiya-dam',
    title: 'Madiya Dam – Radial Gate Works',
    location: 'Rahtghar, District Sagar, Madhya Pradesh',
    client: 'LCC Projects Pvt. Ltd., Ahmedabad (MOU)',
    specification: 'Radial Gate – 12.85 × 10.30 MTR',
    quantity: '12.85 × 10.30 MTR radial-gate package',
    overview: 'Excel Engineering is executing the design, drawing supply, fabrication, erection, testing and commissioning of a major radial-gate and hoist package at Madiya Dam.',
    scope: [
      'Radial gate and stoplog gate fabrication and installation',
      'Rope drum electrical hoist and hydraulic-cylinder hoist systems',
      'Gantry crane, dam sluice and environmental power-channel gates',
      'Testing, commissioning and all allied site components',
    ],
    video: '/videos/ongoing/project-01.mp4',
  },
  {
    slug: 'hiran-irrigation',
    title: 'Hiran Medium Irrigation Project',
    location: 'Hiran River, Jabalpur, Madhya Pradesh',
    client: 'SRS Infraway Pvt. Ltd., Gwalior (MOU)',
    specification: 'Vertical Lift Gate – 9.00 × 6.50 MTR',
    quantity: 'Approximately 325 MT of fabricated steel',
    overview: 'Excel Engineering is executing the design, supply, fabrication, erection, testing and commissioning of the hydro-mechanical gate and hoist systems for the Hiran Medium Irrigation Project.',
    scope: [
      'Vertical gates, vertical gate hoists and bridge trestles',
      'Stoplog gates and stoplog monorail structures',
      'Service and emergency sluice gates with electrical hoists',
      'Platforms, trash racks, testing and commissioning',
    ],
    video: '/videos/ongoing/project-02.mp4',
  },
]

const additionalProjectVideos: Record<string, string> = {
  'escape-reservoir-intake-well-gate': '/videos/ongoing/project-03.mp4',
  'kusabhadra-storage-structure': '/videos/ongoing/project-04.mp4',
  'hanota-dam': '/videos/ongoing/project-05.mp4',
  'sewda-water-supply-bridge': '/videos/ongoing/project-06.mp4',
  'judi-irrigation-project': '/videos/ongoing/project-07.mp4',
  'banda-dam': '/videos/ongoing/project-08.mp4',
  'todiya-rock-lis-phase-1': '/videos/ongoing/project-09.mp4',
  'ambod-madhavgadh-barrage': '/videos/ongoing/project-10.mp4',
}

const additionalOngoingProjects: OngoingProjectDetail[] = additionalProjects
  .filter((project) => project.status === 'Ongoing')
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    location: project.location,
    client: project.client,
    specification: project.specification,
    overview: project.overview,
    scope: project.scope,
    quantity: project.quantity,
    value: project.value,
    video: additionalProjectVideos[project.slug],
  }))

export const ongoingProjects = [
  ...primaryOngoingProjects.filter((project) => project.slug !== 'madiya-dam'),
  ...additionalOngoingProjects,
]

export const ongoingProjectBySlug = Object.fromEntries(
  ongoingProjects.map((project) => [project.slug, project]),
) as Record<string, OngoingProjectDetail>
