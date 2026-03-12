import ProjectTag from "./ProjectTag";

export default function Project({
  questCompleted,
  name,
  description,
  tags,
  link,
}) {
  console.log(tags);
  return (
    <div className="quest-card">
      <div className="quest-card-top">
        <span className="quest-glyph">🌿</span>
      </div>
      <div className="quest-card-body">
        <span className="quest-status">
          ✦ {questCompleted ? "Completed" : "Ongoing"} Quest
        </span>
        <h3 className="quest-name">{name}</h3>
        <p className="quest-desc">{description}</p>
        <div className="quest-stack">
          {tags.map((t, i) => (
            <ProjectTag key={i} name={t.name} />
          ))}
        </div>
        <a href={link} className="quest-link">
          Visit the Chronicle →
        </a>
      </div>
    </div>
  );
}
