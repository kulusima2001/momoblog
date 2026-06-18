import { Link, useNavigate } from "react-router-dom";
import { news } from "../content/news";

export function News() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/story");
  };

  return (
    <section className="content-page news-page">
      <p className="eyebrow">认真你就输了！</p>
      <h1>三流小报</h1>

      <div className="news-list">
        {news.map((item) => (
          <article key={item.id} className="news-list-item">
            <Link to={`/news/${item.slug}`} state={{ returnTo: "/news" }}>
              <time dateTime={item.date}>{item.date}</time>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          </article>
        ))}
      </div>

      <div className="score-page-actions score-list-actions">
        <button type="button" className="score-back-button" onClick={goBack}>
          返回
        </button>
      </div>
    </section>
  );
}
