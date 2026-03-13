import "./Skills.css";
import Skill from "./Skill";
import { useKnightMode } from "../context/KnightModeContext";

/*
Key: 
- Master-forged | Native
- Battle-tested | Professional
- Stone-hewn | Full
- Hardened | Experienced
- Swift & keen | Basic
*/
const skillData = [
  { icon: "⚡", name: "JS ES6", level: "Native" },
  { icon: "🔷", name: "Typescript", level: "Full" },
  { icon: "⚛️", name: "React", level: "Full" },
  { icon: "💲", name: "jQuery", level: "Professional" },
  { icon: "🏗️", name: "HTML5", level: "Native" },
  { icon: "🎨", name: "CSS3", level: "Professional" },
  { icon: "📄", name: "EJS", level: "Experienced" },
  { icon: "🔶", name: "HubL", level: "Professional" },
  { icon: "🖼️", name: "Adobe Photoshop", level: "Professional" },
  { icon: "🫛", name: "PhotoPea", level: "Professional" },
  { icon: "🎭", name: "Figma", level: "Full" },
  { icon: "🟢", name: "NodeJS", level: "Professional" },
  { icon: "🐘", name: "PostgreSQL", level: "Experienced" },
  { icon: "🚂", name: "Express", level: "Full" },
  { icon: "☕", name: "Java", level: "Full" },
  { icon: "🍃", name: "MongoDB", level: "Experienced" },
  { icon: "🔗", name: "Mongoose", level: "Experienced" },
  { icon: "🌿", name: "Git", level: "Full" },
  { icon: "🐙", name: "Github", level: "Full" },
  { icon: "🟠", name: "HubSpot", level: "Professional" },
  { icon: "☁️", name: "Cloudinary", level: "Experienced" },
  { icon: "🔌", name: "Restful APIs", level: "Experienced" },
  { icon: "🧪", name: "Unit Testing", level: "Experienced" },
  { icon: "🔬", name: "Integration Testing", level: "Experienced" },
];
const knightedSkillData = [
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
  const { knightMode, setKnightMode } = useKnightMode();
  return (
    <section id="armoury">
      <div className="section-header">
        <span className="section-eyebrow knightSplit">
          {knightMode ? "II. The Armoury" : "Proficiencies"}
        </span>
        <h2 className="section-title knightSplit">
          {knightMode ? "Weapons of the Craft" : "Skills and Tools"}
        </h2>
        <div className="section-rule">
          <div className="section-rule-line rev"></div>
          <div className="section-rule-dot"></div>
          <div className="section-rule-line"></div>
        </div>
      </div>
      <div className="armoury-grid">
        {knightMode
          ? knightedSkillData.map((s, i) => <Skill key={i} {...s} />)
          : skillData.map((s, i) => <Skill key={i} {...s} />)}
      </div>
    </section>
  );
}
