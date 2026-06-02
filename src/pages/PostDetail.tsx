import { Link, useParams } from "react-router-dom";
import { TagList } from "../components/TagList";
import { projects } from "../content/projects";
import type { ProjectContentBlock } from "../types/project";

function renderMarkdown(content: string, blockIndex: number) {
  return content
    .trim()
    .split("\n")
    .map((line, lineIndex) => {
      const text = line.trim();
      const key = `${blockIndex}-${lineIndex}`;

      if (!text) {
        return null;
      }

      if (text.startsWith("## ")) {
        return <h3 key={key}>{text.replace(/^##\s+/, "")}</h3>;
      }

      if (text.startsWith("# ")) {
        return <h2 key={key}>{text.replace(/^#\s+/, "")}</h2>;
      }

      if (text.startsWith("- ")) {
        return (
          <p key={key} className="article-list-item">
            {text.replace(/^-\s+/, "")}
          </p>
        );
      }

      return <p key={key}>{text}</p>;
    });
}

function renderProjectBlock(block: ProjectContentBlock, index: number) {
  if (block.type === "image") {
    const aspectClass = block.aspectRatio ? `project-image-${block.aspectRatio}` : "project-image-wide";

    return (
      <div key={index} className={`project-image-block ${aspectClass}`}>
        {block.src ? <img src={block.src} alt="" /> : <span>{block.label}</span>}
      </div>
    );
  }

  if (block.type === "markdown") {
    return (
      <div key={index} className="project-markdown-block">
        {renderMarkdown(block.content, index)}
      </div>
    );
  }

  return (
    <p key={index} className="project-text-block">
      {block.text}
    </p>
  );
}

export function PostDetail() {
  const { slug } = useParams();
  const post = projects.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="empty-state">
        <p className="eyebrow">404</p>
        <h1>[Missing page placeholder]</h1>
        <p>[Message placeholder]</p>
        <Link to="/" className="text-button">
          [返回首页]
        </Link>
      </section>
    );
  }

  return (
    <article className="article-page">
      <header className="article-header">
        <p className="eyebrow">[Title]</p>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <TagList tags={post.tags} />
      </header>

      <div className="article-content">
        {post.blocks.map(renderProjectBlock)}
      </div>

      <footer className="article-footer">
        <Link to="/" className="text-button">
          [返回首页]
        </Link>
      </footer>
    </article>
  );
}
