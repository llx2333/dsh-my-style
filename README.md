# dsh-my-style

DeepSeek Harness (DSH) web 客户端插件：炭灰 + 樱粉主题配色，并在输入框两侧挂上会话统计侧栏（轮数/步数、LLM 耗时、工具调用、首 token、tok/s、缓存命中、输入输出 token）。

实现要点：

- 颜色通过 `@deepseek-ai/dsh-client-ui-theme` 的 `ThemeRuntime.overrideTokens` 注册；
- 字体、布局、发送按钮和光标由插件自己的客户端 CSS/JS 注入（普通字体 `LXGW WenKai Mono` 优先，Nerd Font 只作后备）；
- 统计侧栏（stats-flank）读取原生统计条 `.FJxK0a_root` 并重新排版，React 由模块加载器 `require('react')` 提供。

## 安装

```bash
dsh plugin --profile web add git+https://gitee.com/llx2333/dsh-my-style.git
```

安装后重启 dsh 即自动生效（`dsh.bundle.patch` 会自动把插件注册进 profile）。

更新：

```bash
dsh plugin --profile web update dsh-my-style
```

卸载：

```bash
dsh plugin --profile web remove dsh-my-style
```

## 统计侧栏布局参数

在 `client.js` 的 stats-flank 段可调：

| 参数 | 默认 | 含义 |
|---|---|---|
| `LBL_W` | 76 | 描述栏宽度（px） |
| `COL_GAP` | 12 | 描述与数据列间距 |
| `LINE_PAD` | 2 | 分隔线两侧超出量（每侧 px） |
| `GAP` | 24 | 侧栏与输入框的间距 |
| `ROW_COLORS` | 8 色 | 每行文字颜色循环 |

布局规则：描述列/数据列各自左对齐成栏；每行分隔线长度跟随该行内容（+4px）；首行（轮·步 / tok/s）文字居中、分隔线与第二行等长贴齐；窗口过窄时自动回退为原生统计条。

## 依赖

- DSH host `>= 0.1.0-rc.6`（peer：`@deepseek-ai/dsh-client-ui-theme`，由宿主提供）

## License

MIT
