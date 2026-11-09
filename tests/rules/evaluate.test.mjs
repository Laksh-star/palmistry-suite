import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { evaluate, validateRules, checkTraceability } from "../../packages/rules/evaluate.mjs";

const j = (p) => JSON.parse(readFileSync(new URL(`../../${p}`, import.meta.url)));
const rules = j("content/rules/draft_rules.json");
const vocab = j("content/vocabulary/features.json");
const variants = j("content/rules/conflicts_and_crosswalk.json").translation_variants;
const passages = j("content/sources/passages.json");
const demo = j("tests/vision/fixtures/demo-hand.json");
const run = (evidence = demo, options) => Object.fromEntries(evaluate({ rules, vocab, variants, evidence, options }).map((r) => [r.rule_id, r]));
const clone = (x) => JSON.parse(JSON.stringify(x));

test("all draft rules validate against the vocabulary", () => assert.equal(validateRules(rules, vocab), true));

test("a rule may not depend on an excluded feature (skin colour)", () => {
  const bad = [{ rule_id: "X", derived_from: ["I1-68.40"], requires: [{ feature: "palm.colour" }] }];
  assert.throws(() => validateRules(bad, vocab), /excluded feature/);
});

test("demo hand: expected outcomes", () => {
  const R = run();
  for (const id of ["R-W-001", "R-W-002", "R-W-006", "R-W-007", "R-I-001", "R-I-003", "R-I-004", "R-I-005"]) assert.equal(R[id].outcome, "eligible", id);
  assert.equal(R["R-W-003"].outcome, "withheld");            // mounts postponed
  assert.equal(R["R-W-004"].outcome, "not_applicable");      // joined, not separated
  assert.equal(R["R-W-005"].outcome, "insufficient_evidence"); // uncertain thumb
});

test("TV-001 open => R-I-002 withheld", () => {
  const R = run();
  assert.equal(R["R-I-002"].outcome, "withheld");
  assert.match(R["R-I-002"].reason, /TV-001/);
});

test("wrist out of frame => wrist rules withheld, not guessed", () => {
  const e = clone(demo); e.image.wristVisible = false;
  assert.equal(run(e)["R-I-004"].outcome, "withheld");
});

test("not observing a feature is not treated as its absence", () => {
  const e = clone(demo); e.observations = e.observations.filter((o) => o.feature !== "lines.overall_depth");
  const r = run(e)["R-I-001"];
  assert.equal(r.outcome, "not_applicable");
  assert.match(r.reason, /not treated as absent/);
});

test("a user-flagged observation is dropped and its rules change", () => {
  const e = clone(demo); e.version = "ev-2"; e.observations.find((o) => o.id === "o1").flagged = true;
  const R = run(e);
  assert.equal(R["R-W-001"].outcome, "not_applicable");
  assert.equal(R["R-W-001"].evidence_version, "ev-2");
});

test("release mode withholds every rule not yet reviewed", () => {
  const R = run(demo, { releaseMode: true });
  assert.ok(Object.values(R).every((r) => r.outcome === "withheld"));
});

test("traceability: every eligible result links to real passages and observations", () => {
  const results = evaluate({ rules, vocab, variants, evidence: demo });
  assert.deepEqual(checkTraceability(results, passages), []);
});

test("deterministic: same input, same output", () => {
  assert.deepEqual(evaluate({ rules, vocab, variants, evidence: demo }), evaluate({ rules, vocab, variants, evidence: demo }));
});

test("the āyurekhā naming trap is encoded in the vocabulary", () => {
  const f = vocab.features.find((x) => x.id === "crease.distal_transverse");
  assert.match(f.labels.western, /heart line/);
  assert.match(f.labels.indian, /āyurekhā/);
});
