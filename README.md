# Portfolio Placeholder Site

This local project is a React, Vite, TypeScript, and React Router portfolio shell.

## Edit Items

Portfolio items are split into separate files:

```text
src/content/projects/project-01.ts
src/content/projects/project-02.ts
src/content/projects/project-03.ts
src/content/projects/project-04.ts
```

The index file only imports and exports the item list:

```text
src/content/projects/index.ts
```

Each item supports a custom block order:

```ts
{
  title: "[Title placeholder]",
  description: "[Short description placeholder]",
  thumbnailImage: "",
  tags: ["[Tag]"],
  blocks: [
    { type: "text", text: "[Text placeholder]" },
    { type: "markdown", content: projectContent },
    {
      type: "image",
      src: "",
      label: "[Image placeholder]",
      aspectRatio: "wide"
    }
  ]
}
```

Add, remove, or reorder `type: "image"` blocks to control the number and position of images inside each project. For images placed in `public/portfolio/`, use paths like:

```text
/momoblog/portfolio/image-name.jpg
```

Image display modes:

```text
wide: fixed height, image scales proportionally
standard: fixed height, image scales proportionally
portrait: fixed width, image scales proportionally
```

Edit the size values in `src/styles/global.css`:

```css
--project-image-wide-height: 420px;
--project-image-standard-height: 520px;
--project-image-portrait-width: 420px;
```

## Text Options

Use `type: "text"` for short placeholders:

```ts
{ type: "text", text: "[Text placeholder]" }
```

Use Markdown files for long text:

```ts
import projectContent from "./project-01.md?raw";

{
  type: "markdown",
  content: projectContent
}
```

Markdown files can sit next to the project file, for example:

```text
src/content/projects/project-01.ts
src/content/projects/project-01.md
```

## Commands

```bash
npm run dev
npm run build
npm run preview
```
