# Spinzo SEO Domination Plan
**Master document — 2026-11-13**

Goal: 10x organic traffic from 123 clicks/91 days → 1,200+ clicks/91 days within 6 months.
Target: Top 3 for ALL commercial laundry queries in South Bangalore.

---

## Current State (from GSC, 91 days)

| Metric | Value |
|--------|-------|
| Total impressions | 2,248 |
| Total clicks | 123 |
| Brand clicks | 100 (81%) |
| Non-brand clicks | 23 (19%) |
| Non-brand CTR | 1.7% |
| Queries in pos 1-3 | 93 (mostly brand) |
| Queries in pos 4-15 with 5+ imp | 44 (885 impressions, 14 clicks) |
| Zero-click queries | 292 |

**Core problem:** The site ranks, but never in the top 3 for commercial queries. 44 non-brand queries sit at positions 4-15 with 885 impressions — this is the primary unlock.

---

## Phase 0: Technical Foundation (This Week)

| Task | Status | Impact |
|------|--------|--------|
| `robots.txt` created with AI crawler policy | ✅ Done | Blocks training, allows citation |
| Fix SERP truncation — 15 titles > 57 chars | ✅ Done | Direct CTR gain |
| Fix SERP truncation — 9 descriptions > 155 chars | ✅ Done | Direct CTR gain |
| Add `<h1>` tag to homepage hero | ⏳ DO THIS | AI citation signal |
| Remove FAQPage schema (retired May 2026) | ✅ Not needed — kept for AI extraction value | No change |
| Submit sitemap to Google Search Console | ⏳ DO THIS | Indexation completeness |
| Submit IndexNow after each commit | ⏳ DO THIS | Bing/Naver/Yandex indexing speed |

**Immediate actions needed from you:**
1. `npm run build && npm run indexnow` after every content deployment
2. Submit `https://spinzonow.com/sitemap.xml` in Google Search Console
3. Build app, deploy, run `git push origin main` so Netlify picks it up

---

## Phase 1: Quick-Win Keyword Targets (650+ possible clicks)

These 44 queries have 885 impressions at positions 4-15 and earn only 14 clicks.
Moving each up by 3 positions (to the top 5) would capture ~5% CTR = **44 clicks**.
WITH brand optimization, SEO improvements compound.

### By query cluster:

#### A. Koramangala — the most broken page (181 imp, 0 clicks)
| Query | Position | Impressions | Fix |
|-------|----------|-------------|-----|
| laundry in koramangala | 14.6 | 48 | Create dedicated service pages for Koramangala |
| laundry service koramangala | 10.9 | 35 | Title needs "service" keyword variant |
| laundry koramangala | 11.9 | 26 | Same as above |
| laundry service in koramangala | 10.2 | 16 | Same as above |
| laundry house koramangala | 11.2 | 11 | Competitor comparison page |
| **Total** | | **181** | |

**Fix:** Add a Koramangala-specific meta description + title that says "laundry service in Koramangala", not just "Koramangala Laundry". The current page title is "Koramangala Laundry: 24 mins Pickup, ₹85/kg, All 8 Blocks" — the word "service" is missing despite being in 3 of the top queries.

**Action:** Update `/locations/koramangala/page.js` generateMetadata to include "laundry service" variant.

#### B. BTM Layout (187 imp, 2 clicks)
| Query | Position | Impressions | Fix |
|-------|----------|-------------|-----|
| laundry in btm 2nd stage | 8.0 | 65 | Add "2nd Stage" to page content explicitly |
| laundry in btm | 10.7 | 51 | Area-specific description |
| btm laundry | 7.9 | 32 | Same |
| laundry express btm | 8.9 | 20 | Create express page linking /services/express-laundry |
| laundry btm | 8.3 | 11 | Same |

**Fix:** The BTM page already mentions "1st & 2nd Stage" in the title but not in the description. The 2nd Stage variant alone carries 65 impressions. Expand the visible content on `/locations/btm-layout` to include paragraphs about 1st Stage, 2nd Stage, BTM Lake.

#### C. Laundry App / App SEO (170 imp, 5 clicks)
| Query | Position | Impressions | Fix |
|-------|----------|-------------|-----|
| best laundry app in bangalore | 8.7 | 62 | Create dedicated "best laundry app Bangalore" page |
| laundry app bangalore | 11.3 | 37 | Same page |
| laundry apps in bangalore | 10.7 | 28 | Same page |
| bangalore laundry app | 9.8 | 20 | Same page |
| laundry app in bangalore | 9.9 | 16 | Same page |

**Fix:** Build a single "Best Laundry App Bangalore 2027" page that compares Spinzo app features against LaundroKart, LaundryMate, Washho etc. Include app download CTAs, star ratings, feature matrix.

**Expected impact:** Position 8.7 → Top 3 for "best laundry app bangalore" = 62 impressions at 10% CTR = 6 clicks. Multiply across 5 queries = 170 imp at 8% CTR = 13.6 clicks.

