import AdditionalProjectPage from '@/components/additional-project-page'
import type { AdditionalProject } from '@/lib/additional-projects'

const barkhedaProject: AdditionalProject = {
  slug: 'barkheda',
  title: 'Barkheda Medium Irrigation Project',
  location: 'WRD Manawar, District Dhar, Madhya Pradesh',
  state: 'Madhya Pradesh',
  coordinates: [75.09, 22.23],
  status: 'Completed',
  client: 'Harikrisha Infrastructure, Kutch, Gujarat',
  specification: 'Radial Gate — 12.00 × 8.30 MTR',
  quantity: '12.00 × 8.30 MTR radial-gate package',
  overview: 'Excel Engineering completed the design, drawing, supply, fabrication, erection and commissioning of the radial gate, top log gate, sluice gate, hoist systems and bridge gantry-crane structure for the Barkheda Medium Irrigation Project.',
  scope: [
    'Radial gate — 12.00 × 8.30 MTR gate dimensions',
    'Top log gate design, fabrication and supply',
    'Sluice gate design, fabrication and installation',
    'Bridge gantry-crane structure fabrication and erection',
    'Complete mechanical and electrical hoist systems',
    'Full erection and commissioning at the WRD Manawar project site',
  ],
  mapDescription: 'Completed radial-gate and hoist package for the Barkheda Medium Irrigation Project.',
}

export default function BarkhedaProjectPage() {
  return <AdditionalProjectPage project={barkhedaProject} />
}
