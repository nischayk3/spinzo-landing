export const dynamic = "force-static";

import { SERVICE_LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import blogPosts from "@/lib/blog-posts";

export default function sitemap() {
  const baseUrl = 'https://spinzonow.com';

  const locationUrls = SERVICE_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const serviceUrls = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const intersectionUrls = [];
  const coreAreas = ['koramangala', 'hsr-layout', 'btm-layout', 'jayanagar', 'jp-nagar', 'bellandur'];
  for (const loc of coreAreas) {
    for (const s of SERVICES) {
      intersectionUrls.push({
        url: `${baseUrl}/locations/${loc}/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  const competitorUrls = ['tumbledry', 'uclean', 'washho'].map((comp) => ({
    url: `${baseUrl}/compare/spinzo-vs-${comp}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/subscriptions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/b2b`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...locationUrls,
    ...serviceUrls,
    ...intersectionUrls,
    ...competitorUrls,
  ];
}
