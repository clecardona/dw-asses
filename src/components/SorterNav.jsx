import React from "react";

export default function SorterNav({ setDisplay }) {
  const links = [
    "photo",
    "contact",
    "education",
    "certification & training",
    "work history",
    "additional info",
  ];
  //Component
  const Links = links.map((item, index) => (
    <li key={index}>
      <button onClick={() => setDisplay(item)}>
        <h3>{item}</h3>
      </button>
    </li>
  ));

  return <ul className="sorter-nav">{Links}</ul>;
}
