export default function Highlights({ highlights }) {
  const Highlights = highlights.map((item, index) => (
    <li key={index}>
      <p>{item}</p>
    </li>
  ));

  return (
    <div className="highlights">
      <h2>Career Highlights</h2>
      <ul>{Highlights}</ul>
    </div>
  );
}
