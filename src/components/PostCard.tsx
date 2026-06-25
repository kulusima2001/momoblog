import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { PortfolioItem } from "../types/project";
import { TagList } from "./TagList";
import { createForwardState } from "../utils/navigationState";

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
  const navigate = useNavigate();
  const href = `/projects/${post.slug}`;

  const openPost = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    event.preventDefault();
    navigate(href, {
      state: createForwardState(location.state, location.pathname)
    });
  };

  return (
    <article className="post-card">
      <Link
        to={href}
        className={linkClassName}
        state={createForwardState(location.state, location.pathname)}
        onClick={openPost}
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
