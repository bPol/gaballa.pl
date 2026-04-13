export type Locale = 'pl' | 'en';

export type Service = {
  icon: string;
  title: string;
  items: string[];
};

export type Credential = {
  title: string;
  subtitle: string;
  note?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    tools: string;
    credentials: string;
    testimonials: string;
    contact: string;
    langLabel: string;
    otherLang: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    strengthsTitle: string;
    strengths: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Service[];
  };
  tools: {
    eyebrow: string;
    title: string;
    lede: string;
    groups: { label: string; items: string[] }[];
  };
  credentials: {
    eyebrow: string;
    title: string;
    items: Credential[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Testimonial[];
    addYours: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    bookCta: string;
    bookUrl: string;
  };
  footer: {
    tagline: string;
    privacy: string;
    cookies: string;
    rights: string;
  };
};

const EMAIL = 'ewelina.gaballa@gmail.com';
const PHONE = '';
const BOOK_URL = '#contact';

export const content: Record<Locale, SiteContent> = {
  pl: {
    meta: {
      title: 'Ewelina Gaballa — Wirtualna asystentka dla C-level',
      description:
        'Wirtualna asystentka i executive assistant dla kadry zarządzającej. Kalendarz, komunikacja, dokumenty, research i AI w pracy biurowej. PL / EN.',
    },
    nav: {
      about: 'O mnie',
      services: 'Usługi',
      tools: 'Narzędzia',
      credentials: 'Certyfikaty',
      testimonials: 'Opinie',
      contact: 'Kontakt',
      langLabel: 'Język',
      otherLang: 'EN',
    },
    hero: {
      eyebrow: 'Executive & Virtual Assistant',
      title: 'Spokój, porządek i sprawczość — dla zapracowanych liderów.',
      lede: 'Wspieram osoby na stanowiskach C-level w codziennej pracy: kalendarz, komunikacja, dokumenty, research i procesy. Dwujęzycznie (PL/EN), z wykorzystaniem AI tam, gdzie to realnie przyspiesza pracę.',
      primaryCta: 'Porozmawiajmy',
      secondaryCta: 'Zobacz, w czym pomagam',
    },
    about: {
      eyebrow: 'O mnie',
      title: 'Ewelina Gaballa',
      paragraphs: [
        'Od lat wspieram właścicieli firm, founderów i kadrę zarządzającą w tym, co zjada im najwięcej czasu: koordynacji kalendarzy, obsłudze klientów, dokumentach i operacyjnej codzienności. Pracuję tak, żeby decyzje zapadały szybciej, a liderzy mieli głowę dla tego, co najważniejsze.',
        'Współorganizowałam międzynarodowe wydarzenia medyczne (m.in. kurs chirurgii w King Fahad Medical City w Rijadzie), prowadzę komunikację z klientami w Polsce i za granicą, a moja codzienność to Google Workspace, Notion, Asana i narzędzia AI, które realnie skracają czas pracy.',
        'Ukończyłam pięciotygodniowy program Google × SGH "Umiejętności Jutra AI" i na bieżąco korzystam z ChatGPT Pro, Claude i Perplexity w weryfikacji dokumentów, researchu i tłumaczeniach.',
      ],
      strengthsTitle: 'Jak pracuję — według Gallup CliftonStrengths',
      strengths: [
        'Empathy — czytam ludzi i kontekst zanim zadziałam',
        'Harmony — szukam rozwiązań zamiast eskalacji',
        'Deliberative — liczę ryzyka, nie działam pochopnie',
        'Belief — pracuję zgodnie z wartościami, na które mogę się powołać',
        'Achiever — doprowadzam sprawy do końca',
      ],
    },
    services: {
      eyebrow: 'Usługi',
      title: 'W czym konkretnie pomagam',
      lede: 'Pakiet usług dobieramy do Twojej sytuacji — od jednorazowego wsparcia projektowego po stałą współpracę w modelu executive assistant.',
      items: [
        {
          icon: '🗓',
          title: 'Kalendarz i spotkania',
          items: [
            'Złożone kalendarze wieloosobowe i wieloprojektowe',
            'Umawianie, przekładanie i koordynowanie spotkań',
            'Follow-upy, przypomnienia, pilnowanie terminów',
            'Logistyka: loty, hotele, transfery',
          ],
        },
        {
          icon: '✉️',
          title: 'Komunikacja i obsługa klienta',
          items: [
            'Korespondencja mailowa i telefoniczna (PL/EN)',
            'Kontakt z klientami w imieniu firmy',
            'Przypominanie o zadaniach i zobowiązaniach',
            'Dbanie o relację na każdym etapie współpracy',
          ],
        },
        {
          icon: '📄',
          title: 'Dokumenty i administracja',
          items: [
            'Tworzenie dokumentów biznesowych',
            'Weryfikacja dokumentów z pomocą AI',
            'Porządkowanie plików i zasobów na dysku',
            'Procedury, instrukcje, bazy danych',
            'Podstawowa obsługa WordPressa',
          ],
        },
        {
          icon: '🔍',
          title: 'Research i pozyskiwanie kontaktów',
          items: [
            'Wyszukiwanie leadów i klientów (Hunter.io)',
            'Przygotowanie kampanii mailingowych',
            'Research inwestorów dla startupów',
            'Aplikowanie do akceleratorów i eventów',
          ],
        },
        {
          icon: '🚀',
          title: 'Wsparcie operacyjne',
          items: [
            'Onboarding nowych klientów — od A do Z',
            'Koordynacja zadań wewnętrznych',
            'Aplikacje do programów akceleratorów',
            'Wsparcie przy prowadzeniu profilu LinkedIn',
          ],
        },
        {
          icon: '🤖',
          title: 'AI w pracy biurowej',
          items: [
            'Weryfikacja i korekta dokumentów z AI',
            'Tłumaczenia EN ↔ PL z użyciem AI',
            'Automatyzacja powtarzalnych zadań biurowych',
          ],
        },
        {
          icon: '🏠',
          title: 'Wynajem krótkoterminowy — Airbnb',
          items: [
            'Obsługa rezerwacji i komunikacja z gośćmi',
            'Koordynacja check-in / check-out',
            'Dbanie o opinie i sprawne działanie obiektu',
          ],
        },
      ],
    },
    tools: {
      eyebrow: 'Narzędzia',
      title: 'Z czego korzystam na co dzień',
      lede: 'Pracuję w sprawdzonym stacku, który dobieram do narzędzi klienta. Nowe platformy wdrażam szybko.',
      groups: [
        {
          label: 'AI',
          items: ['ChatGPT Pro', 'Claude', 'Gemini', 'Perplexity', 'NotebookLM', 'Napkin AI'],
        },
        {
          label: 'Google Workspace',
          items: ['Gmail', 'Kalendarz', 'Drive', 'Docs', 'Sheets', 'Meet'],
        },
        {
          label: 'Projekty i zadania',
          items: ['Asana', 'ClickUp', 'Trello', 'Notion', 'TeamGantt'],
        },
        {
          label: 'Outreach i CRM',
          items: ['Hunter.io', 'HubSpot'],
        },
        {
          label: 'Dokumenty i design',
          items: ['Canva', 'WEPIK', 'WordPress'],
        },
        {
          label: 'Inne',
          items: ['StreamYard', 'CapCut', 'Outlook', 'Lotus Notes'],
        },
      ],
    },
    credentials: {
      eyebrow: 'Certyfikaty i doświadczenie',
      title: 'Potwierdzone kompetencje',
      items: [
        {
          title: 'Google AI Essentials',
          subtitle: 'Google × SGH × Coursera',
          note: 'Pięciotygodniowy program "Umiejętności Jutra AI" — wykorzystanie AI w rozwoju firmy. 2025.',
        },
        {
          title: 'King Fahad Medical City',
          subtitle: 'Certificate of Appreciation',
          note: 'Organizacja 2. edycji kursu Endoscopic Sinus Surgery & Skull Base Reconstruction, Rijad, 2024.',
        },
        {
          title: 'Gallup CliftonStrengths 34',
          subtitle: 'Pełny profil talentów',
          note: 'Top 5: Empathy · Harmony · Deliberative · Belief · Achiever. Dominująca domena: Executing.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Opinie',
      title: 'Co mówią ludzie, z którymi pracuję',
      lede: 'Kolejne opinie pojawią się wkrótce — poniżej wybrane głosy od osób, z którymi miałam przyjemność współpracować.',
      items: [
        {
          quote:
            'Ewelina to osoba, na której można polegać — rozumie kontekst, myśli o krok do przodu i sprawia, że skomplikowane rzeczy przestają być skomplikowane.',
          name: 'Hatem Badr',
          role: 'iMedical LLC',
        },
      ],
      addYours: 'Pracowaliśmy razem? Chętnie dodam Twoją opinię.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Porozmawiajmy o Twoich zadaniach',
      lede: 'Najlepiej zacząć od krótkiej rozmowy — 20 minut wystarczy, żeby zorientować się, czy i jak mogę pomóc. Bez zobowiązań.',
      emailLabel: 'E-mail',
      email: EMAIL,
      phoneLabel: 'Telefon',
      phone: PHONE,
      bookCta: 'Napisz do mnie',
      bookUrl: `mailto:${EMAIL}`,
    },
    footer: {
      tagline: 'Executive & Virtual Assistant — PL / EN',
      privacy: 'Polityka prywatności',
      cookies: 'Cookies',
      rights: 'Wszelkie prawa zastrzeżone.',
    },
  },
  en: {
    meta: {
      title: 'Ewelina Gaballa — Executive Assistant for C-level leaders',
      description:
        'Executive and virtual assistant for busy leaders. Calendars, communication, documents, research and AI-powered office work. PL / EN.',
    },
    nav: {
      about: 'About',
      services: 'Services',
      tools: 'Tools',
      credentials: 'Credentials',
      testimonials: 'Testimonials',
      contact: 'Contact',
      langLabel: 'Language',
      otherLang: 'PL',
    },
    hero: {
      eyebrow: 'Executive & Virtual Assistant',
      title: 'Calm, order and momentum — for busy leaders.',
      lede: 'I support C-level executives with the work that fills their calendar: scheduling, communication, documents, research and day-to-day operations. Bilingual (PL / EN), with AI used where it actually speeds things up.',
      primaryCta: 'Let\u2019s talk',
      secondaryCta: 'See how I help',
    },
    about: {
      eyebrow: 'About',
      title: 'Ewelina Gaballa',
      paragraphs: [
        'I support business owners, founders and senior leaders with the work that eats their day: calendar coordination, client communication, documents and the operational load in between. My job is to make decisions faster and give leaders space for what actually matters.',
        'I have co-organised international medical events (including a surgery course at King Fahad Medical City in Riyadh), run client communication in Poland and abroad, and live day-to-day in Google Workspace, Notion, Asana and AI tools that measurably cut time-to-done.',
        'I completed the five-week Google \u00d7 SGH "Future Skills: AI" programme and use ChatGPT Pro, Claude and Perplexity daily for document review, research and translation.',
      ],
      strengthsTitle: 'How I work — from Gallup CliftonStrengths',
      strengths: [
        'Empathy \u2014 I read people and context before I act',
        'Harmony \u2014 I look for solutions, not escalation',
        'Deliberative \u2014 I weigh risks; I don\u2019t rush',
        'Belief \u2014 I work to values I can stand behind',
        'Achiever \u2014 I finish what I start',
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'What I actually do',
      lede: 'We shape the engagement around your situation \u2014 from project-based support to a full ongoing executive assistant relationship.',
      items: [
        {
          icon: '🗓',
          title: 'Calendar & meetings',
          items: [
            'Complex multi-person, multi-project calendars',
            'Scheduling, rescheduling and meeting coordination',
            'Follow-ups, reminders, keeping deadlines on track',
            'Travel logistics: flights, hotels, transfers',
          ],
        },
        {
          icon: '✉️',
          title: 'Communication & client care',
          items: [
            'Email and phone communication (PL / EN)',
            'Client contact on behalf of the company',
            'Reminders on tasks and commitments',
            'Nurturing relationships at every stage',
          ],
        },
        {
          icon: '📄',
          title: 'Documents & administration',
          items: [
            'Drafting business documents',
            'AI-assisted document review',
            'Organising files and shared drives',
            'Procedures, playbooks, internal databases',
            'Basic WordPress updates',
          ],
        },
        {
          icon: '🔍',
          title: 'Research & lead generation',
          items: [
            'Lead and client research (Hunter.io)',
            'Preparing outbound email campaigns',
            'Investor research for startups',
            'Applications to accelerators and events',
          ],
        },
        {
          icon: '🚀',
          title: 'Operational support',
          items: [
            'Onboarding new clients \u2014 end to end',
            'Coordinating internal tasks',
            'Accelerator programme applications',
            'LinkedIn profile support',
          ],
        },
        {
          icon: '🤖',
          title: 'AI for office work',
          items: [
            'AI-assisted document review and proofing',
            'EN \u2194 PL translation with AI',
            'Automating repetitive office tasks',
          ],
        },
        {
          icon: '🏠',
          title: 'Short-term rentals \u2014 Airbnb',
          items: [
            'Booking management and guest communication',
            'Check-in / check-out coordination',
            'Reviews and day-to-day property operations',
          ],
        },
      ],
    },
    tools: {
      eyebrow: 'Tools',
      title: 'The stack I work in',
      lede: 'A tested toolkit that I adapt to whatever the client already uses. New platforms come online fast.',
      groups: [
        { label: 'AI', items: ['ChatGPT Pro', 'Claude', 'Gemini', 'Perplexity', 'NotebookLM', 'Napkin AI'] },
        { label: 'Google Workspace', items: ['Gmail', 'Calendar', 'Drive', 'Docs', 'Sheets', 'Meet'] },
        { label: 'Projects & tasks', items: ['Asana', 'ClickUp', 'Trello', 'Notion', 'TeamGantt'] },
        { label: 'Outreach & CRM', items: ['Hunter.io', 'HubSpot'] },
        { label: 'Docs & design', items: ['Canva', 'WEPIK', 'WordPress'] },
        { label: 'Other', items: ['StreamYard', 'CapCut', 'Outlook', 'Lotus Notes'] },
      ],
    },
    credentials: {
      eyebrow: 'Credentials',
      title: 'Proof of work',
      items: [
        {
          title: 'Google AI Essentials',
          subtitle: 'Google \u00d7 SGH \u00d7 Coursera',
          note: 'Five-week "Future Skills: AI" programme on using AI in business. 2025.',
        },
        {
          title: 'King Fahad Medical City',
          subtitle: 'Certificate of Appreciation',
          note: 'Organised the 2nd Endoscopic Sinus Surgery & Skull Base Reconstruction Course, Riyadh, 2024.',
        },
        {
          title: 'Gallup CliftonStrengths 34',
          subtitle: 'Full talent profile',
          note: 'Top 5: Empathy \u00b7 Harmony \u00b7 Deliberative \u00b7 Belief \u00b7 Achiever. Lead domain: Executing.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What people I work with say',
      lede: 'More testimonials coming soon \u2014 below, a few voices from people I\u2019ve had the pleasure of working with.',
      items: [
        {
          quote:
            'Ewelina is someone you can rely on \u2014 she reads the context, thinks a step ahead, and makes complicated things stop being complicated.',
          name: 'Hatem Badr',
          role: 'iMedical LLC',
        },
      ],
      addYours: 'Worked with me? I\u2019d love to add your voice here.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let\u2019s talk about your workload',
      lede: 'The best place to start is a short call \u2014 20 minutes is enough to figure out whether and how I can help. No commitment.',
      emailLabel: 'Email',
      email: EMAIL,
      phoneLabel: 'Phone',
      phone: PHONE,
      bookCta: 'Send me a note',
      bookUrl: `mailto:${EMAIL}`,
    },
    footer: {
      tagline: 'Executive & Virtual Assistant \u2014 PL / EN',
      privacy: 'Privacy Policy',
      cookies: 'Cookies',
      rights: 'All rights reserved.',
    },
  },
};
