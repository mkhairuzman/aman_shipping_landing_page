# Language UX implementation plan

Scope: the user's navigation and language UX brief. Preserve translations, hero composition, route animation, stats, logo, section order and WhatsApp behavior. No dependencies or commits.

- [x] Replace language toggles with a shared compact dropdown; 32px desktop navigation gap. Inline UK/Malaysia flags. Portal menu to avoid mobile overflow clipping. Support native buttons, radio-menu selection, arrows, Home/End, Escape, Tab and outside dismissal.
- [x] Add a language transition hook: visible text only, 140ms fade-out, 240ms entrance, 20ms word stagger capped at 100ms. Declarative word spans on primary headings. Preserve existing element heights while switching and compensate for changes above the reading anchor. Reduced-motion skips text animation.
- [x] Update bilingual semantic checks for the dropdown; run format, typecheck, build and content checks. All pass. Attempt browser verification: browser inventory returns no available browsers or apps.
- [ ] Live browser verification for 1440/1280/1024/820/480/430/390 widths; EN/MY both directions; pointer, keyboard, focus, wrapping, overflow, layout shift and reduced motion. These remain unverified, not inferred from static checks.

Implementation uses React state/hooks, CSS and the browser Web Animations API. Panels use 200ms ease-out transitions and 44px controls. Existing breakpoint at 1280px is retained.

## Verification notes

- Content checks first failed on absent dropdown semantics; after implementation they pass for both languages, including menu radio selections, current-language trigger labels, unique IDs, existing anchors/WhatsApp messages and unchanged headline text/spacing.
- TypeScript caught the existing formatter's inline type-member separator issue; multiline type members resolve it. No formatter/dependency changes.
- The menu is 196px wide, clamped to viewport edges, and placed above the trigger when needed. Portaling it to the body avoids mobile nav clipping. Escape closes only the language menu and returns focus; Tab restores the trigger as the native navigation starting point.
- Existing header height, responsive breakpoint and footer language access are retained. Mobile has the replacement dropdown inside the menu, with no old EN/MY toggle.
- Height safeguards retain the greater pre/post-switch text height, reset on viewport width changes, and compensate for changes above the visible main/footer reading anchor before paint. Natural growth for longer Malay text is allowed; zero layout shift has not been certified.
- Dropdown/chevron motion is 200ms ease-out. Reduced motion keeps only a 150ms panel fade and switches text without animation. Word entrances finish within 340ms; combined with outgoing fade, the longest sequence is 480ms.
