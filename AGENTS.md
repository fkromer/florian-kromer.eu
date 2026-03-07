# AGENT.md

## Project structure

The project is based on the theme [astro-zen-blog](https://github.com/larry-xue/astro-zen-blog).
The project structure is as follows:

```
florian-kromer.eu/
├── .devcontainer/                # devcontainer configuration
├── src/
│   ├── components/               # astro UI components
│   ├── content/
│   │   ├── blog/                 # Markdown Blog post files
│   │   └── config.ts             # definition of data schema for blog posts 
│   ├── layouts/                  # astro and HTML Page layouts
│   ├── pages/                    # astro base layouts for pages
│   │   ├── api/
│   │       └──search.json.ts.ts  # business locig for the search functionality
│   │   ├── blog/                 # blog specific astro base layout and component
│   │   ├── tags/                 # blog tag specific astro base layout and component
│   │   ├── robots.txt.ts         # business logic for dynamic generation of the robots.txt file
│   │   └── rss.mxl.js            # business logic related to rss feed
│   ├── scripts/
│   │   └── theme.ts              # business logic for the color scheme switch
│   ├── transitions/
│   │   └── transition.css        # astro transitions for page changes
│   ├── utils/                    # utility business logic
│   └── config.ts                 # Site configuration
├── public/                       # Static assets
├── astro.config.mjs              # astro configuration
├── tailwind.config.mjs           # tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

- The directory `src/content/components` contains astro components
- The directory `src/content/blog` contains blog posts in markdown syntax.

## Documentation references

- [astro documentation](https://docs.astro.build/en/getting-started/) with documentation source code in
  <https://github.com/withastro/docs/tree/main/src/content/docs/en>
- [tailwindcss documentation](https://v2.tailwindcss.com/docs) with documentation source code in
  <https://github.com/tailwindlabs/tailwindcss.com/tree/main/src/docs>
