export default function WorkHistory({ work_history }) {
  const WorkHistory = work_history.map((item, index) => {
    const Responsibilities = item.responsibilities.map((item, index) => (
      <li key={index}>
        <p>{item}</p>
      </li>
    ));
    const Accomplishments = item.accomplishments.map((item, index) => (
      <li key={index}>
        <p>{item}</p>
      </li>
    ));

    return (
      <li key={index}>
        <div className="heading1">
          <h3>{item.title}</h3>
          <h3>
            {item.from} - {item.to}
          </h3>
        </div>
        <h4 className="heading2">
          {item.company}, {item.city}, {item.country}
        </h4>
        <ul className="responsibilities">{Responsibilities}</ul>
        <ul className="accomplishments">{Accomplishments}</ul>
      </li>
    );
  });

  return (
    <div className="work-history">
      <h2>Professional Experience</h2>
      <ul className="work-history">{WorkHistory}</ul>
    </div>
  );
}
