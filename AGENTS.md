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
│   │   ├── index.astro           # homepage
│   │   ├── robots.txt.ts         # dynamic robots.txt generation
│   │   ├── rss.xml.js            # RSS feed generation
│   │   ├── api/
│   │   │   └── search.json.ts    # search API endpoint
│   │   ├── blog/
│   │   │   ├── [...page].astro   # blog pagination
│   │   │   └── [slug].astro      # individual blog post page
│   │   └── tags/
│   │       ├── [tag].astro       # tag-specific blog posts
│   │       └── index.astro       # all tags page
│   ├── scripts/
│   │   └── theme.ts              # color scheme switching logic
│   ├── styles/
│   │   └── transitions.css       # astro page transition styles
│   └── utils/
│       ├── date.ts               # date utility functions
│       └── posts.ts              # blog post utility functions
├── astro.config.mjs              # astro configuration
├── package.json                  # project dependencies
├── tailwind.config.mjs           # tailwind CSS configuration
└── tsconfig.json                 # typescript configuration
```

## Development hints

To run a development server execute

```shell
npm run dev
```

To upgrade dependencies execute

```shell
npx @astrojs/upgrade
```

## Documentation references

- [astro documentation](https://docs.astro.build/en/getting-started/) with documentation source code in
  <https://github.com/withastro/docs/tree/main/src/content/docs/en>
- [theme documentation](https://github.com/larry-xue/astro-zen-blog/blob/main/README.md)
- [tailwindcss documentation](https://v2.tailwindcss.com/docs) with documentation source code in
  <https://github.com/tailwindlabs/tailwindcss.com/tree/main/src/docs>
