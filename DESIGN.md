---
name: Build It Yourself — Worktable
description: A practical print magazine built around readable essays and working browser tools.
colors:
  paper: "#f5f2e9"
  ink: "#232722"
  accent: "#b23b25"
  line: "#c9c9bb"
  control-border: "#858b7c"
  muted: "#5c635a"
  surface: "#e9e8dc"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(78px, 12.55vw, 178px)"
    fontWeight: 700
    lineHeight: 0.83
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(45px, 6vw, 80px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "21px"
    lineHeight: 1.75
  ui:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "18px"
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "14px"
    lineHeight: 1.55
  code:
    fontFamily: "ui-monospace, monospace"
    fontSize: "0.8em"
  portable-tool:
    fontFamily: "Arial, Helvetica, sans-serif"
    lineHeight: 1.55
rounded:
  flat: "0px"
  tool-field: "2px"
spacing:
  tool-gap: "1rem"
  tool-section: "1.5rem"
  narrow-gutter: "16px"
  middle-gutter: "20px"
  wide-gutter: "40px"
components:
  action-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    padding: "0.7rem 1.1rem"
  action-link-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.55rem 0.9rem"
  tool-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tool-field}"
    padding: "0.65rem 0.8rem"
  tool-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tool-field}"
    padding: "0.65rem 0.8rem"
  tool-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.tool-field}"
    padding: "0.65rem 0.8rem"
  search:
    textColor: "{colors.ink}"
    rounded: "{rounded.flat}"
    padding: "12px 15px"
    width: "100%"
  specimen:
    backgroundColor: "{colors.surface}"
    padding: "25px 30px 22px"
  specimen-input:
    textColor: "{colors.ink}"
    rounded: "{rounded.flat}"
    padding: "4px 0"
    width: "100%"
  story-row:
    padding: "18px 0"
  navigation:
    textColor: "{colors.ink}"
    padding: "4px 0"
---

# Design System: Build It Yourself — Worktable

## Overview

**Creative North Star: "Worktable"**

Worktable pairs a condensed, emphatic magazine masthead with generous serif reading and direct, ordinary controls. Warm paper, olive ink, terracotta links and visible rules give the site the feel of a useful manual without simulated texture.

The system is light-only. Real editable specimens supply its visual interest; the current magazine uses no stock or generated illustration. Self-hosted type and portable tools support the publication’s commitment to small dependencies. Tools retain their own system-sans working surface, including in downloaded HTML.

**Key Characteristics:**
- Large condensed display type; serif headlines and reading.
- Flat paper surfaces, straight rules and sparse terracotta emphasis.
- Ruled editorial lists rather than a repeated card grid.
- Visible labels, keyboard focus and working examples.

## Colors

The palette feels like warm paper, olive printing ink and a restrained terracotta route into making. The frontmatter records the canonical CSS values from `site/src/styles/global.css`.

### Primary
- **Terracotta — accent:** Links, primary magazine action links, keyboard focus, masthead punctuation and small directional marks.

### Neutral
- **Warm paper — paper:** Page background, ordinary controls and reversed text on dark regions.
- **Olive ink — ink:** Main text, strong rules, the workshop band and primary portable-tool buttons.
- **Pencil line — line:** Decorative row dividers and ordinary button borders.
- **Control edge — control-border:** Essential portable input, textarea and select boundaries against paper.
- **Muted olive — muted:** Metadata, explanatory labels, notes and status copy.
- **Work surface — surface:** Editable specimen, tool previews and editorial blockquotes.

**The Light Paper Rule.** Keep the magazine light-only; the dark workshop band is a local contrast region, not a second theme.

The workshop band has two local literals: a softer divider and pale terracotta hover text. These are local treatments, not a second accent family. Portable tools inherit the five shared paper/ink/accent/line/muted roles through their own namespaced variables, with matching literal fallbacks.

## Typography

**Display:** Barlow Condensed, sans-serif. **Reading:** Source Serif 4, Georgia, serif. **UI:** Barlow, Arial, sans-serif. **Code:** ui-monospace, monospace.

Three font families are self-hosted: Barlow Condensed bold, Barlow regular and variable Source Serif 4. The fourth role is supplied by the system, not a fourth font download. Portable tools deliberately use Arial, Helvetica, sans-serif so their standalone HTML requires no font assets.

### Hierarchy
- **Display:** The large uppercase cover name uses the frontmatter display role; section furniture uses the same condensed bold face at smaller sizes. The wordmark is compact rather than a second headline.
- **Headline:** Page titles use the frontmatter headline role. Cover story titles use a separate fluid size (`clamp(44px, 4.8vw, 72px)`) and a short measure; hierarchy follows the editorial role rather than one universal heading scale.
- **Title:** Ruled story rows use the frontmatter title role. Lead stories, archive entries and tool landing sections have larger serif titles.
- **Body:** Article prose uses the frontmatter body role with a maximum measure of `66ch`. At the narrow breakpoint it becomes `(20px/1.7)`. Introductions are slightly more compact serif reading.
- **UI / Label:** Sans body copy, navigation, labels and metadata distinguish apparatus from the essay. There is no uppercase tracking system for labels.
- **Code:** Inline code uses the relative system-mono size and wraps long strings. Numeric scores in tools use tabular numerals in the tool’s sans face.

**The Four Roles Rule.** Use condensed display for the publication and section furniture, serif for editorial reading, sans for navigation and labels, and system mono for inline code.

## Layout

