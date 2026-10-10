# Spinzo — Local Dominance Playbook (GMB + SEO + AI Search)

**Date:** 2026-10-10
**Scope:** spinzonow.com · spinzo.in · Android/iOS app · Google Business Profile (GBP) · AI assistants
**Built from:** the Khirri playbook (GMB dominance + AI visibility audit), an audit of this codebase and the live site, **real Google Ads search-term and geo data (last 30 days, account 8867332980)**, and 2026 web research.
**Supersedes the risky parts of:** `docs/spinzo-seo-gmb-strategy.md` (see §9).

---

## 0. TL;DR: Five things decide whether you win

1. **"Near me" is ~80% of your demand, and the map pack only sees a limited radius around your pin.** One GBP pin cannot rank in BTM, HSR, Jayanagar, Koramangala, Tavarekere and JP Nagar all at once. You need **2–4 real, verifiable pickup/drop points** (a "pin network"), not more location pages. (§2)
2. **You're paying for demand your website can't capture.** "Dry cleaning near me" and "iron shop near me" each got about 1,500 impressions in 30 days, but you have **no dry-cleaning page and no "ironing / istri" page.** About ₹3.1k went on dry-cleaning clicks for roughly 4 conversions. (§1, §5)
3. **Reviews are your ranking engine and your AI training data.** Fix the review flow (deep link at the "delivered" moment, keyword-rich, **no incentives**). Target **300+ reviews in 90 days**. (§3.6)
4. **Your site tells crawlers and LLMs untrue or empty things.** The counters render `0+ orders` and `0.0★`, the schema rating says 250 on live and 532 in the repo, the FAQ says "14 areas" where the site lists 19, the photos are stock and the testimonials are generic. Fix these before scaling. (§4)
5. **Brand entity confusion.** Google's AI answer for "Spinzo laundry Bangalore" cites **spynzo.com**, a different laundry aggregator, and says you serve Whitefield, Indiranagar and Marathahalli, which you removed. `spinzo.in` has the title "SpinZo" and no description. Lock the entity down (Wikidata, Bing, Apple, consistent `sameAs`). (§6)

---

## 1. What your real search data says (Google Ads, last 30 days)

**Totals:** ₹45,018 spent · 2,315 clicks · 207 conversions · **CPA ≈ ₹217**

### 1.1 Demand clusters (impressions in 30 days, approximate)

| Cluster | Impr. | Conv. | Example queries | Do you have a page for it? |
|---|---|---|---|---|
| **Laundry near me** (and variants) | ~5,000 | ~55 | laundry near me, laundry service near me, laundry shop near me, nearby laundry | Home only |
| **Dry cleaning** | ~1,700 | ~4 | dry cleaning near me, dry cleaners near me, dry clean, dry wash near me | ❌ **No page** |
| **Ironing / press** | ~1,450 | ~10 | iron shop near me, ironing near me, iron near me, clothes ironing, steam iron | ⚠️ `/services/steam-ironing` only. It doesn't use the words people type ("iron shop", "istri", "press") |
| **Wash & iron** | ~40 | **8 (≈36% CVR!)** | wash and iron near me | ✅ but under-promoted |
| **Competitor brands** | ~1,100 | ~0 | tumble dry/tumbledry, james bond dry cleaners, iztri, spin cycles, band box, fabrico, white tiger, laundrymate, mera laundry, wash n wear, laundry zone HSR, laundry express BTM, fabric spa | ❌ No comparison/alternative pages (one blog only) |
| **Area queries** | ~250 | ~2 | laundry hsr layout, laundry in btm 2nd stage, laundry in koramangala, dry cleaners hsr layout | ✅ location pages |
| **Long-tail niches** | ~100 | 0 | saree dry cleaning near me, darning near me, shoe laundry near me, laundry by kg, doorstep laundry, dhobi near me | ❌ |
| **Your brand (misspelt)** | 14 | 4 | **"spinzone laundry"** | Add `alternateName` |

**What this means**
- People **don't search "premium laundry"**. They search **"laundry near me", "dry cleaning near me" and "iron shop near me"**. Your positioning can stay premium, but your **pages, GBP services and category signals must use their words**.
- **Ironing is your trojan horse.** In Bangalore, the street *istriwala* is a daily habit. "Iron shop near me" volume is close to dry cleaning's. Win the ironing search, then upsell wash & iron (your best-converting query).
- Dry cleaning has big volume but almost no conversions. Either **commit** to it (page + GBP category + real pricing) or **add negatives** in Ads and stop paying for it.

