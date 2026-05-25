import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 默认假设仓库名为 my-blog，所以 base 写成 /my-blog/。
  // 如果仓库名不是 my-blog，需要把 base 改成 /真实仓库名/。
  // 如果绑定自定义域名，则 base 改成 /。
  base: "/momoblog/"
});
