//NPM Packages
import { useState, useEffect, FC } from "react";
import { NavLink } from "react-router-dom";
import reactDom from "react-dom";

//Local files

import burger from "assets/icns/burger.png";
import cross from "assets/icns/cross.png";

const HeaderMenu: FC = () => {
  // Local state
  const [open, setOpen] = useState(false);
  const links = ["Contact", "Education", "Certification", "Work History"];
  //Component
  const Links = links.map((item, index) => <li key={index}>{item}</li>);

  return reactDom.createPortal(
    <header>
      <div className={open ? "overlay" : "overlay overlay-invisible"} />
      <button className="icon" onClick={() => setOpen(!open)}>
        <img src={open ? cross : burger} alt="Menu" />
      </button>

      <div className={open ? "sidebar sidebar-open" : "sidebar"}>
        <ul>{Links}</ul>
      </div>
    </header>,
    //@ts-ignore
    document.getElementById("sidebar")
  );
};
export default HeaderMenu;
