# Palmistry Suite — Stage 1 sample passages and candidate rules (v2)

Draft for owner review, 9 November 2026. All records are **unreviewed**. v2 adds the Hastasañjīvana (I2) and Zysk 2025 passages, rules R-I-004 and R-I-005, the BS 68.44 translation conflict and the āyurekhā naming trap. Nothing outside this thread was created.

## Editions

- **W1** — Cheiro, Palmistry for All, G. P. Putnam's Sons 1916 (22nd impression); Gutenberg #20480 HTML, [Pg] markers
- **W2** — Benham, The Laws of Scientific Hand Reading, Putnam 1900; archive.org in.ernet.dli.2015.200302 (OCR)
- **W3** — d'Arpentigny, tr. Heron-Allen, The Science of the Hand, Ward Lock 1886; archive.org b21974214 (OCR)
- **W4** — Heron-Allen, A Manual of Cheirosophy, Ward Lock 1885; archive.org manualofcheiroso00heroiala (OCR)
- **I1** — Varahamihira, Brihat Samhita, tr. N. Chidambaram Iyer, Madura 1884; Part II ch. XXI (=std ch. 68) 'On the Features of Man'; archive.org b29353130 (OCR)
- **I2** — Meghavijaya Gani, Hastasanjivanam with the Samudrika-lahari commentary and an abridged Gujarati translation, ed. Pratap Muni, Muni Sri Mohanlalaji Jaina Granthamala No. 8, Indore, Vira Samvat 2456 (= 1929/30 CE); DLI scan archive.org in.ernet.dli.2015.407690 (catalogue date '1959' is wrong; OCR poor)
- **Z25** — K. G. Zysk, 'Early Indian Palmistry. Sardulakarnavadana: Panilekha', History of Science in South Asia 13 (2025): 240-275, DOI 10.18732/hssa128, CC BY-SA 4.0

## Passages

