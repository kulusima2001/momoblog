import { Link, useLocation } from "react-router-dom";
import type { PortfolioItem } from "../types/project";
import { TagList } from "./TagList";

type PostCardProps = {
  post: PortfolioItem;
  imageClassName?: string;
  linkClassName?: string;
  titleLevel?: 2 | 3;
};

export function PostCard({
  post,
  imageClassName = "project-thumb",
  linkClassName = "post-card-link",
  titleLevel = 2
}: PostCardProps) {
  const TitleTag = `h${titleLevel}` as const;
  const location = useLocation();

  return (
    <article className="post-card">
      <Link
        to={`/projects/${post.slug}`}
        className={linkClassName}
        state={{ returnTo: location.pathname }}
      >
        <div className={imageClassName}>
          {post.thumbnailImage ? (
            <img src={post.thumbnailImage} alt="" />
          ) : (
            <span>[Image placeholder]</span>
          )}
        </div>
        <div className="post-card-title-row">
          <TitleTag>{post.title}</TitleTag>
          <span>{post.wordCount}</span>
        </div>
        <p>{post.description}</p>
        <TagList tags={post.tags} />
      </Link>
    </article>
  );
}
