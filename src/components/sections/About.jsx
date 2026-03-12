import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-portrait ">
          <div className="portrait-frame">
            <img
              className="h-full object-cover"
              src="/images/headshot-cropped.webp"
              alt="oscar-headshot"
            />
          </div>
        </div>
        <div className="about-text">
          <div className="section-header">
            <span className="section-eyebrow">I. The Knight</span>
            <h2 className="section-title ">Of the Engineer</h2>
            <div
              className="section-rule "
              style={{ justifyContent: "flex-start" }}
            >
              <div className="section-rule-line"></div>
              <div className="section-rule-dot"></div>
            </div>
          </div>
          <p>
            A fullstack engineer with a keen eye for craft — equally at home
            architecting robust backends as shaping the interfaces through which
            people experience the world. With over <em>8 years</em> in the
            field, every project is approached as a problem worth solving well.
          </p>
          <p>
            The belief here is simple: technology should feel inevitable — as
            though it could not have been built any other way. That is the
            standard held for every line of code, every interface, every system
            designed.
          </p>
          <p className="block-quote">
            "The work is the proof. The code, the chronicle."
          </p>
        </div>
      </div>
    </section>
  );
}