### 1.2 Where conversions come from (geo)

| Area (Google label / PIN) | Clicks | Conv. | Read |
|---|---|---|---|
| PWD Quarters | 536 | **62** | Core zone |
| Koramangala | 368 | **67** | Core zone |
| 560076 (BTM 2nd Stage / Bilekahalli) | 304 | 22 | Strong |
| 560029 (BTM 1st Stage / SG Palya / Tavarekere) | 223 | 11 | OK |
| 560068 (Bommanahalli / Hosur Rd) | 309 | **5** | ❗ Burning money: bid down or exclude |
| 560114 | 71 | 7 | Good efficiency |
| 560034 (Koramangala) | 48 | 9 | Good |
| 560078 (JP Nagar) | 58 | 6 | Expand |
| **560102 (HSR Layout)** | 23 | **0** | ❗ Gap: you're not winning HSR |
| **560011 / Jayanagar** | 45 | **0** | ❗ Gap: you're not winning Jayanagar |

**Insight:** conversions cluster tightly around Koramangala/BTM, which is almost certainly where your operational center (and GBP pin) is. **HSR and Jayanagar are invisible to you.** That isn't a content problem; it's a **proximity** problem. See §2.

---

## 2. The proximity truth (the part most "SEO experts" won't tell you)

The local pack ranks on **Relevance × Distance × Prominence**. In a dense city like Bangalore, a laundry pin typically ranks strongly within roughly **1.5–3 km** and fades after that. A service-area business (SAB) listing areas in GBP is only a *hint*. **It doesn't move your pin.**

Khirri worked because Vaishali Nagar is one locality and "makhana" has little local competition. Spinzo wants **8+ dense neighborhoods, each with 10–30 competing laundries.** That needs a different structure.

### 2.1 The pin-network strategy (legit, policy-safe)

Each GBP must be a **real place, staffed during the hours you list, with permanent signage, where customers can hand over or collect laundry**. Google verifies with video, so no virtual offices or co-working addresses (that gets you suspended).

| Priority | Location | Why (data) | Form |
|---|---|---|---|
| P0 | **Current hub (Koramangala/BTM)** | 130+ conversions/month already | Optimize fully (§3) |
| P1 | **HSR Layout** (Sector 1/2/6, near 27th Main) | 0 conversions today, highest density of your target users | Drop-off counter/kiosk, or a revenue-share **partner store** (tailor, dry cleaner, convenience store) with Spinzo signage and a staffed counter |
| P1 | **Jayanagar 4th Block / 9th Block** | 0 conversions today, affluent, high dry-cleaning and saree demand | Same model |
| P2 | **JP Nagar / Kothnur** | 6 conversions, cheap clicks | Same |
| P3 | **Bellandur / Sarjapur Road** | Future expansion | After P1/P2 prove out |

**Rules for every location:**
- Its own GBP with the same brand ("Spinzo"), a **unique local phone number** (a virtual number that forwards is fine) and a unique landing page (`/locations/hsr-layout`, etc.). Never point all of them at the home page.
- **Hours = when the counter is actually staffed.** Pickup hours can be listed separately in the description and services.
- Inside every store/counter: a QR standee for "Leave a review" plus a printed price list. Photograph it for GBP.

> [!IMPORTANT]
> If you can't open physical points yet, expect the map pack to win only around your hub. Everywhere else, win through **organic location pages, ads, AI answers and society apps** (§7). Don't fake addresses.

---

## 3. GBP playbook (per location)

### 3.1 Name
- **"Spinzo"** exactly (or "Spinzo Laundry" **only if** that is literally what your signage and app say).
- ❌ Don't use "Spinzo – Premium Laundry Service Koramangala Dry Cleaning". Keyword stuffing in the name is the #1 cause of suspensions and is reported by competitors.