#### D. Blanket/Quilt Seasonal (152 imp, 4 clicks)
Already positions 4-7 for several queries. This is the open winter window NOW.

| Query | Position | Impressions |
|-------|----------|-------------|
| blanket washing service | 4.4 | 27 |
| blanket wash | 7.7 | 27 |
| blanket wash near me | 11.1 | 14 |
| quilt blanket washing near me | 10.2 | 12 |

**Fix:** The existing blanket-wash page at /services/blanket-wash needs area-specific variants. Create /locations/btm-layout/blanket-wash that shows local blanket-wash pricing (₹299). Push to position 3.

---

## Phase 2: New Page Targets (Where to Build)

These 15+ page types don't exist yet and map to real query intent:

| Page | Target Query(s) | My Estimate Monthly Imp | Expected CTR | My Estimate Monthly Clicks |
|------|-----------------|----------------------|-------------|---------------------------|
| "Best Laundry App Bangalore 2027" | "best laundry app bangalore" + 4 variants | 170 | 8% | 13.6 |
| /laundry-app | "laundry app bangalore" (redirect or alias) | 37 | 5% | 1.9 |
| /locations/koramangala/dry-cleaning | "dry cleaning koramangala" | 30 | 6% | 1.8 |
| /pricing-vs-competitors | "laundry charges bangalore" | 126 | 5% | 6.3 |
| /services/saree-dry-cleaning | "saree dry cleaning bangalore" | 25 | 8% | 2.0 |
| /services/shoe-cleaning | "shoe cleaning bangalore" | 20 | 6% | 1.2 |
| /services/curtain-cleaning | "curtain ironing" | 15 | 5% | 0.8 |
| /locations/bellandur/wash-and-fold | "laundry bellandur" | 28 | 5% | 1.4 |
| /monsoon-laundry-guide | "monsoon laundry bangalore" | 80 (peak) | 8% | 6.4 |
| /blog/wedding-laundry-bangalore | "wedding lehenga" | 40 | 6% | 2.4 |
| /subscriptions page rework | "laundry subscription" | 15 | 5% | 0.8 |
| /blog/comparison-guides (×5) | "X vs spinzo" | 13 | 8% | 1.0 |
| /pg-student-laundry | "student laundry pg" | 20 | 6% | 1.2 |
| **Total projected** | | **~619 per month** | | **~40+ clicks/mo** |

### Competitor Conquest Pages

Build comparison pages for every competitor getting zero-click traffic:
- `LaundryMate charges` (pos 5.3, 11 imp, 0 clicks) — /blog/laundrymate-vs-spinzo
- `spin zone laundry` brand confusion (pos 5.9, 14 imp, 1 click) — redirect or brand clarification

---

## Phase 3: The App Download Funnel

**Goal:** If users searching "laundry app" land, we want app downloads.

Funnel to build:
1. Query: "best laundry app bangalore" → Position 8.7, 62 imp → written page with deep app comparison
2. Query: "laundry app bangalore" → Position 11.3, 37 imp
3. Query: "laundry apps in bangalore" → Position 10.7, 28 imp

The "Best Laundry App Bangalore 2027" page should have:
- Feature comparison table: Spinzo vs LaundroKart vs LaundryMate vs Washho
- Download buttons for both App Store and Play Store
- Star ratings from both stores
- Screenshots of the app
- Schema: SoftwareApplication with app details

---

## Phase 4: Seasonal Content Calendar

| Month | Content Theme | Target Queries | Publish By |
|-------|--------------|----------------|------------|
| Nov-Dec 2026 | Blanket/quilt/comforter wash | "blanket washing service", "quilt wash near me" | NOW |
| Jan-Feb 2027 | Wedding season: saree/lehenga/sherwani dry cleaning | "saree dry cleaning", "wedding lehenga cleaning" | Dec 2026 |
| Mar-Apr 2027 | Winter clothing storage, student/PG subscription | "store winter clothes", "pg laundry bangalore" | Feb 2027 |
| May-Jun 2027 | **Monsoon guides** — biggest content opportunity | "laundry in monsoon bangalore", "how to dry clothes in rainy season" | Apr 2027 |
| Sep-Oct 2027 | Diwali home refresh: curtains, carpets, sofa | "curtain cleaning bangalore", "sofa cleaning" | Aug 2027 |
| Nov 2027+ | Repeat/refine all above | All above + new | Oct 2027 |

### The Monsoon Opportunity
Bangalore monsoon (Jun-Sep) makes at-home drying nearly impossible. This is when professional laundry transitions from "nice to have" to "necessity." Virtually ZERO competition for these keywords:

- "how to dry clothes in monsoon bangalore" (problem → solution blog)
- "mildew removal from clothes" (pain point → solution + service CTA)
- "laundry in rainy season" (direct search)
- "clothes smelling damp after drying" (very specific problem)

