//NPM Packages
import { useState, FC } from "react";
import reactDom from "react-dom";

//Local files

import burger from "assets/icns/burger.png";
import cross from "assets/icns/cross.png";
import SorterNav from "components/SorterNav";

interface IProps {
  setDisplay(): void;
  display: string;
}

const Header: FC<IProps> = ({ display, setDisplay }) => {
  // Local state
  const [open, setOpen] = useState(false);

  return reactDom.createPortal(
    <header>
      <div className={open ? "overlay" : "overlay overlay-invisible"} />
      <button className="icon" onClick={() => setOpen(!open)}>
        <img src={open ? cross : burger} alt="Menu" />
      </button>

      <div className={open ? "sidebar sidebar-open" : "sidebar"}>
        <SorterNav display={display} setDisplay={setDisplay} />
      </div>
    </header>,
    //@ts-ignore
    document.getElementById("sidebar")
  );
};
export default Header;
