import OngoingProjectPage from '@/components/ongoing-project-page'
import { ongoingProjectBySlug } from '@/lib/ongoing-projects'

export default function HiranIrrigationProjectPage() {
  return <OngoingProjectPage project={ongoingProjectBySlug['hiran-irrigation']} />
}
