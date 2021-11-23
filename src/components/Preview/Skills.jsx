export default function Skills({ skills }) {
  const Skills = skills.map((item, index) => (
    <li key={index}>
      <h4>{item}</h4>
    </li>
  ));
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>{Skills}</ul>
    </div>
  );
}
