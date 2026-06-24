# MomoBlog

MomoBlog 是一个基于 React、TypeScript、React Router 和 Vite 的静态站点。当前站点围绕 Camellia / Lily 的故事内容组织，包含首页、故事线、文章详情、新闻列表、成绩表详情和 About 页面。

## 技术栈

- React 19
- React Router DOM 7
- TypeScript 5
- Vite 6

站点在 `vite.config.ts` 中配置了部署基路径：

```ts
base: "/momoblog/"
```

因此代码中的静态资源路径也使用 `/momoblog/...` 前缀，例如：

```text
/momoblog/images/project-01/project-01-01.jpg
```

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` 会先执行 TypeScript 构建检查，再由 Vite 输出静态文件到 `dist/`。

## 页面与路由

| 路由 | 页面 | 说明 |
| --- | --- | --- |
| `/` | `Home` | 首页，包含角色介绍、推荐文章和照片拼贴 |
| `/story` | `Gallery` | 故事线总览，按 section 展示项目文章，可挂载时间线 |
| `/projects/:slug` | `PostDetail` | 项目文章详情 |
| `/news` | `News` | 新闻列表 |
| `/news/:slug` | `PostDetail` | 新闻详情 |
| `/scores` | `Scores` | 成绩表列表 |
| `/scores/:id` | `ScoreSheetPage` | 成绩表详情 |
| `/about` | `About` | About 页面 |

全站布局在 `src/components/Layout.tsx`，路由入口在 `src/App.tsx`。

## 目录结构

```text
src/
  components/          通用组件：布局、文章卡片、标签、时间线、成绩表
  content/
    projects/          故事/项目文章数据
    news/              新闻数据
    scores/            成绩表数据
    timelines/         时间线数据
  pages/               路由页面
  styles/              全局样式和页面样式
  types/               内容数据类型
public/
  images/              站点图片资源
dist/                  构建产物，不作为源码维护入口
```

## 维护故事文章

故事文章定义在 `src/content/projects/`。每篇文章导出一个 `PortfolioItem`，并在 `src/content/projects/index.ts` 中加入 `projects` 数组后才会进入详情页查找范围。

基础结构：

```ts
import type { PortfolioItem } from "../../types/project";

export const projectExample: PortfolioItem = {
  id: "project-example",
  slug: "project-example",
  title: "Title",
  wordCount: "1.2k words",
  description: "Short description",
  thumbnailImage: "/momoblog/images/project-example/cover.jpg",
  hasAdultContent: false,
  tags: ["Tag"],
  blocks: [
    { type: "text", text: "Short paragraph" },
    {
      type: "image",
      src: "/momoblog/images/project-example/image-01.jpg",
      label: "Image",
      aspectRatio: "standard"
    }
  ]
};
```

文章正文支持四类内容块：

| 类型 | 用途 |
| --- | --- |
| `text` | 普通段落 |
| `markdown` | 从 `.md?raw` 导入长文本 |
| `image` | 单张图片 |
| `imageGroup` | 并排图片组 |

图片比例支持：

```text
wide
standard
portrait
```

如果文章包含成人内容，将 `hasAdultContent` 设置为 `true`，详情页会先显示确认弹窗。

## 维护新闻

新闻定义在 `src/content/news/`，类型为 `NewsItem`。新增新闻后，需要在 `src/content/news/index.ts` 的 `news` 数组中导出。

```ts
export const newsExample: NewsItem = {
  id: "news-example",
  slug: "news-example",
  title: "News title",
  date: "2026-06-24",
  description: "News description",
  hasAdultContent: false,
  blocks: [
    { type: "text", text: "News content" }
  ]
};
```

新闻详情和故事文章共用 `PostDetail`，所以 `blocks` 的写法与项目文章一致。

## 维护成绩表

成绩表数据在 `src/content/scores/`，类型定义在 `src/content/scores/types.ts`。新增成绩表后，在 `src/content/scores/index.ts` 的 `scoreSheets` 对象中注册：

```ts
export const scoreSheets: Record<string, ScoreSheetData> = {
  [SomeScoreSheet.id]: SomeScoreSheet
};
```

成绩表页面会自动从 `scoreSheetList = Object.values(scoreSheets)` 生成列表。

可参考：

```text
src/content/scores/template.ts
src/content/scores/han-li-2018-og-free-skating.ts
```

## 维护时间线

时间线数据在 `src/content/timelines/`。目前 `Gallery` 页面会在指定 section 中挂载 `timeline01`：

```ts
{
  timeline: timeline01,
  items: [project03]
}
```

如需新增故事线分区，修改 `src/pages/Gallery.tsx` 中的 `gallerySections`。

## 静态资源

图片统一放在 `public/images/`。Vite 会把 `public` 下的资源作为站点根路径资源发布；由于本项目配置了 `/momoblog/` base，源码中引用图片时保持：

```text
/momoblog/images/...
```

当前主要图片目录：

```text
public/images/gallery/
public/images/news-01/
public/images/news-03/
public/images/project-01/
public/images/project-02/
public/images/project-03/
public/images/project-05/
public/images/project-06/
public/images/timeline-01/
```

## 样式入口

- `src/styles/global.css`：全站样式、文章详情、故事页、通用布局
- `src/styles/home-collage.css`：首页照片拼贴
- `src/styles/ScoreSheetTemplate.css`：成绩表版式

文章图片尺寸变量在 `global.css` 中维护：

```css
--project-image-wide-height
--project-image-standard-height
--project-image-portrait-width
```

移动端尺寸在 `@media (max-width: 720px)` 内另行定义。
