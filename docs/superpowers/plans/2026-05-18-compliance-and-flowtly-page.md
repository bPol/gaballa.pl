# Compliance + Flowtly Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Polish business disclosure + RODO content to gaballa.pl, build a new `/flowtly` partnership page, and add a "Certified Flowtly Practitioner" footer badge.

**Architecture:** Astro static site, PL at root + EN under `/en`. Content lives in locale-keyed objects in `src/content/`; each page section is a `.astro` component. New page reuses existing design tokens and utility classes. No test framework exists — verification is `npm run build` succeeding plus rendered-output inspection.

**Tech Stack:** Astro 6, plain CSS (scoped `<style>` + `global.css` tokens), `astro:assets` for images.

**Working directory for all commands:** `site/`

---

## File Structure

- `site/src/content/site.ts` — MODIFY: add `business` export, `nav.flowtly`, `footer.certifiedBadge`.
- `site/src/content/flowtly.ts` — CREATE: `FlowtlyContent` type + PL/EN content.
- `site/src/content/legal.ts` — MODIFY: RODO review (controller data, new sections, dates).
- `site/src/components/Flowtly.astro` — CREATE: the partnership page section.
- `site/src/components/Nav.astro` — MODIFY: add Flowtly link.
- `site/src/components/Footer.astro` — MODIFY: business disclosure line + cert badge + Flowtly link.
- `site/src/pages/flowtly.astro` — CREATE: PL page.
- `site/src/pages/en/flowtly.astro` — CREATE: EN page.

---

## Task 1: Add business data, nav + footer content keys to `site.ts`

**Files:**
- Modify: `site/src/content/site.ts`

- [ ] **Step 1: Add `flowtly` to the `nav` type and `certifiedBadge` to the `footer` type**

In the `SiteContent` type, add `flowtly: string;` to the `nav` block (after `contact`) and `certifiedBadge: string;` to the `footer` block (after `cookies`):

```ts
  nav: {
    about: string;
    services: string;
    tools: string;
    credentials: string;
    testimonials: string;
    contact: string;
    flowtly: string;
    langLabel: string;
    otherLang: string;
  };
```

```ts
  footer: {
    tagline: string;
    privacy: string;
    cookies: string;
    certifiedBadge: string;
    rights: string;
  };
```

- [ ] **Step 2: Add the `business` constant and export it**

After the `const BOOK_URL = '#contact';` line, add:

```ts
export const business = {
  legalName: 'Ewelina Gaballa',
  nip: '[NIP]',
  regon: '[REGON]',
  address: '[ADRES]',
};
```

These are intentional placeholders — the registered NIP / REGON / CEIDG address are filled in by the site owner before publishing.

- [ ] **Step 3: Add the new content values to the `pl` locale**

In `content.pl.nav`, add `flowtly: 'Flowtly',` (after `contact`).
In `content.pl.footer`, add `certifiedBadge: 'Certified Flowtly Practitioner',` (after `cookies`).

- [ ] **Step 4: Add the new content values to the `en` locale**

In `content.en.nav`, add `flowtly: 'Flowtly',` (after `contact`).
In `content.en.footer`, add `certifiedBadge: 'Certified Flowtly Practitioner',` (after `cookies`).

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: build succeeds with no TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add site/src/content/site.ts
git commit -m "Add business disclosure data and Flowtly content keys"
```

---

## Task 2: Create the Flowtly content file

**Files:**
- Create: `site/src/content/flowtly.ts`

- [ ] **Step 1: Create `site/src/content/flowtly.ts` with full content**

```ts
import type { Locale } from './site';

export type FlowtlyContent = {
  meta: { title: string; description: string };
  badge: string;
  pair: string;
  lede: string;
  headline: string;
  headlineAccent: string;
  system: { number: string; label: string; body: string };
  assistant: { number: string; label: string; name: string; body: string };
  packageLabel: string;
  packageBadge: string;
  packageChips: string[];
  closing: { text: string; accent: string; brandPair: string; ctaLabel: string };
  portraitAlt: string;
};

