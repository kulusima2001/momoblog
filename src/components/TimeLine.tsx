import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export type TimelineEntry = {
  id?: string;
  date: string;
  title: string;
  description?: string;
};

export type TimelineData = {
  title?: string;
  description?: string;
  thumbImage?: string;
  entries: TimelineEntry[];
};

type TimeLineProps = {
  timeline: TimelineData;
};

export function TimeLine({ timeline }: TimeLineProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [scrollState, setScrollState] = useState({
    canScroll: false,
    thumbCenter: 50
  });

  const updateScrollState = useCallback(() => {
    const list = listRef.current;

    if (!list) {
      return;
    }

    const maxScrollLeft = list.scrollWidth - list.clientWidth;
    const canScroll = maxScrollLeft > 1;
    const visibleRatio = canScroll ? list.clientWidth / list.scrollWidth : 1;
    const thumbWidth = canScroll ? Math.max(visibleRatio * 100, 12) : 100;
    const scrollRatio = canScroll ? list.scrollLeft / maxScrollLeft : 0;
    const thumbLeft = scrollRatio * (100 - thumbWidth);
    const thumbCenter = thumbLeft + thumbWidth / 2;

    setScrollState({
      canScroll,
      thumbCenter
    });
  }, []);

  useEffect(() => {
    const list = listRef.current;

    if (!list) {
      return;
    }

    updateScrollState();
    list.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(list);

    return () => {
      list.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState, timeline.entries.length]);

  const scrollbarStyle = {
    "--timeline-thumb-center": `${scrollState.thumbCenter}%`
  } as CSSProperties;

  return (
    <aside className="timeline" aria-label={timeline.title ?? "Timeline"}>
      {(timeline.title || timeline.description) && (
        <div className="timeline-header">
            {/*{timeline.title ? <h3>{timeline.title}</h3> : null}*/}
          {timeline.description ? <p>{timeline.description}</p> : null}
        </div>
      )}

      <div
        className={`timeline-scroll-area${scrollState.canScroll ? " is-scrollable" : ""}`}
        style={scrollbarStyle}
      >
        <div className="timeline-track">
          <ol className="timeline-list" ref={listRef}>
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

          {timeline.thumbImage ? (
            <div className="timeline-scrollbar-thumb-anchor" aria-hidden="true">
              <img
                className="timeline-scrollbar-badge"
                src={timeline.thumbImage}
                alt=""
                draggable="false"
              />
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
