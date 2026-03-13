import "./Projects.css";
import Project from "./project";
import { useKnightMode } from "../context/KnightModeContext";
const data = [
  {
    questCompleted: true,
    name: "Direct Development",
    description: `A full-service higher education marketing agency — built on HubSpot, driven by data, and designed to help smaller schools outmaneuver the competition.`,
    tags: [
      { name: "HubSpot" },
      { name: "HubL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    link: `https://directdevelopment.com/`,
    imageURL: "/images/direct-development.png",
  },
  {
    questCompleted: true,
    name: "Bayada Education",
    description: `An accelerated nursing program bridging healthcare and academia — empowering the next generation of nurses to lead with compassion and clinical excellence.`,
    tags: [
      { name: "HubSpot" },
      { name: "HubL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    link: `https://bayadaeducation.org/`,
    imageURL: "/images/bayada-education.png",
  },
  {
    questCompleted: true,
    name: "Mercyworks",
    description: `A global missionary initiative bringing education, shelter, and healthcare to the world's most vulnerable children — one act of mercy at a time.`,
    tags: [
      { name: "HubSpot" },
      { name: "HubL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    link: `https://www.missionhurst.org/mercyworks`,
    imageURL: "/images/mercywork.png",
  },
  {
    questCompleted: true,
    name: "Drifting Between Silence and Stardust",
    description: `A full-stack creative web experience — crafted with a PERN stack and built for those who wander somewhere between the quiet and the cosmos.`,
    tags: [
      { name: "PostgreSQL" },
      { name: "Express" },
      { name: "React" },
      { name: "Node" },
    ],
    link: `https://dbss-client-3wvs7kmop.vercel.app/`,
    imageURL: "/images/dbss.png",
  },
  {
    questCompleted: false,
    name: "YelpCamp",
    description: `A community-driven campground review platform — explore, share, and discover the great outdoors one campsite at a time.`,
    tags: [
      { name: "MongoDB" },
      { name: "Express" },
      { name: "React" },
      { name: "Node" },
    ],
    link: `https://yelpcamp-pi-seven.vercel.app/`,
    imageURL: "/images/yelpcamp.png",
  },
];

export default function Projects() {
  const { knightMode, setKnightMode } = useKnightMode();
  return (
    <section id="quests">
      <div className="section-header">
        <span className="section-eyebrow knightSplit">
          {knightMode ? "III. The Quests" : "Experience"}
        </span>
        <h2 className="section-title knightSplit">
          {knightMode ? "Chronicles of Work" : "My Work and Projects"}
        </h2>
        <div className="section-rule">
          <div className="section-rule-line rev"></div>
          <div className="section-rule-dot"></div>
          <div className="section-rule-line"></div>
        </div>
      </div>
      <div className="quests-grid">
        {data.map((p, i) => (
          <Project key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
