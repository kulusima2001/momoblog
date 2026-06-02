import { Link } from "react-router-dom";
import type { PortfolioItem } from "../types/project";
import { TagList } from "./TagList";

type PostCardProps = {
  post: PortfolioItem;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <Link to={`/projects/${post.slug}`} className="post-card-link">
        <div className="project-thumb">
          {post.thumbnailImage ? (
            <img src={post.thumbnailImage} alt="" />
          ) : (
            <span>[Image placeholder]</span>
          )}
        </div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <TagList tags={post.tags} />
      </Link>
    </article>
  );
}
