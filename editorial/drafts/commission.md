# How to commission an AI-built tool

“Make me a productivity app” leaves almost every consequential choice to the builder. What counts as productive? Where does the information go? What happens when it cannot be saved? A handsome first screen answers none of those questions.

A better commission starts with one small job and describes how you will recognize success. You do not need to specify every line of code. You do need to specify what the tool is allowed to do with your work.

## Give the builder a boundary

Here is an illustrative brief for a personal link library:

> Build one browser page for saving useful links. Each entry has a title, an HTTP or HTTPS address, one tag, and a note. Search all four fields. Keep the working copy in this browser. Provide JSON export and import with a clear explanation of whether import replaces existing entries. Show storage and import failures. Use no accounts, remote services, or analytics. Include brief instructions and a downloadable standalone version.

That paragraph sets a size, a data model, and a few exclusions. It also gives the builder room to solve layout and interaction. Add your likely device, the longest realistic note, and whether you use a keyboard or assistive technology. Those details describe use, rather than asking for a style you may not actually need.

Ask for an explanation of the files and the storage behavior before treating the result as finished. Keep the first version disposable. A tool for collecting public links is an easier place to learn than one that handles payments, secrets, or consequential advice.

## Write checks before compliments

Turn the brief into a short acceptance list. Use specific actions with observable outcomes:

- Add an entry, reload, and check that every field remains.
- Search for a word that occurs only in its note.
- Try an invalid address and verify that the explanation helps you correct it.
- Export two entries, restore them into an empty instance, and compare the contents.
- Try a malformed import and check that existing work survives.
- Reach the controls with a keyboard and read the page on a narrow screen.

These are proposed checks, not a claim that an unseen tool passes them. Give the builder the list before implementation. Ask it to report what it actually checked, what failed, and what remains uncertain.

Browser form controls can catch common input mistakes, but an input appearing valid is not a complete security review. [MDN's form-validation guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) distinguishes usability checks from broader security requirements. For our link example, also ask how imported entries become visible text and which address schemes can become clickable.

## Keep your own exit

Request the source and instructions for opening it. Ask where each dependency comes from and what stops working without an internet connection. Export your sample data before accepting a large revision; otherwise testing improvements can quietly become testing against your only copy.

AI-generated code deserves review. GitHub's [responsible-use documentation for inline suggestions](https://docs.github.com/en/copilot/responsible-use/inline-suggestions) describes limitations and the need to review generated suggestions. An AI builder's confident summary does not replace evidence from the running tool. For unfamiliar or higher-risk work, a qualified human review may be the most useful part of the commission.

For your next request, write three lines before opening the chat: one job, one boundary, and one check. “Help me compare three workshop venues. Keep all scores on my device. Show me how a zero weight changes the result.” That is already a better starting point than a product category. It gives the builder something concrete to deliver and gives you something concrete to judge.
