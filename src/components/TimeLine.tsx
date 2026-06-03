export type TimelineEntry = {
  id?: string;
  date: string;
  title: string;
  description?: string;
};

export type TimelineData = {
  title?: string;
  description?: string;
  entries: TimelineEntry[];
};

type TimeLineProps = {
  timeline: TimelineData;
};

export function TimeLine({ timeline }: TimeLineProps) {
  return (
    <aside className="timeline" aria-label={timeline.title ?? "Timeline"}>
      {(timeline.title || timeline.description) && (
        <div className="timeline-header">
          {timeline.title ? <h3>{timeline.title}</h3> : null}
          {timeline.description ? <p>{timeline.description}</p> : null}
        </div>
      )}

      <ol className="timeline-list">
        {timeline.entries.map((entry, index) => (
          <li key={`timeline-entry-${index}`} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-copy">
              <time>{entry.date}</time>
              <h4>{entry.title}</h4>
                {/*{entry.description ? <p>{entry.description}</p> : null}*/}
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
