import {readFile,readdir,stat} from 'node:fs/promises';
import {join,resolve} from 'node:path';
const dir=resolve('site/dist');const base='/build-it-yourself';
async function files(path){const out=[];for(const f of await readdir(path)){const p=join(path,f);if((await stat(p)).isDirectory())out.push(...await files(p));else out.push(p);}return out;}
const all=await files(dir);let checked=0;const errors=[];
for(const file of all.filter(p=>p.endsWith('.html'))){const html=await readFile(file,'utf8');
 for(const match of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)){const raw=match[1].replaceAll('&amp;','&');if(!raw.startsWith('/'))continue;checked++;if(!raw.startsWith(base+'/')&&raw!==base){errors.push(`${file}: unprefixed ${raw}`);continue;}let target=join(dir,decodeURIComponent(raw.slice(base.length).split(/[?#]/)[0]));try{if((await stat(target)).isDirectory())target=join(target,'index.html');await stat(target);}catch{errors.push(`${file}: missing ${raw}`);}}
 if(/PROJECT_NAME|PROJECT_SLUG|lorem ipsum|unnamed skeleton/i.test(html))errors.push(`${file}: placeholder text`);
}
for(const file of all.filter(p=>p.endsWith('.css'))){const css=await readFile(file,'utf8');for(const [,url] of css.matchAll(/url\(['"]?(\/build-it-yourself\/[^)'" ]+)/g)){checked++;try{await stat(join(dir,url.slice(base.length)));}catch{errors.push(`${file}: missing CSS asset ${url}`);}}}
if(errors.length)throw new Error(errors.join('\n'));
console.log(`Built output: ${checked} internal page and asset references resolve; no placeholders.`);
