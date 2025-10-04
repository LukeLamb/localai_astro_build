# LocalAI Finance - Professional AI Financial Assistant

🚀 **Live Site:** [https://localaifinance.com/](https://localaifinance.com/)

A professional financial AI assistant website promoting secure, private financial analysis powered by local AI technology.

## 🏗️ Built With

- **Framework:** Astro v5.14.1 (Static Site Generator)
- **Styling:** Tailwind CSS v3.4.17
- **Deployment:** Vercel
- **Image Optimization:** Sharp + Astro's built-in Image component
- **PWA:** Service Worker with offline capabilities

## 🚀 Project Structure

```text
localai_astro_build/
├── docs/                # 📚 Project documentation (organized by category)
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Pages (routes)
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment config
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 📚 Documentation

**All project documentation is organized in the `/docs` folder:**

- **Design** (`docs/design/`) - Victorian-Cyberpunk aesthetic, typography, branding
- **Development** (`docs/development/`) - Component updates, migrations, technical docs
- **Deployment** (`docs/deployment/`) - Deployment guides and troubleshooting
- **Marketing** (`docs/marketing/`) - Social media, email automation, Discord
- **Guides** (`docs/guides/`) - Quick references and status updates
- **Archive** (`docs/archive/`) - Completed phases and historical documentation

👉 **See [docs/README.md](docs/README.md) for the complete documentation index.**

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🌟 Key Features

- ✅ **Performance Optimized** - Image optimization, lazy loading, bundle optimization
- ✅ **SEO Ready** - Structured data, sitemap, meta tags
- ✅ **PWA Enabled** - Service worker for offline functionality
- ✅ **Responsive Design** - Mobile-first, touch-optimized
- ✅ **Accessible** - WCAG compliant with proper ARIA labels
- ✅ **Secure** - Security headers and best practices

## 🚀 Deployment

This site is automatically deployed to Vercel:

- **Production URL:** <https://localaifinance.com/>
- **Vercel Dashboard:** <https://vercel.com/lukelambs-projects/localai-astro-build>

Every push to `master` branch triggers an automatic deployment.

## 📝 License

© 2024 LocalAI Finance. All rights reserved.
