import { Link } from "react-router-dom";
import type { BlogPost } from "../types/post";
import { TagList } from "./TagList";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <Link to={`/posts/${post.slug}`} className="post-card-link">
        <div className="post-card-meta">{post.date}</div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <TagList tags={post.tags} />
      </Link>
    </article>
  );
}
