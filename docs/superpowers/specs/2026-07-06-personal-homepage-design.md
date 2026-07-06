# 陈震烨个人主页 · 设计文档

日期：2026-07-06
状态：已与用户确认方向（单页滚动、Astro、不放简历下载）

## 1. 定位与目标

一个**面向社会的个人可信信息源**：任何访客（学术读者、开源社区、企业客户、招聘方）5 分钟内能判断——他是谁、做过什么、正在做什么、凭什么可信、怎么联系。

核心主线叙事：**从知识蒸馏与高效模型 → AI Agent 系统 → 可交易对象协议（OCP）→ 企业智能化落地（FDE / 数字员工）**。

明确不做的事：

- 不做多页面站点——单页滚动 + 页内锚点导航
- 不提供简历 PDF 下载——主页信息量本身大于简历
- 不做文章/博客区——以后有需要再加，不留空框架
- 不放愿景型口号——只写"问题、方法、系统、结果、链接"

## 2. 技术方案

| 项 | 决定 |
|---|---|
| 框架 | Astro 5（静态输出，默认零 JS） |
| 样式 | Tailwind CSS 4 |
| 动效 | 原生 CSS animation + 少量原生 JS（IntersectionObserver），**不引入** GSAP / Framer Motion 等运行时库 |
| 字体 | 西文：Inter（正文）+ Instrument Serif italic（大标题点缀）；中文：系统字体栈（PingFang SC / 微软雅黑 / Noto Sans SC 回退），避免加载中文 webfont 拖慢移动端 |
| 图标 | 少量内联 SVG（GitHub、邮件、外链箭头） |
| 部署 | GitHub 仓库 `yuanmao1/yuanmao1.github.io`，GitHub Actions 构建 Astro 并发布到 GitHub Pages |
| 双语 | `/`（中文，默认）与 `/en/`（英文）两个路由渲染同一组件树，文案抽到 `src/i18n/zh.ts` / `en.ts`；导航右上角 EN/中 切换 |

## 3. 页面结构（单页，滚动顺序即叙事顺序）

### 导航条（fixed 顶部）

- 胶囊形 `backdrop-blur` 悬浮导航（参考 Portfolio Cosmic 的 pill navbar），滚动 >100px 后加投影
- 链接采用编号格式（参考 Creative Portfolio）：`01 / 主线`、`02 / 研究`、`03 / 项目`、`04 / 开源`、`05 / 联系`，悬停下划线从右侧滑入
- 右侧：主题切换（暗/亮）、语言切换（EN/中）
- 移动端：收成 Menu 按钮，展开用 CSS Grid `grid-rows-[0fr]→[1fr]` 弹簧过渡，链接放大到 28px 级别

### ① Hero（100vh）

- 背景：**不用视频**（移动端性能红线）。用纯 CSS 实现的缓慢漂移网格 + 径向光晕（呼应 OCP 官网的 hero-grid），`prefers-reduced-motion` 时静止
- 巨型姓名标题：`陈震烨` + `Zhenye Chen`，vw 级字号（`clamp` 控制），渐变文字填充（参考 3D Portfolio 的 `linear-gradient(180deg, #646973, #BBCCD7)` 手法，按本站配色调整）
- 副标题一行：`AI Systems · Knowledge Distillation · Agent Infrastructure`（等宽字体、uppercase、宽字距，OCP 站的 label 风格）
- 轮换词动画（参考 Portfolio Cosmic 的 rotating words）：一行 `我构建 ____` 中轮换「高效深度学习模型 / Agent 基础设施 / 可交易对象协议 / 企业数字员工」，纯 CSS keyframes
- 左下角：一句话定位（小字、uppercase、max-width 窄栏，参考 3D Portfolio 布局）
- 右下角：脉冲绿点 + `Open to collaboration`（参考 Creative Portfolio 的 availability dot）
- 三个入口按钮：GitHub / Email / 论文（锚点到 ③）
- 入场动画：导航→标题→副文→按钮依次 fade+up，ease `cubic-bezier(0.16,1,0.3,1)`

