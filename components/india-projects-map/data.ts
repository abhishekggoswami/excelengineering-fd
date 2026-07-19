export type ProjectStatus = 'Completed' | 'Ongoing' | 'Completed & Ongoing'

export interface RealProject {
  id: string
  /** Short title shown in the pin tooltip and panel */
  title: string
  /** Gate spec / size */
  spec: string
  /** Site name, district, state */
  location: string
  status: 'Completed' | 'Ongoing'
  /** [longitude, latitude] — real GPS coordinate of the dam/project site */
  coordinates: [number, number]
  /** Which page this marker links to */
  link: string
  /** One-line summary */
  description: string
}

/** All confirmed real Excel Engineering project sites with real GPS coordinates */
export const REAL_PROJECTS: RealProject[] = [
  {
    id: 'barkheda-dhar',
    title: 'Barkheda Medium Irrigation Project',
    spec: 'Radial Gate 12.00 × 8.30 MTR',
    location: 'WRD Manawar, Dist. Dhar, Madhya Pradesh',
    status: 'Completed',
    // Manawar, Dhar district, MP — near Barkheda irrigation site
    coordinates: [75.09, 22.23],
    link: '/projects/barkheda',
    description:
      'Design, supply, fabrication and erection of radial gate, top log gate, pluice gate, hoist and bridge gentry crane for WRD Manawar. Sub-contractor to Harikrisha Infrastructure, Gujarat.',
  },
  {
    id: 'bankpura-rajgarh',
    title: 'Bankpura Project',
    spec: 'Vertical Spillway Gate 15.00 × 4.00 MTR',
    location: 'Dist. Rajgarh, Madhya Pradesh',
    status: 'Completed',
    // Rajgarh district, MP
    coordinates: [76.73, 23.77],
    link: '/projects/bankpura',
    description:
      'Fabrication, erection, testing and commissioning of vertical spillway gates with all allied components. Executed under WRD CMU Bhopal — Dy. Director & Ex. Engineer S.S Division.',
  },
  {
    id: 'madiya-dam-sagar',
    title: 'Madiya Dam',
    spec: 'Radial Gate 12.85 × 10.30 MTR',
    location: 'Rahtghar, Dist. Sagar, Madhya Pradesh',
    status: 'Ongoing',
    // Rahtghar, Sagar district, MP — Madiya Dam site
    coordinates: [78.91, 23.38],
    link: '/projects/madiya-dam',
    description:
      'Design, supply, fabrication and erection of radial gate, stoplog gate, rope drum electrical hoist, gantry crane, dam sluice and environment power channel gate. Sub-contractor to LCC Projects Pvt. Ltd., Ahmedabad.',
  },
  {
    id: 'hiran-irrigation',
    title: 'Hiran Medium Irrigation Project',
    spec: 'Vertical Lift Gate 9.00 × 6.50 MTR',
    location: 'Hiran River, Madhya Pradesh',
    status: 'Ongoing',
    // Hiran river dam, near Damoh / Narsinghpur, MP
    coordinates: [79.45, 23.05],
    link: '/projects/hiran-irrigation',
    description:
      'Design, supply, fabrication, erection, testing and commissioning of vertical lift gate, hoist, bridge trestle assembly, stoplog monorail, service and emergency sluice gate. Sub-contractor to SRS Infraway Pvt. Ltd., Gwalior.',
  },
]

export interface StateProjectData {
  id: string
  /** Must match the `st_nm` property in the TopoJSON */
  name: string
  projects: number
  status: ProjectStatus
  /** [longitude, latitude] geographic centroid for the state label */
  coordinates: [number, number]
  types: string[]
  since: number
  flagship: string
  description: string
  /** Real individual projects within this state */
  realProjects: RealProject[]
}

/**
 * Only states with real, confirmed Excel Engineering projects.
 * All other dummy states removed.
 */
export const STATE_PROJECTS: StateProjectData[] = [
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    projects: 4,
    status: 'Completed & Ongoing',
    // centroid of MP — used for state label placement only
    coordinates: [78.6, 23.0],
    types: ['Irrigation', 'Dam Construction', 'Fabrication'],
    since: 2011,
    flagship: 'Madiya Dam Radial Gate 12.85 × 10.30 MTR',
    description:
      'All four confirmed Excel Engineering projects are in Madhya Pradesh — two completed WRD irrigation gate contracts and two ongoing dam gate works via MOU sub-contractor arrangements.',
    realProjects: REAL_PROJECTS,
  },
]

/** Quick lookup by the TopoJSON `st_nm` value. */
export const STATE_BY_NAME: Record<string, StateProjectData> = STATE_PROJECTS.reduce(
  (acc, s) => {
    acc[s.name] = s
    return acc
  },
  {} as Record<string, StateProjectData>,
)

/**
 * Deterministic colour per state name so every state gets a stable fill.
 */
export const MAP_PALETTE = [
  '#4E9E82', // emerald sage
  '#6FBFA0', // mint
  '#A6D9BE', // pale green
  '#3C8574', // deep teal-green
  '#5FAEB4', // teal
  '#8FCBC8', // soft aqua
  '#E1A66E', // warm sand
  '#E88C5A', // clay / terracotta
  '#F0C36B', // honey gold
  '#CBB35E', // olive gold
  '#B7CE86', // light olive
  '#79B98F', // fern
  '#D98E63', // burnt sienna
  '#9CCBB0', // seafoam
]

export function colorForState(name: string): string {
  let h = 5381
  for (let i = 0; i < name.length; i++) {
    h = ((h << 5) + h + name.charCodeAt(i)) >>> 0
  }
  return MAP_PALETTE[h % MAP_PALETTE.length]
}

export const MAP_STATS = [
  { value: '4',    label: 'Real Projects' },
  { value: '2',    label: 'Active Sites' },
  { value: '2',    label: 'Completed Works' },
  { value: 'M.P.', label: 'Primary State' },
]
