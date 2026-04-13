import type { Locale } from './site';

export type LegalPage = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const LAST_UPDATED_PL = 'Ostatnia aktualizacja: 13 kwietnia 2026';
const LAST_UPDATED_EN = 'Last updated: 13 April 2026';

export const privacy: Record<Locale, LegalPage> = {
  pl: {
    title: 'Polityka prywatności',
    updated: LAST_UPDATED_PL,
    intro:
      'Niniejszy dokument opisuje, w jaki sposób przetwarzamy dane osobowe osób korzystających z serwisu gaballa.pl oraz osób kontaktujących się z nami w związku ze świadczeniem usług asystenckich.',
    sections: [
      {
        heading: 'Administrator danych',
        body: [
          'Administratorem danych osobowych jest Ewelina Gaballa, prowadząca działalność jako niezależna wirtualna asystentka. Kontakt w sprawach ochrony danych: ewelina.gaballa@gmail.com.',
        ],
      },
      {
        heading: 'Zakres przetwarzanych danych',
        body: [
          'Przetwarzamy wyłącznie dane, które przekazujesz nam dobrowolnie — np. imię i nazwisko, adres e-mail, numer telefonu, nazwę firmy oraz treść wiadomości, którą do nas kierujesz. Dane te są niezbędne do przygotowania oferty, prowadzenia korespondencji i realizacji usług.',
        ],
      },
      {
        heading: 'Cele i podstawa prawna',
        body: [
          'Dane przetwarzamy w celu: (1) odpowiedzi na zapytania i realizacji usług — art. 6 ust. 1 lit. b RODO; (2) wypełnienia obowiązków prawnych, np. księgowych — art. 6 ust. 1 lit. c RODO; (3) uzasadnionego interesu administratora, np. obrony przed roszczeniami — art. 6 ust. 1 lit. f RODO.',
        ],
      },
      {
        heading: 'Czas przechowywania',
        body: [
          'Dane związane z realizacją umowy przechowujemy przez okres świadczenia usług oraz przez czas wymagany przepisami (np. podatkowymi). Dane kontaktowe związane z zapytaniami, które nie zakończyły się współpracą, usuwamy po 12 miesiącach.',
        ],
      },
      {
        heading: 'Odbiorcy danych',
        body: [
          'Dane mogą być udostępniane zaufanym podmiotom wspierającym działalność: dostawcom poczty i narzędzi do komunikacji (Google Workspace), dostawcy hostingu (Firebase Hosting / Google Cloud), narzędziom do zarządzania projektami oraz biurom księgowym — wyłącznie w zakresie niezbędnym do realizacji usług.',
        ],
      },
      {
        heading: 'Twoje prawa',
        body: [
          'Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, a także wniesienia sprzeciwu wobec przetwarzania oraz skargi do Prezesa Urzędu Ochrony Danych Osobowych. Kontakt w tych sprawach: ewelina.gaballa@gmail.com.',
        ],
      },
      {
        heading: 'Bezpieczeństwo',
        body: [
          'Stosujemy środki techniczne i organizacyjne adekwatne do rodzaju przetwarzanych danych — m.in. szyfrowane połączenia (HTTPS), uwierzytelnianie wieloskładnikowe i ograniczenie dostępu do danych wyłącznie do osób, którym jest to niezbędne.',
        ],
      },
      {
        heading: 'Zmiany polityki',
        body: [
          'Polityka może być aktualizowana. Aktualna wersja jest zawsze dostępna na tej stronie.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: LAST_UPDATED_EN,
    intro:
      'This document describes how we process personal data of people visiting gaballa.pl and contacting us about our virtual assistant services.',
    sections: [
      {
        heading: 'Data controller',
        body: [
          'The data controller is Ewelina Gaballa, operating as an independent virtual assistant. For data protection matters: ewelina.gaballa@gmail.com.',
        ],
      },
      {
        heading: 'Scope of data processed',
        body: [
          'We only process data you voluntarily provide \u2014 for example your name, email address, phone number, company name and the content of the message you send us. This data is needed to prepare an offer, correspond with you and deliver services.',
        ],
      },
      {
        heading: 'Purposes and legal basis',
        body: [
          'We process data for: (1) responding to enquiries and providing services \u2014 Art. 6(1)(b) GDPR; (2) complying with legal obligations, e.g. tax/accounting \u2014 Art. 6(1)(c) GDPR; (3) the legitimate interest of the controller, e.g. defending claims \u2014 Art. 6(1)(f) GDPR.',
        ],
      },
      {
        heading: 'Retention period',
        body: [
          'Data related to the delivery of services is retained for the duration of the engagement and for the period required by applicable laws (e.g. tax law). Contact data from enquiries that do not result in an engagement is deleted after 12 months.',
        ],
      },
      {
        heading: 'Recipients',
        body: [
          'Data may be shared with trusted providers supporting our work: email and communication providers (Google Workspace), hosting provider (Firebase Hosting / Google Cloud), project-management tools and accounting offices \u2014 strictly to the extent needed to deliver services.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You have the right to access your data, rectify it, erase it, restrict its processing, port it, object to processing, and lodge a complaint with the Polish Data Protection Authority (UODO). To exercise these rights: ewelina.gaballa@gmail.com.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'We apply technical and organisational measures appropriate to the data processed \u2014 including HTTPS, multi-factor authentication, and access limited to people who need it.',
        ],
      },
      {
        heading: 'Changes',
        body: ['This policy may be updated. The current version is always available on this page.'],
      },
    ],
  },
};

export const cookies: Record<Locale, LegalPage> = {
  pl: {
    title: 'Polityka cookies',
    updated: LAST_UPDATED_PL,
    intro:
      'Serwis gaballa.pl wykorzystuje pliki cookies w minimalnym zakresie — wyłącznie niezbędne do prawidłowego działania strony. Nie korzystamy z plików cookies o charakterze marketingowym ani profilowania.',
    sections: [
      {
        heading: 'Czym są cookies',
        body: [
          'Cookies to małe pliki tekstowe zapisywane przez przeglądarkę na Twoim urządzeniu. Pozwalają rozpoznać urządzenie i odpowiednio wyświetlić stronę.',
        ],
      },
      {
        heading: 'Jakich cookies używamy',
        body: [
          'Obecnie serwis nie korzysta z plików cookies stron trzecich ani z narzędzi analitycznych. Jeżeli w przyszłości wdrożymy takie narzędzia, zaktualizujemy tę informację i — jeśli będzie to wymagane — poprosimy o Twoją zgodę.',
        ],
      },
      {
        heading: 'Zarządzanie cookies',
        body: [
          'W każdej chwili możesz zmienić ustawienia plików cookies w swojej przeglądarce — zablokować je w całości, usunąć lub dopuszczać wybiórczo. Szczegóły znajdziesz w dokumentacji swojej przeglądarki.',
        ],
      },
    ],
  },
  en: {
    title: 'Cookies Policy',
    updated: LAST_UPDATED_EN,
    intro:
      'gaballa.pl uses cookies only minimally \u2014 strictly those needed for the site to work. We do not use marketing or profiling cookies.',
    sections: [
      {
        heading: 'What cookies are',
        body: [
          'Cookies are small text files stored by your browser on your device. They allow the site to recognise your device and display properly.',
        ],
      },
      {
        heading: 'Which cookies we use',
        body: [
          'The site currently uses no third-party cookies and no analytics. If we ever add such tools, we will update this page and, where required, ask for your consent.',
        ],
      },
      {
        heading: 'Managing cookies',
        body: [
          'You can change your browser\u2019s cookie settings at any time \u2014 block them, clear them, or allow them selectively. See your browser\u2019s documentation for details.',
        ],
      },
    ],
  },
};
