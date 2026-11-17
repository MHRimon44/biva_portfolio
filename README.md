# Mohosina Banu Biva — Portfolio

A responsive Next.js 16 / React 19 portfolio based on Biva's technology and research,
teaching, and banking CVs. Includes research, a Python academic project, security
experience, education, mentoring, leadership, contact links, and three Google Drive CV folders.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. On PowerShell systems that restrict scripts, use
`npm.cmd run dev` and `npm.cmd run build`.

```sh
npm run build
npm start
```

## Content and design

- `components/portfolio/PortfolioHome.jsx`: the active portfolio and interactions.
- `data/biva.js`: profile links, education, skills, and CV downloads.
- `app/globals.css`: responsive layout and visual styles.
- `app/layout.tsx`: title, social metadata, and icon.
- CV links open the supplied Google Drive folders in a new tab.
- `DESIGN.md`: installed Claude design guide from VoltAgent/awesome-design-md.
- `.design-reference/`: source attribution, MIT license, and the locally downloaded
  design collection (the full checkout is ignored by Git).

The design adapts the guide's cream canvas, terracotta accent, serif headings, and
editorial spacing. CSS/SVG illustrations are decorative compositions. The project
illustration is conceptual, not an actual application screenshot.

Contact uses email, phone, GitHub, LinkedIn, and a copy-email button; no third-party
form service or credentials are required. Previous portfolio section files and
assets remain as unused legacy material; the active page imports Biva's content.

This is a local repository implementation, with no hosting deployment configured.