export const flowtly: Record<Locale, FlowtlyContent> = {
  pl: {
    meta: {
      title: 'Flowtly × Gaballa — Twój back office, który po prostu działa',
      description:
        'Współpraca Flowtly i Eweliny Gaballa: jeden system i jedna asystentka, która prowadzi Twoją firmę na co dzień. Pakiet 5h lub 10h miesięcznie.',
    },
    badge: 'Współpraca',
    pair: 'Flowtly × Gaballa',
    lede: 'Chcesz uporządkować firmę, ale nie masz na to czasu?',
    headline: 'Jedna osoba, jeden system — i wszystko ',
    headlineAccent: 'działa.',
    system: {
      number: '/01',
      label: 'System',
      body: 'Trzyma całą Twoją firmę w jednym miejscu — finanse, projekty, faktury.',
    },
    assistant: {
      number: '/02',
      label: 'Asystentka',
      name: 'Ewelina Gaballa',
      body: 'Prowadzi Twoją firmę na co dzień — kalendarz, komunikacja, administracja, finanse.',
    },
    packageLabel: 'W pakiecie',
    packageBadge: '5h lub 10h / miesięcznie',
    packageChips: ['Kalendarz', 'Komunikacja', 'Administracja', 'Finanse'],
    closing: {
      text: 'Spokój, porządek i ',
      accent: 'sprawczość.',
      brandPair: 'Flowtly · Gaballa',
      ctaLabel: 'Umów rozmowę',
    },
    portraitAlt: 'Ewelina Gaballa',
  },
  en: {
    meta: {
      title: 'Flowtly × Gaballa — Your back office that simply works',
      description:
        'Flowtly and Ewelina Gaballa together: one system and one assistant running your company day to day. A 5h or 10h monthly package.',
    },
    badge: 'Partnership',
    pair: 'Flowtly × Gaballa',
    lede: 'Want to get your company in order but have no time for it?',
    headline: 'One person, one system — and everything ',
    headlineAccent: 'works.',
    system: {
      number: '/01',
      label: 'System',
      body: 'Keeps your whole company in one place — finances, projects, invoices.',
    },
    assistant: {
      number: '/02',
      label: 'Assistant',
      name: 'Ewelina Gaballa',
      body: 'Runs your company day to day — calendar, communication, administration, finances.',
    },
    packageLabel: 'In the package',
    packageBadge: '5h or 10h / monthly',
    packageChips: ['Calendar', 'Communication', 'Administration', 'Finances'],
    closing: {
      text: 'Calm, order and ',
      accent: 'momentum.',
      brandPair: 'Flowtly · Gaballa',
      ctaLabel: 'Book a call',
    },
    portraitAlt: 'Ewelina Gaballa',
  },
};
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build succeeds (file is not imported yet, but must type-check).

- [ ] **Step 3: Commit**

```bash
git add site/src/content/flowtly.ts
git commit -m "Add Flowtly partnership page content (PL + EN)"
```

---

## Task 3: Create the `Flowtly.astro` component

**Files:**
- Create: `site/src/components/Flowtly.astro`

- [ ] **Step 1: Create `site/src/components/Flowtly.astro`**

The component renders the single-screen panel from the mockup, recolored to the site's sage/terracotta palette. Section background is the warm cream (`--color-bg-alt`); cards are the lighter cream (`--color-bg`). The `×` divider is a 3-column grid (`1fr auto 1fr`) on desktop, stacked on mobile.

