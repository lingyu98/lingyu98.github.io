// Run with: node tests/papers.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const container = { innerHTML: '' };
let onReady;
const context = vm.createContext({
  document: {
    getElementById: () => container,
    addEventListener: (event, callback) => { onReady = callback; }
  }
});
vm.runInContext(fs.readFileSync(path.join(root, 'papers.js'), 'utf8'), context);
onReady();
const papers = vm.runInContext('papers', context);
const html = container.innerHTML;
assert.equal((html.match(/<article /g) || []).length, papers.length);
assert.equal((html.match(/<details /g) || []).length, papers.length);
for (const paper of papers) {
  assert.ok(html.includes(paper.title));
  assert.ok(html.includes(paper.description));
  assert.ok(html.includes(paper.venue));
  for (const author of paper.authors) assert.ok(html.includes(author.name));
  for (const link of paper.links) assert.ok(html.includes(`href="${link.url}"`));
  for (const media of [paper.image, paper.hoverImage].filter(Boolean)) {
    assert.ok(html.includes(media));
    assert.ok(fs.existsSync(path.join(root, media)), `Missing media: ${media}`);
  }
}
assert.match(html, /<video controls/);
assert.doesNotMatch(html, /<script|onmouseover|onmouseout|<details[^>]*\bopen\b/);
onReady();
assert.equal(container.innerHTML, html, 'Rendering twice must not duplicate papers');
context.document.getElementById = () => null;
assert.doesNotThrow(onReady);
console.log(`Verified all ${papers.length} publications, links, media, and repeat rendering.`);
