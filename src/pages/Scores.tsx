import { Link } from "react-router-dom";
import { scoreSheetList } from "../content/scores";

export function Scores() {
  return (
    <section className="content-page">
      <p className="eyebrow">Scores</p>
      <h1>Score Sheets</h1>
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
    </section>
  );
}
