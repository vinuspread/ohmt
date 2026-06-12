# Template Audit Report
Date: 2026-06-10

---

## Summary

- **Total templates:** 16 en + 16 ko = 32 total
- **Clean (no violations):** 0 (every template has at least one issue)
- **Has violations:** 32

### Violation counts by category (templates affected):
| Rule | EN templates affected | KO templates affected |
|------|----------------------|----------------------|
| Hardcoded hex colors in className | 54 files across 14 en templates | 54 files across 14 ko templates |
| Em-dash `—` in content/data | dashboard, docs, airline, magazine (+ data files) | Same 4 templates |
| `italic` Tailwind class | docs, portfolio (not-italic OK), studio (not-italic OK) | docs |
| `font-light` Tailwind class | sneaker | - |
| Missing `--color-primary` in theme.css | technology | technology |
| Missing `--font-body` in theme.css | dashboard | dashboard |
| CDN font URL (googleapis / jsdelivr) | all 16 (font loading via CSS @import) | 15/16 (technology-ko missing font import) |
| `translations/` folder exists at `src/app/translations/` | (shared, unused) | (shared, unused) |
| Korean font missing in layout | - | technology |

---

## Violations by Template

### airline (en)
- [x] **Hardcoded hex colors** in className: `destinations/[slug]/page.tsx`, `destinations/page.tsx`, `experience/page.tsx`, `loyalty/page.tsx`, `book/page.tsx`, `_components/SearchWidget.tsx`, `_components/Footer.tsx`
- [x] **Em-dash `—`** in data file: `destinations/[slug]/destinationData.ts` (multiple occurrences in attraction descriptions)

### airline (ko)
- [x] **Hardcoded hex colors** in className: same set of files as en (copied pattern)
- [x] **Em-dash `—`** in data file: `destinations/[slug]/destinationData.ts`

### car (en)
- [x] **Hardcoded hex colors** in className: `configure/page.tsx`, `about/page.tsx`
- [x] **Old path comment** in `_components/layout/Footer.tsx` line 1: `// src/app/templates/car/src/components/layout/Footer.tsx` (cosmetic issue, not a structural violation)

### car (ko)
- [x] **Hardcoded hex colors** in className: `configure/page.tsx`, `about/page.tsx`

### cosmetic (en)
- [x] **Hardcoded hex colors** in className: `journal/[slug]/page.tsx`, `shop/page.tsx`

### cosmetic (ko)
- [x] **Hardcoded hex colors** in className: `journal/[slug]/page.tsx`, `shop/page.tsx`

### docs (en)
- [x] **`italic` Tailwind class** in `[slug]/page.tsx` line 109: `<p className="... italic">` (used for blockquote rendering)
- [x] **Em-dash `—`** in `layout.tsx` line 5: `title: "Docs — Documentation Workspace"`
- [x] **Em-dash `—`** in `data/pages.ts` (multiple occurrences in documentation content strings)

### docs (ko)
- [x] **`italic` Tailwind class** in `[slug]/page.tsx` line 109: same violation as en
- [x] **Em-dash `—`** in `layout.tsx` line 5: `title: "문서 — 협업 문서 워크스페이스"`
- [x] **Em-dash `—`** in `data/pages.ts` (same content as en, not translated)

### exhibition (en)
- [x] **Hardcoded hex colors** in className: `collections/page.tsx`, `collections/[slug]/page.tsx`, `souvenir/page.tsx`

### exhibition (ko)
- [x] **Hardcoded hex colors** in className: `collections/page.tsx`, `collections/[slug]/page.tsx`, `souvenir/page.tsx`

### fashion (en)
- [x] **Hardcoded hex colors** in className: `category/[id]/page.tsx`, `product/[id]/page.tsx`, `cart/page.tsx`, `_components/ProductGrid.tsx`, `_components/Footer.tsx`, `_components/CollectionShowcase.tsx`

### fashion (ko)
- [x] **Hardcoded hex colors** in className: same files as en

### furniture (en)
- No hardcoded hex color violations in TSX className found
- Clean on other checks

### furniture (ko)
- Clean on all checks

### ir (en)
- [x] **Hardcoded hex colors** in className: `page.tsx`, `governance/page.tsx`, `news/page.tsx`, `contact/page.tsx`, `financials/page.tsx`, `_components/sections/RecentNews.tsx`, `_components/sections/BusinessSegments.tsx`, `_components/layout/Footer.tsx`, `_components/layout/Header.tsx`

