import { useEffect, useState } from "react";
import { useKnightMode } from "../context/KnightModeContext";

import "./About.css";

const imgArr = [
  "images/headshot-cropped.webp",
  "images/oscar-bigfoot.webp",
  "images/oscar-drummer.webp",
  "images/oscar-monkey.webp",
  "images/oscar-smirk.webp",
  "images/oscar-squid.webp",
];

export default function About() {
  const [oscarHeadshot, setOscarHeadshot] = useState(
    "images/headshot-cropped.webp",
  );
  const { knightMode } = useKnightMode();
  useEffect(() => {
    async function loadPhoto() {
      const index = Math.floor(Math.random() * imgArr.length);
      const randPhoto = await imgArr[index];
      await setOscarHeadshot(randPhoto);
    }
    loadPhoto();
  }, []);
  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-portrait ">
          <div className="portrait-frame">
            <img
              className="h-full object-cover"
              src={oscarHeadshot}
              alt="oscar-random-headshot"
            />
          </div>
        </div>
        <div className="about-text">
          <div className="section-header">
            <span className="section-eyebrow knightSplit">
              {knightMode ? "I. The Knight" : "About me"}
            </span>
            <h2 className="section-title knightSplit">
              {knightMode ? "Of the Engineer" : "My Story"}
            </h2>
            <div className="section-rule about">
              <div className="section-rule hideDesktop">
                <div className="section-rule-line rev"></div>
                <div className="section-rule-dot"></div>
                <div className="section-rule-line"></div>
              </div>

              <div className="section-rule-line hideMobile"></div>
              <div className="section-rule-dot hideMobile"></div>
            </div>
          </div>
          <p>
            Originally from Amarillo, TX, I made the move to Boston in 2023 — a
            transition that sharpened both my craft and my sense of purpose.
            What started as building digital strategies on platforms like
            HubSpot and WordPress for marketing agencies has grown into a deeper
            pursuit: fullstack engineering with a keen eye for craft, equally at
            home architecting robust backends as shaping the interfaces through
            which people experience the world.
          </p>
          <p>
            The belief driving my work is simple — technology should feel
            inevitable, as though it could not have been built any other way.
            That is the standard I hold for every line of code, every interface,
            every system I design.
          </p>
          <p>
            Outside of work, I've found that same pursuit of excellence on the
            water. For the past two years, I've been an active member of the
            Ohana New England Dragon Boat team, training with the goal of
            contributing to our team's success at the upcoming Worlds Crew
            Championship. The determination that fuels my early mornings on the
            Charles River is the same that drives me to build applications that
            make a genuine difference in people's lives.
          </p>
          <p className="block-quote">
            "The work is the proof. The code, the chronicle."
          </p>
        </div>
      </div>
    </section>
  );
}