The shared magazine container is capped at `(1320px)` with `(40px)` side gutters. At `(900px)` and below the gutters become `(20px)`; at `(620px)` and below they become `(16px)`. These are maximum-width media queries, not mobile-first min-width steps.

Wide pages use editorial columns with percentage gaps: the cover pairs introductory copy and a working specimen; the issue pairs a lead story and ruled contents; article pages pair a flexible reading column and a `(260px)` aside. The aside narrows to `(200px)` at the middle breakpoint and is sticky `(30px)` from the top. At the narrow breakpoint these arrangements stack, and the aside returns to normal flow. Tool listings and the footer also stack. The header keeps its navigation visible; the supplementary tagline disappears at the middle breakpoint and RSS becomes an arrow treatment on narrow screens.

Spacing is contextual rather than a complete numerical scale. Repeated tool gaps and section spacing are recorded in the frontmatter; magazine section rhythm comes from generous vertical margins, fine dividers and percentage column gaps. Avoid forcing all compositions into one grid ratio.

Portable tools have their own `(640px)` breakpoint: two- and three-column forms stack, toolbar controls wrap, and comparison tables retain a `(450px)` minimum width inside a horizontal scroll wrapper with a narrow-screen hint. A portable tool is capped at `(74rem)` inside the magazine’s container.

Print is an implemented mode: site navigation, footer, sidebars and action links disappear; reading becomes black on white with a full-width article. Portable tools hide editing apparatus and expose useful printable data; the week planner has a dedicated print view. Reduced-motion preference disables animation and transitions and removes smooth scrolling.

## Elevation & Depth

Depth comes from ink rules, contrasting paper surfaces and typographic hierarchy. There are no box shadows. The editable cover specimen is the one deliberately tilted object `(1deg wide; 0.6deg narrow)`; it remains flat and does not imply a floating card system.

**The Flat Surface Rule.** Use rules and tonal surfaces to separate content; the shipped system has no box shadows.

## Shapes

The magazine’s form language is rectangular and ruled. Search and specimen inputs explicitly have square corners. Most magazine divisions use a single thin rule; the footer has a stronger double-width top rule. Portable-tool fields and buttons use a very small radius, recorded in the frontmatter, rather than pills. Native checkboxes and file inputs keep appropriate browser affordances.

## Components

### Action links and buttons

Magazine action links are filled terracotta rectangles with paper text and an inline directional arrow. Hover changes the fill to ink. Ordinary magazine buttons use paper, ink and a line border; hover strengthens the border. Both have at least `(44px)` minimum height. Global interactive focus is a terracotta `(3px)` outline offset `(4px)`.

Portable buttons use the system sans, slightly rounded corners and `(44px)` minimum height. Their primary variant is ink-filled with paper text; hover strengthens the border rather than animating the surface. Tool focus uses the same outline thickness with a `(3px)` offset. No transition duration or easing token is defined.

### Inputs / Fields

Issue search is a full-width field capped at `(550px)`, with a muted stroke, transparent background and square corners. Specimen fields use a bottom rule only, serif text and `(40px)` minimum height. Portable fields use the stronger control-edge border, paper fill and small corner radius; multiline areas resize vertically. The specimen’s bottom rule uses muted ink for its stronger boundary against the tinted surface; issue search also retains its muted stroke. Input and textarea placeholders use muted text at full opacity in both magazine and tool surfaces. Tool errors use accent text and stronger weight, with status and note copy kept next to the work.

### Navigation

Primary navigation sits between ink rules. Links are sans, ink-colored and have `(44px)` minimum height. The current page gets a terracotta underline; ordinary hover inherits the shared underline-thickness behavior where a decoration exists. Navigation stays inline on narrow screens. The shared footer combines a condensed wordmark, provenance disclosure and a vertical link list.

### Ruled story collections

Collections are rows with quiet horizontal dividers, serif titles, muted metadata and a small accent arrow. Title links start in ink and become terracotta on hover. Archive entries have type, description and reading-time columns on wide screens, then become one column. These rows are the magazine’s recurring collection pattern; there is no generic card component or chip system.

### Editable specimen

The cover specimen is a labeled surface-colored worksheet with a condensed heading, bottom-ruled serif fields and a two-column day arrangement. It is explicitly illustrative, editable and temporary; its footer states that it is not saved and links into the full planner. This working object is the signature visual component, not a decorative screenshot.

### Editorial callouts and workshop surfaces

Blockquotes use a surface-colored inset without a shadow. The dark workshop band reverses the palette, combining condensed display copy and a ruled list of tool links. Full tools use fieldsets, compact toolbars, ruled saved-item lists and border-separated results rather than decorative cards.

## Do's and Don'ts

### Do:
- **Do** use the existing paper, ink and accent tokens for new magazine surfaces.
- **Do** preserve the distinction between magazine typography and the portable tools’ system sans.
- **Do** build editorial collections from ruled rows and establish hierarchy with type scale and space.
- **Do** keep input labels, visible focus outlines and status messages legible beside working tools.
- **Do** carry the AI provenance disclosure through the shared page footer.

### Don't:
- **Don’t** introduce a dark theme or automatic color inversion.
- **Don’t** add shadows, glass effects, gradients or decorative card grids to this flat print world.
- **Don’t** claim IBM Plex Mono is loaded; inline code uses the system monospace stack.
- **Don’t** make the specimen’s slight rotation a treatment for every container.
- **Don’t** add third-party font requests or decorative imagery without a separate editorial decision.
