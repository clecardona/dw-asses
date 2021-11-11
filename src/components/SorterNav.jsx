import React from "react";

export default function SorterNav({ setDisplay }) {
  const links = [
    "photo",
    "contact",
    "education",
    "certification",
    "work history",
  ];
  //Component
  const Links = links.map((item, index) => (
    <li key={index}>
      {" "}
      <button onClick={() => setDisplay(item)}>{item}</button>
    </li>
  ));

  return <ul>{Links}</ul>;
}