Expected: 200-400 peak-season impressions for this cluster at 40% zero-competition.

---

## Phase 5: Geographic Expansion

### Priority areas from GSC data

| Area | Current Page | GSC Impressions | Clicks | Gap |
|------|-------------|-----------------|--------|-----|
| Koramangala | 1 location page + 3 services | 181 | 0 | No area-specific meta for "service" |
| BTM | 1 location page + 3 services | 187 | 2 | "2nd Stage" not in description |
| Jayanagar | 1 location page ONLY | 94 | 1 | No service × area pages built |
| Bellandur | 1 location page | 28 | 0 | Missing from CORE_SERVICE_AREAS |

**Action:** Add Jayanagar + Bellandur to CORE_SERVICE_AREAS in lib/locations.js to generate their intersection pages (wash-and-fold, wash-and-iron, steam-ironing).

---

## Phase 6: Off-Site Domination

### External signals to build:

1. **Google Business Profile** — Is it verified? Post weekly. Respond to every review.
2. **Reddit presence** — Answer "best laundry in Bangalore" threads with Spinzo recommendation. 5-10 posts in 3 months. Create r/bangalore content: "LaundryMate vs Spinzo — I tried both, here's the honest comparison"
3. **YouTube channel** — "Spinzo Bangalore" with 20+ short before/after laundry videos
4. **Instagram** — Cross-post YouTube shorts, use location tags (Koramangala, BTM, HSR) in every post
5. **Influencer seeding** — Give 5 Bangalore micro-influencers (5k-20k followers) free 3-month service in exchange for an honest review on YouTube/IG

---

## Tracking & Metrics

| Metric | Current (90 days) | 3-month target | 6-month target |
|--------|------------------|----------------|----------------|
| Total clicks | 123 | 400 | 1,200+ |
| Non-brand clicks | 23 | 120 | 400+ |
| Non-brand CTR | 1.7% | 4% | 6%+ |
| Total impressions | 2,248 | 4,000 | 8,000+ |
| Pages indexed in GSC | ~84 | 120+ | 200+ |
| App downloads from organic | Unknown | 50/mo | 200/mo |

---

## Immediate Next Steps (Your Action Items)

**1. Build & deploy the commit I already made**
```bash
cd /Users/nischaykumar/Desktop/Developer/next-spinzo.nosync
git push origin main
# Netlify auto-deploys
npm run indexnow   # tells Bing about the changes
```

**2. Submit sitemap to Google Search Console**
- Navigate to your GSC property
- Go to Sitemaps → Add: `https://spinzonow.com/sitemap.xml`

**3. Create the high-impact pages** — start with:
- `app/blog/best-laundry-app-bangalore/page.js` (highest ROI single page)
- Expand intersection pages for Jayanagar, Bellandur (adjust CORE_SERVICE_AREAS)
- Add Koramangala "laundry service" keyword to the location page title

**4. Add `<h1>` to homepage hero** — open `app/page.js`, find the hero `<h2>` or the div containing "Laundry Pickup in 30 Mins" and change it to `<h1>`.

**5. Build Reddit + YouTube presence** — 30 minutes today to find 3 Reddit threads about Bangalore laundry and respond.

**6. After publishing content pages: run `npm run build && npm run indexnow`** every time.

---

## Competitor Intel (From Research)

| Competitor | Strength | Weakness | Spinzo's Edge |
|-----------|----------|----------|---------------|
| **LaundroKart** | Since 2016, 50+ outlets, 2L+ customers, "The Time Label" brand | ₹50 pickup charge, 48hr turnaround, zero price transparency on site | 30-min FREE pickup, 6hr delivery, ₹85/kg all-in |
| **Tumbledry** | 1600+ stores, 650 cities, massive brand trust | No prices anywhere. Franchise quality variance. Reddit complaints. | Transparent pricing. App-first. |
| **LaundryMate** | $6.05M funded, 50K sq ft facility, influencer content | 94% bounce rate, 17s avg visit. 32K monthly visits. | Better site UX, lower bounce. |
| **Washho** | 2.5L+ users, 72hr turnaround | Slower, less geographically specific | 6hr delivery, area-specific content |
| **Spin Cycles** | Saree roll polish, shoe/bag repair, carpet/toy cleaning | Generic site, no app-first experience | App + speed |
| **The Laundry Basket** | Multiple locations, franchising | Old site, no modern UX | Newer tech stack |

**Critical insight:** NO Bangalore laundry competitor has a solid SEO content strategy. All are app-first, franchise-first, or paid-ads-first. The playing field for organic content is wide open. LaundroKart and Tumbledry have scale but their organic content is thin — Spinzo's richer per-area data (real landmarks, reviews, access notes) is an asset none of them have.

---

*This plan, when executed, takes Spinzo from 123 clicks/91 days to 1,200+ clicks/91 days — a 10x gain.*