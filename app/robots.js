export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      }
    ],
    sitemap: 'https://spinzonow.com/sitemap.xml',
  }
}
