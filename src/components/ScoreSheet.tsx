import type { ScoreSheetData } from "../content/scores";
import "../styles/ScoreSheetTemplate.css";

type ScoreSheetProps = {
  scoreSheet: ScoreSheetData;
};

export function ScoreSheet({ scoreSheet }: ScoreSheetProps) {
  const {
    eventName,
    eventYear,
    programType,
    skater,
    totalScore,
    tes,
    pcs,
    deductions,
    judges,
    technicalElements,
    technicalTotals,
    programComponents,
    componentTotal,
    deductionItems,
  } = scoreSheet;

  return (
    <section className="score-page">
      <header className="score-event-title">
        {eventYear} {eventName}
        <span>{programType}</span>
      </header>

      <div className="score-sheet">
        <table className="score-protocol-table">
          <thead>
            <tr className="score-skater-head">
              <th>Rank</th>
              <th>Name</th>
              <th>Nation</th>
              <th>
                Starting
                <br />
                Number
              </th>
              <th>
                Total
                <br />
                Segment
                <br />
                Score
              </th>
              <th>
                Total
                <br />
                Element
                <br />
                Score
              </th>
              <th>
                Total Program
                <br />
                Component
                <br />
                Score (factored)
              </th>
              <th>
                Total
                <br />
                Deductions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="score-skater-row">
              <td>{skater.rank}</td>
              <td className="score-left">{skater.name}</td>
              <td>{skater.country}</td>
              <td>{skater.startNumber}</td>
              <td>{totalScore}</td>
              <td>{tes}</td>
              <td>{pcs}</td>
              <td>{deductions}</td>
            </tr>
          </tbody>
        </table>

        <table className="score-protocol-table score-elements-table">
          <colgroup>
            <col className="score-col-number" />
            <col className="score-col-element" />
            <col className="score-col-info" />
            <col className="score-col-base" />
            <col className="score-col-goe" />
            {judges.map((judge) => (
              <col key={`${judge.label}-element-col`} className="score-col-judge" />
            ))}
            <col className="score-col-ref" />
            <col className="score-col-panel" />
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th className="score-left">Executed Elements</th>
              <th>Info</th>
              <th>
                Base
                <br />
                Value
              </th>
              <th>GOE</th>
              {judges.map((judge) => (
                <th key={judge.label}>{judge.label}</th>
              ))}
              <th>Ref.</th>
              <th>
                Scores of
                <br />
                Panel
              </th>
            </tr>
          </thead>
          <tbody>
            {technicalElements.map((element) => (
              <tr key={`${element.number}-${element.executedElement}`}>
                <td>{element.number}</td>
                <td className="score-left">{element.executedElement}</td>
                <td>{element.info}</td>
                <td>{element.baseValue}</td>
                <td>{element.goe}</td>
                {element.judges.map((value, index) => (
                  <td key={`${element.number}-${judges[index]?.label ?? index}`}>{value}</td>
                ))}
                <td>{element.ref}</td>
                <td>{element.panelScore}</td>
              </tr>
            ))}
            <tr className="score-total-row">
              <td />
              <td />
              <td />
              <td>{technicalTotals.baseValue}</td>
              <td colSpan={judges.length + 2} />
              <td>{technicalTotals.panelScore}</td>
            </tr>
          </tbody>
        </table>

        <table className="score-protocol-table score-components-table">
          <colgroup>
            <col className="score-col-number" />
            <col className="score-col-element" />
            <col className="score-col-info" />
            <col className="score-col-base" />
            <col className="score-col-goe" />
            {judges.map((judge) => (
              <col key={`${judge.label}-component-col`} className="score-col-judge" />
            ))}
            <col className="score-col-ref" />
            <col className="score-col-panel" />
          </colgroup>
          <thead>
            <tr>
              <th />
              <th className="score-left">
                Program Components
              </th>
              <th />
              <th />
              <th>Factor</th>
              {judges.map((judge) => (
                <th key={`${judge.label}-component`}>{judge.label}</th>
              ))}
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {programComponents.map((component) => (
              <tr key={component.component}>
                <td />
                <td className="score-left">
                  {component.component}
                </td>
                <td />
                <td />
                <td>{component.factor}</td>
                {component.judges.map((value, index) => (
                  <td key={`${component.component}-${judges[index]?.label ?? index}`}>{value}</td>
                ))}
                <td />
                <td>{component.score}</td>
              </tr>
            ))}
            <tr className="score-total-row">
              <td />
              <td className="score-left" colSpan={judges.length + 5}>
                Judges Total Program Component Score (factored)
              </td>
              <td className="score-summary-value">{componentTotal}</td>
            </tr>
          </tbody>
        </table>

        <table className="score-protocol-table score-deductions-table">
          <tbody>
            <tr>
              <td className="score-left score-deduction-label">Deductions:</td>
              <td className="score-left">
                {deductionItems.map((item) => (
                  <span key={item.label} className="score-deduction-item">
                    {item.label}
                  </span>
                ))}
              </td>
              <td>
                {deductionItems.map((item) => (
                  <span key={`${item.label}-value`} className="score-deduction-item">
                    {item.value}
                  </span>
                ))}
              </td>
              <td>
                {deductionItems.map((item) => (
                  <span key={`${item.label}-count`} className="score-deduction-item">
                    {item.count}
                  </span>
                ))}
              </td>
              <td className="score-summary-value">{deductions}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