### 3.2 Categories (verify each one in the GBP autocomplete)
- **Primary:** `Laundry service`. It matches "laundry near me", your biggest cluster.
- **Secondary (add only what you really do):**
  - `Dry cleaner`: **only if** you offer dry cleaning end-to-end. This unlocks the ~1,700 impressions/month cluster.
  - `Laundry`: alternate category, widens matching.
  - `Laundromat`: ❌ only if customers can use self-service machines. Otherwise it attracts the wrong intent and violates guidelines.
  - Check whether these exist in your region: `Carpet cleaning service`, `Curtain and upholstery cleaning service`, `Shoe repair shop` (only if you repair, not just clean).
- "Ironing service" and "Shoe cleaning" are **not** GBP categories. Cover them with **Services** (below), posts and review text.

### 3.3 Services (this is where you capture ironing, shoe and saree searches)
Use the customer's words in the service name and put prices in every description:

| Service name (GBP) | Description seed |
|---|---|
| Wash & Fold (per kg) | ₹85/kg, washed, dried, folded. Free pickup in 30 min, back in ~6 hours. |
| Wash & Iron (per kg) | ₹140/kg, washed and steam-ironed, ready to wear. |
| **Ironing / Istri / Steam Press** | ₹18/piece. Doorstep pickup, crisp steam press. Better than the corner iron shop. |
| Dry Cleaning | Suits, blazers, silk, wool. Per-piece pricing. *(Only if you offer it.)* |
| **Saree Dry Cleaning & Roll Press** | Silk, Kanjeevaram and designer sarees. *(High intent in Jayanagar. Only if you offer it.)* |
| Blanket & Comforter Wash | ₹299 single / ₹399 double. |
| Shoe Cleaning | From ₹199/pair. Sneakers, leather, suede. |
| Curtain Cleaning | *(If offered: moving-out and festival demand.)* |
| Express Same-Day Laundry | Order before 10 AM, back the same evening. |
| Laundry for PGs, Co-living & Airbnb Hosts | Bulk/weekly plans. |

### 3.4 Description (750 characters, natural, no stuffing)
> Spinzo is a laundry pickup and delivery service in Bangalore. Book on the Spinzo app or spinzo.in and we pick up from your door in about 30 minutes, then return your clothes washed, folded or ironed within hours. Wash & Fold from ₹85/kg, Wash & Iron ₹140/kg, steam ironing (istri) ₹18/piece, plus blanket wash, shoe cleaning and dry cleaning. Every order is washed separately, weighed in front of you and tracked live in the app. We serve Koramangala, BTM Layout, HSR Layout, Jayanagar, JP Nagar, Madiwala, Tavarekere and nearby areas, 9 AM–10 PM, all week. Damage cover up to 2× the service value.

*(Edit the area list per location so each profile leads with its own neighborhood.)*

### 3.5 Profile completeness (do all of it)
- **Website:** `https://spinzonow.com/locations/<area>?utm_source=gbp&utm_medium=organic&utm_campaign=<area>`
- **Booking / Order link:** `https://spinzo.in/?utm_source=gbp&utm_medium=booking`
- **Chat:** enable WhatsApp (you already have the floating button; use the same number).
- **Attributes:** Online appointments, Onsite services, Delivery, LGBTQ+ friendly, Women-owned (if true), payment methods (UPI, cards, cash).
- **Opening date** (real), **logo**, **cover**.
- **Photos (50+ in 30 days; Google favors fresh uploads over photo count):** your rider in branded kit at a real Koramangala/BTM gate, the weighing scale in front of a customer, folded stacks, the packaging, the facility, before/after stain shots, the team. Upload **real** photos. Shots taken on the phone at the location are fine.
- **Videos:** a 20–30s "pickup in 30 minutes" clip and a facility walk-through.
- **Posts:** 2–3/week (offer, how-to, new area, seasonal). Each post names **one service + one area**.
- **Products tab:** mirror the services table with photos and prices. It shows on mobile listings.

> [!NOTE]
> **GBP Q&A was removed** (API sunset in Nov 2025, then removed from public profiles). "Ask Maps" (Gemini) now answers questions from your **profile fields, reviews, photos and website FAQ**. So "seed 10 Q&As" from the old doc no longer works. The website FAQ + schema and the review text now *are* your Q&A.

### 3.6 Review engine (the most important system you'll build)

**Target:** 300+ reviews on the hub in 90 days (about 3–4/day), then 50+ per new pin.
Math: at roughly 400–600 orders/month (ads plus organic), a **25–30% ask-to-review rate** gets you there.

