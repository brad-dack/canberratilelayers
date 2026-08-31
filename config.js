/* =============================================================================
   SITE CONFIG — Canberra Tiling build.

   Built from canberra-tiling-build-package.md (29 Aug 2026). That document is
   the source of truth for positioning, cannibalisation boundaries and link
   graph — this file is its content poured into the template's block system.
   See README.md "Divergence from the template" for what changed in bake.js
   to carry it (Contact/Disclaimer as standalone pages, About/Home/Privacy
   moved onto the same `blocks` system as services, per-page CTA copy).

   THREE BLOCKERS from build brief §2. Status:
     1. Brand and domain name — RESOLVED. Brand is "Canberra Tile Layers",
        ABN 78 538 005 810 (confirmed via ABN Lookup: individual/sole
        trader, Bradley John Dack, same ABN as Perth Brickwork and Perth
        Limestone Group). Domain is canberratilelayers.com.au, owned by
        Brad — no registrar/auDA check needed.
     2. Twilio tracking number — business.phone/phoneDisplay stay EMPTY.
        This is NOT a marker: it's the template's existing "unset config
        degrades to absent" mechanism (see README) — every call-to-action
        on the site already omits the phone option cleanly while it's
        empty, and --check WARNS (doesn't fail) that phone+email are both
        unset. Fill in once the number is provisioned; nothing else to edit.
     3. Contractor status — resolved to the CONDITIONAL wording the build
        brief itself supplies for pre-renter (about.html, disclaimer.html).
        Switch to the direct/present-tense wording once a contractor signs
        — see the TODO comments on those two pages below.
   =============================================================================
   QUICK-SWAP CHECKLIST (see README.md for details):
   1. business: name, city, state, serviceArea. phone/email/hours ship EMPTY
      on purpose — see "Unset config degrades to absent" in README. Add them
      when you have a real number/inbox/hours to publish.
   2. domain — bake.js regenerates CNAME, robots.txt, and sitemap.xml from it
   3. brand colors + theme (style/pattern — makes each site look different)
   4. ga4Id — REQUIRED before launch: analytics + call tracking stay OFF
      while the X placeholder is in place
   5. ingestUrl / ingestSecret — REQUIRED before launch: the form cannot
      deliver leads until these are real values. turnstileSiteKey alongside
      them, or the form ships with no spam protection.
   6. schema.type — stays "Organization" until a renter's real premises/
      hours exist. See "Schema: Organization until a renter exists" in
      README before ever changing this. NEVER LocalBusiness pre-renter —
      see build brief §4: no address, no aggregateRating, no review markup,
      and no Product/Offer schema on the cost guide (third-party estimates,
      not our prices).
   7. services — each is an ordered array of content BLOCKS (see the
      block-type reference in README), plus its own page filename. This
      build carries 8 (the template's usual 3-5 guidance doesn't apply to
      a content-driven build like this one — see build brief §3 page
      inventory).
   8. areas (0+) — ships empty. All 34 area-keyword searches returned null
      (build brief §9) — Canberra is one compact market, so suburb pages
      were dropped, not just deferred.
   9. about.faqs, howItWorks, about.paragraphs, page titles/descriptions,
      contact.fields
   Then run:  node bake.js          (regenerates pages + CNAME/robots/
                                     sitemap/404/favicon)
              node bake.js --check  (preflight: fails loudly on leftover
                                     placeholders, unresolved { marker }
                                     blocks, and broken references — reports
                                     unfinished-content counts per page)
============================================================================= */

