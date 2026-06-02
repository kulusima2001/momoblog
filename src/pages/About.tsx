const momoPhoto = "/momoblog/images/momoimage.jpg";

export function About() {
  return (
    <section className="content-page">
      <div className="about-avatar" aria-label="Momo photo">
        {momoPhoto ? <img src={momoPhoto} alt="" /> : <span>[Photo]</span>}
      </div>
      <p className="eyebrow">About Momo</p>
      <p>一个自娱自乐的文手、oc妈。</p>
      <p>两只黑毛盘头妹饲养员。</p>
    </section>
  );
}
