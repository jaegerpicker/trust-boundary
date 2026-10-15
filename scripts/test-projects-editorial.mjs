import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [config, projects, blog, readme, content] = await Promise.all([
  readFile(new URL('../src/content.config.ts', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/projects/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/blog/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../README.md', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/site-content.ts', import.meta.url), 'utf8'),
]);

for (const format of [
  'system-deep-dive',
  'flight-log',
  'postmortem',
  'cross-system-test',
]) {
  assert.match(config, new RegExp(format));
}

assert.match(config, /optional\(\)/);
assert.match(projects, /projects\.areas/);
assert.match(content, /Application Security/);
assert.match(content, /AI Security Lab/);
assert.match(blog, /Flight Log/);
assert.match(blog, /System Deep Dives/);
assert.match(readme, /Product engineering leads the positioning/);
assert.match(content, /Human and device validation pending/);
assert.match(content, /Development assistance does not establish that a product contains AI/);

console.log('projects and editorial tests passed');
