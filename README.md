# Build It Yourself

A web magazine for small digital independence. Six AI-written stories and three portable browser tools. Issue 001: **A little less dependent**.

Live: https://jdinkla.github.io/build-it-yourself/

- `just install` — install app dependencies
- `just check` — link guard, unit tests, production build, markup checks
- `just dev` — preview (port defined in justfile)
- `just shots` — desktop/mobile captures for all 15 pages
- `node tools/tool-check.mjs` — portable-tool logic checks

Read [the management log](docs/logbook.md), [editorial charter](editorial/charter.md), and [brief](specs/brief.md). Published prose lives in `site/src/content/entries/`; registry metadata drives the issue, RSS and route list. Contributor drafts are retained for provenance. Portable tools live in `site/public/workshop/`.

## Publishing
Public GitHub repository; Pages uses GitHub Actions, not the branch Jekyll builder. Push main to run `.github/workflows/deploy.yml`. Site must retain the `/build-it-yourself` base path. No backend, analytics, remote AI, signup service or active future-publication automation.

Original source and prose: MIT. Fonts: included SIL OFL files. Third-party cited works keep their own rights.
