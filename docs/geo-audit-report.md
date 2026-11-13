# GEO / AI Search Audit — spinzonow.com
**Date:** 2026-11-13 | **Tool:** claude-seo v2.6.0

---

## GEO Readiness Score: 78/100

Breakdown:
- **Citability (25%):** 22/25 — Homepage first 60 words immediately extractable. Pricing page leads with ₹ values in H2. About page has clean founding story.
- **Structural Readability (20%):** 18/20 — Clear hierarchy, question-based sections, short paragraphs.
- **Multi-Modal (15%):** 5/15 — No images with alt text relevant to AI extraction. No video, no infographics.
- **Authority & Brand (20%):** 16/20 — AggregateRating + Review schema present. 2000+ reviews marked up. No Wikipedia, no Reddit, no YouTube brand presence.
- **Technical Accessibility (20%):** 17/20 — SSR, no JS gap on any page tested. First 2MB cap not hit. AI crawlers correctly allowed.

---

## AI Crawler Access Status

| Crawler | Access | Capability | Status |
|---------|--------|------------|--------|
| `OAI-SearchBot` | Allowed | ChatGPT Search citability | ✅ |
| `Claude-SearchBot` | Allowed | Claude.ai search citability | ✅ |
| `PerplexityBot` | Allowed | Perplexity search index | ✅ |
| `Googlebot` | Allowed | Google Search + AI Overviews | ✅ |
| `GPTBot` | Blocked | OpenAI training | ✅ (intentional) |
| `Google-Extended` | Blocked | Gemini/Vertex training & grounding | ✅ (intentional) |
| `ClaudeBot` | Blocked | Anthropic training | ✅ (intentional) |
| `CCBot` | Blocked | Common Crawl training | ✅ (intentional) |
| `Applebot-Extended` | Blocked | Apple Intelligence training opt-out | ✅ (intentional) |
| `Bytespider` | Blocked | ByteDance training | ✅ (intentional) |

**Verdict:** Correct. The training crawlers are blocked while search/citation crawlers are allowed. No change needed.

**Note:** `Google-Agent`, `ChatGPT-User`, `Perplexity-User` are user-triggered and ignore robots.txt. These are fine.

---

## Brand Mention Analysis

