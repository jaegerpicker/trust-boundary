import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

export async function checkDevDrafts(mode, forbidden, fixtures, isDiscoverable) {
  const reservation = createServer();
  reservation.listen(0, '127.0.0.1');
  await once(reservation, 'listening');
  const { port } = reservation.address();
  await new Promise(resolve => reservation.close(resolve));
  const server = spawn(process.execPath, ['node_modules/astro/bin/astro.mjs', 'dev', '--ignore-lock', '--host', '127.0.0.1', '--port', String(port)], {
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  let log = '';
  let startupError;
  server.on('error', error => { startupError = error; });
  server.stdout.on('data', data => { log += data; });
  server.stderr.on('data', data => { log += data; });
  const base = `http://127.0.0.1:${port}`;
  const request = path => fetch(base + path, { signal: AbortSignal.timeout(10000) });
  try {
    let ready = false;
    for (let attempt = 0; attempt < 100; attempt++) {
      if (startupError) throw startupError;
      assert.equal(server.exitCode, null, `Development server exited: ${log}`);
      try { ready = (await fetch(base + '/', { signal: AbortSignal.timeout(1000) })).ok; } catch { /* Server is still starting. */ }
      if (ready) break;
      await delay(100);
    }
    assert.ok(ready, `Development server did not become ready: ${log}`);
    for (const path of ['/', '/blog/', '/resume/', '/rss.xml']) {
      const response = await request(path);
      assert.equal(response.status, 200, `${mode}: dev ${path}`);
      const text = await response.text();
      for (const slug of forbidden) assert.ok(!text.includes(slug), `${mode}: dev draft in ${path}: ${slug}`);
      if (path !== '/resume/') {
        for (const item of fixtures) assert.equal(text.includes(item.slug), isDiscoverable(item, mode), `${mode}: dev discovery ${path}: ${item.slug}`);
      }
    }
    for (const slug of forbidden) assert.equal((await request(`/blog/${slug}/`)).status, 404, `${mode}: dev draft route ${slug}`);
    for (const item of fixtures.filter(item => !item.draft)) assert.equal((await request(`/blog/${item.slug}/`)).status, 200, `${mode}: dev published route ${item.slug}`);
    console.log(`${mode}: development discovery and draft route isolation passed`);
  } finally {
    if (server.exitCode === null && !startupError) {
      const stopped = once(server, 'exit');
      server.kill('SIGTERM');
      const force = setTimeout(() => server.kill('SIGKILL'), 5000);
      try { await stopped; } finally { clearTimeout(force); }
    }
  }
}
