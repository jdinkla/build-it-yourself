import {chromium} from 'playwright';
import {createServer} from 'node:http';
import {readFile,stat,mkdir,writeFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import assert from 'node:assert/strict';
const directory=resolve('site/dist');const base='/build-it-yourself';
const server=createServer(async(req,res)=>{try{let path=new URL(req.url,'http://local').pathname;if(!path.startsWith(base+'/')){res.writeHead(404).end();return;}let file=resolve(directory,'.'+decodeURIComponent(path.slice(base.length)));if(file!==directory&&!file.startsWith(directory+sep))throw Error();if((await stat(file)).isDirectory())file+='/index.html';res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'text/javascript','.ttf':'font/ttf','.svg':'image/svg+xml','.xml':'application/xml'})[extname(file)]||'application/octet-stream');res.end(await readFile(file));}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const host=`http://127.0.0.1:${server.address().port}`;const browser=await chromium.launch();const evidence=[];
try{
const inventory=JSON.parse(await readFile('shots/pages.json','utf8'));
for(const width of [320,390,768,1280,1440]){
const ctx=await browser.newContext({viewport:{width,height:900}});const page=await ctx.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});page.on('request',r=>{if(!r.url().startsWith(host)&&!r.url().startsWith('data:'))errors.push('Third-party request: '+r.url());});
for(const item of inventory.pages){console.log(`Checking ${item.id} at ${width}px`);const response=await page.goto(host+base+item.path);assert.equal(response.status(),200,`${item.id} returned HTTP ${response.status()}`);await page.locator('h1').waitFor();await page.evaluate(()=>document.fonts.ready);const wide=await page.evaluate(()=>({doc:document.documentElement.scrollWidth,viewport:innerWidth}));assert.ok(wide.doc<=wide.viewport+2,`${item.id} at ${width}: overflow ${JSON.stringify(wide)}`);assert.equal(await page.locator('h1').count(),1);}
assert.deepEqual(errors,[]);evidence.push(`${inventory.pages.length} pages at ${width}px: no page overflow, failed requests, script errors or third-party requests`);
if(width===1440){await page.goto(host+base+'/issues/');await page.locator('#story-search').fill('browser');assert.equal(await page.locator('.archive-row:visible').count(),2);await page.reload();assert.equal(await page.locator('#story-search').inputValue(),'browser');assert.equal(await page.locator('.archive-row:visible').count(),2);await page.locator('#story-search').fill('zznomatch');assert.equal(await page.locator('.archive-row:visible').count(),0);assert.ok(await page.locator('#no-stories').isVisible());await page.locator('#story-search').fill('');assert.equal(await page.locator('.archive-row:visible').count(),6);evidence.push('Issue search: filtering, shareable URL/reload, empty result and reset pass');}
await ctx.close();
}
const ctx=await browser.newContext({javaScriptEnabled:false});const page=await ctx.newPage();for(const slug of ['','bookmarks/','issues/']){await page.goto(host+base+'/'+slug);assert.ok((await page.locator('main').innerText()).length>500);}await ctx.close();evidence.push('Cover, article and issue contents remain readable without JavaScript');
await mkdir('shots/checks',{recursive:true});await writeFile('shots/checks/site-browser.json',JSON.stringify({checkedAt:new Date().toISOString(),evidence},null,2));console.log(evidence.join('\n'));
}finally{await browser.close();await new Promise(r=>server.close(r));}
