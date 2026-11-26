// The Dog Reviews the Mailman — one funny one-line dog review of the mailman.
// Writes exactly one line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function entryLine(): string {
  return (
    "Five stars. He survived six years of my barking, one stolen shoe, " +
    "and a formal complaint I left on the welcome mat. Professional."
  );
}

function guardLength(line: string): void {
  if ([...line].length > MAX_CHARS) {
    throw new Error(`entry is ${[...line].length} chars, over the ${MAX_CHARS} cap`);
  }
}

function writeEntry(path: string, line: string): void {
  guardLength(line);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(path, line, "utf8");
}

writeEntry(OUTPUT_PATH, entryLine());
