# Design: Compliance improvements + Flowtly partnership page

Date: 2026-05-18
Project: gaballa.pl (Astro site, PL + EN)

## Summary

Two independent deliverables on the gaballa.pl site:

1. **Compliance** — add legally-required Polish business disclosure for a
   registered sole trader (JDG) and tighten the RODO/GDPR policy text.
2. **Flowtly partnership page** — a new dedicated page promoting the
   "Flowtly × Gaballa" back-office service, rendered faithfully from the
   provided mockup, recolored to the site's palette.

Each deliverable is self-contained and can be implemented and reviewed
independently.

---

## Deliverable A — Compliance

### A1. Polish business disclosure (JDG)

Polish law (Prawo przedsiębiorców; ustawa o świadczeniu usług drogą
elektroniczną) requires a registered sole trader to identify the business
with: registered name, NIP, address, and contact details.

**Data model.** Add a `business` block to `src/content/site.ts`, shared
across both locales (numbers are locale-independent; only labels differ):

```ts
business: {
  legalName: string;   // e.g. "Ewelina Gaballa"
  nip: string;         // "[NIP]" placeholder until provided
  regon: string;       // "[REGON]" placeholder until provided
  address: string;     // registered CEIDG address; "[ADRES]" placeholder
}
```

The `SiteContent` type gains matching field labels in `nav`/`footer` scope
(`footer.legalNip`, `footer.legalRegon`, etc.) so both PL and EN render
correct labels.

**Placeholders.** The user operates as JDG but has not yet supplied
NIP / REGON / registered address / phone. Implementation ships these as
clearly-marked placeholders (`[NIP]`, `[REGON]`, `[ADRES]`) — visible and
obviously-unfinished so the site is never published with blank legal data.
The user replaces them before the page goes live. The phone field in
`site.ts` stays empty (`PHONE = ''`); contact remains email-only unless a
number is supplied.

**Surfaces.**

- **Footer (`Footer.astro`)** — a compact identity line in the existing
  dark footer, below the brand block: `NIP [NIP] · REGON [REGON]` and the
  registered address. No new component; extends `footer__brand` or adds a
  sibling `footer__legal` block.
- **Privacy policy (`legal.ts`)** — the "Administrator danych" /
  "Data controller" section body is expanded to include NIP, REGON and the
  registered address alongside the existing name and email.

### A2. RODO/GDPR content review

Edits to `src/content/legal.ts`, applied symmetrically to the `pl` and `en`
`privacy` objects:

- **Controller section** — add NIP / REGON / registered address (see A1).
- **New section "Logi serwera" / "Server logs"** — Firebase Hosting logs IP
  and request metadata. Disclose this processing as legitimate interest
  (Art. 6(1)(f) GDPR). This does not contradict the cookies policy, which
  correctly states no analytics/marketing cookies are used — server logs are
  separate from cookies.
- **New section "Przekazywanie danych poza EOG" / "International transfers"**
  — Google Workspace / Firebase may process data outside the EEA under
  Standard Contractual Clauses.
- **New section "Profilowanie" / "Profiling & automated decisions"** — a
  short section stating there is no profiling and no automated
  decision-making. The "Zakres przetwarzanych danych" / "Scope of data
  processed" section gains one sentence: providing data is voluntary but
  necessary to respond to enquiries and deliver services.

`LAST_UPDATED_PL` / `LAST_UPDATED_EN` are bumped to the implementation date.

The cookies policy (`cookies` object) is already accurate and minimal and is
left unchanged.

---

## Deliverable B — Flowtly partnership page

