# Stage 2 — Observation feasibility protocol (draft)

Goal (spec section 8): measure which features a model can **see** reliably in palm photos and scans, then give a go/no-go recommendation for each feature. This stage measures **observation agreement only**. It says nothing about whether any palmistry reading is true, and must never be reported as if it did.

## 1. Features under test
Only features marked `photo`, `scan_only` or `wrist_required` in `content/vocabulary/features.json`:
- the thenar, proximal transverse and distal transverse creases;
- the proximal-origin relation (joined, separated narrow, separated wide);
- the longitudinal central crease and the finger it reaches;
- the wrist bracelet count;
- overall line depth;
- relative finger length and relative thumb length.

The following are not tested: `postponed`, `lighting_dependent`, `not_image_assessable` and `excluded` features.

## 2. Capture checks (`assessImage`)
Each image gets `pass`, `limited` or `retake`, with reason codes from `palm-image.schema.json`:
- **Retake:** severe blur, fingers cropped, a mirrored or filtered image, the palm not facing the camera.
- **Limited:** glare on part of the palm; the wrist cropped or covered (wrist rules are then withheld); foreshortened thumb; low light; flattening from pressure on a scan.

Other checks:
- EXIF and location data are stripped before any further processing. Orientation is normalised, and the transform is recorded.
- Hand labels come from the user. A model's guess at left or right only triggers a "please confirm".

## 3. Evaluation set (outside this repository)
- **Consent:** adults only, with written consent that covers evaluation use. Withdrawing consent deletes the person's images and labels.
- **Storage:** an access-controlled store, never GitHub. This repository holds only synthetic fixtures (`tests/vision/fixtures/`).
- **Coverage planned for every feature:**
  - photos and scans, analysed separately;
  - at least three phone models;
  - indoor and daylight lighting;
  - a range of skin tones, recorded with a visual scale **for coverage auditing only**.

  Skin tone is never a model input, a feature or part of a reading.
- **Labels:** two independent human labellers per image, working blind to each other and to the model's output. Each labeller records state (`observed` / `uncertain` / `not_assessable`), the value, and a polyline in normalised coordinates. Disagreements go to a third labeller. Labeller IDs are recorded as `observer_version: human:<id>`.

## 4. Metrics, reported per feature and per capture method
1. **Human–human agreement** (Cohen's κ on state and value). If people cannot agree on a feature, the feature fails, whatever the model does.
2. **Model versus consensus agreement** (κ, and the confusion matrix).
3. **Localisation:** the mean distance between the model's and the consensus polylines, in normalised units.
4. **Abstention:**
   - how often the model says `uncertain` or `not_assessable`;
   - how often it does so when the humans did see the feature (over-abstention);
   - how often it reports a feature the humans marked uncertain (over-confidence). Over-confidence is the critical error.
5. **Skin-tone and device breakdown** of metrics 2–4. A feature that performs markedly worse for any group is not shipped for anyone.

## 5. Decisions
- Numerical thresholds are **set after the human baseline is measured** and before the model is chosen, as spec gate 2 requires. No thresholds are invented in advance.
- The output is a measured list of supported features: go, narrow (for example, scans only) or no-go for each. Rules that depend on a no-go feature are withheld permanently until it is re-tested.
- Model choice follows from these results, not from benchmarks. Before any real image is sent to a provider, that provider's terms on image retention, training use and deletion are checked.

## 6. Code still to come
- `packages/observation`: a provider-neutral adapter. It takes an image and returns `Observation[]` validated against `observation.schema.json`. Its output is a proposal; deterministic checks validate it.
- `tests/vision`: a harness that runs the adapter over the private set and writes per-feature metrics. Only aggregate numbers are committed, never images.
