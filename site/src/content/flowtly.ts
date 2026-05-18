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
