# Nav logos — themeable

No colour of their own. The tile is `fill="currentColor"` and the strokes are cut
through it, so the surface behind shows in the gaps.

    .nav-logo { color: var(--color-primary); }   /* light and dark, automatically */

Sizes are baked in and each file has a unique mask id, so several can sit on one page.

| File | Size | Use |
| --- | --- | --- |
| sknk-mark-26.svg | 26x26 | desktop top bar (64px) |
| sknk-mark-24.svg | 24x24 | mobile top bar (56px) |
| sknk-mark-32.svg | 32x32 | avatar, og-image corner |
| sknk-mark-20.svg | 20x20 | footer |
| sknk-mark-16.svg | 16x16 | smallest legible size |
| sknk-lockup-28.svg | 93x28 | desktop, mark + wordmark in one file |
| sknk-lockup-24.svg | 80x24 | mobile, mark + wordmark in one file |

- Inline them (SVGR, an imported component, or pasted `<svg>`). CSS cannot reach
  inside an `<img src>` or a `background-image`, so `currentColor` would resolve to
  black there.
- Put them on a solid surface — `--color-surface` or `--color-bg` — never over a
  photograph, because the strokes are transparent.
- The lockup is 3.32:1. Set height only, never both dimensions.
- Lockup wordmark is live text in Inter Tight Medium. Without that font loaded, use
  a mark file and set "sknk" in HTML beside it.
- Gap between mark and wordmark: 12px desktop, 10px mobile.
