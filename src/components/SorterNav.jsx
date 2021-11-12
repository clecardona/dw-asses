import React from "react";

export default function SorterNav({ display, setDisplay }) {
  const links = [
    "photo",
    "contact",
    "education",
    "certification & training",
    "work history",
    "additional info",
  ];
  console.log(display);
  //Component
  const Links = links.map((item, index) => (
    <li className={display === item ? "active" : ""} key={index}>
      <button onClick={() => setDisplay(item)}>
        <h3>{item}</h3>
      </button>
    </li>
  ));

  return <ul className="sorter-nav">{Links}</ul>;
}
