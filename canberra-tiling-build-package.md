# Canberra Tiling Site: Complete Build Package

Single-file build brief and page drafts for a Level 2 rank-and-rent tiling site targeting Canberra and the ACT.

Generated 29 August 2026. 13 pages. 30 `[VERIFY]` markers, 47 `[NEEDS INPUT]` markers.

---

## 1. How to use this document

Each page below is a separate deliverable, separated by a horizontal rule and an `# H1`.

**Every page ends with a `## Build notes` section that is NOT page content.** Strip it from built output. Read it first: it carries the schema spec, internal link map, image direction, cannibalisation controls, and the Level 2 claim restrictions for that page.

**Marker conventions**

- `[VERIFY: ...]` is a claim that needs sourcing against a named external source before publish.
- `[NEEDS INPUT: ...]` is a required value that is not yet known.
- The `--check` build gate must fail while any marker of either type remains. Given the volume, have it report counts per file rather than a bare fail, so progress is visible.

---

## 2. Blockers, in order

Three items cascade across the whole build. Resolve before writing code, not during.

1. **Brand and domain name.** Appears on all 13 pages. Newcastle Tilers uses an exact-match domain and the head term supports doing the same. Check availability and confirm the auDA eligibility position.
2. **Twilio tracking number.** Canberra `02 61xx` prefix. Appears on 7 pages. Without call tracking there is no lead evidence, which is the sales tool the model depends on.
3. **Contractor status.** Blocks the about page, the disclaimer, and every CTA. See section 5.

---

## 3. Page inventory

| File | Route | Priority | VERIFY | INPUT |
|---|---|---|---|---|
| `homepage-canberra-tiling.md` | `/` | 1 | 0 | 2 |
| `tiling-cost-guide-canberra.md` | `/tiling-cost-guide-canberra/` | 1 | 4 | 2 |
| `leaking-shower-repair-canberra.md` | `/leaking-shower-repair-canberra/` | 1 | 4 | 4 |
| `about-canberra-tiling.md` | `/about/` | 1 | 0 | 4 |
| `disclaimer-canberra-tiling.md` | `/disclaimer/` | 1 | 0 | 4 |
| `contact-canberra-tiling.md` | `/contact/` | 1 | 0 | 4 |
| `privacy-canberra-tiling.md` | `/privacy/` | 1 | 2 | 13 |
| `waterproofing-canberra.md` | `/waterproofing-canberra/` | 2 | 6 | 2 |
| `regrouting-canberra.md` | `/regrouting-canberra/` | 2 | 6 | 4 |
| `tile-removal-canberra.md` | `/tile-removal-canberra/` | 2 | 3 | 2 |
| `tile-repair-canberra.md` | `/tile-repair-canberra/` | 2 | 3 | 2 |
| `tiling-quote-checklist-canberra.md` | `/tiling-quote-checklist-canberra/` | 3 | 0 | 2 |
| `bathroom-tiling-canberra.md` | `/bathroom-tiling-canberra/` | 3 | 2 | 2 |

**Do not build `/tile-and-grout-cleaning-canberra/`.** Dropped deliberately on renter-fit grounds: cleaning is a different renter pool from tiling and the high CPC on those terms is likely carpet-and-tile cleaning businesses bidding, not tilers. The regrouting page states the position in prose rather than linking out.

---

## 4. Technical requirements

**Schema.** Organisation plus FAQPage. **Never LocalBusiness.** No address, no `aggregateRating`, no review markup anywhere on the site. No Product or Offer schema on the cost guide, since those figures are third-party estimates rather than our prices. The checklist page takes Organisation only; do not force HowTo.

**Rendering.** Nav and footer links must be server-rendered, not JS-injected. This was a live issue on Perth Brickwork and is cheaper to get right now than to diagnose later.

**Stack.** Consistent with the existing portfolio: GitHub Pages hosting, Cloudflare DNS and email routing, Formspree form handling, Twilio call tracking logging to the shared Supabase `sites` table with its own `site_id`.

**Standards references.** `AS 3740:2021 Waterproofing of Domestic Wet Areas` is the versioned form used sitewide. Keep it consistent. `AS 4586` (slip resistance) and the `AS 3958` series (tile installation) appear unversioned and are marked for verification.

---

## 5. Positioning: Level 2, with one exception

No reviews, no project photos, no years of experience, no licence or accreditation claims, no warranty, no response-time promises, no physical address, no crew or team references, no Google Business Profile, no citations or directory listings.

That removes every conventional trust element a trade website runs on. **The replacement is specificity**: real figures with named sources, honest explanations of when a repair is not needed, and plain statements about what we do not do. Several pages deliberately talk readers out of work (corner silicone on regrouting, DIY on tile removal, "does drummy always need fixing"). That accumulation is the trust substitute. It is the strategy working, not a leak in it.

**The exception:** the about page runs Level 1 transparent-broker framing. The commercial disclosure lives there and on the disclaimer, nowhere else.

**The contractor representation problem.** Pre-renter, no page may state in the present tense that enquiries are passed to a contractor, because no contractor exists. Under Australian Consumer Law a representation about a service that cannot be supplied is the same category of problem as a fabricated review, and arguably worse because a homeowner acts on it. Use the conditional wording supplied in the about and disclaimer drafts until a contractor is signed. **The live Perth Limestone Group about page carries the same defect and should be corrected.**

**Images.** Synthetic illustrative only. Captions and alt text must describe what is illustrated and must never imply completed work by us. No before-and-after imagery, no project galleries. For reference on what not to do: Newcastle Tilers serves AI images from a folder literally named `/images/ai/` with alt text describing freshly completed bathroom tiling.

---

## 6. Highest-risk content

Three pages carry safety or regulatory claims. These markers must be cleared from primary sources, never from a trade blog, a competitor page, or a tool manufacturer.

| Claim | Page | Source required |
|---|---|---|
| Respirable crystalline silica exposure standard and regulatory position | Tile removal | Safe Work Australia, WorkSafe ACT |
| Asbestos date thresholds, identification and removal requirements | Tile removal, cost guide | WorkSafe ACT, Asbestos Safety and Eradication Agency |
| ACT waterproofing licensing and certification | Waterproofing, cost guide | Access Canberra construction occupations licensing |
| AS 3740:2021 extent requirements | Waterproofing | Standards Australia |
| AS 4586 slip resistance, domestic application | Bathroom tiling | Standards Australia or supplier technical docs |
| AS 3958 adhesive coverage and movement joints | Tile repair | Standards Australia or adhesive manufacturer |
| Privacy Act small business exemption | Privacy | **Legal advice required** |

**If any of these cannot be sourced confidently, keep the practical advice and drop the regulatory specific.** Approximating is worse than omitting. A wrong safety claim on a page a homeowner may act on is the worst failure mode in this build.

**The privacy one is portfolio-wide.** A lead referral business that passes enquirer details to a paying contractor may fall outside the Privacy Act small business exemption, because the exemption carves out businesses that disclose personal information for a benefit. If so, the Australian Privacy Principles apply in full. Perth Brickwork and Perth Limestone Group carry the identical question. Resolve once, properly, and apply across all three.

---

## 7. Cannibalisation map

Pages overlap and will compete unless each stays in its lane. The `## Build notes` on each page restate the relevant boundary.

| Page | Owns | Must not expand into |
|---|---|---|
| Leaking shower repair | An existing leak: symptoms, diagnosis, repair options | Grout as a material; membranes as a system |
| Regrouting | Grout as a material, why it fails, replacement | Leak diagnosis; a "regrouting to fix leaks" section |
| Waterproofing | The membrane as a system, standards, certification | Leak symptom lists |
| Tile repair | **"Drummy"**, debonding, cracking, matching | n/a |
| Bathroom tiling | Installation choices: tile selection, layout, sequencing | Costs, membranes, grout beyond a sentence each |
| Cost guide | All figures | n/a |

**"Drummy" is owned by the tile repair page** and carries 480 national searches at competition index 10, the easiest real volume in the dataset. Other pages reference it in a sentence and link out. When editing later, those brief mentions will feel thin and the instinct will be to expand them. That instinct is the cannibalisation risk.

**All cost figures live on the cost guide.** Every other page keeps cost references to a sentence and links there.

---

## 8. Link graph

Verified: no broken links, no orphans.

| Route | Inbound body links |
|---|---|
| `/tiling-cost-guide-canberra/` | 13 |
| `/leaking-shower-repair-canberra/` | 10 |
| `/regrouting-canberra/` | 4 |
| `/waterproofing-canberra/` | 4 |
| `/about/` | 3 |
| `/bathroom-tiling-canberra/` | 2 |
| `/tile-removal-canberra/` | 2 |
| `/privacy/` | 2 |
| `/tiling-quote-checklist-canberra/` | 2 |
| `/tile-repair-canberra/` | 1 |

`/contact/` and `/disclaimer/` carry no body-copy inbound links by design. Both live in the sitewide footer.

The cost guide is the inbound hub. The homepage is the outbound hub via its routing block.

---

## 9. Keyword basis

From DataForSEO Google Ads search volume, national scope, August 2026. Clustered terms report one figure for the cluster; do not sum them.

| Term | Vol | CPC | Comp |
|---|---|---|---|
| bathroom tiling (national) | 9,900 | $1.03 | 100 |
| shower leak repair (national) | 880 | $16.07 | 77 |
| tile removal (national) | 880 | $5.68 | 64 |
| regrouting (national) | 880 | $11.08 | 65 |
| cost to tile a bathroom | 720 | $2.50 | 16 |
| drummy tiles (national) | 480 | $3.65 | **10** |
| tiling cost per m2 | 390 | $1.40 | 36 |
| tiler / tilers / tiling canberra | 260 | $6.49 | 60 |
| waterproofing canberra | 110 | $5.85 | 23 |
| bathroom tiling / bathroom tiler canberra | 70 | $1.46 | 100 |
| leaking shower repair canberra | 30 | $4.25 | 66 |
| shower repair canberra | 20 | **$18.30** | 74 |
| regrouting canberra | 20 | $4.50 | **94** |
| tile repair canberra | 20 | $7.01 | 77 |

**Repair intent carries roughly 3x the CPC of installation intent.** `shower repair canberra` at $18.30 against `tiler canberra` at $6.49 and `bathroom tiling canberra` at $1.46. The site's centre of gravity is deliberately repair, not installation.

**All 34 area-page keywords returned null.** Gungahlin, Belconnen, Woden, Queanbeyan and the rest have no Google Ads data. Suburb pages were dropped. Canberra is one compact market, unlike Newcastle's dispersed Hunter catchment where area pages work.

**Seven service terms returned null** (kitchen, floor, wall, outdoor, patio, pool, commercial, splashback, laundry). These get a paragraph in the homepage services block instead of a thin page each.

---

## 10. Link acquisition inventory

Pre-renter link building has a structural ceiling: citations, GBP and directories all require a real operating business at Level 3. Three pieces of content on this site are genuinely linkable because they help homeowners rather than promote a business.

1. **The quote checklist.** Printable, ungated. Do not put it behind email capture; gated resources do not attract links, and links are the entire purpose of that page.
2. **The drummy tile tap test.** A two-minute self-diagnostic requiring no tools, plus pattern mapping that turns the result into a diagnosis.
3. **The silica section on tile removal.** No Canberra competitor mentions dust at all. Real health issue, homeowners routinely DIY strip-outs with a hardware-store mask.

Realistic targets: Australian renovation forums, Canberra community groups, consumer-side renovation resources. These three are the site's entire pre-renter link inventory.

---

## 11. Open strategic questions

**Bathroom renovation.** `bathroom renovation canberra` runs 1,600/month against tiling's 260. It has been added to the opportunity scan and needs its own gates: different renter pool (builders, not tilers), different competitors, higher job values, and licensing thresholds tiling does not carry. Do not assume it passes. Every page currently declines renovation enquiries explicitly; if it later clears the gates, those become cross-links rather than dead ends.

**Effort scoring.** Canberra is the most remote market in the portfolio. Build effort is genuinely comparable across cities, but link-building phases 3, 5, 6 and 9 (supplier relationships, sponsorships, local PR, renter relationships) cannot be executed from Perth as designed. That risk is not currently captured anywhere in the workbook.

**Trend data unreliable.** The `avg_last_3mo` / `avg_prior_yr_3mo` columns in `kwvol.py` output are unusable until the ordering of the DataForSEO `monthly_searches` array is confirmed. If oldest-first, every trend reads backwards. `bathroom renovation canberra` shows either a 57% collapse or a 133% rise depending on which is true.

---
---

# PAGE DRAFTS

---


<!-- ===== PAGE 1 of 13 · source file: homepage-canberra-tiling.md ===== -->

# Homepage

**URL:** `/`
**Title tag:** Tiler Canberra | Tiling, Waterproofing & Tile Repairs (52 chars)
**Meta description:** Tiling across Canberra and the ACT. Bathroom and floor tiling, waterproofing, and repairs including leaking showers and regrouting. Get a free quote. (148 chars)

**Primary:** tiler canberra / tilers canberra / tiling canberra (260/mo clustered)
**Secondary:** tiling services canberra (10), tiling contractors canberra

**[NEEDS INPUT: domain and brand name. Newcastle Tilers uses an exact match domain, which is the straightforward option and the one the head term supports. Decide before any copy is finalised, since the brand name appears throughout. Check availability and confirm the auDA eligibility position for the chosen name.]**

---

## Tiling Across Canberra and the ACT

Bathroom and floor tiling, waterproofing, and repairs to showers, grout and cracked tiles. Across Canberra, the ACT and Queanbeyan.

**[Get a Quote]** **[Call NEEDS INPUT: Twilio number]**

---

## Start with what you actually need

Most tiling enquiries fall into one of three situations, and they are different jobs with different costs. Working out which one you are in saves the most money.

### Something is leaking or damaged

A shower that leaks, grout that is crumbling, tiles that sound hollow or have cracked. The first question is always whether the problem is at the surface or underneath it, because that determines whether you are looking at a few hundred dollars or several thousand.

[Leaking shower repair](/leaking-shower-repair-canberra/) · [Regrouting](/regrouting-canberra/) · [Tile repair](/tile-repair-canberra/)

### You are tiling something new

A bathroom, a floor, a splashback, an outdoor area. New work is more predictable than repair work, and the cost is driven mostly by the tile you choose, the layout, and the condition of what is underneath.

[Bathroom tiling](/bathroom-tiling-canberra/) · [Waterproofing](/waterproofing-canberra/) · [Tile removal](/tile-removal-canberra/)

### You are still working out a budget

Published Canberra figures for the same bathroom range from $9,500 to $120,000, which is not much help. Our cost guide sets out where those numbers come from and why they disagree.

[Canberra tiling cost guide](/tiling-cost-guide-canberra/) · [Quote checklist](/tiling-quote-checklist-canberra/)

---

## What we cover

**Bathroom tiling.** Floor and wall tiling in bathrooms and ensuites, including shower areas, niches and hobs. The most common tiling job and the one with the most that can go wrong, because it is a wet area. [More on bathroom tiling](/bathroom-tiling-canberra/)

**Floor and wall tiling.** Living areas, hallways, entries and general floor tiling, plus internal wall tiling. Cost here is driven by the substrate more than anything else, since floors are rarely level and bringing one within tolerance for large format tile is often the largest single line.

**Kitchen tiling and splashbacks.** Kitchen floors, and splashbacks behind benches and cooktops. Splashbacks are small in area and high in detail, with cuts around GPOs, rangehoods and window returns, so they take longer than the square metre count suggests.

**Laundry tiling.** A wet area, so waterproofing requirements apply the same way they do in a bathroom, even though laundries are often treated as an afterthought.

**Outdoor and patio tiling.** Alfresco areas, patios and paths. External tiling needs slip rated tiles and weather resistant adhesives, and it carries a premium over internal work of roughly 10 to 20% on both supply and labour.

**Pool surrounds and coping.** Specialist work with its own requirements around movement, slip rating and water exposure.

**Commercial tiling.** Retail, hospitality and office fitouts, where the drivers are program and durability rather than domestic finish.

**Waterproofing.** Membrane application in wet areas, to AS 3740:2021. The one part of a bathroom you pay for and never see, and the most expensive thing to get wrong. [More on waterproofing](/waterproofing-canberra/)

**Tile removal.** Strip out of existing tiles and adhesive, and preparation of the substrate for what comes next. Frequently quoted separately and frequently underestimated. [More on tile removal](/tile-removal-canberra/)

**Repairs.** Leaking showers, regrouting, resiliconing, and cracked or drummy tiles.

---

## How a tiling job actually runs

Useful to know when you are reading a quote, because most of these stages are where costs vary.

**1. Assessment and quote.** What is there now, what is going in, and what condition the substrate is in. On a repair, this stage should include diagnosing the actual cause rather than pricing a guess.

**2. Removal and disposal.** Existing tiles and adhesive out, and away. Tiles are heavy and tip fees are usually charged by weight.

**3. Substrate preparation.** Levelling, screeding, patching and repairing. The most variable stage on any renovation, because what is underneath is not fully known until the old surface is off.

