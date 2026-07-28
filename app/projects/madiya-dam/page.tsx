import OngoingProjectPage from '@/components/ongoing-project-page'
import { ongoingProjectBySlug } from '@/lib/ongoing-projects'

export default function MadiyaDamProjectPage() {
  return <OngoingProjectPage project={ongoingProjectBySlug['madiya-dam']} />
}
