import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="h-dvh">
      <div className="hero-content">
        <p className="hero-eyebrow" id="hero-eyebrow">
          Software Engineer · Part-Time Adventurer
        </p>
        <h1 className="hero-name" id="hero-name">
          Chanpasong Thipphakhinkeo
        </h1>
        <p className="hero-title" id="hero-title">
          Front-End Architect. Storyteller through code.
        </p>
        <div className="ornament" id="hero-ornament">
          <div className="ornament-line"></div>
          <div className="ornament-diamond"></div>
          <div className="ornament-line"></div>
        </div>
        <a href="#about" className="hero-cta" id="hero-cta">
          Begin his Chronicle
        </a>
      </div>
      <div className="scroll-hint" id="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
