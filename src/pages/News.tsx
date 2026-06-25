import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { news } from "../content/news";
import { createForwardState, createReturnNavigation } from "../utils/navigationState";

export function News() {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    const returnNavigation = createReturnNavigation(location.state, "/story");
    navigate(returnNavigation.path, { state: returnNavigation.state });
  };

  const openNews = (event: MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    event.preventDefault();
    navigate(`/news/${slug}`, {
      state: createForwardState(location.state, location.pathname)
    });
  };

  return (
    <section className="content-page news-page">
      <p className="eyebrow">认真你就输了！</p>
      <h1>三流小报</h1>

      <div className="news-list">
        {news.map((item) => (
          <article key={item.id} className="news-list-item">
            <Link
              to={`/news/${item.slug}`}
              state={createForwardState(location.state, location.pathname)}
              onClick={(event) => openNews(event, item.slug)}
            >
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
