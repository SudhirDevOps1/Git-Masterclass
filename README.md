# Git & GitHub Masterclass Hindi

Complete Hindi guide for learning Git and GitHub from beginner basics to production workflows.

## Developer

- Developer Name: Your Name
- Repository: https://github.com/your-username/git-github-hindi-masterclass
- License: MIT

## Project Structure

```text
/
├── index.html            # Main entry point
├── styles.css            # All styles (glassmorphism, dark/light, responsive)
├── script.js             # All vanilla JavaScript logic
├── manifest.json         # PWA manifest (standalone, theme colors, icons data URI)
├── sw.js                 # Service worker (cache-first, offline support)
├── privacy.html          # Privacy policy (no tracking, no cookies, local processing)
├── robots.txt            # User-agent: * Allow: /
├── sitemap.xml           # Sitemap listing index.html, privacy.html
├── README.md             # Documentation
├── .gitignore            # Ignore node_modules, .DS_Store, etc.
├── LICENSE               # MIT license
├── data.json             # Optional JSON app metadata
└── lib/                  # Self-hosted libraries
    └── .gitkeep
```

## Setup

Open `index.html` directly, or use VS Code Live Server for the best PWA and clipboard behavior.

## Deploy To GitHub Pages

1. Create a GitHub repository.
2. Push this folder to the repository.
3. Go to Settings > Pages.
4. Select Deploy from branch.
5. Choose `main` and `/root`.

## Library Download Instructions

The app uses Tailwind via CDN for quick usage. If you want fully offline vendor files, download required libraries into `lib/` and update links in `index.html`.

## Notes

The main app remains functional in `index.html`; companion files add PWA, documentation, privacy and production repository support.
