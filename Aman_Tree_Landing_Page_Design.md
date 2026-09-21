# Aman Tree Landing Page — Design Direction & UI Specification

## 1. Creative Direction

### Design concept

**Modern Premium Logistics**

Aman Tree should look professional, international, warm, and credible. The visual language combines a dark editorial hero, light spacious content sections, modular cards, purposeful real imagery, and Saudi Arabia–Malaysia route storytelling.

### Desired impression

- Specialized rather than generic.
- Premium but approachable.
- Modern but not overly “tech startup”.
- Confident without exaggerated claims.
- Operational and real—not AI-generated or template-like.

### Positioning to communicate visually

> **Saudi Arabia ↔ Malaysia Cargo Specialist**

## 2. Reference Synthesis

The agreed visual balance is:

- 70% editorial logistics reference: strong typography, premium composition, bold cargo image.
- 15% modern landing-page structure: clear CTA, FAQ, testimonial, and conversion hierarchy.
- 10% process storytelling: visually understandable “How It Works”.
- 5% clean modular cards: spacious, polished information blocks.

These percentages are directional rather than literal copying instructions.

## 3. Visual Principles

1. **One idea per section.** Avoid dense, multi-purpose layouts.
2. **Real proof over decoration.** Prioritize real cargo and operational assets.
3. **Route-specific storytelling.** Use Saudi Arabia–Malaysia cues rather than a generic globe.
4. **Strong contrast and whitespace.** Dark hero; warm, light page body.
5. **Selective asymmetry.** Use editorial offset compositions without harming scanability.
6. **Restrained accents.** Amber/gold is a controlled highlight, not a full-page fill.
7. **Conversion visibility.** WhatsApp CTA remains visually obvious without dominating every block.

## 4. Color System

### Core palette

| Token | Hex | Use |
|---|---:|---|
| Graphite 950 | `#171717` | Hero background, dark sections, primary text on light |
| Graphite 850 | `#22252A` | Elevated dark surfaces |
| Warm White | `#F8F7F4` | Main page background |
| Pure White | `#FFFFFF` | Cards and high-contrast text |
| Surface Gray | `#ECEAE5` | Borders, separators, muted panels |
| Muted Text | `#666A70` | Secondary copy |
| Cargo Gold | `#E5A100` | Primary brand accent and selected highlights |
| Gold Hover | `#C98900` | Accent hover/pressed state |
| Route Blue | `#356DFF` | Optional route/map cue only |
| Success Green | `#198754` | Confirmed success states, not brand decoration |
| Error Red | `#C43D3D` | Form/system errors if required |

### Usage ratio

- 55–65% warm white/light surfaces.
- 25–35% graphite/dark surfaces.
- 5–10% Cargo Gold.
- Route Blue appears sparingly and never competes with the main accent.

### Accessibility

- Validate all text/background pairings to WCAG AA.
- Do not use gold for small body text on white.
- Pair gold with graphite for CTA text where contrast passes.
- Never communicate state through color alone.

## 5. Typography

### Recommended families

- Primary recommendation: **Manrope** for both headings and body.
- Alternative heading: **Sora** or **Plus Jakarta Sans**.
- Alternative body: **Inter**.

Use no more than two type families.

### Desktop scale

| Style | Size / Line height | Weight |
|---|---|---:|
| Display XL | 72 / 76 px | 650–700 |
| Display L | 56 / 62 px | 650–700 |
| H1 fallback | 48 / 54 px | 650–700 |
| H2 | 40 / 48 px | 650–700 |
| H3 | 24 / 32 px | 600–700 |
| Body L | 20 / 31 px | 400–500 |
| Body M | 16 / 26 px | 400–500 |
| Body S | 14 / 22 px | 400–500 |
| Label | 13 / 18 px | 600–700 |

### Mobile scale

| Style | Size / Line height |
|---|---|
| H1 | 40 / 44 px |
| H2 | 30 / 36 px |
| H3 | 21 / 28 px |
| Body L | 18 / 28 px |
| Body M | 16 / 25 px |

