window.__ModuleLoader__.load({
  id: "dsh-my-style",
  factory: (require) => {
    const module = { exports: {} };
    const React = require("react");

    const themeModule = require("@deepseek-ai/dsh-client-ui-theme/client");
    const THEME_SOURCE = "dsh-my-style";
    const STYLE_ID = "dsh-my-style-css";
    const CARET_ID = "dsh-my-style-caret";
    const SEARCH_GUARD_KEY = "__dshMyStyleWorkspaceSearchGuard";
    const SEARCH_VALUE_GUARD_KEY = "__dshMyStyleWorkspaceSearchValueGuard";
    const SEARCH_VALUE_RECORD_KEY = "__dshMyStyleSearchValueRecord";

    const TOKENS = {
      "--dsw-alias-bg-base": { light: "#262725", dark: "#262725" },
      "--dsw-alias-bg-layer-1": { light: "#2d2f2d", dark: "#2d2f2d" },
      "--dsw-alias-bg-layer-2": { light: "#353735", dark: "#353735" },
      "--dsw-alias-bg-layer-3": { light: "#3e403e", dark: "#3e403e" },
      "--dsw-alias-bg-overlay": { light: "rgb(30 31 30 / 88%)", dark: "rgb(30 31 30 / 88%)" },
      "--dsw-alias-border-l1": { light: "#4d4f4d", dark: "#4d4f4d" },
      "--dsw-alias-border-l2": { light: "#5b5b59", dark: "#5b5b59" },
      "--dsw-alias-border-l3": { light: "#686a67", dark: "#686a67" },
      "--dsw-alias-label-primary": { light: "#f3d4da", dark: "#f3d4da" },
      "--dsw-alias-label-secondary": { light: "#dec4c9", dark: "#dec4c9" },
      "--dsw-alias-label-tertiary": { light: "#b9a5a9", dark: "#b9a5a9" },
      "--dsw-alias-label-caption": { light: "#a69497", dark: "#a69497" },
      "--dsw-alias-label-primary-foreground": { light: "#292a29", dark: "#292a29" },
      "--dsw-alias-brand-primary": { light: "#f6d3d9", dark: "#f6d3d9" },
      "--dsw-alias-brand-text": { light: "#f6d3d9", dark: "#f6d3d9" },
      "--dsw-alias-button-primary-fill": { light: "#e9b8c2", dark: "#e9b8c2" },
      "--dsw-alias-button-primary-hover": { light: "#f5cbd2", dark: "#f5cbd2" },
      "--dsw-alias-button-tool-bar-fill": { light: "#3b3d3b", dark: "#3b3d3b" },
      "--dsw-alias-button-tool-bar-hover": { light: "#4e504e", dark: "#4e504e" },
      "--dsw-alias-interactive-bg-hover": { light: "rgb(246 211 217 / 11%)", dark: "rgb(246 211 217 / 11%)" },
      "--dsw-alias-interactive-bg-active": { light: "rgb(246 211 217 / 16%)", dark: "rgb(246 211 217 / 16%)" },
      "--dsw-alias-markdown-inline-code": { light: "#414341", dark: "#414341" },
      "--dsw-alias-markdown-code-block": { light: "#303330", dark: "#303330" },
      "--dsw-alias-state-success-primary": { light: "#9cc7ae", dark: "#9cc7ae" },
      "--dsw-alias-state-success-secondary": { light: "#7fae94", dark: "#7fae94" },
      "--dsw-alias-state-warn-primary": { light: "#e5c890", dark: "#e5c890" },
      "--dsw-alias-state-error-primary": { light: "#e7a3ad", dark: "#e7a3ad" },
      "--dsw-specific-sidebar-fill": { light: "#2b2d2b", dark: "#2b2d2b" },
      "--dsw-specific-sidebar-nav-item-active": { light: "#414341", dark: "#414341" },
      "--dsw-specific-sidebar-nav-item-hover": { light: "#3a3c3a", dark: "#3a3c3a" }
    };

    const CSS = `:root, body, body * {
  --dsw-alias-bg-base:#262725 !important; --dsw-alias-bg-layer-1:#2d2f2d !important; --dsw-alias-bg-layer-2:#353735 !important; --dsw-alias-bg-layer-3:#3e403e !important; --dsw-alias-bg-overlay:rgb(30 31 30 / 88%) !important;
  --dsw-alias-border-l1:#4d4f4d !important; --dsw-alias-border-l2:#5b5b59 !important; --dsw-alias-border-l3:#686a67 !important;
  --dsw-alias-label-primary:#f3d4da !important; --dsw-alias-label-secondary:#dec4c9 !important; --dsw-alias-label-tertiary:#b9a5a9 !important; --dsw-alias-label-caption:#a69497 !important; --dsw-alias-label-primary-foreground:#292a29 !important;
  --dsw-alias-brand-primary:#f6d3d9 !important; --dsw-alias-brand-text:#f6d3d9 !important; --dsw-alias-button-primary-fill:#e9b8c2 !important; --dsw-alias-button-primary-hover:#f5cbd2 !important;
  --dsw-alias-button-tool-bar-fill:#3b3d3b !important; --dsw-alias-button-tool-bar-hover:#4e504e !important; --dsw-alias-interactive-bg-hover:rgb(246 211 217 / 11%) !important; --dsw-alias-interactive-bg-active:rgb(246 211 217 / 16%) !important;
  --dsw-alias-markdown-inline-code:#414341 !important; --dsw-alias-markdown-code-block:#303330 !important;
  --dsw-alias-state-success-primary:#9cc7ae !important; --dsw-alias-state-success-secondary:#7fae94 !important; --dsw-alias-state-warn-primary:#e5c890 !important; --dsw-alias-state-error-primary:#e7a3ad !important;
  --dsw-specific-sidebar-fill:#2b2d2b !important; --dsw-specific-sidebar-nav-item-active:#414341 !important; --dsw-specific-sidebar-nav-item-hover:#3a3c3a !important;
}

:root {
  --dsh-my-font: "LXGW WenKai Mono", "LXGWWenKaiMono", "LXGWWenKaiMono Nerd Font", "Microsoft YaHei", sans-serif;
}
html, body, #root { background: #262725 !important; color: #f3d4da !important; }
html { color-scheme: dark !important; }
body, body *:not(svg):not(path), textarea, input, button, pre, code, kbd { font-family: var(--dsh-my-font) !important; }
body { caret-color: #f6d3d9; }
::selection { background: rgb(246 211 217 / 30%); color: #fff2f4; }
:focus-visible { outline: 2px solid rgb(246 211 217 / 70%) !important; outline-offset: 2px; }
pre, [data-testid*="code"], code { border-color: #4d504d !important; }
textarea, input, [contenteditable="true"] { caret-color: #f6d3d9 !important; background-color: #353735 !important; color: #f3d4da !important; }
* { scrollbar-color: #5b5b59 #2d2f2d; }
*::-webkit-scrollbar { width: 10px; height: 10px; }
*::-webkit-scrollbar-track { background: #2d2f2d; }
*::-webkit-scrollbar-thumb { background: #5b5b59; border: 3px solid #2d2f2d; border-radius: 999px; }
*::-webkit-scrollbar-thumb:hover { background: #74736f; }
button:not([aria-label="鍙戦€佹秷鎭?]):not([aria-label="鍏抽棴璇︽儏"]):not([class*="_brand"]), [role="button"], [role="combobox"] { background-color: #353735 !important; color: #f3d4da !important; }
button:hover:not([aria-label="鍙戦€佹秷鎭?]):not([aria-label="鍏抽棴璇︽儏"]):not([class*="_brand"]), [role="button"]:hover, [role="combobox"]:hover { background-color: #4e504e !important; }
button[aria-label="鍙戦€佹秷鎭?] { background: #e9b8c2 !important; color: #292a29 !important; box-shadow: 0 5px 18px rgb(233 184 194 / 18%); }
button[aria-label="鍙戦€佹秷鎭?]:hover { background: #f5cbd2 !important; }
button[aria-label="鍙戦€佹秷鎭?] > svg { width: 14px !important; height: 14px !important; }
button[aria-label="鏂板缓浼氳瘽"] { background: #444644 !important; border: 1px solid #5b5b59 !important; }
button[aria-label="鏂板缓浼氳瘽"]:hover { background: #4e504e !important; }
button[aria-label="鍛戒护"] { background: #3b3d3b !important; }
a { color: #b9c8ee; }
hr { border-color: #4d4f4d !important; }
button[role="tab"][aria-selected="true"] { color: #f6d3d9 !important; }
button[role="tab"][aria-selected="true"]::after { background: #f6d3d9 !important; }
button[aria-label="鏂板缓浼氳瘽"][class*="_brand"] { width: 182px !important; height: 32px !important; padding: 4px 0 !important; justify-content: center !important; background: transparent !important; border: 0 !important; border-radius: 0 !important; box-shadow: none !important; }
button[aria-label="鏂板缓浼氳瘽"][class*="_brand"]:hover { background: transparent !important; opacity: .88; }
[class*="_logoRow"] { padding-left: 4px !important; padding-right: 0 !important; }
button[class*="_sessionLogButton"] { height: 32px !important; min-width: 112px !important; padding: 0 13px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; gap: 5px !important; line-height: 1 !important; border-radius: 16px !important; }
button[class*="_sessionLogButton"] > span { display: inline-flex !important; height: 20px !important; align-items: center !important; justify-content: center !important; line-height: 20px !important; }
button[class*="_sessionLogButton"] > svg { display: block !important; flex: 0 0 auto !important; align-self: center !important; }
[class*="_headerUtilities"] { display: flex !important; align-items: center !important; justify-content: flex-end !important; transform: none !important; }

/* Conversation rows: transparent utility buttons, row-level hover only. */
button[aria-expanded], button[aria-haspopup], [role="tab"], [role="tablist"], [role="tabpanel"] { background: transparent !important; box-shadow: none !important; }
button[aria-expanded]:hover, button[aria-haspopup]:hover, [role="tab"]:hover { background: rgb(246 211 217 / 8%) !important; }
button[aria-expanded][aria-pressed="true"], [role="tab"][aria-selected="true"] { background: transparent !important; }
/* Remove narrow vertical slabs behind conversation/trajectory headers. */
[class*="conversation"], [class*="trajectory"], [class*="Conversation"], [class*="Trajectory"] { background-color: transparent !important; }

/* Exact workspace/row controls: icon buttons stay transparent; parent row owns hover. */
.hHd-Xa_iconButton, .qDHVXG_searchButton, .qDHVXG_iconButton, button[aria-label="瑙嗗浘閫夐」"], button[aria-label="娣诲姞宸ヤ綔鍖?] { background: transparent !important; box-shadow: none !important; }
.hHd-Xa_iconButton:hover, .qDHVXG_searchButton:hover, .qDHVXG_iconButton:hover, button[aria-label="瑙嗗浘閫夐」"]:hover, button[aria-label="娣诲姞宸ヤ綔鍖?]:hover { background: rgb(246 211 217 / 8%) !important; }
button[aria-expanded], button[aria-haspopup] { background: transparent !important; box-shadow: none !important; }

/* Final screenshot-matched cleanup. */
aside button:not([aria-label="鏂板缓浼氳瘽"]), aside [role="button"] { background: transparent !important; box-shadow: none !important; }
aside button:not([aria-label="鏂板缓浼氳瘽"]):hover, aside [role="button"]:hover { background: rgb(246 211 217 / 10%) !important; }
/* Conversation/workspace rows: no rounded card behind the row; hover owns the feedback. */
[class*="conversation"] button, [class*="Conversation"] button, [class*="trajectory"] button, [class*="Trajectory"] button { background: transparent !important; box-shadow: none !important; }
[class*="conversation"] [role="button"], [class*="Conversation"] [role="button"], [class*="trajectory"] [role="button"], [class*="Trajectory"] [role="button"] { background: transparent !important; box-shadow: none !important; }
[role="tablist"], [role="tablist"] > *, [role="tabpanel"] { background: transparent !important; box-shadow: none !important; }

@keyframes dsh-my-style-caret-blink { 0%,52% { opacity:1 } 53%,100% { opacity:0 } }

`;


    const EXTRA_CSS = String.raw`
/* dsh-my-style clean pass 2026-08-15: original layout + high-contrast color swap only. */
:root, body {
  color-scheme: dark !important;
  --dsh-my-font: "LXGW WenKai Mono", "LXGWWenKaiMono", "LXGWWenKaiMono Nerd Font", "Microsoft YaHei", sans-serif;
  --dsw-alias-bg-base: #262725 !important;
  --dsw-alias-bg-layer-1: #2d2f2d !important;
  --dsw-alias-bg-layer-2: #353735 !important;
  --dsw-alias-bg-layer-3: #3e403e !important;
  --dsw-alias-border-l1: #4d4f4d !important;
  --dsw-alias-border-l2: #5b5b59 !important;
  --dsw-alias-label-primary: #f3d4da !important;
  --dsw-alias-label-secondary: #dec4c9 !important;
  --dsw-alias-label-tertiary: #b9a5a9 !important;
  --dsw-alias-label-caption: #a69497 !important;
  --dsw-alias-label-primary-inverted: #262725 !important;
  --dsw-alias-label-primary-foreground: #262725 !important;
  --dsw-alias-brand-primary: #f6d3d9 !important;
  --dsw-alias-brand-text: #f6d3d9 !important;
  --dsw-alias-link-primary: #f6d3d9 !important;
  --dsw-alias-state-info-primary: #ceb6bb !important;
  --dsw-alias-icon-primary: #f3d4da !important;
  --dsw-alias-icon-secondary: #ceb6bb !important;
}
html, body, #root { background: #262725 !important; color: #f3d4da !important; }
body, body *:not(svg):not(path):not(rect), textarea, input, button, pre, code, kbd { font-family: var(--dsh-my-font) !important; }
body { caret-color: #f6d3d9 !important; }
::selection { background: rgb(246 211 217 / 30%) !important; color: #fff2f4 !important; }
:focus-visible { outline: 1px solid rgb(246 211 217 / 72%) !important; outline-offset: 2px !important; }
a, a:visited, [class*=link], [class*=Link] { color: #f6d3d9 !important; }

html body [class*=sidebar], html body [class*=Sidebar], html body .hHd-Xa_root {
  background: #2b2d2b !important; color: #f3d4da !important; border-color: #4d4f4d !important;
}
html body [aria-selected=true], html body [class*=active], html body [class*=Active], html body [class*=selected], html body [class*=Selected] {
  background-color: #444240 !important; color: #fff2f4 !important;
}

html body .hHd-Xa_brand {
  background: transparent !important; border: 0 !important; box-shadow: none !important; outline: 0 !important;
  color: #f3d4da !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 0 !important;
}
html body .hHd-Xa_brand::before, html body .hHd-Xa_brand::after { content: none !important; display: none !important; }
html body .hHd-Xa_brand svg { opacity: 1 !important; filter: none !important; color: #f3d4da !important; }
html body .hHd-Xa_brand svg > rect { fill: #f3d4da !important; stroke: none !important; opacity: 1 !important; }
html body .hHd-Xa_brand svg > g[clip-path*=dsh-wordmark-badge-clip] path { fill: #262725 !important; stroke: none !important; opacity: 1 !important; }

html body .uV2eYG_card { background: #303230 !important; color: #f3d4da !important; border: 0 !important; box-shadow: 0 18px 44px rgb(18 19 18 / 30%) !important; }
html body .uV2eYG_card *, html body .uV2eYG_root *, html body textarea, html body input, html body [contenteditable=true] { color: #f3d4da !important; }
html body .uV2eYG_card [class*=footer], html body .uV2eYG_card [class*=toolbar], html body .uV2eYG_card [class*=Toolbar] { background: transparent !important; border: 0 !important; }
html body textarea, html body input, html body [contenteditable=true] { background: transparent !important; caret-color: #f6d3d9 !important; box-shadow: none !important; }
html body textarea::placeholder, html body input::placeholder, html body [contenteditable=true]:empty::before { color: #bda8ac !important; }
html body .uV2eYG_card svg, html body .uV2eYG_card svg * { color: #dec4c9 !important; stroke: currentColor !important; }
html body .uV2eYG_primary, html body button.uV2eYG_primary {
  width: 40px !important; height: 40px !important; min-width: 40px !important; min-height: 40px !important; padding: 0 !important; display: grid !important; place-items: center !important; border: 0 !important; border-radius: 999px !important; background: #e9b8c2 !important; color: #262725 !important; box-shadow: 0 8px 22px rgb(233 184 194 / 18%) !important;
}
html body .uV2eYG_primary:hover, html body button.uV2eYG_primary:hover { background: #f6d3d9 !important; color: #262725 !important; }
html body .uV2eYG_primary svg, html body .uV2eYG_primary svg * { width: 18px !important; height: 18px !important; color: #262725 !important; stroke: currentColor !important; }

html body main, html body article, html body [class*=message], html body [class*=Message] { color: #f3d4da !important; }
html body pre, html body code, html body kbd, html body [class*=code], html body [class*=Code] { background-color: #343634 !important; color: #f3d4da !important; border-color: #5b5b59 !important; }
html body pre *, html body code *, html body kbd * { background-color: transparent !important; }
html body [class*=token], html body [class*=Token] { color: #e6cbd0 !important; }
html body [class*=success], html body [class*=Success] { color: #9cc7ae !important; }
html body [class*=warning], html body [class*=Warning] { color: #e5c890 !important; }
html body [class*=error], html body [class*=Error] { color: #e7a3ad !important; }
html body svg[stroke] { color: #f6d3d9; }


/* readback patch: fix high-contrast regressions from broad token swap. */
html body .hHd-Xa_newSession {
  background: #3b3d3c !important;
  color: #f3d4da !important;
  border: 1px solid #5b5b59 !important;
  box-shadow: none !important;
}
html body .hHd-Xa_newSession:hover {
  background: #4e504e !important;
  color: #fff2f4 !important;
}
html body .wSkVaW_tab,
html body .wSkVaW_tabActive {
  background: transparent !important;
  color: #f3d4da !important;
  border: 0 !important;
}
html body .wSkVaW_tabActive {
  color: #fff2f4 !important;
  box-shadow: inset 0 -2px 0 #f6d3d9 !important;
}
html body ._banner_178r4_21,
html body .md-code-block > div:first-child {
  background: #444644 !important;
  color: #f3d4da !important;
  border-color: #5b5b59 !important;
}
html body ._banner_178r4_21 *,
html body .md-code-block > div:first-child * {
  color: #f3d4da !important;
  background: transparent !important;
}


/* header/status repair: keep the original title bar geometry, only recolor and pin the status into the top bar. */
html body .wSkVaW_header {
  position: relative !important;
  display: block !important;
  overflow: visible !important;
  background: #262725 !important;
  border-color: #5b5b59 !important;
}
html body .wSkVaW_tabs {
  position: relative !important;
  top: auto !important;
  left: auto !important;
  z-index: auto !important;
  width: auto !important;
  max-width: none !important;
  background: transparent !important;
}

html body .nL4_yW_sessionLogButton,
html body button[class*= sessionLog],
html body button[class*=SessionLog] {
  position: absolute !important;
  top: 34px !important;
  right: 4px !important;
  height: 30px !important;
  min-height: 30px !important;
  padding: 0 14px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  align-self: center !important;
  margin: 0 !important;
  transform: none !important;
  background: transparent !important;
  color: #fff2f4 !important;
  border: 1px solid #686a67 !important;
  border-radius: 999px !important;
  line-height: 30px !important;
  z-index: 95 !important;
}
html body button[class*=sessionLog] *, html body button[class*=SessionLog] * {
  line-height: 1 !important;
  color: inherit !important;
}html body .JObwrW_trigger {
  width: auto !important;
  min-width: 86px !important;
  height: 28px !important;
  padding: 0 8px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px !important;
  background: transparent !important;
  border: 0 !important;
  color: #f3d4da !important;
  box-shadow: none !important;
}
html body .JObwrW_trigger::after {
  content: attr(aria-label) !important;
  color: #f3d4da !important;
  font-size: 12px !important;
  line-height: 1 !important;
  white-space: nowrap !important;
}
html body .JObwrW_trigger svg {
  width: 16px !important;
  height: 16px !important;
  flex: 0 0 16px !important;
}
html body .JObwrW_track {
  fill: none !important;
  stroke: #686a67 !important;
  stroke-width: 2.2 !important;
  opacity: 1 !important;
}
html body .JObwrW_fill {
  fill: none !important;
  stroke: #f6d3d9 !important;
  stroke-width: 2.2 !important;
  stroke-linecap: round !important;
  opacity: 1 !important;
}


/* tab underline and context ring hard fix: one pink underline, readable usage ring. */
html body .wSkVaW_tabActive {
  box-shadow: none !important;
}
html body .wSkVaW_tabActive::after {
  content: " !important;
  display: block !important;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 1px !important;
  height: 2px !important;
  border-radius: 999px !important;
  background: #f6d3d9 !important;
  box-shadow: none !important;
  border: 0 !important;
}
html body .uV2eYG_card .JObwrW_trigger {
  min-width: 124px !important;
  color: #fff2f4 !important;
}
html body .uV2eYG_card .JObwrW_trigger::after {
  color: #fff2f4 !important;
  font-weight: 600 !important;
}
html body .uV2eYG_card .JObwrW_trigger svg {
  width: 18px !important;
  height: 18px !important;
  color: #f6d3d9 !important;
  overflow: visible !important;
}
html body .uV2eYG_card .JObwrW_trigger svg .JObwrW_track,
html body .uV2eYG_card .JObwrW_trigger .JObwrW_track {
  fill: none !important;
  stroke: #5f625f !important;
  stroke-width: 2.8px !important;
  opacity: 1 !important;
}
html body .uV2eYG_card .JObwrW_trigger svg .JObwrW_fill,
html body .uV2eYG_card .JObwrW_trigger .JObwrW_fill {
  fill: none !important;
  stroke: #fff2f4 !important;
  stroke-width: 3.2px !important;
  stroke-linecap: round !important;
  opacity: 1 !important;
}


/* context ring visibility bump: the 5% arc is tiny, so make the full ring itself obvious. */
html body .uV2eYG_card .JObwrW_trigger {
  min-width: 132px !important;
  gap: 7px !important;
}
html body .uV2eYG_card .JObwrW_trigger svg {
  width: 22px !important;
  height: 22px !important;
  flex-basis: 22px !important;
}
html body .uV2eYG_card .JObwrW_trigger svg .JObwrW_track,
html body .uV2eYG_card .JObwrW_trigger .JObwrW_track {
  stroke: #ceb6bb !important;
  stroke-width: 3.4px !important;
  opacity: 1 !important;
}
html body .uV2eYG_card .JObwrW_trigger svg .JObwrW_fill,
html body .uV2eYG_card .JObwrW_trigger .JObwrW_fill {
  stroke: #fff2f4 !important;
  stroke-width: 4px !important;
  stroke-linecap: round !important;
  opacity: 1 !important;
}


/* context usage restore: keep original compact circle, only recolor it for readability. */
html body .uV2eYG_card .JObwrW_trigger {
  width: 28px !important;
  min-width: 28px !important;
  max-width: 28px !important;
  height: 28px !important;
  padding: 0 !important;
  display: grid !important;
  place-items: center !important;
  gap: 0 !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  color: #f3d4da !important;
}
html body .uV2eYG_card .JObwrW_trigger::after {
  content: none !important;
  display: none !important;
}
html body .uV2eYG_card .JObwrW_trigger svg {
  width: 16px !important;
  height: 16px !important;
  flex: none !important;
  color: #f6d3d9 !important;
  overflow: visible !important;
}
html body .uV2eYG_card .JObwrW_trigger svg .JObwrW_track,
html body .uV2eYG_card .JObwrW_trigger .JObwrW_track {
  fill: none !important;
  stroke: #6f706d !important;
  stroke-width: 2.4px !important;
  opacity: 1 !important;
}
html body .uV2eYG_card .JObwrW_trigger svg .JObwrW_fill,
html body .uV2eYG_card .JObwrW_trigger .JObwrW_fill {
  fill: none !important;
  stroke: #f6d3d9 !important;
  stroke-width: 2.8px !important;
  stroke-linecap: round !important;
  opacity: 1 !important;
}


/* send button slight size trim: keep style, only reduce from 40 to 38. */
html body .uV2eYG_primary,
html body button.uV2eYG_primary {
  width: 38px !important;
  height: 38px !important;
  min-width: 38px !important;
  min-height: 38px !important;
  max-width: 38px !important;
  max-height: 38px !important;
}
html body .uV2eYG_primary svg,
html body .uV2eYG_primary svg * {
  width: 17px !important;
  height: 17px !important;
}


/* send button visible trim: 40/38 was not visually enough, set compact 34px. */
html body .uV2eYG_card .uV2eYG_primary,
html body .uV2eYG_card button.uV2eYG_primary,
html body button.uV2eYG_primary {
  width: 34px !important;
  height: 34px !important;
  min-width: 34px !important;
  min-height: 34px !important;
  max-width: 34px !important;
  max-height: 34px !important;
  flex: 0 0 34px !important;
}
html body .uV2eYG_card .uV2eYG_primary svg,
html body .uV2eYG_card .uV2eYG_primary svg *,
html body button.uV2eYG_primary svg,
html body button.uV2eYG_primary svg * {
  width: 15px !important;
  height: 15px !important;
}


/* hide empty header on non-chat/hero page: no top blank bar or divider. */
html body .wSkVaW_header.wSkVaW_headerHidden {
  height: 0 !important;
  min-height: 0 !important;
  max-height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: 0 !important;
  border-bottom: 0 !important;
  background: transparent !important;
  overflow: hidden !important;
}


/* sidebar folder icon: remove the square chip around the icon, keep only the folder glyph. */
html body .YDXeBa_slot.YDXeBa_folder,
html body .YDXeBa_slot.YDXeBa_folderActive,
html body span.YDXeBa_folder,
html body span.YDXeBa_folderActive {
  background: transparent !important;
  background-color: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  border-radius: 0 !important;
}
html body .YDXeBa_slot.YDXeBa_folder svg,
html body .YDXeBa_slot.YDXeBa_folderActive svg,
html body span.YDXeBa_folder svg,
html body span.YDXeBa_folderActive svg {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  color: #dec4c9 !important;
  fill: none !important;
}
html body .YDXeBa_slot.YDXeBa_folder svg *,
html body .YDXeBa_slot.YDXeBa_folderActive svg *,
html body span.YDXeBa_folder svg *,
html body span.YDXeBa_folderActive svg * {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  color: #dec4c9 !important;
  fill: currentColor !important;
}

`;

    function installStyle() {
      let style = document.getElementById(STYLE_ID);
      if (!style) {
        style = document.createElement("style");
        style.id = STYLE_ID;
        style.dataset.plugin = "dsh-my-style";
      }
      style.textContent = EXTRA_CSS;
      if (style.parentNode !== document.head || style.nextSibling) document.head.appendChild(style);
      if (!window.__dshMyStyleKeepLast) {
        window.__dshMyStyleKeepLast = new MutationObserver(() => {
          const s = document.getElementById(STYLE_ID);
          if (s && s.nextSibling) document.head.appendChild(s);
        });
        window.__dshMyStyleKeepLast.observe(document.head, { childList: true });
        requestAnimationFrame(installStyle);
        setTimeout(installStyle, 600);
        setTimeout(installStyle, 1800);
      }
    }

    function installCaret() {}

    function getWorkspaceSearchInput() {
      return Array.from(document.querySelectorAll("input")).find((input) => {
        const placeholder = String(input.getAttribute("placeholder") ?? "");
        const ariaLabel = String(input.getAttribute("aria-label") ?? "");
        const cls = String(input.className ?? "");
        return placeholder.includes("搜索会话") || ariaLabel.includes("搜索会话") || cls.includes("qDHVXG_searchInput");
      }) ?? null;
    }

    function isWorkspaceSearchInputElement(input) {
      return input instanceof HTMLInputElement && (
        String(input.getAttribute("placeholder") ?? "").includes("搜索会话") ||
        String(input.getAttribute("aria-label") ?? "").includes("搜索会话") ||
        String(input.className ?? "").includes("qDHVXG_searchInput")
      );
    }

    function isVisibleElement(element) {
      if (!(element instanceof Element)) return false;
      const rect = element.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return false;
      const style = getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden";
    }

    function isSettingsModelSurfaceVisible() {
      const candidates = Array.from(document.querySelectorAll('[role="dialog"], [data-radix-popper-content-wrapper], [class*="panel"], [class*="modal"]'));
      return candidates.some((element) => {
        if (!isVisibleElement(element)) return false;
        const text = String(element.innerText || "");
        return /(设置|Settings)/.test(text);
      });
    }

    function setNativeInputValue(input, value) {
      const prototype = input instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");
      descriptor?.set?.call(input, value);
    }

    function dispatchSearchInputEvent(input) {
      if (typeof InputEvent === "function") {
        input.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "deleteContentBackward", data: "" }));
      } else {
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function clearWorkspaceSearchInput(force = false) {
      const input = getWorkspaceSearchInput();
      if (!input || input.value === "") return false;
      installWorkspaceSearchValueGuardOnInput();
      if (!force && !isSettingsModelSurfaceVisible()) return false;
      setNativeInputValue(input, "");
      dispatchSearchInputEvent(input);
      const clearButton = input.parentElement?.querySelector('button[aria-label="清除搜索"], button[class*="clear"]');
      if (clearButton instanceof HTMLElement) {
        clearButton.click();
      }
      return true;
    }

    function installWorkspaceSearchValueGuardOnInput() {
      const input = getWorkspaceSearchInput();
      if (!input || input[SEARCH_VALUE_RECORD_KEY]) return;
      const ownDescriptor = Object.getOwnPropertyDescriptor(input, "value");
      const descriptor = ownDescriptor ?? Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
      if (!descriptor?.get || !descriptor?.set) return;
      Object.defineProperty(input, SEARCH_VALUE_RECORD_KEY, {
        configurable: true,
        value: {
          descriptor,
          hadOwn: Boolean(ownDescriptor)
        }
      });
      Object.defineProperty(input, "value", {
        configurable: true,
        enumerable: descriptor.enumerable ?? false,
        get() {
          return descriptor.get.call(this);
        },
        set(nextValue) {
          const next = String(nextValue ?? "");
          if (next !== "" && isSettingsModelSurfaceVisible()) {
            descriptor.set.call(this, "");
            return;
          }
          descriptor.set.call(this, nextValue);
        }
      });
      if (!window[SEARCH_VALUE_GUARD_KEY]) {
        window[SEARCH_VALUE_GUARD_KEY] = {
          observer: null,
          patched: new Set()
        };
      }
      window[SEARCH_VALUE_GUARD_KEY].patched.add(input);
    }

    function installWorkspaceSearchValueGuard() {
      if (!window[SEARCH_VALUE_GUARD_KEY]) {
        window[SEARCH_VALUE_GUARD_KEY] = {
          observer: null,
          patched: new Set()
        };
      }
      installWorkspaceSearchValueGuardOnInput();
      if (!window[SEARCH_VALUE_GUARD_KEY].observer) {
        const observer = new MutationObserver(() => {
          installWorkspaceSearchValueGuardOnInput();
          if (isSettingsModelSurfaceVisible()) {
            clearWorkspaceSearchInput(true);
          }
        });
        observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
        window[SEARCH_VALUE_GUARD_KEY].observer = observer;
      }
    }

    function installWorkspaceSearchGuard() {
      if (window[SEARCH_GUARD_KEY]) return;
      installWorkspaceSearchValueGuard();
      const onClick = (event) => {
        if (!(event.target instanceof Element)) return;
        const button = event.target.closest("button,[role='button'],a");
        if (!(button instanceof HTMLElement)) return;
        const label = [button.innerText, button.getAttribute("aria-label"), button.getAttribute("title")].filter(Boolean).join(" ");
        if (/(设置|Settings)/.test(label)) {
          clearWorkspaceSearchInput(true);
          return;
        }
        if (button.closest('[role="dialog"]') && /(模型|Models?|提供方|Provider|编辑|Edit)/.test(label)) {
          clearWorkspaceSearchInput(true);
        }
      };
      document.addEventListener("click", onClick, true);
      window[SEARCH_GUARD_KEY] = { onClick };
      if (isSettingsModelSurfaceVisible()) {
        clearWorkspaceSearchInput(true);
      }
    }


    // ------------------------------------------------------------------
    // stats-flank (v27) merged from dsh-stats-flank on 2026-08-22.
    // Conversation stats in two flanking columns beside the composer.
    // React comes from require() above; CSS insertion uses a local style
    // element (the dynamic-plugin styles.insert helper does not exist here).
    // ------------------------------------------------------------------
    const statsFlank = (() => {

      function insertCss(css){
        var el=document.createElement('style');
        el.id='dsh-stats-flank-css';
        el.textContent=css;
        document.head.appendChild(el);
        return function(){if(el.parentNode)el.parentNode.removeChild(el)};
      }
          var ROW_COLORS=['#F3D4DA','#B8CDD8','#DCC79A','#C4A9C9','#A8C2B0','#D8A8A8','#C2AA90','#A8B8C8'];
          var LINE_ALPHA='0.32', GAP=24, SHIFT=0, LINE_PAD=2, MIN_SIDE=300, EST_W=100;
    
          function findAnchorRect(){
            var ta=document.querySelector('textarea');
            if(ta){var tr=ta.getBoundingClientRect();if(tr.width>300)return{left:tr.left,right:tr.right}}
            var s=document.querySelector('[class*="composerSeat"]');
            if(s){var sr=s.getBoundingClientRect();if(sr.width>300)return{left:sr.left,right:sr.right}}
            return null;
          }
    
          var statItems=[], listeners=new Set(), notify=function(){listeners.forEach(function(f){f()})};
    
          function parseStats(el){
            var ch=Array.from(el.children),groups=[];
            ch.forEach(function(c){if(c.getAttribute('aria-hidden')==='true')return;var t=(c.textContent||'').trim();if(t)groups.push(t)});
            var counts='',llm='',toolCall='',ttft='',tps='',cacheHit='',inputTokens='',outputTokens='';
            groups.forEach(function(g){
              if(g.indexOf('轮')!==-1&&g.indexOf('步')!==-1)counts=g;
              else if(g.indexOf('LLM')===0){var p=g.split('·');llm=p[0].trim();if(p[1]&&p[1].trim().indexOf('工具调用')===0)toolCall=p[1].trim()}
              else if(g.indexOf('工具调用')===0)toolCall=g;
              else if(g.indexOf('缓存命中')===0)cacheHit=g;
              else if(g.indexOf('首')!==-1&&g.indexOf('平均')!==-1){var p=g.split('·');ttft=(p[0]||'').trim().replace(/\s*token\s*/g,'token');tps=(p[1]||'').trim()}
              else if(g.indexOf('输入')!==-1&&g.indexOf('输出')!==-1){var p=g.split('·');inputTokens=(p[0]||'').trim().replace(/\s*tok$/,'');outputTokens=(p[1]||'').trim().replace(/\s*tok$/,'')}
            });
            statItems=[counts||'0 轮 · 0 步',llm||'LLM 0s',toolCall||'工具调用 0s',ttft||'首token平均 0s',tps||'0 tok/s',cacheHit||'缓存命中 0%',inputTokens||'输入 0',outputTokens||'输出 0'];
            notify();
          }
    
          var elObserver=null, currentEl=null;
          function watch(el){if(elObserver)elObserver.disconnect();currentEl=el;parseStats(el);elObserver=new MutationObserver(function(){parseStats(el)});elObserver.observe(el,{childList:true,characterData:true,subtree:true})}
          var found=document.querySelector('.FJxK0a_root');if(found)watch(found);
    
          function onShift(){var f=document.querySelector('.FJxK0a_root');if(f&&f!==currentEl)watch(f);if(!f)statItems=[];notify()}
          var bo=new MutationObserver(onShift);bo.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','style']});
          function onResize(){notify()}window.addEventListener('resize',onResize);
    
          function ha(hex,a){var h=hex.replace('#','');return'rgba('+parseInt(h.substr(0,2),16)+','+parseInt(h.substr(2,2),16)+','+parseInt(h.substr(4,2),16)+','+a+')'}
    
          function splitLabelValue(text){
            var idx=text.lastIndexOf(' ');if(idx===-1)return{label:text,value:''};
            var label=text.slice(0,idx),value=text.slice(idx+1).trim();
            if(/[步轮]$/.test(value)&&/[·•]/.test(label))return{label:text,value:''};
            if(value==='tok'){var i2=label.lastIndexOf(' ');if(i2!==-1){value=label.slice(i2+1).trim();label=label.slice(0,i2)}}
            if(value==='tok/s'){var np=label.trim();if(/^\d+(\.\d+)?$/.test(np))return{label:'',value:np+' tok/s'}}
            return{label:label,value:value};
          }
    
          var nativeEl=document.querySelector('.FJxK0a_root');
          if(nativeEl)nativeEl.style.display='none';
    
          var colorCss=null;
          function buildColorCss(){
            var rules='.FJxK0a_root{overflow:visible!important;width:auto!important;max-width:none!important;white-space:nowrap!important}';
            for(var i=0;i<ROW_COLORS.length;i++){rules+='.FJxK0a_root>*:nth-child('+(i+1)+'){color:'+ROW_COLORS[i]+'!important}';}
            return rules;
          }
    
          return {
            inject: ["slots"],
            apply(ctx) {
              
              var slots=ctx.slots;
              if(slots){
                
                slots.inject('shell.overlay',function(){return slots.register({name:'shell.overlay',id:'dsh-stats-flank',order:0},function(){
                function Flank(){
                  
                  var redrawState=React.useState(0), redraw=redrawState[1];
                  React.useEffect(function(){var fn=function(){redraw(function(n){return n+1})};listeners.add(fn);return function(){listeners.delete(fn)}},[]);

                  // 第一行分隔线宽度 = 第二行的实际渲染宽度（ref 测量后回填）。
                  var l2ref=React.useRef(null),r2ref=React.useRef(null);
                  var l2wState=React.useState(0),l2w=l2wState[0],setL2w=l2wState[1];
                  var r2wState=React.useState(0),r2w=r2wState[0],setR2w=r2wState[1];
                  React.useEffect(function(){
                    if(l2ref.current){var w1=l2ref.current.getBoundingClientRect().width;if(Math.abs(w1-l2w)>0.5)setL2w(w1);}
                    if(r2ref.current){var w2=r2ref.current.getBoundingClientRect().width;if(Math.abs(w2-r2w)>0.5)setR2w(w2);}
                  });

                  var items=statItems;
                  var rect=items.length?findAnchorRect():null;
                  var useFallback=!!rect&&rect.left-GAP-EST_W<MIN_SIDE;

                  React.useEffect(function(){
                    if(!rect)return;
                    var el=document.querySelector('.FJxK0a_root');
                    if(!el)return;
                    if(useFallback){el.style.display='';if(!colorCss)colorCss=insertCss(buildColorCss());}
                    else{el.style.display='none';if(colorCss){colorCss();colorCss=null;}}
                  },[useFallback,items]);

                  if(!rect)return null;
                  var vw=window.innerWidth;

                  if(useFallback)return null;
    
                  var LEFT_COUNT=4;
                  var li=items.slice(0,LEFT_COUNT),ri=items.slice(LEFT_COUNT);

                  var cb={position:'fixed',bottom:'8px',zIndex:92,display:'flex',flexDirection:'column',gap:'0',pointerEvents:'none',fontSize:'12px',lineHeight:'18px'};
                  var lc=Object.assign({},cb,{right:(vw-rect.left+GAP)+'px',alignItems:'flex-start'});
                  var rc=Object.assign({},cb,{left:(rect.right+GAP)+'px',alignItems:'flex-start'});

                  function ro(color,showLine){var s={display:'inline-flex',alignItems:'baseline',padding:'2px '+LINE_PAD+'px',whiteSpace:'nowrap',boxSizing:'border-box',color:color};if(showLine)s.borderBottom='1px solid '+ha(color,LINE_ALPHA);return s;}
                  function isv(side){return{position:'relative',display:'inline-flex',gap:'8px',alignItems:'baseline',left:(side==='left'?SHIFT:-SHIFT)+'px'}}
                  function rfr(key,text,color,showLine,w){var st=Object.assign(ro(color,showLine),{display:'flex',justifyContent:'center'});if(w)st.width=w+'px';return React.createElement('span',{key:key,style:st},text)}
                  // 描述栏固定宽（容最长的“首 token 平均”），描述/数据列均左对齐成栏；
                  // 数据栏宽度随内容收缩 → 行宽由数据决定，横线 = 行宽 + 4px。
                  var LBL_W=76, COL_GAP=12;
                  function rdr(key,label,value,color,showLine,ref){return React.createElement('span',{key:key,style:ro(color,showLine),ref:ref||undefined},React.createElement('span',{style:{display:'inline-block',width:LBL_W+'px'}},label),React.createElement('span',{style:{display:'inline-block',paddingLeft:COL_GAP+'px'}},value))}
                  function rone(item,i,arr,side){var color=ROW_COLORS[i%ROW_COLORS.length],showLine=i<arr.length-1;var parts=splitLabelValue(item),key=(side==='left'?'l':'r')+i,isFirst=i===0;if(isFirst)return rfr(key,item,color,showLine,side==='left'?l2w:r2w);if(!parts.value)return rfr(key,item,color,showLine);if(!parts.label)return rfr(key,parts.value,color,showLine);return rdr(key,parts.label,parts.value,color,showLine,i===1?(side==='left'?l2ref:r2ref):null);}

                  return React.createElement(React.Fragment,null,
                    React.createElement('div',{style:lc,key:'left'},li.map(function(item,i){return rone(item,i,li,'left')})),
                    React.createElement('div',{style:rc,key:'right'},ri.map(function(item,i){return rone(item,i,ri,'right')}))
                  );
                }
                return React.createElement(Flank);
                })});
              }
              ctx.effect(function(){return function(){window.removeEventListener('resize',onResize);bo.disconnect();if(elObserver)elObserver.disconnect();if(colorCss)colorCss()}});
            }
          };
        })();

    function apply(ctx) {
      const styleDisposer = ctx.effect(() => { installStyle(); installCaret(); installWorkspaceSearchGuard(); }, "dsh-my-style: install browser assets");
      const theme = ctx.theme;
      const tokenDisposer = theme?.overrideTokens?.(THEME_SOURCE, TOKENS);
      ctx.effect(() => () => {
        tokenDisposer?.();
        document.getElementById(STYLE_ID)?.remove();
        if (window[SEARCH_GUARD_KEY]?.onClick) {
          document.removeEventListener("click", window[SEARCH_GUARD_KEY].onClick, true);
          delete window[SEARCH_GUARD_KEY];
        }
        if (window[SEARCH_VALUE_GUARD_KEY]) {
          window[SEARCH_VALUE_GUARD_KEY].observer?.disconnect?.();
          window[SEARCH_VALUE_GUARD_KEY].patched?.forEach?.((input) => {
            const record = input?.[SEARCH_VALUE_RECORD_KEY];
            if (!record) return;
            if (record.hadOwn) {
              Object.defineProperty(input, "value", record.descriptor);
            } else {
              delete input.value;
            }
            delete input[SEARCH_VALUE_RECORD_KEY];
          });
          delete window[SEARCH_VALUE_GUARD_KEY];
        }
        styleDisposer?.();
      }, "dsh-my-style: cleanup");
      statsFlank.apply(ctx);
    }
    module.exports = { apply, inject: ["theme", "slots"] };
    return module.exports;
  }
});





































