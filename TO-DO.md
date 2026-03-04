# TO-DO

## Next Steps (Implementation Order)

1. Rework HUD zoom behavior (deferred)
- Re-introduce zoom-aware sizing in a system-safe way.
- Keep PF2e and Daggerheart isolated from DC20/5e-specific layout logic to avoid regressions.
- Validate both `Rows` and `Columns` sorting after zoom changes.

2. Improve label handling for long names
- Add truncation-aware tooltip fallback only when text is visually truncated (starting with DC20).
- Keep existing native tooltips where systems already provide them (e.g., Crucible/4e/Mosh).
- Ensure left-aligned text stays consistent across systems.

3. CSS pass and specificity cleanup
- Re-evaluate remaining `!important` rules after final cross-system checks.
- Keep CSS in `styles/bases-status-layout.css`; avoid re-inlining into JS.
- Confirm exhaustion overrides do not reduce clickable area to icon-only in dnd5e.

4. Documentation and release notes
- Keep supported-systems notes up to date.
- Keep Draw Steel marked as intentionally incompatible (it already provides similar behavior).
- Remove PF1e from support docs until tested.

## Outstanding Issues

- DC20: long labels still truncate heavily in some column/width combinations.
- Zoom feature: currently reverted; needs a safer reimplementation to avoid PF2e/Daggerheart breakage.
- Cross-system variance: some systems render statuses as `img` first, others as wrappers/anchors; all interaction fixes must stay system-agnostic.

## Regression Test Matrix (Before Next Commit)

- Daggerheart
- PF2e
- DnD5e
- 4e
- Crucible
- Mosh
- DC20

For each system, verify:
- `Rows` and `Columns` sorting both work.
- No missing status entries.
- Click/hover works on intended target area (icon + label when applicable).
- Labels/tooltips remain readable and usable at narrow widths.
