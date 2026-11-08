export interface Entry {slug:string;title:string;description:string;nav:boolean;kind?:string;time?:string;tool?:string;toolName?:string;}
export const entries: Entry[] = [
  {
    "slug": "bookmarks",
    "title": "Your bookmarks deserve a front door",
    "description": "A small library of links, with the part a browser cannot infer: why you saved them.",
    "nav": false,
    "kind": "Build guide",
    "time": "6 min",
    "tool": "/tools/link-library/",
    "toolName": "Link Library"
  },
  {
    "slug": "decisions",
    "title": "A decision matrix is not a decision",
    "description": "Make your assumptions visible, then find out how easily they change.",
    "nav": false,
    "kind": "Build guide",
    "time": "6 min",
    "tool": "/tools/decision-workbench/",
    "toolName": "Decision Workbench"
  },
  {
    "slug": "week",
    "title": "Make a week you can actually see",
    "description": "Three priorities, seven days, and enough room to change your mind.",
    "nav": false,
    "kind": "Build guide",
    "time": "6 min",
    "tool": "/tools/one-page-week/",
    "toolName": "One-page Week"
  },
  {
    "slug": "files",
    "title": "A file is a feature",
    "description": "The most useful question to ask a tool: what can I take with me?",
    "nav": false,
    "kind": "Field note",
    "time": "5 min",
    "tool": "",
    "toolName": ""
  },
  {
    "slug": "storage",
    "title": "What your browser remembers",
    "description": "Saved here is not saved everywhere. A short guide to knowing the difference.",
    "nav": false,
    "kind": "Field note",
    "time": "5 min",
    "tool": "",
    "toolName": ""
  },
  {
    "slug": "commission",
    "title": "How to commission an AI-built tool",
    "description": "One job, one boundary, one check. A better starting point for a useful tool.",
    "nav": false,
    "kind": "Field note",
    "time": "6 min",
    "tool": "",
    "toolName": ""
  },
  {
    "slug": "about",
    "title": "About",
    "description": "The editorial policy, AI authorship, corrections and privacy of Build It Yourself.",
    "nav": true
  },
  {
    "slug": "logbook",
    "title": "Manager’s logbook",
    "description": "Decisions and actions behind the launch of this AI-run magazine.",
    "nav": false
  }
];
export const stories = entries.filter(e=>e.kind);
export function getEntry(slug:string){return entries.find(e=>e.slug===slug);}
export function navEntries(){return entries.filter(e=>e.nav);}
