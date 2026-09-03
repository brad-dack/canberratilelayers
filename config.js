/* =============================================================================
   SITE CONFIG - Canberra Tiling build.

   Built from canberra-tiling-build-package.md (29 Aug 2026). That document is
   the source of truth for positioning, cannibalisation boundaries and link
   graph - this file is its content poured into the template's block system.
   See README.md "Divergence from the template" for what changed in bake.js
   to carry it (Contact/Disclaimer as standalone pages, About/Home/Privacy
   moved onto the same `blocks` system as services, per-page CTA copy).

   THREE BLOCKERS from build brief §2. Status:
     1. Brand and domain name - RESOLVED. Brand is "Canberra Tile Layers",
        ABN 78 538 005 810 (confirmed via ABN Lookup: individual/sole
        trader, Bradley John Dack, same ABN as Perth Brickwork and Perth
        Limestone Group). Domain is canberratilelayers.com.au, owned by
        Brad - no registrar/auDA check needed.
     2. Twilio tracking number - RESOLVED. +61 2 6105 9990, provisioned
        31 Aug 2026 and recorded as this site's twilio_number in the
        backend `sites` row (slug 'canberra-tile-layers'). Still to do in
        Twilio itself: upload the greeting MP3 and point the number's voice
        webhooks at twilio-voice / twilio-status.
     3. Contractor status - resolved to the CONDITIONAL wording the build
        brief itself supplies for pre-renter (about.html, disclaimer.html).
        Switch to the direct/present-tense wording once a contractor signs
        - see the TODO comments on those two pages below.
   =============================================================================
   QUICK-SWAP CHECKLIST (see README.md for details):
   1. business: name, city, state, serviceArea. phone/email/hours ship EMPTY
      on purpose - see "Unset config degrades to absent" in README. Add them
      when you have a real number/inbox/hours to publish.
   2. domain - bake.js regenerates CNAME, robots.txt, and sitemap.xml from it
   3. brand colors + theme (style/pattern - makes each site look different)
   4. ga4Id - REQUIRED before launch: analytics + call tracking stay OFF
      while the X placeholder is in place
   5. ingestUrl / ingestSecret - REQUIRED before launch: the form cannot
      deliver leads until these are real values. turnstileSiteKey alongside
      them, or the form ships with no spam protection.
   6. schema.type - stays "Organization" until a renter's real premises/
      hours exist. See "Schema: Organization until a renter exists" in
      README before ever changing this. NEVER LocalBusiness pre-renter -
      see build brief §4: no address, no aggregateRating, no review markup,
      and no Product/Offer schema on the cost guide (third-party estimates,
      not our prices).
   7. services - each is an ordered array of content BLOCKS (see the
      block-type reference in README), plus its own page filename. This
      build carries 14 (the template's usual 3-5 guidance doesn't apply to
      a content-driven build like this one - see build brief §3 page
      inventory). The original 8 came from the build brief; the six added
      in Sep 2026 (floor and wall, kitchen, outdoor/patio, pool, commercial,
      laundry) came from a competitor content audit - services the homepage
      already claimed in prose but had no page for.
   8. areas (0+) - ships empty. All 34 area-keyword searches returned null
      (build brief §9) - Canberra is one compact market, so suburb pages
      were dropped, not just deferred.
   9. about.faqs, howItWorks, about.paragraphs, page titles/descriptions,
      contact.fields
   Then run:  node bake.js          (regenerates pages + CNAME/robots/
                                     sitemap/404/favicon)
              node bake.js --check  (preflight: fails loudly on leftover
                                     placeholders, unresolved { marker }
                                     blocks, and broken references - reports
                                     unfinished-content counts per page)
============================================================================= */

