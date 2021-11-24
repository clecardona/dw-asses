import Logger from "./Logger";

export default function SorterNav({ display, setDisplay, setJobId }) {
  const links = [
    "start",
    "contact",
    "education",
    "certification & training",
    "work history",
    "additional info",
  ];

  //responsibilities => work history
  //accomplihments => work history

  //const responsibilities = display === "responsibilities";

  //Component
  const Links = links.map((item, index) => (
    <li className={display === item ? "active" : ""} key={index}>
      <button
        onClick={() => {
          setJobId(0);
          setDisplay(item);
        }}
      >
        <h3>{item}</h3>
      </button>
    </li>
  ));

  return (
    <>
      <ul className="sorter-nav">{Links}</ul>
      <Logger />
    </>
  );
}
