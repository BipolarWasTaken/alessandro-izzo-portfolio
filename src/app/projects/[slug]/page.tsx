import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { content } from "@/lib/content";

export function generateStaticParams() {
  return content.it.projects.items.map((project) => ({ slug: project.id }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = content.it.projects.items.find((p) => p.id === slug);
  if (!project) return {};

  const title = `${project.name} — Alessandro Izzo`;
  return {
    title,
    description: project.tagline,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title,
      description: project.tagline,
      url: `/projects/${slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const exists = content.it.projects.items.some((p) => p.id === slug);
  if (!exists) notFound();

  return <ProjectDetail projectId={slug} />;
}
