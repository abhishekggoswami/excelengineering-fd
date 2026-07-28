import { notFound } from 'next/navigation'
import AdditionalProjectPage from '@/components/additional-project-page'
import { additionalProjectBySlug } from '@/lib/additional-projects'
import OngoingProjectPage from '@/components/ongoing-project-page'
import { ongoingProjectBySlug } from '@/lib/ongoing-projects'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ongoingProject = ongoingProjectBySlug[slug]

  if (ongoingProject) return <OngoingProjectPage project={ongoingProject} />

  const project = additionalProjectBySlug[slug]

  if (!project) notFound()

  return <AdditionalProjectPage project={project} />
}
