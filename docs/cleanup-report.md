# Aman Tree frontend cleanup

Date: 21 September 2026. This continues the supplied audit baseline; dependencies were not reinstalled. This folder has no Git repository, so there is no Git diff or commit to report.

## Business and content

- English remains the initial language; Bahasa Malaysia has equivalent service, company, FAQ and contact content in `src/content.ts`.
- Hero introduces the Saudi Arabia–Malaysia connection and all four business areas. The Malay brand statement sits in About.
- The larger dark feature remains Saudi Arabia–Malaysia Cargo. Supporting cards now cover relocation, self storage and modular containers, in that order.
- Cargo scope and its five-step ordered process cover collection, documentation, sea shipping, customs coordination and optional final delivery in Malaysia.
- Relocation includes packing, transport, loading/unloading and repositioning. Storage includes CCTV monitoring, controlled access and flexible sizes/duration. Modular content includes residential, hospitality, commercial, storage and temporary uses.
- Customer-oriented reasons replace generic benefits. Concise mission and vision sit with About.
- Hajj proof points explicitly identify the 2018 operation: approximately 200 pilgrims, approximately 80 CBM, two 20-foot containers, under one month. They are historical project figures, not delivery promises.
- Unsupported testimonials were removed. Their light section now contains two compact credentials: SSM incorporation and the existence of the Ocean Express Logistics Service EST appointment letter. No exclusivity or broader certification is implied.
- No identification documents, personal emails, director details or source scans are imported into the public page.

## Structure and files

`src/App.tsx` now composes sections and owns language state (46 lines after formatting). Related sections share files rather than creating a file for each small element.

| File | Responsibility |
| --- | --- |
| `src/data/company.ts` | Company name, registration, establishment, address, phones, WhatsApp URL helper and Hajj figures |
| `src/content.ts` | Central English/Malay copy, service data and enquiry messages |
| `src/components/Layout.tsx` | Header, navigation, language controls, footer and sticky contact |
| `src/components/Hero.tsx` | Existing dark editorial hero and retained image URLs |
| `src/components/Services.tsx` | Flagship/supporting services, ordered cargo process and route graphic |
| `src/components/CompanySections.tsx` | Trust band, About, mission/vision, reasons, experience and credentials |
| `src/components/ContactSections.tsx` | FAQ and closing CTA |
| `src/components/shared.tsx` | WhatsApp link, section heading and progressive reveal hook |
| `src/index.css` | Existing palette/font plus responsive, focus, contrast and motion rules |
| `src/main.tsx` | Formatting only |
| `index.html` | No-JavaScript message |
| `.figma/make/site.json` | Company title, description, English document language and indexability |
| `package.json` | Scoped format/check, typecheck and content-check scripts |
| `scripts/check-content.mjs` | Repeatable bilingual rendered-output and contrast checks |

No new dependencies. Existing Figma helper code in `vite.config.ts`, the source company-profile files and original design documents remain untouched.

## WhatsApp and interaction review

All ten rendered WhatsApp anchors, including hidden mobile alternatives, derive from `company.whatsapp` (`60139395190`) and `whatsappUrl()`. Each localized enquiry message is defined once. The Saudi number is a telephone contact only. Telephone links use normalized international numbers.

| Control | Code / rendered-output evidence |
| --- | --- |
| Header/footer navigation | Every anchor resolves to an existing unique ID |
| Hero secondary CTA | Resolves to `#services` |
| All WhatsApp CTAs | Correct destination and decoded EN/MY message; noopener/noreferrer |
| Malaysia/Saudi phone links | `tel:+60139395190` / `tel:+966530499112` |
| Language controls | Shared state, accessible pressed state; updates document `lang`; no routing, reload, scrolling call or animation remount |
| Mobile menu | Expanded/controls state, hidden closed panel, Escape returns focus, closes on link or focus departure, clears on desktop resize |
| FAQ | Buttons reference existing answer regions; open/close state retained during language changes |
| Sticky CTA | Appears after hero passes, hides when footer enters viewport; hidden state is inert and excluded from accessibility tree |
| Skip link | Targets focusable main landmark |

These are source/rendered-output checks, not browser click-through claims. Inactive privacy/shipping-term links and console-only analytics stubs were removed.

## Responsive implementation review

Reviewed rules for 1440, 1280, 1024, 768, 430, 390 and 360px. Main width stays bounded; the header collapses below 1280px to accommodate longer Malay navigation. Hero and editorial sections stack below 1024px. Service cards use three columns from 768px, with wrapping text and no fixed content heights. Phone hero buttons occupy the available width; longer service CTAs wrap. Route anchors use 96px on narrow screens, preserving room for the connector. Process uses one semantic list, horizontal on desktop and vertical on smaller screens. Mobile section spacing is 64px; desktop retains 144px.

Mobile menu height is bounded by the dynamic viewport and can scroll. Sticky CTA has safe-area padding and hides near the footer. Headings wrap without truncation. Image aspect ratios reserve space. These rules require the manual viewport checks below before visual sign-off.

## Motion and accessibility

