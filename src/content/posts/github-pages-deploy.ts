import type { BlogPost } from "../../types/post";

export const githubPagesDeploy: BlogPost = {
  id: "github-pages-deploy",
  slug: "github-pages-deploy",
  title: "把 Vite 博客部署到 GitHub Pages",
  date: "2026-05-24",
  description: "整理 Vite 项目部署到 GitHub Pages 时需要注意的 base 配置和自动化流程。",
  tags: ["GitHub Pages", "Vite", "Deploy"],
  content: `
# 把 Vite 博客部署到 GitHub Pages

GitHub Pages 很适合托管纯前端静态站点。对于 Vite 项目，最关键的是配置正确的 base。

## base 配置

如果仓库名是 my-blog，访问地址通常是 https://kulusima2001.github.io/my-blog/，对应的 base 应该写成 /my-blog/。

如果仓库名发生变化，需要同步修改 vite.config.ts。绑定自定义域名时，base 通常改成 /。

## 自动部署

项目可以通过 GitHub Actions 在 main 分支 push 后自动安装依赖、构建项目，并把 dist 目录发布到 GitHub Pages。

## 检查清单

- 确认仓库 Settings 中开启 Pages
- 确认部署来源选择 GitHub Actions
- 确认 vite.config.ts 中的 base 与仓库名一致
  `
};
