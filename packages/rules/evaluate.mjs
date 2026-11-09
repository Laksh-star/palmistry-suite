// Deterministic rule evaluator. No model calls, no randomness.
// Same (rules, vocabulary, variants, evidence) in => same structured output out.
// Outcomes follow spec section 4: eligible | insufficient_evidence | not_applicable | withheld.

const ASSESSABLE = new Set(["photo", "scan_only", "wrist_required"]);

export function indexVocabulary(vocab) {
  return Object.fromEntries(vocab.features.map((f) => [f.id, f]));
}

/** Reject rules that depend on excluded or unknown features. Throws on violation. */
export function validateRules(rules, vocab) {
  const V = indexVocabulary(vocab);
  for (const r of rules) {
    if (!Array.isArray(r.requires)) throw new Error(`${r.rule_id}: missing requires[]`);
    if (!r.derived_from?.length) throw new Error(`${r.rule_id}: no source passage (derived_from)`);
    for (const q of r.requires) {
      const f = V[q.feature];
      if (!f) throw new Error(`${r.rule_id}: unknown feature ${q.feature}`);
      if (f.observability === "excluded") throw new Error(`${r.rule_id}: depends on excluded feature ${q.feature}`);
    }
  }
  return true;
}

/**
 * @param {object} p
 * @param {object[]} p.rules        content/rules/draft_rules.json
 * @param {object}   p.vocab        content/vocabulary/features.json
 * @param {object[]} p.variants     translation variants
 * @param {object}   p.evidence     { version, image: { wristVisible, captureMethod }, observations: [{id, feature, state, value, flagged?}] }
 * @param {object}  [p.options]     { releaseMode: boolean } releaseMode withholds every rule that has not been reviewed
 */
export function evaluate({ rules, vocab, variants = [], evidence, options = {} }) {
  const V = indexVocabulary(vocab);
  const VAR = Object.fromEntries(variants.map((v) => [v.variant_id, v]));
  const obs = (evidence.observations || []).filter((o) => !o.flagged);
  const byFeature = Object.fromEntries(obs.map((o) => [o.feature, o]));

  return rules.map((r) => {
    const base = { rule_id: r.rule_id, tradition: r.tradition, school: r.school, evidence_version: evidence.version, source_passages: r.derived_from, matched_observations: [] };
    const out = (outcome, reason, extra = {}) => ({ ...base, outcome, reason, ...extra });

    if (options.releaseMode && r.review_status !== "reviewed") return out("withheld", "Rule not yet reviewed (release gate 3)");
    if (r.depends_on_variant) {
      const v = VAR[r.depends_on_variant];
      if (!v || v.status === "open") return out("withheld", `Translation unresolved (${r.depends_on_variant})`);
    }
    if (r.kind === "general") return out("eligible", "General statement; no image evidence required", { general: true });

    const matched = [];
    for (const q of r.requires) {
      const f = V[q.feature];
      if (!ASSESSABLE.has(f.observability)) return out("withheld", `${q.feature} is not assessed in the MVP (${f.observability})`);
      if (f.observability === "scan_only" && evidence.image?.captureMethod !== "scan") return out("withheld", `${q.feature} needs a scan`);
      if (f.observability === "wrist_required" && !evidence.image?.wristVisible) return out("withheld", `${q.feature} needs the wrist in frame and uncovered`);
      const o = byFeature[q.feature];
      if (!o) return out("not_applicable", `${q.feature} was not observed (not treated as absent)`);
      if (o.state === "uncertain") return out("insufficient_evidence", `${q.feature} is uncertain in the image`);
      if (o.state === "not_assessable") return out("withheld", `${q.feature} could not be assessed in this image`);
      if (o.state !== "observed") return out("withheld", `${q.feature}: unknown state ${o.state}`);
      if (q.in && !q.in.includes(o.value)) return out("not_applicable", `${q.feature} = ${o.value}, rule needs ${q.in.join("|")}`);
      matched.push(o.id);
    }
    return out("eligible", "All required observations present", { matched_observations: matched });
  });
}

/** Traceability invariant (spec section 4): every eligible personal result links to passages and observations. */
export function checkTraceability(results, passages) {
  const P = new Set(passages.map((p) => p.passage_id));
  const problems = [];
  for (const r of results.filter((x) => x.outcome === "eligible")) {
    if (!r.source_passages.length || r.source_passages.some((id) => !P.has(id))) problems.push(`${r.rule_id}: missing source passage`);
    if (!r.general && !r.matched_observations.length) problems.push(`${r.rule_id}: no observation`);
  }
  return problems;
}
