import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="empty-state">
      <p className="eyebrow">404</p>
      <h1>页面不存在</h1>
      <p>你访问的页面不存在，或者地址已经发生变化。</p>
      <Link to="/" className="text-button">
        返回首页
      </Link>
    </section>
  );
}
