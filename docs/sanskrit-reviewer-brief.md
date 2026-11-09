# Brief for the Sanskrit reviewer — Palmistry Suite, Indian tradition

**Status:** draft, 9 November 2026. **Reviewer:** not yet appointed.
**Who this is for:** a reader of classical Sanskrit who is comfortable with technical (śāstra) prose and commentary. Familiarity with Jain Sanskrit and some Prakrit helps for Task 2.

## What the project is
Palmistry Suite gives *traditional* palm readings from photographs, with the Indian and Western traditions kept separate. Every statement shown to a user must trace back to a specific, reviewed passage in a source text. We do not claim palmistry predicts anything, and we never invent rules. Your work decides what the Indian side is allowed to say.

You are asked for **philological judgement only**: what the text says and how it should be rendered. You are not asked whether palmistry works.

## Your tasks, in priority order

### Task 1: Rule on TV-001 (Bṛhatsaṃhitā 68.44)
- **Text, as given online (check it against a printed edition):** *tisro rekhā maṇibandhanotthitāḥ karatalopagā nṛpateḥ*
- **Rendering A (N. Chidambaram Iyer, 1884, II.XXI = 68.44, p. 105):** "If the three lines issuing from the wrist reach the middle of the palm, the person will be a king". This implies lines rising **up into the palm**.
- **Rendering B (K. G. Zysk, *History of Science in South Asia* 13, 2025, p. 257):** he reads BS 67.44ab and Garuḍa Purāṇa 1.65.47 as "a king is the man who has three lines on the wrist". This implies three **bracelet lines around the wrist**.
- **Supporting witness for B:** *Hastasañjīvana* vv. 39–41 (Task 2) reads the wrist bracelets (*yavamālā*) as three = king, two = minister, one = wealth, citing a Prakrit verse *… maṇibandhe jassa tinni rehāu*.

**What we need from you:**
1. The verified Sanskrit text and its printed source, with variants if you know of any.
2. A literal translation, with the syntax of *maṇibandhanotthitāḥ karatalopagāḥ* explained.
3. A ruling: **A**, **B**, **kept-both** (the text is genuinely ambiguous) or **neither**, with your reasons. Keep it short: a paragraph is enough.

Whatever you decide, the other reading stays on record; nothing is deleted.

### Task 2: Re-key and translate *Hastasañjīvana* passages
- **Edition:** Muni Śrī Mohanlālajī Jaina Granthamālā No. 8, ed. Pratāp Muni, Indore, Vīra Saṃvat 2456 (= 1929/30). Scan: archive.org `in.ernet.dli.2015.407690` (its catalogue date of 1959 is wrong). The OCR is unusable, so please work from the page images.
- **Rights rule:** use **only** Meghavijaya's Sanskrit root text and his *Sāmudrika-laharī* commentary. **Do not copy or translate** Pratāp Muni's preface or notes, or the printed Gujarati abridgement. Their rights position in India is unknown.
- **Priority passages:**
  1. **vv. 39–41 and their commentary, around printed p. 168.** These are the wrist bracelets (*maṇibandha* / *yavamālā*), with the Prakrit citation. Please confirm the *adhikāra* and the verse numbering.
  2. **3.2.80–82 (116–118), the upward line (*ūrdhvarekhā*)**, rising from the wrist and read by the finger it reaches. Zysk translates these in Appendix I (p. 264), so a check of his rendering is enough unless you disagree with it.
  3. **The *rekhāvimarśana* chapter's list of named lines.** Give each line's name, where it lies on the palm in your own words, and its verse locator. We need this to name the Indian creases correctly; for example, we expect *āyurekhā* to be the crease nearest the fingers (Zysk 2025, p. 244). A list is enough; full translations of every verse are not needed yet.

### Task 3: Check the Sanskrit behind three Bṛhatsaṃhitā verses we already use
These are **68.36** (long fingers), **68.43** (deep, glossy lines) and **68.44** (Task 1).
- Confirm Iyer's renderings, or correct them. Note anything he softens, adds or leaves out.
- In particular: does *snigdha* in 68.43 mean "glossy" (a matter of lighting, which we do not assess) or "smooth, well-formed" (which can be seen in a photo)?

## How to translate
- **Be literal first.** Translate the condition (what is seen) and the result (what the text says it means) as separate fields. Our software rewrites predictions ("will be a king") into traditional statements ("regarded as a royal sign"). **Do not soften the text yourself**; we need the original force on record.
- **Flag excluded content instead of omitting it.** Mark it with one of these codes:

| Code | Meaning |
|---|---|
| `health_or_lifespan` | Health, illness or length of life |
| `death_or_accident` | Death, injury or accidents |
| `children_or_marriage_counts` | Number or sex of children; number of marriages |
| `sexual_identity` | Claims about sexual identity |
| `protected_trait` | Caste, religion, nationality or gender as a reading |
| `skin_colour` | Colour of the palm or skin |
| `needs_touch` | Softness, firmness, temperature |
| `not_visible` | Not visible in a photo (e.g. palm hollowness) |
| `event_timing` | Ages or dates of events |
| `criminality_or_honesty` | Judgements of honesty or criminality |
| `moral_judgment` | "Wicked", "of wrong views" and similar |
| `past_life` | Karma or claims about previous lives |
| `gendered_reading` | Different hands or rules by sex (e.g. the left hand for women) |

- **Visual vocabulary:** where the text names a shape (yava, matsya, padma and so on) or a position (mūla, madhya, aṅguṣṭha-mūla), keep the Sanskrit term and add a plain English gloss.
- **Uncertainty is welcome.** Mark a reading `uncertain` and explain why. Do not guess silently.

## What to return
One JSON record per verse, using `docs/templates/reviewed-passage.template.json`, plus a short note for Task 1. Plain text or a spreadsheet is fine too; we will convert it.

Your work will be published in the project's content folders under **CC BY-SA 4.0**, credited to you by name. Please confirm you agree to this before starting.

## Limits of the brief
- You are not asked to judge whether palmistry is valid, to write user-facing text, or to review the Western sources.
- Please do not use machine translation as the basis for a record. If you check against one, say so in `notes`.
- Effort, fees and timing are to be agreed with the project owner. Nothing in this brief commits either side.