### ir (ko)
- [x] **Hardcoded hex colors** in className: same set of files
- [x] **`lang="ko"` HTML attribute on `<main>` tags** in `page.tsx`, `news/page.tsx`, `governance/page.tsx`, `contact/page.tsx`, `financials/page.tsx` — this is a false `lang=` pattern but differs from the forbidden `?lang=` URL parameter (not a violation of the `?lang=` rule; only informational)

### jewelry (en)
- [x] **Hardcoded hex colors** in className: `page.tsx`, `product/[id]/page.tsx`, `category/[id]/page.tsx`, `_components/Footer.tsx`

### jewelry (ko)
- [x] **Hardcoded hex colors** in className: `page.tsx`, `product/[id]/page.tsx`, `category/[id]/page.tsx`, `_components/Navbar.tsx`, `_components/Footer.tsx`

### magazine (en)
- [x] **Hardcoded hex colors** in className: `_components/sections/EditorsPicks.tsx`, `_components/sections/Hero.tsx`
- [x] **Em-dash `—`** in `constants.ts` data file (multiple in article content strings, tag labels e.g. `"Issue No. 42 — Summer 2026"`)

### magazine (ko)
- [x] **Hardcoded hex colors** in className: `_components/sections/EditorsPicks.tsx`, `_components/sections/Hero.tsx`
- [x] **Em-dash `—`** in `constants.ts` (same content as en — data not localized)

### newspaper (en)
- [x] **Hardcoded hex colors** in className: `[category]/[slug]/page.tsx`, `_components/layout/Header.tsx`

### newspaper (ko)
- [x] **Hardcoded hex colors** in className: `[category]/[slug]/page.tsx`, `_components/layout/Header.tsx`

### portfolio (en)
- [x] **Hardcoded hex colors** in className: `page.tsx`, `project/[id]/page.tsx`, `about/page.tsx`, `contact/page.tsx`, `journal/page.tsx`, `_components/layout/Header.tsx`, `_components/layout/Footer.tsx`, `_components/ReviewSystem/ReviewOverlay.tsx`

### portfolio (ko)
- [x] **Hardcoded hex colors** in className: same set of files

### sneaker (en)
- [x] **`font-light` Tailwind class** in `_components/sections/Hero.tsx` line 183: `<span className="font-light block mb-1">`
- [x] **Hardcoded hex colors** in className: `_components/sections/CategoryBanners.tsx`, `_components/ReviewSystem/ReviewOverlay.tsx`

### sneaker (ko)
- [x] **Hardcoded hex colors** in className: `_components/ReviewSystem/ReviewOverlay.tsx`

### studio (en)
- [x] **Hardcoded hex colors** in className: `page.tsx`, `_components/ProjectListItem.tsx`, `_components/ProjectGrid.tsx`, `_components/StatsSection.tsx`, `_components/ReviewOverlay.tsx`, `_components/NewsSection.tsx`, `_components/InspirationSection.tsx`

### studio (ko)
- [x] **Hardcoded hex colors** in className: same set of files

### dashboard (en)
- [x] **Em-dash `—`** in TSX files: `profile/page.tsx`, `_components/charts/ModelSalesLine.tsx`, `_components/charts/RevenueBarChart.tsx`, `_components/charts/ScatterChart.tsx`, `_components/layout/Sidebar.tsx` (comment), `_components/widgets/ActivityFeed.tsx`, `_components/widgets/ProjectStatus.tsx`, `_components/widgets/QuickNotes.tsx`
- [x] **Em-dash `—`** in `data/dashboard-data.ts`
- [x] **Missing `--font-body`** in `theme.css` (has `--font-heading: 'Geist'` but no `--font-body`)

### dashboard (ko)
- [x] **Em-dash `—`** in TSX files: same 8 files as en (data not fully localized — some English text remains in activity feed and profile data)
- [x] **Em-dash `—`** in `data/dashboard-data.ts`
- [x] **Missing `--font-body`** in `theme.css`

### technology (en)
- [x] **Missing `--color-primary`** in `theme.css` — uses `--color-accent` instead; `--color-primary` is required

### technology (ko)
- [x] **Missing `--color-primary`** in `theme.css` — same as en
- [x] **Missing Korean font import** in `layout.tsx` — the file has no font import at all; `theme.css` lists `'Pretendard'` as `--font-heading` and `--font-body` but Pretendard is never loaded via `@import` or `<link>` in `layout.tsx`

---

## Missing Items

### Translations folder (structural issue)
- `src/app/translations/` exists with `en.json`, `ko.json`, and `index.ts` containing `useTranslations` and `getTranslation` exports
- **No template imports from this folder** — the folder is dead code
- The rule says "No `translations/` folder anywhere" — this folder technically violates the rule even though unused

