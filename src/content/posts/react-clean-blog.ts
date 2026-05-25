import type { BlogPost } from "../../types/post";

export const reactCleanBlog: BlogPost = {
  id: "react-clean-blog",
  slug: "react-clean-blog",
  title: "用 React 搭建一个极简博客",
  date: "2026-05-25",
  description: "记录如何用 React、Vite 和 TypeScript 搭建一个轻量博客。",
  tags: ["React", "Vite", "Blog"],
  content: `
# 用 React 搭建一个极简博客

一个个人博客不一定需要复杂的系统。对于内容以展示为主的站点，React、Vite 和 TypeScript 已经足够完成清晰、快速、易维护的第一版。

## 项目边界

这个博客只负责展示内容。文章直接写在代码数据文件中，不接入登录、后端、数据库或管理后台。

## 结构思路

页面负责展示，组件负责复用，文章内容独立放在 src/content/posts 目录中。新增文章时，只需要增加一个 TypeScript 文件，再在索引文件中导入即可。

## 后续可以改进

后续如果文章变多，可以再引入 Markdown 解析、搜索、归档和 RSS。第一版先保持克制，把基础阅读体验做好。
  `
};
