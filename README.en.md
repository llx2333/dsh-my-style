# dsh-my-style

**Language / 语言**: [简体中文](README.md) | English

DeepSeek Harness (DSH) web client plugin: a **charcoal × cherry-pink** theme, a session-stats sidebar flanking the composer, and a set of session enhancements (copy session ID, context-menu reordering, search-box guard).

## Features

### 1. Charcoal × cherry-pink theme

- Deep charcoal backgrounds (the `#262725` family) with cherry-pink text/brand colors (`#f3d4da` / `#f6d3d9`); light and dark modes are unified into the same dark palette;
- Colors are registered through `ThemeRuntime.overrideTokens` of `@deepseek-ai/dsh-client-ui-theme` (theme-level token override), with an `!important` CSS fallback injected alongside — two channels guarantee the override wins;
- Font prefers `LXGW WenKai Mono`, with the Nerd Font variant and `Microsoft YaHei` as fallbacks; selection, caret, scrollbars and focus rings are all themed;
- Send button, new-session button, sidebar, code blocks and the context-usage ring are recolored one by one, removing redundant card backgrounds and shadows.

### 2. Session stats sidebar (stats-flank)

Reads the native stats bar `.FJxK0a_root` and re-typesets it into two columns flanking the composer (React is provided by the module loader's `require('react')`):

| Left column | Right column |
|---|---|
| turns·steps, LLM time, tool-call time, first-token avg | tok/s, cache hit, input tokens, output tokens |

- One color per row (8-color cycle); each row's divider follows its own content width;
- Label column / value column each left-align into their own column; the first row's text is centered, its divider matching the second row's measured width;
- Falls back to the native stats bar (recolored only) when the window is too narrow, leaving no ghost elements.

### 3. Session enhancements

- **Copy session ID**: adds a "Copy session ID" item to the session row's "…" menu, showing "Copied" after the click; the id is read from React fiber (row `fiber.key`, with a fallback chain walk for `props.node.id`); on LAN http access (phone) without `navigator.clipboard` it degrades to `execCommand`;
- **Menu reorder**: the session menu is fixed to "Rename → Copy session ID → Skip dream → Fork → Delete → Archive", compatible with the "skip dream" item from [meow-memory](https://github.com/mkcto/meow-memory); it compares before writing — zero DOM writes when the order is already correct — avoiding the MutationObserver self-excitation freeze;
- **Search-box guard**: automatically clears and guards the workspace session search input while a settings/model dialog is open, preventing dialog typing from bleeding into the session-list filter behind it; on plugin unload the patched `value` descriptor of the input is fully restored.

## Install

```bash
dsh plugin --profile web add git+https://github.com/llx2333/dsh-my-style.git
```

Restart dsh after install and the plugin takes effect automatically (`dsh.bundle.patch` registers the plugin into the profile).

Update:

```bash
dsh plugin --profile web update dsh-my-style
```

Uninstall:

```bash
dsh plugin --profile web remove dsh-my-style
```

> If GitHub is slow on your network, a gitee mirror is available: `git+https://gitee.com/llx2333/dsh-my-style.git`

## Stats sidebar layout parameters

Editable in the stats-flank section of `client.js`:

| Param | Default | Meaning |
|---|---|---|
| `LBL_W` | 76 | Label column width (px) |
| `COL_GAP` | 12 | Gap between label and value columns |
| `LINE_PAD` | 2 | Divider overhang per side (px) |
| `GAP` | 24 | Gap between sidebar and composer |
| `ROW_COLORS` | 8 colors | Per-row text color cycle |

## Dependencies

- DSH host `>= 0.1.0-rc.6` (peer: `@deepseek-ai/dsh-client-ui-theme`, provided by the host)

## License

MIT
