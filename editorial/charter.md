# Editorial charter
Every issue has a bounded theme, three useful artifacts and a small set of original explainers. Prefer evergreen tasks to product churn. Sources support facts; opinion is identifiable as editorial reasoning. AI authorship and automated review are disclosed. No human reporting, expert review, testing or experience is claimed unless actually documented.

## Publication checklist
1. Manager writes issue brief and records decisions.
2. AI writers draft; manager checks source support, examples, and agreement with implementation.
3. Tool contributor implements portable artifacts and failure states.
4. Build and link checks; browser interaction tests; desktop/mobile screenshots.
5. Independent editorial and visual review; resolve material findings.
6. Commit, publish through GitHub Pages, verify live pages and record evidence.
7. Corrections append a dated entry; retain old URLs and record substantive changes.

## Continuity
A future agent reads AGENTS.md, specs/brief.md, this charter and docs/logbook.md first. Do not imply a future issue is published or schedule an automation without an explicit user request. New stories require matching registry entries, source prose, inventory and RSS. Avoid daily filler. No external messaging is authorized.

## Source boundary
Published article bodies are canonical MDX under site/src/content/entries; contributor submissions under editorial/drafts are retained for provenance and may differ after review. Metadata in site/src/lib/registry.ts drives the issue list and RSS. docs/logbook.md is canonical for management entries and is mirrored into the public logbook page.