**Mechanics**
1. **Moment:** push + WhatsApp **within 10 minutes of "Delivered"**, and only when the order had no complaint (a CSAT gate *inside your app* is fine; just never filter who gets the Google link).
2. **Link:** the direct write-review deep link: `https://search.google.com/local/writereview?placeid=<PLACE_ID>`. Use the place ID of the customer's nearest pin.
3. **Prompt for useful text without scripting it:** "Mind mentioning what we cleaned and your area? It helps neighbours find us." This yields reviews like *"Wash & iron in HSR Sector 2, picked up in 25 mins"*. That gives Google's ranking and Gemini's summaries both the service keywords and the area names.
4. **Rider ask:** a QR on the delivery bag tag plus a script at handover for repeat customers.
5. **Respond to 100% within 24h.** Mention the service and area naturally ("Glad the blanket wash worked out in JP Nagar!").
6. **Also collect on:** Play Store and App Store (the old doc says the app had no reviews), Justdial, and Facebook. AI assistants triangulate across sources.

> [!CAUTION]
> **Don't offer discounts or cashback for reviews.** The old doc's "₹50 off for a review" violates Google's policy and India's consumer-protection rules on fake/incentivised reviews (the 2022 IS 19000 standard and the CCPA). Google detects and removes them, and can put a warning label on your profile. Rewarding **any feedback** (not specifically a Google review) is the only safe version.

---

## 4. Website audit: what's broken right now

