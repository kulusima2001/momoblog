import { PostCard } from "../components/PostCard";
import { projects } from "../content/projects";

export function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <p className="eyebrow">All about Camellia and Lily</p>
        <h1>有关于黎涵和李理的一切</h1>
        <p className="hero-description">一句话速通本站：有关于两位花样滑冰选手的一切。</p>
      </div>

      <div className="section-heading">
        <h2>Gallery</h2>
        <span>{projects.length} 篇</span>
      </div>

      <div className="post-list">
        {projects.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
