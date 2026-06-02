import { PostCard } from "../components/PostCard";
import { projects } from "../content/projects";

export function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <p className="eyebrow">[Portfolio label]</p>
        <h1>[Name placeholder]</h1>
        <p className="hero-description">[Intro placeholder]</p>
      </div>

      <div className="section-heading">
        <h2>[Section title placeholder]</h2>
        <span>{projects.length} [Count placeholder]</span>
      </div>

      <div className="post-list">
        {projects.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