window.SITE_CONFIG = {

  /* --- Core business identity ---------------------------------------------
     phone / phoneDisplay ship EMPTY until the Twilio number exists — see the
     blocker note above. email is now set, since the domain is confirmed.
     Every consumer of these fields already omits the corresponding UI
     element while empty, rather than rendering something broken. */
  business: {
    name: "Canberra Tile Layers",
    phone: "",
    phoneDisplay: "",
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
     — build brief §5), so the visual design is deliberately quiet rather
     than trying to compensate with a busier theme. */
  brand: {
    color: "#1f4d5c",
    colorDark: "#173a46",
    colorContrast: "#ffffff",
    style: "classic",
    pattern: "none"
  },

  /* --- Tracking / integrations ---------------------------------------------
     All four required before launch — unrelated to the three build-brief
     blockers above, these are the template's own standing preflight gates. */
  ga4Id: "G-XXXXXXXXXX",
  ingestUrl: "https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/ingest-form",
  ingestSecret: "ed11ac06c8ca1cb55e83ecfd2b25246c",
  turnstileSiteKey: "0x4AAAAAAEHD1tLftcrbDXIx",

  /* --- Structured data -----------------------------------------------------
     Organization, sitewide. NEVER LocalBusiness pre-renter — build brief §4
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
        { type: "p", text: "Most tiling enquiries fall into one of three situations, and they are different jobs with different costs. Working out which one you are in saves the most money." },

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
        { type: "p", text: "**Floor and wall tiling.** Living areas, hallways, entries and general floor tiling, plus internal wall tiling. Cost here is driven by the substrate more than anything else, since floors are rarely level and bringing one within tolerance for large format tile is often the largest single line." },
        { type: "p", text: "**Kitchen tiling and splashbacks.** Kitchen floors, and splashbacks behind benches and cooktops. Splashbacks are small in area and high in detail, with cuts around GPOs, rangehoods and window returns, so they take longer than the square metre count suggests." },
        { type: "p", text: "**Laundry tiling.** A wet area, so waterproofing requirements apply the same way they do in a bathroom, even though laundries are often treated as an afterthought." },
        { type: "p", text: "**Outdoor and patio tiling.** Alfresco areas, patios and paths. External tiling needs slip rated tiles and weather resistant adhesives, and it carries a premium over internal work of roughly 10 to 20% on both supply and labour." },
        { type: "p", text: "**Pool surrounds and coping.** Specialist work with its own requirements around movement, slip rating and water exposure." },
        { type: "p", text: "**Commercial tiling.** Retail, hospitality and office fitouts, where the drivers are program and durability rather than domestic finish." },
        { type: "p", text: "**Waterproofing.** Membrane application in wet areas, to AS 3740:2021. The one part of a bathroom you pay for and never see, and the most expensive thing to get wrong. [More on waterproofing](waterproofing-canberra.html)" },
        { type: "p", text: "**Tile removal.** Strip out of existing tiles and adhesive, and preparation of the substrate for what comes next. Frequently quoted separately and frequently underestimated. [More on tile removal](tile-removal-canberra.html)" },
        { type: "p", text: "**Repairs.** Leaking showers, regrouting, resiliconing, and cracked or drummy tiles." },

        { type: "h2", text: "How a tiling job actually runs" },
        { type: "p", text: "Useful to know when you are reading a quote, because most of these stages are where costs vary." },
        { type: "ol", items: [
          "**Assessment and quote.** What is there now, what is going in, and what condition the substrate is in. On a repair, this stage should include diagnosing the actual cause rather than pricing a guess.",
          "**Removal and disposal.** Existing tiles and adhesive out, and away. Tiles are heavy and tip fees are usually charged by weight.",
          "**Substrate preparation.** Levelling, screeding, patching and repairing. The most variable stage on any renovation, because what is underneath is not fully known until the old surface is off.",
          "**Waterproofing.** In wet areas, membrane applied and detailed at junctions and the floor waste, then left to cure. Cure times lengthen in cold weather, which matters in a Canberra winter.",
          "**Setting out.** Where the first tile goes determines where every cut lands. On patterned layouts like herringbone this stage decides whether the job looks right.",
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
            a: "Published national rates for floor tiling supply and install run roughly $55 to $140 per square metre. A Canberra tiler's own published rate card puts bathroom labour at $85 per square metre, which sits on the national average, so Canberra tiling labour is not an outlier. The [cost guide](tiling-cost-guide-canberra.html) has the full breakdown with sources."
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
      /* Level 1 (transparent broker) on this page only — the rest of the
         site runs Level 2. The commercial disclosure lives here and on the
         disclaimer, nowhere else. See build brief §5. */
      blocks: [
        { type: "h3", text: "Who runs this" },
        { type: "p", text: "Canberra Tile Layers is run by Brad. I am based in Perth, not Canberra, and I want that on the record up front rather than buried." },
        { type: "p", text: "I am not a tiler. I have never laid a tile and do not claim to. For how a specific job actually gets built, the contractor doing the work is the one to ask." },
        { type: "p", text: "What I do is research. The [cost guide](tiling-cost-guide-canberra.html) on this site compares published figures from seven different Canberra sources and explains why three local builders quoting the same bathroom in the same year land on $24,000, $30,000 and $50,000. The [leaking shower](leaking-shower-repair-canberra.html) and [regrouting](regrouting-canberra.html) pages explain when a surface repair will hold and when it will not, which is the single most expensive thing Canberra homeowners get wrong about their bathrooms." },
        { type: "p", text: "Nobody in Canberra had written that plainly. That is why this site exists." },

        { type: "h3", text: "What this business does" },
        /* Conditional wording, per build brief §5 — pre-renter, no page may
           state in the present tense that enquiries are passed to a
           contractor, because none exists. This resolves that NEEDS INPUT
           rather than leaving it open, since the brief already supplies the
           correct wording for this exact state. TODO (Brad): switch to
           "We take enquiries from Canberra homeowners about tiling and
           tiling repairs, and pass them to a tiling contractor who does
           that type of work. ... Every physical part of a job is done by
           the contractor." once a Canberra contractor is signed. */
        { type: "p", text: "We take enquiries from Canberra homeowners about tiling and tiling repairs. Where we have a contractor covering that type of work in your area, your enquiry goes to them. Where we do not, we will tell you that directly rather than leave you waiting." },
        { type: "p", text: "We do not tile, waterproof, attend site, or certify anything. There is no crew and no equipment. Every physical part of a job would be done by the contractor." },

        { type: "h3", text: "What we cover, and what we don't" },
        { type: "p", text: "We stick to tiling: bathroom and wall and floor tiling, waterproofing, tile removal, and tiling repairs including leaking showers, regrouting, and cracked or loose tiles." },
        { type: "p", text: "Full bathroom renovations are a different job. A renovation involves plumbing, electrical, carpentry, plastering and painting alongside the tiling, and it is generally run by a builder or a renovation company rather than a tiler. If you are stripping a bathroom back to the studs and starting again, a renovation builder is who you want, not a tiler. We will say so rather than take the enquiry." },
        { type: "p", text: "Plumbing, electrical work, stone benchtops, and structural work are all separate trades we do not handle either." },

        { type: "h3", text: "What happens after you enquire" },
        { type: "p", text: "After you submit the form, you will be contacted by a Canberra tiling contractor if they cover your job. If nothing is a fit, we will tell you and point you somewhere useful rather than leaving you without an answer." },
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
      blocks: [
        { type: "marker", text: "This page is a draft structure, not legal advice, and must be reviewed before it goes live. The Privacy Act small business exemption question further down must be resolved — with real legal advice, not a template generator — before this document is finalised, because the answer changes what this policy has to say and what obligations sit behind it." },

        { type: "h2", text: "Who this covers" },
        { type: "p", text: "This policy applies to Canberra Tile Layers (ABN 78 538 005 810), run by Brad as a sole trader, and to information collected through this website." },

        { type: "h2", text: "What we collect" },
        { type: "p", text: "When you submit an enquiry, we collect:" },
        { type: "ul", items: ["Your name", "Your phone number", "Your email address", "Your suburb", "What you have told us about the job"] },
        { type: "p", text: "When you call the number on this site, we collect your phone number, the time and duration of the call, and which page of the site you called from." },
        { type: "p", text: "Standard call records apply. We don't record calls." },
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
        { type: "p", text: "See \"Service providers\" above — each of those companies may store or process data outside Australia, and each publishes its own privacy policy describing how." },

        { type: "h2", text: "Cookies and analytics" },
        { type: "p", text: "This site may use Google Analytics to understand how visitors find and use it, for example which pages are viewed. Google Analytics uses cookies and collects anonymous usage data such as general location and device type. It does not see anything typed into the enquiry form." },

        { type: "h2", text: "Accessing or deleting your information" },
        { type: "p", text: "You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Contact us at hello@canberratilelayers.com.au." },

        { type: "h2", text: "Complaints" },
        { type: "p", text: "If you are unhappy with how we have handled your information, contact us first at hello@canberratilelayers.com.au." },
        { type: "p", text: "If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at oaic.gov.au." },

        { type: "h2", text: "Changes" },
        { type: "p", text: "We may update this policy. The current version is always the one on this page, with the date it was last updated at the top." },

        { type: "h2", text: "The Privacy Act question this site depends on" },
        { type: "marker", text: "Obtain legal advice on whether the small business operator exemption under the Privacy Act 1988 applies to a lead referral business that passes enquirer details to a paying contractor. A rank-and-rent lead business collects a homeowner's personal details and passes them to a contractor who pays for that enquiry, which on a plain reading looks like disclosing personal information for a benefit — one of the carve-outs from the exemption. If the exemption does not apply, the Australian Privacy Principles apply in full: collection notices, use and disclosure rules, overseas disclosure, data quality, security, access and correction, and a complaints process, a materially heavier compliance position than a template policy describes. Confirm also the position following recent Privacy Act reforms, and whether the answer differs where the contractor pays per lead versus a flat monthly fee. This question is shared across the whole portfolio (Perth Brickwork, Perth Limestone Group both run the same model) and should be resolved once, properly, and applied consistently." }
      ]
    }
  },

  /* Short, honest value points shown under the hero on every page. No
     response-time promise, no completed-jobs count — both banned at Level 2
     (build brief §5). */
  valueProps: [
    "Free, no-obligation quotes",
    "Straight answers on what a job actually needs",
    "Serving Canberra, the ACT and Queanbeyan"
  ],

  /* The template's generic 3-icon "How It Works" component (with its
     "response within 24 hours" copy) isn't used by this build — a
     response-time promise is banned at Level 2, and the homepage's own
     "How a tiling job actually runs" section (in pages.home.blocks above)
     already serves the same purpose with tiling-specific content. Left
     empty rather than deleted so the component stays available if an area
     page is ever added. */
  howItWorks: [],

  /* --- Services (8) -----------------------------------------------------
     More than the template's usual 3-5 — this build is content-driven
     (build brief §3 page inventory), not card-driven, so the count follows
     the keyword data rather than the template's rule of thumb. Order
     follows the build brief's own page numbering. `/tile-and-grout-
     cleaning-canberra/` is deliberately NOT built — different renter pool
     from tiling, see build brief §3. Suburb-style area pages are also
     deliberately absent (cfg.areas stays empty) — all 34 area keywords
     returned null search volume (build brief §9). */
  services: [
    /* ---------------------------------------------------------------------
       COST GUIDE — the inbound-link hub (13 body-copy inbound links, the
       most of any page — build brief §8). All cost figures on the site
       live here; every other page keeps cost references to a sentence and
       links back. Schema: Organisation + FAQPage, explicitly NOT Product
       or Offer (these are third-party estimates, not our prices — build
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
        { type: "table", headers: ["Source", "Rate", "Scope"], rows: [
          ["WhatCosts", "$55 to $140 per m², average $75 to $100", "Standard floor tiling"],
          ["TradieVerify", "$50 to $120 per m², full range $30 to $200", "Standard floor tiling, installed"],
          ["WhatCosts", "$85 per m² floor, $95 per m² wall", "Bathroom specific"],
          ["Pearl Tiling (Canberra)", "$85 per m² labour, $50 per m² tile supply", "Bathroom, floor to ceiling"]
        ] },
        { type: "p", text: "That last row is the most useful line here, because it is a Canberra tiler's own published rate card rather than a national estimate. Pearl Tiling and Interiors publishes an itemised bathroom cost calculator, and its labour figure of $85 per square metre sits almost exactly on the national bathroom average. Canberra tiling labour is not an outlier." },
        { type: "p", text: "Wall tiling costs more per square metre than floor tiling, because of the waterproofing preparation behind it and the difficulty of working vertically." },

        { type: "h3", text: "The individual line items" },
        { type: "p", text: "Pearl's Canberra calculator itemises a full bathroom, which is more useful than any range because you can see what each component contributes:" },
        { type: "table", caption: "Pearl Tiling and Interiors, Canberra — itemised bathroom", headers: ["Item", "Pearl (Canberra)"], rows: [
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
        { type: "table", headers: ["Item", "Range", "Source"], rows: [
          ["Screeding or levelling", "$15 to $30 per m²", "A Timber Floorer"],
          ["Large format tiles, added labour", "$10 to $20 per m²", "A Timber Floorer"],
          ["Waterproofing added to a bathroom", "$500 to $1,000", "A Timber Floorer"],
          ["Outdoor tiling premium", "10 to 20% on supply and labour", "A Timber Floorer"],
          ["Pool tiling, labour only", "$60 to $120 per m²", "A Timber Floorer"]
        ] },

        { type: "h3", text: "Repairs" },
        { type: "table", headers: ["Repair", "Range", "Source"], rows: [
          ["Silicone replacement only", "$150 to $350", "The Quote Yard (VIC)"],
          ["Shower regrout, cement grout", "$600 to $1,200", "Sparky.fyi"],
          ["Shower regrout, epoxy grout", "$800 to $1,500", "Sparky.fyi"],
          ["Shower regrout, general", "$600 to $1,500", "Aquatech (Brisbane)"],
          ["Shower base repair", "$400 to $1,200", "The Quote Yard (VIC)"],
          ["Drain reseal", "$150 to $500", "Antons Renovations (Sydney)"],
          ["Waterproofing repair", "$500 to $2,500", "The Quote Yard (VIC)"],
          ["Leak behind shower walls", "$500 to $2,500 plus", "Antons Renovations (Sydney)"],
          ["Rotted timber remediation", "$1,000 to $3,000 plus", "Sparky.fyi"],
          ["Shower leak repair, full range", "$250 to $4,000", "Sparky.fyi (Sydney)"]
        ] },
        { type: "p", text: "The spread in that last row is the whole point. A silicone reseal and a full membrane replacement are both called \"leaking shower repair\" and they differ by more than ten times. Which one you need is a diagnosis, not a preference. See [leaking shower repair](leaking-shower-repair-canberra.html)." },

        { type: "h3", text: "Bathroom renovation in Canberra" },
        { type: "p", text: "This is where published figures fall apart, so here they are side by side. All 2026, all for a main bathroom in Canberra unless noted." },
        { type: "table", headers: ["Source", "Figure"], rows: [
          ["Housing Industry Association (national average)", "Around $26,000"],
          ["Creating Impressions", "$18,000 to $35,000, most between $19,000 and $25,000"],
          ["Apex Bathroom Renovations", "$18,000 to $35,000, average $24,000 to $28,000"],
          ["Refined Building", "$25,000 to $35,000, most around $30,000"],
          ["What's The Damage", "$9,500 to $43,000 plus"],
          ["The Bathroom Co", "$40,000 to $50,000"],
          ["Rentoule Projects", "$25,000 to $40,000 entry, $40,000 to $65,000 mid, $70,000 to $120,000 plus luxury"]
        ] },
        { type: "p", text: "Three Canberra builders describing a mid-range main bathroom in the same year give $24,000, $30,000 and $50,000." },

        { type: "h2", text: "Why the numbers disagree so much" },
        { type: "p", text: "Understanding this is worth more than any single figure." },
        { type: "p", text: "**They describe different scopes.** A cosmetic refresh keeping the layout, the plumbing and the existing waterproofing is a fundamentally different job from a full strip-out back to the studs. Both get called a bathroom renovation. Thinking in tiers rather than averages is the only way the range makes sense." },
        { type: "p", text: "**They reflect who is writing.** A high-end builder's typical bathroom genuinely is more expensive than a general builder's, because they are describing their own client base. Neither is wrong about their own work. Both are wrong as a general answer." },
        { type: "p", text: "**Some numbers are not real.** Programmatic cost-guide sites that publish a \"from\" price for every trade in every city produce figures with no relationship to any actual job. Treat a suspiciously low starting figure as a lead-capture device rather than data." },
        { type: "p", text: "**Fixtures move the total more than tiling does.** Pearl's Canberra calculator allocates $14,250 to supply of tapware, bath, toilet, vanity, floor wastes, shower screen, shower head and mirror. That single line exceeds the entire tiling component of most bathrooms. Two bathrooms with identical tiling can differ by twenty thousand dollars on fixture selection alone." },
        { type: "p", text: "**Labour is roughly half.** Rentoule Projects puts labour at 40 to 50% of total project cost. That ratio matters when deciding where to economise, because material savings have less leverage than most people assume." },

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
        { type: "p", text: "Unlike builders, electricians and plumbers, **waterproofing is not its own licensed trade in the ACT** — it does not appear on Access Canberra's list of licensed construction occupations. What is regulated is the outcome: wet area waterproofing details must be submitted as part of the building approval for Class 1 residential work, and Access Canberra has specifically flagged incorrect or undocumented wet area waterproofing as a compliance problem (Construction Note 01/2023, Wet Areas, updating 2022/13). A building surveyor requires waterproofing documentation before signing off tiling, and undocumented or non-compliant waterproofing can trigger a Stop Work Notice under the Building Act 2004." },
        { type: "credit", text: "Access Canberra, Construction Note 01/2023 – Wet Areas; Building Act 2004 (ACT)." },
        { type: "p", text: "In practice that still means: whoever applies the membrane should be someone who can produce that documentation, whether they hold a trade qualification, a manufacturer accreditation, or both." },
        { type: "p", text: "The standard also sets a minimum fall to waste of 1:80 in shower areas, and membranes require a cure period of at least 24 to 48 hours before tiling. Cure times extend in cold weather, a real scheduling factor in a Canberra winter." },
        { type: "p", text: "Waterproofing typically adds $500 to $1,000 to a bathroom. Pearl's Canberra calculator allows $1,200." },

        { type: "h3", text: "Access, site conditions and sequencing" },
        { type: "p", text: "Upstairs work, narrow access, no parking and restricted hours in an apartment all cost time. Working around a family using the space is slower than working in an empty house." },
        { type: "p", text: "Tiling sits in the middle of a renovation. If the trades before it are not finished, the tiler either waits or comes back, and return visits are priced accordingly. A well sequenced job is cheaper to tile than the same job coordinated ad hoc." },

        { type: "h2", text: "The costs people do not budget for" },
        { type: "p", text: "**You buy more tile than the floor area.** Pearl builds in 15% wastage. General Australian guidance suggests ordering an extra 10 to 15% for breakage and future repairs, more for diagonal and herringbone layouts. Keeping spares matters because tile lines get discontinued and dye lots vary." },
        { type: "p", text: "**Removal and disposal.** Old tiles are heavy and tip fees are usually charged by weight. Pearl allows $1,500 for demolition and $800 for rubbish removal on a bathroom. These are frequently separate lines and sometimes missing entirely." },
        { type: "p", text: "**What demolition reveals.** Rotted framing, a slab further out of level than expected, or failed previous waterproofing. The most common variation on any bathroom job." },
        { type: "p", text: "**Asbestos in older homes.** WorkSafe ACT treats a residential building constructed or refurbished before 1990 as likely to contain asbestos containing material, and the ACT carries additional legacy issues including Mr Fluffy affected blocks. If present, only a licensed asbestos assessor can identify it, and only a licensed asbestos removalist can remove it in the ACT — there's no small-quantity DIY exemption here." },
        { type: "credit", text: "WorkSafe ACT, Asbestos; WorkSafe ACT, Asbestos licensing." },
        { type: "p", text: "**Trims and edging.** External corners and tile edges need either a mitre or a trim. Inexpensive, frequently omitted from quotes, and the mitred alternative is labour." },
        { type: "p", text: "**Grout upgrades.** Epoxy grout runs $800 to $1,500 for a full shower regrout against $600 to $1,200 for cement based. It lasts roughly twice as long and resists mould without sealing." },
        { type: "p", text: "**Sealing.** Natural stone and cement based grout both benefit from sealing, a separate product and a separate visit." },
        { type: "p", text: "**Making good.** Plastering, cornice repair and painting after tiling and demolition. Not the tiler's scope, and easy to leave out of a budget entirely. Pearl allows $2,500 for plastering and $500 for painting." },
        { type: "p", text: "**Other trades.** Pearl's Canberra figures allow $3,000 for plumbing labour and $700 for electrical. An old shower screen usually cannot be refitted to new tiles, so budget replacement rather than reuse." },
        { type: "p", text: "**Margin and GST.** A project management margin and then GST apply on top of the trade cost. On Pearl's structure that is 20%, then 10%." },

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
        { type: "p", text: "**Fixtures are the biggest lever.** Pearl's $14,250 fixture allowance exceeds the tiling cost on most bathrooms. Changing tapware and vanity selection moves the total further than any tiling decision." },
        { type: "p", text: "**Keep the plumbing where it is.** Moving a toilet, shower or vanity is consistently identified as one of the largest avoidable costs, and in the ACT relocating plumbing may require a drainage plan and building approval." },

        { type: "faqs", items: [
          { q: "How much does a tiler charge per square metre in Australia?", a: "Published national rates for standard floor tiling supply and install run roughly $55 to $140 per square metre, with most sources putting the average around $75 to $100. Bathroom floor tiling sits near $85 and wall tiling near $95, the difference reflecting waterproofing preparation. A Canberra tiler's published labour rate of $85 per square metre for bathroom work sits squarely on that national average." },
          { q: "Why are my tiling quotes so different?", a: "Almost always because they cover different scopes. Preparation, demolition, disposal, waterproofing and trims are the usual variables. Ask each quoter to itemise against the same written brief and most of the gap becomes visible." },
          { q: "Is it cheaper to tile a small bathroom than a large room?", a: "In total yes, per square metre usually no. Small wet areas are dominated by cuts, edges and detail around penetrations. A small bathroom often lands around $2,000 to $3,500 for tiling including materials, a much higher effective rate than the headline figures suggest." },
          { q: "What does it cost to regrout a shower?", a: "Roughly $600 to $1,500 for a standard shower, with cement based grout at the lower end and epoxy at the upper. Epoxy costs more and lasts roughly twice as long without needing sealing. See [regrouting](regrouting-canberra.html)." },
          { q: "What does a leaking shower cost to fix?", a: "Anywhere from around $250 for a silicone reseal to $4,000 for a full strip-out and membrane replacement. The difference is entirely about what has failed. If water is reaching rooms outside the bathroom, the membrane has gone and a surface repair will not hold." },
          { q: "Should I supply my own tiles?", a: "It gives you control over price and selection, but responsibility for measuring, ordering enough and dealing with breakage moves to you. Agree in writing who carries that risk." },
          { q: "Does the tile I choose change the labour cost?", a: "Substantially. Size, hardness, edge type and layout pattern all affect installation time independently of the tile price. Large format adds $10 to $20 per square metre in labour alone." },
          { q: "Is waterproofing a place to economise?", a: "No. It is regulated, it is concealed once tiling starts, and correcting it later means removing the finished surface." },
          { q: "Is tiling in Canberra more expensive than other cities?", a: "On the labour evidence available, no. A Canberra tiler's published bathroom rate matches the national average closely. Renovation totals in Canberra do skew higher, which local builders attribute to ACT labour rates, compliance requirements and the age of the housing stock, though that is their claim rather than independent data." }
        ] },

        { type: "h2", text: "Sources" },
        { type: "p", text: "Published on the page so readers can check the figures." },
        { type: "ul", items: [
          "Pearl Tiling and Interiors bathroom cost calculator, Canberra: pearltiling.com.au",
          "Housing Industry Association, national bathroom renovation average",
          "WhatCosts tiling and bathroom renovation pricing",
          "TradieVerify Australian tiling cost guide",
          "A Timber Floorer tiling cost per m² guide",
          "Sparky.fyi shower repair cost guide",
          "The Quote Yard shower regrouting and leak repairs, Victoria",
          "Aquatech Grouting shower regrouting, Brisbane",
          "Antons Renovations shower leak repair guide, Sydney",
          "Canberra renovation figures: Creating Impressions, Apex Bathroom Renovations, Refined Building, The Bathroom Co, Rentoule Projects, What's The Damage",
          "AS 3740:2021 Waterproofing of Domestic Wet Areas, Standards Australia"
        ] },
        { type: "credit", text: "Most published tiling cost guides are themselves lead-generation content, including several cited above. The two most reliable anchors here are Pearl's Canberra calculator, a real operator's own rate card, and the HIA national average — everything else is presented as a range with its source named so it can be weighted accordingly. None of these figures are presented as our own data." }
      ]
    },

    /* ---------------------------------------------------------------------
       LEAKING SHOWER REPAIR — problem/diagnosis framing. Owns "an existing
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
        { type: "p", text: "The most common cause in older homes and in bad renovations. Membranes fail from movement in the building, poor preparation, insufficient coverage at the wall and floor junction, or from simply not being there. As a rough anchor: ARDEX's own liquid membrane range (WPM 002) carries a 10-year manufacturer warranty when installed to specification, which is a reasonable proxy for how long a correctly installed membrane should last — actual service life depends on the specific product and how it was installed." },
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
        { type: "marker", text: "Cost ranges for each repair type in the Canberra market are required before this section goes live: silicone replacement only; regrout and reseal, standard shower; surface applied sealing system; floor waste / puddle flange repair; full strip out and rewaterproof, standard shower. Source options in priority order: (1) quotes obtained directly from Canberra operators, (2) published rate cards from Canberra waterproofing businesses, (3) hipages or ServiceSeeking Canberra cost guides, cited as third party estimates rather than presented as our own figures. Do not substitute national averages and describe them as Canberra pricing." },
        { type: "p", text: "Related reading: [Canberra Tiling Cost Guide](tiling-cost-guide-canberra.html)." },

        { type: "h2", text: "How long does it take" },
        { type: "marker", text: "Give realistic durations per repair type, including waterproofing cure time before retiling — the variable most homeowners are not told about. Source from membrane manufacturer technical datasheets, and note that cure times vary with temperature, which matters in a Canberra winter." },

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
       WATERPROOFING — membrane-as-a-system framing, new work. Hands off to
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
          "Laundries",
          "Areas over habitable spaces, where a failure has somewhere worse to go"
        ] },
        { type: "p", text: "One extent requirement is concrete and worth knowing on a Canberra job specifically: shower walls must be waterproof to at least 1800mm above finished floor level, following Access Canberra's own construction guidance for wet areas in single residential (Class 1) buildings." },
        { type: "credit", text: "Access Canberra, Construction Note 01/2023 – Wet Areas." },
        { type: "marker", text: "The treatment of timber versus concrete substrates under AS 3740:2021 is still unconfirmed — source from the standard itself or from a membrane manufacturer's technical guide referencing it, not a builder's blog." },
        { type: "p", text: "One requirement worth knowing because it is easy to check: the standard sets a minimum fall to waste in shower areas of 1:80. A shower floor that holds water rather than draining is not just annoying, it is outside the standard." },

        { type: "h2", text: "Who can do it in the ACT" },
        { type: "p", text: "Unlike builders, electricians and plumbers, waterproofing does not appear on Access Canberra's list of licensed construction occupations — there is no separate \"licensed waterproofer\" trade in the ACT the way there is in some other regulatory contexts." },
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
        { type: "p", text: "**Age.** Older homes may have a membrane that has reached the end of its service life, or in homes beyond a certain age, no membrane at all. As a rough anchor, ARDEX's own liquid membrane range (WPM 002) carries a 10-year manufacturer warranty when installed to specification — a reasonable proxy for how long a correctly installed membrane should last, though the actual figure depends on the specific product and installation." },
        { type: "credit", text: "ARDEX Australia, WPM 002 technical data sheet." },

        { type: "h2", text: "New work and remedial work" },
        { type: "p", text: "**New waterproofing** is applied as part of a renovation or new build, after the plumbing rough-in and before tiling. It is the straightforward case, because everything is open and accessible." },
        { type: "p", text: "**Remedial waterproofing** means an existing membrane has failed. This is the expensive case, because reaching the membrane means removing the tiles and screed above it. There is no way around that. Any product sold as a way to restore failed waterproofing from the surface is treating a symptom." },
        { type: "p", text: "That distinction matters when you are comparing quotes. Waterproofing typically adds $500 to $1,000 to a bathroom as part of new work, and a Canberra tiler's published calculator allows $1,200. Remedial waterproofing repair runs materially higher, from around $500 to $2,500 depending on the area involved, before any tiling reinstatement. See the [cost guide](tiling-cost-guide-canberra.html) for the full breakdown and sources." },
        { type: "p", text: "If your shower is already leaking, the question is not really about waterproofing pricing. It is about diagnosis first. See [leaking shower repair](leaking-shower-repair-canberra.html)." },

        { type: "h2", text: "Balconies and external areas" },
        { type: "p", text: "Balconies and decks over habitable space are waterproofed too, and failures there tend to be more expensive because the water has somewhere to go and something to damage on the way." },
        { type: "p", text: "The exposure is different from a bathroom. External membranes deal with UV, thermal cycling and standing water rather than daily wetting, and the systems specified reflect that." },
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
       REGROUTING — grout-as-a-material framing, maintenance/restoration.
       Two deliberate hand-offs to leaking-shower-repair at the "damp
       outside the bathroom" test, never duplicated (build brief §7). Tile
       and grout CLEANING is explicitly declined here in prose rather than
       linked out — different renter pool, see build brief §3. ------------ */
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
        { type: "p", text: "**Acidic cleaners.** This one catches a lot of people out. Cement based grout is porous and cement is itself attacked by acid, so an acidic bathroom cleaner used regularly over years can etch and erode the grout it is meant to be maintaining — trade guidance on grout and stone maintenance consistently recommends a pH-neutral cleaner for this reason." },
        { type: "marker", text: "The general \"acidic cleaners degrade cement grout\" claim is well supported by trade maintenance literature, but a specific named Australian grout manufacturer's own maintenance guide (Ardex, Mapei or Davco) naming which household cleaner categories to avoid hasn't been located yet — worth a direct check of their websites before publishing this as sourced." },
        { type: "p", text: "**Poor original installation.** Grout applied too dry, joints not filled to full depth, or grouting done before the adhesive had cured. Failures from this show up early and usually across the whole surface at once rather than in patches." },

        { type: "h2", text: "Partial or full regrout" },
        { type: "p", text: "**Partial** makes sense when failure is confined to one area, such as a shower floor while the walls are sound." },
        { type: "p", text: "The catch is colour. New grout will not match aged grout, even using the same product and colour code, because the existing grout has years of wear and staining on it. A patched section stays visible. Anyone quoting a partial regrout should tell you that before they start rather than after." },
        { type: "p", text: "**Full regrout** gives a uniform result and is the only sensible option when failure is widespread or when you are changing grout colour." },

        { type: "h2", text: "Cement or epoxy" },
        { type: "p", text: "**Cement based grout** is the standard. Cheaper, easier to work with, available in a wide colour range, and straightforward to repair later. It is porous, so it stains and it needs sealing to resist that." },
        { type: "p", text: "**Epoxy grout** is non porous, so it resists staining and chemical attack without sealing, and it holds colour far better over time. It costs more in both material and labour, because it has a short working time and has to be cleaned off the tile face before it sets. Done badly it leaves a haze on the tiles that is difficult to remove." },
        { type: "p", text: "Epoxy is worth the difference in a shower floor or a kitchen splashback. Whether it is worth it across an entire floor is a budget decision — on current Australian retail pricing, standard cement-based grout runs roughly $2 to $6 per kilogram, while epoxy grout runs roughly $15 to $45 per kilogram depending on the brand and pack size, so figure on epoxy costing somewhere from three to eight times as much in material alone before labour." },
        { type: "credit", text: "Retail per-kg pricing, National Tiles and other major Australian tile suppliers, August 2026 — trade pricing may differ." },

        { type: "h2", text: "What a proper regrout involves" },
        { type: "image", src: "images/regrouting-removal-depth.jpg", alt: "Diagram comparing correct full-depth grout removal against a shallow skim-over that leaves old grout packed beneath a thin new layer", width: 1200, height: 805 },
        { type: "p", text: "This is worth knowing because the shortcut version is common and it fails within a year or two." },
        { type: "p", text: "**Removal.** Old grout is raked out mechanically, not skimmed over. Applying new grout on top of old is the single most common shortcut, and it fails because the new layer is too thin to bond or hold up." },
        { type: "marker", text: "A specific minimum removal depth from a named Australian grout manufacturer's own installation instructions (Ardex, Mapei or Davco) hasn't been confirmed yet — worth pulling directly from the installation guide for whichever product is being specified, rather than a general trade rule of thumb." },
        { type: "p", text: "**Cleaning out.** Joints vacuumed and cleaned so the new grout bonds to the tile edges rather than to dust." },
        { type: "p", text: "**Grouting.** New grout worked into the joints to full depth, then cleaned off the tile face before it sets." },
        { type: "p", text: "**Curing.** Grout needs to cure before the surface is wetted or sealed, and cure times lengthen in cold conditions, which is worth planning around in a Canberra winter. As a general anchor, mainstream Australian cement-based grouts specify around 24 hours' cure at room temperature before the surface can be cleaned or sealed, with full chemical cure taking considerably longer — Ardex's own FG 8 grout, for example, wants roughly three weeks before it is fully cured and ready to be exposed to chemicals." },
        { type: "credit", text: "Davco (Sika Australia) and ARDEX Australia grout technical data sheets. Confirm against the specific product being used, and expect longer in cold weather." },
        { type: "p", text: "**Sealing.** Cement grout benefits from sealing. Epoxy does not need it." },
        { type: "p", text: "If a quote covers a full shower regrout in under a couple of hours, ask specifically how the old grout is being removed." },

        { type: "h2", text: "Corners should be silicone, not grout" },
        { type: "p", text: "Internal corners, and the junction where the wall meets the floor, are movement joints. They need a flexible sealant, not a rigid one." },
        { type: "p", text: "Grout in those junctions cracks. It is not a sign of a bad tiler necessarily, since it is a very common practice, but it is the wrong material for that location and the cracking will keep coming back regardless of how many times it is regrouted." },
        { type: "p", text: "If your grout is failing only in the corners while the flat joints are sound, this is almost certainly why, and the fix is to cut it out and silicone it rather than to regrout the whole surface. That is a much smaller job and worth knowing before you accept a quote for the larger one." },

        { type: "h2", text: "What regrouting costs in Canberra" },
        { type: "marker", text: "Canberra cost ranges are required before this section goes live: silicone replacement to corners only; shower regrout, cement grout, standard shower; shower regrout, epoxy grout, standard shower; floor regrout, per square metre; sealing, per square metre. Source in priority order: (1) direct quotes from Canberra operators, (2) published Canberra rate cards, (3) hipages or ServiceSeeking Canberra guides cited explicitly as third party estimates. Do not substitute national averages and present them as Canberra pricing." },
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
       TILE REMOVAL — best commercial profile of the service pages, and the
       silica dust section is the strongest differentiator on the site
       (build brief page 10 notes). Both major markers are safety/
       regulatory claims — must not be approximated. --------------------- */
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

        { type: "h2", text: "What makes tile removal expensive" },
        { type: "p", text: "The tile is not the variable. The bond is." },
        { type: "p", text: "**How well it was stuck down.** A tile laid on a proper adhesive bed to a clean slab comes off harder than one laid badly. Good original workmanship makes removal slower, which is a genuinely annoying inversion." },
        { type: "p", text: "**What it is stuck to.** Tiles on a concrete slab generally come off leaving adhesive residue that has to be ground or scraped back. Tiles on wall sheeting frequently take the sheeting with them, in which case the wall is being replaced rather than cleaned up. Tiles on a timber floor bring their own questions about what the substrate is doing." },
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
        { type: "p", text: "Safe Work Australia's national workplace exposure standard for respirable crystalline silica is 0.05 mg/m³ averaged over an eight-hour day. In the ACT, a business carrying out this work must not allow dry cutting, grinding, crushing, polishing, sanding or trimming of silica-containing material — wet cutting or on-tool dust extraction is required instead, along with fitted respiratory protection, a safe work method statement, and in some cases air monitoring." },
        { type: "credit", text: "Safe Work Australia, workplace exposure standard for respirable crystalline silica; WorkSafe ACT, managing silica dust at construction sites. These duties apply to a business engaging workers — a homeowner doing genuine DIY isn't bound by them the same way, but the health risk is identical either way." },
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
        { type: "p", text: "The ACT carries additional legacy issues, including Mr Fluffy affected properties, and asbestos rules here are also stricter than in some other states: only a licensed asbestos assessor can identify or test suspected material, and no asbestos containing material may be removed from a residential premises in the ACT by anyone other than a licensed asbestos removalist — there is no small-quantity or non-friable exemption for DIY removal here, unlike some other jurisdictions." },
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
       TILE REPAIR — owns "drummy" (480 national searches, competition
       index 10 — the easiest real volume in the dataset, build brief §7/
       §9). Other pages reference it in a sentence and link here rather
       than expanding their own mention. ----------------------------------*/
    {
      page: "tile-repair-canberra.html",
      name: "Tile Repair",
      shortDescription: "Drummy, loose or cracked tiles explained: how to test them yourself, what usually caused it, and what repair actually involves.",
      metaTitle: "Tile Repair Canberra | Cracked, Loose & Drummy Tiles",
      metaDescription: "Drummy, loose or cracked tiles explained. How to test them yourself, what the cause usually is, when it matters, and what repair actually involves.",
      headline: "Cracked, Loose and Drummy Tiles",
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
        { type: "lead", text: "Most people arrive here because a tiler tapped their floor, said the word \"drummy\", and left them to work out what that meant." },
        { type: "p", text: "It means the tile has separated from whatever it was stuck to. The tile itself is usually fine. The bond underneath it is not." },
        { type: "p", text: "Whether that matters depends on where it is, how much of the floor is affected, and what caused it. Sometimes it is cosmetic and can be left. Sometimes it is the first visible sign of something that will get expensive. This page covers how to tell the difference." },

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
        { type: "p", text: "**Insufficient adhesive coverage.** The most common cause. Adhesive applied as dabs or spots rather than a properly notched full bed leaves voids from day one — the standard governing ceramic tile installation, AS 3958.1, calls for close to full bed coverage in wet areas specifically, which spot fixing does not achieve. The tiles hold for a while, then fail progressively." },
        { type: "marker", text: "The exact minimum coverage percentage AS 3958.1 specifies for internal floors versus wet areas is still unconfirmed — secondary sources found so far disagree substantially (65%, 90%, 95% and \"near 100%\" have all been cited for different contexts), which is exactly the kind of spread that means none of them should be quoted. Source the actual figure from Standards Australia or a named adhesive manufacturer's technical literature that cites the clause directly." },
        { type: "p", text: "**Movement, with nowhere for it to go.** Buildings expand, contract and settle. Tiled surfaces need movement joints at perimeters and at intervals across large areas so that movement is absorbed at designed points rather than by the adhesive bond. AS 3958.1 calls for a minimum joint width of 6mm, with intermediate joints at no more than 4.5m centres on internal floors over 9m in any dimension (or over 6m where the floor gets direct sun), and 4.5m centres in any dimension outdoors. Domestic tiling frequently omits them, and the result shows up years later as debonding along walls or tenting in the middle of a floor." },
        { type: "credit", text: "AS 3958.1, as summarised by the Housing Industry Association's guide to movement joints in tiling." },
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
          { q: "Are drummy tiles a sign my shower is leaking?", a: "Not on their own, but in a wet area they are a reason to look further. Water in the adhesive bed degrades the bond, so drummy tiles in a bathroom are often the first visible sign of a waterproofing problem rather than an adhesive one." },
          { q: "Should I be worried if my tiles are lifting or tenting?", a: "Yes. That means the tiled surface is under compression with nowhere to expand, which is a movement joint problem. Relaying without addressing the cause repeats the failure." }
        ] }
      ]
    },

    /* ---------------------------------------------------------------------
       QUOTE CHECKLIST — a link asset, not a lead page (build brief §10/
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
        { type: "marker", text: "Decide whether to also offer a PDF download alongside the print view. A print stylesheet is simpler, has no maintenance cost, and avoids gating — the safer default. Do not put this checklist behind an email capture: gated resources don't attract links, and links are the entire purpose of this page." },

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
       BATHROOM TILING — installation/choices framing. Highest cannibal-
       isation overlap risk on the site (touches home, waterproofing,
       regrouting, leaking-shower-repair, cost guide) — every reference to
       any of those subjects here stays to a sentence and links out (build
       brief §7). Low commercial value expected and accepted (build brief
       page 13 notes: max competition, min click value — topical coverage,
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
        { type: "p", text: "Bathroom floors get wet, and tile slip resistance is measured and rated rather than guessed at. Slip resistance of pedestrian surfaces in Australia is tested under AS 4586:2013 (as amended), which rates a tile by wet pendulum (P0 to P5), oil-wet ramp (R-rating), or — most relevant for a shower floor, where nobody is wearing shoes — a barefoot A, B or C rating. The companion handbook, HB 198, guides which rating suits which application." },
        { type: "note", text: "There isn't a single mandated minimum slip rating for a private bathroom floor the way there is for many commercial and public surfaces under the National Construction Code — HB 198's recommendations for a domestic wet area are best-practice guidance, not a blanket legal minimum. That's exactly why it's worth asking for the rating by name rather than assuming a tile that looks textured automatically passes." },
        { type: "credit", text: "AS 4586:2013 (as amended); HB 198:2014, Standards Australia." },
        { type: "p", text: "The practical point stands regardless of the exact figure: ask the supplier for the slip rating of the tile you are considering, and ask specifically about the shower floor, which is the wettest surface in the house and often the smallest tile. Polished and highly glazed tiles that look good on a wall can be a poor choice underfoot in a wet room." },
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
    }
  ],

  /* --- Service-area pages ---------------------------------------------------
     Deliberately empty. All 34 area-page keywords (Gungahlin, Belconnen,
     Woden, Queanbeyan, etc.) returned null Google Ads search volume —
     Canberra is one compact market, unlike Newcastle's dispersed Hunter
     catchment where area pages work (build brief §9). Not "add later
     without checking" — the keyword data already said no. */
  areas: [],

  /* No FAQs live at the about-page level in this build — the about page is
     positioning/disclosure content, and every FAQ on the site sits on the
     page that actually answers it (homepage general questions, or each
     service page's own faqs block) per the template's own FAQ rule. */
  about: {
    faqs: []
  },

  /* First N of about.faqs previewed on the homepage — unused this build
     (about.faqs is empty; the homepage's own faqs block covers that role
     instead), left in place for template compatibility. */
  faqPreviewCount: 0,

  /* --- Contact form -----------------------------------------------------
     Matches the build brief's contact page field list (name, phone, email,
     suburb, message) plus the existing service-picker (radio buttons built
     from cfg.services names) for "job type." Deliberately no "preferred
     contact time" or "budget range" field — both reduce completion and
     neither is needed to route an enquiry (build brief, contact page
     notes). */
  contact: {
    formHeadline: "Enquiry Form",
    reassurance: "No spam, no obligation — your details are only used to respond to this enquiry. See the privacy policy.",
    /* Real enquiry categories, not page names — cfg.services on this build
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
    successMessage: "Thanks — your enquiry is in. We'll come back to you about it.",
    errorMessage: "Something went wrong sending your enquiry. Please try again, or reach out directly:"
  },

  /* --- Testimonials / photos (REAL EVIDENCE ONLY) ---------------------------
     Stay empty for the whole of Level 2 — build brief §5 bans reviews,
     project photos, and completed-job counts outright, not just until a
     renter exists. Revisit only alongside a genuine Level 3 upgrade. */
  testimonials: [],
  photos: []
};
