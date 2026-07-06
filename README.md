# 陈震烨 / Zhenye Chen — 个人主页

单页滚动个人主页，中英双语，托管于 GitHub Pages。

- 线上地址：https://yuanmao1.github.io （中文） / https://yuanmao1.github.io/en/ （英文）
- 技术栈：[Astro 5](https://astro.build) + Tailwind CSS 4，纯静态输出，动效为原生 CSS + IntersectionObserver
- 设计文档：`docs/superpowers/specs/2026-07-06-personal-homepage-design.md`

## 本地开发

```bash
npm install
npm run dev       # 开发服务器 http://localhost:4321
npm run build     # 构建到 dist/
npm run preview   # 预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到 GitHub Pages。

首次部署前需要：

1. 在 GitHub 创建仓库 `yuanmao1/yuanmao1.github.io`
2. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
3. `git push origin main`

## 内容维护

全部文案集中在 `src/i18n/zh.ts` 与 `src/i18n/en.ts`，两个文件结构一致；改文案不需要动组件。

- 论文正式 DOI 出来后：更新 `research.doiNote` 并在 `Research.astro` 中把占位文本换成链接
- 新项目：在 `projects.items` 数组追加一项即可