**4. Waterproofing.** In wet areas, membrane applied and detailed at junctions and the floor waste, then left to cure. Cure times lengthen in cold weather, which matters in a Canberra winter.

**5. Setting out.** Where the first tile goes determines where every cut lands. On patterned layouts like herringbone this stage decides whether the job looks right.

**6. Laying.** The part everyone pictures, and often not the longest.

**7. Grouting and silicone.** Grout to the joints, silicone to the movement junctions where the walls meet the floor and each other. These are different materials doing different jobs and they are not interchangeable.

**8. Curing and sealing.** Grout cures before the area is used or sealed. Cement based grout benefits from sealing. Epoxy does not.

---

## Why tiling quotes vary so much

Three quotes for the same bathroom can be thousands apart without anyone being unreasonable.

Usually they are not quoting the same job. One includes removing the old tiles and taking them away. One assumes the floor is flat. One has allowed for waterproofing and one has left it out expecting a separate waterproofer. None of that is visible when you compare three totals.

The fix is to give every quoter the same written brief and ask each to itemise against it. Our [cost guide](/tiling-cost-guide-canberra/) sets out the questions that make quotes comparable, and what the published Canberra figures actually say.

---

## Where we work

Canberra and the ACT, plus Queanbeyan and the immediate NSW fringe.

North through Gungahlin and Belconnen. Central across the Inner North, Inner South and Molonglo. Woden Valley and Weston Creek. South through Tuggeranong. Across the border, Queanbeyan, Jerrabomberra and Googong.

Jobs further out toward Yass, Murrumbateman or Bungendore can still be sent through, but there is no guarantee anyone covers that far out.

---

## Common questions

**How much does a tiler charge in Canberra?**
Published national rates for floor tiling supply and install run roughly $55 to $140 per square metre. A Canberra tiler's own published rate card puts bathroom labour at $85 per square metre, which sits on the national average, so Canberra tiling labour is not an outlier. The [cost guide](/tiling-cost-guide-canberra/) has the full breakdown with sources.

**My shower is leaking. Do I need it regrouted or replaced?**
It depends entirely on whether the waterproofing membrane under the tiles is intact. If damp is showing up outside the bathroom, the membrane has likely failed and regrouting will not fix it. See [leaking shower repair](/leaking-shower-repair-canberra/).

**Is grout waterproof?**
No. Grout is porous and water passes through it. The membrane underneath the tiles is what keeps water out. This surprises most people and it explains why regrouting alone often does not stop a leak.

**Do you do full bathroom renovations?**
No. A renovation involves plumbing, electrical, carpentry, plastering and painting alongside the tiling, and it is generally run by a builder rather than a tiler. If you are stripping a bathroom back to the studs, a renovation builder is who you want. We will say so rather than take the enquiry.

**How long does a bathroom take to tile?**
The laying is rarely the constraint. Substrate preparation and waterproofing cure time drive the schedule, and cure times extend in cold weather.

---

## Get a quote

Tell us what you need done, what is there now, and whether anything has been repaired before. That last detail matters more than people expect, because a repair that has already failed once usually points to a different problem than the one being described.

**[Get a Quote]** **[Call NEEDS INPUT: Twilio number]**

---

## Build notes

**The routing block is the differentiator.** Every competitor homepage on the Canberra SERP opens with the same material: attention to detail, quality workmanship, exceeding expectations, years of experience. None of it helps a visitor decide anything. Opening by sorting people into repair, new work, or budgeting is genuinely useful, and it pushes internal link equity to the three strongest pages on the site from the highest authority page.

**The services block absorbs the null demand services.** Kitchen, floor, wall, laundry, outdoor, pool and commercial tiling all returned no search data in Canberra. They get a substantive paragraph here rather than a thin page each. That gives topical coverage without seven pages chasing demand that does not exist. Revisit only if a term later shows measurable volume.

**Trust signals are absent by necessity, so content carries the page.** At Level 2 there are no reviews, no project photos, no years of experience, no licence claims and no address. That removes every conventional trust element a trade homepage uses. The replacement is specificity: real numbers, real explanations, an honest answer about what we do not do. That is a defensible substitute and it is the only one available pre-renter.

**The bathroom renovation exclusion is deliberate and important.** `bathroom renovation canberra` runs 1,600 searches a month against tiling's 260, so renovation enquiries will arrive regardless. Declining them plainly protects an eventual renter from leads they cannot service, and matches the position taken on the About page. If bathroom renovation later clears the workbook gates as its own niche, this answer becomes a cross-link rather than a dead end.

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup. Provide `name`, `url` and `areaServed`.

**Internal links out:** every page on the site. This is the hub for distribution, while the cost guide is the hub for inbound internal links.

**Server rendered navigation.** Nav and footer links must be in the served HTML, not injected by JavaScript. This was a live issue on Perth Brickwork and it is worth getting right from the first build rather than diagnosing later.

**Images:** Synthetic illustrative only. Captions and alt text must describe what is illustrated and must never imply completed work by us. No before and after imagery, no project galleries at Level 2. Newcastle Tilers serves AI images from a folder literally named `/images/ai/` with alt text describing freshly completed bathroom tiling. Do not do that.

**Claims deliberately absent at Level 2:** no years of experience, no licence or accreditation claims, no warranty, no response time promise, no review count, no project photos, no team or crew references, no physical address.

**Markers outstanding:** 2 x [NEEDS INPUT] (domain and brand name, Twilio number). `node bake.js --check` fails until cleared. The brand name blocks copy finalisation across every page, so resolve it first.

---


<!-- ===== PAGE 2 of 13 · source file: tiling-cost-guide-canberra.md ===== -->

# Canberra Tiling Cost Guide

**URL:** `/tiling-cost-guide-canberra/`
**Title tag:** Tiling Cost Guide Canberra 2026 | Real Prices Explained (54 chars)
**Meta description:** What tiling costs in Canberra, why published quotes disagree so wildly, and the hidden costs that appear after work starts. (123 chars)

**Primary:** tiling cost per m2 (390), cost to tile a bathroom (720), how much does a tiler charge (260)
**Secondary:** tile removal cost (210), bathroom tiling cost, regrouting cost (50), waterproofing cost per m2 (40)
**Local:** bathroom renovation cost canberra (110)

---

## What Tiling Actually Costs in Canberra

Search for what a bathroom costs in Canberra and you will get answers ranging from $9,500 to $120,000. Those are real published figures from real Canberra businesses, all for 2026, all for a main bathroom.

That is not because anyone is lying. It is because "a bathroom renovation" describes about six different jobs, and because most published guides are written by companies quoting their own price band.

This guide gives you the numbers, tells you where each came from, and explains what makes them differ. Then it covers the costs that appear after work starts, and the questions that make three quotes genuinely comparable.

---

## The headline numbers

### Tiling, supply and install

| Source | Rate | Scope |
|---|---|---|
| WhatCosts | $55 to $140 per m², average $75 to $100 | Standard floor tiling |
| TradieVerify | $50 to $120 per m², full range $30 to $200 | Standard floor tiling, installed |
| WhatCosts | $85 per m² floor, $95 per m² wall | Bathroom specific |
| Pearl Tiling (Canberra) | $85 per m² labour, $50 per m² tile supply | Bathroom, floor to ceiling |

That last row is the most useful line here, because it is a Canberra tiler's own published rate card rather than a national estimate. Pearl Tiling and Interiors publishes an itemised bathroom cost calculator, and its labour figure of $85 per square metre sits almost exactly on the national bathroom average. Canberra tiling labour is not an outlier.

Wall tiling costs more per square metre than floor tiling, because of the waterproofing preparation behind it and the difficulty of working vertically.

### The individual line items

Pearl's Canberra calculator itemises a full bathroom, which is more useful than any range because you can see what each component contributes:

| Item | Pearl (Canberra) |
|---|---|
| Tile supply, floor to ceiling, plus 15% wastage | $50 per m² |
| Tiler labour, floor to ceiling | $85 per m² |
| Sand and cement bed to floor | $700 |
| Waterproofing | $1,200 |
| Silicone, labour and material | $400 |
| Demolition | $1,500 |
| Rubbish removal | $800 |
| Building materials | $600 |
| Margin and project management | 20% |
| GST | 10% |

Note the last two rows. A 20% margin and project management line applied on top, then GST on top of that, means the trade cost and the invoiced cost are meaningfully different numbers. Any guide that ignores this understates by roughly a third.

### Preparation and extras

| Item | Range | Source |
|---|---|---|
| Screeding or levelling | $15 to $30 per m² | A Timber Floorer |
| Large format tiles, added labour | $10 to $20 per m² | A Timber Floorer |
| Waterproofing added to a bathroom | $500 to $1,000 | A Timber Floorer |
| Outdoor tiling premium | 10 to 20% on supply and labour | A Timber Floorer |
| Pool tiling, labour only | $60 to $120 per m² | A Timber Floorer |

### Repairs

| Repair | Range | Source |
|---|---|---|
| Silicone replacement only | $150 to $350 | The Quote Yard (VIC) |
| Shower regrout, cement grout | $600 to $1,200 | Sparky.fyi |
| Shower regrout, epoxy grout | $800 to $1,500 | Sparky.fyi |
| Shower regrout, general | $600 to $1,500 | Aquatech (Brisbane) |
| Shower base repair | $400 to $1,200 | The Quote Yard (VIC) |
| Drain reseal | $150 to $500 | Antons Renovations (Sydney) |
| Waterproofing repair | $500 to $2,500 | The Quote Yard (VIC) |
| Leak behind shower walls | $500 to $2,500 plus | Antons Renovations (Sydney) |
| Rotted timber remediation | $1,000 to $3,000 plus | Sparky.fyi |
| Shower leak repair, full range | $250 to $4,000 | Sparky.fyi (Sydney) |

The spread in that last row is the whole point. A silicone reseal and a full membrane replacement are both called "leaking shower repair" and they differ by more than ten times. Which one you need is a diagnosis, not a preference. See [leaking shower repair](/leaking-shower-repair-canberra/).

### Bathroom renovation in Canberra

This is where published figures fall apart, so here they are side by side. All 2026, all for a main bathroom in Canberra unless noted.

| Source | Figure |
|---|---|
| Housing Industry Association (national average) | Around $26,000 |
| Creating Impressions | $18,000 to $35,000, most between $19,000 and $25,000 |
| Apex Bathroom Renovations | $18,000 to $35,000, average $24,000 to $28,000 |
| Refined Building | $25,000 to $35,000, most around $30,000 |
| What's The Damage | $9,500 to $43,000 plus |
| The Bathroom Co | $40,000 to $50,000 |
| Rentoule Projects | $25,000 to $40,000 entry, $40,000 to $65,000 mid, $70,000 to $120,000 plus luxury |

Three Canberra builders describing a mid-range main bathroom in the same year give $24,000, $30,000 and $50,000.

---

## Why the numbers disagree so much

Understanding this is worth more than any single figure.

**They describe different scopes.** A cosmetic refresh keeping the layout, the plumbing and the existing waterproofing is a fundamentally different job from a full strip-out back to the studs. Both get called a bathroom renovation. Thinking in tiers rather than averages is the only way the range makes sense.

**They reflect who is writing.** A high-end builder's typical bathroom genuinely is more expensive than a general builder's, because they are describing their own client base. Neither is wrong about their own work. Both are wrong as a general answer.

**Some numbers are not real.** Programmatic cost-guide sites that publish a "from" price for every trade in every city produce figures with no relationship to any actual job. Treat a suspiciously low starting figure as a lead-capture device rather than data.

**Fixtures move the total more than tiling does.** Pearl's Canberra calculator allocates $14,250 to supply of tapware, bath, toilet, vanity, floor wastes, shower screen, shower head and mirror. That single line exceeds the entire tiling component of most bathrooms. Two bathrooms with identical tiling can differ by twenty thousand dollars on fixture selection alone.

**Labour is roughly half.** Rentoule Projects puts labour at 40 to 50% of total project cost. That ratio matters when deciding where to economise, because material savings have less leverage than most people assume.

---

## Why "cost per square metre" is misleading

It is the figure everyone searches for, and on its own it is close to useless.

**Small rooms cost more per square metre, not less.** A bathroom floor is mostly edges, cuts and detail around a floor waste, a vanity, a hob and a door frame. The productive middle where a tiler lays quickly is a small fraction of it. Australian market guidance puts a small 5 to 8 square metre bathroom at roughly $2,000 to $3,500 for tiling including materials, a far higher effective rate than any headline figure implies, because fixed costs do not shrink with the floor.

The same logic applies to ensuites. A 2 square metre ensuite still needs the same waterproofing, the same licensed plumbing and electrical work, and the same trades through the door as a larger room. You save on tile area and fixtures, not on the process.

**The rate rarely includes preparation.** Levelling, screeding, removing old adhesive and repairing the substrate are usually separate, and on a renovation they are frequently the largest single line.

Use a per-square-metre rate to sanity check a quote you already have. Do not use it to build a budget.

---

## What actually drives the cost

### The tile itself

**Size.** Large format tiles need a flatter substrate, because any deviation shows up as lipping at the edges. That often means levelling a smaller tile would not have needed, and it adds $10 to $20 per square metre to labour on top of base rates. At the other extreme, mosaics are slow, because you handle many more sheets and finish far more linear metres of grout joint per square metre.

**Material.** Porcelain is denser and harder than ceramic, so cutting is slower and blade wear higher. Natural stone commands a premium because each piece is unique, it needs specialist handling, and it requires periodic sealing that adds to lifetime cost.

**Edge type.** Rectified tiles have a machine-cut edge allowing a narrow, precise joint. Achieving that precision takes longer than laying a cushioned-edge tile that tolerates small variation.

**Availability.** Imported tiles carry longer lead times. A discontinued line means running short becomes a serious problem rather than an inconvenience.

### The layout

Straight-set is the baseline. Every other pattern adds cuts, and cuts add time and waste.

Offset and brick patterns are a small step up. Herringbone and chevron are a large one, because nearly every perimeter tile is a cut and the setting out has to be exact from the first tile or the error compounds across the room.

### The substrate, which is where the real money is

Floors are rarely level, and bringing one within tolerance may need self-levelling compound or a screed at $15 to $30 per square metre. How much is unknown until the old covering is off.

A concrete slab, a timber floor and a sheeted wall are three different preparation jobs. Old adhesive, old screed and old waterproofing all have to be dealt with, and removing tile adhesive from a slab is slow, dusty work usually quoted separately.

Water damaged framing behind a shower has to be replaced before anything is tiled over it, and that runs $1,000 to $3,000 or more on its own. It is discovered during demolition, not during the quote.

### Wet areas

Waterproofing in domestic wet areas is governed by AS 3740, currently AS 3740:2021 Waterproofing of Domestic Wet Areas. [VERIFY: confirm this is the current version at standards.org.au before publishing. Multiple trade sources cite the 2021 edition, but Standards Australia is the authority.]

