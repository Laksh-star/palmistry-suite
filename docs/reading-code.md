# Reading code (assistant → app)

The web app (`apps/web/index.html`) is static. It cannot call an AI model itself. Instead, the Palmistry Suite assistant reads a palm photo in conversation and returns a **reading code**, which the user pastes into the app.

Format: `PS1:` followed by base64 of UTF-8 JSON:

```json
{"ans":{"life":"clear","origin":"joined","heart":"clear","vertical":"yes","reaches":"middle","bracelets":3,"depth":"deep","fingers":"long","thumb":"unsure"},
 "wrist":true,
 "pts":{"life":[[0.33,0.6],[0.3,0.7]]}}
```

| Key | Values |
|---|---|
| life, heart | clear, faint, unsure |
| origin | joined, gap, wide, unsure |
| vertical | yes, no, unsure |
| reaches | forefinger, middle, ring, none, unsure (only if vertical = yes) |
| bracelets | 0, 1, 2, 3, unsure (only if wrist = true) |
| depth | deep, shallow, unsure |
| fingers, thumb | long, average, short, unsure |
| pts | optional polylines in normalised image coordinates [x, y] in 0–1 |

Rules: use `unsure` whenever a feature is not clearly visible; never guess. Not seeing a feature is not the same as the feature being absent. The code contains no image data.
