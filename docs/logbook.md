# Management logbook

## 2026-11-08 · D01 · Accept the mandate
**Decision:** Act as founding editor and manager, with AI contributors. Make and record all decisions through launch. The user explicitly delegated topic, concept, design, implementation and publication. **Consequence:** No staged design approvals; independent review remains a quality gate. No spending or external outreach.

## 2026-11-08 · D02 · Choose useful digital independence
**Decision:** Publish Build It Yourself, a practical magazine pairing original articles with portable browser tools. **Rationale:** Readers can evaluate a useful artifact even if the prose is AI-written. This is an editorial hypothesis, not validated market demand. News, broad lifestyle and high-stakes advice are weaker fits for autonomous AI authorship.
**Evidence:** Reuters Institute's [2025 AI and news research](https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society) describes discomfort with AI-led journalism; the [2026 Digital News Report](https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary) provides current news-market context. These studies concern news, not demand for this magazine. [Ink & Switch's local-first research](https://www.inkandswitch.com/essay/local-first/) informs the ownership theme; this launch does not implement its collaborative local-first architecture.

## 2026-11-08 · D03 · Define the launch issue
**Decision:** Issue 001, A little less dependent: six articles, three tools. **Rationale:** A coherent finite issue is easier to finish, review and read than an unbounded feed. Link library, decision workbench and week planner deliver a range of small tasks without accounts or server dependencies.

## 2026-11-08 · D04 · Choose Worktable
**Decision:** Light paper, olive ink, terracotta actions, condensed masthead and serif reading. Actual tool specimens replace artwork. **Rationale:** The design should demonstrate the product and print well. Self-hosted licensed fonts avoid third-party font requests. Code-first construction follows the delegated brief and functional subject.

## 2026-11-08 · D05 · Build for inexpensive continuity
**Decision:** Adapt the neighboring factory's Astro scaffold and deploy through GitHub Actions to GitHub Pages. **Rationale:** Static pages keep hosting simple; portable vanilla-JS tools need no React runtime. Official technical citations and browser checks are required. Data stays in the browser but is not encrypted, synchronized or isolated from other projects on the same origin.

## 2026-11-08 · D06 · Commission and supervise AI contributors
**Action:** Assign three build guides and three field notes to two AI writers; assign tool implementation to a third. **Policy:** No invented interviews or field experience; illustrative examples labeled; sources must support technical claims; AI authorship is visible. The manager integrates and reviews; fresh reviewers judge the result.

## 2026-11-08 · D07 · Establish the business hypothesis
**Decision:** Launch free, without ads, affiliate links, paid subscriptions or a signup form. RSS and source/issue links enable voluntary return and sharing. **Rationale:** First demonstrate usefulness. There are no validated traffic or revenue figures. Initial distribution is public Pages, searchable article titles, RSS and shareable tools. No outreach is authorized or performed.
**Next evidence:** Voluntary reader feedback through repository issues; repeat issues only when tools meet the same quality bar. Issue 002 proposal: a personal reading index. No schedule or autonomous future publishing is active. Revenue options (a paid collection of expanded tools or explicit sponsorship) remain unimplemented; revisit only after audience evidence, never claim demand in advance.

## 2026-11-08 · D08 · Verify instead of trusting the summary
**Action:** Built all 15 pages and captured desktop/mobile views. Updated inherited Astro and Markdown packages, removed React/Tailwind packages that are unused, and resolved dependency advisories; npm audit reported zero vulnerabilities. Added a built-output check so deployment verifies actual page and font URLs, not just source conventions.
**Review fixes:** Standalone copies must keep later edits rather than reset to the embedded data; each download receives its own storage namespace. Planner printing must preserve full entered text rather than crop editing controls. Tool contributor implemented both after supervisory review.
**Scope:** Automated checks are not human or comprehensive security review. Article source links support mechanics, not productivity or audience-growth promises.

## 2026-11-08 · D09 · Close independent review findings
**Action:** A fresh editorial reviewer passed all 15 pages and independently reproduced core tool behavior. Corrected a minor options/criteria row description and added the launch report it requested. A fresh visual reviewer verified all 15 mustShows but required stronger placeholder text and essential field boundaries. Applied a dedicated control-border token and full-opacity muted placeholders to hosted and downloadable tools.
**Evidence:** Six unit tests and 17 tool logic/schema checks pass; browser workflows cover export/import, malformed data, offline downloads, persistent edits, zero weights, and full-text printing. All pages were checked at five screen widths; 30 desktop/mobile captures load without browser errors. Exact model identifiers are unavailable; review independence means separate AI instances, not a claimed different provider or human review.
**Operational choice:** Updated the Pages workflow to current official Astro/GitHub action versions and Node 24. The final visual correction verdict and live deployment are recorded in the launch report when observed.

## 2026-11-08 · D10 · Publish and verify the first issue
**Action:** Published the reviewed source as [jdinkla/build-it-yourself](https://github.com/jdinkla/build-it-yourself), enabled GitHub Pages through its Actions workflow, and verified the [live magazine](https://jdinkla.github.io/build-it-yourself/). The first deployment of commit 4a2cdd6 succeeded in [run 42468708494](https://github.com/jdinkla/build-it-yourself/actions/runs/42468708494). Twenty page/feed/asset URLs returned HTTP 200 and the custom 404 worked.
**Review closure:** Editorial PASS; original visual inventory all MET; both contrast findings resolved with a final scoped PASS/SHIP. Detailed evidence and explicit verification limits are in the repository’s launch report. Source, original text and tool code are available under MIT; self-hosted fonts keep their own licenses.
**Operating state:** Issue 001 is available free, with RSS and repository issues as return/correction paths. There is no active publishing schedule, audience measurement or revenue claim. The next management decision should be driven by voluntary reader feedback and actual tool defects rather than a content-volume target.
