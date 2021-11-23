export default function Languages({ languages }) {
  const Languages = languages.map((item, index) => (
    <li key={index}>
      <h4>{item}</h4>
    </li>
  ));

  return (
    <div className="languages">
      <h2>Languages spoken</h2>
      <ul>{Languages}</ul>
    </div>
  );
}