| ID | Locator | Features | Triage | Exclusion | Note |
|---|---|---|---|---|---|
| W1-016a | p. 16, ch. II 'The Line of Head joined to the Line of Life' | W.head_line.origin=joined_to_life | candidate |  |  |
| W1-019a | pp. 19-20, ch. II 'The Line of Head separated from the Line of Life' | W.head_line.origin=separated_narrow | candidate |  | 'not very wide' needs an operational threshold before evaluation |
| W1-036a | p. 36, ch. III 'The Line of Life and its Variations' | W.life_line | excluded | health_or_lifespan |  |
| W1-036b | p. 36, ch. III | W.life_line.clarity, W.life_line.continuity | observation_definition_only |  | Defines 'normal' appearance; usable for the vocabulary, not as an interpretation |
| W1-067a | p. 67, ch. VII 'The Line of Heart' | W.heart_line | candidate |  | General statement of what the line signifies; label general, not personal |
| W1-067b | p. 67, ch. VII | W.heart_line.depth, W.heart_line.colour | partially_excluded | skin_colour | Keep depth/clarity; drop 'well coloured' |
| W1-047a | p. 47, ch. V 'The Line of Destiny or Fate' | W.fate_line | candidate_reframed |  | Must be rewritten as a traditional association with career themes; no event prediction or dating (ch. XIX on dates excluded: event_timing) |
| W1-pviii | Preface to the American edition, p. viii | W.thumb.length_relative | candidate |  | Needs a relative-length measure (thumb tip vs index base); harsh wording must be softened in narrative |
| W2-429a | pp. 429-430, 'The Line of Head' | W.head_line.origin=joined_to_life, W.head_life_join_length | candidate |  |  |
| W2-429b | p. 430, 'The Line of Head' | W.head_life_join_length | excluded | event_timing | Age-dating of the join; excluded under MVP (no event dates) |
| W3-221 | p. 221, Sub-section IX 'Spatulate Hands', from ¶335 (Plate V) | W.hand_type=spatulate, W.thumb.size | observation_definition_only |  | Type definition is spread over ¶335ff.; the trait passages that follow mix in colonial/national claims (e.g. ¶341 Antilles) - those are excluded: protected_trait |
| W3-319 | p. 319, Sub-section XVIII 'Useful Hands' (Plate VII) | W.hand_type=square, W.finger.joints=knotty, W.fingertip=square, W.thumb.size, W.palm.hollow, W.palm.firmness | observation_definition_only |  | 'rather firm' needs touch (not_image_assessable); 'hollow' scan-only at best |
| W3-401 | p. ~401, Sub-section XXIV 'A few Words upon the Hands of Women', ¶644 | W.hand_type | excluded | protected_trait | Also excluded wholesale: Sub-sections X-XV, XIX (national, religious, English, North American, Roman, Chinese hands) |
| W4-570 | pp. 247-248, Cheiromancy § 3 'The Line of Head', ¶570 | W.head_line.origin=joined_to_life, W.head_line.termination=mount_of_moon | candidate |  |  |
| W4-569 | p. 247, ¶569 | W.minor_line | excluded | criminality_or_honesty | Same page also has a maternity-danger reading (health_or_lifespan) |
| I1-68.36 | p. 104, v. 36 | I.finger.length, I.finger.skin_folds, I.finger.flatness | candidate |  | 'long'/'small' need a relative measure; 'serve under others' is a status claim - reword or withhold |
| I1-68.37 | p. 104, v. 37 | I.finger.size, I.finger.curvature, I.hand.animal_likeness | excluded | death_or_accident | Also moral judgment ('wicked') and an undefined animal simile (not_image_assessable) |
| I1-68.38 | p. 104, v. 38 | I.wrist | excluded | not_image_assessable | Firmness/cracking need touch; injury prediction (death_or_accident) |
| I1-68.39 | p. 104, v. 39 | I.palm.hollow, I.palm.height | withheld_pending_review | not_image_assessable | Palm concavity is not reliably visible in a 2-D photo; inheritance claim is family-sensitive |
| I1-68.40 | p. 104, v. 40 | I.palm.colour, I.hands.symmetry | excluded | skin_colour | Also moral and sexual claims |
| I1-68.41 | p. 104, v. 41 | I.nail | excluded | sexual_identity | Also skin_colour; nails are on the back of the hand anyway |
| I1-68.42 | p. 104, v. 42 | I.thumb.yava_mark, I.finger.joint_length | partially_excluded | children_or_marriage_counts | 'barley mid-thumb' is a minor marking (deferred); 'live long' = health_or_lifespan |
| I1-68.43 | pp. 104-105, v. 43 | I.lines.depth, I.lines.gloss, I.finger.spacing | candidate_reframed |  | Verse runs pp. 104-105. Gloss is lighting-dependent; finger spacing depends on capture pose (guidance asks fingers apart) - spacing clause withheld |
| I1-68.44 | p. 105, v. 44 | I.wrist_lines.three_reach_mid_palm, I.symbol.matsya | candidate_reframed |  | Three-lines clause is the clearest Indian line rule; fish marks = symbol-shapes (deferred) |
| I1-68.45 | p. 105, v. 45 | I.symbol.* | deferred | symbol_shapes_postponed | Highly subjective shape-matching; high risk of the model 'seeing' symbols |
| I1-68.46 | p. 105, v. 46 | I.symbol.* | deferred | symbol_shapes_postponed | Highly subjective shape-matching; high risk of the model 'seeing' symbols |
| I1-68.47 | p. 105, v. 47 | I.symbol.* | deferred | symbol_shapes_postponed | Highly subjective shape-matching; high risk of the model 'seeing' symbols |
| I1-68.48 | p. 105, v. 48 | I.symbol.* | deferred | symbol_shapes_postponed | Highly subjective shape-matching; high risk of the model 'seeing' symbols |
| I1-68.49 | p. 105, v. 49 | I.symbol.*, I.thumb_base.lines | excluded | children_or_marriage_counts |  |
| I1-68.50 | pp. 105-106, v. 50 | I.lines.to_forefinger_root, I.lines.continuity, I.lines.density | partially_excluded | health_or_lifespan | Lifespan and fall excluded (also death_or_accident). 'Many or no lines' survives but 'no lines' conflicts with non-detection != absence; require pass-quality image |
| I2-39-41 | vv. 39-41 with commentary, around printed p. 168 (adhikara still to confirm) | I.manibandha.yavamala_count | candidate_pending_reviewer |  | Wrist bracelet lines: three = king, two = royal minister/wealthy/learned, one = rich. The commentary cites a Prakrit verse with the same claim and says the left hand is read for women (gendered rule, excluded). Reading the bracelets this way supports the wrist-bracelet interpretation of BS 68.44. |
| Z25-v26 | p. 257, verse 26 and comment | I.manibandha.count | candidate |  | Zysk's comment cross-references BS 67.44ab and Garuda Purana 1.65.47 'where a king is the man who has three lines on the wrist'. The verse also has a past-life claim, which is withheld. |
| Z25-HS3.2.80 | p. 264, Appendix I (translating Hastasanjivana 3.2.80 (116)) | I.urdhva_rekha.termination | candidate |  | Read by the finger the line reaches: forefinger = king or minister; middle finger = renowned general. Wording must be softened to 'traditionally associated with authority'. A likely partial match for the Western fate line, but the crosswalk needs a source before it can say so. |
| Z25-v3 | p. 244, verse 3 and comment | I.ayu_rekha | excluded | health_or_lifespan | Zysk identifies the Indian 'life line' (ayurekha) as the topmost line nearest the fingers, i.e. the line Western books call the heart line. This is a naming trap for the crosswalk. |

