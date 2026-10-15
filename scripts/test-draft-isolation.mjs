import assert from 'node:assert/strict';
import { readFile, writeFile, readdir, stat, unlink } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const slug = 'draft-isolation-synthetic-fixture';
const title = 'Synthetic unpublished isolation fixture';
const fixture = join(root, 'src/content/blog', `${slug}.md`);
// Exercise an undated, featured draft through the real production compiler.
let createdFixture = false;
try {
  await writeFile(fixture, `---\ntitle: "${title}"\ndescription: "Synthetic test content only"\ndraft: true\nfeatured: true\n---\nPrivate synthetic test sentinel.\n`, { flag: 'wx' });
  createdFixture = true;
  execFileSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
    cwd: root, env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }, stdio: 'pipe',
  });
} finally {
  if (createdFixture) await unlink(fixture).catch((error) => { if (error.code !== 'ENOENT') throw error; });
}
async function walk(dir) {
  const files = [];
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    if ((await stat(path)).isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}
const outputs = await walk(join(root, 'dist'));
for (const path of outputs) {
  assert.ok(!path.includes(`/blog/${slug}/`), 'Unpublished route emitted');
  if (/\.(html|xml|json|js|txt)$/.test(path)) {
    const content = await readFile(path, 'utf8');
    assert.ok(!content.includes(slug) && !content.includes(title), `Unpublished content leaked into ${path}`);
  }
}
const read = (path) => readFile(join(root, 'dist', path), 'utf8');
const home = await read('index.html');
for (const published of ['breaking-agents-llm01-prompt-injection', 'shai-hulud-ai-tooling']) {
  assert.ok((await read(`blog/${published}/index.html`)).includes('<article'));
  assert.ok((await read('rss.xml')).includes(`/blog/${published}`));
  assert.ok((await read('sitemap-0.xml')).includes(`/blog/${published}`));
  assert.ok(!home.includes(`/blog/${published}`), 'Archive is not homepage featured work');
}
assert.ok((await read('talks/summit-owasp-llm-top-10/index.html')).includes('Breaking Agents'));
console.log('Draft isolation passed through a real production build; archived article and talk URLs preserved.');
