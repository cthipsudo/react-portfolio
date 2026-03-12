import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-eyebrow">IV. The Raven</span>
        <h2 className="section-title">Send Word</h2>
        <div className="section-rule">
          <div className="section-rule-line rev"></div>
          <div className="section-rule-dot"></div>
          <div className="section-rule-line"></div>
        </div>
      </div>
      <p className="contact-verse">
        Whether you bring a new quest, a collaboration, or simply wish to speak
        of the craft — the fire is lit and the hall is open.
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