window.SITE_CONFIG = {

  /* --- Core business identity ---------------------------------------------
     phone is the Twilio tracking number, not a direct line - calls route
     through twilio-voice and are logged per site. phoneDisplay is the
     human-readable form; phone stays E.164 for the tel: link. */
  business: {
    name: "Canberra Tile Layers",
    phone: "+61261059990",
    phoneDisplay: "(02) 6105 9990",
    email: "hello@canberratilelayers.com.au",
    city: "Canberra",
    state: "ACT",
    serviceArea: "Canberra, the ACT and Queanbeyan",
    hours: "Online enquiries anytime"
  },

  domain: "https://canberratilelayers.com.au",

  /* --- Brand -------------------------------------------------------------
     "classic" / "none": a slate-teal accent, no background pattern. Content
     carries this site at Level 2 (no reviews, no photos, no licence claims
     - build brief §5), so the visual design is deliberately quiet rather
     than trying to compensate with a busier theme. */
  brand: {
    color: "#1f4d5c",
    colorDark: "#173a46",
    colorContrast: "#ffffff",
    style: "classic",
    pattern: "none"
  },

  /* --- Tracking / integrations ---------------------------------------------
     All four required before launch - unrelated to the three build-brief
     blockers above, these are the template's own standing preflight gates. */
  ga4Id: "G-QTKR6MDB1K",
  ingestUrl: "https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/ingest-form",
  ingestSecret: "ed11ac06c8ca1cb55e83ecfd2b25246c",
  turnstileSiteKey: "0x4AAAAAAEHD1tLftcrbDXIx",

  /* --- Structured data -----------------------------------------------------
     Organization, sitewide. NEVER LocalBusiness pre-renter - build brief §4
     is explicit and repeats it per page: no address, no aggregateRating, no
     review markup anywhere on the site. See README "Schema: Organization
     until a renter exists". */
  schema: {
    type: "Organization",
    priceRange: "$$",
    founder: ""
  },

  /* --- Homepage -------------------------------------------------------------
     "The routing block is the differentiator" (build brief, page 1 notes):
     every competitor homepage opens with "quality workmanship" boilerplate;
     this one opens by sorting the visitor into repair / new work / budget,
     pushing link equity to the three strongest pages on the site. */
  pages: {
    home: {
      metaTitle: "Tiler Canberra | Tiling, Waterproofing & Tile Repairs",
      metaDescription: "Tiling across Canberra and the ACT. Bathroom and floor tiling, waterproofing, and repairs including leaking showers and regrouting. Get a free quote.",
      headline: "Tiling Across Canberra and the ACT",
      subheadline: "Bathroom and floor tiling, waterproofing, and repairs to showers, grout and cracked tiles. Across Canberra, the ACT and Queanbeyan.",
      ctaText: "Get a Quote",
      ctaHeading: "Get a quote",
      ctaBody: "Tell us what you need done, what is there now, and whether anything has been repaired before. That last detail matters more than people expect, because a repair that has already failed once usually points to a different problem than the one being described.",
      image: {
        src: "images/hero-tiling-tools.jpg",
        alt: "Tiling tools and ceramic tile samples arranged on a work surface",
        width: 1200,
        height: 805
      },
      blocks: [
        { type: "h2", text: "Start with what you actually need" },
        { type: "p", text: "Most people looking for a tiler in Canberra fall into one of three situations, and they are different jobs with different costs. Working out which one you are in saves the most money." },

        { type: "h3", text: "Something is leaking or damaged" },
        { type: "p", text: "A shower that leaks, grout that is crumbling, tiles that sound hollow or have cracked. The first question is always whether the problem is at the surface or underneath it, because that determines whether you are looking at a few hundred dollars or several thousand." },
        { type: "p", text: "[Leaking shower repair](leaking-shower-repair-canberra.html) · [Regrouting](regrouting-canberra.html) · [Tile repair](tile-repair-canberra.html)" },

        { type: "h3", text: "You are tiling something new" },
        { type: "p", text: "A bathroom, a floor, a splashback, an outdoor area. New work is more predictable than repair work, and the cost is driven mostly by the tile you choose, the layout, and the condition of what is underneath." },
        { type: "p", text: "[Bathroom tiling](bathroom-tiling-canberra.html) · [Waterproofing](waterproofing-canberra.html) · [Tile removal](tile-removal-canberra.html)" },

        { type: "h3", text: "You are still working out a budget" },
        { type: "p", text: "Published Canberra figures for the same bathroom range from $9,500 to $120,000, which is not much help. Our cost guide sets out where those numbers come from and why they disagree." },
        { type: "p", text: "[Canberra tiling cost guide](tiling-cost-guide-canberra.html) · [Quote checklist](tiling-quote-checklist-canberra.html)" },

        { type: "h2", text: "What we cover" },
        { type: "p", text: "**Bathroom tiling.** Floor and wall tiling in bathrooms and ensuites, including shower areas, niches and hobs. The most common tiling job and the one with the most that can go wrong, because it is a wet area. [More on bathroom tiling](bathroom-tiling-canberra.html)" },
        { type: "p", text: "**Floor and wall tiling.** Living areas, hallways, entries and general floor tiling, plus internal wall tiling and feature walls. Cost here is driven by the substrate more than anything else, since floors are rarely level and bringing one within tolerance for large format tile is often the largest single line. [More on floor and wall tiling](floor-and-wall-tiling-canberra.html)" },
        { type: "p", text: "**Kitchen tiling and splashbacks.** Kitchen floors, and splashbacks behind benches and cooktops. Splashbacks are small in area and high in detail, with cuts around power points, rangehoods and window returns, so they take longer than the square metre count suggests. [More on kitchen tiling](kitchen-tiling-canberra.html)" },
        { type: "p", text: "**Laundry tiling.** A wet area, so waterproofing requirements apply the same way they do in a bathroom, even though laundries are often treated as an afterthought. [More on laundry tiling](laundry-tiling-canberra.html)" },
        { type: "p", text: "**Outdoor and patio tiling.** Alfresco areas, patios and paths. External tiling needs slip rated tiles and weather resistant adhesives, and it carries a premium over internal work of roughly 10 to 20% on both supply and labour. [More on outdoor and patio tiling](outdoor-patio-tiling-canberra.html)" },
        { type: "p", text: "**Pool surrounds and coping.** Specialist work with its own requirements around movement, slip rating and water exposure. [More on pool tiling](pool-tiling-canberra.html)" },
        { type: "p", text: "**Commercial tiling.** Retail, hospitality and office fitouts, where the drivers are program and durability rather than domestic finish. [More on commercial tiling](commercial-tiling-canberra.html)" },
        { type: "p", text: "**Waterproofing.** Membrane application in wet areas, to AS 3740:2021. The one part of a bathroom you pay for and never see, and the most expensive thing to get wrong. [More on waterproofing](waterproofing-canberra.html)" },
        { type: "p", text: "**Tile removal.** Strip out of existing tiles and adhesive, and preparation of the substrate for what comes next. Frequently quoted separately and frequently underestimated. [More on tile removal](tile-removal-canberra.html)" },
        { type: "p", text: "**Repairs.** Leaking showers, regrouting, resiliconing, and cracked or drummy tiles. [Leaking shower repair](leaking-shower-repair-canberra.html) · [Regrouting](regrouting-canberra.html) · [Tile repair](tile-repair-canberra.html)" },

        { type: "h2", text: "How a tiling job actually runs" },
        { type: "p", text: "Useful to know when you are reading a quote, because most of these stages are where costs vary, and because it tells you what a tiler is actually pricing." },
        { type: "ol", items: [
          "**Assessment and quote.** What is there now, what is going in, and what condition the substrate is in. On a repair, this stage should include diagnosing the actual cause rather than pricing a guess.",
          "**Removal and disposal.** Existing tiles and adhesive out, and away. Tiles are heavy and tip fees are usually charged by weight.",
          "**Substrate preparation.** Levelling, screeding, patching and repairing. The most variable stage on any renovation, because what is underneath is not fully known until the old surface is off. It is also where tile format gets decided in practice: large format tiles, 600 by 600mm and up, need a flatter substrate than smaller ones, because any deviation shows as lipping at the edges. Choosing large format can add a floor levelling stage a smaller tile would not have needed, and that is usually a bigger number than the extra laying rate.",
          "**Waterproofing.** In wet areas, membrane applied and detailed at junctions and the floor waste, then left to cure. Cure times lengthen in cold weather, which matters in a Canberra winter.",
          "**Setting out.** Where the first tile goes determines where every cut lands, and the layout pattern determines how many cuts there are. Straight set, or grid, is the baseline and the cheapest: joints line up both ways, cuts land on two edges, waste is predictable. Offset and brick bond are a small step up. Diagonal, herringbone and chevron are a large one, because nearly every perimeter tile is an angled cut, the wastage allowance on the tile order goes up, and the setting out has to be exact from the first tile or the error compounds across the room.",
          "**Laying.** The part everyone pictures, and often not the longest.",
          "**Grouting and silicone.** Grout to the joints, silicone to the movement junctions where the walls meet the floor and each other. These are different materials doing different jobs and they are not interchangeable.",
          "**Curing and sealing.** Grout cures before the area is used or sealed. Cement based grout benefits from sealing. Epoxy does not."
        ] },

        { type: "h2", text: "Why tiling quotes vary so much" },
        { type: "p", text: "Three quotes for the same bathroom can be thousands apart without anyone being unreasonable." },
        { type: "p", text: "Usually they are not quoting the same job. One includes removing the old tiles and taking them away. One assumes the floor is flat. One has allowed for waterproofing and one has left it out expecting a separate waterproofer. None of that is visible when you compare three totals." },
        { type: "p", text: "The fix is to give every quoter the same written brief and ask each to itemise against it. Our [cost guide](tiling-cost-guide-canberra.html) sets out the questions that make quotes comparable, and what the published Canberra figures actually say." },

        { type: "h2", text: "Where we work" },
        { type: "p", text: "Canberra and the ACT, plus Queanbeyan and the immediate NSW fringe." },
        { type: "p", text: "North through Gungahlin and Belconnen. Central across the Inner North, Inner South and Molonglo. Woden Valley and Weston Creek. South through Tuggeranong. Across the border, Queanbeyan, Jerrabomberra and Googong." },
        { type: "p", text: "Jobs further out toward Yass, Murrumbateman or Bungendore can still be sent through, but there is no guarantee anyone covers that far out." },

        { type: "h2", text: "Common questions" },
        { type: "faqs", items: [
          {
            q: "How much does a tiler charge in Canberra?",
            a: "Rates for floor tiling supply and install run roughly $55 to $140 per square metre, but are dependent on an on-site quote."
          },
          {
            q: "My shower is leaking. Do I need it regrouted or replaced?",
            a: "It depends entirely on whether the waterproofing membrane under the tiles is intact. If damp is showing up outside the bathroom, the membrane has likely failed and regrouting will not fix it. See [leaking shower repair](leaking-shower-repair-canberra.html)."
          },
          {
            q: "Is grout waterproof?",
            a: "No. Grout is porous and water passes through it. The membrane underneath the tiles is what keeps water out. This surprises most people and it explains why regrouting alone often does not stop a leak."
          },
          {
            q: "Do you do full bathroom renovations?",
            a: "No. A renovation involves plumbing, electrical, carpentry, plastering and painting alongside the tiling, and it is generally run by a builder rather than a tiler. If you are stripping a bathroom back to the studs, a renovation builder is who you want. We will say so rather than take the enquiry."
          },
          {
            q: "How long does a bathroom take to tile?",
            a: "The laying is rarely the constraint. Substrate preparation and waterproofing cure time drive the schedule, and cure times extend in cold weather."
          }
        ] }
      ]
    },

    about: {
      metaTitle: "About Us | Canberra Tile Layers",
      metaDescription: "Who runs this site, how the enquiry service works, what we cover and what we don't, and how it's paid for.",
      headline: "About Canberra Tile Layers",
      /* Level 1 (transparent broker) on this page only - the rest of the
         site runs Level 2. The commercial disclosure lives here and on the
         disclaimer, nowhere else. See build brief §5. */
      blocks: [
        { type: "h3", text: "Who runs this" },
        { type: "p", text: "Canberra Tile Layers is run by Brad. I am not a tiler. I have never laid a tile and do not claim to. For how a specific job actually gets built, the contractor doing the work is the one to ask." },
        { type: "p", text: "What I do is research. The [cost guide](tiling-cost-guide-canberra.html) on this site compares published figures from seven different Canberra sources and explains why three local builders quoting the same bathroom in the same year land on $24,000, $30,000 and $50,000. The [leaking shower](leaking-shower-repair-canberra.html) and [regrouting](regrouting-canberra.html) pages explain when a surface repair will hold and when it will not, which is the single most expensive thing Canberra homeowners get wrong about their bathrooms." },

        { type: "h3", text: "What this business does" },
        /* Conditional wording, per build brief §5 - pre-renter, no page may
           state in the present tense that enquiries are passed to a
           contractor, because none exists. This resolves that NEEDS INPUT
           rather than leaving it open, since the brief already supplies the
           correct wording for this exact state. TODO (Brad): switch to
           "We take enquiries from Canberra homeowners about tiling and
           tiling repairs, and pass them to a tiling contractor who does
           that type of work. ... Every physical part of a job is done by
           the contractor." once a Canberra contractor is signed. */
        { type: "p", text: "We take enquiries from Canberra homeowners about tiling and tiling repairs. Where we have a contractor covering that type of work in your area, your enquiry goes to them." },
        { type: "p", text: "We do not tile, waterproof, attend site, or certify anything. There is no crew and no equipment. Every physical part of a job would be done by the contractor." },

        { type: "h3", text: "What we cover, and what we don't" },
        { type: "p", text: "We stick to tiling: bathroom and wall and floor tiling, waterproofing, tile removal, and tiling repairs including leaking showers, regrouting, and cracked or loose tiles." },
        { type: "p", text: "Full bathroom renovations are a different job. A renovation involves plumbing, electrical, carpentry, plastering and painting alongside the tiling, and it is generally run by a builder or a renovation company rather than a tiler. If you are stripping a bathroom back to the studs and starting again, a renovation builder is who you want, not a tiler. We will say so rather than take the enquiry." },
        { type: "p", text: "Plumbing, electrical work, stone benchtops, and structural work are all separate trades we do not handle either." },

        { type: "h3", text: "What happens after you enquire" },
        { type: "p", text: "After you submit the form, you will be contacted by a Canberra tiling contractor if they cover your job." },
        { type: "p", text: "Your job goes to one contractor rather than to everyone buying leads that day, so you get one conversation instead of five calls. Your details are not sold, not added to a marketing list, and not shared with advertisers. The full position is in the [privacy policy](privacy.html)." },

        { type: "h3", text: "How the service is paid for" },
        { type: "p", text: "The contractor pays for the enquiry. You do not." },
        { type: "p", text: "There is no cost to you at any point, the quote is free, and there is no obligation to go ahead with the work. There is nothing unusual in the model. It is how referral services are generally funded, free to the person making the enquiry and paid for by the business that receives it." },

        { type: "h3", text: "Where we cover" },
        { type: "p", text: "Canberra and the ACT, plus Queanbeyan and the immediate NSW fringe." },
        { type: "p", text: "That covers the northern districts through Gungahlin and Belconnen, the central areas including the Inner North and Inner South, Woden Valley and Weston Creek, Molonglo, and Tuggeranong in the south. Across the border it includes Queanbeyan, Jerrabomberra and Googong." },
        { type: "p", text: "Jobs further out toward Yass, Murrumbateman or Bungendore can still be sent through, but there is no guarantee anyone covers that far out." },

        { type: "h3", text: "Contact" },
        { type: "p", text: "Brad, trading as Canberra Tile Layers. ABN 78 538 005 810." }
      ]
    },

    contact: {
      metaTitle: "Contact | Canberra Tile Layers",
      metaDescription: "Get a quote for tiling, waterproofing or tile repairs in Canberra and the ACT. Tell us what you need and we will come back to you.",
      headline: "Get in Touch",
      blocks: [
        { type: "p", text: "Tell us what you need done and we will come back to you." },

        { type: "h3", text: "What to include" },
        { type: "p", text: "The more of this you can answer, the more useful the first reply will be." },
        { type: "ul", items: [
          "**What the job is.** New tiling, a repair, or you are not sure yet.",
          "**What is there now.** Existing tiles, bare substrate, or a bathroom about to be stripped.",
          "**Whether it is a wet area.** Bathroom, ensuite, laundry or shower. Wet areas carry waterproofing requirements that dry areas do not.",
          "**Whether anything has been repaired before.** This matters more than people expect. A repair that has already failed once usually points to a different underlying problem than the one being described.",
          "**Roughly when the house was built.** Relevant for older homes, where asbestos identification comes before any demolition.",
          "**Your suburb.**"
        ] },

        { type: "h3", text: "Service area" },
        { type: "p", text: "Canberra and the ACT, plus Queanbeyan and the immediate NSW fringe." },
        { type: "p", text: "North through Gungahlin and Belconnen. Central across the Inner North, Inner South and Molonglo. Woden Valley and Weston Creek. South through Tuggeranong. Across the border, Queanbeyan, Jerrabomberra and Googong." },
        { type: "p", text: "Jobs further out toward Yass, Murrumbateman or Bungendore can still be sent through, but there is no guarantee anyone covers that far out." },

        { type: "h3", text: "What we don't do" },
        { type: "p", text: "Full bathroom renovations, plumbing, electrical work, stone benchtops, tile and grout cleaning, and structural or below-ground waterproofing. If your enquiry is one of those we will say so rather than take it and waste your time. More on [what we cover and why](about.html)." },

        { type: "h3", text: "How this works" },
        { type: "p", text: "We are a lead service, not a tiling contractor. The [about page](about.html) sets out who runs this site, how enquiries are handled, and how the service is paid for. The short version: the contractor pays, you do not." },
        { type: "p", text: "Your details are not sold, not added to a marketing list, and not shared with advertisers. See the [privacy policy](privacy.html)." }
      ]
    },

    disclaimer: {
      metaTitle: "Disclaimer | Canberra Tile Layers",
      metaDescription: "How this site operates, who carries out the work, and the limits of the information published here.",
      headline: "Disclaimer",
      blocks: [
        { type: "h3", text: "How this site operates" },
        { type: "p", text: "Canberra Tile Layers (ABN 78 538 005 810) is an independently owned and operated lead referral service, run by Brad as a sole trader. It is not a tiling contractor." },
        { type: "p", text: "We do not tile, waterproof, remove tiles, attend site, supervise work, or certify anything. We have no crew, no equipment and no trade licence." },
        /* Conditional wording, same resolution as about.html. TODO (Brad):
           switch to "Enquiries submitted through this site are passed to an
           independent tiling contractor. Any work arising is carried out
           by that contractor under their own business, their own licensing
           and their own insurance, and any contract for the work is
           between you and them." once a contractor is signed. */
        { type: "p", text: "Where we have a contractor covering that type of work in your area, enquiries submitted through this site are passed to them. Where we do not, we will tell you. Any work arising is carried out by that contractor under their own business, their own licensing and their own insurance, and any contract for the work is between you and them." },

        { type: "h3", text: "Responsibility for work" },
        { type: "p", text: "All liability for work carried out, including quality, timeliness, compliance and any loss or damage arising, rests with the independent contractor performing it." },
        { type: "p", text: "We do not warrant, guarantee or accept responsibility for any contractor's work, quotes, conduct or availability." },

        { type: "h3", text: "The information on this site" },
        { type: "p", text: "The guides, cost information and explanatory content published here are general in nature. They are written to help homeowners understand what they are buying and what questions to ask." },
        { type: "p", text: "They are not professional, technical, legal or safety advice, and they are not a substitute for a qualified person assessing your specific property." },
        { type: "p", text: "**Cost figures** published on this site are drawn from third party sources, each identified where it appears. They are those sources' estimates, not our prices and not quotes. Prices change, and every job differs. Do not budget from them without obtaining actual quotes." },
        { type: "p", text: "**References to standards and regulations** are provided as general orientation. Standards are revised and regulatory requirements change. Where a specific requirement matters to your situation, confirm the current position with the relevant authority or a qualified professional rather than relying on this site." },
        { type: "p", text: "**Safety information**, including anything published here about asbestos, dust or silica, is general awareness material only. It does not replace assessment by a licensed professional, and nothing on this site should be read as a recommendation to undertake work yourself." },

        { type: "h3", text: "External links" },
        { type: "p", text: "This site links to third party websites, including sources for cost figures and regulatory bodies. We do not control those sites and are not responsible for their content or accuracy." },

        { type: "h3", text: "Contact" },
        { type: "p", text: "See the [about page](about.html), which sets out in plain terms who runs this site and how the service is paid for. Questions about how this site operates can be sent to hello@canberratilelayers.com.au." }
      ]
    },

    privacy: {
      metaTitle: "Privacy Policy | Canberra Tile Layers",
      metaDescription: "How we collect, use and share the information you provide through this site.",
      headline: "Privacy Policy",
      lastUpdated: "31 August 2026",
      /* =====================================================================
         PRIVACY POSITION - decision record, 31 August 2026.

         This replaces the two markers that previously blocked this page. They
         asked for the Privacy Act question to be resolved before publishing.
         It has been resolved to a position; the reasoning is recorded here so
         it can be re-examined rather than re-derived.

         THE QUESTION. The site relies on the small business operator exemption
         under the Privacy Act 1988 (turnover under $3m). But OAIC's small
         business guidance lists "trading in personal information" as a
         situation where a small business IS covered regardless of turnover -
         disclosing personal information for a benefit, service or advantage.
         A rank-and-rent site passing homeowner details to a contractor who
         pays for the referral is squarely in the frame for that carve-out.

         THE ANSWER RELIED ON. That carve-out applies only where the disclosure
         is made "without the consent of the individual". OAIC states plainly
         that consent may be express OR implied. So obtaining consent preserves
         the exemption. Implied consent is available here because none of this
         is "sensitive information" under the Act (no health, race, political
         opinion etc.) - express consent is only mandatory for sensitive
         information, so no tick-box is required.

         WHAT THE POSITION DEPENDS ON. Implied consent must still be INFORMED
         (OAIC's four elements: informed, voluntary, current and specific,
         capacity). The person must understand, at the point of collection,
         that their details go to a contractor. That is why the collection
         notice wording on both channels is load-bearing and must not be
         softened into generic reassurance copy:
           - Web form: contact.reassurance, rendered directly above the only
             form on the site. See the note on that key.
           - Phone: the voicemail greeting, which is the only opportunity to
             give notice before a caller speaks. Held in the backend as
             sites.greeting_audio_url (the MP3) and sites.greeting_text (the
             text-to-speech fallback). Both must carry the notice and must say
             the same thing.

         OUTSTANDING AS AT 31 AUG 2026. The greeting has NOT yet been
         re-recorded. The live MP3 and greeting_text still read "Please leave
         some details about your job at the tone", which gives a caller no
         notice at all. Agreed replacement wording:
           "Hi, thanks for calling Canberra Tile Layers. Leave your name,
            suburb and job details after the tone. We pass enquiries to a
            tiler who can quote the job."
         Until that is recorded, uploaded, and set in BOTH columns, the phone
         channel does not carry a collection notice and this position is only
         half implemented. The web form side is done.

         STATUS AND LIMITS. Self-assessed by Brad against OAIC guidance and
         OAIC's privacy checklist for small business. NOT reviewed by a
         solicitor. Two things would change the answer and are worth watching:
         a move to per-lead pricing rather than flat monthly rent (payment then
         maps directly onto each individual disclosure, which reads more like
         the carve-out), and removal of the small business exemption itself,
         which has been flagged for a future reform tranche. If the exemption
         goes, all thirteen APPs apply and APP 8 (cross-border disclosure) is
         the heavy one, given Supabase, Cloudflare, Twilio, Google and Resend
         are all overseas.

         PORTFOLIO. Perth Brickwork and Perth Limestone Group run the same
         model and depend on the same reasoning, but their collection notices
         are weaker (Limestone) or absent entirely (Brickwork). This position
         does not hold for those sites until they are brought into line.
         ===================================================================== */
      blocks: [
        { type: "h2", text: "Who this covers" },
        { type: "p", text: "This policy applies to Canberra Tile Layers (ABN 78 538 005 810), run by Brad as a sole trader, and to information collected through this website." },

        { type: "h2", text: "What we collect" },
        { type: "p", text: "When you submit an enquiry, we collect:" },
        { type: "ul", items: ["Your name", "Your phone number", "Your email address", "Your suburb", "What you have told us about the job"] },
        { type: "p", text: "When you call the number on this site, we collect your phone number, the time and duration of the call, and which page of the site you called from." },
        /* ACCURACY NOTE - this previously read "We don't record calls", which
           was wrong: calls are not answered live, they go to voicemail, and
           twilio-voice records the message and stores the audio. The greeting
           tells callers this before the tone, which is where consent for the
           phone channel is obtained. Keep this paragraph in step with what the
           greeting actually says and with the 12-month prune-storage rule. */
        { type: "p", text: "If your call is not answered live, it goes to voicemail, and the message you leave is recorded and stored so that it can be passed on and acted on. The greeting tells you this before the tone. Recordings are kept for up to twelve months and then deleted, though a record that the call happened is kept for our own accounting." },
        { type: "p", text: "When you visit the site, standard analytics data is collected, including pages visited, approximate location derived from IP address, device type and referring source." },

        { type: "h2", text: "Why we collect it" },
        { type: "p", text: "To pass your enquiry to a tiling contractor who can quote on your job, and to respond to you about that enquiry." },
        { type: "p", text: "Call and form data is also used to understand which pages generate enquiries, so the site can be improved." },

        { type: "h2", text: "Who we share it with" },
        /* Conditional wording, same resolution as about.html and
           disclaimer.html. TODO (Brad): switch to "Your enquiry details go
           to one tiling contractor working in your area, so that they can
           contact you about your job. Your job is not distributed to
           multiple businesses." once a contractor is signed. */
        { type: "p", text: "**The contractor.** Where we have a contractor covering that type of work in your area, your enquiry details go to them, so that they can contact you about your job. Your job is not distributed to multiple businesses. Where we do not yet have a contractor for your area, we will tell you rather than pass your details anywhere." },
        { type: "p", text: "**Service providers.** The site uses third party services that process data on our behalf. The enquiry form submits directly to our own system rather than to a third party form service; that system is hosted on Supabase, so your details pass through their servers to reach us. A Cloudflare Turnstile check runs in your browser first to filter out automated spam. If you call the number on this site, the call is connected through Twilio, which also logs which page you called from. Cloudflare handles this site's DNS and email routing, and Google Analytics may be used to understand how the site is used. Each of these is a large international provider, each may store or process data outside Australia, and each publishes its own privacy policy describing how it handles data." },
        { type: "p", text: "**What we do not do.** We do not sell your information. We do not add you to a marketing list. We do not share your details with advertisers, data brokers, or businesses other than the contractor handling your enquiry." },

        { type: "h2", text: "How long we keep it" },
        { type: "p", text: "Enquiry details, call records and analytics data are kept only as long as needed to handle the enquiry and to run the site, and for a reasonable period afterwards for our own records. If you would like your details removed, contact us and we will remove them." },

        { type: "h2", text: "Where it is stored" },
        { type: "p", text: "See \"Service providers\" above - each of those companies may store or process data outside Australia, and each publishes its own privacy policy describing how." },

        { type: "h2", text: "Cookies and analytics" },
        { type: "p", text: "This site may use Google Analytics to understand how visitors find and use it, for example which pages are viewed. Google Analytics uses cookies and collects anonymous usage data such as general location and device type. It does not see anything typed into the enquiry form." },

        { type: "h2", text: "Accessing or deleting your information" },
        { type: "p", text: "You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Contact us at hello@canberratilelayers.com.au." },

        { type: "h2", text: "Complaints" },
        { type: "p", text: "If you are unhappy with how we have handled your information, contact us first at hello@canberratilelayers.com.au." },
        { type: "p", text: "If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at oaic.gov.au." },

        { type: "h2", text: "Changes" },
        { type: "p", text: "We may update this policy. The current version is always the one on this page, with the date it was last updated at the top." }
        /* The "Privacy Act question this site depends on" heading and its
           marker sat here. Both removed: the heading existed only to host the
           marker, and the reasoning is now recorded as a comment at the top of
           this page's config rather than published to visitors. */
      ]
    }
  },

  /* Short, honest value points shown under the hero on every page. No
     response-time promise, no completed-jobs count - both banned at Level 2
     (build brief §5). */
  valueProps: [
    "Free, no-obligation quotes",
    "Straight answers on what a job actually needs",
    "Serving Canberra, the ACT and Queanbeyan"
  ],

  /* The template's generic 3-icon "How It Works" component (with its
     "response within 24 hours" copy) isn't used by this build - a
     response-time promise is banned at Level 2, and the homepage's own
     "How a tiling job actually runs" section (in pages.home.blocks above)
     already serves the same purpose with tiling-specific content. Left
     empty rather than deleted so the component stays available if an area
     page is ever added. */
  howItWorks: [],

  /* --- Services (14) ----------------------------------------------------
     More than the template's usual 3-5 - this build is content-driven
     (build brief §3 page inventory), not card-driven, so the count follows
     the keyword data rather than the template's rule of thumb. The first 8
     follow the build brief's own page numbering; the last 6 were added in
     Sep 2026 from a competitor content audit, covering services the
     homepage already listed in prose with nowhere to send anyone.

     Cannibalisation boundaries for the six new pages, so a later edit
     doesn't blur them: floor-and-wall owns tile format vs substrate,
     layout pattern cost, joint width/grout colour and feature walls;
     outdoor-patio owns AS 4586 slip classification for the whole site;
     pool owns barefoot classification and pool-edge movement; kitchen owns
     splashback detail pricing; laundry owns the "small wet area" argument;
     commercial owns program/specification. Every other page references
     these in a sentence and links, the same discipline the original 8 use.

     `/tile-and-grout-cleaning-canberra/` is deliberately NOT built -
     different renter pool from tiling, see build brief §3. Suburb-style
     area pages are also deliberately absent (cfg.areas stays empty) - all
     34 area keywords returned null search volume (build brief §9). */
  services: [
    /* ---------------------------------------------------------------------
       COST GUIDE - the inbound-link hub (13 body-copy inbound links, the
       most of any page - build brief §8). All cost figures on the site
       live here; every other page keeps cost references to a sentence and
       links back. Schema: Organisation + FAQPage, explicitly NOT Product
       or Offer (these are third-party estimates, not our prices - build
       brief §4/§6). ------------------------------------------------------ */
    {
      page: "tiling-cost-guide-canberra.html",
      name: "Tiling Cost Guide",
      shortDescription: "What tiling actually costs in Canberra, with sources, and why published figures disagree so wildly.",
      metaTitle: "Tiling Cost Guide Canberra 2026 | Real Prices Explained",
      metaDescription: "What tiling costs in Canberra, why published quotes disagree so wildly, and the hidden costs that appear after work starts.",
      headline: "Canberra Tiling Cost Guide",
      ctaText: "Get a Quote",
      ctaHeading: "Working out a budget for a Canberra tiling job",
      ctaBody: "Tell us what you are planning, what is there now, and whether the space is being stripped back or worked around. Those three things determine most of what a job costs.",
      image: {
        src: "images/cost-guide-tile-samples.jpg",
        alt: "A fan of different tile samples laid out for selection, with a notebook and pencil beside them",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "Search for what a bathroom costs in Canberra and you will get answers ranging from $9,500 to $120,000. Those are real published figures from real Canberra businesses, all for 2026, all for a main bathroom." },
        { type: "p", text: "That is not because anyone is lying. It is because \"a bathroom renovation\" describes about six different jobs, and because most published guides are written by companies quoting their own price band." },
        { type: "p", text: "This guide gives you the numbers, tells you where each came from, and explains what makes them differ. Then it covers the costs that appear after work starts, and the questions that make three quotes genuinely comparable." },

        { type: "h2", text: "The headline numbers" },
        { type: "h3", text: "Tiling, supply and install" },
        { type: "table", headers: ["Rate", "Scope"], rows: [
          ["$55 to $140 per m², average $75 to $100", "Standard floor tiling, national guides"],
          ["$50 to $120 per m², full range $30 to $200", "Standard floor tiling installed, national guides"],
          ["$85 per m² floor, $95 per m² wall", "Bathroom specific, national guides"],
          ["$85 per m² labour plus $50 per m² tile supply", "Canberra bathroom, floor to ceiling"]
        ] },
        { type: "p", text: "That last row is the most useful line here, because it comes from a Canberra tiler's own published rate card rather than a national estimate. Its labour figure of $85 per square metre sits almost exactly on the national bathroom average. Canberra tiling labour is not an outlier." },
        { type: "p", text: "Wall tiling costs more per square metre than floor tiling, because of the waterproofing preparation behind it and the difficulty of working vertically." },

        { type: "h3", text: "What it costs to tile a bathroom, line by line" },
        { type: "p", text: "One Canberra rate card breaks the cost to tile a bathroom into its parts, which is more useful than any range because you can see what each component contributes:" },
        { type: "table", caption: "Itemised bathroom, Canberra rate card", headers: ["Item", "Rate"], rows: [
          ["Tile supply, floor to ceiling, plus 15% wastage", "$50 per m²"],
          ["Tiler labour, floor to ceiling", "$85 per m²"],
          ["Sand and cement bed to floor", "$700"],
          ["Waterproofing", "$1,200"],
          ["Silicone, labour and material", "$400"],
          ["Demolition", "$1,500"],
          ["Rubbish removal", "$800"],
          ["Building materials", "$600"],
          ["Margin and project management", "20%"],
          ["GST", "10%"]
        ] },
        { type: "p", text: "Note the last two rows. A 20% margin and project management line applied on top, then GST on top of that, means the trade cost and the invoiced cost are meaningfully different numbers. Any guide that ignores this understates by roughly a third." },

        { type: "h3", text: "Preparation and extras" },
        { type: "table", headers: ["Item", "Range"], rows: [
          ["Screeding or levelling", "$15 to $30 per m²"],
          ["Large format tiles, added labour", "$10 to $20 per m²"],
          ["Waterproofing added to a bathroom", "$500 to $1,000"],
          ["Outdoor tiling premium", "10 to 20% on supply and labour"],
          ["Pool tiling, labour only", "$60 to $120 per m²"]
        ] },
        { type: "p", text: "Three of those rows have a page behind them. Large format labour is an addition to the laying rate, not a substitute for the levelling it may also require - see [floor and wall tiling](floor-and-wall-tiling-canberra.html). The outdoor premium covers a higher tile specification and more preparation - see [outdoor and patio tiling](outdoor-patio-tiling-canberra.html). The pool figure is a labour rate for the field area, not a job price, because the coping detail is what moves it - see [pool tiling](pool-tiling-canberra.html)." },

        { type: "h3", text: "Repairs" },
        { type: "table", headers: ["Repair", "Range"], rows: [
          ["Silicone replacement only", "$150 to $350"],
          ["Shower regrout, cement grout", "$600 to $1,200"],
          ["Shower regrout, epoxy grout", "$800 to $1,500"],
          ["Shower regrout, general", "$600 to $1,500"],
          ["Shower base repair", "$400 to $1,200"],
          ["Drain reseal", "$150 to $500"],
          ["Waterproofing repair", "$500 to $2,500"],
          ["Leak behind shower walls", "$500 to $2,500 plus"],
          ["Rotted timber remediation", "$1,000 to $3,000 plus"],
          ["Shower leak repair, full range", "$250 to $4,000"]
        ] },
        { type: "p", text: "The spread in that last row is the whole point. A silicone reseal and a full membrane replacement are both called \"leaking shower repair\" and they differ by more than ten times. Which one you need is a diagnosis, not a preference. See [leaking shower repair](leaking-shower-repair-canberra.html)." },

        { type: "h3", text: "Bathroom renovation in Canberra" },
        { type: "p", text: "This is where published figures fall apart, so here they are side by side. All 2026, all for a main bathroom in Canberra unless noted." },
        { type: "table", headers: ["Published by", "Figure"], rows: [
          ["Housing Industry Association (national average)", "Around $26,000"],
          ["Canberra renovator", "$18,000 to $35,000, most between $19,000 and $25,000"],
          ["Canberra renovator", "$18,000 to $35,000, average $24,000 to $28,000"],
          ["Canberra builder", "$25,000 to $35,000, most around $30,000"],
          ["Cost guide site", "$9,500 to $43,000 plus"],
          ["Canberra bathroom specialist", "$40,000 to $50,000"],
          ["Canberra builder, by tier", "$25,000 to $40,000 entry, $40,000 to $65,000 mid, $70,000 to $120,000 plus luxury"]
        ] },
        { type: "p", text: "Three Canberra builders describing a mid-range main bathroom in the same year give $24,000, $30,000 and $50,000." },

        { type: "h2", text: "Why the numbers disagree so much" },
        { type: "p", text: "Understanding this is worth more than any single figure." },
        { type: "p", text: "**They describe different scopes.** A cosmetic refresh keeping the layout, the plumbing and the existing waterproofing is a fundamentally different job from a full strip-out back to the studs. Both get called a bathroom renovation. Thinking in tiers rather than averages is the only way the range makes sense." },
        { type: "p", text: "**They reflect who is writing.** A high-end builder's typical bathroom genuinely is more expensive than a general builder's, because they are describing their own client base. Neither is wrong about their own work. Both are wrong as a general answer." },
        { type: "p", text: "**Some numbers are not real.** Programmatic cost-guide sites that publish a \"from\" price for every trade in every city produce figures with no relationship to any actual job. Treat a suspiciously low starting figure as a lead-capture device rather than data." },
        { type: "p", text: "**Fixtures move the total more than tiling does.** The Canberra rate card above allocates $14,250 to supply of tapware, bath, toilet, vanity, floor wastes, shower screen, shower head and mirror. That single line exceeds the entire tiling component of most bathrooms. Two bathrooms with identical tiling can differ by twenty thousand dollars on fixture selection alone." },
        { type: "p", text: "**Labour is roughly half.** One Canberra builder puts labour at 40 to 50% of total project cost. That ratio matters when deciding where to economise, because material savings have less leverage than most people assume." },

        { type: "h2", text: "Why \"cost per square metre\" is misleading" },
        { type: "p", text: "It is the figure everyone searches for, and on its own it is close to useless." },
        { type: "p", text: "**Small rooms cost more per square metre, not less.** A bathroom floor is mostly edges, cuts and detail around a floor waste, a vanity, a hob and a door frame. The productive middle where a tiler lays quickly is a small fraction of it. Australian market guidance puts a small 5 to 8 square metre bathroom at roughly $2,000 to $3,500 for tiling including materials, a far higher effective rate than any headline figure implies, because fixed costs do not shrink with the floor." },
        { type: "p", text: "The same logic applies to ensuites. A 2 square metre ensuite still needs the same waterproofing, the same licensed plumbing and electrical work, and the same trades through the door as a larger room. You save on tile area and fixtures, not on the process." },
        { type: "p", text: "**The rate rarely includes preparation.** Levelling, screeding, removing old adhesive and repairing the substrate are usually separate, and on a renovation they are frequently the largest single line." },
        { type: "p", text: "Use a per-square-metre rate to sanity check a quote you already have. Do not use it to build a budget." },

        { type: "h2", text: "What actually drives the cost" },
        { type: "h3", text: "The tile itself" },
        { type: "p", text: "**Size.** Large format tiles need a flatter substrate, because any deviation shows up as lipping at the edges. That often means levelling a smaller tile would not have needed, and it adds $10 to $20 per square metre to labour on top of base rates. At the other extreme, mosaics are slow, because you handle many more sheets and finish far more linear metres of grout joint per square metre." },
        { type: "p", text: "**Material.** Porcelain is denser and harder than ceramic, so cutting is slower and blade wear higher. Natural stone commands a premium because each piece is unique, it needs specialist handling, and it requires periodic sealing that adds to lifetime cost." },
        { type: "p", text: "**Edge type.** Rectified tiles have a machine-cut edge allowing a narrow, precise joint. Achieving that precision takes longer than laying a cushioned-edge tile that tolerates small variation." },
        { type: "p", text: "**Availability.** Imported tiles carry longer lead times. A discontinued line means running short becomes a serious problem rather than an inconvenience." },

        { type: "h3", text: "The layout" },
        { type: "p", text: "Straight-set is the baseline. Every other pattern adds cuts, and cuts add time and waste." },
        { type: "p", text: "Offset and brick patterns are a small step up. Herringbone and chevron are a large one, because nearly every perimeter tile is a cut and the setting out has to be exact from the first tile or the error compounds across the room." },

        { type: "h3", text: "The substrate, which is where the real money is" },
        { type: "p", text: "Floors are rarely level, and bringing one within tolerance may need self-levelling compound or a screed at $15 to $30 per square metre. How much is unknown until the old covering is off." },
        { type: "p", text: "A concrete slab, a timber floor and a sheeted wall are three different preparation jobs. Old adhesive, old screed and old waterproofing all have to be dealt with, and removing tile adhesive from a slab is slow, dusty work usually quoted separately." },
        { type: "p", text: "Water damaged framing behind a shower has to be replaced before anything is tiled over it, and that runs $1,000 to $3,000 or more on its own. It is discovered during demolition, not during the quote." },

        { type: "h3", text: "Wet areas" },
        { type: "image", src: "images/cost-guide-wet-area-layers.jpg", alt: "Cross-section diagram of a tiled wet-area floor showing, from bottom to top, the substrate, levelling screed, waterproof membrane, tile adhesive and tile", width: 1200, height: 805 },
        { type: "p", text: "Waterproofing in domestic wet areas is governed by AS 3740:2021 Waterproofing of Domestic Wet Areas, the current (fifth) edition, which superseded AS 3740-2010." },
        { type: "credit", text: "AS 3740:2021, Standards Australia." },
        { type: "p", text: "Unlike builders, electricians and plumbers, **waterproofing is not its own licensed trade in the ACT** - it does not appear on Access Canberra's list of licensed construction occupations. What is regulated is the outcome: wet area waterproofing details must be submitted as part of the building approval for Class 1 residential work, and Access Canberra has specifically flagged incorrect or undocumented wet area waterproofing as a compliance problem (Construction Note 01/2023, Wet Areas, updating 2022/13). A building surveyor requires waterproofing documentation before signing off tiling, and undocumented or non-compliant waterproofing can trigger a Stop Work Notice under the Building Act 2004." },
        { type: "credit", text: "Access Canberra, Construction Note 01/2023 – Wet Areas; Building Act 2004 (ACT)." },
        { type: "p", text: "In practice that still means: whoever applies the membrane should be someone who can produce that documentation, whether they hold a trade qualification, a manufacturer accreditation, or both." },
        { type: "p", text: "The standard also sets a minimum fall to waste of 1:80 in shower areas, and membranes require a cure period of at least 24 to 48 hours before tiling. Cure times extend in cold weather, a real scheduling factor in a Canberra winter." },
        { type: "p", text: "Waterproofing typically adds $500 to $1,000 to a bathroom. The Canberra rate card above allows $1,200." },

        { type: "h3", text: "Access, site conditions and sequencing" },
        { type: "p", text: "Upstairs work, narrow access, no parking and restricted hours in an apartment all cost time. Working around a family using the space is slower than working in an empty house." },
        { type: "p", text: "Tiling sits in the middle of a renovation. If the trades before it are not finished, the tiler either waits or comes back, and return visits are priced accordingly. A well sequenced job is cheaper to tile than the same job coordinated ad hoc." },

        { type: "h2", text: "The costs people do not budget for" },
        { type: "p", text: "**You buy more tile than the floor area.** The Canberra rate card builds in 15% wastage. General Australian guidance suggests ordering an extra 10 to 15% for breakage and future repairs, more for diagonal and herringbone layouts. Keeping spares matters because tile lines get discontinued and dye lots vary." },
        { type: "p", text: "**Removal and disposal.** Old tiles are heavy and tip fees are usually charged by weight. The Canberra rate card allows $1,500 for demolition and $800 for rubbish removal on a bathroom. These are frequently separate lines and sometimes missing entirely." },
        { type: "p", text: "**What demolition reveals.** Rotted framing, a slab further out of level than expected, or failed previous waterproofing. The most common variation on any bathroom job." },
        { type: "p", text: "**Asbestos in older homes.** WorkSafe ACT treats a residential building constructed or refurbished before 1990 as likely to contain asbestos containing material, and the ACT carries additional legacy issues including Mr Fluffy affected blocks. If present, only a licensed asbestos assessor can identify it, and only a licensed asbestos removalist can remove it in the ACT - there's no small-quantity DIY exemption here." },
        { type: "credit", text: "WorkSafe ACT, Asbestos; WorkSafe ACT, Asbestos licensing." },
        { type: "p", text: "**Trims and edging.** External corners and tile edges need either a mitre or a trim. Inexpensive, frequently omitted from quotes, and the mitred alternative is labour." },
        { type: "p", text: "**Grout upgrades.** Epoxy grout runs $800 to $1,500 for a full shower regrout against $600 to $1,200 for cement based. It lasts roughly twice as long and resists mould without sealing." },
        { type: "p", text: "**Sealing.** Natural stone and cement based grout both benefit from sealing, a separate product and a separate visit." },
        { type: "p", text: "**Making good.** Plastering, cornice repair and painting after tiling and demolition. Not the tiler's scope, and easy to leave out of a budget entirely. The Canberra rate card allows $2,500 for plastering and $500 for painting." },
        { type: "p", text: "**Other trades.** The same Canberra figures allow $3,000 for plumbing labour and $700 for electrical. An old shower screen usually cannot be refitted to new tiles, so budget replacement rather than reuse." },
        { type: "p", text: "**Margin and GST.** A project management margin and then GST apply on top of the trade cost. On the structure above that is 20%, then 10%." },

        { type: "h2", text: "How to get a quote you can rely on" },
        { type: "p", text: "The goal is not the lowest number. It is three quotes describing the same job." },
        { type: "h3", text: "Give every quoter the same brief" },
        { type: "p", text: "Same tile, same size, same layout, same scope, in writing. If one is pricing herringbone in large format porcelain and another has assumed straight-set ceramic, the comparison is meaningless before anyone has done anything wrong." },
        { type: "h3", text: "Ask what is included, line by line" },
        { type: "ul", items: [
          "Demolition, removal and disposal, including tip fees",
          "Substrate preparation, levelling and screeding",
          "Waterproofing, and who certifies it",
          "Tile supply, or is that yours",
          "Adhesive and grout, and which type",
          "Trims and edging",
          "Silicone to junctions",
          "Sealing",
          "Final clean and rubbish removal"
        ] },
        { type: "h3", text: "Ask how variations are handled" },
        { type: "p", text: "The most important question here, and the one most people skip." },
        { type: "p", text: "What happens if the substrate is worse than expected. Are variations priced at an agreed rate or quoted at the time. Does work stop for your approval before extra cost is incurred. A quote that anticipates this comes from someone who has been caught by it before, which is a good sign." },
        { type: "h3", text: "Ask about the tile order" },
        { type: "p", text: "Who is measuring, what waste allowance is assumed, and who is responsible if the order falls short." },
        { type: "h3", text: "Ask about the schedule" },
        { type: "p", text: "How many days, how many visits, what has to be finished first, and how long the waterproofing needs to cure. A typical Canberra bathroom renovation runs three to five weeks, longer for complex work." },
        { type: "h3", text: "For repairs, ask for the diagnosis before the price" },
        { type: "p", text: "A shower repair quote should name the diagnosed cause: grout failure, silicone failure, membrane failure, waste seal failure, or a supply pipe leak. A quote arriving without anyone having established where the water is going is a guess with a price on it. If regrouting or injection sealing has already been tried and the leak returned, the membrane has failed and a surface repair will not fix it." },
        { type: "h3", text: "Take a list with you" },
        { type: "p", text: "All of the above is set out as a printable [tiling quote checklist](tiling-quote-checklist-canberra.html), so you can take the same questions to each quote and write the answers next to them." },

        { type: "h2", text: "Budgeting sensibly" },
        { type: "p", text: "**Hold a contingency.** Something almost always turns up during demolition. A contingency is the difference between a variation being an inconvenience and being a crisis." },
        { type: "p", text: "**Understand what the cheapest quote is cheaper at.** Sometimes lower overhead. Often narrower scope, thinner preparation, or an assumption that becomes a variation later." },
        { type: "p", text: "**Spend where failure is expensive.** Waterproofing and substrate preparation are concealed, and they cost the most to put right afterwards because fixing them means removing the finished surface. Tile is visible and replaceable. If the budget has to give, give on the tile." },
        { type: "p", text: "**Fixtures are the biggest lever.** That $14,250 fixture allowance exceeds the tiling cost on most bathrooms. Changing tapware and vanity selection moves the total further than any tiling decision." },
        { type: "p", text: "**Keep the plumbing where it is.** Moving a toilet, shower or vanity is consistently identified as one of the largest avoidable costs, and in the ACT relocating plumbing may require a drainage plan and building approval." },

        { type: "faqs", items: [
          { q: "How much does a tiler charge per square metre in Australia?", a: "Published national rates for standard floor tiling supply and install run roughly $55 to $140 per square metre, with most guides putting the average around $75 to $100. Bathroom floor tiling sits near $85 and wall tiling near $95, the difference reflecting waterproofing preparation. Canberra bathroom labour sits squarely on that national average." },
          { q: "Why are my tiling quotes so different?", a: "Almost always because they cover different scopes. Preparation, demolition, disposal, waterproofing and trims are the usual variables. Ask each quoter to itemise against the same written brief and most of the gap becomes visible." },
          { q: "Is it cheaper to tile a small bathroom than a large room?", a: "In total yes, per square metre usually no. Small wet areas are dominated by cuts, edges and detail around penetrations. A small bathroom often lands around $2,000 to $3,500 for tiling including materials, a much higher effective rate than the headline figures suggest." },
          { q: "What does it cost to regrout a shower?", a: "Roughly $600 to $1,500 for a standard shower, with cement based grout at the lower end and epoxy at the upper. Epoxy costs more and lasts roughly twice as long without needing sealing. See [regrouting](regrouting-canberra.html)." },
          { q: "What does a leaking shower cost to fix?", a: "Anywhere from around $250 for a silicone reseal to $4,000 for a full strip-out and membrane replacement. The difference is entirely about what has failed. If water is reaching rooms outside the bathroom, the membrane has gone and a surface repair will not hold." },
          { q: "Should I supply my own tiles?", a: "It gives you control over price and selection, but responsibility for measuring, ordering enough and dealing with breakage moves to you. Agree in writing who carries that risk." },
          { q: "Does the tile I choose change the labour cost?", a: "Substantially. Size, hardness, edge type and layout pattern all affect installation time independently of the tile price. Large format adds $10 to $20 per square metre in labour alone." },
          { q: "Is waterproofing a place to economise?", a: "No. It is regulated, it is concealed once tiling starts, and correcting it later means removing the finished surface." },
          { q: "Is tiling in Canberra more expensive than other cities?", a: "On the labour evidence available, no. A Canberra tiler's published bathroom rate matches the national average closely. Renovation totals in Canberra do skew higher, which local builders attribute to ACT labour rates, compliance requirements and the age of the housing stock, though that is their claim rather than independent data." }
        ] },

      ]
    },

    /* ---------------------------------------------------------------------
       LEAKING SHOWER REPAIR - problem/diagnosis framing. Owns "an existing
       leak"; hands off membrane-as-a-system to waterproofing and grout-as-
       a-material to regrouting rather than duplicating either (build brief
       §7 cannibalisation map). ------------------------------------------- */
    {
      page: "leaking-shower-repair-canberra.html",
      name: "Leaking Shower Repair",
      shortDescription: "Why showers actually leak, which repairs hold and which ones buy a year at best, and how to get it diagnosed properly.",
      metaTitle: "Leaking Shower Repair Canberra | Sealing & Waterproofing",
      metaDescription: "Leaking shower in Canberra? We cover what causes shower leaks, which repairs actually last, and when resealing is enough versus a full rebuild.",
      headline: "Leaking Shower Repair in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Get your Canberra shower leak sorted properly",
      ctaBody: "Tell us what you are seeing, where the damp is showing up, and whether the shower has been repaired before. That last detail matters more than most people expect.",
      image: {
        src: "images/leaking-shower-drain-macro.jpg",
        alt: "Close-up of a stainless steel shower floor waste set into tiles",
        width: 1200,
        height: 805
      },
      blocks: [
        { type: "lead", text: "A leaking shower rarely announces itself. By the time you notice a damp patch on the hallway carpet or a musty smell that will not shift, water has usually been moving through the wall or slab for months." },
        { type: "p", text: "The frustrating part is that most leaking showers get \"fixed\" more than once. A resealing job that holds for eight months, then the same stain comes back. That happens because the repair treated the surface when the problem was underneath it." },
        { type: "p", text: "This page covers how to tell where your shower is actually leaking from, which repairs hold and which ones buy you a year at best, and what to expect from the process." },

        { type: "h2", text: "Signs your shower is leaking" },
        { type: "p", text: "Some are obvious. Most are not." },
        { type: "h3", text: "In the bathroom" },
        { type: "ul", items: [
          "Grout that is discoloured, crumbling, or missing in the shower floor corners",
          "Silicone that has gone black, hard, or is peeling away from the wall junction",
          "Tiles that sound hollow when you tap them (called drummy tiles, meaning the tile has debonded from what it was stuck to)",
          "White chalky deposits on grout or at the base of the wall, which is efflorescence, salt left behind as water passes through masonry",
          "Water pooling and sitting rather than draining away"
        ] },
        { type: "h3", text: "Outside the bathroom, and these are the ones that matter" },
        { type: "ul", items: [
          "Swollen or lifting skirting boards on the other side of the shower wall",
          "Carpet that is damp near the bathroom wall",
          "Floorboards cupping or lifting in the adjacent room",
          "Paint bubbling or a stain spreading on the ceiling below an upstairs shower",
          "A persistent musty smell with no visible source"
        ] },
        { type: "p", text: "If you are seeing damage outside the bathroom, the waterproofing membrane has almost certainly failed. Surface repairs will not fix that." },

        { type: "h2", text: "What actually causes a shower to leak" },
        { type: "p", text: "Here is the thing most people are never told: **grout is not waterproof.** It is porous by design. Water passes through grout, and always has." },
        { type: "p", text: "What keeps water out of your walls and floor is a waterproofing membrane that sits underneath the tiles, applied to the substrate before tiling starts. In Australia, wet area waterproofing is governed by AS 3740:2021 Waterproofing of Domestic Wet Areas, the current edition." },
        { type: "p", text: "So when a shower leaks, it is almost always one of these:" },
        { type: "h3", text: "1. The membrane has failed or was never installed properly" },
        { type: "p", text: "The most common cause in older homes and in bad renovations. Membranes fail from movement in the building, poor preparation, insufficient coverage at the wall and floor junction, or from simply not being there. As a rough anchor: ARDEX's own liquid membrane range (WPM 002) carries a 10-year manufacturer warranty when installed to specification, which is a reasonable proxy for how long a correctly installed membrane should last - actual service life depends on the specific product and how it was installed." },
        { type: "credit", text: "ARDEX Australia, WPM 002 technical data sheet." },
        { type: "h3", text: "2. Perished silicone at the junctions" },
        { type: "p", text: "Silicone at the wall to floor and wall to wall junctions is a movement joint, not a permanent seal. It is a wear item and it perishes. This is the one genuine case where a cheap fix is the correct fix." },
        { type: "h3", text: "3. A failed floor waste or puddle flange" },
        { type: "p", text: "The puddle flange is the connection between the floor waste and the membrane. If it was not bonded correctly, water tracks straight past the drain and into the slab. Common, hard to see, and cannot be fixed from the surface." },
        { type: "h3", text: "4. Cracked or missing grout" },
        { type: "p", text: "Grout failure by itself does not cause a leak if the membrane below is sound. It does let far more water reach the membrane than intended, which accelerates any weakness that is already there." },
        { type: "h3", text: "5. The shower screen seal" },
        { type: "p", text: "Water escaping past the screen rather than through the shower. Cheapest of all to fix and worth ruling out first." },
        { type: "h3", text: "6. Movement cracking" },
        { type: "p", text: "Buildings move. Slab and frame movement can crack tiles, grout and membranes over time, and it concentrates at junctions and perimeters where a rigid tiled surface has nowhere to absorb it." },

        { type: "h2", text: "Which repair do you actually need" },
        { type: "p", text: "This is where most quotes differ, and where most money gets wasted." },
        { type: "h3", text: "Regrouting and resealing" },
        { type: "p", text: "**What it is:** Old grout is raked out and replaced, silicone joints are cut out and redone." },
        { type: "p", text: "**When it works:** When the membrane underneath is intact and you have caught surface deterioration early. Also the right answer when the only problem is perished silicone." },
        { type: "p", text: "**When it does not:** If water is already reaching rooms outside the bathroom, regrouting is cosmetic. You are sealing the top of a system that has failed underneath. Expect it to come back." },
        { type: "h3", text: "Surface applied sealing systems" },
        { type: "p", text: "**What it is:** A clear or coloured sealer applied over the existing tiles and grout, sometimes marketed as a leaking shower repair with no tile removal. Several of these systems are sold with long warranties." },
        { type: "p", text: "**When it works:** As a genuine extension of service life on a shower that is deteriorating but structurally sound." },
        { type: "note", text: "Be careful here. These systems are heavily marketed precisely because they are cheaper and less disruptive than the alternative, and they are often sold for jobs where the membrane has already failed. A sealer applied over a failed membrane traps moisture rather than removing it. Ask directly whether the assessment found membrane failure, and ask what the warranty actually covers if the leak returns." },
        { type: "h3", text: "Floor waste and puddle flange repair" },
        { type: "image", src: "images/shower-waterproofing-cross-section.jpg", alt: "Cross-section diagram of a shower corner showing the waterproof membrane running below the tiles and screed, up the wall junction, and connecting to the floor waste at the puddle flange", width: 1200, height: 805 },
        { type: "p", text: "**What it is:** Localised removal of tiles around the drain, correcting the flange to membrane connection, then rewaterproofing and retiling that area." },
        { type: "p", text: "**When it works:** When the leak has been traced specifically to the drain connection and the rest of the membrane is sound. Much less disruptive than a full rebuild." },
        { type: "h3", text: "Full strip out and rewaterproof" },
        { type: "p", text: "**What it is:** Tiles and screed removed back to the substrate, new membrane applied, new screed and tiles." },
        { type: "p", text: "**When it works:** When the membrane has failed. It is the only repair that actually addresses the cause." },
        { type: "p", text: "**The honest version:** this is the expensive option and no one wants to hear it. But a full rewaterproof done once costs less than three surface repairs and the water damage that accumulates between them. If two previous repairs have not held, this is why." },

        { type: "h2", text: "What leaking shower repair costs in Canberra" },
        { type: "p", text: "These are estimates rather than our quotes. They are here so you can tell whether a number you have been given sits in the normal range. The only way to know what your shower costs is to have someone look at it." },
        { type: "table", caption: "ACT figures except where marked - third party estimates, August 2026", headers: ["Repair", "Typical range", "Basis"], rows: [
          ["Silicone replacement only", "$180 to $380", "ACT"],
          ["Partial regrout, small recess", "$280 to $580", "ACT"],
          ["Regrout and reseal, standard shower", "$480 to $980", "ACT"],
          ["Floor waste or puddle flange repair", "$280 to $650", "ACT"],
          ["Surface applied sealing system", "$495 to $795, or $1,000 to $2,000 for a full epoxy reseal", "National - no ACT figure published"],
          ["Full strip out and rewaterproof", "$1,800 to $2,800 and up", "ACT"]
        ] },
        { type: "p", text: "As a check against real jobs rather than published guides, Canberra listings on Airtasker through 2025 and 2026 ran from around $100 for a simple cubicle regrout, to about $350 for a one square metre recess with the screen involved, up to about $1,500 for larger work." },

        { type: "h3", text: "What moves the price" },
        { type: "ul", items: [
          "**What is under the floor.** The biggest single factor in Canberra. A shower on a concrete slab is a more predictable job than the same shower on a suspended timber floor, and if the timber has been wet long enough to soften, the work stops being a tiling job and becomes a structural one.",
          "**Where the house is.** Older stock through the inner north and inner south is more likely to have timber subfloors and original wet area construction. Newer areas such as Gungahlin and the Molonglo Valley are more likely to be slab on ground with modern waterproofing, and quote lower for the same repair.",
          "**Size of the recess.** More area means more linear metres of joint, and joints are where the labour is.",
          "**Tile size.** This one catches people out. Small tiles and mosaics carry far more grout line per square metre than large format tiles, so anything grout related costs more on a mosaic floor than on a 600 by 600 floor of exactly the same area.",
          "**Access.** A second storey bathroom, a narrow stair, or nowhere to put a skip adds hours that have nothing to do with tiling.",
          "**How many times it has been repaired already.** Each previous surface repair has to come off before the next goes on, and a shower that has been sealed twice is telling you something about the substrate underneath."
        ] },
        { type: "p", text: "Related reading: [Canberra Tiling Cost Guide](tiling-cost-guide-canberra.html)." },

        { type: "h2", text: "How long does it take" },
        { type: "p", text: "The labour is rarely what sets the timeline. Waiting for waterproofing to cure is, and it is the part most people are not told about when they take a quote." },
        { type: "ul", items: [
          "**Silicone replacement only** - a few hours on site. Old silicone cut out, joints cleaned and properly dried, new bead applied. Then leave the shower out of use while it cures.",
          "**Regrout and reseal** - usually a day on site for a standard shower, then grout cure before the shower is used again.",
          "**Surface applied sealing system** - about a day, with the wait set entirely by that product's own cure schedule.",
          "**Floor waste or puddle flange repair** - localised work, but it breaks into the membrane, so it carries the same cure wait as any rewaterproofing.",
          "**Full strip out and rewaterproof** - the multi-day one. Strip out, substrate preparation, membrane in coats, cure, screed, tile, grout, then cure again before the shower goes back into use."
        ] },
        { type: "p", text: "The membrane is the bottleneck, and the manufacturers publish the numbers. Ardex WPM 002 wants 1 to 2 hours between coats, is ready to tile at 24 hours, and reaches full cure at 3 days. Davco K10 Plus wants 1 to 2 hours between coats and 6 to 8 hours before tiling. Faster products exist - Ardex WPM 155 Rapid Plus is rated to accept tiles in around 4 hours - and they cost more, which is sometimes worth it if the bathroom is the only one in the house." },
        { type: "credit", text: "ARDEX Australia WPM 002 and WPM 155 Rapid Plus product data; Davco K10 Plus product data, Sika Australia." },
        { type: "p", text: "Here is the part that matters in Canberra. Those figures assume roughly 22 to 23 degrees and 50% humidity. Sika states it plainly: the lower the temperature, the slower the membrane dries. An unheated Canberra bathroom in July is nowhere near 22 degrees, so winter cure times run longer than the datasheet - sometimes considerably longer. If someone proposes waterproofing in the morning and tiling over it the same afternoon in the middle of winter, that is worth questioning before the tiles go on." },

        { type: "h2", text: "Getting it diagnosed properly" },
        { type: "p", text: "The single most useful thing you can do before agreeing to any repair is get the leak actually located rather than guessed at." },
        { type: "p", text: "A proper assessment should identify whether water is escaping at the surface or below the membrane, and should tell you which of the causes above applies. A flood test, where the shower base is plugged, filled with water to the height of the upstand and left, is widely used to confirm whether the base actually holds water. Membrane manufacturers' own installation guides commonly specify leaving it for at least 24 hours before checking the level." },
        { type: "credit", text: "Manufacturer flood-testing guidance (e.g. Laticrete, Mapei); not a universal AS 3740 mandate on every job, but standard industry practice." },
        { type: "p", text: "If a quote arrives without anyone having established where the water is going, it is a guess with a price on it." },

        { type: "faqs", items: [
          { q: "Can a leaking shower be fixed without removing the tiles?", a: "Sometimes. If the waterproofing membrane below the tiles is still sound and the problem is deteriorated grout or perished silicone, then yes, a surface repair is the correct fix. If the membrane has failed, no surface treatment will stop it, and applying one can trap moisture in the wall or slab. Which applies to your shower is the question a proper assessment answers." },
          { q: "Why does my shower keep leaking after it was repaired?", a: "Usually because the repair addressed the surface and the failure is underneath. Regrouting a shower with a failed membrane will hold for a while, because new grout slows water down. It does not stop it. If a shower has been repaired twice and leaked twice, the membrane is the likely cause." },
          { q: "Is grout waterproof?", a: "No. Grout is porous and water passes through it. The waterproofing membrane beneath the tiles is what keeps water out of the building. This surprises most people and it explains why regrouting alone often does not solve a leak." },
          { q: "What are drummy tiles and do they mean my shower is leaking?", a: "Drummy tiles sound hollow when tapped, meaning the tile has separated from the surface behind it. It does not prove a leak on its own, but it often means water has been sitting where it should not be, and it is a reason to have the shower looked at." },
          { q: "How do I know if the leak is coming from the shower or from the plumbing?", a: "Plumbing leaks tend to be constant, while shower waterproofing leaks usually worsen after the shower is used and settle in between. That is a useful indicator, not a diagnosis. A flood test distinguishes the two properly." },
          { q: "Does a leaking shower cause damage beyond the bathroom?", a: "Yes, and this is why it is worth acting early. Water tracking into wall frames and under flooring causes timber damage, and persistent damp supports mould growth. The repair cost rises considerably once the damage extends past the bathroom itself." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       WATERPROOFING - membrane-as-a-system framing, new work. Hands off to
       leaking-shower-repair for symptoms/diagnosis rather than duplicating
       (build brief §7). Scoped to wet areas + a short balcony section, with
       below-ground/structural waterproofing explicitly excluded. --------- */
    {
      page: "waterproofing-canberra.html",
      name: "Waterproofing",
      shortDescription: "What the standard requires, why membranes fail, the certification you should receive, and what to check before tiling starts.",
      metaTitle: "Waterproofing Canberra | Bathroom & Wet Area Membranes",
      metaDescription: "Wet area waterproofing in Canberra explained: what the standard requires, why membranes fail, and what to check before tiling starts.",
      headline: "Waterproofing in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Waterproofing for a Canberra bathroom",
      ctaBody: "Tell us whether this is new work as part of a renovation, or an existing membrane you think has failed. Those are different jobs with very different costs, and it is the first thing anyone quoting will need to know.",
      image: {
        src: "images/waterproofing-tile-edge-macro.jpg",
        alt: "Close-up of a tiled corner edge showing crisp tile and grout line detailing",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "Waterproofing is the only part of a bathroom you pay for and never see." },
        { type: "p", text: "Once the tiles go on, the membrane is sealed underneath them permanently. There is no inspecting it later, no topping it up, and no way to check whether it was done properly except by removing the finished surface. If it was done badly, you find out two or three years later when a skirting board swells in the next room." },
        { type: "p", text: "That is what makes it different from every other line on a renovation quote. Everything else can be assessed after the fact. This cannot." },
        { type: "p", text: "This page covers what wet area waterproofing actually involves, what the standard requires, what documentation you should end up holding, and the specific points to check while the work is still visible." },

        { type: "h2", text: "Where waterproofing is required" },
        { type: "p", text: "Wet area waterproofing in Australian homes is governed by AS 3740:2021 Waterproofing of Domestic Wet Areas, the current (fifth) edition, which superseded AS 3740-2010." },
        { type: "credit", text: "AS 3740:2021, Standards Australia." },
        { type: "p", text: "The standard sets out where waterproofing is required and to what extent, and the requirements differ by area and by construction type. Broadly it covers:" },
        { type: "ul", items: [
          "Shower areas, with the most extensive requirements of any wet area",
          "Bathroom floors, with the extent depending on whether the room is enclosed and how the shower is configured",
          "Laundries, which are a wet area with real requirements even though they are routinely treated as though they are not - see [laundry tiling](laundry-tiling-canberra.html)",
          "Areas over habitable spaces, where a failure has somewhere worse to go"
        ] },
        { type: "p", text: "One extent requirement is concrete and worth knowing on a Canberra job specifically: shower walls must be waterproof to at least 1800mm above finished floor level, following Access Canberra's own construction guidance for wet areas in single residential (Class 1) buildings." },
        { type: "credit", text: "Access Canberra, Construction Note 01/2023 – Wet Areas." },
        { type: "p", text: "A second difference is worth knowing because it changes the size of the job: what the floor is made of. Outside the shower area itself, the National Construction Code requires a timber based floor - plywood and particleboard included - to be waterproof, while a concrete or fibre cement floor in the same position need only be water resistant. Canberra has plenty of both slab on ground and suspended timber floors, and a bathroom sitting on timber generally needs more of its area membraned than the same bathroom on a slab. That is a real difference in scope and cost rather than an upsell, and it is worth asking which one you have before comparing two quotes." },
        { type: "credit", text: "National Construction Code, Specification 26 - Waterproofing and water-resistance requirements for building elements in wet areas, clause S26C4. AS 3740 carries the installation detail." },
        { type: "p", text: "One requirement worth knowing because it is easy to check: the standard sets a minimum fall to waste in shower areas of 1:80. A shower floor that holds water rather than draining is not just annoying, it is outside the standard." },

        { type: "h2", text: "Who can do it in the ACT" },
        { type: "p", text: "Unlike builders, electricians and plumbers, waterproofing does not appear on Access Canberra's list of licensed construction occupations - there is no separate \"licensed waterproofer\" trade in the ACT the way there is in some other regulatory contexts." },
        { type: "credit", text: "Access Canberra / City and Environment Directorate, list of ACT construction occupation licences." },
        { type: "p", text: "What is regulated instead is the documentation. Wet area waterproofing details have to be submitted as part of the building approval for Class 1 (single residential) work, and Access Canberra has specifically flagged incorrect or undocumented wet area waterproofing as a recurring compliance problem. A building surveyor requires that documentation before signing off tiling, and undocumented or non-compliant waterproofing can trigger a Stop Work Notice under the Building Act 2004." },
        { type: "credit", text: "Access Canberra, Construction Note 01/2023 – Wet Areas (updating 2022/13); Building Act 2004 (ACT)." },
        { type: "p", text: "Many tilers also hold waterproofing qualifications, and on smaller jobs the same operator often does both. On larger renovations it is frequently a separate trade attending between the plumber and the tiler." },
        { type: "p", text: "Either arrangement is fine. What matters is that whoever applies the membrane can produce the documentation a building surveyor will ask for." },

        { type: "h2", text: "Why waterproofing fails" },
        { type: "image", src: "images/shower-waterproofing-cross-section.jpg", alt: "Cross-section diagram of a shower corner showing the waterproof membrane running below the tiles and screed, up the wall junction, and connecting to the floor waste at the puddle flange", width: 1200, height: 805 },
        { type: "p", text: "**It was never applied properly.** Insufficient coverage, wrong number of coats, or inadequate detail at the junctions where the wall meets the floor. Junctions are where nearly all failures start, because that is where movement concentrates." },
        { type: "p", text: "**The substrate was not prepared.** Membranes bond to what is underneath them. Dust, moisture, or an unsuitable surface means the membrane is sitting on the substrate rather than bonded to it." },
        { type: "p", text: "**It was tiled over too early.** Membranes need a cure period before tiling, at minimum 24 to 48 hours and longer in cold conditions. Tiling over an uncured membrane compromises it. This is the corner most often cut on a job running late, and it is invisible afterwards." },
        { type: "p", text: "**The puddle flange was not connected.** The puddle flange is the junction between the floor waste and the membrane. If the membrane is not properly bonded to it, water tracks straight past the drain and into the slab or subfloor. Common, and it cannot be fixed from the surface." },
        { type: "p", text: "**Movement.** Buildings move. Membranes are designed to accommodate a degree of it, but movement joints have to be detailed correctly for that to work." },
        { type: "p", text: "**Age.** Older homes may have a membrane that has reached the end of its service life, or in homes beyond a certain age, no membrane at all. As a rough anchor, ARDEX's own liquid membrane range (WPM 002) carries a 10-year manufacturer warranty when installed to specification - a reasonable proxy for how long a correctly installed membrane should last, though the actual figure depends on the specific product and installation." },
        { type: "credit", text: "ARDEX Australia, WPM 002 technical data sheet." },

        { type: "h2", text: "New work and remedial work" },
        { type: "p", text: "**New waterproofing** is applied as part of a renovation or new build, after the plumbing rough-in and before tiling. It is the straightforward case, because everything is open and accessible." },
        { type: "p", text: "**Remedial waterproofing** means an existing membrane has failed. This is the expensive case, because reaching the membrane means removing the tiles and screed above it. There is no way around that. Any product sold as a way to restore failed waterproofing from the surface is treating a symptom." },
        { type: "p", text: "That distinction matters when you are comparing quotes. Waterproofing typically adds $500 to $1,000 to a bathroom as part of new work, and a Canberra tiler's published calculator allows $1,200. Remedial waterproofing repair runs materially higher, from around $500 to $2,500 depending on the area involved, before any tiling reinstatement. See the [cost guide](tiling-cost-guide-canberra.html) for the full breakdown and sources." },
        { type: "p", text: "If your shower is already leaking, the question is not really about waterproofing pricing. It is about diagnosis first. See [leaking shower repair](leaking-shower-repair-canberra.html)." },

        { type: "h2", text: "Balconies and external areas" },
        { type: "p", text: "Balconies and decks over habitable space are waterproofed too, and failures there tend to be more expensive because the water has somewhere to go and something to damage on the way." },
        { type: "p", text: "**A balcony fails the same way a shower does.** There is a membrane under the tiles, the membrane is what keeps water out, and the grout is not it. The failure points are the same ones: the junction where the balcony floor meets the wall of the building, the connection at the drainage outlet, and the perimeter and threshold at the door." },
        { type: "p", text: "**What differs is what is underneath.** A failed shower membrane damages the bathroom and the room beside it. A failed balcony membrane over habitable space puts water into a ceiling, and in a unit or a townhouse it frequently puts it into someone else's." },
        { type: "p", text: "That makes balconies a common problem in units and townhouses specifically, where the same construction detail is repeated across a building and any weakness in it is repeated with it. Where a balcony is common property or the building is under a body corporate, who is responsible for the repair is worth settling before anyone starts removing tiles, because the answer changes who is paying for the strip-out." },
        { type: "p", text: "**The symptoms** are a stain or bubbling paint on the ceiling below, efflorescence or damp at the wall under the balcony, tiles on the balcony sounding drummy or lifting, and water ponding at the outlet rather than draining away. Drummy tiles on a balcony deserve the same attention they get in a bathroom and for the same reason - see [tile repair](tile-repair-canberra.html)." },
        { type: "p", text: "**The repair is the same shape as a shower repair.** If the membrane has failed, reaching it means removing the tiles and the screed above it, and no surface product restores a failed membrane. If the problem is a perished perimeter sealant, a blocked outlet, or a threshold that was never detailed, it is a far smaller job. Which one it is has to be established before anyone prices it, and the reasoning is the same as it is for a shower - see [leaking shower repair](leaking-shower-repair-canberra.html)." },
        { type: "p", text: "The exposure is different from a bathroom. External membranes deal with UV, thermal cycling and standing water rather than daily wetting, and the systems specified reflect that." },
        { type: "p", text: "For new balcony, alfresco and patio tiling rather than a repair, see [outdoor and patio tiling](outdoor-patio-tiling-canberra.html)." },
        { type: "p", text: "What this page does not cover is below-ground and structural waterproofing: basements, retaining structures, tanking, and remedial work on building envelopes. That is a separate discipline with different contractors, and a tiler is not who you want for it." },

        { type: "h2", text: "The part most people miss: certification" },
        { type: "p", text: "This is the section worth reading twice." },
        { type: "p", text: "Waterproofing is a concealed, regulated element of your home. The documentation proving it was done correctly is the only evidence that survives once the tiles are on." },
        { type: "p", text: "That documentation matters at three points that feel distant when you are mid-renovation:" },
        { type: "p", text: "**Selling.** A buyer's building inspection may query wet area work, particularly on a recent renovation. Documentation answers the question. Its absence invites the discount." },
        { type: "p", text: "**Insurance.** Water damage claims can turn on whether the work was carried out and certified appropriately." },
        { type: "p", text: "**Warranty.** A membrane manufacturer's warranty generally depends on the product having been installed by an appropriately licensed applicator in accordance with their specification. No record of who applied it, and there is nothing to claim against." },
        { type: "p", text: "Ask for it at the time. Reconstructing it two years later is difficult and sometimes impossible." },

        { type: "h2", text: "What to check while it is still visible" },
        { type: "p", text: "You get one window to look at waterproofing, between application and tiling. Use it." },
        { type: "ul", items: [
          "**Look at the junctions.** Wall to floor and internal corners should be visibly detailed, not simply coated over. This is where failures start.",
          "**Look at the floor waste.** The membrane should be visibly connected into the puddle flange.",
          "**Check the coverage.** The membrane should extend to the heights the specification calls for, not stop at a convenient line.",
          "**Ask when it was applied and when tiling starts.** If the answer is same day or next morning in cold weather, ask about the cure time for the specific product used.",
          "**Ask whether a flood test is being done.** Plugging the waste and filling the base confirms it holds water before anything is tiled over it.",
          "**Take photos.** Yours, not theirs. Five minutes with a phone before tiling starts is the cheapest insurance available on a renovation, and it is the record that answers questions years later."
        ] },
        { type: "note", text: "Flood testing isn't universally mandated by AS 3740 on every job, but it is standard industry practice and a condition of some manufacturers' warranties. The usual method: plug the waste, fill to the height of the upstand, and leave it for at least 24 hours before checking whether the level has dropped." },
        { type: "credit", text: "Manufacturer flood-testing guidance (e.g. Laticrete, Mapei)." },

        { type: "faqs", items: [
          { q: "Do I really need waterproofing if I am only replacing tiles?", a: "If the existing membrane is intact and undisturbed, sometimes not. But removing tiles frequently damages the membrane beneath them, and a membrane at the end of its service life is worth replacing while the area is open. The realistic assessment happens once the tiles are off." },
          { q: "Can waterproofing be done after tiling?", a: "No, not properly. The membrane goes under the tiles. Products applied over a finished surface are sealers, which is a different thing serving a different purpose." },
          { q: "How long does waterproofing take?", a: "The application itself is quick. The cure time before tiling is what drives the schedule, at minimum 24 to 48 hours and longer in cold conditions, which is a real factor in a Canberra winter." },
          { q: "Is grout or silicone waterproof?", a: "No. Grout is porous and water passes through it. Silicone at junctions is a movement joint and a wear item. Neither is the waterproofing layer, and neither substitutes for it. This is the single most common misunderstanding about bathrooms." },
          { q: "What does waterproofing cost?", a: "As part of a new bathroom, generally $500 to $1,000, with one Canberra operator's published calculator allowing $1,200. Remedial work on a failed membrane costs more, and the tiling reinstatement above it is a separate cost again." },
          { q: "How do I know if my waterproofing has failed?", a: "Damp appearing outside the bathroom is the clearest sign: swollen skirtings, lifting floorboards, damp carpet against a bathroom wall, or a stain on a ceiling below. Surface symptoms inside the bathroom alone are less conclusive." },
          { q: "Should the same person do the waterproofing and the tiling?", a: "Either arrangement works, provided whoever applies the membrane can produce the documentation a building surveyor will ask for. On smaller jobs one operator commonly does both. On larger renovations it is often a separate trade." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       REGROUTING - grout-as-a-material framing, maintenance/restoration.
       Two deliberate hand-offs to leaking-shower-repair at the "damp
       outside the bathroom" test, never duplicated (build brief §7). Tile
       and grout CLEANING is explicitly declined here in prose rather than
       linked out - different renter pool, see build brief §3. ------------ */
    {
      page: "regrouting-canberra.html",
      name: "Regrouting",
      shortDescription: "When grout can be repaired, when it needs full replacement, cement versus epoxy, and how to spot a shortcut job.",
      metaTitle: "Regrouting Canberra | Shower & Floor Grout Repair",
      metaDescription: "Regrouting in Canberra explained. When grout can be repaired, when it needs full replacement, cement versus epoxy, and how to spot a shortcut job.",
      headline: "Regrouting in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Get a straight answer on your grout",
      ctaBody: "Tell us where the grout is failing, whether it is cracked or just discoloured, and how old the tiling is. Those three things determine whether you need a clean, a corner reseal, or a full regrout, and they are very different jobs.",
      image: {
        src: "images/regrouting-grout-float-macro.jpg",
        alt: "Close-up of a grout float smoothing fresh grout between tiles",
        width: 1200,
        height: 805
      },
      blocks: [
        { type: "lead", text: "Grout is the part of a tiled surface that wears out first. It is porous, it sits in the lowest point of the surface where water and dirt collect, and it takes the movement that the tiles themselves cannot." },
        { type: "p", text: "So grout failing is not a sign something went wrong. It is what grout does. The question is whether yours needs cleaning, repairing, or replacing, and those are three different jobs at three different prices." },

        { type: "h2", text: "Which one do you actually need" },
        { type: "p", text: "Most people arrive at regrouting having already tried something that did not work. Here is how the options separate." },
        { type: "p", text: "**Your grout is discoloured but intact.** This is a cleaning job, not a regrouting job. Cement grout is porous and absorbs soap residue, body oils and mineral deposits. Regrouting discoloured but sound grout is spending replacement money on a cleaning problem. Tile and grout cleaning is generally handled by cleaning specialists rather than tilers, and it is not something we take on." },
        { type: "p", text: "**Your grout is cracked, crumbling, or missing in places.** This is regrouting territory, and the rest of this page is about it." },
        { type: "p", text: "**The grout is fine but the corners have cracked.** Very common, and usually a sign the internal corners were grouted when they should have been siliconed. Covered below." },
        { type: "p", text: "**You have damp appearing outside the bathroom.** Stop. Regrouting will not fix that, and doing it first wastes money and time. Water reaching adjacent rooms means the waterproofing membrane below the tiles has likely failed, and no amount of new grout seals a failed membrane. See [leaking shower repair](leaking-shower-repair-canberra.html) before booking anything." },
        { type: "p", text: "That last one matters. Regrouting is often sold as a leak fix. It works as one only when the membrane underneath is sound." },

        { type: "h2", text: "Why grout fails" },
        { type: "p", text: "**Normal wear.** Cement grout is a wear surface. It erodes, particularly in shower floors and high traffic areas." },
        { type: "p", text: "**Movement.** Buildings move. Tiles are rigid, grout joints are where that movement concentrates, and hairline cracking follows." },
        { type: "p", text: "**Wrong grout for the joint.** Grout is manufactured for different joint widths. As a working guide, Davco's own unsanded (fine) grout is formulated for joints up to around 3mm, with sanded (coarse) grout specified above that, because the sand provides bulk and resists shrinkage in the wider joint." },
        { type: "credit", text: "Davco (Sika Australia), grout product data sheets." },
        { type: "p", text: "**Acidic cleaners.** This one catches a lot of people out. Cement based grout is porous and cement is itself attacked by acid, so an acidic bathroom cleaner used regularly over years can etch and erode the grout it is meant to be maintaining. Ardex is explicit about it in their own maintenance bulletin: for their cementitious grouts the cleaning agent must be neutral or alkaline, because cementitious products corrode in contact with acid. The same bulletin warns that strong bleach can affect the oxides that give grout its colour, so dilute it well if you use it at all. Epoxy grout is the exception and tolerates acidic cleaners - but most domestic bathrooms are grouted with a cement based product, so the warning applies to nearly every shower in Canberra." },
        { type: "credit", text: "Ardex Australia, Technical Bulletin TB186.004, \"Cleaning / Maintenance of ARDEX Grouts\", July 2024." },
        { type: "p", text: "**Poor original installation.** Grout applied too dry, joints not filled to full depth, or grouting done before the adhesive had cured. Failures from this show up early and usually across the whole surface at once rather than in patches." },

        { type: "h2", text: "Partial or full regrout" },
        { type: "p", text: "**Partial** makes sense when failure is confined to one area, such as a shower floor while the walls are sound." },
        { type: "p", text: "The catch is colour. New grout will not match aged grout, even using the same product and colour code, because the existing grout has years of wear and staining on it. A patched section stays visible. Anyone quoting a partial regrout should tell you that before they start rather than after." },
        { type: "p", text: "**Full regrout** gives a uniform result and is the only sensible option when failure is widespread or when you are changing grout colour." },

        { type: "h2", text: "Cement or epoxy" },
        { type: "p", text: "**Cement based grout** is the standard. Cheaper, easier to work with, available in a wide colour range, and straightforward to repair later. It is porous, so it stains and it needs sealing to resist that." },
        { type: "p", text: "**Epoxy grout** is non porous, so it resists staining and chemical attack without sealing, and it holds colour far better over time. It costs more in both material and labour, because it has a short working time and has to be cleaned off the tile face before it sets. Done badly it leaves a haze on the tiles that is difficult to remove." },
        { type: "p", text: "Epoxy is worth the difference in a shower floor or a kitchen splashback. Whether it is worth it across an entire floor is a budget decision - on current Australian retail pricing, standard cement-based grout runs roughly $2 to $6 per kilogram, while epoxy grout runs roughly $15 to $45 per kilogram depending on the brand and pack size, so figure on epoxy costing somewhere from three to eight times as much in material alone before labour." },
        { type: "credit", text: "Retail per-kg pricing, National Tiles and other major Australian tile suppliers, August 2026 - trade pricing may differ." },

        { type: "h2", text: "Grout sealing is not regrouting" },
        { type: "p", text: "Worth separating, because the two get quoted in the same conversation and they do different things." },
        { type: "p", text: "**Grout sealing** is a penetrating sealer applied to sound cement based grout so that it absorbs less water, soap residue and staining. It is maintenance rather than repair, it is cheap, and it wears: it is reapplied periodically rather than done once. Published rates run around $5 to $15 per square metre." },
        { type: "p", text: "**Regrouting** replaces the grout itself. It is what you do when the grout has physically failed, and sealing failing grout does not arrest the failure - it just makes it look wetter for a while." },
        { type: "p", text: "**Epoxy grout needs neither**, because it is non porous. That recurring sealing line is part of what the higher up-front price buys back." },
        { type: "p", text: "There is a third product sold alongside both: a colour seal or grout paint, which coats the surface of existing grout to change or restore its colour. It is cosmetic. It works on grout that is sound but stained, and it does nothing at all for grout that is cracking or letting water through." },

        { type: "h2", text: "What a proper regrout involves" },
        { type: "image", src: "images/regrouting-removal-depth.jpg", alt: "Diagram comparing correct full-depth grout removal against a shallow skim-over that leaves old grout packed beneath a thin new layer", width: 1200, height: 805 },
        { type: "p", text: "This is worth knowing because the shortcut version is common and it fails within a year or two." },
        { type: "p", text: "**Removal.** Old grout is raked out mechanically. Ardex's published regrouting guidance is to remove to a depth matching the width of the joint, capped at 6mm - so a 3mm joint gets 3mm taken out, while a 10mm joint still only needs 6mm. Skimming ordinary cement grout over the top of old grout is the common shortcut, and it fails because the new layer is too thin to bond or hold up." },
        { type: "p", text: "There is a real exception, and it is worth knowing before you accept or reject a quote. Premixed products exist that are made specifically to go over existing grout - Davco's Rejuvenation Grout is the Australian example - and they need only 1mm of depth below the tile face rather than a full rake out. The constraints are narrow: joints 1 to 5mm wide, glossy smooth tiles only, and explicitly not flush joints or textured, porous or unglazed tiles. It is a cosmetic refresh for grout that is sound but stained, not a repair for grout that is failing. If the grout is cracking, crumbling, or letting water through, it comes out properly." },
        { type: "credit", text: "ARDEX regrouting guidance; Davco Rejuvenation Grout product data sheet (Sika Australia, August 2022, version 01.01)." },
        { type: "p", text: "**Cleaning out.** Joints vacuumed and cleaned so the new grout bonds to the tile edges rather than to dust." },
        { type: "p", text: "**Grouting.** New grout worked into the joints to full depth, then cleaned off the tile face before it sets." },
        { type: "p", text: "**Curing.** Grout needs to cure before the surface is wetted or sealed, and cure times lengthen in cold conditions, which is worth planning around in a Canberra winter. As a general anchor, mainstream Australian cement-based grouts specify around 24 hours' cure at room temperature before the surface can be cleaned or sealed, with full chemical cure taking considerably longer - Ardex's own FG 8 grout, for example, wants roughly three weeks before it is fully cured and ready to be exposed to chemicals." },
        { type: "credit", text: "Davco (Sika Australia) and ARDEX Australia grout technical data sheets. Confirm against the specific product being used, and expect longer in cold weather." },
        { type: "p", text: "**Sealing.** Cement grout benefits from sealing. Epoxy does not need it." },
        { type: "p", text: "If a quote covers a full shower regrout in under a couple of hours, ask specifically how the old grout is being removed." },

        { type: "h2", text: "Corners should be silicone, not grout" },
        { type: "p", text: "Internal corners, and the junction where the wall meets the floor, are movement joints. They need a flexible sealant, not a rigid one." },
        { type: "p", text: "Grout in those junctions cracks. It is not a sign of a bad tiler necessarily, since it is a very common practice, but it is the wrong material for that location and the cracking will keep coming back regardless of how many times it is regrouted." },
        { type: "p", text: "If your grout is failing only in the corners while the flat joints are sound, this is almost certainly why, and the fix is to cut it out and silicone it rather than to regrout the whole surface. That is a much smaller job and worth knowing before you accept a quote for the larger one." },

        { type: "h2", text: "What regrouting costs in Canberra" },
        { type: "p", text: "These are estimates, not our quotes. Where only a national figure has been published, it is marked as national rather than dressed up as a Canberra number." },
        { type: "table", caption: "Third party estimates, August 2026", headers: ["Job", "Typical range", "Basis"], rows: [
          ["Silicone replacement, corners only", "$180 to $380", "ACT"],
          ["Shower regrout, cement grout, standard shower", "$480 to $980", "ACT"],
          ["Shower regrout, epoxy grout, standard shower", "$800 to $1,500", "National - epoxy carries a premium over cement"],
          ["Floor regrout, per square metre", "$25 to $60 per m² ($15 to $25 cement, $30 to $50 epoxy)", "National"],
          ["Grout sealing, per square metre", "$5 to $15 per m²", "National"]
        ] },
        { type: "p", text: "Epoxy costs more up front and is worth it in the places that stay wet. It is non porous, so it does not need periodic sealing the way cement grout does, and the sealing line above is a recurring cost that epoxy removes entirely." },

        { type: "h3", text: "What moves the price" },
        { type: "ul", items: [
          "**Tile size, more than anything else.** Regrouting is priced by the metre of joint, not really by floor area. A mosaic floor has several times the grout line of a 600 by 600 floor covering exactly the same space, so the same room can quote at wildly different numbers depending only on what is on it.",
          "**Joint width and depth.** Wider joints hold more grout and take longer to rake out cleanly. Narrow joints are fiddlier to clear without chipping the tile edge. Neither is simply cheaper.",
          "**Walls or floors.** Wall work is slower than floor work - you are holding position and working against gravity, and the float cannot be loaded the same way.",
          "**Pattern.** Herringbone, chevron and other angled layouts have more joint per square metre than a straight lay, and more of it meets the tile at an angle, which slows the raking out.",
          "**Condition of what is there.** Sound grout that just looks tired is a straightforward job. Grout that is crumbling, mouldy through its depth, or hiding movement cracks is not, and it may not be a regrout at all.",
          "**Whether it is actually a regrout.** If water has been getting past the grout for a while, regrouting seals the symptom over a wet substrate. Worth reading the [leaking shower repair](leaking-shower-repair-canberra.html) page before spending money on the wrong repair."
        ] },
        { type: "p", text: "Related reading: [Canberra Tiling Cost Guide](tiling-cost-guide-canberra.html)." },

        { type: "faqs", items: [
          { q: "How long does regrouting last?", a: "It depends far more on the grout type and the conditions than on the job itself. Epoxy outlasts cement grout considerably. Cement grout in a daily use shower wears faster than the same grout on a hallway floor." },
          { q: "Can I regrout over existing grout?", a: "Not properly. The old grout has to be raked out first. Applying a thin layer over the top gives a good result for a few months and then breaks up, because the new material is too shallow to hold." },
          { q: "Will regrouting stop my shower leaking?", a: "Only if the waterproofing membrane underneath the tiles is still sound. Grout is porous and was never the waterproofing layer. If water is reaching rooms outside the bathroom, the membrane is the problem and regrouting is a cosmetic fix on a structural failure. See [leaking shower repair](leaking-shower-repair-canberra.html)." },
          { q: "Why does my grout keep cracking in the same corner?", a: "Because that corner is a movement joint and it has been grouted instead of siliconed. Regrouting it will produce the same crack again. Cutting it out and sealing it with silicone is the actual fix." },
          { q: "Can I change the grout colour?", a: "Yes, with a full regrout. Going darker is straightforward. Going lighter is harder, because any residue from the old grout shows through. There are also colour sealing products that stain existing grout rather than replacing it, which are cheaper but do not address grout that is physically failing." },
          { q: "Is regrouting something I can do myself?", a: "The removal is the hard part, and it is where tiles get chipped. On a small area with sound tiles it is a reasonable DIY job. On a shower where the grout is failing because of a problem underneath, DIY regrouting mostly delays the diagnosis." },
          { q: "Does new grout need sealing?", a: "Cement based grout does, and it should be resealed periodically after that. Epoxy grout does not, which is part of what you are paying for." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       TILE REMOVAL - best commercial profile of the service pages, and the
       silica dust section is the strongest differentiator on the site
       (build brief page 10 notes). Both major markers are safety/
       regulatory claims - must not be approximated. --------------------- */
    {
      page: "tile-removal-canberra.html",
      name: "Tile Removal",
      shortDescription: "What drives the cost, what is left behind, the dust and asbestos risks in older homes, and when tiling over is the better option.",
      metaTitle: "Tile Removal Canberra | Floor & Wall Tile Strip Out",
      metaDescription: "Tile removal in Canberra: what drives the cost, the dust and asbestos risks in older homes, and when tiling over is the better option.",
      headline: "Tile Removal in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Tile removal in Canberra",
      ctaBody: "Tell us what is being removed, what it is stuck to, and roughly when the house was built. That last one matters, because in older homes identification comes before demolition.",
      image: {
        src: "images/tile-removal-offcuts-tools.jpg",
        alt: "A small stack of assorted tile offcuts beside a chisel and hammer",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "Tile removal is the stage everyone underestimates and nobody photographs. It is dusty, loud, heavy, and almost always takes longer than expected, because what is underneath the tiles is not known until they come off." },
        { type: "p", text: "It is also the stage that determines what the rest of the job costs. A clean strip-out leaving a sound substrate means the tiler can get on with it. A strip-out that pulls the wall sheeting off with the tiles means a different job entirely." },
        { type: "p", text: "This page covers what drives the cost, what you are actually left with, and two risks in older Canberra homes that are worth taking seriously." },

        { type: "h2", text: "Should you remove the tiles at all?" },
        { type: "p", text: "Tiling over existing tiles is sometimes viable and it is worth asking about before assuming a strip-out." },
        { type: "p", text: "**It can work when** the existing tiles are sound and well bonded, the surface is flat, and the height change at doorways, floor wastes and fixtures can be accommodated." },
        { type: "p", text: "**It does not work when** tiles are drummy or loose, because you would be bonding to something that is already failing. It also does not work where the added height creates a problem, which in a bathroom it often does, because the floor waste and the door both sit at fixed levels." },
        { type: "p", text: "**The catch nobody mentions:** tiling over a wet area leaves any waterproofing failure exactly where it is, now buried under two layers of tile instead of one. If the reason you are retiling is a leak, tiling over is not an option. See [leaking shower repair](leaking-shower-repair-canberra.html)." },
        { type: "p", text: "Outside a wet area, height is still the constraint that decides it: at doorways, at thresholds, and where tile meets another floor covering, the extra thickness has to go somewhere. See [floor and wall tiling](floor-and-wall-tiling-canberra.html)." },

        { type: "h2", text: "What makes tile removal expensive" },
        { type: "p", text: "The tile is not the variable. The bond is." },
        { type: "p", text: "**How well it was stuck down.** A tile laid on a proper adhesive bed to a clean slab comes off harder than one laid badly. Good original workmanship makes removal slower, which is a genuinely annoying inversion." },
        { type: "p", text: "**What it is stuck to.** Tiles on a concrete slab generally come off leaving adhesive residue that has to be ground or scraped back. Tiles on wall sheeting frequently take the sheeting with them, in which case the wall is being replaced rather than cleaned up. Tiles on a timber floor bring their own questions about what the substrate is doing. In Canberra stock from the 1960s to the 1980s, fibre cement sheet flooring and wall sheeting are both common, and both change the answer." },
        { type: "p", text: "**How much adhesive is left.** Removing tiles is often the quick part. Removing the adhesive bed underneath is the slow, dusty part, and it is what stands between a stripped floor and a floor that is ready to tile." },
        { type: "p", text: "**Access and containment.** In an occupied home, dust containment, floor protection and daily clean-down all take time. So does carrying heavy debris out through a house rather than throwing it into a bin outside a door." },
        { type: "p", text: "**Volume and weight.** Tiles are heavy and tip fees are usually charged by weight rather than volume." },

        { type: "h2", text: "What you are actually left with" },
        { type: "image", src: "images/tile-removal-slab-vs-sheeting.jpg", alt: "Diagram contrasting tiles removed from a concrete slab, which leaves adhesive residue on an intact surface, against tiles removed from wall sheeting, which tears and gouges the sheeting", width: 1200, height: 805 },
        { type: "p", text: "This matters because it is the handover point between removal and tiling, and it is where quotes diverge." },
        { type: "p", text: "\"Tiles removed\" and \"ready to tile\" are not the same thing. A substrate ready to tile means flat within tolerance for the tile going on, sound, clean, free of old adhesive, and with any damage repaired. Getting from one state to the other is preparation work, and whether it sits in the removal quote or the tiling quote is something to establish before either starts." },
        { type: "p", text: "Ask directly: after removal, what condition will the surface be in, and who is responsible for getting it ready to tile." },

        { type: "h2", text: "The dust problem" },
        { type: "p", text: "This is the part of tile removal that gets treated casually and should not be." },
        { type: "p", text: "Tiles, tile adhesive, screed and concrete all contain crystalline silica. Cutting, grinding, chiselling and breaking them generates respirable crystalline silica dust, which is fine enough to reach deep into the lungs and is associated with serious and irreversible lung disease. Dry grinding adhesive off a slab is one of the higher exposure activities in domestic renovation work." },
        { type: "p", text: "Safe Work Australia's national workplace exposure standard for respirable crystalline silica is 0.05 mg/m³ averaged over an eight-hour day. In the ACT, a business carrying out this work must not allow dry cutting, grinding, crushing, polishing, sanding or trimming of silica-containing material - wet cutting or on-tool dust extraction is required instead, along with fitted respiratory protection, a safe work method statement, and in some cases air monitoring." },
        { type: "credit", text: "Safe Work Australia, workplace exposure standard for respirable crystalline silica; WorkSafe ACT, managing silica dust at construction sites. These duties apply to a business engaging workers - a homeowner doing genuine DIY isn't bound by them the same way, but the health risk is identical either way." },
        { type: "p", text: "The controls are well established and they are the thing to ask about:" },
        { type: "ul", items: [
          "**Water suppression or on-tool dust extraction.** Wet cutting, or a tool connected to an appropriately rated vacuum, rather than dry grinding into open air.",
          "**Respiratory protection.** A disposable dust mask from a hardware store is not the same thing as fitted respiratory protection.",
          "**Containment.** Sealing the work area so dust does not distribute itself through the rest of the house."
        ] },
        { type: "p", text: "If you are doing this yourself, these are not optional extras. The dust is invisible at the size that matters and there is no immediate symptom to warn you. That is exactly what makes it dangerous." },
        { type: "p", text: "If someone is doing it for you, ask how they control dust. It is a reasonable question and the answer tells you a lot." },

        { type: "h2", text: "Asbestos in older homes" },
        { type: "p", text: "WorkSafe ACT's own guidance is that a residential building constructed or refurbished before 1990 is likely to contain asbestos containing material, and they turn up in tile removal in more than one form: in some tile adhesives, in vinyl floor tiles and their backing, and in wall and floor sheeting behind or beneath tiles." },
        { type: "p", text: "The ACT carries additional legacy issues, including Mr Fluffy affected properties, and asbestos rules here are also stricter than in some other states: only a licensed asbestos assessor can identify or test suspected material, and no asbestos containing material may be removed from a residential premises in the ACT by anyone other than a licensed asbestos removalist - there is no small-quantity or non-friable exemption for DIY removal here, unlike some other jurisdictions." },
        { type: "credit", text: "WorkSafe ACT, Asbestos; WorkSafe ACT, Asbestos licensing." },
        { type: "p", text: "The practical position: if the home was built before 1990 and you are disturbing adhesive, sheeting or old floor coverings, identification by a licensed assessor comes before demolition, not after. This is the single strongest argument against a DIY strip-out in an older Canberra home." },

        { type: "h2", text: "Disposal" },
        { type: "p", text: "Tile waste is heavy and disposal is usually charged by weight. A bathroom strip-out produces more material than people expect, and a Canberra tiler's published calculator allows $800 for rubbish removal on a bathroom alongside $1,500 for the demolition itself." },
        { type: "p", text: "Establish who is taking the waste away and whether tip fees are included, because it is a line that gets left out of quotes and then appears later." },
        { type: "p", text: "Asbestos containing material cannot go to general waste and has its own disposal requirements." },

        { type: "h2", text: "Doing it yourself" },
        { type: "p", text: "Tile removal is one of the more genuinely DIY-able parts of a renovation, in the sense that it is unskilled labour rather than trade work. Whether it is a good idea depends on three things." },
        { type: "p", text: "**The age of the house.** If asbestos is a possibility, get it identified first. This is not a corner to cut." },
        { type: "p", text: "**Dust control.** See above. The tooling that controls silica dust properly is not what most people have in a shed." },
        { type: "p", text: "**What you leave behind.** Removing tiles is easy. Getting a substrate genuinely ready to tile is not, and a tiler arriving to a floor with adhesive residue still on it will either charge to fix it or decline the job. If you are doing the strip-out to save money, agree with the tiler beforehand what condition they need the surface in." },
        { type: "p", text: "The saving is real but smaller than it looks, because the slow part is the preparation rather than the demolition." },

        { type: "h2", text: "What tile removal costs" },
        { type: "p", text: "Removal is generally quoted separately from tiling, and it varies more than almost any other line because the bond and the substrate are unknown until work starts." },
        { type: "p", text: "A Canberra tiler's published bathroom calculator allows $1,500 for demolition and $800 for rubbish removal. National figures put tile removal cost in a broad range depending on area, substrate and whether adhesive grinding is included. Full breakdown and sources in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." },
        { type: "p", text: "The two questions that move the number most: is adhesive removal included, and who pays for tip fees." },

        { type: "faqs", items: [
          { q: "How much does tile removal cost?", a: "It is usually quoted separately from tiling and varies widely with the substrate and how well the tiles were originally bonded. A Canberra operator's published bathroom calculator allows $1,500 for demolition and $800 for waste removal. The two things that move the price are whether adhesive grinding is included and who covers tip fees. See the [cost guide](tiling-cost-guide-canberra.html)." },
          { q: "Can I tile over existing tiles instead of removing them?", a: "Sometimes, if the existing tiles are sound and well bonded and the height change works at doorways and fixtures. In a wet area it also means any waterproofing failure underneath stays buried, so it is not an option if the reason you are retiling is a leak." },
          { q: "Will removing wall tiles damage the wall?", a: "Frequently, yes. Tiles bonded to plasterboard or wall sheeting often take the surface with them, and the wall ends up being replaced rather than repaired. Tiles on a rendered or masonry wall usually come off leaving adhesive to be removed." },
          { q: "Is tile removal dusty?", a: "Very, and the dust matters. Tiles, adhesive and screed contain crystalline silica, and grinding or breaking them dry produces fine respirable dust associated with serious lung disease. Water suppression, on-tool extraction and proper respiratory protection are the controls. Ask what a contractor uses." },
          { q: "Do I need to worry about asbestos?", a: "In homes built or refurbished before 1990 it is a real possibility, in tile adhesives, vinyl tiles and sheeting. In the ACT, only a licensed asbestos assessor can identify it and only a licensed asbestos removalist can remove it, with no small-quantity exemption for DIY. Identification should happen before demolition, not after." },
          { q: "How long does tile removal take?", a: "Removing the tiles is often quicker than removing the adhesive underneath them. The second stage is what determines whether the surface is actually ready to tile." },
          { q: "Can I remove the tiles myself and have a tiler do the rest?", a: "Yes, and it does save money, though less than it appears because the slow part is preparation rather than demolition. Agree with the tiler in advance what condition they need the substrate in, otherwise you may pay them to redo it." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       TILE REPAIR - owns "drummy" (480 national searches, competition
       index 10 - the easiest real volume in the dataset, build brief §7/
       §9). Other pages reference it in a sentence and link here rather
       than expanding their own mention. ----------------------------------*/
    {
      page: "tile-repair-canberra.html",
      name: "Tile Repair",
      shortDescription: "Drummy, loose or cracked tiles explained: how to test them yourself, what usually caused it, and what repair actually involves.",
      metaTitle: "Tile Repair Canberra | Cracked, Loose & Drummy Tiles",
      metaDescription: "Drummy, loose or cracked tiles explained. How to test them yourself, what the cause usually is, when it matters, and what repair actually involves.",
      headline: "Cracked, Loose and Drummy Tiles in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Cracked or drummy tiles in Canberra",
      ctaBody: "Tell us roughly how many tiles are affected, whether they are scattered or clustered, and whether they are in a wet area. Those three answers separate a small repair from a symptom of something else.",
      image: {
        src: "images/tile-repair-cracked-tile.jpg",
        alt: "A single ceramic tile with a visible hairline crack",
        width: 1200,
        height: 805
      },
      blocks: [
        { type: "lead", text: "Ever heard someone tap a tile and call it 'drummy' and didn't know what it meant?" },
        { type: "p", text: "It means the tile has separated from whatever it was stuck to. The tile itself is usually fine. The bond underneath it is not." },
        { type: "p", text: "Whether that matters depends on where it is, how much of the floor is affected, and what caused it. Sometimes it is cosmetic and can be left. Sometimes it is the first visible sign of something that will get expensive. Most tile repair in Canberra starts with working out which of the two you are looking at, and this page covers how to tell the difference." },

        { type: "h2", text: "What \"drummy\" means, and how to check yourself" },
        { type: "p", text: "A drummy tile sounds hollow when tapped, because there is a void between the tile and the substrate instead of solid adhesive." },
        { type: "p", text: "You can test it in about two minutes. Tap across the floor with a knuckle, a coin, or the handle of a screwdriver, and listen. A well bonded tile gives a solid, dull sound. A drummy tile rings hollow. The difference is obvious once you have heard both, and you do not need any skill to hear it." },
        { type: "p", text: "Worth doing methodically rather than randomly. Map where the hollow tiles are, because the pattern tells you more than the count." },
        { type: "ul", items: [
          "**Scattered individual tiles** across an otherwise sound floor usually means patchy adhesive coverage during installation.",
          "**A contiguous area** spreading outward usually means something is actively causing it: movement, water, or a substrate problem.",
          "**Tiles along a wall or perimeter** often points to missing or inadequate movement joints.",
          "**Everything sounds drummy** may mean the substrate itself is the issue, or that the tiles were laid over something unsuitable."
        ] },
        { type: "image", src: "images/tile-repair-drummy-patterns.jpg", alt: "Floor-plan diagrams showing four drummy-tile patterns: scattered, contiguous and spreading, perimeter, and whole floor", width: 1200, height: 805 },

        { type: "h2", text: "Does drummy always need fixing?" },
        { type: "p", text: "No, and anyone who tells you every hollow tile must come up is overselling." },
        { type: "p", text: "Some drumminess is tolerated in ordinary domestic floors, particularly isolated tiles in low traffic areas that are not cracking, lifting or moving. The tile can sit there for years." },
        { type: "p", text: "It matters considerably more when:" },
        { type: "ul", items: [
          "**It is in a wet area.** A void under a tile in a shower or bathroom floor is somewhere water can sit, and it often indicates the problem is moisture related rather than adhesive related.",
          "**It is spreading.** Compare against your map in a few months. Growth means an active cause.",
          "**The tiles are also cracking or lipping.** Unsupported tiles crack under load, and a drummy tile that has started to crack will not stop.",
          "**It is underfoot in a main traffic area.** Repeated loading on an unsupported tile eventually breaks it.",
          "**You are about to sell.** A building inspector will tap the floors."
        ] },

        { type: "h2", text: "Why tiles come loose" },
        { type: "p", text: "**Insufficient adhesive coverage.** The most common cause. Adhesive applied as dabs or spots rather than a properly notched full bed leaves voids from day one - the standard governing ceramic tile installation, AS 3958:2023, calls for close to full bed coverage in wet areas specifically, which spot fixing does not achieve. The tiles hold for a while, then fail progressively." },
        { type: "p", text: "**Movement, with nowhere for it to go.** Buildings expand, contract and settle. Tiled surfaces need movement joints at perimeters and at intervals across large areas so that movement is absorbed at designed points rather than by the adhesive bond. AS 3958:2023 calls for a minimum joint width of 6mm, with intermediate joints at no more than 4.5m centres on internal floors over 9m in any dimension (or over 6m where the floor gets direct sun), and 4.5m centres in any dimension outdoors. Domestic tiling frequently omits them, and the result shows up years later as debonding along walls or tenting in the middle of a floor." },
        { type: "credit", text: "AS 3958:2023 Section 5, clause 5.4.7, as summarised by the Housing Industry Association's guide to joints in floor and wall tiles." },
        { type: "p", text: "**Water.** Moisture reaching the adhesive bed degrades the bond over time. This is why drummy tiles in a bathroom are treated more seriously than drummy tiles in a hallway, and why they are frequently the first visible symptom of a waterproofing problem. See [leaking shower repair](leaking-shower-repair-canberra.html)." },
        { type: "p", text: "**The wrong adhesive, or the wrong substrate.** Tiling over a surface the adhesive was not designed to bond to, or over an existing surface that was itself unsound. Tiling over old tiles inherits whatever was going on underneath them." },
        { type: "p", text: "**Substrate movement.** Timber floors flex. Concrete slabs shrink as they cure and can continue moving for a long time after. A rigid tiled surface bonded to a moving substrate will eventually let go somewhere." },

        { type: "h2", text: "Why tiles crack" },
        { type: "p", text: "Cracking has different causes from debonding, and the pattern usually tells you which you are dealing with." },
        { type: "p", text: "**A single cracked tile, radiating from a point.** Impact damage. Something heavy was dropped. Straightforward, and a single tile replacement is the fix." },
        { type: "p", text: "**A crack running in a straight line across several tiles, continuing through the grout.** This is the one that matters. It means the substrate underneath has cracked and the tiles are simply following it. Replacing the tiles achieves nothing, because the new ones will crack along the same line. The substrate crack has to be addressed first, and if it is structural, that is a different conversation entirely and not a tiling job." },
        { type: "image", src: "images/tile-repair-crack-comparison.jpg", alt: "Diagram comparing impact cracking, a localised star-shaped crack in a single tile, against substrate cracking, a straight crack running through several tiles and their grout lines", width: 1200, height: 805 },
        { type: "p", text: "**Cracking at a perimeter or in a line across a large floor.** Often movement with no joint to accommodate it." },
        { type: "p", text: "**Hairline cracks in the glaze only, in a fine network.** Crazing, which is a defect in the tile itself rather than an installation problem." },
        { type: "p", text: "**Cracking following a drummy area.** An unsupported tile flexing under load until it fails." },

        { type: "h2", text: "Repair options, and the matching problem" },
        { type: "p", text: "**Individual tile replacement.** The affected tiles are cut out, the substrate cleaned back, and new tiles bedded and grouted. Practical for isolated damage." },
        { type: "p", text: "**Section replacement.** A defined area lifted and relaid. Sensible when a contiguous zone has failed." },
        { type: "p", text: "**Full re-lay.** When the failure is widespread, or when the cause is the substrate rather than the tiles." },
        { type: "p", text: "The problem in every case is matching. Even where the tile is still available, dye lots vary between production runs, and an existing floor has years of wear and light exposure on it. A replacement tile that is technically the same product can be visibly different." },
        { type: "p", text: "If the tile has been discontinued, the options narrow quickly: source from a tile recycler or clearance stock, take tiles from a concealed location such as under a vanity or inside a cupboard and patch that spot instead, or accept a deliberate contrast." },
        { type: "p", text: "This is the strongest argument for keeping spare tiles from the original job. If you are having tiling done now, keep the offcuts and the spare box somewhere you will find them in ten years." },
        { type: "p", text: "**Tile restoration is a different trade again.** Regrinding, honing or resealing an existing surface rather than replacing it applies mostly to natural stone, terrazzo and tessellated tiling rather than to modern porcelain. If what you have is an original stone, terrazzo or tessellated floor, a restoration specialist is who you want, and it is worth identifying that before anyone quotes to take it out. See [floor and wall tiling](floor-and-wall-tiling-canberra.html) for what turns up in older Canberra stock." },

        { type: "h2", text: "When it points to something bigger" },
        { type: "p", text: "Three situations where the tiles are a symptom rather than the problem:" },
        { type: "p", text: "**Drummy or cracked tiles in a shower or bathroom floor** frequently indicate moisture in the adhesive bed, which points at the waterproofing rather than the tiling. Repairing the tiles without addressing that means doing it again. See [waterproofing](waterproofing-canberra.html)." },
        { type: "p", text: "**A straight crack running across multiple tiles and their grout lines** is the substrate cracking. Whether that is shrinkage, movement or something structural needs establishing before anything is retiled." },
        { type: "p", text: "**Tiles tenting or lifting at a joint** means the tiled surface is under compression with nowhere to expand. That is a movement joint problem and relaying without addressing it repeats the failure." },

        { type: "h2", text: "What tile repair costs" },
        { type: "p", text: "Individual tile replacement is a small job, but the variables are access, whether matching tiles exist, and whether the underlying cause needs addressing first." },
        { type: "p", text: "The last one is what moves the price. Replacing four cracked tiles is inexpensive. Establishing that they cracked because the slab moved, or because water has been sitting under them, changes the job." },
        { type: "p", text: "See the [Canberra tiling cost guide](tiling-cost-guide-canberra.html) for the full picture with sources." },

        { type: "faqs", items: [
          { q: "What does \"drummy\" mean?", a: "A drummy tile sounds hollow when tapped, because the bond between the tile and the substrate has failed and there is a void underneath. The tile itself is usually undamaged. It is Australian trade shorthand and you will hear it from any tiler." },
          { q: "How do I check for drummy tiles?", a: "Tap across the surface with a knuckle, a coin or a screwdriver handle and listen. Solid tiles sound dull, drummy tiles ring hollow. Map where they are, because the pattern matters more than the number." },
          { q: "Do drummy tiles have to be replaced?", a: "Not always. Isolated drummy tiles in a dry, low traffic area that are not cracking or moving can often be left. It matters much more in a wet area, where the void is somewhere water can sit, or where the affected area is spreading." },
          { q: "Why do tiles come loose?", a: "Most commonly insufficient adhesive coverage at installation, adhesive applied as dabs rather than a full bed. Other causes are movement with no joints to accommodate it, moisture degrading the bond, and substrate movement." },
          { q: "My tiles cracked in a straight line across the floor. Why?", a: "Almost certainly because the substrate underneath cracked and the tiles followed it. Replacing the tiles will not fix it, because new tiles will crack along the same line. The substrate has to be addressed first." },
          { q: "Can you replace just one tile?", a: "Yes, technically. The difficulty is matching. Dye lots vary between production runs and an existing floor has wear and light exposure the new tile does not. If the tile is discontinued, taking a replacement from a concealed spot such as under a vanity is often the neatest solution." },
          { q: "Can you match existing tiles for a repair job?", a: "Sometimes, and it is worth being realistic about it before the work starts rather than after. Even where the tile is still in production, dye lots vary between runs and an existing floor has years of wear and light exposure on it, so a technically identical tile can be visibly different once it is in. If the line has been discontinued, the options narrow to a tile recycler or clearance stock, taking tiles from a concealed spot such as under a vanity or inside a cupboard and patching that area instead, or accepting a deliberate contrast. Send a photo and, if you still have it, the tile name or the box - it is the difference between an answer and a guess." },
          { q: "Are drummy tiles a sign my shower is leaking?", a: "Not on their own, but in a wet area they are a reason to look further. Water in the adhesive bed degrades the bond, so drummy tiles in a bathroom are often the first visible sign of a waterproofing problem rather than an adhesive one." },
          { q: "Should I be worried if my tiles are lifting or tenting?", a: "Yes. That means the tiled surface is under compression with nowhere to expand, which is a movement joint problem. Relaying without addressing the cause repeats the failure." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       QUOTE CHECKLIST - a link asset, not a lead page (build brief §10/
       §12). Ungated by design; no cost figures (they live on the cost
       guide); no FAQPage schema (content isn't in Q&A form). ------------- */
    {
      page: "tiling-quote-checklist-canberra.html",
      name: "Tiling Quote Checklist",
      shortDescription: "A printable checklist of the questions that make tiling quotes comparable, and the ones that stop a variation appearing halfway through the job.",
      metaTitle: "Tiling Quote Checklist | Questions to Ask Before You Sign",
      metaDescription: "A printable checklist of the questions that make tiling quotes comparable, and the ones that stop a variation appearing halfway through the job.",
      headline: "Tiling Quote Checklist",
      ctaText: "Get a Quote",
      ctaHeading: "Ready to start getting quotes?",
      ctaBody: "Take this checklist to every quote and write the answers next to the questions. Once you have them, tell us what you need and we will help you compare what comes back.",
      image: {
        src: "images/quote-checklist-clipboard.jpg",
        alt: "A blank clipboard and pencil beside a couple of tile samples",
        width: 1200,
        height: 805
      },
      blocks: [
        { type: "lead", text: "Three quotes for the same bathroom can be thousands apart without anyone being unreasonable. Usually they are not quoting the same job." },
        { type: "p", text: "This checklist makes them comparable. Print it, take it to each quote, and write the answers next to the questions." },

        { type: "h2", text: "Before you ask anyone to quote" },
        { type: "ul", items: [
          "☐ **Decide the tile first, or tell everyone to price the same one.** Size, material and layout pattern all change the labour, not just the material cost. Three quotes on three different tiles tell you nothing.",
          "☐ **Write the scope down.** One paragraph describing what you want done. Give the identical paragraph to everyone.",
          "☐ **Measure the area, roughly.** You do not need it exact. You need it consistent across quotes.",
          "☐ **Know how old the house is.** Relevant for asbestos in older homes, where identification comes before any demolition."
        ] },

        { type: "h2", text: "Scope: what is included" },
        { type: "p", text: "Ask about each line specifically. \"Everything\" is not an answer." },
        { type: "ul", items: [
          "☐ Demolition and removal of existing tiles",
          "☐ Disposal, including tip fees",
          "☐ Removal of old adhesive from the substrate",
          "☐ Substrate preparation, levelling and screeding",
          "☐ Waterproofing, if it is a wet area",
          "☐ Who certifies the waterproofing",
          "☐ Tile supply, or is that mine to arrange",
          "☐ Adhesive and grout, and which type",
          "☐ Trims and edging to external corners",
          "☐ Silicone to junctions",
          "☐ Sealing, if the tile or grout needs it",
          "☐ Final clean and rubbish removal"
        ] },

        { type: "h2", text: "Variations: what happens when something turns up" },
        { type: "p", text: "The most important section here, and the one most people skip. Substrate problems are the most common variation on any tiling job and they are invisible until the old surface comes off." },
        { type: "ul", items: [
          "☐ **What happens if the substrate is worse than expected?**",
          "☐ **Are variations priced at an agreed rate, or quoted at the time?**",
          "☐ **Does work stop for my approval before extra cost is incurred?**",
          "☐ **What is the most common variation you see on jobs like this?**"
        ] },
        { type: "p", text: "A quote that anticipates variations comes from someone who has been caught by one before. That is a good sign, not a warning." },

        { type: "h2", text: "Tiles and ordering" },
        { type: "ul", items: [
          "☐ **Who is measuring for the order?**",
          "☐ **What wastage allowance is included?** More is needed for diagonal and herringbone layouts than straight set.",
          "☐ **Who is responsible if the order falls short?**",
          "☐ **What is the lead time?** Imported tiles can take a while.",
          "☐ **Am I keeping the spares?** Keep them. If a tile cracks in five years, a matching replacement is worth more than the storage space."
        ] },

        { type: "h2", text: "Wet areas only" },
        { type: "ul", items: [
          "☐ **Who is applying the waterproofing, and can they document it for a building surveyor?**",
          "☐ **What documentation will I receive on completion?**",
          "☐ **What is the cure time for the membrane before tiling starts?**",
          "☐ **Is a flood test being done?**",
          "☐ **Can I see the waterproofing before it is tiled over?**"
        ] },
        { type: "p", text: "That last one is the only chance you get. Once the tiles are on, the membrane is sealed underneath permanently and there is no inspecting it. Take photos yourself before tiling starts." },

        { type: "h2", text: "Repairs only" },
        { type: "ul", items: [
          "☐ **What is the diagnosed cause?** Grout failure, silicone failure, membrane failure, waste seal failure, or a plumbing leak. A quote without a diagnosis is a guess with a price on it.",
          "☐ **How was that established?**",
          "☐ **Has this been repaired before?** If a shower has been repaired twice and leaked twice, the membrane is the likely cause and a surface repair will not hold.",
          "☐ **What happens if this repair does not fix it?**"
        ] },

        { type: "h2", text: "Schedule" },
        { type: "ul", items: [
          "☐ How many days on site",
          "☐ How many separate visits",
          "☐ What has to be finished by other trades first",
          "☐ How long the waterproofing needs to cure",
          "☐ When can you start"
        ] },

        { type: "h2", text: "The paperwork" },
        { type: "ul", items: [
          "☐ **Written and itemised.** A single total cannot be compared, cannot be checked, and gives you nothing to point at when a variation appears.",
          "☐ **Payment schedule.** What is due when.",
          "☐ **Licence and insurance details.**",
          "☐ **Waterproofing certification**, for wet areas."
        ] },

        { type: "h2", text: "Comparing what comes back" },
        { type: "ul", items: [
          "☐ **Is one quote significantly lower?** The useful question is not why it is cheaper. It is what it does not include.",
          "☐ **Do all three cover the same scope items?** Go line by line against the scope list above.",
          "☐ **Has anyone raised something the others did not?** Whoever mentions a problem the others missed has usually looked harder.",
          "☐ **Did anyone tell you something you did not want to hear?** That is worth more than the cheapest number."
        ] },

        { type: "p", text: "Full context on what drives tiling costs, and what the published Canberra figures actually say, in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." }
      ]
    },

    /* ---------------------------------------------------------------------
       BATHROOM TILING - installation/choices framing. Highest cannibal-
       isation overlap risk on the site (touches home, waterproofing,
       regrouting, leaking-shower-repair, cost guide) - every reference to
       any of those subjects here stays to a sentence and links out (build
       brief §7). Low commercial value expected and accepted (build brief
       page 13 notes: max competition, min click value - topical coverage,
       not a lead driver). -------------------------------------------------*/
    {
      page: "bathroom-tiling-canberra.html",
      name: "Bathroom Tiling",
      shortDescription: "Choosing tiles that work in a wet area, the layout decisions that drive cost, and where tiling fits in a bathroom job.",
      metaTitle: "Bathroom Tiling Canberra | Wall & Floor Tiling",
      metaDescription: "Bathroom tiling in Canberra. Choosing tiles that work in a wet area, the layout decisions that drive cost, and where tiling fits in a bathroom job.",
      headline: "Bathroom Tiling in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Bathroom tiling in Canberra",
      ctaBody: "Tell us what is there now, whether the bathroom is being stripped back or worked around, and whether you have chosen a tile yet. Those three answers cover most of what determines the cost.",
      image: {
        src: "images/bathroom-tiling-shower-recess.jpg",
        alt: "An empty, newly tiled shower recess with neutral large-format tiles",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "A bathroom is the hardest room in the house to tile well. It is small, so almost every tile is a cut. It is a wet area, so waterproofing sits underneath everything. It has more penetrations per square metre than any other room. And the falls have to work, or the floor holds water." },
        { type: "p", text: "It is also the room where the decisions get made fastest and regretted longest. Tile size, layout, grout colour and slip rating all get chosen in a showroom in an afternoon, and they determine what the room looks like and how it performs for the next twenty years." },
        { type: "p", text: "This page covers the choices that actually matter, and what a bathroom tiling job involves." },

        { type: "h2", text: "What a bathroom tiling job includes" },
        { type: "p", text: "Tiling is one stage of a bathroom, not the whole thing. A tiling scope usually covers:" },
        { type: "ul", items: [
          "Removing existing tiles and adhesive, and disposing of them",
          "Preparing the substrate: levelling, screeding, patching, and establishing falls",
          "Waterproofing the wet areas, or coordinating with whoever does",
          "Setting out and laying wall and floor tiles",
          "Detailing niches, hobs, steps and external corners",
          "Grouting, and silicone to the movement junctions",
          "Sealing, where the grout or tile requires it"
        ] },
        { type: "p", text: "What it does not cover is plumbing, electrical, plastering, painting, or supplying and fitting the vanity, screen and tapware. Those are other trades. If you are doing a full renovation, someone needs to coordinate all of them, and that is a builder's job rather than a tiler's." },

        { type: "h2", text: "Choosing tiles that work in a bathroom" },
        { type: "p", text: "Showrooms sell on appearance. These are the things appearance does not tell you." },
        { type: "h3", text: "Slip resistance" },
        { type: "p", text: "Bathroom floors get wet, and tile slip resistance is measured and rated rather than guessed at. Slip resistance of pedestrian surfaces in Australia is tested under AS 4586:2013 (as amended), which rates a tile by wet pendulum (P0 to P5), oil-wet ramp (R-rating), or - most relevant for a shower floor, where nobody is wearing shoes - a barefoot A, B or C rating. The companion handbook, HB 198, guides which rating suits which application." },
        { type: "note", text: "There isn't a single mandated minimum slip rating for a private bathroom floor the way there is for many commercial and public surfaces under the National Construction Code - HB 198's recommendations for a domestic wet area are best-practice guidance, not a blanket legal minimum. That's exactly why it's worth asking for the rating by name rather than assuming a tile that looks textured automatically passes." },
        { type: "credit", text: "AS 4586:2013 (as amended); HB 198:2014, Standards Australia." },
        { type: "p", text: "The practical point stands regardless of the exact figure: ask the supplier for the slip rating of the tile you are considering, and ask specifically about the shower floor, which is the wettest surface in the house and often the smallest tile. Polished and highly glazed tiles that look good on a wall can be a poor choice underfoot in a wet room. Tiles marketed as non slip tiles are not a defined category; the classification is the part with a test behind it." },
        { type: "p", text: "The same system covers external and barefoot surfaces, where the requirements are more demanding again - see [outdoor and patio tiling](outdoor-patio-tiling-canberra.html) and [pool tiling](pool-tiling-canberra.html)." },
        { type: "h3", text: "Size, and why smaller often wins on a shower floor" },
        { type: "p", text: "Large format tiles are popular and they look good, but they are difficult in a small wet room for two reasons." },
        { type: "p", text: "First, they need a flatter substrate, because any deviation shows as lipping at the edges. In a bathroom that usually means additional levelling." },
        { type: "p", text: "Second, a shower floor needs a fall to the waste, and a rigid large tile cannot follow a fall in two directions. Smaller tiles and mosaics accommodate the fall because there are more joints to absorb the change in plane. That is why shower floors are often a smaller tile than the rest of the room even when it was not the design intent." },
        { type: "image", src: "images/bathroom-tiling-fall-to-waste.jpg", alt: "Diagram comparing a large rigid tile, which leaves a gap under the tile where it cannot follow the slope to a shower floor waste, against several smaller tiles that conform closely to the fall", width: 1200, height: 805 },
        { type: "h3", text: "Finish" },
        { type: "p", text: "Matt and textured finishes hide water spotting and soap residue better than polished ones. Polished tiles show everything, including every drip, which is a maintenance question rather than an aesthetic one." },
        { type: "h3", text: "Grout colour" },
        { type: "p", text: "Light grout in a shower will not stay light. It is a porous material in the wettest place in the house. Mid tones are far more forgiving, and epoxy grout holds colour considerably better than cement based grout without needing sealing. See [regrouting](regrouting-canberra.html) for the difference between the two." },

        { type: "h2", text: "The decisions that drive the cost" },
        { type: "p", text: "**Layout pattern.** Straight set is the baseline. Herringbone and chevron add cuts on nearly every perimeter tile and require exact setting out from the first tile, because any error compounds across the room." },
        { type: "p", text: "**Floor to ceiling, or partial height.** Tiling walls to the ceiling costs more in tile and labour than stopping at a tiled dado or shower height. It also changes how the room reads." },
        { type: "p", text: "**Niches.** A shower niche is a small feature with a lot of work in it: framing, waterproofing detail, a fall in the base, and mitred or trimmed edges. Worth having, worth knowing it is not free." },
        { type: "p", text: "**Hob or hobless.** A hobless walk-in shower has more membrane area and more complex drainage falls than a step-up hob design. It looks better and it costs more." },
        { type: "p", text: "**How level the floor is.** Unknown until the old surface comes off, and frequently the largest single line on a renovation. Screeding and levelling run around $15 to $30 per square metre." },
        { type: "p", text: "**A feature wall.** A single tiled wall the room is arranged around - behind the bath, behind the vanity, or the shower wall done differently from the rest - is priced as feature work rather than as wall tiling, because the tile is usually the hardest one in the room to lay and every joint is at eye level with nothing to hide a cut behind. See [feature wall tiling](floor-and-wall-tiling-canberra.html)." },
        { type: "p", text: "**Underfloor heating.** Heating under a bathroom floor changes the adhesive and grout specification, because the surface expands and contracts every time the system cycles, and it adds a screed and a commissioning sequence ahead of tiling. See [floor and wall tiling](floor-and-wall-tiling-canberra.html)." },
        { type: "p", text: "**Whether the tile is here.** Imported tiles carry lead times. Running short mid-job on a discontinued line is a serious problem, which is why the order includes a wastage allowance rather than the bare floor area." },
        { type: "p", text: "Full breakdown with sources in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." },

        { type: "h2", text: "Waterproofing comes first" },
        { type: "p", text: "In a wet area the membrane goes on before the tiles and stays there permanently. Once tiling starts, there is no inspecting it, adjusting it, or adding to it." },
        { type: "p", text: "That makes the window between waterproofing and tiling the only chance to check the most important part of the job. It is also the stage most often compressed when a renovation is running late, because membranes need cure time and cure times lengthen in the cold." },
        { type: "p", text: "If you take one thing from this page: look at the waterproofing before it disappears, and get the certification. [More on waterproofing](waterproofing-canberra.html)." },

        { type: "h2", text: "Where tiling sits in a bathroom renovation" },
        { type: "p", text: "Roughly: demolition, plumbing and electrical rough-in, substrate preparation, waterproofing, cure, tiling, grouting, then fit-off of the vanity, screen and tapware." },
        { type: "p", text: "Tiling sits in the middle, which means it is dependent on everything before it and blocking everything after it. If the rough-in is not finished, the tiler waits or comes back, and return visits get priced accordingly." },
        { type: "p", text: "A typical Canberra bathroom runs three to five weeks end to end, and the tiling is a fraction of that. Substrate preparation and waterproofing cure time drive the schedule more than laying does." },
        { type: "p", text: "Related reading: [floor and wall tiling](floor-and-wall-tiling-canberra.html) for what changes outside a wet area, [kitchen tiling](kitchen-tiling-canberra.html) for splashbacks, and [laundry tiling](laundry-tiling-canberra.html) for the other wet area in the house." },

        { type: "h2", text: "What goes wrong in bathroom tiling" },
        { type: "p", text: "**Falls that do not work.** Water sitting on a shower floor rather than draining. Hard to correct afterwards without removing the floor." },
        { type: "p", text: "**Waterproofing rushed or tiled over early.** Invisible once tiled, expensive when it surfaces. See [leaking shower repair](leaking-shower-repair-canberra.html)." },
        { type: "p", text: "**Grout used in movement junctions.** Internal corners and the wall to floor junction need silicone, not grout. Grout in those positions cracks, and it keeps cracking however many times it is replaced." },
        { type: "p", text: "**Setting out started from the wrong point.** Cuts landing badly at eye level, or a slim sliver of tile in the most visible corner. Costs nothing to get right and cannot be fixed later." },
        { type: "p", text: "**Large format tile on a floor that was not levelled for it.** Lipping at the edges, which is both a trip hazard and permanently visible." },

        { type: "faqs", items: [
          { q: "How much does bathroom tiling cost in Canberra?", a: "A Canberra tiler's published rate card puts bathroom tiling labour at $85 per square metre floor to ceiling, with tile supply from around $50 per square metre. National figures for bathroom floor tiling supply and install sit near $85 per square metre and wall tiling near $95. A small 5 to 8 square metre bathroom often lands around $2,000 to $3,500 for tiling including materials. Sources in the [cost guide](tiling-cost-guide-canberra.html)." },
          { q: "Why is a small bathroom expensive per square metre?", a: "Because it is mostly edges, cuts and detail around the floor waste, vanity, hob and door frame. The productive middle where a tiler lays quickly is a small fraction of the room, so the per square metre rate is much higher than in an open floor." },
          { q: "Can I tile over existing bathroom tiles?", a: "Sometimes, depending on whether the existing tiles are sound and well bonded, and on the height change at doorways and fixtures. The significant catch is that any waterproofing failure underneath stays exactly where it is. Worth asking about, not worth assuming." },
          { q: "Should the shower floor use the same tile as the rest of the bathroom?", a: "Often it cannot. A shower floor needs a fall to the waste, and large rigid tiles struggle to follow a fall in two directions. Smaller tiles or mosaics accommodate it. Slip resistance also matters more there than anywhere else in the room." },
          { q: "Do you do full bathroom renovations?", a: "No. A renovation involves plumbing, electrical, carpentry, plastering and painting alongside the tiling and is generally run by a builder. If you are stripping a bathroom back to the studs, a renovation builder is who you want. We will say so rather than take the enquiry." },
          { q: "How long does a bathroom take to tile?", a: "The laying itself is usually a few days. The schedule is driven by substrate preparation and by waterproofing cure time, which extends in cold weather." },
          { q: "Is dark or light grout better in a bathroom?", a: "Light grout will not stay light in a shower. Mid tones are more forgiving, and epoxy grout holds colour far better than cement based without needing sealing." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       FLOOR AND WALL TILING - the dry-area counterpart to bathroom tiling,
       and the home for four subjects that had no page of their own: tile
       format vs substrate, layout pattern cost, grout colour/joint width,
       and feature walls. Kitchen, bathroom and outdoor pages reference this
       page for those rather than restating them. Hands substrate ASBESTOS
       and strip-out detail to tile-removal, and grout-as-a-material to
       regrouting. */
    {
      page: "floor-and-wall-tiling-canberra.html",
      name: "Floor and Wall Tiling",
      shortDescription: "Living areas, hallways, entries and internal walls: why the substrate sets the cost, what large format tile needs under it, and the layout and grout decisions.",
      metaTitle: "Floor & Wall Tiling Canberra | Living Areas & Hallways",
      metaDescription: "Floor and wall tiling in Canberra. Why the substrate drives the cost, what large format tiles need underneath them, and the layout, grout and joint decisions that matter.",
      headline: "Floor and Wall Tiling in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Floor and wall tiling in Canberra",
      ctaBody: "Tell us what the room is, what is on the floor now, and roughly how old the house is. Those three answers cover most of what a floor tiling quote actually depends on.",
      image: {
        src: "images/floor-and-wall-large-format-level.jpg",
        alt: "A spirit level and a tile spacer resting on freshly laid large-format grey floor tiles, viewed at a low angle",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "Outside the bathroom, tiling is mostly a substrate problem. The tile sets the look and a good part of the material cost. What is underneath it sets the labour, and that is the part nobody can see while they are quoting." },
        { type: "p", text: "Living areas, hallways, entries and general floor tiling, plus internal wall tiling and feature walls. Floors are rarely level, and bringing one within tolerance for large format tile is often the largest single line on the job." },
        { type: "p", text: "This page covers what wall and floor tiling involves outside a wet area, why tile format and substrate are the same conversation, and the layout, joint and grout decisions that move the price." },

        { type: "h2", text: "What this covers" },
        { type: "ul", items: [
          "**Living areas and open plan floors.** The one place a tiler gets a productive run, and where large format tile makes the most sense.",
          "**Hallways.** Narrow, high traffic, and usually the route everything else in the house gets carried along.",
          "**Entries and entrance floors.** Small in area with a disproportionate amount of detail in them: a threshold, a door swing, often a step, and a transition to whatever the adjoining floor is. An entry is priced closer to a bathroom floor than to an open living area for that reason.",
          "**Internal wall tiling and feature walls.** Fireplace surrounds, entry walls, and wall tiling outside wet areas.",
          "**Tile installation over existing substrates**, where what is already there is sound enough to take it."
        ] },
        { type: "p", text: "Wet areas are a different job with waterproofing under it. See [bathroom tiling](bathroom-tiling-canberra.html) and [laundry tiling](laundry-tiling-canberra.html). Kitchens sit across both, because the splashback is priced on detail rather than area - see [kitchen tiling](kitchen-tiling-canberra.html)." },

        { type: "h2", text: "The substrate is the job" },
        { type: "p", text: "Floors are rarely level. Bringing one within tolerance may need self levelling compound or a screed, and published rates put floor levelling at $15 to $30 per square metre. How much is needed is unknown until the old covering is off, which is why it is the line most often missing from the cheapest quote." },
        { type: "p", text: "A concrete slab, a suspended timber floor and a sheeted wall are three different preparation jobs. A slab usually needs old adhesive ground or scraped back and any dips filled. A timber floor raises a different question, which is how much it flexes, because a rigid tiled surface bonded to a floor that moves underfoot will crack or debond somewhere eventually. A sheeted wall needs to be sound and fixed at the right centres before anything is bonded to it." },
        { type: "p", text: "Ask tiling contractors directly what preparation their number assumes, and whether levelling is included or provisional. Two quotes on the same floor can differ by more than the tile costs on that answer alone. Full breakdown in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." },

        { type: "h2", text: "Tile format and substrate are the same conversation" },
        { type: "p", text: "Large format tiles, generally 600 by 600mm and up, need a flatter substrate than smaller tiles do. A small tile bridges a deviation over a short span. A large one cannot: a dip or a hump in the floor shows up as lipping, one tile edge standing proud of its neighbour, which is a trip hazard and permanently visible once the grout is in." },
        { type: "p", text: "So large format changes two lines on a quote rather than one. It adds $10 to $20 per square metre to laying labour on top of base rates, and it can add a floor levelling stage a smaller tile would not have needed. The second one is usually the bigger number, and it is the one that appears after the old floor comes up rather than at the quote." },
        { type: "p", text: "It runs the other way too. Mosaics and small format tiles are slow, because you are handling many more sheets and finishing far more linear metres of grout joint per square metre of floor." },
        { type: "p", text: "The practical version: decide the tile format before anyone prices the preparation, and have every quote priced on the same one." },

        { type: "h2", text: "Layout: what the pattern costs" },
        { type: "p", text: "Where the first tile goes determines where every cut lands. The pattern determines how many cuts there are, and cuts are time and waste." },
        { type: "ul", items: [
          "**Straight set, or grid.** The baseline and the cheapest. Joints line up in both directions, cuts land on two edges of the room, and the waste allowance is predictable.",
          "**Offset, or brick bond.** A small step up. The same cuts, plus a half tile starting every second row and a setting out that has to stay honest across the floor.",
          "**Diagonal.** A larger step. Every perimeter tile is a cut, they are angled cuts, and the offcuts are triangles that mostly cannot be used elsewhere, so the wastage allowance on the order goes up as well as the labour.",
          "**Herringbone and chevron.** The largest step. Nearly every perimeter tile is an angled cut, there is far more joint per square metre, and the setting out has to be exact from the first tile because any error compounds across the room rather than staying where it started."
        ] },
        { type: "p", text: "None of that makes a pattern a bad idea. It makes it a decision to price rather than one to make in a showroom. If you are getting three quotes, name the pattern in the brief." },

        { type: "h2", text: "Grout colour and joint width" },
        { type: "p", text: "Two decisions made in about a minute at the counter that you then live with for twenty years." },
        { type: "p", text: "**The joint width has to suit the tile.** Grout is manufactured for different joint widths. As a working guide, unsanded or fine grout is formulated for joints up to around 3mm, with sanded grout specified above that, because the sand gives a wider joint bulk and resists shrinkage. A rectified tile with a machine cut edge allows a narrow, precise joint. A cushioned edge tile needs a wider one to absorb the variation between tiles, and forcing a narrow joint onto one makes every small difference in tile size visible." },
        { type: "credit", text: "Davco (Sika Australia), grout product data sheets." },
        { type: "p", text: "**Movement is a separate question from the grout joint.** Grout joints are not movement joints. Tiled floors need dedicated movement joints at perimeters and at intervals across large areas, and AS 3958:2023 calls for a minimum width of 6mm for them, with intermediate joints at no more than 4.5m centres on internal floors over 9m in any dimension, or over 6m where the floor gets direct sun. Domestic tiling frequently leaves them out, and the result turns up years later as tiles debonding along a wall or tenting in the middle of a floor. See [tile repair](tile-repair-canberra.html)." },
        { type: "credit", text: "AS 3958:2023 Section 5, clause 5.4.7, as summarised by the Housing Industry Association's guide to joints in floor and wall tiles." },
        { type: "p", text: "**Grout colour is a maintenance decision as much as a visual one.** A wide contrasting joint makes the grid part of the design, and it also draws the eye to every variation in tile size and every imperfect cut. A tight matching joint reads as a continuous surface and hides the setting out. On a floor, contrasting grout shows wear and traffic staining sooner, and light cement based grout in a hallway is the hardest combination in the house to keep looking new, because cement grout is porous. Mid tones are more forgiving than either extreme." },
        { type: "p", text: "Cement grout benefits from sealing and epoxy does not. [Regrouting](regrouting-canberra.html) covers the difference between the two, and the difference between grout sealing and replacing grout." },

        { type: "h2", text: "Feature wall tiling" },
        { type: "p", text: "A feature wall is a different job from wall tiling, and it is worth naming it as one when you ask for a quote." },
        { type: "p", text: "Ordinary wall tiling covers an area. A feature wall is a single visible surface the room is arranged around: a fireplace surround, the wall behind a bed or a bath, a chimney breast, an entry wall. It is usually small in area and high in detail, and the tile chosen for it is often the hardest one in the house to lay - finger mosaic, elongated subway in a stack or herringbone set, split face stone, a three dimensional profile, or a large format slab where the join has to be placed deliberately." },
        { type: "p", text: "What that means in practice is that the square metre rate on a feature wall is not the square metre rate on the rest of the room, and quoting it as though it is produces a number nobody can deliver. Setting out matters more, because every joint is at eye level and there is nothing to hide a bad cut behind. External corners need a mitre or a trim, and on a feature wall a mitre is usually what is wanted, which is labour rather than a length of edging." },
        { type: "p", text: "Feature walls turn up most often in bathrooms and kitchens - see [bathroom tiling](bathroom-tiling-canberra.html) and [kitchen tiling](kitchen-tiling-canberra.html) - but a fireplace surround or an entry wall is the same job without the waterproofing under it." },

        { type: "h2", text: "Tiling over underfloor heating" },
        { type: "p", text: "Underfloor heating gets tiled over routinely, whether it is electric cable laid under the tile or hydronic pipework running warm water through a screed. Tile is a good surface for it, because it conducts heat well and does not object to being cycled." },
        { type: "p", text: "What changes on the tiling side is the specification and the sequence. The adhesive has to be one rated for a heated floor, because the surface expands and contracts every time the system cycles, and a rigid adhesive that is fine on an unheated slab will not stay bonded to one that moves daily." },
        { type: "p", text: "The sequence matters more than people expect, and it is not the tiler's to set. Ardex Australia's own bulletin for tiling over under-tile heating puts it plainly: the adhesive and grout are left to cure for at least 14 days before the heating is turned on at all, and when the floor is finally commissioned the temperature is brought up by roughly 2 degrees per day until it reaches working temperature, never above 45 degrees. Heating a floor before the adhesive has cured, or bringing it up in one step, is what softens adhesive and debonds tiles." },
        { type: "credit", text: "ARDEX Australia, Technical Bulletin TB176.007, Tiling with Underfloor Heating Systems, 8 July 2025. Scoped to under-tile heating cables above concrete, compressed fibre cement and timber floors - hydronic systems in a screed carry their own manufacturer requirements as well." },
        { type: "p", text: "Two other things from the same bulletin are worth knowing before you choose a tile. A timber or fibre cement sheeted floor has a deflection limit, and the limit tightens for large format tile, from 1 in 360 of the joist span to 1 in 500 once the tile is over 400 by 400mm. And an embedding screed over the heating gets its own cure period before anything is bonded on top of it." },
        { type: "p", text: "The practical version: get the heating manufacturer's specification and the adhesive manufacturer's requirements to the tiler before the quote, not after the screed is down. A heated floor is one of the few tiling jobs where the program is dictated by a trade other than the tiler." },

        { type: "h2", text: "Older Canberra homes" },
        { type: "p", text: "Canberra housing stock from the 1960s through the 1980s regularly turns up substrates that need assessing before anything goes over them: fibre cement sheet flooring and wall sheeting, sand and cement screeds of unknown depth, and existing floor coverings laid straight onto them." },
        { type: "p", text: "That is a bonding question and a safety question rather than a heritage one. A sheet floor that flexes underfoot will crack a rigid tiled surface however well the tiling is done, so how the floor is framed and fixed matters more than what is on top of it." },
        { type: "p", text: "The safety half is asbestos. WorkSafe ACT treats a residential building constructed or refurbished before 1990 as likely to contain asbestos containing material, and it turns up in sheeting, in some tile adhesives, and in vinyl floor tiles and their backing. In the ACT only a licensed asbestos assessor can identify or test suspected material, and only a licensed asbestos removalist can remove it, with no small quantity exemption for DIY. Identification comes before demolition, not after. [More on tile removal](tile-removal-canberra.html)." },
        { type: "credit", text: "WorkSafe ACT, Asbestos; WorkSafe ACT, Asbestos licensing." },
        { type: "p", text: "Older entries and verandahs sometimes carry tessellated tiling, and terrazzo occasionally turns up as an original floor finish, more often in mid century units and public buildings than in houses. Both are tile restoration work rather than tiling work: matching is difficult and sometimes impossible, and a specialist restorer is a different trade from a tiler. Worth identifying what you have before anyone quotes to take it out." },

        { type: "h2", text: "What goes wrong" },
        { type: "p", text: "**Lipping.** Large format tile laid on a floor that was not levelled for it. Visible along every joint, permanent, and a trip hazard where it is worst." },
        { type: "p", text: "**No movement joints.** The failure arrives years later as debonding along a wall or tiles tenting in the middle of a floor, and relaying without addressing it repeats it." },
        { type: "p", text: "**Setting out from the wrong point.** A sliver of cut tile in the most visible line of sight in the room. It costs nothing to get right at the start and cannot be fixed afterwards." },
        { type: "p", text: "**Transitions left to the end.** Where tile meets timber, carpet or the next room there is a height difference and an exposed edge. Deciding how that is finished - a trim, a threshold strip, or a flush detail built into the levelling - belongs at the quote, not on the last day." },

        { type: "faqs", items: [
          { q: "Can you tile over existing tiles?", a: "Sometimes. It depends mostly on whether what is there now is sound: tiles that are well bonded, a surface that is flat, and a height change at doorways, thresholds and fixtures that can be accommodated. Tiles that sound hollow when tapped are a no, because you would be bonding to something that is already failing. In a wet area there is a further catch, which is that tiling over leaves any waterproofing failure exactly where it is, buried under two layers of tile instead of one. See [tile removal](tile-removal-canberra.html)." },
          { q: "How much does floor tiling cost in Canberra?", a: "Published national rates for standard floor tiling supply and install run roughly $55 to $140 per square metre, with most guides putting the average around $75 to $100. Preparation is usually separate, and on a renovation it is frequently the largest single line. Sources in the [cost guide](tiling-cost-guide-canberra.html)." },
          { q: "Do I need to level the floor before tiling?", a: "It depends on how flat the floor already is and how flat the tile you have chosen needs it to be. Large format tile is much less forgiving than small format, so the same floor can need levelling for one tile and not for another. Nobody knows how much is needed until the old covering is off, which is why it is worth asking whether the quote includes it or provides for it." },
          { q: "Can you tile onto a timber floor?", a: "Usually, but the floor has to be stiff enough that the tiled surface is not being asked to absorb the flex. How the floor is framed, what is over it, and whether it needs additional sheeting are the questions, and they are worth settling before the tile is ordered rather than after." },
          { q: "What size tile should I use?", a: "Larger tiles read calmer and have less grout line to clean, and they need a flatter floor and cost more to lay. Smaller tiles are more forgiving of an uneven substrate and give you more joint to maintain. It is a trade-off rather than a right answer, and the deciding factor is usually how flat the floor is to start with." },
          { q: "Does the grout colour really matter?", a: "For maintenance, yes. Cement based grout is porous, so light grout on a floor shows traffic and staining soonest and needs sealing to resist it. Contrasting grout also draws the eye to every variation in tile size and cut. Mid tones are the forgiving choice, and epoxy holds colour far better than cement based grout without sealing." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       KITCHEN TILING - splashback-first framing, because the splashback is
       the part that is mispriced. Hands feature walls to floor-and-wall,
       grout material to regrouting, slip classification to outdoor-patio,
       and open-plan floors to floor-and-wall. Deliberately declines kitchen
       coordination in the same terms the site declines bathroom renos. ---- */
    {
      page: "kitchen-tiling-canberra.html",
      name: "Kitchen Tiling",
      shortDescription: "Kitchen floors and splashbacks: why a splashback takes far longer than its square metre count, and where tiling sits in a kitchen job.",
      metaTitle: "Kitchen Tiling Canberra | Splashbacks & Kitchen Floors",
      metaDescription: "Kitchen tiling in Canberra. Why a splashback takes longer than its square metre count suggests, kitchen floor choices, and where tiling sits in a kitchen job.",
      headline: "Kitchen Tiling and Splashbacks in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Kitchen tiling in Canberra",
      ctaBody: "Tell us whether it is a splashback, a floor, or both, whether the benchtop is in yet, and what is on the wall now. A splashback is priced on detail rather than area, so those answers matter more than the measurement does.",
      image: {
        src: "images/kitchen-splashback-tile-samples.jpg",
        alt: "White subway splashback tile samples, a tile cutter and a tube of adhesive on a concrete benchtop",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "A kitchen splashback is the clearest example of why square metres are a poor way to price tiling. Two or three square metres of wall can take most of a day, because almost none of it is a clear run." },
        { type: "p", text: "Kitchen tiling splits into two jobs that have almost nothing in common: the splashback, which is small and made of detail, and the floor, which is usually the largest continuous run of tile in the house. This page covers both." },

        { type: "h2", text: "Why a splashback takes longer than its size suggests" },
        { type: "p", text: "Measure a splashback and you get a small number. Then look at what is in it." },
        { type: "ul", items: [
          "**Power points.** Every GPO on the splashback is a set of cuts and an opening that has to land accurately, because the plate covers a fixed amount of wall and no more. They are almost never positioned to fall on a joint, so the cut goes through the middle of a tile.",
          "**The cooktop and rangehood return.** Usually the tallest part of the splashback, often the only part running full height, and it has to finish square against the hood with nothing to hide behind.",
          "**Window returns.** A window over the sink means reveals and a sill: internal and external corners, mitres or trims, and cuts on three sides of an opening.",
          "**Where it ends.** A splashback finishes somewhere - at a wall, at a return, at a fridge cavity, or in mid air at the end of a bench. Every one of those needs an edge, and an edge is a mitre or a trim.",
          "**Fixed top and bottom.** The tile has to land properly on the benchtop and against the underside of the overhead cupboards, with no room to adjust either. That constrains the setting out before a single tile is cut."
        ] },
        { type: "p", text: "So the labour is close to all detail and almost no productive run. A tiler pricing a splashback is pricing cuts and setting out rather than area, which is why the effective rate looks high against a floor rate and why it usually is not." },
        { type: "p", text: "The practical consequence: ask for a splashback as a job price, and ask what is included. Cuts around power points, the edge treatment at each end, and the window return if there is one are the three lines that separate two quotes." },

        { type: "h2", text: "Choosing a splashback tile" },
        { type: "p", text: "**Format.** Subway and similar small formats are the default, and they are forgiving of a wall that is not perfectly flat. Mosaics are quick to place, because they arrive on sheets, and slow to finish, because of the sheer quantity of grout joint. Large format and slab splashbacks give you very few joints and an easy surface to wipe down, but each cut is expensive to get wrong and the wall behind has to be genuinely flat." },
        { type: "p", text: "**Finish.** A polished or highly glazed tile behind a cooktop shows every splash and every wipe mark. Matt and lightly textured finishes are more forgiving, and the difference is a maintenance question rather than an aesthetic one." },
        { type: "p", text: "**Grout.** The wall behind a cooktop takes oil, steam and repeated cleaning. Epoxy grout is non porous, so it resists staining and chemical attack without sealing and holds its colour, and a splashback is small enough that the material premium is a modest number in absolute terms even though it is several times the price per kilogram. It is one of the two places on a domestic job where epoxy is straightforwardly worth it. See [regrouting](regrouting-canberra.html) for the comparison." },
        { type: "p", text: "**A splashback done as a feature.** Herringbone subway, finger mosaic, split face stone, or a slab with a deliberately placed join is feature work and is priced as feature work, not as a splashback. See [feature wall tiling](floor-and-wall-tiling-canberra.html)." },

        { type: "h2", text: "Kitchen floors" },
        { type: "p", text: "A kitchen floor is a dry area in the regulatory sense and a wet one in practice. It gets splashed, mopped, and stood on with wet hands and wet feet more than any other floor in the house." },
        { type: "p", text: "That makes slip resistance worth asking about even though there is no wet area requirement attached to it. Slip resistance is tested and classified under AS 4586 rather than judged by how a tile feels dry in a showroom, and a polished tile that looks good in a display can be genuinely slippery with water on it. Ask the supplier for the classification. Tiles marketed as non slip are not a category with a definition behind them; the classification is. See [outdoor and patio tiling](outdoor-patio-tiling-canberra.html) for how the classifications work." },
        { type: "credit", text: "AS 4586:2013 (as amended); HB 198:2014, Standards Australia." },
        { type: "p", text: "In an open plan kitchen and living area the floor is usually one continuous surface, which is the strongest case on a domestic job for large format tile and for planning the levelling around it. See [floor and wall tiling](floor-and-wall-tiling-canberra.html)." },
        { type: "p", text: "Grout in a kitchen floor takes cooking residue as well as traffic. Cement based grout is porous and benefits from grout sealing, which is a separate product, a separate visit and a recurring cost, because sealer wears and is reapplied rather than done once. Epoxy removes that line entirely." },

        { type: "h2", text: "Where tiling sits in a kitchen job" },
        { type: "p", text: "The sequence catches people out more in kitchens than anywhere else, because two trades have to finish before the tiler can start and one has to wait until after." },
        { type: "p", text: "**The splashback goes on after the benchtop.** It is tiled down to the bench, so it cannot be set out until the bench is physically there. If the benchtop is stone it is templated after the cabinets are installed and then fabricated, and that gap is usually a week or two. Planning a splashback for the same week as the cabinets does not work." },
        { type: "p", text: "**Electrical fit off comes after the splashback**, because the power point plates sit on top of the finished tile. If the plates go on first they come off again." },
        { type: "p", text: "**The floor is a decision rather than a sequence.** Tiling the floor before the cabinets go in means tile under the kickboards: more tile, more cost, and a continuous floor if the kitchen is ever changed or a cabinet is moved. Tiling after means less tile and a visible edge at the kickboard line, and it commits the room to that layout. Both are done routinely. It is worth deciding deliberately rather than finding out which one happened." },
        { type: "p", text: "Cabinetry, benchtops, plumbing and electrical are separate trades, and coordinating a kitchen is a builder's or a kitchen company's job rather than a tiler's. Same answer we give on full bathroom renovations - see [about](about.html)." },

        { type: "h2", text: "What it costs" },
        { type: "p", text: "Wall tiling runs higher per square metre than floor tiling nationally, around $95 against $85, and a splashback sits above even that because of the detail in it. Treat a per square metre rate as the wrong tool for a splashback and ask for a job price instead. A kitchen floor prices much closer to a general floor rate, with the substrate as the variable. Full picture and sources in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." },

        { type: "faqs", items: [
          { q: "How much does a tiled kitchen splashback cost?", a: "It is priced as a job rather than by the square metre, and a national wall tiling rate near $95 per square metre is the wrong tool for it, because a splashback is two or three square metres of almost pure detail. Ask for a job price and ask what it includes: the cuts around power points, the edge treatment at each end, and the window return if there is one. See the [cost guide](tiling-cost-guide-canberra.html)." },
          { q: "Can I tile over an existing splashback?", a: "Sometimes, if what is there is well bonded and flat. The constraint people miss is depth: the power point plates have to sit flat against the finished surface, and adding a tile thickness can mean the electrician needs to pack the boxes out. That is worth checking with the electrician before assuming it, not after the tiles are on." },
          { q: "Do I need epoxy grout behind the cooktop?", a: "You do not need it, but it is one of the places it earns its cost. Epoxy is non porous, so it resists oil, staining and repeated chemical cleaning without sealing, and it holds its colour. A splashback is small enough that the material premium is a modest number in absolute terms." },
          { q: "Should the splashback go to the underside of the cupboards or to the ceiling?", a: "Either is normal. To the cupboards is the cheaper and more common answer. Full height changes the look of the room and costs more in tile and labour, and it is the better answer where there are no overheads on that wall or where the tile is the feature." },
          { q: "When should the splashback be tiled?", a: "After the benchtop is installed and before the electrical fit off. A stone benchtop is templated once the cabinets are in and then fabricated, so allow for that gap rather than booking the tiler for the same week as the cabinets." },
          { q: "Should the kitchen floor be tiled before or after the cabinets?", a: "Both are done. Before means tile under the kickboards, which costs more and leaves you a continuous floor if the kitchen ever changes. After means less tile and an edge at the kickboard line, and it locks in the layout. The point is to choose rather than to discover which one happened." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       OUTDOOR AND PATIO TILING - owns slip resistance classification for
       the whole site (bathroom, kitchen, laundry, pool and commercial all
       link here for how AS 4586 works, rather than restating it). The
       10-20% external premium and $15-30/m2 screed are the cost guide's
       own published figures, kept to a sentence and linked. Balconies as
       a repair/waterproofing subject stay on waterproofing-canberra. ----- */
    {
      page: "outdoor-patio-tiling-canberra.html",
      name: "Outdoor and Patio Tiling",
      shortDescription: "Alfresco areas, patios and paths: slip resistance classification, weather resistant adhesive, drainage and falls, and why external work costs more.",
      metaTitle: "Outdoor & Patio Tiling Canberra | Alfresco & Paths",
      metaDescription: "Outdoor and patio tiling in Canberra. Slip resistance ratings, weather resistant adhesive, drainage and frost, and why external tiling costs more than the same area inside.",
      headline: "Outdoor and Patio Tiling in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Outdoor tiling in Canberra",
      ctaBody: "Tell us what the area is, what is under it now, and whether anything is underneath it - a garage, a room, or just ground. Tiling over habitable space is a different job from tiling a slab on grade, and it is the first thing anyone quoting needs to know.",
      image: {
        src: "images/outdoor-patio-textured-pavers.jpg",
        alt: "Textured, slip-resistant outdoor pavers with a notched trowel, a garden softly out of focus behind",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "Outdoor tiling looks like indoor tiling with a different tile on it. It is not. The surface has to drain, it has to be safe underfoot when it is wet, it has to survive a Canberra winter, and everything holding it together has to be rated for weather." },
        { type: "p", text: "This page covers alfresco areas, patios, courtyards, paths and steps: what the specification actually has to do, and why the same area costs more outside than in." },

        { type: "h2", text: "What this covers" },
        { type: "ul", items: [
          "**Alfresco areas and covered outdoor rooms.** The most common external tiling job, and the most forgiving, because it is partly sheltered.",
          "**Patios and courtyards.** Fully exposed, so the tile specification and the drainage both matter more.",
          "**Paths, steps and thresholds.** Small areas with the highest slip consequence on the property, because they are where people are moving and changing level.",
          "**Balconies and areas over habitable space.** Tiled over a membrane, with somewhere worse for a failure to go. See [waterproofing](waterproofing-canberra.html)."
        ] },
        { type: "p", text: "Pool surrounds and coping are related but have their own requirements - see [pool tiling](pool-tiling-canberra.html)." },

        { type: "h2", text: "Slip resistance, and how it is actually measured" },
        { type: "p", text: "This is the requirement that separates outdoor tiling from indoor tiling most sharply, and it is the one most often decided by looking at a sample." },
        { type: "p", text: "Slip resistance of pedestrian surfaces in Australia is tested and classified under AS 4586. A surface can be rated by wet pendulum test, which produces a P0 to P5 classification, by oil wet ramp, which produces an R rating, or by a barefoot ramp test, which produces an A, B or C rating for surfaces used without shoes. The companion handbook, HB 198, guides which classification suits which application." },
        { type: "credit", text: "AS 4586:2013 (as amended); HB 198:2014, Standards Australia." },
        { type: "p", text: "**What that means when you are choosing a tile.** Ask the supplier for the classification by name, for the specific tile and for the application you have in mind. External, exposed and sloped surfaces sit at the demanding end, and the same tile that is fine on a covered alfresco floor can be the wrong choice for an exposed step. Two finishes in the same tile range frequently carry different classifications." },

        { type: "h3", text: "Where a minimum is actually mandated" },
        { type: "p", text: "Worth getting right, because the requirement is narrower than tile marketing implies and stricter than most people expect on the surfaces it does cover." },
        { type: "p", text: "The National Construction Code sets minimum slip resistance classifications for houses, tested to AS 4586, and they attach to steps, ramps and landings rather than to floors generally. For a Class 1 dwelling the Housing Provisions require, on a wet surface, P4 or R11 for a stair tread, P4 for a nosing or landing edge strip, and P5 or R12 for a ramp no steeper than 1:8. The dry figures sit one step lower in each case." },
        { type: "credit", text: "National Construction Code 2022, Housing Provisions, clause 11.2.4 and Table 11.2.4." },
        { type: "p", text: "The definition of a wet surface is the part that catches people out. The Australian Building Codes Board treats a surface exposed to weather, an external stairway being its own example, as a wet surface regardless of the weather on the day. So the external steps and any ramp at a Canberra house are assessed against the wet column, not the dry one." },
        { type: "credit", text: "Australian Building Codes Board, Advisory Note - Slip-resistance for stairways, landings and ramps, 2020." },
        { type: "note", text: "What is not mandated is a minimum for the patio itself. The Board's own note is explicit that AS 4586 applies to all new pedestrian surfaces while the Code's classification requirements attach to stairways, ramps and landings. HB 198 recommends classifications for other applications, external and wet areas included, but it is guidance rather than a blanket legal minimum for a private patio. That is exactly why it is worth asking for the classification by name rather than assuming a tile that looks textured automatically passes." },
        { type: "p", text: "One thing worth knowing regardless: tiles marketed as non slip tiles or as slip resistant flooring are not a defined category. Anyone can print it on a box. The classification is the part with a test behind it." },

        { type: "h2", text: "Adhesive, grout and what weather does to them" },
        { type: "p", text: "Outside, the adhesive and grout are exposed to UV, to rain, and to a temperature range an internal floor never sees." },
        { type: "p", text: "**Weather resistant adhesive, applied as a full bed.** External tiling needs an adhesive rated for external use and for the substrate it is going onto, and it needs close to full coverage rather than dabs. A void under an external tile fills with water, and water that sits in a void through a Canberra winter freezes. Freezing water expands, and it lifts tiles." },
        { type: "p", text: "**Frost matters here more than it does in most of Australia.** Canberra gets hard frosts and sub-zero overnight temperatures through winter, which coastal capitals largely do not. A tile specified as frost resistant, and full adhesive coverage so there is nowhere for water to sit, are both more than a formality in this climate." },
        { type: "p", text: "**Movement joints are not optional outside.** AS 3958:2023 calls for movement joints at no more than 4.5m centres in any direction outdoors, against 4.5m centres on internal floors only once the floor exceeds 9m in a dimension. The reason is straightforward: an external surface expands in the sun and contracts overnight, every day, and it needs somewhere designed to absorb that. Perimeter joints matter as much as the field joints." },
        { type: "credit", text: "AS 3958:2023 Section 5, clause 5.4.7, as summarised by the Housing Industry Association's guide to joints in floor and wall tiles." },
        { type: "p", text: "**Grout and joint width.** External joints take water and movement, so joint width has to suit the tile rather than be squeezed to look neat. See [floor and wall tiling](floor-and-wall-tiling-canberra.html) for how joint width is matched to a tile format." },

        { type: "h2", text: "Drainage and falls" },
        { type: "p", text: "An outdoor tiled surface has to shed water, and it has to shed it away from the house. A patio that ponds is a maintenance problem, a slip problem, and where it drains back toward a wall it becomes a building problem." },
        { type: "p", text: "The fall is built into the substrate, not into the tiling. If the slab was poured flat, the fall has to be created with a screed before tiling starts, and that is a real line on the quote rather than something a tiler can absorb by laying the tiles on a slope." },
        { type: "p", text: "**Over habitable space** - a balcony, or an alfresco over a garage or a room - there is a waterproof membrane under all of it, and the same rules about junction detailing and cure time apply as in a bathroom, with UV and thermal cycling on top. That is a different and more expensive job than a patio on ground. See [waterproofing](waterproofing-canberra.html)." },

        { type: "h2", text: "What outdoor tiling costs" },
        { type: "p", text: "External tiling carries a premium over the same area done inside, in the order of 10 to 20% on both supply and labour. The tile specification is higher, the adhesive is dearer, and the preparation is more involved." },
        { type: "p", text: "That premium sits on top of whatever the substrate needs. Falls, drainage and levelling on an existing slab are the real variable, and published rates put screeding and levelling at $15 to $30 per square metre. Full breakdown and sources in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." },

        { type: "faqs", items: [
          { q: "Can you tile over an existing concrete patio?", a: "Often, provided the slab is sound, clean, and already falls the right way, and provided any joints in the slab are carried through the tiling rather than tiled over. A slab that has cracked will crack the tiled surface above it in the same line, so the crack has to be assessed before anything goes on top of it." },
          { q: "What slip rating do I need outside?", a: "It depends on the surface. For steps, ramps and landings at a house there is a mandated minimum under the National Construction Code, tested to AS 4586, and because a surface exposed to weather counts as wet, an external stair tread needs P4 or R11 and a ramp no steeper than 1:8 needs P5 or R12. For the patio floor itself there is no mandated minimum, only HB 198 guidance by application. Either way, ask the supplier for the classification of the specific tile and finish rather than the range, and tell them what it is for." },
          { q: "Will outdoor tiles crack in a Canberra winter?", a: "They can, and the usual mechanism is water rather than cold on its own. Water sitting in a void under a tile expands when it freezes and lifts the tile. Frost resistant tiles and full adhesive coverage, so there is no void for water to collect in, are the controls that matter here." },
          { q: "Do outdoor tiles need sealing?", a: "It depends on the material. Porcelain is dense and generally does not. Natural stone usually does, and it needs resealing periodically, which is a recurring cost worth knowing about before you choose it. Cement based grout benefits from sealing outdoors as well as in." },
          { q: "Can I use the same tile inside and outside?", a: "Frequently yes, and many ranges are made to do exactly that so a floor can run through a doorway without a change. What often differs is the finish: the external version of a range usually carries a different surface and a different slip classification. Ask for both classifications rather than assuming the range name covers it." },
          { q: "Does an outdoor area need movement joints?", a: "Yes, on any area of size. AS 3958:2023 calls for joints at no more than 4.5m centres in any direction outdoors, because the surface expands in the sun and contracts overnight every day. Leaving them out is one of the more common causes of external tiling lifting or tenting a few years later." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       POOL TILING - scoped to surrounds and coping. The pool INTERIOR
       (waterline, shell finishes) is explicitly declined, same as full
       bathroom renovations are, because it is a pool trade rather than a
       tiling one. Barefoot classification is the page's own angle; the
       general AS 4586 explainer stays on outdoor-patio. ------------------ */
    {
      page: "pool-tiling-canberra.html",
      name: "Pool Tiling",
      shortDescription: "Pool surrounds and coping: barefoot slip resistance, the movement joint at the pool edge, and what constant water exposure does to a tiled surface.",
      metaTitle: "Pool Tiling Canberra | Surrounds, Coping & Paving",
      metaDescription: "Pool surround and coping tiling in Canberra. Barefoot slip resistance, movement at the pool edge, and why constant water exposure changes the specification.",
      headline: "Pool Surround and Coping Tiling in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Pool surround tiling in Canberra",
      ctaBody: "Tell us what is around the pool now, whether the coping is being replaced as well as the paving, and whether anything has lifted or moved. Movement at the pool edge is the usual cause, and it changes what the repair is.",
      image: {
        src: "images/pool-coping-movement-joint.jpg",
        alt: "Close-up of pool coping tiles and the movement joint where the coping meets the surrounding paving",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "A pool surround is the most demanding tiled surface on a domestic property. It is wet most of the time it is in use, it is walked on barefoot, it is fully exposed to sun and frost, and it sits at the edge of a large structure that moves independently of everything around it." },
        { type: "p", text: "Three requirements drive the specification: slip resistance measured barefoot, movement at the pool edge, and constant exposure to water that is not rainwater. This page covers each." },

        { type: "h2", text: "What this covers, and what it does not" },
        { type: "p", text: "**Covered.** The tiled surround or paving around a pool, the coping at the pool edge, steps and thresholds between the house and the pool area, and the transition to whatever paving or lawn lies beyond it." },
        { type: "p", text: "**Not covered: the inside of the pool.** Waterline tiling and interior pool finishes are a pool trade. They go onto a pool shell with its own structure, its own movement and its own waterproofing, and they are not a domestic tiling job. If that is what you need, a pool builder or a pool renovation specialist is who you want, and we will say so rather than take the enquiry." },
        { type: "p", text: "**Also not covered:** pool barrier and fencing compliance. That is a separate regulatory matter in the ACT, and it is not something a tiler determines. Worth resolving before any work changes the levels around a pool, because the levels are part of what a barrier is assessed against." },

        { type: "h2", text: "Slip resistance, measured barefoot" },
        { type: "p", text: "A pool surround is the clearest case on a domestic property for the barefoot classification in AS 4586." },
        { type: "p", text: "Slip resistance is tested three ways: a wet pendulum result, giving a P0 to P5 classification; an oil wet ramp result, giving an R rating; and a barefoot ramp result, giving an A, B or C rating. The barefoot rating is the one that describes how a surface behaves under a wet bare foot, which is the only way anyone uses a pool surround. A tile can carry a respectable R rating and still be the wrong choice around a pool." },
        { type: "credit", text: "AS 4586:2013 (as amended); HB 198:2014, Standards Australia." },
        { type: "p", text: "HB 198 recommends classifications by application rather than setting one figure for everywhere, and a pool surround is one of the applications it addresses. It is a paywalled Standards Australia publication, so this page cites it by number rather than reproducing its recommendations: ask the supplier, or the tile's technical data, for the barefoot classification recommended for a pool surround, and get the answer in writing." },
        { type: "p", text: "What is mandated rather than recommended is narrower, and it still applies here. The National Construction Code sets minimum classifications for steps, ramps and landings at a house, tested to AS 4586, and a surface exposed to weather counts as a wet surface. The steps into a pool area and any ramp fall under that even though the paving around the pool does not. See [outdoor and patio tiling](outdoor-patio-tiling-canberra.html) for the figures." },
        { type: "credit", text: "National Construction Code 2022, Housing Provisions, clause 11.2.4 and Table 11.2.4; Australian Building Codes Board, Advisory Note - Slip-resistance for stairways, landings and ramps, 2020." },
        { type: "p", text: "The instruction does not depend on any of that: ask for the barefoot classification rather than the R rating alone, and ask for it against the specific finish rather than the range. Two finishes in one range routinely differ." },

        { type: "h2", text: "Movement at the pool edge" },
        { type: "p", text: "This is what separates pool surround tiling from patio tiling, and it is the reason most pool surrounds fail where they do." },
        { type: "p", text: "A pool shell is a large, rigid structure in the ground. The paving around it sits on fill, or on its own slab, or on both. They are not the same structure, they do not move together, and the joint between them has to take the difference." },
        { type: "p", text: "So the coping detail and the joint behind it are the job. A movement joint at the pool edge, correctly sized and filled with a flexible sealant rather than grout, is what stops the coping lifting or the first course of paving debonding. AS 3958:2023 sets a minimum movement joint width of 6mm and joints at no more than 4.5m centres in any direction outdoors, and around a pool the perimeter joint matters at least as much as the field joints do." },
        { type: "credit", text: "AS 3958:2023 Section 5, clause 5.4.7, as summarised by the Housing Industry Association's guide to joints in floor and wall tiles." },
        { type: "p", text: "Grout in a movement joint cracks. It is the same failure as grout in a bathroom corner, on a larger and more exposed surface, and it comes back however many times it is regrouted. See [regrouting](regrouting-canberra.html)." },
        { type: "p", text: "If paving next to your pool has lifted, tented or gone drummy along the edge, this is the first thing to check rather than the tile or the adhesive. See [tile repair](tile-repair-canberra.html)." },

        { type: "h2", text: "Water exposure" },
        { type: "p", text: "A pool surround is wet in a way a patio is not. Splash-out is constant while the pool is in use, and it is not clean water." },
        { type: "p", text: "**Pool water.** Salt chlorinated water leaves salt behind as it evaporates, and salt crystallising inside a porous grout joint works on it over time. Epoxy grout is non porous and handles it considerably better, which is why it is specified around pools more often than anywhere else on a domestic property. Cement based grout is also vulnerable to acidic cleaners, which are common in pool area maintenance - see [regrouting](regrouting-canberra.html)." },
        { type: "p", text: "**Freeze and thaw.** Canberra frosts, and a surround that holds water in voids under tiles or in a ponding low spot has water in it when the temperature drops. Full adhesive coverage and a fall that actually drains are the controls, and they are decided at installation rather than afterwards." },
        { type: "p", text: "**Efflorescence.** White chalky deposits appearing at joints and edges as water passes through and leaves salts behind. Largely cosmetic, common around pools, and far easier to prevent with drainage than to remove once it has started." },

        { type: "h2", text: "What pool tiling costs" },
        { type: "p", text: "Published figures put pool tiling labour at $60 to $120 per square metre. Take that as a labour rate for the field area rather than a job price: the coping detail, the movement joint at the pool edge, and whatever the surround is sitting on are what actually move the number." },
        { type: "p", text: "External tiling generally also carries a 10 to 20% premium over the same work inside, on both supply and labour. Sources in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." },

        { type: "faqs", items: [
          { q: "Can you tile the inside of a pool?", a: "No. Waterline tiling and interior pool finishes are a pool trade, done to a pool shell with its own structure and waterproofing, and they are not a domestic tiling job. A pool builder or a pool renovation specialist is who you want for that." },
          { q: "What tile should I use around a pool?", a: "The requirements are a barefoot slip classification suited to the application, frost resistance, and a material that tolerates constant wetting and pool chemistry. Porcelain and dense stone are the usual answers. Ask the supplier for the barefoot classification of the specific finish rather than the range." },
          { q: "Why does the paving next to my pool keep lifting?", a: "Almost always movement at the pool edge with nowhere designed to absorb it. A pool shell and the paving around it are separate structures that move differently, and the joint between them needs to be a flexible movement joint rather than grout. Relaying without addressing that repeats the failure." },
          { q: "Should I use epoxy grout around a pool?", a: "It is one of the strongest cases for it on a domestic property. Epoxy is non porous, so it resists the salt, the pool chemistry and the acidic cleaners that degrade cement based grout, and it does not need periodic sealing. It costs several times as much in material and takes longer to lay." },
          { q: "Can you tile over existing pool paving?", a: "Sometimes, but there are two extra constraints beyond the usual ones. The added height changes the relationship between the paving and the coping and between the paving and any door thresholds, and the existing movement joint at the pool edge has to be carried through the new surface rather than tiled over." },
          { q: "What is coping?", a: "The finished edge that caps the top of the pool shell, where the pool meets the paving around it. It is the most detailed part of a pool surround, it takes the most water, and it sits directly on the movement joint between two structures, which is why it is where problems usually appear first." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       COMMERCIAL TILING - the only page on the site aimed at a business
       rather than a homeowner, so the framing is program/specification
       rather than cost tiers. Deliberately carries NO rate: every figure
       on this site is a published domestic rate and none of the cost
       guide's sources publish a commercial one. Conditional pre-renter
       wording in the first FAQ, same as about/disclaimer/privacy. ------- */
    {
      page: "commercial-tiling-canberra.html",
      name: "Commercial Tiling",
      shortDescription: "Retail, hospitality and office fitouts: why program and specification drive commercial tiling rather than finish, and what that changes in a quote.",
      metaTitle: "Commercial Tiling Canberra | Retail & Office Fitouts",
      metaDescription: "Commercial tiling in Canberra for retail, hospitality and office fitouts. Why program, specification and durability drive the job rather than domestic finish.",
      headline: "Commercial Tiling in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Commercial tiling in Canberra",
      ctaBody: "Tell us what the space is, what the program is, and whether you are working to a specification already. Commercial work is decided by dates and by the spec more than by the tile, and those are the first things anyone quoting will ask about.",
      image: {
        src: "images/commercial-fitout-large-format.jpg",
        alt: "Large-format floor tiles being set out with a laser level line in an open commercial fitout under construction",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "Commercial tiling is the same trade as domestic tiling with a different set of constraints on it. The finish matters less than people expect. What matters is the program, the specification, and whether the surface is still acceptable after five years of traffic a house never sees." },
        { type: "p", text: "This page is about what changes when the client is a business: how the schedule is set, what durability actually means in a specification, and why a commercial quote is not a domestic quote with a margin on it." },

        { type: "h2", text: "What this covers" },
        { type: "ul", items: [
          "**Retail fitouts and shopfronts.** Usually the tightest programs, because a fixed opening date exists before anyone measures anything.",
          "**Hospitality.** Cafes, restaurants and bars, including commercial kitchens and their wet areas, where the surface has to be cleanable as well as durable.",
          "**Office fitouts.** Amenities, kitchenettes, lift lobbies and end of trip facilities.",
          "**Body corporate and common area work.** Lobbies, stairs, common bathrooms and balconies in units and townhouses, where the same detail is repeated across a building."
        ] },
        { type: "p", text: "Not covered: structural and below ground waterproofing, tanking, and remedial building envelope work. That is a different discipline with different contractors. See [waterproofing](waterproofing-canberra.html)." },

        { type: "h2", text: "Program drives everything" },
        { type: "p", text: "On a domestic job the schedule is set by the substrate and by membrane cure time. On a commercial fitout it is set by a handover date fixed before anyone measured anything." },
        { type: "p", text: "**Tiling sits in the middle of the trade sequence**, dependent on everything before it and blocking everything after it. On a fitout with a fixed opening, a delay in the rough-in does not move the opening. It compresses the tiling." },
        { type: "p", text: "**Which is where waterproofing gets compressed.** Membranes need cure time before tiling, and cure times lengthen in cold conditions. A Canberra winter fitout with a fixed handover is exactly the situation in which a membrane gets tiled over early, and that decision is invisible for two years and expensive when it surfaces. See [waterproofing](waterproofing-canberra.html)." },
        { type: "p", text: "**Out of hours work.** Occupied buildings, tenanted retail and trading hospitality venues mean night and weekend work, restricted access, lift bookings, noise windows and dust containment. All of it is real cost, and all of it belongs in the quote rather than being discovered halfway through." },
        { type: "p", text: "**Staging.** Keeping part of a space trading while another part is tiled costs more than closing it, because the work is done in pieces and the setting out has to reconcile across the joins between them." },

        { type: "h2", text: "Durability, not finish" },
        { type: "p", text: "The domestic question is what the tile looks like. The commercial question is what it looks like after five years of trolleys, chairs, heels, spills and daily chemical cleaning." },
        { type: "p", text: "**Wear.** Porcelain rather than ceramic in traffic areas, and through body or unglazed porcelain where the surface will be genuinely abraded, because a glaze that wears through shows a different colour underneath it." },
        { type: "p", text: "**Slip resistance is specified, not chosen.** Classification under AS 4586 usually appears in the specification for commercial work, and ramps, stairs, entries and wet areas carry requirements a private patio does not. Where a fitout arrives without a classification specified, that is worth resolving before tiles are ordered rather than after they are laid. See [outdoor and patio tiling](outdoor-patio-tiling-canberra.html) for how the classifications work." },
        { type: "credit", text: "AS 4586:2013 (as amended); HB 198:2014, Standards Australia." },
        { type: "p", text: "**Grout.** Epoxy is normal in commercial kitchens, food areas and heavy wet areas, because it is non porous, needs no sealing and tolerates chemical cleaning. It costs several times cement based grout in material and takes longer to lay, and on a commercial floor that is usually the right trade. See [regrouting](regrouting-canberra.html)." },
        { type: "p", text: "**Movement joints.** Large commercial floors need them, and they get them more reliably than domestic floors do because they are usually specified. AS 3958:2023 applies here as it does at home. See [tile repair](tile-repair-canberra.html)." },
        { type: "credit", text: "AS 3958:2023 Section 5, clause 5.4.7, as summarised by the Housing Industry Association's guide to joints in floor and wall tiles." },
        { type: "p", text: "**Junction detail.** Commercial kitchens and food preparation areas commonly call for a coved junction between floor and wall rather than a square one, so the floor can be washed down without water sitting in the corner. That is driven by what the surface has to be able to be cleaned to, and it is a detail to confirm against the specification rather than to assume either way." },

        { type: "h2", text: "Specification and documentation" },
        { type: "p", text: "Commercial work usually arrives with a specification: a named tile, adhesive, membrane and grout, and a slip classification. That is a good thing. It removes most of the ambiguity that makes domestic quotes incomparable, because everyone is pricing the same materials rather than describing a similar job." },
        { type: "p", text: "It also changes what a variation is. A substitution becomes something to be approved rather than a decision the tiler makes on site, which is worth understanding before a lead time on a specified tile turns into a program problem." },
        { type: "p", text: "Wet area waterproofing documentation matters more here rather than less. It is what a certifier and a building surveyor ask for, and on a commercial fitout there is usually someone whose job it is to collect it. Get it at the time - reconstructing it later is difficult and sometimes impossible. See [waterproofing](waterproofing-canberra.html)." },

        /* No cost heading on this page, deliberately. Every figure on this
           site is a published DOMESTIC rate and none of the cost guide's
           sources publish a commercial one, so a "what it costs" section
           here would either be empty or invented. Resolved per README
           content-sourcing rule 5: explaining why no figure can honestly be
           given is a valid resolution. If a checkable commercial source
           ever turns up (industry body, published rate card, government
           schedule of rates), it goes here. */
        { type: "h2", text: "Why this page carries no rate" },
        { type: "p", text: "Every cost figure on this site is a published domestic rate, and the sources behind the [Canberra tiling cost guide](tiling-cost-guide-canberra.html) do not publish a commercial equivalent. Rather than convert a domestic rate into a commercial one and present the result as data, there is no figure here." },
        { type: "p", text: "What can be said without one: commercial rates are not domestic rates with a margin applied. Out of hours access, staging around a trading business, program compression, specified materials and higher performance grout all sit inside the number, and on a fitout the access and program lines are frequently larger than the tiling itself. Price commercial work from a scope and a program, not from a square metre rate carried across from a house." },

        { type: "faqs", items: [
          { q: "Do you take commercial tiling enquiries in Canberra?", a: "Yes, for retail, hospitality and office fitouts. Where we have a contractor covering that type of work, your enquiry goes to them, and where we do not we will tell you rather than sit on it. Commercial and domestic tiling are not always the same contractor pool, so it helps to include the scope and the program when you enquire." },
          { q: "Is commercial tiling more expensive than domestic tiling?", a: "Usually, and not mainly because of the tiling. Out of hours access, staging around a trading business, program compression, specified materials and higher performance grout all sit in the price, and on a fitout those lines are frequently larger than the laying itself." },
          { q: "Can tiling be done out of hours?", a: "It is normal in occupied buildings and trading venues. Night work, weekend work, lift bookings, noise windows and dust containment all cost time, and they should be priced into the quote rather than added as a variation later. Tell us the access constraints when you enquire." },
          { q: "What slip rating does a commercial floor need?", a: "It is normally set by the specification, classified under AS 4586, and it varies by surface: ramps, stairs, entries and wet areas carry requirements that a general floor area does not. If a fitout arrives without a classification specified, resolve it before the tiles are ordered." },
          { q: "Do you do commercial kitchens?", a: "It is within scope as tiling work, and it is one of the places where the specification does most of the deciding: epoxy grout, a slip classification appropriate to a wet working floor, and commonly a coved floor to wall junction so the area can be washed down. Confirm those against the specification rather than assuming them." },
          { q: "Who is responsible for the waterproofing documentation on a fitout?", a: "In practice, whoever the certifier asks. What matters from a tiling point of view is that the person applying the membrane can produce documentation for a building surveyor, and that it is collected at the time rather than reconstructed afterwards." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       LAUNDRY TILING - the argument of the page is that a laundry is a wet
       area and gets treated as though it is not. AS 3740 extent and the
       NCC timber-vs-concrete distinction are both already sourced on
       waterproofing-canberra; repeated here in one sentence each with the
       same credits, and handed off rather than expanded. ----------------- */
    {
      page: "laundry-tiling-canberra.html",
      name: "Laundry Tiling",
      shortDescription: "A laundry is a wet area with the same waterproofing requirements as a bathroom, and it is the room most often treated as though it is not.",
      metaTitle: "Laundry Tiling Canberra | Wet Area Floors & Walls",
      metaDescription: "Laundry tiling in Canberra. Why a laundry is a wet area with real waterproofing requirements, where laundries leak, and what that means for a small room.",
      headline: "Laundry Tiling in Canberra",
      ctaText: "Get a Quote",
      ctaHeading: "Laundry tiling in Canberra",
      ctaBody: "Tell us whether the laundry has a floor waste, whether the floor is timber or slab, and whether the tub or the machine is being moved. Those three answers decide whether it is a straightforward tile or a waterproofing job.",
      image: {
        src: "images/laundry-floor-waste-macro.jpg",
        alt: "A stainless steel floor waste set into small-format tiles in a compact laundry, with wall pipework visible behind",
        width: 1200,
        height: 655
      },
      blocks: [
        { type: "lead", text: "A laundry is a wet area. It is treated as an afterthought more often than any other room in the house, and it should not be." },
        { type: "p", text: "It is small, it is usually the cheapest room in a renovation, and it is the one where a budget gets recovered when something else runs over. But it has a tub, a tap set, and a washing machine with two hoses under mains pressure and a drain hose sitting loose in a standpipe. Water gets onto that floor routinely, and when a hose lets go, a great deal of it arrives at once." },

        { type: "h2", text: "The waterproofing requirement is real" },
        { type: "p", text: "Wet area waterproofing in Australian homes is governed by AS 3740:2021 Waterproofing of Domestic Wet Areas, and laundries are one of the areas it covers. The extent required is not the same as a shower, because a laundry has no shower recess, but it is not nothing and it does not disappear because the room is small." },
        { type: "credit", text: "AS 3740:2021, Standards Australia." },
        { type: "p", text: "How much of the room needs membraning depends on the room: whether there is a floor waste, what the floor is made of, and where the tub and the machine sit. One difference is worth knowing because it changes the size of the job. Outside a shower area the National Construction Code requires a timber based floor, plywood and particleboard included, to be waterproof, while a concrete or fibre cement floor in the same position need only be water resistant. A laundry on a suspended timber floor is a bigger job than the same laundry on a slab, and Canberra has plenty of both." },
        { type: "credit", text: "National Construction Code, Specification 26 - Waterproofing and water-resistance requirements for building elements in wet areas, clause S26C4. AS 3740 carries the installation detail." },
        { type: "p", text: "And it is the same as a bathroom in the respect that matters most: once the tiles are on, the membrane is sealed underneath them permanently. There is no inspecting it later and no topping it up. The window between waterproofing and tiling is the only chance to look at it. See [waterproofing](waterproofing-canberra.html)." },

        { type: "h2", text: "Where laundries actually leak" },
        { type: "p", text: "**The washing machine.** Two hoses under mains pressure, a drain hose that can work its way out of the standpipe, and a machine that moves during a spin cycle. It is the most likely source of a large volume of water on a laundry floor in a short time, and it is the reason the floor under and around it is worth doing properly rather than economically." },
        { type: "p", text: "**The tub.** The junction between the tub and the wall, and the splash zone behind and beside it, take water every day. That junction is a movement joint and belongs in silicone rather than grout, and silicone is a wear item that perishes. See [regrouting](regrouting-canberra.html)." },
        { type: "p", text: "**The floor waste, where there is one.** The same puddle flange connection as a bathroom and the same failure mode: if the membrane is not properly bonded to the flange, water tracks past the drain rather than into it. And a floor waste with no fall to it is decoration." },
        { type: "p", text: "**The door threshold.** A laundry that shares a wall with a hallway or a bedroom, with no fall and no threshold detail, sends water out of the room rather than to the drain. That is how a laundry leak turns into a carpet problem." },

        { type: "h2", text: "What makes a laundry its own job" },
        { type: "p", text: "**It is priced like a bathroom, not like a floor.** Small and detailed: the floor is mostly cuts, around the tub, the machine recess, the doorway, the floor waste and whatever else has been fitted into the room. The productive middle where a tiler lays quickly barely exists, so the effective rate per square metre runs well above a headline floor tiling figure even though the total stays small." },
        { type: "p", text: "**Splashback height behind the tub and the machine.** Full height, to the underside of a cupboard, or a short splash above the tub. Worth deciding rather than defaulting, because the wall behind a washing machine is the wall nobody sees and nobody dries." },
        { type: "p", text: "**Floor finish.** A laundry floor gets wet, gets walked on with wet feet, and is often the route in from the garage or the washing line. Slip resistance is classified under AS 4586 and it is worth asking about, particularly if you are considering a polished tile. See [outdoor and patio tiling](outdoor-patio-tiling-canberra.html) for how the classifications work." },
        { type: "credit", text: "AS 4586:2013 (as amended); HB 198:2014, Standards Australia." },
        { type: "p", text: "**Grout.** Cement based grout in a laundry takes detergent, bleach and constant damp. Acidic cleaners attack cement based grout, because cement corrodes in contact with acid, and strong bleach can affect the oxides that give grout its colour. Epoxy is the exception on both counts. See [regrouting](regrouting-canberra.html)." },
        { type: "credit", text: "Ardex Australia, Technical Bulletin TB186.004, Cleaning / Maintenance of ARDEX Grouts, July 2024." },
        { type: "p", text: "**What is there now.** Older laundries frequently have a tiled splash over a sheet or vinyl floor, or tiles laid straight onto sheet flooring. What comes off, and what it takes with it, is the usual unknown. See [tile removal](tile-removal-canberra.html)." },

        { type: "h2", text: "What laundry tiling costs" },
        { type: "p", text: "The same trap as a small bathroom applies: the room is mostly edges and cuts, so the rate per square metre is high and the total is still modest. Waterproofing added to a wet area generally runs $500 to $1,000, and that line is where a laundry quote most often differs from another one. Sources in the [Canberra tiling cost guide](tiling-cost-guide-canberra.html)." },

        { type: "faqs", items: [
          { q: "Does a laundry need waterproofing?", a: "Yes. A laundry is a wet area under AS 3740:2021. How much of the room needs a membrane depends on the room, particularly whether there is a floor waste and whether the floor is timber or concrete, but the room is not exempt because it is small or because the budget is." },
          { q: "Does a laundry need a floor waste?", a: "That depends on the requirements applying to your building and on how the room is configured, and it is a question for the building surveyor or the plumber rather than the tiler. What can be said is that a floor waste with no fall to it does not work, and a laundry without one needs the door threshold detailed so that water does not simply leave the room." },
          { q: "Is a laundry cheaper to tile than a bathroom?", a: "In total usually yes, per square metre often not. A laundry is small and detailed in the same way a bathroom is, so the productive area is a small fraction of the floor and the fixed costs do not shrink with the room." },
          { q: "How high should the splashback go behind a laundry tub?", a: "There is no single answer, and the useful framing is what gets wet rather than what looks finished. The splash zone behind and beside a tub takes water daily, and the wall behind a washing machine is one nobody ever dries. Full height behind both is the safe answer; a short splash above the tub is the cheap one." },
          { q: "Can the laundry use the same tile as the bathroom?", a: "Often, and there is a practical argument for it: a single tile order, one wastage allowance, and spares that cover both rooms. The thing to check is slip resistance if the laundry doubles as an entry from the garage or the line, since that floor gets walked on with wet feet more than a bathroom floor does." },
          { q: "My laundry floor is timber. Does that change anything?", a: "Yes, and it is worth raising before quotes come in. Outside a shower area the National Construction Code requires a timber based floor to be waterproof, while a concrete or fibre cement floor in the same position need only be water resistant. That is a genuine difference in scope, not an upsell." }
        ] }
      ]
    }
  ],

  /* --- Service-area pages ---------------------------------------------------
     Deliberately empty. All 34 area-page keywords (Gungahlin, Belconnen,
     Woden, Queanbeyan, etc.) returned null Google Ads search volume -
     Canberra is one compact market, unlike Newcastle's dispersed Hunter
     catchment where area pages work (build brief §9). Not "add later
     without checking" - the keyword data already said no. */
  areas: [],

  /* No FAQs live at the about-page level in this build - the about page is
     positioning/disclosure content, and every FAQ on the site sits on the
     page that actually answers it (homepage general questions, or each
     service page's own faqs block) per the template's own FAQ rule. */
  about: {
    faqs: []
  },

  /* First N of about.faqs previewed on the homepage - unused this build
     (about.faqs is empty; the homepage's own faqs block covers that role
     instead), left in place for template compatibility. */
  faqPreviewCount: 0,

  /* --- Contact form -----------------------------------------------------
     Matches the build brief's contact page field list (name, phone, email,
     suburb, message) plus the existing service-picker (radio buttons built
     from cfg.services names) for "job type." Deliberately no "preferred
     contact time" or "budget range" field - both reduce completion and
     neither is needed to route an enquiry (build brief, contact page
     notes). */
  contact: {
    formHeadline: "Enquiry Form",
    /* COLLECTION NOTICE - this is not just reassurance copy, so read before
       editing. The site relies on the Privacy Act small business exemption,
       and the "trading in personal information" carve-out (OAIC: disclosing
       personal information for a benefit, service or advantage) only bites
       where the individual has NOT consented. Consent can be implied, but
       OAIC requires it to be informed - the person has to understand what
       happens to their details. That means this line must say, at the point
       of collection, that the details go to a contractor and that the
       contractor pays. The previous wording said details were "only used to
       respond to this enquiry", which described the wrong data flow and
       worked against the consent the exemption depends on. Keep it accurate
       and keep the privacy policy link. */
    reassurance: "No spam and no obligation. Your details go to a tiling contractor in your area so they can quote your job - the contractor pays for the enquiry, you do not. We never sell your details or add you to a marketing list. [How we handle your information](privacy.html).",
    /* Real enquiry categories, not page names - cfg.services on this build
       is a list of PAGES (it includes the cost guide and the quote
       checklist, which aren't things a homeowner "needs done"). See the
       contact page's own field list in the build brief. */
    jobTypes: [
      "New tiling", "Bathroom tiling", "Waterproofing", "Leaking shower",
      "Regrouting", "Cracked or loose tiles", "Tile removal"
    ],
    fields: [
      { name: "name", label: "Name", type: "text", autocomplete: "name" },
      { name: "phone", label: "Phone", type: "tel", autocomplete: "tel" },
      { name: "email", label: "Email", type: "email", autocomplete: "email" },
      { name: "suburb", label: "Suburb", type: "text", autocomplete: "address-level2" },
      { name: "message", label: "Tell us about the job", type: "textarea", rows: 5,
        placeholder: "What's there now, whether it's a wet area, whether it's been repaired before, and roughly when the house was built." }
    ],
    step1Label: "What do you need help with?",
    step2Label: "Your details",
    otherServiceLabel: "Something else / not sure yet",
    submitText: "Get My Free Quote",
    successMessage: "Thanks - your enquiry is in. We'll come back to you about it.",
    errorMessage: "Something went wrong sending your enquiry. Please try again, or reach out directly:"
  },

  /* --- Testimonials / photos (REAL EVIDENCE ONLY) ---------------------------
     Stay empty for the whole of Level 2 - build brief §5 bans reviews,
     project photos, and completed-job counts outright, not just until a
     renter exists. Revisit only alongside a genuine Level 3 upgrade. */
  testimonials: [],
  photos: []
};
