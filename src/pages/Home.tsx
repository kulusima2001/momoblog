import { PostCard } from "../components/PostCard";
import { projects } from "../content/projects";

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

const featuredProjects = projects.slice(0, 2);

export function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <p className="eyebrow">All about Camellia and Lily</p>
        <h1>有关于黎涵和李理的一切</h1>
        <p className="hero-description">一句话速通本站：有关于两位花样滑冰选手的一切。</p>
      </div>

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
        <h2>Gallery</h2>
        <span>{featuredProjects.length} 篇</span>
      </div>

      <div className="post-list">
        {featuredProjects.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
