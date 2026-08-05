import AdditionalProjectPage from '@/components/additional-project-page'
import type { AdditionalProject } from '@/lib/additional-projects'

const madiyaDamProject: AdditionalProject = {
  slug: 'madiya-dam',
  title: 'Madiya Dam - Radial Gate Works',
  location: 'Rahtghar, District Sagar, Madhya Pradesh',
  state: 'Madhya Pradesh',
  coordinates: [78.91, 23.38],
  status: 'Completed',
  client: 'LCC Projects Pvt. Ltd., Ahmedabad',
  specification: 'Radial Gate - 12.85 x 10.30 MTR',
  quantity: '12.85 x 10.30 MTR radial-gate package',
  overview: 'Excel Engineering completed the design, drawing, supply, fabrication, erection, testing and commissioning of the radial gate, stoplog gate, rope drum electrical hoist, gantry crane, dam sluice and environmental power-channel gate package for Madiya Dam.',
  scope: [
    'Radial gate and stoplog gate fabrication and installation',
    'Rope drum electrical and hydraulic-cylinder hoist systems',
    'Gantry crane, dam sluice and environmental power-channel gates',
    'Testing, commissioning and all allied site components',
  ],
  mapDescription: 'Completed radial-gate and hydro-mechanical package for Madiya Dam.',
}

export default function MadiyaDamProjectPage() {
  return <AdditionalProjectPage project={madiyaDamProject} />
}
