import { Link } from "react-router-dom";
import { project01 } from "../content/projects/project-01";
import { project02 } from "../content/projects/project-02";
import { project03 } from "../content/projects/project-03";
import { project04 } from "../content/projects/project-04";
import { project05 } from "../content/projects/project-05";

const gallerySections = [
  {
    id: "section-01",
    description: "原作线 | 双花滑选手",
    title: "吹不动那红色的河",
    items: [project03]
  },
  {
    id: "section-02",
    description: "师生if线 | 年差12岁 | 花滑选手 x 花滑教练",
    title: "气膜冰场的雨季",
    items: [project02]
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
  }
];

export function Gallery() {
  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <p className="eyebrow">Gallery</p>
        <h1>故事</h1>
        <p>目前共有5条故事线。</p>
      </div>

      <div className="gallery-sections">
        {gallerySections.map((section) => (
          <section key={section.id} className="gallery-section">
            <div className="gallery-section-heading">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            <div className="story-grid">
              {section.items.map((project) => (
                <article key={project.id} className="story-card">
                  <Link to={`/projects/${project.slug}`} className="story-card-link">
                    <div className="story-card-image">
                      {project.thumbnailImage ? (
                        <img src={project.thumbnailImage} alt="" />
                      ) : (
                        <span>[Image placeholder]</span>
                      )}
                    </div>
                    <div className="story-card-copy">
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
