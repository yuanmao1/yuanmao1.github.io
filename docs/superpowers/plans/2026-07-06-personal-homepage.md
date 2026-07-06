# 个人主页（Astro 单页滚动站）实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 按 `docs/superpowers/specs/2026-07-06-personal-homepage-design.md` 构建陈震烨的单页滚动个人主页，中英双语，部署到 GitHub Pages。

**Architecture:** Astro 5 静态生成，单页六区块（Hero / 主线 / 研究 / 项目 / 开源 / 联系）组件化，文案集中在 `src/i18n/`，`/` 与 `/en/` 两路由共享组件树。动效全部为 CSS + IntersectionObserver，无运行时框架。

**Tech Stack:** Astro 5、Tailwind CSS 4（@tailwindcss/vite）、@fontsource 自托管字体（避开 Google Fonts 在国内不可达）、GitHub Actions → GitHub Pages。

**验证方式:** 本站无单元测试；每个任务的验证是 `npm run build` 成功 + `npm run preview` 后用 Playwright 截图检查桌面（1440px）与移动（375px）两个视口。最终验收跑 Lighthouse。

---

### Task 1: 脚手架与依赖

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`

- [ ] **Step 1:** 在项目根目录初始化（目录已有 docs/ 与 .git，手动建包而不用 create-astro 向导）：

```bash
npm init -y
npm install astro @tailwindcss/vite tailwindcss @fontsource-variable/inter @fontsource/instrument-serif
```

- [ ] **Step 2:** 写 `astro.config.mjs`：

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yuanmao1.github.io',
  vite: { plugins: [tailwindcss()] },
});
```

- [ ] **Step 3:** 写 `tsconfig.json`（astro 推荐基线）与 `.gitignore`（`node_modules/`, `dist/`, `.astro/`）；`package.json` scripts 设为 `dev/build/preview` 对应 `astro dev/build/preview`。

- [ ] **Step 4:** 建最小 `src/pages/index.astro`（临时 hello），运行 `npm run build`，期望 exit 0 且产出 `dist/index.html`。

- [ ] **Step 5:** Commit：`chore: Astro 脚手架与依赖`

### Task 2: 全局样式与主题系统

**Files:**
- Create: `src/styles/global.css`

- [ ] **Step 1:** 写 `global.css`：引入 tailwind 与字体；定义双主题 CSS 变量（按规格 §4 配色）；定义 keyframes（marquee、pulse-dot、word-rotate、gradient-shift、drift-grid）；定义 `.reveal` 初始态/`.revealed` 终态；`prefers-reduced-motion` 全局关停动画。核心骨架：