In the ACT, waterproofing must be carried out by a licensed waterproofer and certified on completion. [VERIFY: confirm current ACT licensing and certification requirements via Access Canberra construction occupations licensing. This is a regulatory claim and must be sourced directly, not from a builder's blog.]

The standard also sets a minimum fall to waste of 1:80 in shower areas, and membranes require a cure period of at least 24 to 48 hours before tiling. Cure times extend in cold weather, a real scheduling factor in a Canberra winter.

Waterproofing typically adds $500 to $1,000 to a bathroom. Pearl's Canberra calculator allows $1,200.

### Access, site conditions and sequencing

Upstairs work, narrow access, no parking and restricted hours in an apartment all cost time. Working around a family using the space is slower than working in an empty house.

Tiling sits in the middle of a renovation. If the trades before it are not finished, the tiler either waits or comes back, and return visits are priced accordingly. A well sequenced job is cheaper to tile than the same job coordinated ad hoc.

---

## The costs people do not budget for

**You buy more tile than the floor area.** Pearl builds in 15% wastage. General Australian guidance suggests ordering an extra 10 to 15% for breakage and future repairs, more for diagonal and herringbone layouts. Keeping spares matters because tile lines get discontinued and dye lots vary.

**Removal and disposal.** Old tiles are heavy and tip fees are usually charged by weight. Pearl allows $1,500 for demolition and $800 for rubbish removal on a bathroom. These are frequently separate lines and sometimes missing entirely.

**What demolition reveals.** Rotted framing, a slab further out of level than expected, or failed previous waterproofing. The most common variation on any bathroom job.

**Asbestos in older homes.** Asbestos-containing materials are common in Australian homes built before the late 1980s, and the ACT carries additional legacy issues including Mr Fluffy affected blocks. If present, it changes the removal process and requires licensed handling. [VERIFY: confirm the relevant date threshold and current ACT identification and removal requirements via WorkSafe ACT and the Asbestos Safety and Eradication Agency. This is a safety and regulatory matter and must not be published from a secondary source.]

**Trims and edging.** External corners and tile edges need either a mitre or a trim. Inexpensive, frequently omitted from quotes, and the mitred alternative is labour.

**Grout upgrades.** Epoxy grout runs $800 to $1,500 for a full shower regrout against $600 to $1,200 for cement based. It lasts roughly twice as long and resists mould without sealing.

**Sealing.** Natural stone and cement based grout both benefit from sealing, a separate product and a separate visit.

**Making good.** Plastering, cornice repair and painting after tiling and demolition. Not the tiler's scope, and easy to leave out of a budget entirely. Pearl allows $2,500 for plastering and $500 for painting.

**Other trades.** Pearl's Canberra figures allow $3,000 for plumbing labour and $700 for electrical. An old shower screen usually cannot be refitted to new tiles, so budget replacement rather than reuse.

**Margin and GST.** A project management margin and then GST apply on top of the trade cost. On Pearl's structure that is 20%, then 10%.

---

## How to get a quote you can rely on

The goal is not the lowest number. It is three quotes describing the same job.

### Give every quoter the same brief

Same tile, same size, same layout, same scope, in writing. If one is pricing herringbone in large format porcelain and another has assumed straight-set ceramic, the comparison is meaningless before anyone has done anything wrong.

### Ask what is included, line by line

- Demolition, removal and disposal, including tip fees
- Substrate preparation, levelling and screeding
- Waterproofing, and who certifies it
- Tile supply, or is that yours
- Adhesive and grout, and which type
- Trims and edging
- Silicone to junctions
- Sealing
- Final clean and rubbish removal

### Ask how variations are handled

The most important question here, and the one most people skip.

What happens if the substrate is worse than expected. Are variations priced at an agreed rate or quoted at the time. Does work stop for your approval before extra cost is incurred. A quote that anticipates this comes from someone who has been caught by it before, which is a good sign.

### Ask about the tile order

Who is measuring, what waste allowance is assumed, and who is responsible if the order falls short.

### Ask about the schedule

How many days, how many visits, what has to be finished first, and how long the waterproofing needs to cure. A typical Canberra bathroom renovation runs three to five weeks, longer for complex work.

### For repairs, ask for the diagnosis before the price

A shower repair quote should name the diagnosed cause: grout failure, silicone failure, membrane failure, waste seal failure, or a supply pipe leak. A quote arriving without anyone having established where the water is going is a guess with a price on it. If regrouting or injection sealing has already been tried and the leak returned, the membrane has failed and a surface repair will not fix it.

### Take a list with you

All of the above is set out as a printable [tiling quote checklist](/tiling-quote-checklist-canberra/), so you can take the same questions to each quote and write the answers next to them.

---

## Budgeting sensibly

**Hold a contingency.** Something almost always turns up during demolition. A contingency is the difference between a variation being an inconvenience and being a crisis.

**Understand what the cheapest quote is cheaper at.** Sometimes lower overhead. Often narrower scope, thinner preparation, or an assumption that becomes a variation later.

**Spend where failure is expensive.** Waterproofing and substrate preparation are concealed, and they cost the most to put right afterwards because fixing them means removing the finished surface. Tile is visible and replaceable. If the budget has to give, give on the tile.

**Fixtures are the biggest lever.** Pearl's $14,250 fixture allowance exceeds the tiling cost on most bathrooms. Changing tapware and vanity selection moves the total further than any tiling decision.

**Keep the plumbing where it is.** Moving a toilet, shower or vanity is consistently identified as one of the largest avoidable costs, and in the ACT relocating plumbing may require a drainage plan and building approval.

---

## Frequently asked questions

**How much does a tiler charge per square metre in Australia?**
Published national rates for standard floor tiling supply and install run roughly $55 to $140 per square metre, with most sources putting the average around $75 to $100. Bathroom floor tiling sits near $85 and wall tiling near $95, the difference reflecting waterproofing preparation. A Canberra tiler's published labour rate of $85 per square metre for bathroom work sits squarely on that national average.

**Why are my tiling quotes so different?**
Almost always because they cover different scopes. Preparation, demolition, disposal, waterproofing and trims are the usual variables. Ask each quoter to itemise against the same written brief and most of the gap becomes visible.

**Is it cheaper to tile a small bathroom than a large room?**
In total yes, per square metre usually no. Small wet areas are dominated by cuts, edges and detail around penetrations. A small bathroom often lands around $2,000 to $3,500 for tiling including materials, a much higher effective rate than the headline figures suggest.

**What does it cost to regrout a shower?**
Roughly $600 to $1,500 for a standard shower, with cement based grout at the lower end and epoxy at the upper. Epoxy costs more and lasts roughly twice as long without needing sealing. See [regrouting](/regrouting-canberra/).

**What does a leaking shower cost to fix?**
Anywhere from around $250 for a silicone reseal to $4,000 for a full strip-out and membrane replacement. The difference is entirely about what has failed. If water is reaching rooms outside the bathroom, the membrane has gone and a surface repair will not hold.

**Should I supply my own tiles?**
It gives you control over price and selection, but responsibility for measuring, ordering enough and dealing with breakage moves to you. Agree in writing who carries that risk.

**Does the tile I choose change the labour cost?**
Substantially. Size, hardness, edge type and layout pattern all affect installation time independently of the tile price. Large format adds $10 to $20 per square metre in labour alone.

**Is waterproofing a place to economise?**
No. It is regulated, it is concealed once tiling starts, and correcting it later means removing the finished surface.

**Is tiling in Canberra more expensive than other cities?**
On the labour evidence available, no. A Canberra tiler's published bathroom rate matches the national average closely. Renovation totals in Canberra do skew higher, which local builders attribute to ACT labour rates, compliance requirements and the age of the housing stock, though that is their claim rather than independent data.

---

## Call to action

**Heading:** Working out a budget for a Canberra tiling job
**Body:** Tell us what you are planning, what is there now, and whether the space is being stripped back or worked around. Those three things determine most of what a job costs.
**Buttons:** Get a Quote | Call [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix]

---

## Sources

Published on the page so readers can check the figures.

- Pearl Tiling and Interiors bathroom cost calculator, Canberra: pearltiling.com.au
- Housing Industry Association, national bathroom renovation average
- WhatCosts tiling and bathroom renovation pricing
- TradieVerify Australian tiling cost guide
- A Timber Floorer tiling cost per m² guide
- Sparky.fyi shower repair cost guide
- The Quote Yard shower regrouting and leak repairs, Victoria
- Aquatech Grouting shower regrouting, Brisbane
- Antons Renovations shower leak repair guide, Sydney
- Canberra renovation figures: Creating Impressions, Apex Bathroom Renovations, Refined Building, The Bathroom Co, Rentoule Projects, What's The Damage
- AS 3740:2021 Waterproofing of Domestic Wet Areas, Standards Australia

---

## Build notes

**Source quality caveat.** Most published tiling cost guides are themselves lead-generation content, including several cited above. Programmatic cost sites publishing a "from" price for every trade in every city produce figures with no basis in real jobs. The two genuinely reliable anchors are Pearl's Canberra calculator, a real operator's own rate card, and the HIA national average. Everything else is presented as a range with the source named so the reader can weight it. Do not present any of these figures as our own data.

**Competitive note.** Pearl's calculator is the strongest cost asset on the Canberra tiling SERP and this page leans on it heavily. That is deliberate: citing a competitor's published figures with attribution is legitimate, and it produces a more useful page than Pearl's own, because Pearl shows one operator's numbers while this shows the spread across seven and explains it.

**Refresh cadence.** Every figure is dated 2026 and will go stale. Set a review at 12 months. A cost guide with visibly current figures is the version that keeps its links.

**Upgrade path.** Replace or supplement the third party ranges with quotes collected directly from Canberra operators. That converts this page from a well-sourced aggregation into original data, a materially stronger linkable asset. Collecting those quotes doubles as renter prospecting.

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup. Do not use Product or Offer schema, since these are third party estimates rather than our prices.

**Internal links out**
- `/leaking-shower-repair-canberra/`
- `/regrouting-canberra/`
- `/waterproofing-canberra/`
- `/tiling-quote-checklist-canberra/`

**Internal links in:** every service and repair page links here from its cost section. This page is the hub and should carry the highest inbound internal link density on the site.

**Link acquisition angle:** the comparison table showing seven Canberra builders disagreeing by a factor of five is the most citable thing on this page. The standalone [quote checklist](/tiling-quote-checklist-canberra/) is the second linkable asset drawn from this material, and is linked from the quote comparison section above.

**Images:** Synthetic illustrative only. A diagram of the layers in a tiled wet area floor (substrate, levelling, membrane, adhesive, tile) supports the "spend where failure is expensive" argument better than any photograph. No before and after imagery at Level 2.

**Claims deliberately absent at Level 2:** no years of experience, no licence claims, no warranty, no response time promise, no reviews, no project photos, no cost figures presented as our own.

**Markers outstanding:** 3 x [VERIFY] (AS 3740 current version, ACT waterproofing licensing, ACT asbestos requirements), 1 x [NEEDS INPUT] (Twilio number). `node bake.js --check` fails until cleared. The asbestos and licensing markers are regulatory claims and must be sourced from WorkSafe ACT and Access Canberra directly.

---


<!-- ===== PAGE 3 of 13 · source file: leaking-shower-repair-canberra.md ===== -->

# Leaking Shower Repair Canberra

**URL:** `/leaking-shower-repair-canberra/`
**Title tag:** Leaking Shower Repair Canberra | Shower Sealing & Waterproofing (63 chars)
**Meta description:** Leaking shower in Canberra? We cover what causes shower leaks, which repairs actually last, and when resealing is enough versus a full rebuild. (147 chars)

**Primary:** leaking shower repair canberra (30/mo)
**Secondary:** shower repair canberra (20), shower sealing canberra (20), leaking shower canberra (10), shower waterproofing repair (30)
**National support:** shower leak repair (880)

---

## Leaking Shower Repair in Canberra

A leaking shower rarely announces itself. By the time you notice a damp patch on the hallway carpet or a musty smell that will not shift, water has usually been moving through the wall or slab for months.

The frustrating part is that most leaking showers get "fixed" more than once. A resealing job that holds for eight months, then the same stain comes back. That happens because the repair treated the surface when the problem was underneath it.

This page covers how to tell where your shower is actually leaking from, which repairs hold and which ones buy you a year at best, and what to expect from the process.

---

## Signs your shower is leaking

Some are obvious. Most are not.

**In the bathroom**
- Grout that is discoloured, crumbling, or missing in the shower floor corners
- Silicone that has gone black, hard, or is peeling away from the wall junction
- Tiles that sound hollow when you tap them (called drummy tiles, meaning the tile has debonded from what it was stuck to)
- White chalky deposits on grout or at the base of the wall, which is efflorescence, salt left behind as water passes through masonry
- Water pooling and sitting rather than draining away

**Outside the bathroom, and these are the ones that matter**
- Swollen or lifting skirting boards on the other side of the shower wall
- Carpet that is damp near the bathroom wall
- Floorboards cupping or lifting in the adjacent room
- Paint bubbling or a stain spreading on the ceiling below an upstairs shower
- A persistent musty smell with no visible source

If you are seeing damage outside the bathroom, the waterproofing membrane has almost certainly failed. Surface repairs will not fix that.

---

## What actually causes a shower to leak

Here is the thing most people are never told: **grout is not waterproof.** It is porous by design. Water passes through grout, and always has.

What keeps water out of your walls and floor is a waterproofing membrane that sits underneath the tiles, applied to the substrate before tiling starts. In Australia, wet area waterproofing is governed by AS 3740:2021 Waterproofing of Domestic Wet Areas. [VERIFY: confirm this is still the current version at standards.org.au. Multiple trade sources cite the 2021 edition but Standards Australia is the authority. Apply the same version consistently across every page that references it.]

So when a shower leaks, it is almost always one of these:

**1. The membrane has failed or was never installed properly**
The most common cause in older homes and in bad renovations. Membranes fail from movement in the building, poor preparation, insufficient coverage at the wall and floor junction, or from simply not being there. [VERIFY: typical service life of a correctly installed wet area membrane. Source from a manufacturer technical datasheet, for example Ardex or Mapei, and cite the product range rather than stating a general figure.]

**2. Perished silicone at the junctions**
Silicone at the wall to floor and wall to wall junctions is a movement joint, not a permanent seal. It is a wear item and it perishes. This is the one genuine case where a cheap fix is the correct fix.

**3. A failed floor waste or puddle flange**
The puddle flange is the connection between the floor waste and the membrane. If it was not bonded correctly, water tracks straight past the drain and into the slab. Common, hard to see, and cannot be fixed from the surface.

**4. Cracked or missing grout**
Grout failure by itself does not cause a leak if the membrane below is sound. It does let far more water reach the membrane than intended, which accelerates any weakness that is already there.

**5. The shower screen seal**
Water escaping past the screen rather than through the shower. Cheapest of all to fix and worth ruling out first.

**6. Movement cracking**
Buildings move. Slab and frame movement can crack tiles, grout and membranes over time, and it concentrates at junctions and perimeters where a rigid tiled surface has nowhere to absorb it.

---

## Which repair do you actually need

This is where most quotes differ, and where most money gets wasted.

### Regrouting and resealing

**What it is:** Old grout is raked out and replaced, silicone joints are cut out and redone.

**When it works:** When the membrane underneath is intact and you have caught surface deterioration early. Also the right answer when the only problem is perished silicone.

**When it does not:** If water is already reaching rooms outside the bathroom, regrouting is cosmetic. You are sealing the top of a system that has failed underneath. Expect it to come back.

### Surface applied sealing systems

**What it is:** A clear or coloured sealer applied over the existing tiles and grout, sometimes marketed as a leaking shower repair with no tile removal. Several of these systems are sold with long warranties.

**When it works:** As a genuine extension of service life on a shower that is deteriorating but structurally sound.

**Be careful here.** These systems are heavily marketed precisely because they are cheaper and less disruptive than the alternative, and they are often sold for jobs where the membrane has already failed. A sealer applied over a failed membrane traps moisture rather than removing it. Ask directly whether the assessment found membrane failure, and ask what the warranty actually covers if the leak returns.

### Floor waste and puddle flange repair

**What it is:** Localised removal of tiles around the drain, correcting the flange to membrane connection, then rewaterproofing and retiling that area.

**When it works:** When the leak has been traced specifically to the drain connection and the rest of the membrane is sound. Much less disruptive than a full rebuild.

### Full strip out and rewaterproof

**What it is:** Tiles and screed removed back to the substrate, new membrane applied, new screed and tiles.

**When it works:** When the membrane has failed. It is the only repair that actually addresses the cause.

**The honest version:** this is the expensive option and no one wants to hear it. But a full rewaterproof done once costs less than three surface repairs and the water damage that accumulates between them. If two previous repairs have not held, this is why.

---

## What leaking shower repair costs in Canberra

[NEEDS INPUT: Cost ranges for each repair type in the Canberra market. Do not publish estimated figures. Required before this section goes live:
 - Silicone replacement only
 - Regrout and reseal, standard shower
 - Surface applied sealing system
 - Floor waste / puddle flange repair
 - Full strip out and rewaterproof, standard shower
Source options in priority order: (1) quotes obtained directly from Canberra operators, (2) published rate cards from Canberra waterproofing businesses, (3) hipages or ServiceSeeking Canberra cost guides, cited as third party estimates rather than presented as our own figures.
Until sourced, this section stays out. Do not substitute national averages and describe them as Canberra pricing.]

Related reading: [Canberra Tiling Cost Guide](/tiling-cost-guide-canberra/)

---

## How long does it take

[NEEDS INPUT: Realistic durations per repair type, including waterproofing cure time before retiling. Cure time is the variable most homeowners are not told about and it is worth being specific. Source from membrane manufacturer technical datasheets, and note that cure times vary with temperature, which matters in a Canberra winter.]

---

## Getting it diagnosed properly

The single most useful thing you can do before agreeing to any repair is get the leak actually located rather than guessed at.

A proper assessment should identify whether water is escaping at the surface or below the membrane, and should tell you which of the causes above applies. A flood test, where the shower base is plugged and filled and monitored, is the standard way of confirming whether the base holds water. [VERIFY: confirm flood testing is standard practice for diagnosing shower leaks in Australian residential work, and confirm the typical test duration. Source from AS 3740 or a membrane manufacturer's installation guide.]

If a quote arrives without anyone having established where the water is going, it is a guess with a price on it.

---

## Frequently asked questions

**Can a leaking shower be fixed without removing the tiles?**
Sometimes. If the waterproofing membrane below the tiles is still sound and the problem is deteriorated grout or perished silicone, then yes, a surface repair is the correct fix. If the membrane has failed, no surface treatment will stop it, and applying one can trap moisture in the wall or slab. Which applies to your shower is the question a proper assessment answers.

**Why does my shower keep leaking after it was repaired?**
Usually because the repair addressed the surface and the failure is underneath. Regrouting a shower with a failed membrane will hold for a while, because new grout slows water down. It does not stop it. If a shower has been repaired twice and leaked twice, the membrane is the likely cause.

**Is grout waterproof?**
No. Grout is porous and water passes through it. The waterproofing membrane beneath the tiles is what keeps water out of the building. This surprises most people and it explains why regrouting alone often does not solve a leak.

**What are drummy tiles and do they mean my shower is leaking?**
Drummy tiles sound hollow when tapped, meaning the tile has separated from the surface behind it. It does not prove a leak on its own, but it often means water has been sitting where it should not be, and it is a reason to have the shower looked at.

**How do I know if the leak is coming from the shower or from the plumbing?**
Plumbing leaks tend to be constant, while shower waterproofing leaks usually worsen after the shower is used and settle in between. That is a useful indicator, not a diagnosis. A flood test distinguishes the two properly.

**Does a leaking shower cause damage beyond the bathroom?**
Yes, and this is why it is worth acting early. Water tracking into wall frames and under flooring causes timber damage, and persistent damp supports mould growth. The repair cost rises considerably once the damage extends past the bathroom itself.

---

## Call to action

**Heading:** Get your Canberra shower leak sorted properly
**Body:** Tell us what you are seeing, where the damp is showing up, and whether the shower has been repaired before. That last detail matters more than most people expect.
**Buttons:** Get a Quote | Call [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix, provisioned before launch]

---

## Build notes

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup.

**Internal links out**
- `/tiling-cost-guide-canberra/` (linkable asset, from the cost section)
- `/regrouting-canberra/` (from the regrouting repair option)
- `/waterproofing-canberra/` (from the membrane explanation)
- `/tile-repair-canberra/` (from drummy tiles)

**Internal links in:** homepage services block, waterproofing page, regrouting page.

**Images:** Synthetic illustrative only. Diagram of a shower cross section showing membrane position below tiles would carry this page and is genuinely explanatory rather than decorative. Captions must describe what is illustrated, never imply completed work by us. No before and after imagery at Level 2.

**Claims deliberately absent at Level 2:** no years of experience, no licence or accreditation claims, no warranty offer, no response time promise, no review count, no project photos, no service area list beyond Canberra.

**Markers outstanding:** 4 x [VERIFY], 3 x [NEEDS INPUT]. `node bake.js --check` fails until cleared.

---


<!-- ===== PAGE 4 of 13 · source file: about-canberra-tiling.md ===== -->

# About [Canberra Tiling Site]

**URL:** `/about/`
**Title tag:** About Us | [Site Name] Canberra Tiling
**Meta description:** Who runs this site, how the enquiry service works, what we cover and what we don't, and how it's paid for.

---

## About [Site Name]

### Who runs this

[Site Name] is run by Brad. I am based in Perth, not Canberra, and I want that on the record up front rather than buried.

I am not a tiler. I have never laid a tile and do not claim to. For how a specific job actually gets built, the contractor doing the work is the one to ask.

What I do is research. The [cost guide](/tiling-cost-guide-canberra/) on this site compares published figures from seven different Canberra sources and explains why three local builders quoting the same bathroom in the same year land on $24,000, $30,000 and $50,000. The [leaking shower](/leaking-shower-repair-canberra/) and [regrouting](/regrouting-canberra/) pages explain when a surface repair will hold and when it will not, which is the single most expensive thing Canberra homeowners get wrong about their bathrooms.

Nobody in Canberra had written that plainly. That is why this site exists.

### What this business does

We take enquiries from Canberra homeowners about tiling and tiling repairs, and pass them to a tiling contractor who does that type of work.

We do not tile, waterproof, attend site, or certify anything. There is no crew and no equipment. Every physical part of a job is done by the contractor.

[NEEDS INPUT: contractor status. Until a Canberra contractor is attached, this section must be written conditionally. Do not state in the present tense that enquiries are passed to a contractor when no contractor exists. Use the conditional wording below and switch to the direct wording above only once a contractor is signed.

CONDITIONAL VERSION, use pre-renter:
"We take enquiries from Canberra homeowners about tiling and tiling repairs. Where we have a contractor covering that type of work in your area, your enquiry goes to them. Where we do not, we will tell you that directly rather than leave you waiting.
We do not tile, waterproof, attend site, or certify anything. There is no crew and no equipment. Every physical part of a job would be done by the contractor."]

### What we cover, and what we don't

We stick to tiling: bathroom and wall and floor tiling, waterproofing, tile removal, and tiling repairs including leaking showers, regrouting, and cracked or loose tiles.

Full bathroom renovations are a different job. A renovation involves plumbing, electrical, carpentry, plastering and painting alongside the tiling, and it is generally run by a builder or a renovation company rather than a tiler. If you are stripping a bathroom back to the studs and starting again, a renovation builder is who you want, not a tiler. We will say so rather than take the enquiry.

Plumbing, electrical work, stone benchtops, and structural work are all separate trades we do not handle either.

### What happens after you enquire

After you submit the form, you will be contacted by a Canberra tiling contractor if they cover your job. If nothing is a fit, we will tell you and point you somewhere useful rather than leaving you without an answer.

Your job goes to one contractor rather than to everyone buying leads that day, so you get one conversation instead of five calls. Your details are not sold, not added to a marketing list, and not shared with advertisers. The full position is in the [privacy policy](/privacy/).

### How the service is paid for

The contractor pays for the enquiry. You do not.

There is no cost to you at any point, the quote is free, and there is no obligation to go ahead with the work. There is nothing unusual in the model. It is how referral services are generally funded, free to the person making the enquiry and paid for by the business that receives it.

### Where we cover

Canberra and the ACT, plus Queanbeyan and the immediate NSW fringe.

That covers the northern districts through Gungahlin and Belconnen, the central areas including the Inner North and Inner South, Woden Valley and Weston Creek, Molonglo, and Tuggeranong in the south. Across the border it includes Queanbeyan, Jerrabomberra and Googong.

Jobs further out toward Yass, Murrumbateman or Bungendore can still be sent through, but there is no guarantee anyone covers that far out.

### Contact

Brad
[Site Name]
ABN [NEEDS INPUT: confirm which ABN this site trades under. If it is the same ABN as the Perth properties, note that ABN Lookup shows a WA address. That is fine and consistent with the disclosure above, but it should be a deliberate decision rather than something a homeowner discovers.]

Phone [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix]
Email hello@[domain]

Call: [phone](tel:)
Email: [hello@domain](mailto:)
Service area: Canberra, the ACT and Queanbeyan
Hours: Online enquiries anytime

---

## Build notes

**Positioning.** This page is Level 1 (transparent broker) while the rest of the site runs Level 2. That is deliberate and matches the Perth Limestone structure. The commercial disclosure lives here and nowhere else.

**The conditional wording is not optional pre-renter.** Stating that enquiries are passed to a contractor, when no contractor is attached, is a representation about a service that cannot be supplied. That is an Australian Consumer Law exposure of the same kind as a fabricated review, and arguably worse, because a homeowner acts on it. The same defect currently exists on the live Perth Limestone About page and should be corrected there too.

**Location disclosure.** Stated plainly rather than omitted. The ABN on this page resolves to a WA address on ABN Lookup, so a homeowner who checks will find it regardless. Disclosed is better than discovered, and it costs very little: the value proposition here is the research, not local presence.

**Hanson credential deliberately omitted.** Two years in construction materials is genuinely adjacent to limestone, footings and aggregate, which is why it earns its place on the Perth sites. It has no bearing on tiling. Including it here would be the overstatement the Perth page was careful to avoid.

**The research paragraph is the strongest thing on this page** and it is the one part that does not transfer from the Perth template. It is specific, verifiable against the pages it links to, and it gives a non-local operator a legitimate reason to exist. Keep it concrete. If the cost guide changes, update the numbers cited here.

**Claims deliberately absent:** no years of experience, no trade qualification, no licence claim, no Canberra presence, no reviews, no completed job count, no response time promise.

**Markers outstanding:** 3 x [NEEDS INPUT] (contractor status, ABN decision, Twilio number). `node bake.js --check` fails until cleared.

---


<!-- ===== PAGE 5 of 13 · source file: disclaimer-canberra-tiling.md ===== -->

# Disclaimer

**URL:** `/disclaimer/`
**Title tag:** Disclaimer | [Site Name] (26 chars)
**Meta description:** How this site operates, who carries out the work, and the limits of the information published here. (98 chars)
**Robots:** index, follow

---

## Disclaimer

### How this site operates

[Site Name] is a lead referral service. It is independently owned and operated by [NEEDS INPUT: legal entity and ABN], and it is not a tiling contractor.

We do not tile, waterproof, remove tiles, attend site, supervise work, or certify anything. We have no crew, no equipment and no trade licence.

Enquiries submitted through this site are passed to an independent tiling contractor. Any work arising is carried out by that contractor under their own business, their own licensing and their own insurance, and any contract for the work is between you and them.

[NEEDS INPUT: contractor status. Pre-renter, this must be written conditionally. Do not state that enquiries are passed to a contractor when no contractor is attached. Use: "Where we have a contractor covering that type of work in your area, your enquiry is passed to them. Where we do not, we will tell you." Switch to the direct wording above once a contractor is signed. Same issue and same fix as the about page.]

### Responsibility for work

All liability for work carried out, including quality, timeliness, compliance and any loss or damage arising, rests with the independent contractor performing it.

We do not warrant, guarantee or accept responsibility for any contractor's work, quotes, conduct or availability.

### The information on this site

The guides, cost information and explanatory content published here are general in nature. They are written to help homeowners understand what they are buying and what questions to ask.

They are not professional, technical, legal or safety advice, and they are not a substitute for a qualified person assessing your specific property.

**Cost figures** published on this site are drawn from third party sources, each identified where it appears. They are those sources' estimates, not our prices and not quotes. Prices change, and every job differs. Do not budget from them without obtaining actual quotes.

**References to standards and regulations** are provided as general orientation. Standards are revised and regulatory requirements change. Where a specific requirement matters to your situation, confirm the current position with the relevant authority or a qualified professional rather than relying on this site.

**Safety information**, including anything published here about asbestos, dust or silica, is general awareness material only. It does not replace assessment by a licensed professional, and nothing on this site should be read as a recommendation to undertake work yourself.

### External links

This site links to third party websites, including sources for cost figures and regulatory bodies. We do not control those sites and are not responsible for their content or accuracy.

### Contact

Questions about how this site operates: [NEEDS INPUT: email address]. See also the [about page](/about/), which sets out in plain terms who runs this site and how the service is paid for.

---

## Build notes

**This page is the load-bearing legal document on the site and it should exist from launch, not be retrofitted.** Newcastle Tilers carries an equivalent disclaimer stating the site is owned and managed by a third party agency with work carried out by a licensed contractor and liability sitting with that contractor. That structure is correct and this page follows it, in plainer language and with more coverage.

**Three things it protects against, and they are all live risks here:**

1. **Australian Consumer Law.** The site presents as a trade brand under Level 2 positioning. This page, together with the about page, is where the actual commercial relationship is stated. Without it, the "we" language across the site is a misleading representation about who performs the work.

2. **auDA licensing.** The model is structured as lead supply rather than domain rental, which is what keeps it clear of auDA's prohibition on renting domain licences. This page describes it as a referral service consistent with that structure. Do not use the words "rent", "lease" or "licence" anywhere in relation to the domain or the site.

3. **Content liability.** The site publishes cost figures sourced from third parties, references to standards including AS 3740 and AS 3958, and safety material on silica and asbestos. Every one of those carries a risk of being relied on. The disclaimers here are specific to each rather than generic, which is what makes them useful.

**The safety disclaimer is not boilerplate and should not be trimmed.** The tile removal page discusses respirable crystalline silica and asbestos in older homes, and homeowners may act on it. Being explicit that it is general awareness material and not a substitute for licensed assessment is a genuine protection, not padding.

**The cost figure disclaimer matters more than it looks.** The cost guide publishes seven Canberra sources plus national ranges. Some of those sources are themselves lead generation content of questionable reliability, which is noted on that page. This page states plainly that they are third party estimates rather than our prices.

**Do not soften the "we are not a tiling contractor" statement.** It is the entire point of the page. Every other sentence here depends on it being unambiguous.

**Schema:** none required.

**Internal links out:** `/about/`

**Internal links in:** footer sitewide.

**Markers outstanding:** 3 x [NEEDS INPUT] (legal entity and ABN, contractor status wording, email address). `node bake.js --check` fails until cleared.

---


<!-- ===== PAGE 6 of 13 · source file: contact-canberra-tiling.md ===== -->

# Contact

**URL:** `/contact/`
**Title tag:** Contact | [Site Name] Canberra Tiling (34 chars)
**Meta description:** Get a quote for tiling, waterproofing or tile repairs in Canberra and the ACT. Tell us what you need and we will come back to you. (129 chars)

---

## Get in Touch

Tell us what you need done and we will come back to you.

### What to include

The more of this you can answer, the more useful the first reply will be.

**What the job is.** New tiling, a repair, or you are not sure yet.

**What is there now.** Existing tiles, bare substrate, or a bathroom about to be stripped.

**Whether it is a wet area.** Bathroom, ensuite, laundry or shower. Wet areas carry waterproofing requirements that dry areas do not.

**Whether anything has been repaired before.** This matters more than people expect. A repair that has already failed once usually points to a different underlying problem than the one being described.

**Roughly when the house was built.** Relevant for older homes, where asbestos identification comes before any demolition.

**Your suburb.**

### Enquiry form

[NEEDS INPUT: form fields and handler. Formspree free tier per the existing portfolio stack. Fields: name, phone, email, suburb, job type (dropdown: new tiling / bathroom tiling / waterproofing / leaking shower / regrouting / cracked or loose tiles / tile removal / not sure), message. Do not add a "preferred contact time" or "budget range" field. Both reduce completion and neither is needed to route an enquiry.]

### Phone

[NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix. Blocks this page and six others.]

### Email

[NEEDS INPUT: hello@ address on the chosen domain, via Cloudflare Email Routing per the existing portfolio stack.]

### Service area

Canberra and the ACT, plus Queanbeyan and the immediate NSW fringe.

North through Gungahlin and Belconnen. Central across the Inner North, Inner South and Molonglo. Woden Valley and Weston Creek. South through Tuggeranong. Across the border, Queanbeyan, Jerrabomberra and Googong.

Jobs further out toward Yass, Murrumbateman or Bungendore can still be sent through, but there is no guarantee anyone covers that far out.

### Hours

Online enquiries anytime.

### What we don't do

Full bathroom renovations, plumbing, electrical work, stone benchtops, tile and grout cleaning, and structural or below-ground waterproofing. If your enquiry is one of those we will say so rather than take it and waste your time. More on [what we cover and why](/about/).

### How this works

We are a lead service, not a tiling contractor. The [about page](/about/) sets out who runs this site, how enquiries are handled, and how the service is paid for. The short version: the contractor pays, you do not.

Your details are not sold, not added to a marketing list, and not shared with advertisers. See the [privacy policy](/privacy/).

---

## Build notes

**The "what to include" block is doing real work.** It improves lead quality at zero cost, and every item on it maps to something that genuinely changes the job. It also signals competence before anyone has spoken to a person.

**Do not add trust padding.** No "we respond within 24 hours", no "trusted by Canberra homeowners", no response time promise. At Level 2 there is nothing behind any of those. The page is better plain.

**Form handler:** Formspree free tier, consistent with the existing portfolio. Phone is a Twilio tracking number so call events log to the shared Supabase `sites` table with the appropriate `site_id`, matching the architecture already in place.

**Schema:** ContactPage plus Organisation. Not LocalBusiness. No address, no opening hours markup implying a premises.

**Internal links out:** `/about/` (twice), `/privacy/`

**Internal links in:** homepage, every service and repair page CTA, about page.

**Markers outstanding:** 3 x [NEEDS INPUT] (form handler and fields, Twilio number, email address).

---


<!-- ===== PAGE 7 of 13 · source file: privacy-canberra-tiling.md ===== -->

# Privacy Policy

**URL:** `/privacy/`
**Title tag:** Privacy Policy | [Site Name] (28 chars)
**Meta description:** How we collect, use and share the information you provide through this site. (76 chars)
**Robots:** index, follow

---

> **STOP. READ BEFORE PUBLISHING.**
>
> **This is a draft structure, not legal advice, and it must be reviewed before it goes live.** See the compliance flag in the build notes below, which concerns whether the Privacy Act small business exemption applies to a lead referral business at all. That question has to be answered before this document is finalised, because the answer changes what this policy has to say and what obligations sit behind it.

---

## Privacy Policy

Last updated: [NEEDS INPUT: date]

### Who this covers

This policy applies to [Site Name], operated by [NEEDS INPUT: legal entity name and ABN], and to information collected through this website.

### What we collect

When you submit an enquiry, we collect:

- Your name
- Your phone number
- Your email address
- Your suburb
- What you have told us about the job

When you call the number on this site, we collect:

- Your phone number
- The time and duration of the call
- Which page of the site you called from

[NEEDS INPUT: confirm whether calls are recorded. If any call recording occurs, it must be disclosed here explicitly and consent obtained at the start of the call. Recording without disclosure is a separate legal problem in its own right. If calls are not recorded, state that plainly.]

When you visit the site, standard analytics data is collected, including pages visited, approximate location derived from IP address, device type and referring source.

### Why we collect it

To pass your enquiry to a tiling contractor who can quote on your job, and to respond to you about that enquiry.

Call and form data is also used to understand which pages generate enquiries, so the site can be improved.

### Who we share it with

**The contractor.** Your enquiry details go to one tiling contractor, so that they can contact you about your job. Your job is not distributed to multiple businesses.

[NEEDS INPUT: name the contractor, or state clearly that the contractor will be identified when they contact you. Pre-renter, this section cannot describe an arrangement that does not exist. See the same issue flagged on the about page.]

**Service providers.** The site uses third party services that process data on our behalf: [NEEDS INPUT: list actual services. Based on the existing portfolio stack this is likely Formspree for form handling, Twilio for call tracking, Supabase for call event storage, Cloudflare for DNS and email routing, and Google Analytics. Confirm and list each, with a link to its own privacy policy where practical.]

**What we do not do.** We do not sell your information. We do not add you to a marketing list. We do not share your details with advertisers, data brokers, or businesses other than the contractor handling your enquiry.

### How long we keep it

[NEEDS INPUT: set an actual retention period and apply it. A policy stating a period that is not enforced is worse than no stated period. Consider: enquiry records, call logs in Supabase, and analytics data may each warrant different periods.]

### Where it is stored

[NEEDS INPUT: confirm and disclose the storage location of each service used, including whether any data is stored or processed outside Australia. Supabase, Formspree, Twilio and Google Analytics may each hold data offshore. Overseas disclosure carries specific obligations and must be stated accurately.]

### Cookies and analytics

[NEEDS INPUT: confirm what is actually running on the site and describe it accurately. If Google Analytics is used, say so and explain what it does. If a cookie consent mechanism is required, implement it rather than describing one that does not exist.]

### Accessing or deleting your information

You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Contact [NEEDS INPUT: email address].

We will respond within [NEEDS INPUT: period consistent with whatever obligations apply once the question below is resolved].

### Complaints

If you are unhappy with how we have handled your information, contact us first at [NEEDS INPUT: email]. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at oaic.gov.au.

### Changes

We may update this policy. The current version is always the one on this page, with the date it was last updated at the top.

---

## Build notes

### The compliance flag, and it is a significant one

**A lead referral business may not qualify for the Privacy Act small business exemption.**

Businesses under the annual turnover threshold are generally exempt from the Privacy Act 1988, which is why most small trade websites run a light privacy policy. But the exemption has carve-outs, and one of them concerns businesses that disclose personal information about an individual to someone else for a benefit, service or advantage.

A rank-and-rent lead business collects a homeowner's personal details and passes them to a contractor who pays for that enquiry. On a plain reading, that looks like disclosing personal information for a benefit.

[VERIFY: obtain legal advice on whether the small business operator exemption under the Privacy Act 1988 applies to a lead referral business that passes enquirer details to a paying contractor. This is not a question to resolve from a blog or from a template privacy policy generator. Confirm also the current position following recent Privacy Act reforms, and confirm whether the answer differs where the contractor pays per lead versus a flat monthly fee.]

If the exemption does not apply, the Australian Privacy Principles apply in full, which brings obligations around collection notices, use and disclosure, overseas disclosure, data quality, security, access and correction, and a complaints process. That is a materially heavier compliance position than a template policy describes.

**This affects the whole portfolio, not just this site.** Perth Brickwork and Perth Limestone Group operate the same model and carry the same question. Worth resolving once, properly, and applying across all of them.

**It also intersects with the professional profile.** Operating a lead business with a privacy compliance gap, while running a compliance consultancy, is a bad combination if anyone connects the two. The ABN on the about page makes that connection available to anyone who looks. This is exactly the category of reputational exposure the portfolio was structured to avoid.

### Other notes

**Do not use a generated privacy policy without editing it.** Template generators produce documents describing practices the site does not have, and omitting practices it does. A policy that describes a cookie banner you have not built, or a retention period you do not enforce, is a statement that is not true.

**Every [NEEDS INPUT] here is a factual question about the actual stack.** They cannot be answered by drafting. Confirm what Formspree, Twilio, Supabase, Cloudflare and Google Analytics each collect, store and where, then write what is true.

**The call recording question is separate and sharper.** If calls are recorded at any point, disclosure and consent obligations apply independently of the Privacy Act question above.

**Schema:** none required.

**Internal links in:** footer sitewide, about page, contact page.

**Markers outstanding:** 1 x [VERIFY] (Privacy Act exemption, requires legal advice), 9 x [NEEDS INPUT]. `node bake.js --check` fails until cleared. This page should not go live in draft form even with markers stripped.

---


<!-- ===== PAGE 8 of 13 · source file: waterproofing-canberra.md ===== -->

# Waterproofing Canberra

**URL:** `/waterproofing-canberra/`
**Title tag:** Waterproofing Canberra | Bathroom & Wet Area Membranes (55 chars)
**Meta description:** Wet area waterproofing in Canberra explained. What the standard requires, why membranes fail, the certification you should receive, and what to check before tiling starts. (170 chars, trim to 155)

**Primary:** waterproofing canberra (110/mo, competition index 23)
**Secondary:** bathroom waterproofing canberra (10), shower waterproofing canberra, waterproofing contractors canberra, waterproofing cost per m2 (40)

---

## Waterproofing in Canberra

Waterproofing is the only part of a bathroom you pay for and never see.

Once the tiles go on, the membrane is sealed underneath them permanently. There is no inspecting it later, no topping it up, and no way to check whether it was done properly except by removing the finished surface. If it was done badly, you find out two or three years later when a skirting board swells in the next room.

That is what makes it different from every other line on a renovation quote. Everything else can be assessed after the fact. This cannot.

This page covers what wet area waterproofing actually involves, what the standard requires, what documentation you should end up holding, and the specific points to check while the work is still visible.

---

## Where waterproofing is required

Wet area waterproofing in Australian homes is governed by AS 3740, currently AS 3740:2021 Waterproofing of Domestic Wet Areas. [VERIFY: confirm this is the current version at standards.org.au. Multiple trade sources cite the 2021 edition but Standards Australia is the authority.]

The standard sets out where waterproofing is required and to what extent, and the requirements differ by area and by construction type. Broadly it covers:

- Shower areas, with the most extensive requirements of any wet area
- Bathroom floors, with the extent depending on whether the room is enclosed and how the shower is configured
- Laundries
- Areas over habitable spaces, where a failure has somewhere worse to go

[VERIFY: specific extent requirements under AS 3740:2021, including wall heights within and outside shower areas, and the treatment of timber versus concrete substrates. Source from the standard itself or from a membrane manufacturer's technical guide referencing it. Do not paraphrase specific dimensional requirements from a builder's blog.]

One requirement worth knowing because it is easy to check: the standard sets a minimum fall to waste in shower areas of 1:80. A shower floor that holds water rather than draining is not just annoying, it is outside the standard.

---

## Who can do it in the ACT

In the ACT, waterproofing must be carried out by a licensed waterproofer and certified on completion. [VERIFY: confirm current ACT licensing and certification requirements via Access Canberra construction occupations licensing. This is a regulatory claim and must be sourced directly rather than from a builder's marketing page. Confirm whether the requirement applies to all wet area work or only above a threshold, and confirm what form the certification takes.]

Many tilers also hold waterproofing qualifications, and on smaller jobs the same operator often does both. On larger renovations it is frequently a separate trade attending between the plumber and the tiler.

Either arrangement is fine. What matters is that whoever applies the membrane is licensed to, and that you receive the certification.

---

## Why waterproofing fails

**It was never applied properly.** Insufficient coverage, wrong number of coats, or inadequate detail at the junctions where the wall meets the floor. Junctions are where nearly all failures start, because that is where movement concentrates.

**The substrate was not prepared.** Membranes bond to what is underneath them. Dust, moisture, or an unsuitable surface means the membrane is sitting on the substrate rather than bonded to it.

**It was tiled over too early.** Membranes need a cure period before tiling, at minimum 24 to 48 hours and longer in cold conditions. Tiling over an uncured membrane compromises it. This is the corner most often cut on a job running late, and it is invisible afterwards.

**The puddle flange was not connected.** The puddle flange is the junction between the floor waste and the membrane. If the membrane is not properly bonded to it, water tracks straight past the drain and into the slab or subfloor. Common, and it cannot be fixed from the surface.

**Movement.** Buildings move. Membranes are designed to accommodate a degree of it, but movement joints have to be detailed correctly for that to work.

**Age.** Older homes may have a membrane that has reached the end of its service life, or in homes beyond a certain age, no membrane at all. [VERIFY: typical service life of a correctly installed wet area membrane. Source from a manufacturer technical datasheet such as Ardex or Mapei, cited to the specific product range rather than stated as a general figure.]

---

## New work and remedial work

**New waterproofing** is applied as part of a renovation or new build, after the plumbing rough-in and before tiling. It is the straightforward case, because everything is open and accessible.

**Remedial waterproofing** means an existing membrane has failed. This is the expensive case, because reaching the membrane means removing the tiles and screed above it. There is no way around that. Any product sold as a way to restore failed waterproofing from the surface is treating a symptom.

That distinction matters when you are comparing quotes. Waterproofing typically adds $500 to $1,000 to a bathroom as part of new work, and a Canberra tiler's published calculator allows $1,200. Remedial waterproofing repair runs materially higher, from around $500 to $2,500 depending on the area involved, before any tiling reinstatement. See the [cost guide](/tiling-cost-guide-canberra/) for the full breakdown and sources.

If your shower is already leaking, the question is not really about waterproofing pricing. It is about diagnosis first. See [leaking shower repair](/leaking-shower-repair-canberra/).

---

## Balconies and external areas

Balconies and decks over habitable space are waterproofed too, and failures there tend to be more expensive because the water has somewhere to go and something to damage on the way.

The exposure is different from a bathroom. External membranes deal with UV, thermal cycling and standing water rather than daily wetting, and the systems specified reflect that.

What this page does not cover is below-ground and structural waterproofing: basements, retaining structures, tanking, and remedial work on building envelopes. That is a separate discipline with different contractors, and a tiler is not who you want for it.

---

## The part most people miss: certification

This is the section worth reading twice.

Waterproofing is a concealed, regulated element of your home. The documentation proving it was done correctly is the only evidence that survives once the tiles are on.

That documentation matters at three points that feel distant when you are mid-renovation:

**Selling.** A buyer's building inspection may query wet area work, particularly on a recent renovation. Documentation answers the question. Its absence invites the discount.

**Insurance.** Water damage claims can turn on whether the work was carried out and certified appropriately.

**Warranty.** A membrane manufacturer's warranty generally depends on the product having been installed by an appropriately licensed applicator in accordance with their specification. No record of who applied it, and there is nothing to claim against.

Ask for it at the time. Reconstructing it two years later is difficult and sometimes impossible.

---

## What to check while it is still visible

You get one window to look at waterproofing, between application and tiling. Use it.

**Look at the junctions.** Wall to floor and internal corners should be visibly detailed, not simply coated over. This is where failures start.

**Look at the floor waste.** The membrane should be visibly connected into the puddle flange.

**Check the coverage.** The membrane should extend to the heights the specification calls for, not stop at a convenient line.

**Ask when it was applied and when tiling starts.** If the answer is same day or next morning in cold weather, ask about the cure time for the specific product used.

**Ask whether a flood test is being done.** Plugging the waste and filling the base confirms it holds water before anything is tiled over it. [VERIFY: confirm flood testing is standard or required practice for wet area waterproofing in Australian residential work, and the typical test duration. Source from AS 3740:2021 or a membrane manufacturer's installation guide.]

**Take photos.** Yours, not theirs. Five minutes with a phone before tiling starts is the cheapest insurance available on a renovation, and it is the record that answers questions years later.

---

## Frequently asked questions

**Do I really need waterproofing if I am only replacing tiles?**
If the existing membrane is intact and undisturbed, sometimes not. But removing tiles frequently damages the membrane beneath them, and a membrane at the end of its service life is worth replacing while the area is open. The realistic assessment happens once the tiles are off.

**Can waterproofing be done after tiling?**
No, not properly. The membrane goes under the tiles. Products applied over a finished surface are sealers, which is a different thing serving a different purpose.

**How long does waterproofing take?**
The application itself is quick. The cure time before tiling is what drives the schedule, at minimum 24 to 48 hours and longer in cold conditions, which is a real factor in a Canberra winter.

**Is grout or silicone waterproof?**
No. Grout is porous and water passes through it. Silicone at junctions is a movement joint and a wear item. Neither is the waterproofing layer, and neither substitutes for it. This is the single most common misunderstanding about bathrooms.

**What does waterproofing cost?**
As part of a new bathroom, generally $500 to $1,000, with one Canberra operator's published calculator allowing $1,200. Remedial work on a failed membrane costs more, and the tiling reinstatement above it is a separate cost again.

**How do I know if my waterproofing has failed?**
Damp appearing outside the bathroom is the clearest sign: swollen skirtings, lifting floorboards, damp carpet against a bathroom wall, or a stain on a ceiling below. Surface symptoms inside the bathroom alone are less conclusive.

**Should the same person do the waterproofing and the tiling?**
Either arrangement works, provided the person applying the membrane is licensed to. On smaller jobs one operator commonly does both. On larger renovations it is often a separate trade.

---

## Call to action

**Heading:** Waterproofing for a Canberra bathroom
**Body:** Tell us whether this is new work as part of a renovation, or an existing membrane you think has failed. Those are different jobs with very different costs, and it is the first thing anyone quoting will need to know.
**Buttons:** Get a Quote | Call [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix]

---

## Build notes

**Scope decision.** `waterproofing canberra` at 110 searches is a diffuse term covering wet areas, balconies, and below-ground remedial work. This page is scoped to wet areas, with a short balcony section and an explicit exclusion for structural and below-ground work. That exclusion is deliberate: it protects an eventual tiling renter from enquiries they cannot service, and it is honest about where the trade boundary sits. Expect it to cost some traffic on the broader term. That is the right trade.

**Renter fit check required.** Before this page goes live, confirm that a prospective Canberra renter holds waterproofing licensing. Tilers commonly do, and every competitor on the Canberra SERP bundles the two, but it is not universal. A page generating leads the renter cannot legally service is worse than no page.

**Cannibalisation control.** This page and `/leaking-shower-repair-canberra/` overlap on membrane failure and must stay in their lanes.
- This page: waterproofing as a system. What it is, where it is required, how it is applied, how it is certified. New work framing.
- Leaking shower page: an existing leak. Symptoms, diagnosis, repair options. Problem framing.
- The remedial section here hands off to the leaking shower page rather than duplicating the diagnostic content. Do not add a symptoms list to this page.

**The certification section is the differentiator.** No competitor on the Canberra SERP mentions documentation at all. It is genuinely useful, it is the kind of thing that gets cited, and it converts, because a homeowner who reads it becomes someone who asks for paperwork and therefore wants a contractor who provides it.

**Regulatory markers must not be cleared from secondary sources.** The ACT licensing claim and the AS 3740 extent requirements both came originally from Canberra builders' marketing pages. Source from Access Canberra and Standards Australia directly or cut the sections. Publishing a wrong regulatory requirement on a page whose entire value proposition is technical credibility is worse than omitting it.

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup.

**Internal links out**
- `/leaking-shower-repair-canberra/` (from the remedial section)
- `/tiling-cost-guide-canberra/` (from the cost section)
- `/bathroom-tiling-canberra/`
- `/regrouting-canberra/` (from the grout and silicone FAQ)

**Internal links in:** homepage services block, leaking shower repair page, bathroom tiling page, cost guide.

**Images:** Synthetic illustrative only. A cross-section diagram showing the membrane below the tiles and screed, with the junction and puddle flange detailed, would carry this page better than anything else and is reusable on the leaking shower page. No before and after imagery at Level 2.

**Claims deliberately absent at Level 2:** no licence claim of our own, no years of experience, no warranty offer, no certification promise, no response time, no reviews, no project photos.

**Markers outstanding:** 5 x [VERIFY], 1 x [NEEDS INPUT]. `node bake.js --check` fails until cleared. Three of the VERIFY markers are regulatory or standards claims and carry the highest correction cost if wrong.

---


<!-- ===== PAGE 9 of 13 · source file: regrouting-canberra.md ===== -->

# Regrouting Canberra

**URL:** `/regrouting-canberra/`
**Title tag:** Regrouting Canberra | Shower & Floor Grout Repair (52 chars)
**Meta description:** Regrouting in Canberra explained. When grout can be repaired, when it needs full replacement, cement versus epoxy, and how to spot a shortcut job. (149 chars)

**Primary:** regrouting canberra (20/mo, competition index 94)
**Secondary:** regrout shower canberra, grout repair canberra, regrouting cost (50)
**National support:** regrouting (880, CPC $11.08)

---

## Regrouting in Canberra

Grout is the part of a tiled surface that wears out first. It is porous, it sits in the lowest point of the surface where water and dirt collect, and it takes the movement that the tiles themselves cannot.

So grout failing is not a sign something went wrong. It is what grout does. The question is whether yours needs cleaning, repairing, or replacing, and those are three different jobs at three different prices.

---

## Which one do you actually need

Most people arrive at regrouting having already tried something that did not work. Here is how the options separate.

**Your grout is discoloured but intact**
This is a cleaning job, not a regrouting job. Cement grout is porous and absorbs soap residue, body oils and mineral deposits. Regrouting discoloured but sound grout is spending replacement money on a cleaning problem. Tile and grout cleaning is generally handled by cleaning specialists rather than tilers, and it is not something we take on.

**Your grout is cracked, crumbling, or missing in places**
This is regrouting territory, and the rest of this page is about it.

**The grout is fine but the corners have cracked**
Very common, and usually a sign the internal corners were grouted when they should have been siliconed. Covered below.

**You have damp appearing outside the bathroom**
Stop. Regrouting will not fix that, and doing it first wastes money and time. Water reaching adjacent rooms means the waterproofing membrane below the tiles has likely failed, and no amount of new grout seals a failed membrane. See [leaking shower repair](/leaking-shower-repair-canberra/) before booking anything.

That last one matters. Regrouting is often sold as a leak fix. It works as one only when the membrane underneath is sound.

---

## Why grout fails

**Normal wear.** Cement grout is a wear surface. It erodes, particularly in shower floors and high traffic areas.

**Movement.** Buildings move. Tiles are rigid, grout joints are where that movement concentrates, and hairline cracking follows.

**Wrong grout for the joint.** Grout is manufactured for different joint widths. Sanded grout is generally specified for wider joints and unsanded for narrow ones, because the sand provides bulk and resists shrinkage. [VERIFY: confirm the joint width threshold separating sanded from unsanded grout. Source from a manufacturer technical datasheet, for example Ardex or Mapei, and cite the specific product range rather than stating a universal figure.]

**Acidic cleaners.** This one catches a lot of people out. Cement based grout is attacked by acidic cleaning products, and a bathroom cleaner used regularly over years can erode the grout it is meant to be maintaining. [VERIFY: confirm which common household cleaner categories degrade cement grout. Source from a grout manufacturer's maintenance guidance, not from a cleaning product's marketing copy.]

**Poor original installation.** Grout applied too dry, joints not filled to full depth, or grouting done before the adhesive had cured. Failures from this show up early and usually across the whole surface at once rather than in patches.

---

## Partial or full regrout

**Partial** makes sense when failure is confined to one area, such as a shower floor while the walls are sound.

The catch is colour. New grout will not match aged grout, even using the same product and colour code, because the existing grout has years of wear and staining on it. A patched section stays visible. Anyone quoting a partial regrout should tell you that before they start rather than after.

**Full regrout** gives a uniform result and is the only sensible option when failure is widespread or when you are changing grout colour.

---

## Cement or epoxy

**Cement based grout** is the standard. Cheaper, easier to work with, available in a wide colour range, and straightforward to repair later. It is porous, so it stains and it needs sealing to resist that.

**Epoxy grout** is non porous, so it resists staining and chemical attack without sealing, and it holds colour far better over time. It costs more in both material and labour, because it has a short working time and has to be cleaned off the tile face before it sets. Done badly it leaves a haze on the tiles that is difficult to remove.

Epoxy is worth the difference in a shower floor or a kitchen splashback. Whether it is worth it across an entire floor is a budget decision. [VERIFY: current material cost difference between cement and epoxy grout per unit. Source from an Australian trade supplier price list. Do not state a multiple without a source.]

---

## What a proper regrout involves

This is worth knowing because the shortcut version is common and it fails within a year or two.

**Removal.** Old grout is raked out mechanically, not skimmed over. Applying new grout on top of old is the single most common shortcut, and it fails because the new layer is too thin to bond or hold up. [VERIFY: the minimum removal depth for a sound regrout. Source from a grout manufacturer's installation instructions, and state it as that manufacturer's specification rather than as a universal rule.]

**Cleaning out.** Joints vacuumed and cleaned so the new grout bonds to the tile edges rather than to dust.

**Grouting.** New grout worked into the joints to full depth, then cleaned off the tile face before it sets.

**Curing.** Grout needs to cure before the surface is wetted or sealed, and cure times lengthen in cold conditions, which is worth planning around in a Canberra winter. [NEEDS INPUT: typical cure time before the shower can be used, and before sealing. Source from the manufacturer datasheet for the grout actually being specified, and note the temperature dependency.]

**Sealing.** Cement grout benefits from sealing. Epoxy does not need it.

If a quote covers a full shower regrout in under a couple of hours, ask specifically how the old grout is being removed.

---

## Corners should be silicone, not grout

Internal corners, and the junction where the wall meets the floor, are movement joints. They need a flexible sealant, not a rigid one.

Grout in those junctions cracks. It is not a sign of a bad tiler necessarily, since it is a very common practice, but it is the wrong material for that location and the cracking will keep coming back regardless of how many times it is regrouted.

If your grout is failing only in the corners while the flat joints are sound, this is almost certainly why, and the fix is to cut it out and silicone it rather than to regrout the whole surface. That is a much smaller job and worth knowing before you accept a quote for the larger one.

---

## What regrouting costs in Canberra

[NEEDS INPUT: Canberra cost ranges. Do not publish estimates. Required before this section goes live:
 - Silicone replacement to corners only
 - Shower regrout, cement grout, standard shower
 - Shower regrout, epoxy grout, standard shower
 - Floor regrout, per square metre
 - Sealing, per square metre
Source in priority order: (1) direct quotes from Canberra operators, (2) published Canberra rate cards, (3) hipages or ServiceSeeking Canberra guides cited explicitly as third party estimates.
Do not substitute national averages and present them as Canberra pricing.]

Related reading: [Canberra Tiling Cost Guide](/tiling-cost-guide-canberra/)

---

## Frequently asked questions

**How long does regrouting last?**
It depends far more on the grout type and the conditions than on the job itself. Epoxy outlasts cement grout considerably. Cement grout in a daily use shower wears faster than the same grout on a hallway floor. [VERIFY: realistic service life ranges for cement and epoxy grout in wet area use. Source from manufacturer technical literature.]

**Can I regrout over existing grout?**
Not properly. The old grout has to be raked out first. Applying a thin layer over the top gives a good result for a few months and then breaks up, because the new material is too shallow to hold.

**Will regrouting stop my shower leaking?**
Only if the waterproofing membrane underneath the tiles is still sound. Grout is porous and was never the waterproofing layer. If water is reaching rooms outside the bathroom, the membrane is the problem and regrouting is a cosmetic fix on a structural failure. See [leaking shower repair](/leaking-shower-repair-canberra/).

**Why does my grout keep cracking in the same corner?**
Because that corner is a movement joint and it has been grouted instead of siliconed. Regrouting it will produce the same crack again. Cutting it out and sealing it with silicone is the actual fix.

**Can I change the grout colour?**
Yes, with a full regrout. Going darker is straightforward. Going lighter is harder, because any residue from the old grout shows through. There are also colour sealing products that stain existing grout rather than replacing it, which are cheaper but do not address grout that is physically failing.

**Is regrouting something I can do myself?**
The removal is the hard part, and it is where tiles get chipped. On a small area with sound tiles it is a reasonable DIY job. On a shower where the grout is failing because of a problem underneath, DIY regrouting mostly delays the diagnosis.

**Does new grout need sealing?**
Cement based grout does, and it should be resealed periodically after that. Epoxy grout does not, which is part of what you are paying for.

---

## Call to action

**Heading:** Get a straight answer on your grout
**Body:** Tell us where the grout is failing, whether it is cracked or just discoloured, and how old the tiling is. Those three things determine whether you need a clean, a corner reseal, or a full regrout, and they are very different jobs.
**Buttons:** Get a Quote | Call [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix]

---

## Build notes

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup.

**Cannibalisation control.** This page and `/leaking-shower-repair-canberra/` sit next to each other and will compete unless kept in their lanes.
- This page: grout as a material, why it fails, how it is replaced. Maintenance and restoration framing.
- Leaking shower page: water escaping the shower, membrane failure, diagnosis. Problem and repair framing.
- Both link to each other at the point of divergence, which is the "damp outside the bathroom" test. Neither should try to rank for the other's primary term.
- Do not add a "regrouting to fix leaks" section here. That is the leaking shower page's job and it is the reason the two would collide.

**Internal links out**
- `/leaking-shower-repair-canberra/` (twice, deliberately, at the two points where regrouting is the wrong answer)
- `/tiling-cost-guide-canberra/` (from the cost section)
- `/tile-repair-canberra/`

**Internal links in:** homepage services block, leaking shower repair page, tile repair page.

**Scope note:** tile and grout cleaning is deliberately not a service on this site, because cleaning is a different renter pool from tiling. The discoloured grout test in the routing block says so plainly rather than linking out. Do not add a cleaning page or a cleaning link later without revisiting the renter fit question.

**Images:** Synthetic illustrative only. A diagram showing correct removal depth versus a skim over would carry the "what a proper regrout involves" section and is explanatory rather than decorative. No before and after imagery at Level 2. Captions must not imply completed work by us.

**Claims deliberately absent at Level 2:** no years of experience, no licence claims, no warranty offer, no response time promise, no reviews, no project photos.

**Markers outstanding:** 5 x [VERIFY], 2 x [NEEDS INPUT]. `node bake.js --check` fails until cleared.

---


<!-- ===== PAGE 10 of 13 · source file: tile-removal-canberra.md ===== -->

# Tile Removal Canberra

**URL:** `/tile-removal-canberra/`
**Title tag:** Tile Removal Canberra | Floor & Wall Tile Strip Out (50 chars)
**Meta description:** Tile removal in Canberra. What drives the cost, what is left behind, the dust and asbestos risks in older homes, and when tiling over is the better option. (154 chars)

**Primary:** tile removal canberra (20/mo), floor tile removal canberra
**National support:** tile removal (880, CPC $5.68), tile removal cost (210)

---

## Tile Removal in Canberra

Tile removal is the stage everyone underestimates and nobody photographs. It is dusty, loud, heavy, and almost always takes longer than expected, because what is underneath the tiles is not known until they come off.

It is also the stage that determines what the rest of the job costs. A clean strip-out leaving a sound substrate means the tiler can get on with it. A strip-out that pulls the wall sheeting off with the tiles means a different job entirely.

This page covers what drives the cost, what you are actually left with, and two risks in older Canberra homes that are worth taking seriously.

---

## Should you remove the tiles at all?

Tiling over existing tiles is sometimes viable and it is worth asking about before assuming a strip-out.

**It can work when** the existing tiles are sound and well bonded, the surface is flat, and the height change at doorways, floor wastes and fixtures can be accommodated.

**It does not work when** tiles are drummy or loose, because you would be bonding to something that is already failing. It also does not work where the added height creates a problem, which in a bathroom it often does, because the floor waste and the door both sit at fixed levels.

**The catch nobody mentions:** tiling over a wet area leaves any waterproofing failure exactly where it is, now buried under two layers of tile instead of one. If the reason you are retiling is a leak, tiling over is not an option. See [leaking shower repair](/leaking-shower-repair-canberra/).

---

## What makes tile removal expensive

The tile is not the variable. The bond is.

**How well it was stuck down.** A tile laid on a proper adhesive bed to a clean slab comes off harder than one laid badly. Good original workmanship makes removal slower, which is a genuinely annoying inversion.

**What it is stuck to.** Tiles on a concrete slab generally come off leaving adhesive residue that has to be ground or scraped back. Tiles on wall sheeting frequently take the sheeting with them, in which case the wall is being replaced rather than cleaned up. Tiles on a timber floor bring their own questions about what the substrate is doing.

**How much adhesive is left.** Removing tiles is often the quick part. Removing the adhesive bed underneath is the slow, dusty part, and it is what stands between a stripped floor and a floor that is ready to tile.

**Access and containment.** In an occupied home, dust containment, floor protection and daily clean-down all take time. So does carrying heavy debris out through a house rather than throwing it into a bin outside a door.

**Volume and weight.** Tiles are heavy and tip fees are usually charged by weight rather than volume.

---

## What you are actually left with

This matters because it is the handover point between removal and tiling, and it is where quotes diverge.

"Tiles removed" and "ready to tile" are not the same thing. A substrate ready to tile means flat within tolerance for the tile going on, sound, clean, free of old adhesive, and with any damage repaired. Getting from one state to the other is preparation work, and whether it sits in the removal quote or the tiling quote is something to establish before either starts.

Ask directly: after removal, what condition will the surface be in, and who is responsible for getting it ready to tile.

---

## The dust problem

This is the part of tile removal that gets treated casually and should not be.

Tiles, tile adhesive, screed and concrete all contain crystalline silica. Cutting, grinding, chiselling and breaking them generates respirable crystalline silica dust, which is fine enough to reach deep into the lungs and is associated with serious and irreversible lung disease. Dry grinding adhesive off a slab is one of the higher exposure activities in domestic renovation work.

[VERIFY: confirm the current Safe Work Australia workplace exposure standard for respirable crystalline silica, the current regulatory position on silica work in construction, and any ACT-specific requirements via WorkSafe ACT. This is a health and safety claim and must be sourced from the regulator directly, not from a trade blog or a tool manufacturer's marketing. Confirm whether tile and adhesive removal falls within any notifiable or high risk silica work classification before implying that it does or does not.]

The controls are well established and they are the thing to ask about:

- **Water suppression or on-tool dust extraction.** Wet cutting, or a tool connected to an appropriately rated vacuum, rather than dry grinding into open air.
- **Respiratory protection.** A disposable dust mask from a hardware store is not the same thing as fitted respiratory protection.
- **Containment.** Sealing the work area so dust does not distribute itself through the rest of the house.

If you are doing this yourself, these are not optional extras. The dust is invisible at the size that matters and there is no immediate symptom to warn you. That is exactly what makes it dangerous.

If someone is doing it for you, ask how they control dust. It is a reasonable question and the answer tells you a lot.

---

## Asbestos in older homes

Asbestos containing materials were used in Australian residential construction into the late 1980s, and they turn up in tile removal in more than one form: in some tile adhesives, in vinyl floor tiles and their backing, and in wall and floor sheeting behind or beneath tiles.

The ACT carries additional legacy issues, including Mr Fluffy affected properties, and asbestos awareness here is generally higher than in other jurisdictions for that reason.

[VERIFY: confirm the relevant date threshold for asbestos containing materials in Australian residential construction, the forms most relevant to tile and floor covering removal, and current ACT requirements for identification, licensed removal and disposal. Source from WorkSafe ACT and the Asbestos Safety and Eradication Agency directly. This is a safety and regulatory matter and must not be published from a secondary source or from memory.]

The practical position: if the home was built before the relevant period and you are disturbing adhesive, sheeting or old floor coverings, identification comes before demolition, not after. This is the single strongest argument against a DIY strip-out in an older Canberra home.

---

## Disposal

Tile waste is heavy and disposal is usually charged by weight. A bathroom strip-out produces more material than people expect, and a Canberra tiler's published calculator allows $800 for rubbish removal on a bathroom alongside $1,500 for the demolition itself.

Establish who is taking the waste away and whether tip fees are included, because it is a line that gets left out of quotes and then appears later.

Asbestos containing material cannot go to general waste and has its own disposal requirements.

---

## Doing it yourself

Tile removal is one of the more genuinely DIY-able parts of a renovation, in the sense that it is unskilled labour rather than trade work. Whether it is a good idea depends on three things.

**The age of the house.** If asbestos is a possibility, get it identified first. This is not a corner to cut.

**Dust control.** See above. The tooling that controls silica dust properly is not what most people have in a shed.

**What you leave behind.** Removing tiles is easy. Getting a substrate genuinely ready to tile is not, and a tiler arriving to a floor with adhesive residue still on it will either charge to fix it or decline the job. If you are doing the strip-out to save money, agree with the tiler beforehand what condition they need the surface in.

The saving is real but smaller than it looks, because the slow part is the preparation rather than the demolition.

---

## What tile removal costs

Removal is generally quoted separately from tiling, and it varies more than almost any other line because the bond and the substrate are unknown until work starts.

A Canberra tiler's published bathroom calculator allows $1,500 for demolition and $800 for rubbish removal. National figures put tile removal cost in a broad range depending on area, substrate and whether adhesive grinding is included. Full breakdown and sources in the [Canberra tiling cost guide](/tiling-cost-guide-canberra/).

The two questions that move the number most: is adhesive removal included, and who pays for tip fees.

---

## Frequently asked questions

**How much does tile removal cost?**
It is usually quoted separately from tiling and varies widely with the substrate and how well the tiles were originally bonded. A Canberra operator's published bathroom calculator allows $1,500 for demolition and $800 for waste removal. The two things that move the price are whether adhesive grinding is included and who covers tip fees. See the [cost guide](/tiling-cost-guide-canberra/).

**Can I tile over existing tiles instead of removing them?**
Sometimes, if the existing tiles are sound and well bonded and the height change works at doorways and fixtures. In a wet area it also means any waterproofing failure underneath stays buried, so it is not an option if the reason you are retiling is a leak.

**Will removing wall tiles damage the wall?**
Frequently, yes. Tiles bonded to plasterboard or wall sheeting often take the surface with them, and the wall ends up being replaced rather than repaired. Tiles on a rendered or masonry wall usually come off leaving adhesive to be removed.

**Is tile removal dusty?**
Very, and the dust matters. Tiles, adhesive and screed contain crystalline silica, and grinding or breaking them dry produces fine respirable dust associated with serious lung disease. Water suppression, on-tool extraction and proper respiratory protection are the controls. Ask what a contractor uses.

**Do I need to worry about asbestos?**
In homes built before the late 1980s it is a real possibility, in tile adhesives, vinyl tiles and sheeting. Identification should happen before demolition, not after. This is the strongest reason not to DIY a strip-out in an older home.

**How long does tile removal take?**
Removing the tiles is often quicker than removing the adhesive underneath them. The second stage is what determines whether the surface is actually ready to tile.

**Can I remove the tiles myself and have a tiler do the rest?**
Yes, and it does save money, though less than it appears because the slow part is preparation rather than demolition. Agree with the tiler in advance what condition they need the substrate in, otherwise you may pay them to redo it.

---

## Call to action

**Heading:** Tile removal in Canberra
**Body:** Tell us what is being removed, what it is stuck to, and roughly when the house was built. That last one matters, because in older homes identification comes before demolition.
**Buttons:** Get a Quote | Call [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix]

---

## Build notes

**Best commercial profile of the service pages.** `tile removal` at 880 nationally with a $5.68 CPC and only MEDIUM competition, plus `tile removal cost` at 210 with LOW competition. Roughly four times the click value of bathroom tiling at lower competition. Worth more attention than its local volume of 20 suggests.

**The silica section is the strongest differentiator on the site so far.** No Canberra competitor mentions dust at all beyond noting that the job is messy. It is genuinely useful, it is a real health issue, it is highly citable, and it is the kind of content that attracts links from outside the trade, which matters given the structural ceiling on pre-renter link building. It also converts, because a homeowner who reads it stops considering a DIY strip-out.

**Both major markers are safety and regulatory claims.** Silica exposure standards and asbestos requirements must come from Safe Work Australia, WorkSafe ACT and the Asbestos Safety and Eradication Agency directly. Not from a tool manufacturer, not from a trade blog, not from a competitor's page. If either cannot be sourced confidently, keep the practical advice about controls and identification and drop the regulatory specifics entirely rather than approximating them. Getting a safety claim wrong on a page that homeowners may act on is the worst failure mode available here.

**The DIY section is deliberate and slightly against interest.** It tells readers they can do part of this themselves. That is honest, it is the same posture as the corner silicone advice on the regrouting page, and it earns the credibility that makes the rest of the site believable. It also filters: someone who reads it and still enquires wants the job done properly.

**Cannibalisation control.** Overlaps with the cost guide on demolition and disposal, and with bathroom tiling on substrate preparation. Keep cost references to a sentence and link out. Do not add a substrate preparation section here; that belongs on the bathroom tiling and cost guide pages.

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup.

**Internal links out**
- `/tiling-cost-guide-canberra/` (twice)
- `/leaking-shower-repair-canberra/`
- `/bathroom-tiling-canberra/`

**Internal links in:** homepage routing block and services block, bathroom tiling page, cost guide.

**Images:** Synthetic illustrative only. A diagram contrasting tiles removed from a slab (adhesive residue remaining) against tiles removed from wall sheeting (sheeting destroyed) would carry the "what you are actually left with" section. Do not illustrate anyone working without visible dust control, since the page argues for it.

**Claims deliberately absent at Level 2:** no licence claims, no asbestos removal capability claim, no years of experience, no warranty, no response time promise, no reviews, no project photos.

**Do not imply we remove asbestos.** Licensed asbestos removal is a separate regulated activity. The page identifies the risk and points to identification. It must not read as an offer to handle it.

**Markers outstanding:** 2 x [VERIFY] (silica regulatory position, asbestos requirements), 1 x [NEEDS INPUT] (Twilio number). `node bake.js --check` fails until cleared. Both VERIFY markers are safety claims and carry the highest correction cost on the site.

---


<!-- ===== PAGE 11 of 13 · source file: tile-repair-canberra.md ===== -->

# Cracked and Loose Tile Repair Canberra

**URL:** `/tile-repair-canberra/`
**Title tag:** Tile Repair Canberra | Cracked, Loose & Drummy Tiles (51 chars)
**Meta description:** Drummy, loose or cracked tiles explained. How to test them yourself, what the cause usually is, when it matters, and what repair actually involves. (147 chars)

**Primary:** tile repair canberra (20/mo, CPC $7.01, competition 77)
**National support:** drummy tiles (480, competition index 10), loose tiles repair (50)
**Secondary:** cracked tile repair canberra, tile replacement canberra

---

## Cracked, Loose and Drummy Tiles

Most people arrive here because a tiler tapped their floor, said the word "drummy", and left them to work out what that meant.

It means the tile has separated from whatever it was stuck to. The tile itself is usually fine. The bond underneath it is not.

Whether that matters depends on where it is, how much of the floor is affected, and what caused it. Sometimes it is cosmetic and can be left. Sometimes it is the first visible sign of something that will get expensive. This page covers how to tell the difference.

---

## What "drummy" means, and how to check yourself

A drummy tile sounds hollow when tapped, because there is a void between the tile and the substrate instead of solid adhesive.

You can test it in about two minutes. Tap across the floor with a knuckle, a coin, or the handle of a screwdriver, and listen. A well bonded tile gives a solid, dull sound. A drummy tile rings hollow. The difference is obvious once you have heard both, and you do not need any skill to hear it.

Worth doing methodically rather than randomly. Map where the hollow tiles are, because the pattern tells you more than the count.

**Scattered individual tiles** across an otherwise sound floor usually means patchy adhesive coverage during installation.

**A contiguous area** spreading outward usually means something is actively causing it: movement, water, or a substrate problem.

**Tiles along a wall or perimeter** often points to missing or inadequate movement joints.

**Everything sounds drummy** may mean the substrate itself is the issue, or that the tiles were laid over something unsuitable.

---

## Does drummy always need fixing?

No, and anyone who tells you every hollow tile must come up is overselling.

Some drumminess is tolerated in ordinary domestic floors, particularly isolated tiles in low traffic areas that are not cracking, lifting or moving. The tile can sit there for years.

It matters considerably more when:

- **It is in a wet area.** A void under a tile in a shower or bathroom floor is somewhere water can sit, and it often indicates the problem is moisture related rather than adhesive related.
- **It is spreading.** Compare against your map in a few months. Growth means an active cause.
- **The tiles are also cracking or lipping.** Unsupported tiles crack under load, and a drummy tile that has started to crack will not stop.
- **It is underfoot in a main traffic area.** Repeated loading on an unsupported tile eventually breaks it.
- **You are about to sell.** A building inspector will tap the floors.

---

## Why tiles come loose

**Insufficient adhesive coverage.** The most common cause. Adhesive applied as dabs or spots rather than a properly notched full bed leaves voids from day one. The tiles hold for a while, then fail progressively. [VERIFY: confirm the Australian Standard governing ceramic tile installation, which is understood to be the AS 3958 series, and confirm what it specifies regarding adhesive coverage for internal floors and for wet areas. Source from Standards Australia or an adhesive manufacturer's technical literature referencing it. Do not state a coverage percentage without confirming it.]

**Movement, with nowhere for it to go.** Buildings expand, contract and settle. Tiled surfaces need movement joints at perimeters and at intervals across large areas so that movement is absorbed at designed points rather than by the adhesive bond. Domestic tiling frequently omits them, and the result shows up years later as debonding along walls or tenting in the middle of a floor. [VERIFY: confirm movement joint requirements and spacing intervals under the applicable standard. Same sourcing requirement as above.]

**Water.** Moisture reaching the adhesive bed degrades the bond over time. This is why drummy tiles in a bathroom are treated more seriously than drummy tiles in a hallway, and why they are frequently the first visible symptom of a waterproofing problem. See [leaking shower repair](/leaking-shower-repair-canberra/).

**The wrong adhesive, or the wrong substrate.** Tiling over a surface the adhesive was not designed to bond to, or over an existing surface that was itself unsound. Tiling over old tiles inherits whatever was going on underneath them.

**Substrate movement.** Timber floors flex. Concrete slabs shrink as they cure and can continue moving for a long time after. A rigid tiled surface bonded to a moving substrate will eventually let go somewhere.

---

## Why tiles crack

Cracking has different causes from debonding, and the pattern usually tells you which you are dealing with.

**A single cracked tile, radiating from a point.** Impact damage. Something heavy was dropped. Straightforward, and a single tile replacement is the fix.

**A crack running in a straight line across several tiles, continuing through the grout.** This is the one that matters. It means the substrate underneath has cracked and the tiles are simply following it. Replacing the tiles achieves nothing, because the new ones will crack along the same line. The substrate crack has to be addressed first, and if it is structural, that is a different conversation entirely and not a tiling job.

**Cracking at a perimeter or in a line across a large floor.** Often movement with no joint to accommodate it.

**Hairline cracks in the glaze only, in a fine network.** Crazing, which is a defect in the tile itself rather than an installation problem.

**Cracking following a drummy area.** An unsupported tile flexing under load until it fails.

---

## Repair options, and the matching problem

**Individual tile replacement.** The affected tiles are cut out, the substrate cleaned back, and new tiles bedded and grouted. Practical for isolated damage.

**Section replacement.** A defined area lifted and relaid. Sensible when a contiguous zone has failed.

**Full re-lay.** When the failure is widespread, or when the cause is the substrate rather than the tiles.

The problem in every case is matching. Even where the tile is still available, dye lots vary between production runs, and an existing floor has years of wear and light exposure on it. A replacement tile that is technically the same product can be visibly different.

If the tile has been discontinued, the options narrow quickly: source from a tile recycler or clearance stock, take tiles from a concealed location such as under a vanity or inside a cupboard and patch that spot instead, or accept a deliberate contrast.

This is the strongest argument for keeping spare tiles from the original job. If you are having tiling done now, keep the offcuts and the spare box somewhere you will find them in ten years.

---

## When it points to something bigger

Three situations where the tiles are a symptom rather than the problem:

**Drummy or cracked tiles in a shower or bathroom floor** frequently indicate moisture in the adhesive bed, which points at the waterproofing rather than the tiling. Repairing the tiles without addressing that means doing it again. See [waterproofing](/waterproofing-canberra/).

**A straight crack running across multiple tiles and their grout lines** is the substrate cracking. Whether that is shrinkage, movement or something structural needs establishing before anything is retiled.

**Tiles tenting or lifting at a joint** means the tiled surface is under compression with nowhere to expand. That is a movement joint problem and relaying without addressing it repeats the failure.

---

## What tile repair costs

Individual tile replacement is a small job, but the variables are access, whether matching tiles exist, and whether the underlying cause needs addressing first.

The last one is what moves the price. Replacing four cracked tiles is inexpensive. Establishing that they cracked because the slab moved, or because water has been sitting under them, changes the job.

See the [Canberra tiling cost guide](/tiling-cost-guide-canberra/) for the full picture with sources.

---

## Frequently asked questions

**What does "drummy" mean?**
A drummy tile sounds hollow when tapped, because the bond between the tile and the substrate has failed and there is a void underneath. The tile itself is usually undamaged. It is Australian trade shorthand and you will hear it from any tiler.

**How do I check for drummy tiles?**
Tap across the surface with a knuckle, a coin or a screwdriver handle and listen. Solid tiles sound dull, drummy tiles ring hollow. Map where they are, because the pattern matters more than the number.

**Do drummy tiles have to be replaced?**
Not always. Isolated drummy tiles in a dry, low traffic area that are not cracking or moving can often be left. It matters much more in a wet area, where the void is somewhere water can sit, or where the affected area is spreading.

**Why do tiles come loose?**
Most commonly insufficient adhesive coverage at installation, adhesive applied as dabs rather than a full bed. Other causes are movement with no joints to accommodate it, moisture degrading the bond, and substrate movement.

**My tiles cracked in a straight line across the floor. Why?**
Almost certainly because the substrate underneath cracked and the tiles followed it. Replacing the tiles will not fix it, because new tiles will crack along the same line. The substrate has to be addressed first.

**Can you replace just one tile?**
Yes, technically. The difficulty is matching. Dye lots vary between production runs and an existing floor has wear and light exposure the new tile does not. If the tile is discontinued, taking a replacement from a concealed spot such as under a vanity is often the neatest solution.

**Are drummy tiles a sign my shower is leaking?**
Not on their own, but in a wet area they are a reason to look further. Water in the adhesive bed degrades the bond, so drummy tiles in a bathroom are often the first visible sign of a waterproofing problem rather than an adhesive one.

**Should I be worried if my tiles are lifting or tenting?**
Yes. That means the tiled surface is under compression with nowhere to expand, which is a movement joint problem. Relaying without addressing the cause repeats the failure.

---

## Call to action

**Heading:** Cracked or drummy tiles in Canberra
**Body:** Tell us roughly how many tiles are affected, whether they are scattered or clustered, and whether they are in a wet area. Those three answers separate a small repair from a symptom of something else.
**Buttons:** Get a Quote | Call [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix]

---

## Build notes

**`drummy tiles` is the reason this page exists.** 480 national searches at competition index 10, the lowest competition on anything with real volume in the dataset. It is trade slang a homeowner hears and immediately searches, the intent is purely informational, and nobody has written a proper answer. This page should own the term.

**This page owns "drummy" and the others must defer to it.** The leaking shower repair page and the regrouting page both reference drummy tiles in passing. Those references stay brief and link here. Do not expand the drummy explanation anywhere else on the site.

**The tap test is the most linkable element.** It gives the reader something to do in two minutes with no tools, and it produces information they did not have. Self-diagnostic content of that kind gets shared and cited in a way that service copy never does.

**The honesty in "does drummy always need fixing" is deliberate.** Telling readers that isolated drummy tiles can often be left is against immediate commercial interest and it is the correct answer. It is the same posture as the corner silicone advice on the regrouting page and the DIY section on tile removal. Cumulatively those are what make the site credible in a niche where every competitor claims everything is urgent.

**Cannibalisation control.**
- This page: tiles that have debonded or cracked. Diagnosis by pattern, causes, repair options, matching.
- Leaking shower page: an existing leak, symptoms and diagnosis.
- Regrouting page: grout as a material and its replacement.
- Waterproofing page: the membrane as a system.
Each of the three "points to something bigger" items links out rather than explaining the other page's subject here.

**Both VERIFY markers relate to the tile installation standard.** Understood to be the AS 3958 series, covering adhesive coverage and movement joint requirements. Source from Standards Australia or an adhesive manufacturer's technical literature. Do not state a coverage percentage or a joint spacing interval without confirming it. If they cannot be sourced, the causes remain valid described qualitatively and the standard reference should be dropped rather than approximated.

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup.

**Internal links out**
- `/leaking-shower-repair-canberra/`
- `/waterproofing-canberra/`
- `/tiling-cost-guide-canberra/`
- `/regrouting-canberra/`

**Internal links in:** homepage routing block, leaking shower repair page, regrouting page, tile removal page.

**Images:** Synthetic illustrative only. A diagram showing the four drummy patterns (scattered, contiguous spreading, perimeter, whole floor) mapped on a floor plan would be the most useful image on the site, because it turns the diagnostic section into something a reader can match against their own floor. A second diagram contrasting impact cracking with substrate cracking across multiple tiles would carry the cracking section.

**Claims deliberately absent at Level 2:** no licence claims, no years of experience, no warranty, no response time promise, no reviews, no project photos, no tile matching or sourcing capability claim.

**Markers outstanding:** 2 x [VERIFY] (AS 3958 adhesive coverage, movement joint requirements), 1 x [NEEDS INPUT] (Twilio number). `node bake.js --check` fails until cleared.

---


<!-- ===== PAGE 12 of 13 · source file: tiling-quote-checklist-canberra.md ===== -->

# Tiling Quote Checklist

**URL:** `/tiling-quote-checklist-canberra/`
**Title tag:** Tiling Quote Checklist | Questions to Ask Before You Sign (56 chars)
**Meta description:** A printable checklist of the questions that make tiling quotes comparable, and the ones that stop a variation appearing halfway through the job. (143 chars)

**Primary:** informational, supports the cost guide cluster
**Format:** standalone printable checklist, not an article

---

## Tiling Quote Checklist

Three quotes for the same bathroom can be thousands apart without anyone being unreasonable. Usually they are not quoting the same job.

This checklist makes them comparable. Print it, take it to each quote, and write the answers next to the questions.

*[Print this page]* *[Download PDF]* [NEEDS INPUT: decide whether to offer a PDF. A print stylesheet is simpler, has no maintenance cost, and avoids gating. Do not put this behind an email capture. Gated checklists do not get linked to, and links are the reason this page exists.]

---

## Before you ask anyone to quote

☐ **Decide the tile first, or tell everyone to price the same one.** Size, material and layout pattern all change the labour, not just the material cost. Three quotes on three different tiles tell you nothing.

☐ **Write the scope down.** One paragraph describing what you want done. Give the identical paragraph to everyone.

☐ **Measure the area, roughly.** You do not need it exact. You need it consistent across quotes.

☐ **Know how old the house is.** Relevant for asbestos in older homes, where identification comes before any demolition.

---

## Scope: what is included

Ask about each line specifically. "Everything" is not an answer.

☐ Demolition and removal of existing tiles

☐ Disposal, including tip fees

☐ Removal of old adhesive from the substrate

☐ Substrate preparation, levelling and screeding

☐ Waterproofing, if it is a wet area

☐ Who certifies the waterproofing

☐ Tile supply, or is that mine to arrange

☐ Adhesive and grout, and which type

☐ Trims and edging to external corners

☐ Silicone to junctions

☐ Sealing, if the tile or grout needs it

☐ Final clean and rubbish removal

---

## Variations: what happens when something turns up

The most important section here, and the one most people skip. Substrate problems are the most common variation on any tiling job and they are invisible until the old surface comes off.

☐ **What happens if the substrate is worse than expected?**

☐ **Are variations priced at an agreed rate, or quoted at the time?**

☐ **Does work stop for my approval before extra cost is incurred?**

☐ **What is the most common variation you see on jobs like this?**

A quote that anticipates variations comes from someone who has been caught by one before. That is a good sign, not a warning.

---

## Tiles and ordering

☐ **Who is measuring for the order?**

☐ **What wastage allowance is included?** More is needed for diagonal and herringbone layouts than straight set.

☐ **Who is responsible if the order falls short?**

☐ **What is the lead time?** Imported tiles can take a while.

☐ **Am I keeping the spares?** Keep them. If a tile cracks in five years, a matching replacement is worth more than the storage space.

---

## Wet areas only

☐ **Who is applying the waterproofing, and are they licensed to?**

☐ **What documentation will I receive on completion?**

☐ **What is the cure time for the membrane before tiling starts?**

☐ **Is a flood test being done?**

☐ **Can I see the waterproofing before it is tiled over?**

That last one is the only chance you get. Once the tiles are on, the membrane is sealed underneath permanently and there is no inspecting it. Take photos yourself before tiling starts.

---

## Repairs only

☐ **What is the diagnosed cause?** Grout failure, silicone failure, membrane failure, waste seal failure, or a plumbing leak. A quote without a diagnosis is a guess with a price on it.

☐ **How was that established?**

☐ **Has this been repaired before?** If a shower has been repaired twice and leaked twice, the membrane is the likely cause and a surface repair will not hold.

☐ **What happens if this repair does not fix it?**

---

## Schedule

☐ How many days on site

☐ How many separate visits

☐ What has to be finished by other trades first

☐ How long the waterproofing needs to cure

☐ When can you start

---

## The paperwork

☐ **Written and itemised.** A single total cannot be compared, cannot be checked, and gives you nothing to point at when a variation appears.

☐ **Payment schedule.** What is due when.

☐ **Licence and insurance details.**

☐ **Waterproofing certification**, for wet areas.

---

## Comparing what comes back

☐ **Is one quote significantly lower?** The useful question is not why it is cheaper. It is what it does not include.

☐ **Do all three cover the same scope items?** Go line by line against the scope list above.

☐ **Has anyone raised something the others did not?** Whoever mentions a problem the others missed has usually looked harder.

☐ **Did anyone tell you something you did not want to hear?** That is worth more than the cheapest number.

---

Full context on what drives tiling costs, and what the published Canberra figures actually say, in the [Canberra tiling cost guide](/tiling-cost-guide-canberra/).

---

## Build notes

**This is a link asset, not a lead page.** It exists to be bookmarked, printed and linked to. Judge it on links and referring domains, not on conversions. Keep the CTA minimal and do not gate it behind an email capture, because gated resources do not attract links and links are the entire purpose.

**Why a separate page rather than a section of the cost guide.** Checklists get shared in a way that sections inside a 2,500 word guide do not. A distinct URL can be linked to directly, printed cleanly, and referenced in a forum reply. The content already existed, so the marginal cost is close to zero.

**Print stylesheet is the priority, not a PDF.** A clean print view has no maintenance cost and no gating. A PDF adds a file to keep in sync with the page. If a PDF is offered later, it must not sit behind a form.

**The checkbox format is load bearing.** It is what makes this a tool rather than an article. Preserve the boxes in the build, using proper list markup rather than literal characters where possible, and make sure they survive the print stylesheet.

**Distribution, since this is the asset that justifies itself through links.** Realistic outreach targets pre-renter: Australian home renovation forums where "how do I compare tiling quotes" is asked repeatedly, Canberra community groups, and consumer-side renovation resources. This is one of the few genuinely linkable things a Level 2 site can produce, because it helps homeowners rather than promoting a business. The same is true of the drummy tile tap test on the [tile repair page](/tile-repair-canberra/) and the silica section on the [tile removal page](/tile-removal-canberra/). Those three are the site's entire pre-renter link building inventory.

**Do not add cost figures to this page.** They belong on the cost guide and duplicating them splits the cluster. This page links there once, at the end.

**Schema:** Organisation. Consider HowTo only if it genuinely fits, which is arguable for a checklist rather than a procedure. Do not force it. No FAQPage here, since the content is not in question and answer form.

**Internal links out:** `/tiling-cost-guide-canberra/`

**Internal links in:** cost guide (from the quote comparison section), homepage routing block under budgeting.

**Markers outstanding:** 1 x [NEEDS INPUT] (PDF decision). Lowest marker count on the site and the closest to publishable.

---


<!-- ===== PAGE 13 of 13 · source file: bathroom-tiling-canberra.md ===== -->

# Bathroom Tiling Canberra

**URL:** `/bathroom-tiling-canberra/`
**Title tag:** Bathroom Tiling Canberra | Wall & Floor Tiling (46 chars)
**Meta description:** Bathroom tiling in Canberra. Choosing tiles that work in a wet area, the layout decisions that drive cost, and where tiling fits in a bathroom job. (146 chars)

**Primary:** bathroom tiling canberra / bathroom tiler canberra (70/mo clustered)
**National support:** bathroom tiling (9,900)
**Secondary:** shower tiling canberra

---

## Bathroom Tiling in Canberra

A bathroom is the hardest room in the house to tile well. It is small, so almost every tile is a cut. It is a wet area, so waterproofing sits underneath everything. It has more penetrations per square metre than any other room. And the falls have to work, or the floor holds water.

It is also the room where the decisions get made fastest and regretted longest. Tile size, layout, grout colour and slip rating all get chosen in a showroom in an afternoon, and they determine what the room looks like and how it performs for the next twenty years.

This page covers the choices that actually matter, and what a bathroom tiling job involves.

---

## What a bathroom tiling job includes

Tiling is one stage of a bathroom, not the whole thing. A tiling scope usually covers:

- Removing existing tiles and adhesive, and disposing of them
- Preparing the substrate: levelling, screeding, patching, and establishing falls
- Waterproofing the wet areas, or coordinating with whoever does
- Setting out and laying wall and floor tiles
- Detailing niches, hobs, steps and external corners
- Grouting, and silicone to the movement junctions
- Sealing, where the grout or tile requires it

What it does not cover is plumbing, electrical, plastering, painting, or supplying and fitting the vanity, screen and tapware. Those are other trades. If you are doing a full renovation, someone needs to coordinate all of them, and that is a builder's job rather than a tiler's.

---

## Choosing tiles that work in a bathroom

Showrooms sell on appearance. These are the things appearance does not tell you.

### Slip resistance

Bathroom floors get wet, and tile slip resistance is measured and rated rather than guessed at. Slip resistance of pedestrian surfaces in Australia is tested under AS 4586, which produces a rating you can ask for by name.

[VERIFY: confirm the current version of AS 4586 and the rating scale it produces. Confirm what, if anything, is required for domestic bathroom floors and shower areas as distinct from commercial or public surfaces, and whether HB 198 is the applicable selection guidance. Source from Standards Australia or a tile supplier's technical documentation. Do not state a specific required rating without confirming it, and do not present a commercial requirement as a domestic one.]

The practical point stands regardless of the exact figure: ask the supplier for the slip rating of the tile you are considering, and ask specifically about the shower floor, which is the wettest surface in the house and often the smallest tile. Polished and highly glazed tiles that look good on a wall can be a poor choice underfoot in a wet room.

### Size, and why smaller often wins on a shower floor

Large format tiles are popular and they look good, but they are difficult in a small wet room for two reasons.

First, they need a flatter substrate, because any deviation shows as lipping at the edges. In a bathroom that usually means additional levelling.

Second, a shower floor needs a fall to the waste, and a rigid large tile cannot follow a fall in two directions. Smaller tiles and mosaics accommodate the fall because there are more joints to absorb the change in plane. That is why shower floors are often a smaller tile than the rest of the room even when it was not the design intent.

### Finish

Matt and textured finishes hide water spotting and soap residue better than polished ones. Polished tiles show everything, including every drip, which is a maintenance question rather than an aesthetic one.

### Grout colour

Light grout in a shower will not stay light. It is a porous material in the wettest place in the house. Mid tones are far more forgiving, and epoxy grout holds colour considerably better than cement based grout without needing sealing. See [regrouting](/regrouting-canberra/) for the difference between the two.

---

## The decisions that drive the cost

**Layout pattern.** Straight set is the baseline. Herringbone and chevron add cuts on nearly every perimeter tile and require exact setting out from the first tile, because any error compounds across the room.

**Floor to ceiling, or partial height.** Tiling walls to the ceiling costs more in tile and labour than stopping at a tiled dado or shower height. It also changes how the room reads.

**Niches.** A shower niche is a small feature with a lot of work in it: framing, waterproofing detail, a fall in the base, and mitred or trimmed edges. Worth having, worth knowing it is not free.

**Hob or hobless.** A hobless walk-in shower has more membrane area and more complex drainage falls than a step-up hob design. It looks better and it costs more.

**How level the floor is.** Unknown until the old surface comes off, and frequently the largest single line on a renovation. Screeding and levelling run around $15 to $30 per square metre.

**Whether the tile is here.** Imported tiles carry lead times. Running short mid-job on a discontinued line is a serious problem, which is why the order includes a wastage allowance rather than the bare floor area.

Full breakdown with sources in the [Canberra tiling cost guide](/tiling-cost-guide-canberra/).

---

## Waterproofing comes first

In a wet area the membrane goes on before the tiles and stays there permanently. Once tiling starts, there is no inspecting it, adjusting it, or adding to it.

That makes the window between waterproofing and tiling the only chance to check the most important part of the job. It is also the stage most often compressed when a renovation is running late, because membranes need cure time and cure times lengthen in the cold.

If you take one thing from this page: look at the waterproofing before it disappears, and get the certification. [More on waterproofing](/waterproofing-canberra/).

---

## Where tiling sits in a bathroom renovation

Roughly: demolition, plumbing and electrical rough-in, substrate preparation, waterproofing, cure, tiling, grouting, then fit-off of the vanity, screen and tapware.

Tiling sits in the middle, which means it is dependent on everything before it and blocking everything after it. If the rough-in is not finished, the tiler waits or comes back, and return visits get priced accordingly.

A typical Canberra bathroom runs three to five weeks end to end, and the tiling is a fraction of that. Substrate preparation and waterproofing cure time drive the schedule more than laying does.

---

## What goes wrong in bathroom tiling

**Falls that do not work.** Water sitting on a shower floor rather than draining. Hard to correct afterwards without removing the floor.

**Waterproofing rushed or tiled over early.** Invisible once tiled, expensive when it surfaces. See [leaking shower repair](/leaking-shower-repair-canberra/).

**Grout used in movement junctions.** Internal corners and the wall to floor junction need silicone, not grout. Grout in those positions cracks, and it keeps cracking however many times it is replaced.

**Setting out started from the wrong point.** Cuts landing badly at eye level, or a slim sliver of tile in the most visible corner. Costs nothing to get right and cannot be fixed later.

**Large format tile on a floor that was not levelled for it.** Lipping at the edges, which is both a trip hazard and permanently visible.

---

## Frequently asked questions

**How much does bathroom tiling cost in Canberra?**
A Canberra tiler's published rate card puts bathroom tiling labour at $85 per square metre floor to ceiling, with tile supply from around $50 per square metre. National figures for bathroom floor tiling supply and install sit near $85 per square metre and wall tiling near $95. A small 5 to 8 square metre bathroom often lands around $2,000 to $3,500 for tiling including materials. Sources in the [cost guide](/tiling-cost-guide-canberra/).

**Why is a small bathroom expensive per square metre?**
Because it is mostly edges, cuts and detail around the floor waste, vanity, hob and door frame. The productive middle where a tiler lays quickly is a small fraction of the room, so the per square metre rate is much higher than in an open floor.

**Can I tile over existing bathroom tiles?**
Sometimes, depending on whether the existing tiles are sound and well bonded, and on the height change at doorways and fixtures. The significant catch is that any waterproofing failure underneath stays exactly where it is. Worth asking about, not worth assuming.

**Should the shower floor use the same tile as the rest of the bathroom?**
Often it cannot. A shower floor needs a fall to the waste, and large rigid tiles struggle to follow a fall in two directions. Smaller tiles or mosaics accommodate it. Slip resistance also matters more there than anywhere else in the room.

**Do you do full bathroom renovations?**
No. A renovation involves plumbing, electrical, carpentry, plastering and painting alongside the tiling and is generally run by a builder. If you are stripping a bathroom back to the studs, a renovation builder is who you want. We will say so rather than take the enquiry.

**How long does a bathroom take to tile?**
The laying itself is usually a few days. The schedule is driven by substrate preparation and by waterproofing cure time, which extends in cold weather.

**Is dark or light grout better in a bathroom?**
Light grout will not stay light in a shower. Mid tones are more forgiving, and epoxy grout holds colour far better than cement based without needing sealing.

---

## Call to action

**Heading:** Bathroom tiling in Canberra
**Body:** Tell us what is there now, whether the bathroom is being stripped back or worked around, and whether you have chosen a tile yet. Those three answers cover most of what determines the cost.
**Buttons:** Get a Quote | Call [NEEDS INPUT: Twilio tracking number, Canberra 02 61xx prefix]

---

## Build notes

**Commercial value is low and that is expected.** `bathroom tiling canberra` carries a CPC of $1.46 at competition index 100, against $18.30 for `shower repair canberra`. Maximum competition with minimum click value indicates directories and aggregators bidding against mixed informational and DIY intent rather than contractors bidding for jobs. This page exists for topical coverage of the core service and to pick up part of the 9,900 national informational demand. Do not expect it to drive leads, and do not allocate link building to it ahead of the repair pages.

**Cannibalisation control.** This page has the highest overlap risk on the site, touching the homepage, waterproofing, regrouting, leaking shower repair and the cost guide.
- This page: the installation job and the choices a homeowner makes. Tile selection, layout, sequencing, what goes wrong during installation.
- Waterproofing page: the membrane as a system, standards, certification.
- Leaking shower page: an existing leak, symptoms and diagnosis.
- Regrouting page: grout as a material and its replacement.
- Cost guide: the numbers.
Every cost, membrane and grout reference here is deliberately brief and links out rather than duplicating. Resist expanding any of them.

**The slip resistance section is the differentiator and it is also the riskiest.** No competitor on the Canberra SERP mentions slip rating at all, which makes it genuinely useful. It is also a standards claim about a safety matter, so the marker must be cleared from Standards Australia or supplier technical documentation, not from a tiling blog. If it cannot be sourced confidently, keep the practical advice to ask the supplier for the rating and drop the standard reference entirely rather than approximating it.

**The shower floor fall point is the second best thing here.** It explains something homeowners repeatedly get surprised by, it is concrete, and it is the kind of detail that gets cited.

**Schema:** Organisation plus FAQPage. Not LocalBusiness. No address, no aggregateRating, no review markup.

**Internal links out**
- `/waterproofing-canberra/`
- `/tiling-cost-guide-canberra/` (twice)
- `/regrouting-canberra/` (twice)
- `/leaking-shower-repair-canberra/`
- `/tile-removal-canberra/`

**Internal links in:** homepage routing block and services block, waterproofing page, cost guide.

**Images:** Synthetic illustrative only. A diagram showing a shower floor fall to waste and why a large rigid tile cannot follow it in two directions would carry the tile selection section and is not something any competitor has. Captions must not imply completed work by us. No before and after imagery at Level 2.

**Claims deliberately absent at Level 2:** no years of experience, no licence claims, no warranty, no response time promise, no reviews, no project photos, no showroom or supplier relationships.

**Markers outstanding:** 1 x [VERIFY] (AS 4586 and domestic slip resistance requirements), 1 x [NEEDS INPUT] (Twilio number). `node bake.js --check` fails until cleared.

---
