export const translations = {
  en: {
    home: 'Home',
    professional: 'Profession',
    volunteer: 'Volunteering',
    blog: 'Blog',
    tags: 'Tags',
    archive: 'Archive',
    language: 'Language',
    german: 'Deutsch',
    english: 'English',
    blogPosts: 'Blog Posts',
    postsTaggedWith: 'Posts tagged with',
    posts: 'posts',
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
    blogPosts: 'Blog-Artikel',
    postsTaggedWith: 'Artikel mit Tag',
    posts: 'Artikel',
  },
};

export function getTranslation(locale: 'en' | 'de', key: keyof typeof translations.en): string {
  return translations[locale][key] || key;
}

export function getAlternateLocales(currentLocale: 'en' | 'de'): ('en' | 'de')[] {
  return ['en', 'de'].filter(locale => locale !== currentLocale);
}
