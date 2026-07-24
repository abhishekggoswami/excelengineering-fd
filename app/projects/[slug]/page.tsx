import { notFound } from 'next/navigation'
import AdditionalProjectPage from '@/components/additional-project-page'
import { additionalProjectBySlug } from '@/lib/additional-projects'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = additionalProjectBySlug[slug]

  if (!project) notFound()

  return <AdditionalProjectPage project={project} />
}