```astro
---
import type { Locale } from '../content/site';
import { flowtly } from '../content/flowtly';
import portrait from '../assets/images/about.png';
import { Image } from 'astro:assets';

type Props = { locale: Locale };
const { locale } = Astro.props;
const f = flowtly[locale];
const base = locale === 'pl' ? '' : '/en';
---

<section class="flowtly">
  <div class="container flowtly__panel">
    <header class="flowtly__top">
      <div class="flowtly__brandline">
        <span class="flowtly__badge">{f.badge}</span>
        <span class="flowtly__pair">{f.pair}</span>
      </div>
      <span class="wordmark">flowtly<span class="wordmark__dot">.</span></span>
    </header>

    <div class="flowtly__hero">
      <p class="flowtly__lede">{f.lede}</p>
      <h1 class="flowtly__headline">{f.headline}<em>{f.headlineAccent}</em></h1>
    </div>

    <div class="flowtly__cross">
      <article class="fcard">
        <div class="fcard__head">
          <span class="fcard__num">{f.system.number}</span>
          <span class="fcard__label">{f.system.label}</span>
        </div>
        <div class="fcard__body">
          <span class="wordmark wordmark--lg">flowtly<span class="wordmark__dot">.</span></span>
        </div>
        <p class="fcard__text">{f.system.body}</p>
      </article>

      <div class="flowtly__x" aria-hidden="true">×</div>

      <article class="fcard">
        <div class="fcard__head">
          <span class="fcard__num">{f.assistant.number}</span>
          <span class="fcard__label">{f.assistant.label}</span>
        </div>
        <div class="fcard__body fcard__body--person">
          <Image
            src={portrait}
            alt={f.portraitAlt}
            widths={[96, 144, 192]}
            sizes="96px"
            class="fcard__photo"
            loading="eager"
          />
          <span class="fcard__name">{f.assistant.name}</span>
        </div>
        <p class="fcard__text">{f.assistant.body}</p>
      </article>
    </div>

    <div class="flowtly__package">
      <span class="flowtly__pkglabel">{f.packageLabel}</span>
      <div class="flowtly__chips">
        <span class="chip chip--badge">{f.packageBadge}</span>
        {f.packageChips.map((c) => <span class="chip">{c}</span>)}
      </div>
    </div>

    <footer class="flowtly__closing">
      <p class="flowtly__tagline">{f.closing.text}<em>{f.closing.accent}</em></p>
      <div class="flowtly__closeright">
        <span class="flowtly__closepair">{f.closing.brandPair}</span>
        <span class="flowtly__closelinks">
          <a href="https://flowtly.eu" target="_blank" rel="noopener noreferrer">flowtly.eu</a>
          <span aria-hidden="true">/</span>
          <a href={`${base}/`}>gaballa.pl</a>
          <span aria-hidden="true">/</span>
          <a href={`${base}/#contact`}>{f.closing.ctaLabel}</a>
        </span>
      </div>
    </footer>
  </div>
</section>

