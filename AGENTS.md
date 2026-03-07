# AGENTS.md

## Project structure

The project is based on the theme [astro-zen-blog](https://github.com/larry-xue/astro-zen-blog).
The project structure is as follows:

```
florian-kromer.eu/
├── .devcontainer/                # devcontainer configuration
├── public/                       # static assets
├── scripts/                      # utility scripts
│   └── add-post.js               # script to create new blog posts
├── src/
│   ├── components/               # astro UI components
│   ├── config.ts                 # site configuration
│   ├── content/
│   │   ├── blog/                 # markdown blog post files
│   │   └── config.ts             # data schema definition for blog posts
│   ├── layouts/
│   │   ├── BaseLayout.astro      # base page layout
│   │   ├── BlogPost.astro        # blog post layout
│   │   └── Layout.astro          # main layout wrapper
│   ├── pages/
│   │   ├── 404.astro             # 404 error page
│   │   ├── archive.astro         # blog archive page
│   │   ├── robots.txt.ts         # dynamic robots.txt generation
│   │   ├── rss.xml.js            # RSS feed generation
│   │   ├── api/
│   │   │   └── search.json.ts    # search API endpoint
│   │   ├── blog/
│   │   │   ├── [...page].astro   # blog pagination
│   │   │   └── [slug].astro      # individual blog post page
│   │   ├── de/                   # German (de) localized pages
│   │   │   ├── index.astro       # homepage (German)
│   │   │   ├── professional.astro # professional activity page (German)
│   │   │   └── volunteer.astro   # volunteer work page (German)
│   │   ├── en/                   # English (en) localized pages
│   │   │   ├── index.astro       # homepage (English)
│   │   │   ├── professional.astro # professional activity page (English)
│   │   │   └── volunteer.astro   # volunteer work page (English)
│   │   └── tags/
│   │       ├── [tag].astro       # tag-specific blog posts
│   │       └── index.astro       # all tags page
│   ├── scripts/
│   │   └── theme.ts              # color scheme switching logic
│   ├── styles/
│   │   └── transitions.css       # astro page transition styles
│   └── utils/
│       ├── date.ts               # date utility functions
│       ├── i18n.ts               # internationalization helper functions
│       └── posts.ts              # blog post utility functions
├── astro.config.mjs              # astro configuration (includes i18n settings)
├── package.json                  # project dependencies
├── tailwind.config.mjs           # tailwind CSS configuration
└── tsconfig.json                 # typescript configuration
```

## Development hints

To run a development server execute

```shell
npm run dev
```

The site supports internationalization (i18n) with German (de) as the default language and English (en) as an additional language. Pages are automatically served based on the URL path:

- `/path` - German version
- `/en/path` - English version

To add translations to a new page:

1. Create the German version at `src/pages/yourpage.astro`
2. Create the English version at `src/pages/en/yourpage.astro`
3. Use `getRelativeLocaleUrl()` from `astro:i18n` to generate locale-aware links

To upgrade dependencies execute

```shell
npx @astrojs/upgrade
```

To create a new blog post execute

```shell
npm run new-post \<filename\>
```

## Internationalization (i18n)

The site is configured with Astro's built-in i18n routing:

- **Default locale**: German (de)
- **Supported locales**: German (de), English (en)
- **Routing strategy**: `prefixDefaultLocale: false` - German URLs have no prefix, English URLs are prefixed with `/en/`

Language switcher is available in the header, allowing users to switch between German and English versions.

## Documentation references

- [astro documentation](https://docs.astro.build/en/getting-started/) with documentation source code in
  <https://github.com/withastro/docs/tree/main/src/content/docs/en>
- [theme documentation](https://github.com/larry-xue/astro-zen-blog/blob/main/README.md)
- [tailwindcss documentation](https://v2.tailwindcss.com/docs) with documentation source code in
  <https://github.com/tailwindlabs/tailwindcss.com/tree/main/src/docs>