### Templates listed in CLAUDE.md but NOT found in filesystem
- ~~`travel`~~ — **제거 완료** (2026-06-10): 실제 존재하지 않는 템플릿으로 확인, CLAUDE.md에서 삭제
- ~~`clinic`~~ — **제거 완료** (2026-06-10): 실제 존재하지 않는 템플릿으로 확인, CLAUDE.md에서 삭제

### Templates NOT listed in CLAUDE.md but found in filesystem
- `technology` — exists as en + ko but not listed in CLAUDE.md "완료된 템플릿" section

---

## Structure Overview

| Template | EN theme.css | KO theme.css | EN layout.tsx | KO layout.tsx | KO Korean font | EN --color-primary | EN --font-body | KO --color-primary | KO --font-body |
|----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| airline | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| car | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| cosmetic | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| docs | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| exhibition | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| fashion | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| furniture | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ir | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| jewelry | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| magazine | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| newspaper | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| portfolio | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| sneaker | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| studio | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| dashboard | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** | ✓ | **✗** |
| technology | ✓ | ✓ | ✓ | ✓ | **✗** | **✗** | ✓ | **✗** | ✓ |

| Template | No src/ nesting | No translations/ import | No useTranslations | No ?lang= | No -ko image paths | No italic | No font-light | No em-dash (tsx) | No hardcoded hex |
|----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| airline | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| car | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| cosmetic | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| docs | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** | ✓ | **✗** | ✓ |
| exhibition | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| fashion | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| furniture | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ir | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| jewelry | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| magazine | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| newspaper | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| portfolio | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| sneaker | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** (en only) | ✓ | **✗** |
| studio | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** |
| dashboard | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** | ✓ |
| technology | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## Priority Fix List

### P1 — Widespread (affects 14+ templates)
1. **Hardcoded hex colors in `className`** — 108 files (54 en + 54 ko) across 14 templates. Run `scripts/replace-hex-colors.mjs` and replace all `text-[#XXXXXX]`, `bg-[#XXXXXX]`, `border-[#XXXXXX]` patterns with CSS variable equivalents. Affected templates: airline, car, cosmetic, exhibition, fashion, ir, jewelry, magazine, newspaper, portfolio, sneaker, studio, dashboard (en+ko each).

### P2 — Content data violations (affects 4 templates)
2. **Em-dash `—` in `.tsx` files** — dashboard (8 tsx files en + 8 ko), docs/layout.tsx (en+ko). Replace `—` with ` · ` or `-` per CLAUDE.md rules.
3. **Em-dash `—` in `.ts` data files** — airline/destinationData.ts, dashboard/dashboard-data.ts, docs/data/pages.ts, magazine/constants.ts (en+ko each). Replace in content strings.

### P3 — Code quality violations
4. **`italic` class** — `docs/[slug]/page.tsx` (en + ko line 109). Replace with no italic styling or use a border-left blockquote approach without italic.
5. **`font-light` class** — `sneaker/_components/sections/Hero.tsx` (en only line 183). Replace with `font-normal` or higher.

### P4 — Design token gaps
6. **technology theme.css missing `--color-primary`** — en and ko. Add `--color-primary` mapping to `--color-accent` value (`#00f0ff`).
7. **dashboard theme.css missing `--font-body`** — en and ko. Add `--font-body: 'Geist', sans-serif`.
8. **technology-ko layout.tsx missing Korean font import** — Add Pretendard `@import` in the layout's `<style>` tag or switch to next/font.

### P5 — Structural/dead code
9. ~~**`src/app/translations/` folder**~~ — **삭제 완료** (2026-06-10): `en.json`, `ko.json`, `index.ts` 3개 파일 제거.
10. **CLAUDE.md "완료된 템플릿" list is stale** — `travel` and `clinic` listed but do not exist; `technology` exists but is not listed.

---

## Notes

- **No violations found for:** `useTranslations`/`getTranslation` imports in templates, `const lang =` pattern, `?lang=` URL parameter handling, `public/templates/[name]-ko/` folders, nested `src/` directories inside templates, external image URLs (unsplash etc.), ko templates referencing `-ko` image paths.
- **All 32 templates** have both `theme.css` and `theme.json` present (where applicable), and all `layout.tsx` files import `theme.css`.
- **All ko templates** have Korean text present in their components (translation is complete for all 16 ko templates).
- **All ko routing links** use `/ko/templates/[name]/` paths correctly — no `/en/` paths found in ko templates.
- **Font loading** — all templates use CDN-based font loading via `@import url()` in layout `<style>` tags. This is technically an external URL reference but limited to font CDNs (Google Fonts, jsDelivr/Pretendard). This is an accepted pattern in this project.
