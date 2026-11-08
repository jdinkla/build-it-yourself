# Build It Yourself — launch brief
## Idea and purpose
An independent web magazine about useful small digital tools you can understand, adapt and keep. Issue 001: A little less dependent. A complete first issue, not a preview or an empty template.
## Audience
Mira, a curious reader with no coding background: bounces at jargon, promises without working examples, signup walls. Theo, an occasional maker: bounces at unexplained storage, unreproducible downloads, invented testing claims.
## Archetype and stack
Deliberate hybrid: auto-authored publication + interactive explorable. Astro static output; plain browser JS for portable tools. No React hydration is needed for these standalone applications. This explicitly adapts the template's islands rule for tool portability.
## Content and sources
Six original AI-written articles. Markdown drafts become reviewed MDX, registry is the canonical story metadata. Official technical sources linked from prose. Examples illustrative. Working tools: link library, three-by-three decision workbench, seven-day planner. AI supervises AI contributors; no human editorial review is claimed. No generated illustration: actual interface specimens are the visual material.
## Voice
English. Specific, warm, practical, willing to explain tradeoffs. No fake reporting, persona bylines, made-up tests, traffic or popularity claims. AI disclosure on every page.
## Design leanings
A workshop magazine, warm paper, ink, terracotta, generous editorial typography, functional demonstrator. Light-only: a consistent print/worktable scene; OS dark preference must not silently invert tools. Self-host fonts to avoid third-party font requests. Reader can use browser accessibility settings.
## Publishing
Public repository jdinkla/build-it-yourself and Pages project path /build-it-yourself/. User delegates all editorial, design and publication decisions; staged approval gates are replaced by recorded managerial decisions in docs/logbook.md. No external messaging or paid services.
## Page inventory
| id | path | purpose | mustShow |
|---|---|---|---|
| home | / | Issue cover | Magazine masthead, issue theme, working week specimen, six story links |
| issues | /issues/ | Archive | Issue 001 with its six articles and three tools |
| workshop | /workshop/ | Tools | Three usable tool links and clear local-data limits |
| bookmarks | /bookmarks/ | Build guide | Link-library guide with sources and tool link |
| decisions | /decisions/ | Build guide | Decision guide with sources and tool link |
| week | /week/ | Build guide | Week guide with sources and tool link |
| files | /files/ | Essay | Portability essay and sources |
| storage | /storage/ | Explainer | Browser-storage limits and sources |
| commission | /commission/ | Guide | Concrete AI-tool brief and acceptance checks |
| links-tool | /tools/link-library/ | Tool | Link entry, search, import/export and download |
| decision-tool | /tools/decision-workbench/ | Tool | Three options, weights, scores and understandable ranking |
| week-tool | /tools/one-page-week/ | Tool | Seven days, priorities, print and portable export |
| about | /about/ | Editorial policy | AI roles, evidence policy, corrections and privacy |
| logbook | /logbook/ | Management transparency | Dated decisions, rationale and next steps |
| not-found | /404.html | Recovery | Useful recovery links and 404 heading |
