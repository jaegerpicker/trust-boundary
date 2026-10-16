import assert from 'node:assert/strict';
import { readFile, writeFile, readdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { selectMode, isDiscoverable, isPublished } from '../src/lib/content-mode.ts';

for (const mode of ['product', 'security']) {
  assert.equal(selectMode(mode), mode);
  for (const audience of ['product', 'security', 'shared', undefined]) {
    assert.equal(isDiscoverable({ audience }, mode), mode === 'product' || audience !== 'product');
    assert.equal(isDiscoverable({ audience, draft: true }, mode), false);
    assert.equal(isPublished({ audience, draft: true }), false);
    assert.equal(isPublished({ audience }), true);
  }
}
for (const invalid of [undefined, null, '', 'Security', 'ops', 'direct']) assert.throws(() => selectMode(invalid));

const config = new URL('../site-mode.json', import.meta.url);
const original = await readFile(config, 'utf8');
const fixtures = [];
const output = new URL('../dist/', import.meta.url);
async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir);
    files.push(...(entry.isDirectory() ? await walk(path) : [path]));
  }
  return files;
}
try {
  for (const audience of ['product', 'security', 'shared']) {
    for (const draft of [false, true]) {
      const slug = `mode-fixture-${audience}-${draft ? 'draft' : 'published'}`;
      const file = new URL(`../src/content/blog/${slug}.md`, import.meta.url);
      await writeFile(file, `---\ntitle: ${slug}\ndescription: ${slug}\naudience: ${audience}\ndraft: ${draft}\nfeatured: true\n${draft ? '' : 'pubDate: 2026-01-01\n'}---\n${slug} body sentinel\n`, { flag: 'wx' });
      fixtures.push({ file, slug, audience, draft });
    }
  }
  for (const mode of ['security', 'product']) {
    await writeFile(config, JSON.stringify({ mode }, null, 2) + '\n');
    execFileSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
      env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }, stdio: 'pipe',
    });
    const read = path => readFile(new URL(path, output), 'utf8');
    const home = await read('index.html');
    const blog = await read('blog/index.html');
    const rss = await read('rss.xml');
    const sitemap = await read('sitemap-0.xml');
    for (const page of ['projects/index.html', 'about/index.html', 'resume/index.html']) {
      const html = await read(page);
      assert.ok(html.includes(`data-content-mode="${mode}"`));
      assert.ok(html.includes(mode === 'security' ? 'Security Work' : 'Projects'));
    }
    assert.ok((await read('projects/index.html')).includes(mode === 'security' ? 'Security Practice &amp; Research' : 'Product Engineering &amp; Experiments'));
    assert.ok(home.includes('<meta name="description" content="' + (mode === 'security' ? 'Application security and AI security' : 'Mobile, web, and interactive')));
    assert.ok(home.includes(`data-content-mode="${mode}"`));
    assert.ok(home.includes(mode === 'security' ? 'Examine the boundaries.' : 'Thoughtful products.'));
    assert.ok(home.includes(mode === 'security' ? 'Security Work' : 'Projects'));
    assert.ok(rss.includes(mode === 'security' ? 'trust boundaries' : 'Product engineering'));
    for (const item of fixtures) {
      const visible = isDiscoverable(item, mode);
      for (const surface of [home, blog, rss]) assert.equal(surface.includes(item.slug), visible, `${mode}: discovery ${item.slug}`);
      assert.equal(sitemap.includes(item.slug), !item.draft, `${mode}: sitemap ${item.slug}`);
      if (!item.draft) assert.ok((await read(`blog/${item.slug}/index.html`)).includes(`${item.slug} body sentinel`));
    }
    const realDrafts = ['production-agent-attack-surface', 'stellar-forge-offline-expedition', 'zeroday-rules-before-models', 'unnamed-ios-app-local-ai', 'job-intel-tracker-fieldnotes'];
    const draftTitles = await Promise.all(realDrafts.map(async slug => {
      const source = await readFile(new URL(`../src/content/blog/${slug}.md`, import.meta.url), 'utf8');
      assert.match(source, /^draft: true$/m);
      return source.match(/^title: "(.*)"$/m)[1];
    }));
    const forbidden = [...realDrafts, ...fixtures.filter(f => f.draft).map(f => f.slug)];
    for (const file of await walk(output)) {
      for (const slug of forbidden) assert.ok(!file.pathname.includes(`/blog/${slug}/`));
      if (/\.(html|xml|json|js|txt)$/.test(file.pathname)) {
        const text = await readFile(file, 'utf8');
        for (const slug of [...forbidden, ...draftTitles]) assert.ok(!text.includes(slug), `${mode}: draft leak in ${file.pathname}`);
      }
    }
    for (const slug of ['welcome', 'breaking-agents-llm01-prompt-injection', 'shai-hulud-ai-tooling']) {
      assert.ok((await read(`blog/${slug}/index.html`)).includes('<article'));
      assert.ok(blog.includes(`/blog/${slug}`) && rss.includes(`/blog/${slug}`) && sitemap.includes(`/blog/${slug}`));
    }
    assert.ok((await read('talks/summit-owasp-llm-top-10/index.html')).includes('Breaking Agents'));
    console.log(`${mode}: complete build, discovery, direct routes, RSS, sitemap, and draft isolation passed`);
  }
} finally {
  await writeFile(config, original);
  for (const { file } of fixtures) await rm(file);
}
// Restore a clean build with the user's original configuration and no fixtures.
execFileSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }, stdio: 'pipe',
});
console.log('Original committed setting restored; clean production build passed.');