<style>
  .flowtly {
    background: var(--color-bg-alt);
    padding-block: clamp(2.5rem, 6vw, 5rem);
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
  }

  .flowtly__panel {
    width: 100%;
  }

  .flowtly__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: clamp(2rem, 5vw, 3.5rem);
  }

  .flowtly__brandline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .flowtly__badge {
    display: inline-block;
    padding: 0.35rem 0.7rem;
    border-radius: var(--radius-sm);
    background: var(--color-sage-deep);
    color: var(--color-bg);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .flowtly__pair {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-ink-mute);
  }

  .wordmark {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: var(--color-ink);
  }

  .wordmark__dot {
    color: var(--color-terra-deep);
  }

  .wordmark--lg {
    font-size: clamp(1.75rem, 3vw, 2.4rem);
  }

  .flowtly__hero {
    margin-bottom: clamp(2rem, 5vw, 3.5rem);
  }

  .flowtly__lede {
    font-size: 1.1875rem;
    color: var(--color-ink-mute);
    margin: 0 0 0.75rem;
    max-width: none;
  }

  .flowtly__headline {
    margin: 0;
    max-width: 18ch;
  }

  .flowtly__headline em {
    font-style: italic;
    color: var(--color-terra-deep);
  }

  .flowtly__cross {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: stretch;
    position: relative;
  }

  .fcard {
    background: var(--color-bg);
    border: 1px solid var(--color-line);
    border-radius: var(--radius-lg);
    padding: clamp(1.5rem, 3vw, 2.25rem);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .fcard__head {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
  }

  .fcard__num {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--color-sage-deep);
    letter-spacing: 0.02em;
  }

  .fcard__label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-ink-mute);
  }

  .fcard__body {
    flex: 1;
    display: flex;
    align-items: center;
    min-height: 5.5rem;
  }

  .fcard__body--person {
    gap: 1rem;
  }

  .fcard__photo {
    width: 72px;
    height: 72px;
    border-radius: 999px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .fcard__name {
    font-family: var(--font-serif);
    font-size: clamp(1.4rem, 2.5vw, 1.85rem);
    line-height: 1.15;
  }

  .fcard__text {
    margin: 0;
    color: var(--color-ink-soft);
    font-size: 0.975rem;
  }

  .flowtly__x {
    align-self: center;
    justify-self: center;
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    border: 1px solid var(--color-line);
    background: var(--color-bg);
    color: var(--color-sage-deep);
    font-size: 1.1rem;
  }

  .flowtly__package {
    margin-top: clamp(2rem, 5vw, 3.5rem);
  }

  .flowtly__pkglabel {
    display: block;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-ink-mute);
    margin-bottom: 0.85rem;
  }

  .flowtly__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .chip {
    display: inline-block;
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background: color-mix(in srgb, var(--color-sage) 14%, var(--color-bg));
    color: var(--color-sage-deep);
  }

  .chip--badge {
    background: var(--color-ink);
    color: var(--color-bg);
  }

  .flowtly__closing {
    margin-top: clamp(2rem, 5vw, 3.5rem);
    padding-top: 1.75rem;
    border-top: 1px solid var(--color-line);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .flowtly__tagline {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(1.25rem, 2.5vw, 1.7rem);
    line-height: 1.2;
  }

  .flowtly__tagline em {
    font-style: italic;
    color: var(--color-terra-deep);
  }

  .flowtly__closeright {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    text-align: right;
  }

  .flowtly__closepair {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-ink-mute);
  }

  .flowtly__closelinks {
    display: flex;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: var(--color-ink-mute);
  }

  .flowtly__closelinks a {
    color: var(--color-sage-deep);
    text-decoration: none;
  }

  .flowtly__closelinks a:hover {
    color: var(--color-terra-deep);
  }

  @media (min-width: 800px) {
    .flowtly__cross {
      grid-template-columns: 1fr auto 1fr;
      gap: 0;
    }

    .flowtly__x {
      margin-inline: -1.375rem;
      z-index: 1;
    }
  }
</style>
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build succeeds (component compiles; not yet routed).

- [ ] **Step 3: Commit**

```bash
git add site/src/components/Flowtly.astro
git commit -m "Add Flowtly partnership page component"
```

---

## Task 4: Create the Flowtly page routes

**Files:**
- Create: `site/src/pages/flowtly.astro`
- Create: `site/src/pages/en/flowtly.astro`

- [ ] **Step 1: Create `site/src/pages/flowtly.astro` (PL)**

```astro
---
import Base from '../layouts/Base.astro';
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
import Flowtly from '../components/Flowtly.astro';
import { flowtly } from '../content/flowtly';

const locale = 'pl' as const;
---

<Base
  locale={locale}
  pageTitle={flowtly.pl.meta.title}
  pageDescription={flowtly.pl.meta.description}
  path="/flowtly"
>
  <Nav locale={locale} />
  <main>
    <Flowtly locale={locale} />
  </main>
  <Footer locale={locale} />
</Base>
```

- [ ] **Step 2: Create `site/src/pages/en/flowtly.astro` (EN)**

```astro
---
import Base from '../../layouts/Base.astro';
import Nav from '../../components/Nav.astro';
import Footer from '../../components/Footer.astro';
import Flowtly from '../../components/Flowtly.astro';
import { flowtly } from '../../content/flowtly';

const locale = 'en' as const;
---

<Base
  locale={locale}
  pageTitle={flowtly.en.meta.title}
  pageDescription={flowtly.en.meta.description}
  path="/en/flowtly"
>
  <Nav locale={locale} />
  <main>
    <Flowtly locale={locale} />
  </main>
  <Footer locale={locale} />
</Base>
```