## Candidate rules (draft)

**R-W-001** · Western · Cheiro · from W1-016a
- Conditions: `{"head_line.origin": "joined_to_life", "visibility": "observed"}`
- Draft: In Cheiro's reading, a head line that begins joined to the life line is associated with a sensitive, cautious disposition that may underrate its own abilities.

**R-W-002** · Western · Benham · from W2-429a
- Conditions: `{"head_line.origin": "joined_to_life", "visibility": "observed"}`
- Draft: Benham reads a longer join between the head and life lines as less self-reliance and more reliance on others' advice.
- Caveat: Benham's age-dating of the join (W2-429b) is excluded.

**R-W-003** · Western · Heron-Allen · from W4-570
- Conditions: `{"head_line.origin": "joined_to_life", "head_line.termination": "mount_of_moon", "head_line.clarity": "clear"}`
- Draft: Heron-Allen treats a clear head line joined to the life line at its start and running toward the Mount of the Moon as the normal, favourable form: good sense, clear judgement and strength of will.
- Caveat: Needs the termination point observed; mounts are postponed, so this may be withheld in the MVP.

**R-W-004** · Western · Cheiro · from W1-019a
- Conditions: `{"head_line.origin": "separated_narrow"}`
- Draft: Cheiro reads a small gap between the head and life lines as independence of thought and quick judgement.
- Open Issue: Define 'narrow' as a measurable gap before evaluation.

**R-W-005** · Western · Cheiro · from W1-pviii
- Conditions: `{"thumb.length_relative": "long|short"}`
- Draft: Cheiro links a longer thumb with will-power guiding action; he reads a shorter thumb as more impulsive and stubborn.
- Open Issue: Define relative thumb length from image landmarks.

**R-W-006** · Western · Cheiro · from W1-067a
- Conditions: `{}`
- Draft: In Cheiro's system the heart line concerns the affectionate and emotional nature, not physical health.

**R-W-007** · Western · Cheiro · from W1-047a
- Conditions: `{"fate_line.visibility": "observed"}`
- Draft: Cheiro associates the fate line with the broad course of one's career. The tradition does not let this reading foretell specific events.

