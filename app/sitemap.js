export const dynamic = "force-static";

import { SERVICE_LOCATIONS, CORE_SERVICE_AREAS, INTERSECTION_SERVICES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { COMPETITOR_SLUGS } from "@/lib/competitors";
import blogPosts from "@/lib/blog-posts";

export default function sitemap() {
  const baseUrl = 'https://spinzonow.com';
  const siteUpdateDate = new Date('2026-10-23T00:00:00.000Z');

  const locationUrls = SERVICE_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: siteUpdateDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const serviceUrls = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: siteUpdateDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || '2026-10-10'),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Only build intersection pages for CORE_SERVICE_AREAS × INTERSECTION_SERVICES
  const intersectionUrls = [];
  for (const loc of CORE_SERVICE_AREAS) {
    for (const s of INTERSECTION_SERVICES) {
      intersectionUrls.push({
        url: `${baseUrl}/locations/${loc}/${s}`,
        lastModified: siteUpdateDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  const alternativeSlugs = ['bumbledry', 'tumbledry', 'laundrokart'];
  const alternativeUrls = alternativeSlugs.map((comp) => ({
    url: `${baseUrl}/alternatives/${comp}`,
    lastModified: siteUpdateDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const competitorUrls = COMPETITOR_SLUGS.map((comp) => ({
    url: `${baseUrl}/compare/spinzo-vs-${comp}`,
    lastModified: siteUpdateDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: siteUpdateDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: siteUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: siteUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/subscriptions`,
      lastModified: siteUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/b2b`,
      lastModified: siteUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...serviceUrls,
    ...locationUrls,
    ...intersectionUrls,
    ...alternativeUrls,
    ...competitorUrls,
    ...blogUrls,
  ];
}