### Typography behavior

- Use sentence case rather than all caps for major headings.
- Eyebrow labels may use uppercase with modest tracking.
- Keep paragraphs around 55–70 characters per line on desktop.
- Allow flexible button width for Bahasa Malaysia copy.
- Avoid ultra-light weights and excessively tight tracking.

## 6. Grid, Spacing, and Layout

### Grid

- Desktop: 12 columns, 24 px gutters, maximum content width 1240–1320 px.
- Tablet: 8 columns, 20 px gutters.
- Mobile: 4 columns, 16 px gutters with 20–24 px page margins.

### Spacing scale

Use a consistent 4/8-based system:

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 144`

Recommended section padding:

- Desktop: 112–144 px vertical.
- Tablet: 80–104 px vertical.
- Mobile: 64–80 px vertical.

### Container behavior

- Use full-width dark or tinted section backgrounds with centered content containers.
- Do not place every section inside rounded boxes.
- Alternate open layouts and card-based layouts for rhythm.
- Keep no more than five major elements competing in one viewport.

## 7. Shape Language

- Large cards: 24 px corner radius.
- Compact cards: 16–20 px corner radius.
- Buttons: 12–14 px radius or a refined pill when appropriate.
- Image masks: 20–28 px radius.
- Border width: 1 px, subtle and neutral.
- Shadow: minimal, broad, low-opacity; avoid floating SaaS-card overload.

Example shadow:

`0 16px 50px rgba(20, 20, 20, 0.08)`

## 8. Imagery Direction

### Prioritize

- Real cargo handling.
- Containers, pallets, packing, warehouse, and storage.
- Genuine Saudi/Malaysia operational context.
- Documentary framing with strong crops.
- Real project evidence and approved customer feedback.

### Hero image treatment

- Use one dominant photograph or controlled collage.
- Prefer a strong container/cargo perspective with human or operational detail.
- Add only a restrained route line or location label overlay.
- Maintain readable negative space around the headline.

### Avoid

- Generic full-screen container ship cliché.
- Ship + airplane + truck + train combined in the hero.
- 3D globe.
- Purple/blue AI gradients.
- Fake dashboard or tracking widget.
- Random floating objects and decorative glassmorphism.
- Stock images that imply services or locations Aman Tree does not operate.

### Image treatment

- Natural color grading with warm neutral highlights.
- Avoid excessive orange/yellow filters.
- Use consistent contrast and crop ratios.
- Provide descriptive alt text for informative images; decorative imagery uses empty alt text.

## 9. Iconography and Route Graphics

- Use a single outline icon family with 1.5–2 px stroke.
- Icons support content and never replace clear labels.
- Prefer logistics-specific objects only where they clarify a service.
- Route visualization should show Saudi Arabia and Malaysia as two meaningful anchors.
- A thin Route Blue or Cargo Gold line can connect the anchors.
- Avoid a large decorative world map with unrelated destinations.

## 10. Component Specifications

### Header

- Height: approximately 80–88 px desktop, 64–72 px mobile.
- Dark transparent state over hero; transitions to solid or blurred graphite on scroll.
- Logo left, navigation center/right, language and WhatsApp CTA right.
- `EN | MY` has clear active state through weight, underline, or a subtle pill.
- Mobile menu includes language and CTA without duplicating confusing actions.

### Buttons

Primary:

- Cargo Gold background.
- Graphite text.
- 48–54 px height desktop; minimum 48 px mobile.
- Clear hover, pressed, focus, and disabled states.

Secondary on dark:

- Transparent or dark surface.
- White border/text.

Text-link CTA:

- Label plus restrained arrow.
- Underline or color change on hover.

### Trust chips / proof band

- Short verified statements only.
- Use dividers or small dots, not decorative certificates.
- Stack cleanly on mobile.

### Service cards

- Primary Saudi–Malaysia service may span two columns or use a larger card.
- Supporting services use equal card patterns.
- Card content order: label → title → short description → CTA → visual/icon.
- Entire card may be interactive only if accessibility and CTA semantics remain clear.
- Avoid long feature lists.

### Benefit cards

- Four to six cards in a balanced grid.
- Use a number, simple icon, or short eyebrow—not all three.
- Keep each explanation to two or three lines where possible.

### Process steps

- Desktop: a structured horizontal or staggered five-step sequence.
- Mobile: vertical sequence with a clear progress line.
- Each step uses number, short title, and one-sentence explanation.
- Avoid technically precise process claims unless verified.

### Achievement cards

- Large numeric value with short context.
- Include a shared caption identifying the relevant project/year.
- Do not present one shipment's figures as company-wide lifetime metrics.
- Use an accompanying real cargo image.

### Testimonial cards

- Quote, minimal attribution, and optional route/service label.
- No exposed chat UI, phone numbers, or personal photos without permission.
- Use a static grid or controlled slider; do not auto-advance rapidly.

### FAQ accordion

- One item open at a time is optional; multiple-open behavior is also acceptable.
- Clear plus/minus or chevron state.
- Large click target.
- Smooth, restrained animation with reduced-motion fallback.

### Sticky mobile WhatsApp CTA

- Bottom safe-area aware.
- Full or near-full width with adequate margins.
- Must not cover footer/legal content; hide or reposition when needed.
- Use the WhatsApp mark only if brand usage is compliant; label remains explicit.

## 11. Section-by-Section Art Direction

### 1. Hero — dark editorial

- Graphite background.
- Split layout: copy left, visual right.
- Oversized headline with controlled line breaks.
- Gold accent used for one meaningful phrase or graphic detail.
- One primary CTA, one quieter secondary CTA.
- Compact proof line beneath CTAs.

### 2. Trust Proof — compact transition

- Light or gold-tinted band connecting hero to body.
- Four verified facts at most.
- No fake customer/partner logo carousel.

### 3. About — spacious editorial

- Short eyebrow and strong statement.
- Two-column text/image or asymmetrical composition.
- Keep corporate history concise.

### 4. Services — modular hierarchy

- Warm White background.
- Large feature card for Saudi–Malaysia Cargo.
- Three supporting cards for freight, storage, and moving clusters.
- Each ends with a contextual WhatsApp action.

### 5. Why Aman Tree — dark or tinted contrast

- Use a controlled card grid.
- Benefits must sound concrete and customer-oriented.
- Avoid generic repeated claims such as “best”, “world-class”, and “trusted” without proof.

### 6. How It Works — process storytelling

- Strong sequence with numbers and restrained illustrations or real detail crops.
- Use connectors only where they improve comprehension.
- End with a simple consultation CTA.

### 7. Route Focus — geographic story

- Saudi Arabia and Malaysia anchors.
- Route line, city labels only when coverage is confirmed.
- Include a short statement explaining specialization.

### 8. Achievement — real proof

- High-contrast numbers paired with real shipment documentation.
- Include project context and approval status before publication.

### 9. Testimonials — human reassurance

- Warm light background.
- Two or three strong quotes rather than many weak items.
- Optional supporting shipment image.

### 10. FAQ — clear and quiet

- Narrow reading column or two-column heading/accordion layout.
- Keep answers concise and point variable operational questions to WhatsApp.

### 11. Final CTA — decisive close

- Dark section with bold headline.
- One primary WhatsApp button.
- Optional Saudi–Malaysia route motif.
- Avoid embedding a complex quotation form.

### 12. Footer — functional

- Compact and legible.
- Clearly separate contact, legal, and navigation information.
- Use the verified legal identity consistently.

## 12. Responsive Behavior

### Desktop

- Preserve editorial asymmetry and generous whitespace.
- Hero content should remain above the fold at common laptop heights when practical.
- Avoid excessive max-width that makes lines hard to read.

### Tablet

- Convert wide card grids from four to two columns.
- Keep hero split only when image and text retain adequate space; otherwise stack.

### Mobile

- Stack hero copy before visual.
- Place the primary CTA before scrolling.
- Use one-column service and testimonial cards.
- Convert process to a vertical timeline.
- Ensure no horizontal overflow from BM copy.
- Keep the sticky WhatsApp CTA safe-area aware.

Suggested design checkpoints:

- 1440 px desktop.
- 1024 px small desktop/tablet landscape.
- 768 px tablet.
- 390 px mobile.
- 360 px compact mobile stress test.

## 13. Motion & Section Transition Specification

### Motion concept

**Luxury Editorial Scroll Experience**

Motion should make the page feel like one continuous Saudi Arabia–Malaysia logistics story rather than a stack of disconnected blocks. The experience may be cinematic, but it must remain calm, legible, corporate, and responsive to user input. Motion supports hierarchy and continuity; it never becomes the main attraction.

Use native vertical scrolling. Do not use scroll-jacking, forced horizontal scrolling, long pinned sections, artificial scroll inertia, or transitions that delay access to content.

### Core motion languages

Use only these four motion families across the page:

1. **Editorial reveal** — heading, copy, CTA, and supporting elements enter in a restrained sequence.
2. **Masked image reveal** — real cargo imagery is uncovered with a clean clip or wipe.
3. **Sequential storytelling** — cards and process steps appear in reading order with short stagger.
4. **Route drawing** — the Saudi Arabia → Malaysia route is drawn as the signature motion moment.

Do not invent a different effect for every section. Repetition of the same motion grammar is intentional and creates a more premium experience.

### Motion tokens

| Token | Value | Primary use |
|---|---:|---|
| Micro | `180–240 ms` | Button, link, icon, language switch, hover/focus state |
| Component | `450–650 ms` | Text, card, and image reveal |
| Section | `600–900 ms` | Section entrance and light/dark scene transition |
| Signature | `1000–1600 ms` | Saudi Arabia → Malaysia route drawing |
| Short stagger | `60–90 ms` | Headline, copy, CTA sequence |
| Group stagger | `80–120 ms` | Cards, benefits, testimonials, and process steps |
| Standard travel | `20–32 px` | Vertical entrance distance on desktop |
| Mobile travel | `12–20 px` | Reduced entrance distance on mobile |

Primary entrance easing:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Micro-interaction easing:

```css
cubic-bezier(0.4, 0, 0.2, 1)
```

Exit or veil easing, when required:

```css
cubic-bezier(0.76, 0, 0.24, 1)
```

Avoid bounce, elastic, overshoot, and exaggerated spring effects.

### Scroll trigger behavior

- Trigger a standard section reveal when approximately 15–25% of the section enters the viewport.
- On short mobile screens, allow the trigger at approximately 10–15% visibility so content does not appear late.
- Reveal each section once per page visit; do not repeatedly replay large transitions when scrolling up and down.
- Hover effects apply only to devices that support hover. Touch devices use clear pressed states instead.
- Content must remain visible and usable if JavaScript is unavailable or animation initialization fails.
- Never hide critical CTA, navigation, or legal information behind a delayed animation.

### Global section transition behavior

- Use a restrained `opacity 0 → 1` combined with `translateY(20–32px) → 0` for standard entrances.
- Keep outgoing sections readable; do not aggressively fade the whole previous section while the user is still reading it.
- For transitions between light and dark sections, use the incoming background as a soft vertical veil or rising field. The effect should feel architectural, not like a page wipe.
- Section-to-section overlap may be used at `32–72 px` through layout composition, but must not obscure interactive content.
- Apply subtle visual continuity through shared route lines, aligned image edges, or background tone changes rather than decorative particles.

### Per-section motion choreography

| Transition / section | Choreography | Timing and notes |
|---|---|---|
| **Page load / Header** | Header and logo fade in; navigation and CTA follow. Header changes from transparent to compact solid/blurred graphite after leaving the hero. | Header entrance `400–550 ms`; item stagger `50–70 ms`; state transition `220–280 ms`. Do not animate header height with jarring jumps. |
| **Hero** | Eyebrow → headline → supporting copy → CTAs → proof line. Hero image reveals through a soft mask while scaling from `1.03` to `1.00`. Route cue appears last. | Copy reveal `550–750 ms`; stagger `70–100 ms`; image `800–1000 ms`. Start promptly after first paint; no long intro screen. |
| **Hero → Trust Proof** | Hero content releases upward by no more than `16 px`; proof band enters with a shallow overlap and its facts reveal left to right. | Section transition `650–800 ms`; fact stagger `70–90 ms`. Avoid an infinite logo marquee. |
| **Trust Proof → About** | About eyebrow and heading lead; body and real image follow. Image uses a vertical or horizontal masked reveal. | Heading `550–650 ms`; copy/image delay `80–120 ms`; image `650–850 ms`. |
| **About → Services** | Section heading reveals first. Featured Saudi–Malaysia card appears before the three supporting cards, which follow in reading order. | Featured card `550–700 ms`; supporting stagger `80–110 ms`. No bounce or 3D tilt. |
| **Services → Why Aman Tree** | The dark/tinted background rises softly from the lower edge while the section heading stays visually anchored. Benefit cards reveal after the background settles enough for contrast. | Background `700–900 ms`; content begins after roughly `120–180 ms`; card stagger `70–100 ms`. |
| **Why Aman Tree → How It Works** | Heading and introduction reveal, followed by steps in shipment order. Connector line draws progressively behind or between the steps. | Steps `450–600 ms` each with `80–120 ms` stagger; connector `900–1200 ms`. |
| **How It Works → Route Focus** | Saudi anchor appears first, then route line travels toward Malaysia, then Malaysia anchor and supporting copy reveal. | Signature sequence `1000–1600 ms`. Route direction must remain Saudi Arabia → Malaysia for this story. Do not use a spinning globe or decorative world map. |
| **Route Focus → Achievement** | Real shipment image is uncovered through a clean horizontal mask. Proof label and values enter after the image establishes context. | Image `700–900 ms`; values stagger `80–100 ms`. Count-up is optional and only acceptable when values are verified and the effect completes within `800–1200 ms`. |
| **Achievement → Testimonials** | Testimonial cards fade and rise in reading order with minimal depth change. | `500–650 ms`; stagger `80–100 ms`. Never auto-scroll rapidly. |
| **Testimonials → FAQ** | Heading reveals first; accordion list follows as one restrained group. Opening an item animates height/opacity and rotates or changes the state icon. | Section reveal `500–650 ms`; accordion `220–280 ms`. Focus must remain stable. |
| **FAQ → Final CTA** | Dark closing field rises into view. Headline → supporting copy → WhatsApp CTA → route motif reveal in sequence. | Section `700–900 ms`; stagger `80–110 ms`; motif remains secondary. |
| **Footer** | Footer enters normally with either no entrance effect or a single subtle fade. | Maximum `400–500 ms`. Legal and contact information should not be staged item by item. |

### Component micro-interactions

- **Primary buttons:** transition background, border, and text/icon position within `180–220 ms`; arrow may move `2–4 px`. Avoid scale pulses.
- **Cards:** on hover, move up no more than `4 px` and adjust border/shadow within `220–280 ms`. Do not rotate or tilt.
- **Text links:** underline or arrow reveals within `180–220 ms`.
- **Language switch:** active indicator slides or fades within `180–220 ms`; content replacement itself should not animate heavily.
- **FAQ:** animate the answer container without causing unexpected page jumps; the trigger icon updates at the same pace.
- **Sticky mobile WhatsApp CTA:** fade/translate into view once the hero CTA is no longer visible; hide or reposition near the footer so it never covers legal content.

### Desktop, tablet, and mobile behavior

- **Desktop:** use the full choreography and standard travel distances, provided frame rate remains stable.
- **Tablet:** retain section transitions but reduce overlapping compositions and complex masking where space is limited.
- **Mobile:** reduce travel to `12–20 px`, shorten stagger chains, remove nonessential image scale, and avoid any pinned or layered scene that delays reading.
- Never make mobile users wait for a sequence to finish before content becomes tappable.

### Reduced-motion fallback

When `prefers-reduced-motion: reduce` is active:

- Remove transform-based entrances, parallax, image scale, count-up, connector drawing, and route-line travel.
- Show all content immediately or use a simple opacity transition of no more than `120–160 ms`.
- Render the complete route graphic as a static asset.
- Keep accordion state changes instant or use a very short opacity transition.
- Disable smooth scrolling and use immediate anchor navigation.
- Preserve header state changes and other essential feedback without decorative movement.

### Effects to avoid

- Bounce, elastic, or playful spring motion.
- Heavy parallax or multiple layers moving at different speeds.
- Scroll hijacking, mandatory horizontal scroll, or long pinned storytelling.
- Card rotation, 3D tilt, glow trails, particles, and cursor-following effects.
- Excessive blur animation or animated gradients.
- Repeated word-by-word text animation.
- Continuous looping motion near body copy.
- Motion that makes the website feel like an AI startup, creative agency demo, or game interface.

## 14. Content Length Guardrails

- Hero headline: ideally 6–12 words.
- Hero supporting copy: 18–32 words.
- Service descriptions: 18–35 words.
- Benefit descriptions: 12–28 words.
- Process step: one short sentence.
- FAQ answers: normally 35–90 words.
- Button labels: concise but never abbreviated ambiguously.

Design with the longer Bahasa Malaysia version during component creation, not after the English layout is complete.

## 15. Figma Organization Recommendation

Pages:

1. `00 Cover & Notes`
2. `01 Foundations`
3. `02 Components`
4. `03 Desktop — EN`
5. `04 Desktop — MY`
6. `05 Mobile — EN`
7. `06 Mobile — MY`
8. `07 Prototype`
9. `08 Handoff`

Foundations:

- Color variables.
- Typography styles.
- Spacing and radius tokens.
- Grid definitions.
- Effects.

Core component variants:

- Button: primary, secondary, text; default, hover, focus, pressed, disabled.
- Header: top, scrolled, mobile open.
- Language switch: EN active, MY active.
- Service card: featured and standard.
- Benefit card.
- Process step.
- Achievement stat.
- Testimonial card.
- FAQ item: closed/open.
- Sticky WhatsApp CTA.

Use Auto Layout, sensible constraints, semantic layer names, and reusable variables. Avoid fixed text containers that fail when content switches language.

## 16. Design QA Checklist

- Hero communicates Saudi Arabia–Malaysia specialization immediately.
- WhatsApp is the obvious primary action.
- Saudi–Malaysia Cargo is visually more important than supporting services.
- Real assets are used where available; placeholders are clearly marked.
- `EN | MY` active and hover/focus states are visible.
- Bahasa Malaysia screens have no clipping or awkward wrapping.
- Contrast and keyboard focus meet accessibility requirements.
- Mobile sticky CTA does not hide content.
- No fake tracking, partners, testimonials, or metrics appear.
- No personal data from company documents or chats is exposed.
- Achievement figures include accurate context.
- Layout still feels premium at 360 px width.
- Image crops remain meaningful across breakpoints.
- All interactive components have documented states.
- Section transitions use the approved motion languages and timing tokens.
- Route drawing works in the correct direction and has a static reduced-motion fallback.
- No animation blocks reading, clicking, keyboard focus, or anchor navigation.
- Mobile motion is simplified and remains smooth on representative mid-range devices.

## 17. Final Creative Summary

The finished Aman Tree landing page should feel like a focused logistics specialist with real operational credibility. A dark, confident hero introduces the Saudi Arabia–Malaysia promise; the lighter body explains services and process with generous space; real proof builds trust; and every important journey leads naturally to WhatsApp consultation.

The design should never rely on generic “connecting the world” language, decorative technology interfaces, or invented operational features. Its differentiation comes from a clear route, credible evidence, and a straightforward human consultation flow.
