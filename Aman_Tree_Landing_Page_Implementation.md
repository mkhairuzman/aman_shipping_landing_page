# Aman Tree Landing Page — Implementation Specification

## 1. Document Purpose

This document defines the agreed scope, content architecture, user journey, functional requirements, and delivery criteria for the Aman Tree landing page. It is the primary reference for planning, copywriting, design, development, QA, and client approval.

Companion document: `Aman_Tree_Landing_Page_Design.md`.

## 2. Project Summary

Aman Tree is positioned as a Malaysia-based logistics company specializing in cargo movement between Saudi Arabia and Malaysia. The landing page must turn this specialization, operational experience, real shipment evidence, and formal company legitimacy into qualified WhatsApp enquiries.

The website is not intended to be a general worldwide-logistics portal, an online booking system, or a shipment-tracking product.

### Core positioning

> **Aman Tree — Your Saudi–Malaysia Cargo Partner.**

### Primary business goal

Generate qualified enquiries through WhatsApp.

### Supporting goals

- Explain what Aman Tree can help with in under 30 seconds.
- Establish trust using real company and shipment evidence.
- Clarify the Saudi Arabia–Malaysia specialization.
- Serve personal and business cargo audiences.
- Reduce repeated basic questions by explaining the general shipping process.

## 3. Target Audiences

### B2C / Personal Cargo

- Malaysians living in Saudi Arabia.
- Umrah and Hajj travellers with excess or group cargo.
- Families relocating or returning to Malaysia.
- Customers shipping personal belongings, luggage, household goods, or larger parcels.

### B2B / Commercial Cargo

- Importers and exporters.
- Malaysian and Saudi SMEs.
- Distributors and corporate customers.
- Businesses sending inventory, bulk cargo, or relocation goods.

## 4. Language System

- Primary language: English.
- Secondary language: Bahasa Malaysia.
- Visible switch label: `EN | MY`.
- Technical locale codes: `en` and `ms-MY`.
- Default URL: `/` for English.
- Recommended Bahasa Malaysia URL: `/ms/`.
- Switching language must preserve the current section or equivalent page state.
- Store the user's selected language locally.
- Translate the complete experience: navigation, content, service labels, CTA labels, FAQ, form/error/success states if added, metadata, alt text, and footer.
- Bahasa Malaysia copy must be natural and professional rather than literal word-for-word translation.
- Components must accommodate longer Bahasa Malaysia labels without clipping.

## 5. Conversion Strategy

### Primary conversion flow

`Landing page → Understand service → Click WhatsApp → Consultation → Quotation`

### Primary CTA

**Chat on WhatsApp** / **Hubungi Kami di WhatsApp**

### Secondary CTA

**Explore Services** / **Lihat Perkhidmatan**

### WhatsApp behavior

- Use deep links with a prefilled message.
- Each service card should identify the relevant service in its message.
- Preserve the active website language in the message.
- Open WhatsApp app on supported mobile devices and WhatsApp Web on desktop.
- Track every WhatsApp click as a conversion event.

Example English message:

> Hi Aman Tree, I'm interested in Saudi–Malaysia Cargo. I would like to know more about the service.

Example Bahasa Malaysia message:

> Hai Aman Tree, saya ingin mengetahui lebih lanjut mengenai perkhidmatan kargo Saudi–Malaysia.

### Mobile conversion

- Provide a sticky WhatsApp CTA without obscuring content.
- Keep the phone number clickable where displayed.
- Keep `EN | MY` accessible in the mobile menu or header.
- Avoid long forms. Consultation happens primarily through WhatsApp.

## 6. Information Architecture

The landing page is a single-page experience with anchored navigation.

### Header

- Aman Tree logo.
- Navigation: Home, Services, How It Works, About, FAQ.
- Language switch: `EN | MY`.
- Primary CTA: Chat on WhatsApp.
- Sticky after initial scroll; use a compact state.

### Hero

Purpose: explain the offer, specialization, and next action immediately.

Recommended headline:

> **Reliable Cargo Solutions Between Saudi Arabia and Malaysia**

Recommended supporting copy:

> Trusted shipping, freight, and storage solutions for personal and business cargo.

Include:

- Primary WhatsApp CTA.
- Secondary anchor CTA to Services.
- One strong real cargo/container visual.
- A subtle Saudi Arabia → Malaysia route cue.
- Micro-trust items such as Malaysia registered, established 2018, and route specialization, subject to client verification.

### Trust Proof Band

Present concise, verified facts rather than decorative partner logos:

- Established 2018.
- Registered Malaysian company.
- Saudi–Malaysia route focus.
- FCL and LCL support, if confirmed as currently active.

### About / Positioning

Explain briefly:

