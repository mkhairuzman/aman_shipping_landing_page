# Brand retheme verification

Date: 21 September 2026.

## Recovered workspace state

The blue/green retheme was already present when this continuation began. Header and favicon use `logo/logonew.svg`; CSS defines the corporate blue, green, navy and light surface tokens. The existing header has navigation and language controls without desktop/mobile WhatsApp buttons. Hero, service cards, cargo process, closing contact section and sticky mobile contact retain their enquiry links.

`anti-slop/audit-002-2026-09-21.md` records the earlier pre-retheme state. Its historical failures should not be read as current check results. `docs/cleanup-report.md` likewise describes the older graphite/gold version and ten-link layout.

## Changes in this continuation

- Updated the content check's stale ten-link expectation to the current eight-link layout.
- Added exact per-section destination/message assertions: hero general enquiry; cargo, moving, storage and modular service enquiries; cargo process enquiry; closing general enquiry; sticky general enquiry. This checks placement as well as total count in both languages.
- Preserved UI source and existing assets. No dependencies added.

## Fresh verification

| Check | Result |
| --- | --- |
| `npm.cmd run typecheck` | PASS |
| `npm.cmd run build` | PASS; Vite 8.0.5, 26 modules |
| `npm.cmd run format:check` | PASS; 12 files |
| `npm.cmd run check:content` | PASS; English and Malay, eight links each, exact section messages, anchors, FAQ targets, headings, contact numbers and claim exclusions |
| Eight explicit contrast pairs | PASS; 4.89:1 minimum, 17.85:1 maximum |
| `http://127.0.0.1:8443/` | HTTP 200 |

Formatter/content checks initially hit Windows sandbox process-access errors. Authorized retries ran; the content retry exposed the stale count before the check was repaired and rerun successfully.

## Outstanding visual acceptance

Browser inventory returned no available browsers or apps. No fresh screenshots or click-through verification were possible. Existing screenshots were not treated as evidence of the current retheme.

The full visual delivery gate remains unverified: inspect 375, 390, 768, 1024 and 1440px widths; official-logo bounds and small-size clarity; horizontal overflow; EN/MY switching; mobile menu; navigation; FAQ; keyboard focus; reduced motion; sticky CTA timing; browser console and network asset loading. WhatsApp app/account handoff is also unverified; no messages were sent.

The contrast checks cover explicit token pairs, not every rendered combination or image overlay. Automated checks passing does not constitute visual production sign-off.
