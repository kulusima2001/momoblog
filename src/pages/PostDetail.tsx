import { Link, useParams } from "react-router-dom";
import { TagList } from "../components/TagList";
import { posts } from "../content/posts";

function renderContent(content: string) {
  return content
    .trim()
    .split("\n")
    .map((line, index) => {
      const text = line.trim();

      if (!text) {
        return null;
      }

      if (text.startsWith("# ")) {
        return <h2 key={index}>{text.replace(/^#\s+/, "")}</h2>;
      }

      if (text.startsWith("## ")) {
        return <h3 key={index}>{text.replace(/^##\s+/, "")}</h3>;
      }

      if (text.startsWith("- ")) {
        return <p key={index} className="article-list-item">{text.replace(/^-\s+/, "")}</p>;
      }

      return <p key={index}>{text}</p>;
    });
}

export function PostDetail() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="empty-state">
        <p className="eyebrow">404</p>
        <h1>文章不存在</h1>
        <p>这篇文章可能还没有创建，或者 slug 已经被修改。</p>
        <Link to="/" className="text-button">
          返回首页
        </Link>
      </section>
    );
  }

  return (
    <article className="article-page">
      <header className="article-header">
        <p className="article-date">{post.date}</p>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <TagList tags={post.tags} />
      </header>

      <div className="article-content">{renderContent(post.content)}</div>

      <footer className="article-footer">
        <Link to="/" className="text-button">
          返回首页
        </Link>
      </footer>
    </article>
  );
}
