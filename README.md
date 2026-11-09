# Palmistry Suite (private, Stage 1)

A standalone, source-backed palm-reading project. It is **separate from Jyotish Q&A**, which it does not touch.

Users submit palm photos or scans. They receive separate Indian and Western **traditional interpretations**, a synthesis that keeps the traditions' disagreements, and grounded Q&A. Palmistry is not scientifically validated. Outputs are traditional interpretations, never predictions or facts about the person.

## Status
- **Stage 1 (source and evidence foundation): in progress.** The corpus is approved, with sample passages, draft rules, exclusions and a rights review.
- `prototype/` is a static, clickable walkthrough on a **synthetic demo hand**. No palm analysis runs. All rules are drafts that have not been reviewed.
- **Stage 2 foundation is in place:** a tradition-neutral feature vocabulary, contract schemas, a deterministic evaluator with 11 passing tests, and the observation-feasibility protocol. No model is connected and no real images have been used.
- There is no backend, MCP server or agent yet (spec stages 3–5).

Run the tests with `npm test` (Node 20+, no dependencies).

## Layout
| Path | Contents |
|---|---|
| `prototype/index.html` | The clickable prototype: consent → focus → capture (palm + wrist) → image check → observations → readings → synthesis → Q&A → evidence |
| `content/sources/editions.json` | Editions in the approved corpus (W1–W4, I1, I2 Sanskrit layers, Z25) |
| `content/sources/passages.json` | Sample passages with locators, checksums, triage and exclusion reasons |
| `content/rules/draft_rules.json` | Draft candidate rules (not reviewed) |
| `content/rules/conflicts_and_crosswalk.json` | TV-001 (BS 68.44), the Western head-line school disagreement, and the Indian–Western crosswalk |
| `content/vocabulary/features.json` | Tradition-neutral observation features, with how each can be observed and what each tradition calls it |
| `packages/contracts/schemas/` | JSON Schemas: Observation, PalmImage, InterpretationRule, RuleEvaluation, TranslationVariant, Passage |
| `packages/rules/evaluate.mjs` | Deterministic rule evaluator (no dependencies) and the traceability check |
| `tests/rules/` | Evaluator tests (`npm test`, Node 20+) |
| `tests/vision/fixtures/` | Synthetic observation fixtures only |
| `docs/SPEC.md` | Snapshot of the specification, v3 |
| `docs/sanskrit-reviewer-brief.md` | Brief for the Sanskrit reviewer (TV-001 ruling, Hastasañjīvana re-keying, exclusion codes), with `docs/templates/reviewed-passage.template.json` |
| `docs/stage2-observation-feasibility.md` | Stage 2 protocol: capture checks, labelling, metrics, go/no-go |
| `docs/` (other) | Stage 1 review sheet and the Hastasañjīvana rights review |

The authoritative specification is the Hyperagent document "Palmistry App — MVP Specification and Evidence Architecture" (cmw9b9pa2007807adf7vuy0x0); `docs/SPEC.md` is a v3 snapshot of it. The planned monorepo layout is in section 6 of the spec.

## Rules that never change
- Every personal claim traces back: claim → rule evaluation → reviewed source passage + visible observation → image region.
- No health, lifespan, death or accident readings; no counts of marriages or children; no honesty or criminality judgments; nothing based on skin colour or other protected traits; no dating of events.
- Not seeing a feature is never treated as the feature being absent. Uncertain observations cannot support personal claims.
- Rules from an open TranslationVariant are withheld.
- Real palm images never go in this repository. Tests use synthetic fixtures only.

## Licensing
- `content/` is licensed **CC BY-SA 4.0** (see `LICENSE-CONTENT.md`). This is required by the ShareAlike terms of Zysk 2025.
- Code (`prototype/` and future `apps/`, `services/`, `packages/`): **no licence granted yet; all rights reserved.** The code licence is an open decision.
