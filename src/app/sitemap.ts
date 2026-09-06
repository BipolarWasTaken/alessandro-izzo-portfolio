import type { MetadataRoute } from "next";
import { content } from "@/lib/content";

const SITE_URL = "https://alessandro-izzo-portfolio.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = content.it.projects.items.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
