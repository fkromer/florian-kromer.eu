export const translations = {
  en: {
    home: 'Home',
    professional: 'Professional',
    volunteer: 'Volunteer',
    blog: 'Blog',
    tags: 'Tags',
    archive: 'Archive',
    language: 'Language',
    german: 'Deutsch',
    english: 'English',
  },
  de: {
    home: 'Startseite',
    professional: 'Beruf',
    volunteer: 'Ehrenamt',
    blog: 'Blog',
    tags: 'Tags',
    archive: 'Archiv',
    language: 'Sprache',
    german: 'Deutsch',
    english: 'English',
  },
};

export function getTranslation(locale: 'en' | 'de', key: keyof typeof translations.en): string {
  return translations[locale][key] || key;
}

export function getAlternateLocales(currentLocale: 'en' | 'de'): ('en' | 'de')[] {
  const locales = ['en', 'de'] as const;

  return locales.filter(locale => locale !== currentLocale);
}
