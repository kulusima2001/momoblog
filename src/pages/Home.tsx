import { useState } from "react";
import { PostCard } from "../components/PostCard";
import { projects } from "../content/projects";
import {project01} from "../content/projects/project-01";
import {project02} from "../content/projects/project-02";
import {project03} from "../content/projects/project-03";
import {project04} from "../content/projects/project-04";
import {project05} from "../content/projects/project-05";
import {project06} from "../content/projects/project-06";
import "../styles/home-collage.css";

const characterProfiles = [
  {
    id: "character-left",
    avatar: "/momoblog/images/Camellia.jpg",
    title: "黎涵",
    description: "1999/11/07 INFJ",
    note: "3岁由母亲启蒙学习花滑，13岁转组北京某俱乐部，同年开始其国际赛生涯。" +
        "17岁奥运赛季升组，在成年组征战五个赛季并参加两次冬奥会后，于22岁春天退役。" +
        "退役后如愿成为教练，在原俱乐部教小朋友滑冰。自童年时期起，即便日常生活满地鸡毛但总怀有对冰面最炽热的爱，坚定选择冰面的人。" +
        "单亲家庭长大，亲缘观念淡薄，自幼时起就很独立，对滑冰之外的一切持无所谓态度。" +
        "实际上热爱滑冰是因为只有冰上的一切是她能够掌控的，在经历了冬奥失利和姥姥去世的双重打击后重新审视自我，尝试在冰面以外的世界寻找新的锚点。",
    avatarSide: "left"
  },
  {
    id: "character-right",
    avatar: "/momoblog/images/Lily.jpg",
    title: "李理",
    description: "2000/04/01 INTJ",
    note: "7岁开始接触花滑，师从北京某不知名教练，13岁开始其国际赛生涯。" +
        "17岁奥运赛季升组，同赛季世锦赛短节目受伤退赛，赛季结束后因病退役。" +
        "退役后升学攻读某工科专业，毕业后从事与花样滑冰毫无关联的工作。" +
        "起步较晚且幼年时期天赋并不出众，曾考虑过放弃滑冰，14岁外训稳定高级三三并跳出3A后势如破竹，逐渐能登上领奖台。" +
        "家庭幸福极度自洽的淡人，做什么都要努力做到最好的野心家。对滑冰的态度是如果不能拿到金牌就没有滑下去的必要。" +
        "因病退役后远离冰面，认为人生道路不只有滑冰这一条。精神状态极其稳定，是仍站在赛场上的恋人最稳定的精神支柱。",
    avatarSide: "right"
  }
] as const;
const dialogueQuotes = [
  {
    id: "dialogue-01",
    lines: [
      {
        speaker: "黎涵",
        line: "欢迎来到我们的网站！",
        avatar: "/momoblog/images/Camellia_face.jpg"
      },
      {
        speaker: "李理",
        line: "让我们来为你介绍一下网站的功能。",
        avatar: "/momoblog/images/Lily_face.jpg"
      }
    ]
  },
  {
    id: "dialogue-02",
    lines: [
      {
        speaker: "黎涵",
        line: "目前你所在的地方是网站首页，在这里，你可以看到我和李理的简介，最新更新的文章推荐，还有我们的照片集合。",
        avatar: "/momoblog/images/Camellia_face.jpg"
      },
      {
        speaker: "李理",
        line: "点击顶部导航栏中的Story，可以看到更多有趣内容。",
        avatar: "/momoblog/images/Lily_face.jpg"
      }
    ]
  },
  {
    id: "dialogue-03",
    lines: [
      {
        speaker: "黎涵",
        line: "Story里有不同的故事线，可以解锁更多故事哦。",
        avatar: "/momoblog/images/Camellia_face.jpg"
      },
      {
        speaker: "李理",
        line: "不要忘记点击各种按钮，会有意想不到的发现。",
        avatar: "/momoblog/images/Lily_face.jpg"
      }
    ]
  },
  {
    id: "dialogue-04",
    lines: [
      {
        speaker: "黎涵",
        line: "那么请自由探索我们的故事吧！",
        avatar: "/momoblog/images/Camellia_face.jpg"
      },
      {
        speaker: "李理",
        line: "Enjoy, please.",
        avatar: "/momoblog/images/Lily_face.jpg"
      }
    ]
  }
] as const;
const dialogueStatuses = [
  ["热心导游", "认真营业"],
  ["首页播报", "贴心提示"],
  ["故事解锁", "按钮侦察"],
  ["自由探索", "安静守候"]
] as const;
const featuredProjects = [project03, project01];
const heroVisualImage = "/momoblog/images/visualimage1.jpg";
const homeCollageItems = [
  {
    id: "collage-01",
    image: "/momoblog/images/gallery/gallery01.jpg",
    text: "First met at the age of eight, the rabbit became the beginning of the story.",
    size: "large"
  },
  {
    id: "collage-02",
    image: "/momoblog/images/gallery/gallery02.jpg",
    text: "Rain, in your black eyes.",
    size: "wide"
  },
  {
    id: "collage-03",
    image: "/momoblog/images/gallery/gallery03.jpg",
    text: "在松花江上。",
    size: "small"
  },
  {
    id: "collage-04",
    image: "/momoblog/images/gallery/gallery04.jpg",
    text: "To JGPF in Tokyo.",
    size: "tall"
  },
  {
    id: "collage-05",
    image: "/momoblog/images/gallery/gallery05.jpg",
    text: "Three, two, one... Say cheese !",
    size: "small"
  },
  {
    id: "collage-06",
    image: "/momoblog/images/gallery/gallery06.jpg",
    text: "Bluebird, bluebird...",
    size: "medium"
  },
  {
    id: "collage-07",
    image: "/momoblog/images/gallery/gallery07.jpg",
    text: "Make a wish and go to Hawaii !",
    size: "wide"
  },
  {
    id: "collage-08",
    image: "/momoblog/images/gallery/gallery08.jpg",
    text: "Back in Moscow, weathered posters whispered of days long gone.",
    size: "small"
  }
] as const;

