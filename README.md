# kulusima2001 的个人博客

一个基于 React、Vite、TypeScript 和 React Router 的纯前端个人博客。项目只负责展示文章内容，不包含登录、权限、后端接口、数据库、评论系统、管理后台或在线编辑能力。

GitHub 用户名：`kulusima2001`

默认仓库名：`my-blog`

默认部署地址示例：`https://kulusima2001.github.io/my-blog/`

如果你的仓库名不是 `my-blog`，需要把本文档和配置里的 `my-blog` 全部换成真实仓库名，并修改 `vite.config.ts` 里的 `base`。

## 安装依赖

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

运行后按终端提示打开本地地址。

## 构建项目

```bash
npm run build
```

## 本地预览构建产物

```bash
npm run preview
```

## 文章目录

所有文章放在：

```text
src/content/posts/
```

每篇文章是一个独立的 TypeScript 文件，并导出一个 `BlogPost` 对象。文章类型定义在：

```text
src/types/post.ts
```

## 新增文章

例如新增一篇文章：

1. 新建文件：

```text
src/content/posts/my-new-post.ts
```

2. 写入：

```ts
import type { BlogPost } from "../../types/post";

export const myNewPost: BlogPost = {
  id: "my-new-post",
  slug: "my-new-post",
  title: "我的新文章",
  date: "2026-05-25",
  description: "这是一篇新文章。",
  tags: ["Blog"],
  content: `
# 我的新文章

这里是正文。
  `
};
```

3. 在 `src/content/posts/index.ts` 中导入：

```ts
import { myNewPost } from "./my-new-post";
```

4. 加入 `posts` 数组：

```ts
export const posts = [
  myNewPost,
  reactCleanBlog,
  githubPagesDeploy,
  personalKnowledgeBase,
  web3dShowcase
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
```

新增后，文章会自动按日期倒序显示在首页。文章详情页地址为：

```text
/posts/my-new-post
```

## 修改文章

找到对应文章文件，例如：

```text
src/content/posts/react-clean-blog.ts
```

直接修改 `title`、`date`、`description`、`tags` 或 `content` 字段即可。

如果修改了 `slug`，文章访问地址也会变化。例如 `slug` 改为 `hello-blog` 后，文章地址会变成：

```text
/posts/hello-blog
```

## 删除文章

1. 删除对应文章文件，例如：

```text
src/content/posts/my-new-post.ts
```

2. 打开：

```text
src/content/posts/index.ts
```

3. 删除对应的 `import`。

4. 从 `posts` 数组中移除对应文章对象。

## 修改 GitHub Pages 的 base

当前 `vite.config.ts` 默认配置为：

```ts
base: "/my-blog/"
```

如果仓库名不是 `my-blog`，例如仓库名是 `blog-site`，需要改成：

```ts
base: "/blog-site/"
```

如果绑定了自定义域名，需要改成：

```ts
base: "/"
```

## 部署到 GitHub Pages

项目已经包含 GitHub Actions 自动部署文件：

```text
.github/workflows/deploy.yml
```

部署步骤：

1. 把项目推送到 GitHub 仓库。
2. 确认仓库默认分支是 `main`。
3. 进入 GitHub 仓库的 `Settings`。
4. 进入 `Pages`。
5. 将 `Build and deployment` 的 Source 选择为 `GitHub Actions`。
6. 向 `main` 分支 push 代码。
7. GitHub Actions 会自动运行 `npm ci`、`npm run build`，并发布 `dist` 目录。

默认访问地址：

```text
https://kulusima2001.github.io/my-blog/
```

如果仓库名不是 `my-blog`，请把 `my-blog` 全部替换为真实仓库名，并同步修改 `vite.config.ts` 的 `base`。

## 绑定自定义域名

如果绑定自定义域名，需要把 `vite.config.ts` 中的：

```ts
base: "/my-blog/"
```

改成：

```ts
base: "/"
```

然后按 GitHub Pages 的自定义域名配置流程设置域名和 DNS。