- Aman Tree's role and market focus.
- Saudi Arabia–Malaysia specialization.
- Personal and commercial cargo support.
- Logistics experience belongs to the team/management if stated as 10+ years; do not misrepresent this as company age.

### Services

Service hierarchy:

1. **Saudi–Malaysia Cargo** — primary and visually dominant.
2. **Sea, Air & Land Freight** — secondary logistics options.
3. **Storage & Warehousing** — supporting service.
4. **Home & Office Moving** — supporting service.

Each service card contains:

- Clear service name.
- One short customer-oriented explanation.
- Relevant visual or restrained icon.
- Contextual WhatsApp CTA.

Avoid operational promises that have not been confirmed. Details such as schedules, exact transit times, prices, prohibited goods, and cargo eligibility are handled through WhatsApp consultation.

### Why Aman Tree

Use four to six concise benefit cards:

- Saudi–Malaysia specialization.
- Customs and documentation assistance, if active.
- Flexible cargo options.
- Storage support.
- Professional cargo handling.
- Transport network and delivery assistance.

Benefits must be supported by actual operations and approved client claims.

### How It Works

Recommended high-level process:

1. Tell Us About Your Shipment.
2. Arrange Pickup or Drop-Off.
3. Prepare Documentation and Cargo.
4. Ship by the Appropriate Method.
5. Arrival and Final Delivery.

Keep the process general enough to remain accurate across services. Include a WhatsApp CTA after the steps.

### Saudi–Malaysia Route Focus

Use a purposeful route visual—not a generic world map—to reinforce specialization. Mention public coverage areas only after client confirmation.

### Achievement / Proof

Potential proof points from the supplied profile, pending final client approval:

- 200 Hajj customers served.
- 80 CBM cargo handled.
- 2 × 20 ft containers managed.
- Shipment completed in under one month.

Show these as evidence from a specific project, not as lifetime totals unless confirmed. Do not publish the questionable 2019/COVID chronology until verified.

### Testimonials

- Convert customer feedback into readable quote cards.
- Do not publish raw WhatsApp screenshots by default.
- Remove or obscure personal names, phone numbers, profile photos, and other private data unless explicit permission exists.
- Use truthful attribution such as “Customer, Malaysia” when approved.

### FAQ

Recommended questions:

- What types of cargo can Aman Tree help with?
- Do you provide cargo service between Saudi Arabia and Malaysia?
- Can you assist with customs and documentation?
- Are sea and air freight options available?
- Can you arrange storage before delivery?
- How can I get a quotation?
- How long will delivery take?

Where details vary, answer with a concise explanation and direct the visitor to WhatsApp for confirmation.

### Final CTA

Suggested headline:

> **Need to ship cargo between Saudi Arabia and Malaysia?**

Supporting copy should invite customers to describe their shipment and receive the appropriate solution. Include one dominant WhatsApp button.

### Footer

- Logo and legal company name.
- Verified Malaysia and/or Saudi contact numbers.
- Verified address intended for public display.
- Official email.
- Language switch.
- Privacy Policy and Terms / Shipping Terms links.
- Copyright.

Confirm whether “Aman Tree” and “Aman Cargo Service” are one brand, a service name, or separate identities before publishing both.

## 7. Content Principles

- Lead with customer needs, not corporate history.
- Keep service descriptions short and outcome-oriented.
- Use specific Saudi–Malaysia language instead of generic “global logistics” claims.
- Prefer verified facts and real images to decorative badges.
- Never invent prices, delivery times, insurance, coverage, tracking, partnerships, or certifications.
- Do not expose personal identity numbers or sensitive information found in company documents.
- Use one consistent term for quotation and one consistent term for WhatsApp contact in each language.

## 8. Functional Requirements

### Required

- Responsive desktop, tablet, and mobile layouts.
- English and Bahasa Malaysia content switching.
- Section-anchor navigation.
- WhatsApp deep links with service-specific prefilled messages.
- Sticky mobile CTA.
- Accessible keyboard navigation and visible focus states.
- Optimized responsive images and lazy loading below the fold.
- SEO metadata per language.
- Open Graph image and social metadata.
- Sitemap and robots configuration.
- Structured data for Organization or LocalBusiness where accurate.
- Analytics for key conversion events.

### Not in current scope

- Customer accounts.
- Online payment.
- Real-time shipping quotation engine.
- Shipment tracking system or fake tracking interface.
- Complex booking flow.
- Detailed service pages unless added in a later scope.

## 9. Analytics Events

At minimum, track:

- `whatsapp_click` with section and service source.
- `explore_services_click`.
- `phone_click`.
- `email_click`.
- `language_switch` with target locale.
- `faq_open` with question identifier.
- Scroll milestones or key-section visibility, if useful.

Success should be evaluated primarily through qualified WhatsApp enquiries, not page views alone.

## 10. SEO Direction

