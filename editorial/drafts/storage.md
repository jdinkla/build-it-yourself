# What your browser remembers

A browser tool can remember your writing without creating an account. That is convenient when you reopen a plan tomorrow. It is less convenient when “saved here” sounds like “saved everywhere” or “saved forever.”

The three tools in this issue use browser storage for their working copy. They also let you export a file. Understanding the difference takes less effort than reconstructing a lost week of notes.

## Name the place

The storage mechanism is called `localStorage`. Its entries normally survive closing and reopening the browser. They belong to an origin: a combination of the address's scheme, host, and port. They are not an account and do not provide synchronization between your devices. [MDN documents these rules](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), including the different treatment of private browsing.

A practical label is “Saved in this browser.” It leaves room for the things that change the answer: another browser profile, another computer, a different site address, or browser settings that prevent storage.

Try this illustrative example. Write “Bring the library books” into a disposable week plan, then reload that page. Now open the same address in another browser. The second view is not a second window into a shared account. To move your work, use the tool's export and import controls.

## A folder name is not a wall

Two applications at different paths on the same origin share the same local-storage area. A magazine at `example.org/magazine/` and another project at `example.org/another-project/` are not isolated by those folders. Naming storage keys carefully prevents accidental collisions; it does not create a security boundary.

Scripts that run on that origin can access the storage. OWASP therefore advises against treating it as a place for sensitive information, and explains how a script-injection flaw can expose or alter the contents. [Its HTML5 security guidance](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html) also calls out the lack of path-level separation. A local-storage tool is not an encrypted vault.

Use the planner for ordinary reminders, not passwords or confidential records. On a shared computer, consider who else can open the browser profile. “No account” describes how you enter the tool; it does not establish who can see the device.

## Make a copy you control

Browser storage can be removed by clearing site data. Private browsing has a shorter lifetime, and storage access may be blocked by policy. Downloaded HTML files add another complication: browsers do not define consistent `localStorage` behavior for pages opened with a `file:` address. Do not assume a saved page will keep its working copy the same way the hosted version does.

For anything worth keeping, export before closing a private session, moving or renaming a downloaded tool, or clearing browser data. Keep the downloaded data file separately from the tool itself. The page supplies the interface; the export supplies your information.

A small maintenance ritual helps: after a substantial change, save a dated export somewhere familiar. Occasionally open it and check that it contains what you expect. An export you cannot locate when you need it is only theoretically useful.

For a final exercise, complete three sentences about the tool you are using: “My current copy is in…”, “My backup is in…”, and “I recover it by…”. If any answer is vague, make one disposable entry and rehearse the process. Knowing where your words live is a practical kind of digital independence.