```css
@import 'tailwindcss';
@import '@fontsource-variable/inter';
@import '@fontsource/instrument-serif/400-italic.css';

:root[data-theme='dark'] {
  --bg: #0a0a0c; --surface: #111114; --text: #f2f2f0;
  --muted: #8a8a93; --stroke: rgba(255,255,255,.1);
  --accent-a: #89aacc; --accent-b: #4e85bf;
}
:root[data-theme='light'] {
  --bg: #f7f7f5; --surface: #ffffff; --text: #17171a;
  --muted: #6b6b74; --stroke: rgba(0,0,0,.1);
  --accent-a: #4e85bf; --accent-b: #2f5f96;
}
@theme inline {
  --color-bg: var(--bg); --color-surface: var(--surface);
  --color-body: var(--text); --color-muted: var(--muted);
  --color-stroke: var(--stroke);
  --font-body: 'Inter Variable', system-ui, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-display: 'Instrument Serif', 'Songti SC', 'SimSun', serif;
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

- [ ] **Step 2:** build 通过后 commit：`feat: 全局样式、双主题变量与动效 keyframes`

### Task 3: 文案（i18n）

**Files:**
- Create: `src/i18n/zh.ts`, `src/i18n/en.ts`, `src/i18n/index.ts`

- [ ] **Step 1:** 按规格 §3 各区块写全量中文文案对象（hero、trajectory、research、projects×4、opensource×2、contact、nav），内容口径严格来自规格（OCP 用"商业对象的发现、查询协商、权限化检索与解析层"等）。导出类型 `SiteContent`，`en.ts` 结构完全一致的英文版。
- [ ] **Step 2:** `index.ts` 导出 `getContent(lang: 'zh' | 'en')`。build 通过，commit：`feat: 中英双语文案`

### Task 4: Base 布局与导航

**Files:**
- Create: `src/layouts/Base.astro`, `src/components/Nav.astro`

- [ ] **Step 1:** `Base.astro`：`<head>` 含 meta/OG/canonical/hreflang，首帧内联主题脚本（localStorage → prefers-color-scheme 回退），引 global.css，slot 页面内容。
- [ ] **Step 2:** `Nav.astro`：fixed 胶囊 backdrop-blur 导航，编号锚点链接（`01 / 主线` … `05 / 联系`），右侧主题切换按钮 + 语言切换链接；移动端 Menu 按钮 + grid-rows 过渡展开面板；滚动 >100px 加投影（10 行内联 JS）。
- [ ] **Step 3:** build + Playwright 截图两视口检查导航形态，commit：`feat: Base 布局、主题切换与导航`

### Task 5: Hero 区块

**Files:**
- Create: `src/components/Hero.astro`

- [ ] **Step 1:** 实现规格 §3① 全部元素：CSS 网格光晕背景（伪元素 + drift-grid 动画）、vw 级渐变姓名（`background-clip: text`）、等宽 uppercase 副标题、轮换词（CSS word-rotate，4 词循环）、左下定位小字、右下脉冲点 + `Open to collaboration`、三入口按钮、依次入场动画。
- [ ] **Step 2:** build + 截图（两视口，验证 375px 不溢出），commit：`feat: Hero 区块`

### Task 6: 主线区块（路径图 + marquee）

**Files:**
- Create: `src/components/Trajectory.astro`

- [ ] **Step 1:** 区块标签 `02 / TRAJECTORY` + 自我介绍段；内联 SVG 四节点路径图（桌面横向，移动端改纵向——用两套 SVG 或 CSS 旋转布局，节点 hover 亮起）；技术关键词 marquee（内容复制两份 + `animation: marquee` 无限左移，hover 暂停）。
- [ ] **Step 2:** build + 截图，commit：`feat: 主线叙事区块`

### Task 7: 研究区块

**Files:**
- Create: `src/components/Research.astro`

- [ ] **Step 1:** 论文大卡片：标题、事实行（共同第一作者 · *Neural Networks* · Accepted 2026-07-03）、三行研究内容、范式统一 SVG 小图（offline/online/self → unified）、`DOI (in press)` 占位链接钮。
- [ ] **Step 2:** build + 截图，commit：`feat: 研究与论文区块`

### Task 8: 项目区块（粘性堆叠）

**Files:**
- Create: `src/components/Projects.astro`, `src/components/ProjectCard.astro`

- [ ] **Step 1:** `ProjectCard`：编号、名称、系统抽象一句话、能力点列表、流程 SVG（每项目一张，OCP 的为 `用户目标 → Agent → OCP Catalog → Provider → 确认后动作`）、外链按钮。
- [ ] **Step 2:** `Projects`：桌面端 `position: sticky; top: 100px` 逐卡堆叠（后卡覆盖前卡），移动端 `position: static` 普通排列（media query 切换）。
- [ ] **Step 3:** build + 截图（桌面滚动中段截一张验证堆叠效果），commit：`feat: 项目区块与粘性卡片堆叠`

### Task 9: 开源区块

**Files:**
- Create: `src/components/OpenSource.astro`

- [ ] **Step 1:** 两卡片（nullclaw / ucp-sdk-java），静态 stars 文案，贡献点列表，GitHub 直链；hover 边框 gradient-shift 流动。
- [ ] **Step 2:** build + 截图，commit：`feat: 开源区块`

### Task 10: 联系页脚 + reveal 脚本 + 组装

**Files:**
- Create: `src/components/Contact.astro`, `src/scripts/reveal.ts`
- Modify: `src/pages/index.astro`, Create: `src/pages/en/index.astro`

- [ ] **Step 1:** `Contact.astro`：`Let's talk.` 衬线斜体巨字、email/GitHub/OCP/Siliconize 链接行、实时时钟（`setInterval` 10 行）、版权行。
- [ ] **Step 2:** `reveal.ts`：IntersectionObserver 给 `.reveal` 元素加 `.revealed`，`prefers-reduced-motion` 时直接全部显示。
- [ ] **Step 3:** `index.astro` 组装六区块（传 `zh` 文案），`en/index.astro` 传 `en`。
- [ ] **Step 4:** build + 两路由两视口截图，commit：`feat: 页脚、reveal 与页面组装`

