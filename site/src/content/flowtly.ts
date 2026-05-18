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
  helps: {
    eyebrow: string;
    title: string;
    intro: string;
    points: { heading: string; body: string }[];
  };
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
    helps: {
      eyebrow: 'Dlaczego to działa',
      title: 'Porządek, który dzieje się sam',
      intro:
        'Większość właścicieli firm nie potrzebuje kolejnego narzędzia ani kolejnej porady. Potrzebuje, żeby back office po prostu się działał — bez pilnowania, bez przypominania, bez wieczornego nadrabiania.',
      points: [
        {
          heading: 'Dla kogo to jest',
          body: 'Dla founderów, właścicieli i osób zarządzających, którym administracja, faktury i komunikacja zjadają najlepsze godziny dnia. Jeśli wieczorami nadrabiasz to, co powinno zamknąć się w ciągu dnia — to jest dla Ciebie.',
        },
        {
          heading: 'Co znika z Twojej głowy',
          body: 'Wystawianie i pilnowanie faktur, przypominanie o płatnościach, porządek w dokumentach, odpisywanie na maile, koordynacja kalendarza. To wszystko przestaje być Twoim zadaniem — i Twoim zmartwieniem.',
        },
        {
          heading: 'Jak to działa',
          body: 'Flowtly trzyma całą firmę w jednym miejscu — finanse, projekty, faktury. Ewelina prowadzi ten system za Ciebie w ustalonym pakiecie 5 lub 10 godzin miesięcznie. Jeden system, jedna osoba, stały rytm.',
        },
        {
          heading: 'Efekt',
          body: 'Koniec z „muszę się tym w końcu zająć”. Sprawy domykają się na czas, dokumenty są na swoim miejscu, a Ty odzyskujesz głowę i godziny na to, co naprawdę popycha firmę do przodu.',
        },
      ],
    },
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
    helps: {
      eyebrow: 'Why it works',
      title: 'Order that runs itself',
      intro:
        'Most business owners don’t need another tool or another piece of advice. They need the back office to simply happen — without watching it, without chasing it, without catching up on it at night.',
      points: [
        {
          heading: 'Who it’s for',
          body: 'For founders, owners and managers whose admin, invoices and communication eat the best hours of the day. If you spend your evenings catching up on what should have closed during them, this is for you.',
        },
        {
          heading: 'What leaves your plate',
          body: 'Issuing and chasing invoices, payment reminders, keeping documents in order, answering email, coordinating the calendar. None of it stays your task — or your worry.',
        },
        {
          heading: 'How it works',
          body: 'Flowtly keeps the whole company in one place — finances, projects, invoices. Ewelina runs that system for you within a fixed block of 5 or 10 hours a month. One system, one person, a steady rhythm.',
        },
        {
          heading: 'The outcome',
          body: 'No more “I really need to deal with that.” Things close on time, documents sit where they belong, and you get back your head and your hours for the work that actually moves the company forward.',
        },
      ],
    },
  },
};
