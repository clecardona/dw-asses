export default function Education({ education }) {
  const Education = education.map((item, index) => (
    <li key={index} className="heading1">
      <div className="data">
        <h4>
          {item.school} - {item.program}
        </h4>
      </div>
      <h4>
        Degree {item.duration} year
        {Number.parseInt(item.duration) > 1 && "s"}
      </h4>
    </li>
  ));
  return <ul>{Education}</ul>;
}