### Task 11: 部署流水线与收尾

**Files:**
- Create: `.github/workflows/deploy.yml`, `public/favicon.svg`, `public/og-image.png`, `README.md`

- [ ] **Step 1:** `deploy.yml`：push main → `withastro/action@v3` 构建 → `actions/deploy-pages@v4` 发布。
- [ ] **Step 2:** favicon（"ZC" 单字母 SVG）与 og-image（用 Playwright 对 Hero 截 1200×630 图存入 public/）。
- [ ] **Step 3:** README 写明本地开发、部署到 `yuanmao1/yuanmao1.github.io` 的步骤。
- [ ] **Step 4:** commit：`chore: 部署流水线与站点资产`

### Task 12: 最终验收

- [ ] **Step 1:** `npm run build && npm run preview`，Playwright 逐区块截图核对规格 §3。
- [ ] **Step 2:** Lighthouse 移动端跑分（Chrome headless `--headless=new` 或 playwright + lighthouse npm 包；如环境受限则记录并改用 devtools 手测清单）。目标：四项 ≥95。
- [ ] **Step 3:** 核对验收清单 §8 全部 7 项，逐项记录结果。
- [ ] **Step 4:** commit：`chore: 验收记录`；告知用户创建 GitHub 仓库并推送的步骤（或代为执行 `gh repo create`）。

---

## Self-Review 记录

- 规格覆盖：§3 全部区块 → Task 4-10；§2 技术表 → Task 1-2；§5 移动端 → 各任务截图步骤 + Task 12；§7 结构 → 各任务文件路径与之一致；§8 验收 → Task 12。无缺口。
- 占位符扫描：无 TBD；Task 3 的文案"按规格写全量"有规格 §3 的逐条内容作为直接来源，非悬空引用。
- 命名一致性：组件名 Hero/Trajectory/Research/Projects/ProjectCard/OpenSource/Contact/Nav 在 Task 4-10 与规格 §7 一致。

---

## 验收记录（2026-07-06）

| 验收项 | 结果 |
|---|---|
| 1. `npm run build` 纯静态产出，preview 一致 | ✅ 2 页（`/`、`/en/`）构建成功 |
| 2. 中/英路由内容完整对应 | ✅ Playwright 截图核对 |
| 3. 暗/亮主题切换无闪烁、localStorage 持久化 | ✅ 首帧内联脚本；切换后 `theme=light` 已存储 |
| 4. Lighthouse 移动端 | ✅ Performance 100 / Accessibility 100 / Best Practices 100 / SEO 100 |
| 5. prefers-reduced-motion 动画停止且内容全部可见 | ✅ 0 个隐藏 reveal 元素 |
| 6. 375px–2560px 布局不破 | ✅ 375 / 1440 / 2560 三档截图核对，无横向溢出 |
| 7. OG 标签 + og-image | ✅ head 完整，og-image.png 已生成 |

交互抽查：移动菜单开合与锚点滚动正常（scrollY=716）、桌面粘性卡片堆叠正常、marquee/轮换词/脉冲点动画正常、无 JS 时内容可见（reveal 仅在 `html.js` 下隐藏）。
