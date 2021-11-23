export default function Certification({ certification }) {
  const Certification = certification.map((item, index) => (
    <li key={index} className="heading1">
      <div className="data">
        <h4>{item.domain} </h4>
      </div>
      <h4>
        Certificate {item.duration} year
        {Number.parseInt(item.duration) > 1 && "s"}
      </h4>
    </li>
  ));
  return <ul>{Certification}</ul>;
}