- [ ] **Step 3: Verify build and routes**

Run: `npm run build`
Expected: build succeeds; `dist/flowtly/index.html` and `dist/en/flowtly/index.html` exist.

Run: `ls dist/flowtly dist/en/flowtly`
Expected: both directories contain `index.html`.

- [ ] **Step 4: Commit**

```bash
git add site/src/pages/flowtly.astro site/src/pages/en/flowtly.astro
git commit -m "Add /flowtly page routes (PL + EN)"
```

---

## Task 5: Add the Flowtly link to the navigation

**Files:**
- Modify: `site/src/components/Nav.astro`

- [ ] **Step 1: Add the Flowtly link**

In `Nav.astro`, inside `<nav class="nav__links">`, add a Flowtly link between the testimonials and contact links. The Flowtly link points to the full page (`${base}/flowtly`), unlike the other anchor links:

```astro
      <a href={`${base}/#testimonials`}>{c.nav.testimonials}</a>
      <a href={`${base}/flowtly`}>{c.nav.flowtly}</a>
      <a href={`${base}/#contact`}>{c.nav.contact}</a>
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build succeeds.

Run: `grep -o '/flowtly' dist/index.html | head -1`
Expected: prints `/flowtly` (link present in PL homepage nav).

- [ ] **Step 3: Commit**

```bash
git add site/src/components/Nav.astro
git commit -m "Add Flowtly link to site navigation"
```

---

## Task 6: Add business disclosure + certification badge to the footer

**Files:**
- Modify: `site/src/components/Footer.astro`

- [ ] **Step 1: Import `business` in the footer frontmatter**

Change the import block at the top of `Footer.astro` to also import `business`:

```astro
---
import type { Locale } from '../content/site';
import { content, business } from '../content/site';

type Props = { locale: Locale };
const { locale } = Astro.props;
const c = content[locale];
const base = locale === 'pl' ? '' : '/en';
const year = new Date().getFullYear();
---
```

- [ ] **Step 2: Add the cert badge and disclosure line to the brand block**

Replace the `<div class="footer__brand">` block with:

```astro
    <div class="footer__brand">
      <span class="footer__name">Ewelina Gaballa</span>
      <span class="footer__tag">{c.footer.tagline}</span>
      <a class="footer__cert" href={`${base}/flowtly`}>
        <span class="footer__cert-mark">flowtly<span class="footer__cert-dot">.</span></span>
        <span class="footer__cert-check" aria-hidden="true">✓</span>
        <span class="footer__cert-label">{c.footer.certifiedBadge}</span>
      </a>
      <span class="footer__legal">
        NIP {business.nip} · REGON {business.regon}<br />{business.address}
      </span>
    </div>
```

- [ ] **Step 3: Add the Flowtly link to the footer link row**

Replace the `<nav class="footer__links">` block with:

```astro
    <nav class="footer__links" aria-label="Footer">
      <a href={`${base}/flowtly`}>{c.nav.flowtly}</a>
      <a href={`${base}/privacy`}>{c.footer.privacy}</a>
      <a href={`${base}/cookies`}>{c.footer.cookies}</a>
      <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a>
    </nav>
```

- [ ] **Step 4: Add styles for the cert badge and disclosure line**

In the `<style>` block of `Footer.astro`, add the following rules (after the `.footer__tag` rule):

