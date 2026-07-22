// A deliberately tiny "build" so the Day 2 pipeline has a real artifact to
// upload. Zero dependencies — it just copies src/ into dist/ and stamps a
// small build-info file, using nothing but Node's standard library.
//
// Day 1 never calls this. Day 2 uses it for:
//   - actions/upload-artifact  (something to upload)
//   - build -> test -> deploy  (a real "build" stage)

import { mkdir, readdir, copyFile, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

const SRC = 'src';
const OUT = 'dist';

// Start from a clean slate every run — CI runners are fresh, but running this
// locally twice should not leave stale files behind.
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const files = await readdir(SRC);
for (const file of files) {
  await copyFile(join(SRC, file), join(OUT, file));
  console.log(`copied ${SRC}/${file} -> ${OUT}/${file}`);
}

// Stamp the build with whatever CI told us about this run. These are DEFAULT
// environment variables that GitHub sets on every runner (see Day 1, contexts).
// Locally they are undefined, so we fall back to "local".
const buildInfo = {
  builtAt: new Date().toISOString(),
  commit: process.env.GITHUB_SHA ?? 'local',
  runNumber: process.env.GITHUB_RUN_NUMBER ?? 'local',
  nodeVersion: process.version,
  runnerOs: process.env.RUNNER_OS ?? 'local',
};

await writeFile(join(OUT, 'build-info.json'), JSON.stringify(buildInfo, null, 2));
console.log('\nBuild complete:');
console.log(JSON.stringify(buildInfo, null, 2));
