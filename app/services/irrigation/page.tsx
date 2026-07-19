import ServicePageLayout from '@/components/service-page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Irrigation Projects | Excel Engineering',
  description:
    'Excel Engineering delivers canal construction, canal lining, lift irrigation, pump house construction, drainage systems, and agricultural water infrastructure across India.',
}

export default function IrrigationPage() {
  return (
    <ServicePageLayout
      data={{
        title: 'Irrigation Projects',
        tagline:
          'Transforming agricultural landscapes through precision canal construction, lift irrigation, and large-scale water distribution infrastructure.',
        description:
          'Excel Engineering has built an extensive track record in irrigation and water management infrastructure, executing government and private contracts across multiple states. Our capabilities span the full irrigation project lifecycle — from main canal construction and lining works through to distribution networks, pump houses, lift irrigation systems, and drainage infrastructure. We bring engineering precision and project management expertise to every water infrastructure challenge.',
        heroImage: '/images/service-irrigation.png',
        detailImage: '/images/irrigation-detail-1.png',
        capabilities: [
          'Canal Construction',
          'Canal Lining Works',
          'Irrigation Network Development',
          'Water Distribution Systems',
          'Pump House Construction',
          'Reservoir Development',
          'Lift Irrigation Projects',
          'Water Management Systems',
          'Drainage Systems',
          'Flood Control Structures',
          'Water Conservation Projects',
          'Agricultural Water Infrastructure',
        ],
        stats: [
          { value: '850+', label: 'km Canal Constructed' },
          { value: '500+', label: 'Villages Benefited' },
          { value: '2M+', label: 'Acres Agricultural Land Served' },
          { value: '40+', label: 'Irrigation Projects' },
        ],
        methodology: [
          {
            step: 'Phase 01',
            title: 'Hydrological Assessment',
            desc: 'Detailed catchment analysis, water flow calculations, soil investigation, and alignment studies to optimise canal and distribution network routes.',
          },
          {
            step: 'Phase 02',
            title: 'Earthwork & Excavation',
            desc: 'Large-scale mechanised earthwork, canal bed formation, embankment construction, and precise gradient control for optimal water flow.',
          },
          {
            step: 'Phase 03',
            title: 'Lining & Structures',
            desc: 'Concrete and masonry canal lining, sluice gate installation, aqueducts, drops, cross-drainage works, and distribution head structures.',
          },
          {
            step: 'Phase 04',
            title: 'Commissioning & Handover',
            desc: 'System testing, water trials, final inspections, as-built documentation, and operator training before full project handover.',
          },
        ],
        faqs: [
          {
            q: 'Does Excel Engineering execute government irrigation contracts?',
            a: 'Yes. A significant part of our irrigation portfolio consists of state irrigation department and water resources department contracts. We are registered with major government procurement bodies across India.',
          },
          {
            q: 'What canal lining methods does Excel Engineering use?',
            a: 'We execute both conventional concrete lining and precast concrete lining as per project specifications. We also undertake HDPE and brick-in-cement-mortar lining based on design requirements.',
          },
          {
            q: 'Can you handle lift irrigation projects in hilly or remote terrain?',
            a: 'Yes. Our teams are experienced in lift irrigation projects across varied terrain including hilly and remote areas. We coordinate all civil, mechanical, and electrical components for complete system delivery.',
          },
          {
            q: 'How does Excel Engineering address environmental impact in irrigation projects?',
            a: 'We prepare and implement Environmental Management Plans (EMP) for all major irrigation projects, ensuring compliance with regulatory requirements and minimising ecological disruption.',
          },
        ],
      }}
    />
  )
}