**R-I-001** · Indian · Varahamihira (tr. Iyer) · from I1-68.43
- Conditions: `{"lines.depth": "deep", "lines.clarity": "clear"}`
- Draft: Bṛhatsaṃhitā 68.43 treats deep, well-formed palm lines as an auspicious sign traditionally linked with prosperity, and shallow lines as the reverse.
- Caveat: Gloss is lighting-dependent and not evaluated; the finger-spacing clause is withheld.

**R-I-002** · Indian · Varahamihira (tr. Iyer) · from I1-68.44, I2-39-41, Z25-v26
- Conditions: `{"reading_A_Iyer": {"lines_from_wrist.count": 3, "reach": "mid_palm"}, "reading_B_Zysk_and_Hastasanjivana": {"manibandha.bracelet_count": 3}}`
- Draft: Bṛhatsaṃhitā 68.44 regards three lines rising from the wrist to the middle of the palm as a royal (highly auspicious) sign.
- Open Issue: Translation conflict: Iyer (1884) has three lines rising from the wrist to mid-palm; Zysk and Hastasanjivana vv. 39-41 read three wrist bracelets. The Sanskrit (tisro rekha manibandhanotthitah karatalopagah) needs a ruling from the Sanskrit reviewer. Until then, keep both readings and do not evaluate either.

**R-I-003** · Indian · Varahamihira (tr. Iyer) · from I1-68.36
- Conditions: `{"finger.length_relative": "long"}`
- Draft: Bṛhatsaṃhitā 68.36 links long fingers with a comfortable life and smooth fingers without skin folds with popularity.
- Caveat: 'small = intelligent' and 'flat = serve others' are withheld pending review.

**R-I-004** · Indian · Meghavijaya Gani · from I2-39-41
- Conditions: `{"manibandha.bracelet_count": "1|2|3", "manibandha.clarity": "clear"}`
- Draft: Hastasanjivana reads clear bracelet lines at the wrist as auspicious: three traditionally mark royal standing, two a counsellor's standing, one prosperity.
- Caveat: The wrist must be in frame; the capture guidance currently asks only for the palm. The gendered left-hand rule is excluded.

**R-I-005** · Indian · Meghavijaya Gani (tr. Zysk) · from Z25-HS3.2.80
- Conditions: `{"urdhva_rekha.origin": "wrist", "urdhva_rekha.termination": "forefinger|middle|ring|little"}`
- Draft: Hastasanjivana reads the upward line rising from the wrist by the finger it reaches; reaching the forefinger or middle finger is traditionally associated with authority and leadership.

## Conflicts

- **head_line.origin=joined_to_life** (school disagreement): Cheiro reads it as caution and low self-confidence; Benham as reliance on others; Heron-Allen as the favourable norm of good sense and strength of will. The synthesis must show all three.
- **BS 68.44 'three lines from the wrist'** (translation disagreement): Iyer 1884 reads three lines rising to mid-palm; Zysk 2016/2025 and Hastasanjivana vv. 39-41 read three wrist bracelets. Keep both readings until the Sanskrit reviewer rules.

## Crosswalk

| Indian | Western | Relation | Note |
|---|---|---|---|
| W.head_line.origin=joined_to_life | — | none | No Indian counterpart in I1; check I2 later |
| I.lines.depth | W.*_line.depth | partial | Both value deep, clear lines, but I1 reads all palm lines together while the Western schools read each line separately; agreement can only be claimed at the 'general line quality' level |
| I.wrist_lines.three_reach_mid_palm | W.fate_line | unresolved | Tempting to equate the two; NOT allowed until a source supports it |
| I.finger.length | W.finger proportions (Cheiro Part II ch. III) | unresolved | Western passage not yet extracted |
| I.ayu_rekha (Indian 'life line') | W.heart_line | positional match, NOT an equivalence of meaning | Same crease, different names and meanings (Zysk 2025 p. 244). The UI must not translate 'ayu rekha' as 'life line'. |