### ② 主线（About + 叙事路径）

- 区块标签：`02 / TRAJECTORY`（等宽小字宽字距，所有区块统一此规格）
- 一段自我介绍（基于简历"关于我"口径）：浙江工业大学软件工程；研究方向知识蒸馏与模型压缩；工程方向 Agent 系统与企业智能化
- **横向路径图**（桌面端）/ 纵向时间线（移动端）：四个节点——知识蒸馏 → Agent 系统 → OCP 协议 → 企业落地，每个节点悬停亮起，内联 SVG 实现
- 技术关键词 marquee 走马灯一条（参考 3D Portfolio 的 MarqueeSection，改为纯 CSS `animation: scroll` 的文字带）：`Knowledge Distillation · Agent Infrastructure · Protocol Design · Java · Go · Python · Zig · TypeScript · Bazel …`，hover 暂停，reduced-motion 时静止

### ③ 研究（论文专页级卡片）

- 大卡片：**Unified Knowledge Distillation: Integrating Offline, Online, and Self-Distillation Paradigms for Image Classification**
- 事实行：共同第一作者 · *Neural Networks* · Accepted 2026-07-03（稿件号 NEUNET-D-25-05170）
- 三行研究内容（沿用简历表述：统一建模离线/在线/自蒸馏；统一训练与实验流程；训练、消融、修改全程参与）
- 一张小的范式统一示意 SVG（offline / online / self 三支汇入 unified framework）
- 链接位：DOI / ScienceDirect（占位，正式页面出来后补）
- 学术表述，不营销

### ④ 项目（本页视觉重心）

**桌面端用粘性卡片堆叠**（参考 3D Portfolio 的 sticky card stack）：四张全宽大卡片，滚动时前一张被后一张覆盖压缩；**移动端退化为普通纵向排列**（性能与可用性优先）。

每张卡片结构统一：编号 + 项目名 + 一句话系统抽象 + 3-5 个能力点 + 一张流程 SVG + 外链按钮。

1. **OCP** — `商业对象的发现、查询协商、权限化检索与解析层`（采用飞书技术设计文档的准确口径）。能力点：可交易对象模型（商品/岗位/简历/本地服务/课程…）、Catalog 发现与路由、Search / Resolve / Action 分层、字段级权限与审计。流程图：`用户目标 → Agent → OCP Catalog → Provider → 确认后动作`。外链：ocp.deeplumen.io + 文档站
2. **PageFlux** — AI 学习与招聘平台。能力点：简历解析、能力画像、岗位匹配、个性化测评、学习路径、多 Agent 任务流。外链：pageflux.ai
3. **arXtect** — AI 集成 LaTeX 编辑器。能力点：Wasm 浏览器本地编译、Yjs 多人协同、AI 写作建议、Go/Python/前端 + Bazel 跨语言构建。外链：arxtect.cn
4. **Siliconize（企业智能化 / 数字员工）** — 以个人参与方向表述而非公司介绍。能力点：FDE 方法、流程诊断、任务编排、人工确认、权限边界、日志审计。结果口径**只用官网已公开内容**（如样例日报广告 ROI 约 3.53）。外链：siliconize.cn

### ⑤ 开源

两张并排卡片（移动端单列）：

1. **nullclaw** — Contributor；7.7k+ stars、Zig 编写的 autonomous AI assistant infrastructure。贡献点：Windows 兼容性、shell 输出编码、路径长度限制、本地命令流式执行、回归测试。直链 GitHub 仓库与 PR 列表
2. **ucp-sdk-java** — 作者/维护者；115+ stars。协议模型封装、Schema 生成 Java 模型、认证与 API 调用、Provider 接入。直链 GitHub

