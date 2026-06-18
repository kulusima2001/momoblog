import { Link, useNavigate } from "react-router-dom";
import { scoreSheetList } from "../content/scores";

export function Scores() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/story");
  };

  return (
    <section className="content-page">
      <p className="eyebrow">Scores</p>
      <h1>分数查询</h1>
      <div className="score-link-list">
        {scoreSheetList.map((scoreSheet) => (
          <Link key={scoreSheet.id} to={`/scores/${scoreSheet.id}`} className="score-link-item">
            <span>{scoreSheet.title}</span>
            <small>
              {scoreSheet.eventYear} {scoreSheet.eventName} / {scoreSheet.programType} /{" "}
              {scoreSheet.skater.name}
            </small>
          </Link>
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