English topic targets:

- Saudi Arabia to Malaysia cargo.
- Saudi Arabia Malaysia shipping.
- Cargo service Saudi to Malaysia.
- Personal cargo Saudi Arabia Malaysia.

Bahasa Malaysia topic targets:

- Kargo Arab Saudi ke Malaysia.
- Penghantaran barang Saudi ke Malaysia.
- Servis kargo Arab Saudi Malaysia.

Requirements:

- One clear H1 per language.
- Logical H2/H3 hierarchy.
- Human-readable copy; no keyword stuffing.
- Canonical and hreflang configuration for `en` and `ms-MY`.
- Descriptive alt text for meaningful imagery.
- Fast-loading hero media.

## 11. Performance and Accessibility

Targets:

- Aim for Core Web Vitals in the “Good” range.
- Compress photos and serve modern formats where supported.
- Avoid autoplay video in the hero.
- Respect reduced-motion preferences.
- Minimum body text target: 16 px.
- Maintain WCAG AA contrast for text and interactive elements.
- Minimum touch target: approximately 44 × 44 px.
- Use semantic landmarks, headings, buttons, and links.

## 12. Motion and Interaction Implementation

### Experience requirement

Implement the companion design specification's **Luxury Editorial Scroll Experience**. The page should feel continuous, cinematic, premium, and professional while keeping native vertical scrolling and immediate access to content.

Motion must support the Saudi Arabia → Malaysia narrative. It must not introduce scroll-jacking, forced horizontal scrolling, long pinned scenes, bounce effects, excessive parallax, card tilt, particle effects, or decorative animation unrelated to the content.

### Required motion system

The implementation must expose reusable motion tokens rather than one-off values scattered across components:

| Token | Required range / value |
|---|---:|
| Micro interaction | `180–240 ms` |
| Content/card reveal | `450–650 ms` |
| Section transition | `600–900 ms` |
| Route signature sequence | `1000–1600 ms` |
| Stagger | `60–120 ms` |
| Desktop travel | `20–32 px` |
| Mobile travel | `12–20 px` |
| Primary entrance easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Micro easing | `cubic-bezier(0.4, 0, 0.2, 1)` |

Use four reusable animation patterns only: editorial reveal, masked image reveal, sequential storytelling, and route drawing. Full visual choreography is defined in `Aman_Tree_Landing_Page_Design.md`.

### Trigger and replay rules

- Trigger standard reveals when approximately 15–25% of a section is visible; use approximately 10–15% on short mobile viewports.
- Major section reveals should play once per page visit and must not continuously replay during reverse scrolling.
- Hero motion may begin after the initial layout is ready, without a splash screen or artificial loading delay.
- Header state changes when the hero boundary is crossed and must not cause layout shift.
- Sticky mobile WhatsApp CTA appears after the in-hero primary CTA is no longer visible and must yield before footer/legal content.
- All content must remain visible and functional when JavaScript or the animation layer fails.

Prefer `IntersectionObserver` or an equivalent lightweight visibility mechanism for reveal triggers. Avoid high-frequency global scroll handlers. If scroll progress is required for the route graphic, update transform/line progress through `requestAnimationFrame` and limit the calculation to when that section is near the viewport.

### Required section choreography

- **Hero:** reveal eyebrow, headline, copy, CTAs, and proof in sequence; apply one soft mask and subtle `1.03 → 1.00` scale to the image.
- **Hero → Trust:** use a shallow visual overlap and stagger the verified facts.
- **About:** heading leads, followed by copy and masked real imagery.
- **Services:** reveal the featured Saudi–Malaysia card first, then supporting cards in reading order.
- **Why Aman Tree:** transition into the dark/tinted scene with a soft rising background field, then reveal benefits.
- **How It Works:** reveal steps in shipment order and draw the connector behind them.
- **Route Focus:** reveal Saudi anchor → draw route toward Malaysia → reveal Malaysia anchor → supporting copy. This is the only signature-length animation.
- **Achievement:** reveal the real shipment image first, then contextual figures. Any count-up is optional, must use verified numbers, and must complete quickly.
- **Testimonials:** restrained sequential card reveal; no rapid autoplay.
- **FAQ:** animate answer height/opacity and icon state within `220–280 ms` without losing focus.
- **Final CTA:** reveal dark closing field, headline, copy, WhatsApp CTA, then secondary route motif.
- **Footer:** use no animation or one simple fade only.

### Interaction and input rules

- Button and link feedback must complete within `180–240 ms`.
- Card hover may use at most `translateY(-4px)` plus subtle border/shadow change.
- Hover-specific effects must be wrapped in a hover-capable media query; touch users receive pressed/focus feedback instead.
- Animation wrappers must not change semantic order, heading structure, link destinations, or keyboard tab order.
- Focus indicators must never be delayed, clipped, or hidden by reveal masks.
- Anchor navigation must account for the sticky header through `scroll-margin-top` or equivalent spacing.

