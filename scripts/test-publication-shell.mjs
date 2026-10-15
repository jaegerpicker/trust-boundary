import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [header, homepage, orbitMap, content] = await Promise.all([
  readFile(new URL('../src/components/Header.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/OrbitMap.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/site-content.ts', import.meta.url), 'utf8'),
]);

assert.match(header, /Trust Boundary/);
assert.match(header, /Shawn Campbell/);
assert.match(homepage, /home\.headline/);
assert.match(homepage, /home\.headlineEmphasis/);
assert.match(homepage, /OrbitMap/);
assert.match(homepage, /MissionCard/);
assert.match(homepage, /now-panel/);
assert.match(content, /export const now/);
assert.match(orbitMap, /<ul/);
assert.match(orbitMap, /href=/);
assert.match(content, /export const systems/);
assert.match(content, /export const missions/);
assert.match(content, /Trust Boundary/);
assert.match(content, /Mobile Engineering/);
assert.match(content, /Interactive Products/);
assert.match(content, /Engineering Leadership/);
assert.match(content, /Application Security/);
assert.match(content, /AI Security Lab/);
assert.match(content, /prototype/i);

console.log('publication shell tests passed');
