import type { BlogPost } from "../../types/post";

export const web3dShowcase: BlogPost = {
  id: "web-3d-showcase",
  slug: "web-3d-showcase",
  title: "3D Web 展示的第一步",
  date: "2026-05-22",
  description: "从轻量展示场景出发，思考如何在 Web 中加入克制且有效的 3D 内容。",
  tags: ["3D", "Web", "Showcase"],
  content: `
# 3D Web 展示的第一步

3D 内容可以让作品展示更直观，但也容易带来性能和交互复杂度。第一步应该从明确的展示目标开始。

## 使用场景

适合 3D 的内容包括产品模型、空间展示、作品集亮点和可交互概念演示。它应该帮助用户理解信息，而不是只作为装饰。

## 设计原则

保持加载体积可控，减少不必要的动画，让主要内容仍然清晰可读。移动端尤其需要注意性能和触控体验。

## 技术选择

如果后续需要做 3D 展示，可以考虑 Three.js 或基于它的 React 封装。第一版博客先保留文章展示能力，为未来扩展留下空间。
  `
};
