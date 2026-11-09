# Palmistry Suite (private, Stage 1)

A standalone, source-backed palm-reading project. It is **separate from Jyotish Q&A**, which it does not touch.

Users submit palm photos or scans. They receive separate Indian and Western **traditional interpretations**, a synthesis that keeps the traditions' disagreements, and grounded Q&A. Palmistry is not scientifically validated. Outputs are traditional interpretations, never predictions or facts about the person.

## Status
- **Stage 1 (source and evidence foundation): in progress.** The corpus is approved, with sample passages, draft rules, exclusions and a rights review.
- `prototype/` is a static, clickable walkthrough on a **synthetic demo hand**. No palm analysis runs. All rules are drafts that have not been reviewed.
- There is no backend, MCP server or agent yet (spec stages 3–5).

## Layout
| Path | Contents |
|---|---|
| `prototype/index.html` | The clickable prototype: consent → focus → capture (palm + wrist) → image check → observations → readings → synthesis → Q&A → evidence |
| `content/sources/editions.json` | Editions in the approved corpus (W1–W4, I1, I2 Sanskrit layers, Z25) |
| `content/sources/passages.json` | Sample passages with locators, checksums, triage and exclusion reasons |
| `content/rules/draft_rules.json` | Draft candidate rules (not reviewed) |
| `content/rules/conflicts_and_crosswalk.json` | TV-001 (BS 68.44), the Western head-line school disagreement, and the Indian–Western crosswalk |
| `docs/` | Stage 1 review sheet and the Hastasañjīvana rights review |

The authoritative specification is the Hyperagent document "Palmistry App — MVP Specification and Evidence Architecture" (cmw9b9pa2007807adf7vuy0x0, v3). The planned monorepo layout is in section 6 of the spec.

## Rules that never change
- Every personal claim traces back: claim → rule evaluation → reviewed source passage + visible observation → image region.
- No health, lifespan, death or accident readings; no counts of marriages or children; no honesty or criminality judgments; nothing based on skin colour or other protected traits; no dating of events.
- Not seeing a feature is never treated as the feature being absent. Uncertain observations cannot support personal claims.
- Rules from an open TranslationVariant are withheld.
- Real palm images never go in this repository. Tests use synthetic fixtures only.

## Licensing
- `content/` is licensed **CC BY-SA 4.0** (see `LICENSE-CONTENT.md`). This is required by the ShareAlike terms of Zysk 2025.
- Code (`prototype/` and future `apps/`, `services/`, `packages/`): **no licence granted yet; all rights reserved.** The code licence is an open decision.
