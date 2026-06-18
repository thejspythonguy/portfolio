import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Configured default domain for the portfolio site
  const baseUrl = "https://thejspythonguy.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