```css
  .footer__cert {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-start;
    margin-top: 0.4rem;
    padding: 0.4rem 0.7rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--color-bg) 28%, transparent);
    text-decoration: none;
    transition: border-color 0.15s ease, background 0.15s ease;
  }

  .footer__cert:hover {
    background: color-mix(in srgb, var(--color-bg) 8%, transparent);
    border-color: color-mix(in srgb, var(--color-bg) 45%, transparent);
  }

  .footer__cert-mark {
    font-weight: 600;
    color: var(--color-bg);
    letter-spacing: -0.02em;
  }

  .footer__cert-dot {
    color: var(--color-terra);
  }

  .footer__cert-check {
    color: var(--color-sage);
    font-size: 0.8rem;
  }

  .footer__cert-label {
    color: color-mix(in srgb, var(--color-bg) 75%, transparent);
    font-size: 0.78rem;
    letter-spacing: 0.02em;
  }

  .footer__legal {
    color: color-mix(in srgb, var(--color-bg) 55%, transparent);
    font-size: 0.8125rem;
    line-height: 1.5;
    margin-top: 0.6rem;
  }
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: build succeeds.

Run: `grep -c 'Certified Flowtly Practitioner' dist/index.html`
Expected: prints `1`.

Run: `grep -o 'REGON \[REGON\]' dist/en/index.html`
Expected: prints `REGON [REGON]` (disclosure line rendered on EN pages too).

- [ ] **Step 6: Commit**

```bash
git add site/src/components/Footer.astro
git commit -m "Add business disclosure and Flowtly certification badge to footer"
```

---

## Task 7: RODO/GDPR content review in `legal.ts`

**Files:**
- Modify: `site/src/content/legal.ts`

- [ ] **Step 1: Import `business` and bump the update dates**

Change the import line at the top from `import type { Locale } from './site';` to:

```ts
import type { Locale } from './site';
import { business } from './site';
```

Change the date constants to:

```ts
const LAST_UPDATED_PL = 'Ostatnia aktualizacja: 18 maja 2026';
const LAST_UPDATED_EN = 'Last updated: 18 May 2026';
```

- [ ] **Step 2: Expand the PL "Administrator danych" section**

Replace the body string of the PL `privacy` "Administrator danych" section with:

```ts
          `Administratorem danych osobowych jest Ewelina Gaballa, prowadząca jednoosobową działalność gospodarczą, NIP ${business.nip}, REGON ${business.regon}, z siedzibą pod adresem ${business.address}. Kontakt w sprawach ochrony danych: ewelina.gaballa@gmail.com.`,
```

(Note: this string uses backticks, not single quotes.)

- [ ] **Step 3: Add a sentence to the PL "Zakres przetwarzanych danych" section**

Append this sentence to the existing body string of the PL "Zakres przetwarzanych danych" section (inside the same string, after the last sentence):

```
 Podanie danych jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi na zapytanie i realizacji usług.
```

- [ ] **Step 4: Add three new PL sections before "Zmiany polityki"**

In the PL `privacy.sections` array, insert these three section objects immediately before the `{ heading: 'Zmiany polityki', ... }` object:

```ts
      {
        heading: 'Logi serwera',
        body: [
          'Serwis jest hostowany na platformie Firebase Hosting (Google Cloud). Serwer hostingu automatycznie zapisuje w logach standardowe dane techniczne — m.in. adres IP, datę i godzinę zapytania oraz typ przeglądarki — w celu zapewnienia bezpieczeństwa i poprawnego działania serwisu. Podstawą prawną jest uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO).',
        ],
      },
      {
        heading: 'Przekazywanie danych poza EOG',
        body: [
          'Korzystamy z narzędzi dostawców (Google Workspace, Firebase Hosting), którzy mogą przetwarzać dane na serwerach poza Europejskim Obszarem Gospodarczym. W takich przypadkach przekazanie danych odbywa się na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską lub innych mechanizmów zgodnych z RODO.',
        ],
      },
      {
        heading: 'Profilowanie i decyzje automatyczne',
        body: [
          'Nie podejmujemy decyzji w sposób zautomatyzowany i nie profilujemy osób, których dane dotyczą.',
        ],
      },
