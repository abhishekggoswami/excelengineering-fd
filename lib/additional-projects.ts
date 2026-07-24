export type AdditionalProjectStatus = 'Completed' | 'Ongoing'

export interface AdditionalProject {
  slug: string
  title: string
  location: string
  state: string
  coordinates: [number, number]
  status: AdditionalProjectStatus
  client?: string
  specification: string
  overview: string
  scope: string[]
  mapDescription: string
  /** Shown only where the supplied project information includes it. */
  quantity?: string
  value?: string
}

export const additionalProjects: AdditionalProject[] = [
  {
    slug: 'escape-reservoir-approach-bridge',
    title: 'Escape Reservoir – Intake Well Approach Bridge',
    location: 'Madasar, Nachna, Jaisalmer, Rajasthan',
    state: 'Rajasthan',
    // Madasar / Nachna project area; slightly offset so the two Escape Reservoir packages remain selectable.
    coordinates: [72.90, 27.84],
    status: 'Ongoing',
    client: 'LCC Projects Pvt. Ltd.',
    specification: 'Intake well approach bridge and structural steel works',
    quantity: 'Approximately 46.67 MT of structural steel',
    overview: 'Excel Engineering is executing the fabrication, supply, erection and commissioning of heavy structural steel works for the Escape Reservoir Project, including the Intake Well Approach Bridge and associated steel structures.',
    scope: [
      'Trestle bridge fabrication',
      'Trash rack, structural-steel hoist bridge and monorail',
      'Catwalk bridge, embedded steel parts, columns, beams, bracings and stiffeners',
      'Chequered-plate flooring, handrails and ladders',
      'Welding, painting, transportation, erection and final commissioning',
    ],
    mapDescription: 'Heavy structural steel package for the Escape Reservoir intake-well approach bridge.',
  },
  {
    slug: 'escape-reservoir-intake-well-gate',
    title: 'Escape Reservoir – Intake Well Gate',
    location: 'Madasar, Nachna, Jaisalmer, Rajasthan',
    state: 'Rajasthan',
    // Same site as the bridge package, with a small visual offset for a separately selectable pin.
    coordinates: [72.94, 27.82],
    status: 'Ongoing',
    client: 'LCC Projects Pvt. Ltd.',
    specification: 'Intake well sluice gates and associated steel works',
    quantity: 'Approximately 35.22 MT of structural steel',
    overview: 'Excel Engineering is executing the fabrication, supply, erection and commissioning of Intake Well Gates for the Escape Reservoir Project in accordance with approved engineering drawings and technical specifications.',
    scope: [
      'Design, fabrication, installation and commissioning of sluice gates',
      'Embedded steel parts, columns, beams, bracings and stiffeners',
      'Chequered-plate flooring, handrails and ladders',
      'Welding, anchoring and surface preparation',
      'Three-coat synthetic enamel painting',
    ],
    mapDescription: 'Intake-well gate package for the Escape Reservoir water-infrastructure project.',
  },
  {
    slug: 'kusabhadra-storage-structure',
    title: 'Kusabhadra Storage Structure (KSS)',
    location: 'Ramchandra Pur, Balianta, Khordha, Odisha',
    state: 'Odisha',
    coordinates: [85.90, 20.25],
    status: 'Ongoing',
    client: 'LCC Projects Pvt. Ltd.',
    specification: 'Hydro-mechanical gates, hoists and monorail systems',
    overview: 'Excel Engineering is executing supply, fabrication, erection, testing and commissioning of critical mechanical works for the Kusabhadra Storage Structure Project.',
    scope: [
      'Vertical sluice gates and vertical barrage gates',
      'Rope drum hoists and hoist bridge platforms',
      'Trestles and stoplog gates',
      'Monorail crane systems, monorail structures and lifting beams',
      'Testing and commissioning in line with approved drawings and specifications',
    ],
    mapDescription: 'Critical mechanical works for the Kusabhadra Storage Structure in Odisha.',
  },
  {
    slug: 'nagod-satna-branch-canal',
    title: 'Nagod–Satna Branch Canal (NSC)',
    location: 'Village Pondi, Tehsil Unchehra, District Satna, Madhya Pradesh',
    state: 'Madhya Pradesh',
    coordinates: [80.05, 24.47],
    status: 'Completed',
    client: 'LCC Projects Pvt. Ltd.',
    specification: 'HR & CR gates for canal infrastructure',
    quantity: 'Approximately 68.63 MT of fabricated steel',
    overview: 'Excel Engineering completed the supply, fabrication, erection, testing and commissioning of HR & CR Gates for the Nagod–Satna Branch Canal Project.',
    scope: [
      'Supply, fabrication and installation of HR & CR Gates',
      'All allied gate components',
      'Erection, testing and commissioning',
      'Execution to approved technical specifications and engineering standards',
    ],
    mapDescription: 'Completed HR & CR gate package for the Nagod–Satna Branch Canal.',
  },
  {
    slug: 'hanota-dam',
    title: 'Hanota Dam Hydro-Mechanical Works',
    location: 'Hanota, District Sagar, Madhya Pradesh',
    state: 'Madhya Pradesh',
    coordinates: [78.2801, 24.0061],
    status: 'Ongoing',
    client: 'LCC Projects Pvt. Ltd.',
    specification: 'Hydro-mechanical gate, hoist and gantry-crane works',
    quantity: 'Approximately 1,446.14 MT of fabricated steel',
    overview: 'Excel Engineering is executing the supply, fabrication, erection, testing and commissioning of hydro-mechanical equipment for the Hanota Dam Project.',
    scope: [
      'Radial gates and stoplog gates',
      'Service and emergency sluice gates',
      'Electrically operated rope drum hoists',
      'Gantry cranes and allied hydro-mechanical components',
      'Erection, testing and commissioning to approved drawings and specifications',
    ],
    mapDescription: 'Large-scale hydro-mechanical works package for Hanota Dam in Sagar district.',
  },
  {
    slug: 'sewda-water-supply-bridge',
    title: 'MS Structural Bridge – Sewda Water Supply Project',
    location: 'Sewda, District Datia, Madhya Pradesh',
    state: 'Madhya Pradesh',
    coordinates: [78.13, 25.67],
    status: 'Completed',
    client: 'Bhugan Infracon Pvt. Ltd.',
    specification: 'MS structural bridge fabrication and erection',
    quantity: 'Base scope: approximately 97.71 MT; extended scope: approximately 137 MT of fabricated structural steel',
    overview: 'Excel Engineering completed the supply, fabrication and erection of an MS Structural Bridge for the Sewda Water Supply Project. The later extended scope added elastomeric bearing pads and approximately 137 MT of fabricated structural steel to the project record.',
    scope: [
      'Complete structural-steel fabrication, precision welding and assembly',
      'Surface preparation, primer coating and aluminium painting',
      'On-site erection in accordance with approved drawings and IS standards',
      'Supply and installation of nuts, bolts, washers and fastening materials',
      'Extended scope: elastomeric bearing pads and additional structural steel works',
    ],
    mapDescription: 'Completed MS structural bridge package for the Sewda Water Supply Project.',
  },
  {
    slug: 'judi-irrigation-project',
    title: 'Judi Irrigation Project',
    location: 'Khatariya area, Buxwaha Tehsil, Madhya Pradesh',
    state: 'Madhya Pradesh',
    coordinates: [79.26, 24.1447],
    status: 'Ongoing',
    client: 'Virent Power & Projects Pvt. Ltd.',
    specification: 'Hydro-mechanical gates, hoists and structural steel works',
    quantity: 'Approximately 489.45 MT of fabricated steel',
    overview: 'Excel Engineering is executing the design, supply, fabrication, erection, testing and commissioning of hydro-mechanical systems for the Judi Irrigation Project.',
    scope: [
      'Radial gates, sluice gates and stoplog gates',
      'Rope drum hoists and gantry-crane structures',
      'Hoist platforms and steel railings',
      'Allied structural-steel works',
      'Testing and commissioning to approved drawings and technical specifications',
    ],
    mapDescription: 'Hydro-mechanical and irrigation infrastructure works for the Judi project.',
  },
  {
    slug: 'banda-dam',
    title: 'Banda Dam Project',
    location: 'Bandri, District Sagar, Madhya Pradesh',
    state: 'Madhya Pradesh',
    coordinates: [78.13, 24.18],
    status: 'Ongoing',
    client: 'LCC Projects Limited',
    specification: 'Radial and stoplog gate package',
    value: 'Project value: ₹2.71 Crore+ across all work orders',
    overview: 'Excel Engineering is executing a complete gate package for the Banda Dam Project, covering material supply, fabrication, erection, protective painting, and testing and commissioning support under multiple work orders.',
    scope: [
      'Supply of gate materials (brought-out items)',
      'Fabrication of radial gates and stoplog gates',
      'Erection and installation of gates',
      'Surface preparation and protective painting as per IS 14177',
      'Testing and commissioning support',
    ],
    mapDescription: 'Complete radial and stoplog gate package for the Banda Dam Project.',
  },
  {
    slug: 'todiya-rock-lis-phase-1',
    title: 'Todiya Rock LIS Phase-I',
    location: 'Balasinor area, Gujarat',
    state: 'Gujarat',
    coordinates: [73.34, 22.95],
    status: 'Ongoing',
    client: 'LCC Projects Limited',
    specification: 'Vertical sluice gates, trash racks and hydraulic structures',
    quantity: 'Approximately 42.72 MT of MS and SS material handled',
    overview: 'Excel Engineering is executing material supply, fabrication, erection, testing and commissioning of vertical sluice gates, trash racks and allied hydraulic structures for Todiya Rock LIS Phase-I.',
    scope: [
      'MS and SS material supply, fabrication and GI coating',
      'Vertical sluice gates, trash racks, embedded parts and lifting beams',
      'Manual lifting structures and motorized screw hoists',
      'Shop assembly, transportation, site erection and alignment',
      'Testing, commissioning and complete installation of hydraulic gate components',
    ],
    mapDescription: 'Vertical sluice-gate and hydraulic-structure works for Todiya Rock LIS Phase-I.',
  },
  {
    slug: 'ambod-madhavgadh-barrage',
    title: 'Ambod (Madhavgadh) Barrage Project',
    location: 'Ambod, Mansa Taluka, Gandhinagar, Gujarat',
    state: 'Gujarat',
    coordinates: [72.70, 23.43],
    status: 'Ongoing',
    client: 'LCC Projects Limited',
    specification: 'Hydro-mechanical barrage gates, hoists and monorail structures',
    quantity: 'Total hydro-mechanical scope: 850 MT',
    overview: 'Excel Engineering is executing hydro-mechanical work for the Ambod (Madhavgadh) Barrage Project, including material supply, fabrication, transportation, installation, testing and commissioning.',
    scope: [
      'Hydro-mechanical barrage gates and stoplog gates',
      'Rope drum hoists and monorail structures',
      'Structural-steel components and complete material supply',
      'Fabrication, transportation, installation and commissioning',
      'Execution with skilled manpower, machinery, tools and tackles to approved specifications',
    ],
    mapDescription: '850 MT hydro-mechanical barrage-gate package at Ambod in Gujarat.',
  },
  {
    slug: 'kondhala-minor-project',
    title: 'Kondhala Minor Project',
    location: 'Kondhala, Lakhandur, Bhandara, Maharashtra',
    state: 'Maharashtra',
    coordinates: [79.77017, 20.8481],
    status: 'Completed',
    specification: 'Hydro-mechanical HR gate and trash-rack works',
    quantity: 'Total work executed: 120 MT',
    overview: 'Excel Engineering completed hydro-mechanical HR Gate and Trash Rack works for the Kondhala Minor Project, including complete site execution to approved drawings and technical specifications.',
    scope: [
      'Supply, fabrication and erection of MS gates and trash racks',
      'Alignment, embedded-parts fixing and hoist assembly',
      'Concreting, finishing, testing and commissioning',
      'Painting, consumables, manpower, tools and tackles',
      'Transportation and complete site execution',
    ],
    mapDescription: 'Completed HR gate and trash-rack works for the Kondhala Minor Project.',
  },
]

export const additionalProjectBySlug = Object.fromEntries(
  additionalProjects.map((project) => [project.slug, project]),
) as Record<string, AdditionalProject>