| # | Issue | Where | Impact | Fix |
|---|---|---|---|---|
| 1 | Stats counters render **"0+" orders and "0.0★"** in server HTML (they animate client-side) | [CountUp.jsx](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/components/CountUp.jsx), [WhySpinzo.jsx](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/components/WhySpinzo.jsx) | Crawlers and LLMs read "0 orders, 0.0 rating" | Render the final number in HTML and animate from it |
| 2 | `aggregateRating`: **250 on live, 532 in the repo**, self-declared | [app/page.js](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/app/page.js#L49-L54) | Self-serving LocalBusiness ratings don't earn stars and look manipulative if they don't match GBP | Use the **real GBP count**, or remove it |
| 3 | `sameAs` has `maps.google.com/?cid=8867332980`. **That's your Google Ads customer ID, not a Maps CID** | [app/page.js](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/app/page.js#L55-L60) | Broken entity link | Replace with the real GBP URL plus Instagram, Facebook, LinkedIn, YouTube and Wikidata |
| 4 | FAQ says **"14 neighborhoods"** but 19 are listed | [app/page.js](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/app/page.js#L83) | Inconsistent facts reduce AI confidence | Generate it from `SERVICE_LOCATIONS.length` |
| 5 | **No dry-cleaning service page**, yet llms.txt and the FAQ advertise dry cleaning | [lib/services.js](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/lib/services.js) | Losing the #2 demand cluster | Add `/services/dry-cleaning` (or remove the claims) |
| 6 | Ironing page doesn't use "iron shop / istri / press / ironing near me" | `steam-ironing` | Losing the #3 cluster | Rename the H1 to "Ironing Service Near You (Istri at Your Doorstep)" and add the synonyms to headings and FAQ |
| 7 | **Stock Unsplash images** and generic testimonials ("Priya Sharma, BTM") | Services, Testimonials | E-E-A-T and trust; AI and humans discount them | Real photos; real reviews pulled from GBP with name, area and date |
| 8 | Header nav is all `#anchors`. No crawlable links to Services, Areas or Pricing | [Navbar.jsx](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/components/Navbar.jsx) | Weak internal linking to money pages | Add Services ▾, Areas ▾ and Pricing |
| 9 | Location pages are **templated** (subtitle + 3 bullets + the same FAQs with the name swapped) | [locations/[location]/page.js](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/app/locations/[location]/page.js) | Doorway-page risk; weak relevance | §5.2 template |
| 10 | Factual error: **Adugodi** described as "Central East… near CV Raman Nagar/HAL" | same file | AI trust; looks auto-generated | Adugodi is next to Koramangala/Wilson Garden. Fix it |
| 11 | No street address or postal code in schema | `app/page.js` | Weaker entity match | Add the hub's address (SABs can mark it up without showing it on GBP) |
| 12 | No `alternateName`, `logo`, `founder` or `foundingDate`, and no shared Organization `@id` | schema | Entity clarity | Add `alternateName: ["Spinzo Laundry","SpinZo","Spinzone"]` |
| 13 | **spinzo.in**: title "SpinZo", no meta description, no schema | web app | Brand split across two domains | Proper title/meta and the same Organization `@id`. Noindex app-internal routes |
| 14 | robots.txt doesn't name `OAI-SearchBot`, `ClaudeBot` or `Bingbot` (the wildcard covers them, but be explicit) | [app/robots.js](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/app/robots.js) | Minor | Add them |
| 15 | Sitemap `lastModified: new Date()` on every build | [app/sitemap.js](file:///Users/nischaykumar/Desktop/Developer/next-spinzo.nosync/app/sitemap.js) | Google ignores lastmod values that are always "now" | Use real per-page dates |

---

## 5. Website growth: pages that capture demand

### 5.1 New service pages (priority order, based on your search-term data)
1. `/services/dry-cleaning`: "Dry Cleaning Near You in Bangalore: Doorstep Pickup"
2. `/services/ironing` (or rework `steam-ironing`): "Ironing Service / Istri Near Me"
3. `/services/wash-and-iron`: exists. Push it in nav and Ads (36% CVR).
4. `/services/saree-dry-cleaning`: Jayanagar, the festival/wedding season (*right now*)
5. `/services/curtain-cleaning`, `/services/sofa-and-carpet-cleaning`: only if you actually offer them (the home-services adjacency)
6. `/services/darning-and-alterations`: if you partner with a tailor ("darning near me" got clicks)
7. `/pricing`: "Laundry Price per kg in Bangalore (2026)". Every competitor hides prices; you win on transparency.

### 5.2 Location × service pages (only for the 6 core areas)
`/locations/koramangala/dry-cleaning`, `/locations/hsr-layout/ironing`, etc. → **6 areas × 4 services = 24 pages.**
Each page **must** contain unique, real local proof:
- Actual pickup ETA in that area (from your order data: "median pickup in HSR: 27 min")
- 2–3 **real reviews from that area** (pulled from GBP)
- Named landmarks and societies you've served ("Sobha Daffodil, Sector 2 · 27th Main · Agara Lake side")
- A photo of a rider in that area
- An area-specific FAQ ("Do you pick up from gated societies with MyGate entry?")
- Links to adjacent areas and to the parent service page

> [!WARNING]
> Don't generate 19 × 10 thin pages. Google's 2024–26 spam updates (scaled content abuse) hit exactly that pattern. Better to have 24 strong pages than 190 weak ones.

### 5.3 Comparison and alternative pages (capture competitor-brand demand)
Your ads show about 1,100 impressions/month for competitor names. Build honest comparisons:
- `/compare/spinzo-vs-tumbledry`, `/compare/spinzo-vs-uclean`, `/compare/spinzo-vs-laundrokart`, `/compare/spinzo-vs-local-dhobi`
- `/blog/best-laundry-service-koramangala-2026` (list yourself plus real competitors fairly. AI assistants cite listicles heavily.)
- Fair price, speed and pickup tables. No disparagement.

### 5.4 Content calendar (seasonal, Bangalore-specific)
| Window | Theme | Pages/posts |
|---|---|---|
| **Oct–Nov (now: Diwali Nov 8, wedding season)** | Ethnic wear, sarees, lehengas, sherwanis, curtains before guests arrive | Saree dry-cleaning page; "Diwali home refresh: curtains + blankets" post; GBP offer posts |
| Dec–Jan | Blankets, quilts, woollens | Blanket wash push; "How to wash a duvet" |
| Feb–May | Summer, gym wear, linen, moving season | "Laundry for move-out" (curtains); gym-towel B2B |
| Jun–Sep | Monsoon: clothes won't dry, musty smell | "Why your clothes smell in monsoon"; same-day drying |

Format every article for AI extraction: put a **40–60 word direct answer under each question heading**, a pricing table and a FAQ block with schema.

### 5.5 Schema upgrades
- One sitewide `Organization` + `DryCleaningOrLaundry` with a stable `@id` (`https://spinzonow.com/#org`) that every page references
- `hasOfferCatalog` listing every service with a `priceSpecification`
- `Service` schema on each service page with `areaServed` set to `Place` objects (not `City` for neighborhoods)
- One `LocalBusiness` per physical pin on its location page (address, geo, hours, GBP URL in `hasMap`)
- `FAQPage` stays (no rich result anymore, but AI engines still parse it)
- Don't mark up third-party (Google) reviews as your own `Review` schema

---

## 6. AI-search visibility (ChatGPT, Gemini/AI Mode, Perplexity, Apple)

### 6.1 How each one finds a local laundry
| Engine | Main sources | Your gap |
|---|---|---|
| **Google AI Overviews / AI Mode / Ask Maps** | GBP, reviews, website, Reddit, listicles | Reviews volume, stock content, entity confusion with Spynzo |
| **ChatGPT search** | **Bing index**, Bing Places, Foursquare, listicles, Reddit | Bing Webmaster and Bing Places probably not set up |
| **Perplexity** | Its own crawl, Reddit, Yelp/Justdial-type directories | No third-party mentions |
| **Siri / Apple Maps / Apple Intelligence** | **Apple Business Connect**, Yelp, Foursquare | Not claimed |
| **Gemini app** | Google index + Knowledge Graph | No Wikidata entity |

### 6.2 Actions (in order)
1. **Bing Webmaster Tools:** import from Search Console and submit the sitemap. Add **IndexNow** (Netlify plugin or a ping on build). ChatGPT can't cite pages Bing hasn't indexed.
2. **Bing Places:** import from GBP (one click).
3. **Apple Business Connect:** claim, add photos and the "Order" action button pointing to spinzo.in.
4. **Wikidata item for "Spinzo"** (instance of: business; industry: laundry; country: India; HQ: Bengaluru; website; logo; app store IDs). Then add the Wikidata URL to `sameAs`.
5. **Disambiguation from Spynzo:** on the About page and in llms.txt, state plainly: "Spinzo (spinzonow.com / spinzo.in) is a Bengaluru laundry service. Not affiliated with Spynzo." Consider registering `spynzo`-style typo domains only if cheap.
6. **Fix the stale area claims.** Google's AI says you serve Whitefield, Indiranagar and Marathahalli. Search old blog posts, social bios and directories for those names and correct them. Make sure removed location URLs return **410** or redirect to `/service-areas`.
7. **Get onto "best laundry in Bangalore" lists:** LBB (Little Black Book), Curly Tales, WhatsHot, So Bangalore (Instagram), Bangalore Mirror/Deccan Herald local-startup features, YourStory/Inc42 startup profile. Pitch angle: *"Bangalore's 30-minute laundry pickup."* Speed is newsworthy.
8. **Reddit (r/bangalore, r/BangaloreReddit, r/HSRLayout, r/koramangala) and Quora:** the founder answers laundry threads as themselves, discloses the affiliation, and helps people first. No sockpuppets. Reddit is among the most-cited sources in AI answers.
9. **YouTube Shorts / Instagram Reels:** "30-minute pickup timer" videos, satisfying folding, stain rescues. Embed them on service pages with `VideoObject` schema.
10. **Monthly AI prompt audit.** Ask ChatGPT, Gemini, Perplexity and Google AI Mode:
    - "best laundry service in HSR Layout"
    - "laundry pickup in 30 minutes Bangalore"
    - "dry cleaning near Jayanagar 4th block"
    - "cheapest wash and fold per kg Bangalore"
    - "Tumbledry alternative Koramangala"
    Log whether Spinzo appears, what it says, and which sources it cites. Fix the source each time.

---

## 7. Platforms to be on (the citation and visibility stack)

*(I'm reading "Bench" in your message as **Bing**: Bing Places plus Bing Webmaster, covered above.)*

### Tier 1: this week (core entity and AI sources)
| Platform | Why | Notes |
|---|---|---|
| Google Business Profile | Map pack + Gemini | §3 |
| Google Search Console | Indexing + queries | Verified (meta tag present). Submit the sitemap and check coverage |
| **Bing Webmaster + Bing Places** | ChatGPT/Copilot | §6 |
| **Apple Business Connect** | Siri, Apple Maps, iPhone users | High-income users in Koramangala/HSR skew iPhone |
| **Justdial** | Huge in India; its data is syndicated and cited | Claim the free listing, same NAP. Don't buy the paid package yet |
| **Mappls (MapmyIndia)** | Feeds many Indian apps and car navigation | Free listing |
| Facebook Page + Instagram Business | Social proof + `sameAs` | Same name, phone and website everywhere |
| Wikidata | Entity | §6 |

### Tier 2: weeks 2–4 (where your buyers actually live)
| Platform | Why |
|---|---|
| **MyGate / NoBrokerHood / ADDA marketplace** (society apps) | Your ideal customer is a gated-society resident in HSR/Koramangala/JP Nagar. Listing as a society-approved vendor gets you gate access, trust and a captive audience. **This is the biggest hyperlocal lever.** |
| **Society/RWA WhatsApp groups and Telegram** | Partner with association committees: "resident-only price" with a society-specific promo code (trackable) |
| Sulekha, IndiaMART (B2B: PGs, hotels, salons, gyms) | Lead gen + citations |
| Magicpin | Hyperlocal deals app popular in Bangalore |
| Foursquare/Swarm | Feeds Apple, Uber, and some LLMs |
| LinkedIn Company Page | B2B (corporate tie-ups) + entity |
| YouTube channel | Video SEO + AI citations |
| Crunchbase, Tracxn, F6S, YourStory profile | Startup entity signals; LLMs cite them for "what is Spinzo" |
| Trustpilot (optional) | Extra review source |

### Tier 3: partnerships (the "if someone buys clothes, we show up" play)
| Partner type | Mechanic |
|---|---|
| **Boutiques and ethnic-wear stores** (Jayanagar 4th Block, Koramangala) | A "Care card" in every bag: *"First dry-clean of this outfit on us — scan to book"*. A trackable QR per store and a revenue share. Ask them to mention it on their Instagram. |
| **Co-living** (Stanza, Colive, Zolo, HelloWorld) and **PGs** | Bulk weekly laundry plans; branded laundry drop box in the building |
| **Airbnb / serviced-apartment hosts** (Koramangala, HSR) | Linen B2B; listing on host communities |
| **Gyms, yoga studios, salons, spas** | Towel laundry B2B, plus a member discount poster (an offline billboard) |
| **Tech parks / corporate HR** (ORR, Koramangala startups) | Office drop box + employee benefit code |
| **Sneaker stores / resellers** | Shoe-cleaning cross-promo |
| **Movers and packers / rental brokers** | "Move-in fresh" curtain + blanket bundle |

Each partner should link to you from their website or Instagram where possible. Local backlinks are a prominence signal.

---

## 8. Ads ↔ organic synergy (quick wins from your data)

1. **Add negatives or a dedicated ad group for dry cleaning:** ~₹3.1k/month for about 4 conversions. Don't send that traffic to a page that doesn't sell dry cleaning.
2. **Create an "Ironing" ad group** (iron shop / istri / press near me) → the new ironing page. Cheap clicks and a daily-habit service.
3. **Scale "wash and iron near me"** (36% CVR).
4. **Bid down 560068 (Bommanahalli):** 309 clicks, 5 conversions.
5. **Bid up Koramangala and PWD Quarters**, and test radius targeting around each new pin.
6. **Brand campaign** covering "spinzo", "spinzone", "spin zo laundry", "spinzo app". It's cheap insurance against Spynzo and competitors bidding on your name.
7. Run competitor-conquest only with the comparison pages (§5.3) as landing pages.
8. **Upload offline conversions** (app orders) from Firebase/AppsFlyer so Smart Bidding optimizes for real orders, not clicks.

---

## 9. Corrections to the old strategy doc (`spinzo-seo-gmb-strategy.md`)

| Old advice | Problem | Correct approach |
|---|---|---|
| GMB category "DryCleaningOrLaundry + LocalBusiness" | Those are schema.org types, not GBP categories | Primary `Laundry service`, secondary `Dry cleaner` / `Laundry` |
| Name "Spinzo — Premium Laundry Service" | Keyword stuffing → suspension risk | "Spinzo" |
| "₹50 off for a review" | Violates Google policy and Indian consumer rules | Ask everyone, reward no one specifically for Google reviews |
| "Seed 5–10 Q&As" | GBP Q&A removed (2025) | Website FAQ + reviews feed Ask Maps |
| "List 20 service areas and rank everywhere" | Service areas don't override proximity | Pin network (§2) + organic pages |
| "1 blog per area" | Thin, templated content risk | 6 strong area hubs + 24 area×service pages with real proof |

---

## 10. 30 / 60 / 90-day execution plan

### Days 1–7: Foundation and fixes
| # | Task | Owner |
|---|---|---|
| 1 | Fix site truth issues #1–4, #8, #10–12 (counters, rating, sameAs, 14→19, nav, Adugodi, schema) | Dev |
| 2 | GBP: categories, services table, description, attributes, booking link, UTMs, 30 real photos | You |
| 3 | Build the review flow (delivered → deep link) in the app + WhatsApp | Product |
| 4 | Bing Webmaster + IndexNow, Bing Places, Apple Business Connect, Justdial, Mappls | You |
| 5 | Ads: dry-cleaning negatives (or a new ad group), ironing ad group, Bommanahalli bid-down, brand campaign | You / Ads |
| 6 | spinzo.in: title, meta, Organization schema | Dev |

### Days 8–30: Capture demand
| # | Task | Owner |
|---|---|---|
| 7 | `/services/dry-cleaning`, `/services/ironing`, `/pricing`, `/services/saree-dry-cleaning` (Diwali) | Dev + content |
| 8 | Rewrite the 6 core location pages with real proof (§5.2) | Content |
| 9 | Wikidata entry; Spynzo disambiguation; clean up the stale area claims | You |
| 10 | Apply to MyGate/NoBrokerHood vendor listings; pitch 10 RWAs | Growth |
| 11 | 5 boutique/co-living partnerships with QR tracking | Growth |
| 12 | GBP posts 3×/week; reply to every review | You |

### Days 31–60: Expand the footprint
| # | Task |
|---|---|
| 13 | Open pin #2 (HSR) and pin #3 (Jayanagar): counter/partner store, signage, video verification |
| 14 | 12 area × service pages for HSR, Koramangala and BTM |
| 15 | 4 comparison pages + "best laundry in [area]" listicles |
| 16 | PR push: LBB, Curly Tales, YourStory ("30-minute laundry") |
| 17 | Founder participation on Reddit/Quora (weekly) |

### Days 61–90: Compound
| # | Task |
|---|---|
| 18 | Remaining 12 area × service pages (Jayanagar, JP Nagar, Madiwala) |
| 19 | Pin #4 (JP Nagar) if pins #2–3 show map-pack lift |
| 20 | Monthly AI prompt audit + rank-grid tracking (Local Falcon / BrightLocal grid for "laundry near me" on a 7×7 grid around each pin) |

### KPIs
| Metric | Today | Day 90 target |
|---|---|---|
| Google reviews (hub) | *tell me* | 300+ at 4.7★+ |
| Map-pack top-3 coverage for "laundry near me" (7×7 grid, 0.5 km spacing) | *measure* | ≥60% of grid points around each pin |
| Conversions from HSR (560102) / Jayanagar (560011) | 0 / 0 | 30+ / 20+ per month |
| Organic clicks (GSC) | *tell me* | 3× |
| Ads CPA | ₹217 | ≤₹160 (organic absorbs "near me" demand) |
| AI-prompt mentions (out of 10 tracked prompts × 4 engines) | *audit* | ≥20/40 |

---

## 11. What I need from you to sharpen this

1. **GBP status:** is it verified? What address/pin, categories, review count and rating? (The schema claims 250 or 532.) Share the GBP link or place ID.
2. **Physical locations:** where is the processing facility? Would you run a drop-off counter or partner store in HSR and Jayanagar?
3. **Dry cleaning:** do you actually offer it (in-house or partner)? Saree care? Curtains, sofa, carpet?
4. **Search Console:** I don't have a GSC connector. Export the **Performance → Queries and Pages (last 3 months)** as CSV, or connect a GSC MCP. Same for Google Trends if you want trend charts. (I used your Ads search-term data as the demand proxy.)
5. **Order data by area:** I can pull this from Firebase to find where repeat customers cluster. That picks the exact spots for pins #2 and #3.
6. **Real assets:** photos, rider videos, and permission to show real customer reviews (first name + area).
