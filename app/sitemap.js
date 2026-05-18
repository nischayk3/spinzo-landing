export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = 'https://spinzonow.com';
  
  const locations = [
    'btm-layout', 'hsr-layout', 'koramangala', 'jp-nagar', 
    'jayanagar', 'indiranagar', 'whitefield', 'marathahalli', 
    'electronic-city', 'bellandur'
  ];

  const locationUrls = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...locationUrls
  ];
}
