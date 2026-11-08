# Your bookmarks deserve a front door

A useful link collection answers a small question: where was that thing I wanted to use? It does not need to become a second internet. It needs a way in.

The [Link Library](/tools/link-library/) gives each saved page four fields: a title, a web address, a tag, and a note. Search runs across that information. You supply the part a browser cannot infer: why the page matters to you.

## Save the reason, not just the address

Consider this illustrative entry: a page about repairing a bicycle puncture. The title might be “Puncture repair guide.” The tag is “bicycle.” The note says, “Clear pictures of checking the tyre before putting the tube back.” Those few words give future you a reason to open this result instead of six similar ones.

A note is most useful when it names an action. “Interesting” describes a passing reaction. “Use this checklist before the next camping trip” describes a return visit. If you cannot imagine returning, leaving the page unsaved is a reasonable choice.

Begin with five links you already revisit. Add the words you would use while looking for them, rather than adopting the website's marketing title. A plain name such as “Library opening times” can be more helpful than the institution's full name.

## Build a small collection first

Open the library and enter a title and its complete web address. Add one tag. Use broad tags until you have a reason to split them: “cooking” will usually do before “weeknight-vegetarian-soup.” Finish with a sentence explaining the page's use.

Search for a word from that sentence. If the expected page appears, you have completed the basic loop: save, describe, find, use. Repeat it before attempting to reorganise your entire browsing history.

The building recipe is deliberately modest. A form makes a record. A list displays the records. A search box compares your query with their text. Browser storage keeps the collection between visits, while export gives it an exit. Someone adapting the tool can change the labels or appearance without inventing an account system.

The export file uses JSON, a text format that represents structured values. Its punctuation is for software; the titles and notes remain readable. JavaScript's built-in JSON methods convert between those records and text. [MDN's JSON reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) explains that conversion.

## Give the collection an exit

Export after your first few entries. Keep the resulting file somewhere you can find independently of the browser. A download named for the collection and date is easier to recognise than an unexplained pile of backups.

Browser saving is convenient, but it is not a backup service. The hosted library uses `localStorage`, which normally survives closing the browser. Storage can be blocked, and private browsing has different persistence rules. A downloaded HTML copy has an additional limitation: storage behaviour for files opened directly from disk is not guaranteed across browsers. [MDN documents these boundaries](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Keep using export when the collection matters.

The library does not synchronise devices or preserve the pages behind your links. A saved address can outlive its destination. For a page you genuinely need to retain, consider a separate permitted copy and check that it contains what you need. Also keep confidential tokens and private documents out of link notes; browser storage is no security vault.

## Try this: the missing-word test

Save five useful pages, close the library, and return later. Search using the first phrase that comes to mind, without checking your tags. When something is missing, improve its title or note. This is a better maintenance task than forcing every entry into a perfect taxonomy: you are teaching the collection the language you actually use.

