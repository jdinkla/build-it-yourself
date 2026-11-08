(function BIYWorkshop() {
  'use strict';
  const VERSION = 1;
  const MAX_FILE = 2 * 1024 * 1024;
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const NAMES = { links: 'Personal link library', decision: 'Decision workbench', week: 'One-page week' };
  const STYLE = ".workshop{--w-paper:var(--paper,#f5f2e9);--w-ink:var(--ink,#232722);--w-accent:var(--accent,#b23b25);--w-line:var(--line,#c9c9bb);--w-muted:var(--muted,#5c635a);font-family:Arial,Helvetica,sans-serif;color:var(--w-ink);max-width:74rem;margin:0 auto;line-height:1.55}.workshop *{box-sizing:border-box}.workshop h2,.workshop h3{font-family:inherit;line-height:1.2;text-wrap:balance}.workshop h2{font-size:1.6rem;margin:0 0 1rem}.workshop h3{font-size:1.15rem;margin:0 0 1rem}.workshop p{max-width:68ch}.workshop label{display:block;font-size:.95rem;font-weight:600}.workshop input,.workshop textarea,.workshop select,.workshop button{font:inherit;min-height:44px;border:1px solid var(--w-line);border-radius:2px;color:var(--w-ink);background:var(--w-paper);padding:.65rem .8rem}.workshop input:not([type=file]),.workshop textarea{width:100%;margin:.35rem 0 0}.workshop input[type=number]{max-width:6rem}.workshop textarea{resize:vertical;min-height:100px;line-height:1.5}.workshop button{cursor:pointer;font-weight:600;white-space:normal}.workshop button:hover{border-color:var(--w-ink)}.workshop button.primary{background:var(--w-ink);color:var(--w-paper);border-color:var(--w-ink)}.workshop :focus-visible{outline:3px solid var(--w-accent);outline-offset:3px}.workshop a{color:var(--w-accent);text-decoration:underline;text-underline-offset:.2em;overflow-wrap:anywhere}.workshop .workshop-intro{margin:0 0 1.5rem}.workshop .workshop-toolbar{display:flex;flex-wrap:wrap;gap:.65rem;margin:1.5rem 0}.workshop .workshop-status{font-size:.95rem;min-height:1.5em;margin:.75rem 0;color:var(--w-muted)}.workshop .workshop-status[data-error=true]{color:var(--w-accent);font-weight:600}.workshop .workshop-note{font-size:.9rem;color:var(--w-muted);margin:1rem 0 2rem}.workshop .workshop-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.workshop .workshop-field{margin:0 0 1rem}.workshop .workshop-wide{grid-column:1/-1}.workshop .workshop-form{padding:1.5rem 0;border-block:1px solid var(--w-line)}.workshop .workshop-form-actions{display:flex;flex-wrap:wrap;gap:.65rem}.workshop .workshop-links{padding:0;list-style:none;margin:1.5rem 0}.workshop .workshop-link{border-top:1px solid var(--w-line);padding:1.25rem 0}.workshop .workshop-link h3{margin:0 0 .35rem}.workshop .workshop-link p{margin:.4rem 0;white-space:pre-wrap;overflow-wrap:anywhere}.workshop .workshop-link small{display:block;color:var(--w-muted);overflow-wrap:anywhere}.workshop .workshop-link .workshop-form-actions{margin-top:.8rem}.workshop .workshop-empty{padding:2rem 0;color:var(--w-muted)}.workshop fieldset{min-width:0;border:1px solid var(--w-line);padding:1.25rem;margin:0 0 1.5rem}.workshop legend{font-weight:600;padding:0 .4rem}.workshop .workshop-three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.workshop .workshop-table-wrap{overflow-x:auto;margin:1.5rem 0}.workshop table{width:100%;border-collapse:collapse;min-width:450px}.workshop th,.workshop td{text-align:left;padding:.8rem .6rem;border-bottom:1px solid var(--w-line);vertical-align:middle}.workshop th{font-weight:600}.workshop td input{margin:0!important}.workshop .workshop-results{border-block:1px solid var(--w-ink);padding:1.5rem 0;margin:1.5rem 0}.workshop .workshop-results ol{padding-left:1.5rem}.workshop .workshop-results li{padding:.25rem 0}.workshop .workshop-score{font-variant-numeric:tabular-nums;font-weight:600}.workshop .workshop-days{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem}.workshop .workshop-days textarea{min-height:160px}.workshop .workshop-priorities{counter-reset:priority}.workshop .workshop-count{font-size:.9rem;color:var(--w-muted)}.workshop [hidden]{display:none!important}@media(max-width:640px){.workshop .workshop-grid,.workshop .workshop-three,.workshop .workshop-days{grid-template-columns:1fr}.workshop fieldset{padding:1rem}.workshop .workshop-form{padding:1rem 0}.workshop .workshop-toolbar button{flex:1 1 45%}}@media print{.workshop .workshop-toolbar,.workshop .workshop-status,.workshop .workshop-note,.workshop .workshop-intro,.workshop .workshop-form-actions{display:none!important}.workshop{color:#000;font-size:10pt;max-width:none}.workshop input,.workshop textarea{color:#000;background:transparent;border:0;padding:0;min-height:0;overflow:visible}.workshop .workshop-days{grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem}.workshop .workshop-days label{border-top:1px solid #777;padding-top:.4rem;break-inside:avoid}.workshop .workshop-days textarea{min-height:105px}.workshop fieldset{border:0;padding:0;break-inside:avoid}.workshop .workshop-results{break-inside:avoid}.workshop .workshop-table-wrap{overflow:visible}.workshop .workshop-link{break-inside:avoid}.workshop .workshop-grid{gap:.4rem}}\n\n.workshop .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}\n\n.workshop .workshop-print-view{display:none}@media print{.workshop:has([data-day]) [data-body]{display:none!important}.workshop .workshop-print-view{display:block}.workshop .workshop-print-view h2{font-size:19pt;margin:0 0 12pt}.workshop .workshop-print-view h3{font-size:11pt;margin:0 0 5pt}.workshop .workshop-print-view li,.workshop .workshop-print-view p{white-space:pre-wrap;overflow-wrap:anywhere;max-width:none}.workshop .workshop-print-view ol{margin:0 0 18pt;padding-left:18pt}.workshop .workshop-print-days{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12pt 20pt}.workshop .workshop-print-days section{border-top:1px solid #777;padding-top:5pt;min-height:58pt;break-inside:avoid}.workshop .workshop-print-days p{margin:0}.workshop .workshop-print-long .workshop-print-days{display:block}.workshop .workshop-print-long .workshop-print-days section{break-inside:auto;margin-bottom:14pt;min-height:0}}\n.workshop .workshop-scroll-hint{display:none;font-size:.9rem;color:var(--w-muted)}@media(max-width:640px){.workshop .workshop-scroll-hint{display:block}}@media print{.workshop .workshop-scroll-hint{display:none!important}}\n\n.workshop input::placeholder,.workshop textarea::placeholder{color:var(--w-muted);opacity:1}\n.workshop input,.workshop textarea,.workshop select{border-color:var(--control-border,#858b7c)}\n";
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const clone = value => JSON.parse(JSON.stringify(value));
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  function text(value, max, required = false) {
    if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new Error('A text field is missing or too long.');
    return value;
  }
  function webURL(value) {
    text(value, 2048, true);
    let url;
    try { url = new URL(value); } catch { throw new Error('Enter a complete link beginning with https:// or http://.'); }
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error('Use an http:// or https:// link without a username or password.');
    return url.href;
  }
  function number(value) {
    if (!Number.isInteger(value) || value < 0 || value > 5) throw new Error('Weights and scores must be whole numbers from 0 to 5.');
    return value;
  }
  function triple(value, validate) {
    if (!Array.isArray(value) || value.length !== 3) throw new Error('This workbench needs exactly three options and three criteria.');
    return value.map(validate);
  }
  function defaults(kind) {
    if (kind === 'links') return { links: [] };
    if (kind === 'decision') return { options: ['Option A', 'Option B', 'Option C'], criteria: ['Criterion 1', 'Criterion 2', 'Criterion 3'], weights: [1, 1, 1], scores: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] };
    return { weekOf: '', priorities: ['', '', ''], days: ['', '', '', '', '', '', ''] };
  }
  function validate(kind, value) {
    if (!object(value)) throw new Error('The file does not contain valid tool data.');
    if (kind === 'links') {
      if (!Array.isArray(value.links) || value.links.length > 500) throw new Error('A library can contain at most 500 links.');
      const seen = new Set();
      return { links: value.links.map(link => {
        if (!object(link)) throw new Error('A library entry is invalid.');
        const id = text(link.id, 100, true);
        if (seen.has(id)) throw new Error('The library contains duplicate entry IDs.');
        seen.add(id);
        return { id, title: text(link.title, 200, true), url: webURL(link.url), tag: text(link.tag, 60), note: text(link.note, 2000) };
      }) };
    }
    if (kind === 'decision') return { options: triple(value.options, v => text(v, 100)), criteria: triple(value.criteria, v => text(v, 100)), weights: triple(value.weights, number), scores: triple(value.scores, row => triple(row, number)) };
    if (kind !== 'week') throw new Error('Unknown tool type.');
    const weekOf = text(value.weekOf, 10);
    if (weekOf && (!/^\d{4}-\d{2}-\d{2}$/.test(weekOf) || !Number.isFinite(Date.parse(weekOf)) || new Date(weekOf).toISOString().slice(0, 10) !== weekOf)) throw new Error('The week date is invalid.');
    if (!Array.isArray(value.days) || value.days.length !== 7) throw new Error('A week must contain seven days.');
    return { weekOf, priorities: triple(value.priorities, v => text(v, 300)), days: value.days.map(v => text(v, 3000)) };
  }
  function parse(kind, raw) {
    if (typeof raw !== 'string' || raw.length > MAX_FILE) throw new Error('Choose a JSON file smaller than 2 MB.');
    let envelope;
    try { envelope = JSON.parse(raw); } catch { throw new Error('This is not a valid JSON file. Your current work is unchanged.'); }
    if (!object(envelope) || envelope.version !== VERSION || envelope.tool !== kind) throw new Error('Choose a version 1 export from this same tool. Your current work is unchanged.');
    return validate(kind, envelope.data);
  }
  function totals(data) {
    const denominator = data.weights.reduce((sum, weight) => sum + weight, 0);
    if (!denominator) return null;
    return data.scores.map(row => row.reduce((sum, score, index) => sum + score * data.weights[index], 0) / denominator);
  }
  const examples = {
    links: { links: [
      { id: 'example-mdn', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', tag: 'Learning', note: 'Illustrative example: reference material for a small browser project.' },
      { id: 'example-local', title: 'Local-first software', url: 'https://www.inkandswitch.com/essay/local-first/', tag: 'Reading', note: 'Illustrative example: an essay about ownership and collaboration.' }
    ] },
    decision: { options: ['Park picnic', 'Museum visit', 'Home lunch'], criteria: ['Easy to arrange', 'Weather independent', 'Quiet conversation'], weights: [3, 2, 4], scores: [[4, 0, 4], [2, 5, 2], [4, 5, 5]] },
    week: { weekOf: '', priorities: ['Finish one small project', 'Leave an evening unplanned', 'Make time for a friend'], days: ['Choose the project and its smallest useful version.', 'Spend 30 minutes on the first draft.', '', 'Check what works; remove one extra feature.', '', 'Share the useful version.', 'Review the week and export a copy.'] }
  };
  globalThis.BIY = { validate, parse, totals, defaults, webURL, examples };
  if (typeof document === 'undefined') return;
  const root = document.querySelector('[data-workshop]');
  if (!root) return;
  const kind = root.dataset.workshop;
  if (!Object.hasOwn(NAMES, kind)) return;
  root.classList.add('workshop');
  const style = document.createElement('style');
  style.textContent = STYLE;
  document.head.append(style);
  const copyId = typeof globalThis.__BIY_COPY_ID__ === 'string' && /^[a-zA-Z0-9-]{1,100}$/.test(globalThis.__BIY_COPY_ID__) ? globalThis.__BIY_COPY_ID__ : null;
  const key = `build-it-yourself:v1:${kind}${copyId ? `:copy:${copyId}` : ''}`;
  let data = defaults(kind);
  let storageBlocked = false;
  let startupMessage = 'Start with your own information, or load the illustrative example.';
  let startupError = false;
  if (globalThis.__BIY_BOOTSTRAP__) {
    try { data = parse(kind, JSON.stringify(globalThis.__BIY_BOOTSTRAP__)); startupMessage = 'This downloaded copy contains the work you included. Export JSON to keep a separate backup.'; }
    catch (error) { startupMessage = error.message; startupError = true; }
  }
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) { data = parse(kind, raw); startupMessage = 'Loaded the work saved in this browser. Export JSON to keep a separate backup.'; }
  } catch (error) {
    storageBlocked = true;
    startupError = true;
    startupMessage = 'Browser storage is unavailable or contains invalid data. Existing stored data will not be overwritten. You can still work here and export JSON.';
  }
  let editing = null;
  let query = '';
  let dirty = false;
  const envelope = () => ({ version: VERSION, tool: kind, data });
  function status(message, error = false) {
    const target = root.querySelector('[data-status]');
    target.textContent = message;
    target.dataset.error = String(error);
  }
  function save() {
    dirty = true;
    if (storageBlocked) { status('Changes are in this tab only. Browser saving is unavailable; export JSON before closing.', true); return; }
    try { localStorage.setItem(key, JSON.stringify(envelope())); status('Saved in this browser. Export JSON for a separate backup.'); }
    catch { storageBlocked = true; status('Could not save in this browser. Changes are in this tab only; export JSON before closing.', true); }
  }
  function download(name, content, type) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function standalone() {
    const boot = JSON.stringify(envelope()).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    const newCopyId = `copy-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
    const script = `globalThis.__BIY_COPY_ID__=${JSON.stringify(newCopyId)};globalThis.__BIY_BOOTSTRAP__=${boot};(${BIYWorkshop.toString()})();`;
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${NAMES[kind]} · Build It Yourself</title><style>body{margin:0;padding:clamp(1rem,4vw,3rem);background:#f5f2e9;color:#232722;font-family:Arial,Helvetica,sans-serif}header,footer{max-width:74rem;margin:0 auto 2rem}header a{color:inherit}h1{font-size:clamp(2rem,5vw,4rem);line-height:1.05}footer{margin-top:3rem;border-top:1px solid #c9c9bb;padding-top:1rem;font-size:.9rem}@media print{header p,footer{display:none}body{padding:0}}</style></head><body><header><p>Build It Yourself · a tool you can keep</p><h1>${NAMES[kind]}</h1></header><main><div data-workshop="${kind}"></div></main><footer>AI-created by Build It Yourself. This standalone tool makes no network requests. Browser storage is not a backup; use JSON export and import to move or restore your work.</footer><script>${script}</scr` + 'ipt></body></html>';
    download(`build-it-yourself-${kind}.html`, html, 'text/html;charset=utf-8');
    status('Downloaded a standalone HTML copy including your current work. Keep it private if that work is personal.');
  }
  function toolbar() {
    return '<div class="workshop-toolbar"><button type="button" data-export>Export JSON</button><button type="button" data-import>Import JSON</button><button type="button" data-download>Download tool</button><button type="button" data-example>Load example</button><button type="button" data-clear>Clear this tool</button>' + (kind === 'week' ? '<button type="button" data-print>Print week</button>' : '') + '</div><input type="file" accept=".json,application/json" data-file hidden aria-label="Import a JSON export"><p class="workshop-status" role="status" aria-live="polite" data-status></p><p class="workshop-note">Your entries stay in this browser; there is no sync. Browser storage can be cleared and is not an encrypted vault. Use noncritical information and export JSON regularly. A downloaded HTML copy works without a network connection, but browser saving for local files varies. It includes your current entries.</p>';
  }
  function render() {
    const intro = kind === 'links' ? 'Give useful links a title, a tag, and a reason to return. This library starts empty.' : kind === 'decision' ? 'Compare three options against three criteria. Higher scores must always mean a better fit; a weighted total is a prompt for judgment.' : 'Make room for the week, one day at a time. Keep the plan small enough to print.';
    root.innerHTML = `<p class="workshop-intro">${intro}</p>${toolbar()}<div data-body></div><div class="workshop-print-view" data-print-view></div>`;
    const body = root.querySelector('[data-body]');
    if (kind === 'links') renderLinks(body);
    if (kind === 'decision') renderDecision(body);
    if (kind === 'week') renderWeek(body);
    root.querySelector('[data-export]').onclick = () => { download(`build-it-yourself-${kind}.json`, JSON.stringify(envelope(), null, 2), 'application/json'); status('Exported a JSON copy. Store it somewhere you can find again.'); };
    root.querySelector('[data-download]').onclick = standalone;
    root.querySelector('[data-import]').onclick = () => root.querySelector('[data-file]').click();
    root.querySelector('[data-file]').onchange = async event => {
      const file = event.target.files[0];
      event.target.value = '';
      if (!file) return;
      if (file.size > MAX_FILE) { status('Choose a JSON file smaller than 2 MB. Your current work is unchanged.', true); return; }
      try {
        const next = parse(kind, await file.text());
        if (!confirm('Replace the current contents of this tool with this imported file? Export first if you need to keep both.')) return;
        data = next; editing = null; query = ''; render(); save();
      } catch (error) { status(error.message, true); }
    };
    root.querySelector('[data-example]').onclick = () => {
      if (!confirm('Replace the current contents with an illustrative example? Export first if you need to keep your work.')) return;
      data = clone(examples[kind]); editing = null; query = ''; render(); save();
      status(storageBlocked ? 'Illustrative example loaded in this tab only. Export JSON to keep it.' : 'Illustrative example loaded and saved in this browser. Edit it or clear it to start your own.', storageBlocked);
    };
    root.querySelector('[data-clear]').onclick = () => {
      if (!confirm('Clear the contents of this tool? This cannot be undone. Export JSON first if you need a backup.')) return;
      data = defaults(kind); editing = null; query = ''; render(); save();
    };
    const print = root.querySelector('[data-print]');
    if (print) print.onclick = () => { preparePrint(); window.print(); };
  }
  function field(label, name, value, max, type = 'text') {
    return `<label class="workshop-field">${label}<input name="${name}" type="${type}" value="${esc(value)}" maxlength="${max}"></label>`;
  }
  function renderLinks(body) {
    const current = data.links.find(link => link.id === editing) || { title: '', url: '', tag: '', note: '' };
    body.innerHTML = `<form class="workshop-form" data-link-form><h2>${editing ? 'Edit link' : 'Add a link'}</h2><div class="workshop-grid">${field('Title (required)', 'title', current.title, 200)}${field('Web address (required)', 'url', current.url, 2048, 'url')}${field('Tag', 'tag', current.tag, 60)}<div class="workshop-field"><label for="workshop-link-note">Why keep it?</label><textarea id="workshop-link-note" name="note" maxlength="2000">${esc(current.note)}</textarea></div></div><div class="workshop-form-actions"><button class="primary" type="submit">${editing ? 'Save link' : 'Add link'}</button>${editing ? '<button type="button" data-cancel>Cancel edit</button>' : ''}</div></form><div style="margin-top:1.5rem"><label>Search titles, tags, addresses, and notes<input type="search" data-search value="${esc(query)}" placeholder="Find a link"></label></div><p class="workshop-count" data-count></p><ul class="workshop-links" data-links></ul>`;
    const form = body.querySelector('form');
    form.elements.title.required = true;
    form.elements.url.required = true;
    form.onsubmit = event => {
      event.preventDefault();
      if (!editing && data.links.length >= 500) { status('This library is full (500 links). Export or remove an entry before adding another.', true); return; }
      try {
        const entry = { id: editing || `link-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`, title: text(form.elements.title.value.trim(), 200, true), url: webURL(form.elements.url.value.trim()), tag: text(form.elements.tag.value.trim(), 60), note: text(form.elements.note.value, 2000) };
        if (editing) data.links = data.links.map(link => link.id === editing ? entry : link); else data.links.push(entry);
        editing = null; renderLinks(body); save(); body.querySelector('[name=title]').focus();
      } catch (error) { status(error.message, true); }
    };
    const cancel = body.querySelector('[data-cancel]');
    if (cancel) cancel.onclick = () => { editing = null; renderLinks(body); };
    body.querySelector('[data-search]').oninput = event => { query = event.target.value; listLinks(body); };
    listLinks(body);
  }
  function listLinks(body) {
    const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const links = data.links.filter(link => terms.every(term => [link.title, link.url, link.tag, link.note].join(' ').toLocaleLowerCase().includes(term)));
    body.querySelector('[data-count]').textContent = `${links.length} of ${data.links.length} links`;
    const list = body.querySelector('[data-links]');
    list.innerHTML = '';
    if (!links.length) { const item = document.createElement('li'); item.className = 'workshop-empty'; item.textContent = data.links.length ? 'No links match. Try fewer search words.' : 'No links yet. Add your first useful address above, or load the illustrative example.'; list.append(item); }
    links.forEach(link => {
      const item = document.createElement('li');
      item.className = 'workshop-link';
      item.innerHTML = `<h3><a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.title)}</a></h3><small>${esc(link.url)}${link.tag ? ` · ${esc(link.tag)}` : ''}</small>${link.note ? `<p>${esc(link.note)}</p>` : ''}<div class="workshop-form-actions"><button type="button" data-edit>Edit<span class="sr-only"> link</span></button><button type="button" data-delete>Delete<span class="sr-only"> link</span></button></div>`;
      item.querySelector('[data-edit]').setAttribute('aria-label', `Edit ${link.title}`);
      item.querySelector('[data-delete]').setAttribute('aria-label', `Delete ${link.title}`);
      item.querySelector('[data-edit]').onclick = () => { editing = link.id; renderLinks(body); body.querySelector('[name=title]').focus(); };
      item.querySelector('[data-delete]').onclick = () => { if (!confirm(`Delete “${link.title}”? This cannot be undone.`)) return; data.links = data.links.filter(entry => entry.id !== link.id); if (editing === link.id) editing = null; renderLinks(body); save(); };
      list.append(item);
    });
  }
  function renderDecision(body) {
    body.innerHTML = `<fieldset><legend>Name three options</legend><div class="workshop-three">${data.options.map((name, index) => field(`Option ${index + 1}`, `option-${index}`, name, 100)).join('')}</div></fieldset><fieldset><legend>Name three criteria and set their importance</legend><p>Use positive criteria such as “easy to arrange”. Weight 0 ignores a criterion; 5 gives it the most importance.</p><div class="workshop-three">${data.criteria.map((name, index) => `<div>${field(`Criterion ${index + 1}`, `criterion-${index}`, name, 100)}<label>Weight ${index + 1}<input type="number" min="0" max="5" step="1" data-weight="${index}" value="${data.weights[index]}"></label></div>`).join('')}</div></fieldset><h2>Score each fit</h2><p>0 = no fit. 5 = strongest fit. Use the same interpretation for every option. These are your judgments, not measured facts.</p><p class="workshop-scroll-hint">Scroll the score table sideways to see all criteria.</p><div class="workshop-table-wrap" tabindex="0" role="region" aria-label="Scores for all options and criteria; scroll sideways to see more"><table><caption>Scores for each option and criterion</caption><thead><tr><th scope="col">Option</th>${data.criteria.map((name, index) => `<th scope="col" data-column="${index}">${esc(name || `Criterion ${index + 1}`)}</th>`).join('')}</tr></thead><tbody>${data.options.map((name, row) => `<tr><th scope="row" data-row="${row}">${esc(name || `Option ${row + 1}`)}</th>${data.scores[row].map((score, col) => `<td><input type="number" min="0" max="5" step="1" value="${score}" data-score="${row},${col}" aria-label="${esc(name || `Option ${row + 1}`)}: ${esc(data.criteria[col] || `Criterion ${col + 1}`)} score"></td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="workshop-results" data-results aria-live="polite"></div><p class="workshop-note">Calculation: sum of (score × weight), divided by the sum of weights. Results are out of 5. Changing the weights can change the ordering. This is a thinking aid for everyday choices, not advice for consequential decisions.</p>`;
    body.querySelectorAll('[name^=option-],[name^=criterion-]').forEach(input => input.oninput = () => {
      const [type, raw] = input.name.split('-');
      data[type === 'option' ? 'options' : 'criteria'][Number(raw)] = input.value;
      syncLabels(body); renderTotals(body); save();
    });
    body.querySelectorAll('[data-weight],[data-score]').forEach(input => input.oninput = () => {
      const raw = input.value;
      if (!/^[0-5]$/.test(raw)) { input.setCustomValidity('Enter a whole number from 0 to 5.'); status('Enter a whole number from 0 to 5. The last valid value is still used in totals.', true); return; }
      input.setCustomValidity('');
      const value = Number(raw);
      if (input.hasAttribute('data-weight')) data.weights[Number(input.dataset.weight)] = value;
      else { const [row, col] = input.dataset.score.split(',').map(Number); data.scores[row][col] = value; }
      renderTotals(body); save();
    });
    renderTotals(body);
  }
  function syncLabels(body) {
    body.querySelectorAll('[data-column]').forEach(cell => { const index = Number(cell.dataset.column); cell.textContent = data.criteria[index] || `Criterion ${index + 1}`; });
    body.querySelectorAll('[data-row]').forEach(cell => { const index = Number(cell.dataset.row); cell.textContent = data.options[index] || `Option ${index + 1}`; });
    body.querySelectorAll('[data-score]').forEach(input => { const [row, col] = input.dataset.score.split(',').map(Number); input.setAttribute('aria-label', `${data.options[row] || `Option ${row + 1}`}: ${data.criteria[col] || `Criterion ${col + 1}`} score`); });
  }
  function renderTotals(body) {
    const target = body.querySelector('[data-results]');
    const scores = totals(data);
    if (!scores) { target.innerHTML = '<h2>No ranking yet</h2><p>Every weight is zero. Give at least one criterion a positive weight to calculate a comparison.</p>'; return; }
    const rows = scores.map((score, index) => ({ score, index })).sort((a, b) => b.score - a.score);
    const best = rows[0].score;
    const tie = rows.filter(row => Math.abs(row.score - best) < 1e-10).length > 1;
    target.innerHTML = `<h2>${tie ? 'The highest total is tied' : 'Your current comparison'}</h2><ol>${rows.map(row => `<li>${esc(data.options[row.index] || `Option ${row.index + 1}`)}: <span class="workshop-score">${row.score.toFixed(2)} / 5</span></li>`).join('')}</ol><p>${tie ? 'There is no unique leader. Look at the tradeoffs rather than breaking the tie with extra decimal places.' : 'The highest total follows from the judgments entered above. It does not decide for you.'} Totals are displayed to two decimals; very close values can appear equal.</p>`;
  }
  function renderWeek(body) {
    body.innerHTML = `${field('Week of (optional)', 'week-date', data.weekOf, 10, 'date')}<fieldset><legend>Three things that would make this a good week</legend><div class="workshop-three">${data.priorities.map((priority, index) => field(`Priority ${index + 1}`, `priority-${index}`, priority, 300)).join('')}</div></fieldset><div class="workshop-days">${DAYS.map((day, index) => `<div class="workshop-day"><label for="workshop-day-${index}">${day}</label><textarea id="workshop-day-${index}" data-day="${index}" maxlength="3000">${esc(data.days[index])}</textarea></div>`).join('')}</div>`;
    body.querySelector('[name=week-date]').oninput = event => { data.weekOf = event.target.value; save(); };
    body.querySelectorAll('[name^=priority-]').forEach(input => input.oninput = () => { data.priorities[Number(input.name.split('-')[1])] = input.value; save(); });
    body.querySelectorAll('[data-day]').forEach(input => input.oninput = () => { data.days[Number(input.dataset.day)] = input.value; save(); });
  }
  function preparePrint() {
    if (kind !== 'week') return;
    const mirror = root.querySelector('[data-print-view]');
    const long = data.days.some(day => day.length > 600) || data.priorities.some(priority => priority.length > 100);
    mirror.classList.toggle('workshop-print-long', long);
    mirror.innerHTML = `<h2>One-page week${data.weekOf ? ` · ${esc(data.weekOf)}` : ''}</h2><h3>Three priorities</h3><ol>${data.priorities.map(priority => `<li>${esc(priority || '—')}</li>`).join('')}</ol><div class="workshop-print-days">${DAYS.map((day, index) => `<section><h3>${day}</h3><p>${esc(data.days[index] || ' ')}</p></section>`).join('')}</div>`;
  }
  window.addEventListener('beforeprint', preparePrint);
  window.addEventListener('beforeunload', event => { if (dirty && storageBlocked) { event.preventDefault(); event.returnValue = ''; } });
  render();
  status(startupMessage, startupError);
})();
