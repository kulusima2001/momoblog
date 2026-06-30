import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { news } from "../content/news";
import { TagList } from "../components/TagList";
import { projects } from "../content/projects";
import type { NewsItem } from "../types/news";
import type { ProjectContentBlock } from "../types/project";
import { createReturnNavigation } from "../utils/navigationState";

const posts = [...projects, ...news];

function isNewsPost(post: (typeof posts)[number]): post is NewsItem {
  return "date" in post;
}

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
    return renderProjectImage(block, index);
  }

  if (block.type === "imageGroup") {
    return (
      <div key={index} className="project-image-row">
        {block.images.map((image, imageIndex) => renderProjectImage(image, imageIndex))}
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

function renderProjectImage(block: Extract<ProjectContentBlock, { type: "image" }>, key: number) {
  const aspectClass = block.aspectRatio ? `project-image-${block.aspectRatio}` : "project-image-wide";

  return (
    <div key={key} className={`project-image-block ${aspectClass}`}>
      {block.src ? <img src={block.src} alt="" /> : <span>{block.label}</span>}
    </div>
  );
}

export function PostDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const fallbackReturnTo = location.pathname.startsWith("/news/") ? "/news" : "/";
  const returnNavigation = createReturnNavigation(location.state, fallbackReturnTo);
  const post = posts.find((item) => item.slug === slug);
  const [isAdultContentConfirmed, setIsAdultContentConfirmed] = useState(false);

  useEffect(() => {
    setIsAdultContentConfirmed(false);
  }, [slug]);

  if (!post) {
    return (
      <section className="empty-state">
        <p className="eyebrow">404</p>
        <h1>[Missing page placeholder]</h1>
        <p>[Message placeholder]</p>
        <Link
          to={returnNavigation.path}
          state={returnNavigation.state}
          className="text-button return-button"
        >
          [返回首页]
        </Link>
      </section>
    );
  }

  const isNews = isNewsPost(post);
  const detailReturn = createReturnNavigation(location.state, isNews ? "/news" : "/");
  const goToDetailReturn = () => {
    navigate(detailReturn.path, { replace: true, state: detailReturn.state });
  };

  const adultContentNotice = post.adultContentNotice ?? {};
  if (post.hasAdultContent && !isAdultContentConfirmed) {
  const adultContentNotice = post.adultContentNotice ?? {};

  return (
    <div className="adult-content-gate" role="dialog" aria-modal="true" aria-labelledby="adult-content-title">
      <div className="adult-content-dialog">
        <p className="eyebrow">{adultContentNotice.eyebrow ?? "Content notice"}</p>
        <h1 id="adult-content-title">{adultContentNotice.title ?? "阅读预警"}</h1>
        <p>
          {adultContentNotice.message ??
            "这篇文章包含成人内容，请确认您已满 18 岁，并愿意继续阅读。"}
        </p>
        <div className="adult-content-actions">
          <button
            type="button"
            className="text-button"
            onClick={() => setIsAdultContentConfirmed(true)}
          >
            {adultContentNotice.confirmText ?? "确认进入"}
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={goToDetailReturn}
          >
            {adultContentNotice.cancelText ?? "取消"}
          </button>
        </div>
      </div>
    </div>
  );
}

  return (
    <article className={`article-page${isNews ? " news-detail-page" : ""}`}>
      <header className="article-header">
        <p className="eyebrow">Title</p>
        <h1>{post.title}</h1>
        {isNews ? <time dateTime={post.date}>{post.date}</time> : null}
        <p>{post.description}</p>
        {isNews ? null : <TagList tags={post.tags} />}
      </header>

      <div className="article-content">
        {post.blocks.map(renderProjectBlock)}
      </div>

      <footer className="article-footer">
        <Link to={detailReturn.path} state={detailReturn.state} className="text-button return-button">
          返回
        </Link>
      </footer>
    </article>
  );
}
