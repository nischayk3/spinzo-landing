export const dynamic = "force-static";

import { SERVICE_LOCATIONS, CORE_SERVICE_AREAS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import blogPosts from "@/lib/blog-posts";

export default function sitemap() {
  const baseUrl = 'https://spinzonow.com';
  // Use stable lastModified timestamps so Googlebot trusts the sitemap
  const siteUpdateDate = new Date('2026-10-18T00:00:00.000Z');

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

  const intersectionUrls = [];
  for (const loc of CORE_SERVICE_AREAS) {
    for (const s of SERVICES) {
      intersectionUrls.push({
        url: `${baseUrl}/locations/${loc}/${s.slug}`,
        lastModified: siteUpdateDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  const competitorUrls = ['tumbledry', 'uclean', 'washho', 'laundrymate', 'local-dhobi'].map((comp) => ({
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
    ...competitorUrls,
    ...blogUrls,
  ];
}
