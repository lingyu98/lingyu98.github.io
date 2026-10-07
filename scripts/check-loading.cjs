// Run with: node scripts/check-loading.cjs
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
let html, writes = 0, ready;
const container = { set innerHTML(value) { html = value; writes++; } };
const document = {
    getElementById: () => container,
    addEventListener: (_, callback) => { ready = callback; }
};
const context = vm.createContext({ document });
vm.runInContext(readFileSync(path.join(root, 'papers.js'), 'utf8'), context);
ready();
assert.equal(writes, 1, 'Render the list once, without reparsing previous rows.');
const papers = vm.runInContext('papers', context);
assert.equal((html.match(/class="paper-row"/g) || []).length, papers.length);
for (const paper of papers) {
    for (const text of [paper.title, paper.venue, paper.summary, ...paper.authors.map(a => a.name), ...paper.links.map(l => l.url)]) {
        if (text) assert(html.includes(text), `Missing paper content: ${text}`);
    }
    assert(html.includes(`src='${paper.image}'`));
    assert(readFileSync(path.join(root, paper.image)).length > 0);
}
const firstRender = html;
ready();
assert.equal(html, firstRender, 'Rendering again must not duplicate publications.');
document.getElementById = () => null;
assert.doesNotThrow(ready, 'Pages without a publication container should be safe.');
console.log(`PASS: ${papers.length} complete publications, one DOM write, repeat rendering, and missing-container handling.`);
