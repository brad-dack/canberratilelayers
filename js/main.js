/* =============================================================================
   Render engine — builds every page from window.SITE_CONFIG (config.js).
   You should NOT need to edit this file when swapping niche/city.

   The only text living here is generic UI labels (section titles, button
   fallbacks) that don't change between niches. Niche-specific content —
   names, cities, services, prices, FAQs — all comes from config.js.
============================================================================= */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG;
  if (!cfg) {
    document.title = "Configuration missing";
    return;
  }

  /* Generic UI labels (not niche-specific). */
  var UI = {
    howItWorks: "How It Works",
    services: "Our Services",
    faqTitle: "Frequently Asked Questions",
    faqPreviewTitle: "Common Questions",
    faqSeeAll: "See all questions",
    serviceDetails: "Pricing & details",
    included: "What's included",
    pricing: "Typical Pricing",
    ctaBandTitle: "Ready to get started?",
    callLabel: "Call",
    orText: "or",
    testimonialsTitle: "What Customers Say",
    photosTitle: "Recent Work",
    contactTitle: "About & Contact",
    serviceAreaLabel: "Service area",
    hoursLabel: "Hours",
    backHome: "Back to homepage",
    menuLabel: "Menu",
    sending: "Sending…",
    areasTitle: "Areas We Serve",
    servicesInPrefix: "Services available in",
    quoteShort: "Quote",
    emailLabel: "Email",
    faqsTitle: "Frequently Asked Questions"
  };

  /* Inline SVG icon set for how-it-works steps (referenced by name from
     config.js). Inline = zero extra requests, colored via currentColor. */
  var ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
  };

  function iconSvg(name) {
    if (!name || !ICONS[name]) return "";
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + "</svg>";
  }

  /* ---------- helpers ------------------------------------------------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function currentFile() {
    var f = window.location.pathname.split("/").pop();
    if (!f) return "index.html";
    // Some static-file servers (e.g. `npx serve`) strip .html from the URL
    // by default ("clean URLs"). GitHub Pages doesn't, but local preview
    // should still resolve to the right page either way.
    if (f.indexOf(".") === -1) f += ".html";
    return f;
  }

  /* Unset config degrades to absent, never to broken: while business.phone
     or .email is empty, every UI element that would use it is omitted
     rather than rendered with dead/fake data. */
  function hasPhone() { return !!(cfg.business.phone && cfg.business.phoneDisplay); }
  function hasEmail() { return !!cfg.business.email; }
  function hasHours() { return !!cfg.business.hours; }

  function telHref() {
    return "tel:" + cfg.business.phone;
  }

  function callButton(extraClass) {
    if (!hasPhone()) return "";
    return '<a class="btn btn-outline ' + (extraClass || "") + '" href="' + telHref() + '">' +
      UI.callLabel + " " + esc(cfg.business.phoneDisplay) + "</a>";
  }

  /* ---------- rich text (used by content blocks) -------------------------
     Escapes first, THEN re-enables a tiny markup subset, so config copy can
     never inject HTML: **bold**, [label](url), and newlines -> <br>. */
  function richText(s) {
    var t = esc(s);
    t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (m, label, url) {
      return '<a href="' + url + '">' + label + "</a>";
    });
    return t.replace(/\n/g, "<br>");
  }

  function quoteButton(text, extraClass) {
    return '<a class="btn btn-primary ' + (extraClass || "") + '" href="about.html#quote">' +
      esc(text) + "</a>";
  }

  /* Builds an <img> from a config image object ({src, alt, width, height}).
     Returns "" when no image is configured, so sections degrade cleanly. */
  function imgTag(image, className, lazy) {
    if (!image || !image.src) return "";
    return '<img class="' + (className || "") + '" src="' + esc(image.src) + '"' +
      ' alt="' + esc(image.alt || "") + '"' +
      (image.width ? ' width="' + image.width + '"' : "") +
      (image.height ? ' height="' + image.height + '"' : "") +
      (lazy ? ' loading="lazy"' : "") + ">";
  }

  function faqItems(list) {
    return list.map(function (f) {
      return '<details class="faq-item"><summary>' + esc(f.q) + "</summary>" +
        '<div class="faq-answer"><p>' + richText(f.a) + "</p></div></details>";
    }).join("");
  }

  /* ---------- content blocks ----------------------------------------------
     Service pages (and other long-form pages) are an ordered array of typed
     blocks rather than a fixed card layout, so real copy — headings, data
     tables, callouts, inline citations — fits without fighting the
     template. See README for the full block-type reference. */

  function renderBlock(b) {
    switch (b.type) {
      case "h2": return "<h2>" + richText(b.text) + "</h2>";
      case "h3": return "<h3>" + richText(b.text) + "</h3>";
      case "p": return "<p>" + richText(b.text) + "</p>";
      case "lead": return '<p class="lead">' + richText(b.text) + "</p>";
      case "ul":
        return "<ul>" + b.items.map(function (i) { return "<li>" + richText(i) + "</li>"; }).join("") + "</ul>";
      case "ol":
        return "<ol>" + b.items.map(function (i) { return "<li>" + richText(i) + "</li>"; }).join("") + "</ol>";
      case "table":
        return '<div class="block-table-wrap"><table class="block-table">' +
          (b.caption ? "<caption>" + richText(b.caption) + "</caption>" : "") +
          "<thead><tr>" + b.headers.map(function (h) { return "<th>" + richText(h) + "</th>"; }).join("") + "</tr></thead>" +
          "<tbody>" + b.rows.map(function (row) {
            return "<tr>" + row.map(function (cell) { return "<td>" + richText(cell) + "</td>"; }).join("") + "</tr>";
          }).join("") + "</tbody></table></div>";
      case "note":
        return '<aside class="block-note">' + richText(b.text) + "</aside>";
      case "credit":
        return '<p class="block-credit">' + richText(b.text) + "</p>";
      case "marker":
        return '<div class="block-marker" role="note">' +
          '<strong>Unfinished &mdash; not for publication.</strong> ' + richText(b.text) + "</div>";
      case "faqs":
        return '<div class="block-faqs">' + faqItems(b.items) + "</div>";
      case "form":
        return renderQuoteFormHtml({
          heading: b.heading, presetService: b.presetService,
          extraField: b.extraField, placeholders: b.placeholders
        });
      case "image":
        return '<figure class="block-image">' + imgTag(b, "", true) +
          (b.caption ? "<figcaption>" + richText(b.caption) + "</figcaption>" : "") + "</figure>";
      default:
        return "";
    }
  }

  function renderBlocks(blocks) {
    return (blocks || []).map(renderBlock).join("");
  }

  /* ---------- head: brand + analytics ----------------------------------
     NOTE: title, meta description, canonical, OG tags, and JSON-LD schema
     are baked into each page's static <head> (sourced from config at
     file-generation time) so crawlers see them before any JS runs. The H1
     is likewise static in each page's <main>. After changing headlines or
     meta text in config.js, regenerate the baked values with `node bake.js`
     — see README. */

  /* Color math mirrors bake.js — the baked <style> block in each page's
     head already carries these values; this re-derives them from config at
     load time so a config edit shows up even before re-baking. */
  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, w) {
    var ra = hexToRgb(a), rb = hexToRgb(b);
    return "#" + ra.map(function (v, i) {
      return ("0" + Math.round(v * w + rb[i] * (1 - w)).toString(16)).slice(-2);
    }).join("");
  }
  function rgba(hex, alpha) {
    var c = hexToRgb(hex);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + alpha + ")";
  }

  function applyBrand() {
    var r = document.documentElement.style;
    var c = cfg.brand.color;
    r.setProperty("--brand", c);
    r.setProperty("--brand-dark", cfg.brand.colorDark);
    r.setProperty("--brand-contrast", cfg.brand.colorContrast);
    if (/^#[0-9a-fA-F]{6}$/.test(c)) {
      r.setProperty("--brand-soft", mix(c, "#ffffff", 0.10));
      r.setProperty("--brand-softer", mix(c, "#ffffff", 0.055));
      r.setProperty("--brand-border", mix(c, "#ffffff", 0.30));
      r.setProperty("--brand-glow", rgba(c, 0.30));
      r.setProperty("--brand-glow-soft", rgba(c, 0.15));
      r.setProperty("--footer-bg", mix(c, "#10161d", 0.16));
    }
    /* Theme attributes are baked onto <html> by bake.js; config wins here
       so a style/pattern change previews correctly before re-baking. */
    document.documentElement.setAttribute("data-style", cfg.brand.style || "classic");
    document.documentElement.setAttribute("data-pattern", cfg.brand.pattern || "none");
  }

  function injectGA4() {
    var id = cfg.ga4Id;
    if (!id || id.indexOf("XXXX") !== -1 || !/^G-[A-Z0-9]+$/.test(id)) return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id);
  }

  /* Click-to-call tracking: fires a GA4 event for any tel: link. gtag only
     exists when injectGA4 ran (i.e. a real measurement ID is configured),
     so this is a silent no-op while the placeholder ID is in place. */
  function trackPhoneClicks() {
    document.addEventListener("click", function (e) {
      var link = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
      if (!link || typeof window.gtag !== "function") return;
      window.gtag("event", "click_to_call", {
        phone_number: link.getAttribute("href").replace("tel:", ""),
        link_text: (link.textContent || "").trim(),
        page_location: window.location.href
      });
    });
  }

  /* ---------- header / footer ------------------------------------------ */

  function renderHeader() {
    var file = currentFile();
    var links = [
      { href: "index.html", label: "Home" },
      { href: "index.html#services", label: "Services" },
      { href: "about.html", label: "Contact" }
    ];
    var nav = links.map(function (l) {
      var active = l.href === file ? ' class="active"' : "";
      return "<li><a" + active + ' href="' + l.href + '">' + l.label + "</a></li>";
    }).join("");
    var navPhone = hasPhone()
      ? '<a class="btn btn-primary nav-phone" href="' + telHref() + '">' +
        UI.callLabel + " " + esc(cfg.business.phoneDisplay) + "</a>"
      : quoteButton(cfg.pages.home.ctaText, "nav-phone");

    document.getElementById("site-header").innerHTML =
      '<div class="container header-inner">' +
        '<a class="logo" href="index.html">' + esc(cfg.business.name) + "</a>" +
        '<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="' + UI.menuLabel + '">' +
          '<span></span><span></span><span></span>' +
        "</button>" +
        '<nav id="site-nav" class="site-nav" aria-label="Main">' +
          "<ul>" + nav + "</ul>" +
          navPhone +
        "</nav>" +
      "</div>";

    var toggle = document.querySelector(".nav-toggle");
    var navEl = document.getElementById("site-nav");
    toggle.addEventListener("click", function () {
      var open = navEl.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Fixed bottom bar on mobile — phone/quote/email stay reachable below the
     800px breakpoint where the header nav is collapsed. Auto-hides while
     the quote form itself is on screen (no point showing a call bar over
     the form the visitor is already filling in). */
  function renderContactBar() {
    var parts = [];
    if (hasPhone()) parts.push('<a class="contact-bar-item" href="' + telHref() + '">' + UI.callLabel + "</a>");
    parts.push('<a class="contact-bar-item contact-bar-primary" href="about.html#quote">' + UI.quoteShort + "</a>");
    if (hasEmail()) parts.push('<a class="contact-bar-item" href="mailto:' + esc(cfg.business.email) + '">' + UI.emailLabel + "</a>");
    if (parts.length < 2) return; // just the quote link isn't worth a bar

    var bar = document.createElement("div");
    bar.className = "contact-bar";
    bar.innerHTML = parts.join("");
    document.body.appendChild(bar);

    var form = document.getElementById("quote-form");
    if (form && "IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        bar.classList.toggle("contact-bar-hidden", entries[0].isIntersecting);
      }, { rootMargin: "0px 0px -20% 0px" });
      obs.observe(form);
    }
  }

  function renderFooter() {
    var serviceLinks = cfg.services.map(function (s) {
      return '<li><a href="' + esc(s.page) + '">' + esc(s.name) + "</a></li>";
    }).join("");

    var contactLines = [];
    if (hasPhone()) contactLines.push('<a href="' + telHref() + '">' + esc(cfg.business.phoneDisplay) + "</a>");
    if (hasEmail()) contactLines.push('<a href="mailto:' + esc(cfg.business.email) + '">' + esc(cfg.business.email) + "</a>");
    var detailLines = [];
    if (cfg.business.serviceArea) detailLines.push(UI.serviceAreaLabel + ": " + esc(cfg.business.serviceArea));
    if (hasHours()) detailLines.push(UI.hoursLabel + ": " + esc(cfg.business.hours));

    document.getElementById("site-footer").innerHTML =
      '<div class="container footer-grid">' +
        "<div>" +
          '<p class="footer-brand">' + esc(cfg.business.name) + "</p>" +
          (contactLines.length ? "<p>" + contactLines.join("<br>") + "</p>" : "") +
          (detailLines.length ? "<p>" + detailLines.join("<br>") + "</p>" : "") +
        "</div>" +
        "<div><p class=\"footer-title\">" + UI.services + "</p><ul>" + serviceLinks + "</ul></div>" +
        '<div><p class="footer-title">Pages</p><ul>' +
          '<li><a href="index.html">Home</a></li>' +
          '<li><a href="about.html">About &amp; Contact</a></li>' +
          '<li><a href="privacy.html">Privacy Policy</a></li>' +
        "</ul></div>" +
      "</div>" +
      '<div class="container footer-bottom">' +
        "<p>&copy; " + new Date().getFullYear() + " " + esc(cfg.business.name) +
        (cfg.business.city ? ". Serving " + esc(cfg.business.city) + ", " + esc(cfg.business.state) + "." : ".") +
        "</p>" +
      "</div>";
  }

  /* ---------- shared sections ------------------------------------------ */

  /* Fills the static hero (H1 is baked into the page HTML for SEO — this
     adds the sub-headline, CTAs, value props, and optional hero image).
     subheadline and ctaText are optional (area pages may omit them). */
  function fillHero(h, image) {
    var dyn = document.querySelector(".hero-dynamic");
    if (!dyn) return;
    dyn.innerHTML =
      (h.subheadline ? '<p class="hero-sub">' + esc(h.subheadline) + "</p>" : "") +
      '<div class="hero-actions">' +
        quoteButton(h.ctaText || cfg.pages.home.ctaText) + callButton() +
      "</div>" +
      '<ul class="value-props">' +
        cfg.valueProps.map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") +
      "</ul>";
    var media = imgTag(image, "hero-img");
    if (media) {
      document.querySelector(".hero").classList.add("has-media");
      document.querySelector(".hero-grid").insertAdjacentHTML(
        "beforeend", '<div class="hero-media">' + media + "</div>");
    }
  }

  function howItWorksSection(compact) {
    var steps = cfg.howItWorks.map(function (s, i) {
      var badge = s.icon && iconSvg(s.icon)
        ? '<span class="step-num" aria-hidden="true">' + iconSvg(s.icon) + "</span>" +
          '<span class="step-label">Step ' + (i + 1) + "</span>"
        : '<span class="step-num" aria-hidden="true">' + (i + 1) + "</span>";
      return '<li class="step">' + badge +
        "<h3>" + esc(s.title) + "</h3>" +
        "<p>" + esc(s.text) + "</p>" +
      "</li>";
    }).join("");
    return '<section class="section how-it-works' + (compact ? " compact" : "") + '" id="how-it-works">' +
      '<div class="container">' +
        "<h2>" + UI.howItWorks + "</h2>" +
        '<ol class="steps">' + steps + "</ol>" +
      "</div></section>";
  }

  function ctaBand(ctaText) {
    var phoneLine = hasPhone()
      ? UI.callLabel + ' <a href="' + telHref() + '">' + esc(cfg.business.phoneDisplay) +
        "</a> " + UI.orText + " request your free quote online."
      : "Request your free quote online.";
    return '<section class="cta-band"><div class="container">' +
      "<h2>" + UI.ctaBandTitle + "</h2>" +
      "<p>" + phoneLine + "</p>" +
      quoteButton(ctaText, "btn-invert") +
    "</div></section>";
  }

  /* Testimonials/photos stay hidden until real evidence exists in config.
     This is intentional — see the CONTENT CONSTRAINT note in config.js. */
  function testimonialsSection() {
    if (!cfg.testimonials || !cfg.testimonials.length) return "";
    var items = cfg.testimonials.map(function (t) {
      return '<figure class="testimonial"><blockquote>' + esc(t.quote) + "</blockquote>" +
        "<figcaption>" + esc(t.name) + (t.detail ? " — " + esc(t.detail) : "") + "</figcaption></figure>";
    }).join("");
    return '<section class="section"><div class="container">' +
      "<h2>" + UI.testimonialsTitle + '</h2><div class="grid-3">' + items + "</div></div></section>";
  }

  function photosSection() {
    if (!cfg.photos || !cfg.photos.length) return "";
    var items = cfg.photos.map(function (p) {
      return '<figure class="photo"><img loading="lazy" src="' + esc(p.src) + '" alt="' + esc(p.alt) + '">' +
        (p.caption ? "<figcaption>" + esc(p.caption) + "</figcaption>" : "") + "</figure>";
    }).join("");
    return '<section class="section"><div class="container">' +
      "<h2>" + UI.photosTitle + '</h2><div class="grid-3">' + items + "</div></div></section>";
  }

  /* Service link cards — used by the homepage grid and by area pages
     (internal links from each area back to the service pages). */
  function serviceCards(services) {
    return services.map(function (s) {
      return '<article class="card">' +
        '<h3><a href="' + esc(s.page) + '">' + esc(s.name) + "</a></h3>" +
        "<p>" + esc(s.shortDescription) + "</p>" +
        '<a class="card-link" href="' + esc(s.page) + '">' + UI.serviceDetails + " &rarr;</a>" +
      "</article>";
    }).join("");
  }

  /* Homepage links out to every area page. Renders nothing while the
     areas array in config.js is empty. */
  function areasSection() {
    if (!cfg.areas || !cfg.areas.length) return "";
    var links = cfg.areas.map(function (a) {
      return '<li><a href="' + esc(a.slug) + '.html">' + esc(a.name) + "</a></li>";
    }).join("");
    return '<section class="section" id="areas"><div class="container">' +
      "<h2>" + UI.areasTitle + '</h2><ul class="area-links">' + links + "</ul>" +
    "</div></section>";
  }

  /* ---------- pages ------------------------------------------------------ */

  function renderHome(content) {
    var p = cfg.pages.home;
    fillHero(p, p.image);

    var faqPreview = (cfg.about.faqs || []).slice(0, cfg.faqPreviewCount || 3);
    var faqSection = faqPreview.length
      ? '<section class="section section-alt"><div class="container narrow">' +
          "<h2>" + UI.faqPreviewTitle + "</h2>" +
          faqItems(faqPreview) +
          '<p class="center"><a class="text-link" href="about.html#faqs">' + UI.faqSeeAll + " &rarr;</a></p>" +
        "</div></section>"
      : "";

    content.innerHTML =
      '<section class="section" id="services"><div class="container">' +
        "<h2>" + UI.services + '</h2><div class="grid-3">' + serviceCards(cfg.services) + "</div></div></section>" +
      areasSection() +
      howItWorksSection(false) +
      testimonialsSection() +
      faqSection +
      ctaBand(p.ctaText);
  }

  /* Service pages render from an ordered array of typed content blocks
     (svc.blocks) rather than a fixed card layout, so real long-form copy —
     headings, tables, callouts, per-service FAQs — fits directly. See
     README for the block-type reference. */
  function renderService(content) {
    var file = currentFile();
    var svc = cfg.services.find(function (s) { return s.page === file; });

    if (!svc) {
      // Unmapped stub: replace the whole <main> so the stale baked H1 goes too.
      document.getElementById("main").innerHTML =
        '<section class="section"><div class="container narrow">' +
        "<h1>Page not in use</h1>" +
        "<p>This service page isn't mapped to a service in config.js. " +
        'Add a service entry with <code>page: "' + esc(file) + '"</code>, or delete this file.</p>' +
        '<p><a class="btn btn-primary" href="index.html">' + UI.backHome + "</a></p>" +
      "</div></section>";
      return;
    }

    fillHero(svc, svc.image);

    content.innerHTML =
      '<section class="section"><div class="container narrow prose">' +
        renderBlocks(svc.blocks) +
        '<p class="center"><a class="btn btn-primary" href="about.html#quote">' + esc(svc.ctaText) + "</a></p>" +
      "</div></section>" +
      howItWorksSection(true) +
      testimonialsSection() +
      ctaBand(svc.ctaText);

    wireQuoteForm();
  }

  function renderArea(content) {
    var file = currentFile();
    var area = (cfg.areas || []).find(function (a) { return a.slug + ".html" === file; });

    if (!area) {
      // Unmapped area page (removed from config): replace the whole <main>
      // so the stale baked H1 goes too — same treatment as service stubs.
      document.getElementById("main").innerHTML =
        '<section class="section"><div class="container narrow">' +
        "<h1>Page not in use</h1>" +
        "<p>This area page isn't mapped to an entry in the areas array in config.js. " +
        "Add an entry with <code>slug: \"" + esc(file.replace(/\.html$/, "")) + "\"</code>, or delete this file.</p>" +
        '<p><a class="btn btn-primary" href="index.html">' + UI.backHome + "</a></p>" +
      "</div></section>";
      return;
    }

    fillHero(area);

    // localDetail accepts a single string or an array of paragraphs.
    var detail = area.localDetail
      ? [].concat(area.localDetail).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("")
      : "";

    // Feature the configured subset of services, or all of them.
    var featured = area.services && area.services.length
      ? cfg.services.filter(function (s) { return area.services.indexOf(s.page) !== -1; })
      : cfg.services;

    content.innerHTML =
      '<section class="section"><div class="container narrow">' +
        area.intro.map(function (t) { return '<p class="lead">' + esc(t) + "</p>"; }).join("") +
        detail +
      "</div></section>" +
      '<section class="section section-alt"><div class="container">' +
        "<h2>" + UI.servicesInPrefix + " " + esc(area.name) + "</h2>" +
        '<div class="grid-3">' + serviceCards(featured) + "</div>" +
        '<p class="center"><a class="text-link" href="index.html">' + UI.backHome + " &rarr;</a></p>" +
      "</div></section>" +
      howItWorksSection(true) +
      (area.faqs && area.faqs.length
        ? '<section class="section section-alt"><div class="container narrow">' +
            "<h2>" + esc(area.name) + " — " + UI.faqTitle + "</h2>" +
            faqItems(area.faqs) +
          "</div></section>"
        : "") +
      ctaBand(area.ctaText || cfg.pages.home.ctaText);
  }

  /* FAQs live on the page that answers them: general/quoting/payment
     questions belong here on About & Contact (never a standalone faq.html —
     the FAQPage schema for this page is built from exactly this array, see
     bake.js). */
  function faqsSection() {
    if (!cfg.about.faqs || !cfg.about.faqs.length) return "";
    return '<section class="section section-alt" id="faqs"><div class="container narrow">' +
      "<h2>" + UI.faqsTitle + "</h2>" +
      faqItems(cfg.about.faqs) +
    "</div></section>";
  }

  function renderAbout(content) {
    var contactLines = [];
    if (hasPhone()) contactLines.push("<strong>" + UI.callLabel + ":</strong> " +
      '<a href="' + telHref() + '">' + esc(cfg.business.phoneDisplay) + "</a>");
    if (hasEmail()) contactLines.push("<strong>Email:</strong> " +
      '<a href="mailto:' + esc(cfg.business.email) + '">' + esc(cfg.business.email) + "</a>");
    if (cfg.business.serviceArea) contactLines.push("<strong>" + UI.serviceAreaLabel + ":</strong> " + esc(cfg.business.serviceArea));
    if (hasHours()) contactLines.push("<strong>" + UI.hoursLabel + ":</strong> " + esc(cfg.business.hours));

    content.innerHTML =
      '<section class="section"><div class="container narrow">' +
        cfg.about.paragraphs.map(function (t) { return '<p class="lead">' + richText(t) + "</p>"; }).join("") +
        (contactLines.length ? '<p class="contact-lines">' + contactLines.join("<br>") + "</p>" : "") +
      "</div></section>" +
      photosSection() +
      '<section class="section section-alt" id="quote"><div class="container narrow">' +
        "<h2>" + esc(cfg.contact.formHeadline) + "</h2>" +
        '<p class="reassurance">' + esc(cfg.contact.reassurance) + "</p>" +
        renderQuoteFormHtml({}) +
      "</div></section>" +
      faqsSection();

    wireQuoteForm();
  }

  function renderPrivacy(content) {
    var p = cfg.pages.privacy;
    var name = esc(cfg.business.name);
    content.innerHTML =
      '<section class="section"><div class="container narrow prose">' +
        "<p><em>Last updated: " + esc(p.lastUpdated) + "</em></p>" +
        "<h2>What this website collects</h2>" +
        "<p>When you use the quote form on this site, we collect three things: your <strong>name</strong>, your <strong>phone number</strong>, and the <strong>service you need</strong>. That's it — the form has no other fields.</p>" +
        "<h2>How it's used</h2>" +
        "<p>Your details are used for one purpose: to contact you about your quote request. They are not sold, shared with advertisers, or added to any marketing list.</p>" +
        "<h2>Who processes the form</h2>" +
        // TODO (per site): name the actual services the endpoint runs on. This
        // wording is accurate for the standard Supabase + Cloudflare setup; if
        // a site's ingest endpoint is hosted elsewhere, say so here instead.
        "<p>The form is delivered directly to our own systems for handling enquiries. A free security check (Cloudflare Turnstile) runs in the background to filter out automated spam submissions before your enquiry reaches us.</p>" +
        "<h2>Analytics</h2>" +
        "<p>This site may use Google Analytics to understand how visitors find and use it (for example, which pages are viewed). Google Analytics uses cookies and collects anonymous usage data such as your general location and device type. It does not see anything you type into the quote form.</p>" +
        "<h2>Phone calls</h2>" +
        "<p>If you call the number on this site, standard call records apply. We don't record calls.</p>" +
        "<h2>Your choices</h2>" +
        "<p>If you'd like the details you submitted to be deleted, call " +
        '<a href="' + telHref() + '">' + esc(cfg.business.phoneDisplay) + "</a> or email " +
        '<a href="mailto:' + esc(cfg.business.email) + '">' + esc(cfg.business.email) + "</a> and ask — they'll be removed.</p>" +
        "<h2>Contact</h2>" +
        "<p>Questions about this policy can be sent to " + name + " at " +
        '<a href="mailto:' + esc(cfg.business.email) + '">' + esc(cfg.business.email) + "</a>.</p>" +
      "</div></section>";
  }

  /* ---------- config-driven quote form ------------------------------------
     cfg.contact.fields is the base field list (name/phone by default, but
     entirely configurable). A `form` content block can override it:
       heading        — optional heading shown above the form
       presetService  — service name to hard-code (skips the service picker,
                         used when the form is embedded on that service's
                         own page)
       extraField     — one additional field object just for this block,
                         e.g. { name: "address", label: "Property address" }
       placeholders   — { fieldName: "placeholder text" } per-page override */
  function fieldHtml(f, placeholders) {
    var id = "qf-" + f.name;
    var ph = (placeholders && placeholders[f.name]) || f.placeholder;
    return '<div class="form-field"><label for="' + id + '">' + esc(f.label) + "</label>" +
      '<input id="' + id + '" name="' + esc(f.name) + '" type="' + esc(f.type || "text") + '"' +
      (f.autocomplete ? ' autocomplete="' + esc(f.autocomplete) + '"' : "") +
      (ph ? ' placeholder="' + esc(ph) + '"' : "") +
      (f.required === false ? "" : " required") + "></div>";
  }

  /* One id per page load, shared by every render of the form. The ingest
     function dedupes leads on (channel, source_ref) and reads source_ref from
     _id, falling back to a random uuid per request when it's absent — so a
     site that never sends _id creates a fresh lead on every retry after a
     failed submit. crypto.randomUUID needs a secure context; the fallback
     isn't cryptographically strong, but this only has to be unique enough to
     dedupe one visitor's retries. */
  var _submissionId = null;
  function submissionId() {
    if (_submissionId) return _submissionId;
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      _submissionId = window.crypto.randomUUID();
    } else {
      _submissionId = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }
    return _submissionId;
  }

  function renderQuoteFormHtml(opts) {
    opts = opts || {};
    var fields = (cfg.contact.fields || []).concat(opts.extraField ? [opts.extraField] : []);
    var fieldsHtml = fields.map(function (f) { return fieldHtml(f, opts.placeholders); }).join("");

    var picker = "";
    var presetInput = "";
    if (opts.presetService) {
      presetInput = '<input type="hidden" name="service" value="' + esc(opts.presetService) + '">';
    } else {
      var options = cfg.services.map(function (s) { return s.name; })
        .concat([cfg.contact.otherServiceLabel]);
      var radios = options.map(function (name) {
        return '<label class="service-option">' +
          '<input type="radio" name="service" value="' + esc(name) + '" required>' +
          "<span>" + esc(name) + "</span>" +
        "</label>";
      }).join("");
      picker = '<fieldset class="form-step" id="form-step-1">' +
        "<legend>" + esc(cfg.contact.step1Label) + "</legend>" +
        '<div class="service-options">' + radios + "</div>" +
      "</fieldset>";
    }

    return (opts.heading ? "<h2>" + esc(opts.heading) + "</h2>" : "") +
      '<form id="quote-form" novalidate>' +
        presetInput +
        picker +
        '<fieldset class="form-step" id="form-step-2"' + (picker ? " hidden" : "") + '>' +
          (picker ? "<legend>" + esc(cfg.contact.step2Label) + "</legend>" : "") +
          fieldsHtml +
          // Honeypot: real visitors never see this (off-screen, not
          // display:none — some bots skip display:none fields specifically) or
          // fill it in. The endpoint treats any value here as spam.
          '<input type="text" id="qf-gotcha" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" ' +
            'style="position:absolute;left:-9999px;top:-9999px">' +
          // Idempotency key. Left empty here and filled by wireQuoteForm() on
          // every page load, so the value can't be frozen into baked markup —
          // it has to be unique per real load or retries stop deduping.
          '<input type="hidden" id="qf-id" name="_id" value="">' +
          (cfg.turnstileSiteKey ? '<div id="turnstile-widget"></div>' : "") +
          '<button class="btn btn-primary btn-block" type="submit">' + esc(cfg.contact.submitText) + "</button>" +
        "</fieldset>" +
        '<p class="form-status" id="form-status" role="status" aria-live="polite"></p>' +
      "</form>";
  }

  /* Turnstile's api.js is deliberately NOT a static <head> tag: it competes
     with the hero image for bandwidth and main-thread time during the LCP
     window on every page, whether or not that visitor ever reaches the form.
     Load it on demand instead — when the enquiry section is about to scroll
     into view, or immediately on first interaction as a fast path for anyone
     who scrolls or types before the observer's margin trips. */
  var _turnstileLoading = false;
  function loadTurnstileScript() {
    if (_turnstileLoading || window.turnstile || !cfg.turnstileSiteKey) return;
    _turnstileLoading = true;
    var s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    document.head.appendChild(s);
  }

  function scheduleTurnstileLoad(section) {
    if (!cfg.turnstileSiteKey) return;
    if (!section || !("IntersectionObserver" in window)) {
      loadTurnstileScript();
      return;
    }
    var triggered = false;
    var trigger = function () {
      if (triggered) return;
      triggered = true;
      loadTurnstileScript();
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          trigger();
          observer.disconnect();
        }
      });
    }, { rootMargin: "600px 0px" });
    observer.observe(section);
    ["pointerdown", "focusin", "keydown"].forEach(function (evt) {
      document.addEventListener(evt, trigger, { once: true, passive: true });
    });
  }

  /* The api.js load above is async and the form is re-rendered on every page
     navigation, so Turnstile's own auto-render-on-load scan would miss a form
     injected into the DOM after that scan already ran. Render explicitly once
     the API is available instead. */
  function renderTurnstile(container) {
    if (!container || !cfg.turnstileSiteKey) return;
    if (container.hasChildNodes()) return;     // already rendered into
    if (window.turnstile) {
      window.turnstile.render(container, { sitekey: cfg.turnstileSiteKey });
    } else {
      setTimeout(function () { renderTurnstile(container); }, 100);
    }
  }

  function wireQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    var step2 = document.getElementById("form-step-2");
    var status = document.getElementById("form-status");
    var fieldNames = (cfg.contact.fields || []).map(function (f) { return f.name; });

    // Set fresh per page load, whether the markup was baked or just rendered.
    var idField = document.getElementById("qf-id");
    if (idField) idField.value = submissionId();
    // Observe the form's own containing section rather than a fixed id — the
    // form is dropped into a differently-named section on different page
    // types (and different sites), and a missed lookup here silently degrades
    // to loading Turnstile eagerly, which is the thing this avoids.
    scheduleTurnstileLoad(form.closest ? form.closest("section") || form : form);
    renderTurnstile(document.getElementById("turnstile-widget"));

    form.addEventListener("change", function (e) {
      if (e.target.name === "service" && step2.hidden) {
        step2.hidden = false;
        var first = form.querySelector(".form-field input");
        if (first) first.focus();
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var service = form.querySelector('input[name="service"]');
      var serviceVal = service && (service.type === "radio" ? form.querySelector('input[name="service"]:checked') : service);
      var values = {};
      var missing = !serviceVal;
      fieldNames.forEach(function (name) {
        var el = document.getElementById("qf-" + name);
        values[name] = el ? el.value.trim() : "";
        if (el && el.required && !values[name]) missing = true;
      });
      if (missing) {
        status.textContent = "Please fill in the required fields.";
        status.className = "form-status error";
        return;
      }

      var ingestUrl = cfg.ingestUrl;
      if (!ingestUrl || !cfg.ingestSecret || ingestUrl.indexOf("YOUR_") === 0) {
        // Owner hasn't configured the ingest endpoint yet — fail gracefully
        // for visitors (the phone number is offered as a fallback below).
        console.warn("ingestUrl/ingestSecret not set in config.js — form cannot submit.");
        showError();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.textContent = UI.sending;
      status.className = "form-status";

      var gotcha = document.getElementById("qf-gotcha");
      var submissionIdField = document.getElementById("qf-id");
      var turnstileResponse = form.querySelector('[name="cf-turnstile-response"]');
      // Config-driven fields first, then the fixed keys — so a stray field
      // name in config can't clobber `service` or any of the meta fields.
      var payload = {};
      Object.keys(values).forEach(function (name) { payload[name] = values[name]; });
      payload.service = serviceVal.value;
      payload.subject = "New quote request: " + serviceVal.value;
      payload._secret = cfg.ingestSecret;
      payload._gotcha = gotcha ? gotcha.value : "";
      payload._id = (submissionIdField && submissionIdField.value) || submissionId();
      payload["cf-turnstile-response"] = turnstileResponse ? turnstileResponse.value : "";

      fetch(ingestUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (res) {
        if (res.ok) {
          form.innerHTML = '<p class="form-status success">' + esc(cfg.contact.successMessage) + "</p>";
        } else {
          btn.disabled = false;
          showError();
        }
      }).catch(function () {
        btn.disabled = false;
        showError();
      });

      function showError() {
        status.innerHTML = esc(cfg.contact.errorMessage) +
          (hasPhone() ? ' <a href="' + telHref() + '">' + esc(cfg.business.phoneDisplay) + "</a>" : "");
        status.className = "form-status error";
      }
    });
  }

  /* ---------- motion ------------------------------------------------------
     Purely decorative. Both helpers bail out cleanly when the browser lacks
     support or the user prefers reduced motion — content is always visible
     because the hidden state only exists under html.anim (see styles.css). */

  function initHeaderShadow() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("anim");

    var targets = document.querySelectorAll(
      ".card, .step, .faq-item, .testimonial, .photo, .section h2, " +
      ".price-note, .intro-copy, .intro-media, .contact-lines, " +
      "#quote-form, .area-links li"
    );
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    targets.forEach(function (el) {
      // Stagger siblings (e.g. cards in a grid) by their position.
      var idx = el.parentNode
        ? Array.prototype.indexOf.call(el.parentNode.children, el)
        : 0;
      el.style.transitionDelay = (idx % 6) * 70 + "ms";
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ---------- boot --------------------------------------------------------- */

  applyBrand();
  injectGA4();
  trackPhoneClicks();
  renderHeader();
  renderFooter();
  initHeaderShadow();

  var content = document.getElementById("page-content");
  var page = document.body.getAttribute("data-page");
  var renderers = {
    home: renderHome,
    service: renderService,
    area: renderArea,
    about: renderAbout,
    privacy: renderPrivacy
  };
  if (renderers[page] && content) renderers[page](content);
  renderContactBar();
  initReveal();

  /* If the URL has a hash (e.g. about.html#quote), re-scroll after render
     since the target element didn't exist at initial page load. */
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView();
  }
})();
