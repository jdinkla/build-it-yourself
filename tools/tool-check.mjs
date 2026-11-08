import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';

const source = await readFile(new URL('../site/public/workshop/tool.js', import.meta.url), 'utf8');
const context = { URL };
runInNewContext(source, context);
const { validate, parse, totals, defaults, webURL, examples } = context.BIY;
let count = 0;
const test = (name, fn) => { fn(); count++; process.stdout.write(`✓ ${name}\n`); };
const plain = value => JSON.parse(JSON.stringify(value));

test('every empty tool state round-trips through its versioned export', () => {
  for (const tool of ['links', 'decision', 'week']) {
    const data = defaults(tool);
    assert.deepEqual(plain(parse(tool, JSON.stringify({ version: 1, tool, data }))), plain(data));
  }
});
test('every illustrative example passes the same import validation', () => {
  for (const tool of ['links', 'decision', 'week']) assert.deepEqual(plain(validate(tool, examples[tool])), plain(examples[tool]));
});
test('weighted means use weights and correct denominator', () => {
  const data = { weights: [3, 1, 0], scores: [[5, 1, 5], [0, 4, 5], [2, 2, 2]] };
  assert.deepEqual(plain(totals(data)), [4, 1, 2]);
});
test('zero total weight produces no ranking', () => assert.equal(totals({ weights: [0, 0, 0], scores: [[5, 5, 5]] }), null));
test('equal scores remain tied', () => assert.deepEqual(plain(totals(defaults('decision'))), [0, 0, 0]));
test('zero-weight criteria cannot affect the mean', () => assert.deepEqual(plain(totals({ weights: [5, 0, 0], scores: [[3, 5, 5], [3, 0, 0]] })), [3, 3]));
test('imports reject wrong versions and tools before replacement', () => {
  assert.throws(() => parse('week', JSON.stringify({ version: 2, tool: 'week', data: defaults('week') })));
  assert.throws(() => parse('week', JSON.stringify({ version: 1, tool: 'decision', data: defaults('decision') })));
});
test('imports reject malformed JSON and oversized files', () => {
  assert.throws(() => parse('week', '{'));
  assert.throws(() => parse('links', 'x'.repeat(2 * 1024 * 1024 + 1)));
});
test('weights and scores reject strings, fractions, infinities, negatives, and out-of-range values', () => {
  for (const value of ['5', 1.1, Infinity, NaN, -1, 6, null]) {
    const data = defaults('decision'); data.weights[0] = value;
    assert.throws(() => validate('decision', data));
    const scores = defaults('decision'); scores.scores[0][0] = value;
    assert.throws(() => validate('decision', scores));
  }
});
test('decision matrix shape must be exactly three by three', () => {
  const data = defaults('decision'); data.scores[1] = [1, 2];
  assert.throws(() => validate('decision', data));
  data.scores[1] = [1, 2, 3]; data.options.push('Fourth');
  assert.throws(() => validate('decision', data));
});
test('library rejects script URLs, relative URLs, credentials and invalid URLs', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,hi', '/relative', 'https://user:pass@example.com/', 'not a url']) assert.throws(() => webURL(value));
  assert.equal(webURL('https://example.com'), 'https://example.com/');
});
test('library rejects duplicate IDs and missing required titles', () => {
  const link = plain(examples.links.links[0]);
  assert.throws(() => validate('links', { links: [link, link] }));
  assert.throws(() => validate('links', { links: [{ ...link, title: ' ' }] }));
});
test('library enforces entry and text limits', () => {
  const link = plain(examples.links.links[0]);
  assert.throws(() => validate('links', { links: [{ ...link, note: 'n'.repeat(2001) }] }));
  assert.throws(() => validate('links', { links: Array.from({ length: 501 }, (_, i) => ({ ...link, id: String(i) })) }));
});
test('week rejects invalid calendar dates, wrong day counts and oversized priorities', () => {
  for (const weekOf of ['2026-02-30', 'bad-date', '2026-13-01']) assert.throws(() => validate('week', { ...defaults('week'), weekOf }));
  assert.throws(() => validate('week', { ...defaults('week'), days: ['Monday'] }));
  assert.throws(() => validate('week', { ...defaults('week'), priorities: ['x'.repeat(301), '', ''] }));
  assert.equal(validate('week', { ...defaults('week'), weekOf: '2028-02-29' }).weekOf, '2028-02-29');
});
test('untrusted text remains text during validation and does not mutate input', () => {
  const data = plain(examples.links);
  data.links[0].title = '<img src=x onerror=alert(1)>';
  const validated = validate('links', data);
  validated.links[0].title = 'Edited';
  assert.equal(data.links[0].title, '<img src=x onerror=alert(1)>');
});
test('standalone source contains no literal closing script tag', () => assert.equal(/<\/script/i.test(source), false));
test('standalone includes its own styles rather than an unresolved placeholder', () => {
  assert.equal(source.includes('__WORKSHOP_STYLES__'), false);
  assert.ok(source.includes('.workshop')); 
});
process.stdout.write(`${count} tool checks passed.\n`);