export function Home() {
  const [dialogueIndexes, setDialogueIndexes] = useState([0, 0]);
  const activeDialogueLines = dialogueIndexes.map(
    (quoteIndex, lineIndex) => dialogueQuotes[quoteIndex].lines[lineIndex]
  );

  const showNextDialogueLine = (lineIndex: number) => {
    setDialogueIndexes((currentIndexes) =>
      currentIndexes.map((currentIndex, currentLineIndex) =>
        currentLineIndex === lineIndex ? (currentIndex + 1) % dialogueQuotes.length : currentIndex
      )
    );
  };

  return (
    <section className="home-page">
      <div className="hero">
        <div
          className="hero-visual"
          style={{ backgroundImage: `url(${heroVisualImage})` }}
          aria-hidden="true"
        />
        <p className="eyebrow">All about Camellia and Lily</p>
        <h1>有关于黎涵和李理的一切</h1>
        <p className="hero-description">一句话速通本站：有关于两位花样滑冰选手的一切。</p>
      </div>

      <section className="character-lines" aria-labelledby="character-lines-title">
        <div className="character-lines-spacer" />

        <div className="dialogue-panel">
          {activeDialogueLines.map((dialogueLine, lineIndex) => (
            <article
              className={`dialogue-card dialogue-card-${lineIndex === 0 ? "right" : "left"}`}
              key={dialogueLine.speaker}
            >
              <button
                className="dialogue-avatar-button"
                type="button"
                onClick={() => showNextDialogueLine(lineIndex)}
                aria-label={`切换${dialogueLine.speaker}台词`}
              >
                <img className="dialogue-avatar" src={dialogueLine.avatar} alt="" />
              </button>
              <div className="dialogue-copy" key={`${dialogueLine.speaker}-${dialogueIndexes[lineIndex]}`}>
                <div className="dialogue-name-row">
                  <h3>{dialogueLine.speaker}</h3>
                  <span className="dialogue-status">
                    {dialogueStatuses[dialogueIndexes[lineIndex]][lineIndex]}
                  </span>
                </div>
                <p>{dialogueLine.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="character-intro" aria-label="[Character intro placeholder]">
        {characterProfiles.map((profile) => (
          <article
            key={profile.id}
            className={`character-card character-card-${profile.avatarSide}`}
          >
            <div className="character-identity">
              <div className="character-avatar">
                {profile.avatar ? <img src={profile.avatar} alt="" /> : <span>[Avatar]</span>}
              </div>
              <div className="character-summary">
                <h2>{profile.title}</h2>
                <p>{profile.description}</p>
              </div>
            </div>
            <div className="character-note">{profile.note}</div>
          </article>
        ))}
      </section>

      <div className="section-heading">
        <h2>Recommendation</h2>
        <span>{featuredProjects.length} 篇</span>
      </div>

      <div className="post-list">
        {featuredProjects.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <section className="home-collage" aria-labelledby="home-collage-title">
        <div className="section-heading home-collage-heading">
          <h2 id="home-collage-title">Photo book</h2>
          <span>{homeCollageItems.length} 张</span>
        </div>

        <div className="home-collage-grid">
          {homeCollageItems.map((item) => (
            <article
              className={`home-collage-card home-collage-card-${item.size}`}
              key={item.id}
            >
              <div className="home-collage-image">
                <img src={item.image} alt="" />
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
