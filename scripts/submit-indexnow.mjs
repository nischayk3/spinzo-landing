import fs from 'fs';
import path from 'path';

const INDEXNOW_KEY = '4b6f72a1e389476b91c784e1b85f269a';
const HOST = 'spinzonow.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// Read sitemap.xml to get all current URLs
const sitemapPath = path.join(process.cwd(), 'out', 'sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
  console.error('out/sitemap.xml not found. Please run "npm run build" first.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const urlMatches = sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g);
const urlList = Array.from(urlMatches, m => m[1]);

console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

const payload = {
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList,
};

async function submitIndexNow() {
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`[${endpoint}] Response status: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`✓ Successfully submitted URLs to ${endpoint}`);
      } else {
        const text = await response.text();
        console.warn(`Response: ${text}`);
      }
    } catch (err) {
      console.error(`Failed to submit to ${endpoint}:`, err.message);
    }
  }
}

submitIndexNow();
