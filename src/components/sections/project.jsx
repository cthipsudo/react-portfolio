import { useKnightMode } from "../context/KnightModeContext";
import ProjectTag from "./ProjectTag";

export default function Project({
  questCompleted,
  name,
  description,
  tags,
  link,
  imageURL,
}) {
  const { knightMode, setKnightMode } = useKnightMode();
  // console.log(tags);
  return (
    <div className="quest-card">
      <div className="quest-card-top">
        {imageURL ? (
          <img src={imageURL} alt="project-image" />
        ) : (
          <span className="quest-glyph">🌿</span>
        )}
      </div>
      <div className="quest-card-body">
        <span className="quest-status">
          ✦ {questCompleted ? "Completed" : "Ongoing"}
          {knightMode ? " Quest" : " Project"}
        </span>
        <h3 className="quest-name">{name}</h3>
        <p className="quest-desc">{description}</p>
        <div className="quest-stack">
          {tags.map((t, i) => (
            <ProjectTag key={i} name={t.name} />
          ))}
        </div>
        <a href={link} className="quest-link">
          Visit the {knightMode ? "Chronicle" : "Site"} →
        </a>
      </div>
    </div>
  );
}
