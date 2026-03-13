import { useKnightMode } from "../context/KnightModeContext";

import "./Contact.css";

export default function Contact() {
  const { knightMode, setKnightMode } = useKnightMode();
  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-eyebrow knightSplit">
          {knightMode ? "IV. The Raven" : "Infomation"}
        </span>
        <h2 className="section-title knightSplit">
          {knightMode ? "Send Word" : "Contact"}
        </h2>
        <div className="section-rule">
          <div className="section-rule-line rev"></div>
          <div className="section-rule-dot"></div>
          <div className="section-rule-line"></div>
        </div>
      </div>
      <p className="contact-verse">
        {knightMode
          ? `Whether you bring a new quest, a collaboration, or simply wish to speak
        of the craft — the fire is lit and the hall is open.`
          : `Feel free to reach out if you are interested in discussing projects, collaborating, or if you'd like to connect.`}
      </p>
      <div className="contact-links">
        <a href="https://github.com/cthipsudo" className="contact-link">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/chanpasong-thipphakhinkeo/"
          className="contact-link"
        >
          LinkedIn
        </a>
        {/* <a href="#" className="contact-link">
          Read.cv
        </a> */}
      </div>
      <a
        href="mailto:oscar.thipphakhinkeo@gmail.com"
        className="contact-email"
        id="contact-email-link"
      >
        oscar.thipphakhinkeo&#64;gmail&#46;com
      </a>
    </section>
  );
}
