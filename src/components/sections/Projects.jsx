import "./Projects.css";
import Project from "./project";
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
    imageURL: "",
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
    imageURL: "",
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
    imageURL: "",
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
    link: `https://dbss-client.vercel.app/`,
    imageURL: "",
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
    imageURL: "",
  },
];

export default function Projects() {
  return (
    <section id="quests">
      <div className="section-header">
        <span className="section-eyebrow">III. The Quests</span>
        <h2 className="section-title">Chronicles of Work</h2>
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
        {/* <div className="quest-card">
          <div className="quest-card-top">
            <span className="quest-glyph">⚔</span>
          </div>
          <div className="quest-card-body">
            <span className="quest-status">✦ Completed Quest</span>
            <h3 className="quest-name">Project Longbow</h3>
            <p className="quest-desc">
              A real-time analytics platform handling millions of events daily —
              built for precision, speed, and resilience under siege.
            </p>
            <div className="quest-stack">
              <span className="quest-tag">Next.js</span>
              <span className="quest-tag">Node</span>
              <span className="quest-tag">Kafka</span>
              <span className="quest-tag">PostgreSQL</span>
            </div>
            <a href="#" className="quest-link">
              Read the Chronicle →
            </a>
          </div>
        </div>
        <div className="quest-card">
          <div className="quest-card-top">
            <span className="quest-glyph">🏰</span>
          </div>
          <div className="quest-card-body">
            <span className="quest-status">✦ Completed Quest</span>
            <h3 className="quest-name">The Citadel</h3>
            <p className="quest-desc">
              A multi-tenant SaaS platform with fine-grained role-based access —
              a fortified architecture built to scale without compromise.
            </p>
            <div className="quest-stack">
              <span className="quest-tag">React</span>
              <span className="quest-tag">GraphQL</span>
              <span className="quest-tag">AWS</span>
              <span className="quest-tag">Redis</span>
            </div>
            <a href="#" className="quest-link">
              Read the Chronicle →
            </a>
          </div>
        </div>
        <div className="quest-card">
          <div className="quest-card-top">
            <span className="quest-glyph">🌿</span>
          </div>
          <div className="quest-card-body">
            <span className="quest-status">✦ Ongoing Quest</span>
            <h3 className="quest-name">The Green Road</h3>
            <p className="quest-desc">
              An open-source developer toolchain — built in the open, for the
              craft. A contribution to those who follow the same road.
            </p>
            <div className="quest-stack">
              <span className="quest-tag">TypeScript</span>
              <span className="quest-tag">Docker</span>
              <span className="quest-tag">GitHub Actions</span>
            </div>
            <a href="#" className="quest-link">
              Read the Chronicle →
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
