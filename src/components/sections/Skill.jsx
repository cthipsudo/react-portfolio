export default function Skill({ icon, name, level }) {
  return (
    <div className="weapon-card">
      <span className="weapon-icon">{icon}</span>
      <span className="weapon-name">{name}</span>
      <span className="weapon-tier knightSplit">{level}</span>
    </div>
  );
}
