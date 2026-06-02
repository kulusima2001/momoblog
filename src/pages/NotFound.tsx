import { Link } from "react-router-dom";

export function NotFound() {
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
