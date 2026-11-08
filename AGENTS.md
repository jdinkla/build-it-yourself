# Build It Yourself

An openly AI-run web magazine about small digital independence, with original articles and portable browser tools. Read PRODUCT.md, specs/brief.md, DESIGN.md, editorial/charter.md and docs/logbook.md before changing the publication.

The founding user delegated topic, design, editorial, technical and publishing decisions. Log meaningful decisions and actions with dates, rationale, evidence and consequences. Do not fabricate audience figures, revenue, reporting, human review or completed checks. Do not send external messages or incur paid services under this mandate.

## Commands

| Label | Command | What it does |
|---|---|---|
| Full check | `just check` | Source link guard, unit tests, build, markup guard, built links and portable tool checks |
| Build | `just build` | Static Astro build to site/dist |
| Link check | `just check-links` | Enforces withBase in authored component links |
| Markup guard | `just markupguard` | Finds accidental visible escaped HTML |
| Unit tests | `just test` | Registry and Markdown base-path integration checks |
| Shots (judge input) | `just shots` | All inventory pages at wide/mobile, light-only, into shots/out |
| Impeccable scan | `just impeccable-detect` | Advisory scan; report absent/degraded rather than claiming clean |
| Browser workflows | `node tools/tool-check.mjs --browser` | Tool persistence, import/export, offline downloads and print checks |
| Responsive workflows | `node tools/site-browser-check.mjs` | Five widths, issue search, requests/errors and no-JS reading |
| Dev server | `just dev` | Local preview; the dev port is pinned only in justfile |
| Install | `just install` | Install app dependencies |
| Install shots harness | `just install-shots` | Install root Playwright harness and browser |
| Clean | `just clean` | Remove generated site and screenshots |

## Invariants

1. GitHub Pages project hosting is /build-it-yourself. BASE in site/astro.config.mjs drives withBase and the Markdown rehype plugin. Never remove the unified Markdown processor without preserving the prose-link rewrite. Verify built output as well as source links.
2. site/src/lib/registry.ts is canonical prose metadata and drives prose routes, issue contents, RSS and sitemap. Each entry must have a matching MDX file. The base layout owns global navigation to ancillary routes.
3. Published prose is canonical in site/src/content/entries/*.mdx. Contributor submissions in editorial/drafts are historical provenance; correct published MDX and append material corrections to the log. docs/logbook.md is the canonical management log; mirror its body into logbook.mdx.
4. Three workshop tools intentionally use dependency-free vanilla JS/CSS, so Download tool can produce one self-contained offline HTML file. Keep the inline STYLE string and tool.css synchronized. Import validates the complete versioned envelope before replacing work. Untrusted values must remain text, only HTTP(S) links allowed. Bad stored data must not be overwritten silently. Never promise sync, encryption, backup, or path isolation.
5. Light-only Worktable design is a deliberate print/worktable scene. No theme toggle. The magazine self-hosts three licensed font families; standalone tools use system fonts. Design tokens in global.css, with reusable documentation in DESIGN.md.
6. A new page requires a brief inventory row and matching shots/pages.json entry with a verifiable mustShow. Never weaken an entry to hide a missing feature. Run Full check before each commit. Inspect desktop/mobile pixels; independent AI editorial and visual review precede publication.
7. AI disclosure remains visible on every page. No fictional human bylines or unrecorded hands-on claims. Primary sources support technical claims; illustrative examples stay labeled. Tool checks are bounded automated verification, never comprehensive compatibility or security review.
8. This is static hosting: no secrets, accounts, server APIs, remote AI calls or analytics. Hosted browser data shares an origin with other jdinkla.github.io projects. Fonts retain included SIL OFL licenses. Original text/source is MIT; cited third-party works retain their rights.

## Publishing and continuity

GitHub Actions in .github/workflows/deploy.yml checks and builds the site, then deploys Pages. Pages source must be GitHub Actions. Repository is public jdinkla/build-it-yourself. Verify the deployment and live pages, then record real results. Commit messages carry one Codex coauthor trailer; use an actually known model name or say model unavailable.

No recurring publishing automation is active. Future issues need a bounded brief, sources, working artifacts, checks and fresh review. Candidate Issue 002 is a personal reading index, not an authorized future scheduled job. Do not imply future work will happen unattended unless it is actually scheduled by explicit user request.
