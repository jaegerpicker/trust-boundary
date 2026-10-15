import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [resume, about, footer, giscus, rss, content] = await Promise.all([
  readFile(new URL('../src/pages/resume.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/about.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Footer.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Giscus.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/rss.xml.js', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/site-content.ts', import.meta.url), 'utf8'),
]);

assert.match(resume, /resume\.roleLine/);
assert.match(content, /Hands-on mobile and product engineer/);
assert.match(content, /Mobile and Web Product Engineering/);
assert.match(content, /Staff\/Principal mobile and product engineering/);
assert.match(content, /Remote US/);
assert.match(content, /Engineering Leadership/);
assert.match(resume, /@media print/);
// Retain confirmed chronology and keep unverified metrics/incidents out of the candidate.
assert.match(resume, /January 2, 2024 - September 14, 2026/);
assert.match(resume, /September 15, 2026 - Present/);
assert.doesNotMatch(resume, /zero-day discovery|December 2023 - Present|100,000 deployed devices/);
assert.doesNotMatch(resume, /20 engineering teams|three client platforms|open relay|10,000|21 states|two to eight|two employees|six contractors|75%|password hashes|15 people|publicly traded|three contractors/);
assert.match(resume, /Built and managed up to three engineering teams/);
assert.match(resume, /OWASP Top 10/);
assert.doesNotMatch(resume, /concurrently|Own venture/);
// The resume opens in the conventional view for recruiters.
assert.match(resume, /defaultView="direct"/);
assert.match(resume, /downloads\/shawn-campbell-resume\.pdf/);
assert.doesNotMatch(resume, /window\.print/);
assert.match(resume, /<span class="direct-only">Skills<\/span>/);
assert.match(resume, /html\[data-view='direct'\]/);
assert.match(about, /Trust Boundary/);
assert.match(about, /about\.lead/);
assert.match(content, /AI-Assisted/);

for (const source of [footer, giscus]) {
  assert.match(source, /small_screens_big_worlds/);
  assert.doesNotMatch(source, /ai_sec_research/);
}

assert.match(rss, /Trust Boundary/);

console.log('profile repositioning tests passed');
