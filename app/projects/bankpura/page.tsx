import AdditionalProjectPage from '@/components/additional-project-page'
import type { AdditionalProject } from '@/lib/additional-projects'

const bankpuraProject: AdditionalProject = {
  slug: 'bankpura',
  title: 'Bankpura Spillway Project',
  location: 'Bankpura Project, District Rajgarh, Madhya Pradesh',
  state: 'Madhya Pradesh',
  coordinates: [76.72, 23.86],
  status: 'Completed',
  client: 'W.R.D. C.M.U. Bhopal',
  specification: 'Vertical Spillway Gate — 15.00 × 4.00 MTR',
  quantity: '15.00 × 4.00 MTR vertical-spillway gate package',
  overview: 'Excel Engineering completed the fabrication, erection, testing and commissioning of vertical spillway gates and all allied components for the Bankpura Project under Water Resources Department supervision.',
  scope: [
    'Vertical spillway gate — 15.00 × 4.00 MTR dimensions',
    'Fabrication of the gate structure and allied components',
    'Erection at the Bankpura project site',
    'Testing and commissioning of all gate systems',
    'Execution under W.R.D. C.M.U. Bhopal supervision',
    'Compliance with Water Resources Department specifications',
  ],
  mapDescription: 'Completed vertical-spillway gate package for the Bankpura Project.',
}

export default function BankpuraProjectPage() {
  return <AdditionalProjectPage project={bankpuraProject} />
}
