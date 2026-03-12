import "./Skills.css";
import Skill from "./Skill";

/*
Key: 
- Master-forged | Native
- Battle-tested | Professional
- Stone-hewn | Full
- Hardened | Experienced
- Swift & keen | Basic
*/

const skillData = [
  { icon: "⚡", name: "JS ES6", level: "Master-forged" },
  { icon: "🔷", name: "Typescript", level: "Stone-hewn" },
  { icon: "⚛️", name: "React", level: "Stone-hewn" },
  { icon: "💲", name: "jQuery", level: "Battle-tested" },
  { icon: "🏗️", name: "HTML5", level: "Master-forged" },
  { icon: "🎨", name: "CSS3", level: "Battle-Tested" },
  { icon: "📄", name: "EJS", level: "Hardened" },
  { icon: "🔶", name: "HubL", level: "Battle-tested" },
  { icon: "🖼️", name: "Adobe Photoshop", level: "Battle-tested" },
  { icon: "🫛", name: "PhotoPea", level: "Battle-tested" },
  { icon: "🎭", name: "Figma", level: "Stone-hewn" },
  { icon: "🟢", name: "NodeJS", level: "Battle-tested" },
  { icon: "🐘", name: "PostgreSQL", level: "Hardened" },
  { icon: "🚂", name: "Express", level: "Stone-hewn" },
  { icon: "☕", name: "Java", level: "Stone-hewn" },
  { icon: "🍃", name: "MongoDB", level: "Hardened" },
  { icon: "🔗", name: "Mongoose", level: "Hardened" },
  { icon: "🌿", name: "Git", level: "Stone-hewn" },
  { icon: "🐙", name: "Github", level: "Stone-hewn" },
  { icon: "🟠", name: "HubSpot", level: "Battle-tested" },
  { icon: "☁️", name: "Cloudinary", level: "Hardened" },
  { icon: "🔌", name: "Restful APIs", level: "Hardened" },
  { icon: "🧪", name: "Unit Testing", level: "Hardened" },
  { icon: "🔬", name: "Integration Testing", level: "Hardened" },
];
export default function Skills() {
  return (
    <section id="armoury">
      <div className="section-header">
        <span className="section-eyebrow">II. The Armoury</span>
        <h2 className="section-title">Weapons of the Craft</h2>
        <div className="section-rule">
          <div className="section-rule-line rev"></div>
          <div className="section-rule-dot"></div>
          <div className="section-rule-line"></div>
        </div>
      </div>
      <div className="armoury-grid">
        {skillData.map((s, i) => (
          <Skill key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
