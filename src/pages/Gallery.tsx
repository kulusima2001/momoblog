import { PostCard } from "../components/PostCard";
import { TimeLine } from "../components/TimeLine";
import { project01 } from "../content/projects/project-01";
import { project02 } from "../content/projects/project-02";
import { project03 } from "../content/projects/project-03";
import { project04 } from "../content/projects/project-04";
import { project05 } from "../content/projects/project-05";
import { project06 } from "../content/projects/project-06";
import { timeline01 } from "../content/timelines";

const gallerySections = [
  {
    id: "section-01",
    description: "原作线 | 双花滑选手",
    title: "吹不动那红色的河",
    timeline: timeline01,
    items: [project03]
  },
  {
    id: "section-02",
    description: "师生if线 | 年差12岁 | 花滑选手 x 花滑教练",
    title: "气膜冰场的雨季",
    items: [project02, project06]
  },
  {
    id: "section-03",
    description: "台湾if线 | 台北滑女 x 台北女高",
    title: "金鱼悬浮",
    items: [project01]
  },
  {
    id: "section-04",
    description: "千禧年西海岸 | 唐人街中餐馆黑二代 x 双码农中产家庭二代",
    title: "金色时光",
    items: [project04]
  },
  {
    id: "section-05",
    description: "向哨pa",
    title: "来自新世界",
    items: [project05]
  },
];

const galleryHeaderVisualImage = "/momoblog/images/visualimage1.jpg";

export function Gallery() {
  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <div
          className="gallery-header-visual"
          style={{ backgroundImage: `url(${galleryHeaderVisualImage})` }}
          aria-hidden="true"
        />
        <p className="eyebrow">Story</p>
        <h1>故事</h1>
        <p>目前共有5条故事线。</p>
      </div>

      <div className="gallery-sections">
        {gallerySections.map((section) => (
          <section key={section.id} className="gallery-section">
            <div className="gallery-section-heading">
              <h2>{section.title}</h2>
                {/*<p>{section.description}</p>*/}

            </div>

            {section.timeline ? <TimeLine timeline={section.timeline} /> : null}

            <div className="story-grid">
              {section.items.map((project) => (
                <PostCard
                  key={project.id}
                  post={project}
                  imageClassName="story-card-image"
                  titleLevel={3}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