### Reduced-motion behavior

Implement a complete `prefers-reduced-motion: reduce` mode:

- Disable smooth scrolling, transform entrances, image scaling, count-up, connector drawing, route travel, and nonessential stagger.
- Display the complete route and connector graphics statically.
- Show content immediately or use opacity-only feedback no longer than `120–160 ms`.
- Keep essential state feedback for header, focus, navigation, and accordion controls.
- Do not require users to refresh after the system preference changes if the chosen animation library can respond dynamically.

### Responsive and performance constraints

- Mobile motion uses shorter travel, fewer overlapping layers, shorter stagger chains, and no content-blocking sequence.
- Decorative motion must not delay LCP content or require a hero video.
- Animate only compositor-friendly properties such as `transform` and `opacity` where possible.
- Avoid animating expensive blur, shadow, width, height, or layout properties continuously; accordion height is the limited exception and should be scoped.
- Route drawing should use a lightweight SVG path or similarly efficient technique.
- Lazy-loaded sections must not jump or replay unexpectedly when media finishes loading; reserve image dimensions and stabilize layout before reveal.
- Motion must remain smooth on representative mid-range mobile devices and must not materially regress Core Web Vitals.

### Motion QA requirements

- Verify every transition at 1440, 1024, 768, 390, and 360 px widths.
- Test mouse, touch, keyboard-only navigation, and browser back/forward behavior.
- Test normal motion and reduced-motion modes.
- Confirm route direction, line completion, and static fallback.
- Confirm animation does not cover or intercept WhatsApp links, language controls, FAQ triggers, or footer links.
- Confirm content remains readable and accessible when animation scripts are disabled.
- Check for layout shift, dropped frames, stuck hidden states, duplicate triggers, and unexpected replay.

## 13. Client Inputs Required Before Production Launch

- Final vector/high-resolution Aman Tree logo.
- Official WhatsApp number and whether Malaysia/Saudi enquiries use different numbers.
- Confirmed list of currently active services.
- Confirmed pickup and delivery coverage areas.
- Approved public address, email, phone numbers, and social links.
- High-resolution real cargo, warehouse, storage, packing, or team images.
- Permission to use testimonials and customer/shipment images.
- Verified achievement figures and the correct project chronology.
- Confirmation of FCL/LCL, customs support, door-to-door, air/sea/land, insurance, and tracking claims.
- Clarification of Aman Tree versus Aman Cargo Service naming.
- Final domain.

## 14. Deliverables

- Approved sitemap and section architecture.
- English content and natural Bahasa Malaysia adaptation.
- Desktop and mobile wireframes.
- High-fidelity responsive design.
- Reusable design components and states.
- Documented motion tokens, section choreography, and reduced-motion variants.
- Developer-ready assets and content.
- Responsive implementation.
- Analytics, SEO, performance, accessibility, and browser QA.

## 15. Acceptance Criteria

The landing page is ready when:

- A first-time visitor understands the Saudi–Malaysia cargo proposition within the hero.
- Primary WhatsApp actions are visible and work on mobile and desktop.
- Every service CTA opens the correct language-specific prefilled message.
- English and Bahasa Malaysia versions are complete and layout-safe.
- All public facts, achievements, contacts, and service claims are client-approved.
- No personal or sensitive information is exposed.
- The page works at common mobile, tablet, laptop, and wide desktop sizes.
- Keyboard navigation, focus visibility, image alt text, and contrast pass review.
- Section transitions follow the approved premium editorial motion system without scroll-jacking or content-blocking sequences.
- The Saudi Arabia → Malaysia route animation follows the correct direction and has an equivalent static reduced-motion state.
- Animation remains responsive across desktop and mobile, and no content becomes permanently hidden if scripts fail.
- Metadata, hreflang, sitemap, analytics, and Open Graph output are verified.
- There is no fake tracking, invented social proof, or unsupported logistics promise.

## 16. Recommended Delivery Sequence

1. Confirm client inputs and claims.
2. Finalize English content architecture.
3. Create natural Bahasa Malaysia copy in parallel.
4. Produce desktop and mobile wireframes.
5. Approve the hero, services hierarchy, route proof, and CTA strategy.
6. Build the visual system and high-fidelity screens.
7. Prototype the hero, section transitions, and Saudi Arabia → Malaysia signature route motion.
8. Prepare responsive component states, motion tokens, reduced-motion behavior, and handoff notes.
9. Implement and integrate WhatsApp, analytics, SEO, localization, and the approved motion system.
10. Complete content, motion, accessibility, browser, performance, and privacy QA.
11. Obtain final client approval and launch.
