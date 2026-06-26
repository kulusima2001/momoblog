import { useEffect, useMemo, useState } from "react";
import type { DiaryContentBlock, DiaryEntry } from "../content/diaries/template";

type DiaryProps = {
  diaries: DiaryEntry[];
};

type DiaryPageModel = {
  id: string;
  diary: DiaryEntry;
  blocks: DiaryContentBlock[];
  pageInEntry: number;
  totalEntryPages: number;
};

const DESKTOP_PAGE_CAPACITY = 520;
const MOBILE_PAGE_CAPACITY = 520;
const FIRST_PAGE_HEADER_WEIGHT = 132;
const CONTINUED_HEADER_WEIGHT = 0;
const IMAGE_CAPTION_WEIGHT = 28;

export function Diary({ diaries }: DiaryProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const diaryPages = useMemo(() => buildDiaryPages(diaries, isMobile), [diaries, isMobile]);
  const totalPages = diaryPages.length;
  const pageStep = isMobile ? 1 : 2;
  const visiblePages = diaryPages.slice(currentIndex, currentIndex + pageStep);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");

    const syncViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex((index) => {
      const alignedIndex = isMobile ? index : index - (index % 2);
      return Math.min(alignedIndex, Math.max(totalPages - 1, 0));
    });
  }, [isMobile, totalPages]);

  const goToPrevious = () => {
    setCurrentIndex((index) => Math.max(index - pageStep, 0));
  };

  const goToNext = () => {
    setCurrentIndex((index) => Math.min(index + pageStep, Math.max(totalPages - 1, 0)));
  };

  if (totalPages === 0) {
    return (
      <section className="diary-empty" aria-label="Diary empty state">
        <p>日记内容占位。</p>
      </section>
    );
  }

  return (
    <section className="diary-book" aria-label="Camellia diary">
      <div className="diary-spread">
        {visiblePages.map((page, index) => (
          <DiaryPage
            key={page.id}
            page={page}
            pageNumber={currentIndex + index + 1}
            side={index === 0 ? "left" : "right"}
          />
        ))}

        {!isMobile && visiblePages.length === 1 ? <div className="diary-paper diary-paper-blank" aria-hidden="true" /> : null}
      </div>

      <nav className="diary-controls" aria-label="Diary pagination">
        <button type="button" className="diary-page-button" onClick={goToPrevious} disabled={currentIndex === 0}>
          上一页
        </button>
        <button
          type="button"
          className="diary-page-button"
          onClick={goToNext}
          disabled={currentIndex + pageStep >= totalPages}
        >
          下一页
        </button>
      </nav>
    </section>
  );
}

type DiaryPageProps = {
  page: DiaryPageModel;
  pageNumber: number;
  side: "left" | "right";
};

function DiaryPage({ page, pageNumber, side }: DiaryPageProps) {
  const { diary } = page;
  const displayPageNumber = String(pageNumber).padStart(2, "0");
  const isFirstEntryPage = page.pageInEntry === 1;

  return (
    <article className={`diary-paper diary-paper-${side}`}>
      <span className="diary-page-number" aria-label={`Page ${pageNumber}`}>
        {displayPageNumber}
      </span>

      {isFirstEntryPage ? (
        <header className="diary-entry-header">
          <div className="diary-entry-meta">
            <span>{diary.date}</span>
            {diary.weather ? <span>{diary.weather}</span> : null}
            {diary.location ? <span>{diary.location}</span> : null}
          </div>
          <h2>{diary.title}</h2>
        </header>
      ) : null}

      <div className="diary-entry-content">
        {page.blocks.map((block, index) => (
          <DiaryBlock key={`${page.id}-${index}`} block={block} />
        ))}
      </div>
    </article>
  );
}

function DiaryBlock({ block }: { block: DiaryContentBlock }) {
  if (block.type === "image") {
    const variant = block.variant ?? "standard";
    const align = variant === "wide" ? "center" : block.align ?? "left";
    const wrap = block.wrap ?? variant !== "wide";

    const photo = (
      <figure className={`diary-photo diary-photo-${variant} diary-photo-${align}${wrap ? " diary-photo-wrap" : ""}`}>
        {block.src ? (
          <img src={block.src} alt={block.alt ?? ""} />
        ) : (
          <div className="diary-photo-placeholder" aria-hidden="true">
            <span>image placeholder</span>
          </div>
        )}
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    );

    if (variant !== "wide" && block.sideText) {
      return (
        <section className={`diary-image-note diary-image-note-${align}`}>
          {photo}
          <p>{block.sideText}</p>
        </section>
      );
    }

    return photo;
  }

  return <p>{block.text}</p>;
}

function buildDiaryPages(diaries: DiaryEntry[], isMobile: boolean): DiaryPageModel[] {
  return diaries.flatMap((diary) => paginateDiary(diary, isMobile));
}

