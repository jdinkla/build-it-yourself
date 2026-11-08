# Issue 001 — launch report

Date: 8 November 2026 (Europe/Berlin). Publication: **Build It Yourself**. Issue: **A little less dependent**.

## Outcome and scope
A complete first issue: six original articles, three portable browser tools, issue archive/search, workshop index, editorial/privacy/corrections policy, public management log, RSS, sitemap and recovery page. Fifteen HTML pages. The audience proposition is an editorial hypothesis; there are no validated readership or revenue figures.

## Technical verification
- `just check`: source base-path guard; six registry/link-rewrite tests; production build; escaped-markup guard; 267 built internal page/asset references; 17 tool math/schema/security checks.
- `node tools/site-browser-check.mjs`: all 15 pages at 320, 390, 768, 1280 and 1440 pixels. No document overflow, failed requests, script errors or third-party requests. Issue filtering, URL/reload state, empty and reset states pass. Cover/article/issue reading works without JavaScript.
- `node tools/tool-check.mjs --browser`: actual link CRUD/search and JSON round-trip; malicious closing-script text remains data; downloaded file works offline and keeps later edits after reload in tested Chromium; decision mean, zero weights, dynamic labels; week persistence, wrong-tool/malformed imports preserve work. Short week fits one A4 page; full long notes survive PDF pagination.
- `just shots`: 30 captures, 15 pages × desktop/mobile × light-only. Capture loading and browser console clean. Source screenshot inventory: shots/pages.json. Generated screenshots are reproducible and ignored by Git.
- Dependency audit after updating the inherited scaffold: zero reported vulnerabilities. Direct production packages: Astro 7.4.7, MDX 8.1.3, Markdown/Remark 7.3.6. Removed unused React/Tailwind dependencies.

## Review and limits
Fresh editorial review: **PASS**, all 15 pages present. Primary documentation spot checks support the associated claims; no invented reporting or human review found. Closed observations: corrected options/criteria row description; added this launch report.

Fresh visual review round 1: all 15 visual mustShows met and 30/30 own captures green; **REVISE** for faint placeholder text and essential field boundaries. The final batch uses muted placeholder text at full opacity and a distinct control-border token; the cover uses muted underlines on its darker specimen surface. Verdict continuation is recorded below before publishing.

The old factory's optional craft-review and craft-evidence workers both returned **NOT RUN — IMPECCABLE=absent** because its resolver did not recognize a compatible plugin installation. A separately installed modern design tool was used directly for its scan; its stylesheet resolution under the project subpath was incomplete (11 false flat-hierarchy reports), with two cadence advisories and three portable system-font advisories retained. No clean contrast audit is inferred from that scan. The fresh visual reviewer checked real computed contrast and supplied the corrections above.

AI roles ran in Codex. Maker and worker exact model identifiers were not exposed; independence is separate AI instances, not a claim of different models/providers. Prose brush: **NOT REQUESTED**. Design documentation was separately reconciled against shipped CSS. No human, exhaustive compatibility, or comprehensive security review occurred. Browser verification covers installed Chromium; private/file storage behavior elsewhere can vary. Browser data is neither a backup nor an encrypted vault, and GitHub Pages project paths share an origin.

## Reproducibility and continuity
Published prose: site/src/content/entries; canonical metadata: site/src/lib/registry.ts. Historical contributor drafts: editorial/drafts. Management decisions: docs/logbook.md, mirrored to the public logbook. Editorial process: editorial/charter.md. Design system: DESIGN.md plus .impeccable/design.json. Source licenses and font provenance: LICENSE and docs/assets.md.

The inherited factory flow was adapted under the user's explicit delegation of all decisions: internal documented editorial/design choices replace conversational approval gates, static portable JavaScript replaces React islands, and self-hosted fonts replace remote font stylesheets. A design snapshot is retained as design.html; this was captured from implementation rather than represented as a pre-build human-approved comp.

No recurring publication is scheduled. No external messages, signup collection, paid service, advertising, or affiliate links were introduced. Next candidate: a personal reading index. Future issues require the same artifact, evidence and independent-review bar.

## Upstream candidates
- Add a built-output link/asset guard; source-only checks miss generated prose-path errors.
- Refresh pinned framework and workflow versions in the factory scaffold.
- Resolve current standalone design-tool installations as well as legacy plugin layouts; current detector stylesheet resolution should respect a site base path.
- Keep essential form-border tokens separate from decorative rules.

## Final review and deployment
Final visual correction verdict: **PASS / SHIP at the fix-list scope**, both findings resolved. Fresh independent captures: 30/30. Placeholder text is muted at full opacity (5.54:1 on paper); essential hosted/standalone fields use control-border (3.14:1 on paper); cover specimen underlines use muted ink (5.03:1 on its tinted surface). Original round judged all 15 mustShows MET; the continuation scores the two named fixes rather than claiming a second unrelated full audit.

First deployment succeeded for commit `4a2cdd6`: [GitHub Actions run 42468708494](https://github.com/jdinkla/build-it-yourself/actions/runs/42468708494). Pages uses the GitHub Actions build tier, public audience, and enforced HTTPS. Twenty live page/feed/asset URLs returned HTTP 200; a nonexistent path returned the magazine’s custom 404. A live 390px Chromium check also confirmed that all three tools mounted with their expected controls and no script/asset errors. Machine-readable evidence is docs/deployment.json. The first live check was recorded at 2026-11-08T09:49:26.362Z.

Live magazine: https://jdinkla.github.io/build-it-yourself/
Public source: https://github.com/jdinkla/build-it-yourself

The source commit was saved unsigned because the session could not access the configured signing key; global Git signing settings were not changed. This report records the verified initial deployment. A follow-up documentation commit publishes the observed results and management entry.