A new dedicated page promoting the Flowtly implementation service, reachable
from the main navigation. Built as a faithful single-screen render of the
provided mockup (#2), recolored from the mockup's indigo to the site's
sage/terracotta palette.

### Page structure (single-screen panel)

1. **Top bar** — a `WSPÓŁPRACA` badge (filled accent pill) + a muted
   `FLOWTLY × GABALLA` label on the left; the `flowtly.` wordmark on the
   right.
2. **Hero** — a muted question lede (`Chcesz uporządkować firmę, ale nie
   masz na to czasu?`) above the serif headline `Jedna osoba, jeden
   system — i wszystko działa.` with an italic accent on the final word
   (`działa.`).
3. **The "×" block** — two cards joined by a circular `×` badge:
   - `/01 SYSTEM` → `flowtly.` wordmark + "Trzyma całą Twoją firmę w jednym
     miejscu — finanse, projekty, faktury."
   - `/02 ASYSTENTKA` → round portrait of Ewelina + "Ewelina Gaballa" +
     "Prowadzi Twoją firmę na co dzień — kalendarz, komunikacja,
     administracja, finanse."
4. **W pakiecie** — a `W PAKIECIE` label, a highlighted
   `5h lub 10h / miesięcznie` badge, and four chips: Kalendarz · Komunikacja
   · Administracja · Finanse.
5. **Closing strip** — a divider, then `Spokój, porządek i sprawczość.`
   (italic accent on `sprawczość.`) on the left and, on the right,
   `FLOWTLY · GABALLA` over the links `flowtly.eu / gaballa.pl / Umów
   rozmowę`.

The page content is final (taken from mockup #2) — no placeholder copy.

### Visual treatment

- Uses the existing design system: cream backgrounds (`--color-bg`,
  `--color-bg-alt`), Fraunces serif + Inter sans, and the existing
  `.container` / `.eyebrow` / `.btn` utilities.
- The mockup's indigo accent is replaced by the site's sage/terracotta
  (`--color-sage-deep` / `--color-terra-deep`). The filled `WSPÓŁPRACA`
  badge and the italic headline accent word use the accent color.
- The `/01` `/02` mono-style labels are rendered with the existing
  uppercase, letter-spaced `.eyebrow` treatment — no new mono font is
  loaded.
- Cards reuse the existing card styling (`--color-line` border,
  `--radius-md`, hover lift) consistent with `Services.astro`.

### Links

- `Umów rozmowę` — links to the homepage contact section (`/#contact` on
  PL, `/en/#contact` on EN).
- `flowtly.eu` — external link, opens in a new tab with
  `rel="noopener noreferrer"`.
- `gaballa.pl` — links to the site root for the active locale.

### Architecture

Follows the existing project patterns (per-section component, locale-keyed
content file, one page file per locale):

- **`src/content/flowtly.ts`** — new content file exporting
  `Record<Locale, FlowtlyContent>`, parallel to `legal.ts`. A `FlowtlyContent`
  type holds the badge labels, lede, headline (with the accent word as a
  separate field), the two card objects, the package badge + chips, and the
  closing strip text/links. Keeping this separate keeps `site.ts` focused on
  the homepage.
- **`src/components/Flowtly.astro`** — one component rendering all five
  sections, scoped `<style>`, comparable in size to `Services.astro`. Takes
  a `locale` prop.
- **`src/pages/flowtly.astro`** (PL) and **`src/pages/en/flowtly.astro`**
  (EN) — thin page files using `Base` with `path="/flowtly"`, `Nav`,
  `Flowtly`, and `Footer`, mirroring the structure of `privacy.astro`.
- **`Nav.astro`** — add a `Flowtly` link pointing to the full page
  `${base}/flowtly` (the other nav links are homepage anchors; this one is a
  real page). A new `nav.flowtly` content key is added to `site.ts` for both
  locales (label `Flowtly` in both PL and EN).
- **`Footer.astro`** — add the same `Flowtly` link to the footer link row.
- **Portrait image** — reuse the existing `src/assets/images/about.png`
  asset for the round `/02` portrait.

### EN locale

`flowtly.ts` includes a full English translation of all page copy. The EN
headline, card copy, chips and closing strip are translated equivalents of
the PL content; the `flowtly.` wordmark, `FLOWTLY × GABALLA` label and URLs
stay as-is.

---

## Out of scope

- Real NIP / REGON / address values (user supplies; placeholders shipped).
- A cookie consent banner — the site uses no analytics/marketing cookies, so
  one is not currently required.
- A mobile navigation menu — the existing `Nav` hides links below 900px with
  no hamburger menu; this is a pre-existing limitation, not changed here.
- Pricing logic or a booking system — `Umów rozmowę` reuses the existing
  contact section.

## Testing / verification

- `npm run build` in `site/` succeeds.
- PL pages `/`, `/flowtly`, `/privacy`, `/cookies` and EN equivalents render.
- `/flowtly` matches mockup #2 in structure, recolored to sage/terra.
- Footer shows the business disclosure line on every page.
- Privacy policy (PL + EN) shows the controller disclosure plus the new
  server-logs and international-transfers sections.
- Nav and footer `Flowtly` links resolve to the new page in both locales.
