// Run with: node tests/more.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '../pages/more.html'), 'utf8');
function element() {
  const classes = new Set();
  return {
    classList: { add: value => classes.add(value), remove: value => classes.delete(value), contains: value => classes.has(value) },
    setAttribute(name, value) { this[name] = value; },
    getAttribute(name) { return this[name]; }
  };
}
const slides = Array.from(html.matchAll(/<figure class="slide/g), element);
const dots = Array.from(html.matchAll(/class="dot"/g), element);
const tracks = Array.from(html.matchAll(/class="track-item"/g), element);
assert.equal(slides.length, 7);
assert.equal(dots.length, slides.length);
assert.equal(tracks.length, 2);
const events = {};
const audio = { ...element(), play: () => Promise.resolve(), addEventListener: (name, callback) => { events[name] = callback; } };
const title = {};
const context = vm.createContext({
  console,
  document: {
    getElementsByClassName: name => name === 'slide' ? slides : dots,
    querySelectorAll: () => tracks,
    getElementById: id => id === 'audioPlayer' ? audio : title
  }
});
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
vm.runInContext(scripts.at(-1)[1], context);
function checkSlide(index) {
  assert.equal(slides.filter(slide => slide.classList.contains('active')).length, 1);
  assert.equal(slides[index].classList.contains('active'), true);
  assert.equal(dots.filter(dot => dot['aria-pressed'] === 'true').length, 1);
  assert.equal(dots[index]['aria-pressed'], 'true');
}
context.currentSlide(1);
for (let i = 1; i <= 7; i++) {
  context.changeSlide(1);
  checkSlide(i % 7);
}
context.changeSlide(-1);
checkSlide(6);
context.currentSlide(4);
checkSlide(3);
context.playTrack(tracks[0], 'first.mp3', 'First');
context.playTrack(tracks[1], 'second.mp3', 'Second');
assert.equal(audio.src, 'second.mp3');
assert.equal(title.textContent, 'Second');
assert.equal(tracks[0]['aria-pressed'], 'false');
assert.equal(tracks[1]['aria-pressed'], 'true');
events.ended();
assert.ok(tracks.every(track => track['aria-pressed'] === 'false'));
console.log('Verified all 7 slides, wraparound, direct selection, track switching, and playback completion.');
