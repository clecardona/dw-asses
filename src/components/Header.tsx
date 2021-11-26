//NPM Packages
import { FC } from "react";
//Local Files
import links from "assets/nav/links.json";

const Header: FC = () => {
  const Links = links.map((item, index) => (
    <div className="nav-item" key={index}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <h3>{item.name}</h3>
      </a>
    </div>
  ));
  return (
    <header>
      <h2>DANIEL WELLINGTON</h2>
      <nav>{Links}</nav>
    </header>
  );
};
export default Header;