- Visible content is the default. Only offscreen blocks are marked pending after a successful observer setup; observing individual blocks avoids tall-section reveal failures on phones.
- Reveals use 16px travel and 450ms transitions, short 50ms stagger, 550ms image masks and a single 1000ms route draw. No looping pulse or parallax.
- Hover and press feedback use 200ms timing. Hover displacement is limited to capable pointer devices.
- Reduced-motion disables animations, transitions, smooth scroll, image masks and route drawing; content remains visible. Live preference changes also reveal pending content.
- One H1, ordered H2/H3 hierarchy, main/header/footer/navigation landmarks, semantic address, definition lists for proof points and ordered cargo process.
- Buttons and navigation/contact targets have minimum 44px hit areas; primary CTAs have 48px minimum. Keyboard focus uses a gold outline with dark contrast backing.
- Decorative SVGs are hidden from screen readers. Images have alt text and explicitly illustrative captions, so stock imagery is not represented as a photograph of the historical operation.
- Tested text contrast pairs range from 4.74:1 to 8.05:1. Small text on light surfaces uses darker gold `#866000`; original cargo gold is retained for dark surfaces and buttons.

## SEO and assets

Figma site metadata now emits the supplied company title and description, with equivalent Open Graph fields. Document language is English initially and follows the language selector. The scaffold's `noindex` flag is removed for production. No domain, canonical URL, official email or social image was invented. Confirm preview-host indexing policy when deploying.

Both retained Unsplash image URLs returned HTTP 200. The old unverified achievement-image URL was removed; the existing cargo image is reused and labeled illustrative. Images remain remotely hosted, as does the existing Google Font; actual loading/crops under browser network conditions remain a manual check. Source documents and private data are not in the build's asset manifest.

## Verification results

- Production build: PASS, `npm.cmd run build`; 24 modules, approximately 229.68 kB JavaScript (71.54 kB gzip) and 32.44 kB CSS (6.67 kB gzip).
- TypeScript: PASS, local `tsc --noEmit`.
- Scoped formatter: PASS, `oxfmt --check src scripts`, 12 supported JS/TS files. Oxfmt 0.2.0 does not format CSS/HTML/JSON; these were manually reviewed. Generated `.figma` helpers, vendor files and build output are excluded. This version uses default write mode, not `--write`.
- Lint: NOT AVAILABLE; no lint dependency/script exists. No additional linter introduced.
- Content check: PASS, `node scripts/check-content.mjs`, both languages; ten WhatsApp links each, URL encoding, phone normalization, IDs, heading order, FAQ targets, service order, exclusion of unsupported claims and eight contrast pair checks.
- Local production preview: HTTP 200 at `http://127.0.0.1:8443/`.
- Two image URL checks: HTTP 200.
- Sandbox build/shell attempts initially hit `spawn EPERM` / signal-pipe restrictions; authorized runs outside the sandbox passed. Oxfmt's inline type-separator issue was corrected with multiline type members, followed by another successful TypeScript check.

## Omitted claims and client confirmation

The following are intentionally not published:

1. Unconfirmed general email (`info@amantree.com` removed), official domain/canonical, official social links and operating hours.
2. Air freight, generic worldwide/sea-air-land freight, FCL/LCL and single-parcel claims without current supporting detail.
3. Coverage lists for Jeddah, Riyadh, Dammam, KL and Johor; exact collection points and current schedules must be confirmed.
4. Exclusivity, “only Malay company in Saudi,” general government certification, or “exclusive official Saudi logistics provider.” The appointment letter is not expanded into those claims.
5. Financing, instalment eligibility, rates, or Shariah-compliant payment claims.
6. “24/7 CCTV,” access-hour guarantees, insurance, tracking, fixed turnaround and guaranteed/always-included door-to-door delivery.
7. “200+” pilgrims, invented lifetime totals, guaranteed response times or delivery estimates.
8. The COVID-period Riyadh case (approximately 20 Malaysians, under about 45 days): supplied historical example deliberately omitted to keep one concise proof story; exact dates/context should accompany any future publication. This does not reject the supplied account.
9. Customer testimonials without approved quotations and attribution; none of the previous generic testimonials were retained.
10. Interstate relocation coverage, vehicle specifications and exact storage-unit availability/prices pending case-specific confirmation.
11. Professional team profiles/photos or scanned credential views until approved public assets and appropriate redaction are available. Identity-card numbers and private contact/residential details are excluded entirely, not placeholders awaiting publication.
12. Privacy policy and shipping terms until client-approved content exists; no dead links remain.

The supplied Malaysian number is used as instructed. The client can later replace the one `whatsapp` field if a different official WhatsApp contact is confirmed. No visible placeholder business data remains.

## Requires manual browser verification

Per the user's instruction, no browser access was awaited. The following are not conclusively verified:

- Visual fidelity, overflow, heading wrapping, image crops and spacing at 1440/1280/1024/768/430/390/360px; also landscape and enlarged text.
- Click-through of every navigation, language, FAQ, telephone and WhatsApp control; actual WhatsApp account/app handoff was not exercised and no messages were sent.
- EN/MY layout shift and scroll continuity while reading mid-page.
- Tab/Shift+Tab focus order, Escape handling, screen-reader announcements and skip-link behavior in the browser.
- Sticky CTA timing, short-viewport menu scrolling and mobile safe areas.
- Reveal timing, image/route transitions, reduced-motion at load and after live preference changes.
- Browser console warnings/errors, font rendering and image loading under normal/slow/failed network conditions.

Implementation and available automated checks are complete. Visual production sign-off remains pending these manual checks.