function paginateDiary(diary: DiaryEntry, isMobile: boolean): DiaryPageModel[] {
  const blocks = normalizeDiaryBlocks(diary, isMobile);
  const pageCapacity = isMobile ? MOBILE_PAGE_CAPACITY : DESKTOP_PAGE_CAPACITY;
  const pages: DiaryContentBlock[][] = [];
  let currentBlocks: DiaryContentBlock[] = [];
  let currentWeight = FIRST_PAGE_HEADER_WEIGHT;

  blocks.forEach((block) => {
    const blockWeight = getBlockWeight(block, isMobile);
    const headerWeight = pages.length === 0 ? FIRST_PAGE_HEADER_WEIGHT : CONTINUED_HEADER_WEIGHT;
    const emptyPageWeight = headerWeight + blockWeight;

    if (currentBlocks.length > 0 && currentWeight + blockWeight > pageCapacity) {
      pages.push(currentBlocks);
      currentBlocks = [];
      currentWeight = CONTINUED_HEADER_WEIGHT;
    }

    if (currentBlocks.length === 0 && emptyPageWeight > pageCapacity && block.type === "paragraph") {
      splitParagraphBlock(block, isMobile).forEach((splitBlock) => {
        const splitWeight = getBlockWeight(splitBlock, isMobile);

        if (currentBlocks.length > 0 && currentWeight + splitWeight > pageCapacity) {
          pages.push(currentBlocks);
          currentBlocks = [];
          currentWeight = CONTINUED_HEADER_WEIGHT;
        }

        currentBlocks.push(splitBlock);
        currentWeight += splitWeight;
      });
      return;
    }

    currentBlocks.push(block);
    currentWeight += blockWeight;
  });

  if (currentBlocks.length > 0 || pages.length === 0) {
    pages.push(currentBlocks);
  }

  return pages.map((pageBlocks, index) => ({
    id: `${diary.id}-page-${index + 1}`,
    diary,
    blocks: pageBlocks,
    pageInEntry: index + 1,
    totalEntryPages: pages.length
  }));
}

function normalizeDiaryBlocks(diary: DiaryEntry, isMobile: boolean): DiaryContentBlock[] {
  if (diary.blocks?.length) {
    return diary.blocks.flatMap((block) => (block.type === "paragraph" ? splitParagraphBlock(block, isMobile) : block));
  }

  const contentBlocks = (diary.content ?? []).flatMap((text) => splitParagraphBlock({ type: "paragraph", text }, isMobile));

  if (!diary.image) {
    return contentBlocks;
  }

  const insertIndex = Math.min(1, contentBlocks.length);

  return [
    ...contentBlocks.slice(0, insertIndex),
    {
      type: "image",
      src: diary.image,
      alt: diary.title,
      variant: "standard",
      align: "right"
    },
    ...contentBlocks.slice(insertIndex)
  ];
}

function splitParagraphBlock(block: Extract<DiaryContentBlock, { type: "paragraph" }>, isMobile: boolean): DiaryContentBlock[] {
  const maxLength = isMobile ? 95 : 125;

  if (block.text.length <= maxLength) {
    return [block];
  }

  const chunks: DiaryContentBlock[] = [];
  let remainingText = block.text;

  while (remainingText.length > maxLength) {
    let breakIndex = remainingText.lastIndexOf("。", maxLength);

    if (breakIndex < maxLength * 0.45) {
      breakIndex = remainingText.lastIndexOf("，", maxLength);
    }

    if (breakIndex < maxLength * 0.45) {
      breakIndex = maxLength;
    } else {
      breakIndex += 1;
    }

    chunks.push({
      type: "paragraph",
      text: remainingText.slice(0, breakIndex).trim()
    });
    remainingText = remainingText.slice(breakIndex).trim();
  }

  if (remainingText) {
    chunks.push({
      type: "paragraph",
      text: remainingText
    });
  }

  return chunks;
}

function getBlockWeight(block: DiaryContentBlock, isMobile: boolean) {
  if (block.type === "image") {
    const variant = block.variant ?? "standard";

    if (block.sideText && variant !== "wide") {
      // Side-text photos are deliberately narrower than standalone photos. Their
      // height is the larger of the photo column and text column, not their sum.
      const pairedPhotoWeight = {
        standard: isMobile ? 180 : 185,
        portrait: isMobile ? 212 : 220
      }[variant];
      const charactersPerLine = isMobile ? 12 : 14;
      const sideTextLines = Math.max(1, Math.ceil(block.sideText.length / charactersPerLine));
      const sideTextWeight = 10 + sideTextLines * (isMobile ? 26 : 32);

      return Math.max(pairedPhotoWeight, sideTextWeight);
    }

    const imageWeight = {
      // Includes the rendered image height and its vertical margins. Captions are
      // added below, so a photo that cannot fit is moved to the next paper.
      standard: isMobile ? 240 : 220,
      wide: isMobile ? 220 : 240,
      portrait: isMobile ? 292 : 270
    }[variant];

    return imageWeight + (block.caption ? IMAGE_CAPTION_WEIGHT : 0);
  }

  const charactersPerLine = isMobile ? 20 : 26;
  const lineCount = Math.max(1, Math.ceil(block.text.length / charactersPerLine));

  return 10 + lineCount * (isMobile ? 26 : 32);
}
