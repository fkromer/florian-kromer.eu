import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://florian-kromer-eu.statichost.eu/",
  title: "Florian Kromer",
  slogan: "Systems thinking based problem solving.",
  description: "Embedded Linux SW Architect, spare time website developer.",
  social: {
    github: "https://github.com/fkromer",
    linkedin: "https://www.linkedin.com/in/floriankromer/",
    email: "kromer-florian@protonmail.com",
    rss: true,
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "",
  search: true,
};
