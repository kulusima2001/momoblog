import { PostCard } from "../components/PostCard";
import { posts } from "../content/posts";

export function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <p className="eyebrow">Personal Blog</p>
        <h1>kulusima2001 的博客</h1>
        <p className="hero-description">
          记录前端开发、部署实践、知识管理和 Web 体验探索。保持简单，持续整理。
        </p>
      </div>

      <div className="section-heading">
        <h2>最新文章</h2>
        <span>{posts.length} 篇文章</span>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