| Platform | Spinzo Presence | Competitors' Presence |
|----------|----------------|----------------------|
| **Reddit** | ❌ None. Zero mentions of spinzonow or Spinzo laundry. An unrelated Anaheim Ducks ticketing platform called Spinzo appears instead. | LaundroKart has reviews on r/bangalore. Tumbledry franchise complaint thread exists. |
| **Wikipedia** | ❌ No page. No Wikidata entry for Spinzo. | Tumbledry has no WP page either. None of the Bangalore laundry startups do. |
| **YouTube** | ❌ No detected brand channel. | LaundryMate has an Instagram influencer campaign (#LaundryMate). |
| **LinkedIn** | ✅ Likely exists. | LaundryMate 2,166 followers. |
| **Google Play / App Store** | ✅ Both apps exist. | LaundroKart App Store presence, 2,00,000+ customers claimed. |

**GEO Impact:** Brand mentions correlate 3x more strongly with AI citation than backlinks do (Ahrefs 2025-12-12). Specifically, YouTube mentions (r=0.737) and Reddit mentions are the strongest predictors. Spinzo is currently invisible on both.

---

## Passage-Level Citability

### Homepage (tested)
**First 60 words read by AI:**
> "Laundry Pickup in 30 Mins. Fresh Clothes in 6 Hours. Get fresh, clean clothes without leaving home. Spinzo is Bangalore's fastest premium laundry & shoe care service. Schedule your pickup instantly and get them delivered right back to your doorstep."

**Assessment:** Excellent. Specific claim (30 min pickup, 6 hr delivery), clear value proposition, actionable. 10/10 for AI extraction. However — the H1 tag is **missing** from the DOM (H1s: []). The hero heading is in an <h2> or just styled text. This is a small but meaningful gap: Google's AI systems use H1 as a primary topic signal.

### Pricing Page (tested)
**First 60 words read by AI:**
> "Simple, Honest Laundry & Dry Cleaning Pricing. Pay by the kilo or by the piece. Digital scale weighing at your doorstep, free pickup in 30 minutes, and delivery back in hours across South Bangalore."

**Assessment:** Excellent. ₹ values immediately parseable. "No Hidden Charges. Just Fresh Clothes." — clear anti-competitor positioning. 10/10.

### About Page (tested)
**First 60 words read by AI:**
> "Laundry, Reimagined for Bangalore. Who We Are. Spinzo was founded in 2024 with a simple thesis: Bangalore professionals should not have to spend their weekends doing laundry."

**Assessment:** Good. Clean founding story, specific founder names in meta description. But the founding year (2024) makes Spinzo look young vs LaundroKart (2016), Tumbledry (2019). This is a tradeoff — honesty vs authority. The entity disambiguation ("Not related to Spinzone franchise") is present in the meta description but not in the visible H1/H2.

---

## JS Rendering Check

All 3 pages tested have **no JS gap** (significant: false). Content is present in raw HTML. Server-side rendered (SSG via Next.js). Googlebot fetches raw HTML, renders JS, gets the same result. ✅

---

## Top 5 Highest-Impact GEO Fixes

### 1. Add proper `<h1>` tag to homepage (Critical)
The homepage has rendered H1s: []. The headline "Laundry Pickup in 30 Mins. Fresh Clothes in 6 Hours." should be in `<h1>`. This is the single most visible signal for AI citation topic extraction.

**Before:** Heading inside a `<h2>` or styled `<div>`
**After:** `<h1>Laundry Pickup in 30 Mins. Fresh Clothes in 6 Hours.</h1>`

### 2. Get Spinzo onto Reddit / build Reddit presence (High Impact)
Reddit mentions are the #2 correlation with AI citations (after YouTube). LaundroKart, Tumbledry all have Reddit discussion. Spinzo has ZERO.

**Actions:**
- Create r/Bangalore posts: "Spinzo vs LaundroKart — honest comparison after 6 months" (user-generated, not marketing)
- Respond to every "best laundry app Bangalore" Reddit thread with a genuine recommendation
- Consider a Reddit ad targeting r/bangalore
- Goal: 5-10 organic Reddit mentions within 3 months

### 3. Create a YouTube channel + citation strategy (High Impact)
YouTube mentions have the strongest AI citation correlation (r=0.737, Ahrefs).

**Actions:**
- Channel: "Spinzo Bangalore" — unboxing-style: before/after of heavily stained clothes, "Here's how we dry clean a silk saree," behind-the-scenes at the facility
- Upload 1-2 short videos per week targeting "laundry in Bangalore" queries
- Add to Google Business Profile as videos
- Embed on service pages

### 4. Add core page content for AI citability (Medium Impact)
The about page could answer "Who founded Spinzo?" explicitly in a visible H2/H3 section, not just in the meta description:
```
<h2>Who Founded Spinzo?</h2>
<p>Spinzo was founded in 2024 by Nischay Kumar and Kishan Gupta in Bangalore, Karnataka. Not related to Spinzone Laundry or any Spinzone franchise.</p>
```

This directly answers questions AI search engines extract for entity resolution.

### 5. Add infographics / visual content with structured captions (Medium Impact)
No multi-modal content exists. CREATE:

- Comparison infographic: "Spinzo vs Tumbledry vs LaundroKart — at a glance"
- Price vs service matrix (HTML table with image)
- Service area map highlighting the 20 neighborhoods
- Each image must have: descriptive `<img alt="">` that matches text content

---

## llms.txt Status ✅
Present at `public/llms.txt`. Well-structured with core services, pricing, service areas, and contact info.

---

## Summary: GEO Actions by Effort

| Priority | Action | Effort | AI Citation Impact |
|----------|--------|--------|-------------------|
| P0 | Add `<h1>` to homepage | 5 min | High |
| P0 | Create Reddit presence | 2-3 hrs | Highest |
| P0 | Create YouTube channel | 5 hrs over 30 days | Highest |
| P1 | Visible "Who founded Spinzo?" section | 10 min | Medium |
| P1 | Add infographics + captioned images | 3 hrs | Medium |
| P2 | Monitor AI Overviews for "best laundry Bangalore" | Passive | Tracking |
| P2 | Consider Wikipedia/Wikidata entry | 3-5 hrs | Medium-term |