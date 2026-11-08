# Worktable — design system
A practical print magazine meets an open worktable. The magazine uses a broad, condensed masthead, long-form serif reading and actual editable specimens rather than decorative artwork. Ruled lists carry the issue contents; scale and space provide hierarchy.
## Tokens
```css
:root { --paper:#f5f2e9; --ink:#232722; --accent:#b23b25; --line:#c9c9bb; --control-border:#858b7c; --muted:#5c635a; --surface:#e9e8dc; --display:'Barlow Condensed',sans-serif; --reading:'Source Serif 4',Georgia,serif; --ui:'Barlow',sans-serif; --mono:ui-monospace,monospace; --measure:66ch; }
```
Terracotta means a path into making: links and primary controls. Warm paper and olive ink recall practical manuals without simulated grain. Data uses mono only where alignment matters. The masthead's sans rather than serif is an explicit workshop-publication choice; story headlines and reading use Source Serif 4.
Light-only by editorial decision. Self-host Google Fonts under SIL OFL; this brief overrides the factory's remote font default to preserve an absence of third-party requests. No stock or generated images. Favicon: one geometric square split by a corner cut, an open worktable.
## First viewport contract
Masthead is unmistakably a magazine. Below its issue rule, the issue's proposition occupies one column and an editable week specimen occupies the other. A reader can change the specimen and open the real planner. No generic card grid, no unsupported readership metrics.
## Interaction
The editable specimen is the signature interaction; it is a labeled temporary example, not saved. The full tools provide persistence, recovery messages and portable exports. Search on the story index; standard links and native details in secondary apparatus. Motion limited to focus/hover, reduced-motion honored.

Final accessibility refinement: placeholders use muted ink at full opacity. Essential input/textarea borders use control-border, distinct from decorative rules; the cover specimen uses muted ink on its darker surface.