卡片悬停：边框渐变流动（参考 Portfolio Cosmic 的 `gradient-shift` 动画边框）。stars 数写为 `7.7k+` / `115+` 静态文案，不做运行时 GitHub API 请求（避免额度与加载抖动）。

### ⑥ 联系（页脚）

- 巨字 CTA：`Let's talk.`（Instrument Serif italic）
- email（czyklein@outlook.com）、GitHub（yuanmao1）、OCP 站、Siliconize 站
- 一行版权 + 顶部返回锚点
- 彩蛋：页脚角落显示本地实时时钟（参考 Creative Portfolio 的 live clock，`HH:MM:SS`），成本极低

## 4. 视觉系统

| 项 | 规格 |
|---|---|
| 配色（暗，默认） | 背景 `#0A0A0C`、表面 `#111114`、文字 `#F2F2F0`、次级 `#8A8A93`、描边 `rgba(255,255,255,.1)`、强调渐变 `#89AACC → #4E85BF`（冷蓝，与 OCP 站同族） |
| 配色（亮） | 同一变量组的反转版，CSS custom properties + `data-theme` 切换，跟随系统偏好，手动可覆盖并 localStorage 记忆 |
| 排版 | 大标题 vw 级 + `clamp()`；区块标签统一 `text-xs uppercase tracking-[0.25em]` 等宽字体；正文 16-17px，行高 1.7 |
| 动效原则 | 只做三类：入场 reveal（IntersectionObserver + CSS transition）、悬停微反馈（下划线滑入、边框渐变、opacity）、少量持续氛围（marquee、脉冲点、轮换词）。全部尊重 `prefers-reduced-motion` |
| 图 | 全部内联 SVG（路径图、范式图、项目流程图），跟随主题变色，无位图依赖 |

## 5. 移动端硬性要求

- mobile-first 编写所有样式；断点 768px / 1200px
- 无视频、无大位图；唯一可能的图片是头像（若提供则 AVIF/WebP + 显式宽高）
- 粘性卡片堆叠、磁性悬停等桌面增强在移动端降级为普通布局
- 触控目标 ≥ 44px；汉堡菜单展开不遮挡关闭按钮
- 验收：Lighthouse 移动端 Performance ≥ 95、Accessibility ≥ 95；4G 模拟下 LCP < 2s
- 横竖屏、iOS Safari 安全区（`env(safe-area-inset-*)`）适配

## 6. 内容红线

- 企业相关内容只使用 siliconize.cn / ocp.deeplumen.io 已公开口径；飞书内部文档中的客户名、未公开指标一律不引用
- 论文页保持学术表述；DOI/正式链接出来前显示 `Accepted, in press`
- 所有事实性数字（stars、日期、身份）与简历一致

## 7. 项目结构

```
/
├── astro.config.mjs
├── src/
│   ├── pages/
│   │   ├── index.astro          # 中文单页
│   │   └── en/index.astro       # 英文单页
│   ├── layouts/Base.astro       # <head>、主题脚本、导航、页脚
│   ├── components/              # Hero / Trajectory / Research /
│   │                            # Projects / OpenSource / Contact / Nav
│   ├── i18n/{zh,en}.ts          # 全部文案
│   └── styles/global.css        # 变量、keyframes、reveal 类
├── public/                      # favicon、og-image
└── .github/workflows/deploy.yml # Actions → GitHub Pages
```

## 8. 验收清单

1. `npm run build` 产出纯静态文件，本地 preview 与线上一致
2. 中/英两个路由内容完整对应，切换不丢失滚动区块
3. 暗/亮主题切换无闪烁（首帧内联脚本读取偏好）
4. Lighthouse 移动端四项 ≥ 95（Performance / Accessibility / Best Practices / SEO）
5. `prefers-reduced-motion` 下所有持续动画停止
6. 375px 宽度（iPhone SE）到 2560px 宽度布局不破
7. OG 标签 + og-image，分享到微信/Twitter 有正确预览
