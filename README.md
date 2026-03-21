# A Simple React + TypeScript + Tailwind + Vite Sandbox

![Deploy](https://github.com/JakeR-Dev/react-ts-sandbox/actions/workflows/deploy-pages.yml/badge.svg)

https://jaker-dev.github.io/react-ts-sandbox/

Built with:
- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view the app.

## Deployment

The repository uses a GitHub Actions workflow to build and deploy the static Vite output automatically on pushes to the `main` branch.

Workflow file:
- `.github/workflows/deploy-pages.yml`

Build output:
- `dist/`

Notes:
- The workflow sets `VITE_BASE_PATH` to `/<repo-name>/` for GitHub Pages.
- In GitHub repo settings, set Pages source to GitHub Actions.
