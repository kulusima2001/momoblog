import { useLocation, useNavigate } from "react-router-dom";
import { Diary } from "../components/Diary";
import { diaries } from "../content/diaries";
import { createReturnNavigation } from "../utils/navigationState";
import "../styles/diary.css";

export function CamelliaDiary() {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    const returnNavigation = createReturnNavigation(location.state, "/story");
    navigate(returnNavigation.path, { state: returnNavigation.state });
  };

  return (
    <section className="diary-page">
      <Diary diaries={diaries} />

      <div className="diary-page-actions">
        <button type="button" className="score-back-button" onClick={goBack}>
          返回
        </button>
      </div>
    </section>
  );
}
