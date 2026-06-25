import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ScoreSheet } from "../components/ScoreSheet";
import { scoreSheets } from "../content/scores";
import { createReturnNavigation } from "../utils/navigationState";

export function ScoreSheetPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const scoreSheet = id ? scoreSheets[id] : undefined;

  const goBack = () => {
    const returnNavigation = createReturnNavigation(location.state, "/scores");
    navigate(returnNavigation.path, { state: returnNavigation.state });
  };

  if (!scoreSheet) {
    return (
      <section className="empty-state">
        <p className="eyebrow">Score Sheet</p>
        <h1>Score sheet not found</h1>
        <p>No score sheet exists for this id.</p>
        <Link to="/" className="text-button return-button">
          Back home
        </Link>
      </section>
    );
  }

  return (
    <>
      <ScoreSheet scoreSheet={scoreSheet} />
      <div className="score-page-actions">
        <button type="button" className="score-back-button" onClick={goBack}>
          返回
        </button>
      </div>
    </>
  );
}
