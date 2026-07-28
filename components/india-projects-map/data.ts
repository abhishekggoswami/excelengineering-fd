import { additionalProjects } from '@/lib/additional-projects'

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Completed & Ongoing'

export interface RealProject {
  id: string
  title: string
  spec: string
  location: string
  status: 'Completed' | 'Ongoing'
  /** [longitude, latitude] */
  coordinates: [number, number]
  link: string
  description: string
}

/** All confirmed Excel Engineering project sites. */
export const REAL_PROJECTS: RealProject[] = [
  {
    id: 'barkheda-dhar',
    title: 'Barkheda Medium Irrigation Project',
    spec: 'Radial Gate 12.00 × 8.30 MTR',
    location: 'WRD Manawar, Dist. Dhar, Madhya Pradesh',
    status: 'Completed',
    coordinates: [75.09, 22.23],
    link: '/projects/barkheda',
    description: 'Design, supply, fabrication and erection of radial gate, top log gate, pluice gate, hoist and bridge gentry crane for WRD Manawar. Sub-contractor to Harikrisha Infrastructure, Gujarat.',
  },
  {
    id: 'bankpura-rajgarh',
    title: 'Bankpura Project',
    spec: 'Vertical Spillway Gate 15.00 × 4.00 MTR',
    location: 'Dist. Rajgarh, Madhya Pradesh',
    status: 'Completed',
    coordinates: [76.73, 23.77],
    link: '/projects/bankpura',
    description: 'Fabrication, erection, testing and commissioning of vertical spillway gates with all allied components. Executed under WRD CMU Bhopal — Dy. Director & Ex. Engineer S.S Division.',
  },
  {
    id: 'madiya-dam-sagar',
    title: 'Madiya Dam',
    spec: 'Radial Gate 12.85 × 10.30 MTR',
    location: 'Rahtghar, Dist. Sagar, Madhya Pradesh',
    status: 'Ongoing',
    coordinates: [78.91, 23.38],
    link: '/projects/madiya-dam',
    description: 'Design, supply, fabrication and erection of radial gate, stoplog gate, rope drum electrical hoist, gantry crane, dam sluice and environment power channel gate. Sub-contractor to LCC Projects Pvt. Ltd., Ahmedabad.',
  },
  {
    id: 'hiran-irrigation',
    title: 'Hiran Medium Irrigation Project',
    spec: 'Vertical Lift Gate 9.00 × 6.50 MTR',
    location: 'Hiran River, Jabalpur, Madhya Pradesh',
    status: 'Ongoing',
    coordinates: [80.02, 23.20],
    link: '/projects/hiran-irrigation',
    description: 'Design, supply, fabrication, erection, testing and commissioning of vertical gates, gate hoists, bridge trestles, stoplog monorail structures, service and emergency sluice gates, platforms and trash racks. Approximately 325 MT of fabricated steel; executed for SRS Infraway Pvt. Ltd., Gwalior.',
  },
  ...additionalProjects.map((project) => ({
    id: project.slug,
    title: project.title,
    spec: project.quantity ?? project.specification,
    location: project.location,
    status: project.status,
    coordinates: project.coordinates,
    link: `/projects/${project.slug}`,
    description: project.mapDescription,
  })),
]

export interface StateProjectData {
  id: string
  name: string
  projects: number
  status: ProjectStatus
  coordinates: [number, number]
  types: string[]
  since: number
  flagship: string
  description: string
  realProjects: RealProject[]
}

const projectsIn = (state: string) => REAL_PROJECTS.filter((project) => project.location.endsWith(state))

/** States with confirmed Excel Engineering project sites. */
export const STATE_PROJECTS: StateProjectData[] = [
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    projects: projectsIn('Madhya Pradesh').length,
    status: 'Completed & Ongoing',
    coordinates: [78.6, 23.0],
    types: ['Irrigation', 'Dam Construction', 'Fabrication'],
    since: 2011,
    flagship: 'Madiya Dam Radial Gate 12.85 × 10.30 MTR',
    description: 'Excel Engineering has completed and ongoing irrigation, dam, bridge and hydro-mechanical works across Madhya Pradesh.',
    realProjects: projectsIn('Madhya Pradesh'),
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    projects: projectsIn('Rajasthan').length,
    status: 'Ongoing',
    coordinates: [73.8, 26.9],
    types: ['Water Infrastructure', 'Fabrication'],
    since: 2026,
    flagship: 'Escape Reservoir Intake Well Works',
    description: 'Ongoing heavy structural-steel and intake-gate works for the Escape Reservoir Project near Nachna, Jaisalmer.',
    realProjects: projectsIn('Rajasthan'),
  },
  {
    id: 'odisha',
    name: 'Odisha',
    projects: projectsIn('Odisha').length,
    status: 'Ongoing',
    coordinates: [85.4, 20.5],
    types: ['Water Infrastructure', 'Hydro-Mechanical'],
    since: 2026,
    flagship: 'Kusabhadra Storage Structure',
    description: 'Ongoing mechanical gate, hoist and monorail work for the Kusabhadra Storage Structure Project.',
    realProjects: projectsIn('Odisha'),
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    projects: projectsIn('Gujarat').length,
    status: 'Ongoing',
    coordinates: [72.5, 22.6],
    types: ['Hydro-Mechanical', 'Irrigation'],
    since: 2026,
    flagship: 'Ambod (Madhavgadh) Barrage Project',
    description: 'Ongoing hydro-mechanical works for barrage and lift-irrigation infrastructure in Gujarat.',
    realProjects: projectsIn('Gujarat'),
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    projects: projectsIn('Maharashtra').length,
    status: 'Completed',
    coordinates: [76.0, 19.8],
    types: ['Hydro-Mechanical', 'Irrigation'],
    since: 2026,
    flagship: 'Kondhala Minor Project',
    description: 'Completed hydro-mechanical HR gate and trash-rack work for the Kondhala Minor Project in Bhandara.',
    realProjects: projectsIn('Maharashtra'),
  },
]

export const STATE_BY_NAME: Record<string, StateProjectData> = STATE_PROJECTS.reduce(
  (acc, state) => {
    acc[state.name] = state
    return acc
  },
  {} as Record<string, StateProjectData>,
)

export const MAP_PALETTE = ['#4E9E82', '#6FBFA0', '#A6D9BE', '#3C8574', '#5FAEB4', '#8FCBC8', '#E1A66E', '#E88C5A', '#F0C36B', '#CBB35E', '#B7CE86', '#79B98F', '#D98E63', '#9CCBB0']

export function colorForState(name: string): string {
  let h = 5381
  for (let i = 0; i < name.length; i++) h = ((h << 5) + h + name.charCodeAt(i)) >>> 0
  return MAP_PALETTE[h % MAP_PALETTE.length]
}

export const MAP_STATS = [
  { value: String(REAL_PROJECTS.length), label: 'Real Projects' },
  { value: String(REAL_PROJECTS.filter((project) => project.status === 'Ongoing').length), label: 'Active Sites' },
  { value: String(REAL_PROJECTS.filter((project) => project.status === 'Completed').length), label: 'Completed Works' },
  { value: 'M.P.', label: 'Primary State' },
]