if (process.argv.includes('--browser')) {
  const { chromium } = await import('playwright');
  const { mkdtemp, writeFile } = await import('node:fs/promises');
  const { tmpdir } = await import('node:os');
  const { join } = await import('node:path');
  const { pathToFileURL } = await import('node:url');
  const { execFileSync } = await import('node:child_process');
  const directory = await mkdtemp(join(tmpdir(), 'biy-tool-check-'));
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
    const errors = [];
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    await context.route('http://workshop.test/**', route => {
      const kind = new URL(route.request().url()).pathname.slice(1);
      return route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta charset="utf-8"></head><body><div data-workshop="' + kind + '"></div><script>' + source + '</scr' + 'ipt></body></html>' });
    });
    await page.goto('http://workshop.test/links');
    await page.getByLabel('Title (required)').fill('A reference');
    await page.getByLabel('Web address (required)').fill('https://example.com/');
    await page.getByLabel('Why keep it?').fill('</script><img src=x onerror=alert(1)>');
    await page.getByRole('button', { name: 'Add link', exact: true }).click();
    await page.getByRole('button', { name: 'Edit A reference', exact: true }).click();
    await page.getByLabel('Title (required)').fill('Edited reference');
    await page.getByRole('button', { name: 'Save link', exact: true }).click();
    assert.equal(await page.locator('.workshop-link img').count(), 0);
    await page.getByLabel('Search titles, tags, addresses, and notes').fill('absent');
    assert.match(await page.locator('[data-links]').innerText(), /No links match/);
    await page.getByLabel('Search titles, tags, addresses, and notes').fill('');
    const downloadEvent = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download tool', exact: true }).click();
    const download = await downloadEvent;
    const localFile = join(directory, 'links.html');
    await download.saveAs(localFile);
    await context.setOffline(true);
    await page.goto(pathToFileURL(localFile).href);
    assert.equal(await page.getByRole('link', { name: 'Edited reference' }).count(), 1);
    assert.equal(await page.locator('.workshop-link img').count(), 0);
    await page.getByRole('button', { name: 'Edit Edited reference', exact: true }).click();
    await page.getByLabel('Title (required)').fill('Saved downloaded edit');
    await page.getByRole('button', { name: 'Save link', exact: true }).click();
    await page.reload();
    assert.equal(await page.getByRole('link', { name: 'Saved downloaded edit' }).count(), 1);
    process.stdout.write('✓ browser: link CRUD/search, malicious text safety, downloaded file offline operation and saved edits after reload\n');
    await context.setOffline(false);
    await page.goto('http://workshop.test/decision');
    for (let index = 1; index <= 3; index++) await page.getByLabel(`Weight ${index}`, { exact: true }).fill('0');
    assert.match(await page.locator('[data-results]').innerText(), /No ranking yet/);
    await page.getByLabel('Weight 1', { exact: true }).fill('5');
    await page.getByRole('spinbutton', { name: 'Option A: Criterion 1 score', exact: true }).fill('4');
    assert.match(await page.locator('[data-results]').innerText(), /Option A: 4.00/);
    await page.getByLabel('Option 1', { exact: true }).fill('New name');
    assert.equal(await page.getByRole('spinbutton', { name: 'New name: Criterion 1 score', exact: true }).count(), 1);
    process.stdout.write('✓ browser: all-zero decision weights, weighted result and dynamic labels\n');
    await page.goto('http://workshop.test/week');
    await page.getByLabel('Priority 1', { exact: true }).fill('Read one article');
    await page.getByLabel('Monday', { exact: true }).fill('A short plan');
    await page.reload();
    assert.equal(await page.getByLabel('Monday', { exact: true }).inputValue(), 'A short plan');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    for (const bad of ['{"version":1,"tool":"decision","data":{}}', '{broken']) {
      await page.locator('[data-file]').setInputFiles({ name: 'bad.json', mimeType: 'application/json', buffer: Buffer.from(bad) });
      await page.waitForFunction(() => document.querySelector('[data-status]').dataset.error === 'true');
      assert.equal(await page.getByLabel('Monday', { exact: true }).inputValue(), 'A short plan');
    }
    process.stdout.write('✓ browser: week saved-data labels, mobile overflow, wrong-kind and malformed import preserving current work\n');
    await page.evaluate(() => dispatchEvent(new Event('beforeprint')));
    const shortPDF = join(directory, 'week-short.pdf');
    await page.pdf({ path: shortPDF, format: 'A4', margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' } });
    const shortInfo = execFileSync('pdfinfo', [shortPDF], { encoding: 'utf8' });
    assert.match(shortInfo, /Pages:\s+1\b/);
    const shortText = execFileSync('pdftotext', ['-layout', shortPDF, '-'], { encoding: 'utf8' });
    assert.ok(shortText.includes('Read one article') && shortText.includes('A short plan') && shortText.includes('Sunday'));
    const priority = 'A deliberately long priority that should wrap across several printed lines. '.repeat(3);
    const note = 'Keep every word of this long note when the week is printed. '.repeat(40) + ' FINAL-NOTE-MARKER';
    await page.getByLabel('Priority 2', { exact: true }).fill(priority);
    await page.getByLabel('Tuesday', { exact: true }).fill(note);
    const longPDF = join(directory, 'week-long.pdf');
    await page.pdf({ path: longPDF, format: 'A4', margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' } });
    const longText = execFileSync('pdftotext', ['-layout', longPDF, '-'], { encoding: 'utf8' });
    assert.ok(longText.includes('FINAL-NOTE-MARKER'));
    assert.ok(longText.includes('A deliberately long priority'));
    assert.ok(longText.replace(/\s+/g, ' ').includes(note.replace(/\s+/g, ' ').trim()));
    assert.deepEqual(errors, []);
    process.stdout.write(`✓ browser: short week prints on one A4 page; long priorities/notes survive PDF pagination\nBrowser evidence: ${directory}\n`);
  } finally { await browser.close(); }
}
