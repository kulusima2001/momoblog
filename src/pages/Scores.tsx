import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scoreSheetList } from "../content/scores";
import { createForwardState, createReturnNavigation } from "../utils/navigationState";

export function Scores() {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    const returnNavigation = createReturnNavigation(location.state, "/story");
    navigate(returnNavigation.path, { state: returnNavigation.state });
  };

  const openScoreSheet = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    event.preventDefault();
    navigate(`/scores/${id}`, {
      state: createForwardState(location.state, location.pathname)
    });
  };

  return (
    <section className="content-page">
      <p className="eyebrow">你说你强，怎么证明？</p>
      <h1>分数查询</h1>
      <div className="score-link-list">
        {scoreSheetList.map((scoreSheet) => (
          <Link
            key={scoreSheet.id}
            to={`/scores/${scoreSheet.id}`}
            className="score-link-item"
            state={createForwardState(location.state, location.pathname)}
            onClick={(event) => openScoreSheet(event, scoreSheet.id)}
          >
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
