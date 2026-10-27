#!/usr/bin/env node
import { copyFileSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NAME = 'image-to-website';
const args = process.argv.slice(2);

if (args.includes('-h') || args.includes('--help')) {
  console.log(`Usage: npx ${NAME} [--global]

Installs the ${NAME} skill for Claude Code.

  (default)      ./.claude/skills/${NAME}
  -g, --global   ~/.claude/skills/${NAME}`);
  process.exit(0);
}

const unknown = args.filter((a) => a !== '-g' && a !== '--global');
if (unknown.length > 0) {
  console.error(`Unknown option: ${unknown.join(' ')}. Run with --help for usage.`);
  process.exit(1);
}

const isGlobal = args.includes('-g') || args.includes('--global');
const dest = join(isGlobal ? homedir() : process.cwd(), '.claude', 'skills', NAME);

mkdirSync(dest, { recursive: true });
copyFileSync(
  fileURLToPath(new URL('../SKILL.md', import.meta.url)),
  join(dest, 'SKILL.md'),
);

console.log(`Installed the ${NAME} skill to ${dest}`);