```

- [ ] **Step 5: Expand the EN "Data controller" section**

Replace the body string of the EN `privacy` "Data controller" section with:

```ts
          `The data controller is Ewelina Gaballa, operating as a registered sole trader (jednoosobowa działalność gospodarcza), NIP ${business.nip}, REGON ${business.regon}, registered address ${business.address}. For data protection matters: ewelina.gaballa@gmail.com.`,
```

(Note: this string uses backticks, not single quotes.)

- [ ] **Step 6: Add a sentence to the EN "Scope of data processed" section**

Append this sentence to the existing body string of the EN "Scope of data processed" section (inside the same string, after the last sentence):

```
 Providing this data is voluntary but necessary to respond to your enquiry and deliver services.
```

- [ ] **Step 7: Add three new EN sections before "Changes"**

In the EN `privacy.sections` array, insert these three section objects immediately before the `{ heading: 'Changes', ... }` object:

```ts
      {
        heading: 'Server logs',
        body: [
          'The site is hosted on Firebase Hosting (Google Cloud). The hosting server automatically records standard technical data in its logs — including IP address, the date and time of the request, and browser type — to keep the site secure and working correctly. The legal basis is the legitimate interest of the controller (Art. 6(1)(f) GDPR).',
        ],
      },
      {
        heading: 'International transfers',
        body: [
          'We use provider tools (Google Workspace, Firebase Hosting) that may process data on servers outside the European Economic Area. Where this happens, the transfer relies on Standard Contractual Clauses approved by the European Commission or other GDPR-compliant mechanisms.',
        ],
      },
      {
        heading: 'Profiling and automated decisions',
        body: [
          'We do not make automated decisions and do not profile data subjects.',
        ],
      },
```

- [ ] **Step 8: Verify build and content**

Run: `npm run build`
Expected: build succeeds.

Run: `grep -c 'REGON' dist/privacy/index.html`
Expected: prints `1` or more (controller section now mentions REGON).

Run: `grep -c 'International transfers' dist/en/privacy/index.html`
Expected: prints `1`.

- [ ] **Step 9: Commit**

```bash
git add site/src/content/legal.ts
git commit -m "Expand privacy policy: business disclosure, server logs, transfers"
```

---

## Task 8: Final full-build verification

- [ ] **Step 1: Clean build**

Run: `rm -rf dist && npm run build`
Expected: build succeeds with no errors or warnings about missing references.

- [ ] **Step 2: Confirm all expected routes exist**

Run: `ls dist dist/en dist/flowtly dist/en/flowtly dist/privacy dist/cookies`
Expected: each directory exists and contains `index.html`.

- [ ] **Step 3: Spot-check the Flowtly page output**

Run: `grep -o 'Jedna osoba' dist/flowtly/index.html`
Expected: prints `Jedna osoba`.

Run: `grep -o 'One person' dist/en/flowtly/index.html`
Expected: prints `One person`.

- [ ] **Step 4: Visual review**

Start the preview server (`npm run dev`) and open `/flowtly`, `/en/flowtly`, `/`, `/privacy`. Confirm:
- `/flowtly` matches mockup #2 structure, in sage/terracotta (no indigo).
- Footer shows the cert badge and the `NIP / REGON / address` disclosure line on every page.
- Nav and footer Flowtly links navigate to the new page.
- Privacy policy shows the controller disclosure plus the three new sections.

---

## Self-Review Notes

- **Spec coverage:** A1 (Task 1 + 6), A2 (Task 7), B (Tasks 2–5), C (Task 6) — all covered.
- **Type consistency:** `FlowtlyContent` defined in Task 2 is consumed unchanged by `Flowtly.astro` (Task 3) and the page routes (Task 4). `business` shape (`legalName`/`nip`/`regon`/`address`) defined in Task 1 is consumed by Task 6 (`nip`, `regon`, `address`) and Task 7 (`nip`, `regon`, `address`); `legalName` is currently unused but kept for completeness of the disclosure record.
- **Placeholders:** `[NIP]` / `[REGON]` / `[ADRES]` are intentional content placeholders for the owner to fill, not plan gaps.
