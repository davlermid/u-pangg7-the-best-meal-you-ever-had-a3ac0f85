import { mkdirSync, writeFileSync } from "node:fs";

// Winner — polished from 8 candidates, scored 1–5 per judge criterion.
// Rubric: (1) on-subject, (2) concrete dish/place/texture/smell/moment,
// (3) true single-person memory, (4) one clean sentence, fresh words,
// (5) sticky image/turn/ending. Winner scored 24/25 (5,5,5,5,4).
const ENTRY =
  "My best meal was soto ayam Lamongan in a Surabaya warung, the broth so hot it fogged my glasses while the koya stayed crunchy on my tongue.";

// Gate: entry must be 1-200 UTF-8 chars, one sentence, no trailing newline.
// Fail hard before writing anything — a bad entry must never reach /output.
const entryChars = [...ENTRY].length;
if (entryChars < 1 || entryChars > 200) {
  throw new Error(`ENTRY length ${entryChars} chars, must be 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.endsWith("\n")) {
  throw new Error("ENTRY must not contain a newline");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("ENTRY must not have leading/trailing whitespace");
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("ENTRY must be exactly one sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
