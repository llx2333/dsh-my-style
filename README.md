# dsh-my-style

**语言 / Language**: 简体中文 | [English](README.en.md)

DeepSeek Harness (DSH) web 客户端插件：**炭灰 + 樱粉**主题配色，输入框两侧的**会话统计侧栏**，以及一组会话操作增强（复制会话 ID、菜单重排、搜索框防串扰）。

## 功能

### 1. 炭灰 × 樱粉主题

- 深炭灰底（`#262725` 系）+ 樱粉前景/品牌色（`#f3d4da` / `#f6d3d9`），浅色/深色模式统一为同一套暗色配色；
- 颜色通过 `@deepseek-ai/dsh-client-ui-theme` 的 `ThemeRuntime.overrideTokens` 注册（主题级 token 覆盖），同时注入一份 `!important` CSS 兜底，双通道保证覆盖生效；
- 字体优先 `LXGW WenKai Mono`（霞鹜文楷等宽），Nerd Font 变体与 `Microsoft YaHei` 后备；选择区、光标、滚动条、焦点环全部按主题色定制；
- 发送按钮、新建会话按钮、侧栏、代码块、上下文用量圆环等组件逐一重排配色，去除多余卡片底与阴影。

### 2. 会话统计侧栏（stats-flank）

读取原生统计条 `.FJxK0a_root` 并重新排版为两列，挂在输入框两侧（React 由模块加载器 `require('react')` 提供）：

| 左列 | 右列 |
|---|---|
| 轮·步、LLM 耗时、工具调用耗时、首 token 平均 | tok/s、缓存命中、输入 token、输出 token |

- 每行一种颜色（8 色循环），分隔线长度跟随该行内容；
- 描述列/数据列各自左对齐成栏；首行文字居中，分隔线与第二行等长贴齐；
- 窗口过窄时自动回退为原生统计条（仅重新着色），不留残影。

### 3. 会话操作增强

- **复制会话 ID**：会话行「…」菜单追加「复制会话 ID」项，点击复制后显示「已复制」；会话 id 从 React fiber 读取（行 fiber.key，兜底走链找 `props.node.id`）；局域网 http 访问（手机）无 `navigator.clipboard` 时自动降级 `execCommand`；
- **菜单重排**：会话菜单固定为「重命名 → 复制会话 ID → 跳过梦境 → 分叉 → 删除 → 归档」，兼容 [meow-memory](https://github.com/mkcto/meow-memory) 插件的「跳过梦境整理」项；先比较后写，顺序已正确时零 DOM 写入，避免 MutationObserver 自激死循环；
- **搜索框防串扰**：打开设置/模型弹窗时自动清空并守卫工作区会话搜索框，防止弹窗内输入串扰到背后的会话列表过滤条件；插件卸载时完整还原被 patch 的输入框 value 描述符。

## 安装

```bash
dsh plugin --profile web add git+https://github.com/llx2333/dsh-my-style.git
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

> 国内网络也可用 gitee 镜像：`git+https://gitee.com/llx2333/dsh-my-style.git`

## 统计侧栏布局参数

在 `client.js` 的 stats-flank 段可调：

| 参数 | 默认 | 含义 |
|---|---|---|
| `LBL_W` | 76 | 描述栏宽度（px） |
| `COL_GAP` | 12 | 描述与数据列间距 |
| `LINE_PAD` | 2 | 分隔线两侧超出量（每侧 px） |
| `GAP` | 24 | 侧栏与输入框的间距 |
| `ROW_COLORS` | 8 色 | 每行文字颜色循环 |

## 依赖

- DSH host `>= 0.1.0-rc.6`（peer：`@deepseek-ai/dsh-client-ui-theme`，由宿主提供）

## License

MIT
